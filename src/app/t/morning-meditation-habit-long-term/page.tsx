import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ProofBanner,
  MetricsRow,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/morning-meditation-habit-long-term";
const PUBLISHED = "2026-05-07";
const VERIFIED = "2026-05-07";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Morning Meditation Habit Long Term: Three Off-The-Cushion Anchors, Not Morning Willpower",
  description:
    "Most articles on a long-term morning meditation habit prescribe streaks, habit stacking, or 21-day starter programs. After 970+ days of morning sits, the load-bearing anchors are not morning-time at all. Bedtime, an undeletable calendar entry, and a real human at the same UTC instant decide whether year two looks like year one. A reflection on what the codebase of vipassana.cool encodes about long-term consistency.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Morning Meditation Habit Long Term: Three Off-The-Cushion Anchors",
    description:
      "Year-2 morning sits are decided the night before, on the calendar, and across timezones. Not by 6am willpower. The 21-day-habit frame predicts collapse at month 2-3 because it ignores all three.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Morning Meditation Habit Long Term: Three Off-The-Cushion Anchors",
    description:
      "After 970+ days of morning sits the load-bearing anchors are bedtime, an RRULE:FREQ=DAILY calendar entry, and a UTC-paired human. None of them are about 6am willpower.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "What is the actual answer: how do you make morning meditation stick long term?",
    a: "Long term means year 1 and beyond. By that point motivation has evaporated; it ran out somewhere in month 2 or 3 like the research says it does. What sustains the morning sit after that is not morning-time at all. It is three structural anchors set elsewhere in the day. First, bedtime is defended, so the morning is not a willpower contest against sleep debt. Second, the daily appointment is on the calendar with a recurrence rule (RRULE:FREQ=DAILY), so there is no negotiation surface where a tired mind can argue today off. Third, another practitioner is waiting on a Meet link at the same UTC instant, so the empty room is the metric instead of an internal streak. None of those are about 6am. They are about 9pm, about a one-time calendar setup, and about cross-timezone matching. For anything operational about the sit itself (length, posture, what to do during it), the redirect is dhamma.org and an authorized assistant teacher at a 10-day course.",
  },
  {
    q: "Why does the 21-day or 30-day habit frame predict collapse at month 2-3?",
    a: "Because the 21-day frame is a motivation curve. Most starter programs (Headspace's daily streak, Zen Habits' two-minute rule, Heal75's structured 3-month plan, Peloton's daily check-in) are built around the first month, when novelty and motivation are doing most of the work. Around week 6 to month 3 the novelty is gone, and any system that depends on a felt-sense of 'wanting to' will lose. A study of a commercial meditation app (Time of Day Preferences and Daily Temporal Consistency, PMC10131734, 2023) actually found that less temporal consistency was associated with more persistent app use, which is the opposite of what the streak frame predicts. The site does not endorse any of those programs for the long-term question. The argument here is that the morning sit at month 18 is not a more disciplined version of the morning sit at month 1; it is a different kind of system that runs on different fuel.",
  },
  {
    q: "What is the actual day count behind this page, and how is it calculated?",
    a: "On 2026-05-07 the public counter on this site reads 970+. The component is sixteen lines of TypeScript at src/components/day-counter.tsx. A constant BASE_COUNT is set to 881, a constant REFERENCE_DATE to 2026-02-07, and on every render the component computes the difference in whole days and adds the base. There is no streak field, no break-streak modal, no make-up day, no celebrate-milestone notification, no analytics event. A reader can clone the repo and verify the math. The deliberate absence of every feature a typical streak app treats as table stakes is part of the argument, not a technical oversight.",
  },
  {
    q: "How does bedtime become the upstream variable?",
    a: "The Goenka 10-day course schedule (documented at https://www.dhamma.org/en/about/code) wakes students at 4am and ends the working day with a 5pm tea break and the discourse, with lights out around 9:30pm. Students do not eat dinner. Phones, books, and screens are absent. After 240 hours of that schedule, the nervous system has been recalibrated to fall asleep early and wake naturally, which is the actual lever. The schedule is not a recommendation a website can issue, and this page is not issuing it. What the schedule demonstrates is that morning practice is not a morning problem. It is a sleep problem displaced by twelve hours. Students who keep a morning sit alive after a course usually report that the bedtime drift back is the first thing that breaks the practice, not the morning. Operational guidance for any of this lives with an authorized assistant teacher, not on this site.",
  },
  {
    q: "Why is an RRULE calendar entry different from an alarm?",
    a: "An alarm is a daily decision rendered as a sound. The mind can negotiate with it (snooze, dismiss, reframe) because the alarm only exists for a few seconds and the negotiation surface is wide open. A calendar event with recurrence rule RRULE:FREQ=DAILY is a different artifact. It exists at the calendar layer, persists across reboots and devices, was authored once, and has no excused-absence flow attached. The matcher on this site emits exactly that artifact: the line is recurrence: ['RRULE:FREQ=DAILY'] in src/lib/google-meet.ts at line 75. There is no UNTIL clause, no end date, no pause primitive. The user does not interact with the rule; they interact with whatever ordinary calendar UI they already use, which makes the daily entry as boring as a dentist appointment. That boringness is the architecture working.",
  },
  {
    q: "Why pair morning sitters by UTC instead of by local time?",
    a: "Because a 6am sitter in San Francisco and a 6am sitter in Berlin are nine hours apart in real time and physically cannot be in the same Meet at the same instant. Local hour is a label on a wall, not a meeting time. UTC is the meeting time. The conversion happens in toUtcTime at src/lib/db.ts line 109, and the matcher's hard filter rejects any candidate more than 60 minutes off your UTC slot. Practically, a Bay Area 6am converts to 13:00 or 14:00 UTC depending on DST; the candidates in that pool are mid-morning sitters in Western Europe and mid-afternoon sitters in India, none of whom are local-6am. The architectural decision is to be honest about who is actually awake on the same clock. The thing the matcher trades away is the comforting fiction that the buddy is also a 6am person.",
  },
  {
    q: "Does this mean motivation does not matter at all in year 1?",
    a: "Motivation matters in the first month, where it is the only fuel available. The argument here is not that motivation is useless; it is that motivation is unreliable past month 3 and that any system depending on it will lose by month 6 or so. The shift the page describes happens in the transition from a motivation-defended habit to a structurally-defended one. In practice that means using the first month's energy to set up the three anchors (a 9:30pm bedtime, the recurring calendar entry, the matched buddy) rather than to compete on streak length. Streak counters are fine in month 1; they fall away in year 2. The anchors are the load-bearing layer when nothing else is.",
  },
  {
    q: "What if I miss a morning sit, a week, or a month?",
    a: "It happens to everyone with a long-term morning practice. The day counter on this site does not reset; it does not have a reset code path because the counter does not represent a streak the user is responsible for keeping intact. The matcher does not narrate slips either. If both partners stop showing up, the partnership ends quietly; nothing is logged, no asymmetric report goes out, no shame artifact is produced. The next morning is the next morning. If a week or month has gone by, the traditional path back is a 10-day course and group sittings at a local center. Course logistics live at https://www.dhamma.org/en-US/courses/search, not here. None of this is advice on how to practice; it is the shape of the surface this site provides.",
  },
  {
    q: "Is a long-term morning meditation habit the same as a long-term Vipassana practice?",
    a: "Not exactly. A morning meditation habit is the calendar shape: a fixed action that recurs every morning. A long-term Vipassana practice in the Goenka tradition is the technique itself, transmitted at a 10-day residential course, supported by daily sittings in the morning and evening, group sittings at local centers, and one course per year. This page is restricted to the calendar shape, because that is the part a public website can honestly write about. The practice itself is taught at the course, not here. Reading this page is not a substitute for sitting one.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Morning Meditation Habit Long Term" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Morning Meditation Habit Long Term", url: PAGE_URL },
];

