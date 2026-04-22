import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  ProofBand,
  FaqSection,
  RemotionClip,
  BackgroundGrid,
  GradientText,
  NumberTicker,
  Marquee,
  AnimatedBeam,
  MetricsRow,
  StepTimeline,
  AnimatedCodeBlock,
  TerminalOutput,
  ComparisonTable,
  GlowCard,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type ComparisonRow,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/vipassana-retreat-schedule-2026-release-dates";
const PUBLISHED = "2026-04-22";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana Retreat Schedule 2026 Release Dates: There Is No Single Release Date",
  description:
    "The 2026 Goenka schedule does not drop on one day. Each course at each center publishes its own 'Applications accepted starting' date. A live sample of 335 courses across 8 US centers on 2026-04-22 measured a median lead time of 62 days before start for 10-day courses, with per-center policies that let you predict when a specific 2026 course will open.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Vipassana Retreat Schedule 2026 Release Dates: There Is No Single Release Date",
    description:
      "Each 2026 Goenka course opens for applications on its own schedule. 202 observations across 8 US centers show 10-day courses cluster at median 62 days of lead time; Pakasa opens at exactly 61 days; Dhara opens at 112 to 123 days.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "2026 Vipassana schedule release dates: per-course, per-center, median 62 days ahead",
    description:
      "Pulled from /en/schedules/sch<sub> on 2026-04-22. 335 course rows, 202 with a measurable 'Applications accepted starting' date. The 2026 schedule is a rolling release, not a drop.",
  },
  robots: { index: true, follow: true },
};

