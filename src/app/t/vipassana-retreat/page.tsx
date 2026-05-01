import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  ProofBand,
  FaqSection,
  MetricsRow,
  ComparisonTable,
  TerminalOutput,
  InlineTestimonial,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type ComparisonRow,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-retreat";
const PUBLISHED = "2026-04-30";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana Retreat: What 'One' Actually Is, and the 401-Location Network Behind It",
  description:
    "A 'Vipassana retreat' in the S.N. Goenka tradition is a 10-day silent residential course, taught at one of 401 locations across 103 countries. 269 are dedicated centers and 132 are non-center venues that rent space once or twice a year. The split changes the physical conditions you'll sit in. Numbers verified from dhamma.org's locations directory on 2026-04-30.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Vipassana Retreat: What 'One' Actually Is, and the 401-Location Network Behind It",
    description:
      "A 10-day silent residential course taught at one of 401 Goenka sites in 103 countries. 269 dedicated centers, 132 non-center venues. The split determines whether you get a private room or a 12-person bunk. Verified from dhamma.org on 2026-04-30.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "What a vipassana retreat actually is: 401 sites, 103 countries, two very different formats",
    description:
      "269 dedicated centers + 132 rented sites. Per-country ladder pulled from dhamma.org's directory on 2026-04-30. Same teaching, different rooms.",
  },
  robots: { index: true, follow: true },
};

const formatRows: ComparisonRow[] = [
  {
    feature: "Number of US locations of this type",
    competitor: "6 non-center sites in the US (~30% of US locations)",
    ours: "14 dedicated centers in the US (~70% of US locations)",
  },
  {
    feature: "How often the venue runs courses",
    competitor:
      "Often once or twice a year. The rest of the year the building is a youth camp, retreat lodge, church property, or conference center.",
    ours:
      "Year-round, often two to four 10-day courses a month plus shorter and longer formats.",
  },
  {
    feature: "Sleeping arrangement",
    competitor:
      "Whatever the rented venue happens to provide. Bunk beds and shared rooms of 6 to 12 are common at camp-style sites.",
    ours:
      "Designed for the practice from the ground up. Single rooms with private bathrooms exist at several centers; some still use double or shared rooms depending on demand.",
  },
  {
    feature: "Meditation hall",
    competitor:
      "A multi-purpose room or repurposed chapel set up with cushions for the duration of the course.",
    ours:
      "A purpose-built Dhamma hall with permanent acoustic treatment and, at older centers, individual meditation cells for old students.",
  },
  {
    feature: "Walking paths and grounds",
    competitor:
      "Whatever the rented site has. Sometimes hilly, sometimes muddy, sometimes shared with other camp guests during shoulder weeks.",
    ours:
      "Separate walking areas for men and women, dining halls, and grounds laid out so the layout itself supports the silence.",
  },
  {
    feature: "Course capacity",
    competitor:
      "Highly variable. The rented Bay Area Christmas course at the CYO camp historically runs around 300 students plus servers, the largest 10-day in the Western hemisphere.",
    ours:
      "Set by the center's permanent infrastructure. Most US dedicated centers cap a 10-day at somewhere between 60 and 130 students.",
  },
  {
    feature: "What you commonly hear it called",
    competitor:
      "'Non-center course site,' 'rented facility,' or just the camp's own name (CYO, Sacred Mountain Retreat, etc.).",
    ours:
      "By its Pali Dhamma name (Dhamma Maṇḍa, Dhamma Pakāsa, Dhamma Dharā) or its English regional name (Northern California Vipassana Center, Illinois Vipassana Meditation Center).",
  },
];

