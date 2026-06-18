import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ProofBanner,
  InlineTestimonial,
  MotionSequence,
  OrbitingCircles,
  Marquee,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-meditation-hyderabad";
const PUBLISHED = "2026-06-18";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana meditation in Hyderabad: Dhamma Khetta, the first centre Goenka ever built (1976)",
  description:
    "Where to sit Vipassana in Hyderabad: Dhamma Khetta in Gurramguda runs free 10-day Goenka-tradition courses and is the first Vipassana centre in the world, founded September 1976. Logistics, the Telangana centre map, and why this one site seeded the global network. Verified June 2026 against khetta.dhamma.org.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Vipassana in Hyderabad starts at Dhamma Khetta, the centre that started everything",
    description:
      "Dhamma Khetta, Gurramguda: free 10-day Vipassana courses and the first centre S.N. Goenka established (Sept 1976). The Hyderabad logistics and the lineage that grew from this one site.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana meditation in Hyderabad: where to go and why it matters",
    description:
      "Dhamma Khetta in Gurramguda is the first Vipassana centre in the Goenka tradition (1976) and still runs free 10-day courses. The Hyderabad map, verified.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana meditation in Hyderabad" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana meditation in Hyderabad", url: PAGE_URL },
];

const faqs: FaqItem[] = [
  {
    q: "Where can I do Vipassana meditation in Hyderabad?",
    a: "The Goenka-tradition centre inside the Hyderabad area is Dhamma Khetta, in Gurramguda off the Ibrahimpatnam Road, roughly 25 km from the city centre. It runs the standard free 10-day residential course. Registration and the current calendar are at khetta.dhamma.org. The next-closest centre, Dhamma Nagajjuna, is about 160 km away near Nagarjunasagar, so for most people in the city Dhamma Khetta is the practical choice.",
  },
  {
    q: "Is Dhamma Khetta really the first Vipassana centre?",
    a: "Yes, in the S.N. Goenka tradition. Dhamma Khetta was established in September 1976 and held the first organised 10-day course of the lineage, with 122 students. It was the first course Goenka conducted after he returned from Burma, and every centre that came afterward, more than 200 worldwide, traces back to it. The centre marked its golden jubilee, 50 years, in September 2025.",
  },
  {
    q: "How much does a course at Dhamma Khetta cost?",
    a: "Nothing. Every 10-day course in this tradition is free of charge, including food and accommodation. The centres run entirely on donations, and donations are only accepted from students who have already completed at least one course. There is no fee to register and no upsell. This is true at Dhamma Khetta and at every other centre in the network.",
  },
  {
    q: "When do courses start at Dhamma Khetta?",
    a: "Dhamma Khetta historically runs two 10-day courses a month, starting on the first and third Wednesday. There are also shorter and special courses, plus separate children's courses on some Sundays. Because the calendar shifts and courses fill, treat the live schedule at khetta.dhamma.org as the only authoritative source rather than any fixed date you read elsewhere.",
  },
  {
    q: "What is the difference between Dhamma Khetta and the other 'Vipassana centers in Hyderabad' I see listed?",
    a: "Many roundup articles mix the free Goenka-tradition centre (Dhamma Khetta) with paid wellness retreats, yoga studios, and day programs that use the word 'vipassana' loosely. Those are different things. A Goenka 10-day course follows one fixed code of discipline, is donation-only, and is taught the same way at every official centre. If a place charges a fee, offers a weekend 'vipassana package', or advertises spa amenities, it is not part of this tradition.",
  },
  {
    q: "Can a complete beginner sit at Dhamma Khetta?",
    a: "The 10-day course is designed for new students; it is the only entry point and you do not need any prior meditation experience. What it does ask is the full 10 days residential, noble silence for the first nine, and willingness to follow the code of discipline. For preparation, read the official guidelines at dhamma.org. Anything about how to actually practise is taught only inside the course by an authorised assistant teacher, not online.",
  },
  {
    q: "How do I get to Dhamma Khetta from Hyderabad city?",
    a: "The centre is at Gurramguda, off the 12.6 km point of the Ibrahimpatnam Road, near Vanasthalipuram / LB Nagar on the southeastern edge of the city. From central Hyderabad it is a road trip of roughly 45 minutes to an hour depending on traffic. Exact directions, the current address, and contact numbers are on the centre site at khetta.dhamma.org; confirm them before you travel because access roads and pickup points change.",
  },
];

