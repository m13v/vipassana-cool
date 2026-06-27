import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  MetricsRow,
  AnimatedChecklist,
  TextShimmer,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-sohna";
const PUBLISHED = "2026-06-26";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana in Sohna is Dhamma Sota: the Aravalli-hills center that gives every student a private room",
  description:
    "The Vipassana center near Sohna is Dhamma Sota, Village Rahaka, Sohna (Haryana), 16 acres in the Aravalli Hills about 70 km from New Delhi. Free 10-day Goenka-tradition courses starting the 1st and 3rd Wednesday each month. The detail the directions pages skip: all 120 students get single-occupancy rooms with attached bathrooms and an individual cell in the pagoda.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Vipassana Sohna (Dhamma Sota): single rooms, attached baths, in the Aravalli Hills",
    description:
      "Dhamma Sota near Sohna is the Goenka-tradition Vipassana center serving the Delhi and Gurgaon belt. Free 10-day donation-based courses, every student in a single room with an attached bathroom. Direct registration and cost answers plus the part most listings leave out.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana Sohna is Dhamma Sota: the private-room center near Delhi",
    description:
      "Village Rahaka, Sohna, 16 acres in the Aravalli Hills, established 2000. Free 10-day courses, single-occupancy rooms with attached bathrooms for all 120 students.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana Sohna" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana Sohna", url: PAGE_URL },
];

const referenceRows: { k: string; v: React.ReactNode }[] = [
  { k: "Center name", v: "Dhamma Sota, the Vipassana centre near Sohna" },
  { k: "Meaning", v: "Sota means 'stream'; Dhamma Sota is 'Stream of Dhamma'" },
  {
    k: "Location",
    v: "Village Rahaka, Sohna (Haryana), about 70 km from New Delhi Railway Station",
  },
  { k: "Established", v: "Year 2000" },
  {
    k: "Land",
    v: "16 acres surrounded by the green valley of the Aravalli Hills",
  },
  {
    k: "Capacity",
    v: "120 meditators (72 males, 48 females); all rooms single occupancy with attached bathrooms",
  },
  {
    k: "Meditation space",
    v: "A meditation hall for 100, three smaller halls for 40 each, and a pagoda with individual meditation cells",
  },
  {
    k: "Course cadence",
    v: "10-day residential courses starting the 1st and 3rd Wednesday of each month, bilingual in Hindi and English",
  },
  {
    k: "Tradition",
    v: "Vipassana as taught by S.N. Goenka in the tradition of Sayagyi U Ba Khin",
  },
  {
    k: "Cost",
    v: "Free. Donation-based; donations come only from people who have completed a course",
  },
  { k: "Operator", v: "Vipassana Sadhana Sansthan" },
];

const faqs: FaqItem[] = [
  {
    q: "Where is the Vipassana centre in Sohna?",
    a: "It is Dhamma Sota, at Village Rahaka, Sohna, in Haryana, about 70 km from New Delhi Railway Station. It sits on 16 acres in the Aravalli Hills and teaches Vipassana in the tradition of S.N. Goenka and Sayagyi U Ba Khin. It runs the standard free, donation-based 10-day residential course. The official site is sota.dhamma.org.",
  },
  {
    q: "How do I register for a course at Dhamma Sota?",
    a: "You apply online for a specific dated course through the center's own portal at sota.dhamma.org, or through the global course finder at dhamma.org. The center can host 120 students per 10-day course, so places are limited and you wait for a confirmation rather than dropping in. There is no fee at the application stage; the course itself is free.",
  },
  {
    q: "Is the course at Sohna free?",
    a: "Yes. Like every center in this tradition, Dhamma Sota charges nothing for the teaching, food, or lodging. It runs entirely on donations, and donations are accepted only from people who have already completed at least one 10-day course. So a first-time student is supported by the giving of people who sat before them. For the reasoning behind that model, see our page on free meditation retreats.",
  },
  {
    q: "What are the rooms like at Dhamma Sota?",
    a: "Unusually self-contained for this tradition. The center's own description says it can house 120 meditators, 72 males and 48 females, and that all rooms are for single occupancy and have attached bathrooms. There is also a pagoda with individual meditation cells. Many centers put new students in shared dorms with shared washrooms, so Sohna's single rooms are worth knowing about before you go.",
  },
  {
    q: "When do courses start at the Sohna center?",
    a: "Dhamma Sota runs 10-day courses twice a month for new and old students, starting the 1st and 3rd Wednesday of each month. Courses are conducted bilingually in Hindi and English, with discourse material available in many languages. Exact dates and open seats are listed on the center's own course schedule at sota.dhamma.org.",
  },
  {
    q: "How far is Dhamma Sota from Delhi and Gurgaon?",
    a: "The center is about 70 km from New Delhi Railway Station and lies just past Sohna, off the road toward Ballabhgarh, in the Aravalli Hills. That puts it within reach of the Delhi and Gurgaon belt while still being out in quiet hill country, which is part of why people in the city search for it. The center's site and the dhamma.org directory list current directions and contact numbers.",
  },
  {
    q: "Can this page or site teach me the technique before I go?",
    a: "No, and that is deliberate. In this tradition the technique is only transmitted inside a 10-day residential course by an authorized assistant teacher. I am a fellow practitioner sharing history, logistics, and context, not a teacher. For anything operational, how to sit or how to work with a difficulty, the canonical sources are the assistant teacher at the center and dhamma.org.",
  },
];

