import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ProofBanner,
  FlowDiagram,
  BentoGrid,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type BentoCard,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/subtle-sensations";
const PUBLISHED = "2026-05-07";
const VERIFIED = "2026-05-07";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Subtle Sensations: A Note on the Pali Sukhuma and What the English Phrase Actually Says",
  description:
    "Subtle sensations is the standard English rendering of the Pali sukhuma, paired with oḷārika (gross), in a canonical aggregate-classification formula at SN 22.48. The pair describes resolution, not pleasantness. A short linguistic note. Not a practice page.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Subtle Sensations: A Note on the Pali Sukhuma and the English Translation",
    description:
      "Sukhuma is the Pali word the English 'subtle sensations' translates. Paired with oḷārika in SN 22.48. The pair is a resolution axis, not a valence axis.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Subtle Sensations: A Note on the Pali Sukhuma and the English Translation",
    description:
      "Sukhuma means fine-grained. The pair sukhuma/oḷārika is about the grain of an observation, not whether it is pleasant.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "What is the literal answer? What does 'subtle sensations' mean?",
    a: "It is the standard English rendering of the Pali sukhuma, paired with oḷārika (gross), in a canonical formula in the Khandha Sutta (SN 22.48) and elsewhere in the Pali canon. The full formula classifies each of the five aggregates (form, feeling, perception, formations, consciousness) as past or future or present, internal or external, gross or subtle, inferior or superior, far or near. Applied to vedanā (sensation or feeling), 'subtle' is the fine-grained end of the resolution axis: a sensation that requires a calm and concentrated mind to register at all. The word does not mean pleasant, and it does not name a stage of practice.",
  },
  {
    q: "Where in the Pali canon does the pair oḷārika and sukhuma appear?",
    a: "The pair appears in the standard aggregate-classification formula that recurs throughout the Khandha Saṃyutta. The locus classicus most often cited is the Khandhasutta at SN 22.48, where the Buddha defines each of the five aggregates with the eleven-axis description: past, future, or present; internal or external; gross or subtle; inferior or superior; far or near. The same formula appears in many other suttas in the same collection. Bhikkhu Bodhi and other modern translators render oḷārika as 'gross' or 'blatant' and sukhuma as 'subtle' or 'fine.' The Pali words are stable canonical and commentarial vocabulary across centuries of Theravada literature.",
  },
  {
    q: "Does 'subtle' mean pleasant or refined or advanced?",
    a: "No. The Pali sukhuma is a resolution word: fine-grained, low-amplitude, hard to detect without a calm and concentrated mind. The Pali canon has a separate vocabulary for pleasantness (sukha, dukkha, adukkhamasukha): the three-fold classification of vedanā as pleasant, unpleasant, or neutral. That is the valence axis. Sukhuma and oḷārika are not on that axis at all. A subtle sensation can be pleasant, unpleasant, or neutral; so can a gross one. Conflating the two axes is the most common English-language misreading of the term, and it is purely a translation artifact, not a feature of the Pali source.",
  },
  {
    q: "Is 'subtle sensations' a stage of practice that comes later?",
    a: "Not in the way the English word 'stage' tends to suggest. The Pali pair is a description of the grain of an observation, not a milestone the practitioner unlocks. Students at courses do report, over time, registering finer-grained sensations than they did at first; that is an empirical claim about training the apparatus of attention, and it is the sort of thing the tradition addresses inside the residential 10-day course, not on a website. The translation note here is narrower: as a Pali word, sukhuma is a property of the object, not an achievement of the observer. For anything operational about how the practice is taught and how the apparatus is trained, the redirect is dhamma.org and an authorized assistant teacher.",
  },
  {
    q: "How does the English gloss 'subtle' reach the modern Goenka tradition?",
    a: "Through the chain the tradition traces through modern Burma. Ledi Sayadaw, the late 19th and early 20th century Burmese monk associated with the revival of lay practice, taught and wrote in Burmese with extensive Pali citation. Sayagyi U Ba Khin, a 20th century Burmese lay teacher, taught in Burmese and English. S. N. Goenka, U Ba Khin's student, began teaching publicly in India in 1969 in Hindi and English, and his courses spread worldwide thereafter. Each node worked with Pali-inflected vocabulary, and the English glosses 'gross' (oḷārika) and 'subtle' (sukhuma) were standardized as the tradition moved into English-speaking settings. The Pali words long predate this lineage; the English glosses are recent translation decisions that have stuck.",
  },
  {
    q: "Why publish a separate page for 'subtle' if the site already has pages on 'gross sensation'?",
    a: "Because the two halves of the pair carry different English-language baggage and the misreadings happen at different points. The companion pages at /t/gross-sensation and /t/gross-sensation-meaning address the misreading that 'gross' means disgusting. This page addresses the misreading that 'subtle' means pleasant, refined, or advanced. The Pali pair is symmetrical (a single resolution axis); the English equivalents are not. Each English half deserves its own short note.",
  },
  {
    q: "Does this page explain how to work with subtle sensations?",
    a: "No. This page is a linguistic note. It describes what the English phrase translates from in Pali and how the translation can mislead. How sensations of any grain are worked with on the cushion is taught in person, during a 10-day residential course, by an authorized assistant teacher. This site does not attempt to reproduce that instruction and does not have the standing to. For the technique itself, the only authoritative source is the tradition's own at dhamma.org.",
  },
  {
    q: "Where do I go for the actual practice?",
    a: "A 10-day residential course at dhamma.org. The course is free, runs on donations from previous students, and is the only place the technique in this tradition is formally taught. Local courses, schedules, and applications live at https://www.dhamma.org/en-US/courses/search. For old students keeping a daily sit alive between courses, the peer-matching service on this site (vipassana.cool/practice-buddy) pairs you with another practitioner on a shared Google Meet at the same time each day; that is logistical scaffolding, not technique transmission.",
  },
  {
    q: "Is the day-counter on this site relevant to this page?",
    a: "Only as a footnote. The counter on the homepage reads 970+ as of the publish date of this page; the math is base 881 plus days since 2026-02-07, computed in src/components/day-counter.tsx. The relevance is that the linguistic notes on this site are written by a fellow practitioner, not a teacher; the count is a peer-to-peer credential, not a claim to authority on the technique. The translation question above is settled by Pali and English lexicography, not by anyone's day count.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Subtle Sensations" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Subtle Sensations", url: PAGE_URL },
];

