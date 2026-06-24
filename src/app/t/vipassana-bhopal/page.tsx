import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  StepTimeline,
  ProofBanner,
  GradientText,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-bhopal";
const PUBLISHED = "2026-06-24";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana in Bhopal: Dhamma Pala, and the three addresses people mix up",
  description:
    "The Vipassana centre for Bhopal is Dhamma Pala, at Village Daulatpura near Kerwa Dam, about 18 km out of the city, established May 2009. But you register through a City Office at E-2/50 Arera Colony, and 1-day old-student courses run at a separate city venue, Soma Vihar. Where each one is, what a course costs (nothing), the live 2026 dates, and how to apply. Verified against pala.dhamma.org on 2026-06-24.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Vipassana in Bhopal: where Dhamma Pala actually is, and how to apply",
    description:
      "Dhamma Pala is the Goenka-tradition Vipassana centre for Bhopal, 18 km out near Kerwa Dam. The register-here office, the sit-here forest campus, the donation model, and the 2026 calendar, checked against the official site.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana in Bhopal: Dhamma Pala explained",
    description:
      "The one Goenka Vipassana centre serving Bhopal, the three locations people confuse, its cost, calendar, and how to apply. Notes from six courses.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana in Bhopal" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana in Bhopal", url: PAGE_URL },
];

const tenDayOpen2026 = [
  { dates: "August 26 to September 6", note: "Open" },
  { dates: "September 9 to 20", note: "Open" },
  { dates: "September 23 to October 4", note: "Check live status" },
  { dates: "October 7 to 18", note: "Check live status" },
];

const oldStudentLong2026 = [
  { type: "20-day course (experienced sitters)", dates: "December 2 to 23" },
  { type: "30-day course (experienced sitters)", dates: "December 2 to January 2" },
  { type: "Satipatthana Sutta course (old students)", dates: "July 15 to 23" },
];

const faqs: FaqItem[] = [
  {
    q: "Where exactly is the Vipassana centre in Bhopal?",
    a: "The residential centre is Dhamma Pala, at Village Daulatpura near the Kerwa Dam, roughly 18 km from the centre of Bhopal, Madhya Pradesh. It is set on about 5 acres surrounded by forest. It is not inside the city, which is the single most common mix-up: the campus where you actually sit a course is a short drive out of town. The exact arrival point and travel notes are on the official centre site at pala.dhamma.org.",
  },
  {
    q: "Then what is the Arera Colony address I keep seeing?",
    a: "That is the City Office, at E-2/50 Arera Colony, near Habibganj Railway Station, Bhopal 462016. It handles registration and correspondence for courses at the centre. It is an office, not the meditation campus. You sort out your application and questions through Arera Colony, then you travel out to Daulatpura near Kerwa Dam to actually sit the course.",
  },
  {
    q: "How much does a Vipassana course in Bhopal cost?",
    a: "Nothing. There is no charge for the course, the food, or the ten nights of accommodation. The model is donation only, and donations are accepted solely from people who have already completed a 10-day course. A first-timer in Bhopal is, in a literal sense, hosted by the people who sat there before them. At the end you give what you wish if you found value, or nothing.",
  },
  {
    q: "What is Soma Vihar, and is that the centre?",
    a: "Soma Vihar is a separate venue used for 1-day courses (typically 11 am to 5 pm) for people who have already completed a 10-day course. It is not the residential centre and not the City Office. So 'vipassana bhopal' can point at three different physical locations depending on what you actually need: the forest centre at Daulatpura for a full course, the Arera Colony office to register, and Soma Vihar for old-student 1-day sittings in the city.",
  },
  {
    q: "How often do courses run at Dhamma Pala?",
    a: "The centre runs roughly 19 to 20 ten-day courses a year, plus Satipatthana courses, teenager and children's courses, and shorter 1, 2 and 3-day courses for old students. For experienced sitters it also runs long courses: a 20-day and a 30-day course are scheduled in December 2026. Group sittings happen in town on Sundays. Always confirm against the live calendar at schedule.vridhamma.org/courses/pala before planning travel.",
  },
  {
    q: "How do I apply for a course in Bhopal?",
    a: "Apply through the official centre site, pala.dhamma.org, by online form. Registration and correspondence are handled by the City Office at Arera Colony. Courses fill ahead (several July and August 2026 dates already show full or wait-list), so apply early and do not book non-refundable travel until your seat is confirmed. Bring a photo ID copy. You arrive the afternoon the course begins and stay through the final morning; it is all-or-nothing, no leaving early.",
  },
  {
    q: "Is Dhamma Pala a good place for a first course?",
    a: "It is an established, purpose-built centre (open since May 2009) with single rooms and a pagoda of 116 air-cooled individual cells, rather than a rented camp with bunk beds. That settled setting can steady a first course. But honestly, across six courses at three different centres, the place was never what made a course hard. The silence and the hours were. I am a fellow practitioner, not a teacher; for anything about how to practise, the authorised assistant teachers on site and dhamma.org are the only real source.",
  },
];

