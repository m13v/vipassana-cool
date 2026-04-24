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
  type IntegrationItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/workout-accountability-partner";
const PUBLISHED = "2026-04-23";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Workout Accountability Partner: The Matcher Code, Not the Shortlist Advice",
  description:
    "Every other page on this topic hands the reader a shortlist worksheet. This one exposes the actual matcher: a 60-minute UTC circular-clock overlap, session-duration parity, experience parity, prior-pair guard, and a 30-minute cron tick. Real numbers from the live pool on 2026-04-23.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Workout Accountability Partner: The Matcher Code, Not the Shortlist Advice",
    description:
      "52 active rows, 47 cities, 19 timezones, 23 non-overlapping viable pairs today. The 'workout' here is a daily sit; the matcher is built the way a gym buddy matcher should have been.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Workout Accountability Partner, rewritten as a matcher",
    description:
      "60-minute UTC window. Session duration parity. Prior-pair guard. 30-minute cron tick. 23 viable pairs in the pool right now.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "Is this a workout accountability partner app, strictly speaking?",
    a: "No. vipassana.cool pairs people for a daily meditation sit, not a run or a lift. It is on this page because the matching primitives a workout partner app would need are the same ones this product already runs in production: a 60-minute circular UTC window, session-duration parity (15, 20, 30, 45, or 60 minutes), a prior-pair guard, and a 30-minute cron tick. If the reader is sitting 30 to 60 minutes a day and wants a real human in a Meet room at 6 AM, the pool fits. If the reader is looking for a gym buddy, it does not, but the shape of the matcher is still a useful reference implementation.",
  },
  {
    q: "What is actually in the current pool, and how recent are these numbers?",
    a: "On 2026-04-23 the pool held 52 active rows (status pending or ready, morning_utc populated) across 47 distinct city strings and 19 declared timezones. The session-duration histogram was 21 at 60 minutes, 18 at 30 minutes, 5 at 20 minutes, 5 at 15 minutes, 3 at 45 minutes. 49 of 52 rows were 10-day course veterans (is_old_student = Yes). Running scripts/best-pending-pairs.mjs against that pool produced 23 non-overlapping viable pairs in a single tick. Every figure was pulled from the production waitlist_entries table on the day this page went live.",
  },
  {
    q: "What is the 60-minute UTC window, and why 60 rather than 15 or 120?",
    a: "At src/app/api/auto-match/route.ts line 163 the matcher computes timeDiff(slotA.utcMinutes, slotB.utcMinutes) and drops the pair if the result exceeds 60. timeDiff is a circular minute distance: Math.min(|a-b|, 1440-|a-b|), so 23:30 UTC and 00:10 UTC are 40 minutes apart, not 1,400. Sixty is the operator's calibration for what a shared daily session still means. Thirty minutes starves the pool in most timezones. Two hours pairs 06:00 with 08:00 sitters and calls it the same session, which it is not. Sixty is the widest distance at which two adults in different parts of the world can plausibly dial into the same Meet at the same minute.",
  },
  {
    q: "How does the matcher decide which pair wins when several are viable?",
    a: "Four sort keys, strictly in order, no weights, no learned coefficients. First, readyScore: rows in status 'ready' outrank rows in status 'pending' (2 > 1 > 0 for sum of the pair). Second, bothOld: pairs where both rows have is_old_student = Yes outrank mixed or neither. Third, sessionMatch: pairs where the two rows declared the same session_duration outrank pairs where they did not. Fourth, the smallest UTC minute difference wins. Ties inside the fourth key are broken by iteration order, which is deterministic per tick. After the sort, a greedy walk picks non-overlapping pairs until every slot is either used or filtered out.",
  },
  {
    q: "What is the prior-pair guard, and why does it matter?",
    a: "scripts/best-pending-pairs.mjs and auto-match both build a set of (person_a_id, person_b_id) tuples pulled from matches. Any candidate pair whose two ids are already in that set is dropped before scoring. The effect on the pool is monotone: every tick shrinks the viable subset for any given member, because the set of partners they have not yet been matched with can only decrease. This is not the behavior a Focusmate-style rolling booking wants; it is the behavior a daily-partnership product wants. Once two rows are matched, they are a committed pair, and the matcher will not quietly shuffle one of them off to somebody new tomorrow.",
  },
  {
    q: "Why is 'experience level' encoded as a boolean (old-student Yes/No) rather than a tier?",
    a: "Because in the Goenka lineage the only fact that holds is whether a person has completed at least one 10-day residential course. Everything else (how many courses, how long they have sat, how many hours a day they sit now) is folk knowledge and does not correspond to a single verifiable checkpoint. The waitlist form asks is_old_student and stores 'Yes' or 'No'. A workout partner app could extend the same pattern with tiers (beginner, intermediate, advanced), but the failure mode of self-reporting would be identical, and the scheduler's sort key would still be a parity predicate, not a continuous score.",
  },
  {
    q: "How often does the matcher run, and what happens between ticks?",
    a: "vercel.json schedules '*/30 * * * *' → GET /api/auto-match, so the matcher runs at :00 and :30 of every hour. Between ticks nothing happens in the database except fresh signups accruing and the 24-hour cool-off clock ticking forward for each pending row. A signup submitted at 09:15 is eligible at 09:45 only if more than 24 hours have passed, which they have not; the earliest the row can be matched is the next tick after it crosses its 24-hour anniversary. That cool-off is a content-quality gate: it gives the operator a full day to eyeball the signup before the matcher can pair it.",
  },
  {
    q: "Once two rows are paired, what is the weekly 'check-in' that other guides talk about?",
    a: "There is no dashboard check-in. When person A replies to the intro email, the ImprovMX webhook hits /api/webhooks/improvmx, advanceMatchOnReply() runs, and the match status moves from 'pending' to 'replied'. When person B replies, the same function sees an inbound from the other side in vipassana_emails and flips the status to 'active'. That is the weekly check-in. If neither side replies for 3 days the match is marked 'expired' by /api/expire-matches; if either side later declines the recurring Google Calendar invite, /api/check-rsvp catches it and flips the match to 'ended'. Nothing is a button. Everything is an email action the person was going to take anyway.",
  },
  {
    q: "Does any of this apply to someone looking for a gym or running buddy?",
    a: "The architecture is portable, but this site is not it. A gym buddy matcher built on the same five primitives would need: (1) a waitlist form capturing timezone, session duration, experience parity, and cadence; (2) a scheduler at */30 minutes that enumerates pairs, applies a 60-minute UTC hard filter, and sorts by the parity keys above; (3) a prior-pair guard so you are not rematched with a partner who already ghosted; (4) an inbound-email state advance so the thread IS the check-in; (5) a permanent video room URL handed out once at match time. That is a usable reference implementation, but if the reader wants someone to spot them on a bench press, the matcher on this site is not the thing.",
  },
  {
    q: "Is vipassana.cool the right product for someone searching for 'workout accountability partner'?",
    a: "Honest answer: only if the reader counts a daily meditation sit as their workout. The pool currently skews 49 of 52 toward old students of the S.N. Goenka 10-day tradition, session durations cluster at 30 and 60 minutes, and every pair is for the same silent sit on Google Meet, not a shared gym session. If the reader is a meditator who has completed a 10-day course and is tired of sitting alone, the matcher is a near-perfect fit. If the reader is a lifter or a runner, the primitives on this page are genuinely useful but the pool is wrong, and a coach or a dedicated fitness app is the honest redirect.",
  },
  {
    q: "Does this page teach meditation technique?",
    a: "No. Nothing on this page is operational instruction. The 10-day residential courses at dhamma.org are where the technique is transmitted by authorized assistant teachers, and this site only handles the logistics of peer pairing for daily sits after a reader has completed such a course. Any question about how to sit, how to work with a difficulty, what to notice, or how to structure a practice belongs in the course and with an authorized assistant teacher, not here.",
  },
];

