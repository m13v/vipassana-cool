import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  AnimatedBeam,
  GlowCard,
  ProofBanner,
  GradientText,
  IntegrationsGrid,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/igatpuri-vipassana";
const PUBLISHED = "2026-06-16";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Igatpuri Vipassana (Dhamma Giri): the source node of the worldwide network, not just a center",
  description:
    "The Vipassana center in Igatpuri is Dhamma Giri (Vipassana International Academy), founded 1976 by S.N. Goenka, the worldwide headquarters of the tradition. Courses are free and donation-based; register at schedule.vridhamma.org/courses/giri. What no overview page tells you: the Vipassana Research Institute there digitized the entire Pali Tipitaka (free at tipitaka.org) and archives the discourse and chanting that runs every course at every center on earth.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Igatpuri Vipassana: Dhamma Giri is the source node, not just a place to sit",
    description:
      "Dhamma Giri in Igatpuri is the worldwide HQ of Goenka-tradition Vipassana. The VRI there digitized the complete Pali canon (free at tipitaka.org) and archives the material every other center runs on. Direct answers plus the part the overview pages skip.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Igatpuri Vipassana (Dhamma Giri): the source node explained",
    description:
      "Founded 1976, worldwide HQ, free donation-based courses. And the uncopyable part: the VRI there gave away the entire digitized Pali Tipitaka at tipitaka.org.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Igatpuri Vipassana" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Igatpuri Vipassana", url: PAGE_URL },
];

const vriOutputs = [
  {
    name: "The digitized Pali Tipitaka",
    initial: "T",
    description:
      "The complete Chattha Sangayana Tipitaka, encoded and made word-searchable. Free at tipitaka.org. The legacy that put the whole canon one search box away.",
  },
  {
    name: "Pali language training",
    initial: "P",
    description:
      "Residential Pali courses for serious meditators, including a three-month program that pairs scholarly study with practice.",
  },
  {
    name: "Empirical research",
    initial: "R",
    description:
      "Studies of how the practice affects people and institutions: health, education, prisons, government. The R in VRI.",
  },
  {
    name: "Publications and archive",
    initial: "A",
    description:
      "Books, audio, and the discourse and chanting archive in many languages that every center draws on for its courses.",
  },
];

const referenceRows: { k: string; v: React.ReactNode }[] = [
  { k: "Center name", v: "Dhamma Giri, Vipassana International Academy (VIA)" },
  { k: "Meaning", v: "Dhamma Giri translates as “Hill of Dhamma”" },
  { k: "Founded", v: "1976, by S.N. Goenka" },
  {
    k: "Location",
    v: "Igatpuri, Nashik district, Maharashtra, India, in the Western Ghats",
  },
  {
    k: "Distance",
    v: "About 136 km from Mumbai and 45 km from Nashik, on the Mumbai–Agra highway, on the central railway line",
  },
  {
    k: "Flagship course",
    v: "The 10-day residential Vipassana course",
  },
  {
    k: "Cost",
    v: "Free. Run solely on a donation basis, and donations are accepted only from people who have finished at least one course",
  },
  {
    k: "Adjacent",
    v: "The Vipassana Research Institute (VRI), founded 1985, sits next to the academy on the same hill",
  },
];

const faqs: FaqItem[] = [
  {
    q: "What is the Vipassana center in Igatpuri?",
    a: "It is Dhamma Giri, formally the Vipassana International Academy. It was founded in 1976 by S.N. Goenka and is the worldwide headquarters of the Goenka tradition of Vipassana. It sits in Igatpuri, in the Western Ghats of Maharashtra, roughly 136 km from Mumbai. The official site is giri.vridhamma.org.",
  },
  {
    q: "How do I register for a course at Igatpuri (Dhamma Giri)?",
    a: "Applications go through the center's scheduling portal at schedule.vridhamma.org/courses/giri, or the global course finder at dhamma.org. You apply for a specific dated course and wait for a confirmation, since places are limited and many courses fill. There is no drop-in option; the 10-day course is the standard entry point and you commit to the full residential period.",
  },
  {
    q: "Is the course at Igatpuri free?",
    a: "Yes. Courses at Dhamma Giri, like every center in this tradition, run solely on a donation basis. There is no fee for the teaching, food, or lodging. Donations are accepted only from students who have completed at least one full 10-day course, so a person sitting their first course is supported entirely by the giving of people who sat before them. For the why behind that model, see our page on why Vipassana is free.",
  },
  {
    q: "Why is Dhamma Giri called the headquarters or the source of the tradition?",
    a: "Two reasons beyond it being Goenka's main center. First, the Vipassana Research Institute (VRI) is there, and the VRI produced the digitized edition of the entire Pali Tipitaka, free at tipitaka.org. Second, the VRI maintains the discourse and chanting archive in many languages that centers around the world draw on to run their courses. The material that plays in the hall at a center thousands of miles away traces back to the archive on that hill.",
  },
  {
    q: "What is the Vipassana Research Institute (VRI) at Igatpuri?",
    a: "The VRI was established in 1985 by S.N. Goenka, adjacent to the academy at Dhamma Giri. Its four work areas are the Tipitaka digitization project (the complete Pali canon in Devanagari script, with software that converts between Devanagari, Roman, and Burmese scripts), residential Pali language training, empirical research into the effects of the practice, and publications. Source: vridhamma.org/About-VRI.",
  },
  {
    q: "How far is Dhamma Giri from Mumbai and how do people get there?",
    a: "Igatpuri is about 136 km from Mumbai, roughly a three-hour journey. It is a railway town on the central line, so most people arrive by train, then cover the short remaining distance to the hill by local transport. The official center page lists the address and contact details. For specifics on dates and travel windows, the center's own page and dhamma.org are the canonical sources.",
  },
  {
    q: "I am outside India. Do I need to go to Igatpuri to learn Vipassana in this tradition?",
    a: "No. There are centers around the world running the identical 10-day course on the same schedule and the same archived material. I have sat six courses, all at centers in California (Dhammamanda, CYO, and North Fork), and never been to Igatpuri. Every one of those courses ran on the discourse and chanting that the VRI at Dhamma Giri archives. Igatpuri is the source node, but the network reaches you wherever you are. Find a center near you at dhamma.org.",
  },
  {
    q: "Can this page or site teach me the technique before I go?",
    a: "No, and that is on purpose. In this tradition the technique is only transmitted inside a 10-day residential course by an authorized assistant teacher. I am a fellow practitioner sharing history, logistics, and context, not a teacher. For anything operational, how to sit, how to work with a difficulty, the canonical sources are the assistant teacher at the center and dhamma.org.",
  },
];

