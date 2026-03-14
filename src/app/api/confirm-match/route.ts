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
} from "@/lib/db";
import { buildIntroEmailHtml } from "@/lib/emails";

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
    // declineMatch: decliner → passed (pass_count++), partner → contacted
    await declineMatch(match.id, confirmerId);
    // Notify admin
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
      const resend = new Resend(process.env.RESEND_API_KEY);
      const html = buildIntroEmailHtml(personA, personB);
      const emailResult = await resend.emails.send({
        from: "Matt from Vipassana.cool <matt@vipassana.cool>",
        to: [personA.email, personB.email],
        replyTo: [personA.email, personB.email],
        subject: "Your Practice Buddy match is here",
        html,
        headers: { "X-Entity-Ref-ID": match.id },
      });
      try {
        const sql = neon(process.env.DATABASE_URL!);
        await sql`
          INSERT INTO vipassana_emails (resend_id, direction, from_email, to_email, subject, body_html, status)
          VALUES (${emailResult.data?.id || null}, 'outbound', 'Matt from Vipassana.cool <matt@vipassana.cool>', ${[personA.email, personB.email].join(", ")}, 'Your Practice Buddy match is here', ${html}, 'sent')
        `;
      } catch { /* non-critical */ }
      await updateMatchStatus(match.id, "pending");
      await updateEntryStatus(match.person_a_id, "matched");
      await updateEntryStatus(match.person_b_id, "matched");
    }
  }

  return NextResponse.redirect(new URL("/match-confirmed?response=yes", BASE_URL));
}
