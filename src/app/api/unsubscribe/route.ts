import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://vipassana.cool";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/unsubscribed?status=error", BASE_URL));
  }

  const sql = neon(process.env.DATABASE_URL!);

  const rows = await sql`
    SELECT id, email, name FROM waitlist_entries WHERE unsubscribe_token = ${token}
  `;

  if (rows.length === 0) {
    return NextResponse.redirect(new URL("/unsubscribed?status=error", BASE_URL));
  }

  await sql`
    UPDATE waitlist_entries SET unsubscribed = true, updated_at = ${new Date().toISOString()}
    WHERE unsubscribe_token = ${token}
  `;

  // Log the unsubscribe
  await sql`
    INSERT INTO vipassana_activity_log (entry_id, event_type, old_value, new_value, triggered_by, note)
    VALUES (${rows[0].id}, 'unsubscribed', 'false', 'true', 'user_click', ${`${rows[0].name || rows[0].email} unsubscribed via email link`})
  `;

  return NextResponse.redirect(new URL("/unsubscribed?status=success", BASE_URL));
}
