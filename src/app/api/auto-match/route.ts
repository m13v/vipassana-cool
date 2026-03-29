import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { neon } from "@neondatabase/serverless";
import {
  getEntry,
  getPriorMatchedIds,
  createMatchWithTokens,
  createMatch,
  updateEntryStatus,
  confirmMatchPerson,
} from "@/lib/db";
import type { WaitlistEntry } from "@/lib/db";
import { buildIntroEmailHtml, buildConfirmationEmailHtml } from "@/lib/emails";

/**
 * Auto-matching cron — runs every 2 hours.
 *
 * Rules:
 * - contact_count = 0, signed up >24h ago → find best match, send confirmation
 * - contact_count = 1, last match expired >7 days ago → re-try once
 * - contact_count >= 2 → skip (serial ghosters)
 *
 * Uses same guards as manual matching: active-match guard, re-match guard, ±60 min UTC.
 */
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const sql = neon(process.env.DATABASE_URL!);

  // Get all pending/ready people eligible for auto-matching
  const candidates = (await sql`
    SELECT id, name, email, timezone, city, frequency, session_duration,
           morning_time, morning_utc, evening_time, evening_utc,
           is_old_student, status, contact_count, pass_count, created_at
    FROM waitlist_entries
    WHERE status IN ('pending', 'ready')
    ORDER BY CASE status WHEN 'ready' THEN 0 ELSE 1 END, created_at ASC
  `) as WaitlistEntry[];

  // Filter to eligible candidates based on contact_count rules
  const now = Date.now();
  const DAY_MS = 24 * 60 * 60 * 1000;

  const eligible: WaitlistEntry[] = [];
  for (const c of candidates) {
    if (c.contact_count >= 2) continue; // serial ghoster — skip

    if (c.status === "ready") {
      // ready people are always eligible (they already confirmed before)
      eligible.push(c);
      continue;
    }

    // pending people
    if (c.contact_count === 0) {
      // Never contacted — must be >24h old
      const createdAt = c.created_at ? new Date(c.created_at).getTime() : 0;
      if (now - createdAt > DAY_MS) {
        eligible.push(c);
      }
    } else if (c.contact_count === 1) {
      // Contacted once, ghosted — only retry if last match expired >7 days ago
      const lastExpiry = await sql`
        SELECT m.created_at FROM matches m
        WHERE (m.person_a_id = ${c.id} OR m.person_b_id = ${c.id})
          AND m.status = 'expired'
        ORDER BY m.created_at DESC LIMIT 1
      `;
      if (lastExpiry.length > 0) {
        const expiredAt = new Date(lastExpiry[0].created_at as string).getTime();
        if (now - expiredAt > 7 * DAY_MS) {
          eligible.push(c);
        }
      }
    }
  }

  // Build blocked pairs set (same logic as find-matches)
  const allPairs = await sql`
    SELECT person_a_id, person_b_id, person_a_confirmed, person_b_confirmed, status
    FROM matches
  `;
  const blockedPairs = new Set(
    allPairs
      .filter(
        (r) =>
          r.person_a_confirmed ||
          r.person_b_confirmed ||
          ["confirming", "active", "pending", "replied"].includes(r.status as string)
      )
      .map((r) => [r.person_a_id, r.person_b_id].sort().join("|"))
  );

  // Active people who can't be matched right now
  const activeStatuses = new Set(["contacted", "engaged", "matched"]);

  function utcToMinutes(utc: string | null): number | null {
    if (!utc) return null;
    const [h, m] = utc.split(":").map(Number);
    return isNaN(h) ? null : h * 60 + (m || 0);
  }

  function timeDiff(a: number, b: number): number {
    const d = Math.abs(a - b);
    return Math.min(d, 1440 - d);
  }

  // Find best non-overlapping pairs from eligible pool
  const matched = new Set<string>();
  const pairs: { a: WaitlistEntry; b: WaitlistEntry; diff: number }[] = [];

  // Generate all viable pairs scored by priority
  type ScoredPair = {
    a: WaitlistEntry;
    b: WaitlistEntry;
    diff: number;
    readyScore: number;
    bothOld: boolean;
    sessionMatch: boolean;
  };
  const allViable: ScoredPair[] = [];

  for (let i = 0; i < eligible.length; i++) {
    for (let j = i + 1; j < eligible.length; j++) {
      const a = eligible[i];
      const b = eligible[j];

      // Skip if either is in an active match state
      if (activeStatuses.has(a.status) || activeStatuses.has(b.status)) continue;

      // Skip blocked pairs
      if (blockedPairs.has([a.id, b.id].sort().join("|"))) continue;

      // UTC time comparison — ±60 min hard filter
      const utcA = utcToMinutes(a.morning_utc);
      const utcB = utcToMinutes(b.morning_utc);
      if (utcA == null || utcB == null) continue;
      const diff = timeDiff(utcA, utcB);
      if (diff > 60) continue;

      allViable.push({
        a,
        b,
        diff,
        readyScore:
          (a.status === "ready" ? 1 : 0) + (b.status === "ready" ? 1 : 0),
        bothOld:
          a.is_old_student === "Yes" && b.is_old_student === "Yes",
        sessionMatch: a.session_duration === b.session_duration,
      });
    }
  }

  // Sort: ready first → both old → same session → smallest time diff
  allViable.sort(
    (x, y) =>
      (y.readyScore - x.readyScore) ||
      (Number(y.bothOld) - Number(x.bothOld)) ||
      (Number(y.sessionMatch) - Number(x.sessionMatch)) ||
      (x.diff - y.diff)
  );

  // Greedily pick non-overlapping pairs
  for (const p of allViable) {
    if (matched.has(p.a.id) || matched.has(p.b.id)) continue;
    pairs.push({ a: p.a, b: p.b, diff: p.diff });
    matched.add(p.a.id);
    matched.add(p.b.id);
  }

  // Execute matches using the same flow as the admin API
  const results: {
    personA: string;
    personB: string;
    matchId: string;
    flow: string;
  }[] = [];
  const errors: { personA: string; personB: string; error: string }[] = [];
  const resend = new Resend(process.env.RESEND_API_KEY);

  for (const { a, b } of pairs) {
    try {
      // Re-fetch to get fresh status (might have changed during this run)
      const personA = await getEntry(a.id);
      const personB = await getEntry(b.id);
      if (!personA || !personB) {
        errors.push({ personA: a.name || a.email, personB: b.name || b.email, error: "Entry not found" });
        continue;
      }
      if (activeStatuses.has(personA.status) || activeStatuses.has(personB.status)) {
        errors.push({
          personA: personA.name || personA.email,
          personB: personB.name || personB.email,
          error: `Status conflict: ${personA.status}/${personB.status}`,
        });
        continue;
      }

      // Re-check re-match guard
      const priorIds = await getPriorMatchedIds(personA.id);
      if (priorIds.includes(personB.id)) {
        errors.push({
          personA: personA.name || personA.email,
          personB: personB.name || personB.email,
          error: "Prior match exists",
        });
        continue;
      }

      const aReady = personA.status === "ready";
      const bReady = personB.status === "ready";

      if (aReady && bReady) {
        // Both ready → instant intro
        const match = await createMatch(personA.id, personB.id);
        const html = buildIntroEmailHtml(personA, personB);
        const emailResult = await resend.emails.send({
          from: "Matt from Vipassana.cool <matt@vipassana.cool>",
          to: [personA.email, personB.email],
          replyTo: [personA.email, personB.email],
          subject: "Your Practice Buddy match is here",
          html,
          headers: { "X-Entity-Ref-ID": match.id },
        });
        await sql`
          INSERT INTO vipassana_emails (resend_id, direction, from_email, to_email, subject, body_html, status)
          VALUES (${emailResult.data?.id || null}, 'outbound', 'Matt from Vipassana.cool <matt@vipassana.cool>',
                  ${[personA.email, personB.email].join(", ")}, 'Your Practice Buddy match is here', ${html}, 'sent')
        `;
        results.push({
          personA: personA.name || personA.email,
          personB: personB.name || personB.email,
          matchId: match.id,
          flow: "both-ready (instant intro)",
        });
      } else {
        // Confirmation flow
        const match = await createMatchWithTokens(personA.id, personB.id);

        if (aReady) {
          await confirmMatchPerson(match.id, "a");
          await updateEntryStatus(personA.id, "engaged", "auto-match", match.id, "auto-confirmed (ready status)");
        }
        if (bReady) {
          await confirmMatchPerson(match.id, "b");
          await updateEntryStatus(personB.id, "engaged", "auto-match", match.id, "auto-confirmed (ready status)");
        }

        const toConfirm: [WaitlistEntry, WaitlistEntry, string, "a" | "b"][] = [];
        if (!aReady) toConfirm.push([personA, personB, match.person_a_token!, "a"]);
        if (!bReady) toConfirm.push([personB, personA, match.person_b_token!, "b"]);

        for (const [recipient, matchedWith, token] of toConfirm) {
          const html = buildConfirmationEmailHtml(recipient, matchedWith, token);
          const emailResult = await resend.emails.send({
            from: "Matt from Vipassana.cool <matt@vipassana.cool>",
            to: [recipient.email],
            subject: "I found a practice buddy match for you",
            html,
            headers: { "X-Entity-Ref-ID": match.id },
          });
          await updateEntryStatus(recipient.id, "contacted", "auto-match", match.id, "auto-match confirmation email sent");
          await sql`
            INSERT INTO vipassana_emails (resend_id, direction, from_email, to_email, subject, body_html, status)
            VALUES (${emailResult.data?.id || null}, 'outbound', 'Matt from Vipassana.cool <matt@vipassana.cool>',
                    ${recipient.email}, 'I found a practice buddy match for you', ${html}, 'sent')
          `;
        }

        const flow = aReady || bReady ? "one-ready" : "both-pending";
        results.push({
          personA: personA.name || personA.email,
          personB: personB.name || personB.email,
          matchId: match.id,
          flow,
        });
      }

      // Rate limit: 2s between sends
      if (pairs.indexOf({ a, b, diff: 0 }) < pairs.length - 1) {
        await new Promise((r) => setTimeout(r, 2000));
      }
    } catch (err) {
      errors.push({
        personA: a.name || a.email,
        personB: b.name || b.email,
        error: String(err),
      });
    }
  }

  // Send admin summary
  if (results.length > 0 || errors.length > 0) {
    try {
      const matchList = results
        .map(
          (r) =>
            `<li><strong>${r.personA} + ${r.personB}</strong> — ${r.flow}</li>`
        )
        .join("");
      const errorList = errors
        .map(
          (e) =>
            `<li style="color:red">${e.personA} + ${e.personB}: ${e.error}</li>`
        )
        .join("");
      await resend.emails.send({
        from: "Vipassana.cool <hello@vipassana.cool>",
        to: "i@m13v.com",
        subject: `Auto-match: ${results.length} pair${results.length !== 1 ? "s" : ""} matched${errors.length > 0 ? `, ${errors.length} error${errors.length !== 1 ? "s" : ""}` : ""}`,
        html: `
          <p>Auto-matching cron completed.</p>
          <p><strong>Pool:</strong> ${candidates.length} total, ${eligible.length} eligible</p>
          ${results.length > 0 ? `<p><strong>Matched (${results.length}):</strong></p><ul>${matchList}</ul>` : ""}
          ${errors.length > 0 ? `<p><strong>Errors (${errors.length}):</strong></p><ul>${errorList}</ul>` : ""}
          <p><a href="https://vipassana.cool/admin/matching">View dashboard</a></p>
        `,
      });
    } catch {
      /* non-critical */
    }
  }

  return NextResponse.json({
    success: true,
    pool: candidates.length,
    eligible: eligible.length,
    viablePairs: allViable.length,
    matched: results.length,
    results,
    errors,
  });
}
