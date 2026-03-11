import type { WaitlistEntry } from "@/lib/db";

export function buildCommonTraits(personA: WaitlistEntry, personB: WaitlistEntry): string[] {
  const traits: string[] = [];
  if (personA.is_old_student === "Yes" && personB.is_old_student === "Yes") {
    traits.push("You're both old students in the Goenka tradition");
  }
  if (personA.frequency === personB.frequency) {
    traits.push(`You both sit ${personA.frequency?.toLowerCase()}`);
  }
  if (personA.session_duration === personB.session_duration) {
    traits.push(`${personA.session_duration} per session each`);
  }
  if (personA.timezone === personB.timezone) {
    traits.push(`You're in the same timezone (${personA.timezone})`);
  }
  return traits;
}

export function buildIntroEmailHtml(personA: WaitlistEntry, personB: WaitlistEntry): string {
  const nameA = personA.name?.split(/\s+/)[0] || "fellow meditator";
  const nameB = personB.name?.split(/\s+/)[0] || "fellow meditator";
  const traits = buildCommonTraits(personA, personB);
  const traitsHtml = traits.length > 0
    ? `<ul style="font-size:15px;line-height:1.8;margin:0 0 16px;padding-left:20px;">${traits.map((t) => `<li>${t}</li>`).join("")}</ul>`
    : "";

  return `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#faf9f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#2c2c2c;">
  <div style="max-width:600px;margin:0 auto;padding:40px 24px;">
    <div style="text-align:center;margin-bottom:32px;">
      <p style="font-size:12px;text-transform:uppercase;letter-spacing:2px;color:#8b7355;margin:0 0 8px;">Vipassana.cool</p>
      <h1 style="font-size:28px;font-weight:700;margin:0;line-height:1.3;">Your Practice Buddy match is here</h1>
    </div>
    <div style="background:#ffffff;border:1px solid #e8e4de;border-radius:12px;padding:24px;margin-bottom:24px;">
      <p style="font-size:15px;line-height:1.7;margin:0 0 16px;">Hi both,</p>
      <p style="font-size:15px;line-height:1.7;margin:0 0 16px;">I'm Matt from Vipassana.cool. You both signed up for Practice Buddy, and I think you're a great match.</p>
      ${traitsHtml}
      <p style="font-size:15px;line-height:1.7;margin:0 0 8px;"><strong>${nameA}</strong> &mdash; ${personA.city || "location unknown"}${personA.has_maintained_practice ? `, ${personA.has_maintained_practice.toLowerCase()} maintained practice` : ""}${personA.practice_length ? ` for ${personA.practice_length}` : ""}.</p>
      <p style="font-size:15px;line-height:1.7;margin:0 0 16px;"><strong>${nameB}</strong> &mdash; ${personB.city || "location unknown"}${personB.has_maintained_practice ? `, ${personB.has_maintained_practice.toLowerCase()} maintained practice` : ""}${personB.practice_length ? ` for ${personB.practice_length}` : ""}.</p>
    </div>
    <div style="background:#f5f2ed;border:1px solid #e8e4de;border-radius:12px;padding:24px;margin-bottom:24px;">
      <h2 style="font-size:18px;margin:0 0 12px;color:#8b7355;">What to do next</h2>
      <p style="font-size:14px;line-height:1.6;margin:0;">The idea is simple: check in with each other regularly. Did you sit today? How was it? A quick daily message is enough. The format is up to you &mdash; WhatsApp, Telegram, email, whatever works.</p>
      <p style="font-size:14px;line-height:1.6;margin:16px 0 0;"><strong>Just reply all to this email to introduce yourselves</strong> and figure out how you'd like to stay in touch.</p>
    </div>
    <div style="text-align:center;padding:24px 0;border-top:1px solid #e8e4de;">
      <p style="font-size:15px;margin:0 0 8px;">Be happy,<br>Matt</p>
      <p style="font-size:13px;color:#6b6b6b;margin:0;"><a href="https://vipassana.cool" style="color:#8b7355;">vipassana.cool</a></p>
    </div>
  </div>
</body></html>`;
}

export function buildConfirmationEmailHtml(
  recipient: WaitlistEntry,
  matchedWith: WaitlistEntry,
  token: string
): string {
  const firstName = recipient.name?.split(/\s+/)[0] || "there";
  const matchFirstName = matchedWith.name?.split(/\s+/)[0] || "someone";
  const traits = buildCommonTraits(recipient, matchedWith);
  const traitsHtml = traits.length > 0
    ? `<ul style="font-size:15px;line-height:1.8;margin:0 0 16px;padding-left:20px;">${traits.map((t) => `<li>${t}</li>`).join("")}</ul>`
    : "";

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://vipassana.cool";
  const yesUrl = `${baseUrl}/api/confirm-match?token=${token}&response=yes`;
  const noUrl = `${baseUrl}/api/confirm-match?token=${token}&response=no`;

  return `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#faf9f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#2c2c2c;">
  <div style="max-width:600px;margin:0 auto;padding:40px 24px;">
    <div style="text-align:center;margin-bottom:32px;">
      <p style="font-size:12px;text-transform:uppercase;letter-spacing:2px;color:#8b7355;margin:0 0 8px;">Vipassana.cool</p>
      <h1 style="font-size:28px;font-weight:700;margin:0;line-height:1.3;">I found a match for you</h1>
    </div>
    <div style="background:#ffffff;border:1px solid #e8e4de;border-radius:12px;padding:24px;margin-bottom:24px;">
      <p style="font-size:15px;line-height:1.7;margin:0 0 16px;">Hi ${firstName},</p>
      <p style="font-size:15px;line-height:1.7;margin:0 0 16px;">I'm Matt from Vipassana.cool. I've been reviewing the Practice Buddy waitlist and I think I've found a great match for you.</p>
      <p style="font-size:15px;line-height:1.7;margin:0 0 8px;">Your potential match is <strong>${matchFirstName}</strong> from ${matchedWith.city || "somewhere nice"}. They sit ${matchedWith.frequency?.toLowerCase() || "regularly"}, ${matchedWith.session_duration || ""} per session${matchedWith.has_maintained_practice ? `, ${matchedWith.has_maintained_practice.toLowerCase()} maintained practice` : ""}.</p>
      ${traitsHtml}
      <p style="font-size:15px;line-height:1.7;margin:16px 0 0;">Would you like to be introduced?</p>
    </div>
    <div style="text-align:center;margin-bottom:32px;">
      <a href="${yesUrl}" style="display:inline-block;background:#8b7355;color:#ffffff;padding:16px 32px;border-radius:8px;text-decoration:none;font-size:16px;font-weight:600;margin:8px 6px;">
        Yes, introduce me &rarr;
      </a>
      <a href="${noUrl}" style="display:inline-block;background:#f5f2ed;color:#2c2c2c;padding:16px 32px;border-radius:8px;text-decoration:none;font-size:16px;font-weight:600;margin:8px 6px;border:1px solid #e8e4de;">
        No thanks
      </a>
    </div>
    <div style="text-align:center;padding:24px 0;border-top:1px solid #e8e4de;">
      <p style="font-size:15px;margin:0 0 8px;">Be happy,<br>Matt</p>
      <p style="font-size:13px;color:#6b6b6b;margin:0;"><a href="https://vipassana.cool" style="color:#8b7355;">vipassana.cool</a></p>
      <p style="font-size:11px;color:#999;margin:8px 0 0;">P.S. I do a brief web search on name and email to write a more personal intro. Hope that's okay.</p>
    </div>
  </div>
</body></html>`;
}
