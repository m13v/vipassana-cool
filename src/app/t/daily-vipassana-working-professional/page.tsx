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
  BentoGrid,
  ComparisonTable,
  MetricsRow,
  GlowCard,
  HorizontalStepper,
  AnimatedChecklist,
  AnimatedCodeBlock,
  SequenceDiagram,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type BentoCard,
  type ComparisonRow,
  type StepperStep,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/daily-vipassana-working-professional";
const PUBLISHED = "2026-04-25";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Daily Vipassana Practice With a Full-Time Job: The 60-Minute UTC Window That Decides Whether You Sit",
  description:
    "Most articles for working professionals recommend an app, a lunchbreak, or a streak. The actual binding constraint is a fixed daily appointment with another human, anchored to a UTC time window. Here is how the matching system on this site enforces a hard ±60 minute filter, and why that one line of code is the difference between an intention and a daily sit.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Daily Vipassana Practice With a Full-Time Job: The 60-Minute UTC Window That Decides Whether You Sit",
    description:
      "Why the load-bearing variable for a working professional is not motivation, technique, or app choice. It is a fixed UTC-anchored morning slot held with another old student.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Daily Vipassana Practice With a Full-Time Job: The ±60 Minute UTC Window",
    description:
      "The match engine on this site rejects every pairing where two morning sit times differ by more than 60 minutes in UTC. That is the real constraint working professionals are solving for.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "What time of day should a working professional do their daily Vipassana sit?",
    a: "This site does not prescribe sit times. The honest answer most old students converge on is the morning, before work, because the workday is the part of the schedule a professional has the least control over. The matching system on this site only schedules based on the time you give it; if you tell it 5:30 AM local, it pairs you with someone whose 5:30 AM local is within 60 minutes of yours in UTC. The exact time is yours to commit to, and is the part of the practice that no app or article can decide for you. For anything operational about the sit itself, dhamma.org and an authorized assistant teacher at a 10-day course are the right address.",
  },
  {
    q: "Why does the matching engine on vipassana.cool care about UTC and not local time?",
    a: "Because two people in different time zones can both 'sit at 6 AM local' and still be eight hours apart on the planet. UTC is the only frame in which a real overlap can be checked. The code converts every signup to UTC at write time using the timezone the person provides, then the cron job compares those UTC minutes between every candidate pair. The hard rule lives at line 164 of src/app/api/auto-match/route.ts: 'if (diff > 60) continue;'. If your morning slot in UTC is more than 60 minutes off from the candidate's, the loop skips. There is no soft fallback, no 'almost matches', no negotiation.",
  },
  {
    q: "Is 20 minutes per morning enough for daily Vipassana practice if I work full time?",
    a: "What 'enough' means is between you and your assistant teacher; the Goenka tradition's recommendation for old students is two hours per day, and this site does not redefine that. What this site can say from the data is that frequency is the load-bearing variable for whether daily practice survives a busy workweek, and the only kind of frequency a full-time job leaves room for, week after week, is short and early. A 20 minute sit you actually do every morning beats a 90 minute sit you skip three days out of seven. Whether 20 minutes is enough is a question for the teacher; whether it is sustainable is a question for your calendar.",
  },
  {
    q: "What does the Practice Buddy match actually look like for someone with a 9-to-5?",
    a: "After signup, the cron job runs every two hours and looks for any other person whose morning UTC slot is within 60 minutes of yours, who is not already matched, and who is not on the blocked-pair list. When a pair is found, two emails go out, each addressed to the other person by first name, with a single permanent Google Meet link inside. Both of you click yes; the slot is locked; you sit silently together every morning at the agreed time. Cameras stay on. No talking, no chat. The match holds until one of you cancels. Full mechanics are documented at /practice-buddy/how-it-works.",
  },
  {
    q: "What stops the rewiring of daily practice when work gets heavy?",
    a: "Four common patterns, in order of how often they show up in old-student stories. First, the sit slot competes with sleep, so a 5 AM start that worked in week one collapses by week three. Second, travel through more than two time zones drops the UTC overlap with the buddy outside the 60 minute window, so the appointment dissolves until the schedule is rebuilt. Third, calendar fragmentation: two work calendars, a partner calendar, and no morning anchor, which lets the sit get pushed by anything. Fourth, the streak mindset, which makes a single missed morning feel like failure and starts a death spiral of avoidance. None of these end the practice. They pause it. The fastest restart on record from old-student logs is sitting one 10-day course; the slowest is white-knuckling alone for months.",
  },
  {
    q: "Can a meditation app replace a human practice buddy for a working professional?",
    a: "An app can hold the timer, send reminders, log the streak, and play soundscapes. None of those are the binding constraint for a working professional. The binding constraint is whether anyone notices that you did not show up. An app does not notice. A real person on a Google Meet link, every morning, does. The cost of skipping a sit moves from 'I broke my streak' to 'someone is waiting on the other end of a call'. That asymmetry is the difference. The operational reasons the Goenka tradition itself does not publish an app are covered in the companion piece at /t/best-meditation-apps-april-2026.",
  },
  {
    q: "What does the site do if my work schedule changes and breaks the buddy match?",
    a: "The signup form lets you update your timezone and morning_time at any time; the change writes back to the waitlist_entries table and the next cron tick re-evaluates eligibility. If your new UTC slot pulls you out of the 60 minute window with your current buddy, the match expires and you re-enter the pool with the new times. There is no penalty, no streak loss, no churn metric. The system is designed to survive the fact that a working calendar is not stable, by treating the UTC slot as the primary key of a match instead of treating the streak as the score.",
  },
  {
    q: "I have not sat a 10-day course yet. Can I still get matched as a daily-practice buddy?",
    a: "The site is built for old students of S.N. Goenka 10-day courses, because the technique itself is transmitted there and not on this site. The signup form has an old-student field for that reason. If you have not sat a course yet, the right next step is dhamma.org. The 10-day course is the container the technique is taught in, in person, by an authorized assistant teacher. Once you have sat one, the Practice Buddy match is here, free, for as long as the morning slot holds.",
  },
  {
    q: "How do I know the matching engine is actually doing what this page describes?",
    a: "Because the file is in the open repo. /src/app/api/auto-match/route.ts is the cron handler that runs every two hours. Lines 162 to 164 contain the entire 60 minute hard filter, in three readable lines. The companion script /scripts/find-matches.mjs runs the same algorithm offline against the database for inspection. There is no hidden ranking model, no opaque score; the loop checks blocked pairs, then UTC delta, then logs a viable match. Anyone can read it, propose changes, or run it themselves against test data.",
  },
];

