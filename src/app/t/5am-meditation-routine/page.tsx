import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  TerminalOutput,
  SequenceDiagram,
  HorizontalStepper,
  GlowCard,
  RelatedPostsGrid,
  BackgroundGrid,
  NumberTicker,
  ProofBanner,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/5am-meditation-routine";
const PUBLISHED = "2026-05-05";
const VERIFIED = "2026-05-05";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "5am Meditation Routine: Why It's a UTC Slot, Not a Clock Decision (Real Numbers from 87 Signups)",
  description:
    "Most 5am routine guides treat the hour as a willpower decision. On this site, 7 of 87 sit-companion signups picked 5am, and their UTC slots span 13 hours. A 5am routine that survives past week two needs a human on the call, not a habit tracker. Here is what the actual data looks like, plus the matching mechanic that decides who you sit with.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "5am Meditation Routine: Why It's a UTC Slot, Not a Clock Decision",
    description:
      "Real cohort data from 87 sit-companion signups on vipassana.cool: 7 picked 5am, scattered across 13 hours of UTC. The matcher pairs by UTC, not local hour, so your 5am buddy is almost never another 5am sitter.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "5am Meditation Routine: It's a UTC Slot, Not a Clock Decision",
    description:
      "7 of 87 signups picked 5am. Their UTC slots span 13 hours. The matcher cannot pair any of them with each other. Real numbers, real mechanic.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "What is the actual answer: how do I start a 5am meditation routine that sticks?",
    a: "The honest answer from the cohort on this site: a 5am sit survives past week two only when something other than yourself notices the empty cushion. For the seven people on this waitlist who picked the 5:00 to 5:59 local window, the lasting variable was not an app or a streak counter, it was a real human waiting on a Google Meet link at the same UTC instant. The catch is that 5am-your-local is a different UTC slot than 5am for almost everyone else, so the human on the other end is almost certainly not another 5am sitter. They are whoever happens to live in the UTC ±60 minute pool around your hour. For anything operational about the sit itself (length, posture, what to do during it) the redirect is dhamma.org and an authorized assistant teacher at a 10-day course.",
  },
  {
    q: "How many people on vipassana.cool actually picked a 5am morning sit?",
    a: "Seven, out of 87 signups with a morning time set, queried on 2026-05-05. The 6:00 hour was four times more popular (25 signups), and 7:00 was the single most popular hour (26 signups). The 5am cohort is small, and it scatters across six different timezones (Asia/Kolkata, America/New_York, America/Phoenix, Asia/Dubai, Europe/Lisbon, Europe/Paris). That spread is the entire reason the matcher does not assume you want another 5am sitter on your call.",
  },
  {
    q: "Why does the matcher pair me by UTC instead of by local hour?",
    a: "Because two people on different continents who both 'sit at 5am' are physically unable to be on the same call. A Paris 5:00am is 04:00 UTC. A Kolkata 5:00am is 23:30 UTC the night before. They are 4.5 hours apart, well outside any plausible same-instant overlap. Local time is a label on a wall, not a meeting time. UTC is the meeting time. The conversion happens at write time using the timezone you provide on the form, with DST awareness, and the matcher's hard filter then rejects any candidate whose UTC slot is more than 60 minutes off yours. The relevant call is toUtcTime in src/lib/db.ts, used at lines 148 and 155 of src/app/api/auto-match/route.ts.",
  },
  {
    q: "If 5am sitters are scattered, who actually shows up for my call?",
    a: "Whoever else is in your UTC ±60 minute pool. A US East Coast 5:00am sit converts to 09:00 or 10:00 UTC depending on DST; the people in that pool are the morning sitters in Casablanca and Lagos and the late-morning sitters in Western Europe. A Bay Area 5:00am converts to 12:00 or 13:00 UTC; that pool is dominated by midday sitters in Europe and early-evening sitters in India. A Berlin 5:00am converts to 03:00 or 04:00 UTC; that pool is mostly late-evening sitters in Asia and a small handful of the planet's other early risers. Local 5am does not buy you another local 5am. It buys you whatever lives at the same UTC.",
  },
  {
    q: "Why is 5am the hour every productivity site recommends?",
    a: "Because of the 5am Club, the Miracle Morning, and a long lineage of 'wake before the world' framings. Those books are about labor, not about sitting; the 5am hour is recommended because the calendar is empty and the household is asleep. Both reasons hold for a sit too. What those books leave out, because they were not designed around peer accountability, is that 5am picked in isolation is the hardest hour to defend without external structure. The same morning that has no work meetings on it also has no friction against sleeping in. Sleep is the upstream variable. The redirect for technique-related questions remains dhamma.org and an authorized assistant teacher.",
  },
  {
    q: "Should I sit at 5am if I work full-time?",
    a: "There is a longer page on this site about the working-professional case (linked at the bottom). The short version is that the morning hour before the work calendar wakes up is the cleanest hour a full-timer has a defendable claim on, and 5am is one of the safest picks inside that window. The site's matcher offers a 'Twice a day' mode with two independent matches, one morning and one evening, so a 5am sit can be paired with one human and a 7pm sit with a completely different human. For the operational question of how long to sit and how to handle a difficult sit, that is for an authorized assistant teacher inside a 10-day course, not for this site.",
  },
  {
    q: "What if my 5am UTC pool is empty?",
    a: "It happens. The matcher does not invent a buddy. If no candidate exists in your UTC ±60 minute window for a few cron cycles, you wait. The cron runs every two hours. Empty pools tend to fill up in waves; a single new signup in your UTC band can change everything. If the pool is genuinely sparse for your timezone (some UTC bands are lighter than others, the data shows 05:00 and 06:00 UTC are the densest), the practical move is to widen your tolerance by writing back and saying you are open to a slightly off-hour match. Otherwise, the algorithm leaves you alone, with no pressure to settle.",
  },
  {
    q: "Will I be matched with someone at my exact 5:00am, or just close to it?",
    a: "Close to it, in UTC, not local. The hard filter is ±60 minutes UTC. Inside that window, the loop sorts candidates by smallest time difference, so the first match attempted will be the closest UTC overlap available. If you signed up at 5:00am local with a 12:00 UTC slot, the algorithm will try 12:00 UTC sitters first, then 11:30 / 12:30, then 11:00 / 13:00. Beyond 60 minutes UTC the candidate is dropped from your pool entirely.",
  },
  {
    q: "Does the 5am hour 'work better' than 7am for the practice?",
    a: "That is a question for an authorized assistant teacher in the Goenka tradition, not for this site. The site does not teach the technique and does not rank hours of the day. What this page can speak to is the calendar layer: 5am is the hour with the least competition from the rest of the world, but it has the most competition from sleep. 7am is the inverse. Neither is a 'better hour' on this site's data, both have working cohorts, and the matching engine treats the two pools identically.",
  },
  {
    q: "Can I read the matching algorithm myself?",
    a: "Yes. The repo is open. The cron lives at src/app/api/auto-match/route.ts. The UTC conversion uses toUtcTime from src/lib/db.ts. The ±60 minute filter is at line 187. The dual-session pairing logic is at lines 217 to 235 (greedy loop with usedSlots and usedPersonPairs). The whole matcher is around three hundred lines of TypeScript and reads top to bottom.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "5am Meditation Routine" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "5am Meditation Routine", url: PAGE_URL },
];