const lineageFrames = [
  {
    title: "September 1976 — one site at Gurramguda",
    body: "Goenka returns from Burma and the first organised 10-day course of the tradition is held at what becomes Dhamma Khetta. 122 students sit it. There is no second centre yet; this is the entire network.",
  },
  {
    title: "The Telangana cluster forms",
    body: "Demand outruns one centre. Over the following decades the Telugu states fill in around it: Dhamma Nagajjuna near Nagarjunasagar, Dhamma Vijaya, Dhamma Nijjhana, Dhammarama, Dhamma Kondanna. Hyderabad becomes a hub, not a single dot.",
  },
  {
    title: "The tradition crosses oceans",
    body: "The same fixed course, the same code of discipline, the same recorded discourses spread to more than 200 centres worldwide. Nothing about the format changes from country to country; that uniformity is the point.",
  },
  {
    title: "California, 2020s — where I came in",
    body: "I sat my six 10-day courses at three centres in California. None of them invented anything. Each is a downstream copy of the course first run at Gurramguda in 1976. Searching 'Hyderabad' is, in a real sense, searching for the source.",
  },
];

const telanganaCenters = [
  "Dhamma Khetta",
  "Dhamma Nagajjuna",
  "Dhamma Vijaya",
  "Dhamma Nijjhana",
  "Dhammarama",
  "Dhamma Kondanna",
];

