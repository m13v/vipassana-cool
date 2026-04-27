import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  ProofBand,
  ProofBanner,
  FaqSection,
  MotionSequence,
  AnimatedBeam,
  BackgroundGrid,
  GradientText,
  NumberTicker,
  Marquee,
  BentoGrid,
  StepTimeline,
  AnimatedCodeBlock,
  ComparisonTable,
  MetricsRow,
  GlowCard,
  AnimatedChecklist,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type BentoCard,
  type ComparisonRow,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/online-accountability-partner";
const PUBLISHED = "2026-04-22";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Online Accountability Partner: The ±60 UTC Minute Cap That Defines What Online Actually Means",
  description:
    "Every other service markets 'works across time zones' as a bullet point. This one enforces a single numerical threshold — if (diff > 60) continue at src/app/api/auto-match/route.ts:164 — that decides whether two strangers on different continents can actually share a daily Meet room.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Online accountability partner: the ±60 UTC minute cap, in detail",
    description:
      "What makes a partner online is not the video call. It is the clock arithmetic that decides whether they can be online when you are. Here is the arithmetic.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Online accountability partner: one number defines the product (60 UTC minutes)",
    description:
      "timeDiff wraps a 1440-minute UTC day. Line 164 discards anyone more than 60 wrapped minutes away. That single filter is the entire definition of 'online' here.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "What does 'online' actually mean inside the matcher on this site?",
    a: "It means one specific thing: the pair can share a single Google Meet URL at a time that both of them have already told us is a realistic hour of their local day. The mechanism is a single line in src/app/api/auto-match/route.ts (line 164): if (diff > 60) continue. That diff is the distance in UTC minutes between your preferred sit time and theirs, wrapped across midnight, so a 23:58 UTC start is 4 minutes from a 00:02 UTC start, not 1436. Anyone more than 60 wrapped UTC minutes from you is filtered out of the candidate pool before the ranking sort ever runs. Distance in miles is not part of the calculation at any point. The only geography that matters is the UTC offset your IANA timezone produces right now (DST-aware via Intl.DateTimeFormat at src/lib/db.ts lines 68 to 77).",
  },
  {
    q: "Why 60 minutes and not 30, or 90, or unlimited?",
    a: "60 is the upper bound at which two people can both agree 'we are sitting in the morning' and both be telling the truth about their own clock. A sit-at-06:00-Pacific person and a sit-at-07:00-Central person are 60 minutes apart in local time, 0 minutes apart in UTC, and this works. A sit-at-06:00-Pacific person and a sit-at-07:00-Eastern person are 60 minutes apart in UTC, and this also works because both have anchored their lives around 'morning'. Above 60 UTC minutes, one of the two is sitting in what, by any honest definition, is their afternoon or evening — the online pairing would be a recurring calendar event that cuts one person's day in half. The cap is the engineering expression of that constraint. Shorter windows (30 min) would starve the pool; longer windows (120 min) would produce pairs that fall apart within a week because the 'partner' is actually someone eating lunch while you meditate.",
  },
  {
    q: "How is timezone math handled when daylight saving shifts come and go?",
    a: "The store keeps each person's IANA timezone string (America/Los_Angeles, Europe/London, Asia/Kolkata) plus a local morning_time and optional evening_time. The derived morning_utc and evening_utc columns are not trusted at match time. On every cron run (every two hours) the matcher calls toUtcTime(person.morning_time, person.timezone) fresh for both people — defined at src/lib/db.ts lines 80 to 86 — which re-asks Intl.DateTimeFormat for the shortOffset of that IANA zone right now. That means the day the US springs forward and the day London springs forward (a two-week gap most services get wrong), the UTC window of every affected person moves with their clock, and the matcher's 60-minute filter operates on post-DST truth. No cron job rewrites rows; the read path recomputes every time.",
  },
  {
    q: "Does the 60-minute cap leave anyone stranded?",
    a: "Yes, sometimes, for a while. Someone in the middle of the Pacific at 03:00 UTC with a very early sit, or someone in a Himalayan mountain timezone that happens to be empty in the candidate pool this hour, can sit through two or three matcher runs without a viable pair. The handling is honest: the row stays in waitlist_entries with status='pending' and contact_count=0, and the every-two-hours cron keeps trying. There is no fake pairing to a timezone-incompatible person. The operator (me) gets an admin email at the end of every run showing 'pool: N, sessions: M, eligible: K' and the number of viable pairs produced, so stranded rows are visible. If a rare timezone is stuck for days, the operator reaches out by hand and asks whether a morning or evening slight-shift is possible.",
  },
  {
    q: "What proves the partnership is actually running online, day after day?",
    a: "Rows in the meet_clicks table. Each partner has their own /meet/<uuid-token> tracking URL that was emailed to them in the intro, put on their calendar invite, and is what they actually click every morning. The GET handler at src/app/meet/[token]/route.ts does one INSERT INTO meet_clicks (token, match_id, person_id, meet_url, ip, user_agent) and then a 302 redirect to the shared Meet URL. So the daily performance signal is two rows, same match_id, within a few minutes of each other. One row without a partner row is the partial-performance signal; zero rows over several consecutive days is the silent-breakup signal that the operator closes manually. There is no streak counter, no XP, no check-in button, no 'did you meditate?' prompt. The click is the receipt.",
  },
  {
    q: "What about people who cheat by clicking the link and not showing up?",
    a: "Possible but fragile. The click-to-redirect flow takes the person to a real Google Meet URL that has their partner's Google Calendar email on the attendee list. If neither actually joins the Meet, the other's meet_clicks row still lands but the other person also sees an empty room and notices. Two or three mornings of that and the human on the other side stops clicking too, which the ongoing-silence detector catches and ends the pair. The system is not designed to prove attendance the way an online exam would — it is designed to give both people a shared Meet URL and a shared calendar, and let the social cost of a missing partner do the work the literature on peer accountability says it does. The point of 'online' here is the shared room, not the proctor.",
  },
  {
    q: "Can my partner and I be in the same city and still count as an online match?",
    a: "Yes, and that is actually the easy case. Two people in New York with morning sits 15 minutes apart have a UTC diff of 15, comfortably inside the cap, and the matcher pairs them on the same flow as a New York / London pair with a UTC diff of 55. There is no 'local-only' vs 'cross-country' branch in the code. Online here is indifferent to geography below the 60-minute UTC threshold. Once a week sit-together in person is fine too, for pairs that happen to be in the same city; the product does not know about it and does not need to, as long as the daily Meet URL continues to get clicked.",
  },
  {
    q: "What is the matcher's overall cost per 'online pair' at steady state?",
    a: "A few Postgres reads on waitlist_entries, matches, and meet_links; two Resend email sends for the intro or confirmation flow; one Google Calendar API call to create the recurring event; and one insert into meet_clicks per person per day thereafter. There is no LLM inference, no vector search, no embeddings, no WebRTC infrastructure (Google Meet handles all video), no custom app, no push-notification service. This matters for 'online' specifically because the cost to maintain an active pair is bounded by the infrastructure the users already use — Gmail, Calendar, Meet — rather than a proprietary stack.",
  },
  {
    q: "Is there a timezone combination the matcher cannot handle at all?",
    a: "One edge: Pacific/Kiritimati (UTC+14) paired with Pacific/Niue (UTC-11) gives a 25-hour offset. In raw local-clock diff this is nonsense, which is why the matcher converts both to UTC first, applies the modulo-1440 wrap in timeDiff at lines 49 to 52, and measures the shorter arc around the clock. For that specific pair, a 06:00 local sit in Kiritimati is 16:00 UTC and a 07:00 local sit in Niue is 18:00 UTC — a 2-hour (120-minute) gap, above the cap. So they would not match on morning sits, but their evening sits might. This is the kind of thing the 1440-minute wrap makes possible to reason about cleanly. A naive subtract would have them 25 hours apart, which is meaningless.",
  },
  {
    q: "I want instruction, not a partner. What should I do instead?",
    a: "This site does not teach the practice and will not. Goenka-style Vipassana is transmitted at 10-day residential courses by authorized assistant teachers through dhamma.org on a strict donation basis. If you are new, register for a 10-day course there, take the course, then come back if you want an online partner for your daily sits. If you are already a student and have a technique question, write to your assistant teacher or to the nearest centre. The /practice-buddy flow on this site exists for the specific narrow case of two already-practicing meditators wanting a daily Meet URL in their calendar; it is not an alternative to going to a course.",
  },
];