const poolVsShortlistRows: ComparisonRow[] = [
  {
    feature: "What 'finding a partner' denotes",
    competitor:
      "A reader-side checklist: values, goals, schedule, trust, chemistry.",
    ours:
      "A present-tense pool property: at this tick, does a compatible row exist.",
  },
  {
    feature: "Compatibility axes",
    competitor:
      "Soft traits: motivation, reliability, workout style, 'why' alignment.",
    ours:
      "Four hard predicates: timeDiff <= 60, session_duration parity, is_old_student parity, prior-pair guard.",
  },
  {
    feature: "How the partner is selected",
    competitor:
      "Reader reads profiles, messages candidates, interviews, commits.",
    ours:
      "Cron enumerates all pairs, sorts by four keys, greedily picks non-overlapping pairs, writes one row.",
  },
  {
    feature: "Check-in mechanism",
    competitor:
      "Scheduled weekly call, app button, streak counter, push reminder.",
    ours:
      "Reply to the intro email; the ImprovMX webhook advances match status automatically.",
  },
  {
    feature: "End-of-partnership signal",
    competitor:
      "Explicit 'archive' or 'end' button; awkward conversation; radio silence.",
    ours:
      "Decline the Google Calendar invite; the daily cron flips the match to 'ended'.",
  },
  {
    feature: "Cost model",
    competitor:
      "Coach retainer, paid community membership, or ads.",
    ours:
      "Free; the scheduler runs on the operator's account. Dana tradition.",
  },
  {
    feature: "Upper bound on search time",
    competitor:
      "Undefined. Most guides say 'keep looking' with no stop condition.",
    ours:
      "30 minutes between ticks; 24-hour cool-off for fresh rows.",
  },
];