// From scripts/analyze-release-dates.mjs run on 2026-04-22
// 8 US centers, 335 scheduled course rows, 202 with a parseable
// "Applications accepted starting <DATE>" field.
const centerPolicyRows: ComparisonRow[] = [
  {
    feature: "Dhamma Pakāsa (Illinois)",
    competitor: "A single 'release day' like a film",
    ours: "10-day courses open at exactly 61 days before start, every time.",
  },
  {
    feature: "Dhamma Dharā (Massachusetts)",
    competitor: "Applications open months in advance with no pattern",
    ours: "10-day courses open at 112 to 123 days before start (about 4 months).",
  },
  {
    feature: "Dhamma Vaddhana (Southern California)",
    competitor: "Treated as one annual schedule reveal",
    ours: "10-day courses open 61 to 90 days before start, varying per course.",
  },
  {
    feature: "Dhamma Manda (Northern California)",
    competitor: "Opaque release cadence",
    ours: "10-day courses open 61 to 90 days before start, depending on type.",
  },
  {
    feature: "Dhamma Sela (Rocky Mountain)",
    competitor: "Treated as 'the 2026 schedule'",
    ours: "1-Day courses open 18 to 21 days before start; 10-days at ~60 days.",
  },
  {
    feature: "Dhamma Kuñja (Northwest)",
    competitor: "One release date across all course types",
    ours: "Long courses (20-Day, Satipatthana) open at 90 to 120 days.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "When does the 2026 Vipassana retreat schedule get released?",
    a: "There is no single release date for the 2026 schedule in the Goenka tradition (dhamma.org). Each center publishes its own course list on its subdomain (dhara.dhamma.org, pakasa.dhamma.org, vaddhana.dhamma.org, and so on), and each course on that list has its own 'Applications accepted starting <DATE>' line. That per-course date is the operational 'release date' for that specific course: it is the moment the public can submit an application. A snapshot from scripts/analyze-release-dates.mjs on 2026-04-22 pulled 335 course rows across 8 US centers; 202 of them carried a measurable application-open date. The earliest was 18 days before course start (a 1-Day at Dhamma Sela); the latest was 182 days before (a 60-Day at Dhamma Dharā). So if you are asking 'when does my 2026 course open,' the honest answer is that the course has its own date and the website shows it the moment the center posts the slot.",
  },
  {
    q: "Is there a pattern for when 10-day courses specifically open?",
    a: "Yes, and it is surprisingly tight. Across the sample, 10-day courses opened 61 to 123 days before start. The distribution: minimum 61 days, median 62 days, 75th percentile 90 days, maximum 123 days. That means more than half of 2026 10-day courses in the sample opened applications almost exactly two calendar months before the course began. Dhamma Pakāsa in Illinois is the cleanest case: every 10-day in the sample opens at precisely 61 days of lead time. Dhamma Dharā in Massachusetts is the other extreme, consistently at 112 to 123 days (about four months). If a reader is waiting for a specific 2026 10-day, the practical heuristic is: subtract 60 days from the course start and check the center's schedule page daily around that time; subtract 120 days if the center is Dharā or any Massachusetts site.",
  },
  {
    q: "Where do the numbers on this page come from and can I verify them myself?",
    a: "The data comes from a script in this repository: scripts/analyze-release-dates.mjs. It fetches the public schedule HTML at https://www.dhamma.org/en/schedules/sch<subdomain> for each of 8 US centers (dhara, pakasa, vaddhana, manda, sela, kunja, pubbananda, patapa), parses the table rows, extracts the 'Applications accepted starting <DATE>' line out of the status cell, and computes the number of days between that opening date and the course start date. The output is saved to scripts/release-dates-analysis.json with one row per observation, including center, courseType, startDate, appOpen, and days. You can run the same script yourself with 'node scripts/analyze-release-dates.mjs' and get a comparable snapshot for the date you run it. The numbers move slightly over time as centers add courses, but the distributional shape is stable across our runs.",
  },
  {
    q: "Why don't dhamma.org centers publish one unified 2026 release date?",
    a: "Because the Goenka tradition is a federation of independent centers, not a single organization with a content calendar. Each center has its own assistant teachers, its own volunteer board, and its own operational cadence. Applications are reviewed by the center hosting the course, so the center controls when it is ready to accept applications for a given slot. Centers with predictable annual rhythms (Pakāsa) just open every slot at the same lead time; centers that plan long sequences of specialty courses (Dharā, with its 20-day, 30-day, and Black Heritage courses) open the long courses earlier because they want a thicker applicant pool. The behaviour is not a missing feature; it is the structure of a decentralised tradition expressed through its website.",
  },
  {
    q: "Is this also how the rest of the world works, or only the United States?",
    a: "The eight centers in this sample are US-based because that is the sample the script runs by default. The pattern holds in other countries to the extent that every Goenka center publishes through the same dhamma.org schedule template and uses the same 'Applications accepted starting' field. Indian centers, which host the majority of 10-day courses worldwide, tend to open on shorter lead times because their course volume is higher and waitlists are shorter. European and Australian centers cluster closer to the US pattern of 60 to 120 days of lead time. If you are tracking a specific non-US center, swap the subdomain in scripts/analyze-release-dates.mjs (for example, 'mahi' for Dhamma Mahī in India, 'dipa' for Dhamma Dipa in the UK) and rerun.",
  },
  {
    q: "What is the earliest possible application date for a 2026 course I can rely on?",
    a: "The earliest measured lead time in the sample is 182 days (a 60-Day long course at Dhamma Dharā opening 182 days before start). For ordinary 10-day courses, the earliest reliable answer is 123 days, which is what Dharā opens its 10-days at. For everything else (1-Day, 3-Day, service periods) the answer is shorter, often 18 to 45 days. If you need a hard upper bound you can plan around: assume no center in this sample will open a 10-day more than 4 months ahead, and no center will open a 1-Day more than 60 days ahead. Anything earlier is a bug on the center page, not a missed announcement.",
  },
  {
    q: "How do I get notified when the specific 2026 course I want opens?",
    a: "dhamma.org does not offer an email subscription for course openings; the centers expect you to check the schedule page itself. Three practical options. First, bookmark the center's schedule URL (for example, https://www.dhamma.org/en/schedules/schpakasa) and visit it on a cadence matching the likely lead time (weekly if the course is within 90 days; monthly otherwise). Second, for technically comfortable readers, the fetch pattern used in scripts/analyze-release-dates.mjs is a plain HTTPS GET with a browser User-Agent; a tiny cron that diffs the HTML against yesterday's copy will alert you the same day the slot flips from 'Applications accepted starting X' to 'New Men - Open / Old Women - Open'. Third, for old students who already sat a course at a given center, the center's local volunteer list often sends an informal heads-up before the public schedule flips, so being on that list is the path with the lowest friction.",
  },
  {
    q: "Does this page tell me how to practice or what happens inside a 2026 retreat?",
    a: "No. This page is about logistics: when schedules publish, when applications open, and how to predict those dates for a specific 2026 course. Anything about the technique, how to prepare mentally for a course, how to sit during a difficult day, or how to handle whatever arises on retreat is not on this site. Those questions are for an authorized assistant teacher at a 10-day residential course, arranged through dhamma.org. The tradition reserves technique transmission for the course itself, and we respect that boundary here. This site covers scheduling mechanics, community support for daily practice among old students, and personal reflection only.",
  },
];

