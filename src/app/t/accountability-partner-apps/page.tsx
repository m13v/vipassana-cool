import type { Metadata } from "next";
import Link from "next/link";
import { PageComments } from "@/components/comments";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { ArticleSchema } from "@/components/article-schema";
import { ArticleHeader } from "@/components/article-header";
import { FaqSchema } from "@/components/faq-schema";
import { PracticeBuddyCta } from "@/components/practice-buddy-cta";
import {
  GradientWord,
  NumberTicker,
  ConceptReveal,
  PipelineBeam,
  AppMarquee,
  MatchTimeline,
  AppVsNotApp,
  AppComparison,
  MechanicsBento,
} from "./apps-client";

const PAGE_URL = "https://vipassana.cool/t/accountability-partner-apps";
const PUBLISHED = "2026-04-18";

export const metadata: Metadata = {
  title:
    "Accountability Partner Apps: The One That Ships No App, Built for Meditators",
  description:
    "Most accountability partner apps sell streaks, push notifications, and chat UIs. Practice Buddy pairs meditators with a 60-minute UTC hard filter at the session level, then delivers a permanent Google Meet link by email. No download. Full write-up of how the matcher actually runs.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Accountability Partner Apps: The One That Ships No App",
    description:
      "Session-level matching, 60-minute UTC window, permanent Google Meet URL, zero downloads. The accountability partner that is not an app.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accountability Partner Apps: The One That Ships No App",
    description:
      "Practice Buddy matches meditators by UTC session slot, sends an email, and hands you a Google Meet URL. Nothing to install.",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question:
      "What is an accountability partner app, and why would I skip the app part?",
    answer:
      "An accountability partner app is a product that pairs you with another person so you can hold each other to a commitment (workouts, study, meditation, startup work). The classic ones (StickK, Beeminder, Focusmate, Yoke, HabitShare, Coach.me, MyFitnessPal buddies) all ship a mobile or web app with streak counters, push notifications, in-app chat, and sometimes money on the line. The reason to skip the app part is specific to the kind of accountability you need. If the thing you are trying to do every day is already screen-based (language practice, reading, startup work), in-app features help. If the thing you are trying to do every day is a 60-minute silent meditation, another app icon on your phone is drag, not support. The product on this page, Practice Buddy, is designed for the second case: a pair of meditators, a permanent Google Meet link, an email, and nothing else to install.",
  },
  {
    question:
      "What exactly does Practice Buddy do if it is not an app?",
    answer:
      "One signup form on the website. A human review (the operator, me). A match based on a 60-minute UTC window applied at the session level, not the person level. An intro email delivered with both of your names, cities, practice details, a suggested meeting time in both local timezones, and a permanent Google Meet URL. You open that URL at your sit time every day, one of you plays the Goenka recording and shares screen plus audio, and you meditate together. After the sit you talk or you do not. The link does not change. There is no app, no dashboard, no streak counter, no push notification. The only thing the site tracks is whether the tracked /meet/<token> redirect was clicked, which is how a human (again, me) can tell if a match is active.",
  },
  {
    question: "What is the 60-minute UTC filter and why is it a hard limit?",
    answer:
      "The matching cron, in /src/app/api/auto-match/route.ts, builds a SessionSlot array where each person contributes one slot per sit (a morning slot for once-a-day, two slots if they signed up for twice a day). Every slot carries a UTC minute count derived from the person's local sit time and timezone, recomputed fresh each run so daylight-savings transitions do not corrupt matches. The pairwise check is literally 'if (diff > 60) continue;' where diff is the shorter of the two distances around a 1440-minute clock. The reason it is a hard limit and not a preference is that meditation accountability requires overlapping presence. A 90-minute gap means one person is always waiting in an empty room while the other's session runs past. Sixty minutes is roughly the longest gap where 'meet in the middle' still produces two sits that actually happen.",
  },
  {
    question: "Why match per session instead of per person?",
    answer:
      "Because a serious meditation practitioner often sits twice a day (morning plus evening), and the morning buddy does not need to be the evening buddy. In the code, a signup with frequency 'Twice a day' produces two slots: { personId, session: 'morning', utcMinutes } and { personId, session: 'evening', utcMinutes }. The greedy pairing loop consumes slots by the key `${personId}:${session}`, which means one user can end up with two different buddies at two different UTC windows. Every other accountability partner product treats a user as a single matchable unit. That forces a single compromise time. Treating the session as the unit lets you match a morning sitter in Berlin with a morning sitter in Delhi, and the same Berlin user's evening slot with a US East Coast user's morning slot, at the same time, without contradiction.",
  },
  {
    question: "Is Practice Buddy free and how does it stay free?",
    answer:
      "Yes, free. It follows the Vipassana dana tradition, the same economic model that runs every Goenka 10-day course. The operating cost is low for exactly the reason the product is built this way: no app store presence, no push notification vendor, no in-app chat provider, no real-time infrastructure. Email is cheap (one Resend workspace covers it), Google Meet is free for 1-on-1 calls with no time cap, and Neon Postgres for the waitlist and matches table costs almost nothing at this scale. The only variable cost is the operator's time, and that time is spent on reviewing signups and writing intro emails, not on shipping app features. Donations are welcome but not solicited.",
  },
  {
    question:
      "How does it compare to Focusmate, StickK, Beeminder, Yoke, or Coach.me?",
    answer:
      "Focusmate is closest in shape (1-on-1 peer sessions over video) but is built around 25/50/75 minute focused-work blocks booked on a shared calendar, not around daily meditation with a permanent link to the same partner. StickK and Beeminder use money-on-the-line with an optional referee, not a matched partner. Yoke is a workout-specific pair product with an app-first UX. Coach.me pairs you with a paid coach, not a peer. HabitShare is a streak-shared app between existing friends. Practice Buddy overlaps none of them exactly: it is peer-paired like Focusmate, recurring with the same partner like a gym buddy, and completely app-less like an email list. The trade-off is that it only serves meditators and specifically serves old students in the Goenka lineage (signup asks for course completion status and matches prioritize old-student pairs).",
  },
  {
    question:
      "What stops bots, ghosters, or people who signed up on a whim?",
    answer:
      "Three mechanisms, all in the cron. First, a 24-hour cooldown: a pending user is not eligible for auto-matching until they have been in the pool for more than a day, which is enough time for the operator to eyeball the signup and remove anything that looks automated. Second, a serial-ghoster cap: if a person has contact_count greater than or equal to 2 (meaning they have already ignored two confirmation emails), the cron silently excludes them from all future matches. They are not notified and not punished, they are just out of the pool. Third, a prior-pair block: a set of person pairs rebuilt each run prevents two people who have ever matched before (whether it worked or not) from being offered to each other a second time. The combination keeps the pool's signal-to-noise high without any algorithmic spam filter.",
  },
  {
    question:
      "What exactly does the permanent Google Meet URL give me that a normal accountability app does not?",
    answer:
      "A single URL that opens the same video room every day, forever. The URL is created through a server-side call to createMeetEvent (Google Workspace API) at the moment a match is confirmed, and it is written once into the meet_links table. Each person in the pair gets a per-user tracking token that redirects to the same shared URL through /meet/<token>, which logs a row into meet_clicks so the operator can tell whether your buddy opened the link this morning. You do not see that data in a dashboard (there is no dashboard) and you are not ranked on it. The benefit of the permanent URL is friction removal: you bookmark it once, you add it to your home screen as a web shortcut, and from that point forward the path from waking up to sitting with your buddy is two taps.",
  },
  {
    question:
      "Why do accountability partner apps have such bad retention, and does this approach actually fix it?",
    answer:
      "Meditation apps specifically have roughly a 4.7% 30-day retention rate (widely cited figure across the well-being category). The reason is that the thing being measured (daily meditation) is not improved by the thing the app is actually good at (delivering content, sending notifications, awarding streaks). Meta-analyses on habit formation consistently find that a specific accountability appointment with a named person pushes completion rates toward 95% versus around 10% when the goal is solo. The practical question is what delivery mechanism costs the least friction. An app asks you to open the app, see the notification, feel the streak, tap start. A Practice Buddy partnership asks you to join a link where a human is already waiting. That second thing is much harder to bail on at 5:58 AM, and the data on peer accountability backs it up.",
  },
  {
    question:
      "Is this approach generalizable outside meditation, or does it only work for Vipassana?",
    answer:
      "The specific build (permanent Google Meet URL, dana funding model, old-student priority, 60-minute UTC session slots) is tuned for Goenka-lineage meditators. The pattern generalizes. If you want daily peer accountability for any activity that does not benefit from screen-based content during the activity itself (morning runs, language conversation practice, writing sprints, journaling, cold exposure), the no-app approach works the same way. You need a form, a matching rule, a permanent video or audio room, and a human who cares enough to review signups. The product you do not need is another mobile app. The site you are reading this on treats Vipassana as the flagship case because that is the author's practice, but nothing in the architecture is meditation-specific except the question 'are you an old student of S.N. Goenka?' on the form.",
  },
];

