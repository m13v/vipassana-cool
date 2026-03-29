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

function formatLocalTime(time: string | null): string {
  if (!time) return "";
  const [h, m] = time.split(":").map(Number);
  const suffix = h >= 12 ? "pm" : "am";
  const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return `${h12}:${String(m).padStart(2, "0")}${suffix}`;
}

function formatTimezone(tz: string | null): string {
  if (!tz) return "";
  if (tz.startsWith("GMT") || tz.startsWith("UTC")) return tz;
  // Convert IANA to friendly name
  const friendly: Record<string, string> = {
    "Europe/Paris": "Paris time",
    "Europe/London": "London time",
    "Europe/Berlin": "Berlin time",
    "America/New_York": "US Eastern",
    "America/Chicago": "US Central",
    "America/Denver": "US Mountain",
    "America/Los_Angeles": "US Pacific",
    "Asia/Kolkata": "IST",
    "Asia/Tokyo": "JST",
  };
  return friendly[tz] || tz;
}

function utcToMinutes(utc: string | null): number | null {
  if (!utc) return null;
  const [h, m] = utc.split(":").map(Number);
  return h * 60 + m;
}

function utcDiffMinutes(utcA: string | null, utcB: string | null): number | null {
  const minsA = utcToMinutes(utcA);
  const minsB = utcToMinutes(utcB);
  if (minsA === null || minsB === null) return null;
  let diff = Math.abs(minsA - minsB);
  if (diff > 720) diff = 1440 - diff;
  return diff;
}

function tzOffsetMinutes(tz: string | null): number {
  if (!tz) return 0;
  const aliases: Record<string, string> = { "eastern time": "America/New_York", "est": "America/New_York", "pst": "America/Los_Angeles" };
  const alias = aliases[tz.toLowerCase().trim()];
  if (alias) tz = alias;
  if (tz.startsWith("GMT") || tz.startsWith("UTC")) {
    const match = tz.match(/([+-])(\d{1,2})(?::(\d{2}))?/);
    if (!match) return 0;
    return (match[1] === "+" ? 1 : -1) * (parseInt(match[2]) * 60 + parseInt(match[3] || "0"));
  }
  try {
    const fmt = new Intl.DateTimeFormat("en-US", { timeZone: tz, timeZoneName: "shortOffset" });
    const parts = fmt.formatToParts(new Date());
    const tzPart = parts.find(p => p.type === "timeZoneName")?.value || "";
    const offsetMatch = tzPart.match(/GMT([+-])(\d{1,2})(?::(\d{2}))?/);
    if (!offsetMatch) return 0;
    return (offsetMatch[1] === "+" ? 1 : -1) * (parseInt(offsetMatch[2]) * 60 + parseInt(offsetMatch[3] || "0"));
  } catch { return 0; }
}