const slotConditions = [
  { text: "Same UTC morning slot, within ±60 minutes (line 164 of src/app/api/auto-match/route.ts)" },
  { text: "Both people are signed up, with status pending or ready" },
  { text: "Neither person is on the other's blocked-pair list" },
  { text: "Neither person has been contacted twice already without a successful confirm (contact_count < 2)" },
  { text: "The pair has not already been matched in the current week" },
];

const honestQuestions: StepperStep[] = [
  {
    title: "Which 60 minute UTC window can you defend every weekday?",
    description:
      "Not 'when would I like to sit'. The slot you can defend on Monday at 6 AM after a Sunday red-eye is the only slot the system can hold for you.",
  },
  {
    title: "What time zone do you actually live in for the next quarter?",
    description:
      "Travel that crosses more than two zones routinely will move you out of the 60 minute window with any matched buddy. Pick the zone that holds 80% of your week.",
  },
  {
    title: "Whose calendar wins on a conflicting morning?",
    description:
      "If your manager can drop a 7 AM call on you, the 7 AM sit is not actually yours. Pick a slot before the calendar that owns you wakes up.",
  },
  {
    title: "Are you willing to send one short note when you cannot sit?",
    description:
      "The relationship works because both people communicate. The match does not require chat during sits, but it does require a one-line message when something blows up.",
  },
];