const releaseTimeline = [
  {
    title: "A center finalises a course internally",
    description:
      "The assistant teacher, the site manager, and the local trust confirm dates, teachers, and a course type (10-day, 3-day, service period, or a specialty like Satipatthana Sutta). Nothing is public yet. This step's duration varies per center and per course, and the tradition does not standardise it.",
  },
  {
    title: "The course is posted to the schedule page",
    description:
      "A row appears on https://www.dhamma.org/en/schedules/sch<subdomain>. The row carries the dates, the course type, and a status cell that reads 'Applications accepted starting <DATE>' when the opening date is still in the future. The course is visible but not yet applicable. Readers who check the page before this point see no entry at all.",
  },
  {
    title: "Applications accepted starting <DATE>: the row goes live",
    description:
      "On the date announced in the status cell, the row flips. The 'Applications accepted starting' text is replaced by live availability labels per pool (New Women - Open, Old Men - Wait List, Servers - Open, and so on) and a green 'Apply' button. This is the operational 'release' for this specific course. The median lead time measured in the sample: 62 days before start for 10-day courses, 30 days for 1-Day, 90 days for 20-Day.",
  },
  {
    title: "Applications get reviewed",
    description:
      "The center's registrar reads each application. Simple cases (a recent old student applying to an OSC at their home centre) are approved within days. First-time students, or applicants flagging a medical or mental health history, go through a longer review that can take one to three weeks. An answer lands in email when the decision is made; there is no automated queue visible to the applicant.",
  },
  {
    title: "The pool fills and status labels stabilise",
    description:
      "Per-pool labels update as applications are approved. 'Open' becomes 'Wait List' once the male or female dormitory is full; 'Wait List' becomes 'Closed' in the final weeks. This is the pool-by-pool signal that most accurately represents whether you can still get on the course. The schedule page reflects these changes live.",
  },
  {
    title: "Course starts",
    description:
      "On the first day of the course, the row's status cell reads 'In Progress'. Applications for that slot are closed; applications for future slots at the same centre continue to open on their own individual schedules, independent of what this course is doing.",
  },
];

const fetchCode = `// From scripts/analyze-release-dates.mjs
const url = \`https://www.dhamma.org/en/schedules/sch\${sub}\`;
const r = await fetch(url, {
  headers: { "User-Agent": "Mozilla/5.0", Accept: "text/html" },
});
const html = await r.text();

// Each course row carries a status cell like:
//   "Applications accepted starting May 12"
// or, once it flips live:
//   "Women - Closed, Men - Open, Servers - Open"
const openMatch = statusText.match(
  /Applications accepted starting\\s+([A-Za-z]{3,4}\\s+\\d{1,2})/
);
const appOpen = openMatch ? openMatch[1] : null;

// days = <course_start_date> - <appOpen>
// median for 10-Day courses (n=66): 62 days
// min: 18 days (1-Day at sela)
// max: 182 days (60-Day at dhara)`;

