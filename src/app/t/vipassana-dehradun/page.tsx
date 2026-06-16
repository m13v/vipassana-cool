import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  MetricsRow,
  GlowCard,
  GradientText,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-dehradun";
const PUBLISHED = "2026-06-15";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana in Dehradun: Dhamma Salila, the only Goenka center in the Doon Valley",
  description:
    "The Vipassana center serving Dehradun is Dhamma Salila, in Dholas Village ~10 km from the Clock Tower, established December 1995. It runs about 20 courses a year (two 10-day courses every month, none in January), houses students in 36 double rooms plus 78 cells, and charges nothing. Location, cost, the live 2026 calendar, and how to apply, from a meditator who has sat six courses. Verified against salila.dhamma.org on 2026-06-15.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Vipassana in Dehradun: where it is, what it costs, how to apply",
    description:
      "Dhamma Salila is the Goenka-tradition Vipassana center for Dehradun. The address, the donation model, the 2026 course calendar, and the application mechanics, checked against the official center site.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana in Dehradun: Dhamma Salila explained",
    description:
      "The one Goenka Vipassana center near Dehradun, its location, cost, calendar, and how to apply. Notes from six courses.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana in Dehradun" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana in Dehradun", url: PAGE_URL },
];

const centerMetrics = [
  { value: 1995, label: "Established (December)" },
  { value: 20, label: "Courses run per year", prefix: "~" },
  { value: 78, label: "Single cells for meditators" },
  { value: 0, label: "Course fee (donation only)" },
];

const tenDayDates2026 = [
  "June 17 to 28",
  "July 1 to 12",
  "July 15 to 26",
  "July 29 to August 9",
  "August 12 to 23",
  "September 9 to 20",
  "September 23 to October 4",
  "October 7 to 18",
  "October 21 to November 1",
  "November 11 to 22",
  "November 25 to December 6",
  "December 9 to 20",
];

const otherDates2026 = [
  { type: "3-day course (old students)", dates: "Aug 24 to 27, Nov 3 to 6" },
  {
    type: "Satipatthana Sutta course (old students)",
    dates: "Aug 29 to Sep 6, Dec 22 to 30",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Where exactly is the Vipassana center in Dehradun?",
    a: "Dhamma Salila sits in Dholas Village on the Noon river, in the Doon Valley, about 10 km from the Clock Tower in Dehradun, Uttarakhand. It is the Goenka-tradition center that serves the Dehradun and wider Garhwal area. The exact arrival point and travel notes are on the official center site at salila.dhamma.org.",
  },
  {
    q: "How much does a Vipassana course in Dehradun cost?",
    a: "Nothing. There is no charge for the course, the food, or the accommodation. The model is donation only, and donations are accepted solely from people who have already completed a 10-day course, so that newcomers are always hosted by those who came before them. You apply, you sit, and at the end you give what you wish if you found value, or nothing.",
  },
  {
    q: "How often do courses run at Dhamma Salila?",
    a: "The center runs about 20 courses a year, with two 10-day courses every month. Courses run year-round except January. Beyond the standard 10-day courses there are occasional 3-day and Satipatthana Sutta courses for old students, and the broader Indian center network runs longer 20, 30, 45, and 60-day courses for experienced sitters. Check the live calendar at schedule.vridhamma.org/courses/salila before planning travel.",
  },
  {
    q: "How do I apply for a course in Dehradun?",
    a: "Apply through the official site, either by filling out the online form or by downloading and mailing a paper form. Courses commonly fill one to two months ahead, so apply early. You arrive between 2 and 4 PM on the start day and stay until roughly 7 AM on the final day. Bring a photocopy of your ID and a passport-size photo. Do not book non-refundable travel until your seat is confirmed.",
  },
  {
    q: "Is Dhamma Salila a beginner-friendly place for a first course?",
    a: "A first 10-day course is the same structured introduction at every center in the tradition, Dehradun included. The conditions here are settled (built cells and double rooms rather than a rented camp), which some first-timers find steadies the experience. What makes a first course hard is rarely the place. It is the silence and the hours. I am not a teacher, just someone who has sat six of these; for anything about how to practice, the authorized assistant teachers on site and dhamma.org are the only real source.",
  },
  {
    q: "What is the accommodation like?",
    a: "The center currently has twenty double rooms for men and sixteen double rooms for women, plus seventy-eight single cells built for meditators. That is a meaningful detail: many centers, including ones I sat at in California, put twelve people in a room with bunk beds. Settled, purpose-built accommodation is one reason an established center like Dhamma Salila (open since 1995) reads differently from a course held at a rented site.",
  },
  {
    q: "Can I just visit or do a short drop-in session in Dehradun?",
    a: "No. The 10-day residential course is the entry point, and it is all-or-nothing: you commit to the full duration and the discipline for the whole stay. There is no casual drop-in or day-visit meditation here. After your first course you become eligible for shorter formats like the 3-day and Satipatthana courses, and for group sittings at the center.",
  },
];

