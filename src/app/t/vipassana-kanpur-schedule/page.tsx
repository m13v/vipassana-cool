import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  BentoGrid,
  MetricsRow,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-kanpur-schedule";
const PUBLISHED = "2026-07-01";
const BOOKING = "https://cal.com/team/mediar/vipassana";

const SCHEDULE = "https://schedule.vridhamma.org/courses/kalyana";
const CENTRE = "https://www.dhammakalyana.org/";
const CENTRE_HOME = "https://kalyana.dhamma.org/";
const CODE = "https://www.dhamma.org/en/about/code";

export const metadata: Metadata = {
  title:
    "Vipassana Kanpur Schedule: 10-Day Courses Start the 5th and 20th (Live 2026 Dates)",
  description:
    "The Vipassana schedule for Kanpur (Dhamma Kalyana) means two things. Course dates: 10-day residential courses start on the 5th and 20th of most months, live at schedule.vridhamma.org/courses/kalyana. Daily schedule: a fixed course-day clock from a 4:00 AM wake bell to lights out at 9:30 PM. Full 2026 date table with status labels. Verified 2026-07-01.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Vipassana Kanpur schedule: dates and the daily clock",
    description:
      "10-day courses at Dhamma Kalyana start the 5th and 20th of most months. Full 2026 date table with live status labels, plus the fixed daily course timetable. Verified 2026-07-01.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana Kanpur schedule: dates and the daily clock",
    description:
      "Courses land on the 5th and 20th. Here is the full 2026 Kanpur date table and the daily course timetable, in one place.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana Kanpur schedule" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana Kanpur schedule", url: PAGE_URL },
];

// Live 10-day course dates from schedule.vridhamma.org/courses/kalyana,
// captured 2026-07-01. Status labels change; the caption says so.
type CourseRow = {
  dates: string;
  status: string;
  open: boolean;
  note?: string;
};

const tenDay2026: CourseRow[] = [
  { dates: "Jun 20 – Jul 1", status: "In progress", open: false },
  {
    dates: "Jul 5 – 16",
    status: "Some categories closed",
    open: false,
    note: "One gender's side had filled",
  },
  { dates: "Jul 20 – 31", status: "Open", open: true },
  { dates: "Aug 5 – 16", status: "Open", open: true },
  { dates: "Aug 20 – 31", status: "Open", open: true },
  { dates: "Sep 5 – 16", status: "Open", open: true },
  { dates: "Sep 20 – Oct 1", status: "Open", open: true },
  {
    dates: "Oct 5 – 16",
    status: "Applications open Jul 7",
    open: false,
  },
  {
    dates: "Oct 20 – 31",
    status: "Applications open Jul 22",
    open: false,
  },
  {
    dates: "Nov 5 – 16",
    status: "Applications open Aug 7",
    open: false,
  },
  {
    dates: "Nov 20 – Dec 1",
    status: "Applications open Aug 22",
    open: false,
    note: "Special course, old students only",
  },
  {
    dates: "Dec 5 – 16",
    status: "Applications open Sep 6",
    open: false,
  },
  {
    dates: "Dec 20 – 31",
    status: "Applications open Sep 21",
    open: false,
  },
];

// The two-meanings split. Neither existing Kanpur page does this.
const meaningCards = [
  {
    title: "1. The course dates",
    description:
      "When 10-day courses actually run at Dhamma Kalyana. This is the calendar you register against: fixed on the 5th and 20th of most months, listed live with a status on each course.",
    size: "1x1" as const,
    accent: true,
  },
  {
    title: "2. The daily course clock",
    description:
      "The timetable inside a course day: one published schedule, from a 4:00 AM wake bell to lights out at 9:30 PM, the same at Kanpur as at every Goenka centre. Same clock, Day 1 through Day 9.",
    size: "1x1" as const,
  },
];

