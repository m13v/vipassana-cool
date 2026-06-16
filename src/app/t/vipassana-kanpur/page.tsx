import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ProofBanner,
  StepTimeline,
  NumberTicker,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-kanpur";
const PUBLISHED = "2026-06-16";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana in Kanpur: Dhamma Kalyana, the one Goenka center, with the 5th-and-20th course rhythm",
  description:
    "The Vipassana center for Kanpur is Dhamma Kalyana, 22 km from the city on the Ganga at Village Ema (Dhori Ghat, P.O. Rooma, 209402). Its 10-day courses start on the 5th and 20th of most months, it houses 100 students in single rooms with attached bathrooms, and it charges nothing. Location, the fixed twice-monthly cadence, the live 2026 dates, and how to apply, from a meditator who has sat six courses. Verified against dhammakalyana.org on 2026-06-16.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Vipassana in Kanpur: where it is, the course rhythm, how to apply",
    description:
      "Dhamma Kalyana is the Goenka-tradition Vipassana center for Kanpur. The address, the fixed 5th-and-20th start dates, the donation model, and the 2026 calendar, checked against the official center site.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana in Kanpur: Dhamma Kalyana explained",
    description:
      "The one Goenka Vipassana center near Kanpur, its location, the twice-monthly course rhythm, cost, and how to apply. Notes from six courses.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana in Kanpur" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana in Kanpur", url: PAGE_URL },
];

const tenDayDates2026 = [
  "June 20 to July 1",
  "July 5 to 16",
  "July 20 to 31",
  "August 5 to 16",
  "August 20 to 31",
  "September 5 to 16",
  "September 20 to October 1",
  "October 5 to 16",
  "October 20 to 31",
  "November 5 to 16",
  "December 5 to 16",
  "December 20 to 31",
];

const otherDates2026 = [
  { type: "1-day courses (old students)", dates: "Jun 28, Jul 26, Aug 23, Sep 27, Oct 25, Nov 22, Dec 27" },
  { type: "3-day course (old students)", dates: "September 1 to 4" },
  { type: "Special 10-day course", dates: "November 20 to December 1" },
  { type: "Satipatthana Sutta course (old students)", dates: "November 22 to 30" },
];

const faqs: FaqItem[] = [
  {
    q: "Is there a Vipassana center in Kanpur?",
    a: "Yes, one. The Goenka-tradition center serving Kanpur is Dhamma Kalyana, on the bank of the Ganga near Village Ema (Dhori Ghat), about 22 km from the city on the Kanpur to Allahabad road. The postal address is Dhori Ghat, near Hanuman Temple, Village Ema, P.O. Rooma, Kanpur, Uttar Pradesh 209402. It is the one center that the official directory at dhammakalyana.org and the Vipassana Research Institute list for Kanpur.",
  },
  {
    q: "When do Vipassana courses start in Kanpur?",
    a: "Dhamma Kalyana runs on a fixed rhythm: 10-day courses generally begin on the 5th and the 20th of most months. That is the single most useful fact for planning, because you can roughly predict a start date without checking. The 5th-of-the-month course runs to the 16th and the 20th-of-the-month course runs to the 1st of the next month. Always confirm the exact live dates at schedule.vridhamma.org/courses/kalyana before you book travel, since months occasionally vary and seats fill.",
  },
  {
    q: "How much does a Vipassana course in Kanpur cost?",
    a: "Nothing. There is no charge for the course, the food, or the room. The model is donation only, and donations are accepted solely from people who have already completed a 10-day course. So a first-timer at Dhamma Kalyana is, in a literal sense, hosted by everyone who sat there before them. At the end you give what you wish if you found value, or nothing, and your seat was never conditional on it.",
  },
  {
    q: "What is the accommodation like at Dhamma Kalyana?",
    a: "The center can house 100 students in single-room occupancy with attached bathrooms. That is worth pausing on. Many centers, including ones I sat at in California, put eight or twelve people in a room with bunk beds and shared washrooms. A single room with your own bathroom is unusually settled for a first course, and it removes one of the small frictions (other people's sleep noise, queuing for a shower) that newcomers worry about.",
  },
  {
    q: "How do I apply for a course in Kanpur?",
    a: "Apply through the official application form linked from dhammakalyana.org. The sequence is: read the Code of Discipline first, pick a start date from the schedule, submit the online form, and wait for written confirmation before booking any non-refundable travel. Courses are free, which means seats go fast, so apply early. You arrive the afternoon the course begins and commit to staying through the final morning.",
  },
  {
    q: "Can I just drop in for a session or a short visit in Kanpur?",
    a: "No. The 10-day residential course is the entry point and it is all-or-nothing: you commit to the full duration and the discipline for the whole stay. There is no casual drop-in or day-visit meditation for newcomers. After your first 10-day course you become eligible for the shorter formats Dhamma Kalyana offers, including the monthly 1-day courses for old students.",
  },
  {
    q: "Is Dhamma Kalyana good for a first course?",
    a: "A first 10-day course is the same structured introduction at every center in this tradition. What makes it hard is almost never the place; it is the silence and the hours. The settled conditions at Kanpur (single rooms, own bathroom, a quiet riverside campus) take a few minor worries off the table, which some first-timers find steadying. I am not a teacher, just someone who has sat six of these. For anything about how to practice, the authorized assistant teachers on site and dhamma.org are the only real source.",
  },
];

