import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import { Resend } from "resend";
import { getMatchByToken, getEntry } from "@/lib/db";

// Light-touch phone normalization (mirrors /api/waitlist).
function normalizePhone(raw: string | undefined | null): string | null {
  if (!raw) return null;
  const cleaned = String(raw).trim();
  if (cleaned.length < 5) return null;
  const filtered = cleaned.replace(/[^\d+\s()\-]/g, "").trim();
  const digits = filtered.replace(/\D/g, "");
  if (digits.length < 5) return null;
  return filtered;
}

// POST /api/save-phone-preference
// Body: { token: string, phone: string, method: 'sms' | 'whatsapp' }
//
// Used by the match-confirmation flow so the user can opt in to SMS/WhatsApp
// nudges *after* clicking "yes". The per-person match token (person_a_token /
// person_b_token) is the auth: it ties the request to one specific waitlist
// entry without making them log in. Method is required so admin knows which
// channel to use.
export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const token = typeof body?.token === "string" ? body.token : "";
    const rawPhone = typeof body?.phone === "string" ? body.phone : "";
    const rawMethod = typeof body?.method === "string" ? body.method : "";

    if (!token) {
      return NextResponse.json({ error: "Missing token" }, { status: 400 });
    }

    const phone = normalizePhone(rawPhone);
    if (!phone) {
      return NextResponse.json({ error: "Please enter a valid phone number" }, { status: 400 });
    }

    const method = rawMethod === "sms" || rawMethod === "whatsapp" ? rawMethod : null;
    if (!method) {
      return NextResponse.json({ error: "Pick SMS or WhatsApp" }, { status: 400 });
    }

    // Resolve token → match → person. The same per-person token is used in
    // /api/confirm-match, so this works for both 'confirming' and already-
    // confirmed matches. We don't require any specific status here so people
    // can update their preference even after the match has progressed.
    const match = await getMatchByToken(token);
    if (!match) {
      return NextResponse.json({ error: "Invalid or expired link" }, { status: 404 });
    }
    const personId = match.person_a_token === token ? match.person_a_id : match.person_b_id;
    const person = await getEntry(personId);
    if (!person) {
      return NextResponse.json({ error: "Person not found" }, { status: 404 });
    }

    const previousPhone = person.phone || null;
    const previousMethod = person.phone_method || null;

    const sql = neon(process.env.DATABASE_URL!);
    await sql`
      UPDATE waitlist_entries
      SET phone = ${phone}, phone_method = ${method}, updated_at = ${new Date().toISOString()}
      WHERE id = ${personId}
    `;
    await sql`
      INSERT INTO vipassana_activity_log (person_id, match_id, event_type, old_value, new_value, triggered_by, note)
      VALUES (${personId}, ${match.id}, 'phone_preference_set', ${previousMethod}, ${method}, 'user_click', ${`phone ${previousPhone ? "updated" : "added"}`})
    `;

    // Notify admin so we know to actually use the channel. Only fire when the
    // phone or method actually changed (avoids spam if the user re-opens the
    // page and re-saves the same value).
    const changed = previousPhone !== phone || previousMethod !== method;
    if (changed) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const phoneDigits = phone.replace(/\D/g, "");
        const phoneSmsTarget = phone.replace(/[^\d+]/g, "");
        const channelLabel = method === "whatsapp" ? "WhatsApp" : "SMS / text";
        const action = previousPhone
          ? previousMethod === method
            ? "updated phone"
            : "updated phone preference"
          : "added a phone";
        await resend.emails.send({
          from: "Vipassana.cool <hello@inbound.vipassana.cool>",
          to: ["i@m13v.com"],
          subject: `${person.name || "Someone"} ${action} from match flow — ${channelLabel}`,
          html: `
            <p><strong>${person.name || person.email}</strong> ${action} after confirming their match.</p>
            <p><strong>Channel:</strong> ${channelLabel}<br/>
               <strong>Phone:</strong> <a href="sms:${phoneSmsTarget}">${phone}</a> · <a href="https://wa.me/${phoneDigits}">WhatsApp</a></p>
            <p>Match: <code>${match.id}</code> · Person: ${person.email}</p>
            <p><a href="https://vipassana.cool/admin/matching">View dashboard →</a></p>
          `,
        });
      } catch (err) {
        console.error("[save-phone-preference] admin notify failed:", err);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[save-phone-preference] error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
