import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

interface ResendWebhookPayload {
  type: string;
  created_at: string;
  data: {
    email_id: string;
    from: string;
    to: string[];
    subject: string;
    text?: string;
    html?: string;
  };
}

async function fetchInboundContent(emailId: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  try {
    const res = await fetch(
      `https://api.resend.com/emails/receiving/${emailId}`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return { text: data?.text, html: data?.html };
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  try {
    const payload: ResendWebhookPayload = await request.json();
    console.log("[Vipassana Webhook]", payload.type, payload.data.email_id);

    if (payload.type !== "email.received") {
      return NextResponse.json({ success: true, message: "ignored" });
    }

    const { data } = payload;

    // Only process emails addressed to @vipassana.cool
    const isForVipassana = data.to.some((addr) => addr.endsWith("@vipassana.cool"));
    if (!isForVipassana) {
      console.log("[Vipassana Webhook] Ignoring — not addressed to @vipassana.cool:", data.to);
      return NextResponse.json({ success: true, message: "not for vipassana.cool" });
    }

    const content = await fetchInboundContent(data.email_id);

    const sql = neon(process.env.DATABASE_URL!);

    // Check if already processed (dedup by resend_id)
    const existing = await sql`SELECT id FROM vipassana_emails WHERE resend_id = ${data.email_id} LIMIT 1`;
    if (existing.length > 0) {
      return NextResponse.json({ success: true, message: "already processed" });
    }

    await sql`
      INSERT INTO vipassana_emails (resend_id, direction, from_email, to_email, subject, body_text, body_html, status)
      VALUES (${data.email_id}, 'inbound', ${data.from}, ${data.to[0] || ""}, ${data.subject || ""}, ${content?.text || data.text || null}, ${content?.html || data.html || null}, 'received')
    `;

    return NextResponse.json({ success: true });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("[Vipassana Webhook] Error:", msg, error);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ status: "ok" });
}
