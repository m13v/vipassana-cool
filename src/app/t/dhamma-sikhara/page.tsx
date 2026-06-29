import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ProofBanner,
  ComparisonTable,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type ComparisonRow,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/dhamma-sikhara";
const PUBLISHED = "2026-06-29";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Dhamma Sikhara: the Vipassana center named after the peak it sits on (Dharamkot, above McLeodganj)",
  description:
    "Dhamma Sikhara is the Himachal Vipassana Centre in Dharamkot, above McLeodganj (Upper Dharamshala), at about 2,000m in 3 acres of deodar cedar forest. Free, donation-based 10-day Goenka-tradition courses; register at sikhara.dhamma.org. The part the overview pages skip: \"sikhara\" is the same word as the temple spire, it literally means mountain peak, and the center sits on a real peak directly above the Dalai Lama's town.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Dhamma Sikhara: the center whose name literally means \"mountain peak\"",
    description:
      "The Himachal Vipassana Centre in Dharamkot sits at ~2,000m above McLeodganj. Most pages translate \"Sikhara\" as \"Peak of Dhamma\" and stop. The word is the same one used for the temple spire that stands for a sacred mountain, and the center sits on a real peak above Little Lhasa.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhamma Sikhara (Dharamkot Vipassana center) explained",
    description:
      "~2,000m, 3 acres of deodar forest, above McLeodganj. And the part overview pages skip: the name is the temple-spire word for a sacred mountain, on a literal peak above the Dalai Lama's town.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Dhamma Sikhara" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Dhamma Sikhara", url: PAGE_URL },
];

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Setting",
    competitor: "Usually a walled campus on a plain or low hill",
    ours: "3 acres of deodar cedar forest on a Himalayan ridge",
  },
  {
    feature: "Elevation",
    competitor: "Often a few hundred meters",
    ours: "About 2,000m, in the Dhauladhar range",
  },
  {
    feature: "Getting to the gate",
    competitor: "Taxi or bus straight to the entrance",
    ours: "Taxi, auto-rickshaw, or a steep 1.5km uphill walk from McLeodganj",
  },
  {
    feature: "What is next door",
    competitor: "Farmland, a town, or another retreat",
    ours: "Dharamkot village, and just below it McLeodganj, the Dalai Lama's town",
  },
  {
    feature: "Climate to plan around",
    competitor: "Heat is the usual concern",
    ours: "Mountain cold and altitude; pack warm layers even in the warmer months",
  },
];

const referenceRows: { k: string; v: React.ReactNode }[] = [
  {
    k: "Full name",
    v: "Dhamma Sikhara, the Himachal Vipassana Centre",
  },
  {
    k: "Meaning",
    v: "“Sikhara” means “mountain peak”; the center renders it “Peak of Dhamma”",
  },
  {
    k: "Location",
    v: "Adjacent to Dharamkot village, above McLeodganj (Upper Dharamshala), Himachal Pradesh, India",
  },
  {
    k: "Elevation",
    v: "About 2,000m in the Dhauladhar range of the Himalayas",
  },
  {
    k: "Land",
    v: "Three acres of deodar cedar forest",
  },
  {
    k: "Tradition",
    v: "Vipassana as taught by S.N. Goenka in the tradition of Sayagyi U Ba Khin (a Burmese lineage)",
  },
  {
    k: "Flagship course",
    v: "The 10-day residential course; shorter and longer courses appear on the calendar too",
  },
  {
    k: "Cost",
    v: "Free. Run on donations, accepted only from people who have completed a course",
  },
  {
    k: "Getting there",
    v: "Taxi, auto-rickshaw, or a steep 1.5km uphill walk from the McLeodganj main square",
  },
  {
    k: "Register",
    v: "Apply for a dated course at sikhara.dhamma.org (no phone or email bookings)",
  },
];

