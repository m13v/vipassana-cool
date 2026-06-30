import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  GradientText,
  MetricsRow,
  ComparisonTable,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-meditation-kanpur";
const PUBLISHED = "2026-06-30";
const BOOKING = "https://cal.com/team/mediar/vipassana";

const CENTRE_HOME = "https://kalyana.dhamma.org/";
const CENTRE_ALT = "https://www.dhammakalyana.org/";
const SCHEDULE = "https://schedule.vridhamma.org/courses/kalyana";
const TRADITION = "https://www.dhamma.org/";

export const metadata: Metadata = {
  title: "Vipassana Meditation in Kanpur: It Is One Center, 22 km Out on the Ganga",
  description:
    "Vipassana meditation in Kanpur means one specific place: Dhamma Kalyana, about 22 km from the city on the bank of the Ganga at Dhori Ghat. Free 10-day residential courses start the 5th and 20th of every month. Apply online via the official schedule. Verified 2026-06-30.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Vipassana meditation in Kanpur: Dhamma Kalyana, on the Ganga",
    description:
      "Not a studio in the city. A residential center 22 km out on the river, running free 10-day courses that start the 5th and 20th of every month. Verified 2026-06-30.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana meditation in Kanpur is one center on the Ganga",
    description:
      "Dhamma Kalyana, 22 km from Kanpur at Dhori Ghat. Free 10-day courses on the 5th and 20th of every month, applied for online.",
  },
};

const FAQS: FaqItem[] = [
  {
    q: "Is there a Vipassana center in Kanpur?",
    a: "Yes, one. It is Dhamma Kalyana, on the Kanpur to Allahabad road at Dhori Ghat, near the Hanuman Temple, Village Ema, P.O. Rooma, Kanpur 209402. It sits on the bank of the Ganga roughly 22 km from the city, surrounded by agricultural fields, not inside Kanpur itself. It teaches Vipassana exactly as taught by S.N. Goenka in the tradition of Sayagyi U Ba Khin.",
  },
  {
    q: "How much does a course at Dhamma Kalyana cost?",
    a: "Nothing. Courses run solely on a donation basis. No charge is made, not even to cover food and accommodation. Expenses are met by donations from people who have already completed a course and wish to give others the same chance. You are only invited to give, after you have sat a full course, if you want to.",
  },
  {
    q: "When do 10-day courses start, and how do I register?",
    a: "The center runs 10-day residential courses that generally start on the 5th and 20th of every month. You register online: read the Code of Discipline, find a convenient date on the official schedule, and submit the online application form for that course. Each future course shows its own \"applications accepted starting\" date right on the schedule, so a course a couple of months out may not be open for applications yet. Registering in advance is recommended because single-occupancy rooms cap the course at 100 students.",
  },
  {
    q: "Can a complete beginner join, or is it only for experienced meditators?",
    a: "The 10-day course is the entry point for everyone. You do not need any prior meditation experience, and most courses list capacity for new students alongside old students. There is no \"intro class\" to take first. If you are weighing a first course, the general orientation on this site (linked below) and the official site dhamma.org explain what a course involves before you apply.",
  },
  {
    q: "Is there anything shorter than 10 days at Kanpur?",
    a: "For people who have already completed a 10-day course, Dhamma Kalyana holds a 1-day course for old students on the 4th Sunday of each month, and occasionally a 3-day course. For anyone who has not sat a 10-day course yet, the 10-day is the only door in. There is no shorter first course.",
  },
  {
    q: "How far is the center from Kanpur city and how do people reach it?",
    a: "It is about 22 km from the city, in a rural setting along the Kanpur to Allahabad road near the Hanuman Temple at Dhori Ghat. Because it is out of town, most students arrange the final leg in advance. The center's own site (kalyana.dhamma.org) carries the current directions and contact numbers, which is the source to trust for travel.",
  },
  {
    q: "Does this page teach the technique, and is it the official center site?",
    a: "No to both. This is an orientation written by a fellow meditator, covering where the Kanpur center is and how its logistics work. It is not affiliated with Dhamma Kalyana and it does not teach the method. The technique is taught only inside a 10-day course by an authorized teacher. For the actual course, the official sources are kalyana.dhamma.org and dhamma.org.",
  },
];

