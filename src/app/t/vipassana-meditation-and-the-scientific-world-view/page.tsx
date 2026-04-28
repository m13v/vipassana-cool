import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  StepTimeline,
  ComparisonTable,
  InlineTestimonial,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type ComparisonRow,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/vipassana-meditation-and-the-scientific-world-view";
const PUBLISHED = "2026-04-28";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana Meditation and the Scientific World View: A Reading Guide to the Fleischman Pamphlet",
  description:
    "The phrase is the title of a 2009 pamphlet by Dr. Paul R. Fleischman, dedicated in honor of Acharya Goenkaji. This page walks through its eight sections, the four Pali terms it pairs with contemporary science, and the one place Fleischman openly names a discrepancy with the standard Big Bang model.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Vipassana Meditation and the Scientific World View: A Reading Guide to the Fleischman Pamphlet",
    description:
      "Eight sections, four Pali terms, one discrepancy. A reader's guide to Paul R. Fleischman's 2009 pamphlet, written by an old student of six 10-day courses, not a teacher.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "A Reading Guide to Fleischman's 'Vipassana Meditation and the Scientific World View'",
    description:
      "What the 2009 pamphlet actually says, section by section. Anicca, anattā, kamma, Dhamma, and where Buddhist cosmology and modern cosmology part company.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "Is 'Vipassana Meditation and the Scientific World View' a book, an essay, or a talk?",
    a: "It is a short pamphlet of about thirty printed pages, written by Dr. Paul R. Fleischman, M.D., copyright 2009, dedicated in honor of Acharya Goenkaji and published by Vipassana Research Publications, the imprint of Pariyatti dedicated to the Goenka tradition. A revised second edition with new essays was later issued under the same title. The 2009 pamphlet is the version that circulates as a free PDF through dhamma centers and is the text this guide walks through.",
  },
  {
    q: "Who is Paul R. Fleischman?",
    a: "A psychiatrist who became a senior assistant teacher in the Goenka lineage. He is also the author of other books, including Wonder: When and Why the World Appears Radiant. His framing in this pamphlet leans on his medical and scientific background rather than on any monastic credential, which is the point: he wrote it specifically to address readers who came to meditation through a scientific worldview.",
  },
  {
    q: "Why did Goenka emphasize the relationship between Vipassana and science?",
    a: "Fleischman opens the pamphlet by saying it directly: 'One of the important factors by which Acharya Goenkaji re-kindled Vipassana mediation in the second half of the Twentieth Century was his emphasis on the similarities between the world views of Vipassana and science. For many Vipassana students around the world, this emphasis facilitated their openness to giving meditation a fair trial.' The framing was, by Fleischman's own account, a doorway, not a doctrine.",
  },
  {
    q: "Which Pali terms does the pamphlet try to clarify with scientific concepts?",
    a: "Four: anicca (impermanence), anattā (non-self, insubstantiality), kamma (action, deed), and Dhamma (foundation, support, law of nature). Fleischman names them in the opening dedication and the book then walks through cosmology, physics, chemistry, biology, complexity theory, and information theory and attaches each domain to one or more of these four words.",
  },
  {
    q: "Where in the pamphlet does Fleischman openly admit a discrepancy with science?",
    a: "Section II, Expanding Universe. He notes that the singular Big Bang reading, in which the universe simply began about fourteen billion years ago, sits awkwardly with the Buddha's description in the Bhayabherava Sutta of the Majjhima Nikaya, which speaks of many very long cycles of world contraction and expansion. Fleischman then points out that cyclic-universe cosmologies, including the model of Paul Steinhardt and Neil Turok of Princeton and Cambridge, posit endless cycles of expansion and contraction at trillion-year scales that resemble the suttas more closely than a one-shot Big Bang does. He does not claim either side has been settled. He simply names the open question.",
  },
  {
    q: "Does this pamphlet teach the Vipassana technique?",
    a: "No, and the pamphlet is explicit about that. The technique is reserved for an authorized assistant teacher inside the 10-day residential course. Fleischman's project is conceptual framing, not instruction. If you want to learn the technique itself, the only authorized route is the residential course; schedules and applications are at dhamma.org.",
  },
  {
    q: "Is the pamphlet free?",
    a: "Yes. It is offered freely as a digital eBook through Pariyatti, and a physical print edition can be ordered through their store. The cover page explicitly says 'This eBook is offered freely. If you wish, you may donate and help us continue offering our services.' Pariyatti is a 501(c)(3) sustained by donations.",
  },
  {
    q: "Where does the pamphlet end up?",
    a: "On the word Dhamma, mapped onto Claude Shannon's information theory. Fleischman defines information as 'selection criteria that limit choice' and then argues that the universe is, in his words, 'the manifestation of information,' calling it 'an informatic universe.' The Buddha's word for that, in the pamphlet's reading, is Dhamma: 'The pervasive, unwavering, orchestrating natural information state of the universe is what the Buddha called, Dhamma.' Whether you find that mapping persuasive depends a lot on how comfortable you are stretching one technical word across a 2,500-year gap, which the pamphlet acknowledges in its own modest tone.",
  },
  {
    q: "How does this site relate to the pamphlet?",
    a: "It does not. This is a peer-practitioner reading guide, written by an old student of six 10-day courses in the Goenka tradition. It is not a publication of Pariyatti, Vipassana Research Publications, or the dhamma.org organization. For anything operational about how to practice, please go to dhamma.org and talk to an authorized assistant teacher inside a 10-day course.",
  },
];

