import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  AnimatedBeam,
  BeforeAfter,
  ShineBorder,
  TextShimmer,
  NumberTicker,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/patna-vipassana";
const PUBLISHED = "2026-06-23";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Patna Vipassana (Dhamma Patliputta): the center that is a city park, not a remote retreat",
  description:
    "The Vipassana center in Patna is Dhamma Patliputta, inside Buddha Smriti Park next to Patna Junction. Free 10-day donation-based courses, 75 students, register at patliputta.dhamma.org. The part no overview page connects: a state government corporation (BUIDCO) built it inside a public park the Dalai Lama opened in 2010, in the old capital of Ashoka's empire.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Patna Vipassana: Dhamma Patliputta sits inside a public city park, not a rural retreat",
    description:
      "Dhamma Patliputta in Patna is one of the few Goenka-tradition centers built by a state government inside a public park, opposite the railway junction, in ancient Pataliputra. Direct registration and cost answers plus the context the overview pages skip.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patna Vipassana (Dhamma Patliputta): the urban center explained",
    description:
      "Free 10-day donation-based courses inside Buddha Smriti Park, opposite Patna Junction. Built by BUIDCO, opened for courses 3 July 2018, in the old capital of Ashoka's empire.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Patna Vipassana" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Patna Vipassana", url: PAGE_URL },
];

const referenceRows: { k: string; v: React.ReactNode }[] = [
  { k: "Center name", v: "Dhamma Patliputta, the Patna Vipassana Meditation Centre" },
  {
    k: "Meaning",
    v: "Patliputta is the Pali form of Pataliputra, the ancient name of Patna",
  },
  {
    k: "Location",
    v: "Meditation Block, Buddha Smriti Park, next to Patna Junction, Patna, Bihar, India",
  },
  {
    k: "Builder",
    v: "Constructed by the Bihar Urban Infrastructure Development Corporation Ltd (BUIDCO)",
  },
  {
    k: "Opened for courses",
    v: "Offered to the public from 3 July 2018",
  },
  {
    k: "Capacity",
    v: "75 students for a residential 10-day course",
  },
  {
    k: "Facility",
    v: "Fully air-conditioned: meditation hall, rooms, dining room, kitchen, office",
  },
  {
    k: "Tradition",
    v: "Vipassana as taught by S.N. Goenka in the tradition of Sayagyi U Ba Khin",
  },
  {
    k: "Cost",
    v: "Free. Run on a donation basis; donations come only from people who have completed a course",
  },
  {
    k: "Operator",
    v: "Patliputra Vipassana Trust organizes the regular courses",
  },
];

