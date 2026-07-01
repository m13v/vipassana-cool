import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ComparisonTable,
  StepTimeline,
  AnimatedBeam,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-research-institute";
const PUBLISHED = "2026-07-01";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title: "What Is the Vipassana Research Institute (VRI)? Founded 1985, Igatpuri",
  description:
    "The Vipassana Research Institute is S.N. Goenka's 1985 Pali-text publishing body at Dhamma Giri, Igatpuri, not the university labs that run vipassana brain studies. What VRI actually is, what it publishes, and where to read the free digital Tipitaka (CST4 / tipitaka.org).",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "What Is the Vipassana Research Institute (VRI)?",
    description:
      "Founded by S.N. Goenka in 1985 at Dhamma Giri, Igatpuri. A publishing and Pali-text institute, not the academic vipassana-research literature. Its flagship free resource is the digital Pali canon at tipitaka.org.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Vipassana Research Institute is not what most people assume",
    description:
      "VRI is Goenka's 1985 Pali-publishing institute at Dhamma Giri. It is not the university/hospital research on vipassana. Here is the difference, and the free canon it maintains.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "What is the Vipassana Research Institute?",
    a: "The Vipassana Research Institute (VRI) is a non-profit body founded by S.N. Goenka in 1985 at Dhamma Giri in Igatpuri, Maharashtra, India, about 136 km from Mumbai. Its stated aim is to conduct research into the sources and applications of the Vipassana technique as taught by Goenka in the tradition of Sayagyi U Ba Khin. In practice that means two things: translating and publishing the Pali canon (the Tipitaka) and the books drawn from Goenka's discourses, and studying how Vipassana applies to health, education, and social development. Its home online is vridhamma.org.",
  },
  {
    q: "Is the Vipassana Research Institute the same as the scientific research on vipassana?",
    a: "No, and this is the single most common mix-up. VRI is an in-tradition organization run by the Goenka Vipassana network. The peer-reviewed studies you find in journals like Cureus or Frontiers, measuring stress, attention, or brain activity, are run by independent universities and hospitals with no tie to any one meditation tradition. Both are legitimate, but they are different things with different homes: VRI lives at vridhamma.org and tipitaka.org, the academic literature lives on PubMed and in journals. The word 'research' in VRI's name leans heavily toward textual and applied research, not clinical trials.",
  },
  {
    q: "Where is the Vipassana Research Institute located?",
    a: "VRI sits adjacent to the Vipassana International Academy, known as Dhamma Giri, in Igatpuri, a small town in Maharashtra, India, roughly 136 km northeast of Mumbai. Dhamma Giri is one of the largest Vipassana centers in the world and hosts ongoing 10-day courses plus long courses through Dhamma Tapovana next door.",
  },
  {
    q: "What does the Vipassana Research Institute actually publish?",
    a: "Three broad categories. First, the Pali Tipitaka itself: the canon, its commentaries (Atthakatha), and sub-commentaries (Tika), based on the Sixth Council recension, published in Devanagari and released as digital editions. Second, books from S.N. Goenka's teaching, such as the Discourse Summaries and Discourses on the Satipatthana Sutta, plus audio and video. Third, research papers, seminar reports, and multilingual newsletters. The Pariyatti store lists dozens of VRI titles in print and eBook form.",
  },
  {
    q: "What is CST4 and how is it connected to VRI?",
    a: "CST4 is the Chattha Sangayana Tipitaka version 4.0, VRI's free desktop software for browsing and searching the entire Pali canon. It is the successor to the earlier Chattha Sangayana CD-ROM (CSCD 3.0). It bundles the Tipitaka Mula, the Atthakatha commentaries, the Tika sub-commentaries, and other texts (Añña) including the Visuddhimagga, and it can convert the same text between Devanagari, Roman, Burmese, and other scripts. You can download it from tipitaka.org/cst4, and a web edition of the same canon is at tipitaka.org.",
  },
  {
    q: "Can I learn the Vipassana technique from the Research Institute's publications?",
    a: "No. VRI publishes texts, history, and reference material, but the technique itself is only transmitted by an authorized assistant teacher inside a 10-day residential course. Reading the Tipitaka or a discourse summary is not a substitute for sitting a course, and this site does not teach the method either. For anything about how to actually practice, or to find and apply for a course, the place to go is dhamma.org.",
  },
  {
    q: "Does VRI charge for its digital Tipitaka?",
    a: "The Chattha Sangayana Tipitaka on tipitaka.org, and the CST4 desktop software, are offered free. That fits the tradition's dana model, where courses and materials are given without charge and sustained by donations from past students. Some printed VRI books are sold through distributors like Pariyatti to cover printing, but the core digital canon is not paywalled.",
  },
];