const relatedPosts = [
  {
    title: "10-day Vipassana course structure: the daily clock and the 10-day arc",
    href: "/t/10-day-course-structure",
    excerpt:
      "The fixed daily schedule a Dhamma Giri course runs on, the same one used at every center worldwide. Read from the Code of Discipline and six personal courses.",
    tag: "Reference",
  },
  {
    title: "Course application tips: from registration to the first bell",
    href: "/guide/course-application-tips",
    excerpt:
      "How the application and waitlist actually work, what to expect between applying and arriving, and how to read a center's schedule.",
    tag: "Guide",
  },
  {
    title: "Finding a retreat: how to use the dhamma.org course finder",
    href: "/guide/find-a-retreat",
    excerpt:
      "If you cannot get to Igatpuri, here is how to find the same course at a center near you, anywhere in the world.",
    tag: "Guide",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Igatpuri Vipassana (Dhamma Giri): the source node of the worldwide network",
    description:
      "Dhamma Giri in Igatpuri is the worldwide headquarters of Goenka-tradition Vipassana, founded 1976. The Vipassana Research Institute there digitized the entire Pali Tipitaka (free at tipitaka.org) and archives the discourse and chanting that every center runs on. Direct registration and cost answers plus the context overview pages skip.",
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
          Igatpuri, Maharashtra
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
          Igatpuri Vipassana is <GradientText>Dhamma Giri</GradientText>, and
          it is the source node, not just a center
        </h1>
        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          Most pages about Igatpuri Vipassana tell you the timings, the
          location, and what to expect. All true, and all below. But they miss
          the thing that makes this particular hill different from the hundreds
          of other places you could sit the same course: what gets produced
          here flows out to every one of them.
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
            Direct answer (verified 2026-06-16)
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            The Vipassana center in Igatpuri is{" "}
            <strong>Dhamma Giri</strong>, formally the Vipassana International
            Academy. It was founded in <strong>1976 by S.N. Goenka</strong> and
            is the worldwide headquarters of the Goenka tradition. The flagship
            offering is the 10-day residential course, which is{" "}
            <strong>free and run on a donation basis</strong>. You register for
            a specific dated course at{" "}
            <a
              href="https://schedule.vridhamma.org/courses/giri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              schedule.vridhamma.org/courses/giri
            </a>{" "}
            (the center&apos;s official site is{" "}
            <a
              href="https://giri.vridhamma.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              giri.vridhamma.org
            </a>
            ). You do not have to travel to Igatpuri to learn in this tradition:
            the identical course runs at centers worldwide. The reason this one
            matters is below.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          What flows out of this one hill
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          When you sit a 10-day course at any center in this tradition, the
          recorded evening discourse, the morning chanting, and the texts the
          teaching rests on are not produced locally. They are archived and
          maintained centrally, and that center is the Vipassana Research
          Institute at Dhamma Giri. So a course in a rented camp in California
          and a course on the hill in Igatpuri are, at the level of material,
          running the same thing. The diagram below is the literal shape of it.
        </p>

        <div className="mt-8">
          <AnimatedBeam
            title="One archive, every hall"
            from={[
              { label: "Recorded discourses", sublabel: "by language" },
              { label: "Morning chanting", sublabel: "in Pali" },
              { label: "Digitized Tipitaka", sublabel: "the canon" },
              { label: "Assistant teachers", sublabel: "trained, appointed" },
            ]}
            hub={{ label: "Dhamma Giri", sublabel: "Igatpuri / VRI" }}
            to={[
              { label: "Dhammamanda", sublabel: "NorCal" },
              { label: "CYO", sublabel: "Bay Area" },
              { label: "North Fork", sublabel: "Central CA" },
              { label: "Every other center", sublabel: "worldwide" },
            ]}
          />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The anchor fact most pages never mention
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Here is the single thing about Igatpuri that the overview pages, the
          travel-guide writeups, and the &ldquo;what to expect&rdquo; lists all
          skip. The Vipassana Research Institute at Dhamma Giri took on the
          enormous task of encoding the entire Pali Tipitaka, the full canon, in
          digital, word-searchable form. Then they gave it away.
        </p>

        <div className="mt-6">
          <GlowCard className="rounded-2xl border border-zinc-200 bg-white p-7">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
              The Chattha Sangayana Tipitaka
            </p>
            <p className="mt-3 text-zinc-800 leading-relaxed">
              The VRI published the complete Pali Tipitaka in Devanagari script,
              with software that converts the text between Devanagari, Roman, and
              Burmese scripts, and put a reproduction of it online for free. You
              can search any word or phrase across the whole canon in seconds at{" "}
              <a
                href="https://www.tipitaka.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 underline hover:text-teal-900"
              >
                tipitaka.org
              </a>
              . A 2,500-year-old body of text, one search box away, produced on
              the same hill in Igatpuri where the courses run. That is the part
              that makes this place a research institution and an archive, not
              only a retreat venue.
            </p>
            <p className="mt-4 text-sm text-zinc-500">
              Source: tipitaka.org and{" "}
              <a
                href="https://www.vridhamma.org/About-VRI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 underline hover:text-teal-900"
              >
                vridhamma.org/About-VRI
              </a>
              . Verified 2026-06-16.
            </p>
          </GlowCard>
        </div>
      </section>

      <ProofBanner
        metric="1985"
        quote="The Vipassana Research Institute was founded at Dhamma Giri to put the entire Pali canon into digital, searchable form and to study the practice empirically. The retreat on the hill and the research institute next to it are the same project."
        source="vridhamma.org/About-VRI, verified 2026-06-16."
      />

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          What the institute on the hill actually does
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Beyond hosting courses, the Vipassana Research Institute at Dhamma
          Giri runs four lines of work. Together they are why so many people
          treat Igatpuri as the reference point for the whole tradition.
        </p>

        <div className="mt-6">
          <IntegrationsGrid
            subtitle="Vipassana Research Institute, Dhamma Giri"
            title="Four work areas"
            items={vriOutputs}
            columns={4}
          />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The practical facts, in one place
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          If you came here to confirm the basics before applying, this is the
          lookup table. Every row traces to the center&apos;s own site or to
          dhamma.org.
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
          Founding year and location from the center&apos;s official page (
          <a
            href="https://giri.vridhamma.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            giri.vridhamma.org
          </a>
          ); VRI founding year from{" "}
          <a
            href="https://www.vridhamma.org/About-VRI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            vridhamma.org/About-VRI
          </a>
          .
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          A note from someone who has never been to Igatpuri
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          I should be honest about where I stand. I have sat six 10-day
          courses, all of them at centers in California: Dhammamanda in NorCal,
          CYO in the Bay Area, and North Fork in Central California. I have
          never been to Dhamma Giri. So I cannot tell you what the air feels
          like on that hill, or how the food tastes there, the way the travel
          writeups can.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          What I can tell you is that every one of those six courses, thousands
          of miles from Igatpuri, ran on the discourse and the chanting that the
          institute on that hill archives. The first time I understood that, the
          place stopped being a distant Indian retreat I might someday visit and
          became the room the signal was coming from. If you are searching for
          Igatpuri Vipassana from outside India and quietly wondering whether
          you are missing something by not going there, this is the reassurance:
          the course is the course, on the same schedule, off the same archive,
          wherever you sit it. The hill is the source. It is not the only place
          the water reaches.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          I am not a teacher, just a fellow practitioner who got curious about
          where the material comes from. For anything about how to actually
          practice, the canonical answers live with the assistant teacher at a
          center and at{" "}
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
          section="guide-igatpuri-footer"
          heading="Deciding between Igatpuri and a center near you?"
          description="If you want to talk through which course to apply for, or what keeping a daily practice looks like after it, grab a slot. Peer to peer, not teacher to student."
        />
      </section>

      <section id="faq" className="max-w-3xl mx-auto px-6 pt-12">
        <FaqSection
          heading="FAQ: Igatpuri Vipassana and Dhamma Giri"
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
        section="guide-igatpuri-sticky"
        description="Questions about applying to Igatpuri or a center near you? Book a quick chat."
      />
    </article>
  );
}