const paliMappings: ComparisonRow[] = [
  {
    feature: "anicca (impermanence)",
    competitor:
      "Quantum vibrations and the second law of thermodynamics. Section VI calls the world's base 'oscillatory rather than static, fluid rather than fixed' and ends with 'the material world consists of vibrations rising and passing away.' Section III names entropy as 'the most enduring and irrefutable scientific law' and quotes the Buddha's final admonition from the Mahaparinibbana Sutta: 'All compounded things decay.'",
    ours: "Linked, in Fleischman's framing, to the body sensations a meditator observes inside the residential course.",
  },
  {
    feature: "anattā (non-self, insubstantiality)",
    competitor:
      "The Pauli exclusion principle and the cellular biology of replication. Section V cites complexity theorists Stuart Kauffman, Werner Loewenstein, and Harold Morowitz, who read Pauli's exclusion principle as 'the root of the organization of the universe,' and Section IV traces how each cell is 'always from the information contained in the DNA of previous cells,' which dissolves the intuitive sense of an isolated self into a chain of replications.",
    ours: "Framed as a conceptual scaffold, not as something to be experienced through reading; the experiential side is the course.",
  },
  {
    feature: "kamma (action, deed)",
    competitor:
      "DNA-encoded information and inherited cellular biochemistry. Section IV: 'Our kamma is ancient; our DNA is our own signet ring.' Section VIII reframes kamma as 'simultaneously universal cosmic law, and uniquely individuated, person-specific kamma' carried in the four billion years of stored bits inside the genome.",
    ours: "Used as a vocabulary bridge for readers familiar with biology; the pamphlet does not claim equivalence in any technical sense.",
  },
  {
    feature: "Dhamma (foundation, law of nature)",
    competitor:
      "Claude Shannon's information theory. Section VIII names Shannon, John von Neumann, and Norbert Wiener as the architects, defines information as 'selection criteria that limit choice,' and concludes: 'The pervasive, unwavering, orchestrating natural information state of the universe is what the Buddha called, Dhamma.'",
    ours: "The mapping the whole pamphlet builds toward; presented as a contemporary translation rather than a final identity.",
  },
];