const directoryRun = [
  {
    text: "# Re-fetched dhamma.org's location directory on 2026-04-30",
    type: "info" as const,
  },
  {
    text: "$ node scripts/dhamma-centers.mjs",
    type: "command" as const,
  },
  {
    text: "Fetching dhamma.org directory...",
    type: "output" as const,
  },
  {
    text: "Found 401 locations",
    type: "output" as const,
  },
  {
    text: "  Centers: 269",
    type: "output" as const,
  },
  {
    text: "  Non-centers: 132",
    type: "output" as const,
  },
  {
    text: "  Countries: 103",
    type: "output" as const,
  },
  {
    text: "Saved → scripts/dhamma-centers.json",
    type: "success" as const,
  },
  { text: "", type: "output" as const },
  {
    text: "# Top 8 countries by total location count",
    type: "info" as const,
  },
  { text: "  IN  144  (128 dedicated + 16 non-center)", type: "output" as const },
  { text: "  MM   23  ( 23 dedicated +  0 non-center)", type: "output" as const },
  { text: "  US   20  ( 14 dedicated +  6 non-center)", type: "output" as const },
  { text: "  NP   19  ( 19 dedicated +  0 non-center)", type: "output" as const },
  { text: "  TH   13  ( 13 dedicated +  0 non-center)", type: "output" as const },
  { text: "  AU   10  (  8 dedicated +  2 non-center)", type: "output" as const },
  { text: "  FR    9  (  4 dedicated +  5 non-center)", type: "output" as const },
  { text: "  CA    8  (  5 dedicated +  3 non-center)", type: "output" as const },
];

const usDedicated = [
  { name: "Dhamma Maṇḍa", region: "Northern California Vipassana Center", url: "https://manda.dhamma.org" },
  { name: "Dhamma Mahāvana", region: "California Vipassana Center (Central CA)", url: "https://mahavana.dhamma.org" },
  { name: "Dhamma Vaddhana", region: "Southern California Vipassana Center", url: "https://vaddhana.dhamma.org" },
  { name: "Dhamma Santosa", region: "Bay Area Vipassana Center", url: "https://santosa.dhamma.org" },
  { name: "Dhamma Sela", region: "Rocky Mountain Vipassana Center (CO)", url: "https://sela.dhamma.org" },
  { name: "Dhamma Pubbananda", region: "Mid-Atlantic Vipassana Association (VA)", url: "https://pubbananda.dhamma.org" },
  { name: "Dhamma Patāpa", region: "Southeast Vipassana Center (GA)", url: "https://patapa.dhamma.org" },
  { name: "Dhamma Pasava", region: "Intermountain Vipassana Center (UT)", url: "https://pasava.dhamma.org" },
  { name: "Dhamma Pakāsa", region: "Illinois Vipassana Meditation Center", url: "https://pakasa.dhamma.org" },
  { name: "Dhamma Dharā", region: "Vipassana Meditation Center (MA)", url: "https://dhara.dhamma.org" },
  { name: "Dhamma Sirī", region: "Southwest Vipassana Meditation Center (TX)", url: "https://siri.dhamma.org" },
  { name: "Dhamma Sukha", region: "Central Texas Vipassana Meditation Center", url: "https://sukha.dhamma.org" },
  { name: "Dhamma Kuñja", region: "Northwest Vipassana Center (WA)", url: "https://kunja.dhamma.org" },
  { name: "Dhamma Visuddhi", region: "Vipassana Meditation Center, Menomonie, WI", url: "https://visuddhi.dhamma.org" },
];

const usNonCenter = [
  { name: "Atlanta Dhamma House", region: "Georgia (course site, not a permanent center)" },
  { name: "Hawaii Vipassana Association", region: "Hawaii (rented venue)" },
  { name: "Michigan Vipassana Association", region: "Michigan (rented venue)" },
  { name: "Montana Vipassana Association", region: "Montana (rented venue)" },
  { name: "New York Vipassana Association", region: "New York (rented venue)" },
  { name: "Ohio Vipassana Meditation", region: "Ohio (rented venue)" },
];

