import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { neon } from "@neondatabase/serverless";
import { getAllMatches, createMatch, createMatchWithTokens, getEntry, getPriorMatchedIds, getActiveMatchForSession, updateEntryStatus, confirmMatchPerson } from "@/lib/db";
import type { WaitlistEntry } from "@/lib/db";
import { buildIntroEmailHtml, buildConfirmationEmailHtml, buildConfirmationSubject, buildIntroSubject, getSessionUtcTime } from "@/lib/emails";
import type { MeetLinkInfo, SessionContext } from "@/lib/emails";

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

  const { personAId, personBId, sessionA = "morning", sessionB = "morning", sendEmail = true, sendConfirmation = false, meetLinkA, meetLinkB } = await request.json();

  if (!personAId || !personBId) {
    return NextResponse.json({ error: "personAId and personBId required" }, { status: 400 });
  }

  const personA = await getEntry(personAId);
  const personB = await getEntry(personBId);

  if (!personA || !personB) {
    return NextResponse.json({ error: "One or both entries not found" }, { status: 404 });
  }

  // Block matching a session slot that's already in an active match
  const activeMatchA = await getActiveMatchForSession(personAId, sessionA);
  if (activeMatchA) {
    return NextResponse.json(
      { error: `${personA.name}'s ${sessionA} session is already in an active match.` },
      { status: 409 }
    );
  }
  const activeMatchB = await getActiveMatchForSession(personBId, sessionB);
  if (activeMatchB) {
    return NextResponse.json(
      { error: `${personB.name}'s ${sessionB} session is already in an active match.` },
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
      const match = await createMatch(personAId, personBId, sessionA, sessionB);
      const resend = new Resend(process.env.RESEND_API_KEY);
      const sql = neon(process.env.DATABASE_URL!);

      const sessCtxA: SessionContext = { session: sessionA as "morning" | "evening", utcTime: getSessionUtcTime(personA, sessionA as "morning" | "evening") };
      const sessCtxB: SessionContext = { session: sessionB as "morning" | "evening", utcTime: getSessionUtcTime(personB, sessionB as "morning" | "evening") };
      const introSessionCtx = { sessionA: sessCtxA, sessionB: sessCtxB };

      // If meet tracking links provided, send per-person emails so each gets their unique tracking URL
      if (meetLinkA && meetLinkB) {
        for (const [person, otherPerson, trackingUrl, sessCtx] of [
          [personA, personB, meetLinkA, sessCtxA],
          [personB, personA, meetLinkB, sessCtxB],
        ] as [WaitlistEntry, WaitlistEntry, string, SessionContext][]) {
          const meetInfo: MeetLinkInfo = { trackingUrl };
          const html = buildIntroEmailHtml(person === personA ? personA : personB, person === personA ? personB : personA, meetInfo, introSessionCtx);
          const subject = buildIntroSubject(sessCtx);
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
              VALUES (${emailResult.data?.id || null}, 'outbound', 'Matt from Vipassana.cool <matt@vipassana.cool>', ${[personA.email, personB.email].join(", ")}, ${subject}, ${html}, 'sent')
            `;
          } catch (dbErr) {
            console.error("Failed to log intro email:", dbErr);
          }
        }
      } else {
        const html = buildIntroEmailHtml(personA, personB, undefined, introSessionCtx);
        const subject = buildIntroSubject(sessCtxA);
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
            VALUES (${emailResult.data?.id || null}, 'outbound', 'Matt from Vipassana.cool <matt@vipassana.cool>', ${[personA.email, personB.email].join(", ")}, ${subject}, ${html}, 'sent')
          `;
        } catch (dbErr) {
          console.error("Failed to log intro email:", dbErr);
        }
      }
      return NextResponse.json({ success: true, matchId: match.id, status: "matched", flow: "both-ready" });
    }

    // One or both pending → confirmation flow
    const match = await createMatchWithTokens(personAId, personBId, sessionA, sessionB);
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
    const sessCtxA: SessionContext = { session: sessionA as "morning" | "evening", utcTime: getSessionUtcTime(personA, sessionA as "morning" | "evening") };
    const sessCtxB: SessionContext = { session: sessionB as "morning" | "evening", utcTime: getSessionUtcTime(personB, sessionB as "morning" | "evening") };

    const toConfirm: [WaitlistEntry, WaitlistEntry, string, "a" | "b", SessionContext, SessionContext][] = [];
    if (!aReady) toConfirm.push([personA, personB, match.person_a_token!, "a", sessCtxA, sessCtxB]);
    if (!bReady) toConfirm.push([personB, personA, match.person_b_token!, "b", sessCtxB, sessCtxA]);

    for (const [recipient, matchedWith, token, , recipientSessCtx, matchSessCtx] of toConfirm) {
      const html = buildConfirmationEmailHtml(recipient, matchedWith, token, { recipientSession: recipientSessCtx, matchSession: matchSessCtx });
      const subject = buildConfirmationSubject(recipientSessCtx);
      const emailResult = await resend.emails.send({
        from: "Matt from Vipassana.cool <matt@vipassana.cool>",
        to: [recipient.email],
        subject,
        html,
        headers: { "X-Entity-Ref-ID": match.id },
      });
      await updateEntryStatus(recipient.id, "contacted", "admin", match.id, "confirmation email sent");
      try {
        await sql`
          INSERT INTO vipassana_emails (resend_id, direction, from_email, to_email, subject, body_html, status)
          VALUES (${emailResult.data?.id || null}, 'outbound', 'Matt from Vipassana.cool <matt@vipassana.cool>', ${recipient.email}, ${subject}, ${html}, 'sent')
        `;
      } catch (dbErr) {
        console.error("Failed to log confirmation email:", dbErr);
      }
    }

    const flow = aReady || bReady ? "one-ready" : "both-pending";
    return NextResponse.json({ success: true, matchId: match.id, status: "confirming", flow });
  }

  // Direct intro flow (existing behavior)
  const match = await createMatch(personAId, personBId, sessionA, sessionB);

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