// Custom, one-off calendar visual for the fixed 5th/20th cadence. Server component,
// no interactivity, so it lives in the page file rather than the shared library.
function CadenceCalendar() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  return (
    <div className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
      <div className="flex items-baseline justify-between">
        <p className="text-sm font-semibold text-zinc-900">Any month</p>
        <p className="text-xs text-zinc-500">10-day courses begin on the marked days</p>
      </div>
      <div className="mt-4 grid grid-cols-7 gap-1.5">
        {days.map((d) => {
          const start = d === 5 || d === 20;
          return (
            <div
              key={d}
              className={
                start
                  ? "flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 text-sm font-bold text-white shadow"
                  : "flex aspect-square items-center justify-center rounded-lg bg-zinc-50 text-xs text-zinc-400"
              }
            >
              {d}
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-zinc-600">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-3 w-3 rounded bg-gradient-to-br from-cyan-500 to-teal-500" />
          10-day course start (5th and 20th)
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-3 w-3 rounded bg-zinc-200" />
          plus a 1-day old-student course every 4th Sunday
        </span>
      </div>
    </div>
  );
}

export default function Page() {
  const jsonLd = [
    articleSchema({
      headline:
        "Vipassana Meditation in Kanpur: One Center, 22 km Out on the Ganga",
      description:
        "Vipassana meditation in Kanpur means Dhamma Kalyana, a residential center about 22 km from the city on the bank of the Ganga at Dhori Ghat. Free 10-day courses start on the 5th and 20th of every month, applied for online via the official schedule.",
      url: PAGE_URL,
      datePublished: PUBLISHED,
      author: "Matthew Diakonov",
      authorUrl: "https://m13v.com",
      publisherName: "Vipassana.cool",
      publisherUrl: "https://vipassana.cool",
      articleType: "Article",
    }),
    breadcrumbListSchema([
      { name: "Home", url: "https://vipassana.cool" },
      { name: "Vipassana meditation in Kanpur", url: PAGE_URL },
    ]),
    faqPageSchema(FAQS, `${PAGE_URL}#faq`),
  ];

  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Vipassana meditation in Kanpur" },
          ]}
        />

        <header className="mt-6">
          <p className="text-sm font-medium uppercase tracking-wide text-teal-600">
            Kanpur, Uttar Pradesh
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Vipassana in Kanpur is{" "}
            <GradientText variant="teal">one center, and it is out by the river</GradientText>
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            People search &ldquo;vipassana meditation kanpur&rdquo; expecting a
            studio somewhere in the city. The real answer is a single
            residential center, Dhamma Kalyana, about 22 km out on the bank of
            the Ganga, where the only thing on offer is a free 10-day course.
          </p>
          <div className="mt-5">
            <ArticleMeta
              author="Matthew Diakonov"
              authorRole="Written with AI"
              datePublished={PUBLISHED}
              readingTime="6 min read"
            />
          </div>
        </header>

        {/* Direct answer */}
        <section
          aria-label="Direct answer"
          className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer · verified 2026-06-30
          </p>
          <p className="mt-3 text-zinc-800">
            Vipassana meditation in Kanpur is taught at one place:{" "}
            <strong>Dhamma Kalyana Vipassana Centre</strong>, on the{" "}
            <strong>Kanpur to Allahabad road at Dhori Ghat</strong>, near the
            Hanuman Temple, Village Ema, P.O. Rooma, Kanpur{" "}
            <strong>209402</strong>. It is about <strong>22 km</strong> from the
            city, on the bank of the river Ganga. It runs free,{" "}
            <strong>donation-based 10-day residential courses</strong> that
            generally start on the <strong>5th and 20th of every month</strong>.
            You join by submitting an online application for a specific course
            date.
          </p>
          <p className="mt-3 text-sm text-zinc-600">
            Authoritative sources: the official course schedule at{" "}
            <a
              href={SCHEDULE}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              schedule.vridhamma.org
            </a>{" "}
            and the center&rsquo;s own sites{" "}
            <a
              href={CENTRE_HOME}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              kalyana.dhamma.org
            </a>{" "}
            and{" "}
            <a
              href={CENTRE_ALT}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              dhammakalyana.org
            </a>
            .
          </p>
        </section>

        <MetricsRow
          metrics={[
            { value: 22, suffix: " km", label: "from Kanpur city, by the Ganga" },
            { value: 100, label: "single rooms, attached bathrooms" },
            { value: 8, label: "bighas of fields and gardens" },
            { value: 0, prefix: "₹", label: "course fee (donation only)" },
          ]}
        />

        {/* Geography correction */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            The first thing to un-learn: it is not in the city
          </h2>
          <p className="mt-4 text-zinc-700">
            Almost every search for a Kanpur center carries a quiet assumption,
            that it is a place you drop into after work. Dhamma Kalyana is the
            opposite of that. It is a residential center 22 km out of town, on
            the Kanpur to Allahabad road, sitting on the bank of the Ganga at
            Dhori Ghat and surrounded by long stretches of farmland. You do not
            attend it the way you attend a class. You apply, you arrive, and you
            stay for the full 10 days inside the center, away from the city.
          </p>
          <p className="mt-4 text-zinc-700">
            The campus is 8 bighas with gardens and flowering trees, built to
            hold 100 students in single rooms with attached bathrooms. That
            single-occupancy detail is why advance registration matters: a
            course is capped at the number of rooms, not the size of a hall.
          </p>

          <div className="mt-8">
            <ComparisonTable
              heading="What the search implies vs. how it actually works"
              competitorName="Common assumption"
              productName="Dhamma Kalyana, the real place"
              rows={[
                {
                  feature: "Where it is",
                  competitor: "Somewhere inside Kanpur city",
                  ours: "22 km out, Dhori Ghat, on the Ganga, in farmland",
                },
                {
                  feature: "What it is",
                  competitor: "A drop-in meditation studio",
                  ours: "A residential center you stay inside for 10 days",
                },
                {
                  feature: "What is taught",
                  competitor: "Short classes you pick and choose",
                  ours: "Vipassana as taught by S.N. Goenka, one method, one course",
                },
                {
                  feature: "Cost",
                  competitor: "Class fees or a package",
                  ours: "Free, donation-only, food and lodging included",
                },
                {
                  feature: "Schedule",
                  competitor: "Whenever you show up",
                  ours: "10-day courses start the 5th and 20th of every month",
                },
                {
                  feature: "How you join",
                  competitor: "Walk in",
                  ours: "Online application for a specific date, in advance",
                },
              ]}
              caveat="Course costs, dates, and capacity are from the center's own site and the official schedule, verified 2026-06-30."
            />
          </div>
        </section>

        {/* The cadence anchor fact */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            The schedule runs like a clock: the 5th and the 20th
          </h2>
          <p className="mt-4 text-zinc-700">
            Here is the detail the directory listings skip. Dhamma Kalyana does
            not improvise its calendar. Ten-day courses generally start on the
            5th and the 20th of every month, two fresh courses a month, all year.
            Pull up the live schedule and you can read the pattern straight off
            it: courses running the 5th to the 16th, then the 20th to the end of
            the month, repeating into next year. On top of that, old students
            (anyone who has finished a 10-day course) can sit a 1-day course on
            the 4th Sunday of each month.
          </p>

          <div className="mt-8">
            <CadenceCalendar />
          </div>

          <p className="mt-6 text-sm text-zinc-500">
            The 5th-and-20th cadence and the 4th-Sunday 1-day course are stated
            on the center&rsquo;s site and visible on the live schedule (
            <a
              href={SCHEDULE}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-zinc-700"
            >
              schedule.vridhamma.org/courses/kalyana
            </a>
            ), checked 2026-06-30.
          </p>
        </section>

        {/* The application window mechanic */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Why the date you want might not be open yet
          </h2>
          <p className="mt-4 text-zinc-700">
            The cadence is fixed, but registration is not always open. Each
            course on the schedule carries its own line telling you when its
            application window opens. A course a couple of months out will sit
            there marked &ldquo;applications accepted starting&rdquo; a future
            date, which means you cannot apply for it yet even though the date is
            published. Closer-in courses show an{" "}
            <span className="font-medium text-zinc-900">Apply</span> button that
            links straight to the online form for that specific course and
            student category.
          </p>
          <p className="mt-4 text-zinc-700">
            So the practical move is not &ldquo;find the center&rsquo;s phone
            number.&rdquo; It is: open the schedule, find a 5th-or-20th date that
            actually suits you, check whether that course is open for
            applications, and if it is, read the Code of Discipline and submit
            the form. If the date you want is not open yet, the schedule tells
            you the day it will be. The center recommends registering in advance,
            and with only 100 rooms, popular dates do fill.
          </p>
          <p className="mt-4 text-zinc-700">
            One more thing worth saying plainly: this page, and this whole site,
            cannot register you and does not teach the method. For the
            application itself and for anything about how the practice works, the
            right places are{" "}
            <a
              href={TRADITION}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              dhamma.org
            </a>{" "}
            and an authorized assistant teacher at a 10-day course, not an
            article. If you want help thinking through a first application,
            there is a friendly write-up of{" "}
            <a
              href="/guide/course-application-tips"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              course application tips
            </a>{" "}
            on this site.
          </p>
        </section>

        {/* The part nobody tells you about: after */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            The harder part starts when you leave the gate
          </h2>
          <p className="mt-4 text-zinc-700">
            I am writing this as a fellow practitioner, not a teacher. I have sat
            six 10-day courses at three centers and done a stretch of dhamma
            service, and the thing the location pages never mention is what
            happens after the 10 days at a place like Dhamma Kalyana end. The
            gate opens, the silence breaks, you take a shared taxi back toward
            Kanpur, and the practice that felt effortless inside the center
            becomes a daily decision you make alone. That drop-off is where most
            practices quietly thin out, and no center schedule, however regular,
            fixes it for you.
          </p>
          <p className="mt-4 text-zinc-700">
            That gap is the reason this site exists at all. The name of the
            Kanpur center itself points at the fix: I wrote a separate note on
            how{" "}
            <a
              href="/t/dhamma-kalyana"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              Dhamma Kalyana hides the word kalyana-mitta
            </a>
            , the &ldquo;admirable friend&rdquo; the Buddha called the whole of
            the path. The practical version of that idea is the{" "}
            <a
              href="/t/practice-buddy"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              practice buddy program
            </a>
            : being paired with one other meditator for daily accountability
            after a course. It is not the technique and it is not a substitute
            for sitting one. It is just company for the part of the road that
            happens after the gate.
          </p>
        </section>

        <BookCallCTA
          appearance="footer"
          destination={BOOKING}
          site="Vipassana"
          heading="Planning a course at Kanpur, or holding a practice together after one?"
          description="Book a short peer call and I will share what worked for me across six courses and how the practice buddy matching keeps a daily sit alive once you are home."
        />

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Common questions about Vipassana in Kanpur
          </h2>
          <div className="mt-4">
            <FaqSection items={FAQS} />
          </div>
        </section>

        <div className="mt-14">
          <RelatedPostsGrid
            title="Keep reading"
            posts={[
              {
                title: 'Dhamma Kalyana means "wholesome Dhamma"',
                href: "/t/dhamma-kalyana",
                excerpt:
                  "The Kanpur center's name decoded, and the word kalyana-mitta hiding inside it.",
                tag: "Language",
              },
              {
                title: "Vipassana for beginners",
                href: "/guide/vipassana-for-beginners",
                excerpt:
                  "What a first 10-day course actually involves, before you apply for a date.",
                tag: "Getting started",
              },
              {
                title: "Are Vipassana courses really free?",
                href: "/guide/free-meditation-retreats",
                excerpt:
                  "How the donation model works, and why no charge is made for food or lodging.",
                tag: "Logistics",
              },
            ]}
          />
        </div>

        <p className="mt-12 text-sm text-zinc-500">
          I am a fellow practitioner sharing logistics and personal notes, not a
          teacher, and not affiliated with Dhamma Kalyana or any center. For the
          technique itself, and for anything about registering or sitting a
          course, the authoritative sources are{" "}
          <a
            href={TRADITION}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline underline-offset-2"
          >
            dhamma.org
          </a>
          , the center at{" "}
          <a
            href={CENTRE_HOME}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline underline-offset-2"
          >
            kalyana.dhamma.org
          </a>
          , and an authorized assistant teacher at a 10-day course.
        </p>
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING}
        site="Vipassana"
        description="Weighing a Kanpur course or keeping a daily sit alive after one? Book a peer call."
      />
    </article>
  );
}
