import { NextRequest, NextResponse } from "next/server";
import { getAllEntries } from "@/lib/db";

function checkAuth(request: NextRequest): boolean {
  const secret = request.headers.get("authorization")?.replace("Bearer ", "")
    || request.nextUrl.searchParams.get("secret");
  return secret === process.env.ADMIN_SECRET;
}

export async function GET(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const entries = getAllEntries();

  // Strip sensitive data - no email, truncate name to first name only
  const safe = entries.map((e) => ({
    id: e.id,
    firstName: e.name?.split(/\s+/)[0] || null,
    city: e.city,
    timezone: e.timezone,
    frequency: e.frequency,
    sessionDuration: e.session_duration,
    morningTime: e.morning_time,
    eveningTime: e.evening_time,
    days: e.days ? JSON.parse(e.days) : [],
    isOldStudent: e.is_old_student,
    isGoenkatradition: e.is_goenka_tradition,
    hasMaintainedPractice: e.has_maintained_practice,
    practiceLength: e.practice_length,
    status: e.status,
    createdAt: e.created_at,
  }));

  return NextResponse.json({ entries: safe });
}
