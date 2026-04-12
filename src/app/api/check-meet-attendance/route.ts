import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import { fetchMeetAttendanceEvents } from "@/lib/google-meet";

/**
 * Cron: Poll the Google Admin Reports API for Meet activity and record
 * per-participant attendance for active matches.
 *
 * Guarded by CRON_SECRET. Scheduled every 3 hours (offset from check-rsvp).
 */
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const sql = neon(process.env.DATABASE_URL!);

  // Build the set of meet codes to watch. We join meet_links to matches to
  // filter by match status and capture the associated person.
  const rows = await sql`
    SELECT DISTINCT ml.meet_url, ml.match_id, m.person_a_id, m.person_b_id,
           a.email as email_a, b.email as email_b
    FROM meet_links ml
    JOIN matches m ON m.id = ml.match_id
    JOIN waitlist_entries a ON a.id = m.person_a_id
    JOIN waitlist_entries b ON b.id = m.person_b_id
    WHERE m.status IN ('pending', 'replied', 'active', 'scheduling')
  ` as { meet_url: string; match_id: string; person_a_id: string; person_b_id: string; email_a: string; email_b: string }[];

  // Map meet_code -> match info (one entry per match)
  const byCode = new Map<string, { matchId: string; personAId: string; personBId: string; emailA: string; emailB: string }>();
  for (const r of rows) {
    const code = extractMeetCode(r.meet_url);
    if (!code) continue;
    if (!byCode.has(code)) {
      byCode.set(code, {
        matchId: r.match_id,
        personAId: r.person_a_id,
        personBId: r.person_b_id,
        emailA: r.email_a,
        emailB: r.email_b,
      });
    }
  }

  if (byCode.size === 0) {
    return NextResponse.json({ success: true, checked: 0, inserted: 0 });
  }

  const startTime = new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString();
  let inserted = 0;
  const errors: { code: string; error: string }[] = [];

  for (const [code, info] of byCode) {
    try {
      const events = await fetchMeetAttendanceEvents({ startTime, meetingCode: code });
      for (const ev of events) {
        const email = (ev.participantEmail || "").toLowerCase();
        let personId: string | null = null;
        if (email === info.emailA.toLowerCase()) personId = info.personAId;
        else if (email === info.emailB.toLowerCase()) personId = info.personBId;

        try {
          const result = await sql`
            INSERT INTO meet_attendance
              (match_id, person_id, person_email, meet_code, joined_at, duration_sec, event_time, raw_event)
            VALUES
              (${info.matchId}, ${personId}, ${ev.participantEmail}, ${ev.meetingCode},
               ${ev.startTime}, ${ev.durationSec}, ${ev.startTime}, ${JSON.stringify(ev.raw)})
            ON CONFLICT (meet_code, person_email, joined_at) DO NOTHING
            RETURNING id
          `;
          if (result.length > 0) inserted++;
        } catch (dbErr) {
          errors.push({ code, error: `db: ${String(dbErr)}` });
        }
      }
    } catch (err) {
      errors.push({ code, error: String(err) });
    }
  }

  return NextResponse.json({
    success: true,
    checked: byCode.size,
    inserted,
    errors: errors.length > 0 ? errors : undefined,
  });
}

function extractMeetCode(meetUrl: string): string | null {
  if (!meetUrl) return null;
  // Format: https://meet.google.com/xxx-yyyy-zzz
  const m = meetUrl.match(/meet\.google\.com\/([a-z0-9-]+)/i);
  return m ? m[1] : null;
}