export default function Page() {
  const schema = [
    breadcrumbListSchema(breadcrumbSchemaItems),
    articleSchema({
      headline:
        "Vipassana in Bhopal: Dhamma Pala, and the three addresses people mix up",
      description:
        "Location, cost, the 2026 course calendar, and how to apply for a Vipassana course at Dhamma Pala near Bhopal, plus the three separate Bhopal locations people confuse, verified against the official centre site.",
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
            Bhopal, Madhya Pradesh
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900">
            Vipassana in <GradientText>Bhopal</GradientText>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            If you searched for Vipassana in Bhopal, you are looking for one
            place: <strong>Dhamma Pala</strong>, the Goenka-tradition centre that
            serves the city. The catch nobody spells out is that
            &ldquo;Bhopal&rdquo; here points at three different addresses, and
            walking into the wrong one wastes a day. Here is where each is, what
            a course costs, when they run, and how to get a seat, checked against
            the centre&apos;s own site rather than a directory listing.
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
            Direct answer — verified 2026-06-24
          </p>
          <p className="mt-3 text-lg leading-relaxed text-zinc-800">
            The Vipassana centre for Bhopal is{" "}
            <strong>Dhamma Pala</strong> (&ldquo;one who protects Dhamma&rdquo;),
            at <strong>Village Daulatpura, near Kerwa Dam, about 18 km from
            Bhopal</strong>. It has run free, donation-based{" "}
            <strong>10-day residential courses</strong> since May 2009. You do
            not register at the campus: registration runs through the{" "}
            <strong>City Office at E-2/50 Arera Colony</strong>, near Habibganj
            Railway Station. There is no fee for the course, food, or lodging.
          </p>
          <p className="mt-4 text-sm text-zinc-600">
            Source:{" "}
            <a
              href="https://pala.dhamma.org/"
              className="text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              pala.dhamma.org
            </a>
            . Live calendar:{" "}
            <a
              href="https://schedule.vridhamma.org/courses/pala"
              className="text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              schedule.vridhamma.org/courses/pala
            </a>
            .
          </p>
        </div>

        <ProofBanner
          metric="116"
          quote="The pagoda complex holds 116 individual meditation cells, and every cell is air-cooled. This is a settled, purpose-built campus, not a rented site with borrowed kitchens."
          source="Dhamma Pala centre site, pala.dhamma.org"
        />

        {/* THE THREE ADDRESSES — anchor */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            &ldquo;Bhopal&rdquo; is three different places
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            This is the part the aggregator listings flatten into one pin on a
            map, and it is exactly what trips up a first-timer. When people say
            Vipassana in Bhopal, depending on what they need, they could mean any
            of three physically separate locations. Sort out which one you
            actually want before you set out.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4">
            <div className="rounded-2xl border border-teal-200 bg-teal-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                Where you sit the course
              </p>
              <p className="mt-2 font-semibold text-zinc-900">
                Dhamma Pala Vipassana Centre
              </p>
              <p className="mt-1 text-zinc-700 leading-relaxed">
                Village Daulatpura, near Kerwa Dam, about 18 km out of the city.
                The forest campus where 10-day and longer residential courses
                run. You travel here for the course itself, not to ask
                questions.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Where you register
              </p>
              <p className="mt-2 font-semibold text-zinc-900">
                City Office, Arera Colony
              </p>
              <p className="mt-1 text-zinc-700 leading-relaxed">
                E-2/50 Arera Colony, near Habibganj Railway Station, Bhopal
                462016. This office handles registration and correspondence for
                everything at the centre. It is an office in the city, not a
                meditation hall.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Where old students do 1-day sittings
              </p>
              <p className="mt-2 font-semibold text-zinc-900">
                Soma Vihar (in-city venue)
              </p>
              <p className="mt-1 text-zinc-700 leading-relaxed">
                A separate city venue used for 1-day courses, usually 11 am to 5
                pm, for people who have already completed a 10-day course. Weekly
                group sittings also run in town on Sundays. Neither is the
                residential campus and neither is open to new students.
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
            If this is your first course, only the first box matters to you. The
            Soma Vihar 1-day courses and the Sunday group sittings open up after
            you have sat a full 10-day course.
          </p>
        </section>

        {/* FACTS TABLE */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            The centre at a glance
          </h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-zinc-200">
                {[
                  ["Centre name", "Dhamma Pala (“one who protects Dhamma”)"],
                  ["Location", "Village Daulatpura, near Kerwa Dam"],
                  ["Distance from city", "~18 km from Bhopal"],
                  ["State", "Madhya Pradesh, India"],
                  ["Established", "May 2009 (camps in Bhopal since 1984)"],
                  ["Grounds", "~5 acres, forest surroundings"],
                  [
                    "Accommodation",
                    "Single rooms for 40 male, 30 female; pagoda of 116 air-cooled cells",
                  ],
                  ["Courses per year", "~19 to 20 ten-day courses, plus shorter and long courses"],
                  ["Register via", "City Office, E-2/50 Arera Colony, Bhopal 462016"],
                  ["Cost", "None. Donation only, accepted from old students"],
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

        {/* COST */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            Why it is free, and what &ldquo;free&rdquo; means here
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            The most common question about a Bhopal course is the price, and the
            honest answer surprises people: there is no charge at all. Not for
            tuition, not for the ten nights of lodging, not for the meals. The
            whole tradition runs on a closed loop of generosity. Donations are
            accepted only from people who have already completed a 10-day
            course, because only someone who has sat one knows what they are
            paying forward.
          </p>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            So a first-timer at Dhamma Pala is, in a literal sense, hosted by the
            people who sat there before them. At the end of your course you can
            give whatever you wish, or nothing, and your seat was never
            conditional on it. There is nothing to buy: no faster track, no
            private upgrade, no membership.
          </p>
        </section>

        {/* HOW TO GET A SEAT */}
        <StepTimeline
          title="How to actually get a seat"
          steps={[
            {
              title: "Apply early, online",
              description:
                "Submit the application on pala.dhamma.org. Registration and correspondence go through the Arera Colony City Office. Several July and August 2026 dates already show full or wait-list, so earlier is better.",
            },
            {
              title: "Wait for confirmation before booking travel",
              description:
                "Applying is not a confirmed seat. You will hear back, and only then should you buy non-refundable trains or flights to Bhopal.",
            },
            {
              title: "Plan the 18 km out to Daulatpura",
              description:
                "Remember the campus is near Kerwa Dam, not in the city. Sort your transport from the city to the centre in advance; this is where people who only knew the Arera Colony address lose time.",
            },
            {
              title: "Arrive on day zero, stay to the final morning",
              description:
                "Registration and orientation happen the afternoon the course begins. You commit to the full duration and the discipline for the whole stay. Bring a photo ID copy. It is all-or-nothing; there is no leaving early.",
            },
          ]}
        />

        {/* CALENDAR */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            The 2026 course snapshot
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            These are 10-day start windows open to new students at the time of
            writing. Dates shift, courses fill, and the centre adds or cancels
            sittings, so treat this as a planning snapshot and confirm against
            the{" "}
            <a
              href="https://schedule.vridhamma.org/courses/pala"
              className="text-teal-600 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              live schedule
            </a>{" "}
            before you book travel.
          </p>

          <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              10-day courses (open to new students)
            </p>
            <ul className="mt-3 space-y-2">
              {tenDayOpen2026.map((d) => (
                <li
                  key={d.dates}
                  className="flex items-center justify-between border-b border-zinc-200 pb-2 text-sm"
                >
                  <span className="text-zinc-800">{d.dates}</span>
                  <span className="text-zinc-500">{d.note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 rounded-2xl border border-zinc-200 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Old-student and long courses
            </p>
            <ul className="mt-3 space-y-2">
              {oldStudentLong2026.map((o) => (
                <li key={o.type} className="text-sm text-zinc-700">
                  <span className="font-semibold text-zinc-900">{o.type}:</span>{" "}
                  {o.dates}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-sm text-zinc-500">
            The 20-day and 30-day courses scheduled for December are for
            experienced sitters who meet the tradition&apos;s requirements, not
            for a first course. If this is your first, the 10-day list above is
            your list.
          </p>
        </section>

        {/* PEER NOTE */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            What a Bhopal course is, and is not
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            One thing the listing pages never tell you: the location matters less
            than you think. Across six courses at three different centres, the
            place was never what made a course hard. The hours and the silence
            were. A first 10-day course is a structured introduction, the same
            shape whether you sit it near Kerwa Dam or in California. What changes
            between centres is the setting, the food, the room you sleep in. The
            work itself does not.
          </p>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            The harder, quieter question is what happens after. A 10-day course
            is the on-ramp; the practice is what you carry home to Bhopal, or
            wherever you live, and try to keep alive on ordinary mornings when no
            schedule and no bell is making you sit. That is the part almost
            nobody plans for, and the part this site exists to help with.
          </p>
        </section>

        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Sat a course, now stuck on the daily sit?"
          description="If you have done a 10-day course (in Bhopal or anywhere) and the daily practice keeps slipping, book a short call and I will help you set up a practice-buddy pairing for accountability."
        />

        <FaqSection items={faqs} heading="Vipassana in Bhopal: common questions" />

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
              title: "Finding and choosing a retreat",
              href: "/guide/find-a-retreat",
              excerpt:
                "How to pick a centre and a date when every course is free and fills fast.",
              tag: "Guide",
            },
            {
              title: "Preparing for your first course",
              href: "/guide/first-course-tips",
              excerpt:
                "What to bring, what to expect, and how to make the first few days easier.",
              tag: "Beginners",
            },
          ]}
        />

        <p className="mt-12 text-sm text-zinc-500 leading-relaxed">
          I am a fellow practitioner, not a teacher. For any question about how
          to meditate, how to sit, or how to work with what comes up, the only
          real sources are the authorised assistant teachers at a 10-day course
          and{" "}
          <a
            href="https://www.dhamma.org/"
            className="text-teal-600 underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            dhamma.org
          </a>
          . Centre facts on this page were verified against pala.dhamma.org on
          June 24, 2026.
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
