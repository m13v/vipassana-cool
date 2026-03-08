import Database from "better-sqlite3";
import path from "path";

const DB_PATH = path.join(process.cwd(), "data", "matching.db");

let _db: Database.Database | null = null;

function getDb(): Database.Database {
  if (!_db) {
    _db = new Database(DB_PATH);
    _db.pragma("journal_mode = WAL");
    _db.exec(`
      CREATE TABLE IF NOT EXISTS waitlist_entries (
        id TEXT PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        name TEXT,
        is_old_student TEXT,
        is_goenka_tradition TEXT,
        timezone TEXT,
        city TEXT,
        frequency TEXT,
        morning_time TEXT,
        evening_time TEXT,
        days TEXT,
        session_duration TEXT,
        has_maintained_practice TEXT,
        practice_length TEXT,
        status TEXT DEFAULT 'pending',
        created_at TEXT,
        updated_at TEXT
      );

      CREATE TABLE IF NOT EXISTS matches (
        id TEXT PRIMARY KEY,
        person_a_id TEXT NOT NULL REFERENCES waitlist_entries(id),
        person_b_id TEXT NOT NULL REFERENCES waitlist_entries(id),
        status TEXT DEFAULT 'pending',
        created_at TEXT,
        notes TEXT
      );
    `);
  }
  return _db;
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

export function getAllEntries(): WaitlistEntry[] {
  return getDb().prepare("SELECT * FROM waitlist_entries ORDER BY created_at DESC").all() as WaitlistEntry[];
}

export function getPendingEntries(): WaitlistEntry[] {
  return getDb().prepare("SELECT * FROM waitlist_entries WHERE status = 'pending' ORDER BY created_at DESC").all() as WaitlistEntry[];
}

export function getEntry(id: string): WaitlistEntry | undefined {
  return getDb().prepare("SELECT * FROM waitlist_entries WHERE id = ?").get(id) as WaitlistEntry | undefined;
}

export function getEntryByEmail(email: string): WaitlistEntry | undefined {
  return getDb().prepare("SELECT * FROM waitlist_entries WHERE email = ?").get(email) as WaitlistEntry | undefined;
}

export function upsertEntry(entry: Omit<WaitlistEntry, "status" | "updated_at">): void {
  const now = new Date().toISOString();
  getDb().prepare(`
    INSERT INTO waitlist_entries (id, email, name, is_old_student, is_goenka_tradition, timezone, city, frequency, morning_time, evening_time, days, session_duration, has_maintained_practice, practice_length, status, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending', ?, ?)
    ON CONFLICT(email) DO UPDATE SET
      name = COALESCE(excluded.name, name),
      is_old_student = COALESCE(excluded.is_old_student, is_old_student),
      is_goenka_tradition = COALESCE(excluded.is_goenka_tradition, is_goenka_tradition),
      timezone = COALESCE(excluded.timezone, timezone),
      city = COALESCE(excluded.city, city),
      frequency = COALESCE(excluded.frequency, frequency),
      morning_time = COALESCE(excluded.morning_time, morning_time),
      evening_time = COALESCE(excluded.evening_time, evening_time),
      days = COALESCE(excluded.days, days),
      session_duration = COALESCE(excluded.session_duration, session_duration),
      has_maintained_practice = COALESCE(excluded.has_maintained_practice, has_maintained_practice),
      practice_length = COALESCE(excluded.practice_length, practice_length),
      updated_at = ?
  `).run(
    entry.id, entry.email, entry.name, entry.is_old_student, entry.is_goenka_tradition,
    entry.timezone, entry.city, entry.frequency, entry.morning_time, entry.evening_time,
    entry.days, entry.session_duration, entry.has_maintained_practice, entry.practice_length,
    entry.created_at, now, now
  );
}

export function updateEntryStatus(id: string, status: string): void {
  getDb().prepare("UPDATE waitlist_entries SET status = ?, updated_at = ? WHERE id = ?")
    .run(status, new Date().toISOString(), id);
}

export function getAllMatches(): (Match & { person_a: WaitlistEntry; person_b: WaitlistEntry })[] {
  const matches = getDb().prepare("SELECT * FROM matches ORDER BY created_at DESC").all() as Match[];
  return matches.map((m) => ({
    ...m,
    person_a: getEntry(m.person_a_id)!,
    person_b: getEntry(m.person_b_id)!,
  }));
}

export function createMatch(personAId: string, personBId: string): Match {
  const id = crypto.randomUUID();
  const now = new Date().toISOString();
  getDb().prepare("INSERT INTO matches (id, person_a_id, person_b_id, status, created_at) VALUES (?, ?, ?, 'pending', ?)")
    .run(id, personAId, personBId, now);
  updateEntryStatus(personAId, "matched");
  updateEntryStatus(personBId, "matched");
  return { id, person_a_id: personAId, person_b_id: personBId, status: "pending", created_at: now, notes: null };
}

export function updateMatchStatus(id: string, status: string): void {
  getDb().prepare("UPDATE matches SET status = ? WHERE id = ?").run(status, id);
  if (status === "ended") {
    const match = getDb().prepare("SELECT * FROM matches WHERE id = ?").get(id) as Match;
    if (match) {
      updateEntryStatus(match.person_a_id, "pending");
      updateEntryStatus(match.person_b_id, "pending");
    }
  }
}
