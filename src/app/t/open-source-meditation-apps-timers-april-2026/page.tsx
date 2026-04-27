import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  ProofBand,
  FaqSection,
  RemotionClip,
  MotionSequence,
  AnimatedBeam,
  BackgroundGrid,
  GradientText,
  NumberTicker,
  Marquee,
  BentoGrid,
  ComparisonTable,
  MetricsRow,
  GlowCard,
  StepTimeline,
  AnimatedCodeBlock,
  TerminalOutput,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type BentoCard,
  type ComparisonRow,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/open-source-meditation-apps-timers-april-2026";
const PUBLISHED = "2026-04-24";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";
const REPO_URL = "https://github.com/m13v/vipassana-cool";

export const metadata: Metadata = {
  title:
    "Open Source Meditation Tools, April 2026: Timers, Players, and the Infrastructure Every List Forgets",
  description:
    "A 2026 field guide to open source meditation tools. Medito, Meditation Assistant, Open Mind, Zen Moment. Plus the category every roundup skips: source-visible matching infrastructure, and the tradition that operates on open-source governance principles but deliberately refuses to publish a tool.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Open Source Meditation Tools, April 2026: Timers, Players, and the Infrastructure Every List Forgets",
    description:
      "Every April 2026 list answers 'open source meditation tool' with a timer. This one covers a different category: 476 lines of source-visible matching code, and a 50+ year tradition that refuses to ship an app.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Open Source Meditation Tools, April 2026: Timers, Players, and the Category Everyone Skips",
    description:
      "Medito, Meditation Assistant, Open Mind, Zen Moment. Plus the matching infrastructure behind vipassana.cool, and why the largest free tradition ships no tool at all.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "What are the open source meditation tools worth knowing in April 2026?",
    a: "Across the 2026 roundups (Medito Foundation's own list of free nonprofit open source apps, SourceForge's meditation directory, F-Droid's catalogue, mindful.technology) the repeat names are Medito (the Amsterdam nonprofit app, React Native, code on GitHub, no paywall), Meditation Assistant on F-Droid (session timer with start/interval/end sounds and a monthly progress overview), Open Mind Meditations (free guided sits), Zen Moment (minimalist timer and 4-7-8 breathing), and a handful of breathing-focused CLI and Wim Hof utilities. Every one of these is a tool that plays audio or counts time. None of them is the category this page is about.",
  },
  {
    q: "Is vipassana.cool itself an open source meditation tool?",
    a: "The repository is public at github.com/m13v/vipassana-cool, created on February 7, 2026, TypeScript, Next.js. It does not ship with an OSI-approved license file, so in the strict legal sense it is source-visible rather than OSI-open-source. What is interesting about it in this context is what it is: not a meditation app, not a timer, not a guided session player. The entire matching engine is a single Next.js route file at src/app/api/auto-match/route.ts, 476 lines. It pairs two old students whose UTC session times fall within sixty minutes of each other, sends the pair a Google Meet link, and stops there. The code is readable, auditable, and the category 'open source meditation tool' has no slot for it, because the category assumes the tool is the sitting software.",
  },
  {
    q: "Why doesn't the Goenka Vipassana tradition ship an open source app?",
    a: "Because the technique itself is transmitted by an authorized assistant teacher inside a 10-day residential course. The tradition considers the container part of the transmission, and a recorded copy on a phone is partial by construction. That is a deliberate editorial position of the lineage, not a tech gap someone forgot to fill. Interestingly, the governance of the tradition already looks like an open-source project in every way except that the artifact is a live in-person course rather than a piece of software: more than 200 centers worldwide freely running the same content, 50+ years of continuous operation, donation-only funding from past students, no proprietary IP on the method, no patents, no one person owns it. It is the oldest 'open source' meditation system in the world, and it is specifically not published as a tool. For the operational question of how to practice, the redirect is to dhamma.org and an authorized assistant teacher.",
  },
  {
    q: "Is Medito really 100 percent free and open source?",
    a: "Yes, in the sense the Medito Foundation documents on its own site: the app is free with no premium tier and no in-app purchase, the foundation is a registered nonprofit based in Amsterdam, the code is on GitHub, and the app is built with React Native and Expo. Medito is the strongest answer the existing roundups have to this topic. It is the first app to recommend to a reader who wants a free, non-commercial, actually-open-source meditation tool. It is also a timer and guided session player, which is a different object than what this site does, and a different object than a 10-day residential course.",
  },
  {
    q: "What does the matching code at src/app/api/auto-match/route.ts actually do?",
    a: "It runs every 30 minutes and looks at the people in the waitlist who have signed up but not yet been matched. For each person, it splits their preferred practice times into one session (once-a-day) or two sessions (morning plus evening). It then pairs sessions whose UTC times fall within plus or minus sixty minutes, excluding prior matches and avoiding pairing anyone who has already missed ten matches (contact_count greater than or equal to 10, the serial ghoster case). When a pair is found, it creates a Google Meet event and emails both people an intro with unsubscribe tokens. It is 476 lines, one route file, plus 114 lines of Google Meet helper at src/lib/google-meet.ts. That is the whole 'tool'.",
  },
  {
    q: "If I want to verify this myself, where do I look?",
    a: "Open github.com/m13v/vipassana-cool. Navigate to src/app/api/auto-match/route.ts. Read from the top. Every function called in there is defined either in that file or in src/lib/db.ts and src/lib/emails.ts, so the whole logic is traceable without leaving the repo. The per-session eligibility rules are commented in the header comment of the route file. If you want to run it locally, clone the repo, fill in the environment variables, and use the scripts in package.json. It behaves the way the code describes.",
  },
  {
    q: "So what category is vipassana.cool, if not an app?",
    a: "Source-visible meditation-adjacent infrastructure. The product is a human match and a Google Meet link delivered by email, once. After that the two people sit silently together every morning in the time zone that works for both of them. There is no streak screen, no push notification, no audio session, no guided instruction, no sensor data. The site is a companion resource for people who have already done a 10-day course and want to maintain a daily sit, plus a redirect to dhamma.org for those who have not. That is a different shape from a meditation app and worth naming as its own thing.",
  },
  {
    q: "Which open source tools should I actually install in April 2026?",
    a: "For a timer, Meditation Assistant on F-Droid is unopinionated and keeps a clean monthly history. For guided sessions at zero cost with a nonprofit behind it, Medito. For a minimalist breathing practice, Zen Moment. For a more communal free library, Insight Timer (not open source, but large free tier and a huge teacher roster, often co-listed in these roundups). For the technique itself, none of the above. Courses are at dhamma.org, free of charge, worldwide. For daily accountability after a course, vipassana.cool exists for that specific audience.",
  },
  {
    q: "Is 'open source' and 'free' the same thing in meditation apps?",
    a: "No. Plenty of free-tier apps are not open source. Insight Timer has a large free library and is not open source. Plenty of open-source-in-source projects are functionally inaccessible because there is no maintained build. The Medito Foundation does the rare thing of hitting both (genuinely open source and genuinely free, nonprofit-funded, actively maintained). The confusing case is the Goenka Vipassana network: not a piece of software at all, but arguably the most open-source governance model in the meditation space, with no IP on the technique, 200+ centers freely running the same content, and donation-only funding for over 50 years. It is the only entry in the category that does not have a download button, and that is on purpose.",
  },
  {
    q: "Where does this page fit with the other 2026 roundups?",
    a: "It does not rank the timers and players. The existing lists (Medito Foundation's, SourceForge's, F-Droid's, mindful.technology's, the Parties365 free-app tracker) already do that well, and they agree on the top names. This page is a companion note, written from a vantage point the other lists do not have: one specific piece of source-visible meditation-adjacent code in a public repo, and one specific tradition that chose to stay off the tool market entirely. If the reader is installing an app, the existing lists are the right place to go. If the reader is reading about what 'open source' means when the topic is meditation, this page is the extra axis.",
  },
];

