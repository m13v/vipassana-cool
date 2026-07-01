import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ProofBanner,
  ComparisonTable,
  RelatedPostsGrid,
  NumberTicker,
  BackgroundGrid,
  MotionSequence,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-mumbai";
const PUBLISHED = "2026-07-01";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana in Mumbai: six centers, not one, and why Dhamma Pattana is the odd one out",
  description:
    "\"Vipassana Mumbai\" is not a single address. There are six Goenka-tradition centers within about two hours of the city, and the famous one at Gorai, Dhamma Pattana, is the tradition's rare air-conditioned center whose 10-day courses are geared toward working professionals and capped at 90 students. The map of all six, what makes Dhamma Pattana different, the free one-day sittings at the Global Pagoda, cost, and how to apply. Verified against mumbai.vridhamma.org and pattana.vridhamma.org on 2026-07-01.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Vipassana in Mumbai: the six centers and the air-conditioned outlier",
    description:
      "Six Vipassana centers sit within two hours of Mumbai. Dhamma Pattana at Gorai is the tradition's rare AC center for working professionals, 90 seats, inside the world's largest pillarless stone dome. Here is the full map, plus the free one-day Pagoda sittings.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana in Mumbai is six places, not one",
    description:
      "Dhamma Pattana at Gorai is the odd one out: air-conditioned, 90 students, courses geared to business professionals. Here is how it fits with the other five centers near Mumbai.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana in Mumbai" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana in Mumbai", url: PAGE_URL },
];

const centers = [
  {
    name: "Dhamma Kanheri",
    area: "Goregaon (East)",
    distance: "about 12.5 km",
    drive: "15 to 30 min",
    note: "The closest residential center to central Mumbai. A general center for new and old students.",
  },
  {
    name: "Dhamma Vipula",
    area: "C.B.D. Belapur, Navi Mumbai",
    distance: "about 35 km",
    drive: "about 1 hr",
    note: "Serves Navi Mumbai and the eastern suburbs.",
  },
  {
    name: "Dhamma Pattana",
    area: "Gorai, Borivali (West)",
    distance: "about 45 km",
    drive: "1.5 to 2 hr",
    note: "Inside the Global Vipassana Pagoda campus. Air-conditioned, 90 seats, most courses geared to working professionals.",
  },
  {
    name: "Dhamma Sarita",
    area: "Khadavli",
    distance: "about 57 km",
    drive: "about 2 hr",
    note: "North-east of the city, near the Kalyan line.",
  },
  {
    name: "Dhamma Vahini",
    area: "Kalyan, Titwala",
    distance: "about 62 km",
    drive: "about 2.5 hr",
    note: "Further out along the central railway corridor.",
  },
  {
    name: "Dhamma Vatika",
    area: "Palghar",
    distance: "about 94 km",
    drive: "about 2.5 hr",
    note: "The furthest of the greater-Mumbai cluster, up the coast.",
  },
];

const pattanaComparisonRows = [
  {
    feature: "Accommodation",
    competitor:
      "Often shared rooms or dormitories. My first course was at a rented camp with bunk beds and twelve people to a room.",
    ours: "Single-occupancy, self-contained rooms as the norm, with western-style attached bathrooms.",
  },
  {
    feature: "Climate",
    competitor: "Usually unconditioned. You dress for the local weather, fans at best.",
    ours: "The meditation hall and rooms are air-conditioned. The center actually tells you to bring woollens.",
  },
  {
    feature: "Who the courses are pitched at",
    competitor: "General public, all comers, whoever the calendar has room for.",
    ours: "\"Most courses taught here are geared towards business executives and professionals,\" and executives are given preference on executive courses.",
  },
  {
    feature: "Capacity",
    competitor: "Varies widely; larger centers seat a few hundred.",
    ours: "Admits only 90 students, so seats go quickly and applying early matters.",
  },
  {
    feature: "Setting",
    competitor: "Standalone campuses, often rural and quiet.",
    ours: "On a hill overlooking Gorai beach, inside the Global Pagoda complex, next to the world's largest pillarless stone dome.",
  },
];

