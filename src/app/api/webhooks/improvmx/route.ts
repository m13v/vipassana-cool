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

    // ImprovMX uses nested headers object and different field names
    const headers = (payload.headers || {}) as Record<string, string>;
    const fromEmail = headers.from || headers.From || payload.from || (payload as Record<string, unknown>).envelope_from as string || "";
    const toEmail = headers.to || headers.To || payload.to || (payload as Record<string, unknown>).envelope_to as string || "";
    const subject = headers.subject || headers.Subject || payload.subject || "";
    const bodyText = (payload as Record<string, unknown>).text as string || (payload as Record<string, unknown>)["body-plain"] as string || null;
    const bodyHtml = payload.html || (payload as Record<string, unknown>)["body-html"] as string || null;
    const messageId = headers["message-id"] || headers["Message-ID"] || payload.message_id || null;

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
