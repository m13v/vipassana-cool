import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ProofBanner,
  MetricsRow,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-raipur";
const PUBLISHED = "2026-07-01";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana in Raipur: two places, not one. Dhamma Kuti (Singarbhatha) plus the city 1-day sittings",
  description:
    "Vipassana in Raipur is two different things at two addresses. The residential 10-day center is Dhamma Kuti at Village Singarbhatha, Kendri, Raipur 493661, about 23 km out, with 50 single rooms on 5 acres. The city runs separate 1-day courses every first Sunday at Mittal Complex, Ganjpara. Addresses, the irregular 2026 course dates, cost, and how to apply, from a meditator who has sat six courses. Verified against kuti.vridhamma.org on 2026-07-01.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Vipassana in Raipur: Dhamma Kuti vs the city 1-day sittings",
    description:
      "The residential Goenka center for Raipur is Dhamma Kuti, 23 km out at Singarbhatha. The city 1-day courses run at Mittal Complex, Ganjpara. Two addresses people constantly mix up, plus the 2026 dates and how to apply.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana in Raipur: the two addresses explained",
    description:
      "Dhamma Kuti is the residential 10-day center for Raipur, 23 km out. Separate 1-day sittings run inside the city. Where each is, the irregular course calendar, cost, and how to apply.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana in Raipur" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana in Raipur", url: PAGE_URL },
];

const tenDayDates2026 = [
  { dates: "June 21 to July 2", note: "recently began" },
  { dates: "July 12 to 23", note: "" },
  { dates: "August 16 to 27", note: "" },
  { dates: "September 6 to 17", note: "" },
  { dates: "December 6 to 17", note: "" },
  { dates: "December 20 to 31", note: "spans the new year" },
];

const shortCourses2026 = [
  { type: "1-day (old students)", dates: "July 26, August 9, August 30" },
  { type: "3-day (old students)", dates: "October 1 to 4" },
  { type: "Children's Anapana (ages 8+)", dates: "July 5" },
  { type: "Children's course (ages 8 to 15)", dates: "September 27, October 25, November 29" },
];

const faqs: FaqItem[] = [
  {
    q: "Is there a Vipassana center in Raipur?",
    a: "Yes, one residential center. The Goenka-tradition center serving Raipur is Dhamma Kuti, in Village Singarbhatha near Kendri, about 23 km from the city and a 30 to 40 minute drive out. The full postal address is Village Singarbhatha, Kendri, Raipur, Chhattisgarh 493661. It is the only residential Vipassana center that the Vipassana Research Institute and dhamma.org list for Raipur. Separately, the city hosts non-residential 1-day courses, which is where a lot of the confusion comes from.",
  },
  {
    q: "What is the difference between Dhamma Kuti and the courses inside Raipur city?",
    a: "They are two different formats at two different addresses. Dhamma Kuti at Singarbhatha is the residential center where the full 10-day course happens: you stay on site, in noble silence, for 10 nights. The in-city offering at Mittal Complex, Ganjpara, is a 1-day course held every first Sunday, and it is for people who have already completed a 10-day course. If you are new to Vipassana, the 1-day city sittings are not your starting point. The 10-day residential course at Dhamma Kuti is.",
  },
  {
    q: "How many people can Dhamma Kuti hold?",
    a: "It is a small center. There are 50 single-occupancy rooms, each with an attached bathroom, spread across 5 acres, with a meditation hall, dining hall, and kitchen. During high-registration months some rooms convert to double occupancy, but the baseline is 50 single rooms. Because the center is small, seats for the 10-day courses fill, so applying early rather than close to the start date matters more here than at a large center.",
  },
  {
    q: "When do the 2026 Vipassana courses start in Raipur?",
    a: "Unlike some Indian centers that run on a fixed rhythm, Dhamma Kuti's 2026 10-day dates are irregular: June 21, July 12, August 16, September 6, December 6, and December 20. There is no reliable Xth-of-the-month pattern to guess from, so you have to check the live calendar at schedule.vridhamma.org/courses/kuti before planning travel. Short courses for old students and children's courses are scattered through the year on their own dates.",
  },
  {
    q: "How much does a course at Dhamma Kuti cost?",
    a: "Nothing. There is no charge for the teaching, the food, or the room. The whole tradition runs on donation, and donations are accepted only from students who have already completed a 10-day course. So a first-timer at Dhamma Kuti is effectively hosted by everyone who sat there before them. At the end you may give what you wish if the course was valuable to you, or nothing at all, and your place was never conditional on paying.",
  },
  {
    q: "How do I apply for a course at Dhamma Kuti?",
    a: "Applications go through the official schedule site, schedule.vridhamma.org/courses/kuti, where you pick a start date and fill in the application form. Arrival is by 4:00 PM on the day the course begins, and the course ends the morning of the 11th day by about 7:30 AM. For questions before you apply you can reach the center at 8962903033 or 9893643646, or by email at info.kuti@vridhamma.org.",
  },
  {
    q: "Can I actually learn the technique from a website or an app?",
    a: "No, and this site does not try to teach it. In this tradition the technique is only transmitted in person by an authorized assistant teacher inside a 10-day residential course. I am a fellow meditator sharing logistics and personal experience, not a teacher. For anything about how to practice, the authoritative source is dhamma.org and the teacher at your course.",
  },
];

