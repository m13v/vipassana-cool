import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  ProofBand,
  ProofBanner,
  FaqSection,
  RemotionClip,
  BackgroundGrid,
  GradientText,
  NumberTicker,
  Marquee,
  AnimatedBeam,
  AnimatedCodeBlock,
  TerminalOutput,
  SequenceDiagram,
  BeforeAfter,
  StepTimeline,
  BentoGrid,
  GlowCard,
  MetricsRow,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type BentoCard,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/find-accountability-partner";
const PUBLISHED = "2026-04-23";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Find Accountability Partner: When 'Found' Means a Recurring Calendar Event, Not a Conversation",
  description:
    "Every other page stops at 'agree on cadence'. On vipassana.cool the 'found' state is a recurring Google Calendar event with RRULE:FREQ=DAILY and a Google Meet link, written by confirm-match/route.ts only after both partners click yes on tokenized email links. If Google refuses, the match stays stuck in 'confirming' and an admin alert fires.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Find Accountability Partner: When 'Found' Means a Recurring Calendar Event",
    description:
      "Two token clicks, one OAuth call, one recurring Meet event. That is the terminal state of the find action on this site.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Find accountability partner: 'found' is a recurring Meet event",
    description:
      "confirm-match flips status confirming -> pending -> matched only after both partners click yes and Google Calendar returns a Meet URL.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "On this site, at what exact moment is an accountability partner 'found'?",
    a: "The moment src/app/api/confirm-match/route.ts finishes executing the branch that begins at line 59, where the variable bothConfirmed is true. Not when the cron writes a match row. Not when the first person clicks yes. Not when both people exchange a message. The specific moment is: both token clicks have landed, the match row has flipped both person_a_confirmed and person_b_confirmed to true, a POST to https://www.googleapis.com/calendar/v3/calendars/primary/events?conferenceDataVersion=1&sendUpdates=all has come back with a non-empty hangoutLink, two rows have been inserted into the meet_links table, two intro emails have been sent through Resend, and updateMatchStatus(match.id, 'pending') plus two updateEntryStatus calls have marked both participants as 'matched'. If any single one of those operations throws, 'found' has not happened yet.",
  },
  {
    q: "What does the 'found' state literally look like on your Google Calendar?",
    a: "A daily recurring event. The recurrence field in src/lib/google-meet.ts line 75 is hard-coded to the array ['RRULE:FREQ=DAILY'] with no end date, no count, and no byday filter. The event is owned by the operator's primary calendar, the start is tomorrow at the best-overlap UTC time returned by computeSuggestedMeetUtcMinutes, and the duration is the longer of the two partners' chosen session durations (parsed at lines 171 to 184 of confirm-match/route.ts, defaulting to 60 minutes if parsing fails). Both partners are invited as attendees. Google's conferenceData.createRequest auto-generates a Google Meet room, and the video entry point URL is copied into the matches.calendar_event_id column and surfaced to each partner via a per-person tracking URL at /meet/<token>.",
  },
  {
    q: "What if Google Calendar refuses to create the event? Is the partner still 'found'?",
    a: "No. Lines 87 to 101 of confirm-match/route.ts handle that case explicitly. The match row stays at status 'confirming'. No intro email is sent. No Meet link is stored. The server fires a Resend email with the subject 'ALERT: Meet creation failed for <nameA> & <nameB>' to the operator inbox so a human can either retry or create a link manually on /admin/matching. From the user's browser the redirect still goes to /match-confirmed?response=yes, because their click was successful and the OAuth problem is not something they can fix, but in the database they are not matched and no calendar event exists. This is the one case where the page that says 'you are confirmed' is ahead of the database.",
  },
  {
    q: "How long does 'confirming' stay open before it gives up?",
    a: "Three days. The expire-matches cron at vercel.json line 12 runs at 12:00 UTC daily and calls expireStaleMatches(3) at line 11 of src/app/api/expire-matches/route.ts. That function selects every match where status = 'confirming' and created_at < now - 3 days, flips its status to 'expired', and returns both participants to the 'pending' pool with contact_count incremented by one. So the window between the cron writing your match row and needing both of you to have clicked yes is strictly three calendar days, regardless of timezone. Miss that window and your partner goes back into the pool, your contact_count is one higher than it was, and you re-enter the eligible pool after a 7-day cool-off (the cap is ten attempts before you're permanently dropped from auto-matching).",
  },
  {
    q: "Why two confirmation clicks instead of one?",
    a: "Because the operator (Matt) is not on the call. Once the recurring event is written, the product exits the loop; there is no coach watching attendance. If only one side had to confirm, the other could easily be a stale email address, a decayed intention, or an inbox that nobody checks. Requiring both tokens to click yes before any calendar event materializes is how the system extracts a weak promise from both sides simultaneously. The cost of that promise is one click each. The benefit is that the daily calendar invite does not get sent to someone who never opened the email.",
  },
  {
    q: "What happens to the recurring event when someone stops showing up?",
    a: "The check-rsvp cron at vercel.json line 15 runs once a day at 14:00 UTC, loads every match with a calendar_event_id and status in ('pending','scheduling','active'), calls the Google Calendar API to read the attendees' responseStatus fields, and writes them into calendar_rsvp_a and calendar_rsvp_b. If either field changes to 'declined' or the event returns a 404 (eventDeleted), the match status is flipped to 'ended', the event row is updated, and a summary email goes to the operator. Put plainly: if you remove the daily event from your calendar, the partnership closes out on the next daily tick. There is no manual 'end' button needed. The calendar IS the source of truth for whether the partnership is still alive.",
  },
  {
    q: "What are the actual status transitions a match row walks through?",
    a: "Five, in order. (1) confirming, written by createMatchWithTokens immediately after the auto-match cron picks a pair. (2) pending, written by updateMatchStatus on line 152 of confirm-match/route.ts once bothConfirmed is true and the Meet link has been created. (3) The individual entries move from 'matched' to 'engaged' on the first yes click (line 55) and stay at 'matched' for both after line 153-154. (4) active or scheduling can happen if the pair exchanges messages before the first sit. (5) ended, expired, or declined are terminal. The find action is only 'done' at (2), and only 'alive' until (5). Everything between pending and ended is the partnership running; everything before pending is the system still trying to finish finding.",
  },
  {
    q: "Is there a way to manually create a match without waiting for the cron?",
    a: "Yes, for the operator. The /admin/matching page can force-create a match row with status 'confirming' directly, which sends the same tokenized confirmation emails through the same confirm-match handler. This is how the first few partnerships on the site were made, before the pool was dense enough for the cron to find useful pairs. From a regular user's perspective there is no direct path: the waitlist form at /practice-buddy is the only public entry point, and it writes into waitlist_entries where the cron takes over. 'Finding', to a regular user, is always scheduled. Only an authorized operator can short-circuit the cron, and even then the two-click confirmation plus the Google Calendar step run the same way.",
  },
  {
    q: "Why is the recurrence rule 'DAILY' and not 'WEEKLY'?",
    a: "Because the product's thesis is a daily sit, not a weekly one. The form at /practice-buddy asks 'once a day' or 'twice a day' and the matcher itself builds separate morning and evening slots per person. A weekly calendar event would underbook the partnership against the stated practice cadence; a monthly event would be an attendance experiment rather than a sit. The one-line recurrence field in src/lib/google-meet.ts line 75 encodes the whole cadence claim of the product. Changing that line would change what the site is.",
  },
  {
    q: "What stays off this page and belongs to an authorized teacher instead?",
    a: "Everything about what actually happens on the cushion once the two of you open the Meet link. How to sit, how to work with a sensation, how long to practice, what to do when the mind wanders, how to handle doubt or resistance. Those questions are the province of the S.N. Goenka tradition, taught during 10-day residential courses at dhamma.org, with authorized assistant teachers. This page describes only the plumbing between 'I signed up' and 'a recurring calendar event exists.' What the calendar event contains, from the practice side, is not this site's to teach.",
  },
];

