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
  research_notes: string | null;
  morning_utc: string | null;
  evening_utc: string | null;
  status: string;
  pass_count: number;
  contact_count: number;
  unsubscribed: boolean;
  unsubscribe_token: string | null;
  created_at: string | null;
  updated_at: string | null;
};

export type Match = {
  id: string;
  person_a_id: string;
  person_b_id: string;
  person_a_session: string | null; // 'morning' or 'evening'
  person_b_session: string | null; // 'morning' or 'evening'
  status: string;
  created_at: string | null;
  notes: string | null;
  person_a_token: string | null;
  person_b_token: string | null;
  person_a_confirmed: boolean;
  person_b_confirmed: boolean;
  declined_by_id: string | null;
};

function tzOffsetMinutes(tz: string): number {
  if (!tz) return 0;
  const aliases: Record<string, string> = { "eastern time": "America/New_York", "est": "America/New_York", "pst": "America/Los_Angeles", "cst": "America/Chicago", "mst": "America/Denver" };
  const alias = aliases[tz.toLowerCase().trim()];
  if (alias) tz = alias;
  if (tz.startsWith("GMT") || tz.startsWith("UTC")) {
    const match = tz.match(/([+-])(\d{1,2})(?::(\d{2}))?/);
    if (!match) return 0;
    return (match[1] === "+" ? 1 : -1) * (parseInt(match[2]) * 60 + parseInt(match[3] || "0"));
  }
  const gmtMatch = tz.match(/GMT\s*([+-])\s*(\d{1,2})(?::(\d{2}))?/i);
  if (gmtMatch) {
    return (gmtMatch[1] === "+" ? 1 : -1) * (parseInt(gmtMatch[2]) * 60 + parseInt(gmtMatch[3] || "0"));
  }
  try {
    // Use Intl.DateTimeFormat to reliably extract the UTC offset for an IANA timezone
    const fmt = new Intl.DateTimeFormat("en-US", { timeZone: tz, timeZoneName: "shortOffset" });
    const parts = fmt.formatToParts(new Date());
    const tzPart = parts.find(p => p.type === "timeZoneName")?.value || "";
    // tzPart looks like "GMT+1", "GMT-5", "GMT+5:30", "GMT"
    const offsetMatch = tzPart.match(/GMT([+-])(\d{1,2})(?::(\d{2}))?/);
    if (!offsetMatch) return 0; // "GMT" with no offset = UTC
    return (offsetMatch[1] === "+" ? 1 : -1) * (parseInt(offsetMatch[2]) * 60 + parseInt(offsetMatch[3] || "0"));
  } catch { return 0; }
}

export function toUtcTime(localTime: string | null, timezone: string | null): string | null {
  if (!localTime || !timezone) return null;
  const [h, m] = localTime.split(":").map(Number);
  if (isNaN(h)) return null;
  const utcMins = (((h * 60 + (m || 0)) - tzOffsetMinutes(timezone)) % 1440 + 1440) % 1440;
  return `${String(Math.floor(utcMins / 60)).padStart(2, "0")}:${String(utcMins % 60).padStart(2, "0")}`;
}

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

export async function upsertEntry(entry: Omit<WaitlistEntry, "status" | "updated_at" | "pass_count" | "contact_count" | "morning_utc" | "evening_utc" | "unsubscribed" | "unsubscribe_token">): Promise<void> {
  const sql = getSql();
  const now = new Date().toISOString();
  const morningUtc = toUtcTime(entry.morning_time, entry.timezone);
  const eveningUtc = toUtcTime(entry.evening_time, entry.timezone);
  const unsubToken = crypto.randomUUID();
  await sql`
    INSERT INTO waitlist_entries (id, email, name, is_old_student, is_goenka_tradition, timezone, city, frequency, morning_time, evening_time, days, session_duration, has_maintained_practice, practice_length, requested_match_id, research_notes, morning_utc, evening_utc, status, unsubscribe_token, created_at, updated_at)
    VALUES (${entry.id}, ${entry.email}, ${entry.name}, ${entry.is_old_student}, ${entry.is_goenka_tradition}, ${entry.timezone}, ${entry.city}, ${entry.frequency}, ${entry.morning_time}, ${entry.evening_time}, ${entry.days}, ${entry.session_duration}, ${entry.has_maintained_practice}, ${entry.practice_length}, ${entry.requested_match_id}, ${entry.research_notes}, ${morningUtc}, ${eveningUtc}, 'pending', ${unsubToken}, ${entry.created_at}, ${now})
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
      research_notes = COALESCE(waitlist_entries.research_notes, EXCLUDED.research_notes),
      morning_utc = COALESCE(EXCLUDED.morning_utc, waitlist_entries.morning_utc),
      evening_utc = COALESCE(EXCLUDED.evening_utc, waitlist_entries.evening_utc),
      updated_at = ${now}
  `;
}