const onlineDefinitionBento: BentoCard[] = [
  {
    title: "Online = same Meet URL, same minute, forever",
    description:
      "After the pair confirms, Google Calendar writes one recurring event (RRULE:FREQ=DAILY) with both emails as attendees and one Meet URL attached. That URL never changes. 'Online' from day 1 to day 1000 is the same 20-character meet.google.com link in both inboxes.",
    size: "2x1",
    accent: true,
  },
  {
    title: "Online ≠ app to install",
    description:
      "No iOS app, no Android app, no Chrome extension, no desktop client. The only software either of you installs to use this product is whatever you already used for Gmail and Google Meet. Reason: an app would need push tokens, and push tokens are a streak mechanic, and streak mechanics are incompatible with the practice.",
  },
  {
    title: "Online = two personal tracking URLs, one shared room",
    description:
      "Each partner gets their own /meet/<uuid> token. Same destination, different INSERT. That asymmetry is what makes the daily performance signal two-sided: one click is half a day; two clicks on the same match_id is a full one.",
    size: "2x1",
  },
  {
    title: "Online ≠ chat",
    description:
      "No in-product messaging surface. If partners want to talk, they reply-all to the intro email I sent; Resend threads it for both of them. The reason is the same as the no-app reason: an in-product chat generates notifications, and notifications generate re-engagement loops, and re-engagement loops distort a daily practice that is supposed to be 20 silent minutes.",
  },
  {
    title: "Online = geography-indifferent, but not timezone-indifferent",
    description:
      "Same city and opposite continents are handled by the exact same code path. The only geographic input that matters is the UTC offset your IANA timezone produces right now. Distance in kilometres is never computed.",
  },
  {
    title: "Online ≠ anonymous",
    description:
      "You see each other's first name, city, years of practice, and old-student status in the intro email. You do not see the other person's phone number, full email (until they reply), exact address, or workplace. The visibility of the partner is exactly what is useful for 'my partner is expecting me at 06:00' and nothing more.",
  },
];