const faqs: FaqItem[] = [
  {
    q: "What is the Vipassana course schedule for Kanpur?",
    a: "Ten-day residential courses at Dhamma Kalyana (the Kanpur centre) generally start on the 5th and the 20th of every month. As of 2026-07-01 the July 20 to 31, August 5 to 16, August 20 to 31, September 5 to 16, and September 20 to October 1 courses all showed Open. The live calendar with each course's current status is at schedule.vridhamma.org/courses/kalyana. Because months occasionally shift and applications open on their own dates, confirm the exact dates there before booking travel.",
  },
  {
    q: "Can I predict a start date without opening the schedule?",
    a: "Mostly, yes. The centre states on its own site that ten-day courses generally start on the 5th and the 20th of every month, so a 10-day course usually runs roughly the 5th to the 16th and the 20th to the last day of the month. That fixed rhythm lets you plan a rough window. But always confirm the live date and its status on the official schedule, since the pattern is a default, not a guarantee, and some months carry special or old-student-only courses instead.",
  },
  {
    q: "What is the daily schedule during a 10-day course?",
    a: "A course day at any Goenka-tradition centre, Kanpur included, runs on one fixed published clock: a 4:00 AM wake bell, meals at set hours (breakfast, lunch around 11 AM, tea at 5 PM), three scheduled group sittings across the day, an evening discourse, and lights out at 9:30 PM. That same day-clock repeats unchanged from Day 1 through Day 9. The full hour-by-hour breakdown is on our 10-day course structure page, and the source is the Code of Discipline at dhamma.org.",
  },
  {
    q: "Why can I see an October date but not apply for it yet?",
    a: "Because online applications open on their own date, separately from when the course runs. On the schedule a future course reads \"Applications accepted starting [date]\" until its window opens. As of 2026-07-01, the October 5 to 16 course showed applications opening on July 7, and October 20 to 31 opened on July 22. The date is listed so you can plan; the form will not accept you until that opening day.",
  },
  {
    q: "How many courses does Kanpur run each month?",
    a: "For new students the pattern is two 10-day courses a month, one starting around the 5th and one around the 20th. On top of those, the schedule also lists shorter formats for people who have already completed a 10-day course in this tradition: 1-day courses (for example July 26, August 23, September 27), the occasional 3-day (September 1 to 4), and special longer courses. If it is your first course, the 10-day is the only one you can register for.",
  },
  {
    q: "Is the schedule the same as the registration page?",
    a: "They are the same surface. There is no separate registration website for Kanpur; you apply by clicking an open date directly on the course schedule. If you want the step-by-step of what each status label means and what happens after you submit, see our Kanpur online registration guide. This page is about reading the schedule itself: the dates and the daily clock.",
  },
  {
    q: "Where exactly is the Kanpur centre, and does it cost anything?",
    a: "Dhamma Kalyana sits about 22 km from Kanpur city, on the bank of the Ganga near Village Ema, Dhori Ghat, P.O. Rooma, Kanpur, Uttar Pradesh 209402. It holds 100 students in single rooms with attached bathrooms. The course, the food, and the room are free; the tradition runs on donations accepted only from people who have already completed a 10-day course. Any listing that charges a course fee is not the real one.",
  },
];

function StatusPill({ open, label }: { open: boolean; label: string }) {
  return (
    <span
      className={
        open
          ? "inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-700"
          : "inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-600"
      }
    >
      <span
        aria-hidden
        className={
          open ? "h-1.5 w-1.5 rounded-full bg-teal-500" : "h-1.5 w-1.5 rounded-full bg-zinc-400"
        }
      />
      {label}
    </span>
  );
}