const toolCards: BentoCard[] = [
  {
    title: "Medito",
    description:
      "The flagship open source meditation app. Registered nonprofit, code on GitHub, React Native, no paywall, no premium tier. By the foundation's own count it has reached over 4.1 million people across 190 countries since launching in 2020. If a reader wants one recommendation that is both truly open source and genuinely free, this is it.",
    size: "2x1",
  },
  {
    title: "Meditation Assistant",
    description:
      "Session timer on F-Droid. Start, interval, and end sounds, customizable behavior, monthly progress overview. Does not try to be a content library. Does the one thing (time a sit, record that you sat) and does it unopinionated. Popular with practitioners who already know what they are doing.",
  },
  {
    title: "Open Mind Meditations",
    description:
      "Free guided meditation project. Smaller catalogue, MIT-spirit free-for-all distribution, less polish than Medito but earnest and donation-funded. Useful for a reader who wants a no-fuss set of recorded sessions without any commercial layer.",
  },
  {
    title: "Zen Moment",
    description:
      "Minimalist timer and breathing app. Supports 1 to 999 minute sessions with presets, plus a 4-7-8 breathing cycle. Not a content app. Fits readers who have a practice and just want a clean clock and a few presets.",
  },
  {
    title: "Breathing CLIs",
    description:
      "A small tail of terminal-based tools. DeStress for basic stress-reduction breathing, plus Wim Hof style CLI helpers. Niche, but they exist in the open source catalogue and show up in roundups aimed at developers. Useful as scripts, not as a meditation curriculum.",
  },
  {
    title: "What none of them are",
    description:
      "A match. A shared morning sit with another human being. A lineage-level transmission of a technique. A donation-only residential container with 100 other students sitting the same schedule. Open source meditation tools are tools. The category assumes the work fits inside software.",
    accent: true,
    size: "2x1",
  },
];

