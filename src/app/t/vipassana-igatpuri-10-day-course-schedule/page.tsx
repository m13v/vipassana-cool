import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  TerminalOutput,
  AnimatedChecklist,
  RelatedPostsGrid,
  GradientText,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-igatpuri-10-day-course-schedule";
const PUBLISHED = "2026-06-29";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";
const GIRI_PORTAL = "https://schedule.vridhamma.org/courses/giri";
const CODE_URL = "https://www.dhamma.org/en/about/code";
const VRI_TIMETABLE = "https://www.vridhamma.org/The-Course-Time-Table";

// Verbatim from the Code of Discipline timetable (dhamma.org/en/about/code) and
// vridhamma.org/The-Course-Time-Table, both checked 2026-06-29. Time ranges
// written with "to" rather than dashes on purpose.
const timetable: { time: string; what: string; group?: boolean }[] = [
  { time: "4:00 am", what: "Morning wake-up bell" },
  { time: "4:30 to 6:30 am", what: "Meditate in the hall or in your room" },
  { time: "6:30 to 8:00 am", what: "Breakfast break" },
  { time: "8:00 to 9:00 am", what: "Group sitting in the hall", group: true },
  { time: "9:00 to 11:00 am", what: "Meditate in the hall or in your room according to the teacher's instructions" },
  { time: "11:00 to 12:00 noon", what: "Lunch break" },
  { time: "12:00 noon to 1:00 pm", what: "Rest, and interviews with the teacher" },
  { time: "1:00 to 2:30 pm", what: "Meditate in the hall or in your room" },
  { time: "2:30 to 3:30 pm", what: "Group sitting in the hall", group: true },
  { time: "3:30 to 5:00 pm", what: "Meditate in the hall or in your room according to the teacher's instructions" },
  { time: "5:00 to 6:00 pm", what: "Tea break" },
  { time: "6:00 to 7:00 pm", what: "Group sitting in the hall", group: true },
  { time: "7:00 to 8:15 pm", what: "Recorded discourse in the hall" },
  { time: "8:15 to 9:00 pm", what: "Group sitting in the hall", group: true },
  { time: "9:00 to 9:30 pm", what: "Question time in the hall" },
  { time: "9:30 pm", what: "Retire to your room, lights out" },
];

// Pulled live from schedule.vridhamma.org/courses/giri on 2026-06-29.
const courses2026 = [
  { dates: "Jun 24 to Jul 5", note: "in progress on 2026-06-29" },
  { dates: "Aug 5 to 16", note: "next to begin" },
  { dates: "Aug 19 to 30" },
  { dates: "Sep 2 to 13" },
  { dates: "Sep 16 to 27" },
  { dates: "Oct 28 to Nov 8" },
  { dates: "Nov 11 to 22" },
  { dates: "Dec 23 to Jan 3" },
];

const courses2027 = [
  "Jan 6 to 17", "Jan 20 to 31", "Feb 3 to 14", "Feb 17 to 28",
  "Mar 3 to 14", "Mar 17 to 28", "Mar 31 to Apr 11", "Apr 28 to May 9",
  "May 12 to 23", "May 26 to Jun 6", "Jun 9 to 20", "Jun 23 to Jul 4",
  "Jul 7 to 18", "Jul 21 to Aug 1", "Aug 4 to 15", "Sep 1 to 12",
  "Sep 15 to 26", "Sep 29 to Oct 10", "Oct 27 to Nov 7", "Nov 24 to Dec 5",
  "Dec 22 to Jan 2",
];

