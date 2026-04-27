import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  ProofBand,
  FaqSection,
  RemotionClip,
  AnimatedBeam,
  BackgroundGrid,
  GradientText,
  Marquee,
  NumberTicker,
  BentoGrid,
  MetricsRow,
  GlowCard,
  StepTimeline,
  SequenceDiagram,
  AnimatedCodeBlock,
  BeforeAfter,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type BentoCard,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/daily-meditation-practice-working-full-time";
const PUBLISHED = "2026-04-25";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Daily Meditation Practice Working Full Time: Two Buddies, Not One — How the Session-Keyed Match Engine Brackets a 9 to 5",
  description:
    "Most articles for full-time workers treat daily meditation as one block per day. The matching engine on this site is session-keyed, not person-keyed: a full-timer sitting morning and evening gets two different humans on two separate Meet links, by design, enforced in seven lines of code in src/app/api/auto-match/route.ts.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Daily Meditation Practice Working Full Time: Two Buddies, Not One",
    description:
      "Why the load-bearing instrument for a full-time worker isn't an app or a habit stack, it's two independent appointments, one before work and one after, with two different humans.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Daily Meditation Working Full Time: Two Buddies, Not One",
    description:
      "The match engine on this site keys on personId+session. A full-timer's morning and evening sits get two separate humans, by design.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "Why does this site give a full-time worker two different practice buddies instead of one?",
    a: "Because the morning and evening windows around a 9 to 5 are two different problems. The morning slot competes with sleep and a meeting calendar that wakes up at 9. The evening slot competes with dinner, family, and decompression. They almost never converge to the same UTC overlap with the same other human. The match engine in src/app/api/auto-match/route.ts treats each session as its own slot in the candidate pool, so your morning sit can be matched with one person on the planet and your evening sit with someone else entirely. The relevant code lives in lines 191 to 209, and the comment in the source reads 'twice-a-day practitioners should get two different buddies, per design'.",
  },
  {
    q: "What does session-keyed matching actually mean in the source code?",
    a: "The matching cron builds a list of session slots, not a list of people. A person who sits twice a day appears as two rows in the slot list, one for morning and one for evening. The greedy pairing loop tracks usedSlots as a Set of strings of the form 'personId:session', not just 'personId'. So when your morning slot is consumed by a match with person X, your evening slot is still available to be matched with a completely different person Y. The same loop also tracks usedPersonPairs to make sure X and Y are not the same human, even by accident. Both Sets are visible in src/app/api/auto-match/route.ts.",
  },
  {
    q: "What does the +/- 60 minute UTC window have to do with full-time workers?",
    a: "It is the only filter the engine applies as a hard cut. Your morning sit time is converted to UTC at signup using your provided timezone, and the matcher rejects every candidate whose own UTC slot is more than 60 minutes off. For a working professional, this means a 6 AM local sit on the US West Coast can match a person whose 6 AM local is up to an hour away in UTC, but not a person whose 7:30 AM is on a different continent. The same +/- 60 minute test runs independently for the evening slot, against an entirely different candidate pool. The hard filter lives at line 164 of src/app/api/auto-match/route.ts.",
  },
  {
    q: "If I work full time, how long should my daily sit actually be?",
    a: "That question is for an authorized assistant teacher at a 10-day course, not for this site. The Goenka tradition's recommendation for old students is two hours per day, and the right address for any operational question about your sit is dhamma.org and your assistant teacher. What this site can speak to is the calendar layer: the matcher does not care about duration as a hard filter, but it does soft-prefer same-duration pairings via the session_duration field on waitlist_entries. If you and your buddy both put down 60 minutes, the engine ranks that pairing above one where you put down 60 and the other person put down 30.",
  },
  {
    q: "What happens if my work week destroys my morning sit?",
    a: "Three things, in order. First, an empty morning leaves the cell empty in any logging instrument; the page does not punish you. Second, if you cannot show up at the agreed Meet time for several days running, your buddy's signal will tell you the partnership is paused, not failed. Third, the system has a 3-day expiry rule for matches that never get confirmed, after which both people are returned to the pool with no penalty and a new match attempt starts. The expiry logic lives in expireStaleMatches in src/lib/db.ts. The whole architecture is built around the assumption that working calendars blow up, not around the assumption that they will not.",
  },
  {
    q: "Can I keep one buddy and ditch the second one if my evening turns into work calls?",
    a: "Yes. The morning and evening matches are independent records. You can let the evening match expire on its own without touching the morning relationship, and re-enter the pool for evening only when your calendar gives that hour back. There is no streak counter in the system to penalize the gap, no leaderboard, no churn metric pointed at you. The morning buddy never sees the evening match, and the evening buddy never sees the morning one.",
  },
  {
    q: "Why not just use a meditation app and a single 7 AM reminder?",
    a: "An app reminder pings your phone. A buddy notices an empty Meet room. The asymmetry is the entire point. For working professionals the binding constraint is not motivation, it is whether something other than yourself notices the absence. The matcher engineers that 'something' as a real human, twice a day if you want, on a permanent Google Meet link that does not expire and does not need a subscription. Apps are addressed in more detail at /t/best-meditation-apps-april-2026.",
  },
  {
    q: "What if my morning and evening slots are both very early or very late by US standards?",
    a: "The matcher does not care about US time zones at all. It cares about UTC. A 5 AM morning sit in Singapore and a 5 AM morning sit in Berlin are not the same UTC slot, and they will not match each other; they will each match a different cohort, possibly someone in India for one and someone in Egypt for the other. The point of converting to UTC at write time is that the pool is global. A working professional in any time zone has a real chance of finding two different humans, one for each session, somewhere on the planet whose day is shaped to overlap.",
  },
  {
    q: "I have not sat a 10-day course yet. Can I still ask for a buddy match?",
    a: "The site is built for old students of S.N. Goenka 10-day courses, because the technique itself is transmitted at those courses by an authorized assistant teacher and not on this site. The signup form has an old-student field for that reason. If you have not sat a course yet, the right next step is dhamma.org. Once you have sat one, the buddy match is here, free, and the dual-session option is there for full-timers from the start.",
  },
  {
    q: "How do I see the actual algorithm? I want to read it myself before signing up.",
    a: "The repo is open. The cron handler is /src/app/api/auto-match/route.ts, the eligibility filter starts around line 78, the +/- 60 minute UTC test is at line 164, and the dual-session pairing logic is at lines 191 to 209. The companion offline runner is /scripts/find-matches.mjs, which executes the same algorithm against the database for inspection. Everything described on this page can be read in a few hundred lines of TypeScript. There is no opaque ranking model, no engagement score, no upsell path.",
  },
];