export default function Page() {
  const schema = [
    breadcrumbListSchema(breadcrumbSchemaItems),
    articleSchema({
      headline:
        "Vipassana in Dehradun: Dhamma Salila, the only Goenka center in the Doon Valley",
      description:
        "Location, cost, the 2026 course calendar, and how to apply for a Vipassana course at Dhamma Salila in Dehradun, verified against the official center site.",
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
            Dehradun, Uttarakhand
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900">
            Vipassana in <GradientText>Dehradun</GradientText>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            If you searched for a Vipassana course in Dehradun, you are looking
            for one specific place: <strong>Dhamma Salila</strong>, the
            Goenka-tradition center that sits in the Doon Valley just outside the
            city. Here is exactly where it is, what it costs, when it runs, and
            how to get a seat, checked against the center&apos;s own site rather
            than copied from a directory listing.
          </p>
        </header>

        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="7 min read"
        />

        {/* DIRECT ANSWER */}
        <GlowCard className="mt-10 rounded-2xl border border-teal-200 bg-teal-50 p-6 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Direct answer — verified 2026-06-15
          </p>
          <p className="mt-3 text-lg leading-relaxed text-zinc-800">
            The Vipassana center for Dehradun is{" "}
            <strong>Dhamma Salila</strong> (&ldquo;Water of Dhamma&rdquo;), in
            Dholas Village on the Noon river, about{" "}
            <strong>10 km from the Clock Tower</strong> in Dehradun. It has run
            free, donation-based <strong>10-day residential courses</strong>{" "}
            since December 1995, with roughly two courses starting every month.
            You apply online; there is no fee for the course, food, or lodging.
          </p>
          <p className="mt-4 text-sm text-zinc-600">
            Source:{" "}
            <a
              href="https://salila.dhamma.org/en/the-centre/"
              className="text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              salila.dhamma.org/en/the-centre
            </a>
            . Live calendar:{" "}
            <a
              href="https://schedule.vridhamma.org/courses/salila"
              className="text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              schedule.vridhamma.org/courses/salila
            </a>
            .
          </p>
        </GlowCard>

        <MetricsRow metrics={centerMetrics} />

        {/* THE CENTER */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            One center, not a dozen options
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            Search results for this topic make it look like Dehradun has several
            meditation centers competing for your attention. For
            Goenka-tradition Vipassana specifically, there is one:{" "}
            <strong>Dhamma Salila</strong>. The directory pages, the
            map listings, and the booking aggregators all point back to the same
            campus in Dholas Village. Knowing that up front saves you from
            comparison-shopping a thing that has no competitor in town.
          </p>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            The name means &ldquo;Water of Dhamma.&rdquo; It opened in December
            1995, which matters more than it sounds. An established center has
            settled grounds and purpose-built lodging, where a course held at a
            rented site has bunk-bed dormitories and borrowed kitchens. My own
            first course was at a rented camp in California with twelve people to
            a room. Dhamma Salila, by contrast, currently houses students in{" "}
            <strong>twenty double rooms for men, sixteen for women, and
            seventy-eight single cells</strong>. If quiet conditions help you
            settle, an old center is worth the small extra travel.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-zinc-200">
                {[
                  ["Center name", "Dhamma Salila (“Water of Dhamma”)"],
                  [
                    "Location",
                    "Dholas Village, on the Noon river, Doon Valley",
                  ],
                  ["Distance from city", "~10 km from the Clock Tower, Dehradun"],
                  ["State", "Uttarakhand, India"],
                  ["Established", "December 1995"],
                  ["Courses per year", "~20, two 10-day courses each month"],
                  ["Closed", "January (no courses)"],
                  [
                    "Cost",
                    "None. Donation only, accepted from old students",
                  ],
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
            Why it is free, and what &ldquo;free&rdquo; actually means
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            The most common question about Dehradun courses is the price, and
            the honest answer surprises people: there is no charge at all. Not
            for tuition, not for the ten nights of lodging, not for the meals.
            The whole tradition runs on a closed loop of generosity. Donations
            are accepted only from people who have already completed a 10-day
            course, because only someone who has sat one knows what they are
            paying forward.
          </p>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            So a first-timer in Dehradun is, in a literal sense, hosted by the
            people who sat there before them. At the end of your course you can
            give whatever you wish, or nothing, and your seat was never
            conditional on it. This is also why you cannot &ldquo;buy a faster
            track&rdquo; or a private room: there is nothing to buy.
          </p>
        </section>

        {/* CALENDAR */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            The 2026 course calendar
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            These are the 10-day course start windows published for the rest of
            2026 at the time of writing. Dates shift, courses fill, and the
            center occasionally adds or cancels sittings, so treat this as a
            planning snapshot and confirm against the{" "}
            <a
              href="https://schedule.vridhamma.org/courses/salila"
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
              Other formats (old students only)
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
            The 3-day and Satipatthana Sutta courses are for people who have
            already finished a 10-day course in this tradition. If this is your
            first course, the 10-day list is your list.
          </p>
        </section>

        {/* HOW TO APPLY */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            How to actually get a seat
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            The seats are free, which means they go fast. Courses commonly fill
            one to two months ahead, so the bottleneck is timing, not money.
            Here is the sequence that works:
          </p>
          <ol className="mt-5 space-y-4">
            {[
              {
                h: "Apply early, online or by post",
                b: "Submit the application through the official site, either the online form or a downloaded paper form mailed in. Earlier is better; popular start dates close first.",
              },
              {
                h: "Wait for confirmation before booking travel",
                b: "Applying is not a confirmed seat. You will hear back, and only then should you buy non-refundable flights or trains to Dehradun.",
              },
              {
                h: "Bring ID and a photo",
                b: "The center asks for a photocopy of your personal identification and one passport-size photograph on arrival.",
              },
              {
                h: "Arrive 2 to 4 PM on day zero, leave the final morning",
                b: "Registration and orientation happen the afternoon the course begins. You commit to staying through the close, which is around 7 AM on the last day. It is all-or-nothing; there is no leaving early.",
              },
            ].map((s, i) => (
              <li key={s.h} className="flex gap-4">
                <span className="flex-shrink-0 mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-teal-100 text-sm font-semibold text-teal-700">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-zinc-900">{s.h}</p>
                  <p className="mt-1 text-zinc-700 leading-relaxed">{s.b}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-zinc-700 leading-relaxed">
            The application and the latest contact details live on{" "}
            <a
              href="https://salila.dhamma.org/"
              className="text-teal-600 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              salila.dhamma.org
            </a>
            . That site, and the authorized teachers there, are the only
            authority on anything operational. I run a resource site for fellow
            meditators; I do not run courses and I do not teach the technique.
          </p>
        </section>

        {/* PEER NOTE */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            What a Dehradun course is, and is not
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            One thing the listing pages never tell you: the location matters
            less than you think. Across six courses at three different centers,
            the place was never what made a course hard. The hours and the
            silence were. A first 10-day course is a structured introduction,
            the same shape whether you sit it in the Doon Valley or in
            California. What changes between centers is the setting, the
            altitude, the food, the room you sleep in. The work itself does not.
          </p>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            The harder, quieter question is what happens after. A 10-day course
            is the on-ramp; the practice is what you carry home to Dehradun, or
            wherever you live, and try to keep alive on ordinary mornings when
            no schedule and no bell is making you sit. That is the part almost
            nobody plans for, and the part this site exists to help with.
          </p>
        </section>

        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Sat a course, now stuck on the daily sit?"
          description="If you have done a 10-day course (in Dehradun or anywhere) and the daily practice keeps slipping, book a short call and I will help you set up a practice-buddy pairing for accountability."
        />

        <FaqSection items={faqs} heading="Vipassana in Dehradun: common questions" />

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
                "How to pick a center and a date when every course is free and fills fast.",
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
          . Center facts on this page were verified against salila.dhamma.org on
          June 15, 2026.
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