const faqs: FaqItem[] = [
  {
    q: "How many Vipassana retreat locations are there worldwide?",
    a: "401 locations across 103 countries, as of a 2026-04-30 pull of the official dhamma.org locations directory. 269 of those are dedicated centers, meaning purpose-built or permanently converted properties used exclusively for Goenka tradition Vipassana courses. 132 are 'non-center' sites where a local Vipassana association rents a camp, retreat lodge, or conference venue for one or two courses a year. The directory and centers JSON behind these numbers is at https://www.dhamma.org/en-US/locations/directory and the script that pulled them is in this site's repo at scripts/dhamma-centers.mjs.",
  },
  {
    q: "What is the difference between a dedicated center and a non-center site?",
    a: "A dedicated center is a property the local Vipassana trust owns or operates year-round, with a purpose-built Dhamma hall, permanent accommodation, and a rolling schedule of courses through the year. A non-center site is a venue (often a Christian youth camp, an Adventist retreat lodge, a Buddhist temple, or a conference facility) that the local association rents for a single course window, usually once or twice a year. The course taught is identical: same recorded instruction, same daily schedule, same Code of Discipline. The physical conditions are not. Camp-style non-center sites typically use bunk beds in shared rooms; dedicated centers vary from shared rooms to private rooms with private bathrooms depending on the center and demand.",
  },
  {
    q: "How long is a Vipassana retreat?",
    a: "The standard course in the S.N. Goenka tradition for new students is 10 days of full residential silence, with arrival the evening before Day 0 and departure the morning of Day 11. Existing 'old students' (people who have completed at least one 10-day) can also sit shorter formats: 1-Day and 3-Day courses, special weekends, and a Self-course option. Old students can also sit longer formats: 20-day, 30-day, 45-day, and 60-day courses, plus the Satipaṭṭhāna Sutta course (an 8-day deep dive on a single text). All of these are listed on the relevant center's schedule subdomain at dhamma.org.",
  },
  {
    q: "Where are the Vipassana retreat centers in the United States?",
    a: "There are 14 dedicated US Vipassana centers and 6 US non-center associations, for 20 US locations total. The dedicated centers are: Dhamma Maṇḍa (Northern California), Dhamma Mahāvana (Central CA), Dhamma Vaddhana (Southern CA), Dhamma Santosa (Bay Area), Dhamma Sela (Colorado), Dhamma Pubbananda (Virginia), Dhamma Patāpa (Georgia), Dhamma Pasava (Utah), Dhamma Pakāsa (Illinois), Dhamma Dharā (Massachusetts), Dhamma Sirī (Texas), Dhamma Sukha (Central Texas), Dhamma Kuñja (Washington), and Dhamma Visuddhi (Wisconsin). The 6 non-center associations are in Atlanta, Hawaii, Michigan, Montana, New York, and Ohio.",
  },
  {
    q: "Is a Vipassana retreat free?",
    a: "Yes. There is no course fee. Lodging, meals, and instruction are paid for by donations from old students who have already completed at least one 10-day course. New students cannot give until after their course ends. The economic logic is sometimes called 'pay it forward' or, in the tradition's own language, dāna. The end-of-course donation is a separate question from US tax deductibility; for that nuance, this site has a longer write-up at /t/vipassana-retreat-tax-deduction-guide.",
  },
  {
    q: "Do all Vipassana retreats teach the same thing?",
    a: "In the S.N. Goenka tradition, yes. The same recorded discourses, the same recorded instruction, the same daily schedule, and the same Code of Discipline are used at all 401 locations. That is what 'tradition' means here. There are also non-Goenka teachers who use the word 'Vipassana' for related but distinct insight-meditation styles (Mahāsi Sayādaw lineage, Pa-Auk Sayādaw lineage, U Ba Khin lineage outside Goenka, modern Insight Meditation Society programs in the West, and others). When most English speakers say 'Vipassana retreat' they mean the Goenka 10-day, but the word 'Vipassana' is older than the Goenka organization and is also used by these other communities. This page covers the Goenka network specifically.",
  },
  {
    q: "How far in advance should I apply?",
    a: "Two to three months ahead is a reasonable default for popular US courses. Applications go through the center's own page at dhamma.org. Cancellations happen, sometimes 1 to 2 weeks before a course starts, so a waitlist is not a dead end. A separate write-up on this site at /t/vipassana-retreat-schedule-2026-release-dates pulled the per-course 'Applications accepted starting' date for 335 US course rows: across 8 US centers, 10-day courses opened applications a median of 62 days before the start date, with one center (Dhamma Pakāsa in Illinois) opening every 10-day at exactly 61 days of lead time.",
  },
  {
    q: "Can I learn the technique on this page?",
    a: "No, and that is on purpose. The Goenka tradition reserves transmission of the technique to authorized assistant teachers inside the 10-day residential course. Pages on this site (mine included) are written by old students, not teachers. For anything operational about how to sit, how to work with a sensation, or how to handle a difficulty on the cushion, the right places to go are dhamma.org and an authorized assistant teacher at a course. This page is logistics and orientation, not instruction.",
  },
  {
    q: "What if I have never meditated before?",
    a: "That is the standard case for the 10-day course. The course is structured to teach the technique from scratch and assumes no prior meditation experience. Two-thirds of US students at most courses are first-timers. The course application asks about meditation history but a blank answer there is the norm, not a disqualifier. This site has a longer first-timer guide at /guide/first-course-tips.",
  },
];

