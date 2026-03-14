import { NextRequest, NextResponse } from "next/server";
import { getAllEntries } from "@/lib/db";
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

  const entries = await getAllEntries();

  // Build a map of personId -> [all IDs they've ever been matched with]
  const sql = neon(process.env.DATABASE_URL!);
  const allMatchPairs = await sql`SELECT person_a_id, person_b_id FROM matches` as { person_a_id: string; person_b_id: string }[];
  const priorMatchMap: Record<string, string[]> = {};
  for (const { person_a_id, person_b_id } of allMatchPairs) {
    (priorMatchMap[person_a_id] ??= []).push(person_b_id);
    (priorMatchMap[person_b_id] ??= []).push(person_a_id);
  }

  const safe = entries.map((e) => ({
    id: e.id,
    email: e.email,
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
    requestedMatchId: e.requested_match_id,
    researchNotes: e.research_notes,
    status: e.status,
    createdAt: e.created_at,
    priorMatchedIds: priorMatchMap[e.id] ?? [],
  }));

  return NextResponse.json({ entries: safe });
}

export async function PATCH(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id, researchNotes } = await request.json();
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  const sql = neon(process.env.DATABASE_URL!);
  await sql`UPDATE waitlist_entries SET research_notes = ${researchNotes ?? null}, updated_at = ${new Date().toISOString()} WHERE id = ${id}`;

  return NextResponse.json({ ok: true });
}