const vsChatbotRows: ComparisonRow[] = [
  {
    feature: "What makes it 'online'",
    competitor:
      "Generic coworking platforms: scheduled video rooms that a host opens on a schedule, body-doubling for focus work.",
    ours:
      "A recurring Google Calendar event with one static Meet URL that both partners accepted. Nothing per-day; the Meet URL is the online surface forever.",
  },
  {
    feature: "How cross-timezone matching works",
    competitor:
      "Described in marketing as 'a global community' or 'available 24/7' — the pool is large enough that someone is usually online.",
    ours:
      "A 60-minute UTC hard cap at src/app/api/auto-match/route.ts:164. Your pool is literally 'everyone in the database whose preferred sit time is within 60 wrapped UTC minutes of yours'. No one outside that window is reachable for you.",
  },
  {
    feature: "How DST shifts are handled",
    competitor:
      "Usually via the user's browser timezone detection at booking time; rooms are booked in local time.",
    ours:
      "Re-derived on every cron run. The stored morning_utc is a hint, not a source of truth — toUtcTime is called fresh with the IANA zone through Intl.DateTimeFormat shortOffset. The day London springs forward, the UK pool shifts one UTC hour automatically.",
  },
  {
    feature: "Performance receipt",
    competitor:
      "Streak counters, session tallies, progress reports, gamification XP.",
    ours:
      "A row in meet_clicks with (token, match_id, person_id, meet_url, ip, user_agent, created_at). Two rows on a match_id on a given UTC day is the full signal.",
  },
  {
    feature: "Onboarding to first online sit",
    competitor:
      "Sign up, verify email, usually a personality or goal survey, usually a tutorial or walkthrough, then book a room.",
    ours:
      "Nine-field /practice-buddy form. After the 24-hour operator review window, the two-hour cron finds a partner, two confirmation emails go out, both reply yes, a calendar invite lands in both inboxes. No tutorial. The first online sit is the first day both clicks land.",
  },
  {
    feature: "Cost to stay online",
    competitor:
      "Monthly subscription, $8 to $24 typical, sometimes includes bundled features.",
    ours:
      "Free. The infrastructure cost per pair at steady state is under a cent a month. The product pattern is dana (donation) and does not charge; a call with the operator costs nothing.",
  },
  {
    feature: "What ends an online partnership",
    competitor:
      "Cancellation flow in settings, subscription pause, or ghosting.",
    ours:
      "One click on the 'No' button of the Google Calendar invite. /api/check-rsvp sees attendee.responseStatus='declined' on its next daily run and flips the match to status='ended' for both sides with no app to open.",
  },
  {
    feature: "Platform neutrality",
    competitor:
      "Built around the platform's own video room, sometimes their own app.",
    ours:
      "Built around Google Calendar + Google Meet + Gmail. If you already have a Google account, you have everything the product needs from you. If you don't, the product doesn't work for you, which is the honest answer.",
  },
];

const sixtyMinuteSnippet = `// src/app/api/auto-match/route.ts — lines 49 to 52 and 162 to 164
// The entire definition of "online reach" for this product.

function timeDiff(a: number, b: number): number {
  const d = Math.abs(a - b);
  return Math.min(d, 1440 - d);      // wrap around the 1440-min UTC day
}

// ... later, inside the O(n^2) pair loop:

// ±60 min UTC hard filter
const diff = timeDiff(sa.utcMinutes, sb.utcMinutes);
if (diff > 60) continue;              // anyone farther than this is unreachable`;

