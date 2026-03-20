import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { neon } from "@neondatabase/serverless";
import { getAllMatches, createMatch, createMatchWithTokens, getEntry, getPriorMatchedIds, updateEntryStatus, confirmMatchPerson } from "@/lib/db";
import type { WaitlistEntry } from "@/lib/db";
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

  // Block matching anyone already in an active match
  const activeStatuses = ["contacted", "engaged", "matched"];
  if (activeStatuses.includes(personA.status)) {
    return NextResponse.json(
      { error: `${personA.name} is already in an active match (status: ${personA.status}).` },
      { status: 409 }
    );
  }
  if (activeStatuses.includes(personB.status)) {
    return NextResponse.json(
      { error: `${personB.name} is already in an active match (status: ${personB.status}).` },
      { status: 409 }
    );
  }

  // Block re-matching people who have been paired before (unless neither confirmed)
  const priorIds = await getPriorMatchedIds(personAId);
  if (priorIds.includes(personBId)) {
    return NextResponse.json(
      { error: `${personA.name} and ${personB.name} have been matched before. Choose different partners.` },
      { status: 409 }
    );
  }

  // Smart confirmation flow based on user status:
  // - Both ready: skip confirmation, send intro immediately
  // - One ready + one pending: only send confirmation to the pending person
  // - Both pending: send confirmation to both
  if (sendConfirmation) {
    const aReady = personA.status === "ready" || personA.status === "engaged";
    const bReady = personB.status === "ready" || personB.status === "engaged";

    // Both ready → direct intro, no confirmation needed
    if (aReady && bReady) {
      const match = await createMatch(personAId, personBId);
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
        console.error("Failed to log intro email:", dbErr);
      }
      return NextResponse.json({ success: true, matchId: match.id, status: "matched", flow: "both-ready" });
    }

    // One or both pending → confirmation flow
    const match = await createMatchWithTokens(personAId, personBId);
    const resend = new Resend(process.env.RESEND_API_KEY);
    const sql = neon(process.env.DATABASE_URL!);

    // Pre-confirm the ready person (they already said yes before)
    if (aReady) {
      await confirmMatchPerson(match.id, "a");
      await updateEntryStatus(personAId, "engaged", "admin", match.id, "auto-confirmed (ready status)");
    }
    if (bReady) {
      await confirmMatchPerson(match.id, "b");
      await updateEntryStatus(personBId, "engaged", "admin", match.id, "auto-confirmed (ready status)");
    }

    // Only send confirmation email to pending person(s)
    const toConfirm: [WaitlistEntry, WaitlistEntry, string, "a" | "b"][] = [];
    if (!aReady) toConfirm.push([personA, personB, match.person_a_token!, "a"]);
    if (!bReady) toConfirm.push([personB, personA, match.person_b_token!, "b"]);

    for (const [recipient, matchedWith, token] of toConfirm) {
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

    const flow = aReady || bReady ? "one-ready" : "both-pending";
    return NextResponse.json({ success: true, matchId: match.id, status: "confirming", flow });
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
