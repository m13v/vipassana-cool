import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  GlowCard,
  MetricsRow,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-meditation-bangalore";
const PUBLISHED = "2026-06-20";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana meditation in Bangalore: the one official Goenka center, and what happens after",
  description:
    "Searching 'Vipassana classes in Bangalore' returns a directory of yoga studios. The Goenka-tradition technique is taught at exactly one center serving the city: Dhamma Paphulla, about 30 km out, in free 10-day residential courses. Register at schedule.vridhamma.org/courses/paphulla. Verified 2026-06-20.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Vipassana meditation in Bangalore: one official center, not drop-in classes",
    description:
      "Dhamma Paphulla is the official S.N. Goenka tradition Vipassana center serving Bangalore. 10-day residential courses, donation-funded, ~30 km from the city. Plus the part the listings skip: keeping the practice alive once you are back in city traffic.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana in Bangalore: the one official center, verified",
    description:
      "It is not weekly classes. It is a free 10-day residential course at Dhamma Paphulla, ~30 km from Bangalore. Where to register, and what the directory listings never mention.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana in Bangalore" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana meditation in Bangalore", url: PAGE_URL },
];

const courseRows = [
  {
    course: "10-day course",
    who: "Open to everyone, including first-time students",
    note: "The full residential course where the technique is taught from the start. 12 calendar days on site.",
  },
  {
    course: "3-day course",
    who: "Old students only (one prior 10-day course)",
    note: "A shorter sit for people who have already completed a 10-day course.",
  },
  {
    course: "1-day course",
    who: "Old students only",
    note: "A single-day sit, usually run for nearby practitioners keeping their practice going.",
  },
  {
    course: "Satipatthana Sutta course",
    who: "Old students with multiple 10-day courses",
    note: "A study course built around the discourse, for established practitioners.",
  },
  {
    course: "Children / teen courses",
    who: "Ages roughly 10 to 18",
    note: "Short introductory courses run separately from the adult schedule.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Where can I actually do Vipassana meditation in Bangalore?",
    a: "At Dhamma Paphulla, the official Vipassana center in the S.N. Goenka tradition that serves Bangalore. It sits about 30 km from the city in Alur Village, Dasanapura Hobli, Bangalore North Taluk, Karnataka 562162. Courses are 10-day residential courses, and you register through the official schedule at schedule.vridhamma.org/courses/paphulla. The directory listings you see for 'Vipassana classes in Bangalore' mostly point at unrelated yoga and meditation studios, not this tradition.",
  },
  {
    q: "Is Vipassana taught as weekly drop-in classes in Bangalore?",
    a: "No. In the Goenka tradition the technique is not taught in hourly or weekly classes. It is taught only inside a 10-day residential course, where students stay on site the entire time. There is no class you book by the hour. If a listing in the city advertises a one-hour or weekend 'Vipassana class', it is not this tradition. Old students sometimes attend group sittings locally, but those are for people who have already completed a course, not an entry point.",
  },
  {
    q: "How much does the Bangalore course cost?",
    a: "Nothing. There are no charges for the courses at Dhamma Paphulla, not even to cover food and accommodation. All expenses are met by donations from old students who completed a course and wanted to give others the same opportunity. You can donate after you finish your first course if you choose to, but it is never a condition of attending.",
  },
  {
    q: "How do I register for the 10-day course at Dhamma Paphulla?",
    a: "Go to schedule.vridhamma.org/courses/paphulla, find a 10-day course with open dates, and submit the application form. The center asks for a recent photo, your full residential address, date of birth, education or occupation, and an emergency contact, so the application is not rejected for missing details. Questions go to registration@paphulla.dhamma.org. Courses fill up, so apply well ahead of the dates you want.",
  },
  {
    q: "How far is Dhamma Paphulla from Bangalore and how do I get there?",
    a: "It is about 30 km from central Bengaluru, on a roughly 10-acre site near Alur Village in Bangalore North Taluk. The center surrounds you with farmland and a quieter setting than the city. The official course confirmation email is the right place to look for current travel and reporting instructions, since pickup points and timings change.",
  },
  {
    q: "I have already done a course. How do I keep practicing once I am back in Bangalore?",
    a: "This is the real bottleneck, and the course schedule does not solve it. The center runs group sittings for old students, and those help. Day to day, though, the practice lives or dies on whether you sit on your own mornings in the middle of city life. Pairing up with another practitioner for daily accountability is one of the few things that reliably keeps it going. That is the whole reason this site runs a free practice buddy matching program at vipassana.cool/practice-buddy.",
  },
  {
    q: "Are there other Goenka-tradition centers near Bangalore?",
    a: "Dhamma Paphulla is the dedicated center serving the Bangalore area. The Vipassana Research Institute lists all official centers by region at vridhamma.org, and there are other centers elsewhere in Karnataka and across India. If Paphulla dates do not line up with your schedule, the official center search is the place to look for a course you can actually attend.",
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
                "Vipassana meditation in Bangalore: the one official center, and what happens after",
              description:
                "Dhamma Paphulla is the official S.N. Goenka tradition Vipassana center serving Bangalore. Free 10-day residential courses ~30 km from the city, plus the daily-practice problem the directory listings never mention.",
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
          Vipassana meditation in Bangalore
        </h1>
        <p className="mt-4 text-lg text-zinc-500">
          The search results make it look like a menu of drop-in classes. It is
          not. Here is the one official center that actually teaches the
          technique, what it costs, how to register, and the part every listing
          leaves out.
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
            The technique taught as Vipassana by S.N. Goenka is offered near
            Bangalore at exactly one place:{" "}
            <span className="font-semibold text-zinc-900">Dhamma Paphulla</span>
            , about 30 km from the city in Alur Village, Bangalore North Taluk.
            It is taught only in a{" "}
            <span className="font-semibold text-zinc-900">
              free, donation-funded, 10-day residential course
            </span>
            , never as hourly or weekly classes. Register at{" "}
            <a
              href="https://schedule.vridhamma.org/courses/paphulla"
              className="font-medium text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              schedule.vridhamma.org/courses/paphulla
            </a>
            .
          </p>
        </div>
      </div>

      {/* Disambiguation lede */}
      <div className="max-w-3xl mx-auto px-6 mt-12">
        <p className="text-zinc-700 leading-relaxed">
          If you type &ldquo;Vipassana meditation classes in Bangalore&rdquo;
          into a search box, most of what comes back is a directory: yoga
          studios, wellness centers, and general meditation classes scattered
          across Indiranagar, Jayanagar, and Koramangala. Many of them are
          worthwhile in their own right. Almost none of them teach Vipassana in
          the sense most people mean when they search for it: the silent 10-day
          technique in the lineage of Sayagyi U Ba Khin, taught by S.N. Goenka
          and his assistant teachers.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          That tradition does not run classes. It runs courses, and in the
          Bangalore region there is one center built for them. I have sat six of
          these 10-day courses myself, all at three centers in California, not
          at Paphulla, so I am writing this as a fellow student who knows the
          format rather than as anyone connected to the center. Everything below
          about Paphulla is sourced from its official pages and verified on the
          date stamped above.
        </p>
      </div>

      {/* The center card */}
      <div className="max-w-3xl mx-auto px-6 mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          The one center that serves Bangalore
        </h2>
        <GlowCard className="mt-6 rounded-2xl border border-zinc-200 bg-white p-7">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            Dhamma Paphulla
          </p>
          <p className="mt-1 text-sm text-zinc-500">
            Vipassana Meditation &amp; Research Center
          </p>
          <dl className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
            <div>
              <dt className="text-zinc-500">Location</dt>
              <dd className="mt-1 text-zinc-800">
                Alur Village, Dasanapura Hobli, Bangalore North Taluk, Karnataka
                562162
              </dd>
            </div>
            <div>
              <dt className="text-zinc-500">Distance from the city</dt>
              <dd className="mt-1 text-zinc-800">About 30 km from Bengaluru</dd>
            </div>
            <div>
              <dt className="text-zinc-500">Tradition</dt>
              <dd className="mt-1 text-zinc-800">
                Taught by S.N. Goenka in the tradition of Sayagyi U Ba Khin
              </dd>
            </div>
            <div>
              <dt className="text-zinc-500">Capacity</dt>
              <dd className="mt-1 text-zinc-800">
                Main hall ~100 meditators, plus two mini halls seating 30 each
              </dd>
            </div>
            <div>
              <dt className="text-zinc-500">Registration</dt>
              <dd className="mt-1 text-zinc-800">
                <a
                  href="https://schedule.vridhamma.org/courses/paphulla"
                  className="text-teal-700 underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  schedule.vridhamma.org/courses/paphulla
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-zinc-500">Cost</dt>
              <dd className="mt-1 text-zinc-800">
                No charge. Funded entirely by old-student donations.
              </dd>
            </div>
          </dl>
        </GlowCard>

        <MetricsRow
          metrics={[
            { value: 30, suffix: " km", label: "From central Bengaluru" },
            { value: 100, prefix: "~", label: "Seats in the main hall" },
            { value: 10, suffix: " acres", label: "Of farmland and quiet" },
            { value: 0, prefix: "₹", label: "Cost of the course" },
          ]}
        />
      </div>

      {/* Why classes is the wrong frame */}
      <div className="max-w-3xl mx-auto px-6 mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          Why &ldquo;classes near me&rdquo; is the wrong frame
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The reason the listings feel confusing is that two different things
          share the word Vipassana. One is a broad family of insight-meditation
          styles you can find taught in hourly sessions all over the city. The
          other is the specific 10-day course in the Goenka tradition, where the
          whole point is to step out of daily life, into noble silence, for the
          full length of the course. You cannot compress that into a Tuesday
          evening slot, which is why this tradition does not offer one.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          So the honest answer to &ldquo;where do I take a Vipassana class in
          Bangalore&rdquo; is that there is no class. There is a course, and the
          center that runs it sits outside the city on purpose. What Paphulla
          actually offers looks like this:
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
              {courseRows.map((row) => (
                <tr key={row.course} className="align-top">
                  <td className="px-4 py-3 font-semibold text-zinc-900 whitespace-nowrap">
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
          Course types and eligibility follow the standard pattern across the
          tradition. The exact dates and which formats are scheduled at Paphulla
          right now are on the center&rsquo;s schedule page. For anything about
          how the technique is actually practiced, the right source is{" "}
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

      {/* Registration, plainly */}
      <div className="max-w-3xl mx-auto px-6 mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          Registering, plainly
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Applications go through the official schedule at{" "}
          <a
            href="https://schedule.vridhamma.org/courses/paphulla"
            className="text-teal-700 underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            schedule.vridhamma.org/courses/paphulla
          </a>
          . You pick an open 10-day course, fill the form, and wait for a
          confirmation email. The center specifically asks for a recent photo,
          your full residential address, date of birth, education or occupation,
          and an emergency contact, and notes that applications missing those
          details can be rejected. Course questions go to
          registration@paphulla.dhamma.org. Popular dates around long weekends
          and the end of the year fill early, so it is worth applying further
          ahead than feels necessary.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          One thing first-timers get wrong: the course is residential for the
          whole stretch, so you are committing to being on site and reachable
          only through the emergency contact for the duration. That is a feature,
          not an inconvenience. If you want a sense of what the days themselves
          are shaped like before you apply, the{" "}
          <Link
            href="/t/10-day-course-structure"
            className="text-teal-700 underline underline-offset-2"
          >
            10-day course structure
          </Link>{" "}
          breakdown walks through the daily clock without touching technique.
        </p>
      </div>

      {/* The part the listings skip */}
      <div className="max-w-3xl mx-auto px-6 mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          The part the listings skip
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Every guide to Vipassana in Bangalore stops at the same place: here is
          the center, here is how to register, good luck. The hard part starts
          after you come home. You leave Paphulla on day 11 with a practice you
          mean to keep, and within two weeks the city has its hands back on your
          calendar. Traffic, work, the phone the moment you wake up. The course
          gave you the technique. Nothing about the course gives you the daily
          habit back in Bangalore, and that is where almost everyone quietly
          loses it.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The center helps where it can: old students can attend group sittings,
          and sitting with other people is genuinely steadying. But the
          difference between a practice that survives and one that fades usually
          comes down to a smaller, duller thing: whether one other person is
          expecting you to sit tomorrow morning. That is the single lever I have
          watched work, across my own years of daily practice and across the
          people I have met at courses.
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
          once you are back in the noise. I am not a teacher, just a fellow
          student who has done this six times and wanted the part after the
          course to be less lonely.
        </p>

        <div className="mt-8">
          <BookCallCTA
            appearance="footer"
            destination={BOOKING_LINK}
            site="Vipassana"
            heading="Just finished a course in Bangalore?"
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
                "The daily clock and the 10-day arc, with no technique, so you know what you are signing up for.",
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
        description="Done a course near Bangalore? Set up a daily practice that lasts."
      />
    </article>
  );
}