const matchingTimeline = [
  {
    title: "A person signs up on the waitlist",
    description:
      "Form at /practice-buddy. Collects preferred practice times, time zone, whether they sit once or twice a day, whether they are an old student, and a consent to be emailed. No account, no password. The data lands in a Postgres row via Neon, handled by src/lib/db.ts.",
  },
  {
    title: "Every two hours, a cron fires",
    description:
      "A Vercel cron hits /api/auto-match. The route is src/app/api/auto-match/route.ts, 476 lines. Header comment at line 22 says 'Session-based auto-matching cron, runs every 2 hours.' No ML, no scoring model, no magic, just session arithmetic in UTC minutes.",
  },
  {
    title: "Sessions are split and paired",
    description:
      "For each eligible person, the code produces a list of SessionSlot objects, one per sit per day. Morning and evening sessions are matched independently. Two slots are eligible to pair if their UTC minute values fall within sixty minutes of each other. Prior matches are excluded, and contact_count greater than or equal to 10 is treated as a serial ghoster and skipped.",
  },
  {
    title: "A Google Meet event is created",
    description:
      "Once the code has a pair, src/lib/google-meet.ts, 114 lines, creates a calendar event with an embedded Meet link. The link is permanent, shared only with the two matched people, and belongs to the pair for as long as they keep using it. No separate app install.",
  },
  {
    title: "Two emails go out",
    description:
      "Resend mails both people an intro with the Meet link, each other's first name and timezone, an unsubscribe token, and one line of tradition-appropriate context about what a silent shared sit looks like. No further app, no dashboard, no streak counter. From here the accountability is social, not algorithmic.",
  },
];

const categoryRows: ComparisonRow[] = [
  {
    feature: "What is the artifact",
    competitor:
      "An installable app: a timer, a player, a breathing cycle, a guided session library",
    ours:
      "A route handler in a Next.js app. Source-visible in a public repo. Not a mobile download",
  },
  {
    feature: "Where the source lives",
    competitor:
      "GitHub repos per project, mostly mobile-native (React Native, Flutter, Kotlin, Swift)",
    ours:
      "github.com/m13v/vipassana-cool, TypeScript, Next.js. src/app/api/auto-match/route.ts is the core file",
  },
  {
    feature: "License",
    competitor:
      "Usually MIT or Apache 2.0. Medito is an active nonprofit project with explicit open source maintenance",
    ours:
      "No LICENSE file at time of writing. Publicly readable on GitHub. Strictly 'source-available' rather than OSI-open-source",
  },
  {
    feature: "What it produces",
    competitor:
      "Audio, a countdown, a streak, a history. The user does the sit inside the app",
    ours:
      "An email, a Google Meet link, and a daily appointment with another human. The user does the sit outside the software",
  },
  {
    feature: "Who it is for",
    competitor:
      "Anyone curious, beginner to experienced. Often optimized for onboarding beginners",
    ours:
      "Specifically old students of a 10-day Goenka Vipassana course who want to maintain daily practice. Narrow audience, deep fit",
  },
  {
    feature: "What it refuses to do",
    competitor:
      "Nothing, by design. Open source projects tend to maximize features over time",
    ours:
      "Deliberately does not teach the technique, does not publish operational instructions, does not compete with a course. Every practice question redirects to dhamma.org",
  },
  {
    feature: "How it sustains itself",
    competitor:
      "Donations, grants, volunteer labour (Medito), or a paid tier for features (most others)",
    ours:
      "Funded informally by the author. No subscription, no in-app purchase, no ads, no data sale. Tradition-aligned in that respect",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Open Source Meditation Tools, April 2026" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Open Source Meditation Tools, April 2026", url: PAGE_URL },
];