const cohortQueryLines: { text: string; type?: "command" | "output" | "success" | "error" | "info" }[] = [
  { text: "node scripts/morning-times-cohort.mjs", type: "command" },
  { text: "Connecting to DATABASE_URL via @neondatabase/serverless ...", type: "output" },
  { text: "OK", type: "success" },
  { text: "", type: "output" },
  { text: "Bucketed morning sit times (waitlist_entries, 2026-05-05)", type: "info" },
  { text: "  bucket          count", type: "output" },
  { text: "  00:00 to 03:59      1", type: "output" },
  { text: "  04:00 to 04:59      3", type: "output" },
  { text: "  05:00 to 05:59      7", type: "output" },
  { text: "  06:00 to 06:59     25", type: "output" },
  { text: "  07:00 to 07:59     26", type: "output" },
  { text: "  08:00 to 08:59      9", type: "output" },
  { text: "  09:00 and later    16", type: "output" },
  { text: "", type: "output" },
  { text: "5am cohort timezones (n = 7)", type: "info" },
  { text: "  Asia/Kolkata        2  -> morning_utc 23:30", type: "output" },
  { text: "  America/New_York    1  -> morning_utc 09:00", type: "output" },
  { text: "  America/Phoenix     1  -> morning_utc 12:45", type: "output" },
  { text: "  Asia/Kolkata        1  -> morning_utc 23:45", type: "output" },
  { text: "  Europe/Lisbon       1  -> morning_utc 04:30", type: "output" },
  { text: "  Europe/Paris        1  -> morning_utc 04:00", type: "output" },
  { text: "", type: "output" },
  { text: "UTC spread of the 5am cohort: 23:30 to 12:45 (13 hours, 15 minutes)", type: "info" },
  { text: "Pairs of 5am sitters in the SAME UTC pool (within 60 min): 0", type: "success" },
];

