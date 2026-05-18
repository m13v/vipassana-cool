import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  AnimatedCodeBlock,
  FlowDiagram,
  ProofBanner,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/morning-sit-before-screens";
const PUBLISHED = "2026-05-18";
const VERIFIED = "2026-05-18";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Morning Sit Before Screens, Daily: The Calendar-Layer Answer (Not Phone Hacks)",
  description:
    "Most morning-routine guides answer the screens-before-practice question with phone hacks: grayscale, app blockers, charging the phone in the kitchen. The Goenka course's answer was to remove the phone for 240 hours. The home version is one fixed calendar entry, zero push notifications. A reflective note from 981+ days of daily morning sits.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Morning Sit Before Screens, Daily: The Calendar-Layer Answer",
    description:
      "Screens-before-practice is not a willpower problem. The course solved it by removing the phone for 240 hours. The home version is structural: one recurring calendar entry, no push notifications, no second app pinging the lock screen before the sit.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Morning Sit Before Screens: The Calendar-Layer Answer (Not Phone Hacks)",
    description:
      "After 981+ days, the load-bearing fact is that the matcher pushes zero morning notifications. The whole architecture refuses to ping you before the sit. That is the point.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "How do you sit every morning before any screen?",
    a: "Move the decision off the morning. The 10-day Goenka course removes phones, books, and screens for 240 hours; that is the lineage's answer, and it is not a recommendation any website can issue. The home extension of that, on this site, is structural rather than willpower-based. One recurring calendar entry on the calendar app you already use, no second app installed, no streak meter, no morning push notification. The matcher emits exactly one event row at src/lib/google-meet.ts:75 with recurrence ['RRULE:FREQ=DAILY'] and no overridden reminders block, and the four cron jobs in vercel.json never fire as a user-facing morning ping. For anything operational about the sit itself, the right input is dhamma.org and an authorized assistant teacher at a 10-day course, not this page.",
  },
  {
    q: "Why are phone hacks the wrong layer for this problem?",
    a: "Because the contradiction in any meditation app is that it has to break the no-screens-before-practice rule to remind you to follow it. Grayscale, app blockers, charging the phone in the kitchen, and sunrise alarms are real tactics with real effects, but they are downstream solutions to an upstream architecture problem. The architecture problem is that most morning-practice systems install another app, which then sends a push notification at sit time, which is itself a screen interaction before the sit. The matcher here is built the other way around. The single screen the practice touches is the Meet link, fixed URL, opened once per morning, no feed attached.",
  },
  {
    q: "What does the course actually do with phones, and why is that relevant to home practice?",
    a: "The Code of Discipline at dhamma.org/en/about/code is the authoritative document. Students surrender phones, computers, books, journals, and screens for the full 10 days. The wake-up bell is mechanical, the schedule is posted on a wall, the meditation hours are announced by gong. The point on this page is not that anyone should run a 10-day silent retreat at home. The point is that the tradition's own answer to screens-before-practice removes the phone entirely; it does not give you a phone with better app permissions. The home-practice version of that answer can only ever approximate it, and the closest approximation is reducing the number of apps competing for your attention at sit time, not adding more.",
  },
  {
    q: "What is the actual day count behind this note?",
    a: "On 2026-05-18 the public counter on this site reads 981+. The component is sixteen lines of TypeScript at src/components/day-counter.tsx. A constant BASE_COUNT is 881, a constant REFERENCE_DATE is 2026-02-07, and on every render the component computes the difference in whole days and adds the base. There is no streak field, no break-streak modal, no make-up day, no celebrate-milestone notification, no analytics event tied to it. A reader can clone the repo and verify. The absence of every feature a typical streak app treats as table stakes is part of the argument on this page, not a technical oversight.",
  },
  {
    q: "What about a meditation timer? Is that not a screen too?",
    a: "It is. A meditation timer is a single-purpose screen interaction, narrower than a feed, narrower than a notification, and it gets used for a few seconds at the start and end of a sit. The same is true of opening a Meet link to join a paired buddy. The threshold this page draws is not zero screens; that is unrealistic outside of a residential course. The threshold is one fixed-purpose screen interaction with no behavioral surface attached: no feed, no inbox, no DM badge, no recommended-for-you row, no streak counter. The course's full answer is zero; the home answer that survives is one, narrow.",
  },
  {
    q: "Does the matcher send a morning reminder to my phone?",
    a: "No. The matcher emits exactly one email when a match is first proposed (drafted in src/lib/emails.ts) and one Google Calendar event on confirmation (created in src/lib/google-meet.ts). After that, the cron schedule in vercel.json runs four jobs: a weekly Friday digest at 14:00 UTC, an expiry sweep daily at 12:00 UTC, the matchmaker every 30 minutes, and an RSVP check daily at 14:00 UTC. None of those fire a user-facing morning reminder. Whatever your phone shows you in the morning, the matcher is not the source of it. Whatever the default reminders on your Google Calendar are doing, you can change them in your calendar settings; the event itself does not override them.",
  },
  {
    q: "What about Andrew Huberman's no-phone-for-an-hour protocol?",
    a: "That is a different argument with different evidence, and this page is not in a position to evaluate it. The framing here is older and narrower. The Goenka tradition is more than five decades into 10-day courses that remove phones for the duration, and old students with multi-year daily practices tend to report that the bedtime, not the morning hour, is the lever that actually decides whether the morning sit happens. The huberman-style morning hour is consistent with that view; this page just routes the answer through the calendar and matching architecture instead of the lock-screen protocol.",
  },
  {
    q: "I missed yesterday. Does the practice 'reset' if I touch my phone first?",
    a: "Not on this site, no. The day counter does not reset; it does not have a reset code path. The matcher does not narrate the slip either; if both partners stop showing up, the partnership ends quietly and no asymmetric report goes out. The argument on this page is structural, not moral. Morning order-of-operations is one variable in a long-term practice, and missing it on a given Tuesday is closer to the rule than the exception. The traditional path back, after a longer break, is a 10-day course at a center; logistics live at dhamma.org/en-US/courses/search and not here.",
  },
  {
    q: "What about journaling, water, sunlight, or stretching before the sit?",
    a: "Those are off-screen. They are also not part of what this page is arguing about. The keyword here is specifically the order of operations between the sit and the phone, not the order of operations among other waking activities. A reader who wants to add or remove anything else from their morning will not find advice on it here. For operational guidance on the sit itself (length, posture, what to do during a difficult sit), the right input is an authorized assistant teacher in a 10-day course, not a website.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Morning Sit Before Screens, Daily" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Morning Sit Before Screens, Daily", url: PAGE_URL },
];