const anchorMetrics = [
  {
    value: 970,
    suffix: "+",
    label: "days of daily morning sits and counting",
  },
  {
    value: 16,
    suffix: " lines",
    label: "in the day-counter component, with no streak field",
  },
  {
    value: 0,
    suffix: "",
    label: "pause, vacation, or excused-absence rows in the matcher",
  },
  {
    value: 60,
    suffix: " min",
    label: "UTC tolerance window for pairing morning sitters",
  },
];

const relatedPosts = [
  {
    title: "Preserving Daily Practice Discipline By Subtraction, Not Willpower",
    href: "/t/preserving-daily-practice-discipline",
    excerpt:
      "The longer-form argument that a year-2 daily sit is held by removed decision points, not added scaffolding. Same architecture, different facet.",
    tag: "Reflection",
  },
  {
    title: "5am Meditation Routine: Why It's a UTC Slot, Not a Clock Decision",
    href: "/t/5am-meditation-routine",
    excerpt:
      "The hour-of-the-morning question, viewed through the matcher: 7 of 87 signups picked 5am, scattered across 13 UTC hours, paired with whoever else lived at the same UTC instant.",
    tag: "Data note",
  },
  {
    title: "Daily Meditation Practice Working Full Time: Two Buddies, Not One",
    href: "/t/daily-meditation-practice-working-full-time",
    excerpt:
      "Why a full-timer's morning and evening sits get two different humans by design, and the seven lines of code in src/app/api/auto-match/route.ts that enforce it.",
    tag: "Architecture",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Morning Meditation Habit Long Term: Three Off-The-Cushion Anchors, Not Morning Willpower",
    description:
      "An argument that a year-2 morning meditation habit is sustained by three structural anchors set elsewhere in the day (defended bedtime, an undeletable RRULE:FREQ=DAILY calendar entry, a UTC-paired practitioner), not by morning willpower. Anchored in the actual codebase of vipassana.cool and 970+ days of daily morning sits.",
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
          Morning meditation habit, long term: three off-the-cushion anchors,
          not morning willpower
        </h1>
        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          Most articles on a long-term morning meditation habit are really
          articles about the first thirty days. They prescribe streaks,
          two-minute starters, habit stacking, and a dedicated corner of the
          bedroom. All of that is fine in month one. After 970+ days of
          morning sits, the load-bearing anchors are not morning-time at all.
          Bedtime is. The calendar layer is. A real human at the same UTC
          instant is. None of them are decisions a tired mind makes at 6am.
        </p>
      </header>

      <ArticleMeta
        author="Matthew Diakonov"
        authorRole="Written with AI"
        datePublished={PUBLISHED}
        readingTime="7 min read"
      />

      <section className="max-w-4xl mx-auto px-6 pt-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Direct answer (verified {VERIFIED})
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            After year one, motivation runs out, around the same month 2 to 3
            window the research describes. What sustains a morning sit past
            that point is not stronger willpower. It is three structural
            anchors set elsewhere in the day. A defended bedtime, so the
            morning is not a willpower contest against sleep debt. An
            undeletable daily calendar entry (the recurrence rule
            RRULE:FREQ=DAILY emitted at{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-800">
              src/lib/google-meet.ts:75
            </code>{" "}
            in the matcher's source), so there is no negotiation surface a
            tired mind can argue with. And another practitioner waiting on a
            Meet link at the same UTC instant, paired by the cron at{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-800">
              src/app/api/auto-match/route.ts
            </code>{" "}
            using{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-800">
              toUtcTime
            </code>{" "}
            from{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-800">
              src/lib/db.ts:109
            </code>
            , so the empty room is the metric instead of an internal streak.
            For anything operational about the sit itself, the redirect is{" "}
            <a
              href="https://www.dhamma.org/en/about/code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              dhamma.org/en/about/code
            </a>{" "}
            and an authorized assistant teacher at a 10-day course.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          A note on what this page is and is not
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          This is a reflective page from one old student to another, peer to
          peer. The technique itself is taught at a 10-day residential course
          by an authorized teacher. What you actually do during a sitting,
          how to work with sensation, how to handle a difficult morning on
          the cushion, all of that belongs with an assistant teacher, not on
          a website. What this page can honestly write about is the
          calendar layer, the sleep layer, and the matching layer that wrap
          around the sit. Those are the layers a public site can describe
          without overstepping. If a sentence here reads as instruction on
          how to sit, read past it. The instructions are given at the
          course.
        </p>
      </section>

      <MetricsRow metrics={anchorMetrics} />

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The 21-day frame is a motivation curve, not a long-term system
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Most starter programs lean on the same shape. Two minutes a day
          for the first week. Five for the second. Ten by week three. A
          dedicated corner of the room. A streak counter. A weekly
          check-in. None of that is wrong in month one, when novelty is
          doing most of the work and motivation is genuinely high. The
          problem shows up around week 6 to month 3, when the novelty has
          worn off and the motivation curve drops back to baseline. A
          system built on motivation cannot survive its own fuel running
          out.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The empirical wrinkle is that the streak frame is not even
          obviously right inside its own thirty-day window. A study on a
          commercial meditation app published in JMIR mHealth and uHealth
          (PMC10131734, 2023) found that less temporal consistency was
          associated with more persistent app use over the long term, not
          more. The streak meter is one frame, and it is not the only one.
          Whatever your read of that finding, the larger point holds: the
          system that runs the morning sit at month 18 is not a more
          disciplined version of the system that ran it at month 1. It is
          a different system that runs on different fuel.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The fuel is the three structural anchors below. None of them
          require willpower at 6am. All of them were set up at a different
          time of day, often only once.
        </p>
      </section>

      <ProofBanner
        metric="3 anchors"
        quote="The morning sit at month 18 is not a more disciplined version of the morning sit at month 1. It is a different system that runs on different fuel, set elsewhere in the day, often only once."
        source="Author note, 970+ days of daily morning sits across 6 ten-day courses"
      />

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Anchor one: the morning is decided the night before
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The Goenka 10-day course schedule, documented in the official Code
          of Discipline at{" "}
          <a
            href="https://www.dhamma.org/en/about/code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            dhamma.org/en/about/code
          </a>
          , wakes students at 4am, breaks the working day at 5pm with a tea
          break, runs the evening discourse, and finishes around 9:30pm.
          Students do not eat dinner. Phones, books, and screens are absent.
          After 240 hours of that schedule, the nervous system has
          recalibrated to fall asleep early and wake naturally. The
          load-bearing piece of that schedule, viewed from the calendar
          layer, is the bedtime, not the wake-up. The 4am wake is downstream
          of a 9:30pm lights-out and a 5pm tea cutoff.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The schedule is not a recommendation a website can issue, and this
          page is not issuing it. What the schedule demonstrates is that the
          morning sit is not a morning problem. It is a sleep problem
          displaced by twelve hours. Old students who keep a morning sit
          alive after a course tend to describe the same regression: the
          bedtime drifts back first, by twenty minutes a week, mostly
          unnoticed; the morning becomes harder, also mostly unnoticed; and
          one Tuesday in February the practice has stopped without any
          single dramatic event having happened. The lever is upstream of
          the obvious failure point.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          That is the entire reason the first anchor is a defended bedtime.
          Not as advice. As the calendar fact that decides the morning. For
          operational guidance on any of this (what time to sleep, how long
          to sit, what to do during a sit), the right input is an
          authorized assistant teacher at a 10-day course, not a blog post.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Anchor two: the calendar entry has no excused-absence flow
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          An alarm is a daily decision rendered as a sound. It exists for a
          few seconds, and during those seconds the mind has a wide-open
          negotiation surface: snooze, dismiss, decide tomorrow is fine. A
          calendar event with a recurrence rule is a different artifact. It
          persists across reboots, exists in whatever calendar UI the user
          already trusts, was authored exactly once, and has no
          excused-absence semantics. The mind cannot easily renegotiate
          with a dentist-appointment-shaped row in Google Calendar. The
          row is just there.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The matcher on this site emits exactly that artifact. The line is
          literal:
        </p>
        <pre className="mt-4 overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-800">
          <code>{`// src/lib/google-meet.ts:75
recurrence: ["RRULE:FREQ=DAILY"],`}</code>
        </pre>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          No UNTIL clause. No end date. No pause field. A grep across both
          halves of the matching service (src/lib/emails.ts and
          src/app/api/auto-match/route.ts) for the words pause, vacation,
          excused, freeze, and snooze returns zero matches. The entire
          codebase has no primitive for skipping a day on purpose. That is
          intentional, and it is the part a typical streak app would treat
          as table stakes. Whatever you think of the policy, the
          architectural fact is that the recurring entry exists at the
          calendar layer, not at the willpower layer, and the calendar layer
          is structurally more boring than the will. Boring is what holds
          for years.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Anchor three: a real human at the same UTC instant
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The third anchor is the one most morning-routine articles
          completely omit. A daily sit alone is held by an internal
          accounting system (a streak, a felt sense of consistency,
          self-narration). All of those are negotiable by the same mind
          that is supposed to be doing the sitting. A daily sit with one
          other practitioner present is held by a different fact: the
          empty Meet room. There is nothing to argue with there. The
          person is either there or they are not.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The matcher's pairing decision is keyed on UTC, not local hour.
          The conversion happens in toUtcTime at src/lib/db.ts line 109,
          and the matcher's hard filter rejects any candidate whose UTC
          slot is more than 60 minutes off yours. The architectural
          decision is to be honest about who is actually awake at the same
          instant, not to indulge the comforting fiction that a 6am Bay
          Area sitter is paired with another 6am Bay Area sitter. A 6am
          San Francisco morning is 13:00 or 14:00 UTC depending on DST;
          the candidates in that pool are mid-morning sitters in Western
          Europe and mid-afternoon sitters in India. The buddy is a
          stranger who happens to be on the same clock as you, paired
          quietly by the cron, never narrated.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The first time the room is empty when it should not be, the
          accountability has done its work. Either you came in and they
          did not, or they came in and you did not. There is no reset
          button. Most pairings die quietly inside two weeks. A small
          number persist for months and become the load-bearing piece of
          the practice. Both outcomes are honest. The site does not narrate
          either, on purpose; the codebase contains no asymmetric
          supervisor role and no reactivation flow. The room is the entire
          accountability surface.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The counterargument: motivation is not nothing
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          A reader could push back here that the three anchors are
          themselves products of motivation, set up by someone who already
          cares enough to set them up. That is fair. The argument is not
          that motivation is irrelevant; it is that motivation has a
          half-life. The job of month one is to spend the high-motivation
          window installing the three anchors, not to accumulate streak
          length. A 9:30pm bedtime negotiated with a partner, a recurring
          calendar entry confirmed once, a buddy match request submitted
          to a matcher: those are the productive uses of early motivation.
          A 47-day streak is not. The streak will not survive month three.
          The anchors will.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Year 2 is also not motivation-free. The daily sit still requires
          a small amount of intent, a small amount of caring. What it does
          not require is a large amount of decision. The decisions have
          all been made elsewhere in the day, in past months, by a version
          of the practitioner who had energy to spend. The morning is
          mostly downstream of those past decisions. Some mornings are
          easy and some mornings are hard, and on the hard ones the small
          amount of caring is enough because everything else has already
          been settled.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          What this page is for
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The page exists because almost every account of a long-term
          morning meditation habit treats it as the same problem as
          starting a habit, only more so. It is not the same problem. The
          starter problem is solved with motivation; the long-term problem
          is solved with architecture. Treating them as the same problem is
          why so many morning routines collapse around month three: the
          system that worked in month one was supposed to be replaced, and
          it was not. This page is one old student saying to another, on
          your morning of month three when the streak has just broken,
          that the streak was never the load-bearing thing. Bedtime was.
          The calendar row was. The empty room with one other practitioner
          on the other side of the world was. The streak was a measurement
          that happened to correlate with the practice while motivation
          was funding it.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          For anything operational about the practice itself, the right
          inputs are{" "}
          <a
            href="https://www.dhamma.org/en/about/code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            dhamma.org/en/about/code
          </a>{" "}
          and an authorized assistant teacher at a 10-day course. The
          existing on-site notes on the calendar architecture itself live
          at the{" "}
          <Link
            href="/t/preserving-daily-practice-discipline"
            className="text-teal-700 underline hover:text-teal-900"
          >
            preserving daily practice discipline
          </Link>{" "}
          page, and the data on hour-of-the-morning matching lives at the{" "}
          <Link
            href="/t/5am-meditation-routine"
            className="text-teal-700 underline hover:text-teal-900"
          >
            5am meditation routine
          </Link>{" "}
          notes. Everything else is just sitting.
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
          section="morning-habit-long-term-footer"
          heading="Compare notes on a year-2 morning sit"
          description="A short call about installing the three anchors, what fell apart at month three for you, or being paired with another practitioner through the matching program on this site. Peer to peer, not teacher to student."
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12 pb-16" id="faq">
        <FaqSection items={faqs} heading="Frequently asked questions" />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="morning-habit-long-term-sticky"
        description="Compare notes on a year-2 morning sit"
      />
    </article>
  );
}