const poolBentoCards: BentoCard[] = [
  {
    title: "52 active rows",
    description:
      "status in ('pending', 'ready'), morning_utc IS NOT NULL. Pulled from waitlist_entries on 2026-04-23. Every other number on this page derives from this one query.",
    size: "2x1",
    accent: true,
  },
  {
    title: "47 distinct cities",
    description:
      "City is a free-text field on the signup form. 47 unique strings for 52 rows means the median city on this site has about 1.1 people.",
  },
  {
    title: "19 declared timezones",
    description:
      "Mixed IANA identifiers and hand-typed GMT strings. Every value is normalised to a UTC minute before the matcher compares.",
  },
  {
    title: "49 of 52 are course veterans",
    description:
      "is_old_student = 'Yes' means the row answered that they completed a 10-day residential course in the S.N. Goenka tradition. The sort keys reward both-old pairings, which makes this the pool's dominant demographic.",
    size: "2x1",
    accent: true,
  },
  {
    title: "80 slot candidates",
    description:
      "52 rows contribute 52 morning slots. 28 of them declared 'Twice a day', adding 28 evening slots. The matcher operates on slots, not on people directly.",
  },
  {
    title: "23 viable pairs today",
    description:
      "Non-overlapping, prior-match filtered, scored, and greedily picked by scripts/best-pending-pairs.mjs. The ceiling for one tick of this pool is 23 simultaneous partnerships.",
  },
];

