import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  StepTimeline,
  TerminalOutput,
  SequenceDiagram,
  ProofBanner,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/vipassana-daily-sit-accountability-partner";
const PUBLISHED = "2026-05-07";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana Daily Sit Accountability Partner: Four Words, Four Predicates in the Matcher",
  description:
    "Most pages on this kind of search describe goal alignment and weekly check-ins. The matcher on this site reads the four-word phrase as four predicates and ranks candidate pairs by readyScore, bothOld, sessionMatch, and ±60 UTC minutes, in that order. Every claim grounded in the file path and line range.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Vipassana daily sit accountability partner: how the matcher reads the four words",
    description:
      "Each word in the search query maps to a column or rule. The page walks the four predicates and shows the sort comparator at lines 206-212 of src/app/api/auto-match/route.ts.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Four-word search, four-line sort comparator: how this site finds you a vipassana daily sit accountability partner",
    description:
      "readyScore, bothOld, sessionMatch, ±60 UTC minutes. In that order. Source code in plain view.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "Where do I sign up for one of these matches?",
    a: "vipassana.cool/practice-buddy. The form takes about two minutes and asks for time zone, morning sit time, frequency (once or twice a day), session duration, city, name, and a confirmation that you have completed at least one S.N. Goenka 10-day residential course. After submission your row goes into the waitlist_entries table with status pending. The auto-match cron at src/app/api/auto-match/route.ts runs every two hours and pulls candidates whose first match attempt is at least 24 hours after signup. Wait time ranges from minutes to weeks depending on density in your time zone.",
  },
  {
    q: "Is the 'vipassana' part a hard filter or a preference?",
    a: "A preference, not a filter. The waitlist form does collect an is_old_student field with values 'Yes' or 'No', and at line 197 of the auto-match route the matcher composes a bothOld boolean that is true only when both rows answer Yes. That boolean is the second tiebreaker in the sort comparator, after readyScore and before sessionMatch. The matcher will pair an old student with a non-old-student if no better candidate exists in the same UTC window, but it strongly prefers the both-Yes case when one is available. The intro email's first line of common traits is hard-coded to 'You are both old students in the Goenka tradition' when the predicate fires; see src/lib/emails.ts line 6.",
  },
  {
    q: "What does the matcher actually rank candidate pairs on?",
    a: "Four signals, in this exact priority order: readyScore (sum of explicit 'I want a match now' flags on both sides, 0 to 2), then bothOld (both confirmed old students of S.N. Goenka 10-day courses), then sessionMatch (same session_duration value, e.g. both 60 minutes), then the smallest absolute UTC time difference between their preferred sit times, capped at ±60 minutes. The comparator lives at lines 206 to 212 of src/app/api/auto-match/route.ts as one chained boolean expression. There is no scoring on goals, written commitments, location, or experience years, because none of those are columns on the waitlist_entries table.",
  },
  {
    q: "Why ±60 UTC minutes and not a tighter window?",
    a: "Because the pool is global and the goal is overlap, not synchronization. A reader sitting at 06:00 in San Francisco (14:00 UTC) and one sitting at 07:00 in San Diego (15:00 UTC) are inside the same hour-wide window, so the matcher considers them. A reader at 06:00 Pacific and one at 06:00 Eastern are three hours apart and the matcher will not pair them, regardless of how well their other signals align. The hard filter is at line 187 (`if (diff > 60) continue`). The 60 was chosen empirically; tighter windows starve the matcher in low-density time zones, wider windows produce pairs whose effective overlap is so small that one party tends to skip rather than re-time.",
  },
  {
    q: "What does 'daily' resolve to in code?",
    a: "Exactly one line: `recurrence: ['RRULE:FREQ=DAILY']` at line 75 of src/lib/google-meet.ts. When a match goes live the createMeetEvent function writes one Google Calendar event with that recurrence rule and no UNTIL clause, attaches a Meet URL via createRequest, and ships the invite to both attendees. There is no Monday-Wednesday-Friday option, no skip-weekends rule, no per-day cadence selector. The cadence is the strongest constraint in the system. A reader who wants a three-day-a-week buddy is in the wrong product, not the wrong page.",
  },
  {
    q: "What does 'sit' resolve to, beyond duration?",
    a: "On the form, the session_duration field has values like '30 minutes', '45 minutes', '1 hour'. In the matcher, equality on that field is the third tiebreaker (sessionMatch). On the calendar event, the duration is computed from both rows' session_duration values; a 30-minute partner paired with a 60-minute partner gets a 60-minute event so neither is cut short. Beyond that, 'sit' is interpreted by the system as a non-conversational act: the Calendar invite description is one sentence ('Your daily meditation practice buddy session via vipassana.cool'), there is no agenda, and the Meet room is opened with both partners free to keep cameras off. No row in the database records whether either party joined, stayed, or actually sat.",
  },
  {
    q: "How is this different from a generic accountability partner app?",
    a: "Three differences, all visible in the code. First, the qualification field. A generic app asks for the goal; the waitlist form asks whether you have completed a 10-day residential course in this specific lineage. Second, the recurrence model. A generic app schedules a weekly check-in call; the matcher writes one daily Calendar event for the practice itself, no separate weekly call exists in the system. Third, the success state. A generic app surfaces streaks, goal completion percentages, weekly summaries; the matcher writes zero columns of that kind. The match is created, the Meet is sent, the cron's job is done. Anything after that happens between two humans in a room.",
  },
  {
    q: "Can twice-a-day practitioners get two different buddies?",
    a: "Yes, by design. Lines 154 to 161 of the auto-match route generate one slot for the morning and a second slot for the evening when the row's frequency is 'Twice a day'. The slots are independent in the matcher; they get scored and paired separately. A practitioner who sits twice can end up with one buddy in the morning and a different buddy in the evening, since the time-zone overlap that makes a morning match work usually does not work for the evening one. The same two people will not be paired with each other twice across the two sessions; that constraint is enforced at line 226 with a sorted person-pair key.",
  },
  {
    q: "What if no compatible candidate is in my UTC window?",
    a: "Your row stays in the pool with status pending. The cron runs every two hours and re-evaluates from scratch each time, so a new signup in your window can match you on the next tick. The system has no notion of a permanent unmatched state; rows do not expire from the queue. As of this page there are dozens of pending rows alongside the actively matched pairs. Time zones with thin density (small countries off-peak hours) take longer; dense corridors (US Pacific morning, IST morning, CET morning) usually match within a day or two of signup.",
  },
  {
    q: "What about the technique itself, can the buddy help with that?",
    a: "No. The buddy is a peer practitioner, not a teacher. Anything operational about the technique (how to sit, what to do when the body hurts, how to handle restlessness, how to recover after a long break) belongs with an authorized assistant teacher at a 10-day residential course, arranged through dhamma.org. The matcher restricts itself strictly to logistics: pairing two practitioners by time zone and tradition, writing one shared Calendar event, and stepping out of the way. The practice itself stays with the tradition and its authorized teachers.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Vipassana daily sit accountability partner" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  {
    name: "Vipassana daily sit accountability partner",
    url: PAGE_URL,
  },
];

