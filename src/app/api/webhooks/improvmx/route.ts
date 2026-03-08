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
    const payload: ImprovMXWebhookPayload = await request.json();
    console.log("[Vipassana ImprovMX Webhook]", payload.subject, payload.from);

    const fromEmail = payload.from || "";
    const toEmail = payload.to || "";
    const subject = payload.subject || "";
    const bodyText = payload.text || null;
    const bodyHtml = payload.html || null;
    const messageId = payload.message_id || null;

    const sql = neon(process.env.DATABASE_URL!);
    await sql`
      INSERT INTO vipassana_emails (resend_id, direction, from_email, to_email, subject, body_text, body_html, status)
      VALUES (${messageId}, 'inbound', ${fromEmail}, ${toEmail}, ${subject}, ${bodyText}, ${bodyHtml}, 'received')
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
