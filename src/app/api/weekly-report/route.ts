import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const POSTHOG_HOST = "https://us.i.posthog.com";

export async function GET(request: NextRequest) {
  // Verify cron secret
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const projectId = process.env.POSTHOG_PROJECT_ID!;
  const phKey = process.env.POSTHOG_PERSONAL_API_KEY!;
  const audienceId = process.env.RESEND_AUDIENCE_ID!;

  try {
    // Fetch stats in parallel
    const [pageviewStats, topPages, subscriberData, eventBreakdown] =
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
        fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
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
      ]);

    const totalPageviews = pageviewStats.results?.[0]?.[0] ?? 0;
    const uniqueVisitors = pageviewStats.results?.[0]?.[1] ?? 0;
    const subscriberCount = eventBreakdown.results?.length
      ? subscriberData?.data?.length ?? 0
      : subscriberData?.data?.length ?? 0;

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
        <div style="font-size:12px;color:#6b6b6b;margin-top:4px;">Subscribers</div>
      </div>
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
      from: "Vipassana.cool <hello@vipassana.cool>",
      to: "i@m13v.com",
      subject: `Vipassana.cool Weekly — ${totalPageviews} pageviews, ${subscriberCount} subscribers`,
      html,
    });

    return NextResponse.json({ success: true, totalPageviews, uniqueVisitors, subscriberCount });
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
