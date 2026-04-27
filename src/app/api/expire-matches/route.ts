import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { expireStaleMatches, endStalePendingMatches } from "@/lib/db";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const confirmingResult = await expireStaleMatches(3);
  const pendingResult = await endStalePendingMatches(14);

  // Stale pending split into 'ended' (someone confirmed) and 'expired' (neither did)
  const totalExpired = confirmingResult.expiredCount + pendingResult.expiredCount;
  const totalEnded = pendingResult.endedCount;

  if (totalExpired > 0 || totalEnded > 0) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const renderList = (items: { person_a_name: string | null; person_b_name: string | null }[]) =>
        items.map((m) => `<li>${m.person_a_name} + ${m.person_b_name}</li>`).join("");
      const subjectParts: string[] = [];
      if (totalExpired > 0) subjectParts.push(`${totalExpired} expired`);
      if (totalEnded > 0) subjectParts.push(`${totalEnded} ended`);
      const confirmingSection = confirmingResult.expiredCount > 0
        ? `<p><strong>${confirmingResult.expiredCount} confirming match${confirmingResult.expiredCount > 1 ? "es" : ""}</strong> expired after 3 days with no response.</p><ul>${renderList(confirmingResult.expiredMatches)}</ul>`
        : "";
      const pendingExpiredSection = pendingResult.expiredCount > 0
        ? `<p><strong>${pendingResult.expiredCount} stale pending match${pendingResult.expiredCount > 1 ? "es" : ""}</strong> swept after 14 days (neither confirmed). Both people moved back to ready, pair released for re-matching.</p><ul>${renderList(pendingResult.expiredMatches)}</ul>`
        : "";
      const pendingEndedSection = pendingResult.endedCount > 0
        ? `<p><strong>${pendingResult.endedCount} pending match${pendingResult.endedCount > 1 ? "es" : ""}</strong> ended after 14 days with no email reply (one or both had confirmed). Both people moved back to ready; pair stays blocked from re-matching.</p><ul>${renderList(pendingResult.endedMatches)}</ul>`
        : "";
      await resend.emails.send({
        from: "Vipassana.cool <hello@vipassana.cool>",
        to: "i@m13v.com",
        subject: `Match cleanup: ${subjectParts.join(", ")}`,
        html: `${confirmingSection}${pendingExpiredSection}${pendingEndedSection}<p><a href="https://vipassana.cool/admin/matching">View dashboard</a></p>`,
      });
    } catch {
      /* non-critical */
    }
  }

  return NextResponse.json({ success: true, confirming: confirmingResult, pending: pendingResult });
}
