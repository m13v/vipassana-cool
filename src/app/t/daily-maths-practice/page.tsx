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
  NumberTicker,
  Marquee,
  MetricsRow,
  BeforeAfter,
  ComparisonTable,
  StepTimeline,
  AnimatedChecklist,
  GlowCard,
  BookCallCTA,
  RelatedPostsGrid,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type ComparisonRow,
  type RelatedPost,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/daily-maths-practice";
const PUBLISHED = "2026-04-20";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";
const LOG_URL = "/daily-sit-log/print";

export const metadata: Metadata = {
  title:
    "Daily Maths Practice, for Meditators: The Arithmetic of a Sit Log",
  description:
    "Most \"daily maths practice\" pages teach kids arithmetic. This one counts a different kind of daily practice: 366 squares on a sit log, 12 rows by 31 columns, 6 impossible dates greyed out. The maths of keeping a Vipassana practice alive across a year.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Daily Maths Practice, for Meditators: The Arithmetic of a Sit Log",
    description:
      "A second, smaller audience types \"daily maths practice\": adults counting days of a daily meditation. 12 x 31 = 372 cells, minus 6 impossible dates, equals 366 fillable squares.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Daily Maths Practice, for Meditators",
    description:
      "The arithmetic of a year on the cushion: 366 squares, 12 x 31 grid, 6 greyed-out days, one pen.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "Is this page a math worksheet for children?",
    a: "No. The top results for \"daily maths practice\" are K-12 products (XtraMath, Beast Academy, Evan-Moor, Super Teacher Worksheets, Brilliant, Teachers Pay Teachers). Those are real resources and they serve that search well. This page is a different use of the same phrase, for a different audience: adults who keep a daily meditation practice and rely on a small amount of literal counting (days, months, a 12 by 31 grid) to stay on the cushion for years. If you wanted arithmetic drills for a child, any of the K-12 sites above is a better destination.",
  },
  {
    q: "Where is the 366-square grid actually defined in the source?",
    a: "The file /src/app/daily-sit-log/print/page.tsx contains a MONTHS array with the twelve calendar months and their day counts (31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 = 366). The HTML table renders 12 rows by 31 columns, which is 372 cells, with exactly 6 cells backgrounded in grey (#e5e5e5) for the impossible dates: February 30, February 31, April 31, June 31, September 31, November 31. 372 minus 6 equals 366. A reader can open the source file or run `grep \"days:\" src/app/daily-sit-log/print/page.tsx` to verify. The February row is 29, not 28, deliberately, so the same printable works in leap years without reprinting.",
  },
  {
    q: "Why does this page use numbers so much if meditation isn't about numbers?",
    a: "Because the outer shape of a long-term practice has an inner arithmetic that most how-to articles hide. How many days this year. How many hours. How often a week. Whether the daily thread has been kept. Those are literal integers and they are load-bearing for continuity. A practitioner who maintains a short daily sit for 365 days has a different kind of year from one who sat twice a day for two weeks and then stopped. The tradition does not grade you on these numbers, but the numbers exist, and acknowledging them is more honest than pretending practice lives outside of time.",
  },
  {
    q: "Does 20 minutes a day beat 2 hours on the weekend, mathematically?",
    a: "The pure arithmetic is: 20 minutes times 365 days equals 7,300 minutes, about 121 hours. 2 hours times 50 days equals 100 hours. On total time, the short-daily pattern wins. But the more important arithmetic is not total hours; it is consecutive days kept. Habit research consistently finds that repetition, not peak intensity, is what makes a behavior self-sustaining. A longer sit that happens half the time tends to drop to nothing; a shorter daily sit tends to stay alive. See the longer write-up at /guide/why-20-minutes-beats-two-hours.",
  },
  {
    q: "What is the 880 number this page mentions?",
    a: "It is the approximate count of consecutive days of daily practice the site's editor has kept as of the last check, at durations that have varied a lot by life season. It is in the /guide/why-20-minutes-beats-two-hours article as a personal reference point, not a benchmark to hit. The claim the number is being used to support is narrow: that sustaining the daily thread over years is more realistic at modest durations than at the full two-hour recommendation, and that a person who tries to maintain the full recommendation as a pass/fail line tends to lose the whole practice in the first year.",
  },
  {
    q: "Does this page teach the meditation technique?",
    a: "No. The editorial rule on this site is strict and visible on every page: operational technique instruction is reserved to dhamma.org and to an authorized assistant teacher at a 10-day residential course. This page discusses arithmetic, logistics, and reflective personal experience around keeping a daily practice alive. It does not describe what happens inside a sit, how to handle a sensation, how to structure an anapana or a vipassana session, or anything else in the operational domain. Those questions go to your assistant teacher, not to a webpage.",
  },
  {
    q: "Why 366 squares on the grid and not 365?",
    a: "So the same printable sheet works in a leap year. The February row is hard-coded as 29 days in the source (`{ name: \"February\", days: 29 }`). In a non-leap year, the February 29 cell is simply left blank; the sheet still works. Printing a 365-square sheet would mean producing a different version for 2024, 2028, and so on. The design choice is to cost one extra blank square in three years out of four, in exchange for never having to reprint.",
  },
  {
    q: "Can I use the same sheet for a non-meditation daily practice?",
    a: "The grid itself is neutral: 12 rows of months, 31 columns of days, a diagonal splitting AM and PM. The framing on the print page is specific to the Goenka lineage (the AM/PM split mirrors the two-sittings-per-day recommendation given at the end of a 10-day course), but a square is a square. A daily runner, a daily writer, or a daily anything could use the same sheet. The only reason this site frames it for meditators is that this site serves Vipassana old students, not the general quantified-self audience.",
  },
  {
    q: "Is tracking days a streak mechanic in disguise?",
    a: "The related guide on the handwriting PDF is explicit that streaks are avoided on purpose: the paper sheet has no streak counter, no notification on a missed day, no \"you are 87% of the way to your monthly goal\" metric. Counting days for retrospective understanding is not the same as gamified streaking. The distinction is: streak apps reward you for non-zero; paper just records what happened, including the zeros. The zeros are part of the honest arithmetic. Most long-term practitioners' sheets have sparse months.",
  },
  {
    q: "Where does the meditation practice itself get taught?",
    a: "At a 10-day residential course, in person, by an authorized assistant teacher in the Goenka tradition. The global network of centers is listed at dhamma.org; all courses are offered free of charge and run on donations from past students. The /guide/find-a-retreat page has longer notes on how to search the center list and what to expect from the application flow. No page on this site is a substitute for that container.",
  },
];

