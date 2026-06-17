import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  FlowDiagram,
  HorizontalStepper,
  AnimatedChecklist,
  ProofBanner,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-jaipur";
const PUBLISHED = "2026-06-17";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";
const THALI_PORTAL = "https://schedule.vridhamma.org/courses/thali";
const THALI_SITE = "https://thali.dhamma.org/";

export const metadata: Metadata = {
  title:
    "Vipassana in Jaipur: three Dhamma centres, not one (Thali, Nilaya, Aranya)",
  description:
    "Vipassana in Jaipur runs at Dhamma Thali (via Sisodiya Rani Baug, 12 km from the railway station), which holds free 10-day residential courses; you apply online only at schedule.vridhamma.org/courses/thali. Two sister centres also serve the area: Dhamma Nilaya (8 km, Jamdoli, children and teen courses) and Dhamma Aranya (about 50 km, Chaksu). Which one you apply to depends on your age, course length, and where you start from. Verified 2026-06-17.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Vipassana Jaipur: the three Dhamma centres and which one is yours",
    description:
      "Dhamma Thali is the main Jaipur centre, but Nilaya and Aranya also serve the area. Distances, course types, and the online-only application, mapped.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana in Jaipur, mapped across three centres",
    description:
      "Thali, Nilaya, Aranya: which Jaipur Vipassana centre you actually apply to, and the one portal you use. Verified June 2026.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana in Jaipur" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana in Jaipur", url: PAGE_URL },
];

type Centre = {
  name: string;
  role: string;
  where: string;
  distance: string;
  courses: string;
  capacity: string;
};

const centres: Centre[] = [
  {
    name: "Dhamma Thali",
    role: "The main Jaipur centre",
    where: "Via Sisodiya Rani Baug, Ghat ke Balaji, ½ km before Galtaji Temple",
    distance: "12 km from Jaipur Railway Station, 18 km from the airport",
    courses: "10-day, plus 3-day, Satipatthana, and 20 to 60-day long courses",
    capacity: "Largest of the three",
  },
  {
    name: "Dhamma Nilaya",
    role: "Children, teenagers, and short old-student courses",
    where: "Jamdoli, Jaipur",
    distance: "8 km from Dhamma Thali",
    courses:
      "Children's Anapana, 7-day teenager courses, 3-day old-student courses, 10-day from September onward",
    capacity: "65 meditators (serving since July 2018)",
  },
  {
    name: "Dhamma Aranya",
    role: "A second 10-day option, further out",
    where: "Village Badodia, Tehsil Kot Khawada, Chaksu, District Jaipur",
    distance: "About 50 km from Jaipur (42 km from the airport)",
    courses: "3-day and 10-day courses",
    capacity: "22 meditators, on 35 acres",
  },
];

const registrationSteps = [
  {
    title: "Read the Code of Discipline",
    description:
      "The application asks you to confirm you have read it. It is the commitment you make for the full residential period, including staying all ten days.",
  },
  {
    title: "Open the centre's portal",
    description:
      "Each centre lists its own dated courses. For Dhamma Thali the portal is schedule.vridhamma.org/courses/thali. Pick the centre that matches your age and course length first.",
  },
  {
    title: "Apply online to one dated course",
    description:
      "Courses are run only by online application. You apply to a specific date range with separate New Male and New Female categories, not a generic queue.",
  },
  {
    title: "Wait for the emailed confirmation",
    description:
      "A registrar reviews each application by hand, so a reply can take days to a few weeks. Acceptance comes with a confirmation; without it there is no admission at the gate.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Where exactly is the Vipassana centre in Jaipur?",
    a: "Dhamma Thali, the main Jaipur centre, sits via Sisodiya Rani Baug and Ghat ke Balaji, just half a kilometre before the Galtaji Temple, on the Jaipur-Agra side of the city. It is about 12 km from Jaipur Railway Station and 18 km from the airport. A practical note from the centre: Galta Gate and Galta Temple are in opposite directions, so when you take an auto-rickshaw, say 'via Sisodiya Rani Baug' to avoid being driven to the wrong side.",
  },
  {
    q: "How much does a 10-day course in Jaipur cost?",
    a: "Nothing. Courses at all three centres run solely on donations, freely offered, and no charge is made even to cover food and accommodation. Donations come only from people who have completed at least one course, so a first course is fully covered by those who sat before you.",
  },
  {
    q: "How do I register, and can I just walk in?",
    a: "No walk-ins. Registration is online only. Find a dated course on the centre's schedule (for Dhamma Thali, schedule.vridhamma.org/courses/thali), submit the application, and wait for an emailed confirmation. Only confirmed students and servers may enter the premises, so the confirmation is the load-bearing piece, not optional paperwork.",
  },
  {
    q: "There are three centres near Jaipur. Which one is for me?",
    a: "Dhamma Thali is the default for an adult sitting a 10-day course, and it is also the only one of the three that holds the long 20 to 60-day courses. Dhamma Nilaya, 8 km away in Jamdoli, exists for children's Anapana, 7-day teenager courses, and short old-student courses. Dhamma Aranya, about 50 km out at Chaksu, is a smaller second option for 3-day and 10-day courses, and can be easier to reach if you are coming from the Tonk or Kota road south of the city.",
  },
  {
    q: "Is the Jaipur 10-day course suitable for a complete beginner?",
    a: "Yes. The 10-day course is the introductory format, open to anyone in reasonable physical and mental health, and the technique is taught step by step across the days by an authorized teacher inside the course. We do not teach the technique on this site. For anything about how to sit or how to work with a difficulty, the right sources are dhamma.org and the assistant teacher at your course.",
  },
  {
    q: "How often do courses run at Dhamma Thali?",
    a: "Frequently. The Dhamma Thali schedule shows 10-day courses roughly every 5 to 10 days through 2026 and into 2027, alongside the periodic long courses and special sittings. Popular dates fill, and each course opens applications a month or two ahead, so booking early helps.",
  },
];