const sectionWalk = [
  {
    title: "I. What is Science?",
    description:
      "Fleischman opens with Karl Popper's definition of science as falsification, alongside Murray Gell-Mann's plain-English version: 'a sentence that can be disproven.' He stresses that science is provisional and self-correcting, not a stockpile of final truths. The point of this section is to keep the reader from inheriting a strawman version of science before the pamphlet starts comparing it to anything.",
  },
  {
    title: "II. Expanding Universe",
    description:
      "Edwin Hubble, the 1920s discovery that the nebulae are other galaxies, the Big Bang as the dominant model of an early hot dense state. This is the section where Fleischman openly flags the disagreement: the Bhayabherava Sutta of the Majjhima Nikaya describes 'many very long cycles of world contraction and expansion,' and current cyclic-cosmology proposals from Paul Steinhardt and Neil Turok at Princeton and Cambridge come closer to that picture than a singular-origin Big Bang does.",
  },
  {
    title: "III. Compounded Body",
    description:
      "Hydrogen from the Big Bang, carbon from supernovae, water as H2O, octillions of atoms in a body. The closing move is to mount entropy as the central scientific law and to set it next to the Buddha's last words from the Mahaparinibbana Sutta: 'All compounded things decay.' This is the chapter where the word anicca first acquires a concrete scientific partner.",
  },
  {
    title: "IV. Enclosed Individual Life",
    description:
      "Cells as semi-permeable enclosures, an estimated ten to a hundred trillion cells in a human, a quadrillion cells manufactured over a lifetime, DNA as roughly 800 Bibles of information by Matt Ridley's count. The chapter ends with the line, 'Our kamma is ancient; our DNA is our own signet ring.' Anattā shows up here in the dissolution of any clean line between 'me' and the cellular machinery.",
  },
  {
    title: "V. A Brief Look at \"Mind\"",
    description:
      "Fleischman concedes there is no scientific consensus on what mind is. He surveys network theories of brain function, then turns to complexity-theory biologists like Stuart Kauffman, Werner Loewenstein, and Harold Morowitz, who read Wolfgang Pauli's exclusion principle as evidence that 'matter is intrinsically aware.' The section is honest about its own speculation, and ends with a note that mind may not be locatable in the brain alone.",
  },
  {
    title: "VI. Beneath Matter and Energy",
    description:
      "Quantum physics. Plank, Bohr, Heisenberg, Pauli, Born, Dirac, Schrödinger. Particle-wave duality, probability clouds, quantum entanglement and Bernard d'Espagnat. Fleischman explicitly warns against 'facile confirmation' of Buddhist philosophy by way of half-understood quantum physics. The conclusion he is willing to commit to: 'the material world consists of vibrations rising and passing away.'",
  },
  {
    title: "VII. More is Different: Complexity",
    description:
      "Named after Philip Anderson's 1972 Science article. Fleischman uses complexity theory to describe a 'middle path between determinism and free will,' arguing that lawful processes at lower levels can give rise to genuinely new lawful processes at higher levels. This is the chapter that lets the pamphlet treat insight, sīla, samādhi, and paññā as emergent and lawful without invoking anything supernatural.",
  },
  {
    title: "VIII. Informatic Universe",
    description:
      "The terminus. Information theory from Claude Shannon, John von Neumann, and Norbert Wiener. Information defined as 'selection criteria that limit choice.' Then the central claim: 'The pervasive, unwavering, orchestrating natural information state of the universe is what the Buddha called, Dhamma.' Compounds decay; the information state, in Fleischman's framing, does not. Whether the analogy holds under sustained pressure is left to the reader.",
  },
];

