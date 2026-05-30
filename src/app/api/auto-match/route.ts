import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { neon } from "@neondatabase/serverless";
import {
  getEntry,
  getPriorMatchedIds,
  getActiveMatchForSession,
  createMatchWithTokens,
  updateEntryStatus,
  toUtcTime,
} from "@/lib/db";
import type { WaitlistEntry } from "@/lib/db";
import { buildConfirmationEmailHtml, buildConfirmationSubject, getSessionLocalTime, buildUnsubscribeUrl } from "@/lib/emails";
import type { SessionContext } from "@/lib/emails";

/**
 * Session-based auto-matching cron — runs every 2 hours.
 *
 * Matching is per-session, not per-user:
 * - Once-a-day people have 1 session (morning_utc)
 * - Twice-a-day people have 2 sessions (morning_utc + evening_utc)
 * - Any session can match any other session within ±60 min UTC
 * - A person sitting twice can have 2 different buddies
 *
 * Eligibility rules:
 * - status = 'ready' → always eligible (motivated user, bypass cooldown and attempt cap)
 * - contact_count = 0, signed up >24h ago → auto-match
 * - contact_count between 1 and 9, last match ended/expired/declined >7 days ago → retry
 * - contact_count >= 10 → skip (serial ghoster, unless 'ready')
 */

type SessionSlot = {
  personId: string;
  person: WaitlistEntry;
  session: "morning" | "evening";
  utcMinutes: number;
};

function utcToMinutes(utc: string | null): number | null {
  if (!utc) return null;
  const [h, m] = utc.split(":").map(Number);
  return isNaN(h) ? null : h * 60 + (m || 0);
}