const relatedPosts = [
  {
    title: "Vipassana Igatpuri: 10-day course registration",
    href: "/t/vipassana-igatpuri-10-day-course-registration",
    excerpt:
      "The other big Indian centre, where one hill is actually three centres with three portals. The same online-only, confirmation-first pattern.",
    tag: "Registration",
  },
  {
    title: "Finding a Vipassana retreat",
    href: "/guide/find-a-retreat",
    excerpt:
      "How the global network of centres and the dhamma.org schedule fit together when you are picking where to sit.",
    tag: "Guide",
  },
  {
    title: "First course tips",
    href: "/guide/first-course-tips",
    excerpt:
      "What a first 10-day sit is actually like, from someone who has done six, so the logistics above are not the only thing you walk in knowing.",
    tag: "Experience",
  },
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
                "Vipassana in Jaipur: three Dhamma centres, not one",
              description:
                "Where to do Vipassana in Jaipur. Dhamma Thali holds free 10-day courses; Dhamma Nilaya and Dhamma Aranya also serve the area. Distances, course types, and the online-only application.",
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

      <div className="mx-auto max-w-3xl px-5 py-10">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="mt-6">
          <p className="text-sm font-medium text-teal-700">
            Jaipur, Rajasthan
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Vipassana in Jaipur is three centres, not one
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            Search &ldquo;vipassana jaipur&rdquo; and every page points you at
            one centre. There are actually three Dhamma centres in the Jaipur
            orbit, each with a different job. Knowing which one you apply to
            saves you a wrong drive and, sometimes, a wrong course.
          </p>
          <ArticleMeta
            author="Matthew Diakonov"
            authorRole="Written with AI"
            datePublished={PUBLISHED}
            readingTime="6 min read"
          />
        </header>

        <section className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer &middot; verified 17 June 2026
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            To sit Vipassana in Jaipur, you apply to{" "}
            <strong className="text-zinc-900">Dhamma Thali</strong>, the city&rsquo;s
            main centre, via Sisodiya Rani Baug, half a kilometre before the
            Galtaji Temple, about 12 km from Jaipur Railway Station. It runs
            free 10-day residential courses, and you register online only at{" "}
            <a
              href={THALI_PORTAL}
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              schedule.vridhamma.org/courses/thali
            </a>
            . Two sister centres also serve the area:{" "}
            <strong className="text-zinc-900">Dhamma Nilaya</strong> (8 km away,
            for children and teens) and{" "}
            <strong className="text-zinc-900">Dhamma Aranya</strong> (about 50 km
            out at Chaksu). There are no walk-ins anywhere; an emailed
            confirmation is what gets you through the gate.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Source:{" "}
            <a
              href={THALI_SITE}
              className="text-teal-700 underline underline-offset-2"
            >
              thali.dhamma.org
            </a>
            . We point at logistics and lineage here, never technique; for how
            to practise, the sources are dhamma.org and an authorized teacher.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900">
            The three centres, side by side
          </h2>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            All three teach the same tradition and run on the same donation
            basis. What differs is who they are built for and how far you drive.
            Here is the lookup most guides skip.
          </p>

          <div className="mt-6 space-y-4">
            {centres.map((c) => (
              <div
                key={c.name}
                className="rounded-2xl border border-zinc-200 bg-white p-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {c.name}
                  </h3>
                  <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
                    {c.role}
                  </span>
                </div>
                <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                      Where
                    </dt>
                    <dd className="mt-0.5 text-sm text-zinc-700">{c.where}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                      Distance
                    </dt>
                    <dd className="mt-0.5 text-sm text-zinc-700">
                      {c.distance}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                      Courses
                    </dt>
                    <dd className="mt-0.5 text-sm text-zinc-700">{c.courses}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                      Size
                    </dt>
                    <dd className="mt-0.5 text-sm text-zinc-700">
                      {c.capacity}
                    </dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900">
            Getting to Dhamma Thali
          </h2>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            The address reads like a riddle if you do not know Jaipur:{" "}
            <em>via Sisodiya Rani Baug, Ghat ke Balaji, half a kilometre before
            Galtaji Temple</em>. The centre&rsquo;s own directions carry a warning
            worth repeating, because it is the single most common way arrivals
            go wrong.
          </p>
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-800">
              The Galta confusion
            </p>
            <p className="mt-2 text-sm leading-relaxed text-amber-900">
              Galta Gate and Galta Temple sit in opposite directions. If you
              just say &ldquo;Galta&rdquo; to an auto-rickshaw driver you may be
              taken to the wrong side of the city. Say{" "}
              <strong>&ldquo;via Sisodiya Rani Baug&rdquo;</strong> and you will
              arrive at the right place.
            </p>
          </div>
          <p className="mt-5 text-zinc-600 leading-relaxed">
            For the second 10-day centre, Dhamma Aranya at Chaksu, the numbers
            are bigger: roughly 50 km from the city, 42 km from the airport and
            53 km from the railway station, reached down Tonk Road toward
            Tonk and Kota. If you are arriving from the south, Aranya can be the
            shorter trip even though Thali is the better-known name.
          </p>
        </section>

        <ProofBanner
          quote="Courses are run solely on a donation basis. No charges are made, not even to cover the cost of food and accommodation."
          source="Dhamma Thali, thali.dhamma.org"
          metric="₹0"
        />

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900">
            How a course is filled and applied to
          </h2>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            The flow is the same at every centre in the tradition, and it is
            unambiguous about one thing: a confirmation, not a payment, is what
            secures your seat.
          </p>
          <div className="mt-6">
            <FlowDiagram
              title="From schedule to the gate"
              steps={[
                {
                  label: "Pick a dated course",
                  detail:
                    "On the centre's online schedule, with separate New Male and New Female categories.",
                  icon: "browser",
                },
                {
                  label: "Submit the online application",
                  detail:
                    "Online only. Covers age, health, and whether you have sat before.",
                  icon: "server",
                },
                {
                  label: "Registrar reviews by hand",
                  detail:
                    "A person decides each one, so a reply takes days to weeks.",
                  icon: "lock",
                },
                {
                  label: "Emailed confirmation",
                  detail:
                    "Only confirmed students and servers may enter. Keep this.",
                  icon: "email",
                },
                {
                  label: "Arrive on day zero",
                  detail:
                    "Present yourself at the gate on the registration afternoon.",
                  icon: "check",
                },
              ]}
            />
          </div>

          <div className="mt-8">
            <HorizontalStepper
              title="The application, in four steps"
              steps={registrationSteps}
            />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900">
            Picking the right centre for you
          </h2>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            Run yourself down this list before you open a schedule. It is the
            quickest way to land on the right one of the three.
          </p>
          <div className="mt-6">
            <AnimatedChecklist
              title="Which centre matches your situation"
              items={[
                {
                  text: "Adult, first 10-day course, want the main centre: Dhamma Thali.",
                  checked: true,
                },
                {
                  text: "Want a long course (20, 30, 45 or 60 days): only Dhamma Thali holds these.",
                  checked: true,
                },
                {
                  text: "A child, a teenager (7-day), or an old student wanting a 3-day: Dhamma Nilaya, 8 km on in Jamdoli.",
                  checked: true,
                },
                {
                  text: "Coming from the Tonk or Kota side, or Thali is full: Dhamma Aranya at Chaksu, a second 10-day option.",
                  checked: true,
                },
                {
                  text: "Unsure how to actually practise once inside: that is taught only in the course, by the teacher, not here.",
                  checked: false,
                },
              ]}
            />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900">
            One honest caveat about this page
          </h2>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            I have sat six 10-day courses, all of them in California, none of
            them in Jaipur. So everything above is logistics I verified from the
            centres&rsquo; own pages on 17 June 2026, not a review of the food or
            the cushions at Dhamma Thali. Schedules, capacities and the
            children&rsquo;s-course rules at Nilaya change, so treat the dated
            schedule as the live source and this page as the map that gets you
            to it. For anything about the sitting itself, dhamma.org and the
            assistant teacher at the course are the only authorities.
          </p>
        </section>

        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Sitting your first course soon, in Jaipur or anywhere?"
          description="If you want to talk through keeping a daily practice alive after the ten days, or being paired with another meditator for accountability, book a short call."
        />

        <section className="mt-12">
          <FaqSection items={faqs} heading="Vipassana Jaipur: common questions" />
        </section>

        <section className="mt-12">
          <RelatedPostsGrid
            title="Keep reading"
            posts={relatedPosts}
          />
        </section>
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Building a daily practice after your course? Let's talk."
      />
    </article>
  );
}
