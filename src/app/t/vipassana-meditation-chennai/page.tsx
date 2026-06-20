import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ComparisonTable,
  ProofBanner,
  NumberTicker,
  GradientText,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-meditation-chennai";
const PUBLISHED = "2026-06-20";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana meditation in Chennai: the one official Goenka center, in Tamil",
  description:
    "Searching 'Vipassana meditation Chennai' returns yoga studios. The Goenka-tradition technique is taught at exactly one center serving the city: Dhamma Setu, ~10 km from Chennai Airport, in free 10-day residential courses run in English, Hindi and Tamil. Register at schedule.vridhamma.org/courses/setu. Verified 2026-06-20.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Vipassana meditation in Chennai: one official center, courses in Tamil",
    description:
      "Dhamma Setu is the official S.N. Goenka tradition Vipassana center serving Chennai. Free 10-day residential courses on an 18-acre site, instruction in Tamil, and the long courses most centers never run.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana in Chennai: the one official center, verified",
    description:
      "Not weekly classes. A free 10-day residential course at Dhamma Setu, ~10 km from Chennai Airport, taught in Tamil. Where to register, and the two facts the listings skip.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana in Chennai" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana meditation in Chennai", url: PAGE_URL },
];

const ladderRows = [
  {
    course: "10-day course",
    who: "Everyone, including first-timers",
    note: "The introductory residential course where the technique is taught from the start. Run twice a month at Dhamma Setu, in English, Hindi and Tamil.",
  },
  {
    course: "3-day / 1-day courses",
    who: "Old students (one prior 10-day course)",
    note: "Shorter sits to keep an existing practice steady. Not an entry point.",
  },
  {
    course: "Satipatthana Sutta course",
    who: "Old students with multiple 10-day courses",
    note: "A study course built around the discourse, for established practitioners.",
  },
  {
    course: "20 / 30 / 45-day long courses",
    who: "Serious old students (five-plus 10-day courses, Dhamma service, two-plus years of daily practice)",
    note: "The deep end. Dhamma Setu is one of the centers that actually hosts these. A 20-day course ran 16 Jan to 6 Feb 2026, with 30 and 45-day courses on the same schedule.",
  },
];