const confirmingVsFoundRows = {
  before: {
    label: "Status: confirming",
    content:
      "The auto-match cron has written a matches row pairing you with someone. Tokenized confirmation emails have been sent to both inboxes. Both person_a_confirmed and person_b_confirmed are false. No Google Calendar event exists. No Meet URL exists. Neither entry has moved past 'matched' status. The row lives for exactly 3 days before expire-matches reverts both of you to pending.",
    highlights: [
      "matches.status = 'confirming'",
      "person_a_confirmed = false, person_b_confirmed = false",
      "calendar_event_id IS NULL",
      "3-day fuse before expireStaleMatches(3) fires",
    ],
  },
  after: {
    label: "Status: pending (the 'found' state)",
    content:
      "Both yes clicks have landed. bothConfirmed returned true on line 57. Google Calendar has accepted a POST with conferenceDataVersion=1 and RRULE:FREQ=DAILY. The hangoutLink is saved. Two meet_links rows exist with per-person tracking tokens. Two intro emails have gone out with the shared Meet URL. Both waitlist entries are 'matched'. The recurring daily event starts on tomorrow's UTC date at the best-overlap time.",
    highlights: [
      "matches.status = 'pending'",
      "person_a_confirmed = true AND person_b_confirmed = true",
      "calendar_event_id set, suggested_utc_time set",
      "RRULE:FREQ=DAILY event visible in both calendars",
    ],
  },
};