export async function updateEntryStatus(id: string, status: string, triggeredBy = "system", matchId?: string, note?: string): Promise<void> {
  const sql = getSql();
  const current = await sql`SELECT status FROM waitlist_entries WHERE id = ${id}`;
  const oldStatus = current[0]?.status ?? null;
  if (status === "passed") {
    await sql`UPDATE waitlist_entries SET status = ${status}, pass_count = pass_count + 1, updated_at = ${new Date().toISOString()} WHERE id = ${id}`;
  } else if (status === "contacted") {
    await sql`UPDATE waitlist_entries SET status = ${status}, contact_count = contact_count + 1, updated_at = ${new Date().toISOString()} WHERE id = ${id}`;
  } else {
    await sql`UPDATE waitlist_entries SET status = ${status}, updated_at = ${new Date().toISOString()} WHERE id = ${id}`;
  }
  await sql`
    INSERT INTO vipassana_activity_log (person_id, match_id, event_type, old_value, new_value, triggered_by, note)
    VALUES (${id}, ${matchId ?? null}, 'status_change', ${oldStatus}, ${status}, ${triggeredBy}, ${note ?? null})
  `;
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

export async function createMatch(personAId: string, personBId: string, sessionA = "morning", sessionB = "morning"): Promise<Match> {
  const sql = getSql();
  const id = crypto.randomUUID();
  const now = new Date().toISOString();
  await sql`INSERT INTO matches (id, person_a_id, person_b_id, person_a_session, person_b_session, status, created_at) VALUES (${id}, ${personAId}, ${personBId}, ${sessionA}, ${sessionB}, 'pending', ${now})`;
  await sql`INSERT INTO vipassana_activity_log (person_id, match_id, event_type, new_value, triggered_by) VALUES (${personAId}, ${id}, 'match_created', 'pending', 'admin')`;
  await sql`INSERT INTO vipassana_activity_log (person_id, match_id, event_type, new_value, triggered_by) VALUES (${personBId}, ${id}, 'match_created', 'pending', 'admin')`;
  await updateEntryStatus(personAId, "matched", "admin", id);
  await updateEntryStatus(personBId, "matched", "admin", id);
  return { id, person_a_id: personAId, person_b_id: personBId, person_a_session: sessionA, person_b_session: sessionB, status: "pending", created_at: now, notes: null, person_a_token: null, person_b_token: null, person_a_confirmed: false, person_b_confirmed: false, declined_by_id: null };
}

// End all active matches for a person. Sets matches to "ended" and partners back to "ready".
export async function endActiveMatches(personId: string, note?: string): Promise<void> {
  const sql = getSql();
  const rows = await sql`
    SELECT id, person_a_id, person_b_id FROM matches
    WHERE (person_a_id = ${personId} OR person_b_id = ${personId})
      AND status IN ('confirming', 'pending', 'replied', 'scheduling', 'active')
  `;
  for (const row of rows) {
    const partnerId = (row.person_a_id as string) === personId ? row.person_b_id as string : row.person_a_id as string;
    await updateMatchStatus(row.id as string, "ended", "system");
    // updateMatchStatus("ended") already sets both people to "ready",
    // but the caller will override the re-submitter's status to "pending" after this
  }
}

export async function updateMatchStatus(id: string, status: string, triggeredBy = "system"): Promise<void> {
  const sql = getSql();
  const current = await sql`SELECT status FROM matches WHERE id = ${id}`;
  const oldStatus = current[0]?.status ?? null;
  await sql`UPDATE matches SET status = ${status} WHERE id = ${id}`;
  await sql`
    INSERT INTO vipassana_activity_log (match_id, event_type, old_value, new_value, triggered_by)
    VALUES (${id}, 'match_status_change', ${oldStatus}, ${status}, ${triggeredBy})
  `;
  if (status === "ended") {
    const rows = await sql`SELECT * FROM matches WHERE id = ${id}`;
    const match = rows[0] as Match | undefined;
    if (match) {
      await updateEntryStatus(match.person_a_id, "ready", triggeredBy, id, "match ended");
      await updateEntryStatus(match.person_b_id, "ready", triggeredBy, id, "match ended");
    }
  }
}

// Decline a match: record who said no.
// Decliner → ready (they engaged by responding — "passed" is about the pair, not the person).
// Partner → ready if they had confirmed, pending if they hadn't.
export async function declineMatch(matchId: string, declinerId: string): Promise<void> {
  const sql = getSql();
  const current = await sql`SELECT status, person_a_id, person_b_id, person_a_confirmed, person_b_confirmed FROM matches WHERE id = ${matchId}`;
  const oldStatus = current[0]?.status ?? null;
  await sql`UPDATE matches SET status = 'declined', declined_by_id = ${declinerId} WHERE id = ${matchId}`;
  await sql`
    INSERT INTO vipassana_activity_log (match_id, event_type, old_value, new_value, triggered_by)
    VALUES (${matchId}, 'match_status_change', ${oldStatus}, 'declined', 'user_click')
  `;
  const match = current[0] as { person_a_id: string; person_b_id: string; person_a_confirmed: boolean; person_b_confirmed: boolean } | undefined;
  if (!match) return;
  const isA = match.person_a_id === declinerId;
  const partnerId = isA ? match.person_b_id : match.person_a_id;
  const partnerConfirmed = isA ? match.person_b_confirmed : match.person_a_confirmed;
  await updateEntryStatus(declinerId, "ready", "user_click", matchId, "clicked no on confirmation");
  await updateEntryStatus(partnerId, partnerConfirmed ? "ready" : "pending", "user_click", matchId, "partner declined");
}

export async function createMatchWithTokens(personAId: string, personBId: string, sessionA = "morning", sessionB = "morning"): Promise<Match> {
  const sql = getSql();
  const id = crypto.randomUUID();
  const tokenA = crypto.randomUUID();
  const tokenB = crypto.randomUUID();
  const now = new Date().toISOString();
  await sql`
    INSERT INTO matches (id, person_a_id, person_b_id, person_a_session, person_b_session, status, created_at, person_a_token, person_b_token, person_a_confirmed, person_b_confirmed)
    VALUES (${id}, ${personAId}, ${personBId}, ${sessionA}, ${sessionB}, 'confirming', ${now}, ${tokenA}, ${tokenB}, false, false)
  `;
  await sql`INSERT INTO vipassana_activity_log (person_id, match_id, event_type, new_value, triggered_by) VALUES (${personAId}, ${id}, 'match_created', 'confirming', 'admin')`;
  await sql`INSERT INTO vipassana_activity_log (person_id, match_id, event_type, new_value, triggered_by) VALUES (${personBId}, ${id}, 'match_created', 'confirming', 'admin')`;
  return { id, person_a_id: personAId, person_b_id: personBId, person_a_session: sessionA, person_b_session: sessionB, status: "confirming", created_at: now, notes: null, person_a_token: tokenA, person_b_token: tokenB, person_a_confirmed: false, person_b_confirmed: false, declined_by_id: null };
}

// Auto-advance match status when an inbound email is received from a matched person:
// pending → replied (one person replied)
// replied → active (both people have replied)
// Does not downgrade statuses that are already more advanced (active, ended, etc.)
export async function advanceMatchOnReply(fromEmail: string): Promise<void> {
  const sql = getSql();

  const matches = await sql`
    SELECT m.id, m.status,
           a.email AS email_a, b.email AS email_b
    FROM matches m
    JOIN waitlist_entries a ON a.id = m.person_a_id
    JOIN waitlist_entries b ON b.id = m.person_b_id
    WHERE (a.email = ${fromEmail} OR b.email = ${fromEmail})
      AND m.status IN ('pending', 'replied')
  ` as { id: string; status: string; email_a: string; email_b: string }[];

  for (const match of matches) {
    const otherEmail = match.email_a === fromEmail ? match.email_b : match.email_a;

    const otherReplied = await sql`
      SELECT 1 FROM vipassana_emails
      WHERE direction = 'inbound' AND from_email = ${otherEmail}
      LIMIT 1
    `;

    if (otherReplied.length > 0) {
      await updateMatchStatus(match.id, "active", "system");
    } else if (match.status === "pending") {
      await updateMatchStatus(match.id, "replied", "system");
    }
  }
}

// Expire confirming matches older than the given number of days.
// Sets match → expired, moves both people back to pending.
// If one person had confirmed (engaged), they go back to pending too.
export async function expireStaleMatches(days: number = 7): Promise<{ expiredCount: number; expiredMatches: { id: string; person_a_name: string | null; person_b_name: string | null }[] }> {
  const sql = getSql();
  const rows = await sql`
    SELECT m.id, m.person_a_id, m.person_b_id, a.name as person_a_name, b.name as person_b_name
    FROM matches m
    JOIN waitlist_entries a ON a.id = m.person_a_id
    JOIN waitlist_entries b ON b.id = m.person_b_id
    WHERE m.status = 'confirming'
      AND m.created_at < NOW() - make_interval(days => ${days})
  `;
  const expiredMatches: { id: string; person_a_name: string | null; person_b_name: string | null }[] = [];
  for (const row of rows) {
    const match = await sql`SELECT person_a_confirmed, person_b_confirmed, person_a_session, person_b_session FROM matches WHERE id = ${row.id as string}`;
    const m = match[0] as { person_a_confirmed: boolean; person_b_confirmed: boolean; person_a_session: string | null; person_b_session: string | null } | undefined;
    await updateMatchStatus(row.id as string, "expired", "cron");
    // Only reset person status if they don't have another active match for ANY session
    for (const [personId, confirmed] of [
      [row.person_a_id as string, m?.person_a_confirmed],
      [row.person_b_id as string, m?.person_b_confirmed],
    ] as const) {
      const otherActive = await sql`
        SELECT 1 FROM matches
        WHERE (person_a_id = ${personId} OR person_b_id = ${personId})
          AND status IN ('confirming', 'pending', 'replied', 'scheduling', 'active')
        LIMIT 1
      `;
      if (otherActive.length === 0) {
        const newStatus = confirmed ? "ready" : "pending";
        await updateEntryStatus(personId, newStatus, "cron", row.id as string, "match expired after " + days + " days" + (confirmed ? " (had confirmed)" : ""));
      }
    }
    expiredMatches.push({ id: row.id as string, person_a_name: row.person_a_name as string | null, person_b_name: row.person_b_name as string | null });
  }
  return { expiredCount: expiredMatches.length, expiredMatches };
}

// Check if a specific session slot (person + morning/evening) is already in an active match.
// Returns the match ID if blocked, null if available.
export async function getActiveMatchForSession(personId: string, session: string): Promise<string | null> {
  const sql = getSql();
  const rows = await sql`
    SELECT id FROM matches
    WHERE status IN ('confirming', 'pending', 'replied', 'scheduling', 'active')
      AND (
        (person_a_id = ${personId} AND person_a_session = ${session})
        OR (person_b_id = ${personId} AND person_b_session = ${session})
      )
    LIMIT 1
  `;
  return rows.length > 0 ? (rows[0].id as string) : null;
}

// Returns person IDs that have had a meaningful prior match with this person.
// Only blocks re-matching if at least one person confirmed (clicked Yes).
// If neither confirmed (both ghosted), the pair can be re-matched.
export async function getPriorMatchedIds(personId: string): Promise<string[]> {
  const sql = getSql();
  const rows = await sql`
    SELECT person_a_id, person_b_id FROM matches
    WHERE (person_a_id = ${personId} OR person_b_id = ${personId})
      AND (person_a_confirmed = true OR person_b_confirmed = true
           OR status NOT IN ('expired', 'declined'))
  `;
  return rows.map((r) =>
    r.person_a_id === personId ? r.person_b_id : r.person_a_id
  ) as string[];
}

export async function getMatchByToken(token: string): Promise<Match | undefined> {
  const sql = getSql();
  const rows = await sql`SELECT * FROM matches WHERE person_a_token = ${token} OR person_b_token = ${token} LIMIT 1`;
  return rows[0] as Match | undefined;
}

export async function confirmMatchPerson(matchId: string, side: "a" | "b"): Promise<{ bothConfirmed: boolean }> {
  const sql = getSql();
  if (side === "a") {
    await sql`UPDATE matches SET person_a_confirmed = true WHERE id = ${matchId}`;
  } else {
    await sql`UPDATE matches SET person_b_confirmed = true WHERE id = ${matchId}`;
  }
  const rows = await sql`SELECT person_a_confirmed, person_b_confirmed FROM matches WHERE id = ${matchId}`;
  const m = rows[0] as { person_a_confirmed: boolean; person_b_confirmed: boolean } | undefined;
  return { bothConfirmed: !!(m?.person_a_confirmed && m?.person_b_confirmed) };
}