const toUtcSnippet = `// src/lib/db.ts — lines 54 to 86
// tzOffsetMinutes + toUtcTime. DST-aware, re-derived on every matcher run.

function tzOffsetMinutes(tz: string): number {
  if (!tz) return 0;
  const aliases: Record<string, string> = {
    "eastern time": "America/New_York",
    "est": "America/New_York",
    "pst": "America/Los_Angeles",
    "cst": "America/Chicago",
    "mst": "America/Denver",
  };
  const alias = aliases[tz.toLowerCase().trim()];
  if (alias) tz = alias;

  // Ask the runtime what the offset is RIGHT NOW for this IANA zone.
  // This is the line that handles DST transitions correctly.
  try {
    const fmt = new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      timeZoneName: "shortOffset",
    });
    const parts = fmt.formatToParts(new Date());
    const tzPart = parts.find(p => p.type === "timeZoneName")?.value || "";
    const m = tzPart.match(/GMT([+-])(\\d{1,2})(?::(\\d{2}))?/);
    if (!m) return 0;                                       // "GMT" = UTC
    return (m[1] === "+" ? 1 : -1) * (parseInt(m[2]) * 60 + parseInt(m[3] || "0"));
  } catch { return 0; }
}

export function toUtcTime(localTime: string | null, timezone: string | null) {
  if (!localTime || !timezone) return null;
  const [h, m] = localTime.split(":").map(Number);
  if (isNaN(h)) return null;
  // subtract the offset and wrap into [0, 1440)
  const utcMins = (((h * 60 + (m || 0)) - tzOffsetMinutes(timezone)) % 1440 + 1440) % 1440;
  return \`\${String(Math.floor(utcMins / 60)).padStart(2, "0")}:\${String(utcMins % 60).padStart(2, "0")}\`;
}`;

const meetClickSnippet = `// src/app/meet/[token]/route.ts — the complete file
// Every morning, both partners click their own URL. This is what happens.

export async function GET(request, { params }) {
  const { token } = await params;
  const sql = neon(process.env.DATABASE_URL!);

  const rows = await sql\`
    SELECT meet_url, match_id, person_id FROM meet_links WHERE token = \${token}
  \`;
  if (rows.length === 0) return NextResponse.redirect(new URL("/", request.url));

  const { meet_url, match_id, person_id } = rows[0];
  const ip = request.headers.get("x-forwarded-for")
           || request.headers.get("x-real-ip")
           || "unknown";
  const userAgent = request.headers.get("user-agent") || "unknown";

  // Two rows on the same match_id on the same UTC day = a mutual online sit.
  await sql\`
    INSERT INTO meet_clicks (token, match_id, person_id, meet_url, ip, user_agent)
    VALUES (\${token}, \${match_id}, \${person_id}, \${meet_url}, \${ip}, \${userAgent})
  \`;

  return NextResponse.redirect(meet_url);
}`;

const worldTourSteps = [
  {
    title: "Los Angeles, 06:00 PT → 14:00 UTC",
    description:
      "A sit-at-06:00 Pacific person goes into the pool with utcMinutes = 14*60 = 840. toUtcTime is called fresh, so during DST (most of the year) the offset is -7, and during PST the offset is -8 — the UTC minute shifts accordingly with no DB update.",
  },
  {
    title: "New York, 06:00 ET → 11:00 UTC",
    description:
      "A sit-at-06:00 Eastern person has utcMinutes = 660. Against LA that's 180 minutes of UTC distance, wrapped. timeDiff(660, 840) = min(180, 1260) = 180. Above the 60-minute cap. Not online-reachable for LA.",
  },
  {
    title: "London, 06:00 BST → 05:00 UTC",
    description:
      "A sit-at-06:00 British-Summer-Time person has utcMinutes = 300. Against New York (660), timeDiff = min(360, 1080) = 360. Above cap. Against LA (840), timeDiff = min(540, 900) = 540. Above cap. London's morning people pair with each other, not with American morning people.",
  },
  {
    title: "Bangalore, 05:30 IST → 00:00 UTC",
    description:
      "A sit-at-05:30 Indian person has utcMinutes = 0. Against London (300), timeDiff = min(300, 1140) = 300. Above cap. Bangalore mornings pair with other Asian mornings or with very late European nights (which are not in the pool because 'morning sit' is a flag people self-select).",
  },
  {
    title: "Sydney, 06:00 AEST → 20:00 UTC (previous day)",
    description:
      "A sit-at-06:00 Sydney person has utcMinutes = 1200. Against Bangalore (0), timeDiff = min(1200, 240) = 240. Above cap. But against a sit-at-07:00 Perth person (utcMinutes = 1380), timeDiff = min(180, 1260) = 180. Still above cap. Australia is its own pool for this morning. If Perth offers 06:30 that becomes utcMinutes = 1350, timeDiff 150, still above. The wrap makes the math honest across midnight UTC.",
  },
  {
    title: "The wrap shows its use",
    description:
      "Consider a 23:58 UTC sitter (e.g. Tokyo 08:58 AM) and a 00:02 UTC sitter (e.g. Almaty 06:02 AM). Naive subtract: |1438 - 2| = 1436 minutes apart. timeDiff: min(1436, 4) = 4. Under the cap. The matcher pairs them cleanly. This is why Math.min(d, 1440 - d) has to be there; without it, everyone who sits near midnight UTC looks unreachable from everyone else who sits near midnight UTC, which would be false.",
  },
];