const relatedPosts = [
  {
    title: "Vipassana in Raipur: two places, not one",
    href: "/t/vipassana-raipur",
    excerpt:
      "Another city where the search term hides more than one address. The residential Dhamma Kuti versus the in-city one-day sittings.",
    tag: "Locations",
  },
  {
    title: "Vipassana in Kanpur",
    href: "/t/vipassana-kanpur",
    excerpt:
      "The center that serves Kanpur, the schedule, and how registration actually works.",
    tag: "Locations",
  },
  {
    title: "First course: how people prepare",
    href: "/guide/first-course-tips",
    excerpt:
      "What tends to trip up first-timers, from the 5pm tea cutoff to the reality of noble silence.",
    tag: "Before you go",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Where do you do Vipassana in Mumbai?",
    a: "There is no single \"Vipassana Mumbai\" address. Six Goenka-tradition centers sit within about two hours of the city: Dhamma Kanheri at Goregaon (East, the closest at roughly 12.5 km), Dhamma Vipula at C.B.D. Belapur in Navi Mumbai, Dhamma Pattana at Gorai inside the Global Pagoda campus, Dhamma Sarita at Khadavli, Dhamma Vahini near Kalyan/Titwala, and Dhamma Vatika at Palghar. The famous one people usually mean is Dhamma Pattana, next to the Global Vipassana Pagoda, but if you want the shortest commute, Dhamma Kanheri at Goregaon is the nearest.",
  },
  {
    q: "What is different about Dhamma Pattana compared to other centers?",
    a: "Three things most first-timers do not expect. Its meditation hall and residential rooms are air-conditioned, so much so that the center advises bringing woollens. Accommodation is usually single-occupancy, self-contained rooms with western-style bathrooms. And most of its courses are, in the center's own words, geared toward business executives and professionals, with executives given preference on the executive courses. It admits only 90 students. Compared with the austere, shared-room reality of many courses in this tradition, Dhamma Pattana is the comfortable outlier.",
  },
  {
    q: "Is Dhamma Pattana the same as the Global Vipassana Pagoda?",
    a: "They share a campus but they are two different things. The Global Vipassana Pagoda is the enormous golden dome at Gorai, home to what is described as the world's largest pillarless stone dome and a meditation hall that seats several thousand. It runs free one-day courses. Dhamma Pattana is the residential meditation center on the same hill where the full 10-day courses happen. You apply to Dhamma Pattana for a 10-day course; you go to the Pagoda hall for a one-day sitting if you are already an old student.",
  },
  {
    q: "Can a complete beginner sit a 10-day course at Dhamma Pattana?",
    a: "Yes. The executive courses are still standard 10-day Vipassana courses open to new students; the \"executive\" label refers to the scheduling and audience, not a different technique. Executives are given preference, and with only 90 seats the popular dates fill early, so a first-timer should apply well ahead. If Dhamma Pattana's dates are full, Dhamma Kanheri at Goregaon or Dhamma Vipula in Navi Mumbai are close alternatives.",
  },
  {
    q: "How much does a course in Mumbai cost?",
    a: "Nothing. Across all of these centers there is no charge for the teaching, the food, or the room. The tradition runs entirely on donations, and donations are accepted only from students who have already completed a 10-day course. So a first-timer is effectively hosted by everyone who sat before them. At the end you may give what you wish if the course helped you, or nothing at all, and your place was never conditional on paying.",
  },
  {
    q: "What are the one-day courses at the Global Pagoda?",
    a: "The Global Vipassana Pagoda runs regular one-day courses, typically 11am to 5pm, for old students only, meaning people who have completed a 10-day course with S.N. Goenka or an assistant teacher. They are held in the giant Dhamma Hall. There is usually a larger \"Mega\" one-day course on certain dates. For a first-timer these are not the entry point; the 10-day residential course is. For one-day details the Pagoda lists oneday@globalpagoda.org.",
  },
  {
    q: "How do I apply, and who do I contact?",
    a: "Applications and live dates are on the official schedule site. For Dhamma Pattana it is schedule.vridhamma.org/courses/pattana, and the registration office is reachable at 82918 94650 or info.pattana@vridhamma.org (Mon to Sat, 10am to 5pm). For one-day courses and group sittings around the city, the Mumbai area contact is sit.mumbai@vridhamma.org. Whatever a website or app tells you, the technique itself is only taught in person inside a course, so treat dhamma.org and the assistant teacher at your course as the authority on anything about how to practice.",
  },
];

