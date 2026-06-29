import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  StepTimeline,
  NumberTicker,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-meditation-centre-delhi";
const PUBLISHED = "2026-06-17";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana meditation centre Delhi: the centre is in Sohna, not the city (Dhamma Sota)",
  description:
    "There is no 10-day Vipassana residential centre inside Delhi city. In the S.N. Goenka tradition the centre serving Delhi NCR is Dhamma Sota in Sohna, Haryana, about 70 km out. Delhi itself holds the Nehru Place registration office and weekly old-student group sittings. Addresses and the group-sitting map, verified from sota.dhamma.org on 2026-06-17.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Where is the Vipassana centre in Delhi? It is in Sohna (Dhamma Sota)",
    description:
      "The official Goenka-tradition residential centre for Delhi NCR is Dhamma Sota, in Sohna, Haryana, about 70 km from New Delhi. Delhi proper has the registration office at Nehru Place and weekly group sittings for old students.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana meditation centre Delhi: it is 70 km out, in Sohna",
    description:
      "No 10-day residential centre sits inside Delhi city. The nearest official one is Dhamma Sota in Sohna, Haryana. Addresses, course cadence, and the in-city group-sitting map.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana centre Delhi" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana meditation centre Delhi", url: PAGE_URL },
];

type Sitting = { area: string; zone: string; when: string };

const delhiSittings: Sitting[] = [
  { area: "Shalimar Bagh", zone: "North", when: "Sat 8:00–9:00 am" },
  { area: "Pitampura", zone: "North", when: "Sun 8:00–9:00 am" },
  { area: "Narela", zone: "North", when: "Sat 5:00–6:00 pm" },
  { area: "IIT", zone: "South", when: "Sat 10:00–11:00 am" },
  { area: "Shanti Niketan", zone: "South", when: "Tue 6:30–7:30 pm" },
  { area: "Chhatarpur", zone: "South", when: "Thu 6:30–7:30 pm" },
  { area: "Gandhi Nagar", zone: "East", when: "Sun 2:00–4:00 pm; daily 5:00–6:00 pm" },
  { area: "Yamuna Vihar", zone: "East", when: "Daily 6:00–8:00 am and 6:00–8:00 pm" },
  { area: "East Punjabi Bagh", zone: "West", when: "Daily 7:45–9:45 am and 5:00–7:00 pm" },
  { area: "Tihar Jail Road", zone: "West", when: "Sun 8:00–9:00 am" },
  { area: "Rajouri Garden", zone: "West", when: "Sun 10:00–11:00 am" },
  { area: "Village Hiran Kudna", zone: "West", when: "Daily 6:00–7:00 am" },
];

const ncrSittings: Sitting[] = [
  { area: "Gurugram (Gurgaon)", zone: "NCR", when: "Sat & Sun 8:00–9:00 am" },
  { area: "Noida", zone: "NCR", when: "Sat 9:00–10:00 am" },
  { area: "Ghaziabad", zone: "NCR", when: "Multiple daily and weekend sittings" },
];