function timeDiff(a: number, b: number): number {
  const d = Math.abs(a - b);
  return Math.min(d, 1440 - d);
}

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Default to dry run (report-only). Pass ?live=true to actually send.
  const dryRun = request.nextUrl.searchParams.get("live") !== "true";
  const maxPairs = parseInt(request.nextUrl.searchParams.get("limit") || "0") || Infinity;
  const sql = neon(process.env.DATABASE_URL!);
  const now = Date.now();
  const startedAt = now;
  const DAY_MS = 24 * 60 * 60 * 1000;

  // Get all pending/ready people (exclude unsubscribed)
  const candidates = (await sql`
    SELECT id, name, email, timezone, city, frequency, session_duration,
           morning_time, morning_utc, evening_time, evening_utc,
           is_old_student, status, contact_count, pass_count, created_at,
           unsubscribed, unsubscribe_token
    FROM waitlist_entries
    WHERE status IN ('pending', 'ready') AND unsubscribed = false
    ORDER BY CASE status WHEN 'ready' THEN 0 ELSE 1 END, created_at ASC
  `) as WaitlistEntry[];

  // Filter eligible based on contact_count rules
  const eligible: WaitlistEntry[] = [];
  for (const c of candidates) {
    // 'ready' status bypasses the attempt cap and cooldown — these are motivated
    // users who explicitly told us they want a match now.
    if (c.status === "ready") {
      eligible.push(c);
      continue;
    }

    if (c.contact_count >= 10) continue;

    if (c.contact_count === 0) {
      const createdAt = c.created_at ? new Date(c.created_at).getTime() : 0;
      if (now - createdAt > DAY_MS) eligible.push(c);
    } else {
      const lastTerminal = await sql`
        SELECT m.created_at FROM matches m
        WHERE (m.person_a_id = ${c.id} OR m.person_b_id = ${c.id})
          AND m.status IN ('expired', 'declined', 'ended')
        ORDER BY m.created_at DESC LIMIT 1
      `;
      if (lastTerminal.length > 0) {
        const closedAt = new Date(lastTerminal[0].created_at as string).getTime();
        if (now - closedAt > 7 * DAY_MS) eligible.push(c);
      }
    }
  }

  // Pre-fetch all matches once. We use this for two pre-filters:
  //   1. blockedPairs: pairs that should never be re-matched. Kept in sync with
  //      the per-pair guard `getPriorMatchedIds` so the same dead pairs don't
  //      get scored as viable every run only to be skipped downstream.
  //   2. activeSessionSet: (person_id, session) slots already in a non-terminal
  //      match with someone else. The slot itself is busy and shouldn't enter
  //      the candidate pool at all.
  const allPairs = await sql`
    SELECT person_a_id, person_b_id, person_a_session, person_b_session,
           person_a_confirmed, person_b_confirmed, status
    FROM matches
  `;
  const ACTIVE_STATUSES = ["confirming", "pending", "replied", "scheduling", "active"];
  const activeSessionSet = new Set<string>();
  for (const r of allPairs) {
    if (ACTIVE_STATUSES.includes(r.status as string)) {
      activeSessionSet.add(`${r.person_a_id}:${r.person_a_session}`);
      activeSessionSet.add(`${r.person_b_id}:${r.person_b_session}`);
    }
  }
  const blockedPairs = new Set(
    allPairs
      .filter(
        (r) =>
          r.person_a_confirmed ||
          r.person_b_confirmed ||
          !["expired", "declined"].includes(r.status as string)
      )
      .map((r) => [r.person_a_id, r.person_b_id].sort().join("|"))
  );

  // Build session slots from eligible people, skipping slots already in an
  // active match. This is per-session, not per-person, since twice-a-day
  // people may have one slot busy and one free.
  // Compute UTC from local time + timezone on the fly (DST-aware)
  const slots: SessionSlot[] = [];
  for (const p of eligible) {
    // Prefer recomputing from local time + timezone (DST-aware). Fall back to the
    // stored *_utc column for legacy rows whose local-time field was blanked by a
    // re-sync but whose UTC value is still correct — otherwise those people are
    // silently invisible to the matcher.
    const freshMorningUtc = toUtcTime(p.morning_time, p.timezone) ?? p.morning_utc;
    const mornMin = utcToMinutes(freshMorningUtc);
    if (mornMin !== null && !activeSessionSet.has(`${p.id}:morning`)) {
      slots.push({ personId: p.id, person: p, session: "morning", utcMinutes: mornMin });
    }
    // Only add evening slot if they sit twice and have an evening time
    if (p.frequency === "Twice a day") {
      const freshEveningUtc = toUtcTime(p.evening_time, p.timezone) ?? p.evening_utc;
      const eveMin = utcToMinutes(freshEveningUtc);
      if (eveMin !== null && !activeSessionSet.has(`${p.id}:evening`)) {
        slots.push({ personId: p.id, person: p, session: "evening", utcMinutes: eveMin });
      }
    }
  }

  // Generate all viable session pairs
  type ScoredPair = {
    slotA: SessionSlot;
    slotB: SessionSlot;
    diff: number;
    readyScore: number;
    bothOld: boolean;
    sessionMatch: boolean;
  };
  const allViable: ScoredPair[] = [];

  for (let i = 0; i < slots.length; i++) {
    for (let j = i + 1; j < slots.length; j++) {
      const sa = slots[i];
      const sb = slots[j];

      // Can't match a person with themselves
      if (sa.personId === sb.personId) continue;

      // Check blocked pairs (person-level, not session-level)
      if (blockedPairs.has([sa.personId, sb.personId].sort().join("|"))) continue;

      // ±60 min UTC hard filter
      const diff = timeDiff(sa.utcMinutes, sb.utcMinutes);
      if (diff > 60) continue;

      allViable.push({
        slotA: sa,
        slotB: sb,
        diff,
        readyScore:
          (sa.person.status === "ready" ? 1 : 0) +
          (sb.person.status === "ready" ? 1 : 0),
        bothOld:
          sa.person.is_old_student === "Yes" &&
          sb.person.is_old_student === "Yes",
        sessionMatch:
          sa.person.session_duration === sb.person.session_duration,
      });
    }
  }

  // Sort: ready first → both old → same session duration → smallest time diff
  allViable.sort(
    (x, y) =>
      (y.readyScore - x.readyScore) ||
      (Number(y.bothOld) - Number(x.bothOld)) ||
      (Number(y.sessionMatch) - Number(x.sessionMatch)) ||
      (x.diff - y.diff)
  );

  // Greedily pick non-overlapping pairs. A session slot can only be used once,
  // and the same two people are never paired twice across different sessions
  // (twice-a-day practitioners should get two different buddies, per design).
  const usedSlots = new Set<string>(); // "personId:session"
  const usedPersonPairs = new Set<string>(); // "personIdA|personIdB" sorted
  const pairs: { slotA: SessionSlot; slotB: SessionSlot; diff: number }[] = [];

  for (const p of allViable) {
    if (pairs.length >= maxPairs) break;
    const keyA = `${p.slotA.personId}:${p.slotA.session}`;
    const keyB = `${p.slotB.personId}:${p.slotB.session}`;
    if (usedSlots.has(keyA) || usedSlots.has(keyB)) continue;
    const personPairKey = [p.slotA.personId, p.slotB.personId].sort().join("|");
    if (usedPersonPairs.has(personPairKey)) continue;
    pairs.push({ slotA: p.slotA, slotB: p.slotB, diff: p.diff });
    usedSlots.add(keyA);
    usedSlots.add(keyB);
    usedPersonPairs.add(personPairKey);
  }

  // Execute matches (or simulate in dry run mode)
  const results: {
    personA: string;
    sessionA: string;
    personB: string;
    sessionB: string;
    matchId: string;
    flow: string;
    emailHtmlGenerated?: boolean;
  }[] = [];
  // Real failures: code threw, data missing, external service died.
  const errors: { personA: string; personB: string; error: string }[] = [];
  // Pairs the guards correctly declined to re-pair. Not failures, just informational.
  const skipped: { personA: string; personB: string; reason: string }[] = [];
  const resend = dryRun ? null : new Resend(process.env.RESEND_API_KEY);

  for (const { slotA, slotB } of pairs) {
    try {
      // Re-fetch fresh status (real DB read even in dry run)
      const personA = await getEntry(slotA.personId);
      const personB = await getEntry(slotB.personId);
      if (!personA || !personB) {
        errors.push({ personA: slotA.person.name || slotA.person.email, personB: slotB.person.name || slotB.person.email, error: "Entry not found" });
        continue;
      }

      // Session-level active match guard (real DB check even in dry run)
      const activeA = await getActiveMatchForSession(personA.id, slotA.session);
      if (activeA) {
        skipped.push({ personA: `${personA.name} (${slotA.session})`, personB: `${personB.name} (${slotB.session})`, reason: "Session already matched" });
        continue;
      }
      const activeB = await getActiveMatchForSession(personB.id, slotB.session);
      if (activeB) {
        skipped.push({ personA: `${personA.name} (${slotA.session})`, personB: `${personB.name} (${slotB.session})`, reason: "Session already matched" });
        continue;
      }

      // Re-match guard (real DB check even in dry run)
      const priorIds = await getPriorMatchedIds(personA.id);
      if (priorIds.includes(personB.id)) {
        skipped.push({ personA: personA.name || personA.email, personB: personB.name || personB.email, reason: "Prior match exists" });
        continue;
      }

      // Every match requires fresh confirmation from BOTH sides. We no longer
      // auto-confirm based on prior `ready` status, that created cases where
      // users were matched into Meets without an explicit "yes" on the current
      // pairing. The persistent `ready` status still bypasses cooldown and
      // prioritizes ordering (see line ~87 above), but it no longer skips the
      // confirmation email here.

      if (dryRun) {
        // Dry run: generate email HTML to verify templates work, but don't send or write DB
        const dryCtxA: SessionContext = { session: slotA.session, localTime: getSessionLocalTime(personA, slotA.session), timezone: personA.timezone };
        const dryCtxB: SessionContext = { session: slotB.session, localTime: getSessionLocalTime(personB, slotB.session), timezone: personB.timezone };
        let htmlOk = false;
        try {
          buildConfirmationEmailHtml(personA, personB, "dry-run-token", { recipientSession: dryCtxA, matchSession: dryCtxB });
          buildConfirmationEmailHtml(personB, personA, "dry-run-token", { recipientSession: dryCtxB, matchSession: dryCtxA });
          htmlOk = true;
        } catch {
          htmlOk = false;
        }
        results.push({
          personA: personA.name || personA.email,
          sessionA: slotA.session,
          personB: personB.name || personB.email,
          sessionB: slotB.session,
          matchId: "dry-run",
          flow: "confirmation-required",
          emailHtmlGenerated: htmlOk,
        });
        continue;
      }

      // --- LIVE MODE: create match with confirmation tokens, email both sides ---
      const match = await createMatchWithTokens(personA.id, personB.id, slotA.session, slotB.session);

      const sessCtxA: SessionContext = { session: slotA.session, localTime: getSessionLocalTime(personA, slotA.session), timezone: personA.timezone };
      const sessCtxB: SessionContext = { session: slotB.session, localTime: getSessionLocalTime(personB, slotB.session), timezone: personB.timezone };

      const toConfirm: [WaitlistEntry, WaitlistEntry, string, SessionContext, SessionContext][] = [
        [personA, personB, match.person_a_token!, sessCtxA, sessCtxB],
        [personB, personA, match.person_b_token!, sessCtxB, sessCtxA],
      ];

      for (const [recipient, matchedWith, token, recipientSessCtx, matchSessCtx] of toConfirm) {
        const html = buildConfirmationEmailHtml(recipient, matchedWith, token, { recipientSession: recipientSessCtx, matchSession: matchSessCtx }, buildUnsubscribeUrl(recipient.unsubscribe_token));
        const subject = buildConfirmationSubject(recipientSessCtx);
        const emailResult = await resend!.emails.send({
          from: "Matt from Vipassana.cool <matt@inbound.vipassana.cool>",
          to: [recipient.email],
          subject,
          html,
          headers: { "X-Entity-Ref-ID": match.id },
        });
        await updateEntryStatus(recipient.id, "contacted", "auto-match", match.id, "auto-match confirmation email sent");
        await sql`
          INSERT INTO vipassana_emails (resend_id, direction, from_email, to_email, subject, body_html, status)
          VALUES (${emailResult.data?.id || null}, 'outbound', 'Matt from Vipassana.cool <matt@inbound.vipassana.cool>',
                  ${recipient.email}, ${subject}, ${html}, 'sent')
        `;
      }

      results.push({
        personA: personA.name || personA.email,
        sessionA: slotA.session,
        personB: personB.name || personB.email,
        sessionB: slotB.session,
        matchId: match.id,
        flow: "confirmation-required",
      });

      // Rate limit between sends
      await new Promise((r) => setTimeout(r, 2000));
    } catch (err) {
      errors.push({
        personA: slotA.person.name || slotA.person.email,
        personB: slotB.person.name || slotB.person.email,
        error: String(err),
      });
    }
  }

  // Send admin summary only when there's something actionable (matches made or
  // real errors). Skipped-only runs are noise: the per-pair guards correctly
  // declined to re-pair, the cron_logs row already records what happened, and
  // the dashboard surfaces the same info on demand.
  if (results.length > 0 || errors.length > 0) {
    try {
      const reportResend = new Resend(process.env.RESEND_API_KEY);
      const prefix = dryRun ? "[DRY RUN] " : "";
      const matchList = results
        .map(
          (r) =>
            `<li><strong>${r.personA} (${r.sessionA}) + ${r.personB} (${r.sessionB})</strong> — ${r.flow}</li>`
        )
        .join("");
      const errorList = errors
        .map(
          (e) =>
            `<li style="color:red">${e.personA} + ${e.personB}: ${e.error}</li>`
        )
        .join("");
      const skippedList = skipped
        .map(
          (s) =>
            `<li style="color:#6b6b6b">${s.personA} + ${s.personB}: ${s.reason}</li>`
        )
        .join("");
      const subjectParts: string[] = [`${results.length} pair${results.length !== 1 ? "s" : ""} ${dryRun ? "identified" : "matched"}`];
      if (skipped.length > 0) subjectParts.push(`${skipped.length} skipped`);
      if (errors.length > 0) subjectParts.push(`${errors.length} error${errors.length !== 1 ? "s" : ""}`);
      await reportResend.emails.send({
        from: "Vipassana.cool <hello@inbound.vipassana.cool>",
        to: "i@m13v.com",
        subject: `${prefix}Auto-match: ${subjectParts.join(", ")}`,
        html: `
          <p>${dryRun ? "Auto-matching dry run — no emails sent, no matches created." : "Auto-matching cron completed."}</p>
          <p><strong>Pool:</strong> ${candidates.length} people, ${slots.length} sessions, ${eligible.length} eligible people</p>
          ${results.length > 0 ? `<p><strong>${dryRun ? "Would match" : "Matched"} (${results.length}):</strong></p><ul>${matchList}</ul>` : ""}
          ${skipped.length > 0 ? `<p><strong>Skipped (${skipped.length}):</strong> not failures, just guards correctly declining to re-pair.</p><ul>${skippedList}</ul>` : ""}
          ${errors.length > 0 ? `<p><strong>Errors (${errors.length}):</strong></p><ul>${errorList}</ul>` : ""}
          ${dryRun ? `<p>To send these matches live, trigger: <code>/api/auto-match?live=true&limit=N</code></p>` : ""}
          <p><a href="https://vipassana.cool/admin/matching">View dashboard</a></p>
        `,
      });
    } catch {
      /* non-critical */
    }
  }

  // Log every cron run (including empty ones) so the operator can tell the
  // difference between "cron is broken" and "cron ran, found nothing to do".
  try {
    const emailsSent = dryRun ? 0 : results.length * 2;
    await sql`
      INSERT INTO cron_logs (job_name, status, users_synced, users_skipped, emails_sent, emails_failed, duration_ms, details)
      VALUES (
        'auto-match',
        'success',
        ${results.length},
        ${candidates.length - eligible.length},
        ${emailsSent},
        0,
        ${Date.now() - startedAt},
        ${JSON.stringify({
          dryRun,
          pool: candidates.length,
          sessions: slots.length,
          eligible: eligible.length,
          viablePairs: allViable.length,
          pairsSelected: pairs.length,
          matched: results.length,
          skipped: skipped.length,
          errors: errors.length,
        })}::jsonb
      )
    `;
  } catch {
    /* non-critical */
  }

  return NextResponse.json({
    success: true,
    dryRun,
    pool: candidates.length,
    sessions: slots.length,
    eligible: eligible.length,
    viablePairs: allViable.length,
    matched: results.length,
    results,
    skipped,
    errors,
  });
}

