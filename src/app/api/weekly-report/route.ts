import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const POSTHOG_HOST = "https://us.i.posthog.com";

// Pull the last 7 days of matching activity from the activity log so the admin
// gets one weekly digest instead of a per-cron-run email from auto-match (every
// 30 min) and expire-matches (daily). Those crons still run on their own
// schedule, they just no longer email on success — only on error.
async function getMatchingStats() {
  const sql = neon(process.env.DATABASE_URL!);
  const [newMatchesRow, transitionRows, activeRow] = await Promise.all([
    sql`SELECT count(DISTINCT match_id) AS n
        FROM vipassana_activity_log
        WHERE event_type = 'match_created'
          AND created_at > now() - interval '7 days'`,
    sql`SELECT new_value, count(*) AS n
        FROM vipassana_activity_log
        WHERE event_type = 'match_status_change'
          AND created_at > now() - interval '7 days'
        GROUP BY new_value`,
    sql`SELECT count(*) AS n FROM matches
        WHERE status IN ('confirming', 'pending', 'replied', 'scheduling', 'active')`,
  ]);
  const transitions: Record<string, number> = {};
  for (const r of transitionRows as { new_value: string; n: number }[]) {
    transitions[r.new_value] = Number(r.n);
  }
  return {
    newMatches: Number((newMatchesRow as { n: number }[])[0]?.n ?? 0),
    expired: transitions["expired"] ?? 0,
    ended: transitions["ended"] ?? 0,
    declined: transitions["declined"] ?? 0,
    activeNow: Number((activeRow as { n: number }[])[0]?.n ?? 0),
  };
}