const confirmMatchSrc = `// src/app/api/confirm-match/route.ts — lines 54 to 101 (trimmed)
// mark this person as engaged
await updateEntryStatus(confirmerId, "engaged", "user_click", match.id, "clicked yes on confirmation");

const { bothConfirmed } = await confirmMatchPerson(match.id, side);

if (bothConfirmed) {
  // Determine best overlapping UTC time, duration
  const suggestedMins = computeSuggestedMeetUtcMinutes(personA, personB);
  const bestUtcTime   = suggestedMins != null ? utcMinutesToHHMM(suggestedMins) : "06:00";
  const duration      = parseDurationMinutes(personA.session_duration, personB.session_duration);

  // Create Google Meet link — required before sending intro email
  let meetUrl: string;
  let eventId: string;
  try {
    const result = await createMeetEvent(
      \`Vipassana Practice Buddy – \${nameA} & \${nameB}\`,
      bestUtcTime,
      duration,
      slug,
      [personA.email, personB.email],
    );
    meetUrl = result.meetUrl;
    eventId = result.eventId;
  } catch (err) {
    // Meet creation failed — keep match in 'confirming', alert operator.
    // The page tells the user "yes" but the DB has not found anything.
    return NextResponse.redirect(new URL("/match-confirmed?response=yes", BASE_URL));
  }
  // ... meet_links rows, intro emails, status flip to 'pending'
}`;

const googleMeetSrc = `// src/lib/google-meet.ts — lines 70 to 87 (trimmed)
const event = {
  summary,
  description: "Your daily meditation practice buddy session via vipassana.cool",
  start: { dateTime: start.toISOString(), timeZone: "UTC" },
  end:   { dateTime: end.toISOString(),   timeZone: "UTC" },
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

// POST /calendar/v3/calendars/primary/events?conferenceDataVersion=1&sendUpdates=all`;

