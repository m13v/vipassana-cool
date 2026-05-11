import { neon } from "@neondatabase/serverless";

function getSql() {
  return neon(process.env.DATABASE_URL!);
}

// Best-effort cleanup of the Google Calendar event attached to a match when
// the match transitions to a terminal state (ended/expired/declined). Imports
// are dynamic to avoid pulling Google API code into modules that don't need it
// (e.g. test or build-time consumers of db types). Always silenced — calendar
// API errors must NOT break DB status transitions, and we use sendUpdates=none
// so users don't get cancellation emails for matches they've already moved past.
async function silentlyDeleteMatchCalendarEvent(matchId: string): Promise<void> {
  try {
    const sql = getSql();
    const rows = await sql`SELECT calendar_event_id FROM matches WHERE id = ${matchId}`;
    const eventId = rows[0]?.calendar_event_id as string | null | undefined;
    if (!eventId || eventId === "__claiming__") return;
    const { deleteCalendarEvent } = await import("./google-meet");
    await deleteCalendarEvent(eventId, "none");
    // Null the column so we don't try to delete the same event twice if the
    // status transitions through multiple terminal states.
    await sql`UPDATE matches SET calendar_event_id = NULL WHERE id = ${matchId} AND calendar_event_id = ${eventId}`;
    await sql`
      INSERT INTO vipassana_activity_log (match_id, event_type, new_value, triggered_by, note)
      VALUES (${matchId}, 'meet_deleted', ${eventId}, 'system', 'silent cleanup on terminal status')
    `;
  } catch (err) {
    // Swallow — DB transition must not depend on Google Calendar API health.
    console.error(`silentlyDeleteMatchCalendarEvent(${matchId}) failed:`, err);
  }
}