const applicationSteps = [
  {
    title: "Read the Code of Discipline first",
    description:
      "Before anything else, read the Code of Discipline on the official site. It is not fine print. It is the agreement that makes the course work, and the registration assumes you have understood it.",
  },
  {
    title: "Pick a 5th or 20th start date",
    description:
      "Choose a start date from the schedule. Because Dhamma Kalyana begins courses on the 5th and 20th of most months, you can plan around your own calendar before you even open the form.",
  },
  {
    title: "Submit the online application",
    description:
      "Fill out the application form linked from dhammakalyana.org. Applying is not the same as a confirmed seat. Submit early; the free seats on popular dates close first.",
  },
  {
    title: "Wait for written confirmation",
    description:
      "Only after you receive confirmation should you buy non-refundable trains or flights to Kanpur. A pending application is not a place.",
  },
  {
    title: "Arrive on day zero, leave the final morning",
    description:
      "Registration and orientation happen the afternoon the course begins. You commit to staying through the close. It is all-or-nothing; there is no leaving early.",
  },
];

export default function Page() {
  const schema = [
    breadcrumbListSchema(breadcrumbSchemaItems),
    articleSchema({
      headline:
        "Vipassana in Kanpur: Dhamma Kalyana, the one Goenka center, and its 5th-and-20th course rhythm",
      description:
        "Location, the fixed twice-monthly start dates, cost, the 2026 calendar, and how to apply for a Vipassana course at Dhamma Kalyana near Kanpur, verified against the official center site.",
      url: PAGE_URL,
      datePublished: PUBLISHED,
      author: "Matthew Diakonov",
      authorUrl: "https://m13v.com",
      publisherName: "Vipassana.cool",
      publisherUrl: "https://vipassana.cool",
    }),
    faqPageSchema(faqs),
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
            Kanpur, Uttar Pradesh
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900">
            Vipassana in Kanpur
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            If you searched for a Vipassana course in Kanpur, you are looking for
            one specific place: <strong>Dhamma Kalyana</strong>, the
            Goenka-tradition center on the Ganga just outside the city. The most
            useful thing to know is its rhythm. Courses start on the{" "}
            <strong>5th and the 20th of most months</strong>, so you can plan
            around your own calendar before you ever open the form. Here is the
            location, the cadence, the cost, and how to get a seat, checked
            against the center&apos;s own site rather than a directory listing.
          </p>
        </header>

        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="7 min read"
        />

        {/* DIRECT ANSWER */}
        <div className="mt-10 rounded-2xl border border-teal-200 bg-teal-50 p-6 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Direct answer — verified 2026-06-16
          </p>
          <p className="mt-3 text-lg leading-relaxed text-zinc-800">
            The Vipassana center for Kanpur is{" "}
            <strong>Dhamma Kalyana</strong> (&ldquo;Well-being of Dhamma&rdquo;),
            on the bank of the Ganga near Village Ema (Dhori Ghat),{" "}
            <strong>about 22 km from Kanpur</strong> on the Kanpur to Allahabad
            road. It runs free, donation-based{" "}
            <strong>10-day residential courses that start on the 5th and 20th
            of most months</strong>, and houses 100 students in single rooms with
            attached bathrooms. You apply online; there is no fee for the course,
            food, or lodging.
          </p>
          <p className="mt-4 text-sm text-zinc-600">
            Source:{" "}
            <a
              href="https://www.dhammakalyana.org/"
              className="text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              dhammakalyana.org
            </a>
            . Live calendar:{" "}
            <a
              href="https://schedule.vridhamma.org/courses/kalyana"
              className="text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              schedule.vridhamma.org/courses/kalyana
            </a>
            .
          </p>
        </div>

        {/* QUICK NUMBERS */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { value: 22, suffix: " km", label: "From Kanpur city" },
            { value: 100, suffix: "", label: "Single rooms, own bath" },
            { value: 2, suffix: "/mo", label: "Courses start 5th & 20th" },
            { value: 0, suffix: "", label: "Course fee (donation only)" },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-zinc-200 bg-white p-4 text-center"
            >
              <div className="text-3xl font-bold text-zinc-900">
                <NumberTicker value={m.value} suffix={m.suffix} />
              </div>
              <p className="mt-1 text-xs leading-snug text-zinc-500">{m.label}</p>
            </div>
          ))}
        </div>

        {/* ONE CENTER */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            One center, not a list of options
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            The results for this topic make Kanpur look like it has several
            meditation centers competing for your attention, mostly because of
            directory pages, map pins, and review aggregators. For
            Goenka-tradition Vipassana specifically, there is one:{" "}
            <strong>Dhamma Kalyana</strong>. Every honest listing points back to
            the same campus on the Ganga near Village Ema. Knowing that up front
            saves you from comparison-shopping a thing that has no real
            competitor in town.
          </p>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            The name means &ldquo;Well-being of Dhamma.&rdquo; The campus sits on
            roughly eight bighas of land beside the river, surrounded by farm
            fields, with a single quiet purpose: residential 10-day courses run
            year-round. The detail that sets it apart from many centers is the
            lodging. It can hold <strong>100 students in single rooms, each with
            an attached bathroom</strong>. My own first course was at a rented
            camp in California with twelve people to a room and shared washrooms.
            A private room and your own bathroom is a genuinely different starting
            condition, and it removes a couple of the small frictions newcomers
            tend to fixate on.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-zinc-200">
                {[
                  ["Center name", "Dhamma Kalyana (“Well-being of Dhamma”)"],
                  ["Location", "On the Ganga, near Village Ema (Dhori Ghat)"],
                  [
                    "Postal address",
                    "Dhori Ghat, near Hanuman Temple, Village Ema, P.O. Rooma, Kanpur, UP 209402",
                  ],
                  ["Distance from city", "~22 km from Kanpur, on the Kanpur to Allahabad road"],
                  ["State", "Uttar Pradesh, India"],
                  ["Capacity", "100 students, single rooms with attached bathrooms"],
                  ["Course rhythm", "10-day courses start on the 5th and 20th of most months"],
                  ["Cost", "None. Donation only, accepted from old students"],
                  ["Contact", "info@kalyana.dhamma.org"],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <th className="bg-zinc-50 px-4 py-3 text-left font-semibold text-zinc-700 align-top w-2/5">
                      {k}
                    </th>
                    <td className="px-4 py-3 text-zinc-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* THE RHYTHM (anchor fact) */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            The 5th-and-20th rhythm is the thing to plan around
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            Most pages about Kanpur Vipassana hand you a phone number and a star
            rating and stop there. The single most practical fact they skip is
            the cadence. Dhamma Kalyana&apos;s 10-day courses{" "}
            <strong>generally start on the 5th and the 20th of every month</strong>.
            The 5th-of-the-month course runs to the 16th; the 20th-of-the-month
            course runs to the 1st of the next month. That fixed pattern means
            you can pick your slot against your own work calendar before you even
            open the application.
          </p>

          <ProofBanner
            quote="Ten-day courses generally start on the 5th and 20th of every month, run on a donation basis, with no charges even to cover food and accommodation."
            source="Source: dhammakalyana.org, verified 2026-06-16"
            metric="5th & 20th"
          />

          <p className="mt-6 text-zinc-700 leading-relaxed">
            The cadence is the rule, not a guarantee. Some months shift a date,
            add a special course, or close for maintenance, and seats on popular
            dates fill fast because they are free. Treat the list below as a
            planning snapshot and confirm the exact dates on the{" "}
            <a
              href="https://schedule.vridhamma.org/courses/kalyana"
              className="text-teal-600 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              live schedule
            </a>{" "}
            before booking travel.
          </p>

          <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              10-day courses for the rest of 2026 (open to new students)
            </p>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {tenDayDates2026.map((d) => (
                <li
                  key={d}
                  className="text-zinc-800 text-sm border-b border-zinc-200 pb-2"
                >
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 rounded-2xl border border-zinc-200 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Other formats (old students unless noted)
            </p>
            <ul className="mt-3 space-y-2">
              {otherDates2026.map((o) => (
                <li key={o.type} className="text-sm text-zinc-700">
                  <span className="font-semibold text-zinc-900">{o.type}:</span>{" "}
                  {o.dates}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-sm text-zinc-500">
            The 1-day, 3-day, and Satipatthana Sutta courses are for people who
            have already finished a 10-day course in this tradition. If this is
            your first course, the 10-day list is your list.
          </p>
        </section>

        {/* COST */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            Why it is free, and what &ldquo;free&rdquo; actually means
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            The other question everyone asks about Kanpur courses is the price,
            and the honest answer surprises people: there is no charge at all.
            Not for tuition, not for the ten nights of lodging, not for the
            meals. The whole tradition runs on a closed loop of generosity.
            Donations are accepted only from people who have already completed a
            10-day course, because only someone who has sat one knows what they
            are paying forward.
          </p>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            So a first-timer at Dhamma Kalyana is hosted by the people who sat
            there before them. At the end of your course you can give whatever
            you wish, or nothing, and your seat was never conditional on it.
            This is also why you cannot buy a faster track or a nicer room:
            there is nothing to buy. The single room with attached bathroom you
            get is the same one everyone else gets.
          </p>
        </section>

        {/* HOW TO APPLY */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            How to actually get a seat
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            The seats are free, which means the bottleneck is timing, not money.
            Here is the sequence that works, in order:
          </p>
          <div className="mt-6">
            <StepTimeline steps={applicationSteps} />
          </div>
          <p className="mt-5 text-zinc-700 leading-relaxed">
            The application form and the latest contact details live on{" "}
            <a
              href="https://www.dhammakalyana.org/"
              className="text-teal-600 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              dhammakalyana.org
            </a>{" "}
            (email{" "}
            <a
              href="mailto:info@kalyana.dhamma.org"
              className="text-teal-600 underline underline-offset-2"
            >
              info@kalyana.dhamma.org
            </a>
            ). That site, and the authorized teachers there, are the only
            authority on anything operational. I run a resource site for fellow
            meditators; I do not run courses and I do not teach the technique.
          </p>
        </section>

        {/* PEER NOTE */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            What a Kanpur course is, and what it is not
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            One thing the listing pages never tell you: the location matters less
            than you think. Across six courses at three different centers, the
            place was never what made a course hard. The hours and the silence
            were. A first 10-day course is a structured introduction, the same
            shape whether you sit it on the Ganga near Kanpur or in California.
            What changes between centers is the setting, the food, and the room
            you sleep in. The work itself does not.
          </p>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            The harder, quieter question is what happens after. A 10-day course
            is the on-ramp; the practice is what you carry home to Kanpur, or
            wherever you live, and try to keep alive on ordinary mornings when no
            schedule and no bell is making you sit. That is the part almost nobody
            plans for, and the part this site exists to help with.
          </p>
        </section>

        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Sat a course, now stuck on the daily sit?"
          description="If you have done a 10-day course (at Kanpur or anywhere) and the daily practice keeps slipping, book a short call and I will help you set up a practice-buddy pairing for accountability."
        />

        <FaqSection items={faqs} heading="Vipassana in Kanpur: common questions" />

        <RelatedPostsGrid
          title="Keep reading"
          posts={[
            {
              title: "What a 10-day course is actually structured like",
              href: "/t/10-day-course-structure",
              excerpt:
                "The daily clock, the group sittings, and the single Day 10 shift, from six courses.",
              tag: "Course",
            },
            {
              title: "Applying for a course without burning a slot",
              href: "/guide/course-application-tips",
              excerpt:
                "How to fill the form, what confirmation means, and when to actually book travel.",
              tag: "Logistics",
            },
            {
              title: "Vipassana in Dehradun: Dhamma Salila",
              href: "/t/vipassana-dehradun",
              excerpt:
                "The same breakdown for the Doon Valley center, if Kanpur is not your closest option.",
              tag: "Centers",
            },
          ]}
        />

        <p className="mt-12 text-sm text-zinc-500 leading-relaxed">
          I am a fellow practitioner, not a teacher. For any question about how
          to meditate, how to sit, or how to work with what comes up, the only
          real sources are the authorized assistant teachers at a 10-day course
          and{" "}
          <a
            href="https://www.dhamma.org/"
            className="text-teal-600 underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            dhamma.org
          </a>
          . Center facts on this page were verified against dhammakalyana.org and
          schedule.vridhamma.org/courses/kalyana on June 16, 2026.
        </p>
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Done a course? Get paired with a practice buddy for daily accountability."
      />
    </article>
  );
}
