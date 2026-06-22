import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  StepTimeline,
  ProofBanner,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/dhamma-paphulla-vipassana-meditation-research-centre";
const PUBLISHED = "2026-06-22";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Dhamma Paphulla Vipassana Meditation & Research Centre: address, how to reach, capacity, registration",
  description:
    "Dhamma Paphulla is the Vipassana centre in the S. N. Goenka tradition at Alur Village, Dasanapura Hobli, Bangalore North Taluk, Karnataka 562123. 10 acres donated in 2003 beside a natural stream; a main hall plus two mini halls seat about 120 meditators. Free 10-day courses, registration by application via paphulla.dhamma.org. Address, every transit route, capacity, and registration in one place. Verified 2026-06-22.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Dhamma Paphulla Vipassana Centre, Bangalore: the full reference card",
    description:
      "Exact address, every bus/metro/car route, capacity (~120 meditators), and the email-only registration rule for Dhamma Paphulla in Bangalore. Verified against paphulla.dhamma.org.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhamma Paphulla Vipassana Centre, Bangalore: reference card",
    description:
      "Address, transit routes, capacity, and registration for Dhamma Paphulla, the Goenka-tradition Vipassana centre near Bangalore.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Dhamma Paphulla centre" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Dhamma Paphulla centre", url: PAGE_URL },
];

const factRows: { label: string; value: React.ReactNode }[] = [
  {
    label: "Full name",
    value: "Dhamma Paphulla Vipassana Meditation & Research Centre",
  },
  {
    label: "Name meaning",
    value: "Paphulla means “cheerfulness of Dhamma” (fully blossomed)",
  },
  {
    label: "Address",
    value:
      "Alur Village, Dasanapura Hobli, Bangalore North Taluk, Karnataka 562123, India",
  },
  {
    label: "Setting",
    value:
      "10 acres beside a natural stream, north-western outskirts of Bengaluru, farmland on one side and forestland on the other",
  },
  {
    label: "Land donated",
    value: "2003; courses began after the first essential buildings were built",
  },
  {
    label: "Capacity",
    value:
      "About 120 meditators: a main hall seating ~100 plus two mini halls of ~30 each",
  },
  {
    label: "From Bangalore City Railway Station",
    value: "~23 km",
  },
  {
    label: "From Yeshwantpur Railway Station",
    value: "~16 km",
  },
  {
    label: "From Kempegowda (Bangalore) International Airport",
    value: "~1–2 hours by taxi",
  },
  {
    label: "Tradition",
    value:
      "Vipassana as taught by S. N. Goenka in the tradition of Sayagyi U Ba Khin",
  },
  {
    label: "Course",
    value:
      "10-day residential courses; there is no charge for tuition, food, or accommodation",
  },
  {
    label: "Registration",
    value: "By course application via paphulla.dhamma.org (enquiries by email)",
  },
  {
    label: "General enquiry phone",
    value: "9972588377 (general inquiries, not registration)",
  },
];

