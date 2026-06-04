import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { expireStaleMatches, endStalePendingMatches } from "@/lib/db";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Run the actual cleanup work. This still runs daily — only the per-run
  // "success" admin email was removed; the weekly report (/api/weekly-report)
  // now carries the expired/ended counts. We email here ONLY if the cleanup
  // itself throws, so a broken cron still pings immediately.
  try {
    const confirmingResult = await expireStaleMatches(3);
    const pendingResult = await endStalePendingMatches(14);
    return NextResponse.json({ success: true, confirming: confirmingResult, pending: pendingResult });
  } catch (err) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Vipassana.cool <hello@inbound.vipassana.cool>",
        to: "i@m13v.com",
        subject: "⚠️ expire-matches cron FAILED",
        html: `<p>The daily match-cleanup cron threw an error and did not complete.</p>
               <pre style="white-space:pre-wrap">${String(err)}</pre>
               <p><a href="https://vipassana.cool/admin/matching">View dashboard</a></p>`,
      });
    } catch {
      /* non-critical: don't mask the original error if the alert email also fails */
    }
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
