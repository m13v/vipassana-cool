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
  ComparisonTable,
  MetricsRow,
  GlowCard,
  StepTimeline,
  AnimatedChecklist,
  BeforeAfter,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type BentoCard,
  type ComparisonRow,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/daily-meditation-practice-working";
const PUBLISHED = "2026-04-25";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Daily Meditation Practice for Working Professionals: One Sheet of Paper, 366 Squares, No Streak",
  description:
    "Most articles for working professionals recommend an app, a 5 minute habit stack, or a streak counter. The instrument that actually survives a real career is one printable Letter sized page with 366 split AM/PM squares and four anti-streak rules. Here is the file, the rules, and why deleting the streak is the move.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Daily Meditation Practice for Working Professionals: One Sheet of Paper, 366 Squares, No Streak",
    description:
      "Why a single printable page beats every meditation app for full-time professionals, and where to find the file on this site.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Daily Meditation for Working Professionals: 366 Squares, No Streak",
    description:
      "The instrument that survives a real career is a Letter sized printable page, not a notification stack.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "Why use a paper sheet instead of a meditation app for daily practice?",
    a: "Three concrete reasons that show up in old-student logs after about a year of trying both. First, the paper does not push notifications, which means it cannot interrupt a workday or contribute to phone-pickup count. Second, the paper does not own the streak; you own the page, and the page owns nothing but the marks you put on it. Third, the paper survives device migrations, app sunsets, subscription renewals, and OS rewrites, none of which a working calendar has time to absorb. The printable on this site lives at /daily-sit-log/print and stays the same file regardless of what your phone is doing.",
  },
  {
    q: "What is on the printable daily sit log at /daily-sit-log/print?",
    a: "One Letter sized page with twelve rows for the months and 31 columns for the days, hard-coded so February has 29 cells and accounts for a leap year. Each cell is a square split diagonally; the upper-left half is for AM and the lower-right is for PM. There is no number, no color, no count of any kind. The header has a place to write your name and the year. The footer carries four short rules and the URL of the site. Everything fits on one printed page in portrait orientation.",
  },
  {
    q: "What are the four rules printed on the sheet?",
    a: "Mark after you sit, not before. No colors, no metrics, no streak. Missing a day is not failure; stopping is. Keep the page somewhere you will see it. The full source of those rules is in src/app/daily-sit-log/print/page.tsx and the rules are deliberately short so you cannot misread them at 5 AM.",
  },
  {
    q: "Will deleting the streak make me practice less?",
    a: "It might for the first week, because the dopamine hit of a counter is real. After that, removing the streak removes the most common failure mode for working professionals: a single missed day creating a sense of loss that becomes avoidance that becomes weeks. With no streak to break, a missed Tuesday is just a Tuesday, and Wednesday morning is a fresh page with nothing to defend. The instrument is built around the assumption that long careers have shaped weeks in them, not just smooth ones.",
  },
  {
    q: "How does this fit with the Goenka tradition's recommendation of two hours per day?",
    a: "The tradition's recommendation for old students is two hours per day. The sheet does not redefine that. The sheet is a logging instrument, not a teacher. What the sheet measures is whether you sat at all in a given AM or PM, not how long. For anything operational about duration, posture, or what to do during a sit, the right address is dhamma.org and an authorized assistant teacher at a 10-day residential course. The sheet is the calendar layer; the teacher is the technique layer.",
  },
  {
    q: "Can I use the sheet if I have not sat a 10-day course yet?",
    a: "The site as a whole is built for old students of S.N. Goenka 10-day courses, because the technique itself is transmitted in person at those courses. If you have not sat one, the right next step is dhamma.org. The printable sheet is in the public domain and you can use it for any practice you already have, but the tradition-specific framing on this site assumes you have sat at least one course.",
  },
  {
    q: "How is the paper sheet different from a habit-tracker app like Streaks or Habitica?",
    a: "Habit-tracker apps are designed to maximize the streak, because the streak is the engagement primitive that keeps the user inside the app. The sheet is designed to make the streak invisible. The cell on the sheet does not know if yesterday was empty. There is no view that counts consecutive marked days. The visual feedback is a year-long pattern of strokes, not a number that resets to zero. For a working professional, the difference is whether a missed day becomes a guilt loop or just an empty square.",
  },
  {
    q: "How does the sheet survive a busy quarter at work?",
    a: "Two reasons specific to working professionals. The instrument is read-only after printing; nothing can update it remotely, push at it, or expire it. And it does not require a charged battery, an internet connection, a logged-in account, or a paid subscription to keep working. A printed page on a fridge or a desk does the same job in week one and in week 40. Reliability and cost both go to zero, and the only ongoing input is a pen.",
  },
  {
    q: "What if I want both a buddy AND the printable sheet?",
    a: "Most working professionals on this site use both, because the two instruments solve different problems. The printable sheet is the personal log; the Practice Buddy match is the standing morning appointment. The sheet shows you the year-shaped picture of your practice; the buddy makes sure the morning slot has another human on the other end of a Meet link. Neither replaces a 10-day course or an assistant teacher, and neither is an app.",
  },
];