const morningFlow = [
  { label: "Wake up", detail: "no phone in hand" },
  { label: "Walk to cushion", detail: "calendar entry already there" },
  { label: "Open Meet link", detail: "the one screen" },
  { label: "Sit with partner", detail: "fixed UTC slot" },
  { label: "Then screens", detail: "inbox, news, work" },
];

const relatedPosts = [
  {
    title: "Morning Meditation Habit Long Term: Three Off-The-Cushion Anchors",
    href: "/t/morning-meditation-habit-long-term",
    excerpt:
      "Why year-2 mornings are decided the night before, on the calendar, and across timezones. Not by 6am willpower.",
    tag: "Reflection",
  },
  {
    title: "5am Meditation Routine: It's a UTC Slot, Not a Clock Decision",
    href: "/t/5am-meditation-routine",
    excerpt:
      "Real cohort numbers from the matcher: 7 of 87 signups picked 5am, scattered across 13 UTC hours. The pairing logic explains why.",
    tag: "Data note",
  },
  {
    title: "Decades-Long Daily Meditation Habit",
    href: "/t/decades-long-daily-meditation-habit",
    excerpt:
      "What old students at the centers say survives past year five, and what falls away. Spoiler: the streak meter falls away.",
    tag: "Reflection",
  },
];

const createMeetEventCode = `// src/lib/google-meet.ts:70-84
const event = {
  summary,
  description: "Your daily meditation practice buddy session via vipassana.cool",
  start: { dateTime: start.toISOString(), timeZone: "UTC" },
  end: { dateTime: end.toISOString(), timeZone: "UTC" },
  recurrence: ["RRULE:FREQ=DAILY"],
  conferenceData: {
    createRequest: {
      requestId: slug,
      conferenceSolutionKey: { type: "hangoutsMeet" },
    },
  },
  guestsCanInviteOthers: true,
  attendees: attendeeEmails.map((email) => ({ email })),
};
// note: no \`reminders\` field. nothing to push at 5:30am.`;

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Morning Sit Before Screens, Daily: The Calendar-Layer Answer (Not Phone Hacks)",
    description:
      "An argument that the morning-sit-before-screens question is solved at the calendar and architecture layer, not at the phone-settings layer. Anchored in the 10-day Goenka course schedule, the matcher source in src/lib/google-meet.ts, and 981+ days of daily morning sits.",
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
          Morning sit before screens, daily: the calendar-layer answer, not phone hacks
        </h1>
        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          Every guide on this topic prescribes the same five tactics:
          grayscale your phone, install an app blocker, charge it in the
          kitchen, buy a sunrise alarm, do not check email for sixty
          minutes. All of those are fine. None of them are the load-bearing
          answer. After 981+ days of morning sits, the variable that
          actually decides whether the phone enters the morning is not on
          the phone. It is on the calendar, set once, in the same app you
          already use.
        </p>
      </header>

      <ArticleMeta
        author="Matthew Diakonov"
        authorRole="Written with AI"
        datePublished={PUBLISHED}
        readingTime="5 min read"
      />

      <section className="max-w-4xl mx-auto px-6 pt-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Direct answer (verified {VERIFIED})
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            Move the decision off the morning. The Goenka 10-day course
            removes phones, books, and screens for 240 hours; that is the
            tradition&apos;s own answer, documented in the Code of
            Discipline at{" "}
            <a
              href="https://www.dhamma.org/en/about/code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              dhamma.org/en/about/code
            </a>
            . The home extension of that, on this site, is one fixed
            recurring calendar entry, no second app, no streak meter, no
            morning push notification. The matcher emits a single calendar
            row at{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-800">
              src/lib/google-meet.ts:75
            </code>{" "}
            with{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-800">
              recurrence: [&quot;RRULE:FREQ=DAILY&quot;]
            </code>{" "}
            and no overridden reminders block. The four cron jobs in{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-800">
              vercel.json
            </code>{" "}
            never fire as a user-facing morning reminder. For anything
            operational about the sit itself, the redirect is an authorized
            assistant teacher at a 10-day course.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          A note on what this page is and is not
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          This is a reflective note from one old student to another, peer
          to peer. The technique itself is taught at a 10-day residential
          course by an authorized teacher; what you do during a sitting,
          how long to sit, and how to work with anything that surfaces
          during one belongs there, not on a website. What this page can
          honestly address is the calendar layer that wraps around the
          sit, the architecture choices that decide whether a phone enters
          the morning before the cushion does. That is the part a public
          site can describe without overstepping.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Every other guide is solving the wrong layer
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Type this question into the search bar and the first page of
          results converges on the same shape. Set your phone to
          grayscale. Install an app blocker. Charge the phone outside the
          bedroom. Buy a Philips sunrise alarm. Stretch, drink water,
          journal, do anything but look at a screen for the first sixty
          minutes. The reasoning is always the same and it is not wrong:
          the lock-screen interaction recruits the dopamine system before
          you have any chance of doing the slower thing you actually
          intended to do.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          What that frame leaves out is the contradiction baked into any
          meditation app: it has to break the no-screens-before-practice
          rule to remind you to follow it. The morning push notification
          that nudges you to open the app is itself a screen interaction
          before the sit. The streak meter the app shows you when you
          land inside it is another. The recommended-for-you row at the
          bottom of the home screen is a third. The system that is
          supposed to defend the no-screen morning is the same system
          that interrupts it.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The phone-hack frame is downstream of an architecture choice
          that most morning-practice products do not even surface as a
          choice: which app the daily appointment lives in. If it lives
          in a dedicated meditation app, then opening the calendar means
          opening a feed. If it lives in the regular calendar app, then
          opening the calendar means seeing the recurring row alongside
          the dentist appointment and the standing meeting, and nothing
          else.
        </p>
      </section>

      <ProofBanner
        metric="240 hours"
        quote="The course's own answer to screens-before-practice was to remove the phone entirely for ten days. The home version cannot match that, but it can refuse to add another app whose business model is your morning attention."
        source="Goenka 10-day course Code of Discipline, dhamma.org/en/about/code"
      />

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          What the course actually does with phones
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The Code of Discipline at{" "}
          <a
            href="https://www.dhamma.org/en/about/code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            dhamma.org/en/about/code
          </a>{" "}
          is the authoritative document. Students surrender phones,
          computers, books, journals, watches, and reading material at
          registration. The wake-up bell is mechanical. The schedule is
          posted on a wall. The meditation hours are announced by gong.
          Across the six courses I have sat at three centers
          (Dhammamanda in NorCal, CYO in the Bay Area, North Fork in
          Central California), this part is identical. The course&apos;s
          own answer to the screens-before-practice question, after more
          than five decades of running this format, is the same answer:
          remove the screens.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The point on this page is not that anyone should run a
          self-course at home. The point is narrower. The tradition&apos;s
          empirically tested answer to this exact question removes the
          phone; it does not give you a phone with better app
          permissions. The home version of that answer cannot match the
          original, but it can refuse to reproduce the inverse: it can
          refuse to install another app whose business model is your
          morning attention.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The matcher has no morning reminder, on purpose
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The matching system on this site emits one email when a match
          is proposed, and one Google Calendar event when both sides
          confirm. After that, nothing is pushed to either user. The
          calendar event row is below. The thing missing from it is the
          point.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        <AnimatedCodeBlock
          code={createMeetEventCode}
          language="typescript"
          filename="src/lib/google-meet.ts"
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 pt-4">
        <p className="text-zinc-700 leading-relaxed">
          A typical morning-routine product would override the default
          calendar reminders to push a popup at minus 15 minutes, send a
          push notification at minus 5, and dispatch an email at the
          start of the event. The Google Calendar API exposes all three
          of those under a{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-800">
            reminders
          </code>{" "}
          field on the event object. That field is absent here, by
          omission, not by accident. Whatever your phone shows you at
          5:30am, the matcher is not the source of it. Your default
          calendar reminders may still pop a notification; you can
          change those in calendar settings, independent of this site.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The cron schedule in{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-800">
            vercel.json
          </code>{" "}
          tells the rest of the story. A weekly digest on Friday at 14:00
          UTC. A match-expiry sweep daily at 12:00 UTC. The matchmaker
          itself every 30 minutes. An RSVP check daily at 14:00 UTC.
          Notice what is not there: a morning reminder. There is no cron
          row that fires before sit time. There is no Slack-style
          presence ping. There is no streak-broken alert. The
          architecture refuses to be the thing that wakes you up.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The morning, viewed as a flow
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The shape a morning sit-before-screens routine wants is short
          and rigid. The fewer branches, the smaller the negotiation
          surface. The narrow path on this site looks like this.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        <FlowDiagram title="A morning the matcher is built around" steps={morningFlow} />
      </div>

      <section className="max-w-4xl mx-auto px-6 pt-4">
        <p className="text-zinc-700 leading-relaxed">
          The one screen the practice touches is the Meet link, opened
          from a calendar app that does not have a feed. The link is the
          same URL every day; the
          {" "}
          <Link
            href="/practice-buddy/how-it-works"
            className="text-teal-700 underline hover:text-teal-900"
          >
            how-it-works page
          </Link>{" "}
          spells out that the URL never changes, so opening it becomes
          closer to flipping a light switch than browsing. There is no
          inbox to glance at on the way. There is no recommended next
          video. There is no DM badge. The screen surface is a single
          rectangle with one button on it (Join), and the moment that
          button is pressed the other side of the room contains another
          practitioner, not an algorithm.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          What about a meditation timer
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          A meditation timer is a screen too. The threshold this page
          draws is not zero screens; that is unrealistic outside of a
          residential course. The threshold is one fixed-purpose screen
          interaction with no behavioral surface attached: no feed, no
          inbox, no DM badge, no recommended-for-you row, no streak
          counter, no in-app shop. A standalone timer, an analog clock,
          and a Meet link all clear that bar. Most meditation apps do
          not, because the business model of a meditation app cannot
          afford to.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The argument is not against meditation apps in general. It is
          narrower. For the specific question of preserving an order of
          operations where the sit happens before the phone, an app
          whose business model depends on pinging the phone at sit time
          is a structural mismatch with the goal. The course&apos;s
          answer (full removal) is one end of the spectrum; the
          everyone-uses-an-app answer is the other end; the middle path
          is to put the recurring appointment in the calendar app you
          already trust and to install nothing else.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The counterargument: a phone is not the enemy
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          A reader could push back that the phone is a tool, that the
          problem is not screens but how they are used, that the
          mindfulness apps are at worst neutral and at best supportive,
          and that ten million people meditating with an app is a better
          world than ten million people not meditating at all. All of
          that is reasonable, and this page is not arguing against it.
          The narrower claim here is that screens-before-practice as a
          specific morning order-of-operations question has a structural
          answer (which app the calendar entry lives in, whether
          additional notification surfaces are installed) that gets
          completely lost when the conversation defaults to phone-hack
          tactics. The phone is not the enemy. The morning notification
          stack might be.
        </p>
      </section>

      <RelatedPostsGrid
        title="Keep reading"
        subtitle="Adjacent notes from this site"
        posts={relatedPosts}
      />

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          section="morning-sit-before-screens-footer"
          heading="Compare notes on a screen-free morning sit"
          description="A short call about installing one calendar entry instead of another app, what fell apart the last time you tried this, or being paired with another practitioner through the matching program on this site. Peer to peer, not teacher to student."
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12 pb-16" id="faq">
        <FaqSection items={faqs} heading="Frequently asked questions" />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="morning-sit-before-screens-sticky"
        description="Compare notes on a screen-free morning sit"
      />
    </article>
  );
}
