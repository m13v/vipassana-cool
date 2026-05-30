import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  MetricsRow,
  TerminalOutput,
  Marquee,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/server-male-meaning-in-vipassana-meditation";
const PUBLISHED = "2026-05-30";
const MODIFIED = "2026-05-30";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    'What "Server Male" Means on a Vipassana Course Listing',
  description:
    'On the official Goenka course schedule, availability is split into six fixed categories: Old Male, Old Female, New Male, New Female, Server Male, Server Female. "Server Male" is the status for a male Dhamma server place: whether a man who has finished a 10-day course can still register to volunteer on the men\'s side. It shows Open, Course Full, Closed, or In Progress, never a seat count. Labels verified from schedule.vridhamma.org on 2026-05-30.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What "Server Male" means on a Vipassana course listing',
    description:
      'One of six availability categories on the official schedule. It tells a male old student whether he can still register to serve on the men\'s side of that course. Verified from schedule.vridhamma.org.',
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Decoding "Server Male" on a Vipassana schedule',
    description:
      'Old Male, Old Female, New Male, New Female, Server Male, Server Female. What the server label actually means and how to read it before you apply.',
  },
};

const FAQS: FaqItem[] = [
  {
    q: 'Does "Server Male" mean the course needs male servers or that it is open to them?',
    a: 'It is an availability status. "Server Male - Open" means a male old student can still register to give Dhamma service for that course. "Server Male - Course Full" means the men\'s service places are taken. The schedule shows the same four states for every category: Open, Course Full, Closed, and In Progress.',
  },
  {
    q: "Why is the server place split by gender at all?",
    a: "Every Goenka center separates men and women across the whole campus: accommodation, walking areas, dining, and the meditation hall. Servers follow the same separation, so a male server supports the men's side and a female server supports the women's side. That is why the schedule lists Server Male and Server Female as two distinct categories rather than one server count.",
  },
  {
    q: 'Can a woman apply when only "Server Male" is open?',
    a: 'No. If a listing shows "Server Male - Open" but "Server Female - Course Full", the open service place is on the men\'s side only. A woman would wait for a course where "Server Female" reads Open, or pick a different set of dates.',
  },
  {
    q: "Who is allowed to register as a server?",
    a: "Any old student who has completed at least one 10-day course with S.N. Goenka or one of his assistant teachers, is maintaining a daily practice, has not taken up another technique since the last course, and keeps the five precepts. You do not need years of experience. Many people serve their second time at a center. The eligibility rules are on the Code of Conduct for Dhamma Servers at dhamma.org.",
  },
  {
    q: 'Why does the schedule show no number next to "Server Male", just a word?',
    a: "The official schedule does not publish seat counts. It publishes a status per category. So you learn whether a male server place is available, full, or closed, but not how many places remain. To get exact numbers you contact the center through its registration page.",
  },
  {
    q: 'A course shows "Old Male - Course Full" but "Server Male - Open". What does that tell me?',
    a: "It means the men's sitting places for that course are gone, but the men's service places are not. This is common. Courses often fill the student side first and keep accepting servers, since around eight servers are needed to run a 10-day course. If you are a male old student, that listing is an invitation to serve rather than sit.",
  },
  {
    q: "Is serving the same commitment as sitting a course?",
    a: "It is a similar block of time (roughly 12 days for a standard 10-day course) but a different rhythm. Servers attend the three daily group sittings and spend the rest of the day on work. It is reflective, hands-on practice rather than the near-continuous sitting students do. For anything operational about technique itself, the tradition points you to dhamma.org and an authorized assistant teacher.",
  },
];