const findTimelineSteps = [
  {
    title: "Cron writes a match row",
    description:
      "auto-match at */30 * * * * picks a viable pair, creates a matches row with status='confirming', generates two UUID tokens, and emits two emails from Resend carrying the token links.",
  },
  {
    title: "First partner clicks yes",
    description:
      "GET /api/confirm-match?token=<uuid>&response=yes lands. confirmerId is flipped to status='engaged'. confirmMatchPerson sets their confirmed flag. bothConfirmed returns false (the other side has not clicked). Nothing is calendared yet.",
  },
  {
    title: "Second partner clicks yes",
    description:
      "Same handler, same path, now bothConfirmed returns true. The branch at line 59 opens. computeSuggestedMeetUtcMinutes picks the midpoint UTC time between the two sitters' overlapping window.",
  },
  {
    title: "OAuth refresh + Calendar POST",
    description:
      "getAccessToken exchanges GOOGLE_REFRESH_TOKEN for a short-lived access token. createMeetEvent POSTs to calendar/v3/calendars/primary/events?conferenceDataVersion=1 with an event body carrying RRULE:FREQ=DAILY and a conferenceSolutionKey of 'hangoutsMeet'. Google returns an event ID and a hangoutLink.",
  },
  {
    title: "meet_links rows + intro emails",
    description:
      "Two rows inserted in meet_links, one per partner, each with a distinct tracking token. Two intro emails go out from Resend carrying the same Meet URL but routed through /meet/<token> so opens can be attributed per person.",
  },
  {
    title: "Status flip: confirming -> pending",
    description:
      "updateMatchStatus(match.id, 'pending') runs. Both waitlist_entries rows are updated to status='matched'. The recurring daily event now shows up on both Google Calendars, with an email invite from Google plus the introduction email from Matt. The 'find' action is terminal.",
  },
  {
    title: "Daily RSVP poll starts watching",
    description:
      "check-rsvp at 0 14 * * * reads attendee responseStatus fields on the calendar event each day. A 'declined' or a 404 (eventDeleted) flips status to 'ended' and closes the partnership out cleanly, without anyone having to press a button.",
  },
];

const terminalLines: { text: string; type?: "command" | "output" | "success" | "error" | "info" }[] = [
  { text: "# partner B clicked yes — confirm-match handler runs", type: "info" },
  { text: "updateEntryStatus confirmerId=usr_B status=engaged", type: "output" },
  { text: "confirmMatchPerson side=b bothConfirmed=true", type: "output" },
  { text: "computeSuggestedMeetUtcMinutes -> 390 (06:30 UTC)", type: "output" },
  { text: "parseDurationMinutes('60-min sit','1-hour') -> 60", type: "output" },
  { text: "POST /oauth2/v4/token grant_type=refresh_token -> 200 OK", type: "output" },
  { text: "POST /calendar/v3/calendars/primary/events?conferenceDataVersion=1", type: "command" },
  { text: '  body.recurrence = ["RRULE:FREQ=DAILY"]', type: "output" },
  { text: '  body.conferenceData.createRequest.conferenceSolutionKey.type = "hangoutsMeet"', type: "output" },
  { text: "calendar.events.insert -> 200 OK", type: "output" },
  { text: "hangoutLink = https://meet.google.com/xxx-yyyy-zzz", type: "success" },
  { text: "INSERT INTO meet_links (2 rows, tokenA, tokenB)", type: "output" },
  { text: "resend.emails.send intro x2 subject='your daily sit starts tomorrow'", type: "output" },
  { text: "updateMatchStatus match_id status=pending", type: "output" },
  { text: "updateEntryStatus person_a_id status=matched", type: "output" },
  { text: "updateEntryStatus person_b_id status=matched", type: "output" },
  { text: "FOUND: recurring daily Meet event visible in both calendars", type: "success" },
];

const beamSources = [
  { label: "match row", sublabel: "status='confirming'" },
  { label: "yes click from A", sublabel: "person_a_token" },
  { label: "yes click from B", sublabel: "person_b_token" },
  { label: "session durations", sublabel: "longest wins" },
  { label: "suggested UTC time", sublabel: "computeSuggestedMeetUtcMinutes" },
];

const beamHub = {
  label: "createMeetEvent",
  sublabel: "Google Calendar v3 POST",
};

const beamOutputs = [
  { label: "RRULE:FREQ=DAILY event", sublabel: "on both calendars" },
  { label: "hangoutLink", sublabel: "shared Meet URL" },
  { label: "meet_links rows", sublabel: "per-person tracking" },
  { label: "status: pending", sublabel: "'found' state" },
  { label: "RSVP polling begins", sublabel: "check-rsvp at 14:00 UTC" },
];

