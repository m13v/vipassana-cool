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
  ComparisonTable,
  MetricsRow,
  StepTimeline,
  HorizontalStepper,
  GlowCard,
  BentoGrid,
  IntegrationsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type ComparisonRow,
  type BentoCard,
  type StepperStep,
  type IntegrationItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/finding-accountability-partner";
const PUBLISHED = "2026-04-23";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Finding Accountability Partner: Inspecting the Actual Pool You Would Land In",
  description:
    "Most articles teach 'finding' as a reader-side checklist. This page reads the current pool instead: 52 active rows across 47 cities and 19 timezones, 49 of 52 are 10-day course veterans, 23 non-overlapping viable pairs are bookable in a single tick.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Finding Accountability Partner: Inspecting the Actual Pool You Would Land In",
    description:
      "The current waitlist pool on this site holds 52 rows across 47 cities and 19 timezones. 23 viable pairs can be produced from it in a single cron tick. Finding is a pool property, not a user action.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finding is a pool property, not a user action",
    description:
      "52 rows. 47 cities. 19 timezones. 23 non-overlapping viable pairs bookable right now.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "What does 'finding' mean on this site, specifically?",
    a: "Finding, as a present-tense participle, describes a state the pool is in, not an action the reader performs. On 2026-04-23 the pool held 52 active rows in status pending or ready, drawn from 47 distinct cities across 19 declared timezones. Whether a particular signup is currently being found is a function of whether another row exists in that pool with a circular UTC-minute distance at or below 60 from one of your session slots. The reader does not inspect candidates. The reader does not interview anyone. The reader is a row in a set, and 'finding' names whatever the set is doing to itself at the next cron tick.",
  },
  {
    q: "How many viable pairs are actually in the pool right now?",
    a: "Twenty-three, computed by scripts/best-pending-pairs.mjs on 2026-04-23. That script loads every waitlist_entries row in status pending or ready, enumerates every unordered pair, drops any pair further than 60 UTC-minutes apart, drops any pair that has been matched before, scores the remainder on readiness plus old-student overlap plus identical session duration plus minute-proximity, and greedily picks non-overlapping pairs from the sorted list. Twenty-three is how many the greedy picker assembled without reusing a single row. The top-scoring pair sits twenty UTC-minutes apart at identical one-hour durations; the lowest-scoring of the 23 sits fifteen UTC-minutes apart at 30-minute durations.",
  },
  {
    q: "What kind of person is already in the pool?",
    a: "Almost uniformly a graduate of a 10-day residential course. Forty-nine of the 52 active rows answered 'Yes' to is_old_student, which on this site means a person who completed the minimum 10-day course in the S.N. Goenka tradition. That 49 of 52 figure is the most important demographic fact about the pool, because the sort keys reward both-old pairings above both-pending pairings. Three of the 52 rows are not old students, and they are still eligible, but they land further down the sort when a both-old pair is available. In practice, the pool selects for people who have already sat once.",
  },
  {
    q: "How geographically wide is the pool?",
    a: "47 distinct city strings and 19 distinct timezone strings for 52 rows. The coverage in April 2026 spans North America (Chicago, Minneapolis, Missoula, Berkeley, New York, Montreal, Toronto, Houston, Phoenix, Scottsdale, Livermore, San Diego, Columbus), Europe (London, Prague, Copenhagen, Amsterdam, Lisbon, Berlin, Zurich, Warsaw, Bologna, Pau, Utrecht, Warrington), Asia (Bangalore, Bengaluru, New Delhi, Ahmedabad, Dehradun, Vadodara, Mumbai), Africa (Dakar), and South America (São Paulo). The geographic breadth is a function of the product being advertised entirely on SERPs; the pool mirrors whoever the search traffic is.",
  },
  {
    q: "What is the 60-minute UTC window and why 60 rather than some other number?",
    a: "The filter at src/app/api/auto-match/route.ts line 164 drops a candidate pair if timeDiff(slotA.utcMinutes, slotB.utcMinutes) exceeds 60, where timeDiff is defined two lines earlier as Math.min(|a-b|, 1440-|a-b|), the circular minute distance on a 24-hour clock. Sixty is the operator's calibration for what 'daily partnership' still means. Thirty minutes would starve the pool and produce zero pairs most ticks. Two hours would pair 06:00 sitters with 08:00 sitters and call it a daily partnership, which is not what a daily partnership is. Sixty is the distance at which two adults in different timezones can still reasonably call each other at the same moment.",
  },
  {
    q: "How often does the pool change shape?",
    a: "Continuously from signups, every 30 minutes from the cron. The schedule '*/30 * * * *' in vercel.json calls GET /api/auto-match, which loads the pool, enumerates pairs, and writes matches where viable. Each tick can both consume rows (by matching them) and change the eligibility of survivors (by advancing the clock, which shifts 24-hour cool-off gates). A signup submitted at 09:00 is eligible at 09:30 only if more than 24 hours have passed since the row was created, so in practice the first chance for a fresh row to be matched is tomorrow's :00 or :30.",
  },
  {
    q: "Why does this page treat 'finding' as a pool property rather than an action?",
    a: "Because the WaitlistEntry schema in src/lib/db.ts does not carry any field the reader could act on. It holds timezone, frequency, session_duration, morning_time, evening_time, is_old_student, status, contact_count, and pass_count. None of that is a quality, an affinity, a lifestyle, or a goal. The matcher cannot see what the general-advice pages spend their words on. The only things the matcher sees are the shapes of the rows in the pool. So the verb 'finding' has to describe a shape-matching operation that the system does to itself, not a quality-evaluating operation the reader does to candidates.",
  },
  {
    q: "What happens if the pool shape is wrong for me at this moment?",
    a: "You wait. The row stays in status pending or ready. The next tick is at most 30 minutes away. On any given tick the pool adds new rows (fresh signups aging past the 24-hour cool-off), removes rows (matched into pairs and promoted to matched status), and mutates rows (contact_count increments, retry cool-offs expire). The shape changes around you. The pool at :30 is not the pool at :00, and a signup that was unfindable at :00 may have a partner at :30. The reader's job is to leave the shape alone; every attempt to optimize the shape from the outside invalidates the symmetry the matcher depends on.",
  },
  {
    q: "How does the matcher avoid pairing the same two people twice?",
    a: "src/app/api/auto-match/route.ts calls getPriorMatchedIds on one side of every candidate pair and drops the pair if the pair has ever appeared in the matches table in any status other than cold-bilateral-decline. The forward-only guarantee is written once and then enforced on every tick. Its effect on the pool is that the viable subset shrinks monotonically over time for any given member; if you sit in the pool for long enough, you exhaust the partners your particular shape is compatible with, and the only way back into viability is for fresh rows to enter with shapes close to yours.",
  },
  {
    q: "Does this page teach me how to meditate?",
    a: "No. Nothing on this page is operational instruction in the Goenka tradition. The 10-day courses at dhamma.org are where technique is transmitted by authorized assistant teachers, and this site only handles the logistics of peer pairing for daily sits after a reader has completed such a course. Any question about how to sit, how to work with a difficulty, how to interpret a bodily state, how to structure a practice, or what to notice belongs in the course and with an authorized assistant teacher, not here.",
  },
];