export default function Page() {
  const readingTime = "6 min read";

  const jsonLd = [
    articleSchema({
      headline:
        "Vipassana in Raipur: two places, not one. Dhamma Kuti plus the city 1-day sittings",
      description:
        "The residential Goenka Vipassana center for Raipur is Dhamma Kuti at Singarbhatha, 23 km from the city. Separate 1-day courses run inside the city at Mittal Complex, Ganjpara. Addresses, the irregular 2026 calendar, cost, and how to apply.",
      url: PAGE_URL,
      datePublished: PUBLISHED,
      author: "Matthew Diakonov",
      authorUrl: "https://m13v.com",
      publisherName: "Vipassana.cool",
      publisherUrl: "https://vipassana.cool",
    }),
    breadcrumbListSchema(breadcrumbSchemaItems),
    faqPageSchema(faqs),
  ];

  return (
    <article className="min-h-screen text-zinc-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-3xl px-5 py-10">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="mt-6">
          <p className="text-sm font-medium uppercase tracking-wide text-teal-600">
            Raipur, Chhattisgarh
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
            Vipassana in Raipur is two different places, and most listings blur them together
          </h1>
          <div className="mt-4">
            <ArticleMeta
              author="Matthew Diakonov"
              authorRole="Written with AI"
              datePublished={PUBLISHED}
              readingTime={readingTime}
            />
          </div>
        </header>

        {/* Direct answer callout */}
        <section
          aria-label="Direct answer"
          className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer, verified July 1, 2026
          </p>
          <p className="mt-3 text-lg leading-relaxed text-zinc-800">
            The residential Vipassana center for Raipur is{" "}
            <span className="font-semibold text-zinc-900">Dhamma Kuti</span>, at Village
            Singarbhatha, Kendri, Raipur, Chhattisgarh 493661, about 23 km and a 30 to 40
            minute drive from the city. That is where the full 10-day course happens.
            Separately, the city hosts non-residential{" "}
            <span className="font-semibold text-zinc-900">1-day courses</span> for existing
            students every first Sunday at Mittal Complex, Ganjpara. Two addresses, two
            formats. If you are new, Dhamma Kuti is the one you want.
          </p>
          <p className="mt-3 text-sm text-zinc-600">
            Checked against{" "}
            <a
              href="https://kuti.vridhamma.org/"
              className="font-medium text-teal-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              kuti.vridhamma.org
            </a>{" "}
            and{" "}
            <a
              href="https://schedule.vridhamma.org/courses/kuti"
              className="font-medium text-teal-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              the live course schedule
            </a>
            .
          </p>
        </section>

        <MetricsRow
          metrics={[
            { value: 50, label: "single rooms on site" },
            { value: 23, suffix: " km", label: "from Raipur city" },
            { value: 5, label: "acres of grounds" },
            { value: 0, prefix: "₹", label: "cost, donation only" },
          ]}
        />

        {/* Why two addresses */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-zinc-900">
            Why "vipassana raipur" pulls up conflicting answers
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-700">
            Search the phrase and you get a mess: business-directory pages listing generic
            "meditation classes" alongside unrelated yoga studios, a Facebook page spelled
            "Dhamma Kutir," a couple of contact numbers with no context, and the official
            center site that gives you facts but never tells you which thing is which. The
            reason it looks contradictory is that people are describing two genuinely
            different offerings and using the same words for both.
          </p>
          <p className="mt-4 leading-relaxed text-zinc-700">
            One is a residential center 23 km out of town where you disappear for ten days.
            The other is a Sunday sitting inside the city for people who have already done
            that. When a listing says "Vipassana in Raipur" without saying which, it is
            not wrong, it is just incomplete. Here is the clean split.
          </p>
        </section>

        {/* The disambiguation table (custom) */}
        <section className="mt-8">
          <div className="overflow-hidden rounded-2xl border border-zinc-200">
            <div className="grid grid-cols-1 divide-y divide-zinc-200 md:grid-cols-2 md:divide-x md:divide-y-0">
              <div className="bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
                  The residential center
                </p>
                <h3 className="mt-2 text-lg font-bold text-zinc-900">Dhamma Kuti</h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="font-medium text-zinc-500">Address</dt>
                    <dd className="text-zinc-800">
                      Village Singarbhatha, Kendri, Raipur, Chhattisgarh 493661
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-zinc-500">Format</dt>
                    <dd className="text-zinc-800">
                      10-day residential course, stay on site in silence
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-zinc-500">For</dt>
                    <dd className="text-zinc-800">
                      New students and old students alike. This is where you start.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-zinc-500">Getting there</dt>
                    <dd className="text-zinc-800">
                      23 km from the railway station, 20 km from the airport, 20 km from ISBT
                      Bhatagao bus stand
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-zinc-500">Contact</dt>
                    <dd className="text-zinc-800">
                      8962903033, 9893643646, info.kuti@vridhamma.org
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="bg-zinc-50 p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  The in-city sittings
                </p>
                <h3 className="mt-2 text-lg font-bold text-zinc-900">
                  1-day courses, Ganjpara
                </h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="font-medium text-zinc-500">Address</dt>
                    <dd className="text-zinc-800">
                      Mittal Complex, Ganjapar, Telghani Naka, Ganjpara, Raipur
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-zinc-500">Format</dt>
                    <dd className="text-zinc-800">
                      Single-day course, every first Sunday, non-residential
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-zinc-500">For</dt>
                    <dd className="text-zinc-800">
                      Old students only, people who have finished a 10-day course
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-zinc-500">Getting there</dt>
                    <dd className="text-zinc-800">Inside Raipur city, no travel out of town</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-zinc-500">Contact</dt>
                    <dd className="text-zinc-800">
                      Sadaram Gupta 9425205310, Anirudha Koche 9826388308
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <p className="mt-3 text-sm text-zinc-500">
            City 1-day details from the Vipassana Research Institute's{" "}
            <a
              href="https://www.vridhamma.org/1-day-Courses-Information-in-India"
              className="font-medium text-teal-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              1-day course directory
            </a>
            .
          </p>
        </section>

        {/* The anchor fact: irregular calendar */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900">
            The one planning fact nobody spells out: the dates are irregular
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-700">
            Some Indian centers run on a fixed clockwork rhythm. Kanpur's Dhamma Kalyana, for
            instance, starts 10-day courses on the 5th and the 20th of most months, so you can
            roughly predict a start date without looking anything up. Dhamma Kuti does not work
            that way. Its 2026 dates land on no consistent pattern, which means you cannot
            guess, you have to read the calendar. Here it is.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-50 text-zinc-500">
                <tr>
                  <th className="px-5 py-3 font-medium">10-day course (new and old students)</th>
                  <th className="px-5 py-3 font-medium">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {tenDayDates2026.map((d) => (
                  <tr key={d.dates} className="bg-white">
                    <td className="px-5 py-3 font-medium text-zinc-900">{d.dates}</td>
                    <td className="px-5 py-3 text-zinc-500">{d.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-50 text-zinc-500">
                <tr>
                  <th className="px-5 py-3 font-medium">Other 2026 courses</th>
                  <th className="px-5 py-3 font-medium">Dates</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {shortCourses2026.map((c) => (
                  <tr key={c.type} className="bg-white">
                    <td className="px-5 py-3 font-medium text-zinc-900">{c.type}</td>
                    <td className="px-5 py-3 text-zinc-700">{c.dates}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-zinc-500">
            Dates as published on{" "}
            <a
              href="https://schedule.vridhamma.org/courses/kuti"
              className="font-medium text-teal-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              schedule.vridhamma.org/courses/kuti
            </a>{" "}
            and verified July 1, 2026. Seats and dates change, so treat the live schedule as
            the source of truth and this table as a snapshot.
          </p>
        </section>

        <ProofBanner
          quote="No charge for the teaching, the food, or the room. Donations come only from students who already finished a course, so a first-timer is hosted by everyone who sat there before them."
          source="Vipassana donation model, dhamma.org"
          metric="₹0"
        />

        {/* Personal note, reflective not instructional */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900">
            What a small center like this is actually like
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-700">
            I have not sat at Dhamma Kuti. My six courses were at three centers in California,
            so take this as pattern-matching from someone who has done the format, not a review
            of this specific place. But 50 single rooms tells you a lot. A center that size runs
            intimate. You will recognize the same faces at the dining hall by day three, even
            through the silence, and the walking paths on 5 acres get familiar fast. Bigger
            centers can feel anonymous in a way that is sometimes a relief and sometimes
            isolating. Small ones do not.
          </p>
          <p className="mt-4 leading-relaxed text-zinc-700">
            The two logistics that matter most are the arrival cutoff and the exit. You need to
            be on site by 4 PM on day zero, before the evening orientation, and the course
            releases you the morning of day eleven around 7:30. If you are traveling in from
            outside Raipur, book so you land with real margin before that 4 PM cutoff, because
            once noble silence and the schedule begin, a late arrival is genuinely disruptive.
            The solar water heating is a small mercy worth knowing about if you sit a December
            course: mornings in Chhattisgarh get cold, and hot water at 4 AM is not nothing.
          </p>
          <p className="mt-4 leading-relaxed text-zinc-700">
            For the actual technique, and for any question about how to sit or what to do with
            what comes up, the only real sources are dhamma.org and the assistant teacher at
            your course. This page is deliberately about where to go and how to plan, not how to
            practice.
          </p>
        </section>

        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Sitting your first course and want someone to keep you accountable after?"
          description="I match meditators into practice-buddy pairs so the daily sit survives the trip home from the center. Book a short call and I'll explain how it works."
        />

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-zinc-900">Questions people ask</h2>
          <div className="mt-4">
            <FaqSection items={faqs} />
          </div>
        </section>

        <div className="mt-14">
          <RelatedPostsGrid
            title="Keep reading"
            posts={[
              {
                title: "Vipassana in Kanpur: Dhamma Kalyana and the 5th-and-20th rhythm",
                href: "/t/vipassana-kanpur",
                excerpt:
                  "The nearest comparison: a center that does run on a fixed monthly clock, unlike Raipur.",
                tag: "Location",
              },
              {
                title: "How to find and choose a retreat",
                href: "/guide/find-a-retreat",
                excerpt: "Reading a center's schedule, applying, and picking dates that fit.",
                tag: "Getting started",
              },
              {
                title: "First course tips",
                href: "/guide/first-course-tips",
                excerpt: "What actually helps before your first 10-day course.",
                tag: "Preparation",
              },
            ]}
          />
        </div>
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Building a daily practice after your course? I'll pair you with a practice buddy."
      />
    </article>
  );
}
