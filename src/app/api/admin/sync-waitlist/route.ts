import { NextRequest, NextResponse } from "next/server";
import { upsertEntry, getEntryByEmail } from "@/lib/db";

const POSTHOG_HOST = "https://us.i.posthog.com";

function checkAuth(request: NextRequest): boolean {
  const secret = request.headers.get("authorization")?.replace("Bearer ", "")
    || request.nextUrl.searchParams.get("secret");
  return secret === process.env.ADMIN_SECRET;
}

export async function POST(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const projectId = process.env.POSTHOG_PROJECT_ID!;
  const phKey = process.env.POSTHOG_PERSONAL_API_KEY!;

  try {
    const res = await fetch(`${POSTHOG_HOST}/api/projects/${projectId}/query/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${phKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: {
          kind: "EventsQuery",
          select: ["*"],
          event: "waitlist_signup_server",
          after: "2026-01-01",
          before: "2030-01-01",
          limit: 200,
        },
      }),
    });

    const data = await res.json();
    const results = data.results ?? [];

    let synced = 0;
    let created = 0;

    for (const r of results) {
      const row = r[0];
      const props = row.properties;
      const email = props.email;
      if (!email) continue;

      const existing = await getEntryByEmail(email);
      if (!existing) created++;

      await upsertEntry({
        id: existing?.id ?? crypto.randomUUID(),
        email,
        name: props.name ?? null,
        is_old_student: props.is_old_student ?? null,
        is_goenka_tradition: props.is_goenka_tradition ?? null,
        timezone: props.timezone ?? null,
        city: props.city ?? null,
        frequency: props.frequency ?? null,
        morning_time: props.morning_time ?? null,
        evening_time: props.evening_time ?? null,
        days: props.days ? JSON.stringify(props.days) : null,
        session_duration: props.session_duration ?? null,
        has_maintained_practice: props.has_maintained_practice ?? null,
        practice_length: props.practice_length ?? null,
        requested_match_id: props.requested_match_id ?? null,
        created_at: row.timestamp ?? new Date().toISOString(),
      });
      synced++;
    }

    return NextResponse.json({ success: true, synced, created });
  } catch (error) {
    console.error("Sync error:", error);
    return NextResponse.json({ error: "Sync failed" }, { status: 500 });
  }
}
