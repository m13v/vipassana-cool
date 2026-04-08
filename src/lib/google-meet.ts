/**
 * Creates a recurring Google Calendar event with Google Meet conferencing.
 * Uses OAuth2 refresh token flow with the Google Calendar REST API directly (no SDK).
 */

type MeetEventResult = {
  eventId: string;
  meetUrl: string;
};

export async function getAccessToken(): Promise<string> {
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID!,
      client_secret: process.env.GOOGLE_CLIENT_SECRET!,
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN!,
      grant_type: "refresh_token",
    }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to refresh Google token: ${res.status} ${text}`);
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

  // Step 1: Create a Meet space via the Meet API with OPEN access
  // so anyone with the link can join without needing the host to admit them
  const spaceRes = await fetch("https://meet.googleapis.com/v2/spaces", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      config: {
        accessType: "OPEN",
      },
    }),
  });

  if (!spaceRes.ok) {
    const text = await spaceRes.text();
    throw new Error(`Failed to create Meet space: ${spaceRes.status} ${text}`);
  }

  const space = await spaceRes.json();
  const meetUrl = space.meetingUri;

  if (!meetUrl) {
    throw new Error("Meet space created but no meeting URI returned");
  }

  // Step 2: Create a recurring calendar event with the Meet link attached
  const [h, m] = startUtcTime.split(":").map(Number);
  const now = new Date();
  // Start tomorrow at the given UTC time
  const start = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1, h, m, 0));
  const end = new Date(start.getTime() + durationMinutes * 60 * 1000);

  const event = {
    summary,
    description: "Your daily meditation practice buddy session via vipassana.cool",
    start: { dateTime: start.toISOString(), timeZone: "UTC" },
    end: { dateTime: end.toISOString(), timeZone: "UTC" },
    recurrence: ["RRULE:FREQ=DAILY"],
    conferenceData: {
      conferenceSolution: {
        key: { type: "hangoutsMeet" },
        name: "Google Meet",
      },
      entryPoints: [
        {
          entryPointType: "video",
          uri: meetUrl,
          label: meetUrl.replace("https://", ""),
        },
      ],
      conferenceId: space.meetingCode,
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

  return { eventId, meetUrl };
}