const registrationSteps = [
  {
    title: "Pick a course date on the Dhamma Sota schedule",
    description:
      "Dhamma Sota runs 10-day courses for new and old students starting on the 1st and 3rd Wednesday of most months, conducted bilingually in Hindi and English. The live calendar of open dates and seats lives on the centre's schedule page.",
  },
  {
    title: "Apply online through dhamma.org",
    description:
      "Applications go through the official tradition portal, not a phone booking. You fill out a written application that asks about health and prior experience, then wait for the centre to process it. There is no walk-in enrolment.",
  },
  {
    title: "Wait for written confirmation",
    description:
      "Seats are limited (the residence holds roughly 120 students per course), so popular dates fill and an application is not a confirmed seat until the centre replies. Old students can also serve as Dhamma workers if a course is full.",
  },
  {
    title: "Travel out to Sohna for the course",
    description:
      "The residential course happens at the Sohna site, roughly 70 km and a two-hour drive from central Delhi, not at any address inside the city. You arrive on Day 0 afternoon and stay on site for all 12 calendar days.",
  },
  {
    title: "Between courses, sit weekly inside Delhi",
    description:
      "Once you have completed a 10-day course, the in-city group sittings (mapped below) are how Delhi NCR old students keep a shared weekly practice without travelling back to Sohna each time.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Is there a Vipassana centre inside Delhi city?",
    a:
      "Not a residential one. In the S.N. Goenka tradition there is no 10-day residential Vipassana centre within Delhi's city limits. The nearest official centre is Dhamma Sota, in Sohna, Haryana, about 70 km from New Delhi Railway Station. What Delhi itself holds is the registration and administrative office at Nehru Place and a network of weekly group-sitting locations for people who have already completed a course.",
  },
  {
    q: "Where exactly is Dhamma Sota and how far is it from Delhi?",
    a:
      "Dhamma Sota is at Village Rahaka, near Nimmod police post, on the Ballabhgarh–Sohna Road, Sohna, Haryana 122102. It sits in roughly 16 acres in the Aravali hills and is about 70 km, or close to a two-hour drive, from central New Delhi. The administrative office is separate: Room No. 1015, 10th floor, Hemkunt Tower (Modi Tower), 98 Nehru Place, New Delhi 110019.",
  },
  {
    q: "How do I register for a course near Delhi?",
    a:
      "Course dates and applications are handled online through the official tradition site. You choose an open date on the Dhamma Sota schedule, submit a written application via dhamma.org, and wait for the centre to confirm your seat. The Nehru Place office (phone listed on the centre's contact page) handles administrative queries, but enrolment itself is the online application, not a walk-in.",
  },
  {
    q: "When do 10-day courses run at Dhamma Sota?",
    a:
      "The centre lists 10-day courses for new and old students starting on the 1st and 3rd Wednesday of most months, run bilingually in Hindi and English. Because the calendar shifts and some dates are old-student only, always confirm the current openings on the centre's own schedule page before planning travel.",
  },
  {
    q: "What are the Delhi group sittings and can a beginner attend?",
    a:
      "Group sittings are weekly hour-long sits held at fixed locations across Delhi NCR (Shalimar Bagh, IIT, Yamuna Vihar, East Punjabi Bagh and others). In this tradition they are for old students, meaning people who have completed at least one full 10-day course, not an introduction for beginners. If you have not sat a course yet, the entry point is the 10-day course at Dhamma Sota, not a group sitting.",
  },
  {
    q: "How much does a course cost?",
    a:
      "Courses in this tradition are run entirely on donations. There is no course fee, no charge for the food or the room, and donations are accepted only from people who have completed at least one 10-day course, on the principle that your sitting is paid for by an old student before you and your later donation pays for someone after you. Treat that as logistics, and confirm specifics with the centre.",
  },
  {
    q: "Does vipassana.cool run the Delhi centre?",
    a:
      "No. vipassana.cool is an independent resource site written by a fellow meditator who has sat six courses (in the United States), not a centre, a teacher, or part of the Dhamma Sota administration. For anything operational, the registration office, course dates, travel, or how to practise, the authority is dhamma.org and the Dhamma Sota centre itself.",
  },
];

const relatedPosts = [
  {
    title: "How to find and choose a Vipassana retreat",
    href: "/guide/find-a-retreat",
    excerpt:
      "How the official centre network is organised and what to check before you commit to a date.",
    tag: "Logistics",
  },
  {
    title: "Course application tips",
    href: "/guide/course-application-tips",
    excerpt:
      "What the written application asks and how to fill it out honestly so your seat is confirmed.",
    tag: "Before you go",
  },
  {
    title: "First course tips",
    href: "/guide/first-course-tips",
    excerpt:
      "What actually helps before a first 10-day course, from someone who has sat several.",
    tag: "Preparation",
  },
];

