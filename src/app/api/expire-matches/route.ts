import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { expireStaleMatches } from "@/lib/db";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { expiredCount, expiredMatches } = await expireStaleMatches(7);

  if (expiredCount > 0) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const matchList = expiredMatches
        .map((m) => `<li>${m.person_a_name} + ${m.person_b_name}</li>`)
        .join("");
      await resend.emails.send({
        from: "Vipassana.cool <hello@vipassana.cool>",
        to: "i@m13v.com",
        subject: `${expiredCount} match${expiredCount > 1 ? "es" : ""} expired (no response after 7 days)`,
        html: `<p>${expiredCount} confirming match${expiredCount > 1 ? "es" : ""} expired after 7 days with no response. Both people moved back to pending.</p><ul>${matchList}</ul><p><a href="https://vipassana.cool/admin/matching">View dashboard</a></p>`,
      });
    } catch {
      /* non-critical */
    }
  }

  return NextResponse.json({ success: true, expiredCount, expiredMatches });
}
