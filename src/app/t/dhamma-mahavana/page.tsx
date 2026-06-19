import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ProofBanner,
  StepTimeline,
  MetricsRow,
  TextShimmer,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/dhamma-mahavana";
const PUBLISHED = "2026-06-19";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Dhamma Mahavana (California Vipassana Center): the forest where Goenka's English discourses were filmed",
  description:
    "Dhamma Mahavana is the California Vipassana Center in North Fork, the oldest Vipassana center in California, on 109 acres of Sierra Nevada foothill forest. Mahavana is Pali for \"great woods.\" Free, donation-based 10-day courses; register at mahavana.dhamma.org. The part no overview page mentions: the English evening discourses now played at courses worldwide were videotaped here at an August 1991 course of 100 students.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Dhamma Mahavana: the California forest where the English discourses were recorded",
    description:
      "The California Vipassana Center in North Fork is California's oldest center, on 109 acres of forest. Goenka named it from India before he saw it, and the English discourses used worldwide were filmed here in August 1991. Direct facts plus the origin story the overview pages skip.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhamma Mahavana (California Vipassana Center) explained",
    description:
      "Founded 1991, 109 acres, Pali for 'great woods.' And the uncopyable part: the English discourses played at courses worldwide were videotaped on this hill.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Dhamma Mahavana" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Dhamma Mahavana", url: PAGE_URL },
];

const metrics = [
  { value: 1991, label: "Year founded (oldest center in CA)" },
  { value: 109, suffix: " acres", label: "Forested land in North Fork" },
  { value: 100, label: "Students at the Aug 1991 discourse course" },
  { value: 127, label: "Max students per course today" },
];

const timelineSteps = [
  {
    title: "January 1991: the land is bought, already named",
    description:
      "The property in North Fork was purchased in January 1991. Goenkaji had already given it the name Dhamma Mahavana while he was still in India, before he ever visited. It began as roughly 6 acres with about 15,000 square feet of existing structures.",
  },
  {
    title: "March 1991: it officially becomes a center",
    description:
      "Within a couple of months the site formally became a Vipassana center, the first one established in California.",
  },
  {
    title: "April 25, 1991: the first 10-day course",
    description:
      "The very first 10-day residential course ran here with 36 students. Everything the center is now grew from that first sitting.",
  },
  {
    title: "August 1991: the English discourses are filmed",
    description:
      "At a course of 100 students that August, Goenkaji's English evening discourses were videotaped. Those are the recordings now used at English-language courses around the world. This is the anchor fact of this whole page.",
  },
  {
    title: "2011: the meditation cell building opens",
    description:
      "A dedicated building of individual meditation cells became operational, giving experienced students a private place to sit during longer courses.",
  },
  {
    title: "October 2016: the zedi goes up",
    description:
      "A large fiberglass zedi (pagoda), modeled on Myanmar's Shwedagon and surrounded by eight smaller zedis, was installed atop the cell building. It commemorates the tradition's debt to Myanmar and to Sayagyi U Ba Khin.",
  },
];

const referenceRows: { k: string; v: React.ReactNode }[] = [
  {
    k: "Center name",
    v: "Dhamma Mahavana, also called the California Vipassana Center (CVC)",
  },
  {
    k: "Meaning",
    v: "“Mahavana” is Pali for “great woods” or “great forest”",
  },
  {
    k: "Founded",
    v: "1991, the oldest Vipassana center in California",
  },
  {
    k: "Location",
    v: "North Fork, California, in the Sierra Nevada foothills at about 2,800 feet elevation, roughly 30 minutes south of Yosemite",
  },
  {
    k: "Land",
    v: "About 109 acres of oak, pine, cedar, and manzanita forest",
  },
  {
    k: "Distance",
    v: "Around 4 hours from the San Francisco Bay Area and 5 hours from Los Angeles",
  },
  {
    k: "Capacity",
    v: "Up to 127 students per course; the meditation hall seats 128",
  },
  {
    k: "Flagship course",
    v: "The 10-day residential Vipassana course",
  },
  {
    k: "Cost",
    v: "Free. Run entirely on donations, accepted only from people who have completed at least one course",
  },
];