export default function Page() {
  const readingTime = "7 min read";

  const jsonLd = [
    articleSchema({
      headline:
        "Vipassana in Mumbai: six centers, not one, and why Dhamma Pattana is the odd one out",
      description:
        "\"Vipassana Mumbai\" spans six Goenka-tradition centers within about two hours of the city. Dhamma Pattana at Gorai is the rare air-conditioned center whose 10-day courses are geared toward working professionals and capped at 90 students. The full map, the free one-day Pagoda sittings, cost, and how to apply.",
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
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <BackgroundGrid pattern="dots" glow>
        <header className="max-w-4xl mx-auto px-6 pt-8 pb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
            Vipassana in Mumbai is six places, not one
          </h1>
          <ArticleMeta
            author="Matthew Diakonov"
            authorRole="Written with AI"
            datePublished={PUBLISHED}
            readingTime={readingTime}
          />

          <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
              Direct answer, verified 2026-07-01
            </p>
            <p className="mt-3 text-lg text-zinc-800 leading-relaxed">
              There is no single &ldquo;Vipassana Mumbai&rdquo; center. Six
              Goenka-tradition centers sit within about two hours of the city.
              The famous one is <strong>Dhamma Pattana</strong> at Gorai, inside
              the Global Vipassana Pagoda campus (Borivali West, 400091). It is
              the tradition&rsquo;s rare air-conditioned center: single rooms,
              western bathrooms, only 90 seats, and most of its 10-day courses
              are geared toward working professionals. If you just want the
              nearest place, that is <strong>Dhamma Kanheri</strong> at Goregaon
              (East), roughly 12.5 km out.
            </p>
            <p className="mt-3 text-sm text-zinc-600">
              Sources checked today:{" "}
              <a
                href="https://mumbai.vridhamma.org/centres"
                className="text-teal-600 underline"
                rel="nofollow"
              >
                mumbai.vridhamma.org/centres
              </a>{" "}
              and{" "}
              <a
                href="https://pattana.vridhamma.org/home"
                className="text-teal-600 underline"
                rel="nofollow"
              >
                pattana.vridhamma.org
              </a>
              .
            </p>
          </div>
        </header>
      </BackgroundGrid>

      <section className="max-w-4xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="rounded-xl border border-zinc-200 bg-white p-6 text-center">
            <div className="text-4xl font-bold text-teal-600">
              <NumberTicker value={6} />
            </div>
            <p className="mt-2 text-sm text-zinc-600">
              centers within about 2 hours of Mumbai
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-6 text-center">
            <div className="text-4xl font-bold text-teal-600">
              <NumberTicker value={90} />
            </div>
            <p className="mt-2 text-sm text-zinc-600">
              students admitted per course at Dhamma Pattana
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-6 text-center">
            <div className="text-4xl font-bold text-teal-600">
              <NumberTicker value={8000} />+
            </div>
            <p className="mt-2 text-sm text-zinc-600">
              seats in the Global Pagoda Dhamma Hall
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-bold text-zinc-900">
          Why one search hides so many places
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          When people type &ldquo;vipassana mumbai&rdquo; they picture one
          building. In practice the greater-Mumbai area is one of the densest
          clusters of Vipassana centers anywhere, because the tradition&rsquo;s
          Indian heartland is just up the road at Igatpuri, where the flagship
          Dhamma Giri and the Vipassana Research Institute sit about 125 km out.
          Closer in, the choice is less about which city and more about which
          suburb you can get to, and whether you want the austere version or the
          comfortable one.
        </p>
      </section>

      <section className="py-6">
        <MotionSequence
          title="One query, a whole cluster"
          frames={[
            {
              title: "You search: vipassana mumbai",
              body: "The map you get back is not a single pin.",
            },
            {
              title: "Nearest: Dhamma Kanheri, Goregaon (East)",
              body: "About 12.5 km. The shortest commute from central Mumbai.",
            },
            {
              title: "The famous one: Dhamma Pattana, Gorai",
              body: "About 45 km, inside the Global Pagoda campus. The air-conditioned outlier.",
            },
            {
              title: "Plus four more, out to Palghar",
              body: "Vipula, Sarita, Vahini, Vatika: 35 to 94 km along the suburban lines.",
            },
          ]}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-zinc-900">
          The six centers around Mumbai
        </h2>
        <p className="mt-3 text-zinc-600">
          Distances and drive times are approximate and depend on where in the
          city you start. All six teach the same 10-day course in the same
          Goenka tradition.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-zinc-300">
                <th className="py-3 pr-4 font-semibold text-zinc-900">Center</th>
                <th className="py-3 pr-4 font-semibold text-zinc-900">Area</th>
                <th className="py-3 pr-4 font-semibold text-zinc-900">
                  From central Mumbai
                </th>
                <th className="py-3 font-semibold text-zinc-900">Notes</th>
              </tr>
            </thead>
            <tbody>
              {centers.map((c) => (
                <tr key={c.name} className="border-b border-zinc-200 align-top">
                  <td className="py-4 pr-4 font-semibold text-zinc-900 whitespace-nowrap">
                    {c.name}
                  </td>
                  <td className="py-4 pr-4 text-zinc-700 whitespace-nowrap">
                    {c.area}
                  </td>
                  <td className="py-4 pr-4 text-zinc-700 whitespace-nowrap">
                    {c.distance}
                    <span className="block text-xs text-zinc-500">
                      {c.drive} drive
                    </span>
                  </td>
                  <td className="py-4 text-zinc-600">{c.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-zinc-900">
          The one that breaks the pattern: Dhamma Pattana
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          I did my first course at a rented camp on the other side of the world:
          bunk beds, twelve people to a room, conditions that were, honestly,
          rough. That is the version of a Goenka course most people who have sat
          one will recognize. Dhamma Pattana is the exception that surprises
          them. It sits on a hill overlooking Gorai beach, inside the Global
          Pagoda complex that opened in 2009, and its whole setup is tuned for a
          different kind of student. The meditation hall and the rooms are
          air-conditioned. The center goes out of its way to warn applicants to
          bring woollens because of it. Accommodation is usually single, self
          contained, with western-style bathrooms. And it admits only 90
          students, so it never has the packed-dormitory feel.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The reason for all of this is stated plainly on the center&rsquo;s own
          pages: &ldquo;Most courses taught here are geared towards business
          executives and professionals.&rdquo; Its calendar is full of executive
          10-day courses and even 3-day executive courses, and on those,
          executives are given preference. It is the same technique taught
          everywhere in this tradition; what is different is who the schedule is
          built around and how comfortable the container is while you sit.
        </p>

        <div className="mt-8">
          <ComparisonTable
            heading="Dhamma Pattana versus a typical course in this tradition"
            intro="Centers vary, and this is a generalization, but the contrast is what surprises people who assumed all Goenka courses look the same."
            productName="Dhamma Pattana (Gorai)"
            competitorName="A typical 10-day center"
            rows={pattanaComparisonRows}
            caveat="Not every other center is austere, and Dhamma Pattana still runs a full, silent 10-day course. The point is only that its physical setup and audience are unusual for the tradition."
          />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-8">
        <ProofBanner
          quote="The Dhamma Hall at the Global Pagoda is described as the world's largest meditation hall, under what is called the world's largest pillarless stone dome."
          source="Global Vipassana Pagoda, Gorai (opened 2009)"
          metric="8,000+ seats"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-zinc-900">
          Dhamma Pattana and the Pagoda are not the same thing
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          This is the confusion that trips up most people planning a trip to
          Gorai. The <strong>Global Vipassana Pagoda</strong> is the giant golden
          dome you see in photos. It is a monument and a hall, and it runs free
          one-day courses, typically 11am to 5pm, for old students only, meaning
          people who have already completed a 10-day course. The{" "}
          <strong>Dhamma Pattana</strong> center is the residential building on
          the same hill where the actual 10-day courses take place. So if you are
          new to this, you are applying to Dhamma Pattana for a 10-day course. If
          you are an old student who wants a single day of practice in that
          enormous hall, that is the Pagoda&rsquo;s one-day course, and the
          listed contact for those is oneday@globalpagoda.org.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-zinc-900">
          Cost, dates, and how to apply
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Every one of these centers is free. No charge for the course, the
          food, or the room. The tradition runs on donations, and only students
          who have finished a 10-day course may donate, so a first-timer is
          hosted by the people who came before them. Course calendars change, so
          the live dates live on the official schedule site: for Dhamma Pattana,
          that is schedule.vridhamma.org/courses/pattana, and the registration
          office is 82918 94650 or info.pattana@vridhamma.org, open Monday to
          Saturday, 10am to 5pm. For one-day courses and group sittings around
          the city, the Mumbai area contact is sit.mumbai@vridhamma.org.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          One honest caveat: because Dhamma Pattana caps each course at 90
          students and gives executives preference, its most convenient dates
          fill early. If you are set on Gorai, apply well ahead. If you are
          flexible, Dhamma Kanheri at Goregaon is closer to the city and Dhamma
          Vipula covers Navi Mumbai, and both run the identical course.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          I am a fellow meditator who has sat six of these courses, not a teacher
          and not connected to any of these centers. I can tell you where the
          places are and what the logistics look like. For anything about how the
          practice actually works, the authority is dhamma.org and the assistant
          teacher at your course, and that is by design in this tradition.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Trying to keep a daily sit going after Mumbai?"
          description="If you have sat a course and the daily practice is slipping, I pair meditators for daily accountability. Grab a slot and we will talk about what a buddy setup could look like for you."
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 py-8">
        <FaqSection items={faqs} heading="Vipassana in Mumbai: common questions" />
      </section>

      <section className="max-w-4xl mx-auto px-6 py-8">
        <RelatedPostsGrid
          title="Related guides"
          posts={relatedPosts}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Sat a course? Get paired with a practice buddy for daily accountability."
      />
    </article>
  );
}