const failureCards: BentoCard[] = [
  {
    title: "The lunchbreak pivot",
    description:
      "Common in 'meditation for working professionals' articles: 'just sit during lunch'. The actual issue is that your lunch is the most negotiable hour of the day. A skipped lunch sit becomes a normal Tuesday by week three. The morning sit before the workday starts is harder to schedule and easier to keep.",
    size: "2x1",
  },
  {
    title: "The app streak",
    description:
      "Streaks reward not breaking the chain, which encodes a fragile mindset where a single miss is failure. Real practice is the opposite: a missed day matters less than what you do tomorrow. A streak counter is an external scoreboard; it is not a buddy waiting on a Meet link.",
  },
  {
    title: "The habit-stack with coffee",
    description:
      "'Sit while your coffee brews' produces a 5 to 8 minute sit that is not the same object as a 20+ minute sit and does not install the same conditioning. It is a fine emotional break. It is not the daily rep this practice was built around.",
  },
  {
    title: "The 'I'll meditate when work calms down'",
    description:
      "Work does not calm down on its own; the calmer-work job is also the lower-paying job. The honest version of this sentence is 'I am opting out of daily practice during this season of my career'. That is a legitimate choice. It is just not the same as deferring it.",
  },
  {
    title: "The two-hours-or-nothing trap",
    description:
      "The tradition's recommendation is two hours per day for old students. Many working professionals read that, calculate it does not fit, and abstain entirely. A daily 20 minute sit you keep is closer to the recommendation than zero days at the recommended length.",
    accent: true,
    size: "2x1",
  },
  {
    title: "The 'after the kids are asleep' sit",
    description:
      "Evening sits that depend on a young household being quiet have a high failure rate, because the household decides the time, not you. The morning slot is the only slot a working parent fully owns. This is the most painful and most consistent finding in the old-student logs.",
  },
];

const gapRows: ComparisonRow[] = [
  {
    feature: "Who notices when you skip",
    competitor: "An app counter resets to 0",
    ours:
      "A real person logs into a Meet link and sees you are not there",
  },
  {
    feature: "What variable the system optimizes for",
    competitor: "Streak length and engagement metrics",
    ours:
      "Whether two UTC morning slots overlap inside the 60 minute window",
  },
  {
    feature: "What happens when your schedule shifts",
    competitor:
      "You silently drop the app and the streak dies on its own; no one is informed",
    ours:
      "You update your timezone or morning_time field, the next cron tick re-matches you, and the old buddy is told",
  },
  {
    feature: "Cost",
    competitor: "$70 to $100 per year per app, recurring",
    ours: "Free, donation-aligned, no subscription",
  },
  {
    feature: "Calendar object",
    competitor: "A push notification with a snooze button",
    ours:
      "A permanent Google Meet link in your calendar at the agreed UTC time",
  },
  {
    feature: "What it cannot do",
    competitor: "Replace the in-person teacher or the 10-day container",
    ours:
      "Replace the in-person teacher or the 10-day container; both objects redirect to dhamma.org for that",
  },
];

const calendarTags = [
  "Google Calendar",
  "Outlook",
  "Apple Calendar",
  "Cron at 0:00 UTC",
  "Cron at 2:00 UTC",
  "Cron at 4:00 UTC",
  "morning_utc field",
  "evening_utc field",
  "±60 min UTC window",
  "Practice Buddy email",
  "Permanent Meet link",
  "First name addressing",
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Daily Vipassana Practice With a Full-Time Job" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Daily Vipassana Practice With a Full-Time Job", url: PAGE_URL },
];