const axesCards: BentoCard[] = [
  {
    title: "Resolution axis (oḷārika / sukhuma)",
    description:
      "Coarse-grained against fine-grained. The grain of an observation. Sukhuma is what the English 'subtle' translates. This is the axis 'subtle sensations' lives on. It is silent on whether the sensation is welcome.",
    size: "1x1",
    accent: true,
  },
  {
    title: "Valence axis (sukha / dukkha / adukkhamasukha)",
    description:
      "Pleasant, unpleasant, neutral. The three-fold classification of vedanā in the suttas. This is the axis pleasantness lives on. A sensation is on this axis and on the resolution axis at the same time, but the two are not the same axis.",
    size: "1x1",
  },
  {
    title: "The misreading is to fold these into one",
    description:
      "Most English-language pages on subtle sensations quietly equate subtle with pleasant or with refined. The Pali source does not. A subtle sensation can be unpleasant, a gross sensation can be pleasant, and neither valence is encoded in the resolution word. Keeping the two axes apart is most of the work this page is doing.",
    size: "2x1",
  },
];

const lineageSteps = [
  {
    label: "Pali canon",
    detail: "SN 22.48 and parallels: the eleven-axis aggregate formula",
  },
  {
    label: "Ledi Sayadaw",
    detail: "Late 19th to early 20th c. Burma; revival of lay practice",
  },
  {
    label: "Sayagyi U Ba Khin",
    detail: "20th c. Burmese lay teacher; taught in English and Burmese",
  },
  {
    label: "S. N. Goenka",
    detail: "Began teaching publicly 1969; English glosses standardized",
  },
];