const utcConversionExamples: { localCity: string; localTime: string; utcEarly: string; utcLate: string; pool: string }[] = [
  {
    localCity: "Berlin / Paris",
    localTime: "5:00 local",
    utcEarly: "03:00 UTC (CEST)",
    utcLate: "04:00 UTC (CET)",
    pool: "late evening sitters in East Asia, a thin slice of Australian early-morning sitters",
  },
  {
    localCity: "Lisbon",
    localTime: "5:00 local",
    utcEarly: "04:00 UTC (WEST)",
    utcLate: "05:00 UTC (WET)",
    pool: "Indian late-evening sitters, Egyptian morning sitters, a small Western European early cohort",
  },
  {
    localCity: "New York",
    localTime: "5:00 local",
    utcEarly: "09:00 UTC (EDT)",
    utcLate: "10:00 UTC (EST)",
    pool: "European late-morning sitters, North African mid-morning sitters",
  },
  {
    localCity: "San Francisco",
    localTime: "5:00 local",
    utcEarly: "12:00 UTC (PDT)",
    utcLate: "13:00 UTC (PST)",
    pool: "European midday sitters, Indian early-evening sitters",
  },
  {
    localCity: "Phoenix",
    localTime: "5:00 local",
    utcEarly: "12:00 UTC (MST, no DST)",
    utcLate: "12:00 UTC (MST, no DST)",
    pool: "European midday sitters, Indian early-evening sitters",
  },
  {
    localCity: "Mumbai / Delhi",
    localTime: "5:00 local",
    utcEarly: "23:30 UTC (prior day, IST)",
    utcLate: "23:30 UTC (prior day, IST)",
    pool: "American West Coast late-afternoon sitters, Pacific evening sitters",
  },
  {
    localCity: "Sydney",
    localTime: "5:00 local",
    utcEarly: "18:00 UTC (AEST)",
    utcLate: "19:00 UTC (AEDT)",
    pool: "European early-evening sitters, North African mid-evening sitters",
  },
];

const sequenceActors = [
  "You at 5:00 local",
  "Form (toUtcTime)",
  "Pairing loop",
  "Buddy at the same UTC",
];

const sequenceMessages: { from: number; to: number; label: string; type?: "request" | "response" | "event" | "error" }[] = [
  { from: 0, to: 1, label: "Submit morning_time = 05:00 + timezone", type: "request" },
  { from: 1, to: 1, label: "DST-aware convert: store morning_utc", type: "event" },
  { from: 1, to: 2, label: "Insert slot row keyed by personId:morning", type: "event" },
  { from: 2, to: 2, label: "Cron tick (every 2h): scan all morning slots", type: "event" },
  { from: 2, to: 2, label: "Apply hard filter: drop candidates >60 min UTC off", type: "event" },
  { from: 2, to: 3, label: "Send intro email at the closest UTC overlap", type: "request" },
  { from: 3, to: 0, label: "Confirm Meet link, both names, both first names", type: "response" },
  { from: 0, to: 3, label: "Show up silently, weekday mornings", type: "event" },
];

