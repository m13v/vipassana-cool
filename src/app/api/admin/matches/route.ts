import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { neon } from "@neondatabase/serverless";
import { getAllMatches, createMatch, createMatchWithTokens, getEntry, getPriorMatchedIds, updateEntryStatus } from "@/lib/db";
import { buildIntroEmailHtml, buildConfirmationEmailHtml } from "@/lib/emails";

function checkAuth(request: NextRequest): boolean {
  const secret = request.headers.get("authorization")?.replace("Bearer ", "")
    || request.nextUrl.searchParams.get("secret");
  return secret === process.env.ADMIN_SECRET;
}

export async function GET(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const matches = await getAllMatches();

  const safe = matches.map((m) => ({
    id: m.id,
    status: m.status,
    createdAt: m.created_at,
    notes: m.notes,
    personAConfirmed: m.person_a_confirmed ?? false,
    personBConfirmed: m.person_b_confirmed ?? false,
    personA: {
      id: m.person_a.id,
      firstName: m.person_a.name?.split(/\s+/)[0] || null,
      city: m.person_a.city,
      timezone: m.person_a.timezone,
      frequency: m.person_a.frequency,
      sessionDuration: m.person_a.session_duration,
    },
    personB: {
      id: m.person_b.id,
      firstName: m.person_b.name?.split(/\s+/)[0] || null,
      city: m.person_b.city,
      timezone: m.person_b.timezone,
      frequency: m.person_b.frequency,
      sessionDuration: m.person_b.session_duration,
    },
  }));

  return NextResponse.json({ matches: safe });
}

export async function POST(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { personAId, personBId, sendEmail = true, sendConfirmation = false } = await request.json();

  if (!personAId || !personBId) {
    return NextResponse.json({ error: "personAId and personBId required" }, { status: 400 });
  }

  const personA = await getEntry(personAId);
  const personB = await getEntry(personBId);

  if (!personA || !personB) {
    return NextResponse.json({ error: "One or both entries not found" }, { status: 404 });
  }

  // Block re-matching people who have been paired before
  const priorIds = await getPriorMatchedIds(personAId);
  if (priorIds.includes(personBId)) {
    return NextResponse.json(
      { error: `${personA.name} and ${personB.name} have been matched before. Choose different partners.` },
      { status: 409 }
    );
  }

  // Confirmation flow: create pending match, send yes/no emails to each person
  if (sendConfirmation) {
    const match = await createMatchWithTokens(personAId, personBId);
    const resend = new Resend(process.env.RESEND_API_KEY);
    const sql = neon(process.env.DATABASE_URL!);

    for (const [recipient, matchedWith, token] of [
      [personA, personB, match.person_a_token!],
      [personB, personA, match.person_b_token!],
    ] as const) {
      const html = buildConfirmationEmailHtml(recipient, matchedWith, token);
      const emailResult = await resend.emails.send({
        from: "Matt from Vipassana.cool <matt@vipassana.cool>",
        to: [recipient.email],
        subject: "I found a practice buddy match for you",
        html,
        headers: { "X-Entity-Ref-ID": match.id },
      });
      await updateEntryStatus(recipient.id, "contacted", "admin", match.id, "confirmation email sent");
      try {
        await sql`
          INSERT INTO vipassana_emails (resend_id, direction, from_email, to_email, subject, body_html, status)
          VALUES (${emailResult.data?.id || null}, 'outbound', 'Matt from Vipassana.cool <matt@vipassana.cool>', ${recipient.email}, 'I found a practice buddy match for you', ${html}, 'sent')
        `;
      } catch (dbErr) {
        console.error("Failed to log confirmation email:", dbErr);
      }
    }

    return NextResponse.json({ success: true, matchId: match.id, status: "confirming" });
  }

  // Direct intro flow (existing behavior)
  const match = await createMatch(personAId, personBId);

  if (sendEmail) {
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
    } catch (dbErr) {
      console.error("Failed to log outbound email:", dbErr);
    }
  }

  return NextResponse.json({ success: true, matchId: match.id });
}
