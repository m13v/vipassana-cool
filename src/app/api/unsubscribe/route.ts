import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import { PostHog } from "posthog-node";

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

  await sql`
    UPDATE waitlist_entries SET unsubscribed = true, updated_at = ${new Date().toISOString()}
    WHERE unsubscribe_token = ${token}
  `;

  // Log the unsubscribe
  await sql`
    INSERT INTO vipassana_activity_log (person_id, event_type, old_value, new_value, triggered_by, note)
    VALUES (${person.id}, 'unsubscribed', 'false', 'true', 'user_click', ${`${person.name || person.email} unsubscribed via email link`})
  `;

  // Track in PostHog
  posthog.capture({
    distinctId: person.email as string,
    event: "practice_buddy_unsubscribed",
    properties: {
      name: person.name,
      status: person.status,
    },
  });
  await posthog.flush();

  return NextResponse.redirect(new URL("/unsubscribed?status=success", BASE_URL));
}