export default function Page() {
  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline:
                "Vipassana meditation in Hyderabad: Dhamma Khetta, the first centre Goenka ever built",
              description:
                "Where to sit Vipassana in Hyderabad, the logistics of Dhamma Khetta, and why this one Gurramguda site is the origin of the worldwide Goenka tradition.",
              url: PAGE_URL,
              datePublished: PUBLISHED,
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

      <div className="mx-auto max-w-3xl px-5 pb-24 pt-10">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="mt-8">
          <p className="text-sm font-medium uppercase tracking-wide text-teal-600">
            Hyderabad, Telangana
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl">
            Vipassana in Hyderabad means Dhamma Khetta, the centre that started
            everything
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            Almost every guide answers &ldquo;vipassana meditation in
            Hyderabad&rdquo; with a roundup of six wellness spots. They miss the
            one fact that actually matters: the Goenka-tradition centre near the
            city, Dhamma Khetta in Gurramguda, is not one option among many. It
            is the first Vipassana centre in the world, the place this entire
            global tradition grew out of in 1976.
          </p>

          <ArticleMeta
            author="Matthew Diakonov"
            authorRole="Written with AI"
            datePublished={PUBLISHED}
            readingTime="8 min read"
          />
        </header>

        {/* DIRECT ANSWER */}
        <section className="mt-10 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer · verified June 18, 2026
          </p>
          <p className="mt-3 text-lg leading-relaxed text-zinc-800">
            The place to sit Vipassana in Hyderabad is{" "}
            <strong className="font-semibold text-zinc-900">
              Dhamma Khetta
            </strong>
            , in Gurramguda off the Ibrahimpatnam Road, roughly 25 km southeast
            of the city centre. It runs the standard{" "}
            <strong className="font-semibold text-zinc-900">
              free 10-day residential course
            </strong>
            , historically starting the first and third Wednesday of each month.
            Register and check the live calendar at{" "}
            <a
              href="https://www.khetta.dhamma.org/"
              className="font-medium text-teal-700 underline underline-offset-2"
              rel="noopener noreferrer"
              target="_blank"
            >
              khetta.dhamma.org
            </a>
            . The next-nearest centre, Dhamma Nagajjuna, is about 160 km away, so
            for most people in the city Dhamma Khetta is the practical option.
          </p>
        </section>

        <ProofBanner
          quote="Dhamma Khetta held the first organised 10-day course of the Goenka tradition, with 122 students, the first Goenka conducted after returning from Burma."
          source="Established September 1976, Gurramguda, Hyderabad"
          metric="1976"
        />

        {/* WHY THIS SITE MATTERS */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Why the Hyderabad centre is different from every other listing
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-700">
            When S.N. Goenka returned from Burma and began teaching in India, he
            had no centre. Courses ran in borrowed halls and rented camps. The
            first piece of land dedicated to a permanent Vipassana centre in his
            tradition was at Gurramguda, on the southeastern edge of Hyderabad.
            He named it Dhamma Khetta, &ldquo;field of Dhamma.&rdquo; The first
            course there ran in September 1976 and drew 122 students, with more
            demand than the place could hold.
          </p>
          <p className="mt-4 text-base leading-relaxed text-zinc-700">
            That detail reframes the whole question. People search for
            &ldquo;vipassana meditation in Hyderabad&rdquo; expecting a city to
            choose a centre from. The truth runs the other way: the city did not
            pick up a centre that existed elsewhere. The tradition, as a network
            of centres, began here and spread outward. The site near Hyderabad
            is the root, not a branch.
          </p>
          <p className="mt-4 text-base leading-relaxed text-zinc-700">
            Today the centre sits on roughly seven acres with a large pagoda of
            individual cells, hosting around a hundred male and seventy female
            students per course. In September 2025 it marked its golden jubilee,
            fifty years, with an event that drew more than 850 meditators and
            over a hundred dhamma sevaks (volunteers). For a place that started
            with one course and 122 people, that arc is the real story behind
            the keyword.
          </p>
        </section>

        {/* THE NETWORK THAT GREW FROM HERE */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            The network that grew out of one Gurramguda field
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-700">
            Hyderabad is not a single dot on the map of this tradition. The
            Telugu states, Telangana and Andhra Pradesh, hold a cluster of
            centres that all radiate from Dhamma Khetta. The wider world holds
            more than two hundred. Every one of them teaches the identical
            10-day course, with the same recorded discourses and the same code
            of discipline, which is exactly why the origin point carries weight.
          </p>

          <div className="mt-8 flex justify-center">
            <OrbitingCircles
              center={
                <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-teal-600 text-center text-white shadow-lg">
                  <span className="text-sm font-bold leading-tight">
                    Dhamma
                    <br />
                    Khetta
                  </span>
                  <span className="mt-1 text-[10px] font-medium text-teal-100">
                    1976
                  </span>
                </div>
              }
              radius={150}
              items={[
                <div
                  key="1"
                  className="flex h-16 w-16 items-center justify-center rounded-full border border-teal-200 bg-white px-1 text-center text-[10px] font-semibold leading-tight text-zinc-700 shadow"
                >
                  Telangana
                </div>,
                <div
                  key="2"
                  className="flex h-16 w-16 items-center justify-center rounded-full border border-teal-200 bg-white px-1 text-center text-[10px] font-semibold leading-tight text-zinc-700 shadow"
                >
                  Andhra Pradesh
                </div>,
                <div
                  key="3"
                  className="flex h-16 w-16 items-center justify-center rounded-full border border-teal-200 bg-white px-1 text-center text-[10px] font-semibold leading-tight text-zinc-700 shadow"
                >
                  India
                </div>,
                <div
                  key="4"
                  className="flex h-16 w-16 items-center justify-center rounded-full border border-teal-200 bg-white px-1 text-center text-[10px] font-semibold leading-tight text-zinc-700 shadow"
                >
                  Worldwide 200+
                </div>,
              ]}
            />
          </div>

          <div className="mt-8">
            <p className="mb-3 text-sm font-medium text-zinc-500">
              Goenka-tradition centres across the Telugu states:
            </p>
            <Marquee fade pauseOnHover speed={28}>
              {telanganaCenters.map((name) => (
                <span
                  key={name}
                  className="mx-2 inline-block whitespace-nowrap rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700"
                >
                  {name}
                </span>
              ))}
            </Marquee>
          </div>
        </section>

        {/* LINEAGE MOTION */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            From 1976 Gurramguda to a cushion in California
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-700">
            I have not sat at Dhamma Khetta. My six courses were at three centres
            in California. But tracing the line backward is the whole reason this
            page exists: what I practised there is a faithful copy of the course
            first run near Hyderabad. Watch the line unfold.
          </p>
          <div className="mt-8">
            <MotionSequence title="One field, fifty years" frames={lineageFrames} />
          </div>
        </section>

        {/* WHERE TO ACTUALLY GO — REFERENCE TABLE */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Where to actually go: the two centres in range of Hyderabad
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-700">
            If you live in or near Hyderabad, there are two official
            Goenka-tradition centres to know. One is essentially in the city, one
            is a serious drive away. Both run the same free 10-day course.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-zinc-50 text-zinc-500">
                  <th className="px-4 py-3 font-semibold">Centre</th>
                  <th className="px-4 py-3 font-semibold">Distance from city</th>
                  <th className="px-4 py-3 font-semibold">Founded</th>
                  <th className="px-4 py-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 text-zinc-700">
                <tr className="bg-teal-50/40">
                  <td className="px-4 py-4 align-top font-semibold text-zinc-900">
                    Dhamma Khetta
                  </td>
                  <td className="px-4 py-4 align-top">~25 km (Gurramguda)</td>
                  <td className="px-4 py-4 align-top">Sept 1976</td>
                  <td className="px-4 py-4 align-top">
                    The first centre of the tradition. Twice-monthly 10-day
                    courses, large pagoda, the practical choice for anyone in the
                    city.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 align-top font-semibold text-zinc-900">
                    Dhamma Nagajjuna
                  </td>
                  <td className="px-4 py-4 align-top">~160 km (Nagarjunasagar)</td>
                  <td className="px-4 py-4 align-top">First course Aug 2005</td>
                  <td className="px-4 py-4 align-top">
                    Named after Acharya Nagarjuna. Set by a reservoir in Nalgonda
                    district; a 2.5 to 3.5 hour journey. Worth it if Dhamma
                    Khetta dates are full.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-zinc-500">
            Addresses, phone numbers, and access roads change. Confirm details at{" "}
            <a
              href="https://www.khetta.dhamma.org/"
              className="font-medium text-teal-700 underline underline-offset-2"
              rel="noopener noreferrer"
              target="_blank"
            >
              khetta.dhamma.org
            </a>{" "}
            and{" "}
            <a
              href="https://nagajjuna.dhamma.org/"
              className="font-medium text-teal-700 underline underline-offset-2"
              rel="noopener noreferrer"
              target="_blank"
            >
              nagajjuna.dhamma.org
            </a>{" "}
            before travelling.
          </p>
        </section>

        {/* REAL VOICES */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            What the long-time meditators say about this place
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-700">
            At the 2025 golden jubilee, the people who showed up were not first
            timers chasing a trend. Many had been sitting for decades and had
            done courses all over the Telugu states, yet came back to where they
            began.
          </p>
          <div className="mt-6">
            <InlineTestimonial
              quote="Since then I have done courses across the Telugu states. But I like it here, Dhamma Khetta, because I started my journey here."
              name="Sadanandam Chetty, 86"
              role="At the Dhamma Khetta golden jubilee, September 2025"
              stars={5}
            />
          </div>
          <p className="mt-6 text-base leading-relaxed text-zinc-700">
            That &ldquo;I started my journey here&rdquo; is the through-line. For
            an 86-year-old who has sat across the region, this Hyderabad field
            still reads as home base. For someone typing the search today, that
            is a better reason to start here than any amenities list.
          </p>
        </section>

        {/* WHAT IT IS NOT */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            One caution: not everything labelled &ldquo;vipassana&rdquo; in
            Hyderabad is this
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-700">
            The word &ldquo;vipassana&rdquo; gets used loosely. City roundups
            mix the free Goenka-tradition centre with paid weekend retreats, yoga
            studios, and wellness packages that borrow the name. Those are
            different experiences with different rules. A genuine 10-day course
            in this tradition has three tells: it is donation-only with no fee to
            register, it runs the full ten days residential with noble silence,
            and it follows one fixed code of discipline that is identical at
            every official centre. If a place charges a set fee, sells a
            two-day &ldquo;vipassana experience,&rdquo; or advertises spa
            comforts, it is not part of this lineage.
          </p>
          <p className="mt-4 text-base leading-relaxed text-zinc-700">
            I am a fellow practitioner sharing what I have read and sat, not a
            teacher. Anything about how the technique is actually practised is
            taught only inside the course by an authorised assistant teacher.
            For preparation, the code of discipline, and the official word on any
            of this, go to{" "}
            <a
              href="https://www.dhamma.org/"
              className="font-medium text-teal-700 underline underline-offset-2"
              rel="noopener noreferrer"
              target="_blank"
            >
              dhamma.org
            </a>
            . For more on what the ten days are shaped like, see my notes on the{" "}
            <Link
              href="/t/10-day-course-structure"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              10-day course structure
            </Link>{" "}
            and{" "}
            <Link
              href="/guide/first-course-tips"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              first-course tips
            </Link>
            .
          </p>
        </section>

        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Sat your first course and unsure how to keep practising at home?"
          description="I have sat six 10-day courses and run a practice-buddy program. Book a short call and we will figure out what daily consistency looks like for you."
        />

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Frequently asked questions
          </h2>
          <div className="mt-6">
            <FaqSection items={faqs} />
          </div>
        </section>

        <p className="mt-12 text-xs leading-relaxed text-zinc-400">
          Facts on this page were verified June 18, 2026 against khetta.dhamma.org,
          nagajjuna.dhamma.org, and contemporaneous reporting of the September
          2025 Dhamma Khetta golden jubilee. Course dates, addresses, and contact
          details change; the centre sites are the only authoritative source.
        </p>
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Building a daily sit after a course? Book a quick call with a fellow practitioner."
      />
    </article>
  );
}
