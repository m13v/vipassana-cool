import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getActiveMatchesWithCalendar, updateMatchRsvp, updateMatchStatus } from "@/lib/db";
import { getAccessToken } from "@/lib/google-meet";

type RsvpChange = {
  nameA: string;
  nameB: string;
  oldA: string;
  newA: string;
  oldB: string;
  newB: string;
  autoEnded: boolean;
};

/**
 * Cron: Check Google Calendar RSVP status for active matches.
 * Updates calendar_rsvp_a / calendar_rsvp_b on each match.
 * If both declined, auto-ends the match.
 * Sends admin notification email on any RSVP changes.
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
  const rsvpChanges: RsvpChange[] = [];

  for (const match of matches) {
    try {
      const res = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/primary/events/${match.calendar_event_id}`,
        { headers: { Authorization: `Bearer ${accessToken}` } },
      );

      if (!res.ok) {
        if (res.status === 404) {
          if (match.calendar_rsvp_a !== "eventDeleted") {
            await updateMatchRsvp(match.id, "eventDeleted", "eventDeleted");
            rsvpChanges.push({
              nameA: match.person_a_email, nameB: match.person_b_email,
              oldA: match.calendar_rsvp_a || "needsAction", newA: "eventDeleted",
              oldB: match.calendar_rsvp_b || "needsAction", newB: "eventDeleted",
              autoEnded: false,
            });
            updated++;
          }
          continue;
        }
        errors.push({ matchId: match.id, error: `API ${res.status}` });
        continue;
      }

      const event = await res.json();
      const attendees: { email: string; responseStatus: string }[] = event.attendees || [];

      const rsvpA = attendees.find((a) => a.email === match.person_a_email)?.responseStatus || "needsAction";
      const rsvpB = attendees.find((a) => a.email === match.person_b_email)?.responseStatus || "needsAction";

      const changed = rsvpA !== match.calendar_rsvp_a || rsvpB !== match.calendar_rsvp_b;

      if (changed) {
        await updateMatchRsvp(match.id, rsvpA, rsvpB);
        updated++;
      }

      // If either person declined the calendar invite, auto-end the match
      let autoEnded = false;
      if (rsvpA === "declined" || rsvpB === "declined") {
        await updateMatchStatus(match.id, "ended", "cron");
        ended++;
        autoEnded = true;
      }

      if (changed) {
        rsvpChanges.push({
          nameA: match.person_a_email, nameB: match.person_b_email,
          oldA: match.calendar_rsvp_a || "needsAction", newA: rsvpA,
          oldB: match.calendar_rsvp_b || "needsAction", newB: rsvpB,
          autoEnded,
        });
      }
    } catch (err) {
      errors.push({ matchId: match.id, error: String(err) });
    }
  }

  // Send admin notification if any RSVP changed
  if (rsvpChanges.length > 0) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const changeRows = rsvpChanges.map((c) => {
        const flag = (status: string) =>
          status === "accepted" ? "&#9989;" : status === "declined" ? "&#10060;" : status === "tentative" ? "&#10067;" : "&#8987;";
        return `<tr>
          <td>${c.nameA}</td>
          <td>${flag(c.oldA)} ${c.oldA} &rarr; ${flag(c.newA)} <strong>${c.newA}</strong></td>
          <td>${c.nameB}</td>
          <td>${flag(c.oldB)} ${c.oldB} &rarr; ${flag(c.newB)} <strong>${c.newB}</strong></td>
          <td>${c.autoEnded ? "<strong style='color:red'>Auto-ended</strong>" : ""}</td>
        </tr>`;
      }).join("");

      await resend.emails.send({
        from: "Vipassana.cool <hello@vipassana.cool>",
        to: ["i@m13v.com"],
        subject: `Calendar RSVP update: ${rsvpChanges.length} match${rsvpChanges.length !== 1 ? "es" : ""} changed${ended > 0 ? ` (${ended} auto-ended)` : ""}`,
        html: `
          <p>RSVP status changed for ${rsvpChanges.length} match${rsvpChanges.length !== 1 ? "es" : ""}.</p>
          <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse">
            <tr><th>Person A</th><th>RSVP A</th><th>Person B</th><th>RSVP B</th><th>Action</th></tr>
            ${changeRows}
          </table>
          <p><a href="https://vipassana.cool/admin/matching">View dashboard</a></p>
        `,
      });
    } catch { /* non-critical */ }
  }

  return NextResponse.json({
    success: true,
    checked: matches.length,
    updated,
    ended,
    rsvpChanges: rsvpChanges.length,
    errors: errors.length > 0 ? errors : undefined,
  });
}