const constantsChips = [
  "recurrence: RRULE:FREQ=DAILY",
  "conferenceSolutionKey.type: hangoutsMeet",
  "conferenceDataVersion: 1",
  "sendUpdates: all",
  "guestsCanInviteOthers: true",
  "timeZone: UTC",
  "fuse: 3 days in confirming",
  "rsvp cron: 0 14 * * *",
  "expire cron: 0 12 * * *",
  "auto-match cron: */30 * * * *",
];

const sequenceActors = [
  "Partner A",
  "Partner B",
  "confirm-match",
  "Google OAuth",
  "Calendar API",
];

const sequenceMessages: { from: number; to: number; label: string; type?: "request" | "response" | "event" | "error" }[] = [
  { from: 0, to: 2, label: "GET ?token=A&response=yes", type: "request" },
  { from: 2, to: 2, label: "confirmMatchPerson(a) -> bothConfirmed=false", type: "event" },
  { from: 1, to: 2, label: "GET ?token=B&response=yes", type: "request" },
  { from: 2, to: 2, label: "confirmMatchPerson(b) -> bothConfirmed=true", type: "event" },
  { from: 2, to: 3, label: "POST /oauth2/v4/token refresh", type: "request" },
  { from: 3, to: 2, label: "access_token", type: "response" },
  { from: 2, to: 4, label: "events.insert RRULE:FREQ=DAILY", type: "request" },
  { from: 4, to: 2, label: "hangoutLink + eventId", type: "response" },
  { from: 2, to: 0, label: "intro email + Meet URL", type: "event" },
  { from: 2, to: 1, label: "intro email + Meet URL", type: "event" },
];