const relatedPosts = [
  {
    title: "Partner accountability without a single check-in",
    href: "/t/partner-accountability",
    excerpt:
      "1010 lines of matching code, zero recurring check-in primitives. The empty Meet room is the whole accountability surface.",
    tag: "Mechanism",
  },
  {
    title: "Daily sit accountability tracker: three surfaces, none records the sit",
    href: "/t/daily-sit-accountability-tracker",
    excerpt:
      "A printable sheet, a 16-line day counter, a calendar RSVP cron. Across 542 lines of db.ts there is no did_you_sit_today column.",
    tag: "Architecture",
  },
  {
    title: "Practice buddy: where the meditation definition inverts",
    href: "/t/practice-buddy",
    excerpt:
      "In sports and music a practice buddy talks. In meditation the same phrase resolves to a peer who joins the same call and never speaks.",
    tag: "Definition",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Vipassana daily sit accountability partner: four words, four predicates in the matcher",
    description:
      "A walkthrough of the four predicates the matching cron uses to resolve the search phrase 'vipassana daily sit accountability partner' into a real pairing. Each predicate anchored to a file and line range.",
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
          Four words, four predicates
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          Vipassana daily sit accountability partner: how the matcher reads the four words
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl leading-relaxed">
          Most pages on this kind of phrase describe goal alignment,
          written commitments, weekly check-in calls. The matching
          service on this site does none of those things. It reads the
          four-word phrase as four predicates and ranks candidate
          pairs against a four-line sort comparator. Each word in the
          phrase maps to a column or rule in source code that anyone
          can grep for.
        </p>
      </header>

      <div className="py-4">
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="8 min read"
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 md:p-7">
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-teal-700 mb-3">
            Direct answer · verified 2026-05-07
          </p>
          <p className="text-zinc-800 text-[15px] md:text-base leading-relaxed">
            Where do you find a vipassana daily sit accountability
            partner. Sign up at{" "}
            <Link
              href="/practice-buddy"
              className="text-teal-700 underline hover:text-teal-900"
            >
              vipassana.cool/practice-buddy
            </Link>
            . Free. The form asks for time zone, morning sit time,
            frequency, session duration, and a confirmation that you
            are an old student of an S.N. Goenka 10-day course. The
            matcher pairs you against other rows whose preferred sit
            time falls within ±60 minutes of yours in UTC, prefers
            both-old-student pairs over either-or-neither, then writes
            one shared Google Meet URL on{" "}
            <code className="rounded bg-white px-1 py-0.5 font-mono text-[12px]">
              RRULE:FREQ=DAILY
            </code>
            . Verified directly against{" "}
            <a
              href="https://github.com/m13v/vipassana-cool"
              className="text-teal-700 underline hover:text-teal-900"
              rel="noopener noreferrer"
              target="_blank"
            >
              the public source code
            </a>{" "}
            on 2026-05-07.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The four-word phrase, decomposed
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          A reader who types this exact phrase has already filtered
          themselves. They are not asking for a generic peer to push
          them through a quarterly OKR. They are asking for someone
          to sit with them, every day, in this specific lineage. The
          phrase carries four constraints, and every public guide on
          accountability partnership I have read collapses three of
          them and answers only the fourth.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The matcher on this site refuses that collapse. Each word
          becomes either a column on the{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
            waitlist_entries
          </code>{" "}
          table, a rule in the Calendar event payload, or a clause in
          the sort comparator. Walk the four below in order.
        </p>

        <StepTimeline
          title="The four predicates the matcher reads"
          steps={[
            {
              title: "vipassana → is_old_student column, soft preference",
              description:
                "The waitlist form has a Yes/No field for completion of an S.N. Goenka 10-day course. At line 197 of src/app/api/auto-match/route.ts the matcher composes a bothOld boolean that is true only when both rows answer Yes. bothOld is the second tiebreaker in the sort comparator. The matcher will pair an old student with a non-old-student if no better candidate is in the UTC window, but it strongly prefers the both-Yes case.",
            },
            {
              title: "daily → RRULE:FREQ=DAILY, with no UNTIL clause",
              description:
                "Exactly one line of the system. At line 75 of src/lib/google-meet.ts the createMeetEvent function writes recurrence: ['RRULE:FREQ=DAILY'] into the Calendar event payload. There is no Monday-Wednesday-Friday option, no skip-weekends, no per-day cadence selector. The cadence is the single strongest constraint in the product.",
            },
            {
              title: "sit → session_duration matching, no agenda",
              description:
                "The form captures session_duration as a string like '30 minutes' or '1 hour'. Equality on that field is the third tiebreaker (sessionMatch). The Calendar event description is one sentence with no agenda. The room is opened with both partners free to keep cameras off. No row in the database records whether either party actually joined or sat.",
            },
            {
              title: "accountability partner → ±60 UTC minutes, single Meet URL",
              description:
                "At line 187 the matcher applies a hard filter: if the absolute UTC time difference between two rows exceeds 60 minutes, the pair is rejected before scoring. Inside the window, the smallest diff wins after the three tiebreakers fire. The accountability layer is one Meet URL shared between exactly two humans, no group, no nudges, no scheduled conversation.",
            },
          ]}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The sort comparator, in four lines
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The clearest way to verify the priority order is to grep
          for it. The comparator is one chained boolean expression on
          the array of viable session pairs.
        </p>
        <div className="my-6">
          <TerminalOutput
            title="grep for the sort comparator on 2026-05-07"
            lines={[
              {
                text: "grep -nA 6 'allViable.sort' src/app/api/auto-match/route.ts",
                type: "command",
              },
              {
                text: "206:  allViable.sort(",
                type: "output",
              },
              {
                text: "207:    (x, y) =>",
                type: "output",
              },
              {
                text: "208:      (y.readyScore - x.readyScore) ||",
                type: "output",
              },
              {
                text: "209:      (Number(y.bothOld) - Number(x.bothOld)) ||",
                type: "output",
              },
              {
                text: "210:      (Number(y.sessionMatch) - Number(x.sessionMatch)) ||",
                type: "output",
              },
              {
                text: "211:      (x.diff - y.diff)",
                type: "output",
              },
              {
                text: "212:  );",
                type: "output",
              },
              {
                text: "comparator: 4 signals, descending priority",
                type: "success",
              },
            ]}
          />
        </div>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          Read top to bottom. The first predicate that produces a
          non-zero result wins; ties cascade to the next. Pairs where
          both sides have explicitly clicked the &apos;I want a match
          now&apos; flag (status = ready) are scored highest, both-old
          pairs are next, same-session-duration pairs after that, and
          the closest UTC time match is the final tiebreaker. The
          ±60 minute filter at line 187 is upstream of this; pairs
          outside the window never enter the array being sorted.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          Notice what the comparator does not score on. There is no
          term for goal alignment because the form does not capture a
          goal. There is no term for years of practice because the
          form does not capture experience. There is no term for
          city, because city is collected for human readability in
          the intro email but is not used by the matcher.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What the cron actually does, every two hours
        </h2>
        <p className="text-zinc-700 mb-6 max-w-3xl leading-relaxed">
          The auto-match cron runs every two hours. The full lifecycle
          for one viable pair, from queue read to Meet creation, looks
          like this:
        </p>
        <SequenceDiagram
          title="One pass of /api/auto-match against the queue"
          actors={["cron", "waitlist queue", "matcher", "Calendar API"]}
          messages={[
            {
              from: 0,
              to: 1,
              label: "SELECT pending and ready rows, exclude unsubscribed",
              type: "request",
            },
            {
              from: 1,
              to: 0,
              label: "rows with timezone, morning_utc, session_duration, is_old_student",
              type: "response",
            },
            {
              from: 0,
              to: 2,
              label: "build session slots, compute UTC minutes per row",
              type: "event",
            },
            {
              from: 2,
              to: 2,
              label: "filter: diff > 60 → drop. score: ready, bothOld, sessionMatch, diff",
              type: "event",
            },
            {
              from: 2,
              to: 0,
              label: "best non-overlapping pairs (greedy)",
              type: "response",
            },
            {
              from: 0,
              to: 3,
              label: "POST /events with RRULE:FREQ=DAILY + createRequest for Meet",
              type: "request",
            },
            {
              from: 3,
              to: 0,
              label: "eventId, hangoutLink (one URL for the recurring series)",
              type: "response",
            },
          ]}
        />
        <p className="text-zinc-700 mt-4 max-w-3xl leading-relaxed">
          The whole pass is a few hundred lines of TypeScript and one
          external write. Once the Meet URL is created, the matcher
          inserts two rows into the meet_links table (one tracking URL
          per partner), sends one intro email with both addresses on
          the To line, and hands the partnership off to two humans
          and a calendar invite. There is no row written that
          schedules a check-in conversation. The system is not
          expecting one to happen.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-10">
        <ProofBanner
          metric="±60 min"
          quote="The hard filter at line 187: if the absolute UTC time difference between two rows exceeds sixty minutes, the pair is rejected before scoring."
          source="src/app/api/auto-match/route.ts"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What is not in the schema (and why that matters)
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The waitlist_entries table is short. Identity columns
          (name, email, city, timezone), practice columns (frequency,
          session_duration, morning_time, morning_utc, evening_time,
          evening_utc), one tradition column (is_old_student), and
          some bookkeeping (status, contact_count, pass_count,
          created_at, unsubscribed). Any reader can clone the repo
          and grep src/lib/db.ts to confirm the list.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          Five things that a generic accountability-partner schema
          would carry, and that this one does not:
        </p>
        <ul className="list-disc pl-6 mb-4 max-w-3xl space-y-1.5 text-zinc-700">
          <li>
            no <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">goal_text</code> or written commitment field
          </li>
          <li>
            no <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">weekly_check_in_day</code> or cadence selector
          </li>
          <li>
            no <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">progress_template</code> or report row
          </li>
          <li>
            no <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">streak</code>, <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">sit_count</code>, or completion column
          </li>
          <li>
            no <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">supervisor_id</code> or asymmetric role field
          </li>
        </ul>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          The absence is the design. The matcher does one job (pair
          two humans into the same recurring room at roughly the same
          wall-clock time) and refuses to model anything that would
          push the pair toward conversation. A reader who needs that
          conversation is a fit for a different product.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Why &apos;vipassana&apos; in front of the phrase changes everything
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          Strip the first word and the phrase becomes generic. Daily
          sit accountability partner could describe a Soto Zen
          morning sangha pair, a TMI buddy on a Discord call, a
          Mahasi pair from a different lineage, or an open-ended
          mindfulness app pairing. None of those would be served well
          by the matcher on this site, because the system was tuned
          for one specific population.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          That population is Goenka 10-day course graduates with a
          home practice that wobbles when the residential support
          structure ends. The signup form gates on that explicitly
          (the is_old_student question is the only mandatory
          self-classification). The intro email opens with one of the
          common-traits lines from{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
            buildCommonTraits
          </code>{" "}
          in src/lib/emails.ts, and the first conditional in that
          function is the same is_old_student check.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          The lineage shapes everything else. Because the technique
          is taught only inside 10-day residential courses by
          authorized assistant teachers, peers in this lineage cannot
          coach each other on technique without crossing a line the
          tradition draws. Silent co-presence is not a quirk of the
          product; it is the only honest shape an accountability
          partnership can take inside this lineage. The matcher
          codifies that constraint by leaving every conversational
          mechanic out of the schema.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What happens after a match
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          Both partners receive one intro email with each other&apos;s
          first name, city, time zone, and a personal{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
            /meet/[token]
          </code>{" "}
          link that 302-redirects to the same shared Google Meet URL.
          The Calendar invite arrives separately. From the
          system&apos;s perspective, the partnership is now finished
          being built. From the partners&apos; perspective, the daily
          rhythm starts on the next morning slot.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The cron does keep a small follow-up surface. A separate
          job at src/app/api/check-rsvp/route.ts polls the Calendar
          event each day and reads the attendees array. If either
          person sets their RSVP to declined, the match status flips
          to ended and neither will be paired with the other again.
          That is the only signal the system uses to detect a
          breakdown. It cannot tell whether a partner showed up to
          the Meet, only whether they revoked the recurring invite.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          Both partners are also free to swap notes outside the
          system. The intro email&apos;s reply-to is set so that any
          reply lands in both inboxes plus the operator&apos;s, which
          gives the pair a small back-channel if they want one. Most
          do not. The ones I have asked describe the daily room as
          enough.
        </p>
      </section>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        heading="Want a walk through the matcher before you sign up?"
        description="Twenty minutes on a call, end to end: how the form translates into a row, how the cron picks your pair, what the intro email looks like, what happens if no match lands inside your time-zone window."
        section="vipassana-daily-sit-partner-footer"
      />

      <div id="faq" className="max-w-4xl mx-auto px-6">
        <FaqSection items={faqs} heading="Frequently asked questions" />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <RelatedPostsGrid
          title="Related, on the same architecture"
          posts={relatedPosts}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Talk to the operator about how the matcher would handle your time zone."
        section="vipassana-daily-sit-partner-sticky"
      />
    </article>
  );
}