const relatedPosts = [
  {
    title: "Gross Sensation: A Note on the Pali Term and the English Translation",
    href: "/t/gross-sensation",
    excerpt:
      "The companion translation note. Oḷārika means coarse-grained, not unpleasant. The English connotation of disgusting is a translation artifact.",
    tag: "Linguistic note",
  },
  {
    title: "Gross Sensation Meaning: The Word, Its Origin, and Its Lineage",
    href: "/t/gross-sensation-meaning",
    excerpt:
      "Where the English phrase 'gross sensation' comes from, the Pali source, and the chain through Ledi Sayadaw, U Ba Khin, and Goenka.",
    tag: "Etymology",
  },
  {
    title: "Anapana and Vipassana: A Linguistic Note",
    href: "/t/anapana-and-vipassana",
    excerpt:
      "A short note on the Pali words behind two terms a beginner usually meets together, and what the words say versus what the technique transmission contains.",
    tag: "Linguistic note",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Subtle Sensations: A Note on the Pali Sukhuma and What the English Phrase Actually Says",
    description:
      "A linguistic note on 'subtle sensations' as the standard English rendering of the Pali sukhuma, paired with oḷārika (gross), in the canonical aggregate-classification formula at SN 22.48. The pair is a resolution axis, distinct from the pleasant or unpleasant or neutral valence axis. Not a practice page.",
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

      <header className="max-w-4xl mx-auto px-6 pt-6 pb-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
          Linguistic note
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900">
          Subtle sensations: a note on the Pali sukhuma and what the English
          phrase actually says
        </h1>
        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          The English phrase{" "}
          <span className="font-medium text-zinc-800">subtle sensations</span>{" "}
          is the standard rendering of the Pali{" "}
          <span className="italic">sukhuma</span>, paired with{" "}
          <span className="italic">oḷārika</span> (gross), in a canonical
          formula that recurs throughout the Pali canon. The pair describes a
          resolution: the grain of a sensation, fine or coarse. It does not
          describe whether the sensation is pleasant, and it does not name a
          stage of practice. The page below is a short note on the word, the
          source, and the most common English-language misreading. It is not a
          practice page. It does not teach the technique.
        </p>
      </header>

      <ArticleMeta
        author="Matthew Diakonov"
        authorRole="Written with AI"
        datePublished={PUBLISHED}
        readingTime="6 min read"
      />

      <section className="max-w-4xl mx-auto px-6 pt-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Direct answer (verified {VERIFIED})
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            <span className="font-semibold">Subtle sensations</span> is the
            standard English rendering of the Pali{" "}
            <span className="italic">sukhuma</span>, the second half of the
            pair{" "}
            <span className="italic">oḷārika / sukhuma</span> (gross / subtle).
            The pair appears in the eleven-axis aggregate-classification
            formula at the Khandha Sutta,{" "}
            <a
              href="https://www.dhammatalks.org/suttas/SN/SN22_48.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              SN 22.48
            </a>
            , applied to all five aggregates including vedanā (sensation or
            feeling): past or future or present, internal or external, gross
            or subtle, inferior or superior, far or near. The pair is a
            resolution axis (coarse-grained vs fine-grained), not a valence
            axis (pleasant vs unpleasant); valence has its own separate Pali
            vocabulary (<span className="italic">sukha</span>,{" "}
            <span className="italic">dukkha</span>,{" "}
            <span className="italic">adukkhamasukha</span>). For anything
            operational about how sensations of any grain are met during a
            sitting, the redirect is{" "}
            <a
              href="https://www.dhamma.org/en-US/courses/search"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              dhamma.org
            </a>{" "}
            and an authorized assistant teacher at a 10-day residential course.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The word, in one paragraph
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          <span className="italic">Sukhuma</span> (also spelled sukhumā;
          Sanskrit <span className="italic">sūkṣma</span>) is a Pali word
          meaning fine-grained, fine, minute, low-amplitude. Its paired
          opposite is <span className="italic">oḷārika</span> (sometimes
          spelled olarika; Sanskrit{" "}
          <span className="italic">audārika</span>), meaning coarse-grained,
          blocky, palpable. The pair is standard Pali Abhidhamma vocabulary,
          used across centuries of Theravada commentary. When applied to{" "}
          <span className="italic">vedanā</span> (the sensation or feeling
          aggregate), the pair describes the grain of the observation, not
          whether the observation is welcome. A sensation that takes a calm
          and concentrated mind to register at all is sukhuma. A sensation
          obvious to anyone is oḷārika. Each of those can be pleasant,
          unpleasant, or neutral, on a different axis with a different Pali
          name.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The canonical source
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The pair appears in a recurring Pali formula that classifies each
          of the five aggregates along eleven axes. The locus classicus most
          often cited is the Khandhasutta at SN 22.48, in the Khandha
          Saṃyutta of the Saṃyutta Nikāya. The full Pali phrase, the same
          for every aggregate, runs:
        </p>
        <pre className="mt-4 overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm leading-relaxed text-zinc-800">
          <code>{`yaṃ kiñci vedanā,
atītānāgatapaccuppannaṃ
ajjhattaṃ vā bahiddhā vā
oḷārikaṃ vā sukhumaṃ vā
hīnaṃ vā paṇītaṃ vā
yaṃ dūre santike vā,
ayaṃ vuccati vedanā-kkhandho.`}</code>
        </pre>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          A serviceable English: any sensation whatsoever, past or future or
          present, internal or external, gross or subtle, inferior or
          superior, far or near, is called the sensation aggregate. A
          published translation by the dhammatalks.org house style renders
          the relevant axis as{" "}
          <span className="italic">blatant or subtle</span>; Bhikkhu Bodhi
          renders it as <span className="italic">gross or subtle</span>; the
          Goenka-tradition gloss is{" "}
          <span className="italic">gross or subtle</span>. The translation
          decisions diverge on the English half; the Pali half is one stable
          word, sukhuma, that has meant fine-grained for centuries.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          What the formula does, in its own context, is give the practitioner
          (or the reader of the suttas) a way to refuse to leave any class of
          a given aggregate outside the analysis. Sensation, the formula
          says, is sensation regardless of whether it is past or present,
          inside or outside, gross or subtle, and so on. The formula does
          not single subtle out as the prize. It refuses to single anything
          out. The classification is exhaustive on purpose.
        </p>
      </section>

      <ProofBanner
        metric="2 axes"
        quote="Sukhuma and oḷārika are about the grain of an observation. Sukha and dukkha are about how an observation is received. The two pairs are not the same pair, and the work most of this page does is keeping them apart."
        source="Linguistic note, vipassana.cool"
      />

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Two axes that get conflated in English
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The most common English-language misreading of{" "}
          <span className="italic">subtle sensations</span> is that the word{" "}
          <span className="italic">subtle</span> is doing some work that the
          Pali never asked it to do. In everyday English, subtle carries a
          connotative drift toward refined, advanced, pleasant, sophisticated.
          None of those connotations is in sukhuma. The Pali word is a
          resolution word. It tells you the grain of the observation. The
          axis it lives on is not the same axis that pleasantness lives on.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The suttas keep these axes lexically separate. The valence axis is
          named with its own three-term vocabulary: sukha (pleasant),
          dukkha (unpleasant), adukkhamasukha (neither). That triad is what
          a sutta is doing when it classifies vedanā by feeling-tone. The
          resolution axis is named with a different two-term vocabulary:
          oḷārika and sukhuma. A sensation can be classified on both axes at
          once. There is no canonical reason to expect a sukhuma sensation
          to be a sukha one, or an oḷārika one to be a dukkha one. They are
          different cuts.
        </p>
        <BentoGrid cards={axesCards} />
        <p className="mt-2 text-zinc-700 leading-relaxed">
          When an English-language post on subtle sensations starts implying
          that subtle is what shows up when practice goes well, or when an
          old student starts narrating their daily sit as a hunt for subtler
          and subtler textures, both have quietly imported the connotative
          drift. The Pali source does not reward that import. It is a
          translation artifact that travels best when nobody slows down to
          look at it.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The lineage that carried the gloss into English
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The Pali words long predate any modern teacher. The English glosses
          do not. In the lineage the Goenka tradition traces through modern
          Burma, the chain runs through Ledi Sayadaw, a late 19th and early
          20th century monk associated with the lay revival; through Sayagyi
          U Ba Khin, a 20th century Burmese lay teacher; through S. N.
          Goenka, U Ba Khin's student, who began teaching publicly in India
          in 1969 in Hindi and English. Each node worked in some mix of
          Pali, Burmese, Hindi, and English, and the English renderings of
          the technical pair settled along the way.
        </p>
        <FlowDiagram
          title="Transmission of the gloss"
          steps={lineageSteps}
        />
        <p className="mt-2 text-zinc-700 leading-relaxed">
          A practical consequence: the English phrase{" "}
          <span className="italic">subtle sensations</span> is roughly a
          century old in its current technical use, and the Pali word it
          translates is many centuries older than that. When the English
          phrase wobbles, the Pali word stays still. That is what makes the
          Pali useful as a hinge for sorting out the English.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          What this page is not
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          This page is a translation note. It is not a field guide, not a
          diagnostic, not a sensation vocabulary, and not a description of
          how a sitting unfolds. The technique in this tradition is
          transmitted in person, during a 10-day residential course, by an
          authorized assistant teacher who can answer questions one on one.
          A website cannot reproduce that container, and this site does not
          try. If a sentence above reads like instruction, read past it. The
          instructions are given at the course, not on a webpage.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          For anything operational about how sensations of any grain are met
          on the cushion, the right inputs are{" "}
          <a
            href="https://www.dhamma.org/en-US/courses/search"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            dhamma.org
          </a>{" "}
          and an authorized assistant teacher at a course. For old students
          keeping a daily sit alive between courses, the peer-matching
          service on this site lives at{" "}
          <Link
            href="/practice-buddy"
            className="text-teal-700 underline hover:text-teal-900"
          >
            vipassana.cool/practice-buddy
          </Link>
          , which pairs you with another practitioner on a shared Google
          Meet at the same time each day. That is logistical scaffolding,
          not technique transmission. The technique stays at the course.
        </p>
      </section>

      <RelatedPostsGrid
        title="Companion notes"
        subtitle="Adjacent linguistic notes on this site"
        posts={relatedPosts}
      />

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          section="subtle-sensations-footer"
          heading="Compare notes on a daily sit, peer to peer"
          description="A short call about keeping a daily sit alive between 10-day courses, peer to peer, not teacher to student. Translation questions and Pali pedantry welcome; technique questions belong with an authorized assistant teacher at a course."
        />
      </section>

      <section
        className="max-w-4xl mx-auto px-6 pt-12 pb-16"
        id="faq"
      >
        <FaqSection items={faqs} heading="Frequently asked questions" />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="subtle-sensations-sticky"
        description="Compare notes on a daily sit, peer to peer"
      />
    </article>
  );
}