const faqs: FaqItem[] = [
  {
    q: "Is there a special daily schedule at Igatpuri, different from other centres?",
    a:
      "No. The daily timetable for a 10-day course is fixed by the Code of Discipline and is the same at Dhamma Giri Igatpuri as it is at every other centre in the S.N. Goenka tradition worldwide. Wake bell at 4:00 am, three one-hour group sittings (8:00 am, 2:30 pm, 6:00 pm), a recorded discourse from 7:00 to 8:15 pm, lights out at 9:30 pm. The thing that actually differs by centre is the calendar of which dates courses run, not the clock inside a course.",
  },
  {
    q: "When is the next 10-day course at Dhamma Giri Igatpuri?",
    a:
      "As of 29 June 2026, the next 10-day course to begin at Dhamma Giri starts on 5 August (running 5 to 16 August). The course that started 24 June was already in progress. Course dates change and fill, so the live calendar at schedule.vridhamma.org/courses/giri is the only source of truth.",
  },
  {
    q: "How many hours a day do you actually sit?",
    a:
      "The timetable adds up to roughly ten hours of meditation across the day, broken into blocks. Three of those blocks are mandatory group sittings in the main hall (8:00 am, 2:30 pm, 6:00 pm). The rest are blocks you can do in the hall or, from a certain point in the course, in your room. Meals, tea, the evening discourse, and rest fill the gaps.",
  },
  {
    q: "How many days do I need to block off for a 10-day course?",
    a:
      "Plan for about twelve days on site. You arrive and register on the afternoon and evening of Day 0, sit ten full days, and leave on the morning of the final day after a short closing. Noble silence runs from the evening of Day 0 until the morning of the last full day. So a '10-day course' is a roughly 12-day commitment door to door.",
  },
  {
    q: "Why are there gaps between courses on the Igatpuri calendar?",
    a:
      "Dhamma Giri runs back-to-back 10-day courses through most of the year, but the calendar shows gaps of one to several weeks at points. Igatpuri is actually three centres on one hill (Dhamma Giri plus Dhamma Tapovana 1 and 2), and the longer gaps line up with long courses and seasonal scheduling. For exact reasons and the current list, check the live portal rather than assuming a fixed cadence.",
  },
  {
    q: "Where do I confirm the schedule and apply?",
    a:
      "Everything for a new student's 10-day course at Igatpuri lives on the Dhamma Giri portal at schedule.vridhamma.org/courses/giri. The daily timetable itself is published in the Code of Discipline at dhamma.org. There is no admission without an emailed confirmation number, so registering for a specific dated course is the step that matters.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "https://vipassana.cool" },
  { label: "Guides", href: "https://vipassana.cool/t/vipassana-igatpuri" },
  { label: "Igatpuri 10-day course schedule" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Igatpuri", url: "https://vipassana.cool/t/vipassana-igatpuri" },
  { name: "Igatpuri 10-day course schedule", url: PAGE_URL },
];

const relatedPosts = [
  {
    title: "Igatpuri 10-day course registration, step by step",
    href: "/t/vipassana-igatpuri-10-day-course-registration",
    excerpt:
      "Which of Igatpuri's three portals to use, the application walk, and what the confirmation number means.",
    tag: "Logistics",
  },
  {
    title: "What 'Vipassana Igatpuri' actually means",
    href: "/t/vipassana-igatpuri",
    excerpt:
      "Dhamma Giri, Dhamma Tapovana 1 and 2, and the Research Institute: three centres on one hill, two booking portals.",
    tag: "Background",
  },
  {
    title: "The 10-day course structure: the daily clock and the 10-day arc",
    href: "/t/10-day-course-structure",
    excerpt:
      "The same daily timetable read against the full 10-day shape, from the Code of Discipline and six personal courses.",
    tag: "Structure",
  },
];

export const metadata: Metadata = {
  title: "Vipassana Igatpuri 10-Day Course Schedule: Daily Timetable and Course Dates",
  description:
    "The daily timetable for a 10-day course at Igatpuri (Dhamma Giri) is the standard, fixed clock used at every Goenka centre: 4:00 am wake, group sittings at 8:00 am, 2:30 pm and 6:00 pm, discourse 7:00 to 8:15 pm, lights out 9:30 pm. The course dates are the Igatpuri-specific part, pulled live from schedule.vridhamma.org/courses/giri. Verified 2026-06-29.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Vipassana Igatpuri 10-day course schedule: the daily clock and the dates",
    description:
      "Two clocks, not one. The daily timetable is fixed by the Code of Discipline and identical everywhere. The course calendar is the part that is actually Igatpuri-specific.",
    url: PAGE_URL,
    type: "article",
  },
};

export default function Page() {
  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline:
                "Vipassana Igatpuri 10-day course schedule: the daily timetable and the course dates",
              description:
                "The daily timetable for a 10-day course at Igatpuri is the standard fixed clock used at every centre in the S.N. Goenka tradition. The course calendar at Dhamma Giri is the part that is actually Igatpuri-specific, pulled live from schedule.vridhamma.org/courses/giri.",
              url: PAGE_URL,
              datePublished: PUBLISHED,
              dateModified: PUBLISHED,
              author: "Matthew Diakonov",
              authorUrl: "https://m13v.com",
              publisherName: "Vipassana.cool",
              publisherUrl: "https://vipassana.cool",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbListSchema(breadcrumbSchemaItems)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(faqs)),
        }}
      />

      <div className="max-w-4xl mx-auto px-6 pt-10">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero */}
      <header className="max-w-4xl mx-auto px-6 pt-6">
        <p className="text-sm font-medium text-teal-700 uppercase tracking-wide">
          Logistics and timetable only
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
          Vipassana Igatpuri 10-day course{" "}
          <GradientText>schedule</GradientText>
        </h1>
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="7 min read"
        />
        <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
          When people search this, they are really asking two different
          questions stacked into one word. One is the <em>daily</em> timetable:
          what happens at what hour once a course starts. The other is the{" "}
          <em>course calendar</em>: which dates a 10-day course actually runs at
          Igatpuri. These have opposite answers. The daily clock is the most
          standardised thing in the whole tradition. The calendar is the one
          part that is genuinely specific to Dhamma Giri.
        </p>
      </header>

      {/* Direct answer callout */}
      <section className="max-w-4xl mx-auto px-6 mt-10">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 sm:p-7">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-teal-700">
            <span>Direct answer</span>
            <span className="text-teal-400">/</span>
            <span>Verified 2026-06-29</span>
          </div>
          <div className="mt-3 space-y-3 text-zinc-800 text-base sm:text-lg leading-relaxed">
            <p>
              <strong>Daily timetable:</strong> the standard fixed clock used at
              every centre in the tradition. Wake bell at <strong>4:00 am</strong>,
              three one-hour group sittings at <strong>8:00 am, 2:30 pm and 6:00
              pm</strong>, a recorded discourse from <strong>7:00 to 8:15 pm</strong>,
              lights out at <strong>9:30 pm</strong>. About ten hours of sitting
              across the day. It is the same at Igatpuri as everywhere else.
            </p>
            <p>
              <strong>Course dates:</strong> the next 10-day course at Dhamma
              Giri begins <strong>5 August 2026</strong> (running 5 to 16
              August). The live calendar is the only authority on dates:{" "}
              <a
                href={GIRI_PORTAL}
                className="text-teal-700 underline font-medium break-words"
                target="_blank"
                rel="noopener noreferrer"
              >
                schedule.vridhamma.org/courses/giri
              </a>
              .
            </p>
          </div>
          <p className="mt-4 text-sm text-zinc-500">
            Timetable verified against the Code of Discipline at{" "}
            <a href={CODE_URL} className="text-teal-700 underline" target="_blank" rel="noopener noreferrer">
              dhamma.org
            </a>{" "}
            and{" "}
            <a href={VRI_TIMETABLE} className="text-teal-700 underline" target="_blank" rel="noopener noreferrer">
              vridhamma.org
            </a>
            . Dates pulled from the Dhamma Giri portal on 29 June 2026.
          </p>
        </div>
      </section>

      {/* Clock 1: the fixed daily timetable */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900 tracking-tight">
          Clock one: the daily timetable (identical everywhere)
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          There is no separate "Igatpuri schedule." The hour-by-hour timetable
          for a 10-day course is set out in the Code of Discipline, and the
          tradition runs every course to it so that practice stays continuous.
          I have sat six courses at three centres in the United States, and the
          clock matched this published timetable to the minute at all of them.
          That consistency is the point: the day below is the day you would
          keep at Dhamma Giri too.
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <table className="w-full text-left text-sm sm:text-base">
            <thead className="bg-zinc-50 text-zinc-500">
              <tr>
                <th className="px-4 py-3 font-medium w-40 sm:w-56">Time</th>
                <th className="px-4 py-3 font-medium">What happens</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {timetable.map((row) => (
                <tr
                  key={row.time}
                  className={row.group ? "bg-teal-50/60" : "bg-white"}
                >
                  <td className="px-4 py-3 align-top font-medium text-zinc-900 whitespace-nowrap">
                    {row.time}
                  </td>
                  <td className="px-4 py-3 align-top text-zinc-700">
                    {row.what}
                    {row.group && (
                      <span className="ml-2 inline-block rounded bg-teal-100 px-1.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-teal-700 align-middle">
                        mandatory
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          The three shaded rows are the mandatory group sittings in the main
          hall. The blocks marked "in the hall or in your room" are practice
          time, not free time. This page is logistics only; for anything about
          how the practice itself is done, the tradition reserves that for an
          authorized teacher inside a course, so ask at{" "}
          <a href="https://www.dhamma.org" className="text-teal-700 underline" target="_blank" rel="noopener noreferrer">
            dhamma.org
          </a>
          .
        </p>
      </section>

      {/* Clock 2: the Igatpuri course calendar (the anchor fact) */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900 tracking-tight">
          Clock two: the Dhamma Giri course calendar (the part that is actually
          Igatpuri-specific)
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          This is the half nobody pins down, because it changes. Dhamma Giri is
          the busiest centre in the tradition and runs 10-day courses almost
          continuously, with gaps of a week to several weeks where long courses
          and seasonal scheduling take over the hill. Here is exactly what the
          Dhamma Giri portal listed when I pulled it.
        </p>

        <div className="mt-6">
          <TerminalOutput
            title="schedule.vridhamma.org/courses/giri"
            lines={[
              { text: "curl schedule.vridhamma.org/courses/giri  # 2026-06-29", type: "command" },
              { text: "filter: Dhamma Giri / 10-day / new students", type: "info" },
              { text: "8 remaining 10-day courses listed for 2026", type: "success" },
              { text: "21 ten-day courses listed for 2027", type: "success" },
              { text: "next start after today: 2026-08-05", type: "output" },
              { text: "longest visible gap: late Sep to late Oct 2026", type: "output" },
            ]}
          />
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <h3 className="text-base font-semibold text-zinc-900">
              10-day courses remaining in 2026
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {courses2026.map((c) => (
                <li key={c.dates} className="flex items-baseline justify-between gap-3">
                  <span className="font-medium text-zinc-900">{c.dates}</span>
                  {c.note && (
                    <span className="text-[11px] uppercase tracking-wide text-teal-700">
                      {c.note}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <h3 className="text-base font-semibold text-zinc-900">
              10-day courses listed for 2027
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {courses2027.map((d) => (
                <span
                  key={d}
                  className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-700"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-5 text-sm text-zinc-500">
          Snapshot only. Dates fill, get added, and occasionally move, so treat
          this as "what the calendar looked like on 29 June 2026," not a
          guarantee. Before you plan travel, open{" "}
          <a href={GIRI_PORTAL} className="text-teal-700 underline" target="_blank" rel="noopener noreferrer">
            the live portal
          </a>{" "}
          and read the dated course you intend to apply to.
        </p>
      </section>

      {/* Practical framing */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900 tracking-tight">
          What the schedule means for your calendar
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          A "10-day course" is not ten days door to door. You arrive and
          register on the afternoon and evening of Day 0, sit ten full days to
          the fixed clock above, and leave on the morning of the final day after
          a short closing. Noble silence runs from the evening of Day 0 through
          the morning of the last full day. So when you read a calendar entry
          like "5 to 16 August," that 5th is your arrival evening and the 16th
          is your departure morning.
        </p>

        <div className="mt-6">
          <AnimatedChecklist
            title="Block this out before you book a dated course"
            items={[
              { text: "About 12 days on site, arrival evening through departure morning" },
              { text: "Roughly 10 hours of daily sitting, three of them mandatory group sittings" },
              { text: "No phones, reading, or writing for the duration; plan your handoffs at work and home" },
              { text: "Travel buffer to reach Igatpuri (around 136 km from Mumbai) before the Day 0 evening start" },
              { text: "An emailed confirmation number in hand: no confirmation, no admission" },
            ]}
          />
        </div>

        <p className="mt-6 text-zinc-700 leading-relaxed">
          The registration mechanics, including which of Igatpuri's three
          portals a new student uses, are their own topic. I wrote those up
          separately in the{" "}
          <Link href="/t/vipassana-igatpuri-10-day-course-registration" className="text-teal-700 underline">
            Igatpuri registration walkthrough
          </Link>
          , and the wider picture of what "Vipassana Igatpuri" even refers to
          (three centres, two booking portals, the Research Institute) sits in{" "}
          <Link href="/t/vipassana-igatpuri" className="text-teal-700 underline">
            the Igatpuri overview
          </Link>
          .
        </p>
        <p className="mt-4 text-sm text-zinc-500">
          For the record: I am a fellow meditator sharing logistics, not a
          teacher. Six courses across three US centres taught me the clock; they
          did not make me an authority on the method. Anything operational about
          the practice belongs with an authorized assistant teacher at a course.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6 mt-16">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="The schedule is the easy part. Day 200 at home is the hard part."
          description="If you want a practice buddy to keep a daily sit alive after Igatpuri, that is what I actually built this site for. Grab a slot."
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 mt-16">
        <h2 className="text-2xl font-semibold text-zinc-900 mb-2">
          Igatpuri schedule questions
        </h2>
        <FaqSection items={faqs} />
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-16 mb-20">
        <RelatedPostsGrid
          subtitle="Related"
          title="The rest of the Igatpuri picture"
          posts={relatedPosts}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Dates sorted? Get paired with a practice buddy for after the course."
      />
    </article>
  );
}
