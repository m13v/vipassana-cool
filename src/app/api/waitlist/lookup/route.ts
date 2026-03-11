import { NextRequest, NextResponse } from "next/server";
import { getEntryByEmail } from "@/lib/db";

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email");
  if (!email || !email.includes("@")) {
    return NextResponse.json({ found: false });
  }

  const entry = await getEntryByEmail(email.toLowerCase().trim());
  if (!entry) return NextResponse.json({ found: false });

  return NextResponse.json({
    found: true,
    status: entry.status,
    name: entry.name,
    isOldStudent: entry.is_old_student,
    isGoenkatradition: entry.is_goenka_tradition,
    timezone: entry.timezone,
    city: entry.city,
    frequency: entry.frequency,
    morningTime: entry.morning_time,
    eveningTime: entry.evening_time,
    days: entry.days ? JSON.parse(entry.days) : [],
    sessionDuration: entry.session_duration,
    hasMaintainedPractice: entry.has_maintained_practice,
    practiceLength: entry.practice_length,
  });
}