const relatedPosts = [
  {
    title: "New Vipassana research, April 2026: four recent papers",
    href: "https://vipassana.cool/t/vipassana-meditation-research-roundup-april-2026",
    excerpt:
      "The academic side of the story: four peer-reviewed papers with sample sizes and the limitations the authors name themselves.",
    tag: "Science",
  },
  {
    title: "The scientific evidence on Vipassana",
    href: "https://vipassana.cool/guide/scientific-evidence",
    excerpt:
      "A longer-form overview of what the outcome studies actually show, and where the research is still thin.",
    tag: "Guide",
  },
  {
    title: "Anapana and Vipassana explained",
    href: "https://vipassana.cool/guide/anapana-and-vipassana-explained",
    excerpt:
      "Where two words that VRI's Pali texts use precisely get blurred together in everyday conversation.",
    tag: "Guide",
  },
];

export default function Page() {
  return (
    <article className="min-h-screen">
      <div className="mx-auto max-w-3xl px-5 py-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "https://vipassana.cool" },
            { label: "Topics", href: "https://vipassana.cool/t/vipassana-retreat" },
            { label: "Vipassana Research Institute" },
          ]}
        />

        <header className="mt-6">
          <p className="text-sm font-medium text-teal-600">Reference</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            What is the Vipassana Research Institute?
          </h1>
          <ArticleMeta
            author="Matthew Diakonov"
            authorRole="Written with AI"
            datePublished={PUBLISHED}
            readingTime="7 min read"
          />
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Type the name into a search box and you probably expect a lab: white
            coats, EEG caps, a stack of clinical trials. That is not what it is.
            The Vipassana Research Institute is a publishing and Pali-text body,
            founded by S.N. Goenka, that happens to carry the word{" "}
            <span className="text-zinc-900">research</span> in a much older
            sense. Here is the actual thing, and how to tell it apart from the
            university studies people confuse it with.
          </p>
        </header>

        {/* Direct answer */}
        <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer, verified 2026-07-01
          </p>
          <p className="mt-3 text-base leading-relaxed text-zinc-800">
            The <strong>Vipassana Research Institute (VRI)</strong> is a
            non-profit founded by <strong>S.N. Goenka in 1985</strong> at Dhamma
            Giri in <strong>Igatpuri, Maharashtra, India</strong>. It translates
            and publishes the Pali canon (freely, at{" "}
            <a
              href="https://tipitaka.org"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              tipitaka.org
            </a>
            ), publishes books drawn from Goenka's teaching, and studies how
            Vipassana applies to health, education, and social life. It is{" "}
            <strong>not</strong> the university and hospital body behind the
            brain-and-stress studies people often mean when they say
            &ldquo;vipassana research.&rdquo; Its home is{" "}
            <a
              href="https://www.vridhamma.org/About-VRI"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              vridhamma.org
            </a>
            .
          </p>
        </div>

        {/* Section 1: the disambiguation */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Two different things wearing one phrase
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-700">
            When people search for the &ldquo;vipassana research institute&rdquo;
            they usually want one of two things, and the two almost never live in
            the same place. One is a named organization inside the Goenka
            tradition. The other is a loose body of academic work by people who
            have no formal tie to the tradition at all. Confusing them leads you
            to the wrong website, so it is worth being precise up front.
          </p>
          <p className="mt-4 text-base leading-relaxed text-zinc-700">
            VRI, the institute, is the first one. It is a specific non-profit at
            a specific address that publishes texts and runs applied studies from
            within the tradition. The clinical and neuroscience work, the
            randomized trials and MEG scans you might have read about, is the
            second one, and it is scattered across universities, hospitals, and
            journals. Both are real. They are not the same institution.
          </p>

          <div className="mt-8">
            <ComparisonTable
              heading="VRI versus the academic research on Vipassana"
              intro="Same word, different worlds. Which one you want decides where you should be reading."
              productName="Vipassana Research Institute (VRI)"
              competitorName="Academic vipassana research"
              rows={[
                {
                  feature: "What it is",
                  ours: "One named non-profit founded by S.N. Goenka in 1985",
                  competitor:
                    "A scattered body of peer-reviewed studies by many groups",
                },
                {
                  feature: "Who runs it",
                  ours: "The Goenka Vipassana organization, from within the tradition",
                  competitor:
                    "Independent universities and hospitals, no tradition tie",
                },
                {
                  feature: "Main output",
                  ours: "The digitized Pali canon and books from Goenka's discourses",
                  competitor:
                    "Journal papers on stress, attention, and brain activity",
                },
                {
                  feature: "Sense of the word 'research'",
                  ours: "Textual and philological work, plus applied field studies",
                  competitor: "Empirical clinical and neuroscience research",
                },
                {
                  feature: "Where to find it",
                  ours: "vridhamma.org and tipitaka.org",
                  competitor: "PubMed, Cureus, Frontiers, and similar journals",
                },
              ]}
              caveat="Neither is wrong. They answer different questions: one gives you the source texts and the tradition's own view, the other gives you outside measurement of outcomes."
            />
          </div>
        </section>

        {/* Section 2: the founding facts */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            The institute itself: 1985, Dhamma Giri, Igatpuri
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-700">
            VRI was established in 1985, next door to the Vipassana International
            Academy at Dhamma Giri in Igatpuri, a town roughly 136 km from
            Mumbai. The stated logic was simple: Goenka held that theory and
            practice should move together, so an institute was set up to
            investigate and publish the literature that sits behind the practice.
            Its self-description names one principal aim, &ldquo;conducting
            research into the sources and applications of the Vipassana Meditation
            Technique.&rdquo;
          </p>
          <p className="mt-4 text-base leading-relaxed text-zinc-700">
            That splits into two lanes. The first is the source lane:
            translating and publishing the Pali texts. The second is the
            application lane: studying what Vipassana does in the world, in
            fields like health, education, and social development, including work
            around addiction and prison programs. It also runs long residential
            Pali study courses and, since 1999, a Diploma in the Teachings of the
            Buddha in collaboration with the University of Mumbai's philosophy
            department.
          </p>
        </section>

        {/* Section 3: the anchor fact, the free canon */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            The most concrete thing VRI made: the free digital canon
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-700">
            If you strip away everything abstract about the word
            &ldquo;research&rdquo; and ask what VRI has physically produced that
            you can hold or download today, the clearest answer is the digital
            Pali Tipitaka. In the 1990s VRI encoded the entire canon onto CD-ROM
            with software that could switch the same text between scripts. That
            project became the Chattha Sangayana Tipitaka, and its current desktop
            release is CST4.
          </p>

          <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Anchor fact you can verify
            </p>
            <p className="mt-3 text-base leading-relaxed text-zinc-800">
              <strong>CST4 (Chattha Sangayana Tipitaka 4.0)</strong> is VRI's
              free desktop client for browsing and searching the Pali canon, and
              the successor to the CSCD 3.0 CD-ROM. It bundles the{" "}
              <strong>Tipitaka Mula</strong> (the canon), the{" "}
              <strong>Atthakatha</strong> (commentaries), the{" "}
              <strong>Tika</strong> (sub-commentaries), and other texts (Añña)
              including the <strong>Visuddhimagga</strong>, and it converts the
              same passage between Devanagari, Roman, Burmese, and further
              scripts. It is downloadable at{" "}
              <a
                href="https://tipitaka.org/cst4"
                className="font-medium text-teal-700 underline underline-offset-2"
              >
                tipitaka.org/cst4
              </a>
              , and a web edition of the identical canon is at{" "}
              <a
                href="https://tipitaka.org"
                className="font-medium text-teal-700 underline underline-offset-2"
              >
                tipitaka.org
              </a>
              .
            </p>
          </div>

          <p className="mt-6 text-base leading-relaxed text-zinc-700">
            The authoritative base text is the recension settled at the Sixth
            Buddhist Council in Yangon, Burma, in 1954 to 1956, where thousands
            of monks recited and cross-checked the canon over two years. VRI took
            that Burmese-script recension and turned it into something a person
            anywhere can search in seconds. That is the pipeline, from an oral
            council in the 1950s to a free download now.
          </p>

          <div className="mt-8">
            <AnimatedBeam
              title="How the canon flows from council to your screen"
              from={[
                { label: "Sixth Council recension", sublabel: "Yangon, 1954 to 1956" },
                { label: "Goenka's discourses", sublabel: "1969 onward" },
              ]}
              hub={{
                label: "Vipassana Research Institute",
                sublabel: "Dhamma Giri, founded 1985",
              }}
              to={[
                { label: "tipitaka.org", sublabel: "free web canon" },
                { label: "CST4 software", sublabel: "searchable desktop edition" },
                { label: "Printed and eBook titles", sublabel: "via Pariyatti" },
              ]}
            />
          </div>
        </section>

        {/* Section 4: chronology */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            How VRI got here
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-700">
            The institute did not appear out of nowhere. It sits on top of a
            century of transmission, from Burma to India and then out to the
            wider world. A rough timeline makes the shape clear.
          </p>
          <div className="mt-8">
            <StepTimeline
              steps={[
                {
                  title: "1954 to 1956: the Sixth Council",
                  description:
                    "At Kaba Aye in Yangon, thousands of monks recited and verified the entire Pali canon over two years. This Chattha Sangayana recension becomes the authoritative base text VRI later digitizes.",
                },
                {
                  title: "1969: Goenka begins teaching in India",
                  description:
                    "After years under Sayagyi U Ba Khin in Burma, S.N. Goenka starts teaching courses in India, seeding the network of students and centers that will eventually fund and staff the institute.",
                },
                {
                  title: "1985: VRI is founded",
                  description:
                    "The Vipassana Research Institute is established at Dhamma Giri, Igatpuri, to put the tradition's texts and its practice side by side.",
                },
                {
                  title: "1990s: the Tipitaka goes digital",
                  description:
                    "VRI encodes the canon, its commentaries, and sub-commentaries onto CD-ROM, with custom software for converting between Devanagari, Roman, and Burmese scripts.",
                },
                {
                  title: "1999: a university diploma",
                  description:
                    "In collaboration with the University of Mumbai, VRI begins offering a Diploma in the Teachings of the Buddha, pairing scholarly study with practice.",
                },
                {
                  title: "Today: CST4 and tipitaka.org",
                  description:
                    "The Chattha Sangayana Tipitaka 4.0 desktop software and the free web edition at tipitaka.org put the whole canon a click away, in the script of your choice.",
                },
              ]}
            />
          </div>
        </section>

        {/* Section 5: peer note */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Where this fits, from one practitioner
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-700">
            I am not a teacher, just someone who has sat six courses across three
            centers and kept a daily practice going for a while now. I mention
            that only so you know where this is coming from. When people ask me
            about the &ldquo;research institute,&rdquo; they are usually hoping it
            will tell them how to practice, or hand them proof that the technique
            works. It does neither of those the way they expect.
          </p>
          <p className="mt-4 text-base leading-relaxed text-zinc-700">
            What VRI gives you is context: the source texts, the history, the
            lineage back through Sayagyi U Ba Khin. That is genuinely useful after
            a course, when you start noticing how precisely the old texts use
            words that get thrown around loosely in casual conversation. What it
            does not give you is a shortcut around the course itself. The
            technique is only ever transmitted by an authorized assistant teacher
            inside a 10-day residential sitting, and if you have a question about
            how to actually practice, or about a difficulty on the cushion, the
            right place to take it is an authorized teacher and{" "}
            <a
              href="https://www.dhamma.org"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              dhamma.org
            </a>
            , not a stack of PDFs.
          </p>
        </section>

        <div className="mt-14">
          <BookCallCTA
            appearance="footer"
            destination={BOOKING_LINK}
            site="Vipassana"
            heading="Sorting out sources versus practice?"
            description="If you have sat a course and want a peer to talk daily-practice consistency with, not technique, book a short call."
          />
        </div>

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Frequently asked questions
          </h2>
          <div className="mt-6">
            <FaqSection items={faqs} heading="" />
          </div>
        </section>

        <div className="mt-14">
          <RelatedPostsGrid
            title="Keep reading"
            subtitle="The science, the texts, and where they meet"
            posts={relatedPosts}
          />
        </div>

        <p className="mt-10 text-sm leading-relaxed text-zinc-500">
          Sources checked 2026-07-01:{" "}
          <a
            href="https://www.vridhamma.org/About-VRI"
            className="text-teal-700 underline underline-offset-2"
          >
            vridhamma.org/About-VRI
          </a>
          ,{" "}
          <a
            href="https://tipitaka.org/cst4"
            className="text-teal-700 underline underline-offset-2"
          >
            tipitaka.org/cst4
          </a>
          ,{" "}
          <a
            href="https://store.pariyatti.org/vri"
            className="text-teal-700 underline underline-offset-2"
          >
            store.pariyatti.org/vri
          </a>
          . This page is a reference note, not teaching material.
        </p>
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Sat a course? Talk daily practice with a peer."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline: "What Is the Vipassana Research Institute (VRI)?",
              description:
                "The Vipassana Research Institute is S.N. Goenka's 1985 Pali-text publishing body at Dhamma Giri, Igatpuri, distinct from the academic research on vipassana. What it is, what it publishes, and where to read the free digital Tipitaka.",
              url: PAGE_URL,
              datePublished: PUBLISHED,
              author: "Matthew Diakonov",
              authorUrl: "https://m13v.com",
              publisherName: "Vipassana.cool",
              publisherUrl: "https://vipassana.cool",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbListSchema([
              { name: "Home", url: "https://vipassana.cool" },
              { name: "Topics", url: "https://vipassana.cool/t/vipassana-retreat" },
              { name: "Vipassana Research Institute", url: PAGE_URL },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(faqs, `${PAGE_URL}#faq`)),
        }}
      />
    </article>
  );
}