export async function GET(request: NextRequest) {
  // Verify cron secret
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const projectId = process.env.POSTHOG_PROJECT_ID!;
  const phKey = process.env.POSTHOG_PERSONAL_API_KEY!;
  const packingListAudienceId = process.env.RESEND_PACKING_LIST_AUDIENCE_ID!;
  const waitlistAudienceId = process.env.RESEND_WAITLIST_AUDIENCE_ID!;

  try {
    // Fetch stats in parallel
    const [pageviewStats, topPages, subscriberData, eventBreakdown, waitlistWeek, waitlistTotal, matchingStats] =
      await Promise.all([
        hogqlQuery(projectId, phKey, `
          SELECT
            count() as total_pageviews,
            uniq(distinct_id) as unique_visitors
          FROM events
          WHERE timestamp > now() - interval 7 day
            AND event = '$pageview'
        `),
        hogqlQuery(projectId, phKey, `
          SELECT
            properties.$current_url as url,
            count() as views,
            uniq(distinct_id) as visitors
          FROM events
          WHERE timestamp > now() - interval 7 day
            AND event = '$pageview'
          GROUP BY url
          ORDER BY views DESC
          LIMIT 10
        `),
        fetch(`https://api.resend.com/audiences/${packingListAudienceId}/contacts`, {
          headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
        }).then((r) => r.json()),
        hogqlQuery(projectId, phKey, `
          SELECT
            event,
            count() as total
          FROM events
          WHERE timestamp > now() - interval 7 day
            AND event NOT LIKE '$%'
          GROUP BY event
          ORDER BY total DESC
          LIMIT 10
        `),
        hogqlQuery(projectId, phKey, `
          SELECT count() as signups
          FROM events
          WHERE timestamp > now() - interval 7 day
            AND (event = 'waitlist_signup'
                 OR (event = 'newsletter_subscribed' AND properties.source = 'waitlist'))
        `),
        hogqlQuery(projectId, phKey, `
          SELECT count() as signups
          FROM events
          WHERE event = 'waitlist_signup'
             OR (event = 'newsletter_subscribed' AND properties.source = 'waitlist')
        `),
        getMatchingStats(),
      ]);

    const totalPageviews = pageviewStats.results?.[0]?.[0] ?? 0;
    const uniqueVisitors = pageviewStats.results?.[0]?.[1] ?? 0;
    const subscriberCount = subscriberData?.data?.length ?? 0;
    const waitlistNewThisWeek = waitlistWeek.results?.[0]?.[0] ?? 0;
    const waitlistAllTime = waitlistTotal.results?.[0]?.[0] ?? 0;

    // Format top pages
    const topPagesRows = (topPages.results ?? [])
      .map(
        (r: [string, number, number]) =>
          `<tr>
            <td style="padding:8px 12px;border-bottom:1px solid #f0ede8;font-size:13px;max-width:250px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${cleanUrl(r[0])}</td>
            <td style="padding:8px 12px;border-bottom:1px solid #f0ede8;font-size:13px;text-align:center;">${r[1]}</td>
            <td style="padding:8px 12px;border-bottom:1px solid #f0ede8;font-size:13px;text-align:center;">${r[2]}</td>
          </tr>`
      )
      .join("");

    // Format custom events
    const customEventRows = (eventBreakdown.results ?? [])
      .map(
        (r: [string, number]) =>
          `<tr>
            <td style="padding:6px 12px;border-bottom:1px solid #f0ede8;font-size:13px;">${r[0]}</td>
            <td style="padding:6px 12px;border-bottom:1px solid #f0ede8;font-size:13px;text-align:center;">${r[1]}</td>
          </tr>`
      )
      .join("");

    const now = new Date();
    const weekStart = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const dateRange = `${weekStart.toLocaleDateString("en-US", { month: "short", day: "numeric" })} – ${now.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`;

    const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#faf9f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#2c2c2c;">
  <div style="max-width:600px;margin:0 auto;padding:40px 24px;">
    <div style="text-align:center;margin-bottom:32px;">
      <p style="font-size:12px;text-transform:uppercase;letter-spacing:2px;color:#8b7355;margin:0 0 8px;">Vipassana.cool</p>
      <h1 style="font-size:24px;font-weight:700;margin:0;">Weekly Report</h1>
      <p style="color:#6b6b6b;margin:8px 0 0;font-size:14px;">${dateRange}</p>
    </div>

    <div style="display:flex;gap:12px;margin-bottom:24px;">
      <div style="flex:1;background:#ffffff;border:1px solid #e8e4de;border-radius:12px;padding:20px;text-align:center;">
        <div style="font-size:32px;font-weight:700;color:#8b7355;">${totalPageviews}</div>
        <div style="font-size:12px;color:#6b6b6b;margin-top:4px;">Pageviews</div>
      </div>
      <div style="flex:1;background:#ffffff;border:1px solid #e8e4de;border-radius:12px;padding:20px;text-align:center;">
        <div style="font-size:32px;font-weight:700;color:#8b7355;">${uniqueVisitors}</div>
        <div style="font-size:12px;color:#6b6b6b;margin-top:4px;">Unique Visitors</div>
      </div>
      <div style="flex:1;background:#ffffff;border:1px solid #e8e4de;border-radius:12px;padding:20px;text-align:center;">
        <div style="font-size:32px;font-weight:700;color:#8b7355;">${subscriberCount}</div>
        <div style="font-size:12px;color:#6b6b6b;margin-top:4px;">Packing List</div>
      </div>
    </div>

    <div style="background:#ffffff;border:1px solid #e8e4de;border-radius:12px;padding:20px;margin-bottom:24px;">
      <h2 style="font-size:16px;margin:0 0 12px;color:#8b7355;">Practice Buddy Waitlist</h2>
      <div style="display:flex;gap:24px;">
        <div>
          <span style="font-size:24px;font-weight:700;color:#8b7355;">${waitlistNewThisWeek}</span>
          <span style="font-size:13px;color:#6b6b6b;margin-left:6px;">new this week</span>
        </div>
        <div>
          <span style="font-size:24px;font-weight:700;color:#8b7355;">${waitlistAllTime}</span>
          <span style="font-size:13px;color:#6b6b6b;margin-left:6px;">total all-time</span>
        </div>
      </div>
    </div>

    <div style="background:#ffffff;border:1px solid #e8e4de;border-radius:12px;padding:20px;margin-bottom:24px;">
      <h2 style="font-size:16px;margin:0 0 12px;color:#8b7355;">Matching (last 7 days)</h2>
      <div style="display:flex;flex-wrap:wrap;gap:24px;">
        <div>
          <span style="font-size:24px;font-weight:700;color:#8b7355;">${matchingStats.newMatches}</span>
          <span style="font-size:13px;color:#6b6b6b;margin-left:6px;">new matches</span>
        </div>
        <div>
          <span style="font-size:24px;font-weight:700;color:#8b7355;">${matchingStats.expired}</span>
          <span style="font-size:13px;color:#6b6b6b;margin-left:6px;">expired</span>
        </div>
        <div>
          <span style="font-size:24px;font-weight:700;color:#8b7355;">${matchingStats.ended}</span>
          <span style="font-size:13px;color:#6b6b6b;margin-left:6px;">ended</span>
        </div>
        <div>
          <span style="font-size:24px;font-weight:700;color:#8b7355;">${matchingStats.declined}</span>
          <span style="font-size:13px;color:#6b6b6b;margin-left:6px;">declined</span>
        </div>
        <div>
          <span style="font-size:24px;font-weight:700;color:#8b7355;">${matchingStats.activeNow}</span>
          <span style="font-size:13px;color:#6b6b6b;margin-left:6px;">active now</span>
        </div>
      </div>
      <p style="margin:14px 0 0;font-size:12px;"><a href="https://vipassana.cool/admin/matching" style="color:#8b7355;">Open matching dashboard</a></p>
    </div>

    <div style="background:#ffffff;border:1px solid #e8e4de;border-radius:12px;padding:20px;margin-bottom:24px;">
      <h2 style="font-size:16px;margin:0 0 12px;color:#8b7355;">Top Pages</h2>
      <table style="width:100%;border-collapse:collapse;">
        <thead>
          <tr>
            <th style="padding:8px 12px;border-bottom:2px solid #e8e4de;font-size:12px;text-align:left;color:#6b6b6b;">Page</th>
            <th style="padding:8px 12px;border-bottom:2px solid #e8e4de;font-size:12px;text-align:center;color:#6b6b6b;">Views</th>
            <th style="padding:8px 12px;border-bottom:2px solid #e8e4de;font-size:12px;text-align:center;color:#6b6b6b;">Visitors</th>
          </tr>
        </thead>
        <tbody>${topPagesRows || '<tr><td colspan="3" style="padding:12px;text-align:center;color:#6b6b6b;">No data yet</td></tr>'}</tbody>
      </table>
    </div>

    ${
      customEventRows
        ? `<div style="background:#ffffff;border:1px solid #e8e4de;border-radius:12px;padding:20px;margin-bottom:24px;">
      <h2 style="font-size:16px;margin:0 0 12px;color:#8b7355;">Custom Events</h2>
      <table style="width:100%;border-collapse:collapse;">
        <thead>
          <tr>
            <th style="padding:6px 12px;border-bottom:2px solid #e8e4de;font-size:12px;text-align:left;color:#6b6b6b;">Event</th>
            <th style="padding:6px 12px;border-bottom:2px solid #e8e4de;font-size:12px;text-align:center;color:#6b6b6b;">Count</th>
          </tr>
        </thead>
        <tbody>${customEventRows}</tbody>
      </table>
    </div>`
        : ""
    }

    <div style="text-align:center;padding:20px 0;border-top:1px solid #e8e4de;">
      <p style="font-size:12px;color:#6b6b6b;margin:0;">
        <a href="https://us.posthog.com/project/313874" style="color:#8b7355;">Open PostHog</a> ·
        <a href="https://vipassana.cool" style="color:#8b7355;">vipassana.cool</a>
      </p>
    </div>
  </div>
</body>
</html>`;

    await resend.emails.send({
      from: "Vipassana.cool <hello@inbound.vipassana.cool>",
      to: "i@m13v.com",
      subject: `Vipassana.cool Weekly — ${totalPageviews} views, ${subscriberCount} subs, ${waitlistAllTime} waitlist`,
      html,
    });

    return NextResponse.json({ success: true, totalPageviews, uniqueVisitors, subscriberCount, waitlistNewThisWeek, waitlistAllTime });
  } catch (error) {
    console.error("Weekly report error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

async function hogqlQuery(projectId: string, apiKey: string, query: string) {
  const res = await fetch(`${POSTHOG_HOST}/api/projects/${projectId}/query/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: { kind: "HogQLQuery", query } }),
  });
  return res.json();
}

function cleanUrl(url: string): string {
  try {
    return new URL(url).pathname || "/";
  } catch {
    return url;
  }
}