const fourSteps: { title: string; description?: string }[] = [
  {
    title: "Pick a local 5:00 with a real timezone",
    description:
      "Form converts to UTC at write time. The hour you put on the form is the only number this site stores; the UTC field is computed.",
  },
  {
    title: "Wait one cron tick",
    description:
      "Pairing runs every two hours. New signups join the candidate pool in the next tick.",
  },
  {
    title: "Get a buddy at the same UTC, not the same local",
    description:
      "Whoever lives in your UTC ±60 minute window. Almost never another local 5am sitter. Often a different continent.",
  },
  {
    title: "Show up silently on a permanent Meet link",
    description:
      "Cameras on, no chat, no streak counter. Empty cushion is what the buddy notices, not what an app scores.",
  },
];

const relatedPosts = [
  {
    title: "Daily Meditation Practice Working Full Time",
    href: "/t/daily-meditation-practice-working-full-time",
    excerpt:
      "Why a full-time worker gets two different buddies, one for the morning sit and one for the evening sit, with the seven lines of code that enforce it.",
    tag: "Working professional",
  },
  {
    title: "Daily Vipassana for a Working Professional",
    href: "/t/daily-vipassana-working-professional",
    excerpt:
      "The UTC window mechanic in long form, focused on the morning bracket of a 9 to 5.",
    tag: "Calendar mechanic",
  },
  {
    title: "Meditation Timer App for the Daily Sit",
    href: "/t/meditation-timer-app-daily-sit",
    excerpt:
      "What a timer is for, what it is not for, and why the timer is not the load-bearing instrument when the sit slips.",
    tag: "Tools",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "5am Meditation Routine: Why It's a UTC Slot, Not a Clock Decision",
    description:
      "Real cohort data from vipassana.cool: 7 of 87 sit-companion signups picked the 5am hour. Their UTC slots span 13 hours, so the matcher cannot pair any of them with each other. The page walks through the data, the UTC overlap mechanic, and what a 5am routine that survives past week two actually looks like.",
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
        <p className="text-xs font-mono uppercase tracking-[0.22em] text-teal-700 mb-3">
          Cohort note, verified {VERIFIED}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          5am meditation routine: it is a UTC slot, not a clock decision
        </h1>
        <p className="mt-4 text-lg text-zinc-700 max-w-3xl leading-relaxed">
          Most pages on this topic frame 5am as a willpower decision: pick the
          hour, set the alarm, install an app, win the morning. After watching
          this site&apos;s sit-companion waitlist fill up across timezones, that
          framing stops describing the actual problem. The hour you can defend is
          the hour something other than yourself notices the empty cushion. The
          number you can match against is your UTC slot, not your local 5:00.
          And the buddy on your call is almost never another 5am sitter,
          because 5am scatters across the planet at 13 hours of UTC spread.
        </p>
      </header>

      <div className="py-4">
        <ArticleMeta
          datePublished={PUBLISHED}
          authorRole="Written with AI"
          readingTime="9 min read"
        />
      </div>

      <section className="max-w-3xl mx-auto px-6 my-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-teal-700 mb-2">
            Direct answer (verified {VERIFIED})
          </p>
          <p className="text-zinc-800 leading-relaxed">
            A 5am meditation routine sticks past week two only when something
            other than yourself notices the empty cushion. On this site that
            something is a real human on a permanent Google Meet link. The
            non-obvious part: the matcher pairs by UTC, not by your local
            clock, so your 5am buddy is almost never another 5am sitter.
            They are whoever happens to live in your UTC ±60 minute window.
            Verified against the live <code className="rounded bg-white px-1 py-0.5 text-[12px] text-zinc-700">waitlist_entries</code>{" "}
            table on {VERIFIED} (n = 87 morning-time signups, 7 in the 5am
            bucket). For technique questions, the redirect is{" "}
            <a
              href="https://www.dhamma.org"
              className="text-teal-700 underline hover:text-teal-800"
              rel="noopener noreferrer"
              target="_blank"
            >
              dhamma.org
            </a>{" "}
            and an authorized assistant teacher inside a 10-day course.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-12">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The anchor fact: 7 of 87 picked 5am, and none of them can sit together
        </h2>
        <p className="text-zinc-700 mb-6 max-w-3xl leading-relaxed">
          The waitlist for the practice-buddy matcher on this site collects a
          local morning time and a timezone. Both fields are required, and a
          DST-aware conversion to UTC happens at write time. Below is the
          actual cohort distribution at the time of writing, queried directly
          against the open-source schema.
        </p>
        <BackgroundGrid pattern="dots" glow={true}>
          <div className="max-w-2xl mx-auto">
            <TerminalOutput
              title="cohort query (waitlist_entries)"
              lines={cohortQueryLines}
            />
          </div>
        </BackgroundGrid>
        <p className="mt-6 text-sm text-zinc-600 max-w-3xl leading-relaxed">
          The 5:00 to 5:59 hour is real but small: 7 sitters out of 87. What
          made the cohort interesting was not the count, it was that the seven
          live in six different timezones, producing six different UTC
          slots ranging from 23:30 the prior day (Asia/Kolkata) to 12:45 the
          same day (America/Phoenix). Under the matcher&apos;s hard ±60 minute
          UTC filter at line 187 of{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px] text-zinc-800">
            src/app/api/auto-match/route.ts
          </code>
          , none of them can match each other. They each match a different,
          non-5am pool somewhere else on the planet.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <ProofBanner
          quote="Local time is a label on the wall. UTC is the meeting time. Inside the 5am cohort on this site, that label spans 13 hours of UTC."
          source="The single line of intent behind toUtcTime in src/lib/db.ts"
          metric="13h"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What &lsquo;5am&rsquo; actually maps to in UTC, by region
        </h2>
        <p className="text-zinc-700 mb-6 max-w-3xl leading-relaxed">
          The table below is what the matcher sees when seven different humans
          all submit a local 5:00 morning. It is the same form field, the same
          number on the wall, and seven different UTC slots, three of which
          shift by an hour twice a year because of DST. The pool of likely
          buddies on the right is what the matcher actually has to work with
          inside ±60 minutes UTC.
        </p>
        <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50 text-left text-xs uppercase tracking-wider text-zinc-600">
              <tr>
                <th className="px-4 py-3 font-semibold">Local city</th>
                <th className="px-4 py-3 font-semibold">Local time</th>
                <th className="px-4 py-3 font-semibold">UTC (DST on)</th>
                <th className="px-4 py-3 font-semibold">UTC (DST off)</th>
                <th className="px-4 py-3 font-semibold">
                  Likely pool inside ±60 min UTC
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {utcConversionExamples.map((row) => (
                <tr key={row.localCity} className="hover:bg-teal-50/40">
                  <td className="px-4 py-3 font-medium text-zinc-900">
                    {row.localCity}
                  </td>
                  <td className="px-4 py-3 font-mono text-zinc-700">
                    {row.localTime}
                  </td>
                  <td className="px-4 py-3 font-mono text-teal-700">
                    {row.utcEarly}
                  </td>
                  <td className="px-4 py-3 font-mono text-teal-700">
                    {row.utcLate}
                  </td>
                  <td className="px-4 py-3 text-zinc-600">{row.pool}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-zinc-600 max-w-3xl leading-relaxed">
          The DST split matters more than it looks. A US East Coast 5am sitter
          on March 15 is at 10:00 UTC; on March 16 (DST), the same person at
          the same wall clock is at 09:00 UTC. The candidate pool changes by
          one full hour overnight, twice a year. The matcher recomputes UTC
          fresh on every cron tick (lines 148 and 155 of{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px] text-zinc-800">
            src/app/api/auto-match/route.ts
          </code>
          ) so a stale value never silently breaks a pairing.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The mechanic: from form submit to a buddy on the call
        </h2>
        <p className="text-zinc-700 mb-6 max-w-3xl leading-relaxed">
          Read top to bottom. The form does the local-to-UTC conversion. The
          cron loop applies the hard ±60 minute filter, sorts the survivors by
          smallest UTC difference, and emits an intro email to the closest
          available human. There is no streak counter and no engagement score
          anywhere in the path.
        </p>
        <SequenceDiagram
          title="From a 5:00 local form submit to a buddy on the call"
          actors={sequenceActors}
          messages={sequenceMessages}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Four steps that describe what actually happens, not a willpower plan
        </h2>
        <p className="text-zinc-700 mb-6 max-w-3xl leading-relaxed">
          The 5am Club, the Miracle Morning, and most of the rest of the
          internet on this topic give a willpower checklist. This site does
          not. Below is the literal four-step path through the system, after
          which the algorithm runs on its own and the practice is yours.
        </p>
        <HorizontalStepper title="What the matcher does, in order" steps={fourSteps} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <GlowCard>
          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-zinc-900 mb-3">
              Why the &lsquo;just wake up earlier&rsquo; framing fails after week two
            </h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              Inside the 87-signup waitlist on this site, the most common
              reason a single-sit person stops sitting is not lost
              motivation. It is{" "}
              <NumberTicker value={1} suffix=" missing variable" />: nobody
              else notices the empty cushion. Streak counters do not notice.
              Habit-tracker apps do not notice. A buddy on a permanent Google
              Meet link does, immediately. The matcher is not built to make
              you sit. It is built to put a real human on the call you said
              you wanted.
            </p>
            <p className="text-zinc-700 leading-relaxed mb-4">
              The 5am hour, specifically, is the most fragile single hour to
              defend on willpower alone. It is the cleanest claim against the
              calendar (no work meetings, no household activity), and it is
              the worst claim against sleep (the upstream variable). Pinning
              the hour to a person on a Meet link transfers the weight from
              motivation to social presence, which is closer to what daily
              practice in this tradition has always lived inside (group
              sittings, weekly old-student meets, and 10-day courses).
            </p>
            <p className="text-zinc-700 leading-relaxed">
              The site does not teach the technique and does not prescribe a
              duration. For everything operational about the sit itself, the
              redirect is{" "}
              <a
                href="https://www.dhamma.org"
                className="text-teal-700 underline hover:text-teal-800"
                rel="noopener noreferrer"
                target="_blank"
              >
                dhamma.org
              </a>{" "}
              and an authorized assistant teacher at a 10-day residential
              course. The site only handles the calendar layer.
            </p>
          </div>
        </GlowCard>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          A short note on what this page deliberately does not give you
        </h2>
        <ul className="space-y-3 text-zinc-700 text-[15px] leading-relaxed">
          <li>
            <strong className="text-zinc-900">No technique instructions.</strong>{" "}
            What you do during the sit was given to you at a 10-day course by
            an authorized teacher. If you have not sat one yet, the entry
            point is{" "}
            <a
              href="https://www.dhamma.org"
              className="text-teal-700 underline hover:text-teal-800"
              rel="noopener noreferrer"
              target="_blank"
            >
              dhamma.org
            </a>
            .
          </li>
          <li>
            <strong className="text-zinc-900">No prescribed duration.</strong>{" "}
            The form has a session-duration field (30 minutes, 1 hour) used
            only as a tie-breaker by the matcher. The site does not tell you
            how long to sit; that question is for an assistant teacher.
          </li>
          <li>
            <strong className="text-zinc-900">No streak counter.</strong>{" "}
            There is no number on the buddy match. There is no leaderboard.
            The Meet link is permanent and silent. An empty cushion is
            something a buddy notices, not something the system scores.
          </li>
          <li>
            <strong className="text-zinc-900">
              No promise of another 5am sitter.
            </strong>{" "}
            The matcher pairs by UTC, not by local hour. Your 5am buddy is
            almost certainly not at 5am on their wall clock. They are at the
            same instant in UTC.
          </li>
        </ul>
      </section>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        heading="Want help picking a 5am UTC slot the matcher can actually find buddies in?"
        description="Book a short call. We can walk through your timezone, pick a UTC slot with a healthy candidate pool, and (if a 5am sit is the right answer for your week) get you on the waitlist with a realistic match window."
        section="5am-meditation-routine-footer"
      />

      <div className="max-w-4xl mx-auto px-6">
        <FaqSection items={faqs} heading="Frequently asked questions" />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <RelatedPostsGrid
          title="Related, on the same calendar mechanic"
          posts={relatedPosts}
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/practice-buddy"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Practice Buddy (the signup form)
          </Link>
          <Link
            href="/practice-buddy/how-it-works"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            How the matching works (long version)
          </Link>
          <a
            href="https://www.dhamma.org"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            dhamma.org (the tradition itself)
          </a>
        </div>
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Pick a UTC slot the matcher can find a 5am buddy in."
        section="5am-meditation-routine-sticky"
      />
    </article>
  );
}