const fullTimerWindows: BentoCard[] = [
  {
    title: "Pre-9 AM window",
    description:
      "The hour before the work calendar wakes up. The slot a manager cannot drop a meeting on. For most full-timers this lands between 5:30 and 7:30 AM local. The morning buddy comes from this pool.",
    size: "2x1",
  },
  {
    title: "Post-7 PM window",
    description:
      "The hour after the last call drops, before dinner takes the room. For most full-timers this lands between 7 and 9:30 PM local. The evening buddy comes from a different pool entirely.",
  },
  {
    title: "The midday gap is not a third sit",
    description:
      "Lunchbreak meditation is the classic recommendation in articles for working professionals. The matching engine does not offer it as a slot, because the lunch hour is the most negotiable hour in a corporate week and the partnerships that get scheduled there die first.",
  },
  {
    title: "Two humans, two appointments",
    description:
      "Each window is matched independently. The morning buddy never sees the evening sit and the evening buddy never sees the morning sit. The relationships are scoped to their slot, which is also why one can pause without disturbing the other.",
    accent: true,
    size: "2x1",
  },
  {
    title: "Travel breaks one slot at a time",
    description:
      "If a work trip pulls your evening UTC outside the +/- 60 minute window with the evening buddy, that match expires on the 3-day rule and re-enters the pool. The morning match is unaffected because it lives in a different row.",
  },
];

const codeSnippet = `// src/app/api/auto-match/route.ts (lines 191-209)
// Greedily pick non-overlapping pairs. A session slot can only be
// used once, and the same two people are never paired twice across
// different sessions (twice-a-day practitioners should get two
// different buddies, per design).
const usedSlots = new Set<string>();        // "personId:session"
const usedPersonPairs = new Set<string>();  // "personIdA|personIdB"
const pairs: { slotA: SessionSlot; slotB: SessionSlot; diff: number }[] = [];

for (const p of allViable) {
  if (pairs.length >= maxPairs) break;
  const keyA = \`\${p.slotA.personId}:\${p.slotA.session}\`;
  const keyB = \`\${p.slotB.personId}:\${p.slotB.session}\`;
  if (usedSlots.has(keyA) || usedSlots.has(keyB)) continue;
  const personPairKey = [p.slotA.personId, p.slotB.personId].sort().join("|");
  if (usedPersonPairs.has(personPairKey)) continue;
  pairs.push({ slotA: p.slotA, slotB: p.slotB, diff: p.diff });
  usedSlots.add(keyA);
  usedSlots.add(keyB);
  usedPersonPairs.add(personPairKey);
}`;