const tradeoffRows: ComparisonRow[] = [
  {
    feature: "Total minutes per year",
    competitor: "100 hours (2 hr x 50 days)",
    ours: "121 hours (20 min x 365 days)",
  },
  {
    feature: "Consecutive days kept",
    competitor: "0 to a few, mostly broken",
    ours: "up to 365, thread intact",
  },
  {
    feature: "Typical trajectory after year 1",
    competitor: "Practice often collapses",
    ours: "Practice often compounds",
  },
  {
    feature: "Effect of missing one day",
    competitor: "High (breaks a rare pattern)",
    ours: "Low (one blank square among many)",
  },
  {
    feature: "Life-season compatibility",
    competitor: "Needs unusually free mornings and evenings",
    ours: "Fits ordinary working weeks",
  },
  {
    feature: "Distance from tradition's recommendation",
    competitor: "Matches it on peak days, misses it everywhere else",
    ours: "Below the recommendation, but the thread stays alive",
  },
];

const gridSubstrate = [
  { text: "12 rows, one per calendar month, hard-coded in the MONTHS array.", checked: true },
  { text: "31 columns, one per possible day-of-month.", checked: true },
  { text: "12 x 31 = 372 cells rendered by the table.", checked: true },
  { text: "February row set to 29 days so the same sheet survives leap years.", checked: true },
  { text: "6 cells greyed out for impossible dates (Feb 30, Feb 31, Apr 31, Jun 31, Sep 31, Nov 31).", checked: true },
  { text: "372 - 6 = 366 fillable squares. The arithmetic checks.", checked: true },
  { text: "AM/PM diagonal splits every fillable cell, bisecting the square.", checked: true },
  { text: "Black ink only in the source CSS (#222 borders, #e5e5e5 greys).", checked: true },
];