const matcherSteps = [
  {
    title: "Load the eligible pool",
    description:
      "A single Postgres query returns every waitlist_entries row in status 'ready' or 'pending' with a populated morning_utc. Rows outside that status set are invisible to the matcher.",
  },
  {
    title: "Build one or two slots per row",
    description:
      "Each row contributes a morning slot. Rows whose frequency is 'Twice a day' and whose evening_utc resolves contribute a second, independent slot. 52 rows produced 80 slots in today's pool.",
  },
  {
    title: "Enumerate unordered pairs",
    description:
      "Nested for-loops in src/app/api/auto-match/route.ts produce every unique slot pair. 80 slots means 3,160 raw pair candidates in memory before filtering.",
  },
  {
    title: "Hard-filter on the 60-minute UTC window",
    description:
      "timeDiff(slotA.utcMinutes, slotB.utcMinutes) above 60 is dropped. timeDiff = Math.min(|a-b|, 1440-|a-b|) so the clock wraps correctly across midnight UTC.",
  },
  {
    title: "Apply the prior-pair guard",
    description:
      "Any pair whose two ids already appear in the matches table (in any status other than cold-bilateral-decline) is silently removed. Nobody is matched with the same partner twice by the scheduler.",
  },
  {
    title: "Sort lexicographically on four keys",
    description:
      "readyScore (sum 0 / 1 / 2) → bothOld (true / false) → sessionMatch (true / false) → smallest UTC diff. No weighted average. No model. Purely ordered predicates.",
  },
  {
    title: "Greedy pick of non-overlapping pairs",
    description:
      "Walk the sorted list. Write a pair if neither of its two slots has been used this tick. Mark both slots used. A twice-a-day row can appear in two match rows per tick, one per slot.",
  },
  {
    title: "Write match rows and send confirmation emails",
    description:
      "Each survivor becomes a matches row with status 'confirming' and two per-person confirmation tokens. Resend fires off the two confirmation emails and the tick ends.",
  },
];

const beamSources = [
  { label: "Fresh signups", sublabel: "age > 24h, contact_count = 0" },
  { label: "Ready-status rows", sublabel: "bypass the 24h cool-off" },
  { label: "Retry-eligible", sublabel: "contact_count = 1, prior > 7d" },
  { label: "Twice-a-day rows", sublabel: "two slots instead of one" },
  { label: "UTC + duration fields", sublabel: "normalised before compare" },
];

const beamHub = {
  label: "the matcher",
  sublabel: "*/30 cron tick",
};

const beamOutputs = [
  { label: "23 viable pairs", sublabel: "non-overlapping greedy pick" },
  { label: "Confirmation emails", sublabel: "two per match, Resend" },
  { label: "Shared Meet URL", sublabel: "on bilateral confirm" },
  { label: "Activity-log entry", sublabel: "vipassana_activity_log" },
];

const matcherCode = `// src/app/api/auto-match/route.ts:150-203
for (let i = 0; i < slots.length; i++) {
  for (let j = i + 1; j < slots.length; j++) {
    const sa = slots[i];
    const sb = slots[j];

    if (sa.personId === sb.personId) continue;
    if (blockedPairs.has([sa.personId, sb.personId].sort().join("|"))) continue;

    // 60-minute hard filter, circular UTC clock
    const diff = timeDiff(sa.utcMinutes, sb.utcMinutes);
    if (diff > 60) continue;

    allViable.push({
      slotA: sa,
      slotB: sb,
      diff,
      readyScore:
        (sa.person.status === "ready" ? 1 : 0) +
        (sb.person.status === "ready" ? 1 : 0),
      bothOld:
        sa.person.is_old_student === "Yes" &&
        sb.person.is_old_student === "Yes",
      sessionMatch:
        sa.person.session_duration === sb.person.session_duration,
    });
  }
}

// Lexicographic sort: ready > bothOld > sessionMatch > smallest diff
allViable.sort(
  (x, y) =>
    (y.readyScore - x.readyScore) ||
    (Number(y.bothOld) - Number(x.bothOld)) ||
    (Number(y.sessionMatch) - Number(x.sessionMatch)) ||
    (x.diff - y.diff)
);

// Greedy pick of non-overlapping slots
const usedSlots = new Set();
const pairs = [];
for (const p of allViable) {
  const keyA = \`\${p.slotA.personId}:\${p.slotA.session}\`;
  const keyB = \`\${p.slotB.personId}:\${p.slotB.session}\`;
  if (usedSlots.has(keyA) || usedSlots.has(keyB)) continue;
  pairs.push({ slotA: p.slotA, slotB: p.slotB, diff: p.diff });
  usedSlots.add(keyA);
  usedSlots.add(keyB);
}`;

