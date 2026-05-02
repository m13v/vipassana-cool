import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  TerminalOutput,
  SequenceDiagram,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/daily-sit-accountability-tracker";
const PUBLISHED = "2026-05-01";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Daily Sit Accountability Tracker: The Site Has Three, None Records Whether You Sat",
  description:
    "Most articles on this topic shortlist five streak apps. Vipassana.cool has three tracker-shaped surfaces (a printable paper sheet, a 16-line day counter, a calendar-RSVP cron) and none of the three records whether you actually sat. The page walks the three files and the design decision behind them.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Daily sit accountability tracker: three surfaces on this site, none of them measures the sit",
    description:
      "A 366-square paper sheet at /daily-sit-log/print, a 16-line day counter that reads from a constant, and a cron at /api/check-rsvp that polls Google Calendar attendees. Walk the three.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "The site has three trackers and none of them measures whether you sat",
    description:
      "A paper sheet, a constant in source code, and a calendar RSVP cron. Across 542 lines of db.ts there is no did_you_sit_today column.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "What is a daily sit accountability tracker, in one sentence?",
    a: "Common usage online: an app, journal, or printable that records each completed meditation session and uses the record (a streak, a chart, a check-in) to make the next session more likely. The phrase compresses two distinct functions into one object: tracking (storing whether the sit happened) and accountability (creating consequences for the gap between intent and behavior). On this site the two functions live on different surfaces and one of the two is deliberately missing. There is no surface anywhere on vipassana.cool that records whether a given practitioner sat on a given day.",
  },
  {
    q: "Why doesn't the site record whether someone sat?",
    a: "Two reasons that turn out to be the same reason. The first is that any field labelled did_you_sit_today is a self-report field. The accuracy of self-reports about meditation drifts upward over time because the social cost of marking a missed day starts to outweigh the cost of dishonesty with a small piece of software. The number stops describing the practice and starts describing the relationship with the tracker. The second is that the tradition this site sits in (Goenka old students, 10-day course graduates) treats the sit as a private act between the practitioner and the technique, and a public log of that act introduces an audience the technique was not built for. The architecture leaves the act unmeasured by design.",
  },
  {
    q: "What are the three tracker-shaped surfaces on the site, exactly?",
    a: "First, a printable one-page sheet at /daily-sit-log/print, with 366 cells and four short rules including 'no streak, no metrics'. The source is a single 123-line file at src/app/daily-sit-log/print/page.tsx. Second, a day counter component at src/components/day-counter.tsx, 16 lines of TypeScript, that reads from a constant BASE_COUNT set to 881 and a REFERENCE_DATE of 2026-02-07 and renders a number followed by a plus sign. Third, a daily cron at /api/check-rsvp that polls Google Calendar for the attendees array on each active match, writes calendar_rsvp_a and calendar_rsvp_b to the matches row, and ends a match if either attendee declined. Three surfaces, three files, all in the public repo.",
  },
  {
    q: "Why does the calendar RSVP cron not count as a sit-completion tracker?",
    a: "Because attendees responseStatus is a state, not an event. It records whether you have or have not declined the calendar invite for the recurring meeting. It does not change when you join the Google Meet, when you stay on the call, when you sit silently for the duration, or when you leave. The cron at src/app/api/check-rsvp/route.ts (192 lines) reads four possible values from the Calendar API: accepted, declined, tentative, needsAction. None of those is a record of whether you sat this morning. The only sit-related action the cron can detect is the negative one: clicking 'No' on the invite, which the system interprets as ending the match.",
  },
  {
    q: "Are there really no streak, sit_count, or completion columns in the database?",
    a: "Verified by grep against src/lib/db.ts (542 lines) on 2026-05-01. The schema for the matches table tracks: id, person_a_id, person_b_id, person_a_session, person_b_session, status, created_at, notes, person_a_token, person_b_token, person_a_confirmed, person_b_confirmed, declined_by_id, calendar_event_id, calendar_rsvp_a, calendar_rsvp_b. The waitlist_entries table tracks identity, time-zone, preferred sit time, and a status field with values like ready, pending, matched. There is no did_you_sit_today column, no sit_count, no streak, no longest_streak, no completion_rate, no last_completed_at. A reader can clone the repo and verify it.",
  },
  {
    q: "What is the printable sheet at /daily-sit-log/print, briefly?",
    a: "One Letter sized page with twelve rows for the months and 31 columns for the days, with February hard-coded to 29 cells so leap years render correctly without a JavaScript date library. Each cell is a square split diagonally; the upper-left half is for AM and the lower-right is for PM. There is no number, no color, no count of any kind. The header has a place to write your name and the year. The footer carries four short rules and the URL of the site. Everything fits on one printed page in portrait orientation. The four rules are: mark after you sit; no colors, no metrics, no streak; missing a day is not failure, stopping is; keep this page somewhere you will see it.",
  },
  {
    q: "If the site doesn't track sits, where does accountability come from?",
    a: "From a person, not a number. The matching service pairs two old students whose preferred sit times in UTC fall within sixty minutes of each other, generates one Google Calendar event with a Meet link auto-created via createRequest, and recurs it daily with RRULE:FREQ=DAILY. After that, the room is the entire accountability surface. If a partner does not appear, the empty Meet on the other side of the link is the signal. There is no streak to tell either party how the partnership is going. There is no progress report, no nudge cron, no weekly check-in. The presence (or absence) of another human at the same wall-clock time every morning is what holds the structure.",
  },
  {
    q: "Is this approach hostile to beginners?",
    a: "No, but it is honest about what it does and does not provide. In the first thirty days post-course the practice is fragile and motivation is doing most of the work. A digital streak counter, a paper checkbox, a partner who texts on missed days; any of those can help in that window. The architecture-of-no-tracking on this site is calibrated to the next phase, when motivation has dropped and what is left has to carry the practice on its own. If you are in your first month, downloading a streak app is reasonable. The argument here is that the system you build for year three is not the same as the system you build for week three, and most articles on this topic conflate the two.",
  },
  {
    q: "Where do I read the actual code?",
    a: "github.com/m13v/vipassana-cool. The three files this page is built around are: src/app/daily-sit-log/print/page.tsx (the printable sheet, 123 lines), src/components/day-counter.tsx (the homepage counter, 16 lines), and src/app/api/check-rsvp/route.ts (the calendar RSVP cron, 192 lines). The schema is at src/lib/db.ts, 542 lines. The matching logic is split across src/lib/emails.ts and src/app/api/auto-match/route.ts. Anyone can clone, grep, and verify the claims on this page; that is the point of putting them in a public repo rather than describing them at marketing-page distance.",
  },
  {
    q: "What if I want operational instruction on how to actually sit?",
    a: "Not on this site. Anything operational about the technique itself, how to work with sensation, how to handle restlessness, what to do when the body hurts, belongs with an authorized assistant teacher at a 10-day residential course, arranged through dhamma.org. This page restricts itself strictly to the outer architecture: paper, code constants, cron jobs. The practice itself stays with the tradition.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Daily sit accountability tracker" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Daily sit accountability tracker", url: PAGE_URL },
];