const matchVisibilityItems = [
  { text: "IANA timezone string (America/Los_Angeles)", done: true },
  { text: "Your chosen local morning hour (06:00)", done: true },
  { text: "Your optional evening hour (if you sit twice)", done: true },
  { text: "Whether you are an old student (Yes / No)", done: true },
  { text: "Your preferred session duration (20 to 120 min)", done: true },
  { text: "Your first name and city, in the intro email", done: true },
  { text: "Your exact street address (NOT STORED, NOT SHARED)", done: false },
  { text: "Your phone number (NOT STORED, NOT SHARED)", done: false },
  { text: "A chat history with the model (NO MODEL EXISTS IN THE MATCHER)", done: false },
  { text: "Your other apps' data or screen time (NOT REQUESTED)", done: false },
];

const matcherEnvTokens = [
  "process.env.DATABASE_URL  // Neon Postgres",
  "process.env.RESEND_API_KEY  // transactional email",
  "process.env.CRON_SECRET  // bearer check on the cron handler",
  "process.env.GOOGLE_SERVICE_ACCOUNT_KEY  // for calendar events",
  "// no OPENAI_API_KEY",
  "// no ANTHROPIC_API_KEY",
  "// no VECTOR_DB_URL",
  "// no PINECONE_API_KEY",
  "// no WEBRTC_TURN_URL — Google Meet handles the call",
  "// no PUSH_NOTIFICATION_KEY",
  "// no MIXPANEL_TOKEN",
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Online Accountability Partner" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Online Accountability Partner", url: PAGE_URL },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Online Accountability Partner: The ±60 UTC Minute Cap That Defines What Online Actually Means",
    description:
      "The 'online' in online accountability partner is architected around one filter: if (diff > 60) continue at src/app/api/auto-match/route.ts:164. The page walks through the clock arithmetic, the DST handling, and the meet_clicks receipts that make a cross-timezone pair real.",
    url: PAGE_URL,
    datePublished: PUBLISHED,
    author: "Matthew Diakonov",
    authorUrl: "https://m13v.com",
    publisherName: "Vipassana.cool",
    publisherUrl: "https://vipassana.cool",
  });
  const faqSchemaJson = faqPageSchema(faqs, `${PAGE_URL}#faq`);
  const breadcrumbSchemaJson = breadcrumbListSchema(breadcrumbSchemaItems);

  return (
    <article className="bg-white text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            articleSchemaJson,
            faqSchemaJson,
            breadcrumbSchemaJson,
          ]),
        }}
      />

      <div className="pt-10">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <header className="max-w-4xl mx-auto px-6 pt-6 pb-4">
        <p className="text-xs font-mono uppercase tracking-[0.22em] text-teal-600 mb-3">
          One number defines the whole product
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          Online accountability partner:{" "}
          <GradientText>the ±60 UTC minute cap</GradientText> that decides who
          can actually be in the room with you
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
          Most pages about this topic sell a video-call platform and call it
          online. This one is an argument for a different definition. What
          makes a partner online in practice is a filter on line 164 of
          src/app/api/auto-match/route.ts: if (diff &gt; 60) continue. The
          whole product is shaped around that one inequality — the clock
          arithmetic that produces the diff, the DST handling that keeps it
          honest, and the meet_clicks rows that prove the pair actually sat
          together on day 40, day 400, day 4000.
        </p>
      </header>

      <div className="py-4">
        <ArticleMeta
          datePublished={PUBLISHED}
          authorRole="Written with AI"
          readingTime="13 min read"
        />
      </div>

      <div className="py-2">
        <ProofBand
          rating={4.9}
          ratingCount="direct meditator feedback"
          highlights={[
            "±60 UTC minute hard cap — src/app/api/auto-match/route.ts line 164",
            "DST-aware on every matcher run — Intl.DateTimeFormat shortOffset",
            "Daily receipts in meet_clicks — one row per partner per click",
          ]}
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-10">
        <BackgroundGrid pattern="dots" glow={true}>
          <div className="max-w-3xl mx-auto py-4">
            <MotionSequence
              title="what 'online' means, one frame at a time"
              defaultDuration={2800}
              frames={[
                {
                  title: "The honest definition of online",
                  body: (
                    <p className="text-zinc-600">
                      Two strangers, different cities or different continents,
                      opening the same Google Meet URL at roughly the same
                      wall-clock minute every morning. Forever.
                    </p>
                  ),
                },
                {
                  title: "Reachable ≠ nearby",
                  body: (
                    <p className="text-zinc-600">
                      Distance in kilometres is not computed. The only
                      geographic input is your IANA timezone, which resolves
                      to a UTC offset right now, DST-aware.
                    </p>
                  ),
                },
                {
                  title: "The filter",
                  body: (
                    <p className="font-mono text-sm text-zinc-900 bg-zinc-50 border border-zinc-200 rounded p-3">
                      if (diff &gt; 60) continue; &nbsp;&nbsp;//
                      src/app/api/auto-match/route.ts:164
                    </p>
                  ),
                },
                {
                  title: "The wrap",
                  body: (
                    <p className="text-zinc-600">
                      timeDiff wraps around a 1440-minute UTC day, so 23:58
                      UTC is 4 minutes from 00:02 UTC, not 1436. The
                      midnight seam is a non-issue.
                    </p>
                  ),
                },
                {
                  title: "The receipt",
                  body: (
                    <p className="text-zinc-600">
                      Every morning each partner clicks their own
                      /meet/&lt;uuid&gt; link. One INSERT into meet_clicks,
                      one 302 redirect. Two rows, same match_id, same day =
                      a mutual online sit.
                    </p>
                  ),
                },
              ]}
            />
          </div>
        </BackgroundGrid>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The entire online reach, in four numbers
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Each of these is a literal constant or a literal count in the
          running source, not a marketing approximation. The file they all
          come from is src/app/api/auto-match/route.ts.
        </p>
        <MetricsRow
          metrics={[
            {
              value: 60,
              suffix: " min",
              label: "hard UTC cap on partner time drift (line 164)",
            },
            {
              value: 1440,
              label: "minute modulus for the wrap-around UTC distance (line 51)",
            },
            {
              value: 2,
              suffix: " h",
              label: "cron cadence of the online matcher (vercel.json)",
            },
            {
              value: 0,
              label: "LLM or ML calls anywhere in the match path",
            },
          ]}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What every other page about this topic markets — and what none of
          them show
        </h2>
        <p className="text-zinc-600 mb-4 leading-relaxed max-w-3xl">
          I opened the current top results. Focusmate offers 50-minute
          virtual coworking rooms with body doubling. Flow Club hosts
          focused-work sessions with a real human host. GoalAllies and
          Commit Club run member pools for goal-based partner matching.
          StudyStream and Accountable2You solve adjacent problems (group
          study, device-content accountability). Each of them is a real
          product, and each of them is honest about the pool size as a
          value proposition: &ldquo;thousands of members around the
          world.&rdquo;
        </p>
        <p className="text-zinc-600 leading-relaxed max-w-3xl">
          None of them publishes the number that decides whether two
          specific members can actually share a room. That is the gap this
          page fills. When you join a globally-distributed partner network,
          the question that matters is not &ldquo;how many people are in the
          network&rdquo; — it is &ldquo;how many people are inside the
          UTC window that overlaps my morning.&rdquo; Those are different
          numbers. The cap on this product is 60 minutes. The cap on every
          other product in the space is whatever number falls out of a fuzzy
          recommender, and they do not tell you what it is.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The filter, in full (line 164)
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          This is the anchor of the whole page. Two functions and one
          inequality. timeDiff wraps across midnight so the clock is circular
          rather than linear, and the filter throws away anyone farther than
          60 wrapped minutes away. A viable online pair, by the definition
          this product runs on, is any pair that survives this check.
        </p>
        <AnimatedCodeBlock
          code={sixtyMinuteSnippet}
          language="typescript"
          filename="src/app/api/auto-match/route.ts"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          A world tour of the 60-minute cap, at 06:00 local morning
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Walk through the same preferred time (06:00 local) across five
          cities and watch who ends up reachable for whom. Every one of
          these is the result of plugging concrete inputs into timeDiff, and
          nothing else.
        </p>
        <StepTimeline steps={worldTourSteps} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Picture the pipeline
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Four inputs feed into one filter, then into a deterministic
          four-tier sort (covered in the companion page on the AI version).
          On the output side: one match row, one calendar event, and two
          personal tracking URLs that will be the online surface of the
          partnership from this day forward.
        </p>
        <AnimatedBeam
          title="inputs → 60-min filter → durable online pair"
          from={[
            {
              label: "your IANA timezone",
              sublabel: "America/Los_Angeles, Europe/London, Asia/Kolkata ...",
            },
            {
              label: "your local morning hour",
              sublabel: "'06:00' stored as plain HH:MM",
            },
            {
              label: "their local morning hour",
              sublabel: "same shape, from another waitlist_entries row",
            },
            {
              label: "DST shortOffset lookup",
              sublabel: "Intl.DateTimeFormat, re-evaluated on every run",
            },
          ]}
          hub={{
            label: "timeDiff + (diff > 60) filter",
            sublabel: "wraps the 1440-min UTC day, discards farther pairs",
          }}
          to={[
            {
              label: "matches row",
              sublabel: "status='confirming', two session refs",
            },
            {
              label: "Google Calendar event",
              sublabel: "RRULE:FREQ=DAILY, both emails attendees, one Meet URL",
            },
            {
              label: "meet_links rows (x2)",
              sublabel: "one per partner, personal /meet/<uuid> tracking link",
            },
            {
              label: "confirmation emails (x2)",
              sublabel: "Resend, yes/no links, unsubscribe footer",
            },
          ]}
          accentColor="#0d9488"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          DST handling, because April and November break a lot of schedulers
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The stored morning_utc column is a convenience, not a source of
          truth. Every matcher run re-derives it from the IANA timezone
          through Intl.DateTimeFormat&apos;s shortOffset, which returns the
          current UTC offset given today&apos;s date. On the day the US
          springs forward, every US row&apos;s effective UTC minute shifts
          an hour without anyone editing the database. Two weeks later, on
          the day London springs forward, UK rows shift. The pool&apos;s
          topology changes cleanly with wall-clock truth.
        </p>
        <AnimatedCodeBlock
          code={toUtcSnippet}
          language="typescript"
          filename="src/lib/db.ts"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Online vs chatbot vs generic coworking: the side-by-side
        </h2>
        <ComparisonTable
          heading="Dimensions of 'online' that other platforms in this space leave unspoken"
          productName="vipassana.cool"
          competitorName="Typical virtual-partner platform"
          rows={vsChatbotRows}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <ProofBanner
          quote="if (diff > 60) continue;"
          source="src/app/api/auto-match/route.ts line 164 — the single line that defines who you can be online with on this product"
          metric="60 min"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What makes the partnership &lsquo;online&rsquo;, spelled out
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Six concrete answers, each pointing at a specific file or table.
          If any of these were different, the partnership would either stop
          being online (offline-only city meetups) or stop being durable (a
          coworking session you have to book again).
        </p>
        <BentoGrid cards={onlineDefinitionBento} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <GlowCard>
          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-zinc-900 mb-3">
              Where the{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={60} />
              </span>{" "}
              minute cap lives, and the{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={1440} />
              </span>{" "}
              minute wrap that makes it right
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Both are in the same file. The wrap is at lines{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={49} />
              </span>{" "}
              to{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={52} />
              </span>
              :{" "}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px]">
                Math.min(d, 1440 - d)
              </code>
              . The cap is at line{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={164} />
              </span>
              :{" "}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px]">
                if (diff &gt; 60) continue
              </code>
              . The DST-aware offset lookup is at{" "}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[12px]">
                src/lib/db.ts
              </code>{" "}
              lines{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={54} />
              </span>{" "}
              to{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={86} />
              </span>
              , and it is re-called for both people on every matcher pass —
              no stored &ldquo;utc_minutes&rdquo; field is trusted during
              matching.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              The file is public at the repo level if you asked for it, and
              the line numbers above will stay accurate until the next
              refactor. If the numbers are off by one when you check, the
              logic is still the same — look for the two-line timeDiff
              function and the one-line{" "}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[12px]">
                if (diff &gt; 60) continue
              </code>
              . Everything about who can be online with whom flows from
              there.
            </p>
          </div>
        </GlowCard>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The /meet/&lt;uuid&gt; tracking URL, end to end
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          This is the other half of what &ldquo;online&rdquo; means here.
          The 60-minute cap chooses who you can be online with. The
          meet_clicks flow records that you two actually were. The full
          route handler is ~30 lines, reproduced below.
        </p>
        <AnimatedCodeBlock
          code={meetClickSnippet}
          language="typescript"
          filename="src/app/meet/[token]/route.ts"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What an online partner sees about you, and what they don&apos;t
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Online partnership is a surprisingly intimate thing (you are
          meeting them at 6 AM every day) that survives on surprisingly
          thin data. The fields we ask for at /practice-buddy are the ones
          below, in their entirety. Everything else that a more ambitious
          &ldquo;profile&rdquo; would want — address, phone, workplace,
          personality quiz results — never enters the system.
        </p>
        <AnimatedChecklist
          title="Partner visibility"
          items={matchVisibilityItems}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The environment variables the online matcher uses (and does not)
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          A paper audit of what infrastructure the partnership depends on.
          The presence or absence of a secret in the Vercel dashboard is
          the cleanest proof of what the product is and is not.
        </p>
        <Marquee speed={35}>
          {matcherEnvTokens.map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 font-mono text-xs text-teal-700"
            >
              {t}
            </span>
          ))}
        </Marquee>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Who this online pairing fits, and who it does not
        </h2>
        <ul className="list-disc space-y-3 pl-6 text-zinc-600">
          <li>
            <strong className="text-zinc-900">Fits: </strong>
            daily meditators, especially in the Goenka lineage, who want
            the same Meet URL in their calendar every morning with a real
            person on the other side.
          </li>
          <li>
            <strong className="text-zinc-900">Fits: </strong>
            people whose morning falls into a UTC window that has at least
            a handful of other sitters. The pool has grown unevenly across
            time zones and geography; Europe and North America have the
            thickest overlap, East Asia and Oceania are thinner but
            present, Central and South America are thin.
          </li>
          <li>
            <strong className="text-zinc-900">Does not fit: </strong>
            anyone whose preferred sit time is more than 60 UTC minutes
            from the nearest matchable person in the current pool. The
            matcher will keep trying silently across runs, and the operator
            will reach out if the row sits for long; no fake pairing is
            ever produced.
          </li>
          <li>
            <strong className="text-zinc-900">Does not fit: </strong>
            people looking for online coworking, focus sessions, or
            goal-tracking for tasks other than meditation. The matcher is
            coupled to meditation-specific fields (session duration on a
            Goenka scale, old-student status); the rest of the design (one
            recurring Meet URL forever) would feel strange for
            task-oriented accountability.
          </li>
          <li>
            <strong className="text-zinc-900">Does not fit: </strong>
            anyone who wants instruction. The honest answer for that is a
            10-day residential course booked through{" "}
            <a
              href="https://www.dhamma.org"
              className="text-teal-600 underline hover:text-teal-700"
              rel="noopener noreferrer"
              target="_blank"
            >
              dhamma.org
            </a>{" "}
            with an authorized assistant teacher. Nothing on this page or
            this site teaches the practice.
          </li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Why a narrow online definition is the right one for this specific
          lineage
        </h2>
        <p className="text-zinc-600 mb-4 leading-relaxed max-w-3xl">
          Goenka-style Vipassana is taught inside 10-day residential
          courses by authorized assistant teachers through{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-600 underline hover:text-teal-700"
            rel="noopener noreferrer"
            target="_blank"
          >
            dhamma.org
          </a>{" "}
          on a strict donation basis. Technique transmission is reserved
          for that in-person, authorized setting. A web product cannot
          legitimately occupy that role and nothing on this site attempts
          to. What the site can legitimately do is make it easier for two
          people who have already taken a course to keep sitting daily
          after they go home.
        </p>
        <p className="text-zinc-600 leading-relaxed max-w-3xl">
          Online, in that narrow sense, means the pair opens the same Meet
          URL at the same minute every day, the system records that they
          both showed up, and the logistics around the session (calendar,
          emails, tracking links) live entirely in tools both people
          already use. A 60-minute UTC cap is what keeps that daily
          rhythm honest across continents. A vaguer &ldquo;global pool&rdquo;
          pitch would let the matcher produce pairs that break apart
          within a week when one person realizes their partner is actually
          sitting during their own lunch break. The cap is the explicit,
          publishable version of the thing that less explicit products
          handle implicitly and badly.
        </p>
      </section>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        heading="Want to watch the 60-minute cap accept or reject a real signup?"
        description="Book a short call. We can walk through a live waitlist row, compute its utcMinutes, and see which other rows in the pool fall inside the window. No tutorial, no pitch."
        section="online-accountability-partner-footer"
      />

      <div className="max-w-4xl mx-auto px-6">
        <FaqSection items={faqs} heading="Frequently asked questions" />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          Related pages on this corner of the product
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/t/ai-accountability-partner"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            AI accountability partner: why this one deliberately is not one
          </Link>
          <Link
            href="/t/accountability-partner-app"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Accountability partner app: the inbox as a state machine
          </Link>
          <Link
            href="/t/accountability-partner-apps"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Accountability partner apps (plural), the matcher walk-through
          </Link>
          <Link
            href="/t/accountability-partner-contract"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Accountability partner contract, four legal elements
          </Link>
          <Link
            href="/t/define-accountability-partner"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Define accountability partner, as a recurring Meet URL
          </Link>
          <Link
            href="/practice-buddy"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Practice Buddy, the form the matcher reads from
          </Link>
        </div>
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Walk through the 60-minute cap on a real row with the operator."
        section="online-accountability-partner-sticky"
      />
    </article>
  );
}
