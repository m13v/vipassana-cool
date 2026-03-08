import { neon } from "@neondatabase/serverless";

function getSql() {
  return neon(process.env.DATABASE_URL!);
}

export type WaitlistEntry = {
  id: string;
  email: string;
  name: string | null;
  is_old_student: string | null;
  is_goenka_tradition: string | null;
  timezone: string | null;
  city: string | null;
  frequency: string | null;
  morning_time: string | null;
  evening_time: string | null;
  days: string | null;
  session_duration: string | null;
  has_maintained_practice: string | null;
  practice_length: string | null;
  requested_match_id: string | null;
  status: string;
  created_at: string | null;
  updated_at: string | null;
};

export type Match = {
  id: string;
  person_a_id: string;
  person_b_id: string;
  status: string;
  created_at: string | null;
  notes: string | null;
};

export async function getAllEntries(): Promise<WaitlistEntry[]> {
  const sql = getSql();
  const rows = await sql`SELECT * FROM waitlist_entries ORDER BY created_at DESC`;
  return rows as WaitlistEntry[];
}

export async function getPendingEntries(): Promise<WaitlistEntry[]> {
  const sql = getSql();
  const rows = await sql`SELECT * FROM waitlist_entries WHERE status = 'pending' ORDER BY created_at DESC`;
  return rows as WaitlistEntry[];
}

export async function getEntry(id: string): Promise<WaitlistEntry | undefined> {
  const sql = getSql();
  const rows = await sql`SELECT * FROM waitlist_entries WHERE id = ${id}`;
  return rows[0] as WaitlistEntry | undefined;
}

export async function getEntryByEmail(email: string): Promise<WaitlistEntry | undefined> {
  const sql = getSql();
  const rows = await sql`SELECT * FROM waitlist_entries WHERE email = ${email}`;
  return rows[0] as WaitlistEntry | undefined;
}

export async function upsertEntry(entry: Omit<WaitlistEntry, "status" | "updated_at">): Promise<void> {
  const sql = getSql();
  const now = new Date().toISOString();
  await sql`
    INSERT INTO waitlist_entries (id, email, name, is_old_student, is_goenka_tradition, timezone, city, frequency, morning_time, evening_time, days, session_duration, has_maintained_practice, practice_length, requested_match_id, status, created_at, updated_at)
    VALUES (${entry.id}, ${entry.email}, ${entry.name}, ${entry.is_old_student}, ${entry.is_goenka_tradition}, ${entry.timezone}, ${entry.city}, ${entry.frequency}, ${entry.morning_time}, ${entry.evening_time}, ${entry.days}, ${entry.session_duration}, ${entry.has_maintained_practice}, ${entry.practice_length}, ${entry.requested_match_id}, 'pending', ${entry.created_at}, ${now})
    ON CONFLICT(email) DO UPDATE SET
      name = COALESCE(EXCLUDED.name, waitlist_entries.name),
      is_old_student = COALESCE(EXCLUDED.is_old_student, waitlist_entries.is_old_student),
      is_goenka_tradition = COALESCE(EXCLUDED.is_goenka_tradition, waitlist_entries.is_goenka_tradition),
      timezone = COALESCE(EXCLUDED.timezone, waitlist_entries.timezone),
      city = COALESCE(EXCLUDED.city, waitlist_entries.city),
      frequency = COALESCE(EXCLUDED.frequency, waitlist_entries.frequency),
      morning_time = COALESCE(EXCLUDED.morning_time, waitlist_entries.morning_time),
      evening_time = COALESCE(EXCLUDED.evening_time, waitlist_entries.evening_time),
      days = COALESCE(EXCLUDED.days, waitlist_entries.days),
      session_duration = COALESCE(EXCLUDED.session_duration, waitlist_entries.session_duration),
      has_maintained_practice = COALESCE(EXCLUDED.has_maintained_practice, waitlist_entries.has_maintained_practice),
      practice_length = COALESCE(EXCLUDED.practice_length, waitlist_entries.practice_length),
      requested_match_id = COALESCE(EXCLUDED.requested_match_id, waitlist_entries.requested_match_id),
      updated_at = ${now}
  `;
}

export async function updateEntryStatus(id: string, status: string): Promise<void> {
  const sql = getSql();
  await sql`UPDATE waitlist_entries SET status = ${status}, updated_at = ${new Date().toISOString()} WHERE id = ${id}`;
}

export async function getAllMatches(): Promise<(Match & { person_a: WaitlistEntry; person_b: WaitlistEntry })[]> {
  const sql = getSql();
  const matches = await sql`SELECT * FROM matches ORDER BY created_at DESC` as Match[];
  const result = [];
  for (const m of matches) {
    const personA = await getEntry(m.person_a_id);
    const personB = await getEntry(m.person_b_id);
    if (personA && personB) {
      result.push({ ...m, person_a: personA, person_b: personB });
    }
  }
  return result;
}

export async function createMatch(personAId: string, personBId: string): Promise<Match> {
  const sql = getSql();
  const id = crypto.randomUUID();
  const now = new Date().toISOString();
  await sql`INSERT INTO matches (id, person_a_id, person_b_id, status, created_at) VALUES (${id}, ${personAId}, ${personBId}, 'pending', ${now})`;
  await updateEntryStatus(personAId, "matched");
  await updateEntryStatus(personBId, "matched");
  return { id, person_a_id: personAId, person_b_id: personBId, status: "pending", created_at: now, notes: null };
}

export async function updateMatchStatus(id: string, status: string): Promise<void> {
  const sql = getSql();
  await sql`UPDATE matches SET status = ${status} WHERE id = ${id}`;
  if (status === "ended") {
    const rows = await sql`SELECT * FROM matches WHERE id = ${id}`;
    const match = rows[0] as Match | undefined;
    if (match) {
      await updateEntryStatus(match.person_a_id, "pending");
      await updateEntryStatus(match.person_b_id, "pending");
    }
  }
}