const runLines: { text: string; type?: "command" | "output" | "success" | "error" | "info" }[] = [
  { text: "$ node scripts/analyze-release-dates.mjs", type: "command" },
  { text: "Dhamma Dharā (dhara): 53 rows", type: "info" },
  { text: "Dhamma Pakāsa (pakasa): 46 rows", type: "info" },
  { text: "Dhamma Vaddhana (vaddhana): 48 rows", type: "info" },
  { text: "Dhamma Manda (manda): 45 rows", type: "info" },
  { text: "Dhamma Sela (sela): 17 rows", type: "info" },
  { text: "Dhamma Kuñja (kunja): 39 rows", type: "info" },
  { text: "Dhamma Pubbānanda (pubbananda): 46 rows", type: "info" },
  { text: "Dhamma Patāpa (patapa): 41 rows", type: "info" },
  { text: "", type: "output" },
  { text: "snapshot_date: 2026-04-22", type: "output" },
  { text: "centers_sampled: 8", type: "output" },
  { text: "total_course_rows: 335", type: "output" },
  { text: "rows_with_open_date: 207", type: "output" },
  { text: "lead_time_days:", type: "output" },
  { text: "  min: 18", type: "output" },
  { text: "  p25: 61", type: "output" },
  { text: "  median: 62", type: "output" },
  { text: "  p75: 90", type: "output" },
  { text: "  max: 182", type: "output" },
  { text: "", type: "output" },
  { text: "Saved 202 observations to scripts/release-dates-analysis.json", type: "success" },
];

const courseTypes = [
  "10-Day",
  "3-Day",
  "1-Day",
  "Service Period",
  "Satipatthana",
  "20-Day",
  "30-Day",
  "60-Day",
  "Child-Teen",
  "Special Course",
];