const faqs: FaqItem[] = [
  {
    q: "What is Dhamma Sikhara?",
    a: "Dhamma Sikhara is the Himachal Vipassana Centre, a meditation center in the tradition of S.N. Goenka. It sits adjacent to Dharamkot village, above McLeodganj (Upper Dharamshala) in Himachal Pradesh, India, on about three acres of deodar cedar forest at roughly 2,000m in the Dhauladhar range. It runs free, donation-based 10-day residential courses. The official site is sikhara.dhamma.org.",
  },
  {
    q: "What does the name Dhamma Sikhara mean?",
    a: "The center translates it as “Peak of Dhamma.” The word “sikhara” (Sanskrit śikhara, शिखर) literally means “mountain peak” or “summit.” It is the same word used in North Indian temple architecture for the spire that rises over the inner sanctum, a form built to look like a mountain and to stand for Mount Meru. So the name is doubly literal: the center sits on a real Himalayan peak, and the word itself already carries the image of a sacred mountain.",
  },
  {
    q: "Where exactly is Dhamma Sikhara and how do you get there?",
    a: "It is adjacent to Dharamkot village, just above McLeodganj, which is the upper part of Dharamshala in Himachal Pradesh. From the McLeodganj main square you reach it by taxi, by auto-rickshaw, or by a steep uphill walk of about 1.5km. There is no drop-in option; you come for a specific dated course.",
  },
  {
    q: "Is Dhamma Sikhara connected to the Dalai Lama or Tibetan Buddhism?",
    a: "Not in lineage. Dhamma Sikhara teaches Vipassana in the Burmese tradition of S.N. Goenka and Sayagyi U Ba Khin, which is separate from Tibetan Buddhism. What is striking is the geography: the center sits on the ridge directly above McLeodganj, often called “Little Lhasa,” which is the residence of the 14th Dalai Lama and the seat of the Tibetan government-in-exile. So a Burmese-lineage center sits on a peak above the best-known center of Tibetan Buddhism in the world.",
  },
  {
    q: "How much does a course at Dhamma Sikhara cost?",
    a: "Nothing. Like every center in this tradition, Dhamma Sikhara charges no fee for the teaching, the food, or the lodging. It runs entirely on donations, and donations are accepted only from students who have already completed at least one full 10-day course. A first-time student's course is paid for by people who sat before them.",
  },
  {
    q: "When do courses run, and what should I plan for the altitude?",
    a: "Dated courses are listed on the official calendar at sikhara.dhamma.org and the global finder at dhamma.org. The honest planning note is altitude and cold: at around 2,000m in the Himalayas the air is thinner and nights get cold, so warm layers matter even outside the deep winter. Check the live schedule for the exact dates a given course runs, since the calendar changes year to year.",
  },
  {
    q: "Can this page teach me the technique before I arrive?",
    a: "No, and that is on purpose. In this tradition the technique is only transmitted inside a 10-day residential course by an authorized assistant teacher. I am a fellow practitioner sharing history, language, and logistics, not a teacher. For anything operational, how to sit or how to work with a difficulty, the canonical sources are the assistant teacher at the center and dhamma.org.",
  },
];

