import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID!;

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    // Add to audience
    await resend.contacts.create({
      email,
      audienceId: AUDIENCE_ID,
    });

    // Send the checklist email
    await resend.emails.send({
      from: "Vipassana.cool <hello@vipassana.cool>",
      to: email,
      subject: "Your 10-Day Vipassana Retreat Checklist",
      html: getChecklistEmail(),
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    // If contact already exists, still send the email
    if (message.includes("already exists")) {
      try {
        const { email } = await request.clone().json();
        await resend.emails.send({
          from: "Vipassana.cool <hello@vipassana.cool>",
          to: email,
          subject: "Your 10-Day Vipassana Retreat Checklist",
          html: getChecklistEmail(),
        });
        return NextResponse.json({ success: true });
      } catch {
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
      }
    }
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

function getChecklistEmail(): string {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your 10-Day Vipassana Retreat Checklist</title>
</head>
<body style="margin:0;padding:0;background-color:#faf9f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#2c2c2c;">
  <div style="max-width:600px;margin:0 auto;padding:40px 24px;">

    <div style="text-align:center;margin-bottom:32px;">
      <p style="font-size:12px;text-transform:uppercase;letter-spacing:2px;color:#8b7355;margin:0 0 8px;">Vipassana.cool</p>
      <h1 style="font-size:28px;font-weight:700;margin:0;line-height:1.3;">Your 10-Day Retreat Checklist</h1>
      <p style="color:#6b6b6b;margin:12px 0 0;font-size:15px;">From a practitioner with 60 days of courses completed</p>
    </div>

    <div style="background:#ffffff;border:1px solid #e8e4de;border-radius:12px;padding:24px;margin-bottom:24px;">
      <h2 style="font-size:18px;margin:0 0 4px;color:#8b7355;">Before You Go</h2>
      <p style="color:#6b6b6b;font-size:13px;margin:0 0 16px;">Planning & logistics</p>
      <ul style="list-style:none;padding:0;margin:0;">
        <li style="padding:8px 0;border-bottom:1px solid #f0ede8;font-size:14px;">&#9744; Sign up for a course at <a href="https://www.dhamma.org" style="color:#8b7355;">dhamma.org</a> — try to go with a teacher you know as course manager</li>
        <li style="padding:8px 0;border-bottom:1px solid #f0ede8;font-size:14px;">&#9744; Reserve transportation — give specific instructions to drivers, GPS can mislead on rural center roads</li>
        <li style="padding:8px 0;border-bottom:1px solid #f0ede8;font-size:14px;">&#9744; Charge laptop before leaving (and before coming back)</li>
        <li style="padding:8px 0;border-bottom:1px solid #f0ede8;font-size:14px;">&#9744; Arrive before 1 PM for check-in</li>
        <li style="padding:8px 0;font-size:14px;">&#9744; Consider room options: private rooms offer deeper focus, shared rooms add a social element — weigh what matters more to you</li>
      </ul>
    </div>

    <div style="background:#ffffff;border:1px solid #e8e4de;border-radius:12px;padding:24px;margin-bottom:24px;">
      <h2 style="font-size:18px;margin:0 0 4px;color:#8b7355;">Buy Before the Course</h2>
      <p style="color:#6b6b6b;font-size:13px;margin:0 0 16px;">Optional items that level up comfort</p>
      <ul style="list-style:none;padding:0;margin:0;">
        <li style="padding:8px 0;border-bottom:1px solid #f0ede8;font-size:14px;">&#9744; Floor chair for your room setup</li>
        <li style="padding:8px 0;border-bottom:1px solid #f0ede8;font-size:14px;">&#9744; Floor mat for your room</li>
        <li style="padding:8px 0;border-bottom:1px solid #f0ede8;font-size:14px;">&#9744; A meditation bench to try (in addition to cushions)</li>
        <li style="padding:8px 0;font-size:14px;">&#9744; Treats for the servers — a small gesture they appreciate</li>
      </ul>
    </div>

    <div style="background:#ffffff;border:1px solid #e8e4de;border-radius:12px;padding:24px;margin-bottom:24px;">
      <h2 style="font-size:18px;margin:0 0 4px;color:#8b7355;">Meditation & Comfort</h2>
      <p style="color:#6b6b6b;font-size:13px;margin:0 0 16px;">What makes or breaks the experience</p>
      <ul style="list-style:none;padding:0;margin:0;">
        <li style="padding:8px 0;border-bottom:1px solid #f0ede8;font-size:14px;">&#9744; Meditation bench or cushion</li>
        <li style="padding:8px 0;border-bottom:1px solid #f0ede8;font-size:14px;">&#9744; AirPods Max or noise-isolating headphones (anti-snoring essential)</li>
        <li style="padding:8px 0;border-bottom:1px solid #f0ede8;font-size:14px;">&#9744; Earplugs (backup for sleeping)</li>
        <li style="padding:8px 0;border-bottom:1px solid #f0ede8;font-size:14px;">&#9744; Sleeping mask</li>
        <li style="padding:8px 0;border-bottom:1px solid #f0ede8;font-size:14px;">&#9744; 3 blankets (meditation halls and rooms can be cold)</li>
        <li style="padding:8px 0;border-bottom:1px solid #f0ede8;font-size:14px;">&#9744; Sheet, cover, pillowcase</li>
        <li style="padding:8px 0;border-bottom:1px solid #f0ede8;font-size:14px;">&#9744; Duvet and pillow (if your center doesn't provide them)</li>
        <li style="padding:8px 0;font-size:14px;">&#9744; Alarm clock on batteries (phones are stored away)</li>
      </ul>
    </div>

    <div style="background:#ffffff;border:1px solid #e8e4de;border-radius:12px;padding:24px;margin-bottom:24px;">
      <h2 style="font-size:18px;margin:0 0 4px;color:#8b7355;">Clothing</h2>
      <p style="color:#6b6b6b;font-size:13px;margin:0 0 16px;">Modest, comfortable, layered</p>
      <ul style="list-style:none;padding:0;margin:0;">
        <li style="padding:8px 0;border-bottom:1px solid #f0ede8;font-size:14px;">&#9744; Pants (comfortable, loose)</li>
        <li style="padding:8px 0;border-bottom:1px solid #f0ede8;font-size:14px;">&#9744; Hoodies x2</li>
        <li style="padding:8px 0;border-bottom:1px solid #f0ede8;font-size:14px;">&#9744; T-shirts (enough for ~5 days)</li>
        <li style="padding:8px 0;border-bottom:1px solid #f0ede8;font-size:14px;">&#9744; Underwear &amp; socks</li>
        <li style="padding:8px 0;border-bottom:1px solid #f0ede8;font-size:14px;">&#9744; Jacket</li>
        <li style="padding:8px 0;border-bottom:1px solid #f0ede8;font-size:14px;">&#9744; Cap</li>
        <li style="padding:8px 0;font-size:14px;">&#9744; Slippers (for indoors)</li>
      </ul>
    </div>

    <div style="background:#ffffff;border:1px solid #e8e4de;border-radius:12px;padding:24px;margin-bottom:24px;">
      <h2 style="font-size:18px;margin:0 0 4px;color:#8b7355;">Toiletries & Health</h2>
      <p style="color:#6b6b6b;font-size:13px;margin:0 0 16px;">Stay healthy, stay comfortable</p>
      <ul style="list-style:none;padding:0;margin:0;">
        <li style="padding:8px 0;border-bottom:1px solid #f0ede8;font-size:14px;">&#9744; Shampoo (unscented preferred)</li>
        <li style="padding:8px 0;border-bottom:1px solid #f0ede8;font-size:14px;">&#9744; Towel</li>
        <li style="padding:8px 0;border-bottom:1px solid #f0ede8;font-size:14px;">&#9744; Morning routine essentials</li>
        <li style="padding:8px 0;border-bottom:1px solid #f0ede8;font-size:14px;">&#9744; Headache pills</li>
        <li style="padding:8px 0;border-bottom:1px solid #f0ede8;font-size:14px;">&#9744; Theraflu (cold/flu just in case)</li>
        <li style="padding:8px 0;border-bottom:1px solid #f0ede8;font-size:14px;">&#9744; Antigen tests x2</li>
        <li style="padding:8px 0;font-size:14px;">&#9744; Scissors</li>
      </ul>
    </div>

    <div style="background:#ffffff;border:1px solid #e8e4de;border-radius:12px;padding:24px;margin-bottom:24px;">
      <h2 style="font-size:18px;margin:0 0 4px;color:#8b7355;">Outdoor & Practical</h2>
      <p style="color:#6b6b6b;font-size:13px;margin:0 0 16px;">For walks, weather, and daily life</p>
      <ul style="list-style:none;padding:0;margin:0;">
        <li style="padding:8px 0;border-bottom:1px solid #f0ede8;font-size:14px;">&#9744; Winter shoes (quick to put on for outdoor breaks)</li>
        <li style="padding:8px 0;border-bottom:1px solid #f0ede8;font-size:14px;">&#9744; Flashlight (for early morning / evening walks)</li>
        <li style="padding:8px 0;border-bottom:1px solid #f0ede8;font-size:14px;">&#9744; Umbrellas x2</li>
        <li style="padding:8px 0;border-bottom:1px solid #f0ede8;font-size:14px;">&#9744; Insect repellent</li>
        <li style="padding:8px 0;border-bottom:1px solid #f0ede8;font-size:14px;">&#9744; Water bottles x2</li>
        <li style="padding:8px 0;font-size:14px;">&#9744; Charger(s)</li>
      </ul>
    </div>

    <div style="background:#f5f2ed;border:1px solid #e8e4de;border-radius:12px;padding:24px;margin-bottom:24px;">
      <h2 style="font-size:18px;margin:0 0 12px;color:#8b7355;">Insider Tip</h2>
      <p style="font-size:14px;line-height:1.6;margin:0;color:#2c2c2c;">
        If you aspire to become a course manager, arrive early and write a heartfelt essay about your Dhamma journey. Showing genuine dedication to the practice and service makes a strong impression.
      </p>
    </div>

    <div style="text-align:center;padding:24px 0;border-top:1px solid #e8e4de;">
      <p style="font-size:13px;color:#6b6b6b;margin:0 0 8px;">
        Made with metta by <a href="https://vipassana.cool" style="color:#8b7355;">vipassana.cool</a>
      </p>
      <p style="font-size:12px;color:#999;margin:0;">
        You received this because you signed up for the retreat checklist.
      </p>
    </div>

  </div>
</body>
</html>`;
}