export type WaitlistEntry = {
  id: string;
  email: string;
  name: string | null;
  phone: string | null;
  phone_method: string | null;
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
  calendar_event_id: string | null;
  calendar_rsvp_a: string | null;
  calendar_rsvp_b: string | null;
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
  const rows = await sql`SELECT * FROM waitlist_entries WHERE unsubscribed = false ORDER BY created_at DESC`;
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
    INSERT INTO waitlist_entries (id, email, name, phone, phone_method, is_old_student, is_goenka_tradition, timezone, city, frequency, morning_time, evening_time, days, session_duration, has_maintained_practice, practice_length, requested_match_id, research_notes, morning_utc, evening_utc, status, unsubscribe_token, created_at, updated_at)
    VALUES (${entry.id}, ${entry.email}, ${entry.name}, ${entry.phone}, ${entry.phone_method}, ${entry.is_old_student}, ${entry.is_goenka_tradition}, ${entry.timezone}, ${entry.city}, ${entry.frequency}, ${entry.morning_time}, ${entry.evening_time}, ${entry.days}, ${entry.session_duration}, ${entry.has_maintained_practice}, ${entry.practice_length}, ${entry.requested_match_id}, ${entry.research_notes}, ${morningUtc}, ${eveningUtc}, 'pending', ${unsubToken}, ${entry.created_at}, ${now})
    ON CONFLICT(email) DO UPDATE SET
      name = COALESCE(EXCLUDED.name, waitlist_entries.name),
      phone = COALESCE(EXCLUDED.phone, waitlist_entries.phone),
      phone_method = COALESCE(EXCLUDED.phone_method, waitlist_entries.phone_method),
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

export type MatchEngagement = {
  matchId: string;
  replyA: boolean;
  replyB: boolean;
  meetClicksA: number;
  meetClicksB: number;
};

// Batch-fetch engagement signals (intro replies, meet clicks) for a list of matches.
// Uses aggregate queries grouped by match_id and person_id (one query per signal type), not N per match.
export async function getMatchEngagement(
  matches: { id: string; person_a_id: string; person_b_id: string }[]
): Promise<Map<string, MatchEngagement>> {
  const sql = getSql();
  const byMatch = new Map<string, MatchEngagement>();
  for (const m of matches) {
    byMatch.set(m.id, {
      matchId: m.id,
      replyA: false,
      replyB: false,
      meetClicksA: 0,
      meetClicksB: 0,
    });
  }
  if (matches.length === 0) return byMatch;

  const matchIds = matches.map((m) => m.id);
  const sides = new Map<string, { a: string; b: string }>();
  for (const m of matches) sides.set(m.id, { a: m.person_a_id, b: m.person_b_id });

  // 1. Intro replies from vipassana_activity_log (event_type='email_reply' with match_id set).
  try {
    const replyRows = await sql`
      SELECT match_id, person_id
      FROM vipassana_activity_log
      WHERE event_type = 'email_reply'
        AND match_id = ANY(${matchIds})
    ` as { match_id: string; person_id: string }[];
    for (const r of replyRows) {
      const eng = byMatch.get(r.match_id);
      const side = sides.get(r.match_id);
      if (!eng || !side) continue;
      if (r.person_id === side.a) eng.replyA = true;
      else if (r.person_id === side.b) eng.replyB = true;
    }
  } catch (err) {
    console.warn("getMatchEngagement: failed to query activity log for replies:", err);
  }

  // 2. Meet click counts grouped by (match_id, person_id).
  try {
    const clickRows = await sql`
      SELECT match_id, person_id, COUNT(*)::int AS click_count
      FROM meet_clicks
      WHERE match_id = ANY(${matchIds})
      GROUP BY match_id, person_id
    ` as { match_id: string; person_id: string; click_count: number }[];
    for (const r of clickRows) {
      const eng = byMatch.get(r.match_id);
      const side = sides.get(r.match_id);
      if (!eng || !side) continue;
      if (r.person_id === side.a) eng.meetClicksA = r.click_count;
      else if (r.person_id === side.b) eng.meetClicksB = r.click_count;
    }
  } catch (err) {
    console.warn("getMatchEngagement: failed to query meet_clicks:", err);
  }

  return byMatch;
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
  return { id, person_a_id: personAId, person_b_id: personBId, person_a_session: sessionA, person_b_session: sessionB, status: "pending", created_at: now, notes: null, person_a_token: null, person_b_token: null, person_a_confirmed: false, person_b_confirmed: false, declined_by_id: null, calendar_event_id: null, calendar_rsvp_a: null, calendar_rsvp_b: null };
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
  // Clean up the Google Calendar event whenever a match enters a terminal
  // state so users stop seeing daily phantom Meet events with strangers they
  // already passed on. Silent (sendUpdates=none) — no cancellation emails.
  if (status === "ended" || status === "expired" || status === "declined") {
    await silentlyDeleteMatchCalendarEvent(id);
  }
}

// Decline a match: record who said no.
// Decliner → ready (they engaged by responding — "passed" is about the pair, not the person).
// Partner → ready if they had confirmed, pending if they hadn't.
//
// Returns true if this call actually performed the decline (first time), false if the
// match was already declined (idempotent no-op for duplicate "no" clicks from email-link
// prefetchers / double-click). Callers should use the return value to decide whether
// to send the admin notification email, preventing duplicate admin spam.
export async function declineMatch(matchId: string, declinerId: string): Promise<boolean> {
  const sql = getSql();
  // Atomic claim: only flip to 'declined' if not already declined. Returns the prior
  // status iff the row was changed, otherwise nothing.
  const claim = await sql`
    UPDATE matches
    SET status = 'declined', declined_by_id = ${declinerId}
    WHERE id = ${matchId} AND status <> 'declined'
    RETURNING (SELECT status FROM matches WHERE id = ${matchId}) AS new_status,
              person_a_id, person_b_id, person_a_confirmed, person_b_confirmed
  `;
  if (claim.length === 0) {
    // Already declined — duplicate request, do nothing.
    return false;
  }
  // Look up old status for the activity log. We can't capture it inside the UPDATE
  // RETURNING because RETURNING reflects post-update values; do a follow-up read of
  // the activity log's last status_change for this match instead, or just record the
  // transition with a generic prior label. Keep it simple: log "→ declined" without a
  // precise old value (the activity log already has the prior state from earlier rows).
  await sql`
    INSERT INTO vipassana_activity_log (match_id, event_type, new_value, triggered_by)
    VALUES (${matchId}, 'match_status_change', 'declined', 'user_click')
  `;
  const match = claim[0] as { person_a_id: string; person_b_id: string; person_a_confirmed: boolean; person_b_confirmed: boolean } | undefined;
  if (!match) return true;
  const isA = match.person_a_id === declinerId;
  const partnerId = isA ? match.person_b_id : match.person_a_id;
  const partnerConfirmed = isA ? match.person_b_confirmed : match.person_a_confirmed;
  await updateEntryStatus(declinerId, "ready", "user_click", matchId, "clicked no on confirmation");
  await updateEntryStatus(partnerId, partnerConfirmed ? "ready" : "pending", "user_click", matchId, "partner declined");
  // Silent calendar cleanup on decline (no cancellation email; the user already
  // moved past this match by saying no, and the partner doesn't need to be told).
  await silentlyDeleteMatchCalendarEvent(matchId);
  return true;
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
  return { id, person_a_id: personAId, person_b_id: personBId, person_a_session: sessionA, person_b_session: sessionB, status: "confirming", created_at: now, notes: null, person_a_token: tokenA, person_b_token: tokenB, person_a_confirmed: false, person_b_confirmed: false, declined_by_id: null, calendar_event_id: null, calendar_rsvp_a: null, calendar_rsvp_b: null };
}

// Auto-advance match status when an inbound email is received from a matched person:
// pending → replied (one person replied)
// replied → active (both people have replied)
// Does not downgrade statuses that are already more advanced (active, ended, etc.)
// Also logs an `email_reply` activity row (linked to match_id when possible) so
// the activity log stays consistent with historical behavior.
export async function advanceMatchOnReply(fromEmail: string, subject?: string): Promise<void> {
  const sql = getSql();

  // Resolve sender's person_id via waitlist_entries (needed for activity log).
  const senderRows = await sql`
    SELECT id FROM waitlist_entries WHERE email = ${fromEmail} LIMIT 1
  ` as { id: string }[];
  if (senderRows.length === 0) {
    console.warn("[advanceMatchOnReply] no waitlist_entry for", fromEmail, "; skipping activity log");
    return;
  }
  const senderId = senderRows[0].id;

  const matches = await sql`
    SELECT m.id, m.status,
           a.email AS email_a, b.email AS email_b
    FROM matches m
    JOIN waitlist_entries a ON a.id = m.person_a_id
    JOIN waitlist_entries b ON b.id = m.person_b_id
    WHERE (a.email = ${fromEmail} OR b.email = ${fromEmail})
      AND m.status IN ('pending', 'replied')
  ` as { id: string; status: string; email_a: string; email_b: string }[];

  if (matches.length === 0) {
    // No pending/replied match for sender (e.g., reply to closed match, or no match).
    // Still insert an email_reply row with match_id=null for log consistency.
    await sql`INSERT INTO vipassana_activity_log (person_id, match_id, event_type, triggered_by, note) VALUES (${senderId}, ${null}, 'email_reply', 'user', ${subject ?? null})`;
    return;
  }

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

    await sql`INSERT INTO vipassana_activity_log (person_id, match_id, event_type, triggered_by, note) VALUES (${senderId}, ${match.id}, 'email_reply', 'user', ${subject ?? null})`;
  }
}