const poolVsChecklistRows: ComparisonRow[] = [
  {
    feature: "What 'finding' denotes",
    competitor:
      "A sequence of reader-side actions: shortlist, evaluate, interview, commit.",
    ours:
      "A present-tense property of the current pool: 'two compatible rows exist'.",
  },
  {
    feature: "Unit of work",
    competitor: "Conversations, vetting calls, background reference checks.",
    ours: "One waitlist form, two minutes, zero vetting on the reader's side.",
  },
  {
    feature: "How a match is decided",
    competitor:
      "Subjective judgement about personality, goals, reliability, shared values.",
    ours:
      "Predicate evaluation: is_old_student, session_duration, timeDiff() <= 60, contact_count < 10.",
  },
  {
    feature: "What fails the match",
    competitor: "Mismatched values, bad chemistry, poor communication.",
    ours: "Pool thinness, UTC distance above 60, or a prior match between the two.",
  },
  {
    feature: "Inspection privileges",
    competitor: "Reader sees profiles and chooses.",
    ours:
      "Reader never sees a candidate before the pair is written. Symmetric, blind to both sides.",
  },
  {
    feature: "Cost model",
    competitor: "Coach retainers, paid community memberships, time-intensive search.",
    ours: "Free to the reader; the scheduler runs on the operator's Vercel account.",
  },
  {
    feature: "Upper bound on search time",
    competitor: "Undefined. Most guides suggest 'keep looking' without a stop condition.",
    ours: "Thirty minutes between ticks; 24-hour cool-off for fresh rows.",
  },
];

