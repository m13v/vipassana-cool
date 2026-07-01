import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  GradientText,
  HorizontalStepper,
  SequenceDiagram,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-kanpur-online-registration";
const PUBLISHED = "2026-06-30";
const BOOKING = "https://cal.com/team/mediar/vipassana";

const SCHEDULE = "https://schedule.vridhamma.org/courses/kalyana";
const CENTRE = "https://www.dhammakalyana.org/";
const CENTRE_HOME = "https://kalyana.dhamma.org/";
const CODE = "https://www.dhamma.org/en/about/code";
const TRADITION = "https://www.dhamma.org/";

export const metadata: Metadata = {
  title:
    "Vipassana Kanpur Online Registration: There Is No Separate Site, It All Runs Through the Course Schedule",
  description:
    "Registering online for a Vipassana course in Kanpur (Dhamma Kalyana) happens entirely on the official course schedule at schedule.vridhamma.org/courses/kalyana. Read the Code of Discipline, click an open 10-day date, submit the online form, wait for written confirmation. The one thing that trips people up is the status label on each course. Verified 2026-06-30.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Vipassana Kanpur online registration, decoded",
    description:
      "No separate registration site. You apply on the course schedule by clicking an open 10-day date. Here is what each status label means and why a future course may not let you apply yet. Verified 2026-06-30.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana Kanpur online registration, decoded",
    description:
      "You register on the official schedule, not a separate site. Read what Open, In Progress, and Applications accepted starting actually mean.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Kanpur online registration" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Kanpur online registration", url: PAGE_URL },
];

const steps = [
  {
    title: "Read the Code of Discipline",
    description:
      "The center asks you to read it before you apply. Registration assumes you have.",
  },
  {
    title: "Find an open 10-day date",
    description:
      "Open the Kanpur schedule and look at the status on each course, not just the dates.",
  },
  {
    title: "Click the date, fill the form",
    description:
      "Clicking a course opens its own online application form. Submitting is not a confirmed seat.",
  },
  {
    title: "Wait for written confirmation",
    description:
      "Only after you receive it should you book non-refundable travel to Kanpur.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "What is the official online registration link for Vipassana in Kanpur?",
    a: "There is no standalone registration site. You register on the official course schedule for the Kanpur center (Dhamma Kalyana) at schedule.vridhamma.org/courses/kalyana. Each course listed there has an Apply link, and the center's own site dhammakalyana.org points you to the same schedule. Anyone advertising a different paid signup portal for this course is not the tradition.",
  },
  {
    q: "Why can I see a course date but not apply for it?",
    a: "Because online applications open on their own date, separately from when the course runs. On the schedule a future course reads \"Applications accepted starting [date]\" until its window opens. As of 2026-06-30, for example, the October 5 to 16 course showed \"Applications accepted starting Jul 7.\" The date exists so you can plan, but the form will not accept you until that opening day. Note the opening date and come back then.",
  },
  {
    q: "What does each status on the schedule mean?",
    a: "Open means the form is accepting applications right now, click the date to apply. In Progress means a course is currently running, you cannot join a course mid-way. Applications accepted starting [date] means the form is not open yet. And a course can show a per-category status like \"Old Male - Closed,\" meaning that specific group is full even though the course may still be open for new students. Read the row, not just the dates.",
  },
  {
    q: "Is there a fee to register online?",
    a: "No. The course, the food, and the room are all free. The tradition runs on donations accepted only from people who have already completed a 10-day course. If an online form asks you for a course fee or a deposit to hold a seat, it is not the real registration. The genuine form never charges you.",
  },
  {
    q: "How many seats are there, and how fast do they fill?",
    a: "Dhamma Kalyana accommodates 100 students in single-room occupancy with attached bathrooms. Because the course is free and the rooms are private, popular dates close fast, and one gender's side can fill before the other. That is the real reason to register as soon as a course opens rather than waiting.",
  },
  {
    q: "When do the courses start, so I know which dates to watch?",
    a: "Ten-day courses at Kanpur generally start on the 5th and the 20th of most months. That fixed rhythm lets you predict a start date before you even open the schedule. Always confirm the exact live dates and their status at schedule.vridhamma.org/courses/kalyana, since months occasionally shift and applications open on their own dates.",
  },
  {
    q: "What happens after I submit the online application?",
    a: "Your application goes to the center's registration team for review, it is not an instant confirmed seat. They reply by email with confirmation, a request for more detail, or a place on the waitlist if the date is full. Wait for that written confirmation before booking trains or flights. For anything about the form itself or your specific situation, the center at info@kalyana.dhamma.org is the authority, not this page.",
  },
];