const tnCenters = [
  {
    name: "Dhamma Setu",
    place: "Chennai (Thirumudivakkam)",
    note: "The established city center, ~10 km from Chennai Airport. Full course range, including the long courses.",
  },
  {
    name: "Dhamma Arunachala",
    place: "Tiruvannamalai",
    note: "A newer center on Arunachala Hill, about 200 km from Chennai. Worth checking if Setu dates do not line up.",
  },
  {
    name: "Dhamma Kanchi",
    place: "Kanchipuram district",
    note: "A Dhamma House being established, with shorter 2-day and 3-day courses planned.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Where can I actually do Vipassana meditation in Chennai?",
    a: "At Dhamma Setu, the official Vipassana center in the S.N. Goenka tradition that serves Chennai. It sits on an 18-acre site amid paddy fields at 533 Pazhanthandalam Road, Thirumudivakkam (via Thiruneermalai), Chennai 600 044, about 10 km from Chennai Airport. The technique is taught only inside a 10-day residential course, and you register through the official schedule at schedule.vridhamma.org/courses/setu. Most of the 'Vipassana classes in Chennai' you see in directory listings are unrelated yoga and wellness studios, not this tradition.",
  },
  {
    q: "Are the Chennai courses taught in Tamil?",
    a: "Yes. Dhamma Setu conducts its 10-day courses with instructions and the evening discourses in English, Hindi and Tamil, with recordings in other languages available on request. That is genuinely uncommon and it is the single most useful local fact about the Chennai center: a Tamil speaker can sit the entire course in their mother tongue rather than working through a second language for ten days. The directory listings never mention it.",
  },
  {
    q: "Is Vipassana taught as weekly drop-in classes in Chennai?",
    a: "No. In the Goenka tradition the technique is not taught in hourly or weekly classes. It is taught only inside a 10-day residential course, where students stay on site the whole time. There is no class you book by the hour. If a listing in T. Nagar, Adyar or Velachery advertises a one-hour or weekend 'Vipassana class', it is not this tradition. Old students attend group sittings locally, but those are for people who have already completed a course.",
  },
  {
    q: "How much does the Chennai course cost?",
    a: "Nothing. There are no charges at Dhamma Setu, not even to cover food and lodging. All expenses are met by donations from old students who completed a course and wanted to give others the same opportunity. You can donate after you finish your first course if you choose to, but it is never a condition of attending.",
  },
  {
    q: "Does Dhamma Setu run the long Vipassana courses?",
    a: "Yes, which sets it apart from most centers. Beyond the 10-day course, Dhamma Setu hosts the long courses for experienced students: a 20-day course ran 16 January to 6 February 2026, with 30-day and 45-day courses on the same schedule. Those are open only to serious old students who have completed at least five 10-day courses, a Satipatthana Sutta course, given Dhamma service, and practiced daily for at least two years. For most readers the 10-day course is the door; the long courses are just useful to know the depth ladder runs all the way up in Chennai.",
  },
  {
    q: "How do I register for the 10-day course at Dhamma Setu?",
    a: "Go to schedule.vridhamma.org/courses/setu, pick a 10-day course with open dates, and submit the application form. Have a recent photo, your full residential address, date of birth, education or occupation, and an emergency contact ready, so the application is not held up for missing details. Enquiries go through info@setu.dhamma.org and the center phone lines. Courses fill, so apply well ahead of the dates you want.",
  },
  {
    q: "Are there other Goenka-tradition centers near Chennai?",
    a: "Dhamma Setu is the dedicated center for Chennai itself. Tamil Nadu also has Dhamma Arunachala in Tiruvannamalai (about 200 km away, on Arunachala Hill) and Dhamma Kanchi, a Dhamma House being established in Kanchipuram district with shorter courses planned. The Vipassana Research Institute lists every official center at vridhamma.org, which is the place to look if Setu dates do not fit your schedule.",
  },
  {
    q: "I have already done a course. How do I keep practicing back in Chennai?",
    a: "This is the real bottleneck, and the schedule does not solve it. Dhamma Setu runs group sittings for old students, and sitting with others helps. Day to day, though, the practice lives or dies on whether you sit on your own mornings in the middle of Chennai life. Pairing up with another practitioner for daily accountability is one of the few things that reliably keeps it going, which is why this site runs a free practice buddy matching program at vipassana.cool/practice-buddy.",
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
                "Vipassana meditation in Chennai: the one official center, in Tamil",
              description:
                "Dhamma Setu is the official S.N. Goenka tradition Vipassana center serving Chennai. Free 10-day residential courses ~10 km from the airport, taught in Tamil, plus the long courses and the daily-practice problem the listings never mention.",
              url: PAGE_URL,
              datePublished: PUBLISHED,
              author: "Matthew Diakonov",
              authorUrl: "https://m13v.com",
              publisherName: "Vipassana.cool",
              publisherUrl: "https://vipassana.cool",
              articleType: "Article",
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

      <div className="max-w-3xl mx-auto px-6 pt-10">
        <Breadcrumbs items={breadcrumbItems} />

        <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900">
          Vipassana meditation in{" "}
          <GradientText>Chennai</GradientText>
        </h1>
        <p className="mt-4 text-lg text-zinc-500">
          The listings make it look like a menu of drop-in classes. It is not.
          Here is the one official center that teaches the technique, and the two
          local facts every directory skips: the courses run in Tamil, and the
          depth ladder goes all the way to the long courses.
        </p>

        <div className="mt-6">
          <ArticleMeta
            author="Matthew Diakonov"
            authorRole="Written with AI"
            datePublished={PUBLISHED}
            readingTime="8 min read"
          />
        </div>

        {/* Direct answer callout */}
        <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer · verified 2026-06-20
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            The technique taught as Vipassana by S.N. Goenka is offered in
            Chennai at exactly one place:{" "}
            <span className="font-semibold text-zinc-900">Dhamma Setu</span>, on
            an 18-acre site at Thirumudivakkam, about 10 km from Chennai Airport.
            It is taught only in a{" "}
            <span className="font-semibold text-zinc-900">
              free, donation-funded, 10-day residential course
            </span>
            , run in English, Hindi and Tamil, never as hourly or weekly classes.
            Register at{" "}
            <a
              href="https://schedule.vridhamma.org/courses/setu"
              className="font-medium text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              schedule.vridhamma.org/courses/setu
            </a>
            .
          </p>
        </div>

        {/* Stat strip */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200">
          <div className="bg-white p-5">
            <div className="text-3xl font-bold text-zinc-900">
              <NumberTicker value={2000} />
            </div>
            <p className="mt-1 text-xs text-zinc-500">Center established</p>
          </div>
          <div className="bg-white p-5">
            <div className="text-3xl font-bold text-zinc-900">
              <NumberTicker value={18} suffix=" ac" />
            </div>
            <p className="mt-1 text-xs text-zinc-500">Site of paddy field</p>
          </div>
          <div className="bg-white p-5">
            <div className="text-3xl font-bold text-zinc-900">
              <NumberTicker value={3} />
            </div>
            <p className="mt-1 text-xs text-zinc-500">Languages of instruction</p>
          </div>
          <div className="bg-white p-5">
            <div className="text-3xl font-bold text-zinc-900">
              ~<NumberTicker value={10} suffix=" km" />
            </div>
            <p className="mt-1 text-xs text-zinc-500">From Chennai Airport</p>
          </div>
        </div>
      </div>

      {/* Disambiguation lede */}
      <div className="max-w-3xl mx-auto px-6 mt-12">
        <p className="text-zinc-700 leading-relaxed">
          Type &ldquo;Vipassana meditation Chennai&rdquo; into a search box and
          most of what comes back is a directory: yoga studios, wellness
          centers, and general meditation classes across T. Nagar, Adyar,
          Velachery and Anna Nagar. Several of them are worthwhile in their own
          right. Almost none teach Vipassana in the sense most people mean when
          they search for it: the silent 10-day technique in the lineage of
          Sayagyi U Ba Khin, taught by S.N. Goenka and his assistant teachers.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          That tradition does not run classes. It runs courses, and for Chennai
          there is one center built for them. I have sat six of these 10-day
          courses myself, all at three centers in California, not at Setu, so I
          am writing as a fellow student who knows the format rather than anyone
          connected to the center. Everything below about Dhamma Setu is sourced
          from its official pages and the Vipassana Research Institute schedule,
          verified on the date stamped above.
        </p>
      </div>

      {/* The center */}
      <div className="max-w-3xl mx-auto px-6 mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          The one center that serves Chennai
        </h2>
        <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-7">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            Dhamma Setu
          </p>
          <p className="mt-1 text-sm text-zinc-500">
            &ldquo;Bridge of Dhamma&rdquo; · Vipassana Meditation Centre
          </p>
          <dl className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
            <div>
              <dt className="text-zinc-500">Location</dt>
              <dd className="mt-1 text-zinc-800">
                533 Pazhanthandalam Road, Thirumudivakkam (via Thiruneermalai),
                Chennai 600 044
              </dd>
            </div>
            <div>
              <dt className="text-zinc-500">Distance from the city</dt>
              <dd className="mt-1 text-zinc-800">
                About 10 km from Chennai Airport, on the outskirts amid farmland
              </dd>
            </div>
            <div>
              <dt className="text-zinc-500">Established</dt>
              <dd className="mt-1 text-zinc-800">
                Formally established in 2000, after Goenkaji&rsquo;s visit
              </dd>
            </div>
            <div>
              <dt className="text-zinc-500">Languages</dt>
              <dd className="mt-1 text-zinc-800">
                Instruction and discourses in English, Hindi and Tamil
              </dd>
            </div>
            <div>
              <dt className="text-zinc-500">Capacity</dt>
              <dd className="mt-1 text-zinc-800">
                Around 96 male and 48 female meditators in regular rooms
              </dd>
            </div>
            <div>
              <dt className="text-zinc-500">Registration</dt>
              <dd className="mt-1 text-zinc-800">
                <a
                  href="https://schedule.vridhamma.org/courses/setu"
                  className="text-teal-700 underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  schedule.vridhamma.org/courses/setu
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Distinctive fact 1: Tamil */}
      <div className="max-w-3xl mx-auto px-6 mt-12">
        <ProofBanner
          metric="3 languages"
          quote="At Dhamma Setu the 10-day course is conducted in English, Hindi and Tamil. A Tamil speaker can sit the entire course, instructions and evening discourses, in their mother tongue rather than a second language."
          source="setu.dhamma.org, About Dhamma Setu"
        />
        <p className="mt-6 text-zinc-700 leading-relaxed">
          This is the fact I would most want a Chennai searcher to know, and it
          is the one no directory listing carries. Ten days of silence is hard
          enough; doing it while mentally translating every instruction is
          harder. Because Setu runs the course in Tamil, that tax disappears for
          a native speaker. If your Tamil is stronger than your English, this is
          the practical reason to sit your first course here rather than travel
          to a center that only runs in Hindi or English.
        </p>
      </div>

      {/* Why classes is the wrong frame */}
      <div className="max-w-3xl mx-auto px-6 mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          Why &ldquo;classes near me&rdquo; is the wrong frame
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The listings feel confusing because two different things share the
          word Vipassana. One is a broad family of insight-meditation styles
          taught in hourly sessions all over the city. The other is the specific
          10-day course in the Goenka tradition, where the whole point is to step
          out of daily life, into noble silence, for the full length of the
          course. You cannot compress that into a Tuesday-evening slot, which is
          why this tradition does not offer one.
        </p>
        <div className="mt-6">
          <ComparisonTable
            productName="Dhamma Setu 10-day course"
            competitorName="A drop-in 'Vipassana class'"
            rows={[
              {
                feature: "Format",
                competitor: "One hour or a weekend, return home each day",
                ours: "10-day residential course, on site the whole time",
              },
              {
                feature: "Cost",
                competitor: "Class or package fee",
                ours: "No charge; funded entirely by old-student donations",
              },
              {
                feature: "Lineage",
                competitor: "Varies by studio and teacher",
                ours: "Taught by S.N. Goenka in the tradition of Sayagyi U Ba Khin",
              },
              {
                feature: "Who teaches it",
                competitor: "A studio instructor",
                ours: "Authorized assistant teachers, technique taught only inside the course",
              },
              {
                feature: "Language",
                competitor: "Usually English",
                ours: "English, Hindi and Tamil",
              },
            ]}
            caveat="Other studios may be perfectly good at what they do. The point is only that they are a different thing from the Goenka-tradition course this page is about."
          />
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          For anything about how the technique is actually practiced, the right
          source is{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-700 underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            dhamma.org
          </a>{" "}
          and an authorized assistant teacher at a course, not a web page.
        </p>
      </div>

      {/* Distinctive fact 2: the long courses */}
      <div className="max-w-3xl mx-auto px-6 mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          The course ladder runs all the way up in Chennai
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Most write-ups stop at the 10-day course. Worth knowing: Dhamma Setu
          is one of the centers that also hosts the long courses, the 20, 30 and
          45-day sits reserved for experienced students. You almost certainly
          start with the 10-day, but it tells you something about a center that
          it runs the deep end at all. Many do not.
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-50 text-zinc-500">
              <tr>
                <th className="px-4 py-3 font-medium">Course</th>
                <th className="px-4 py-3 font-medium">Who it is for</th>
                <th className="px-4 py-3 font-medium">What it is</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              {ladderRows.map((row) => (
                <tr key={row.course} className="align-top">
                  <td className="px-4 py-3 font-semibold text-zinc-900">
                    {row.course}
                  </td>
                  <td className="px-4 py-3 text-zinc-700">{row.who}</td>
                  <td className="px-4 py-3 text-zinc-600">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          Dates and which formats are scheduled right now are on the center
          schedule. If you want a sense of what the days themselves are shaped
          like first, the{" "}
          <Link
            href="/t/10-day-course-structure"
            className="text-teal-700 underline underline-offset-2"
          >
            10-day course structure
          </Link>{" "}
          breakdown walks through the daily clock without touching technique.
        </p>
      </div>

      {/* Tamil Nadu map */}
      <div className="max-w-3xl mx-auto px-6 mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          Where Chennai sits in Tamil Nadu
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          If Setu dates do not line up with yours, you are not stuck. Tamil Nadu
          has more than one official center, so a course you can actually attend
          may be a short journey away.
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-50 text-zinc-500">
              <tr>
                <th className="px-4 py-3 font-medium">Center</th>
                <th className="px-4 py-3 font-medium">Where</th>
                <th className="px-4 py-3 font-medium">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              {tnCenters.map((c) => (
                <tr key={c.name} className="align-top">
                  <td className="px-4 py-3 font-semibold text-zinc-900">
                    {c.name}
                  </td>
                  <td className="px-4 py-3 text-zinc-700">{c.place}</td>
                  <td className="px-4 py-3 text-zinc-600">{c.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          The full, current list of official centers and their schedules lives
          at{" "}
          <a
            href="https://www.vridhamma.org"
            className="text-teal-700 underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            vridhamma.org
          </a>
          . Searching for Chennai elsewhere?{" "}
          <Link
            href="/t/vipassana-meditation-bangalore"
            className="text-teal-700 underline underline-offset-2"
          >
            The Bangalore center
          </Link>{" "}
          follows the same pattern with a center of its own.
        </p>
      </div>

      {/* The part that starts on day 11 */}
      <div className="max-w-3xl mx-auto px-6 mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          The part that starts on day 11
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Every guide to Vipassana in Chennai stops at the same place: here is
          the center, here is how to register, good luck. The hard part starts
          after you come home. You leave Setu on day 11 with a practice you mean
          to keep, and within two weeks the city has its hands back on your
          calendar: work, the commute, the phone the moment you wake up. The
          course gave you the technique. Nothing about the course gives you the
          daily habit back in Chennai, and that is where almost everyone quietly
          loses it.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The center helps where it can: old students can attend group sittings,
          and sitting with other people is genuinely steadying. But the
          difference between a practice that survives and one that fades usually
          comes down to a smaller, duller thing: whether one other person is
          expecting you to sit tomorrow morning. That is the single lever I have
          watched work, across my own years of daily practice and across the
          people I have met at courses. I am not a teacher, just a fellow student
          who has done this six times and wanted the part after the course to be
          less lonely.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          It is the reason this site exists. The{" "}
          <Link
            href="/practice-buddy"
            className="text-teal-700 underline underline-offset-2"
          >
            practice buddy matching program
          </Link>{" "}
          pairs you with another meditator for daily accountability, free, so the
          practice you built over ten silent days has something holding it up
          once you are back in the noise.
        </p>

        <div className="mt-8">
          <BookCallCTA
            appearance="footer"
            destination={BOOKING_LINK}
            site="Vipassana"
            heading="Just finished a course in Chennai?"
            description="Book a short call and I will help you set up a daily practice that actually survives city life, and pair you with a practice buddy."
          />
        </div>
      </div>

      <FaqSection items={faqs} />

      <div className="max-w-5xl mx-auto px-6">
        <RelatedPostsGrid
          title="Keep reading"
          posts={[
            {
              title: "What the 10-day course is actually shaped like",
              href: "/t/10-day-course-structure",
              excerpt:
                "The daily clock and the 10-day arc, no technique, so you know what you are signing up for.",
              tag: "Course",
            },
            {
              title: "Daily Vipassana as a working professional",
              href: "/t/daily-vipassana-working-professional",
              excerpt:
                "Keeping a sit going around a full-time job, which is the exact problem you hit back in the city.",
              tag: "Practice",
            },
            {
              title: "Finding a retreat that fits your dates",
              href: "/guide/find-a-retreat",
              excerpt:
                "How to read the official center schedules and pick a course you can actually attend.",
              tag: "Guide",
            },
          ]}
        />
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Done a course near Chennai? Set up a daily practice that lasts."
      />
    </article>
  );
}