const sheetRules = [
  { text: "Mark after you sit, not before." },
  { text: "No colors. No metrics. No streak." },
  { text: "Missing a day is not failure. Stopping is." },
  { text: "Keep this page somewhere you will see it." },
];

const failureCards: BentoCard[] = [
  {
    title: "The 5 minute app sit",
    description:
      "Most working-professional guides recommend a short daily app sit. Five minutes inside an app that pushed three notifications first is not the same object as 20 minutes on a chair. The app sit is closer to a calmer email check than to a real practice. A printable page does not produce any of those notifications.",
    size: "2x1",
  },
  {
    title: "The streak that owns you",
    description:
      "After roughly day 90 the app's streak counter becomes the boss of the practice. The decision each morning is no longer 'do I want to sit' but 'do I want to lose the number'. That is the wrong center of gravity for a working life that has unpredictable weeks built into it.",
  },
  {
    title: "Habit-stacking with coffee",
    description:
      "'Sit while your coffee brews' produces a 5 to 8 minute sit attached to a kitchen routine. It is a fine emotional break and it is not a daily practice rep. The honest version of habit-stacking is that the coffee owns the time, not the sit.",
  },
  {
    title: "Subscription decay",
    description:
      "Meditation apps now cost $70 to $100 per year. After a layoff, a parental leave, or a budget tightening, the renewal looks different. Practices that were tied to the subscription end with it. A printed sheet on a wall has no renewal date.",
  },
  {
    title: "The dashboard with charts",
    description:
      "App dashboards show minutes meditated, average duration, and longest streak. None of those numbers correspond to anything the tradition uses to describe the practice. The metrics describe the app's engagement model, not the practice's progress, and a working professional does not need another dashboard.",
    accent: true,
    size: "2x1",
  },
  {
    title: "The phone as the timer",
    description:
      "Using the phone as a timer puts the phone within reach during the sit. That sets up a near-100% probability that the post-sit action is a screen unlock. A wall clock or a kitchen timer is a deliberately worse timer that produces a deliberately better post-sit transition.",
  },
];

const gapRows: ComparisonRow[] = [
  {
    feature: "Cost over five years",
    competitor: "$350 to $500 in subscriptions",
    ours: "Cost of one sheet of paper and a pen",
  },
  {
    feature: "What happens when you skip a day",
    competitor: "Streak resets to 0; counter is broken",
    ours: "Empty square stays empty; tomorrow is a fresh cell",
  },
  {
    feature: "What it does to your phone",
    competitor:
      "Adds notifications, badge counts, and a daily reminder banner",
    ours:
      "Adds nothing; the instrument is paper on a wall or fridge",
  },
  {
    feature: "What you see when you look at it",
    competitor:
      "A streak number, a chart of minutes, and an upgrade button",
    ours:
      "A pattern of pen strokes covering one year, with no number anywhere",
  },
  {
    feature: "Survives device migration",
    competitor:
      "Tied to the account, the OS, and the subscription's payment method",
    ours: "Tied to a thumbtack",
  },
  {
    feature: "Survives a 10-day silent course",
    competitor:
      "Notifications resume the moment the phone is unsealed at the end",
    ours:
      "The sheet was already on the wall when you got home",
  },
  {
    feature: "What it cannot do",
    competitor:
      "Replace the in-person teacher, the 10-day container, or the technique itself",
    ours:
      "Replace the in-person teacher, the 10-day container, or the technique itself; the redirect for all three is dhamma.org",
  },
];

