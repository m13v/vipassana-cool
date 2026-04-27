import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { neon } from "@neondatabase/serverless";
import {
  getMatchByToken,
  getEntry,
  confirmMatchPerson,
  updateMatchStatus,
  updateEntryStatus,
  declineMatch,
  updateMatchCalendarEvent,
  updateMatchSuggestedUtc,
} from "@/lib/db";
import { buildIntroEmailHtml, buildIntroSubject, getSessionLocalTime, buildUnsubscribeUrl, computeSuggestedMeetUtcMinutes, utcMinutesToHHMM } from "@/lib/emails";
import type { MeetLinkInfo, SessionContext } from "@/lib/emails";
import { createMeetEvent } from "@/lib/google-meet";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://vipassana.cool";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  const response = request.nextUrl.searchParams.get("response");

  if (!token || (response !== "yes" && response !== "no")) {
    return NextResponse.redirect(new URL("/match-confirmed?response=error", BASE_URL));
  }

  const match = await getMatchByToken(token);
  if (!match || match.status !== "confirming") {
    return NextResponse.redirect(new URL("/match-confirmed?response=error", BASE_URL));
  }

  const isA = match.person_a_token === token;
  const side = isA ? "a" : "b";
  const confirmerId = isA ? match.person_a_id : match.person_b_id;

  if (response === "no") {
    await declineMatch(match.id, confirmerId);
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const personA = await getEntry(match.person_a_id);
      const personB = await getEntry(match.person_b_id);
      const decliner = isA ? personA : personB;
      await resend.emails.send({
        from: "Vipassana.cool <hello@vipassana.cool>",
        to: ["i@m13v.com"],
        subject: `Match declined by ${decliner?.name || "someone"}`,
        html: `<p><strong>${decliner?.name}</strong> (${decliner?.email}) declined their match with ${isA ? personB?.name : personA?.name}.</p><p>Both are back on the waitlist. <a href="https://vipassana.cool/admin/matching">View dashboard →</a></p>`,
      });
    } catch { /* non-critical */ }
    return NextResponse.redirect(new URL("/match-confirmed?response=no", BASE_URL));
  }

  // response === "yes" — mark this person as engaged
  await updateEntryStatus(confirmerId, "engaged", "user_click", match.id, "clicked yes on confirmation");

  const { bothConfirmed } = await confirmMatchPerson(match.id, side);

  if (bothConfirmed) {
    const personA = await getEntry(match.person_a_id);
    const personB = await getEntry(match.person_b_id);
    if (personA && personB) {
      const sql = neon(process.env.DATABASE_URL!);
      const resend = new Resend(process.env.RESEND_API_KEY);
      const nameA = personA.name?.split(/\s+/)[0] || "A";
      const nameB = personB.name?.split(/\s+/)[0] || "B";

      // Determine the best overlapping UTC time for the Meet event
      const suggestedMins = computeSuggestedMeetUtcMinutes(personA, personB);
      const bestUtcTime = suggestedMins != null ? utcMinutesToHHMM(suggestedMins) : "06:00";
      const duration = parseDurationMinutes(personA.session_duration, personB.session_duration);

      // Create Google Meet link — required before sending intro email
      let meetUrl: string;
      let eventId: string;
      try {
        const slug = `${nameA}-${nameB}`.toLowerCase().replace(/[^a-z0-9-]/g, "");
        const result = await createMeetEvent(
          `Vipassana Practice Buddy – ${nameA} & ${nameB}`,
          bestUtcTime,
          duration,
          slug,
          [personA.email, personB.email],
        );
        meetUrl = result.meetUrl;
        eventId = result.eventId;
      } catch (err) {
        // Meet creation failed — don't send intro, keep match in confirming state,
        // notify admin to handle manually
        console.error("Failed to create Meet event:", err);
        try {
          await resend.emails.send({
            from: "Vipassana.cool <hello@vipassana.cool>",
            to: ["i@m13v.com"],
            subject: `ALERT: Meet creation failed for ${nameA} & ${nameB}`,
            html: `<p>Both confirmed but Google Meet creation failed. The match is still in <code>confirming</code> state — intro email was NOT sent.</p><p><strong>Error:</strong> ${String(err)}</p><p><strong>Action needed:</strong> Create a Meet link manually and send the intro email.</p><p><a href="https://vipassana.cool/admin/matching">View dashboard →</a></p>`,
          });
        } catch { /* non-critical */ }
        // Redirect user to success page — from their perspective they confirmed OK
        return NextResponse.redirect(new URL("/match-confirmed?response=yes", BASE_URL));
      }

      // Create per-person tracking links
      const tokenA = crypto.randomUUID();
      const tokenB = crypto.randomUUID();
      await sql`INSERT INTO meet_links (id, token, match_id, person_id, meet_url) VALUES (${crypto.randomUUID()}, ${tokenA}, ${match.id}, ${personA.id}, ${meetUrl})`;
      await sql`INSERT INTO meet_links (id, token, match_id, person_id, meet_url) VALUES (${crypto.randomUUID()}, ${tokenB}, ${match.id}, ${personB.id}, ${meetUrl})`;
      const meetInfoA: MeetLinkInfo = { trackingUrl: `${BASE_URL}/meet/${tokenA}` };
      const meetInfoB: MeetLinkInfo = { trackingUrl: `${BASE_URL}/meet/${tokenB}` };

      // Store calendar event ID + suggested meeting time on match
      await updateMatchCalendarEvent(match.id, eventId);
      await updateMatchSuggestedUtc(match.id, bestUtcTime);

      // Log event ID for cleanup
      await sql`
        INSERT INTO vipassana_activity_log (match_id, event_type, new_value, triggered_by, note)
        VALUES (${match.id}, 'meet_created', ${meetUrl}, 'system', ${`eventId=${eventId}`})
      `;

      // Build session context from match record
      const sessA = (match.person_a_session || "morning") as "morning" | "evening";
      const sessB = (match.person_b_session || "morning") as "morning" | "evening";
      const sessCtxA: SessionContext = { session: sessA, localTime: getSessionLocalTime(personA, sessA), timezone: personA.timezone, suggestedUtcMinutes: suggestedMins };
      const sessCtxB: SessionContext = { session: sessB, localTime: getSessionLocalTime(personB, sessB), timezone: personB.timezone, suggestedUtcMinutes: suggestedMins };
      const introSessionCtx = { sessionA: sessCtxA, sessionB: sessCtxB };

      // Single intro email to both recipients. Body shows two tracking buttons
      // (one per person), so per-person click attribution is preserved.
      const meetLinks = { a: meetInfoA, b: meetInfoB };
      const unsubscribeUrls = {
        a: buildUnsubscribeUrl(personA.unsubscribe_token),
        b: buildUnsubscribeUrl(personB.unsubscribe_token),
      };
      const html = buildIntroEmailHtml(personA, personB, meetLinks, introSessionCtx, unsubscribeUrls);
      const subject = buildIntroSubject(sessCtxA, sessCtxB);
      const emailResult = await resend.emails.send({
        from: "Matt from Vipassana.cool <matt@vipassana.cool>",
        to: [personA.email, personB.email],
        replyTo: [personA.email, personB.email],
        subject,
        html,
        headers: { "X-Entity-Ref-ID": match.id },
      });
      try {
        await sql`
          INSERT INTO vipassana_emails (resend_id, direction, from_email, to_email, subject, body_html, status)
          VALUES (${emailResult.data?.id || null}, 'outbound', 'Matt from Vipassana.cool <matt@vipassana.cool>',
                  ${[personA.email, personB.email].join(", ")}, ${subject}, ${html}, 'sent')
        `;
      } catch { /* non-critical */ }

      await updateMatchStatus(match.id, "pending");
      await updateEntryStatus(match.person_a_id, "matched");
      await updateEntryStatus(match.person_b_id, "matched");

      // Notify admin
      try {
        await resend.emails.send({
          from: "Vipassana.cool <hello@vipassana.cool>",
          to: ["i@m13v.com"],
          subject: `Both confirmed: ${nameA} & ${nameB} matched!`,
          html: `<p><strong>${nameA} & ${nameB}</strong> both confirmed. Intro email sent with Meet link: ${meetUrl}</p><p><a href="https://vipassana.cool/admin/matching">View dashboard →</a></p>`,
        });
      } catch { /* non-critical */ }
    }
  }

  return NextResponse.redirect(new URL("/match-confirmed?response=yes", BASE_URL));
}

/** Parse session duration strings to minutes, take the longer of two. */
function parseDurationMinutes(a: string | null, b: string | null): number {
  function parse(s: string | null): number {
    if (!s) return 60;
    const lower = s.toLowerCase();
    if (lower.includes("30")) return 30;
    if (lower.includes("20")) return 20;
    if (lower.includes("15")) return 15;
    if (lower.includes("45")) return 45;
    if (lower.includes("2")) return 120;
    return 60; // default 1 hour
  }
  return Math.max(parse(a), parse(b));
}