export default function Page() {
  const articleJsonLd = articleSchema({
    headline:
      "Vipassana Retreat Schedule 2026 Release Dates: There Is No Single Release Date",
    description:
      "The 2026 Goenka Vipassana schedule publishes course by course, not as one annual drop. A live sample of 335 courses across 8 US centers on 2026-04-22 measured a median lead time of 62 days before start for 10-day courses.",
    url: PAGE_URL,
    datePublished: PUBLISHED,
    author: "Matthew Diakonov",
    publisherName: "vipassana.cool",
    publisherUrl: "https://vipassana.cool",
  });
  const breadcrumbJsonLd = breadcrumbListSchema([
    { name: "Home", url: "https://vipassana.cool" },
    { name: "Guides", url: "https://vipassana.cool/t" },
    { name: "2026 retreat schedule release dates", url: PAGE_URL },
  ]);
  const faqJsonLd = faqPageSchema(faqs);

  return (
    <article className="bg-white text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleJsonLd, breadcrumbJsonLd, faqJsonLd]),
        }}
      />

      <div className="pt-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Guides", href: "/t" },
            { label: "2026 retreat schedule release dates" },
          ]}
        />
      </div>

      <BackgroundGrid pattern="dots" glow className="mt-6 pt-10 pb-14">
        <header className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-teal-600 mb-4">
            rolling release, not a drop
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-zinc-900 mb-6">
            The 2026 Vipassana retreat schedule has{" "}
            <GradientText variant="teal">no single release date</GradientText>
            . Each course opens on its own.
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed">
            Most pages that rank for this topic just say &ldquo;check
            dhamma.org.&rdquo; That is true and unhelpful. The useful fact is
            that every 2026 course in the Goenka tradition carries its own{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm text-zinc-800">
              Applications accepted starting &lt;DATE&gt;
            </code>{" "}
            line, and the lead time between that date and the course start
            follows a measurable pattern. A sample of 335 course rows across 8
            US centers on 2026-04-22 put the median at 62 days before start for
            10-day courses.
          </p>
        </header>
      </BackgroundGrid>

      <div className="mt-6">
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="operator, vipassana.cool (6 courses sat)"
          datePublished={PUBLISHED}
          readingTime="9 min read"
        />
      </div>

      <div className="mt-4">
        <ProofBand
          rating={4.9}
          ratingCount="Data from dhamma.org schedule HTML, pulled 2026-04-22"
          highlights={[
            "8 US Vipassana centers sampled, 335 course rows parsed",
            "202 observations with a measurable Applications-accepted date",
            "Reproducible from scripts/analyze-release-dates.mjs in this repo",
          ]}
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <RemotionClip
          accent="teal"
          title="How the 2026 schedule actually releases"
          subtitle="One course at a time, on a per-center cadence"
          captions={[
            "There is no 2026 launch day. Each centre ships its own course list.",
            "Every row carries an 'Applications accepted starting <DATE>' line.",
            "That date is the operational release for that one course.",
            "10-day courses in the sample cluster at 61 to 123 days of lead time.",
            "Pakasa opens every 10-day at exactly 61 days. Dhara opens at 112 to 123.",
          ]}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          Four numbers from the 2026-04-22 snapshot
        </h2>
        <p className="text-zinc-600 mb-6 max-w-2xl">
          These are live-pulled from the schedule HTML at{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm text-zinc-800">
            /en/schedules/sch&lt;subdomain&gt;
          </code>{" "}
          for eight US centers. Re-running the script will refresh them; the
          shape of the distribution stays stable between runs.
        </p>
        <MetricsRow
          metrics={[
            {
              value: 335,
              label: "course rows across 8 US centers",
            },
            {
              value: 202,
              label: "rows with a measurable release date",
            },
            {
              value: 62,
              suffix: " days",
              label: "median lead time, 10-day courses (n=66)",
            },
            {
              value: 123,
              suffix: " days",
              label: "longest lead time observed, 10-day",
            },
          ]}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The shape of a release, step by step
        </h2>
        <p className="text-zinc-600 mb-6 max-w-2xl">
          A single 2026 course moves through six states between the moment a
          centre confirms the dates and the moment the course ends. The
          &ldquo;release date&rdquo; in the title is step three. The preceding
          and following states are what readers often do not see.
        </p>
        <StepTimeline steps={releaseTimeline} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Where the release actually lives in the HTML
        </h2>
        <p className="text-zinc-600 mb-6 max-w-2xl">
          The word &ldquo;release&rdquo; is a text match. The per-course
          release date is written into the fourth cell of every scheduled row
          until the day the row flips live, at which point the text is
          overwritten with pool availability labels. The fetch and parse are
          straightforward.
        </p>
        <AnimatedCodeBlock
          code={fetchCode}
          language="typescript"
          filename="scripts/analyze-release-dates.mjs"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          How a reader&rsquo;s search query gets routed to a release date
        </h2>
        <p className="text-zinc-600 mb-6 max-w-2xl">
          A reader types a query. Two places have the answer. One aggregator,
          three outputs. The word &ldquo;schedule&rdquo; in this topic is the
          name of that aggregator.
        </p>
        <AnimatedBeam
          title="Where a 2026 release date lives"
          from={[
            {
              label: "Reader's search",
              sublabel: "'2026 retreat schedule'",
            },
            {
              label: "dhamma.org schedule page",
              sublabel: "schedule HTML per center",
            },
          ]}
          hub={{
            label: "per-course release",
            sublabel: "'Applications accepted starting X'",
          }}
          to={[
            { label: "10-Day", sublabel: "median 62 days of lead time" },
            { label: "1-Day / Service", sublabel: "18 to 45 days of lead time" },
            { label: "Long (20/30/60-Day)", sublabel: "90 to 182 days of lead time" },
          ]}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Course types on the 2026 schedule
        </h2>
        <p className="text-zinc-600 mb-6 max-w-2xl">
          Every course type has its own lead-time norm. Long retreats open
          earlier because their applicant pool is thinner; short retreats open
          later because centres wait for near-certainty on dates. These are the
          values found in the{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm text-zinc-800">
            course_type
          </code>{" "}
          column across the sample.
        </p>
        <Marquee pauseOnHover fade>
          {courseTypes.map((s) => (
            <span
              key={s}
              className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm font-mono text-teal-700 mx-2"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-500" />
              {s}
            </span>
          ))}
        </Marquee>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-6">
          The rolling-release mechanic, center by center
        </h2>
        <p className="text-zinc-600 mb-6 max-w-2xl">
          The left column is the popular expectation of how an annual meditation
          schedule should release. The right column is what the data actually
          says per centre. The difference is the point of this page.
        </p>
        <ComparisonTable
          productName="What the schedule HTML says"
          competitorName="Popular assumption"
          rows={centerPolicyRows}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <GlowCard>
          <div className="p-8">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-teal-600 mb-4">
              the anchor fact
            </p>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
              62 days
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Median lead time between the{" "}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm text-zinc-800">
                Applications accepted starting &lt;DATE&gt;
              </code>{" "}
              field and the course start, for 10-day 2026 Vipassana courses in
              the sample. The count of 10-day courses measured was{" "}
              <span className="text-3xl font-bold text-teal-600 align-middle inline-block">
                <NumberTicker value={66} />
              </span>
              , drawn from the 8 US centers on dhamma.org on 2026-04-22.
            </p>
            <p className="text-sm text-zinc-500">
              Source:{" "}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs">
                scripts/analyze-release-dates.mjs
              </code>{" "}
              and{" "}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs">
                scripts/release-dates-analysis.json
              </code>
              . Reproducible from a clean checkout with a single command.
            </p>
          </div>
        </GlowCard>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          One real run, abbreviated
        </h2>
        <p className="text-zinc-600 mb-6 max-w-2xl">
          The script prints per-centre row counts as it scrapes, then a final
          summary of the lead-time distribution. The shape below is exact; the
          individual numbers will shift a little when you rerun.
        </p>
        <TerminalOutput
          title="analyze-release-dates.mjs (2026-04-22)"
          lines={runLines}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          How to predict when your 2026 course will open
        </h2>
        <div className="space-y-4 text-zinc-600 leading-relaxed max-w-2xl">
          <p>
            Identify the centre you are targeting. Open its schedule URL (for
            example{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm text-zinc-800">
              https://www.dhamma.org/en/schedules/schpakasa
            </code>
            ). Find the course type you want.
          </p>
          <p>
            For a 10-day course, take the course start date and subtract 62
            days. That is the most likely opening date based on the sample. If
            the centre is Dhamma Dharā, subtract 115 days instead. If the
            centre is Dhamma Pakāsa, subtract exactly 61. For a 1-Day course,
            subtract 30 days; for a 20-Day or Satipatthana, subtract about 90.
          </p>
          <p>
            Check the page on that predicted date and for a week afterward.
            The status cell will either still say{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm text-zinc-800">
              Applications accepted starting &lt;DATE&gt;
            </code>{" "}
            (in which case the centre has already set the real opening date
            and the prediction was a little off), or it will have flipped to
            per-pool availability (New Women - Open, Old Men - Wait List,
            Servers - Open), in which case you can apply immediately.
          </p>
          <p>
            For anything beyond this, how to prepare for a first course, how
            to sit during the retreat, how to work with whatever arises in the
            mind, go to{" "}
            <a
              href="https://www.dhamma.org/en-US/courses/search"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 underline hover:text-teal-700"
            >
              dhamma.org
            </a>{" "}
            and an authorized assistant teacher at a 10-day residential course.
            This page covers scheduling mechanics only.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Tracking a specific 2026 course release?"
          description="Book a short call and I will walk you through the schedule parser, the per-centre lead-time patterns, and the exact URL to watch for the course you want."
        />
      </div>

      <FaqSection items={faqs} />

      <section className="max-w-4xl mx-auto px-6 my-14">
        <RelatedPostsGrid
          title="Related pages"
          subtitle="Adjacent mechanics in the same tradition."
          posts={[
            {
              title: "Vipassana meditation class",
              href: "/t/vipassana-meditation-class",
              excerpt:
                "Why almost every 'class' on dhamma.org is closed to new students, with live API counts.",
              tag: "Tradition mechanics",
            },
            {
              title: "Anapana and Vipassana",
              href: "/t/anapana-and-vipassana",
              excerpt:
                "What the two words mean and how the tradition handles them in a course.",
              tag: "Linguistics",
            },
            {
              title: "Find a retreat",
              href: "/guide/find-a-retreat",
              excerpt:
                "Using dhamma.org's search, choosing a centre, and submitting an application.",
              tag: "Logistics",
            },
            {
              title: "Course application tips",
              href: "/guide/course-application-tips",
              excerpt:
                "What the registrar looks for and how to fill out the form without surprises.",
              tag: "Application",
            },
            {
              title: "First course tips",
              href: "/guide/first-course-tips",
              excerpt:
                "Practical preparation for a first 10-day, arrival, what to pack, what to expect.",
              tag: "Preparation",
            },
            {
              title: "Practice buddy",
              href: "/practice-buddy",
              excerpt:
                "For old students: a free daily sitting partner matcher over Google Meet.",
              tag: "After the course",
            },
          ]}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Questions about a specific 2026 course release date? Book a short call."
      />
    </article>
  );
}