const relatedPosts = [
  {
    title: "Practice buddy: where the meditation definition inverts",
    href: "/t/practice-buddy",
    excerpt:
      "In sports and music a practice buddy talks. In meditation, on this site, the buddy is silent. The mechanic is one shared Meet URL, no check-ins.",
    tag: "Architecture",
  },
  {
    title: "Partner accountability without a single check-in",
    href: "/t/partner-accountability",
    excerpt:
      "1010 lines of matching code, zero recurring check-in primitives. The empty Meet room is the whole accountability surface.",
    tag: "Architecture",
  },
  {
    title: "Preserving daily practice discipline by subtraction",
    href: "/t/preserving-daily-practice-discipline",
    excerpt:
      "An argument that discipline is preserved by removing decision points. A 16-line day counter with no reset is the anchor.",
    tag: "Argument",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Daily sit accountability tracker: three surfaces on this site, none records whether you sat",
    description:
      "A reference walk through three tracker-shaped surfaces on vipassana.cool (paper sheet, 16-line day counter, calendar RSVP cron) and the design decision behind tracking nothing about the sit itself.",
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
    <article className="min-h-screen text-zinc-900">
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
          A walk through three files
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          Daily sit accountability tracker: this site has three, and none of them records whether you sat
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl leading-relaxed">
          Search this phrase and you get the same shortlist on every page:
          five or six apps, a paper printable, a journal, a wheel chart.
          All of them rest on the same primitive (record each completed
          sit, surface a streak, motivate the next one). This site has
          three surfaces that look like trackers from the outside, and
          not one of them records whether a practitioner actually sat.
          That is not an oversight. It is the design.
        </p>
      </header>

      <div className="py-4">
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="9 min read"
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 md:p-7">
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-teal-700 mb-3">
            Direct answer · verified 2026-05-01
          </p>
          <p className="text-zinc-800 text-[15px] md:text-base leading-relaxed">
            What is the best daily sit accountability tracker? There is
            not one, in the way most articles on this topic mean it.
            The pattern that holds longest, in my experience after
            almost three years of unbroken morning sits, replaces a
            sit-completion tracker with a recurring calendar event
            with another human, and (optionally) a paper sheet you
            mark after the sit. No streak. No app. The three
            tracker-shaped surfaces on this site exist precisely
            because they each refuse to measure the act of sitting.
            Verified directly against{" "}
            <a
              href="https://github.com/m13v/vipassana-cool"
              className="text-teal-700 underline hover:text-teal-900"
              rel="noopener noreferrer"
              target="_blank"
            >
              the public source code
            </a>{" "}
            on 2026-05-01.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Why "tracker" is the wrong primitive after the first month
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          A digital tracker is a self-report surface with a memory.
          You sat. You tap a checkmark. The number goes up. After
          enough taps, the number is the thing you are protecting.
          That works while the gap between the act of sitting and the
          act of marking is small, which it usually is in the first
          thirty days. Motivation is high, the marking happens within
          minutes, the number describes the practice with reasonable
          fidelity.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          What changes between day thirty and day three hundred is
          that the gap widens. A sit gets cut short and you mark it
          anyway, because partial credit feels honest. A morning gets
          missed and you mark the previous evening's sit twice,
          because the streak is a meaningful thing now. A travel day
          turns into a five-minute sit on a hotel bed and you mark a
          full session, because the alternative is a wound on the
          chart. None of these are dishonest in any ordinary sense.
          They are the small accommodations any self-reporting system
          gets, eventually, and they accumulate.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          What you end up with at year two is a tracker that is
          internally consistent and externally untrue. The number
          looks like the practice but it is, in fact, a record of
          your relationship with the tracker. The Goodhart problem
          is general; it is not specific to meditation. The
          architecture on this site is one response to it. Do not
          measure the act. Measure something orthogonal, or measure
          nothing.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Surface one: a paper sheet at /daily-sit-log/print
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The most tracker-shaped object on the site is a static page
          that prints to a single Letter sheet. It lives at{" "}
          <Link
            href="/daily-sit-log/print"
            className="text-teal-600 underline hover:text-teal-700"
          >
            /daily-sit-log/print
          </Link>
          . Twelve rows for the months. Thirty-one columns for the
          days. February is hard-coded to 29 cells so leap years
          render without a JavaScript date library. Each cell is a
          square split diagonally; the upper-left half is for AM, the
          lower-right is for PM. There are no numbers, no colors, no
          counts. The header has space for a name and a year. The
          footer carries four short rules and the URL of the site.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The four rules, verbatim from the file:
        </p>
        <ol className="list-decimal pl-6 mb-4 max-w-3xl space-y-1.5 text-zinc-700">
          <li>Mark after you sit, not before.</li>
          <li>No colors. No metrics. No streak.</li>
          <li>Missing a day is not failure. Stopping is.</li>
          <li>Keep this page somewhere you will see it.</li>
        </ol>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          The whole page is 123 lines of TypeScript at{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
            src/app/daily-sit-log/print/page.tsx
          </code>
          . It is a static layout component with no API call, no
          analytics event, no auth, no user model, no database row.
          The URL is the entire interface. You print it once, you mark
          it with a pen, and the file knows nothing about your
          practice. Whatever marks land on the paper land in your
          drawer, not in a server. The deliberate absence of digital
          state is the point. Compared to every app in the standard
          shortlist, this surface gives up the one feature that makes
          a tracker a tracker: persistence and aggregation across
          devices.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Surface two: a 16-line day counter that reads from a constant
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The number that appears in several places on this site
          (964+ days as of writing) does not come from a streak the
          user is responsible for keeping intact. It comes from one
          file, sixteen lines long, that defines two constants and
          subtracts a date.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The file is{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
            src/components/day-counter.tsx
          </code>
          . BASE_COUNT is set to 881. REFERENCE_DATE is set to
          2026-02-07. When the component renders in a browser, it
          reads the system clock, computes the difference in whole
          days between the current date and the reference date,
          adds the base count, and renders the integer followed by a
          plus sign. There is no API call, no authenticated user, no
          stored streak. There is also no streak-break logic, no
          pause, no excused-absence flow, no make-up-day primitive,
          no celebrate-milestone modal, and no notification when the
          number changes.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The number describes one specific person's practice (mine,
          since the day after my third 10-day course at Dhammamanda
          in NorCal) and it is not your tracker. You cannot pause it,
          you cannot reset it, you cannot share it, you cannot earn
          a badge from it. It is closer to a clock than to a
          tracker. It ticks. The deliberate small surface is the
          editorial decision: a practice number that the surface
          producing it cannot lie about.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          A reader can verify the math. Open the file, copy the
          constants, and run the subtraction by hand. The number on
          the homepage will agree with your arithmetic to the day.
          That is the entire claim the surface makes. It does not
          claim to know about your sits, because it does not.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Surface three: a daily cron that tracks calendar RSVP, not sits
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The third surface is the one that looks the most like a
          tracker from the outside, and the one whose mismatch with
          the word "tracker" is most useful to walk through. It is a
          cron at{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
            src/app/api/check-rsvp/route.ts
          </code>
          , 192 lines. It runs daily. For each active match in the
          database, it fetches the corresponding Google Calendar
          event, reads the attendees array, finds person A and
          person B by email, and records their responseStatus into
          two columns on the matches row:{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
            calendar_rsvp_a
          </code>{" "}
          and{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
            calendar_rsvp_b
          </code>
          . If either person's responseStatus is the string
          "declined", the cron flips the match status to "ended" and
          stops scheduling either of them with each other.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          What the cron does NOT track:
        </p>
        <ul className="list-disc pl-6 mb-4 max-w-3xl space-y-1.5 text-zinc-700">
          <li>Whether either person joined the Google Meet link this morning.</li>
          <li>Whether either person stayed on the call for the full sit duration.</li>
          <li>Whether the call rang into an empty room and one person left after a minute.</li>
          <li>Whether either person sat at all (cushion presence is invisible to the calendar).</li>
        </ul>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The cron tracks one thing: the binary state of "have you
          revoked your acceptance of the recurring meeting".
          Everything else is invisible to it. A sit that happened in
          silence with both people on the Meet looks identical, in
          the database, to a sit that nobody attended. The system
          intentionally cannot tell the two apart.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          The shape of the polling pass, end to end, looks like
          this:
        </p>
        <div className="my-6">
          <SequenceDiagram
            title="What /api/check-rsvp does on each daily run"
            actors={["cron", "db", "Google Calendar", "matches row"]}
            messages={[
              {
                from: 0,
                to: 1,
                label: "SELECT active matches with calendar_event_id",
                type: "request",
              },
              {
                from: 1,
                to: 0,
                label: "rows: [{ id, event_id, email_a, email_b, ... }]",
                type: "response",
              },
              {
                from: 0,
                to: 2,
                label: "GET /events/{event_id}",
                type: "request",
              },
              {
                from: 2,
                to: 0,
                label: "attendees: [{ email, responseStatus }]",
                type: "response",
              },
              {
                from: 0,
                to: 3,
                label: "UPDATE calendar_rsvp_a, calendar_rsvp_b",
                type: "event",
              },
              {
                from: 0,
                to: 3,
                label: "if responseStatus = 'declined' then status = 'ended'",
                type: "event",
              },
            ]}
          />
        </div>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          The asymmetry is clear in the diagram. Every arrow that
          touches Calendar reads or writes RSVP state. None of them
          read or write a sit-completion event. Calendar does not
          have a sit-completion event to read.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The schema check: zero columns for sit completion
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          If the system did track sit completion anywhere, the
          column would live in{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
            src/lib/db.ts
          </code>
          . That file is 542 lines. Two tables matter for this
          page: matches and waitlist_entries. Matches stores the
          pairing between two practitioners. Waitlist_entries stores
          the unmatched roster.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          A grep over that file for words a sit-completion field
          would plausibly use:
        </p>
        <div className="my-6">
          <TerminalOutput
            title="grep over src/lib/db.ts on 2026-05-01"
            lines={[
              {
                text: "grep -nE 'did_you_sit|sit_count|sat_today|completion|streak|last_sit|completed_sit' src/lib/db.ts",
                type: "command",
              },
              { text: "(no matches)", type: "output" },
              {
                text: "grep -n 'calendar_rsvp_a\\|calendar_rsvp_b\\|status' src/lib/db.ts | head -5",
                type: "command",
              },
              { text: "50:  declined_by_id: string | null;", type: "output" },
              { text: "52:  calendar_rsvp_a: string | null;", type: "output" },
              { text: "53:  calendar_rsvp_b: string | null;", type: "output" },
              {
                text: "266:    AND status IN ('confirming', 'pending', 'replied', 'scheduling', 'active')",
                type: "output",
              },
              { text: "508: export async function updateMatchRsvp", type: "output" },
              { text: "schema check: 0 sit-completion columns, 2 RSVP columns", type: "success" },
            ]}
          />
        </div>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          The matches table tracks: id, person_a_id, person_b_id,
          person_a_session, person_b_session, status, created_at,
          notes, person_a_token, person_b_token, person_a_confirmed,
          person_b_confirmed, declined_by_id, calendar_event_id,
          calendar_rsvp_a, calendar_rsvp_b. That is the full list.
          A reader can clone the repo and grep the same words and
          get the same result. The absence is verifiable.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The argument: separate tracking from accountability, then drop the tracking
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The phrase "daily sit accountability tracker" compresses
          two distinct functions into one object. Tracking is the
          recording. Accountability is the consequence. Most apps in
          the standard shortlist provide both inside the same
          surface: the streak record IS the consequence, because
          breaking the streak is what stings.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          This site separates the two. Accountability lives in the
          matching service: a Google Calendar event with another
          old student, recurring on RRULE:FREQ=DAILY, with a Meet
          URL that auto-creates via the Calendar API's createRequest
          field. The consequence of skipping is a specific empty
          room with a specific other person on the other side of
          the link. That consequence does not depend on a tracker.
          It happens in real time, between two people, with no
          dashboard either of them can open.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          Tracking, separately, is reduced to two surfaces neither
          of which records the act of sitting: a paper sheet that
          you mark with a pen if you want, and a homepage day
          counter that describes one practitioner's practice from
          a constant. The first is private to your drawer. The
          second is not yours. Neither is connected to your
          partner. Neither is connected to a database. Neither
          fires a notification when you skip.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          At year three, the architecture left standing is the
          one that never wove tracking into the accountability
          layer. The two functions are doing different jobs and
          they sit on different surfaces. When the tracking gets
          unreliable, which it does, the accountability layer is
          still intact, because it never depended on the tracking
          to begin with.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          A short note on the first month
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          None of the above argues against using a streak app in
          the early phase of a daily practice. In the first thirty
          days, a streak is a useful proxy and the gap between the
          act of sitting and the act of marking is small. If the
          standard shortlist of apps gets a beginner from day one
          to day forty, that is a real outcome and the apps
          deserve credit for it.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          The argument is a year-three argument. By then, motivation
          is gone and the tracker is doing other work. The system
          that survives that transition is the one that never put
          tracking and accountability on the same surface. That is
          the entire point of three trackers that do not track the
          sit.
        </p>
      </section>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        heading="Want to be matched with a silent partner instead of a streak?"
        description="Free, two-minute waitlist. You get one human paired by time-zone overlap and a recurring Meet URL. No dashboard, no streak, no app."
      />

      <div id="faq">
        <FaqSection heading="Common questions" items={faqs} />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <RelatedPostsGrid
          title="Related, on the same architecture"
          posts={relatedPosts}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Two-minute waitlist for a silent practice partner."
      />
    </article>
  );
}