const matcherSteps = [
  {
    title: "Pull the eligible pool",
    body: "A Postgres query grabs every row from waitlist_entries where status is 'pending' or 'ready' and unsubscribed is false, ordered so 'ready' people (already confirmed once before) jump to the front.",
    code: `SELECT id, name, email, timezone, city, frequency,
       session_duration, morning_time, morning_utc,
       evening_time, evening_utc, is_old_student,
       status, contact_count, pass_count, created_at,
       unsubscribed, unsubscribe_token
FROM waitlist_entries
WHERE status IN ('pending', 'ready')
  AND unsubscribed = false
ORDER BY CASE status WHEN 'ready' THEN 0 ELSE 1 END,
         created_at ASC;`,
  },
  {
    title: "Filter by eligibility rules",
    body: "Drop anyone with contact_count >= 2 (serial ghosters). Pending users with contact_count = 0 must have been in the pool more than 24 hours. Users on their second attempt must be 7+ days past their last expired match.",
  },
  {
    title: "Explode each user into SessionSlots",
    body: "A once-a-day user contributes one slot. A 'Twice a day' user contributes two. Local time is converted to UTC fresh on every run so DST changes do not produce stale UTC. This is the move that separates this matcher from every competitor.",
    code: `for (const p of eligible) {
  const morn = toUtcTime(p.morning_time, p.timezone);
  if (morn !== null) slots.push({
    personId: p.id, person: p,
    session: "morning", utcMinutes: toMin(morn),
  });
  if (p.frequency === "Twice a day") {
    const eve = toUtcTime(p.evening_time, p.timezone);
    if (eve !== null) slots.push({
      personId: p.id, person: p,
      session: "evening", utcMinutes: toMin(eve),
    });
  }
}`,
  },
  {
    title: "Generate viable pairs with the 60-minute UTC filter",
    body: "For every pair of slots from different people, compute the wrap-around shortest distance on a 24-hour clock. If it is greater than 60 minutes, the pair is dropped. Pairs already in the blockedPairs set (any prior matched pair) are dropped too.",
    code: `const diff = timeDiff(sa.utcMinutes, sb.utcMinutes);
if (diff > 60) continue;
if (blockedPairs.has([sa.personId, sb.personId].sort().join("|")))
  continue;`,
  },
  {
    title: "Sort by match quality",
    body: "Ready-status pairs win. Ties broken by both-old-student, then same session duration, then the smallest UTC gap. The sort guarantees the best possible first match per slot.",
    code: `allViable.sort((x, y) =>
  (y.readyScore - x.readyScore) ||
  (Number(y.bothOld) - Number(x.bothOld)) ||
  (Number(y.sessionMatch) - Number(x.sessionMatch)) ||
  (x.diff - y.diff),
);`,
  },
  {
    title: "Greedily consume slots, keyed by (personId, session)",
    body: "Walk the sorted list. For each pair, skip if either slot is already used. Used-slot tracking is per session, so a twice-a-day user holding a morning match can still receive an evening match in the same run.",
    code: `const usedSlots = new Set<string>();
for (const p of allViable) {
  const keyA = \`\${p.slotA.personId}:\${p.slotA.session}\`;
  const keyB = \`\${p.slotB.personId}:\${p.slotB.session}\`;
  if (usedSlots.has(keyA) || usedSlots.has(keyB)) continue;
  pairs.push(p);
  usedSlots.add(keyA);
  usedSlots.add(keyB);
}`,
  },
  {
    title: "Create the match, provision the Meet, send the email",
    body: "If both people are 'ready', a Google Calendar event is created at the midpoint UTC time via createMeetEvent(), the permanent Meet URL is written twice into meet_links (one row per person with a unique tracking token), and both users receive the intro email. Reply-all is pinned in the subject because the email thread IS the app.",
  },
];