const faqs: FaqItem[] = [
  {
    q: "What is the Vipassana center in Patna?",
    a: "It is Dhamma Patliputta, the Patna Vipassana Meditation Centre. It sits inside Buddha Smriti Park, right next to Patna Junction railway station, in Patna, Bihar. It teaches Vipassana in the tradition of S.N. Goenka and Sayagyi U Ba Khin, and it offers the standard free, donation-based 10-day residential course. The official site is patliputta.dhamma.org.",
  },
  {
    q: "How do I register for a course at the Patna Vipassana center?",
    a: "You apply online for a specific dated course through the center's own portal at patliputta.dhamma.org (course info and registration pages), or through the global course finder at dhamma.org. The center can host 75 students per 10-day course, so places are limited and you wait for a confirmation rather than dropping in. There is no fee at the application stage; the course itself is free.",
  },
  {
    q: "Is the Patna course free?",
    a: "Yes. Like every center in this tradition, Dhamma Patliputta charges nothing for the teaching, food, or lodging. It runs entirely on donations, and donations are accepted only from people who have already completed at least one 10-day course. So a first-time student is supported by the giving of people who sat before them. For the reasoning behind that model, see our page on free meditation retreats.",
  },
  {
    q: "What makes the Patna center different from most Vipassana centers?",
    a: "Most centers in this tradition are rural: long stretches of farmland, hills, quiet land bought and built up over years by trusts. Dhamma Patliputta is the opposite. It is an urban center inside a public city park, Buddha Smriti Park, built by a state government corporation (BUIDCO) and opened for courses in July 2018. It is a fully air-conditioned block, steps from the main railway junction, in the heart of a city of two million people.",
  },
  {
    q: "Where exactly is Dhamma Patliputta and how do people get there?",
    a: "The address is Meditation Block, Buddha Smriti Park, next to Patna Junction, Patna, Bihar. Patna Junction is the nearest railway station and is directly opposite the park, so most people arrive by train and walk or take a short ride. Jayaprakash Narayan Airport in Patna is roughly 30 minutes away by road. The center's own site lists current contact numbers and the exact gate to use.",
  },
  {
    q: "Why is the center named Dhamma Patliputta?",
    a: "Patliputta is the Pali spelling of Pataliputra, the ancient name of Patna. Pataliputra was the capital of the Mauryan empire under Emperor Ashoka, who, by tradition, convened a Buddhist council there and sent teachers outward across Asia. Naming the center Dhamma Patliputta places a modern 10-day course inside that old name, in the city the teaching once radiated from.",
  },
  {
    q: "Can this page or site teach me the technique before I go?",
    a: "No, and that is deliberate. In this tradition the technique is only transmitted inside a 10-day residential course by an authorized assistant teacher. I am a fellow practitioner sharing history, logistics, and context, not a teacher. For anything operational, how to sit or how to work with a difficulty, the canonical sources are the assistant teacher at the center and dhamma.org.",
  },
];