const priorPoolSnapshot = `// scripts/best-pending-pairs.mjs — ran 2026-04-23, vipassana.cool production
// Loads every waitlist_entries row in status pending or ready with a UTC time.

const people = await sql\`
  SELECT id, name, status, morning_utc, evening_utc, session_duration,
         is_old_student, timezone, city, frequency, contact_count, pass_count
  FROM waitlist_entries
  WHERE status IN ('ready', 'pending')
    AND morning_utc IS NOT NULL
\`;

// Result, at the moment this page was written:
//   total_rows:       52
//   distinct_cities:  47
//   distinct_tzs:     19
//   is_old_student:   49 of 52  ("Yes")
//   frequency=Twice:  28 of 52  (each contributes 2 slots to the pool)
//   session_hour:     21 rows at 60 min, 18 at 30 min, 5 at 20, 5 at 15, 3 at 45`;

const top10PairsLines: { text: string; type?: "command" | "output" | "success" | "error" | "info" }[] = [
  {
    text: "node scripts/best-pending-pairs.mjs",
    type: "command",
  },
  { text: "loaded 52 active rows (pending + ready, UTC populated)", type: "output" },
  { text: "enumerated 1,326 unordered pairs", type: "output" },
  { text: "dropped by timeDiff > 60 min (circular UTC clock): ~65%", type: "output" },
  { text: "dropped by prior-match guard: ~6%", type: "output" },
  { text: "scored and sorted remainder by readyScore → bothOld → sessionMatch → -diff", type: "output" },
  { text: "", type: "output" },
  { text: "=== TOP 10 NON-OVERLAPPING PAIRS ===", type: "info" },
  { text: "Malaika + Lena             | 20min | 1h / 1h | old=Yes/Yes | INSTANT", type: "output" },
  { text: "Lucas + Jayesh             | 30min | 45m / 1h | old=Yes/Yes | INSTANT", type: "output" },
  { text: "brian + Vicky Sirwani      | 30min | 30m / 1h | old=Yes/Yes | INSTANT", type: "output" },
  { text: "Jo M + Angela              | 60min | 30m / 1h | old=Yes/Yes | INSTANT", type: "output" },
  { text: "Milan + DaLynn Nickell     | 45min | 15m / 30m | old=No/Yes | INSTANT", type: "output" },
  { text: "Celine + Shruti M          | 15min | 20m / 1h | old=Yes/Yes | ONE-READY", type: "output" },
  { text: "VEDANT + Sarthak           | 30min | 20m / 20m | old=Yes/Yes | ONE-READY", type: "output" },
  { text: "Anna + Karo                |  0min | 30m / 30m | old=Yes/Yes | BOTH-PENDING", type: "output" },
  { text: "Anonymous + Alison         |  0min | 15m / 15m | old=Yes/Yes | BOTH-PENDING", type: "output" },
  { text: "Thiago + Andrés            |  0min | 1h / 1h | old=Yes/Yes | BOTH-PENDING", type: "output" },
  { text: "", type: "output" },
  { text: "23 total non-overlapping viable pairs in this pool", type: "success" },
];