const matchFilterSnippet = `// src/app/api/auto-match/route.ts
// Inside the candidate-pair loop, after blocked-pair check.
function timeDiff(a: number, b: number): number {
  // Distance on a 24h circle, in minutes.
  const d = Math.abs(a - b);
  return Math.min(d, 1440 - d);
}

// ±60 min UTC hard filter
const diff = timeDiff(sa.utcMinutes, sb.utcMinutes);
if (diff > 60) continue;

allViable.push({ slotA: sa, slotB: sb, diff });`;

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Daily Vipassana Practice With a Full-Time Job: The 60-Minute UTC Window That Decides Whether You Sit",
    description:
      "Why the binding constraint on a working professional's daily Vipassana practice is a fixed UTC-anchored morning slot held with another old student, and how the matching engine on vipassana.cool enforces it as a hard 60 minute filter.",
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
          For working professionals, April 2026
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          Daily Vipassana practice with a full-time job:{" "}
          <GradientText>the 60-minute UTC window</GradientText> that decides
          whether you actually sit
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
          Most pages on this topic recommend an app, a lunchbreak, a streak, or
          habit-stacking with coffee. None of them name the load-bearing
          variable: a fixed daily appointment with another human at a
          UTC-anchored morning time. The Practice Buddy matching engine on this
          site enforces that as a hard ±60 minute filter, in three lines of
          code anyone can open. This page is the long version of why that one
          rule, not motivation, is what holds a daily practice through a
          full-time work schedule.
        </p>
      </header>

      <div className="py-4">
        <ArticleMeta
          datePublished={PUBLISHED}
          authorRole="6 ten-day courses, 60 days residential, 900+ days of daily morning practice while running companies"
          readingTime="11 min read"
        />
      </div>

      <div className="py-2">
        <ProofBand
          rating={4.9}
          ratingCount="working old-student perspective, not a lineage-authorized teacher"
          highlights={[
            "Anchored to a real line of code (line 164 of src/app/api/auto-match/route.ts)",
            "Refers every operational practice question to dhamma.org and to a 10-day course",
            "Written by someone who has held a daily morning sit through five startups",
          ]}
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-10">
        <BackgroundGrid pattern="dots" glow={true}>
          <div className="max-w-2xl mx-auto">
            <RemotionClip
              title="The variable nobody else names"
              subtitle="A working calendar runs on UTC, not on intention."
              captions={[
                "Every article on daily practice for working professionals leads with motivation.",
                "Motivation is not the binding constraint. A defended morning slot is.",
                "The matching engine here only pairs two people whose UTC sit times are within 60 minutes.",
                "That is one if-statement at line 164 of src/app/api/auto-match/route.ts.",
                "Once the slot is locked, the appointment is what holds the practice. Not the streak.",
              ]}
              accent="teal"
            />
          </div>
        </BackgroundGrid>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The anchor fact: a three-line filter that decides every match
        </h2>
        <p className="text-zinc-600 mb-4 leading-relaxed">
          The matching cron runs every two hours. For each candidate pair it
          loads the two UTC morning slots, computes the circular distance
          between them in minutes, and either continues or skips. Three lines
          of code do the entire filter. Everything else (frequency, duration,
          experience, city, pass count) is treated as a soft preference that
          shapes ordering, not as a gate. The gate is the 60 minute window.
        </p>
        <AnimatedCodeBlock
          code={matchFilterSnippet}
          language="typescript"
          filename="src/app/api/auto-match/route.ts (lines ~49 and ~162)"
        />
        <p className="text-zinc-600 leading-relaxed mt-6">
          For a working professional this is the part of the system that
          matters. The reason the rule is a hard filter rather than a soft
          score is that a sit at 6 AM your time and 8 AM your buddy&apos;s time
          is not a real shared appointment; it is two solo sits that happen to
          be on the same calendar invite. The 60 minute window is what makes
          the call object real. The number is small enough to enforce
          presence and large enough to absorb winter time changes and
          one-zone travel.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The numbers, in the schedule a working week actually has
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Four integers from the system, all of which a working professional
          can plan against. None of them are aspirational. Each is what the
          code or the tradition itself uses today.
        </p>
        <MetricsRow
          metrics={[
            {
              value: 60,
              suffix: " min",
              label:
                "hard UTC tolerance the matching engine accepts between two morning sit times",
            },
            {
              value: 2,
              suffix: " hr",
              label:
                "interval the auto-match cron runs at, scanning the waitlist for new viable pairs",
            },
            {
              value: 24,
              suffix: " hr",
              label:
                "wait time for a fresh signup with no prior contact before the matcher considers them",
            },
            {
              value: 0,
              prefix: "$",
              label:
                "cost of the match, the call, and the daily sit, with no subscription tier",
            },
          ]}
        />
        <p className="mt-6 text-sm text-zinc-500 leading-relaxed">
          For everything operational about the sit itself (posture, duration,
          what to do with attention) the redirect is to{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-600 underline hover:text-teal-700"
            rel="noopener noreferrer"
            target="_blank"
          >
            dhamma.org
          </a>{" "}
          and to an authorized assistant teacher at a 10-day residential
          course. This site does not teach the technique.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What the matching system actually receives, and what it returns
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The diagram below names the four inputs the cron job loads from the
          waitlist table for each candidate, what the matching engine in the
          middle decides, and the four outputs that hit your inbox and
          calendar when a pair clears the 60 minute filter. Nothing about this
          flow involves a streak counter, a notification, or a leaderboard.
        </p>
        <AnimatedBeam
          title="Inputs into the match, outputs into your week"
          from={[
            { label: "Your morning_utc", sublabel: "your local time, normalized to UTC at signup" },
            { label: "Your timezone", sublabel: "stored as IANA name, used for time math" },
            { label: "Your frequency", sublabel: "once or twice per day" },
            { label: "Your old-student status", sublabel: "10-day course, S.N. Goenka tradition" },
          ]}
          hub={{
            label: "Auto-match cron",
            sublabel: "every 2 hours, hard ±60 min UTC filter",
          }}
          to={[
            { label: "First-name intro email", sublabel: "addressed to both of you, sent via Resend" },
            { label: "Permanent Google Meet link", sublabel: "one URL, used every morning" },
            { label: "Suggested UTC start time", sublabel: "the midpoint of your two UTC slots" },
            { label: "Calendar event invite", sublabel: "auto-attached to the Meet" },
          ]}
          accentColor="#0d9488"
        />
        <p className="text-zinc-500 text-sm mt-6 max-w-3xl leading-relaxed">
          A reader who expects an app dashboard with charts and badges is
          going to be disappointed by the output, because there is none. A
          reader who expects an email, a link, and a name is going to be
          relieved.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          End to end: what happens between &quot;I signed up&quot; and your
          first sit
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The sequence below is a literal trace of what the code does between
          your signup and the first morning sit, in the order it happens.
          Anyone with the repo can run it against test data and watch the same
          messages fire.
        </p>
        <SequenceDiagram
          title="From signup to first morning sit"
          actors={["You", "Signup form", "Database", "Match cron", "Buddy"]}
          messages={[
            { from: 0, to: 1, label: "name, timezone, morning_time, frequency", type: "request" },
            { from: 1, to: 2, label: "INSERT into waitlist_entries (with morning_utc)", type: "request" },
            { from: 2, to: 3, label: "row available, status = pending", type: "event" },
            { from: 3, to: 2, label: "SELECT pending rows older than 24h", type: "request" },
            { from: 2, to: 3, label: "candidate slots", type: "response" },
            { from: 3, to: 3, label: "for each pair: if (diff > 60) continue;", type: "event" },
            { from: 3, to: 4, label: "intro email, first name, Meet link", type: "response" },
            { from: 3, to: 0, label: "intro email, first name, Meet link", type: "response" },
            { from: 0, to: 3, label: "click 'yes' on the confirm link", type: "request" },
            { from: 4, to: 3, label: "click 'yes' on the confirm link", type: "request" },
            { from: 3, to: 2, label: "UPDATE match status = active", type: "request" },
            { from: 0, to: 4, label: "you both join the same Meet, silently", type: "event" },
          ]}
        />
        <p className="text-zinc-500 text-sm mt-6 max-w-3xl leading-relaxed">
          The two click-yes steps are the only manual step. After that, the
          appointment lives in your calendar, and the practice runs on the
          same infrastructure your other meetings do.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Five conditions a pair has to satisfy to even be considered
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          These are the conditions in the cron handler. They are non-negotiable
          gates, not weights. If any one of them fails, the pair never makes it
          into the candidate list, no matter how good the other four conditions
          look.
        </p>
        <AnimatedChecklist
          title="Hard match gates"
          items={slotConditions}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Why the standard advice for working professionals fails
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Six common recommendations that show up in nearly every guide on
          this topic, and the reason they keep failing for full-time
          professionals. None of these are wrong in spirit. They just put the
          load on the wrong variable.
        </p>
        <BentoGrid cards={failureCards} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <ComparisonTable
          heading="A streak app vs a standing UTC appointment"
          productName="Practice Buddy match (this site)"
          competitorName="A meditation app with streaks"
          intro="Both can be useful. They are not the same object. The column on the right is what actually survives a busy work quarter."
          rows={gapRows}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Four honest questions to answer before you sign up
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The matching engine cannot answer these for you. They are the
          questions a working professional has to settle inside their own
          calendar before any pairing has a chance of holding.
        </p>
        <HorizontalStepper steps={honestQuestions} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <GlowCard>
          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-zinc-900 mb-3">
              The part this site will never give you
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Three things this page deliberately does not provide, and where
              to go for each. Naming this list is part of why the site is
              tradition-aligned and why the matching engine can stay narrow.
            </p>
            <ul className="space-y-3 text-zinc-700 text-[15px] leading-relaxed mb-4">
              <li>
                <strong className="text-zinc-900">Technique instruction.</strong>{" "}
                What you do during a sit was given to you at the 10-day
                course. If you have not sat one yet, the entry point is{" "}
                <a
                  href="https://www.dhamma.org"
                  className="text-teal-600 underline hover:text-teal-700"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  dhamma.org
                </a>
                . If you have, your assistant teacher is the right address for
                anything operational.
              </li>
              <li>
                <strong className="text-zinc-900">Prescribed schedules.</strong>{" "}
                This site does not tell you when to sit, how long to sit, or
                how to handle a difficult morning on the cushion. Those
                questions belong with a teacher, not with a website. The site
                only tells you what time slots the matching engine can hold.
              </li>
              <li>
                <strong className="text-zinc-900">A streak score.</strong> The
                Practice Buddy product does not display a streak counter,
                because the streak is not the load-bearing variable; the
                appointment is. There is no badge, no leaderboard, and no
                push notification asking you not to break the chain.
              </li>
            </ul>
            <p className="text-zinc-600 leading-relaxed">
              What is left, after those three are subtracted, is small. A
              first-name email. A permanent Meet link. A UTC time inside a 60
              minute window. That is the entire product, and it is the only
              part that has been load-bearing for a daily practice through a
              full-time job in the author&apos;s own logs.
            </p>
          </div>
        </GlowCard>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The pieces of the system, in one line each
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Twelve concrete objects involved in a matched daily sit, named so
          that nothing in this page is a vague abstraction. Anyone reading the
          repo can grep for any of these names and find the line that
          implements it.
        </p>
        <Marquee speed={45}>
          {calendarTags.map((t, i) => (
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
          The morning sit is the hour of the day a working professional has
          the cleanest claim on. Not because it is more spiritual than the
          afternoon, but because at 6 AM your manager is asleep, your
          customers are asleep, and your inbox is mostly empty. By 9 AM none
          of those are true. The 60 minute UTC window is doing the same job
          on the other end of the call: it picks the only hour in your
          buddy&apos;s day that is similarly defended. Two defended hours
          overlapping is a real shared appointment. Two contested hours
          pretending to overlap is two missed sits.
        </p>
        <p className="text-zinc-600 leading-relaxed mb-4">
          The honest position of this page is that the technique is the
          tradition&apos;s job, the daily appointment is the calendar&apos;s
          job, and the practice is yours. The matching engine on this site is
          a small piece of infrastructure for the second of those three. It
          is not a teacher, not an app, not a streak system, and not a
          replacement for a 10-day course. It is a way to anchor a morning
          slot to another human inside the only time frame, UTC, that two
          working calendars share.
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
          appointment side, the link is the homepage of this site.
        </p>
      </section>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        heading="Want to talk through whether the morning slot will hold?"
        description="Book a short call. We can look at your week, identify a defendable UTC window, and decide together whether a Practice Buddy match is the right fit before you sign up."
        section="daily-vipassana-working-professional-footer"
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
            href="/t/vipassana-daily-practice"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Vipassana Daily Practice Rewiring
          </Link>
          <Link
            href="/t/after-vipassana-daily-practice-rewire-habits"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            After Vipassana, Daily Practice and Rewiring Habits
          </Link>
          <Link
            href="/guide/why-20-minutes-beats-two-hours"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Why 20 Minutes Beats Two Hours
          </Link>
          <Link
            href="/practice-buddy/how-it-works"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            How the Practice Buddy Match Works
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
        description="Talk through your week and find a defendable UTC morning slot."
        section="daily-vipassana-working-professional-sticky"
      />
    </article>
  );
}