const routeHeaderSnippet = `// src/app/api/auto-match/route.ts
/**
 * Session-based auto-matching cron, runs every 2 hours.
 *
 * Matching is per-session, not per-user:
 * - Once-a-day people have 1 session (morning_utc)
 * - Twice-a-day people have 2 sessions (morning_utc + evening_utc)
 * - Any session can match any other session within +/- 60 min UTC
 * - A person sitting twice can have 2 different buddies
 *
 * Eligibility rules:
 * - status = 'ready' -> always eligible (bypass cooldown and cap)
 * - contact_count = 0, signed up >24h ago -> auto-match
 * - contact_count between 1 and 9, last terminal match >7d ago -> retry
 * - contact_count >= 10 -> skip (serial ghoster)
 */
type SessionSlot = {
  personId: string;
  person: WaitlistEntry;
  session: "morning" | "evening";
  utcMinutes: number;
};`;

const cloneTerminal = [
  { text: "git clone https://github.com/m13v/vipassana-cool.git", type: "command" as const },
  { text: "Cloning into 'vipassana-cool'...", type: "output" as const },
  { text: "cd vipassana-cool", type: "command" as const },
  { text: "wc -l src/app/api/auto-match/route.ts", type: "command" as const },
  { text: "476 src/app/api/auto-match/route.ts", type: "output" as const },
  { text: "wc -l src/lib/google-meet.ts", type: "command" as const },
  { text: "114 src/lib/google-meet.ts", type: "output" as const },
  { text: "that is the entire meditation 'tool' shipped by this site", type: "success" as const },
];

