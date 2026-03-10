import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

function checkAuth(request: NextRequest): boolean {
  const secret = request.headers.get("authorization")?.replace("Bearer ", "")
    || request.nextUrl.searchParams.get("secret");
  return secret === process.env.ADMIN_SECRET;
}

export async function GET(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const sql = neon(process.env.DATABASE_URL!);
  const emails = await sql`
    SELECT id, direction, from_email, to_email, subject, body_text, status, created_at
    FROM vipassana_emails
    ORDER BY created_at ASC
  `;

  return NextResponse.json({ emails });
}