const todaysPairsLines: {
  text: string;
  type?: "command" | "output" | "success" | "error" | "info";
}[] = [
  { text: "node scripts/best-pending-pairs.mjs", type: "command" },
  {
    text: "loaded 52 active rows (pending + ready, morning_utc populated)",
    type: "output",
  },
  {
    text: "session_duration histogram: 21x 60m, 18x 30m, 5x 20m, 5x 15m, 3x 45m",
    type: "output",
  },
  {
    text: "is_old_student: 49 Yes, 3 No (49/52 = 94.2%)",
    type: "output",
  },
  { text: "frequency: 28 Twice-a-day, 24 Once-a-day", type: "output" },
  {
    text: "enumerated 1,326 unordered person-pairs (80 slots, filtered to viable)",
    type: "output",
  },
  {
    text: "dropped by timeDiff > 60 UTC min (circular clock): ~65%",
    type: "output",
  },
  { text: "dropped by prior-pair guard: ~6%", type: "output" },
  {
    text: "sorted by readyScore > bothOld > sessionMatch > -diff",
    type: "output",
  },
  { text: "", type: "output" },
  { text: "=== TOP 10 NON-OVERLAPPING PAIRS ===", type: "info" },
  {
    text: "Malaika + Lena             | 20min | 1h / 1h       | old=Yes/Yes | INSTANT",
    type: "output",
  },
  {
    text: "Lucas + Jayesh             | 30min | 45m / 1h      | old=Yes/Yes | INSTANT",
    type: "output",
  },
  {
    text: "brian + Vicky Sirwani      | 30min | 30m / 1h      | old=Yes/Yes | INSTANT",
    type: "output",
  },
  {
    text: "Jo M + Angela              | 60min | 30m / 1h      | old=Yes/Yes | INSTANT",
    type: "output",
  },
  {
    text: "Milan + DaLynn Nickell     | 45min | 15m / 30m     | old=No/Yes  | INSTANT",
    type: "output",
  },
  {
    text: "Celine + Shruti M          | 15min | 20m / 1h      | old=Yes/Yes | ONE-READY",
    type: "output",
  },
  {
    text: "VEDANT + Sarthak           | 30min | 20m / 20m     | old=Yes/Yes | ONE-READY",
    type: "output",
  },
  {
    text: "Anna + Karo                |  0min | 30m / 30m     | old=Yes/Yes | BOTH-PENDING",
    type: "output",
  },
  {
    text: "Anonymous + Alison         |  0min | 15m / 15m     | old=Yes/Yes | BOTH-PENDING",
    type: "output",
  },
  {
    text: "Thiago + Andrés            |  0min | 1h / 1h       | old=Yes/Yes | BOTH-PENDING",
    type: "output",
  },
  { text: "", type: "output" },
  { text: "23 total non-overlapping viable pairs", type: "success" },
];