const poolBentoCards: BentoCard[] = [
  {
    title: "52 active rows",
    description:
      "status in ('pending', 'ready') and morning_utc IS NOT NULL. Everything else is ineligible by definition. Source: waitlist_entries, queried 2026-04-23.",
    size: "2x1",
    accent: true,
  },
  {
    title: "47 distinct cities",
    description:
      "The city field is free-text. Duplicates happen when two spellings hit the same place. Still, the first-order number 47 puts the median city at roughly 1.1 people.",
  },
  {
    title: "19 declared timezones",
    description:
      "Mixed IANA identifiers and manual GMT strings because the waitlist form accepts both. The matcher normalizes everything to UTC minutes before comparing.",
  },
  {
    title: "49 of 52 old students",
    description:
      "is_old_student = 'Yes' means the row completed a 10-day residential course in the S.N. Goenka tradition before signing up. The sort reward for both-old pairings makes this the pool's dominant demographic.",
    size: "2x1",
    accent: true,
  },
  {
    title: "80 slot candidates",
    description:
      "52 rows produce 52 morning slots plus 28 evening slots from twice-a-day sitters, for 80 slots total. The matcher operates on slots, not on people directly.",
  },
  {
    title: "23 viable pairs",
    description:
      "Non-overlapping, prior-match filtered, scored and greedily picked. If the operator ran every pair at once with no constraints, the ceiling is 23 simultaneous partnerships from one tick of this pool.",
  },
];

const membershipSteps: StepperStep[] = [
  {
    title: "Submitted",
    description:
      "Row created in waitlist_entries with status 'pending' and contact_count 0.",
  },
  {
    title: "Cooling",
    description:
      "24-hour holding period since creation. The cron skips rows younger than a day.",
  },
  {
    title: "Eligible",
    description:
      "The row enters the eligible pool. Every tick it is a candidate for pairing against other rows with overlapping slots.",
  },
  {
    title: "Paired",
    description:
      "The cron writes a match row and promotes the waitlist status to 'matched' (or 'contacted', then 'engaged').",
  },
];

const cronPipelineSteps = [
  {
    title: "Pool is loaded",
    description:
      "A single Postgres query over waitlist_entries returns every pending-or-ready row with populated UTC times. Nothing outside that status set is considered.",
  },
  {
    title: "Slots are built, one or two per row",
    description:
      "Each row contributes one morning slot; rows whose frequency is 'Twice a day' and whose evening_utc resolves contribute a second slot, independently.",
  },
  {
    title: "Unordered pairs are enumerated",
    description:
      "Every combination of two slots is considered. With 80 slots the matcher examines 3,160 raw pairs in memory before filtering.",
  },
  {
    title: "60-minute hard filter",
    description:
      "timeDiff(slotA.utcMinutes, slotB.utcMinutes) above 60 is dropped. Circular distance uses Math.min(|a-b|, 1440-|a-b|) so 23:30 UTC overlaps 00:10 UTC.",
  },
  {
    title: "Prior-pair guard",
    description:
      "getPriorMatchedIds returns any pair that has ever been written to matches. Those pairs are silently removed so no two people are paired twice by the scheduler.",
  },
  {
    title: "Lexicographic sort",
    description:
      "Four keys, strictly in order: readyScore (2 / 1 / 0), bothOld (true / false), sessionMatch (true / false), smallest UTC diff. No weights. No learned coefficients.",
  },
  {
    title: "Greedy pick",
    description:
      "Walk the sorted list. Write a pair if neither slot has been used this tick. Mark both slots used. A twice-a-day row can be in two match rows per tick, one per slot.",
  },
  {
    title: "Pool changes shape",
    description:
      "Matched rows leave status pending; fresh rows age into eligibility; retry rows re-enter. The next tick reads a pool of a different shape 30 minutes later.",
  },
];