function SittingTable({ rows, caption }: { rows: Sitting[]; caption: string }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-zinc-200">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="bg-zinc-50 text-zinc-500">
            <th className="px-4 py-3 font-medium">Location</th>
            <th className="px-4 py-3 font-medium">Part of Delhi</th>
            <th className="px-4 py-3 font-medium">Weekly sitting</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.area} className="border-t border-zinc-100">
              <td className="px-4 py-3 font-medium text-zinc-900">{r.area}</td>
              <td className="px-4 py-3 text-zinc-500">{r.zone}</td>
              <td className="px-4 py-3 text-zinc-700">{r.when}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Page() {
  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline:
                "Vipassana meditation centre Delhi: the centre is in Sohna, not the city",
              description:
                "There is no 10-day Vipassana residential centre inside Delhi city. The official Goenka-tradition centre serving Delhi NCR is Dhamma Sota in Sohna, Haryana, about 70 km out, with a registration office at Nehru Place and weekly group sittings inside Delhi.",
              url: PAGE_URL,
              datePublished: PUBLISHED,
              dateModified: "2026-06-29",
              author: "Matthew Diakonov",
              authorUrl: "https://m13v.com",
              publisherName: "Vipassana.cool",
              publisherUrl: "https://vipassana.cool",
            }),
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

      <div className="max-w-3xl mx-auto px-6 pt-10">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero */}
      <header className="max-w-3xl mx-auto px-6 pt-6 pb-4">
        <p className="text-sm font-medium uppercase tracking-wide text-teal-600">
          Delhi NCR · logistics, not instruction
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900">
          The Vipassana centre for Delhi is in Sohna, not in the city
        </h1>
        <p className="mt-5 text-lg text-zinc-600">
          If you searched for a Vipassana centre in Delhi expecting an address
          off the Metro, here is the honest version: the official 10-day
          residential centre that serves Delhi sits about 70 km out, in the
          Aravali hills near Sohna. Delhi itself holds the booking office and a
          map of weekly sittings. This page lays out both.
        </p>
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="7 min read"
        />
      </header>

      {/* Direct answer callout */}
      <section className="max-w-3xl mx-auto px-6 my-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            Direct answer · verified 2026-06-17
          </p>
          <p className="mt-3 text-zinc-900 text-lg leading-relaxed">
            There is <strong>no 10-day Vipassana residential centre inside
            Delhi city</strong>. In the S.N. Goenka tradition, the centre
            serving Delhi NCR is <strong>Dhamma Sota</strong>, in Sohna,
            Haryana, about <strong>70 km</strong> from New Delhi Railway
            Station. Delhi proper has the registration office at{" "}
            <strong>Nehru Place</strong> and a set of weekly{" "}
            <strong>group sittings</strong> for people who have already
            completed a course.
          </p>
          <p className="mt-3 text-zinc-900 text-lg leading-relaxed">
            On <strong>fees</strong>: there are none. A 10-day course at Dhamma
            Sota (or any centre in this tradition) costs{" "}
            <strong>&#8377;0</strong>. No tuition, no charge for the room, no
            charge for the food. The whole thing runs on voluntary donations,
            and donations are accepted only from people who have already
            completed a course. As a new student you are not asked to pay, and a
            payment would not be accepted even if you offered one.
          </p>
          <p className="mt-3 text-sm text-zinc-600">
            Source:{" "}
            <a
              href="https://sota.dhamma.org/en/contact/"
              className="text-teal-700 underline"
              rel="noopener"
            >
              Dhamma Sota contact page
            </a>{" "}
            and the centre&apos;s{" "}
            <a
              href="https://sota.dhamma.org/en/group-sittings-in-delhi-ncr/"
              className="text-teal-700 underline"
              rel="noopener"
            >
              Delhi NCR group sittings list
            </a>
            .
          </p>
        </div>
      </section>

      {/* Number strip */}
      <section className="max-w-3xl mx-auto px-6 my-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-center">
            <div className="text-4xl font-bold text-zinc-900">
              <NumberTicker value={0} />
            </div>
            <p className="mt-2 text-sm text-zinc-500">
              residential 10-day centres inside Delhi city limits
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-center">
            <div className="text-4xl font-bold text-zinc-900">
              <NumberTicker value={70} suffix=" km" />
            </div>
            <p className="mt-2 text-sm text-zinc-500">
              from central Delhi to Dhamma Sota in Sohna
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-center">
            <div className="text-4xl font-bold text-zinc-900">
              <NumberTicker value={12} />
            </div>
            <p className="mt-2 text-sm text-zinc-500">
              weekly group-sitting spots inside Delhi (more across NCR)
            </p>
          </div>
        </div>
      </section>

      {/* The centre fact card */}
      <section className="max-w-3xl mx-auto px-6 my-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          Dhamma Sota: the centre that serves Delhi
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          When people say &quot;the Delhi centre,&quot; this is almost always
          the place they mean. Dhamma Sota opened in 2000 and is the dedicated
          Vipassana centre for the Delhi NCR region. It is run in the tradition
          of Vipassana as taught by S.N. Goenka in the lineage of Sayagyi U Ba
          Khin, which matters because that is the tradition whose 10-day courses
          are free and donation-run. The address below is a real place, but it
          is in Haryana, not Delhi.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
              Centre (where the course happens)
            </p>
            <p className="mt-3 text-zinc-900 font-medium">Dhamma Sota</p>
            <p className="mt-1 text-zinc-600 text-sm leading-relaxed">
              Village Rahaka, near Nimmod police post,
              <br />
              Ballabhgarh–Sohna Road, Sohna,
              <br />
              Haryana 122102
            </p>
            <p className="mt-3 text-sm text-zinc-500">
              ~70 km / ~2 hours from central New Delhi · ~16 acres in the
              Aravali hills
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
              Office (where the admin lives)
            </p>
            <p className="mt-3 text-zinc-900 font-medium">
              Registration / administrative office
            </p>
            <p className="mt-1 text-zinc-600 text-sm leading-relaxed">
              Room No. 1015, 10th Floor,
              <br />
              Hemkunt Tower (Modi Tower),
              <br />
              98 Nehru Place, New Delhi 110019
            </p>
            <p className="mt-3 text-sm text-zinc-500">
              Open Mon–Sat, 10:00 am – 5:30 pm. This is an office, not a place to
              sit a course.
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          Addresses read from the centre&apos;s own{" "}
          <a
            href="https://sota.dhamma.org/en/contact/"
            className="text-teal-700 underline"
            rel="noopener"
          >
            contact page
          </a>{" "}
          on 2026-06-17. Phone numbers and the current course calendar live
          there too; confirm them before you travel.
        </p>
      </section>

      {/* Why the confusion */}
      <section className="max-w-3xl mx-auto px-6 my-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          Why &quot;centre in Delhi&quot; is the wrong mental model
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Most lists of meditation centres in Delhi blur two very different
          things together: drop-in studios inside the city, and residential
          retreat centres. They are not the same activity. A 10-day course is a
          residential commitment, so it needs land, a meditation hall, a kitchen
          and dormitories, which is exactly why the official centre sits on 16
          acres outside the city rather than in a Nehru Place tower. Searching
          for a Vipassana &quot;centre in Delhi&quot; and landing on a city
          address usually means you have found either the booking office or a
          different organisation entirely.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          So it helps to split the question in two. If you have never sat a
          course, the thing you actually want is a 10-day course date at Dhamma
          Sota, out in Sohna. If you have already sat one and you live in Delhi,
          the thing you want is a weekly group sitting near your part of the
          city. The rest of this page is one section for each.
        </p>
      </section>

      {/* Registration steps */}
      <section className="max-w-3xl mx-auto px-6 my-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          If you have never sat a course: how booking actually works
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          A first 10-day course is the only real entry point. It is not
          something you can sample for an evening, and you cannot start at a
          group sitting. Here is the sequence, end to end, as logistics, not as
          practice advice.
        </p>
        <StepTimeline steps={registrationSteps} />
        <p className="mt-2 text-sm text-zinc-500">
          The live calendar and application form are on the centre&apos;s{" "}
          <a
            href="https://schedule.vridhamma.org/courses/sota"
            className="text-teal-700 underline"
            rel="noopener"
          >
            course schedule page
          </a>{" "}
          and the global portal at{" "}
          <a
            href="https://www.dhamma.org/"
            className="text-teal-700 underline"
            rel="noopener"
          >
            dhamma.org
          </a>
          .
        </p>
      </section>

      {/* Group sittings map */}
      <section className="max-w-3xl mx-auto px-6 my-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          If you are an old student: the Delhi group-sitting map
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          This is the part that is genuinely inside Delhi. Across the city,
          old students (anyone who has completed at least one 10-day course)
          host weekly hour-long group sittings in homes and small halls. They
          are how a Delhi practitioner keeps a shared rhythm without driving to
          Sohna every week. The list below is from the centre&apos;s own Delhi
          NCR page, read on 2026-06-17.
        </p>
        <div className="mt-6">
          <SittingTable
            rows={delhiSittings}
            caption="Weekly Vipassana group sittings inside Delhi"
          />
        </div>
        <h3 className="mt-8 text-lg font-semibold text-zinc-900">
          Around the NCR
        </h3>
        <div className="mt-3">
          <SittingTable
            rows={ncrSittings}
            caption="Weekly Vipassana group sittings across Delhi NCR"
          />
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          Days and timings shift, and new locations open. Treat this as a
          starting map and confirm the current list on the centre&apos;s{" "}
          <a
            href="https://sota.dhamma.org/en/group-sittings-in-delhi-ncr/"
            className="text-teal-700 underline"
            rel="noopener"
          >
            Delhi NCR group sittings page
          </a>{" "}
          before you turn up.
        </p>
      </section>

      {/* Personal note */}
      <section className="max-w-3xl mx-auto px-6 my-12">
        <div className="rounded-2xl border-l-4 border-teal-400 bg-zinc-50 p-6">
          <p className="text-zinc-700 leading-relaxed">
            I have not sat at Dhamma Sota; my six courses were at centres in the
            United States, so I am not the right person to ask about the food or
            the dormitories there. What carries across every centre I have sat
            at is the shape of the thing: the residential 10-day course is the
            front door, the weekly group sitting is the maintenance habit, and
            both are run on donations by old students rather than sold. If you
            are weighing a first course near Delhi, that structure is the part
            worth understanding before the specific address.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 my-12">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Thinking about a first course but stuck on the logistics?"
          description="If you want to talk through what a 10-day course near Delhi actually involves with someone who has sat several, grab a slot. I am a fellow practitioner, not a teacher, and anything about how to practise goes to dhamma.org."
        />
      </div>

      <FaqSection items={faqs} heading="Vipassana in Delhi: common questions" />

      <section className="max-w-5xl mx-auto px-6 my-12">
        <RelatedPostsGrid
          title="Before you book"
          posts={relatedPosts}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Questions about a first course near Delhi? Talk to a fellow practitioner."
      />
    </article>
  );
}