const relatedPosts = [
  {
    title:
      "Dhamma Mahavana: the California forest where the English discourses were filmed",
    href: "/t/dhamma-mahavana",
    excerpt:
      "Another center read for its history rather than its brochure. If Sikhara is the peak above Little Lhasa, North Fork is the hill where the English evening discourses were recorded.",
    tag: "Reference",
  },
  {
    title: "10-day Vipassana course structure: the daily clock and the arc",
    href: "/t/10-day-course-structure",
    excerpt:
      "The fixed daily schedule a Dhamma Sikhara course runs on is the same one used at every center worldwide. Here is the shape of it, read from the Code of Discipline and six personal courses.",
    tag: "Reference",
  },
  {
    title: "Finding a retreat: how to use the dhamma.org course finder",
    href: "/guide/find-a-retreat",
    excerpt:
      "If the Himalayas are too far, here is how to find the identical course at a center near you, anywhere in the world.",
    tag: "Guide",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Dhamma Sikhara: the Vipassana center named after the peak it sits on",
    description:
      "Dhamma Sikhara is the Himachal Vipassana Centre in Dharamkot, above McLeodganj, at about 2,000m in 3 acres of deodar cedar forest. Free, donation-based 10-day Goenka-tradition courses. The word sikhara means mountain peak, the same word used for the temple spire that stands for a sacred mountain, and the center sits on a real peak above the Dalai Lama's town.",
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
          Dharamkot, Himachal Pradesh
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
          Dhamma Sikhara is named after the peak it sits on
        </h1>
        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          Almost every page about this center translates the name as
          &ldquo;Peak of Dhamma&rdquo; and moves on to acreage and directions.
          That translation is right, but it is the shallow end of the word.
          &ldquo;Sikhara&rdquo; is the same word builders use for the spire over
          a temple sanctum, the one shaped like a mountain. The center carries it
          honestly: it sits on a real Himalayan peak, in a forest, on the ridge
          directly above the Dalai Lama&apos;s town.
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
            Direct answer (verified 2026-06-29)
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            <strong>Dhamma Sikhara</strong> is the{" "}
            <strong>Himachal Vipassana Centre</strong>, a meditation center in
            the tradition of S.N. Goenka. It sits adjacent to{" "}
            <strong>Dharamkot village, above McLeodganj</strong> (Upper
            Dharamshala) in Himachal Pradesh, India, on about{" "}
            <strong>three acres of deodar cedar forest</strong> at roughly{" "}
            <strong>2,000m</strong> in the Dhauladhar range. It runs the free,
            donation-based <strong>10-day residential course</strong>; you apply
            for a dated course at{" "}
            <a
              href="https://sikhara.dhamma.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              sikhara.dhamma.org
            </a>
            . Why the name is worth a second look is below.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The word most pages translate and then drop
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Take the name apart. &ldquo;Dhamma&rdquo; is the teaching, the law of
          nature the tradition points at. &ldquo;Sikhara&rdquo; is where it gets
          interesting. In Sanskrit, <em>&#347;ikhara</em> (
          <span lang="hi">&#2358;&#2367;&#2326;&#2352;</span>) means
          &ldquo;mountain peak&rdquo; or &ldquo;summit.&rdquo; The same word
          names something built, not just something natural: in North Indian
          temple architecture, the <em>shikhara</em> is the tall curved tower
          that rises over the inner sanctum. It is deliberately shaped like a
          mountain, and it stands for Mount Meru, the axis of the world in that
          cosmology. The spire is a mountain made on purpose, set over the most
          sacred room in the building.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          So &ldquo;Peak of Dhamma&rdquo; is a fair gloss, but the word is
          richer than the gloss. It already carries the idea of a sacred summit
          before you ever look at a map. Then you look at the map, and the center
          is sitting on an actual Himalayan peak, in a deodar forest, at about
          2,000m. The name is not poetic shorthand stretched over a flat
          campus. It is literal twice over: the word means a peak, and the place
          is one.
        </p>
        <p className="mt-4 text-sm text-zinc-500">
          Etymology and architectural meaning from{" "}
          <a
            href="https://en.wikipedia.org/wiki/Shikhara"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            the Shikhara entry
          </a>
          ; center facts from{" "}
          <a
            href="https://sikhara.dhamma.org/en/the-centre/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            the center&apos;s own page
          </a>
          . Verified 2026-06-29.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-8">
        <ProofBanner
          metric="śikhara"
          quote="The word for the temple spire and the word for a mountain summit are the same word. Dhamma Sikhara takes a name that already means a sacred peak and then sits on one, at about 2,000m in the Dhauladhar range."
          source="Etymology: en.wikipedia.org/wiki/Shikhara. Location: sikhara.dhamma.org. Verified 2026-06-29."
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-10">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The peak above Little Lhasa
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Here is the part the overview pages and travel writeups never quite
          say out loud. Walk a steep 1.5km uphill from the McLeodganj main
          square and you are at Dharamkot, with the center on the ridge above
          the village. Walk the other way, downhill, and you are in McLeodganj
          itself, the upper part of Dharamshala that people call &ldquo;Little
          Lhasa.&rdquo; That town is the residence of the 14th Dalai Lama and the
          seat of the Tibetan government-in-exile, settled there in 1960.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          So you have two distinct streams of Buddhist practice stacked on one
          hillside. Down in the town: Tibetan Mahayana, monasteries, the
          Tsuglagkhang complex, the most visible center of Tibetan Buddhism
          outside Tibet. Up on the peak: Dhamma Sikhara, teaching Vipassana in
          the Burmese tradition of Sayagyi U Ba Khin and S.N. Goenka, which is a
          separate lineage entirely. They are not the same school, and the
          center is not a Tibetan institution. But the geography is its own
          quiet comment: the &ldquo;peak&rdquo; in the name is also the high
          ground over the world capital of a different tradition.
        </p>
        <p className="mt-4 text-sm text-zinc-500">
          McLeodganj, the Dalai Lama, and the 1960 settlement from{" "}
          <a
            href="https://en.wikipedia.org/wiki/McLeod_Ganj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            the McLeod Ganj entry
          </a>
          . Verified 2026-06-29.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          What sitting on a peak actually changes
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The course you sit at Dhamma Sikhara is the same course taught at every
          center in this tradition. The teaching, the schedule, the discipline:
          identical. What the location changes is everything around the cushion,
          and that is worth knowing before you apply, especially if you are
          choosing between a Himalayan center and one closer to the plains.
        </p>
        <ComparisonTable
          className="mt-6"
          productName="Dhamma Sikhara"
          competitorName="A typical lowland center"
          rows={comparisonRows}
          caveat="The course itself is the same everywhere. These differences are about the setting and the logistics, not the teaching."
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The practical facts, in one place
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          If you came here to confirm the basics before applying, this is the
          lookup table. Every row traces to the center&apos;s own site or to the
          tradition&apos;s materials.
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
          Location, elevation, and forest from{" "}
          <a
            href="https://sikhara.dhamma.org/en/the-centre/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            The Centre
          </a>{" "}
          page; dated courses on{" "}
          <a
            href="https://schedule.vridhamma.org/courses/sikhara"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            the official schedule
          </a>
          . Verified 2026-06-29.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          A note from someone who has sat the course
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          I should say where I stand. I have sat six 10-day courses, all of them
          at centers in California, not at Sikhara. So I cannot tell you what the
          deodar forest at 2,000m smells like at 4am. What I can tell you is that
          the course you would sit there is the one I know: the same daily clock,
          the same noble silence, the same arc. The mountain does not change the
          method. It changes the walk to the hall and the temperature of the
          night air, and for some people that setting is exactly the reason they
          choose it.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          I am not a teacher, just a fellow practitioner who got curious about
          where a name came from and where a place sits. For anything about how
          to actually practice, how to sit or how to work with a difficulty, the
          canonical answers live with the assistant teacher at the center and at{" "}
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
          section="guide-dhamma-sikhara-footer"
          heading="Weighing a Himalayan center against one closer to home?"
          description="If you want to talk through Sikhara versus a center near you, or what keeping a daily practice looks like after a course, grab a slot. Peer to peer, not teacher to student."
        />
      </section>

      <section id="faq" className="max-w-3xl mx-auto px-6 pt-12">
        <FaqSection
          heading="FAQ: Dhamma Sikhara, the Himachal Vipassana Centre"
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
        section="guide-dhamma-sikhara-sticky"
        description="Questions about Dhamma Sikhara or choosing a center? Book a quick chat."
      />
    </article>
  );
}
