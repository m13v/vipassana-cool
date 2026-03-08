import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { neon } from "@neondatabase/serverless";
import { getAllMatches, createMatch, getEntry } from "@/lib/db";

function checkAuth(request: NextRequest): boolean {
  const secret = request.headers.get("authorization")?.replace("Bearer ", "")
    || request.nextUrl.searchParams.get("secret");
  return secret === process.env.ADMIN_SECRET;
}

export async function GET(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const matches = getAllMatches();

  // Strip emails from response
  const safe = matches.map((m) => ({
    id: m.id,
    status: m.status,
    createdAt: m.created_at,
    notes: m.notes,
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

  const { personAId, personBId, sendEmail = true } = await request.json();

  if (!personAId || !personBId) {
    return NextResponse.json({ error: "personAId and personBId required" }, { status: 400 });
  }

  const personA = getEntry(personAId);
  const personB = getEntry(personBId);

  if (!personA || !personB) {
    return NextResponse.json({ error: "One or both entries not found" }, { status: 404 });
  }

  const match = createMatch(personAId, personBId);

  if (sendEmail) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const nameA = personA.name?.split(/\s+/)[0] || "fellow meditator";
    const nameB = personB.name?.split(/\s+/)[0] || "fellow meditator";

    const commonTraits: string[] = [];
    if (personA.is_old_student === "Yes" && personB.is_old_student === "Yes") {
      commonTraits.push("You're both old students in the Goenka tradition");
    }
    if (personA.frequency === personB.frequency) {
      commonTraits.push(`You both sit ${personA.frequency?.toLowerCase()}`);
    }
    if (personA.session_duration === personB.session_duration) {
      commonTraits.push(`${personA.session_duration} per session each`);
    }
    if (personA.timezone === personB.timezone) {
      commonTraits.push(`You're in the same timezone (${personA.timezone})`);
    }

    const traitsHtml = commonTraits.length > 0
      ? `<ul style="font-size:15px;line-height:1.8;margin:0 0 16px;padding-left:20px;">${commonTraits.map((t) => `<li>${t}</li>`).join("")}</ul>`
      : "";

    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#faf9f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#2c2c2c;">
  <div style="max-width:600px;margin:0 auto;padding:40px 24px;">
    <div style="text-align:center;margin-bottom:32px;">
      <p style="font-size:12px;text-transform:uppercase;letter-spacing:2px;color:#8b7355;margin:0 0 8px;">Vipassana.cool</p>
      <h1 style="font-size:28px;font-weight:700;margin:0;line-height:1.3;">Your Practice Buddy match is here</h1>
    </div>
    <div style="background:#ffffff;border:1px solid #e8e4de;border-radius:12px;padding:24px;margin-bottom:24px;">
      <p style="font-size:15px;line-height:1.7;margin:0 0 16px;">Hi both,</p>
      <p style="font-size:15px;line-height:1.7;margin:0 0 16px;">I'm Matt from Vipassana.cool. You both signed up for Practice Buddy, and I think you're a great match.</p>
      ${traitsHtml}
      <p style="font-size:15px;line-height:1.7;margin:0 0 8px;"><strong>${nameA}</strong> &mdash; ${personA.city || "location unknown"}${personA.has_maintained_practice ? `, ${personA.has_maintained_practice.toLowerCase()} maintained practice` : ""}${personA.practice_length ? ` for ${personA.practice_length}` : ""}.</p>
      <p style="font-size:15px;line-height:1.7;margin:0 0 16px;"><strong>${nameB}</strong> &mdash; ${personB.city || "location unknown"}${personB.has_maintained_practice ? `, ${personB.has_maintained_practice.toLowerCase()} maintained practice` : ""}${personB.practice_length ? ` for ${personB.practice_length}` : ""}.</p>
    </div>
    <div style="background:#f5f2ed;border:1px solid #e8e4de;border-radius:12px;padding:24px;margin-bottom:24px;">
      <h2 style="font-size:18px;margin:0 0 12px;color:#8b7355;">What to do next</h2>
      <p style="font-size:14px;line-height:1.6;margin:0;">The idea is simple: check in with each other regularly. Did you sit today? How was it? A quick daily message is enough. The format is up to you &mdash; WhatsApp, Telegram, email, whatever works.</p>
      <p style="font-size:14px;line-height:1.6;margin:16px 0 0;"><strong>Just reply all to this email to introduce yourselves</strong> and figure out how you'd like to stay in touch.</p>
    </div>
    <div style="text-align:center;padding:24px 0;border-top:1px solid #e8e4de;">
      <p style="font-size:15px;margin:0 0 8px;">Be happy,<br>Matt</p>
      <p style="font-size:13px;color:#6b6b6b;margin:0;"><a href="https://vipassana.cool" style="color:#8b7355;">vipassana.cool</a></p>
    </div>
  </div>
</body></html>`;

    const emailResult = await resend.emails.send({
      from: "Matt from Vipassana.cool <matt@vipassana.cool>",
      to: [personA.email, personB.email],
      subject: "Your Practice Buddy match is here",
      html,
    });

    // Log outbound email to database
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