const relatedPosts = [
  {
    title: "Igatpuri Vipassana (Dhamma Giri): the source node of the network",
    href: "/t/igatpuri-vipassana",
    excerpt:
      "The worldwide headquarters of the tradition and the research institute that digitized the entire Pali canon. A useful contrast to Patna's urban center.",
    tag: "Guide",
  },
  {
    title: "10-day course structure: the daily clock and the 10-day arc",
    href: "/t/10-day-course-structure",
    excerpt:
      "The fixed schedule a Dhamma Patliputta course runs on is the same one used at every center worldwide. Read from the Code of Discipline and six personal courses.",
    tag: "Reference",
  },
  {
    title: "Finding a retreat: how to use the dhamma.org course finder",
    href: "/guide/find-a-retreat",
    excerpt:
      "If Patna is not near you, here is how to find the same course at a center anywhere in the world, on the same schedule and the same material.",
    tag: "Guide",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Patna Vipassana (Dhamma Patliputta): the center that is a city park, not a remote retreat",
    description:
      "Dhamma Patliputta in Patna is the Goenka-tradition Vipassana center inside Buddha Smriti Park, next to Patna Junction. Free 10-day donation-based courses for 75 students. Built by the Bihar Urban Infrastructure Development Corporation and opened for courses in July 2018, in the old capital of Ashoka's empire. Direct registration and cost answers plus the context overview pages skip.",
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
          Patna, Bihar
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
          Patna Vipassana is{" "}
          <TextShimmer className="text-teal-700">Dhamma Patliputta</TextShimmer>,
          and it is a city park, not a remote retreat
        </h1>
        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          Almost every Vipassana center you read about is rural: farmland, a
          hill, quiet land a trust bought and built up over decades. The center
          in Patna breaks that mold. It sits inside a public city park, steps
          from the main railway junction, and it was put up by a state
          government corporation. Here is the literal answer to where it is and
          how to join, and then the part the overview pages never connect.
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
            Direct answer (verified 2026-06-23)
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            The Vipassana center in Patna is{" "}
            <strong>Dhamma Patliputta</strong>, the Patna Vipassana Meditation
            Centre. It is located in the{" "}
            <strong>
              Meditation Block of Buddha Smriti Park, next to Patna Junction
            </strong>{" "}
            in Patna, Bihar. It runs the standard{" "}
            <strong>free, donation-based 10-day residential course</strong> in
            the tradition of S.N. Goenka, and can host{" "}
            <strong>75 students</strong> per course. You apply online for a
            specific dated course at{" "}
            <a
              href="https://patliputta.dhamma.org/en/course-info/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              patliputta.dhamma.org
            </a>
            . The reason this particular center is unlike most others is below.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Most centers are countryside. This one is a downtown block.
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          When people picture a Vipassana center they picture the rural ones,
          and for good reason: that is what most of them are. Even elsewhere in
          Bihar, the nearby center Dhamma Licchavi sits among fields and fruit
          trees, about 12 km outside Muzaffarpur. Dhamma Patliputta is the
          inversion of that image. The toggle below is the honest contrast
          between the typical center and the one in Patna.
        </p>

        <div className="mt-8">
          <BeforeAfter
            title="The usual center vs. Dhamma Patliputta"
            before={{
              label: "The usual rural center",
              content:
                "A trust acquires quiet land over years and builds it up. You travel out of the city, often by a long road, to reach it. The isolation is part of the point.",
              highlights: [
                "Countryside or hillside setting",
                "Land bought and developed by a Vipassana trust",
                "A journey away from the nearest city and station",
              ],
            }}
            after={{
              label: "Dhamma Patliputta, Patna",
              content:
                "A fully air-conditioned block inside a public city park, built by a state government corporation, opposite the main railway junction in a city of two million.",
              highlights: [
                "Inside Buddha Smriti Park, in the city center",
                "Built by the Bihar Urban Infrastructure Development Corporation",
                "Next to Patna Junction; airport about 30 minutes away",
              ],
            }}
          />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The anchor fact: a state government built it, inside a park it opened
          in 2010
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Here is the detail that the schedule pages and the travel writeups
          both leave out. The Patna center is not a trust-built retreat that
          happens to be in a city. The building itself was constructed by the{" "}
          <strong>Bihar Urban Infrastructure Development Corporation Ltd</strong>{" "}
          (BUIDCO), a state government body, and offered for courses from{" "}
          <strong>3 July 2018</strong>. It sits inside Buddha Smriti Park, which
          the Bihar government developed and the Dalai Lama inaugurated on 27
          May 2010 to mark the Buddha&apos;s birth anniversary. So the venue and
          the host park are both public, government works. The Patliputra
          Vipassana Trust runs the courses inside a facility the state put up.
        </p>

        <div className="mt-8">
          <ShineBorder
            borderRadius={16}
            borderWidth={1}
            color={["#14b8a6", "#06b6d4"]}
            className="w-full bg-white p-7"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
              What the state actually built
            </p>
            <div className="mt-5 grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-semibold text-zinc-900">
                  <NumberTicker value={75} />
                </div>
                <p className="mt-1 text-sm text-zinc-500">
                  students per 10-day course
                </p>
              </div>
              <div>
                <div className="text-3xl font-semibold text-zinc-900">
                  <NumberTicker value={2018} />
                </div>
                <p className="mt-1 text-sm text-zinc-500">
                  offered to the public from 3 July
                </p>
              </div>
              <div>
                <div className="text-3xl font-semibold text-zinc-900">
                  <NumberTicker value={2010} />
                </div>
                <p className="mt-1 text-sm text-zinc-500">
                  park opened by the Dalai Lama
                </p>
              </div>
            </div>
            <p className="mt-6 text-zinc-700 leading-relaxed">
              A fully air-conditioned meditation hall, residential rooms, a
              dining room, kitchen, and office, all inside the Meditation Block
              of a public park, next to Patna Junction. Few centers in this
              tradition anywhere were built this way.
            </p>
            <p className="mt-4 text-sm text-zinc-500">
              Sources:{" "}
              <a
                href="https://patliputta.vridhamma.org/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 underline hover:text-teal-900"
              >
                patliputta.vridhamma.org/about
              </a>
              ,{" "}
              <a
                href="https://patliputta.dhamma.org/en/the-centre/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 underline hover:text-teal-900"
              >
                patliputta.dhamma.org/en/the-centre
              </a>
              , and the Dalai Lama&apos;s office on the{" "}
              <a
                href="https://www.dalailama.com/news/2010/dalai-lama-inaugurates-buddha-park"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 underline hover:text-teal-900"
              >
                2010 park inauguration
              </a>
              . Verified 2026-06-23.
            </p>
          </ShineBorder>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The name carries the city&apos;s oldest claim
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Patliputta is the Pali spelling of Pataliputra, the ancient name of
          Patna. Pataliputra was the capital of the Mauryan empire under Emperor
          Ashoka in the third century BCE. By the traditional account, it was
          from this city that Ashoka sent teachers outward, carrying the
          teaching toward Sri Lanka and beyond. Whatever the exact history,
          Patna is unusual among center towns: the place itself is woven into
          how the teaching spread across Asia. The diagram is the rough shape of
          that old radiation, with the modern center sitting on the same ground.
        </p>

        <div className="mt-8">
          <AnimatedBeam
            title="Pataliputra as a point the teaching once spread from"
            from={[
              { label: "Ashoka's court", sublabel: "Mauryan capital" },
              { label: "Council tradition", sublabel: "3rd century BCE" },
              { label: "Teachers sent out", sublabel: "by the old account" },
            ]}
            hub={{ label: "Pataliputra", sublabel: "now Patna" }}
            to={[
              { label: "Sri Lanka", sublabel: "and southward" },
              { label: "The wider region", sublabel: "across Asia" },
              { label: "Dhamma Patliputta", sublabel: "the center today" },
            ]}
          />
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          Historical context on Pataliputra and Ashoka is widely documented; see{" "}
          <a
            href="https://en.wikipedia.org/wiki/Pataliputra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            the Pataliputra overview
          </a>
          . The diagram is illustrative, not a precise itinerary.
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
          Capacity, builder, location, and opening date from the center&apos;s
          official pages (
          <a
            href="https://patliputta.dhamma.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            patliputta.dhamma.org
          </a>{" "}
          and{" "}
          <a
            href="https://patliputta.vridhamma.org/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            patliputta.vridhamma.org/about
          </a>
          ). Verified 2026-06-23.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          A note from someone who has never sat in Patna
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          I should be clear about where I stand. I have sat six 10-day courses,
          all of them at centers in California: Dhammamanda in NorCal, CYO in
          the Bay Area, and North Fork in Central California. I have never been
          to Patna, so I cannot tell you what the hall feels like or how a city
          center holds noble silence with trains passing nearby. The travel
          pages can describe the park better than I can.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          What I can say is that the course inside that air-conditioned block
          runs on the same fixed schedule and the same archived material as the
          rough rented camp where I sat my first one. The setting changes a lot.
          The 10 days do not. If you are searching for Patna Vipassana because
          you live in or near the city and a downtown center finally makes the
          logistics possible, that is a real advantage of this particular place,
          not a compromise. The course is the course, wherever you sit it.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          I am not a teacher, just a fellow practitioner who got curious about
          the centers. For anything about how to actually practice, the
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
          section="guide-patna-footer"
          heading="Sitting in Patna and thinking about what comes after?"
          description="If you want to talk through applying, or what keeping a daily practice looks like once you are back in the city, grab a slot. Peer to peer, not teacher to student."
        />
      </section>

      <section id="faq" className="max-w-3xl mx-auto px-6 pt-12">
        <FaqSection
          heading="FAQ: Patna Vipassana and Dhamma Patliputta"
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
        section="guide-patna-sticky"
        description="Questions about applying to Patna or a center near you? Book a quick chat."
      />
    </article>
  );
}