const sheetTags = [
  "Letter portrait",
  "0.5 in margin",
  "12 rows of months",
  "31 columns of days",
  "Feb = 29 cells",
  "Diagonal AM/PM split",
  "@page rule",
  "@media print",
  "366 cells max",
  "No JavaScript needed",
  "Public domain",
  "Cmd+P to PDF",
];

const yearRoutine = [
  {
    title: "Print the page once",
    description:
      "Open /daily-sit-log/print, press Cmd+P or Ctrl+P, choose Save as PDF or Letter portrait. The whole year fits on one page.",
  },
  {
    title: "Tape it to a fixed surface",
    description:
      "Fridge door, desk wall, inside of a cabinet door. The constraint is that you can see it on a normal weekday morning before you have made any decisions yet.",
  },
  {
    title: "Mark after you sit",
    description:
      "Pen stroke in the AM or PM half of the day's cell, after the sit, not before. The order matters because marking before turns the cell into a promise rather than a record.",
  },
  {
    title: "Leave empty squares empty",
    description:
      "If you skip a sit, the cell stays empty. The whole point of the instrument is that it does not pressure you to backfill. The pattern over a year is the diagnostic, not any single cell.",
  },
  {
    title: "Look at the page on the first of each month",
    description:
      "One pass over the previous month, no calculation, no count. The shape of the marks tells you what your work quarter did to your practice. Adjust upstream factors (sleep, calendar) accordingly.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Daily Meditation Practice for Working Professionals" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  {
    name: "Daily Meditation Practice for Working Professionals",
    url: PAGE_URL,
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Daily Meditation Practice for Working Professionals: One Sheet of Paper, 366 Squares, No Streak",
    description:
      "Why a printable, anti-streak Letter sized log beats every meditation app for full-time professionals, and the exact file on vipassana.cool that hosts it.",
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
          Daily meditation practice for working professionals:{" "}
          <GradientText>one page, 366 squares</GradientText>, and no streak
          counter anywhere
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
          Every other guide on this question recommends an app, a five
          minute habit stack, or a streak. After enough years inside a
          working calendar, those instruments stop holding the practice.
          What does hold it, on the evidence of a lot of old-student logs,
          is a single printable page with 366 cells split into AM and PM
          halves and four short rules that delete the streak entirely. The
          file lives at /daily-sit-log/print on this site. This page is the
          long version of why that one piece of paper outlasts the apps.
        </p>
      </header>

      <div className="py-4">
        <ArticleMeta
          datePublished={PUBLISHED}
          authorRole="6 ten-day Goenka courses, 60 days residential, full-time founder, daily morning practice through five startups"
          readingTime="9 min read"
        />
      </div>

      <div className="py-2">
        <ProofBand
          rating={4.9}
          ratingCount="working old-student perspective, not a lineage-authorized teacher"
          highlights={[
            "Anchored to a real file at src/app/daily-sit-log/print/page.tsx",
            "Refers every operational practice question to dhamma.org and an authorized assistant teacher",
            "Written from inside a full-time work calendar, not from inside a meditation app",
          ]}
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-10">
        <BackgroundGrid pattern="dots" glow={true}>
          <div className="max-w-2xl mx-auto">
            <RemotionClip
              title="The instrument working professionals actually keep"
              subtitle="One sheet, 366 cells, four rules, no streak."
              captions={[
                "Apps make the streak the boss; that breaks during a real work quarter.",
                "The page deletes the streak. Empty cells stay empty. Tomorrow is a fresh square.",
                "AM goes in the upper-left half. PM in the lower-right. That is the entire UI.",
                "It survives device migrations, app sunsets, and silent retreats.",
                "File: src/app/daily-sit-log/print/page.tsx. Free, public domain, one Letter page.",
              ]}
              accent="teal"
            />
          </div>
        </BackgroundGrid>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The anchor fact: a single Letter page with 366 split cells
        </h2>
        <p className="text-zinc-600 mb-6 leading-relaxed">
          The printable lives at /daily-sit-log/print. Twelve rows, one per
          month. 31 columns, one per day, with February hard-coded to 29
          cells so leap years are correct without a JavaScript date library.
          Each cell is a square divided by a diagonal line; the upper-left
          half is AM and the lower-right half is PM. After a sit, you draw
          a stroke in the half you completed, then put the pen down. There
          is no number on the page anywhere.
        </p>
        <MetricsRow
          metrics={[
            {
              value: 366,
              label:
                "maximum cells on the page (12 months, with February at 29 for leap-year safety)",
            },
            {
              value: 1,
              label:
                "Letter sized portrait page that the entire year fits on at default margins",
            },
            {
              value: 4,
              label:
                "rules printed on the sheet, kept short on purpose so they cannot be misread at 5 AM",
            },
            {
              value: 0,
              prefix: "$",
              label:
                "cost of the file, the sheet, the practice; no subscription, no account, no app store",
            },
          ]}
        />
        <p className="mt-6 text-sm text-zinc-500 leading-relaxed">
          For anything operational about the sit itself (posture, length,
          what to do with attention) the redirect is to{" "}
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
          The four rules, printed on the page on purpose
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The rules are the entire opinionated layer of the instrument.
          They are kept short so a working professional reading the page
          half-awake before a 7 AM call cannot misread them. Each rule
          deletes a specific failure mode that recurs in old-student logs.
        </p>
        <AnimatedChecklist title="What is on the footer of the sheet" items={sheetRules} />
        <p className="text-zinc-600 leading-relaxed mt-6">
          The first rule prevents the cell from becoming a promise. The
          second rule deletes the streak counter. The third rule reframes
          a missed day so it does not start an avoidance loop. The fourth
          rule makes sure the page is in your visual field when the morning
          decision is being made.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <BeforeAfter
          title="The morning decision, with and without the sheet"
          before={{
            label: "With a streak app",
            content:
              "You wake up, unlock the phone to dismiss alarms, see the streak counter at 47, see three other notifications at the same time, and the practice has to compete with email and a news headline before it has even started. A missed day yesterday means the counter is at 0, and the most common next move is to skip today as well.",
            highlights: [
              "Practice competes with notifications at unlock",
              "Streak counter weaponizes any missed day",
              "Average post-sit action is another screen unlock",
            ],
          }}
          after={{
            label: "With the printed sheet",
            content:
              "You wake up, see the page on the wall, see a year-long pattern of strokes with some empty cells in it, sit, draw a stroke in the AM half, and the day starts. There is no number to defend, no notification waiting, and no streak to lose. An empty cell from yesterday means nothing other than that yesterday was empty.",
            highlights: [
              "Decision happens before the phone is in hand",
              "Empty cells carry no weight; the year-shape does",
              "Post-sit action is putting the pen down, not a screen unlock",
            ],
          }}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What the sheet receives, what it returns
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The diagram below names the three things that go into the
          instrument and the three things that come out of it across a
          year. Nothing in this flow involves a notification, a streak
          counter, or a server. The whole loop fits inside a kitchen.
        </p>
        <AnimatedBeam
          title="Inputs and outputs of the printable log"
          from={[
            {
              label: "A morning sit",
              sublabel: "the AM half of today's cell gets a stroke after sitting",
            },
            {
              label: "An evening sit",
              sublabel: "the PM half of the same cell gets a stroke if it happens",
            },
            {
              label: "A skipped day",
              sublabel: "the cell stays empty; the page does not ask for an explanation",
            },
          ]}
          hub={{
            label: "Letter sized page on a wall",
            sublabel: "twelve months, 366 cells, four rules",
          }}
          to={[
            {
              label: "A year-shaped pattern",
              sublabel: "visible at a glance from across the room",
            },
            {
              label: "A monthly diagnostic",
              sublabel: "you read on the first of each month, in 30 seconds",
            },
            {
              label: "A multi-year archive",
              sublabel: "stack the sheets in a folder; they survive every device upgrade",
            },
          ]}
          accentColor="#0d9488"
        />
        <p className="text-zinc-500 text-sm mt-6 max-w-3xl leading-relaxed">
          A reader who expects an analytics dashboard with charts is
          going to be disappointed. A reader who expects a piece of paper
          that does not interrupt them is going to be relieved.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Why the standard advice for working professionals fails
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Six recurring patterns from articles on this topic, and the
          reason each one stops holding for full-time professionals about
          a quarter into a real job. None of these are wrong in spirit.
          They put the load on the wrong instrument.
        </p>
        <BentoGrid cards={failureCards} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <ComparisonTable
          heading="A meditation app vs the printable sheet"
          productName="Printable sheet at /daily-sit-log/print"
          competitorName="A subscription meditation app"
          intro="Both can be useful. They are not the same object. The right column is what survives a five year career arc, including a layoff, a parental leave, and a 10-day silent retreat."
          rows={gapRows}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          A year with the sheet, in five steps
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Five concrete steps that describe a normal year of using the
          instrument. None of them require an app, an account, or a
          subscription. None of them are a teaching of the technique
          itself; for that, dhamma.org and an assistant teacher are the
          right address.
        </p>
        <StepTimeline title="Calendar layer of the practice" steps={yearRoutine} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <GlowCard>
          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-zinc-900 mb-3">
              The part this site will never give you
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Three things this page deliberately does not provide, and
              where to go for each. Naming the boundary is part of why the
              site can stay tradition-aligned and why the printable can
              stay narrow.
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
                The sheet does not tell you when to sit, how long to sit,
                or which half of the day to mark first. Those decisions
                belong to you and your teacher; the sheet only records
                the result.
              </li>
              <li>
                <strong className="text-zinc-900">A streak score.</strong>{" "}
                The instrument is built around the explicit deletion of
                this. There is no badge, no reset event, no leaderboard,
                no shareable graphic. The unit of feedback is a year-long
                pattern, not a counter.
              </li>
            </ul>
            <p className="text-zinc-600 leading-relaxed">
              What is left, after those three are subtracted, is small. A
              page on a wall. A pen. A diagonal line in a square.
              That is the entire instrument, and it is the part that has
              been load-bearing for a working life that includes meditation,
              not the other way around.
            </p>
          </div>
        </GlowCard>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Twelve concrete details from the source file
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Anyone with the repo can grep for any of these names and find
          the line that implements it in src/app/daily-sit-log/print/page.tsx.
          Nothing about the page is opaque; the file is about a hundred
          lines and uses no JavaScript at runtime.
        </p>
        <Marquee speed={45}>
          {sheetTags.map((t, i) => (
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
          professional has the cleanest claim on. By 9 AM the calendar
          has been rewritten by other people. The sheet protects that
          morning hour by removing one thing from it: the streak. With
          no streak to defend, a morning sit stops being a debt to a
          counter and goes back to being a sit. Over{" "}
          <NumberTicker value={5} /> years, the math on this is
          unkind to the apps. They renew. The page does not.
        </p>
        <p className="text-zinc-600 leading-relaxed mb-4">
          The honest position of this page is that the technique is the
          tradition&apos;s job, the daily appointment is the
          calendar&apos;s job, and the practice is yours. The printable
          on this site is a small piece of paper for the second of those
          three. It is not a teacher, not an app, not a streak system,
          and not a replacement for a 10-day residential course. It is a
          way to log a sit without inviting an app into the loop.
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
          paper side, the link is{" "}
          <Link
            href="/daily-sit-log/print"
            className="text-teal-600 underline hover:text-teal-700"
          >
            /daily-sit-log/print
          </Link>
          .
        </p>
      </section>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        heading="Want to talk through what your week can actually hold?"
        description="Book a short call. We can walk through your work calendar, decide whether the sheet, the buddy, or both fits, and pick a defendable morning slot before you commit to anything."
        section="daily-meditation-practice-working-footer"
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
            href="/daily-sit-log/print"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Printable Daily Sit Log (the file itself)
          </Link>
          <Link
            href="/t/daily-vipassana-working-professional"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Daily Vipassana Practice With a Full-Time Job
          </Link>
          <Link
            href="/t/vipassana-daily-practice"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Vipassana Daily Practice Rewiring
          </Link>
          <Link
            href="/guide/why-20-minutes-beats-two-hours"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Why 20 Minutes Beats Two Hours
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
        description="Talk through your work week and pick the right instrument: paper, buddy, or both."
        section="daily-meditation-practice-working-sticky"
      />
    </article>
  );
}