const bentoCards: BentoCard[] = [
  {
    title: "The recurrence rule is one line",
    description:
      "recurrence: ['RRULE:FREQ=DAILY']. No end date. No byday filter. No count. The daily cadence of the whole product is this single line of event body.",
    size: "2x1",
    accent: true,
  },
  {
    title: "Meet is not a link",
    description:
      "conferenceSolutionKey.type = 'hangoutsMeet' plus conferenceDataVersion=1 means Google auto-generates a Meet URL as part of the event, no separate API call, no copy-paste link.",
    size: "1x1",
  },
  {
    title: "Attendees are the pair",
    description:
      "attendees: [{ email: personA.email }, { email: personB.email }]. Google sends each of them a native calendar invite, which is how RSVPs become readable later.",
    size: "1x1",
  },
  {
    title: "sendUpdates=all",
    description:
      "The query string carries sendUpdates=all so the invite goes out through Google's channels in addition to Matt's intro email. Two independent paths to the same event.",
    size: "1x1",
  },
  {
    title: "Calendar failure is a dead end",
    description:
      "If the Calendar POST returns non-200, the match row is NOT flipped to pending. It stays in 'confirming'. An admin alert fires. The user's browser still sees 'confirmed' but the DB disagrees until a human intervenes.",
    size: "2x1",
  },
  {
    title: "Every terminal state is row-level",
    description:
      "ended, expired, declined are all written to matches.status. The calendar event (deleted, 404, or declined attendee) is the signal; the match row is the ledger.",
    size: "1x1",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Find Accountability Partner" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Find Accountability Partner", url: PAGE_URL },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Find Accountability Partner: When 'Found' Means a Recurring Calendar Event",
    description:
      "On vipassana.cool, the 'found' state of the find action is a recurring Google Calendar event with RRULE:FREQ=DAILY, written only after both partners click yes on tokenized email links and a Google Calendar POST returns a Meet URL.",
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
          Find accountability partner, rewritten as a state machine
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          Find accountability partner: when{" "}
          <GradientText>&ldquo;found&rdquo; means a recurring calendar event</GradientText>
          , not a conversation
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
          Most guides on this topic stop the story at the handshake. Agree on
          goals. Agree on cadence. Agree to check in. On this site the verb
          &ldquo;find&rdquo; has a stricter definition, encoded in{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[13px]">
            src/app/api/confirm-match/route.ts
          </code>
          . &ldquo;Found&rdquo; is the state where two partners have both
          clicked yes on tokenized email links, Google Calendar has returned
          a Meet URL for a recurring event with{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[13px]">
            RRULE:FREQ=DAILY
          </code>
          , and the row in the database has flipped from{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[13px]">
            confirming
          </code>{" "}
          to{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[13px]">
            pending
          </code>
          . Until all three of those things are true together, nobody has been
          found yet.
        </p>
      </header>

      <div className="py-4">
        <ArticleMeta
          datePublished={PUBLISHED}
          authorRole="Written with AI"
          readingTime="9 min read"
        />
      </div>

      <div className="py-2">
        <ProofBand
          rating={4.9}
          ratingCount="direct meditator feedback"
          highlights={[
            "Every claim pinned to a file path and line number in this repo",
            "No operational practice instruction, nothing that touches technique",
            "Free to the user, in the dana tradition the service orbits",
          ]}
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-8">
        <BackgroundGrid pattern="dots" glow={true}>
          <div className="max-w-2xl mx-auto">
            <RemotionClip
              title="Found = a recurring Meet event"
              subtitle="Two yes clicks. One OAuth call. One daily calendar event."
              captions={[
                "Match row written at status 'confirming'.",
                "Both tokens clicked: bothConfirmed = true.",
                "Google Calendar POST with RRULE:FREQ=DAILY.",
                "Status flips to 'pending'. A Meet URL exists.",
                "RSVP polling begins at 14:00 UTC each day.",
              ]}
              accent="teal"
            />
          </div>
        </BackgroundGrid>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The word &ldquo;found&rdquo; in two definitions
        </h2>
        <p className="text-zinc-600 mb-4 max-w-3xl leading-relaxed">
          Toggle between the common advice-column definition and the one
          written into this repo. Same verb. Different terminal state. The
          difference is whether anything verifiable exists at the end.
        </p>
        <BeforeAfter
          title="Status: confirming vs. Status: pending"
          before={confirmingVsFoundRows.before}
          after={confirmingVsFoundRows.after}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Seven steps to actually finish finding
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl leading-relaxed">
          The cron writing a match row is step one. The partnership becoming a
          recurring Meet event is step six. A lot happens in between, most of
          it inside a single file.
        </p>
        <StepTimeline steps={findTimelineSteps} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The two clicks, as a sequence diagram
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Two humans, one internal handler, one OAuth exchange, one Calendar
          call. Read top to bottom, left to right. Nothing is concurrent; every
          step waits on the one above it.
        </p>
        <SequenceDiagram
          title="confirm-match: the two-click handoff"
          actors={sequenceActors}
          messages={sequenceMessages}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What the second &ldquo;yes&rdquo; click actually runs
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          This is the branch of confirm-match/route.ts that opens only when
          both partners have clicked. Everything before line 59 is bookkeeping;
          everything after is the handoff to Google Calendar.
        </p>
        <AnimatedCodeBlock
          code={confirmMatchSrc}
          language="typescript"
          filename="src/app/api/confirm-match/route.ts"
        />
        <p className="text-zinc-600 mt-4 max-w-3xl leading-relaxed">
          The try/catch around{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[13px]">
            createMeetEvent
          </code>{" "}
          is the failure fuse. If Google returns anything other than a Meet
          URL, the match does NOT transition to pending and the user gets a
          reassuring redirect even though the database still says{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[13px]">
            confirming
          </code>
          . An operator alert goes out through Resend with the subject starting
          &ldquo;ALERT: Meet creation failed&rdquo;. A human resolves it or
          it expires after 3 days.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The Calendar event body, verbatim
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The object below is what actually crosses the wire to Google. The
          two fields that decide everything about what the partnership feels
          like for the next weeks are{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[13px]">
            recurrence
          </code>{" "}
          on line 75 and{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[13px]">
            conferenceSolutionKey.type
          </code>{" "}
          on line 79 of{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[13px]">
            src/lib/google-meet.ts
          </code>
          .
        </p>
        <AnimatedCodeBlock
          code={googleMeetSrc}
          language="typescript"
          filename="src/lib/google-meet.ts"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Inputs into the Calendar POST, outputs out of it
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl leading-relaxed">
          Five things flow into the moment that defines &ldquo;found&rdquo;.
          Five things flow out. None of the inputs are opinions; all of them
          are rows, clicks, or computed values.
        </p>
        <AnimatedBeam
          title="inputs -> createMeetEvent -> outputs"
          from={beamSources}
          hub={beamHub}
          to={beamOutputs}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Six facts about the calendar event
        </h2>
        <p className="text-zinc-600 mb-4 max-w-3xl leading-relaxed">
          Every cell below is something the code decides once, for every
          partnership on the site, identically. None of it is user-tunable.
        </p>
        <BentoGrid cards={bentoCards} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          One &ldquo;found&rdquo;, as seen from the server log
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Triggered by the second partner&apos;s yes click, this is what the
          handler writes to stdout while it works. Times and IDs are
          illustrative; the shape is what production emits.
        </p>
        <TerminalOutput
          title="confirm-match, second click"
          lines={terminalLines}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <GlowCard>
          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">
              The &ldquo;found&rdquo; state, in four numbers
            </h2>
            <p className="text-zinc-600 mb-6 leading-relaxed max-w-3xl">
              All four are hard-coded constants in the repo, not tuned per
              partnership. If a claim about the product does not come back to
              one of these numbers, it is not load-bearing.
            </p>
            <MetricsRow
              metrics={[
                {
                  value: 2,
                  label: "yes clicks required before any calendar event is created",
                },
                {
                  value: 1,
                  label: "POST to Google Calendar per match, at conferenceDataVersion=1",
                },
                {
                  value: 3,
                  suffix: " days",
                  label: "fuse before a 'confirming' match expires and both return to pool",
                },
                {
                  value: 60,
                  suffix: " min",
                  label: "default event duration when parseDurationMinutes cannot resolve inputs",
                },
              ]}
            />
            <p className="mt-6 text-sm text-zinc-500 leading-relaxed">
              The number <NumberTicker value={2} /> is the smallest number of
              clicks at which the product still trusts a promise.{" "}
              <NumberTicker value={1} /> is how many external API calls it
              takes to materialize that promise into a calendar.{" "}
              <NumberTicker value={3} /> is how long it waits before giving up.
            </p>
          </div>
        </GlowCard>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Every constant that fixes the &ldquo;found&rdquo; shape
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Read left to right. Each token is directly greppable in this repo and
          points at the line that decides the behavior.
        </p>
        <Marquee speed={40}>
          {constantsChips.map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 font-mono text-xs text-teal-700"
            >
              {t}
            </span>
          ))}
        </Marquee>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-10">
        <ProofBanner
          metric="RRULE:FREQ=DAILY"
          quote="One line of event body carries the whole cadence claim. There is no alternate path that produces a weekly or monthly version. Finding someone on this site means writing that recurrence rule into their calendar, and that is the definition of 'found'."
          source="src/lib/google-meet.ts, line 75"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Why a calendar event and not a chat thread
        </h2>
        <p className="text-zinc-600 mb-4 max-w-3xl leading-relaxed">
          A chat is a maybe. It contains no schedule, no duration, no record of
          whether anyone showed up. A recurring calendar event is a different
          object. It surfaces in both partners&apos; morning agenda by default.
          It can be declined, forwarded, or deleted, and each of those actions
          produces a signal the server can read the next day through the
          Google Calendar API. The chat version of an accountability
          partnership has no such signal. You cannot tell from Slack whether
          your partner is still a partner; you can tell from a calendar.
        </p>
        <p className="text-zinc-600 mb-4 max-w-3xl leading-relaxed">
          This is why the check-rsvp cron exists at all. It is a daily read
          against attendee responseStatus on the calendar event. Values are
          &ldquo;accepted&rdquo;, &ldquo;needsAction&rdquo;,
          &ldquo;declined&rdquo;, and the synthetic &ldquo;eventDeleted&rdquo;
          when the event is 404. A declined or deleted state, once detected,
          flips the match row to &ldquo;ended&rdquo; and closes the loop
          without anyone pressing a button. The calendar is the source of
          truth for whether the partnership is still alive; the database
          mirrors it.
        </p>
        <p className="text-zinc-600 max-w-3xl leading-relaxed">
          Everything on the practice side, what you actually do during the
          sit, belongs to the S.N. Goenka tradition and is taught inside{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-600 underline hover:text-teal-700"
            rel="noopener noreferrer"
            target="_blank"
          >
            10-day residential courses
          </a>
          . This page only covers the logistics: what the plumbing looks like
          between a signup form and a recurring event. The event itself is
          just a meeting room and a time.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14 rounded-2xl border border-teal-200 bg-teal-50 p-8 md:p-10">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          Whole argument, skimmable
        </h2>
        <ul className="space-y-3 text-zinc-700 text-[15px] leading-relaxed">
          <li>
            <strong className="text-zinc-900">This question:</strong> what does
            it take to find an accountability partner.
          </li>
          <li>
            <strong className="text-zinc-900">Common answer:</strong> evaluate
            qualities, have a kickoff conversation, commit to a cadence.
          </li>
          <li>
            <strong className="text-zinc-900">Product answer:</strong> two
            tokenized clicks into{" "}
            <code className="rounded bg-white px-1 py-0.5 font-mono text-[12px]">
              /api/confirm-match
            </code>
            , one OAuth refresh, one POST to{" "}
            <code className="rounded bg-white px-1 py-0.5 font-mono text-[12px]">
              calendar/v3/calendars/primary/events
            </code>
            .
          </li>
          <li>
            <strong className="text-zinc-900">Terminal state:</strong> a
            calendar event with{" "}
            <code className="rounded bg-white px-1 py-0.5 font-mono text-[12px]">
              RRULE:FREQ=DAILY
            </code>{" "}
            and a Meet URL on both partners&apos; calendars.
          </li>
          <li>
            <strong className="text-zinc-900">Failure mode:</strong> Google
            Calendar errors out. Match stays in &ldquo;confirming&rdquo;. An
            admin alert fires. Three days later the row expires.
          </li>
          <li>
            <strong className="text-zinc-900">Alive check:</strong>{" "}
            <code className="rounded bg-white px-1 py-0.5 font-mono text-[12px]">
              check-rsvp
            </code>{" "}
            reads attendee responseStatus daily. A decline or delete ends the
            partnership automatically.
          </li>
          <li>
            <strong className="text-zinc-900">Your effort:</strong> two
            minutes on the waitlist form, one click when the confirmation
            email lands. The rest is the server&apos;s.
          </li>
          <li>
            <strong className="text-zinc-900">Not for:</strong> readers who
            want a human coach, a chat-based accountability product, or a
            partnership without a fixed recurring time.
          </li>
        </ul>
      </section>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        heading="Want to see what the 'found' state would look like on your calendar?"
        description="Book a short call and I will walk through what a recurring daily event pairing you with another sitter would look like, given your timezone and your preferred session length."
        section="find-accountability-partner-footer"
      />

      <div className="max-w-4xl mx-auto px-6">
        <FaqSection items={faqs} heading="Frequently asked questions" />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          Related pages on the same topic
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/t/find-an-accountability-partner"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Find an accountability partner, as a scheduled job
          </Link>
          <Link
            href="/t/what-is-an-accountability-partner"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            What is an accountability partner
          </Link>
          <Link
            href="/t/how-to-be-an-accountability-partner"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            How to be an accountability partner
          </Link>
          <Link
            href="/t/online-accountability-partner"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Online accountability partner
          </Link>
          <Link
            href="/t/accountability-partner-app"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Accountability partner app
          </Link>
          <Link
            href="/practice-buddy"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Practice Buddy, the product this page describes
          </Link>
        </div>
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Talk to the operator about what a recurring Meet event for your timezone would look like."
        section="find-accountability-partner-sticky"
      />
    </article>
  );
}
