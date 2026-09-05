import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getMatchByToken, getEntry, markSettled } from "@/lib/db";

// POST /api/settle  Body: { token }
//
// Explicit "I already have a buddy — stop matching me" off-switch, reachable
// from the decline page (/match-confirmed?response=no). The per-person match
// token authenticates the request (same token /api/confirm-match uses), so no
// login is needed. Sets the person to the sticky 'settled' status: auto-match
// excludes them from the pool, but their email keeps working (unlike
// unsubscribe) and they can rejoin later. Idempotent — clicking twice is a
// harmless no-op. This does NOT touch the matcher's recycle logic; it only
// removes this one person from future proposals.
export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const token = typeof body?.token === "string" ? body.token : "";
    if (!token) return NextResponse.json({ error: "Missing token" }, { status: 400 });

    const match = await getMatchByToken(token);
    if (!match) return NextResponse.json({ error: "Invalid or expired link" }, { status: 404 });
    const personId = match.person_a_token === token ? match.person_a_id : match.person_b_id;
    const person = await getEntry(personId);
    if (!person) return NextResponse.json({ error: "Person not found" }, { status: 404 });

    const alreadySettled = person.status === "settled";
    if (!alreadySettled) {
      await markSettled(personId, "self-settled from decline page: already has a buddy", "user_click");

      // Best-effort admin notice so we know someone opted out of matching (but
      // stayed subscribed). Skipped on the idempotent repeat to avoid dupes.
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: "Vipassana.cool <hello@inbound.vipassana.cool>",
          to: ["i@m13v.com"],
          subject: `${person.name || "Someone"} self-settled — already has a buddy`,
          html: `<p><strong>${person.name || person.email}</strong> clicked "I already have a buddy, stop matching me" on the decline page.</p><p>They're now <code>settled</code>: out of the matching pool, email still active. <a href="https://vipassana.cool/admin/matching">View dashboard →</a></p>`,
        });
      } catch { /* non-critical */ }
    }

    return NextResponse.json({ success: true, alreadySettled });
  } catch (err) {
    console.error("[settle] error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
