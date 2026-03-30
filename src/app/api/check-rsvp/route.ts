import { NextRequest, NextResponse } from "next/server";
import { getActiveMatchesWithCalendar, updateMatchRsvp, updateMatchStatus } from "@/lib/db";
import { getAccessToken } from "@/lib/google-meet";

/**
 * Cron: Check Google Calendar RSVP status for active matches.
 * Updates calendar_rsvp_a / calendar_rsvp_b on each match.
 * If both declined, auto-ends the match.
 */
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const matches = await getActiveMatchesWithCalendar();
  if (matches.length === 0) {
    return NextResponse.json({ success: true, checked: 0, updated: 0 });
  }

  let accessToken: string;
  try {
    accessToken = await getAccessToken();
  } catch (err) {
    return NextResponse.json({ error: `Token refresh failed: ${String(err)}` }, { status: 500 });
  }

  let updated = 0;
  let ended = 0;
  const errors: { matchId: string; error: string }[] = [];

  for (const match of matches) {
    try {
      const res = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/primary/events/${match.calendar_event_id}`,
        { headers: { Authorization: `Bearer ${accessToken}` } },
      );

      if (!res.ok) {
        if (res.status === 404) {
          // Event was deleted — clear the calendar_event_id
          await updateMatchRsvp(match.id, "eventDeleted", "eventDeleted");
          updated++;
          continue;
        }
        errors.push({ matchId: match.id, error: `API ${res.status}` });
        continue;
      }

      const event = await res.json();
      const attendees: { email: string; responseStatus: string }[] = event.attendees || [];

      const rsvpA = attendees.find((a) => a.email === match.person_a_email)?.responseStatus || "needsAction";
      const rsvpB = attendees.find((a) => a.email === match.person_b_email)?.responseStatus || "needsAction";

      // Only write if changed
      if (rsvpA !== match.calendar_rsvp_a || rsvpB !== match.calendar_rsvp_b) {
        await updateMatchRsvp(match.id, rsvpA, rsvpB);
        updated++;
      }

      // If both declined the calendar invite, auto-end the match
      if (rsvpA === "declined" && rsvpB === "declined") {
        await updateMatchStatus(match.id, "ended", "cron");
        ended++;
      }
    } catch (err) {
      errors.push({ matchId: match.id, error: String(err) });
    }
  }

  return NextResponse.json({
    success: true,
    checked: matches.length,
    updated,
    ended,
    errors: errors.length > 0 ? errors : undefined,
  });
}