const faqs: FaqItem[] = [
  {
    q: "What is Dhamma Mahavana?",
    a: "Dhamma Mahavana is the California Vipassana Center (CVC), a Goenka-tradition Vipassana meditation center in North Fork, California. It sits on about 109 acres of forest in the Sierra Nevada foothills and was founded in 1991, making it the oldest Vipassana center in the state. It runs free, donation-based 10-day residential courses. The official site is mahavana.dhamma.org.",
  },
  {
    q: "What does the name Dhamma Mahavana mean?",
    a: "The Vipassana Research Institute states plainly that “the name Mahavana means large or great woods.” It is a Pali name, and it fits the property, which is a forest of pine, oak, cedar, and manzanita. Goenkaji chose the name from India before he had ever visited the land.",
  },
  {
    q: "Is it true the English discourses were recorded at Dhamma Mahavana?",
    a: "Yes. According to the Vipassana Research Institute's history of the center, “The English discourses that are now used throughout the world were videotaped at this course,” referring to a course held there in August 1991 with 100 students. So when you sit a 10-day course in English at almost any center on earth, the evening discourse you watch was filmed in this forest in North Fork.",
  },
  {
    q: "How much does a course at Dhamma Mahavana cost?",
    a: "Nothing. Like every center in this tradition, Dhamma Mahavana charges no fee for the teaching, food, or lodging. It runs entirely on donations, and donations are accepted only from students who have already completed at least one full 10-day course. A first-time student's course is paid for by the giving of people who sat before them.",
  },
  {
    q: "How do I register for a course at Dhamma Mahavana?",
    a: "You apply for a specific dated course through the center's official site at mahavana.dhamma.org, or through the global course finder at dhamma.org. There is no drop-in option. The 10-day course is the standard entry point and you commit to the full residential period. Courses fill, so applying early helps.",
  },
  {
    q: "Where is Dhamma Mahavana and how do people get there?",
    a: "It is near the town of North Fork, California, in the Sierra Nevada foothills, roughly 30 minutes south of Yosemite. It is about 4 hours from the San Francisco Bay Area and about 5 hours from Los Angeles. The center's “Getting Here” page at mahavana.dhamma.org lists driving directions and the nearest options; there is no public transit to the gate, so most people drive or arrange a ride.",
  },
  {
    q: "Can this page teach me the technique before I go?",
    a: "No, and that is intentional. In this tradition the technique is only transmitted inside a 10-day residential course by an authorized assistant teacher. I am a fellow practitioner sharing history, logistics, and context, not a teacher. For anything operational, how to sit or how to work with a difficulty, the canonical sources are the assistant teacher at the center and dhamma.org.",
  },
];

