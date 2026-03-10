import { NextResponse } from "next/server";
import { getAllEntries } from "@/lib/db";

function maskEmail(email: string): string {
  const [local, domain] = email.split("@");
  if (!domain) return "****";
  const maskedLocal = local[0] + "***" + (local.length > 2 ? local[local.length - 1] : "");
  return `${maskedLocal}@${domain}`;
}

function maskName(name: string | null): string | null {
  if (!name) return null;
  const first = name.split(/\s+/)[0];
  if (!first) return null;
  if (first.length <= 2) return first[0] + ".";
  return first[0] + "***" + first[first.length - 1];
}

export async function GET() {
  try {
    const entries = await getAllEntries();

    const publicEntries = entries.map((e) => ({
      id: e.id,
      name: maskName(e.name),
      email: maskEmail(e.email),
      city: e.city,
      timezone: e.timezone,
      frequency: e.frequency,
      sessionDuration: e.session_duration,
      morningTime: e.morning_time,
      isOldStudent: e.is_old_student,
      hasMaintainedPractice: e.has_maintained_practice,
      status: e.status,
      createdAt: e.created_at,
    }));

    return NextResponse.json({ entries: publicEntries });
  } catch (err) {
    console.error("Failed to fetch waitlist entries:", err);
    return NextResponse.json({ entries: [] });
  }
}