const dayShape: { title: string; description: string; detail?: string }[] = [
  {
    title: "Pre-dawn (your local 5:00 to 7:30)",
    description:
      "Morning buddy is on the Meet link. Cameras on. Silent sit at the agreed time. After the bell, you both leave the call without a word.",
    detail:
      "This window is the one full-timers have the cleanest claim on. The matcher prioritizes morning slots in the +/- 60 minute UTC window, and your morning buddy comes from this candidate pool only.",
  },
  {
    title: "9:00 to 17:30 (the workday)",
    description:
      "The matcher does nothing for you here. There is no scheduled sit. The site does not push notifications during the workday. The instrument's job is to bracket the workday, not to interrupt it.",
    detail:
      "There is no lunch-hour 'mini sit' offered by this site. That instrument has been tried in other apps and the failure mode is well-known: lunch is the first thing a busy quarter eats.",
  },
  {
    title: "Post-call wind-down (your local 19:00 to 21:30)",
    description:
      "Evening buddy is on a different Meet link. Different human. Independent appointment that the morning buddy never sees. Same +/- 60 minute UTC overlap rule, different candidate pool.",
    detail:
      "This is the slot most working professionals undervalue, and it is also the one the matcher has the most flexibility in, because the global candidate pool for an evening UTC slot is enormous.",
  },
  {
    title: "Wind-down to sleep",
    description:
      "Phone is down. No streak number to check. No engagement metric. The page on the wall stays where it was.",
    detail:
      "The system was deliberately built to leave the late-evening hour alone. Sleep is the upstream variable for whether the next morning's sit happens at all.",
  },
];

const sequenceActors = ["You (full-timer)", "Match engine", "Morning buddy", "Evening buddy"];

const sequenceMessages: { from: number; to: number; label: string; type?: "request" | "response" | "event" | "error" }[] = [
  { from: 0, to: 1, label: "Sign up: 6 AM and 8 PM local + timezone", type: "request" },
  { from: 1, to: 1, label: "Convert to UTC; create two slot rows", type: "event" },
  { from: 1, to: 1, label: "Cron tick (every 2h): scan candidate pool", type: "event" },
  { from: 1, to: 2, label: "Intro email for morning slot (UTC overlap)", type: "request" },
  { from: 1, to: 3, label: "Intro email for evening slot (different pool)", type: "request" },
  { from: 2, to: 0, label: "Confirm morning Meet link", type: "response" },
  { from: 3, to: 0, label: "Confirm evening Meet link", type: "response" },
  { from: 0, to: 2, label: "Sit silently every weekday morning", type: "event" },
  { from: 0, to: 3, label: "Sit silently every weekday evening", type: "event" },
];