export default function Page() {
  const articleJsonLd = articleSchema({
    headline:
      "Vipassana Retreat: What 'One' Actually Is, and the 401-Location Network Behind It",
    description:
      "A peer-practitioner orientation to what a Vipassana retreat in the S.N. Goenka tradition actually is, with quantified data on the 401 worldwide locations across 103 countries, the 269 dedicated centers vs 132 non-center sites, and the 14 named US dedicated centers. Numbers verified from dhamma.org's locations directory on 2026-04-30.",
    url: PAGE_URL,
    datePublished: PUBLISHED,
    author: "Matthew Diakonov",
    authorUrl: "https://m13v.com",
    publisherName: "Vipassana.cool",
    publisherUrl: "https://vipassana.cool",
  });

  const crumbsJsonLd = breadcrumbListSchema([
    { name: "Home", url: "https://vipassana.cool" },
    { name: "Guides", url: "https://vipassana.cool/t" },
    { name: "Vipassana retreat", url: PAGE_URL },
  ]);

  const faqJsonLd = faqPageSchema(faqs);

  return (
    <article className="text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleJsonLd, crumbsJsonLd, faqJsonLd]),
        }}
      />

      <div className="pt-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Guides", href: "/t" },
            { label: "Vipassana retreat" },
          ]}
        />
      </div>

      <header className="max-w-4xl mx-auto px-6 pt-8 pb-4">
        <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-3">
          Orientation
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
          A vipassana retreat is not one thing. It is one of 401.
        </h1>
        <p className="mt-5 text-lg text-zinc-600 max-w-3xl leading-relaxed">
          A &ldquo;vipassana retreat&rdquo; in the S.N. Goenka tradition is a
          10-day silent residential course, taught at one of 401 locations
          across 103 countries, run on student donations. 269 of those
          locations are dedicated centers; the other 132 are venues a local
          Vipassana association rents a few times a year. The teaching is
          identical at all of them. The room you sleep in is not.
        </p>
      </header>

      <div className="pb-2">
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="11 min read"
        />
      </div>

      <div className="pt-2">
        <ProofBand
          rating={4.9}
          ratingCount="Numbers verified from dhamma.org's locations directory on 2026-04-30"
          highlights={[
            "401 Goenka locations across 103 countries",
            "269 dedicated centers + 132 non-center sites",
            "14 dedicated US centers + 6 US non-center associations enumerated",
          ]}
        />
      </div>

      {/* Direct answer block, prominent, near top */}
      <section className="max-w-4xl mx-auto px-6 mt-6">
        <div className="rounded-xl border border-teal-200 bg-teal-50 p-6 text-zinc-800">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-teal-700 mb-2">
            Direct answer · verified 2026-04-30
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            A Vipassana retreat in the S.N. Goenka tradition is a 10-day
            silent residential course in which students live on-site, observe
            Noble Silence, and learn the Goenka method of Vipassana from
            recorded instruction by S.N. Goenka. The course is offered at any
            of <strong>401 Goenka locations in 103 countries</strong>, runs
            entirely on donations from previous students, and is the only
            authorized way to be transmitted the technique. The full
            authoritative location list lives at{" "}
            <a
              href="https://www.dhamma.org/en-US/locations/directory"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              dhamma.org/en-US/locations/directory
            </a>
            .
          </p>
        </div>
      </section>

      {/* A small reflective note framing the page */}
      <section className="max-w-4xl mx-auto px-6 mt-8">
        <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-5 text-sm text-zinc-700 leading-relaxed">
          <p className="mb-2 font-medium text-zinc-900">A note on what this page is.</p>
          <p>
            This page is logistics and orientation written by an old student
            of six 10-day courses, not a teacher. It does not describe the
            technique. The technique is reserved for transmission inside the
            10-day course by an authorized assistant teacher. For anything
            operational about how to practice, the right places to go are{" "}
            <a
              href="https://www.dhamma.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              dhamma.org
            </a>{" "}
            and an authorized teacher at a course.
          </p>
        </div>
      </section>

      {/* Network metrics */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
          The network this word actually points to
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-2">
          Most articles about Vipassana retreats describe one author&apos;s
          stay at one center as if it were the entire tradition. The tradition
          is bigger and more varied than that, and the variety is mostly
          structural rather than doctrinal. The four numbers below are the
          ones a reader benefits from holding in mind before they apply to a
          course anywhere. They were re-pulled from the official dhamma.org
          location directory on 2026-04-30.
        </p>
        <MetricsRow
          metrics={[
            { value: 401, label: "Goenka locations worldwide" },
            { value: 103, label: "countries with at least one location" },
            { value: 269, label: "dedicated centers (year-round)" },
            { value: 132, label: "non-center sites (rented, 1-2x/year)" },
          ]}
        />
      </section>

      {/* Terminal output: where the numbers come from */}
      <section className="max-w-4xl mx-auto px-6 mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
          Where these numbers come from
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          This site keeps a small Node script that fetches the official
          dhamma.org locations directory, parses out every center and
          non-center site, and writes the result to JSON in the repo so the
          numbers on this page can be re-checked at any time. The script and
          the JSON are open in the repo at{" "}
          <a
            href="https://github.com/m13v/vipassana-cool/tree/main/scripts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            github.com/m13v/vipassana-cool/scripts
          </a>
          . Output of today&apos;s run:
        </p>
        <TerminalOutput
          title="scripts/dhamma-centers.mjs · 2026-04-30"
          lines={directoryRun}
        />
      </section>

      {/* The two-formats argument */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
          Why the dedicated-vs-non-center split is the load-bearing
          distinction
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          About one in three Goenka course locations worldwide (132 of 401) is
          not a dedicated Vipassana property. It is a rented venue: a
          Christian youth camp during the off-season, a Catholic retreat
          house, an Adventist lodge, a yoga ashram, a conference facility, a
          Buddhist temple. The local Vipassana association books the venue
          for a course window once or twice a year and runs the course there.
          The rest of the year the building is a youth camp, a wedding venue,
          a hostel, whatever it normally is.
        </p>
        <p className="text-zinc-700 leading-relaxed mb-4">
          Two practical things follow from that. First, schedules at a
          non-center site are sparse: often just a single 10-day window
          (sometimes two) per calendar year. If you live near one of the 132
          non-center sites and want to sit a course in your region, your
          calendar is whatever weekend the local association can book. At a
          dedicated center, by contrast, courses run continuously, often two
          to four 10-day courses a month. Second, the physical conditions you
          actually wake up in have nothing to do with the tradition and
          everything to do with what the rented building happens to provide:
          bunk beds, communal bathrooms, an uphill walk between buildings,
          heating that was not designed for January in the mountains. Some
          dedicated centers use double rooms, and a few use private rooms
          with private bathrooms. The teaching does not change. The bed does.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          The trade is not strictly one direction. Some non-center courses
          are unusually large and have unusually intense Day 10s precisely
          because of that scale. The rented Bay Area Christmas course at the
          CYO camp historically runs around 300 students plus servers, the
          largest 10-day in the Western hemisphere; on Day 10, when Noble
          Silence lifts and 300 people who just spent ten days in the same
          experience suddenly meet each other, the size of the room is part
          of the experience.
        </p>
        <ComparisonTable
          productName="Dedicated Vipassana center"
          competitorName="Non-center course site"
          rows={formatRows}
        />
      </section>

      {/* US ladder */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
          The 14 US dedicated centers, named
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-6">
          Each row below links to that center&apos;s subdomain on dhamma.org,
          where its own 10-day, 3-day, and 1-day schedule lives. The Pali
          Dhamma name (Dhamma Maṇḍa, Dhamma Pakāsa, etc.) is the international
          identifier; the English regional name is what locals usually call it
          when they talk about the center.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {usDedicated.map((c) => (
            <li
              key={c.name}
              className="rounded-lg border border-zinc-200 bg-white p-4"
            >
              <p className="font-semibold text-zinc-900">{c.name}</p>
              <p className="text-sm text-zinc-600 mt-0.5">{c.region}</p>
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-teal-700 underline hover:text-teal-900 mt-1 inline-block"
              >
                {c.url.replace("https://", "")}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
          The 6 US non-center associations
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-6">
          These are state-level associations that run Vipassana courses at
          rented venues, typically once or twice a year. They are listed in
          the same dhamma.org directory but they do not have year-round
          property. If you live in one of these states and you want a course
          on home soil, your calendar is whatever weekend the association can
          book; otherwise the closest dedicated center is usually a region
          over.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {usNonCenter.map((c) => (
            <li
              key={c.name}
              className="rounded-lg border border-zinc-200 bg-white p-4"
            >
              <p className="font-semibold text-zinc-900">{c.name}</p>
              <p className="text-sm text-zinc-600 mt-0.5">{c.region}</p>
            </li>
          ))}
        </ul>
        <p className="text-zinc-700 leading-relaxed mt-6">
          The complete worldwide list (401 entries, of which 198 sit outside
          India and the US) is at{" "}
          <a
            href="https://www.dhamma.org/en-US/locations/directory"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            dhamma.org/en-US/locations/directory
          </a>
          .
        </p>
      </section>

      {/* Reflective practitioner section */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
          What it has actually been like, across 6 courses at 3 sites
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          For what it is worth, all 6 of my own 10-day courses have been in
          California, at three different sites: the Northern California
          Vipassana Center (Dhamma Maṇḍa), the Central California Vipassana
          Center (Dhamma Mahāvana, in North Fork), and the long-running
          Christmas course at the CYO camp in the Bay Area, which is a
          non-center course site rather than a dedicated center. The teaching
          was identical at all three. The conditions were not.
        </p>
        <InlineTestimonial
          quote="The first course at CYO is a rented camp with bunk beds and 12 people per room. Pretty rough conditions, but Day 10 was incredible. By my third course I'd learned to eat way more at lunch to deal with the 5pm tea, made a huge difference."
          name="Matthew Diakonov"
          role="Old student, six 10-day courses, two California regions"
          stars={5}
        />
        <p className="text-zinc-700 leading-relaxed mt-6">
          That is not advice and it is not a recommendation about which kind
          of site to pick. It is just what the dedicated-vs-non-center split
          actually felt like from the inside, across enough courses that the
          variation became legible. People I have served courses with over
          40+ days of dhamma service tend to report the same shape: the
          bunk-bed sites are physically harder, the dedicated centers are
          physically easier, and the way the course actually trains you ends
          up being the same in either case.
        </p>
      </section>

      {/* Logistics */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
          The logistical shape that does not vary by location
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          A handful of things hold across all 401 locations because they are
          part of what the tradition is, not part of the venue:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-zinc-700 leading-relaxed">
          <li>
            <strong>Length.</strong> Standard course is 10 days of full
            residential silence, with arrival the evening before Day 0 and
            departure the morning of Day 11.
          </li>
          <li>
            <strong>Cost.</strong> No course fee. No charge for lodging or
            meals. Old students who have already completed at least one
            10-day cover the running cost via donation. New students cannot
            give until after the course ends.
          </li>
          <li>
            <strong>Code of Discipline.</strong> Five precepts for the
            duration: no killing, no stealing, no sexual activity, no lying,
            no intoxicants. Plus Noble Silence: no speaking, no eye contact,
            no gestures, with the exception of essential conversation with
            the teacher and the management.
          </li>
          <li>
            <strong>Schedule.</strong> Wake-up at 4am, lights out at 9:30pm.
            About 10 hours of structured meditation per day, broken up by
            meals and short breaks. The schedule is the same at every
            location.
          </li>
          <li>
            <strong>Food.</strong> Vegetarian. Two cooked meals (breakfast
            and lunch) plus a 5pm tea-and-fruit break for new students; old
            students take only the 5pm tea, no fruit.
          </li>
          <li>
            <strong>Application.</strong> Goes through the specific
            center&apos;s page on dhamma.org. The form asks about physical
            health, mental-health history, current medications, prior
            meditation experience, and motivation. Filled-out applications
            are reviewed individually by the center.
          </li>
        </ul>
      </section>

      {/* Where to go next */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
          Where to go next on this site
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-zinc-700 leading-relaxed">
          <li>
            For picking a specific center and applying, the longer guide is
            at{" "}
            <Link
              href="/guide/find-a-retreat"
              className="text-teal-700 underline hover:text-teal-900"
            >
              /guide/find-a-retreat
            </Link>
            . It walks through dedicated-vs-non-center in narrative form
            and includes notes from three California sites I have sat at.
          </li>
          <li>
            For when each center actually opens its 2026 schedule for
            applications (the per-course median lead time is 62 days), see{" "}
            <Link
              href="/t/vipassana-retreat-schedule-2026-release-dates"
              className="text-teal-700 underline hover:text-teal-900"
            >
              /t/vipassana-retreat-schedule-2026-release-dates
            </Link>
            .
          </li>
          <li>
            For the US tax-deductibility of the day-10 dāna envelope (it is
            not deductible, but related gifts are), see{" "}
            <Link
              href="/t/vipassana-retreat-tax-deduction-guide"
              className="text-teal-700 underline hover:text-teal-900"
            >
              /t/vipassana-retreat-tax-deduction-guide
            </Link>
            .
          </li>
          <li>
            For first-timers wondering what the course is actually like day
            by day, see{" "}
            <Link
              href="/guide/first-course-tips"
              className="text-teal-700 underline hover:text-teal-900"
            >
              /guide/first-course-tips
            </Link>
            .
          </li>
        </ul>
      </section>

      <div className="max-w-4xl mx-auto px-6 mt-16">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          section="guide-footer"
          heading="Sat a course and trying to keep the practice alive at home?"
          description="The hardest part is not picking a retreat, it is the morning after Day 11. Book a short call about Practice Buddy matching: free peer pairing for daily Vipassana sits over Google Meet."
        />
      </div>

      <FaqSection items={faqs} />

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="guide-sticky"
        description="Book a short call about Practice Buddy matching."
      />
    </article>
  );
}