const relatedPosts = [
  {
    title: "Vipassana centre in Delhi: where the nearest courses actually run",
    href: "/t/vipassana-centre-in-delhi",
    excerpt:
      "If Sohna does not suit you, this is the companion guide to the centers serving the Delhi region, with the same direct registration and cost answers.",
    tag: "Guide",
  },
  {
    title: "Igatpuri Vipassana (Dhamma Giri): the source node of the network",
    href: "/t/igatpuri-vipassana",
    excerpt:
      "The worldwide headquarters of the tradition and the research institute behind it. Useful context for how every center, including Sohna, fits together.",
    tag: "Guide",
  },
  {
    title: "10-day course structure: the daily clock and the 10-day arc",
    href: "/t/10-day-course-structure",
    excerpt:
      "The fixed schedule a Dhamma Sota course runs on is the same one used at every center worldwide. Read from the Code of Discipline and six personal courses.",
    tag: "Reference",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Vipassana in Sohna is Dhamma Sota: the Aravalli-hills center that gives every student a private room",
    description:
      "Dhamma Sota near Sohna is the Goenka-tradition Vipassana center on 16 acres in the Aravalli Hills, about 70 km from New Delhi. Free 10-day donation-based courses starting the 1st and 3rd Wednesday each month. All 120 students get single-occupancy rooms with attached bathrooms and an individual cell in the pagoda. Direct registration and cost answers plus the context the directions pages skip.",
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
          Sohna, Haryana
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
          Vipassana in Sohna is{" "}
          <TextShimmer className="text-teal-700">Dhamma Sota</TextShimmer>, and
          every student gets a private room
        </h1>
        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          People who search for Vipassana in Sohna are usually somewhere in the
          Delhi or Gurgaon belt, looking for the nearest 10-day course. The
          center is Dhamma Sota, sixteen quiet acres in the Aravalli Hills. Here
          is the literal answer to where it is and how to join, and then the
          accommodation detail the directions pages almost never mention.
        </p>
      </header>

      <ArticleMeta
        author="Matthew Diakonov"
        authorRole="Written with AI"
        datePublished={PUBLISHED}
        readingTime="6 min read"
      />

      <section className="max-w-3xl mx-auto px-6 pt-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Direct answer (verified 2026-06-26)
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            The Vipassana center near Sohna is{" "}
            <strong>Dhamma Sota</strong>, at{" "}
            <strong>Village Rahaka, Sohna (Haryana)</strong>, about{" "}
            <strong>70 km from New Delhi Railway Station</strong>. It runs the
            standard <strong>free, donation-based 10-day residential course</strong>{" "}
            in the tradition of S.N. Goenka, with courses starting the{" "}
            <strong>1st and 3rd Wednesday of each month</strong> and room for{" "}
            <strong>120 students</strong>. You apply online for a specific dated
            course at{" "}
            <a
              href="https://sota.dhamma.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              sota.dhamma.org
            </a>
            . The part that sets this center apart is below.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The numbers that define the place
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Dhamma Sota opened in the year 2000 and has grown into one of the
          larger centers serving northern India. Four figures from its own
          description tell you most of what you need before you read anything
          else.
        </p>
        <MetricsRow
          metrics={[
            { value: 16, suffix: " acres", label: "in the Aravalli Hills" },
            { value: 120, label: "single-occupancy beds" },
            { value: 2000, label: "year established" },
            { value: 70, suffix: " km", label: "from New Delhi station" },
          ]}
        />
        <p className="text-sm text-zinc-500">
          Figures from the center&apos;s own pages at{" "}
          <a
            href="https://sota.dhamma.org/en/dhamma-sota/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            sota.dhamma.org
          </a>{" "}
          and{" "}
          <a
            href="https://sota.vridhamma.org/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            sota.vridhamma.org/about
          </a>
          . Verified 2026-06-26.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The anchor fact: every student gets a single room with an attached
          bathroom
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          This is the detail most listings for the Sohna center leave out, and
          it matters more than people expect. The center&apos;s own description
          states that it can house 120 meditators, 72 males and 48 females, and
          that <strong>all rooms are for single occupancy and have attached
          bathrooms</strong>. On top of that there is a pagoda with individual
          meditation cells. For a tradition where many first-timers brace for a
          shared dorm and a queue for the washroom, that is a genuinely
          different starting point.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          I did my own first course at a rented camp with bunk beds and twelve
          people to a room. It was rough, and the conditions were part of the
          training. So when a center can give a new student a private room and
          an attached bath from day one, that is worth knowing about in advance,
          not because comfort is the goal but because it removes one variable
          people quietly worry about before they go.
        </p>

        <AnimatedChecklist
          title="What Dhamma Sota provides, per its own description"
          items={[
            { text: "Single-occupancy rooms (no shared dorms)" },
            { text: "Attached bathroom with each room" },
            { text: "A pagoda with individual meditation cells" },
            { text: "A meditation hall for 100 students" },
            { text: "Three smaller halls seating 40 each" },
            { text: "Commercial-size kitchen and two dining rooms" },
          ]}
        />
        <p className="text-sm text-zinc-500">
          Accommodation and facility details quoted from{" "}
          <a
            href="https://sota.vridhamma.org/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            sota.vridhamma.org/about
          </a>
          . Verified 2026-06-26.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Why a Sohna search is really a Delhi and Gurgaon search
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Sohna is a small town, but it sits at the edge of one of the densest
          urban corridors in India. The center is roughly 70 km from New Delhi
          Railway Station, out past the Gurgaon sprawl, in the Aravalli Hills.
          That is the appeal: close enough that someone working in the city can
          actually get there, far enough that the hills do the work of putting a
          wall between you and the noise. Most people typing the Sohna name into
          a search box are not from Sohna at all; they are from the surrounding
          metro, and this is the nearest center that runs the standard course on
          a predictable monthly cadence.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The cadence is the practical part. Courses start the 1st and 3rd
          Wednesday of every month, run bilingually in Hindi and English, and
          fill up, so applying early for a confirmed seat matters. If the dates
          at Sohna do not line up with your life, the same course runs at other
          centers in the region, and the{" "}
          <a
            href="https://www.dhamma.org/en/locations/directory"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            dhamma.org directory
          </a>{" "}
          will show you which ones.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The practical facts, in one place
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          If you came to confirm the basics before applying, this is the lookup
          table. Every row traces to the center&apos;s own site.
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <table className="w-full text-left text-sm">
            <tbody>
              {referenceRows.map((row, i) => (
                <tr
                  key={row.k}
                  className={i % 2 === 0 ? "bg-white" : "bg-zinc-50"}
                >
                  <th
                    scope="row"
                    className="align-top whitespace-nowrap px-5 py-4 font-semibold text-zinc-900 w-44 border-b border-zinc-100"
                  >
                    {row.k}
                  </th>
                  <td className="px-5 py-4 text-zinc-700 border-b border-zinc-100 leading-relaxed">
                    {row.v}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          Location, capacity, accommodation, schedule, and operator from the
          center&apos;s official pages (
          <a
            href="https://sota.dhamma.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            sota.dhamma.org
          </a>{" "}
          and{" "}
          <a
            href="https://sota.vridhamma.org/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            sota.vridhamma.org/about
          </a>
          ). Verified 2026-06-26.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          A note from someone who has never sat in Sohna
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          I should be clear about where I stand. I have sat six 10-day courses,
          all of them at centers in California: Dhammamanda in NorCal, CYO in the
          Bay Area, and North Fork in Central California. I have never been to
          Dhamma Sota, so I cannot tell you what the Aravalli mornings feel like
          or how the hall holds silence with the hills around it. The center&apos;s
          own pages describe the grounds better than I can.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          What I can say is that the course inside that center runs on the same
          fixed schedule and the same archived material as the rough rented camp
          where I sat my first one. The single rooms change the texture of the
          experience. The 10 days do not. If you are searching for Vipassana in
          Sohna because you live in or near Delhi and a center with private rooms
          a short drive into the hills finally makes it feel possible, that is a
          real advantage of this particular place, not a compromise.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          I am not a teacher, just a fellow practitioner who got curious about
          the centers. For anything about how to actually practice, the canonical
          answers live with the assistant teacher at the center and at{" "}
          <a
            href="https://www.dhamma.org/en/about/code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            dhamma.org
          </a>
          .
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          section="guide-sohna-footer"
          heading="Sitting at Sohna and thinking about what comes after?"
          description="If you want to talk through applying, or what keeping a daily practice looks like once you are back in the city, grab a slot. Peer to peer, not teacher to student."
        />
      </section>

      <section id="faq" className="max-w-3xl mx-auto px-6 pt-12">
        <FaqSection
          heading="FAQ: Vipassana in Sohna and Dhamma Sota"
          items={faqs}
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-8 pb-16">
        <RelatedPostsGrid
          subtitle="Related"
          title="Before you apply"
          posts={relatedPosts}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="guide-sohna-sticky"
        description="Questions about applying to Sohna or a center near you? Book a quick chat."
      />
    </article>
  );
}