export default function Page() {
  const articleJsonLd = articleSchema({
    headline:
      "Vipassana Meditation and the Scientific World View: A Reading Guide to the Fleischman Pamphlet",
    description:
      "A peer-practitioner walkthrough of Dr. Paul R. Fleischman's 2009 pamphlet, its eight sections, the four Pali terms it pairs with contemporary science, and the one open discrepancy the author himself names.",
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
    {
      name: "Vipassana Meditation and the Scientific World View",
      url: PAGE_URL,
    },
  ]);
  const faqJsonLd = faqPageSchema(faqs);

  return (
    <article className="bg-white text-zinc-900">
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
            { label: "Vipassana Meditation and the Scientific World View" },
          ]}
        />
      </div>

      <header className="max-w-4xl mx-auto px-6 pt-8 pb-6">
        <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-3">
          Reading guide
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
          Vipassana Meditation and the Scientific World View
        </h1>
        <p className="mt-5 text-lg text-zinc-600 max-w-3xl">
          The exact phrase is the title of a thirty-page pamphlet by Dr. Paul R.
          Fleischman, M.D., copyright 2009, dedicated in honor of Acharya
          Goenkaji and published by Vipassana Research Publications. This page
          is a peer-practitioner reading guide to that pamphlet: its eight
          sections, the four Pali terms it pairs with contemporary science, and
          the one place where Fleischman himself flags a discrepancy.
        </p>
      </header>

      <div className="pb-4">
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="9 min read"
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 mt-6">
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 text-sm text-zinc-700 leading-relaxed">
          <p className="mb-2 font-medium text-zinc-900">A note before reading.</p>
          <p>
            This page does not teach the Vipassana technique. The technique is
            reserved for an authorized assistant teacher inside the 10-day
            residential course, and that line stands. If you want to learn the
            method itself, the only authorized route is the course. Schedules
            and applications are at{" "}
            <a
              href="https://www.dhamma.org/en-US/courses/search"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              dhamma.org
            </a>
            . What follows is a guide to a published pamphlet, nothing more.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
          What the title actually refers to
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          The title is not a generic question. It is a specific publication.
          The 2009 pamphlet by Dr. Paul R. Fleischman, a psychiatrist and
          senior assistant teacher in the Goenka lineage, runs to about thirty
          pages and is offered freely as a digital eBook by Pariyatti, with a
          physical print edition available through their store. A revised
          second edition with new essays was later issued under the same
          title. When this exact phrase shows up in a search bar, the source
          underneath is almost always the 2009 pamphlet, the second edition,
          or one of Fleischman's talks built on the same material.
        </p>
        <p className="text-zinc-700 leading-relaxed mb-4">
          Most of the pages that surface for this phrase are catalog pages: a
          listing on the Pariyatti store, two listings on Amazon, an audiobook
          page, the unindexed PDF on a content-delivery network, the
          dhamma.org/goenka biography, the Wikipedia article on S.N. Goenka.
          None of them walk through the pamphlet itself. That is the gap this
          page tries to fill.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          The dedication on the title page tells you the project's frame in one
          sentence:
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-6">
        <InlineTestimonial
          quote="One of the important factors by which Acharya Goenkaji re-kindled Vipassana mediation in the second half of the Twentieth Century was his emphasis on the similarities between the world views of Vipassana and science. For many Vipassana students around the world, this emphasis facilitated their openness to giving meditation a fair trial."
          name="Paul R. Fleischman"
          role="Vipassana Meditation and the Scientific World View, dedication, 2009"
          stars={5}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
          The eight sections, one to a paragraph
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-2">
          The pamphlet is organized into eight numbered sections plus an
          abstract and a closing note about Pariyatti. Reading it linearly
          takes a couple of hours. The progression matters: each section is
          building toward the final move in section VIII, where the word
          Dhamma is mapped onto Claude Shannon's information theory.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        <StepTimeline steps={sectionWalk} />
      </div>

      <section className="max-w-4xl mx-auto px-6 mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
          The four Pali terms and what Fleischman pairs them with
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-6">
          The pamphlet's dedication lists four Pali words it intends to
          clarify in scientific language: anicca, anattā, kamma, and Dhamma.
          The table below names the pairing the pamphlet actually proposes for
          each, with a brief note on what the pairing is doing in the larger
          argument. The middle column is what Fleischman picks from the
          scientific literature; the right column is the role each pairing
          plays in the pamphlet's structure.
        </p>
        <ComparisonTable
          productName="Role in the pamphlet"
          competitorName="Scientific concept Fleischman pairs it with"
          rows={paliMappings}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
          The one place Fleischman openly names a discrepancy
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          Most popular write-ups about Vipassana and science skip past the
          places the analogy gets uncomfortable. Fleischman does not. In
          section II, after introducing Edwin Hubble and the Big Bang, he
          stops to acknowledge that the standard reading, in which the
          universe began about fourteen billion years ago, sits awkwardly
          with the Buddha's account in the Bhayabherava Sutta of the
          Majjhima Nikaya, which describes many very long cycles of world
          contraction and expansion.
        </p>
        <p className="text-zinc-700 leading-relaxed mb-4">
          He does not paper over the gap. He names it, then points out that
          cyclic-cosmology models, including the one developed by Paul
          Steinhardt of Princeton and Neil Turok of Cambridge, posit endless
          cycles of expansion and contraction at trillion-year scales rather
          than the more familiar billion-year scales, and that this picture
          looks closer to the suttas than a singular-origin Big Bang does.
          He stops short of claiming either side has been settled, and he
          does not lean on the cyclic models to score a point. He simply
          flags the open question and moves on.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          That moment of honesty is the part of the pamphlet that does the
          most work for me as a reader. The reframe of Vipassana as
          scientifically compatible is much more credible coming from someone
          who is willing to say where the framing breaks down than from
          someone who claims it never does.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
          What the pamphlet is and is not trying to do
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          The pamphlet is a translation project. Fleischman is taking words
          like anicca, anattā, kamma, and Dhamma and looking for the closest
          available analogues inside the contemporary scientific vocabulary,
          so that a reader who already trusts the second law of
          thermodynamics, the genome, the Pauli exclusion principle, and
          Shannon's information theory can find a foothold in the Pali
          tradition without having to first adopt a religious worldview.
          That is the entire purpose of the exercise.
        </p>
        <p className="text-zinc-700 leading-relaxed mb-4">
          The pamphlet is not an empirical defense of Vipassana. It does not
          attempt to argue that Vipassana works because of any specific
          neural mechanism, and it does not point to clinical studies. For
          that kind of evidence, the page on{" "}
          <Link
            href="/guide/scientific-evidence"
            className="text-teal-700 underline hover:text-teal-900"
          >
            scientific evidence for Vipassana meditation
          </Link>{" "}
          collects the relevant published research separately. Fleischman's
          project is the prior step: making sure the two vocabularies can
          meet at all.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          The pamphlet is also not an instruction manual. It does not tell
          the reader what to do on a cushion. The Goenka tradition reserves
          that transmission for an authorized assistant teacher inside the
          10-day residential course, and Fleischman, as an assistant teacher
          himself, holds that line cleanly.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
          A peer-practitioner caveat
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          I am writing this as an old student of six 10-day courses, not as
          a teacher and not as a scientist. I read the pamphlet because the
          framing it offers helped a number of friends of mine go to their
          first course who otherwise would not have. The single chapter that
          tends to land hardest with people from a technical background is
          section VIII, where Dhamma is mapped onto information theory.
          Whether the analogy survives sustained pressure is a question I do
          not have a definitive answer to, and I do not think the pamphlet
          does either.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          The pamphlet's modest tone is its biggest asset. It does not claim
          the Buddha anticipated quantum mechanics. It does not claim the
          suttas are an early draft of the Standard Model. It claims something
          smaller and harder to dismiss: that the worldviews are compatible
          enough that a scientifically minded reader can take the practice
          seriously without abandoning anything they already believe to be
          true about the physical world. That smaller claim is, in my
          experience, the one that opens the door for most people.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
          Where to read the pamphlet
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          The 2009 pamphlet is offered as a free digital download by
          Pariyatti. The cover page reads, in plain language, &ldquo;This
          eBook is offered freely. If you wish, you may donate and help us
          continue offering our services.&rdquo; A revised second edition
          with new essays is also available through the Pariyatti store and
          on Amazon, and a separate audiobook edition has been produced.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-zinc-700">
          <li>
            The Pariyatti store listing for the second edition is at{" "}
            <a
              href="https://store.pariyatti.org/vipassana-meditation-scientific-worldview"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              store.pariyatti.org
            </a>
            .
          </li>
          <li>
            Pariyatti, the publisher, is a 501(c)(3) sustained by
            contributions; their general site is{" "}
            <a
              href="https://www.pariyatti.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              pariyatti.org
            </a>
            .
          </li>
          <li>
            Course schedules and applications, for the 10-day residential
            course in which the technique is actually transmitted, are at{" "}
            <a
              href="https://www.dhamma.org/en-US/courses/search"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              dhamma.org
            </a>
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
          heading="Want to talk through how the framing applies to a daily sit?"
          description="Book a short call with the Practice Buddy team. We will not teach the technique. We can talk about how to keep a daily sit alive after a course, and how the matching works."
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