export default function Page() {
  const schema = [
    breadcrumbListSchema([
      { name: "Home", url: "https://vipassana.cool" },
      { name: "Topics", url: "https://vipassana.cool/t/10-day-course-structure" },
      { name: 'Server Male meaning', url: PAGE_URL },
    ]),
    articleSchema({
      headline: 'What "Server Male" Means on a Vipassana Course Listing',
      description:
        '"Server Male" is one of six availability categories on the official Goenka course schedule. It shows whether a male old student can still register to give Dhamma service on the men\'s side of a course.',
      url: PAGE_URL,
      datePublished: PUBLISHED,
      dateModified: MODIFIED,
      author: "Matthew Diakonov",
      authorUrl: "https://m13v.com",
      publisherName: "Vipassana.cool",
      publisherUrl: "https://vipassana.cool",
    }),
    faqPageSchema(FAQS),
  ];

  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="mx-auto max-w-3xl px-6 pt-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "10-Day Course", href: "/t/10-day-course-structure" },
            { label: '"Server Male" meaning' },
          ]}
        />
      </div>

      {/* Hero */}
      <header className="mx-auto max-w-3xl px-6 pt-6 pb-4">
        <p className="text-sm font-medium uppercase tracking-wide text-teal-600">
          Reading the course schedule
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
          What &quot;Server Male&quot; means on a Vipassana course listing
        </h1>
        <p className="mt-4 text-lg text-zinc-500">
          If you have been scanning a center&apos;s schedule and hit a row that
          says <span className="font-medium text-zinc-700">Server Male</span>,
          you are not looking at a job title. You are looking at one of six
          availability slots that every official course listing is broken into.
          Here is exactly what that slot tells you, and what it does not.
        </p>
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="7 min read"
        />
      </header>

      {/* Direct answer callout */}
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer · verified 2026-05-30
          </p>
          <p className="mt-3 text-lg leading-relaxed text-zinc-800">
            <span className="font-semibold text-zinc-900">
              &quot;Server Male&quot; is the availability status for a male
              Dhamma server place.
            </span>{" "}
            It tells a man who has already completed a 10-day course whether he
            can still register to volunteer (cook, clean, support the running of
            the course) on the men&apos;s side of that specific course. On the
            official schedule it reads{" "}
            <span className="font-medium text-zinc-900">Open</span>,{" "}
            <span className="font-medium text-zinc-900">Course Full</span>,{" "}
            <span className="font-medium text-zinc-900">Closed</span>, or{" "}
            <span className="font-medium text-zinc-900">In Progress</span>, never
            a number of remaining seats.
          </p>
          <p className="mt-3 text-sm text-zinc-600">
            Verified against the live course schedule at{" "}
            <a
              href="https://schedule.vridhamma.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 underline hover:text-teal-800"
            >
              schedule.vridhamma.org
            </a>{" "}
            on 2026-05-30.
          </p>
        </div>
      </div>

      {/* The six-category legend */}
      <section className="mx-auto mt-14 max-w-3xl px-6">
        <h2 className="text-2xl font-bold text-zinc-900">
          The six categories, and where &quot;Server&quot; sits among them
        </h2>
        <p className="mt-4 text-zinc-700">
          The thing nobody spells out: a course listing is not one availability
          number. The official schedule splits every course into six separate
          categories, because a course is really two parallel courses (a men&apos;s
          one and a women&apos;s one) and within each side there are people sitting
          for the first time, people sitting again, and people serving. The exact
          labels, as they appear on the schedule today, are:
        </p>

        <div className="mt-6">
          <Marquee speed={32} pauseOnHover fade>
            {[
              "Old Male",
              "Old Female",
              "New Male",
              "New Female",
              "Server Male",
              "Server Female",
            ].map((c) => (
              <span
                key={c}
                className={`mx-2 inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium ${
                  c === "Server Male"
                    ? "border-teal-300 bg-teal-50 text-teal-700"
                    : "border-zinc-200 bg-white text-zinc-600"
                }`}
              >
                {c}
              </span>
            ))}
          </Marquee>
        </div>

        <div className="mt-6 overflow-x-auto rounded-xl border border-zinc-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-50 text-zinc-900">
              <tr>
                <th className="px-4 py-3 font-semibold">Label</th>
                <th className="px-4 py-3 font-semibold">Who it is for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 text-zinc-700">
              <tr>
                <td className="whitespace-nowrap px-4 py-3 font-medium text-zinc-900">Old Male</td>
                <td className="px-4 py-3">Men who have completed at least one course, sitting again</td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-4 py-3 font-medium text-zinc-900">Old Female</td>
                <td className="px-4 py-3">Women who have completed at least one course, sitting again</td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-4 py-3 font-medium text-zinc-900">New Male</td>
                <td className="px-4 py-3">Men sitting their first 10-day course</td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-4 py-3 font-medium text-zinc-900">New Female</td>
                <td className="px-4 py-3">Women sitting their first 10-day course</td>
              </tr>
              <tr className="bg-teal-50/60">
                <td className="whitespace-nowrap px-4 py-3 font-semibold text-teal-700">Server Male</td>
                <td className="px-4 py-3 text-zinc-800">
                  Male old students volunteering to serve the men&apos;s side
                </td>
              </tr>
              <tr className="bg-teal-50/60">
                <td className="whitespace-nowrap px-4 py-3 font-semibold text-teal-700">Server Female</td>
                <td className="px-4 py-3 text-zinc-800">
                  Female old students volunteering to serve the women&apos;s side
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          So &quot;Server Male&quot; is simply the fifth of those six rows: the
          men&apos;s service place. Reading the row tells you whether that
          particular door is open to you.
        </p>
      </section>

      {/* Why split by gender */}
      <section className="mx-auto mt-14 max-w-3xl px-6">
        <h2 className="text-2xl font-bold text-zinc-900">
          Why &quot;Server&quot; is split into male and female at all
        </h2>
        <p className="mt-4 text-zinc-700">
          The split is not bureaucratic tidiness. Every center in this tradition
          keeps men and women separated across the entire campus: the
          accommodation, the walking paths, the dining areas, and the meditation
          hall itself. Students never cross that line during a course. Servers
          live inside the same arrangement, so a male server is part of the
          men&apos;s side and a female server is part of the women&apos;s side.
        </p>
        <p className="mt-4 text-zinc-700">
          That is why the schedule cannot show a single &quot;servers needed&quot;
          figure. A course can be desperate for a male server and have no room for
          a female server on the same dates, or the reverse. The two sides fill
          independently, so they are listed independently. When you read{" "}
          <span className="font-medium text-zinc-900">Server Male</span>, the
          status applies to the men&apos;s side only.
        </p>
      </section>

      {/* Anatomy of a listing */}
      <section className="mx-auto mt-14 max-w-3xl px-6">
        <h2 className="text-2xl font-bold text-zinc-900">
          How to read a real listing
        </h2>
        <p className="mt-4 text-zinc-700">
          A typical course block on the schedule looks something like the panel
          below. Each of the six categories carries its own status word. Notice
          how the student side can be full while the service side is still open:
        </p>
        <div className="mt-6">
          <TerminalOutput
            title="Course listing · 10-day · example"
            lines={[
              { text: "Dhamma [center]  10-Day Course  Jun 4 to Jun 15", type: "info" },
              { text: "Old Male       Course Full", type: "output" },
              { text: "Old Female     Open", type: "output" },
              { text: "New Male       Closed", type: "output" },
              { text: "New Female     Open", type: "output" },
              { text: "Server Male    Open", type: "success" },
              { text: "Server Female  Course Full", type: "output" },
            ]}
          />
        </div>
        <p className="mt-4 text-zinc-700">
          On this example, a man cannot sit (Old Male and New Male are not
          available) but he can serve, because{" "}
          <span className="font-medium text-zinc-900">Server Male</span> reads
          Open. A woman could sit as a returning student (Old Female is Open) but
          could not serve (Server Female is full). The four status words mean:
        </p>
        <ul className="mt-4 space-y-2 text-zinc-700">
          <li>
            <span className="font-semibold text-zinc-900">Open</span> &nbsp;you
            can register now for that category.
          </li>
          <li>
            <span className="font-semibold text-zinc-900">Course Full</span>
            &nbsp;that category is taken; some centers let you join a waitlist.
          </li>
          <li>
            <span className="font-semibold text-zinc-900">Closed</span> &nbsp;the
            registration window for that category is not open (often it has not
            started yet, or has ended).
          </li>
          <li>
            <span className="font-semibold text-zinc-900">In Progress</span>
            &nbsp;the course is already running.
          </li>
        </ul>
      </section>

      <section className="mx-auto mt-14 max-w-3xl px-6">
        <MetricsRow
          metrics={[
            { value: 6, label: "availability categories per course listing" },
            { value: 8, prefix: "~", label: "servers needed to run a 10-day course" },
            { value: 3, label: "group sittings servers attend each day" },
          ]}
        />
      </section>

      {/* What it does NOT mean */}
      <section className="mx-auto mt-14 max-w-3xl px-6">
        <h2 className="text-2xl font-bold text-zinc-900">
          What &quot;Server Male&quot; does not mean
        </h2>
        <p className="mt-4 text-zinc-700">
          A few things the label is easy to misread as, and what is actually true:
        </p>
        <div className="mt-6 space-y-4">
          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <p className="font-medium text-zinc-900">
              It is not a count of how many male servers there are.
            </p>
            <p className="mt-1 text-sm text-zinc-600">
              The schedule shows a status, not a number. &quot;Open&quot; could
              mean one place left or several. For exact figures you contact the
              center directly.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <p className="font-medium text-zinc-900">
              It is not a rank or a special role.
            </p>
            <p className="mt-1 text-sm text-zinc-600">
              &quot;Server&quot; covers everyone giving Dhamma service that
              course, from the kitchen to the course manager. The schedule does
              not assign roles. The center does that after you are accepted.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <p className="font-medium text-zinc-900">
              It is not open to people who have never sat a course.
            </p>
            <p className="mt-1 text-sm text-zinc-600">
              Only old students serve. If you have not completed a 10-day course
              yet, the categories that apply to you are New Male or New Female,
              not Server Male.
            </p>
          </div>
        </div>
      </section>

      {/* Once you see Open */}
      <section className="mx-auto mt-14 max-w-3xl px-6">
        <h2 className="text-2xl font-bold text-zinc-900">
          So &quot;Server Male&quot; reads Open. Now what?
        </h2>
        <p className="mt-4 text-zinc-700">
          If you are a male old student and a listing shows that place is
          available, the next step is the center&apos;s own registration page,
          reachable from the{" "}
          <a
            href="https://www.dhamma.org/en/locations/directory"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-teal-700 underline hover:text-teal-800"
          >
            center directory on dhamma.org
          </a>
          . The service application is shorter than a sitting application. The
          eligibility expectations (one completed course, a maintained practice,
          the five precepts) are laid out in the{" "}
          <a
            href="https://www.dhamma.org/en-US/about/dscode"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-teal-700 underline hover:text-teal-800"
          >
            Code of Conduct for Dhamma Servers
          </a>
          .
        </p>
        <p className="mt-4 text-zinc-700">
          For what the days actually feel like, who does what, and how serving
          relates to your own practice, I wrote a longer piece on{" "}
          <Link
            href="/guide/dhamma-service"
            className="font-medium text-teal-700 underline hover:text-teal-800"
          >
            what Dhamma service involves
          </Link>
          . I am a fellow practitioner sharing how the schedule reads, not a
          teacher. For anything about the technique itself, the right place is{" "}
          <a
            href="https://www.dhamma.org/en-US/courses/search"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-teal-700 underline hover:text-teal-800"
          >
            dhamma.org
          </a>{" "}
          and an authorized assistant teacher.
        </p>
      </section>

      <div className="mx-auto mt-16 max-w-3xl px-6">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Trying to keep a daily sit going between courses?"
          description="If you are an old student building consistency, book a quick call and I will tell you how the practice-buddy matching works."
        />
      </div>

      <section className="mx-auto mt-12 max-w-3xl px-6">
        <FaqSection items={FAQS} heading="Questions people ask about the server label" />
      </section>

      <section className="mx-auto mt-12 max-w-3xl px-6 pb-20">
        <RelatedPostsGrid
          title="Keep reading"
          posts={[
            {
              title: "Dhamma Service (Seva): what serving a course is actually like",
              href: "/guide/dhamma-service",
              excerpt:
                "Server roles, the daily schedule, eligibility, and why many old students say serving deepened their practice more than sitting did.",
              tag: "Guide",
            },
            {
              title: "The 10-day course structure",
              href: "/t/10-day-course-structure",
              excerpt:
                "What the standard 10-day course block contains, day by day, and how the two parallel sides run.",
              tag: "Course",
            },
            {
              title: "The old student path",
              href: "/guide/old-student-path",
              excerpt:
                "What changes once you have sat your first course, including serving, sit-and-serve, and longer courses.",
              tag: "Guide",
            },
          ]}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Old student building a daily practice? Let's talk practice-buddy matching."
      />
    </article>
  );
}
