import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { expireStaleMatches, endStalePendingMatches } from "@/lib/db";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { expiredCount, expiredMatches } = await expireStaleMatches(3);
  const { endedCount, endedMatches } = await endStalePendingMatches(14);

  if (expiredCount > 0 || endedCount > 0) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const expiredList = expiredMatches
        .map((m) => `<li>${m.person_a_name} + ${m.person_b_name}</li>`)
        .join("");
      const endedList = endedMatches
        .map((m) => `<li>${m.person_a_name} + ${m.person_b_name}</li>`)
        .join("");
      const subjectParts: string[] = [];
      if (expiredCount > 0) subjectParts.push(`${expiredCount} expired`);
      if (endedCount > 0) subjectParts.push(`${endedCount} ended`);
      const expiredSection = expiredCount > 0
        ? `<p>${expiredCount} confirming match${expiredCount > 1 ? "es" : ""} expired after 3 days with no response. Both people moved back to pending.</p><ul>${expiredList}</ul>`
        : "";
      const endedSection = endedCount > 0
        ? `<p>${endedCount} pending match${endedCount > 1 ? "es" : ""} ended after 14 days with no email reply. Both people moved back to ready.</p><ul>${endedList}</ul>`
        : "";
      await resend.emails.send({
        from: "Vipassana.cool <hello@vipassana.cool>",
        to: "i@m13v.com",
        subject: `Match cleanup: ${subjectParts.join(", ")}`,
        html: `${expiredSection}${endedSection}<p><a href="https://vipassana.cool/admin/matching">View dashboard</a></p>`,
      });
    } catch {
      /* non-critical */
    }
  }

  return NextResponse.json({ success: true, expiredCount, expiredMatches, endedCount, endedMatches });
}