const relatedPosts = [
  {
    title: "Igatpuri Vipassana (Dhamma Giri): the source node of the network",
    href: "/t/igatpuri-vipassana",
    excerpt:
      "If North Fork is where the English discourses were filmed, Dhamma Giri in India is where the canon and the archive live. The other end of the same thread.",
    tag: "Reference",
  },
  {
    title: "10-day Vipassana course structure: the daily clock and the arc",
    href: "/t/10-day-course-structure",
    excerpt:
      "The fixed daily schedule a Dhamma Mahavana course runs on, the same one used at every center worldwide, read from the Code of Discipline and six personal courses.",
    tag: "Reference",
  },
  {
    title: "Finding a retreat: how to use the dhamma.org course finder",
    href: "/guide/find-a-retreat",
    excerpt:
      "If North Fork is too far, here is how to find the identical course at a center near you, anywhere in the world.",
    tag: "Guide",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Dhamma Mahavana (California Vipassana Center): the forest where the English discourses were filmed",
    description:
      "Dhamma Mahavana is the California Vipassana Center in North Fork, the oldest Vipassana center in California, on 109 acres of Sierra Nevada foothill forest. Mahavana is Pali for great woods. Free, donation-based 10-day courses. The English evening discourses used worldwide were videotaped here at an August 1991 course of 100 students.",
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
          North Fork, California
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
          Dhamma Mahavana is the forest where the{" "}
          <TextShimmer>English discourses were filmed</TextShimmer>
        </h1>
        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          Most pages about Dhamma Mahavana tell you the acreage, the elevation,
          and how to apply. All true, and all below. But they miss the one thing
          that makes this particular forest different from every other place you
          could sit the same course: the evening discourse you watch in English,
          almost anywhere in the world, was recorded here.
        </p>
      </header>

      <ArticleMeta
        author="Matthew Diakonov"
        authorRole="Written with AI"
        datePublished={PUBLISHED}
        readingTime="7 min read"
      />

      <section className="max-w-3xl mx-auto px-6 pt-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Direct answer (verified 2026-06-19)
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            <strong>Dhamma Mahavana</strong> is the{" "}
            <strong>California Vipassana Center (CVC)</strong>, a Goenka-tradition
            meditation center near North Fork, California, in the Sierra Nevada
            foothills. It sits on about <strong>109 acres</strong> of forest, was
            founded in <strong>1991</strong> (the oldest Vipassana center in
            California), and the name &ldquo;Mahavana&rdquo; is{" "}
            <strong>Pali for &ldquo;great woods&rdquo;</strong>. It runs the free,
            donation-based 10-day residential course; you register at{" "}
            <a
              href="https://mahavana.dhamma.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              mahavana.dhamma.org
            </a>
            . The reason this center is worth a closer look is below.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-10">
        <MetricsRow metrics={metrics} />
        <p className="mt-3 text-sm text-zinc-500">
          Figures from the center&apos;s own pages and the Vipassana Research
          Institute history. Verified 2026-06-19.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The anchor fact most pages never mention
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Here is the part the overview pages, the travel writeups, and the
          &ldquo;what to expect&rdquo; lists all skip. In August 1991, only
          months after the center opened, a 10-day course ran here with 100
          students. At that course, Goenkaji&apos;s English evening discourses
          were videotaped. The Vipassana Research Institute&apos;s own history of
          the center puts it in one sentence:
        </p>

        <blockquote className="mt-6 rounded-2xl border-l-4 border-teal-400 bg-white px-6 py-5 text-zinc-800 shadow-sm">
          <p className="text-lg leading-relaxed">
            &ldquo;The English discourses that are now used throughout the world
            were videotaped at this course.&rdquo;
          </p>
          <footer className="mt-3 text-sm text-zinc-500">
            Vipassana Research Institute,{" "}
            <a
              href="https://www.vridhamma.org/Dhamma-Mahavana-Great-Woods-of-Dhamma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              Dhamma Mahavana: Great Woods of Dhamma
            </a>
            . Verified 2026-06-19.
          </footer>
        </blockquote>

        <p className="mt-6 text-zinc-700 leading-relaxed">
          Sit with what that means for a second. When you do a 10-day course in
          English at a center in Australia, in Spain, in the Bay Area, the
          recorded discourse that plays in the hall each evening was filmed in
          this forest in North Fork, in front of 100 people, in 1991. Most
          people who watch it have no idea where the room was. The room was here.
          Those evening discourses are the same ones the tradition still
          distributes today; you can see the catalog of them at the{" "}
          <a
            href="https://www.vridhamma.org/10-Day-course-Evening-Discourses"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            VRI evening discourses page
          </a>
          .
        </p>
      </section>

      <ProofBanner
        metric="Aug 1991"
        quote="The English discourses played at English-language 10-day courses around the world were recorded at a single course of 100 students, held in this forest in North Fork, California, months after the center opened."
        source="vridhamma.org/Dhamma-Mahavana-Great-Woods-of-Dhamma, verified 2026-06-19."
      />

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          How a forest got named from across the world, then built into a center
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The other detail I love about this place is the order things happened
          in. Goenkaji named it Dhamma Mahavana, &ldquo;great woods,&rdquo; while
          he was still in India, before he had ever stood on the land. Then the
          land turned out to be exactly that: a forest. The timeline below is the
          short version of how a roughly 6-acre property with a few buildings
          became California&apos;s oldest Vipassana center.
        </p>

        <StepTimeline title="" steps={timelineSteps} />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The practical facts, in one place
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          If you came here to confirm the basics before applying, this is the
          lookup table. Every row traces to the center&apos;s own site or to the
          Vipassana Research Institute.
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
                    className="align-top whitespace-nowrap px-5 py-4 font-semibold text-zinc-900 w-40 border-b border-zinc-100"
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
          Location, land, and capacity from the center&apos;s{" "}
          <a
            href="https://mahavana.dhamma.org/the-center/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            The Center
          </a>{" "}
          page; founding and naming history from{" "}
          <a
            href="https://www.vridhamma.org/Dhamma-Mahavana-Great-Woods-of-Dhamma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            the VRI history
          </a>
          . Verified 2026-06-19.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          A note from someone who has sat there
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          I should say where I stand. I have sat six 10-day courses at centers in
          California, and North Fork is one of them. So unlike a lot of pages
          about this place, I can tell you it really is a forest, that the air at
          2,800 feet feels different from the valley below it, and that the walk
          between the hall and the rooms goes through pine and manzanita.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          What got under my skin, though, was learning the discourse fact after
          the fact. I had watched those evening discourses across multiple
          courses before I ever connected that the English ones were recorded in
          the very kind of hall I was sitting in, on this hill, in 1991. It made
          the place feel less like a remote retreat I happened to drive to and
          more like a set that quietly went on to reach the whole
          English-speaking world. If you are choosing between California&apos;s
          centers, that piece of history is the reason North Fork carries a
          weight the newer centers do not.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          I am not a teacher, just a fellow practitioner who got curious about
          where things came from. For anything about how to actually practice,
          the canonical answers live with the assistant teacher at a center and
          at{" "}
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
          section="guide-dhamma-mahavana-footer"
          heading="Deciding which California center to apply to?"
          description="If you want to talk through North Fork versus the other centers, or what keeping a daily practice looks like after a course, grab a slot. Peer to peer, not teacher to student."
        />
      </section>

      <section id="faq" className="max-w-3xl mx-auto px-6 pt-12">
        <FaqSection
          heading="FAQ: Dhamma Mahavana and the California Vipassana Center"
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
        section="guide-dhamma-mahavana-sticky"
        description="Questions about North Fork or another California center? Book a quick chat."
      />
    </article>
  );
}