// One-off status decoder for this page. The single most useful, most-skipped fact
// about registering online for Kanpur is what each schedule label means. Server
// component, no interactivity, so it lives here rather than the shared library.
const STATUS_ROWS: { label: string; can: boolean; meaning: string }[] = [
  {
    label: "Open",
    can: true,
    meaning:
      "The online form is accepting applications now. Click the date to apply.",
  },
  {
    label: "Applications accepted starting [date]",
    can: false,
    meaning:
      "The course is scheduled but the form is not open yet. Note the date, come back then.",
  },
  {
    label: "In Progress",
    can: false,
    meaning:
      "A course is running right now. You cannot join a 10-day course partway through.",
  },
  {
    label: "Old Male / Old Female - Closed",
    can: false,
    meaning:
      "That specific group is full. A course can still be open for new students even when one category is closed.",
  },
  {
    label: "Full / Closed",
    can: false,
    meaning: "No seats on that date. Check the next 5th or 20th course instead.",
  },
];

function StatusDecoder() {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200">
      <div className="border-b border-zinc-200 bg-zinc-50 px-5 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
          What the status on each course row means
        </p>
      </div>
      <ul className="divide-y divide-zinc-200">
        {STATUS_ROWS.map((r) => (
          <li
            key={r.label}
            className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-start sm:gap-5"
          >
            <div className="sm:w-1/3">
              <span
                className={
                  r.can
                    ? "inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-700"
                    : "inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-sm font-semibold text-zinc-600"
                }
              >
                <span
                  aria-hidden
                  className={
                    r.can
                      ? "h-2 w-2 rounded-full bg-teal-500"
                      : "h-2 w-2 rounded-full bg-zinc-400"
                  }
                />
                {r.label}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-zinc-700 sm:w-2/3">
              {r.meaning}
              <span className="ml-2 text-xs font-medium text-zinc-400">
                {r.can ? "You can apply" : "You cannot apply yet"}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Page() {
  const schema = [
    breadcrumbListSchema(breadcrumbSchemaItems),
    articleSchema({
      headline:
        "Vipassana Kanpur Online Registration: It All Runs Through the Course Schedule",
      description:
        "How to register online for a 10-day Vipassana course at Dhamma Kalyana in Kanpur: the schedule-based flow, what each status label means, and why a listed date may not let you apply yet. Verified against dhammakalyana.org and the official schedule.",
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
            Vipassana Kanpur <GradientText>online registration</GradientText>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            There is no separate registration website for the Kanpur course.
            The whole thing runs through one official course schedule, and the
            only part that reliably confuses people is not the form, it is the{" "}
            <strong>status label</strong> printed next to each course. This page
            decodes those labels and walks the online flow start to finish.
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
            Direct answer — verified 2026-06-30
          </p>
          <p className="mt-3 text-lg leading-relaxed text-zinc-800">
            You register online through the official course schedule for the
            Kanpur center, Dhamma Kalyana, at{" "}
            <a
              href={SCHEDULE}
              className="font-semibold text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              schedule.vridhamma.org/courses/kalyana
            </a>
            . Read the Code of Discipline, click an{" "}
            <strong>open</strong> 10-day date, and submit the online application
            form. There is no standalone signup portal and{" "}
            <strong>no fee</strong>; the course, food, and room are free.
          </p>
          <p className="mt-4 text-sm text-zinc-600">
            Sources:{" "}
            <a
              href={CENTRE}
              className="text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              dhammakalyana.org
            </a>{" "}
            and the live schedule above, both checked on 2026-06-30.
          </p>
        </div>

        {/* THE FLOW */}
        <section className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            The online flow, in four moves
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            Every honest listing for a Kanpur course ends at the same four
            steps. Nothing about registering is complicated once you know that
            the application form lives inside the schedule, not on a separate
            page.
          </p>
          <div className="mt-8">
            <HorizontalStepper steps={steps} />
          </div>
          <p className="mt-6 text-zinc-700 leading-relaxed">
            The center states it plainly on its own site:{" "}
            <em>
              &ldquo;read the Code of Discipline and then find a convenient date
              in the Course Schedule&rdquo;
            </em>{" "}
            and{" "}
            <em>&ldquo;submit an online application form by clicking on the
            date.&rdquo;</em>{" "}
            That click is the whole mechanic. There is no account to create
            first, no fee to pay, no deposit to hold a seat.
          </p>
        </section>

        {/* ANCHOR FACT: STATUS DECODER */}
        <section className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            The status label is the part nobody explains
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            Here is the single thing the ranking pages skip. Each course on the
            schedule carries a <strong>status</strong>, and that status decides
            whether the form will even accept you today. People see a date two
            months out, try to apply, and hit a wall, because online
            applications open on their <em>own</em> date, separate from when the
            course runs.
          </p>

          <div className="mt-6">
            <StatusDecoder />
          </div>

          <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <p className="text-sm leading-relaxed text-zinc-700">
              A concrete example. As of{" "}
              <strong>2026-06-30</strong>, the October 5 to 16 course on the
              Kanpur schedule read{" "}
              <span className="rounded bg-white px-2 py-0.5 font-mono text-sm text-zinc-800 ring-1 ring-zinc-200">
                Applications accepted starting Jul 7
              </span>
              . The date was public so you could plan, but the form would not
              take an application until July 7. If you cannot find an Apply link
              on a date you want, this is almost always why: it is not broken,
              it is just not open yet.
            </p>
          </div>
        </section>

        {/* THE HANDSHAKE */}
        <section className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            What actually happens after you hit submit
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            Submitting the form is a request, not a reservation. Your
            application goes to the center&apos;s registration team, and a seat
            only exists once they email you back. The most common, most
            expensive mistake is treating a submitted form as a confirmed place
            and booking travel on it.
          </p>

          <div className="mt-8">
            <SequenceDiagram
              title="Registering online, end to end"
              actors={[
                "You",
                "Course schedule",
                "Application form",
                "Registration team",
              ]}
              messages={[
                {
                  from: 0,
                  to: 1,
                  label: "Open the Kanpur schedule, read each course's status",
                  type: "response",
                },
                {
                  from: 1,
                  to: 0,
                  label: "Open / In Progress / Applications accepted starting",
                  type: "response",
                },
                {
                  from: 0,
                  to: 2,
                  label: "Click an open 10-day date, fill the form",
                  type: "response",
                },
                {
                  from: 2,
                  to: 3,
                  label: "Submits your application (not a confirmed seat)",
                  type: "response",
                },
                {
                  from: 3,
                  to: 0,
                  label: "Emails confirmation, a follow-up, or a waitlist spot",
                  type: "response",
                },
              ]}
            />
          </div>

          <p className="mt-6 text-zinc-700 leading-relaxed">
            Because there are only <strong>100 single rooms</strong> and the
            course is free, popular dates close quickly and one gender&apos;s
            side can fill before the other. Registering the day a course opens,
            rather than the week before it starts, is the difference between a
            confirmed seat and the waitlist.
          </p>
        </section>

        {/* WHO REGISTERS / REDIRECT */}
        <section className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            Who the 10-day online form is for
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            If this is your first course, the 10-day is the only door in, and
            its online form is the one you want. There is no drop-in session and
            no shorter first course to register for. The 1-day and 3-day formats
            on the Kanpur schedule are for people who have already completed a
            10-day course in this tradition; they have their own separate online
            forms.
          </p>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            One honest caveat about scope. I am a fellow meditator who has sat
            six courses, not a teacher and not affiliated with the center. This
            page covers how the online registration works. For anything about
            your specific application, health questions on the form, or how the
            technique is actually taught, the authority is the center itself at{" "}
            <a
              href={`mailto:info@kalyana.dhamma.org`}
              className="text-teal-600 underline underline-offset-2"
            >
              info@kalyana.dhamma.org
            </a>
            , the center site{" "}
            <a
              href={CENTRE_HOME}
              className="text-teal-600 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              kalyana.dhamma.org
            </a>
            , and{" "}
            <a
              href={TRADITION}
              className="text-teal-600 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              dhamma.org
            </a>
            . The{" "}
            <a
              href={CODE}
              className="text-teal-600 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code of Discipline
            </a>{" "}
            is worth reading in full before you apply; the registration assumes
            you have.
          </p>
        </section>

        <BookCallCTA
          appearance="footer"
          destination={BOOKING}
          site="Vipassana"
          heading="Registered, sat the course, now what?"
          description="If you have finished a 10-day course at Kanpur or anywhere and the daily sit keeps slipping, book a short call and I will help set up a practice-buddy pairing for accountability."
        />

        <FaqSection
          items={faqs}
          heading="Registering online for Kanpur: common questions"
        />

        <RelatedPostsGrid
          title="Keep reading"
          posts={[
            {
              title: "Vipassana in Kanpur: the center, the rhythm, the cost",
              href: "/t/vipassana-kanpur",
              excerpt:
                "Where Dhamma Kalyana is, the 5th-and-20th cadence, the 2026 dates, and why it is free.",
              tag: "Center",
            },
            {
              title: "The 3-day course online registration form, explained",
              href: "/t/vipassana-registration-form-online-3-days",
              excerpt:
                "For old students: how the shorter-course form differs from the 10-day one.",
              tag: "Logistics",
            },
            {
              title: "What a 10-day course is actually structured like",
              href: "/t/10-day-course-structure",
              excerpt:
                "The daily clock and the single Day 10 shift, so you know what you are registering for.",
              tag: "Course",
            },
          ]}
        />

        <p className="mt-12 text-sm text-zinc-500 leading-relaxed">
          Registration facts on this page were checked against{" "}
          <a
            href={CENTRE}
            className="text-teal-600 underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            dhammakalyana.org
          </a>{" "}
          and{" "}
          <a
            href={SCHEDULE}
            className="text-teal-600 underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            schedule.vridhamma.org/courses/kalyana
          </a>{" "}
          on June 30, 2026. Live status and dates change, so confirm both on the
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
