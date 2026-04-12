/**
 * Creates a recurring Google Calendar event with Google Meet conferencing.
 * Uses OAuth2 refresh token flow with the Google Calendar REST API directly (no SDK).
 */

type MeetEventResult = {
  eventId: string;
  meetUrl: string;
};

export type TokenKind = "primary" | "mediar";

export type MeetJoinEvent = {
  meetingCode: string;
  participantEmail: string | null;
  startTime: string; // ISO
  durationSec: number | null;
  eventName: string; // e.g. call_ended, attendance_report_user_type
  raw: unknown;
};

export async function getAccessToken(tokenKind: TokenKind = "primary"): Promise<string> {
  let refreshToken: string | undefined;
  if (tokenKind === "mediar") {
    refreshToken = process.env.GOOGLE_REFRESH_TOKEN_MEDIAR;
    if (!refreshToken) {
      throw new Error("GOOGLE_REFRESH_TOKEN_MEDIAR is not set in the environment");
    }
  } else {
    refreshToken = process.env.GOOGLE_REFRESH_TOKEN;
    if (!refreshToken) {
      throw new Error("GOOGLE_REFRESH_TOKEN is not set in the environment");
    }
  }

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID!,
      client_secret: process.env.GOOGLE_CLIENT_SECRET!,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to refresh Google token (${tokenKind}): ${res.status} ${text}`);
  }
  const data = await res.json();
  return data.access_token;
}

/**
 * Create a recurring daily Google Calendar event with a Meet link.
 *
 * @param summary - Event title (e.g. "Vipassana Practice Buddy – Matt & Jane")
 * @param startUtcTime - Start time in HH:MM UTC format
 * @param durationMinutes - Duration in minutes
 * @param slug - Unique slug for the conference request ID
 */
export async function createMeetEvent(
  summary: string,
  startUtcTime: string,
  durationMinutes: number,
  slug: string,
  attendeeEmails: string[] = [],
): Promise<MeetEventResult> {
  const accessToken = await getAccessToken();

  const [h, m] = startUtcTime.split(":").map(Number);
  const now = new Date();
  // Start tomorrow at the given UTC time
  const start = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1, h, m, 0));
  const end = new Date(start.getTime() + durationMinutes * 60 * 1000);

  // Let the Calendar API auto-generate a Meet link via createRequest.
  // This only requires the calendar scope (no separate Meet API scope needed).
  const event = {
    summary,
    description: "Your daily meditation practice buddy session via vipassana.cool",
    start: { dateTime: start.toISOString(), timeZone: "UTC" },
    end: { dateTime: end.toISOString(), timeZone: "UTC" },
    recurrence: ["RRULE:FREQ=DAILY"],
    conferenceData: {
      createRequest: {
        requestId: slug,
        conferenceSolutionKey: { type: "hangoutsMeet" },
      },
    },
    guestsCanInviteOthers: true,
    attendees: attendeeEmails.map((email) => ({ email })),
  };

  const res = await fetch(
    "https://www.googleapis.com/calendar/v3/calendars/primary/events?conferenceDataVersion=1",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    },
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to create calendar event: ${res.status} ${text}`);
  }

  const result = await res.json();
  const eventId = result.id || "";
  const meetUrl = result.conferenceData?.entryPoints?.find(
    (ep: { entryPointType: string }) => ep.entryPointType === "video",
  )?.uri || result.hangoutLink || "";

  if (!meetUrl) {
    throw new Error("Calendar event created but no Meet link was generated");
  }

  return { eventId, meetUrl };
}

/**
 * Fetch Google Meet join/attendance events from the Admin SDK Reports API.
 * Requires the mediar refresh token (scope: admin.reports.audit.readonly).
 *
 * Queries the `meet` application activity log and extracts relevant
 * per-participant and per-call events. We currently surface:
 *   call_ended (one record per call: meeting_code, duration_seconds, ...)
 *   attendance_report_user_type (per-participant attendance rows)
 *   call_considered_ended / participant_joined (fallback)
 *
 * Docs:
 *  https://developers.google.com/admin-sdk/reports/v1/reference/activities/list
 *  https://developers.google.com/admin-sdk/reports/v1/appendix/activity/meet
 */
export async function fetchMeetAttendanceEvents(opts: {
  startTime?: string;
  endTime?: string;
  meetingCode?: string;
}): Promise<MeetJoinEvent[]> {
  const accessToken = await getAccessToken("mediar");
  const results: MeetJoinEvent[] = [];

  const params = new URLSearchParams();
  if (opts.startTime) params.set("startTime", opts.startTime);
  if (opts.endTime) params.set("endTime", opts.endTime);
  params.set("maxResults", "1000");
  if (opts.meetingCode) {
    // filter by meeting_code for efficiency
    params.set("filters", `meeting_code==${opts.meetingCode}`);
  }

  let pageToken: string | undefined;
  do {
    const qp = new URLSearchParams(params);
    if (pageToken) qp.set("pageToken", pageToken);

    const url =
      "https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/meet?" +
      qp.toString();

    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Meet reports fetch failed: ${res.status} ${text}`);
    }
    const json = await res.json();
    const items: unknown[] = json.items || [];
    for (const item of items) {
      const it = item as {
        id?: { time?: string };
        actor?: { email?: string };
        events?: { name?: string; parameters?: { name?: string; value?: string; intValue?: string; boolValue?: boolean }[] }[];
      };
      const eventTime = it.id?.time || "";
      const actorEmail = it.actor?.email || null;
      for (const ev of it.events || []) {
        const params2 = ev.parameters || [];
        const getStr = (n: string) => params2.find((p) => p.name === n)?.value;
        const getInt = (n: string) => {
          const p = params2.find((pp) => pp.name === n);
          if (!p) return null;
          if (p.intValue != null) return parseInt(p.intValue, 10);
          if (p.value != null) return parseInt(p.value, 10);
          return null;
        };
        const meetingCode = getStr("meeting_code") || getStr("conference_id") || "";
        if (!meetingCode) continue;
        const duration = getInt("duration_seconds");
        const identifier = getStr("identifier") || getStr("endpoint_id") || null;
        const participantEmail = identifier && identifier.includes("@") ? identifier : actorEmail;
        results.push({
          meetingCode,
          participantEmail,
          startTime: eventTime,
          durationSec: duration,
          eventName: ev.name || "",
          raw: item,
        });
      }
    }
    pageToken = json.nextPageToken;
  } while (pageToken);

  return results;
}