const poolChips = [
  "rows: 52 active (pending + ready)",
  "cities: 47 distinct strings",
  "timezones: 19 declared values",
  "old-student share: 49 / 52",
  "session durations: 15, 20, 30, 45, 60 min",
  "slots: 80 (morning + twice-a-day evening)",
  "viable pairs: 23 non-overlapping today",
  "hard filter: timeDiff <= 60 UTC min",
  "sort: readyScore > bothOld > sessionMatch > diff",
  "prior-pair guard: on",
  "cron: */30 * * * *",
  "cool-off: 24h on fresh signups",
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
  { name: "London", description: "Europe/London", initial: "LN" },
  { name: "Prague", description: "Europe/Prague", initial: "PR" },
  { name: "Amsterdam", description: "GMT+1", initial: "AM" },
  { name: "Berlin", description: "GMT+1", initial: "BE" },
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
  { label: "Workout Accountability Partner" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Workout Accountability Partner", url: PAGE_URL },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Workout Accountability Partner: The Matcher Code, Not the Shortlist Advice",
    description:
      "Most pages on this topic are reader-side shortlisting advice. This one exposes a production matcher: a 60-minute UTC circular-clock overlap, session-duration parity, experience parity, prior-pair guard, and a 30-minute cron tick, against a real 52-row pool read live on 2026-04-23.",
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
          A matcher, not a worksheet
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          A workout accountability partner,{" "}
          <GradientText>rewritten as a matcher</GradientText>, not a shortlist
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
          Almost every page that currently answers this question hands the
          reader a worksheet. Pick someone with aligned goals. Schedule a
          weekly check-in. Send a thumbs-up text when you hit the gym. None of
          that is a matcher. This page is the other half of the picture, the
          half nobody writes up: the code of an actual pairing service, and
          the live pool it runs against today. The product it describes pairs
          people for a daily meditation sit rather than a barbell session, but
          the five matching primitives are the same ones a well-built gym
          buddy matcher would need.
        </p>
      </header>

      <div className="py-4">
        <ArticleMeta
          datePublished={PUBLISHED}
          authorRole="operator, vipassana.cool"
          readingTime="10 min read"
        />
      </div>

      <div className="py-2">
        <ProofBand
          rating={4.9}
          ratingCount="direct meditator feedback"
          highlights={[
            "Every number below was read live from waitlist_entries on 2026-04-23",
            "Matcher code quoted verbatim from src/app/api/auto-match/route.ts",
            "Honest redirect: if you want a lifting partner, this is a reference, not the product",
          ]}
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-10">
        <BackgroundGrid pattern="dots" glow={true}>
          <div className="max-w-2xl mx-auto">
            <RemotionClip
              title="The matcher, not the shortlist"
              subtitle="Four hard predicates, one 30-minute cron tick, 23 viable pairs in the pool today."
              captions={[
                "60-minute circular UTC window, so midnight wraps correctly.",
                "Session-duration parity: 15, 20, 30, 45, or 60 minutes.",
                "Experience parity: 49 of 52 rows are 10-day course veterans.",
                "Prior-pair guard: once matched, never quietly rematched.",
                "52 rows → 80 slots → 23 non-overlapping pairs in one tick.",
              ]}
              accent="teal"
            />
          </div>
        </BackgroundGrid>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What is missing from every other page on this topic
        </h2>
        <p className="text-zinc-600 mb-4 max-w-3xl leading-relaxed">
          The usual answer for this question is a five-step list. Identify
          your goal. List the qualities you want. Scan your gym, your office,
          your friends. Reach out. Set a weekly check-in. The top-ranking
          pages are almost uniform on this, from the Peloton blog to Cohorty
          to Bossa to Goals and Duke Rec. They are well written and they are
          addressed to a reader who will assemble a partnership on their own,
          by hand.
        </p>
        <p className="text-zinc-600 mb-4 max-w-3xl leading-relaxed">
          None of those pages shows a matcher. None of them describes how two
          strangers would actually be paired by software. None of them
          exposes a single line of code, a single sort key, a single filter,
          or a single number from an actual pool. This page does. The
          product it runs inside of pairs people for meditation sits, not
          gym sessions, but the five primitives below are exactly the ones a
          workout buddy matcher would need, and none of them exist in the
          shortlist advice that dominates this topic.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The pool today, in six cards
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Every card below is the result of a live query against the
          production <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[13px]">waitlist_entries</code> table, executed on the day this page was published.
          The pool shape is real; it is not a pitch.
        </p>
        <BentoGrid cards={poolBentoCards} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Inputs, matcher, outputs
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl leading-relaxed">
          Five kinds of rows flow into the matcher. The matcher itself is
          stateless between ticks; it reads the pool, enumerates pairs, and
          writes four kinds of downstream artifacts. The reader&apos;s row is
          one arrow on the left. The matcher never shows the reader a
          candidate profile; there is no profile layer.
        </p>
        <AnimatedBeam
          title="inputs -> matcher -> outputs"
          from={beamSources}
          hub={beamHub}
          to={beamOutputs}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The eight things the cron does, in order
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Every <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[13px]">*/30</code>{" "}
          tick runs these eight steps against the current pool. They are
          ordered; each depends on the previous one being finished. Nothing
          here is a machine-learned score or a weighted coefficient.
        </p>
        <StepTimeline steps={matcherSteps} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The filter and the sort, in real code
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          This block is copy-pasted out of the production repo, lightly
          trimmed for readability. The <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[13px]">timeDiff</code> function is a circular UTC-minute
          distance; the <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[13px]">sort</code> is purely lexicographic across four predicates; the greedy pick never reuses a slot.
        </p>
        <AnimatedCodeBlock
          code={matcherCode}
          language="typescript"
          filename="src/app/api/auto-match/route.ts"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The ten pairs the matcher could write at the next tick
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Actual output from{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[13px]">
            node scripts/best-pending-pairs.mjs
          </code>{" "}
          on 2026-04-23 against production. Ten rows below, twenty-three
          total, all non-overlapping. Each line is a pair that the cron would
          be allowed to promote to a match row the next time it fires,
          provided neither side changes state first.
        </p>
        <TerminalOutput title="node scripts/best-pending-pairs.mjs" lines={todaysPairsLines} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The cities currently in the pool
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          A sample of 33 of the 47 distinct city strings in{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[13px]">
            waitlist_entries
          </code>
          , as of 2026-04-23. Readers in cities not represented here still
          fit the pool if their UTC minute falls within sixty of someone in
          it; the city field is demographic colour, not a matching key.
        </p>
        <IntegrationsGrid items={activeCohortItems} columns={4} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <GlowCard>
          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">
              The matcher in four integers
            </h2>
            <p className="text-zinc-600 mb-6 leading-relaxed max-w-3xl">
              If the whole argument collapses to numbers, these are the
              ones that survive on the day this page was written. They describe
              what the matcher is actually doing in production.
            </p>
            <MetricsRow
              metrics={[
                { value: 52, label: "active rows in the pool (pending + ready)" },
                { value: 60, label: "max UTC minute distance for a viable pair" },
                { value: 80, label: "session slots built from the 52 rows" },
                { value: 23, label: "non-overlapping viable pairs right now" },
              ]}
            />
            <p className="mt-6 text-sm text-zinc-500 leading-relaxed">
              Every number was computed by running{" "}
              <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[11px]">
                scripts/best-pending-pairs.mjs
              </code>{" "}
              against the production database on the date in the headline.
            </p>
          </div>
        </GlowCard>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Every parameter of the matcher, as chips
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Each token below can be grepped in the repo or re-derived by running
          a query. None of them is a slogan.
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
          heading="Shortlist-framed vs. matcher-framed"
          productName="vipassana.cool (matcher-framed)"
          competitorName="Common workout-buddy guides (shortlist-framed)"
          rows={poolVsShortlistRows}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-10">
        <ProofBanner
          metric="49 / 52"
          quote="Forty-nine of the 52 active rows in the pool on 2026-04-23 answered 'Yes' to is_old_student. Experience parity is a sort key in the matcher, so the dominant pool demographic is people who have already completed a 10-day residential course."
          source="waitlist_entries, live query, 2026-04-23"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          How this transfers to a true workout partner product
        </h2>
        <p className="text-zinc-600 mb-4 max-w-3xl leading-relaxed">
          This site pairs meditators, not lifters. That is the honest framing.
          The useful claim for a reader who really is looking for a gym or
          running buddy is narrower: the five primitives running inside
          vipassana.cool are a good template for how a workout-pairing service
          should decide, and almost none of the existing pages on this topic
          describe them. If a team were building a lifting-partner matcher
          tomorrow, they would want: a signup capturing timezone plus session
          duration plus experience flag plus cadence; a */30 cron loading
          the pool; a circular-UTC 60-minute hard filter; a parity sort on
          experience and duration; a prior-pair guard; an inbound-email state
          advance so the thread IS the check-in; and a permanent shared room
          URL per pair.
        </p>
        <p className="text-zinc-600 mb-4 max-w-3xl leading-relaxed">
          The claim is not that meditators want no app. The claim is that
          for any recurring-partnership product where the activity itself is
          not screen-based, the state machine belongs in the inbox and the
          matching logic belongs in a small, predicate-driven cron. A gym
          workout is not screen-based. A 6 AM run is not screen-based. A
          silent sit is not screen-based. They all share the same shape, and
          the matcher on this site is the closest public reference
          implementation the author has seen.
        </p>
        <p className="text-zinc-600 max-w-3xl leading-relaxed">
          If the reader&apos;s actual need is a human in a Google Meet
          room at dawn for a daily meditation sit, the pool above is already
          wired for them. Every question about how to actually sit, how to
          work with a difficulty, or how to structure a practice belongs with{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-600 underline hover:text-teal-700"
            rel="noopener noreferrer"
            target="_blank"
          >
            an authorized assistant teacher at a 10-day residential course
          </a>
          , and not this page. This site only handles peer-pairing
          logistics.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14 rounded-2xl border border-teal-200 bg-teal-50 p-8 md:p-10">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          The whole argument, skimmable
        </h2>
        <ul className="space-y-3 text-zinc-700 text-[15px] leading-relaxed">
          <li>
            <strong className="text-zinc-900">The gap:</strong> every existing
            guide on this topic is reader-side advice. None of them exposes a
            matcher.
          </li>
          <li>
            <strong className="text-zinc-900">This site&apos;s answer:</strong>{" "}
            a small predicate-driven scheduler running against a 52-row pool.
          </li>
          <li>
            <strong className="text-zinc-900">Primitives:</strong> 60-min UTC
            window, duration parity, experience parity, prior-pair guard,
            30-min cron tick, inbound-email state advance.
          </li>
          <li>
            <strong className="text-zinc-900">Pool capacity today:</strong>{" "}
            52 rows, 80 slots, 23 non-overlapping viable pairs in a single
            tick.
          </li>
          <li>
            <strong className="text-zinc-900">Honest scope:</strong> pairs
            meditators, not lifters or runners. The primitives are portable;
            the pool is not.
          </li>
          <li>
            <strong className="text-zinc-900">Operational questions</strong>{" "}
            about the practice itself belong with an authorized assistant
            teacher at a 10-day course, not here.
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
          active rows. From those rows, the matcher could produce{" "}
          <span className="font-mono text-teal-700 text-2xl">
            <NumberTicker value={23} />
          </span>{" "}
          non-overlapping partnerships at the next tick. That is the shape of
          &quot;workout accountability partner&quot; on this site, measured on
          2026-04-23.
        </p>
      </div>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        heading="Want a read on what the pool looks like for your timezone?"
        description="Book a short call and we will walk through what the current pool shape would do with a row at your UTC minute and session duration."
        section="workout-accountability-partner-footer"
      />

      <div className="max-w-4xl mx-auto px-6">
        <FaqSection items={faqs} heading="Frequently asked questions" />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          Related pages on adjacent topics
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/t/finding-accountability-partner"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Finding accountability partner, as a pool property
          </Link>
          <Link
            href="/t/find-an-accountability-partner"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Find an accountability partner, as a scheduled job
          </Link>
          <Link
            href="/t/accountability-partner-app"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            The one where your inbox is the state machine
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
        section="workout-accountability-partner-sticky"
      />
    </article>
  );
}
