import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

interface ImprovMXWebhookPayload {
  event_type?: string;
  message_id?: string;
  from?: string;
  to?: string;
  subject?: string;
  text?: string;
  html?: string;
  // ImprovMX sends various field names
  [key: string]: unknown;
}

export async function POST(request: Request) {
  try {
    const raw = await request.text();
    console.log("[Vipassana ImprovMX Webhook] raw payload:", raw.slice(0, 2000));

    let payload: ImprovMXWebhookPayload;
    try {
      payload = JSON.parse(raw);
    } catch {
      // ImprovMX may send form-encoded data
      const params = new URLSearchParams(raw);
      payload = Object.fromEntries(params.entries());
    }

    // ImprovMX webhook payload structure: { domain, email: { id, subject, sender, recipient }, event: { status, ... }, action }
    const email = (payload as Record<string, unknown>).email as Record<string, string> | undefined;
    const fromEmail = email?.sender || payload.from || "";
    const toEmail = email?.recipient || payload.to || "";
    const subject = email?.subject || payload.subject || "";
    const bodyText = payload.text || null;
    const bodyHtml = payload.html || null;
    const messageId = email?.id || payload.message_id || null;

    const sql = neon(process.env.DATABASE_URL!);
    await sql`
      INSERT INTO vipassana_emails (resend_id, direction, from_email, to_email, subject, body_text, body_html, status, raw_payload)
      VALUES (${messageId}, 'inbound', ${fromEmail}, ${toEmail}, ${subject}, ${bodyText}, ${bodyHtml}, 'received', ${raw})
    `;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Vipassana ImprovMX Webhook] Error:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ status: "ok" });
}
