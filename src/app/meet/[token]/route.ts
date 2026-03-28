import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;
  const sql = neon(process.env.DATABASE_URL!);

  // Look up the token to find the meet URL
  const rows = await sql`
    SELECT meet_url, match_id, person_id FROM meet_links WHERE token = ${token}
  `;

  if (rows.length === 0) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const { meet_url, match_id, person_id } = rows[0];

  // Log the click
  const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
  const userAgent = request.headers.get("user-agent") || "unknown";

  await sql`
    INSERT INTO meet_clicks (token, match_id, person_id, meet_url, ip, user_agent)
    VALUES (${token}, ${match_id}, ${person_id}, ${meet_url as string}, ${ip}, ${userAgent})
  `;

  return NextResponse.redirect(meet_url as string);
}
