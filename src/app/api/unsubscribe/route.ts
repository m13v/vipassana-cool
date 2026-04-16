import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import { Resend } from "resend";
import { PostHog } from "posthog-node";
import { getEntry, updateEntryStatus } from "@/lib/db";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://vipassana.cool";

const posthog = new PostHog("phc_68Zsbot2eLcQQgtNZTXlHrl7SEFwW1lwbzrYxsUuo1P", {
  host: "https://us.i.posthog.com",
  flushAt: 1,
  flushInterval: 0,
});

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/unsubscribed?status=error", BASE_URL));
  }

  const sql = neon(process.env.DATABASE_URL!);

  const rows = await sql`
    SELECT id, email, name, status FROM waitlist_entries WHERE unsubscribe_token = ${token}
  `;

  if (rows.length === 0) {
    return NextResponse.redirect(new URL("/unsubscribed?status=error", BASE_URL));
  }

  const person = rows[0];

  // 1. Get affected matches and partners BEFORE ending them
  const activeMatches = await sql`
    SELECT id, person_a_id, person_b_id, status FROM matches
    WHERE (person_a_id = ${person.id} OR person_b_id = ${person.id})
      AND status IN ('confirming', 'pending', 'replied', 'scheduling', 'active')
  `;

  const partnerIds = activeMatches.map((m) =>
    (m.person_a_id as string) === (person.id as string)
      ? (m.person_b_id as string)
      : (m.person_a_id as string)
  );

  // Fetch partner details for notification emails
  const partners: { id: string; name: string | null; email: string }[] = [];
  for (const pid of partnerIds) {
    const partner = await getEntry(pid);
    if (partner) {
      partners.push({ id: partner.id, name: partner.name, email: partner.email });
    }
  }

  // 2. End all active matches (sets matches to "ended", partners back to "ready")
  // Using inline logic matching endActiveMatches to avoid import issues with the note param
  for (const row of activeMatches) {
    await sql`UPDATE matches SET status = 'ended' WHERE id = ${row.id}`;
    await sql`
      INSERT INTO vipassana_activity_log (match_id, event_type, old_value, new_value, triggered_by)
      VALUES (${row.id}, 'match_status_change', ${row.status}, 'ended', 'system')
    `;
    const partnerId = (row.person_a_id as string) === (person.id as string)
      ? (row.person_b_id as string)
      : (row.person_a_id as string);
    await updateEntryStatus(partnerId, "ready", "system", row.id as string, "partner unsubscribed");
  }

  // 3. Mark as unsubscribed and update status
  await sql`
    UPDATE waitlist_entries SET unsubscribed = true, status = 'unsubscribed', updated_at = ${new Date().toISOString()}
    WHERE unsubscribe_token = ${token}
  `;

  // Log the unsubscribe
  await sql`
    INSERT INTO vipassana_activity_log (person_id, event_type, old_value, new_value, triggered_by, note)
    VALUES (${person.id}, 'unsubscribed', 'false', 'true', 'user_click', ${`${person.name || person.email} unsubscribed via email link`})
  `;

  // 4. Send notification emails to affected partners and admin
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Notify each affected partner
    for (const partner of partners) {
      const firstName = partner.name?.split(/\s+/)[0] || "there";
      try {
        await resend.emails.send({
          from: "Matt from Vipassana.cool <matt@vipassana.cool>",
          to: [partner.email],
          subject: "Your meditation buddy is no longer available",
          html: `<p>Hi ${firstName},</p>
<p>Your meditation buddy is no longer available. We'll match you with someone new soon. No action needed on your end.</p>
<p>Wishing you a peaceful practice in the meantime.</p>
<p>With metta,<br>Matt</p>`,
        });
      } catch {
        /* non-critical */
      }
    }

    // Notify admin
    const cancelledList = activeMatches
      .map((m) => `<li>Match ${(m.id as string).slice(0, 8)}... (was ${m.status})</li>`)
      .join("");
    const partnerList = partners
      .map((p) => `<li>${p.name || p.email} (${p.email})</li>`)
      .join("");

    await resend.emails.send({
      from: "Vipassana.cool <hello@vipassana.cool>",
      to: ["i@m13v.com"],
      subject: `Unsubscribed: ${person.name || person.email}`,
      html: `<p><strong>${person.name || "Unknown"}</strong> (${person.email}) unsubscribed.</p>
${activeMatches.length > 0
  ? `<p><strong>Cancelled matches (${activeMatches.length}):</strong></p><ul>${cancelledList}</ul>
<p><strong>Affected partners (notified):</strong></p><ul>${partnerList}</ul>`
  : `<p>No active matches were affected.</p>`}
<p><a href="https://vipassana.cool/admin/matching">View dashboard</a></p>`,
    });
  } catch {
    /* non-critical */
  }

  // Track in PostHog
  posthog.capture({
    distinctId: person.email as string,
    event: "practice_buddy_unsubscribed",
    properties: {
      name: person.name,
      status: person.status,
      cancelled_matches: activeMatches.length,
      affected_partners: partners.map((p) => p.email),
    },
  });
  await posthog.flush();

  return NextResponse.redirect(new URL("/unsubscribed?status=success", BASE_URL));
}