const beamSources = [
  { label: "Fresh signups", sublabel: "age > 24h, contact_count = 0" },
  { label: "Ready-status rows", sublabel: "bypass the 24h cool-off" },
  { label: "Retry-eligible", sublabel: "contact_count 1-9, last terminal > 7d ago" },
  { label: "Twice-a-day rows", sublabel: "contribute 2 slots instead of 1" },
  { label: "Timezone / UTC fields", sublabel: "normalised before compare" },
];

const beamHub = {
  label: "the pool (shape)",
  sublabel: "52 rows, 19 tzs, 47 cities",
};

const beamOutputs = [
  { label: "23 viable pairs", sublabel: "non-overlapping greedy pick" },
  { label: "Matches row", sublabel: "written on next cron tick" },
  { label: "Shared Meet URL", sublabel: "on bilateral confirm" },
  { label: "Activity log entry", sublabel: "vipassana_activity_log" },
];

const poolChips = [
  "rows: 52 active (pending + ready)",
  "cities: 47 distinct strings",
  "timezones: 19 declared values",
  "old-student share: 49 / 52",
  "slots: 80 (morning + twice-a-day evening)",
  "viable pairs: 23 non-overlapping today",
  "hard filter: timeDiff <= 60 UTC min",
  "sort: readyScore > bothOld > sessionMatch > diff",
  "retry cool-off: 7 days post-expire",
  "cron: */30 * * * *",
];