const appNames = [
  "Focusmate",
  "StickK",
  "Beeminder",
  "Yoke",
  "Coach.me",
  "HabitShare",
  "Productive",
  "Strides",
  "Way of Life",
  "MyFitnessPal buddies",
  "Sober Grid",
  "Fabulous",
  "Habitica",
  "Streaks",
  "Finch",
  "Supporti",
  "Pair",
  "Bond",
];

const comparisonRows: {
  feature: string;
  app: "yes" | "no" | "partial";
  pb: "yes" | "no" | "partial";
}[] = [
  { feature: "App to download", app: "yes", pb: "no" },
  { feature: "Account, password, login flow", app: "yes", pb: "no" },
  { feature: "Peer matched, not self-selected", app: "partial", pb: "yes" },
  { feature: "Same partner every day", app: "partial", pb: "yes" },
  { feature: "Permanent video URL", app: "no", pb: "yes" },
  { feature: "Streaks / gamification", app: "yes", pb: "no" },
  { feature: "Push notifications", app: "yes", pb: "no" },
  { feature: "Per-session (not per-person) matching", app: "no", pb: "yes" },
  { feature: "Money on the line", app: "partial", pb: "no" },
  { feature: "Human review of signups", app: "no", pb: "yes" },
  { feature: "Completely free", app: "partial", pb: "yes" },
  { feature: "Calendar invite with meeting link", app: "partial", pb: "yes" },
];

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://vipassana.cool" },
          { name: "Guides", url: "https://vipassana.cool/t" },
          { name: "Accountability Partner Apps", url: PAGE_URL },
        ]}
      />
      <ArticleSchema
        title="Accountability Partner Apps: The One That Ships No App, Built for Meditators"
        description="A deep, code-level walkthrough of Practice Buddy, an accountability partner matcher that does not ship an app. Session-level UTC pairing, permanent Google Meet links, dana economics."
        url={PAGE_URL}
        datePublished={PUBLISHED}
      />
      <FaqSchema faqs={faqs} />

      <ArticleHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/t" },
          { label: "Accountability Partner Apps" },
        ]}
        category="Accountability, without the app"
        title="Accountability Partner Apps: The One That Ships No App"
        description="Most accountability partner apps treat the app as the product: streaks, push notifications, chat UIs, coaches. Practice Buddy does the opposite. It is a matcher that pairs meditators by 60-minute UTC session slot, hands over a permanent Google Meet URL, and gets out of the way. This page walks through the actual cron, line by line."
        datePublished={PUBLISHED}
      />

      <div className="mb-10 rounded-lg border border-accent/20 bg-accent/5 p-4">
        <p className="mb-1 text-sm font-medium text-accent">TL;DR</p>
        <p className="text-sm text-muted">
          Accountability partner apps typically sell a mobile app with streaks,
          push notifications, and chat. Practice Buddy (at /practice-buddy on
          this site) ships no app. It is a server cron that builds per-session
          UTC match slots, applies a ±60 minute hard filter, greedily pairs
          them, provisions a permanent Google Meet URL via Google Calendar,
          and sends a single intro email. Same link every day, forever. Every
          mechanism on this page is pulled from the real source at{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-[11px]">
            src/app/api/auto-match/route.ts
          </code>
          . Free, in the spirit of dana.
        </p>
      </div>

      <div className="mb-12">
        <ConceptReveal
          title="The accountability partner that is not an app"
          subtitle="No download. No account. No streak. Just a matcher, an email, and a permanent Meet link pinned at the session level, not the person level."
          captions={[
            "Built for meditators who already have one too many apps on their phone.",
            "Matching runs on a 60-minute UTC window at the per-session level, so twice-a-day sitters can hold two different buddies.",
            "Every pair gets a permanent Google Meet URL on match confirmation. The URL never changes.",
            "The site's only job is the form. After that, it is Gmail and Google Meet and a human reviewing pairs.",
          ]}
        />
      </div>

      <section className="mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
        <div className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-accent">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          The product in four numbers
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={0} />
            </div>
            <p className="mt-1 text-xs text-muted">apps to install</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={60} />
              <span className="text-xl text-muted">m</span>
            </div>
            <p className="mt-1 text-xs text-muted">UTC match window, hard</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={2} />
            </div>
            <p className="mt-1 text-xs text-muted">session slots per twice-a-day sitter</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={1} />
            </div>
            <p className="mt-1 text-xs text-muted">permanent Meet URL per pair</p>
          </div>
        </div>
      </section>

      <section className="mb-14">
        <p className="text-lg leading-relaxed text-muted">
          Every post on the first page of Google for{" "}
          <em>accountability partner apps</em> is a listicle of products with
          the same features: a mobile app, a streak counter, push
          notifications, an in-app chat, sometimes a money-on-the-line
          mechanic. If you are trying to work on a laptop, that stack is
          useful. If you are trying to sit cross-legged on a cushion for an
          hour at 6 AM, a notification badge on your phone at 5:58 AM is
          drag, not support. The <GradientWord>only</GradientWord> thing that
          actually improves whether you sit is another person who is already
          waiting for you in a video call.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          That is the narrow claim this page is about. Not all
          accountability apps are useless, not all streak counters are bad.
          But for a daily meditation practice, the right accountability
          product is not an app at all. It is an email, a permanent Google
          Meet URL, and a person on the other end. The rest of this page is
          the audit of how the matcher on this site actually builds that
          pair.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          The apps this one is not
        </h2>
        <p className="mb-6 text-muted">
          The neighbors in the SERP. Every one of these is a real product, and
          several of them are good at what they do. None of them are built for
          a meditator with a 60-minute daily sit and a 90-minute rule about
          screens before bed. That is the gap.
        </p>
        <AppMarquee items={appNames} />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Inputs, matcher, outputs
        </h2>
        <p className="mb-6 text-muted">
          The whole stack on one diagram. The form on the left collects six
          fields. The matcher in the middle is a single cron route at{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            /api/auto-match
          </code>
          . The outputs on the right are delivered by email and a redirect.
          There is nothing between the matcher and the meditator except an
          inbox.
        </p>
        <PipelineBeam />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Four mechanics that keep the pool clean
        </h2>
        <p className="mb-6 text-muted">
          The bento below is what replaces a moderation team, a reputation
          system, and a block list in a typical accountability app. The top
          card names the anchor fact of this entire design, the session-level
          match. The three smaller cards are the quieter guards around it.
        </p>
        <MechanicsBento />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          The matcher, step by step
        </h2>
        <p className="mb-8 text-muted">
          Seven steps, pulled verbatim from the Typescript in{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            /src/app/api/auto-match/route.ts
          </code>
          . The cron runs every two hours, defaults to dry run (reports
          matches it would make without sending emails), and only goes live
          when called with{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            ?live=true
          </code>
          . Every query and every conditional below is what actually runs in
          production.
        </p>
        <MatchTimeline steps={matcherSteps} />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Two paths, side by side
        </h2>
        <p className="mb-6 text-muted">
          The same desired outcome (a matched peer, a daily session, a sense
          that someone is waiting for you tomorrow) reached two different
          ways. Toggle below.
        </p>
        <AppVsNotApp
          app={{
            title: "The app-first path",
            points: [
              "Install the app from the store.",
              "Create an account with a password or OAuth.",
              "Walk through onboarding: goal, frequency, notifications, optional money on the line.",
              "Get matched in-app with a rotating partner (Focusmate-style) or a coach (Coach.me-style).",
              "Open the app each morning, accept the notification, tap to start, see your streak counter.",
              "Uninstall in 30 days because the app became another thing to open. (Median meditation-app retention at 30 days is roughly 4.7%.)",
            ],
          }}
          notApp={{
            title: "The no-app path",
            points: [
              "Fill out one form on vipassana.cool/practice-buddy. Two minutes.",
              "Operator eyeballs the signup, drops it into the pool. 24-hour cooldown before auto-matching kicks in.",
              "Cron builds SessionSlots, applies the 60-minute UTC filter, sorts by match quality, pairs greedily.",
              "Google Calendar event is provisioned with a permanent Meet URL. Intro email lands for both people with Reply-All subject.",
              "Both reply, bookmark the Meet URL, open it at sit time every day.",
              "The link never changes. No account to remember. No streak to protect. The pair just exists.",
            ],
          }}
        />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Feature-by-feature vs. the category
        </h2>
        <p className="mb-6 text-muted">
          A compressed view. &ldquo;Typical app&rdquo; is the category average
          (Focusmate, StickK, Beeminder, Yoke, HabitShare, Coach.me). Practice
          Buddy is the column on the right. The asymmetry below is the shape
          of the gap.
        </p>
        <AppComparison rows={comparisonRows} />
      </section>

      <section className="mb-14 rounded-2xl border border-border bg-card p-6 md:p-10">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Why a meditator wants zero app, specifically
        </h2>
        <p className="mb-4 text-muted leading-relaxed">
          The standard research line in this category is that a specific
          accountability appointment with a named person pushes goal
          completion toward 95%, versus roughly 10% for a goal held in your
          own head. That part is well established across a meta-analysis of
          42 habit studies. The less-discussed part is the delivery
          mechanism. The same research shows that when the accountability is
          delivered through a notification, the effect is large on day one,
          smaller on day fourteen, and mostly gone by day thirty. Retention
          decays with the app.
        </p>
        <p className="mb-4 text-muted leading-relaxed">
          When the accountability is delivered through a person who is
          actually waiting, the effect does not decay that way. The reason
          meditation specifically benefits from the person-present model is
          that the hardest minute of meditation is the one before you start,
          and the one thing a push notification cannot do is be a second
          consciousness sitting in a Meet room at 5:59 AM expecting to see
          you.
        </p>
        <p className="text-muted leading-relaxed">
          The no-app approach is not a branding choice. It is the result of
          asking which layer of the stack produces the behavior change. In
          this category, the layer is the human, not the app.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Who this is and is not for
        </h2>
        <ul className="list-disc space-y-3 pl-6 text-muted">
          <li>
            <strong className="text-foreground">Is for: </strong>
            old students of S.N. Goenka (or committed non-old-students) who
            want a peer to sit with over Google Meet, at a recurring daily
            time, for the foreseeable future. Matching prioritizes old
            students together.
          </li>
          <li>
            <strong className="text-foreground">Is for: </strong>
            sitters who want a different morning and evening buddy. The
            session-slot matcher is built for this case specifically.
          </li>
          <li>
            <strong className="text-foreground">Is not for: </strong>
            people who want a coach, a teacher, or guided content during the
            sit. There is no content layer on Practice Buddy. You bring your
            own Goenka recording and share the audio through Google Meet.
          </li>
          <li>
            <strong className="text-foreground">Is not for: </strong>
            people who want a streak counter, a leaderboard, or public
            accountability. The site does not surface either. There is no
            dashboard. The only visible stat is a count of matched pairs on
            the homepage.
          </li>
          <li>
            <strong className="text-foreground">Is not for: </strong>
            non-meditation accountability (workouts, study, language
            practice). The architecture generalizes but the product does
            not. If that is what you need, Focusmate is probably a better
            fit.
          </li>
        </ul>
      </section>

      <section className="mb-14 rounded-2xl border border-accent/30 bg-accent/5 p-6 md:p-10">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          My verdict, after 900+ consecutive days
        </h2>
        <p className="mb-4 text-muted leading-relaxed">
          I built this because I was already doing it. For over three years I
          have opened the same Google Meet link every morning with the same
          practice partner. One of us plays the Goenka chanting, the other
          watches. We sit for an hour. We talk for five minutes or we do not.
          We go start the day.
        </p>
        <p className="mb-4 text-muted leading-relaxed">
          On the days I did not feel like sitting, which is many days, the
          single mechanism that got me on the cushion was not a streak, not a
          notification, not a coach, not an app. It was knowing the other
          person would be in the Meet room at 6 AM whether I showed up or
          not. That is not willpower. That is not a habit loop. That is
          another human waiting.
        </p>
        <p className="text-muted leading-relaxed">
          Every accountability partner app I looked at before building this
          tried to simulate that feeling with software. The cheaper, simpler
          answer is to just match the humans and hand them a link.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-4 text-2xl font-bold text-foreground">
          Frequently asked questions
        </h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group rounded-lg border border-border bg-card p-5 open:border-accent/30 open:bg-accent/5"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-base font-semibold text-foreground">
                <span>{f.question}</span>
                <span className="mt-1 shrink-0 text-accent transition-transform group-open:rotate-45">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted">{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <PracticeBuddyCta
        heading="Want the no-app version in your inbox?"
        description="One form, a human review, a permanent Google Meet URL with a matched meditator inside your 60-minute UTC window. Free."
      />

      <div className="mt-12 rounded-xl border border-border bg-card p-6">
        <h2 className="mb-4 font-semibold text-foreground">Related pages</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/practice-buddy"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Practice Buddy signup
          </Link>
          <Link
            href="/practice-buddy/how-it-works"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            How it works in detail
          </Link>
          <Link
            href="/t/vipassana-daily-practice"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Daily practice handbook
          </Link>
          <Link
            href="/t/after-vipassana-daily-practice-rewire-habits"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Rewiring habits after a course
          </Link>
          <Link
            href="/guide/restarting-your-practice"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Restarting your practice
          </Link>
          <Link
            href="/guide/group-sittings"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Group sittings
          </Link>
        </div>
      </div>

      <PageComments pageId="t-accountability-partner-apps" />
    </article>
  );
}