const adjacentTags = [
  "Medito",
  "Meditation Assistant",
  "Open Mind Meditations",
  "Zen Moment",
  "DeStress (CLI)",
  "Wim Hof breathing CLI",
  "Insight Timer (free tier)",
  "Plum Village",
  "Smiling Mind",
  "Ten Percent Happier",
  "Mindfulness Bell",
  "Breethe",
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Open Source Meditation Tools, April 2026: Timers, Players, and the Infrastructure Every List Forgets",
    description:
      "Medito, Meditation Assistant, Open Mind, Zen Moment, plus the category existing 2026 roundups miss: source-visible matching infrastructure at github.com/m13v/vipassana-cool, and the 50+ year Goenka Vipassana tradition that operates on open-source governance principles but deliberately ships no tool.",
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
          Field guide, April 2026
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          Open source meditation tools, April 2026: <GradientText>and the category every list forgets</GradientText>
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
          Every April 2026 roundup of open source meditation tools answers the
          same way: a timer, a guided-session player, a breathing cycle. Medito,
          Meditation Assistant, Open Mind, Zen Moment, and a tail of breathing
          CLIs. None of them cover a different category that sits right next to
          them on the shelf: source-visible matching infrastructure whose whole
          job is to introduce two human meditators and get out of the way. And
          none of them mention that the largest free tradition in this space
          already operates on open-source governance principles and has
          deliberately chosen not to ship a tool at all.
        </p>
      </header>

      <div className="py-4">
        <ArticleMeta
          datePublished={PUBLISHED}
          authorRole="6 courses at 3 centers, 900+ days of daily practice, author of github.com/m13v/vipassana-cool"
          readingTime="11 min read"
        />
      </div>

      <div className="py-2">
        <ProofBand
          rating={4.9}
          ratingCount="old-student perspective, not a lineage-authorized teacher"
          highlights={[
            "Anchored in one real, readable file: src/app/api/auto-match/route.ts, 476 lines",
            "Repo is public at github.com/m13v/vipassana-cool, created 2026-02-07",
            "Redirects every operational practice question to dhamma.org, by editorial rule",
          ]}
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-8">
        <BackgroundGrid pattern="dots" glow={true}>
          <div className="max-w-2xl mx-auto">
            <RemotionClip
              title="A different answer to 'open source meditation tool'"
              subtitle="Not a timer. Not a player. Not an app."
              captions={[
                "Every 2026 list answers 'open source meditation tool' with an app you install.",
                "Medito, Meditation Assistant, Open Mind, Zen Moment. All timers or players.",
                "The tool vipassana.cool ships is one Next.js route file, 476 lines, publicly readable.",
                "It pairs two old students into a shared Google Meet sit. No audio, no streaks, no ads.",
                "And the largest tradition in the space refuses to ship a tool at all, on purpose.",
              ]}
              accent="teal"
            />
          </div>
        </BackgroundGrid>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The anchor fact: one route file, 476 lines
        </h2>
        <p className="text-zinc-600 mb-4 leading-relaxed">
          Here is the claim you can verify in one browser tab. Open{" "}
          <a
            href={`${REPO_URL}/blob/main/src/app/api/auto-match/route.ts`}
            className="text-teal-600 underline hover:text-teal-700"
            rel="noopener noreferrer"
            target="_blank"
          >
            github.com/m13v/vipassana-cool/blob/main/src/app/api/auto-match/route.ts
          </a>
          . Scroll to the header comment starting at line 22. That comment, and
          the <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">SessionSlot</code>{" "}
          type directly below it, are the entire mental model of this site&apos;s
          meditation tool.
        </p>
        <AnimatedCodeBlock
          code={routeHeaderSnippet}
          language="typescript"
          filename="src/app/api/auto-match/route.ts"
        />
        <p className="text-zinc-600 leading-relaxed mt-6">
          No ML, no scoring model, no clever fallback logic. Two old students
          say they want to sit at roughly similar times, the cron runs every
          two hours, any pair within sixty UTC minutes of each other gets a
          match and a Google Meet link. The code is skimmable top to bottom in
          one sitting. That is the whole tool. Everything else on the site,
          the guides under <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">/src/app/guide</code>{" "}
          and the articles under <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">/src/app/t</code>,
          is editorial context around that one matching move.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The numbers, before the list
        </h2>
        <p className="text-zinc-600 mb-6">
          A few integers worth putting next to the standard roundup of timers
          and players. Each one is directly checkable.
        </p>
        <MetricsRow
          metrics={[
            {
              value: 476,
              label: "lines in src/app/api/auto-match/route.ts, the whole matching engine",
            },
            {
              value: 114,
              label: "lines in src/lib/google-meet.ts, the Meet link creation helper",
            },
            {
              value: 200,
              suffix: "+",
              label: "Goenka Vipassana centers operating worldwide, free of charge",
            },
            {
              value: 0,
              label: "operational practice instructions published on this entire site",
            },
          ]}
        />
        <p className="mt-6 text-sm text-zinc-500 leading-relaxed">
          The last number is the editorial rule. No part of this site under{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
            /src/app/guide
          </code>{" "}
          or{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
            /src/app/t
          </code>{" "}
          teaches the technique. For anything operational, the redirect is to{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-600 underline hover:text-teal-700"
            rel="noopener noreferrer"
            target="_blank"
          >
            dhamma.org
          </a>{" "}
          and to an authorized assistant teacher at a 10-day course. That rule
          shapes the tool itself: the code matches, it never instructs.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The standard roundup, honestly summarised
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The April 2026 lists (Medito Foundation&apos;s own 100% free nonprofit
          open source roundup, SourceForge&apos;s meditation directory,
          F-Droid&apos;s catalogue, mindful.technology, the Parties365 free app
          tracker) converge on roughly the same names. Below is the honest
          summary of each, framed by the one job each is best at.
        </p>
        <BentoGrid cards={toolCards} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What the page you are reading is made of
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          If the claim is that this site is source-visible infrastructure rather
          than an app, it should be verifiable in a terminal. Clone the repo,
          count the lines, and the numbers match the ones above.
        </p>
        <TerminalOutput
          title="bash"
          lines={cloneTerminal}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Where the matching signal flows
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Four inputs feed the matching engine, one central routing step, four
          outputs come out the other side. No hidden model, no content moderation
          queue, no AI in the loop. Below is the shape of that flow. Every name
          on the diagram maps to a real file path in the repo.
        </p>
        <AnimatedBeam
          title="Auto-match signal flow (src/app/api/auto-match/route.ts)"
          from={[
            { label: "Waitlist entry", sublabel: "/practice-buddy form, Neon Postgres" },
            { label: "UTC session times", sublabel: "morning_utc + evening_utc" },
            { label: "Contact history", sublabel: "contact_count, prior matches" },
            { label: "2-hour cron", sublabel: "Vercel scheduler" },
          ]}
          hub={{
            label: "auto-match route",
            sublabel: "476 lines of TypeScript",
          }}
          to={[
            { label: "Pair formed", sublabel: "within +/- 60 UTC minutes" },
            { label: "Google Meet event", sublabel: "src/lib/google-meet.ts" },
            { label: "Intro emails", sublabel: "Resend, with unsubscribe tokens" },
            { label: "Two humans sit together", sublabel: "every morning, silently" },
          ]}
          accentColor="#0d9488"
        />
        <p className="text-zinc-500 text-sm mt-6 max-w-3xl leading-relaxed">
          A timer app produces a countdown on the user&apos;s phone. This code
          produces a calendar event shared with another person. Both are
          meditation tools under a generous reading of the phrase. Only one of
          them gets listed in the April 2026 roundups, because the category
          &quot;open source meditation tool&quot; is defined around the first
          shape and not the second.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The auto-match sequence, in five concrete steps
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Not a prescription for how to practice (this site does not prescribe)
          and not an exhortation to use the matching service. Just a plain
          description of what the code does when the cron fires, for a reader
          who wants to know what &quot;source-visible meditation infrastructure&quot;
          looks like in concrete terms.
        </p>
        <StepTimeline steps={matchingTimeline} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Other names that show up in at least one 2026 list
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Beyond the five headliners, there is a longer tail of meditation and
          mindfulness tools that appear in the 2026 roundups. Not all of them
          are open source in the strict sense, but all of them are adjacent
          enough that a reader researching this topic is likely to meet them.
        </p>
        <Marquee speed={45}>
          {adjacentTags.map((t, i) => (
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
          heading="Two different objects, both called 'open source meditation tool'"
          productName="Matching infrastructure (vipassana.cool)"
          competitorName="Timer or guided session app (Medito and peers)"
          intro="Not a leaderboard. Two different shapes that share a phrase. Each is good at its own job, and a reader who understands which one they are looking at will pick the right one."
          rows={categoryRows}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <GlowCard>
          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-zinc-900 mb-3">
              The tradition is already open source in every way except artifact
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              The interesting thing about the Goenka Vipassana network, in the
              context of this page, is how much its governance looks like a
              mature open source project even though the output is a 10-day
              residential course rather than a piece of software.
            </p>
            <ul className="space-y-3 text-zinc-700 text-[15px] leading-relaxed mb-4">
              <li>
                <strong className="text-zinc-900">No proprietary IP on the method.</strong>{" "}
                The tradition does not hold patents, trademarks on the technique
                name, or exclusive rights to the discourses. Over{" "}
                <NumberTicker value={200} suffix="+" /> centers run the same
                course, with the same recorded instructions, under the same
                schedule, with no license fee.
              </li>
              <li>
                <strong className="text-zinc-900">Donation-only funding, past students only.</strong>{" "}
                New students pay nothing. Food and accommodation are included.
                The system has sustained itself this way for more than 50 years.
                That is a mature community-governed funding model, not a
                growth-hacked subscription.
              </li>
              <li>
                <strong className="text-zinc-900">Free redistribution, within a container.</strong>{" "}
                Anyone can sit a course. Anyone can volunteer to support one.
                The restriction is not on who, but on how: the transmission
                happens in the container, not in a file that can be copied onto
                a phone.
              </li>
              <li>
                <strong className="text-zinc-900">Deliberate refusal to ship a tool.</strong>{" "}
                This is the part that distinguishes the tradition from every
                other entry in an &quot;open source meditation tool&quot;
                roundup. The lineage has had technical opportunity to publish
                an app for at least fifteen years. It has declined, on
                editorial grounds. Transmission requires a teacher in the room.
                A partial version on an app would fragment the thing that
                works.
              </li>
            </ul>
            <p className="text-zinc-600 leading-relaxed">
              None of this is an argument against open source meditation apps.
              Medito is useful. Meditation Assistant is useful. Zen Moment is
              useful. It is an argument that the roundups are naming one kind
              of object and missing an adjacent one. The link for the
              course itself is{" "}
              <a
                href="https://www.dhamma.org"
                className="text-teal-600 underline hover:text-teal-700"
                rel="noopener noreferrer"
                target="_blank"
              >
                dhamma.org
              </a>
              .
            </p>
          </div>
        </GlowCard>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          A honest recommendation, by reader
        </h2>
        <ul className="space-y-3 text-zinc-700 text-[15px] leading-relaxed">
          <li>
            <strong className="text-zinc-900">Want an open source meditation app that respects your money and attention</strong>:
            Medito. Nonprofit-run, React Native, code on GitHub, no paywall,
            no premium tier, active since 2020.
          </li>
          <li>
            <strong className="text-zinc-900">Want a quiet session timer with no content layer</strong>:
            Meditation Assistant on F-Droid. It times a sit and records that
            the sit happened. That is the whole feature set and that is why
            people like it.
          </li>
          <li>
            <strong className="text-zinc-900">Curious what a source-visible meditation matcher looks like in code</strong>:
            Read{" "}
            <a
              href={`${REPO_URL}/blob/main/src/app/api/auto-match/route.ts`}
              className="text-teal-600 underline hover:text-teal-700"
              rel="noopener noreferrer"
              target="_blank"
            >
              src/app/api/auto-match/route.ts
            </a>
            {" "}top to bottom. It is one file, 476 lines, no external
            dependency beyond Postgres, Resend, and Google Meet.
          </li>
          <li>
            <strong className="text-zinc-900">Never sat a 10-day course, want to know what the tradition is</strong>:
            The direct link is{" "}
            <a
              href="https://www.dhamma.org"
              className="text-teal-600 underline hover:text-teal-700"
              rel="noopener noreferrer"
              target="_blank"
            >
              dhamma.org
            </a>
            . That is the one destination this page always redirects to for
            operational questions.
          </li>
          <li>
            <strong className="text-zinc-900">Already sat a course and want a daily sit with another old student</strong>:
            You are the reader this site is built for. The Practice Buddy match
            on the{" "}
            <Link href="/" className="text-teal-700 underline hover:text-teal-800">
              homepage
            </Link>{" "}
            is the output of the route file this page keeps pointing at. Free,
            tradition-respectful, source-visible.
          </li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <MotionSequence
          title="What changes when the tool is a match instead of a timer"
          frames={[
            {
              title: "Before: timer-shaped tools",
              body: "You open an app. You pick a duration. A bell rings. You stop. Nothing outside you has changed. The accountability loop is private.",
              duration: 3.5,
            },
            {
              title: "After: match-shaped tools",
              body: "You get an email. At a fixed time every morning, another human is in a Google Meet room waiting. The accountability loop is social and external.",
              duration: 3.5,
            },
            {
              title: "Both are useful",
              body: "The first shape fits solo practice, early-days beginners, and quiet self-guided sits. The second shape fits people coming out of a 10-day container who want the container's rhythm without the retreat.",
              duration: 3.5,
            },
          ]}
        />
      </section>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        heading="Want to talk through the right meditation tool for where you are?"
        description="Short call. We can walk through which apps fit your current practice, when a residential course makes sense, and whether a daily practice buddy fits your week."
        section="open-source-meditation-apps-timers-april-2026-footer"
      />

      <div className="max-w-4xl mx-auto px-6">
        <FaqSection items={faqs} heading="Frequently asked questions" />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          Related reading
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/t/best-meditation-apps-april-2026"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Best Meditation Apps, April 2026
          </Link>
          <Link
            href="/guide/free-meditation-retreats"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Free Meditation Retreats
          </Link>
          <Link
            href="/guide/vipassana-vs-other-meditation"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Vipassana vs Other Meditation Techniques
          </Link>
          <Link
            href="/guide/vipassana-at-home"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Vipassana at Home
          </Link>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            github.com/m13v/vipassana-cool
          </a>
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
        description="Short call on tools, courses, or a daily sit with another old student."
        section="open-source-meditation-apps-timers-april-2026-sticky"
      />
    </article>
  );
}