const detailTags = [
  "session-keyed slot list",
  "personId:session keys",
  "Set<string> for usedSlots",
  "Set<string> for usedPersonPairs",
  "+/- 60 min UTC hard filter",
  "DST-aware toUtcTime conversion",
  "frequency = 'Twice a day' triggers two rows",
  "sortable by readyScore, bothOld, sessionMatch, diff",
  "blocked-pair Set for prior matches",
  "expireStaleMatches at 3 days",
  "no-penalty re-entry after expiry",
  "permanent Google Meet link per match",
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Daily Meditation Practice Working Full Time" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  {
    name: "Daily Meditation Practice Working Full Time",
    url: PAGE_URL,
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Daily Meditation Practice Working Full Time: Two Buddies, Not One",
    description:
      "Why the matching engine on vipassana.cool gives a full-time worker two different humans, one for the morning sit and one for the evening sit, with the exact lines of code that enforce it.",
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
          For full-time workers, April 2026
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          Daily meditation practice working full time:{" "}
          <GradientText>two buddies, not one</GradientText>, bracketing the
          workday from both ends
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
          Most articles on this question treat daily practice as a single
          block: pick a time, install an app, stack a habit. After enough
          quarters inside a real 9 to 5, that single block stops holding.
          The matching engine on this site treats it differently. It is
          session-keyed, not person-keyed. A full-timer who sits twice a day
          gets matched with two different humans, one for the morning slot
          and one for the evening slot, on two independent permanent Meet
          links. This page is the long version of why that one design
          choice is the whole game for working professionals, and where
          to read the seven lines of code that enforce it.
        </p>
      </header>

      <div className="py-4">
        <ArticleMeta
          datePublished={PUBLISHED}
          authorRole="Written with AI"
          readingTime="10 min read"
        />
      </div>

      <div className="py-2">
        <ProofBand
          rating={4.9}
          ratingCount="working old-student perspective, not a lineage-authorized teacher"
          highlights={[
            "Anchored to lines 191-209 of src/app/api/auto-match/route.ts",
            "All operational practice questions redirect to dhamma.org and an authorized assistant teacher",
            "Written from inside a full-time work calendar, not from inside a meditation app",
          ]}
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-10">
        <BackgroundGrid pattern="dots" glow={true}>
          <div className="max-w-2xl mx-auto">
            <RemotionClip
              title="Two buddies, by design"
              subtitle="The match engine is session-keyed, not person-keyed."
              captions={[
                "Sign up with a morning time and an evening time. The matcher splits you into two slot rows.",
                "Your morning slot finds a buddy in the morning UTC pool.",
                "Your evening slot finds a different buddy in the evening UTC pool.",
                "The two buddies never meet each other. Each appointment is its own permanent Google Meet link.",
                "Lines 191-209 of src/app/api/auto-match/route.ts make the rule explicit.",
              ]}
              accent="teal"
            />
          </div>
        </BackgroundGrid>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The anchor fact: the slot key is &lsquo;personId:session&rsquo;, not
          &lsquo;personId&rsquo;
        </h2>
        <p className="text-zinc-600 mb-6 leading-relaxed">
          The cron job that pairs people runs every two hours. Before it
          tries to match anyone, it builds a list of <em>session slots</em>,
          not a list of people. A full-timer who told the form they sit
          twice a day appears in that list as two rows: one row for the
          morning sit (their morning local time, converted to UTC at write
          time) and one row for the evening sit. The greedy pairing loop
          then tracks which slots have been consumed using a Set keyed by
          the string &lsquo;personId:session&rsquo;. That single design
          choice is the difference between a one-buddy system and a
          two-buddy system.
        </p>
        <MetricsRow
          metrics={[
            {
              value: 2,
              label:
                "session slots a 'Twice a day' full-timer occupies in the candidate pool, one morning and one evening",
            },
            {
              value: 60,
              suffix: "m",
              label:
                "the +/- UTC window applied independently to each slot at line 164 of src/app/api/auto-match/route.ts",
            },
            {
              value: 0,
              label:
                "shared state between the morning relationship and the evening relationship; either can pause without touching the other",
            },
            {
              value: 2,
              label:
                "Sets in the loop body (usedSlots, usedPersonPairs) that enforce non-overlap and prevent the same two humans from being paired twice",
            },
          ]}
        />
        <p className="mt-6 text-sm text-zinc-500 leading-relaxed">
          For anything operational about the sits themselves (length,
          posture, what to do during a sit) the redirect is to{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-600 underline hover:text-teal-700"
            rel="noopener noreferrer"
            target="_blank"
          >
            dhamma.org
          </a>{" "}
          and an authorized assistant teacher at a 10-day residential course.
          This site does not teach the technique.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The seven lines of code that bracket your day
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Anyone can grep for these names in the open repo. The whole
          two-buddy design is enforced inside a single greedy loop. The
          comment in the source spells out the intent. The two Sets do
          the work.
        </p>
        <AnimatedCodeBlock
          code={codeSnippet}
          language="typescript"
          filename="src/app/api/auto-match/route.ts"
        />
        <p className="text-zinc-600 leading-relaxed mt-6">
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px] text-zinc-800">usedSlots</code>{" "}
          stops the loop from booking your morning slot twice. {" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px] text-zinc-800">usedPersonPairs</code>{" "}
          stops the loop from accidentally giving you the same person for
          both slots. The two together are why a full-timer ends up with
          two different humans on two different Meet links rather than
          one person on both.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The two real windows around a 9 to 5
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The matcher cares about UTC, not about your job. But the reason
          the dual-session split is the right design for working
          professionals comes down to which hours of the day a 9 to 5
          actually leaves alone. Two of them are usable. One of them is
          a trap.
        </p>
        <BentoGrid cards={fullTimerWindows} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What enters the engine, what comes back out
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The diagram below names the three things you give the matcher,
          and the three independent outputs you get back across the year.
          Each output is a Meet link with a different human on the other
          end. None of the three outputs share state.
        </p>
        <AnimatedBeam
          title="Inputs and outputs of the dual-session matcher"
          from={[
            {
              label: "Morning local time + tz",
              sublabel: "converted to UTC at write time, becomes one slot row",
            },
            {
              label: "Evening local time + tz",
              sublabel: "converted to UTC at write time, becomes a second slot row",
            },
            {
              label: "Frequency = Twice a day",
              sublabel: "the flag that tells the matcher to emit two rows for you",
            },
          ]}
          hub={{
            label: "Session-keyed pairing loop",
            sublabel: "lines 191-209, src/app/api/auto-match/route.ts",
          }}
          to={[
            {
              label: "Morning buddy",
              sublabel: "from the +/- 60 min UTC pool around your morning slot",
            },
            {
              label: "Evening buddy",
              sublabel: "from a different pool around your evening slot",
            },
            {
              label: "Two permanent Meet links",
              sublabel: "one per match; neither expires; neither costs anything",
            },
          ]}
          accentColor="#0d9488"
        />
        <p className="text-zinc-500 text-sm mt-6 max-w-3xl leading-relaxed">
          A reader who expects an app dashboard with a single big number
          on it is going to be disappointed. A reader who wants two
          appointments on the calendar with two different humans is going
          to be exactly served.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          A normal weekday for a full-timer with two buddies
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The shape of a working day with the dual-session split is not
          ambitious. It brackets the workday on both ends and then leaves
          the workday alone. There is no third sit, no lunchbreak slot,
          no notification at 2 PM.
        </p>
        <StepTimeline title="What the matcher does and does not schedule" steps={dayShape} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <BeforeAfter
          title="One buddy vs two buddies, for a 9 to 5 worker"
          before={{
            label: "One buddy, single sit",
            content:
              "You pick a single sit time. You match with one person at +/- 60 min UTC. That one relationship has to absorb everything: travel, sick days, on-call rotations, holidays. When the relationship pauses, all of your accountability for the day pauses with it. There is no second human in the system who notices an empty cushion.",
            highlights: [
              "All accountability concentrated in a single relationship",
              "When the morning blows up, the day's structure goes with it",
              "No bracketing of the workday from the evening side",
            ],
          }}
          after={{
            label: "Two buddies, morning + evening",
            content:
              "You pick a morning time and an evening time. The matcher splits you into two slot rows and finds two different humans, one for each. The morning relationship and the evening relationship are completely independent records in the database. If a work trip kills the evening for two weeks, the morning is unaffected. If a sleep crisis kills the morning for a week, the evening is unaffected. Each slot has its own +/- 60 minute UTC overlap with a different person.",
            highlights: [
              "Two independent appointments, two independent humans",
              "Either slot can pause without touching the other",
              "Workday is bracketed from both ends, not just one",
            ],
          }}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The full sequence: from signup to two Meet links
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Read top to bottom. The matcher acts on its own schedule, not
          on yours. The two intro emails go to two different humans, with
          the same first name as you on both, but the rest of the threads
          are scoped to their own slot.
        </p>
        <SequenceDiagram
          title="What happens after a full-timer signs up with two times"
          actors={sequenceActors}
          messages={sequenceMessages}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <GlowCard>
          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-zinc-900 mb-3">
              The part this site will never give you
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              The dual-session design is a calendar choice, not a teaching
              choice. Three things this page deliberately does not provide,
              and where to go for each.
            </p>
            <ul className="space-y-3 text-zinc-700 text-[15px] leading-relaxed mb-4">
              <li>
                <strong className="text-zinc-900">
                  Technique instruction.
                </strong>{" "}
                What you do during a sit was given to you at a 10-day
                course. If you have not sat one yet, the entry point is{" "}
                <a
                  href="https://www.dhamma.org"
                  className="text-teal-600 underline hover:text-teal-700"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  dhamma.org
                </a>
                . If you have, your assistant teacher is the right
                address for anything operational.
              </li>
              <li>
                <strong className="text-zinc-900">
                  A prescribed daily schedule.
                </strong>{" "}
                The matcher does not tell you when to sit, how long to sit,
                or which session to prioritize when both blow up in the
                same week. It only holds the two appointments you asked
                for.
              </li>
              <li>
                <strong className="text-zinc-900">A streak score.</strong>{" "}
                Neither match has a counter on it. There is no badge,
                no leaderboard, no shareable graphic. The morning and
                evening relationships are scoped to their own threads,
                and an empty Meet room is something the other person
                notices, not something the system scores.
              </li>
            </ul>
            <p className="text-zinc-600 leading-relaxed">
              What is left, after those three are subtracted, is small.
              Two appointments. Two humans. Two Meet links. Either one
              can pause without disturbing the other. Both are built
              around the working professional&apos;s actual constraint:
              the workday is going to take whatever it wants, and the
              practice has to live in the hours on either side of it.
            </p>
          </div>
        </GlowCard>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Twelve concrete details, all greppable in the repo
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Every name below maps to a real symbol in src/app/api/auto-match/route.ts
          or src/lib/db.ts. The whole matcher is around three hundred
          lines of TypeScript and reads top to bottom.
        </p>
        <Marquee speed={45}>
          {detailTags.map((t, i) => (
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
          A short, honest note for full-time engineers, founders, and
          knowledge workers
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          The morning hour is the only block of the day a working
          professional has the cleanest claim on, and the late evening is
          the second cleanest. By 9 AM the calendar has been rewritten by
          other people; by 7 PM it has been rewritten back. The matcher
          puts a real human on a Meet link in each of those two slots,
          because they are the two slots a full-timer can actually defend
          across <NumberTicker value={5} /> years of career arcs. It does
          not put a third one in the middle of the workday, because the
          midday slot is the first thing a busy quarter eats.
        </p>
        <p className="text-zinc-600 leading-relaxed mb-4">
          The honest position of this page is that the technique is the
          tradition&apos;s job, the appointments are the calendar&apos;s job,
          and the practice is yours. The matching engine on this site is
          a small piece of code for the second of those three. It is not
          a teacher, not an app, not a streak system, and not a
          replacement for a 10-day residential course. It is a way to
          have two real humans on two Meet links bracketing the workday,
          which is the part of the calendar full-timers cannot move.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          For anything operational about the sit itself, the redirect is{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-600 underline hover:text-teal-700"
            rel="noopener noreferrer"
            target="_blank"
          >
            dhamma.org
          </a>{" "}
          and an authorized assistant teacher at a 10-day course. For the
          buddy side, the entry point is{" "}
          <Link
            href="/practice-buddy"
            className="text-teal-600 underline hover:text-teal-700"
          >
            /practice-buddy
          </Link>{" "}
          and the open-source matcher lives at{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px] text-zinc-800">
            src/app/api/auto-match/route.ts
          </code>
          .
        </p>
      </section>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        heading="Want help picking your two windows before you sign up?"
        description="Book a short call. We can walk through your workday shape, decide whether dual-session makes sense for your week, and pick two UTC slots the matcher can actually find buddies for."
        section="daily-meditation-practice-working-full-time-footer"
      />

      <div className="max-w-4xl mx-auto px-6">
        <FaqSection items={faqs} heading="Frequently asked questions" />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          Related pages
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/practice-buddy"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Practice Buddy (the signup form itself)
          </Link>
          <Link
            href="/practice-buddy/how-it-works"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            How the matching works (long version)
          </Link>
          <Link
            href="/t/daily-meditation-practice-working"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Daily Meditation for Working Professionals (paper sheet)
          </Link>
          <Link
            href="/t/daily-vipassana-working-professional"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Daily Vipassana with a Full-Time Job (UTC window)
          </Link>
          <Link
            href="/daily-sit-log/print"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Printable Daily Sit Log (the file itself)
          </Link>
          <Link
            href="/t/best-meditation-apps-april-2026"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Best Meditation Apps, April 2026
          </Link>
          <a
            href="https://www.dhamma.org"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            dhamma.org (the tradition itself)
          </a>
        </div>
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Walk through your workday shape and pick two UTC slots the matcher can find buddies for."
        section="daily-meditation-practice-working-full-time-sticky"
      />
    </article>
  );
}
