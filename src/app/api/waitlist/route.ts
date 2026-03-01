import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

type WaitlistData = {
  name: string;
  email: string;
  isOldStudent: string;
  isGoenkatradition: string;
  timezone: string;
  city: string;
  frequency: string;
  morningTime: string;
  eveningTime: string;
  days: string[];
  sessionDuration: string;
  hasMaintainedPractice: string;
  practiceLength: string;
};

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID!;

  try {
    const data: WaitlistData = await request.json();

    if (!data.email || typeof data.email !== "string" || !data.email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    // Split name into first/last for Resend contact
    const nameParts = (data.name || "").trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    // Add to audience (ignore "already exists" errors)
    try {
      await resend.contacts.create({
        email: data.email,
        audienceId: AUDIENCE_ID,
        firstName,
        lastName,
        unsubscribed: false,
      });
    } catch (contactError: unknown) {
      const msg = contactError instanceof Error ? contactError.message : "";
      if (!msg.includes("already exists")) throw contactError;
    }

    // Send confirmation email to the user
    await resend.emails.send({
      from: "Vipassana.cool <hello@vipassana.cool>",
      to: data.email,
      subject: "You're on the Practice Buddy waitlist",
      html: getWaitlistEmail(data),
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Waitlist API error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

function getWaitlistEmail(data: WaitlistData): string {
  const firstName = (data.name || "").trim().split(/\s+/)[0] || "friend";
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>You're on the Practice Buddy Waitlist</title>
</head>
<body style="margin:0;padding:0;background-color:#faf9f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#2c2c2c;">
  <div style="max-width:600px;margin:0 auto;padding:40px 24px;">

    <div style="text-align:center;margin-bottom:32px;">
      <p style="font-size:12px;text-transform:uppercase;letter-spacing:2px;color:#8b7355;margin:0 0 8px;">Vipassana.cool</p>
      <h1 style="font-size:28px;font-weight:700;margin:0;line-height:1.3;">You're on the waitlist, ${firstName}</h1>
      <p style="color:#6b6b6b;margin:12px 0 0;font-size:15px;">Practice Buddy is coming soon</p>
    </div>

    <div style="background:#ffffff;border:1px solid #e8e4de;border-radius:12px;padding:24px;margin-bottom:24px;">
      <p style="font-size:15px;line-height:1.7;margin:0 0 16px;">
        Thank you for signing up. We have your practice preferences and will use them to find you the right match.
      </p>
      <p style="font-size:15px;line-height:1.7;margin:0 0 16px;">
        Here's what you told us:
      </p>
      <table style="width:100%;font-size:14px;line-height:1.6;">
        <tr><td style="padding:4px 8px 4px 0;color:#6b6b6b;vertical-align:top;white-space:nowrap;">Schedule</td><td style="padding:4px 0;">${data.frequency || "—"}, ${data.sessionDuration || "—"} per session</td></tr>
        <tr><td style="padding:4px 8px 4px 0;color:#6b6b6b;vertical-align:top;white-space:nowrap;">Time</td><td style="padding:4px 0;">${data.morningTime ? `Morning: ${data.morningTime}` : ""}${data.eveningTime ? ` · Evening: ${data.eveningTime}` : ""}</td></tr>
        <tr><td style="padding:4px 8px 4px 0;color:#6b6b6b;vertical-align:top;white-space:nowrap;">Days</td><td style="padding:4px 0;">${data.days.length === 7 ? "Every day" : data.days.join(", ") || "—"}</td></tr>
        <tr><td style="padding:4px 8px 4px 0;color:#6b6b6b;vertical-align:top;white-space:nowrap;">Location</td><td style="padding:4px 0;">${data.city || "—"} (${data.timezone || "—"})</td></tr>
        <tr><td style="padding:4px 8px 4px 0;color:#6b6b6b;vertical-align:top;white-space:nowrap;">Maintained practice</td><td style="padding:4px 0;">${data.hasMaintainedPractice || "—"}${data.practiceLength ? ` — ${data.practiceLength}` : ""}</td></tr>
      </table>
    </div>

    <div style="background:#ffffff;border:1px solid #e8e4de;border-radius:12px;padding:24px;margin-bottom:24px;">
      <p style="font-size:15px;line-height:1.7;margin:0;">
        We'll email you as soon as we're ready to start matching. In the meantime — keep sitting.
      </p>
    </div>

    <div style="background:#f5f2ed;border:1px solid #e8e4de;border-radius:12px;padding:24px;margin-bottom:24px;">
      <h2 style="font-size:18px;margin:0 0 12px;color:#8b7355;">While you wait</h2>
      <p style="font-size:14px;line-height:1.6;margin:0;color:#2c2c2c;">
        Check out our <a href="https://vipassana.cool/guide/daily-practice" style="color:#8b7355;">Daily Practice Guide</a> for tips on maintaining your meditation at home, and consider joining a <a href="https://www.dhamma.org/en-US/locations/mobile_virtual_events" style="color:#8b7355;">virtual group sitting</a> in the meantime.
      </p>
    </div>

    <div style="text-align:center;padding:24px 0;border-top:1px solid #e8e4de;">
      <p style="font-size:13px;color:#6b6b6b;margin:0 0 8px;">
        Made with metta by <a href="https://vipassana.cool" style="color:#8b7355;">vipassana.cool</a>
      </p>
      <p style="font-size:12px;color:#999;margin:0;">
        You received this because you joined the Practice Buddy waitlist.
      </p>
    </div>

  </div>
</body>
</html>`;
}