const carRouteSteps = [
  {
    title: "Leave the city centre on Tumkur Road (NH-4)",
    description:
      "Head north-west out of Bengaluru on Tumkur Road, the Bangalore–Pune highway, toward Nelamangala.",
  },
  {
    title: "Pass Yeshwantpur, Jalahalli Cross, Exhibition Grounds",
    description:
      "The road runs past Yeshwantpur Railway Station, Jalahalli Cross, and the Exhibition Grounds. Yeshwantpur is the closest big railway station at about 16 km.",
  },
  {
    title: "Take the U-turn after the Himalaya Drug Company landmark",
    description:
      "After the Himalaya Drug Company building, take the U-turn under the flyover so you are heading back toward the Alur turn-off.",
  },
  {
    title: "Turn toward Alur and continue about 3 km",
    description:
      "Turn left toward Alur village and follow the road roughly 3 km off the main highway to the centre gate.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Where exactly is Dhamma Paphulla?",
    a: "Dhamma Paphulla is at Alur Village, Dasanapura Hobli, Bangalore North Taluk, Karnataka 562123, India. It sits on the north-western outskirts of Bengaluru, off Tumkur Road (the Bangalore-Pune highway, NH-4), roughly 3 km off the main road. It is about 23 km from Bangalore City Railway Station and about 16 km from Yeshwantpur Railway Station. Source: paphulla.dhamma.org/about/contact-us and the centre's how-to-reach page.",
  },
  {
    q: "How do I reach the centre by public transport?",
    a: "Direct buses 257E, 257, and 257H run from Majestic, City Market, and Shivajinagar to Alur. Alternatively take a 256/258-series bus to Makali Bus Stop, then an auto-rickshaw the remaining ~3 km to the centre. By metro, the Green Line runs to Madavara station (the last stop), and from there you take a bus to Makali. Routes are listed on paphulla.dhamma.org/the-center/how-to-reach.",
  },
  {
    q: "How many people can the centre hold?",
    a: "About 120 meditators at one time. The main meditation hall seats roughly 100 and there are two mini halls seating about 30 each. The centre occupies 10 acres beside a natural stream, with land donated in 2003. Source: the Dhamma Paphulla general information page on paphulla.vridhamma.org.",
  },
  {
    q: "What does a course cost at Dhamma Paphulla?",
    a: "Nothing. As at every centre in this tradition, 10-day Vipassana courses have no charge for tuition, food, or accommodation. Centres are run entirely on donations, and only a student who has completed at least one full 10-day course may donate, so that each course is paid for by the gratitude of past students rather than by the people currently sitting. See dhamma.org for the policy.",
  },
  {
    q: "How do I register for a course there?",
    a: "Registration is by course application through the centre's website, paphulla.dhamma.org, and the centre asks that enquiries come by email rather than phone (the listed phone number, 9972588377, is for general inquiries). Pick a course date from the schedule, submit the application form, and wait for confirmation. Seats are limited because the centre holds about 120 people, so popular dates fill early.",
  },
  {
    q: "Does this site teach the technique or run courses at Dhamma Paphulla?",
    a: "No. Vipassana.cool is a resource site run by a fellow old student, not a centre and not a teacher. The technique is only ever taught in person inside a 10-day residential course by an authorized assistant teacher. For anything about how to practice, or for course logistics, the authoritative sources are dhamma.org and the centre directly. This page is a logistics and orientation reference only.",
  },
  {
    q: "Is Dhamma Paphulla the same tradition as the centres in the US?",
    a: "Yes. Dhamma Paphulla teaches Vipassana as taught by S. N. Goenka in the tradition of Sayagyi U Ba Khin, the same lineage taught at the North American centres. The Code of Discipline, the daily timetable, noble silence, the meal schedule, and the 10-day arc are standardized across every centre in the tradition worldwide, so an old student from any centre can sit at Dhamma Paphulla and know exactly what to expect.",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Dhamma Paphulla Vipassana Meditation & Research Centre: address, how to reach, capacity, registration",
    description:
      "A verified reference card for Dhamma Paphulla, the S. N. Goenka tradition Vipassana centre at Alur Village near Bangalore: exact address, every transit route, capacity, cost, and registration mechanics.",
    url: PAGE_URL,
    datePublished: PUBLISHED,
    author: "Matthew Diakonov",
    authorUrl: "https://m13v.com",
    publisherName: "Vipassana.cool",
    publisherUrl: "https://vipassana.cool",
  });
  const faqSchemaJson = faqPageSchema(faqs, `${PAGE_URL}#faq`);
  const breadcrumbSchemaJson = breadcrumbListSchema(breadcrumbSchemaItems);

  return (
    <article className="min-h-screen text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            articleSchemaJson,
            faqSchemaJson,
            breadcrumbSchemaJson,
          ]),
        }}
      />

      <div className="pt-10">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <header className="max-w-3xl mx-auto px-6 pt-6 pb-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
          Centre reference · Bengaluru, Karnataka
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
          Dhamma Paphulla Vipassana Meditation &amp; Research Centre
        </h1>
        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          Most pages about this centre give you one fragment: an address on one
          site, a phone number on another, a paragraph of history on a third.
          This is the whole reference in one place: where it is, every way to
          reach it, how many people it holds, what a course costs, and how
          registration actually works. I have sat six courses in this tradition,
          though not at this particular centre, so the personal-experience parts
          are marked as cross-centre, and everything centre-specific is pulled
          straight from the official Dhamma Paphulla pages and dated below.
        </p>
      </header>

      <ArticleMeta
        author="Matthew Diakonov"
        authorRole="Written with AI"
        datePublished={PUBLISHED}
        readingTime="5 min read"
      />

      <section className="max-w-3xl mx-auto px-6 pt-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Direct answer (verified 2026-06-22)
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            <strong>Dhamma Paphulla</strong> is the Vipassana centre in the
            S. N. Goenka tradition at{" "}
            <strong>
              Alur Village, Dasanapura Hobli, Bangalore North Taluk, Karnataka
              562123, India
            </strong>
            , on the north-western outskirts of Bengaluru off Tumkur Road. It is
            about <strong>23 km</strong> from Bangalore City Railway Station and
            about <strong>16 km</strong> from Yeshwantpur. It runs{" "}
            <strong>free 10-day residential courses</strong> and holds about{" "}
            <strong>120 meditators</strong>. You register by application at{" "}
            <a
              href="https://paphulla.dhamma.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              paphulla.dhamma.org
            </a>
            ; enquiries are handled by email. Source:{" "}
            <a
              href="https://paphulla.dhamma.org/about/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              the centre&apos;s contact page
            </a>
            .
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The centre at a glance
        </h2>
        <p className="mt-3 text-zinc-600 leading-relaxed">
          Every row below is centre-specific and verified against the official
          pages on 2026-06-22.
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <table className="w-full text-left text-sm">
            <tbody>
              {factRows.map((row, i) => (
                <tr
                  key={row.label}
                  className={i % 2 === 0 ? "bg-zinc-50" : "bg-white"}
                >
                  <th
                    scope="row"
                    className="align-top px-5 py-3 font-medium text-zinc-500 w-2/5 border-b border-zinc-100"
                  >
                    {row.label}
                  </th>
                  <td className="align-top px-5 py-3 text-zinc-800 border-b border-zinc-100">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-zinc-500">
          Compiled from{" "}
          <a
            href="https://paphulla.dhamma.org/the-center/how-to-reach/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            paphulla.dhamma.org/the-center/how-to-reach
          </a>{" "}
          and{" "}
          <a
            href="https://paphulla.vridhamma.org/general-information-center"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            the Dhamma Paphulla general information page
          </a>
          .
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <ProofBanner
          metric="~120"
          quote="The centre sits on 10 acres beside a natural stream, with a main hall seating about 100 and two mini halls of about 30 each, for roughly 120 meditators at one time. The land was donated in 2003."
          source="Dhamma Paphulla general information, paphulla.vridhamma.org"
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          How to reach Dhamma Paphulla
        </h2>
        <p className="mt-3 text-zinc-600 leading-relaxed">
          The centre is about 3 km off Tumkur Road (NH-4) near Alur. There are
          three honest ways in: bus, metro plus a short hop, or a car all the
          way to the gate.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <h3 className="font-semibold text-zinc-900">By bus</h3>
            <p className="mt-2 text-sm text-zinc-700 leading-relaxed">
              Direct buses <strong>257E, 257, 257H</strong> run from Majestic,
              City Market, and Shivajinagar to Alur. Or take a{" "}
              <strong>256/258-series</strong> bus to Makali Bus Stop, then an
              auto-rickshaw the last ~3 km.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <h3 className="font-semibold text-zinc-900">By metro</h3>
            <p className="mt-2 text-sm text-zinc-700 leading-relaxed">
              Take the <strong>Green Line</strong> to{" "}
              <strong>Madavara</strong> station (the last stop), then a bus to
              Makali, then the short auto-rickshaw ride to the centre.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <StepTimeline title="By car, from the city centre" steps={carRouteSteps} />
        </div>
        <p className="mt-3 text-xs text-zinc-500">
          From the airport, the centre lists a taxi (about an hour or two) or
          the airport shuttle to Majestic followed by a bus. Verify the current
          route on{" "}
          <a
            href="https://paphulla.dhamma.org/the-center/how-to-reach/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            the centre&apos;s how-to-reach page
          </a>{" "}
          before you travel, since bus numbers and metro stops change.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          What is centre-specific, and what is the same everywhere
        </h2>
        <p className="mt-3 text-zinc-700 leading-relaxed">
          A useful way to read any centre page is to separate the two kinds of
          facts. The <strong>centre-specific</strong> facts are the ones above:
          the Alur address, the 10 acres beside the stream, the ~120 capacity,
          the bus numbers, the 2003 donation. Those only describe Dhamma
          Paphulla.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Almost everything else is{" "}
          <strong>standardized across every centre in this tradition</strong>.
          The Code of Discipline, the daily timetable, the noble silence, the
          meal times, the separation of men and women, the ten-day arc, and the
          donation model are identical whether you sit in Bangalore or in
          California. That standardization is the whole point: it is why an old
          student from one centre can walk into another anywhere in the world
          and already know the rhythm of the day. If you want the shape of those
          twelve days laid out, the structure is the same here as at any centre,
          and it is documented in the official{" "}
          <a
            href="https://www.dhamma.org/en/about/code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            Code of Discipline
          </a>
          .
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          One thing this page deliberately does not do is describe the technique
          itself. That is taught only in person, inside the course, by an
          authorized assistant teacher. For anything about how to sit or how to
          work with a difficulty, the right destinations are{" "}
          <a
            href="https://www.dhamma.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            dhamma.org
          </a>{" "}
          and a teacher at a 10-day course, not a web page.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Registering: the part people get stuck on
        </h2>
        <p className="mt-3 text-zinc-700 leading-relaxed">
          The most common confusion with Dhamma Paphulla is trying to register
          by phone. The listed number, <strong>9972588377</strong>, is for
          general inquiries; the centre asks that course enquiries and
          registration come through the website and by email. Open{" "}
          <a
            href="https://paphulla.dhamma.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            paphulla.dhamma.org
          </a>
          , pick a date from the course schedule, and submit the online course
          application. Because the centre holds about 120 people, the popular
          dates fill well ahead, so applying early for a specific month matters.
          New students apply for a full 10-day course; there is no shorter
          version that introduces the technique.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          There is genuinely no fee. Tuition, food, and accommodation are all
          covered, and the centre runs on donations given only by people who
          have already completed a course. If a page or third-party listing asks
          you for a course payment, it is not the official centre. The
          authoritative listing of Karnataka centres, including this one, is on{" "}
          <a
            href="https://www.vridhamma.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            vridhamma.org
          </a>
          .
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-14">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Sitting at Dhamma Paphulla and want a practice buddy afterward?"
          description="If you have a course booked and want someone to keep a daily sit going with once you are home, I run a free practice-buddy matching program. Book a short call and I will pair you."
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Frequently asked questions
        </h2>
        <FaqSection items={faqs} />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12 pb-16">
        <RelatedPostsGrid
          title="Keep reading"
          subtitle="Orientation for a first course and life after it"
          posts={[
            {
              title: "Finding and choosing a Vipassana retreat",
              href: "/guide/find-a-retreat",
              excerpt:
                "How centres in this tradition work, and how to pick a date and location.",
              tag: "Logistics",
            },
            {
              title: "Tips for applying to a 10-day course",
              href: "/guide/course-application-tips",
              excerpt:
                "What the application asks, and how to give yourself the best shot at a seat.",
              tag: "Before you go",
            },
            {
              title: "What a 10-day course is actually like",
              href: "/guide/first-course-tips",
              excerpt:
                "The rhythm of the day and how to prepare, from someone who has sat several.",
              tag: "First course",
            },
          ]}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Booked a course? Get matched with a practice buddy for after."
      />
    </article>
  );
}