// Sweep stale 'pending' matches that never advanced via email reply.
// Distinguishes by whether either side ever confirmed:
//   - Both confirmed: real bond that didn't take off → 'ended' (still blocks re-pairing).
//   - Neither confirmed: legacy/unengaged row that should not block the pair → 'expired'
//     (so getPriorMatchedIds and the blockedPairs guard release the two people).
// In both cases the match closes and both participants return to 'ready'.
//
// Engagement protection (added 2026-05-11): if BOTH partners have at least one
// click on their personal Meet tracking URL (i.e. they're showing up to sit
// together), skip expiry entirely. Single-side clicks are still a ghost — the
// click-er is engaged but their partner hasn't shown up. Expire those normally.
export async function endStalePendingMatches(days: number = 14): Promise<{
  endedCount: number;
  expiredCount: number;
  skippedCount: number;
  endedMatches: { id: string; person_a_name: string | null; person_b_name: string | null }[];
  expiredMatches: { id: string; person_a_name: string | null; person_b_name: string | null }[];
  skippedMatches: { id: string; person_a_name: string | null; person_b_name: string | null }[];
}> {
  const sql = getSql();
  const rows = await sql`
    SELECT m.id, m.person_a_id, m.person_b_id, m.person_a_confirmed, m.person_b_confirmed,
           a.name as person_a_name, b.name as person_b_name,
           EXISTS(
             SELECT 1 FROM meet_clicks mc
             JOIN meet_links ml ON ml.token = mc.token
             WHERE ml.match_id = m.id AND ml.person_id = m.person_a_id
           ) AS person_a_clicked_meet,
           EXISTS(
             SELECT 1 FROM meet_clicks mc
             JOIN meet_links ml ON ml.token = mc.token
             WHERE ml.match_id = m.id AND ml.person_id = m.person_b_id
           ) AS person_b_clicked_meet
    FROM matches m
    JOIN waitlist_entries a ON a.id = m.person_a_id
    JOIN waitlist_entries b ON b.id = m.person_b_id
    WHERE m.status = 'pending'
      AND m.created_at < NOW() - make_interval(days => ${days})
  `;
  const endedMatches: { id: string; person_a_name: string | null; person_b_name: string | null }[] = [];
  const expiredMatches: { id: string; person_a_name: string | null; person_b_name: string | null }[] = [];
  const skippedMatches: { id: string; person_a_name: string | null; person_b_name: string | null }[] = [];
  for (const row of rows) {
    const summary = { id: row.id as string, person_a_name: row.person_a_name as string | null, person_b_name: row.person_b_name as string | null };
    // Skip expiry when both partners clicked their Meet link: they're showing
    // up to sit together, even if neither replied to the intro thread.
    const bothClickedMeet = (row.person_a_clicked_meet as boolean) && (row.person_b_clicked_meet as boolean);
    if (bothClickedMeet) {
      skippedMatches.push(summary);
      continue;
    }
    const eitherConfirmed = (row.person_a_confirmed as boolean) || (row.person_b_confirmed as boolean);
    const newStatus = eitherConfirmed ? "ended" : "expired";
    await updateMatchStatus(row.id as string, newStatus, "cron");
    // 'ended' path triggers the entry → 'ready' transitions inside updateMatchStatus.
    // 'expired' does not, so do it manually here so people re-enter the pool.
    if (!eitherConfirmed) {
      await updateEntryStatus(row.person_a_id as string, "ready", "cron", row.id as string, "stale pending swept (no engagement)");
      await updateEntryStatus(row.person_b_id as string, "ready", "cron", row.id as string, "stale pending swept (no engagement)");
    }
    if (eitherConfirmed) endedMatches.push(summary);
    else expiredMatches.push(summary);
  }
  return { endedCount: endedMatches.length, expiredCount: expiredMatches.length, skippedCount: skippedMatches.length, endedMatches, expiredMatches, skippedMatches };
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

// Returns person IDs that have had ANY prior match with this person.
//
// Updated 2026-05-11: blocks re-pairing for every prior match except explicit
// declines. Before this change, "both ghosted" pairs (status='expired', neither
// confirmed) were eligible for retry on the theory that maybe the timing was
// bad. In practice this caused the same dormant pair to be re-matched every 14
// days forever (e.g. Matthew + Nahïl re-matched April 27 and again May 11 after
// both ghosted the first round). If two people didn't engage once, they're not
// going to engage the second time either. Better to put them with someone new.
//
// Still allowed: re-pair after an explicit "no" click on the OTHER pair, since
// 'declined' represents a specific incompatible match, not a dormant ghost.
export async function getPriorMatchedIds(personId: string): Promise<string[]> {
  const sql = getSql();
  const rows = await sql`
    SELECT person_a_id, person_b_id FROM matches
    WHERE (person_a_id = ${personId} OR person_b_id = ${personId})
      AND status <> 'declined'
  `;
  return rows.map((r) =>
    r.person_a_id === personId ? r.person_b_id : r.person_a_id
  ) as string[];
}

export async function updateMatchCalendarEvent(matchId: string, calendarEventId: string): Promise<void> {
  const sql = getSql();
  await sql`UPDATE matches SET calendar_event_id = ${calendarEventId} WHERE id = ${matchId}`;
}

// Atomically claim the right to create a Google Meet event for this match.
// Returns true if this caller won the race, false if another concurrent request
// (e.g. duplicate "yes" clicks from email-link prefetchers) already claimed it.
// On success, calendar_event_id is set to a sentinel "__claiming__" placeholder
// which MUST be replaced with the real event ID via updateMatchCalendarEvent
// after Meet creation succeeds, OR cleared via releaseMeetCreationClaim on failure.
export async function claimMeetCreation(matchId: string): Promise<boolean> {
  const sql = getSql();
  const rows = await sql`
    UPDATE matches
    SET calendar_event_id = '__claiming__'
    WHERE id = ${matchId} AND calendar_event_id IS NULL
    RETURNING id
  `;
  return rows.length > 0;
}

// Release a Meet-creation claim (used when Meet creation fails so a later retry
// can succeed). Only clears the placeholder, never overwrites a real event ID.
export async function releaseMeetCreationClaim(matchId: string): Promise<void> {
  const sql = getSql();
  await sql`
    UPDATE matches
    SET calendar_event_id = NULL
    WHERE id = ${matchId} AND calendar_event_id = '__claiming__'
  `;
}

export async function updateMatchSuggestedUtc(matchId: string, suggestedUtcTime: string): Promise<void> {
  const sql = getSql();
  await sql`UPDATE matches SET suggested_utc_time = ${suggestedUtcTime} WHERE id = ${matchId}`;
}

export async function updateMatchRsvp(matchId: string, rsvpA: string, rsvpB: string): Promise<void> {
  const sql = getSql();
  await sql`UPDATE matches SET calendar_rsvp_a = ${rsvpA}, calendar_rsvp_b = ${rsvpB} WHERE id = ${matchId}`;
}

export async function getActiveMatchesWithCalendar(): Promise<(Match & { person_a_email: string; person_b_email: string })[]> {
  const sql = getSql();
  const rows = await sql`
    SELECT m.*, a.email as person_a_email, b.email as person_b_email
    FROM matches m
    JOIN waitlist_entries a ON a.id = m.person_a_id
    JOIN waitlist_entries b ON b.id = m.person_b_id
    WHERE m.calendar_event_id IS NOT NULL
      AND m.status IN ('pending', 'replied', 'active')
  `;
  return rows as (Match & { person_a_email: string; person_b_email: string })[];
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