function utcMinutesToLocalTime(utcMins: number, offset: number): string {
  const local = (utcMins + offset + 1440) % 1440;
  const h = Math.floor(local / 60);
  const m = local % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function findBestOverlap(a: WaitlistEntry, b: WaitlistEntry): { aUtc: number; bUtc: number; diff: number } | null {
  const slots = [
    { aUtc: utcToMinutes(a.morning_utc), bUtc: utcToMinutes(b.morning_utc) },
    { aUtc: utcToMinutes(a.evening_utc), bUtc: utcToMinutes(b.evening_utc) },
    { aUtc: utcToMinutes(a.morning_utc), bUtc: utcToMinutes(b.evening_utc) },
    { aUtc: utcToMinutes(a.evening_utc), bUtc: utcToMinutes(b.morning_utc) },
  ].filter((s): s is { aUtc: number; bUtc: number } => s.aUtc !== null && s.bUtc !== null);

  let best: { aUtc: number; bUtc: number; diff: number } | null = null;
  for (const s of slots) {
    let diff = Math.abs(s.aUtc - s.bUtc);
    if (diff > 720) diff = 1440 - diff;
    if (best === null || diff < best.diff) {
      best = { ...s, diff };
    }
  }
  return best;
}

export type MeetLinkInfo = {
  trackingUrl: string; // per-person tracking URL
};

export type SessionContext = {
  session: "morning" | "evening";
  utcTime: string; // "06:00"
};

/** Format UTC time as "06:00 (6:00am)" — both 24h and 12h formats */
function formatDualTime(utcTime: string | null): string {
  if (!utcTime) return "";
  const [h, m] = utcTime.split(":").map(Number);
  if (isNaN(h)) return utcTime;
  const time24 = `${String(h).padStart(2, "0")}:${String(m || 0).padStart(2, "0")}`;
  const suffix = h >= 12 ? "pm" : "am";
  const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
  const time12 = `${h12}:${String(m || 0).padStart(2, "0")}${suffix}`;
  return `${time24} (${time12})`;
}

/** Get the UTC time for a person's session slot */
export function getSessionUtcTime(person: WaitlistEntry, session: "morning" | "evening"): string {
  return (session === "evening" ? person.evening_utc : person.morning_utc) || "06:00";
}

/** Build subject line for confirmation email */
export function buildConfirmationSubject(sessionCtx: SessionContext): string {
  return `I found a practice buddy for your ${sessionCtx.session} session at ${formatDualTime(sessionCtx.utcTime)} UTC`;
}

/** Build subject line for intro email */
export function buildIntroSubject(sessionCtx: SessionContext): string {
  return `Your Practice Buddy match – ${sessionCtx.session} session at ${formatDualTime(sessionCtx.utcTime)} UTC`;
}

export function buildIntroEmailHtml(
  personA: WaitlistEntry,
  personB: WaitlistEntry,
  meetLink?: MeetLinkInfo,
): string {
  const nameA = personA.name?.split(/\s+/)[0] || "fellow meditator";
  const nameB = personB.name?.split(/\s+/)[0] || "fellow meditator";
  const traits = buildCommonTraits(personA, personB);
  const traitsHtml = traits.length > 0
    ? `<ul style="font-size:15px;line-height:1.8;margin:0 0 16px;padding-left:20px;">${traits.map((t) => `<li>${t}</li>`).join("")}</ul>`
    : "";

  // Build time overlap section with suggested meeting time
  let timeHtml = "";
  const tzA = formatTimezone(personA.timezone);
  const tzB = formatTimezone(personB.timezone);
  const best = findBestOverlap(personA, personB);

  if (best && tzA && tzB) {
    const offsetA = tzOffsetMinutes(personA.timezone);
    const offsetB = tzOffsetMinutes(personB.timezone);
    const sameZone = personA.timezone === personB.timezone;

    if (best.diff === 0) {
      const localA = formatLocalTime(utcMinutesToLocalTime(best.aUtc, offsetA));
      const localB = formatLocalTime(utcMinutesToLocalTime(best.bUtc, offsetB));
      const timeLine = sameZone
        ? `You both sit at ${localA} (${tzA}) &mdash; at the exact same time.`
        : `${nameA} sits at ${localA} (${tzA}) and ${nameB} at ${localB} (${tzB}) &mdash; at the exact same time.`;
      timeHtml = `<p style="font-size:15px;line-height:1.7;margin:0 0 16px;">&#128336; <strong>${timeLine}</strong></p>`;
    } else {
      // Calculate midpoint, round to nearest 30 min
      let midUtc: number;
      if (Math.abs(best.aUtc - best.bUtc) > 720) {
        midUtc = Math.round(((best.aUtc + best.bUtc + 1440) / 2)) % 1440;
      } else {
        midUtc = Math.round((best.aUtc + best.bUtc) / 2);
      }
      midUtc = Math.round(midUtc / 30) * 30;
      midUtc = midUtc % 1440;

      const meetLocalA = formatLocalTime(utcMinutesToLocalTime(midUtc, offsetA));
      const meetLocalB = formatLocalTime(utcMinutesToLocalTime(midUtc, offsetB));

      let shiftA = midUtc - best.aUtc;
      if (shiftA > 720) shiftA -= 1440;
      if (shiftA < -720) shiftA += 1440;
      let shiftB = midUtc - best.bUtc;
      if (shiftB > 720) shiftB -= 1440;
      if (shiftB < -720) shiftB += 1440;

      const notes: string[] = [];
      if (shiftA !== 0) notes.push(`${Math.abs(shiftA)} min ${shiftA > 0 ? "later" : "earlier"} for ${nameA}`);
      if (shiftB !== 0) notes.push(`${Math.abs(shiftB)} min ${shiftB > 0 ? "later" : "earlier"} for ${nameB}`);

      let timeLine: string;
      if (sameZone) {
        timeLine = `I suggest meeting at <strong>${meetLocalA} (${tzA})</strong>`;
      } else {
        timeLine = `I suggest meeting at <strong>${meetLocalA} (${tzA})</strong> / <strong>${meetLocalB} (${tzB})</strong>`;
      }
      if (notes.length > 0) timeLine += ` &mdash; that's ${notes.join(", ")}.`;

      timeHtml = `<p style="font-size:15px;line-height:1.7;margin:0 0 16px;">&#128336; ${timeLine}</p>`;
    }
  }

  // Build Google Meet section
  let meetHtml = "";
  if (meetLink) {
    meetHtml = `
    <div style="background:#e8f5e9;border:1px solid #c8e6c9;border-radius:12px;padding:24px;margin-bottom:24px;">
      <h2 style="font-size:18px;margin:0 0 12px;color:#2e7d32;">Your shared Google Meet link</h2>
      <p style="font-size:14px;line-height:1.6;margin:0 0 12px;">I've set up a dedicated Google Meet room for you both. This link is permanent &mdash; use it every day, at any time:</p>
      <div style="text-align:center;margin:16px 0;">
        <a href="${meetLink.trackingUrl}" style="display:inline-block;background:#2e7d32;color:#ffffff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:16px;font-weight:600;">
          Join your Practice Buddy session &rarr;
        </a>
      </div>
      <p style="font-size:14px;line-height:1.6;margin:12px 0 0;color:#555;">Here's how it works: every day at your sit time, you both open this link. When you see your buddy has joined, one of you plays a Goenka recording and shares their screen and audio through the call. You meditate together for the full session, maybe chat a little after, and you're off to start your day.</p>
      <p style="font-size:14px;line-height:1.6;margin:12px 0 0;color:#555;">I've personally been meditating over Google Meet with my buddy for the past three years this way &mdash; it works beautifully. The video, audio, and screen sharing make it feel like you're sitting together in the same room. And since the link never changes, it becomes as natural as brushing your teeth: same time, same link, every day.</p>
    </div>`;
  }

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
      ${timeHtml}
      <p style="font-size:15px;line-height:1.7;margin:0 0 8px;"><strong>${nameA}</strong> &mdash; ${personA.city || "location unknown"}${personA.has_maintained_practice ? `, ${personA.has_maintained_practice.toLowerCase()} maintained practice` : ""}${personA.practice_length ? ` for ${personA.practice_length}` : ""}.</p>
      <p style="font-size:15px;line-height:1.7;margin:0 0 16px;"><strong>${nameB}</strong> &mdash; ${personB.city || "location unknown"}${personB.has_maintained_practice ? `, ${personB.has_maintained_practice.toLowerCase()} maintained practice` : ""}${personB.practice_length ? ` for ${personB.practice_length}` : ""}.</p>
    </div>
    ${meetHtml}
    <div style="background:#f5f2ed;border:1px solid #e8e4de;border-radius:12px;padding:24px;margin-bottom:24px;">
      <h2 style="font-size:18px;margin:0 0 12px;color:#8b7355;">What to do next</h2>
      <p style="font-size:14px;line-height:1.6;margin:0;"><strong>Reply all to this email</strong> to introduce yourselves and agree on a time. Once you've found your rhythm, just open the Meet link at that time every day &mdash; no scheduling needed.</p>
      <p style="font-size:14px;line-height:1.6;margin:12px 0 0;">You can also stay in touch via WhatsApp, Telegram, or whatever works for you.</p>
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
      <p style="font-size:13px;line-height:1.6;margin:12px 0 0;color:#8b7355;"><em>This match expires in 3 days. If neither of you responds, you'll both be placed back on the waitlist for a new match.</em></p>
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