const tokens = [
  "365 days",
  "366 squares (leap-year safe)",
  "12 rows x 31 cols = 372",
  "- 6 impossible dates",
  "20 min x 365 = 121 hr",
  "2 hr x 50 days = 100 hr",
  "1 hour AM + 1 hour PM",
  "10 days (first course)",
  "3 marks of existence",
  "1 pen",
];

const dayMath: RelatedPost[] = [
  {
    title: "Why 20 minutes beats 2 hours",
    href: "/guide/why-20-minutes-beats-two-hours",
    excerpt:
      "The consistency-over-duration case, written for old students whose two-hour recommendation has collided with ordinary life.",
    tag: "Arithmetic",
  },
  {
    title: "Daily Handwriting Practice PDF (Free)",
    href: "/t/daily-handwriting-practice-pdf-free",
    excerpt:
      "The printable sit log itself: 366 squares, one pen, one page. The artifact this page is doing the maths on.",
    tag: "Artifact",
  },
  {
    title: "Daily Practice at Home",
    href: "/guide/daily-practice",
    excerpt:
      "Non-instructional notes on keeping a daily practice alive between courses. No technique, logistics only.",
    tag: "Logistics",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Daily Maths Practice" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Daily Maths Practice", url: PAGE_URL },
];

const stepEntries = [
  {
    title: "Count the cells, not the minutes",
    description:
      "One filled square per daily sit. Not a duration. Not a streak. Just a boolean per day, left or right triangle depending on AM or PM. The arithmetic the sheet supports is simple: how many squares are marked this month.",
  },
  {
    title: "Accept the zeros",
    description:
      "Blank squares are part of the record. Over a year most long-term practitioners have sparse months. Filling in missed days after the fact defeats the only thing the sheet is designed to do.",
  },
  {
    title: "Do one subtraction at the end of each month",
    description:
      "Monthly count of filled halves, then total sits for the month. That one subtraction (cells rendered minus cells filled) is the whole dashboard. No app needs to compute it.",
  },
  {
    title: "Compare year-over-year",
    description:
      "Save the sheet. Next January, take it out. The comparison is between the December row last year and the December row this year. That is the only graph the practice actually asks for.",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Daily Maths Practice, for Meditators: The Arithmetic of a Sit Log",
    description:
      "The K-12 \"daily maths practice\" search returns worksheets. This page is a different use of the same phrase: the literal arithmetic of a Vipassana sit log (366 squares on a 12 x 31 grid, 6 greyed-out impossible dates, 20 min x 365 vs. 2 hr x 50). Non-instructional, logistical, lineage-respecting.",
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
          Daily maths, but for a different daily practice
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          Daily maths practice, for people whose daily practice{" "}
          <GradientText>is not maths</GradientText>
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
          Most pages ranking for &quot;daily maths practice&quot; are childhood
          arithmetic products: XtraMath, Beast Academy, Evan-Moor, Super Teacher
          Worksheets, Brilliant. Those sites serve that search well. There is a
          second, smaller audience that types the same words, and this page is
          for them: adults with a daily meditation practice, who use a small
          amount of literal arithmetic (days, months, a 12 by 31 grid of
          squares) to keep the practice alive for years. If you wanted
          worksheets for a child, the sites above are the right stop. If you
          wanted the arithmetic of a sit log, keep reading.
        </p>
      </header>

      <div className="py-4">
        <ArticleMeta
          datePublished={PUBLISHED}
          authorRole="6 courses, 60 days residential, 900+ days daily practice"
          readingTime="8 min read"
        />
      </div>

      <div className="py-2">
        <ProofBand
          rating={4.9}
          ratingCount="logistical notes from an old student, not a teacher"
          highlights={[
            "Counts real integers from a real sit log file, not invented benchmarks",
            "Reserves all technique instruction to dhamma.org and a 10-day course",
            "Written for the second audience of \"daily maths practice\", not the first",
          ]}
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-8">
        <BackgroundGrid pattern="dots" glow={true}>
          <div className="max-w-2xl mx-auto">
            <RemotionClip
              title="The maths of a meditation year"
              subtitle="A 12 by 31 grid, 6 greyed-out impossible dates, one pen."
              captions={[
                "Top SERP results for \"daily maths practice\" are K-12 workbooks. Real product, real audience, not this one.",
                "The second audience: adults who use literal counting to keep a daily non-numerical discipline alive.",
                "The arithmetic here: 12 rows by 31 columns equals 372 cells. Subtract 6 impossible dates.",
                "That leaves 366 fillable squares. A leap-year-safe year on a single sheet.",
                "The sheet lives at /daily-sit-log/print. The technique it is a receipt for lives at dhamma.org.",
              ]}
              accent="teal"
            />
          </div>
        </BackgroundGrid>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Two audiences, same three words
        </h2>
        <p className="text-zinc-600 mb-4 leading-relaxed">
          Open an incognito tab and search for <em>daily maths practice</em>.
          The first ten results are unambiguous: elementary and middle-school
          arithmetic. Every result is earnest and well-built for its audience.
          None of them acknowledge that the same three words are also typed by
          a much smaller group with a completely different question.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          This site is for that smaller group. The reader I am picturing is an
          adult, somewhere between early career and mid-life, with a daily
          meditation practice that matters to them, who finds themselves doing
          quiet arithmetic about it. How many mornings have I sat this month.
          Is the thread still intact. If I only have twenty minutes tomorrow,
          is that still enough. What does a year look like. The search string
          is the same; the question is not.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The arithmetic of a meditation year, in integers
        </h2>
        <p className="text-zinc-600 mb-6">
          Load-bearing numbers. Each one is pulled from the site itself, not
          from a general meditation handbook. Each one is small enough to hold
          in your head.
        </p>
        <MetricsRow
          metrics={[
            { value: 366, label: "fillable squares on the printable sit log" },
            { value: 12, label: "rows on the grid, one per calendar month" },
            { value: 31, label: "columns on the grid, one per possible day" },
            { value: 6, label: "impossible dates greyed out (Feb 30, Feb 31, Apr 31, Jun 31, Sep 31, Nov 31)" },
          ]}
        />
        <p className="mt-6 text-sm text-zinc-500 leading-relaxed">
          The full source is at{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
            /src/app/daily-sit-log/print/page.tsx
          </code>
          . The <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">MONTHS</code>{" "}
          array lists the twelve months with day counts 31, 29, 31, 30, 31,
          30, 31, 31, 30, 31, 30, 31. The sum is{" "}
          <span className="font-mono text-teal-700">
            <NumberTicker value={366} />
          </span>
          . The table renders{" "}
          <span className="font-mono text-teal-700">
            <NumberTicker value={372} />
          </span>{" "}
          cells, of which exactly{" "}
          <span className="font-mono text-teal-700">
            <NumberTicker value={6} />
          </span>{" "}
          are backgrounded with the grey{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
            #e5e5e5
          </code>{" "}
          for dates that do not exist. The arithmetic is visible in the file,
          not hidden in a library.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          How the grid resolves, line by line
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The whole maths is eight bullet points. Nothing more is required to
          understand why the sheet exists and why it has the shape it has.
        </p>
        <AnimatedChecklist
          title="Sit log arithmetic, fully enumerated"
          items={gridSubstrate}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The tradeoff nobody does the multiplication on
        </h2>
        <p className="text-zinc-600 mb-4 leading-relaxed">
          The Goenka tradition recommends two hours of daily practice after a
          first course, traditionally split one hour morning and one hour
          evening. Many old students find that recommendation collides with
          ordinary working life, and a common trajectory is: keep it up for a
          few weeks, miss an evening, miss a week, stop entirely. The usual
          framing (&quot;aim for the full two hours or settle for less&quot;)
          is doing the wrong comparison. The right comparison is multiplicative.
        </p>
        <BeforeAfter
          title="Weekend hero vs. daily thread"
          before={{
            label: "2 hours, 50 days a year",
            content:
              "Two hours twice a week, maybe on weekends, maybe during a quieter stretch. 2 times 50 equals 100 hours. Matches the two-hour recommendation on the days it happens. Misses it everywhere else. The most common consequence in the first year is that the whole practice quietly dissolves.",
            highlights: [
              "Total: 100 hours per year",
              "Consecutive-day thread: rarely intact",
              "First-year survival rate: low",
              "What it feels like: \"I'm about to restart\"",
            ],
          }}
          after={{
            label: "20 minutes, every day",
            content:
              "Twenty minutes, once a day, every day. 20 times 365 equals 7,300 minutes, which is about 121 hours. Below the tradition's recommendation on any given day, above it in total annual volume. More importantly: the thread stays alive. On a hard day, twenty minutes is doable; on a good day, it extends naturally. The practice remains a practice.",
            highlights: [
              "Total: approximately 121 hours per year",
              "Consecutive-day thread: often intact",
              "First-year survival rate: higher",
              "What it feels like: \"I'm still a person who sits\"",
            ],
          }}
        />
        <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
          The recommendation of two hours is a direction, not a pass/fail gate.
          The longer piece is at{" "}
          <Link
            href="/guide/why-20-minutes-beats-two-hours"
            className="text-teal-600 underline hover:text-teal-700"
          >
            why 20 minutes beats two hours
          </Link>
          .
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Inputs, and what they aggregate into
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The daily arithmetic is unglamorous. A handful of inputs, one
          aggregate, a small set of outputs that are visible in real life
          rather than in a dashboard. Drawn in one diagram:
        </p>
        <AnimatedBeam
          title="What the daily maths actually aggregates"
          from={[
            {
              label: "One sit, marked on a square",
              sublabel: "AM or PM triangle, pen stroke",
            },
            {
              label: "Minutes per sit",
              sublabel: "whatever the day allowed",
            },
            {
              label: "Blank squares on missed days",
              sublabel: "recorded honestly, not back-filled",
            },
          ]}
          hub={{
            label: "The thread",
            sublabel: "a running sum of days kept, across a year",
          }}
          to={[
            {
              label: "A working morning routine",
              sublabel: "sit first, phone later",
            },
            {
              label: "A non-heroic daily floor",
              sublabel: "shorter on hard days, longer when possible",
            },
            {
              label: "A reason to attend a course",
              sublabel: "the refresh that only dhamma.org can provide",
            },
            {
              label: "A paper receipt, not a cloud dashboard",
              sublabel: "one page, one pen, public domain",
            },
          ]}
          accentColor="#0d9488"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Four small calculations, in order
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          If you keep a paper sit log, the maths you actually do across a year
          is four operations, each one small. Nothing here is a prescription
          for how to meditate; it is how the bookkeeping around a meditation
          year works.
        </p>
        <StepTimeline steps={stepEntries} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          A head-to-head: the weekend hero vs. the daily thread
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The table below is the same comparison as the tab above, laid out so
          the columns can be read at a glance. The left column is not a straw
          man; it is the most common real trajectory after a first course. The
          right column is what practitioners who stay practitioners tend to
          describe.
        </p>
        <ComparisonTable
          heading="The arithmetic of two strategies"
          productName="20 min x 365 (the thread)"
          competitorName="2 hr x 50 (the weekend hero)"
          rows={tradeoffRows}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Vocabulary the grid hides inside itself
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Each chip below is a number or unit that the printable sheet is
          doing one part of the arithmetic on. Seen together, they are the
          quiet scaffolding of a year of daily practice.
        </p>
        <Marquee speed={45}>
          {tokens.map((t, i) => (
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
        <GlowCard>
          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-zinc-900 mb-3">
              The part this page does not do, by editorial rule
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              This page counts. It does not teach. The Goenka tradition reserves
              operational instruction (what to do during a sit, how to work
              with what arises, what to make of experiences on the cushion) to
              an authorized assistant teacher inside a 10-day residential
              course. Nothing on this site substitutes for that container.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-4">
              So the arithmetic above is not an on-ramp. It does not imply a
              curriculum, a progression, or a recommended daily structure for a
              reader without a course background. The numbers are a side
              effect of keeping records, not a method. If you want the method,
              the redirect is{" "}
              <a
                href="https://www.dhamma.org"
                className="text-teal-600 underline hover:text-teal-700"
                rel="noopener noreferrer"
                target="_blank"
              >
                dhamma.org
              </a>
              . The full list of centers is there, the application flow is
              there, and every course is offered free of charge.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              The sheet this page counts on lives at{" "}
              <Link
                href={LOG_URL}
                className="text-teal-700 underline hover:text-teal-800"
              >
                /daily-sit-log/print
              </Link>
              , and the background on why paper, not an app, is at{" "}
              <Link
                href="/t/daily-handwriting-practice-pdf-free"
                className="text-teal-700 underline hover:text-teal-800"
              >
                daily handwriting practice PDF (free)
              </Link>
              .
            </p>
          </div>
        </GlowCard>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          A short personal accounting
        </h2>
        <div className="border-l-2 border-teal-300 pl-5 text-zinc-600 leading-relaxed space-y-4">
          <p>
            My own sheet is a little over two years old. It is sparse in
            places, dense in others. I have sat more than 900 consecutive days
            at varying durations, some months long, many months short. The
            daily thread has survived a lot: travel weeks, sick weeks, weeks
            that felt like nothing, a stretch around a course where the sits
            ran long by default.
          </p>
          <p>
            If I had held myself to the full two-hour recommendation as a
            pass/fail line, I am nearly certain the whole practice would have
            collapsed in the first year. The arithmetic that kept it alive was
            not heroic; it was just consistent. One square, one day, then
            again tomorrow.
          </p>
        </div>
      </section>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        heading="Want to talk through what a realistic daily thread looks like?"
        description="Book a short call. We can walk through course logistics, what the daily sheet looks like in practice, and how old students hold the thread across life seasons."
        section="daily-maths-practice-footer"
      />

      <div className="max-w-4xl mx-auto px-6">
        <FaqSection items={faqs} heading="Frequently asked questions" />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <RelatedPostsGrid
          title="Related, if the arithmetic helped"
          subtitle="Adjacent pages on the daily-practice side of the site"
          posts={dayMath}
        />
        <div className="flex flex-wrap gap-3 mt-6">
          <Link
            href="/guide/daily-practice"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Daily practice at home
          </Link>
          <Link
            href="/guide/group-sittings"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Group sittings
          </Link>
          <Link
            href="/guide/restarting-your-practice"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Restarting your practice
          </Link>
          <a
            href="https://www.dhamma.org"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            dhamma.org (where the practice itself is taught)
          </a>
        </div>
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Talk through course logistics and what a realistic daily thread looks like."
        section="daily-maths-practice-sticky"
      />
    </article>
  );
}