export default function Page() {
  const schema = [
    breadcrumbListSchema(breadcrumbSchemaItems),
    articleSchema({
      headline:
        "Vipassana Kanpur Schedule: Course Dates and the Daily Course Clock",
      description:
        "The Vipassana schedule for Kanpur means two things: the course-date calendar for Dhamma Kalyana (10-day courses on the 5th and 20th of most months, live at the official schedule) and the fixed daily course timetable. Includes the full 2026 date table with status labels. Verified 2026-07-01.",
      url: PAGE_URL,
      datePublished: PUBLISHED,
      author: "Matthew Diakonov",
      authorUrl: "https://m13v.com",
      publisherName: "Vipassana.cool",
      publisherUrl: "https://vipassana.cool",
      articleType: "Article",
    }),
    faqPageSchema(faqs, `${PAGE_URL}#faq`),
  ];

  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="mt-8">
          <p className="text-sm font-medium uppercase tracking-wider text-teal-600">
            Dhamma Kalyana, Kanpur
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900">
            The Vipassana Kanpur schedule
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            &ldquo;Schedule&rdquo; is doing two jobs in that phrase. It can mean{" "}
            <strong>the course dates</strong>, when the next 10-day course runs,
            or <strong>the daily clock</strong>, what a single day inside a course
            looks like. This page answers both, with the live 2026 Kanpur dates
            and the fixed daily timetable, so you do not have to guess which one
            you needed.
          </p>
        </header>

        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="6 min read"
        />

        {/* DIRECT ANSWER */}
        <div className="mt-10 rounded-2xl border border-teal-200 bg-teal-50 p-6 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Direct answer — verified 2026-07-01
          </p>
          <p className="mt-3 text-lg leading-relaxed text-zinc-800">
            Ten-day residential courses at Dhamma Kalyana, the Kanpur centre,{" "}
            <strong>generally start on the 5th and the 20th of every month</strong>.
            As of July 1, 2026 the next courses showing Open were{" "}
            <strong>Jul 20 – 31</strong>, <strong>Aug 5 – 16</strong>,{" "}
            <strong>Aug 20 – 31</strong>, <strong>Sep 5 – 16</strong>, and{" "}
            <strong>Sep 20 – Oct 1</strong>. The live calendar and each course&apos;s
            status are at{" "}
            <a
              href={SCHEDULE}
              className="font-semibold text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              schedule.vridhamma.org/courses/kalyana
            </a>
            .
          </p>
          <p className="mt-4 text-sm text-zinc-600">
            Sources: the live schedule above and{" "}
            <a
              href={CENTRE}
              className="text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              dhammakalyana.org
            </a>
            , both checked on 2026-07-01. Status labels change; confirm before you
            book travel.
          </p>
        </div>

        {/* THE TWO MEANINGS */}
        <section className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            Two things people mean by &ldquo;schedule&rdquo;
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            Most pages that come up for this pick one meaning and ignore the
            other. If you landed here wanting the daily timetable and got a list
            of dates, or the reverse, that is the gap. Here is which is which.
          </p>
          <div className="mt-8">
            <BentoGrid cards={meaningCards} />
          </div>
        </section>

        {/* MEANING 1: THE DATE TABLE (anchor fact) */}
        <section className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            Meaning 1: the 2026 course dates
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            The centre&apos;s own site states it plainly:{" "}
            <em>&ldquo;Ten days courses generally start on 5th and 20th of every
            month.&rdquo;</em>{" "}
            That is the rule you can plan around before you even open the
            calendar. Below is the live 10-day list captured on{" "}
            <strong>2026-07-01</strong>. The status column is the part that
            actually decides whether you can apply today.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="border-b border-zinc-200 bg-zinc-50 px-5 py-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Dhamma Kalyana — 10-day courses, 2026 (as captured 2026-07-01)
              </p>
            </div>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-zinc-200 text-xs uppercase tracking-wider text-zinc-500">
                  <th className="px-5 py-3 font-semibold">Course dates</th>
                  <th className="px-5 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {tenDay2026.map((r) => (
                  <tr key={r.dates} className="align-top">
                    <td className="px-5 py-4">
                      <span className="font-semibold text-zinc-900">
                        {r.dates}
                      </span>
                      {r.note ? (
                        <span className="mt-1 block text-xs text-zinc-500">
                          {r.note}
                        </span>
                      ) : null}
                    </td>
                    <td className="px-5 py-4">
                      <StatusPill open={r.open} label={r.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-5 text-sm text-zinc-500 leading-relaxed">
            The centre also runs shorter courses for people who have already sat a
            10-day: 1-day courses (for example Jul 26, Aug 23, Sep 27), a 3-day
            (Sep 1 – 4), and special longer courses (Nov 20 – Dec 1). Those are
            not first courses. If this is your first, the 10-day rows above are the
            only ones open to you.
          </p>

          <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <p className="text-sm leading-relaxed text-zinc-700">
              One thing the date alone does not tell you: applications open on
              their <em>own</em> day. On 2026-07-01 the{" "}
              <span className="rounded bg-white px-2 py-0.5 font-mono text-xs text-zinc-800 ring-1 ring-zinc-200">
                Oct 5 – 16
              </span>{" "}
              course read{" "}
              <span className="rounded bg-white px-2 py-0.5 font-mono text-xs text-zinc-800 ring-1 ring-zinc-200">
                Applications accepted starting Jul 7
              </span>
              . If you cannot find an Apply link on a date you want, that is
              almost always why: it is not broken, it is just not open yet. Our{" "}
              <a
                href="/t/vipassana-kanpur-online-registration"
                className="font-medium text-teal-600 underline underline-offset-2"
              >
                Kanpur registration guide
              </a>{" "}
              decodes every status label.
            </p>
          </div>
        </section>

        {/* MEANING 2: THE DAILY CLOCK */}
        <section className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            Meaning 2: the daily course clock
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            If you meant the schedule <em>inside</em> a course, that is a
            different, fixed thing. A course day at Kanpur runs on the same
            published timetable used at every Goenka-tradition centre: a{" "}
            <strong>4:00 AM wake bell</strong>, meals at set hours (breakfast,
            lunch around 11 AM, tea at 5 PM), three scheduled group sittings
            through the day, an evening discourse, and{" "}
            <strong>lights out at 9:30 PM</strong>. That same clock repeats,
            unchanged, from Day 1 through Day 9.
          </p>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            I have sat six 10-day courses, and the fixed clock is the part most
            people underestimate before they arrive and are grateful for by Day 3:
            nothing to decide, nothing to schedule, the same rhythm every day. I
            am a fellow meditator, not a teacher, so for the full hour-by-hour
            breakdown and the one structural shift on Day 10, read the source
            rather than take my summary for it:
          </p>
          <div className="mt-6 rounded-2xl border border-teal-200 bg-teal-50 p-5">
            <p className="text-sm leading-relaxed text-zinc-700">
              The full daily timetable, hour by hour, is laid out on our{" "}
              <a
                href="/t/10-day-course-structure"
                className="font-semibold text-teal-700 underline underline-offset-2"
              >
                10-day course structure guide
              </a>
              , and the authoritative source is the{" "}
              <a
                href={CODE}
                className="font-semibold text-teal-700 underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code of Discipline
              </a>{" "}
              at dhamma.org.
            </p>
          </div>
        </section>

        {/* THE CENTRE AT A GLANCE */}
        <section className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            The centre, in four numbers
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            Whichever schedule you were after, these are the fixed facts about the
            place the schedule belongs to. All four are from the centre&apos;s own
            site, checked 2026-07-01.
          </p>
          <div className="mt-8">
            <MetricsRow
              metrics={[
                { value: 100, label: "single rooms, attached bathrooms" },
                { value: 2, label: "10-day courses a month (5th & 20th)" },
                { value: 0, prefix: "₹", label: "course, food, and room" },
                { value: 22, suffix: " km", label: "from the city, on the Ganga" },
              ]}
            />
          </div>
        </section>

        {/* WHERE TO GO NEXT */}
        <section className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            Reading it live before you commit
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            The table above is a snapshot; the schedule is a living page. Two
            months out, a date can flip from a plan into an open form, or a
            gender&apos;s side can quietly close because there are only 100 single
            rooms. So the honest workflow is: use the 5th-and-20th rule to pick a
            rough window, then confirm the exact date and its status on the
            official schedule, then wait for written confirmation from the centre
            before you book non-refundable travel to Kanpur.
          </p>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            For anything specific to your application, health questions on the
            form, or how the technique is actually taught, the authority is the
            centre itself, not this page:{" "}
            <a
              href={`mailto:info@kalyana.dhamma.org`}
              className="text-teal-600 underline underline-offset-2"
            >
              info@kalyana.dhamma.org
            </a>{" "}
            and{" "}
            <a
              href={CENTRE_HOME}
              className="text-teal-600 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              kalyana.dhamma.org
            </a>
            .
          </p>
        </section>

        <BookCallCTA
          appearance="footer"
          destination={BOOKING}
          site="Vipassana"
          heading="Sorted the dates, worried about the after?"
          description="If you have a Kanpur course booked, or have already sat one and the daily sit keeps slipping, book a short call and I will help set up a practice-buddy pairing for accountability."
        />

        <FaqSection
          items={faqs}
          heading="Vipassana Kanpur schedule: common questions"
        />

        <RelatedPostsGrid
          title="Keep reading"
          posts={[
            {
              title: "Vipassana in Kanpur: the centre, the rhythm, the cost",
              href: "/t/vipassana-kanpur",
              excerpt:
                "Where Dhamma Kalyana is, the 5th-and-20th cadence, and why it is free.",
              tag: "Centre",
            },
            {
              title: "Kanpur online registration, decoded",
              href: "/t/vipassana-kanpur-online-registration",
              excerpt:
                "No separate site. What each status label on the schedule actually means.",
              tag: "Logistics",
            },
            {
              title: "What a 10-day course is actually structured like",
              href: "/t/10-day-course-structure",
              excerpt:
                "The daily clock hour by hour, and the single Day 10 shift.",
              tag: "Course",
            },
          ]}
        />

        <p className="mt-12 text-sm text-zinc-500 leading-relaxed">
          Schedule and centre facts on this page were checked against{" "}
          <a
            href={SCHEDULE}
            className="text-teal-600 underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            schedule.vridhamma.org/courses/kalyana
          </a>{" "}
          and{" "}
          <a
            href={CENTRE}
            className="text-teal-600 underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            dhammakalyana.org
          </a>{" "}
          on July 1, 2026. Live status and dates change, so confirm both on the
          schedule before you book travel.
        </p>
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING}
        site="Vipassana"
        description="Done a course? Get paired with a practice buddy for daily accountability."
      />
    </article>
  );
}