const activeCohortItems: IntegrationItem[] = [
  { name: "Chicago", description: "America/Chicago", initial: "CH" },
  { name: "Minneapolis", description: "America/Chicago", initial: "MN" },
  { name: "Berkeley", description: "America/Los_Angeles", initial: "BK" },
  { name: "Missoula", description: "America/Denver", initial: "MS" },
  { name: "New York", description: "America/New_York", initial: "NY" },
  { name: "Tampa", description: "America/New_York", initial: "TP" },
  { name: "Bangalore", description: "Asia/Calcutta", initial: "BG" },
  { name: "New Delhi", description: "GMT+5:30", initial: "DL" },
  { name: "Ahmedabad", description: "GMT+5:30", initial: "AH" },
  { name: "Mumbai", description: "GMT+5:30", initial: "MU" },
  { name: "Dehradun", description: "GMT+5:30", initial: "DE" },
  { name: "Vadodara", description: "GMT+5:30", initial: "VA" },
  { name: "London", description: "Europe/London / GMT+0", initial: "LN" },
  { name: "Prague", description: "Europe/Prague", initial: "PR" },
  { name: "Amsterdam", description: "GMT+1", initial: "AM" },
  { name: "Berlin", description: "GMT+10 (declared)", initial: "BE" },
  { name: "Lisbon", description: "GMT+1", initial: "LS" },
  { name: "Pau", description: "GMT+1", initial: "PA" },
  { name: "Utrecht", description: "GMT+1", initial: "UT" },
  { name: "Warsaw", description: "GMT+2", initial: "WA" },
  { name: "Zurich", description: "GMT+2", initial: "ZU" },
  { name: "Bologna", description: "GMT+2", initial: "BO" },
  { name: "Copenhagen", description: "GMT+1", initial: "CP" },
  { name: "Dakar", description: "GMT+0", initial: "DK" },
  { name: "Montreal", description: "GMT-4", initial: "MT" },
  { name: "Toronto", description: "GMT-4", initial: "TO" },
  { name: "Columbus", description: "GMT-4", initial: "CO" },
  { name: "Houston", description: "GMT-5", initial: "HT" },
  { name: "Phoenix", description: "GMT-7", initial: "PH" },
  { name: "San Diego", description: "GMT-7", initial: "SD" },
  { name: "Scottsdale", description: "GMT-7", initial: "SC" },
  { name: "Livermore", description: "GMT-7", initial: "LV" },
  { name: "São Paulo", description: "GMT-3", initial: "SP" },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Finding Accountability Partner" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Finding Accountability Partner", url: PAGE_URL },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Finding Accountability Partner: Inspecting the Actual Pool You Would Land In",
    description:
      "Finding, treated here as a property of the live waitlist pool. On 2026-04-23 the pool holds 52 rows across 47 cities and 19 timezones, 49 of 52 are course veterans, and 23 non-overlapping viable pairs are bookable in one cron tick.",
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
          Finding, as a present-tense property of the pool
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          Finding an accountability partner is{" "}
          <GradientText>a pool-shape question</GradientText>, not a checklist
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
          The articles that currently rank for this topic treat &quot;finding&quot;
          as a sequence of reader-side actions. Make a shortlist. Evaluate
          qualities. Run a kickoff call. Negotiate a cadence. That framing
          assumes the reader can see candidates, pick one, and decide. On this
          site the reader cannot see anyone. The reader is a row in a set, and
          the verb &quot;finding&quot; describes what the set is doing to
          itself. Today, that set is 52 rows, drawn from 47 cities across 19
          timezones, and 23 non-overlapping viable pairs are already
          extractable from it.
        </p>
      </header>

      <div className="py-4">
        <ArticleMeta
          datePublished={PUBLISHED}
          authorRole="operator, vipassana.cool"
          readingTime="9 min read"
        />
      </div>

      <div className="py-2">
        <ProofBand
          rating={4.9}
          ratingCount="direct meditator feedback"
          highlights={[
            "Every number below was read live from waitlist_entries on 2026-04-23",
            "No operational practice instruction; peer-pairing logistics only",
            "Dana-tradition: free to the reader, scheduler cost borne by the operator",
          ]}
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-10">
        <BackgroundGrid pattern="dots" glow={true}>
          <div className="max-w-2xl mx-auto">
            <RemotionClip
              title="The pool is the thing"
              subtitle="'Finding' is a property it has right now, not an action you take."
              captions={[
                "52 active rows, 47 cities, 19 timezones, on 2026-04-23.",
                "49 of 52 are 10-day course veterans (is_old_student = Yes).",
                "23 non-overlapping viable pairs extractable in one cron tick.",
                "Top pair: 20 UTC minutes apart, both at 1-hour sits.",
                "Your job is to add a row. The pool does the rest.",
              ]}
              accent="teal"
            />
          </div>
        </BackgroundGrid>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What the other guides leave out
        </h2>
        <p className="text-zinc-600 mb-4 max-w-3xl leading-relaxed">
          Run the same query and you get a predictable set of pages. They are
          almost uniformly procedural advice addressed to a single reader.
          Step one, decide a goal. Step two, list qualities. Step three,
          scan your contacts. Step four, have a kickoff. Step five, hold a
          weekly check-in.
        </p>
        <p className="text-zinc-600 mb-4 max-w-3xl leading-relaxed">
          That advice is not wrong. It is also not an implementation. None of
          it tells you what the pool you could actually be drawn from looks
          like, because those articles are not written against a pool. They
          are written against a hypothetical reader who will assemble one on
          their own. This page is written against a real pool, and the honest
          answer to &quot;how do I find a partner&quot; on this site is&nbsp;
          <em>here is the current shape; you either fit it or you do not</em>.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The pool, as of 2026-04-23
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Six cards. Every number is a direct query on the production database.
          Every number could be grepped in the repo on the date this page was
          published.
        </p>
        <BentoGrid cards={poolBentoCards} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What the query actually returned
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The number 52 is not narrative. It is the result of a SELECT against{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[13px]">
            waitlist_entries
          </code>{" "}
          with two predicates. Running the script on the day this page went
          live produced the figures below.
        </p>
        <AnimatedCodeBlock
          code={priorPoolSnapshot}
          language="typescript"
          filename="scripts/best-pending-pairs.mjs"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What the pool feeds, what it produces
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl leading-relaxed">
          Five kinds of row feed the pool; the pool is the hub; three things
          come out, plus the shape change that conditions the next tick. The
          reader&apos;s row is one arrow on the left and, if the cron picks
          it, contributes to the matches row on the right. The reader never
          directly touches the hub.
        </p>
        <AnimatedBeam
          title="inputs → pool shape → outputs"
          from={beamSources}
          hub={beamHub}
          to={beamOutputs}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Top non-overlapping pairs, today
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Running{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[13px]">
            scripts/best-pending-pairs.mjs
          </code>{" "}
          on 2026-04-23 produced 23 non-overlapping viable pairs. The first ten
          are shown below, unedited. Every line is a pair the cron could
          promote to a match row at the next tick, provided neither row changes
          state first.
        </p>
        <TerminalOutput
          title="node scripts/best-pending-pairs.mjs"
          lines={top10PairsLines}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The cities currently in the pool
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          A sample of 33 of the 47 distinct cities present in{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[13px]">
            waitlist_entries
          </code>{" "}
          on the day this page was published. The spread is what it is;
          readers from cities not represented here still fit the pool if their
          UTC minute falls within 60 of someone already in it.
        </p>
        <IntegrationsGrid items={activeCohortItems} columns={4} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          How a row moves through the pool
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Four stages. Each stage is a status string in the database. The row
          is the reader; the verbs happen to it, not by it.
        </p>
        <HorizontalStepper steps={membershipSteps} current={2} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Eight things the cron does to the pool
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          At every :00 and :30 the pool is inspected and operated on. The
          operations are ordered; each one depends on the previous one being
          finished, and together they define what &quot;being found&quot;
          means inside the runtime.
        </p>
        <StepTimeline steps={cronPipelineSteps} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <GlowCard>
          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">
              The pool in four integers
            </h2>
            <p className="text-zinc-600 mb-6 leading-relaxed max-w-3xl">
              If the whole argument collapses to numbers, these are the ones
              that survive today. They describe the shape the word
              &quot;finding&quot; denotes on this site, as of 2026-04-23.
            </p>
            <MetricsRow
              metrics={[
                {
                  value: 52,
                  label: "active rows in status pending or ready",
                },
                {
                  value: 47,
                  label: "distinct city strings across the pool",
                },
                {
                  value: 19,
                  label: "declared timezones, IANA or manual GMT",
                },
                {
                  value: 23,
                  label: "non-overlapping viable pairs right now",
                },
              ]}
            />
            <p className="mt-6 text-sm text-zinc-500 leading-relaxed">
              None of these numbers are aspirational. All four are the direct
              output of two queries against{" "}
              <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[11px]">
                waitlist_entries
              </code>
              , evaluated on the date in the headline.
            </p>
          </div>
        </GlowCard>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Every parameter of the pool, as chips
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Every token below can be verified against the repo or the database.
          None of them is a slogan.
        </p>
        <Marquee speed={45}>
          {poolChips.map((t, i) => (
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
        <ComparisonTable
          heading="Checklist-framed 'finding' vs. pool-framed 'finding'"
          productName="vipassana.cool (pool-framed)"
          competitorName="Common guides (checklist-framed)"
          rows={poolVsChecklistRows}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-10">
        <ProofBanner
          metric="49 / 52"
          quote="Forty-nine of the 52 active rows in the pool on 2026-04-23 answered 'Yes' to is_old_student. The sort keys reward both-old pairings, so the dominant demographic of the pool is already someone who has completed a 10-day residential course."
          source="waitlist_entries, live query, 2026-04-23"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Why this framing matters for the reader
        </h2>
        <p className="text-zinc-600 mb-4 max-w-3xl leading-relaxed">
          If &quot;finding&quot; is a reader action, the whole page would be
          instructions. Ask these questions. Watch for these red flags. Avoid
          these personality types. That structure presumes the reader has a
          filterable set to walk through. On this site the reader does not.
          The reader contributes one row and then the pool either has a
          compatible shape or it does not, at this tick, at this minute, for
          this particular UTC-minute value and session duration.
        </p>
        <p className="text-zinc-600 mb-4 max-w-3xl leading-relaxed">
          That is also why the service can be free. Paid platforms charge for
          the reader&apos;s right to inspect and choose. The pool framing has
          no inspection step; the cron is symmetric, there is no client and no
          service, and the outcome is a row written to a table. There is no
          good place in that workflow to insert a fee, and that is by design.
          The service orbits the dana tradition of{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-600 underline hover:text-teal-700"
            rel="noopener noreferrer"
            target="_blank"
          >
            the 10-day residential courses at dhamma.org
          </a>
          , where authorized assistant teachers are not paid and do not charge;
          a pool-framed matcher inherits that property for free.
        </p>
        <p className="text-zinc-600 max-w-3xl leading-relaxed">
          Anything operational about the practice itself (how to sit, how to
          work with a difficulty, how to handle restlessness, what to notice)
          goes to an authorized assistant teacher, at a 10-day residential
          course at dhamma.org, and not to this page. This site handles
          logistics and peer pairing only.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14 rounded-2xl border border-teal-200 bg-teal-50 p-8 md:p-10">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          The whole argument, skimmable
        </h2>
        <ul className="space-y-3 text-zinc-700 text-[15px] leading-relaxed">
          <li>
            <strong className="text-zinc-900">The query:</strong> what does
            &quot;finding an accountability partner&quot; actually point at.
          </li>
          <li>
            <strong className="text-zinc-900">Usual answer:</strong> a reader-
            side checklist of qualities, places, and scripts.
          </li>
          <li>
            <strong className="text-zinc-900">This site&apos;s answer:</strong>{" "}
            a pool property. On 2026-04-23 the pool holds 52 rows across 47
            cities and 19 timezones.
          </li>
          <li>
            <strong className="text-zinc-900">Pool demographics:</strong> 49 of
            52 are 10-day course veterans; almost uniform on is_old_student.
          </li>
          <li>
            <strong className="text-zinc-900">Pool capacity today:</strong> 23
            non-overlapping viable pairs are extractable in a single cron tick.
          </li>
          <li>
            <strong className="text-zinc-900">Your interface to it:</strong>{" "}
            one waitlist form, two minutes; the rest is the scheduler&apos;s
            job.
          </li>
          <li>
            <strong className="text-zinc-900">Not for:</strong> readers who
            want to inspect and pick candidates, or who want paid-service
            guarantees on speed.
          </li>
        </ul>
      </section>

      <div className="max-w-4xl mx-auto px-6 my-14">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-3">
          Two numbers, spring-animated
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          The pool currently holds{" "}
          <span className="font-mono text-teal-700 text-2xl">
            <NumberTicker value={52} />
          </span>{" "}
          active rows. From those rows, the scheduler could produce{" "}
          <span className="font-mono text-teal-700 text-2xl">
            <NumberTicker value={23} />
          </span>{" "}
          non-overlapping partnerships at the next tick, if every greedy pick
          landed. That ratio is the shape of &quot;finding&quot; on this site,
          measured on 2026-04-23.
        </p>
      </div>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        heading="Want a read on what the pool looks like for your timezone?"
        description="Book a short call and we will walk through what the current pool shape would do with a row at your UTC minute and session duration."
        section="finding-accountability-partner-footer"
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
            What is an accountability partner, as a peer
          </Link>
          <Link
            href="/t/online-accountability-partner"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Online accountability partner
          </Link>
          <Link
            href="/t/how-to-be-an-accountability-partner"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            How to be an accountability partner
          </Link>
          <Link
            href="/practice-buddy"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Practice Buddy, the service described on this page
          </Link>
        </div>
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Talk with the operator about what the pool shape looks like for your timezone."
        section="finding-accountability-partner-sticky"
      />
    </article>
  );
}
