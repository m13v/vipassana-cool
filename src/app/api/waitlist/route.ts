import { Resend } from "resend";
import { PostHog } from "posthog-node";
import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import { upsertEntry, getEntryByEmail, updateEntryStatus, endActiveMatches, getEntry } from "@/lib/db";
import { buildUnsubscribeUrl } from "@/lib/emails";

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
  requestedMatchId?: string;
};

const posthog = new PostHog("phc_68Zsbot2eLcQQgtNZTXlHrl7SEFwW1lwbzrYxsUuo1P", {
  host: "https://us.i.posthog.com",
  flushAt: 1,
  flushInterval: 0,
});

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const AUDIENCE_ID = process.env.RESEND_WAITLIST_AUDIENCE_ID!;

  try {
    const data: WaitlistData = await request.json();

    if (!data.email || typeof data.email !== "string" || !data.email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const trimmedName = (data.name || "").trim();
    const INVALID_NAMES = ["empty", "test", "n/a", "na", "none", "null", "undefined", "anonymous", "name", "your name", "first name", "asdf", "aaa"];
    if (!trimmedName || trimmedName.length < 2 || INVALID_NAMES.includes(trimmedName.toLowerCase())) {
      return NextResponse.json({ error: "Please enter your real name" }, { status: 400 });
    }
    data.name = trimmedName;

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

    // Capture full waitlist data in PostHog
    posthog.capture({
      distinctId: data.email,
      event: "waitlist_signup_server",
      properties: {
        name: data.name,
        email: data.email,
        is_old_student: data.isOldStudent,
        is_goenka_tradition: data.isGoenkatradition,
        timezone: data.timezone,
        city: data.city,
        frequency: data.frequency,
        morning_time: data.morningTime,
        evening_time: data.eveningTime,
        days: data.days,
        session_duration: data.sessionDuration,
        has_maintained_practice: data.hasMaintainedPractice,
        practice_length: data.practiceLength,
        requested_match_id: data.requestedMatchId || null,
      },
    });
    await posthog.flush();

    // Save to Neon database
    const existing = await getEntryByEmail(data.email);
    const isNew = !existing;

    // Detect changes to matching-relevant fields on resubmission
    let updatedNotes = existing?.research_notes ?? null;
    let matchingFieldsChanged = false;
    if (!isNew && existing) {
      const matchingFields: Array<[string, string | null, string | null]> = [
        ["frequency",       existing.frequency,        data.frequency],
        ["morning_time",    existing.morning_time,     data.morningTime],
        ["evening_time",    existing.evening_time,     data.eveningTime],
        ["timezone",        existing.timezone,         data.timezone],
        ["session_duration",existing.session_duration, data.sessionDuration],
      ];
      const diffs = matchingFields
        .filter(([, before, after]) => before !== after && (before || after))
        .map(([field, before, after]) => `${field} ${before || "—"}→${after || "—"}`);

      if (diffs.length > 0) {
        matchingFieldsChanged = true;
        const date = new Date().toISOString().substring(0, 10);
        const prefix = existing.status === "matched" ? "Re-queued for matching" : "Preferences updated";
        const diffNote = `[${date}] ${prefix}: ${diffs.join(", ")}`;
        updatedNotes = updatedNotes ? `${updatedNotes}\n${diffNote}` : diffNote;
        console.log("[Waitlist] Matching fields changed for", data.email, "—", diffNote);
      }
    }

    const entryId = existing?.id ?? crypto.randomUUID();
    await upsertEntry({
      id: entryId,
      email: data.email,
      name: data.name,
      is_old_student: data.isOldStudent,
      is_goenka_tradition: data.isGoenkatradition,
      timezone: data.timezone,
      city: data.city,
      frequency: data.frequency,
      morning_time: data.morningTime,
      evening_time: data.eveningTime,
      days: JSON.stringify(data.days),
      session_duration: data.sessionDuration,
      has_maintained_practice: data.hasMaintainedPractice,
      practice_length: data.practiceLength,
      requested_match_id: data.requestedMatchId || null,
      research_notes: updatedNotes,
      created_at: existing?.created_at ?? new Date().toISOString(),
    });

    // If matched user changed matching-relevant fields, re-queue them for matching
    // and end their active matches so their partner isn't left stranded
    if (!isNew && existing?.status === "matched" && matchingFieldsChanged) {
      await endActiveMatches(entryId, "user re-submitted with changed preferences");
      await updateEntryStatus(entryId, "pending");
    }

    // Only send confirmation email for new signups
    if (isNew) {
      // Fetch the saved entry to get the unsubscribe token
      const savedEntry = await getEntry(entryId);
      const unsubUrl = buildUnsubscribeUrl(savedEntry?.unsubscribe_token ?? null);
      const emailHtml = getWaitlistEmail(data, unsubUrl);
      const emailResult = await resend.emails.send({
        from: "Vipassana.cool <hello@vipassana.cool>",
        to: data.email,
        subject: "You're on the Practice Buddy waitlist",
        html: emailHtml,
      });

      try {
        const sql = neon(process.env.DATABASE_URL!);
        await sql`
          INSERT INTO vipassana_emails (resend_id, direction, from_email, to_email, subject, body_html, status)
          VALUES (${emailResult.data?.id || null}, 'outbound', 'Vipassana.cool <hello@vipassana.cool>', ${data.email}, ${"You're on the Practice Buddy waitlist"}, ${emailHtml}, 'sent')
        `;
      } catch (dbErr) {
        console.error("Failed to log outbound email:", dbErr);
      }
    }

    return NextResponse.json({ success: true, isNew, rematching: !isNew && existing?.status === "matched" && matchingFieldsChanged });
  } catch (error: unknown) {
    console.error("Waitlist API error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

function getWaitlistEmail(data: WaitlistData, unsubscribeUrl?: string): string {
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
      ${unsubscribeUrl ? `<p style="font-size:11px;color:#999;margin:8px 0 0;"><a href="${unsubscribeUrl}" style="color:#999;text-decoration:underline;">Unsubscribe</a> from Practice Buddy emails</p>` : ""}
    </div>

  </div>
</body>
</html>`;
}
