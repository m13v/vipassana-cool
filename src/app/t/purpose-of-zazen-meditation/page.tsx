import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ProofBanner,
  Team,
  RelatedPostsGrid,
  GradientText,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type TeamMember,
  type RelatedPost,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/purpose-of-zazen-meditation";
const PUBLISHED = "2026-05-02";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title: "The purpose of zazen meditation, in zen's own words",
  description:
    "Zen schools answer the question differently. Sōtō Zen, following Dōgen, teaches zazen as shikantaza, just sitting, not a method aimed at anything outside itself. Rinzai Zen frames zazen as the container for kōan inquiry, with kenshō named as the target. Both share a Mahayana premise that complicates the word purpose. A note from a Vipassana practitioner reading the Zen sources, not from a Zen authority.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "The purpose of zazen meditation, in zen's own words",
    description:
      "Sōtō says shikantaza, just sitting. Rinzai says kōan inquiry leading to kenshō. Both share the Mahayana view that what would be attained is already present. Sources: Dōgen's Fukanzazengi, Issho Fujita in Buddhist Inquiry, Lewis Richmond in Lion's Roar.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "The purpose of zazen meditation, in zen's own words",
    description:
      "The honest answer differs by school, and Sōtō Zen treats the question itself as a category error. A linguistic and lineage note, not a how-to.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "What is the purpose of zazen meditation in one paragraph?",
    a: "Zen does not give a single answer. In Sōtō Zen, following Dōgen, the purpose of zazen is zazen itself: sitting in the prescribed posture (kekka-fuza), with the attitude Dōgen calls hishiryō or non-thinking, and that act is held to be the realization, not a means to it. The technical name for this framing is shikantaza, just sitting. In Rinzai Zen, zazen is the container in which a student works through kōans assigned by a teacher, and the named target is kenshō, a direct seeing into one's own nature. Both schools share the Mahayana premise that what zazen would supposedly attain is already present, which is why both are uncomfortable with the word purpose taken in a strictly instrumental sense.",
  },
  {
    q: "Is shikantaza the same as having no goal at all?",
    a: "Sōtō teachers tend to phrase it that way, but they are careful. Lewis Richmond, writing in Lion's Roar, paraphrases the classical attitude as 'do not desire to become a buddha; do not try to get somewhere, to do something.' Issho Fujita, writing for the Barre Center for Buddhist Studies, puts it more sharply: 'for Dogen, the objective of zazen is just to sit in kekka-fuza correctly, there is absolutely nothing to add to it.' The point is not that nothing is happening; the point is that the practice is held to be complete in itself rather than a tool for producing a separate result later. That is a strong philosophical claim. It is not a shrug.",
  },
  {
    q: "How does Rinzai Zen frame the purpose?",
    a: "Rinzai gives zazen a more visible target. The student sits in the same general posture, but the practice is paired with kōan study under a teacher, and the named goal is kenshō, a direct seeing into one's nature. Hakuin Ekaku (1686 to 1769), the figure most associated with the modern Rinzai kōan curriculum, wrote and taught explicitly about the necessity of breakthrough experiences and their integration. Even in Rinzai, however, kenshō is described as the surfacing of something already present rather than the manufacture of something new, which keeps the underlying Mahayana grammar intact.",
  },
  {
    q: "Why do Zen sources sometimes refuse to call zazen a technique?",
    a: "Issho Fujita's argument in Buddhist Inquiry is that zazen, in Dōgen's framing, is not a mental exercise added to a body, but a whole-body posture that does not need additional mental work to count as the practice. He goes as far as saying zazen 'goes beyond mind/body dualism; both the body and the mind are simultaneously and completely used up just by the act of sitting in kekka-fuza.' Calling that a technique misreads it as one input among others (visualization, mantra, breath count) when the tradition is claiming the posture itself is the practice. This is also why mindfulness-of-breathing apps and zazen are not equivalent: the apps are technique-shaped, and Sōtō zazen at its most classical is not.",
  },
  {
    q: "How is this different from how Vipassana describes its own purpose?",
    a: "Vipassana, in the Goenka tradition I sit in, is comfortable naming an instrumental purpose: the technique trains the mind to read sensation directly, with the long-arc aim of a thinning of conditioned reaction. The grammar is cause and effect. Zazen, especially Sōtō zazen, refuses that grammar at the level of doctrine. Both lineages descend from the historical Buddha but inherit different commentarial soils: Theravada (the soil of Vipassana) keeps the language of method and result; Mahayana (the soil of Zen) reads the same teaching through emptiness and buddha-nature, where method-and-result language risks reifying a gap that the doctrine denies. The traditions describe the same activity, sitting still and looking, in two grammars.",
  },
  {
    q: "Does this site teach zazen?",
    a: "No. The author is a peer practitioner in S. N. Goenka's Vipassana lineage, not a Zen teacher. This page is a note about how Zen describes the purpose of zazen, sourced from Zen authors, with links out to authoritative Zen institutions. For actual zazen instruction, work with a Sōtō or Rinzai teacher at a real zendo. Zen Mountain Monastery, San Francisco Zen Center, and the Soto Zen Buddhism International Center are good starting points to find one.",
  },
  {
    q: "If shikantaza has no goal, why sit at all?",
    a: "That is the question the tradition wants the practitioner to live with rather than the one a webpage should answer. Sōtō teachers tend to handle it on the cushion and in private interviews, not in print, and the standard response is to redirect the question into the practice rather than away from it. If you want a real answer in a form you can use, you need a teacher. dharma centers near you, including online sangha now, can introduce you to one.",
  },
  {
    q: "Where do the quoted lines actually come from?",
    a: "Wikipedia's article on Zazen quotes Dōgen's Shōbōgenzō: 'Sitting fixedly, think of not thinking. How do you think of not thinking? Nonthinking. This is the art of zazen.' The Issho Fujita lines come from his article 'Zazen Is Not the Same as Meditation' at the Barre Center for Buddhist Studies (buddhistinquiry.org). The Lewis Richmond lines come from 'Zazen: Just Sitting, Going Nowhere' at lionsroar.com. All three are linked at the bottom of this page.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Purpose of zazen meditation" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Purpose of zazen meditation", url: PAGE_URL },
];

const citedAuthors: TeamMember[] = [
  {
    name: "Eihei Dōgen",
    role: "Founder of Sōtō Zen in Japan, c. 1200 to 1253",
    initials: "ED",
    bio: "Author of Fukanzazengi and the Shōbōgenzō. The classical Sōtō framing of zazen as not-a-means traces directly to him.",
    href: "https://en.wikipedia.org/wiki/D%C5%8Dgen",
  },
  {
    name: "Hakuin Ekaku",
    role: "Restorer of Rinzai Zen in Japan, 1686 to 1769",
    initials: "HE",
    bio: "Reorganized the kōan curriculum that defines modern Rinzai practice. The named target in Rinzai zazen, kenshō, is shaped by his teaching.",
    href: "https://en.wikipedia.org/wiki/Hakuin_Ekaku",
  },
  {
    name: "Issho Fujita",
    role: "Sōtō Zen priest, former director Soto Zen Buddhism International Center",
    initials: "IF",
    bio: "Author of the Buddhist Inquiry article 'Zazen Is Not the Same as Meditation,' the source for the kekka-fuza framing used on this page.",
    href: "https://www.buddhistinquiry.org/article/zazen-is-not-the-same-as-meditation/",
  },
  {
    name: "Lewis Richmond",
    role: "Sōtō Zen priest, Suzuki Roshi lineage",
    initials: "LR",
    bio: "Author of 'Zazen: Just Sitting, Going Nowhere' for Lion's Roar, the source for the 'do not desire to become a buddha' phrasing used on this page.",
    href: "https://www.lionsroar.com/zazen-just-sitting-going-nowhere/",
  },
];

const relatedPosts: RelatedPost[] = [
  {
    title: "Anapana and Vipassana: a short linguistic and historical note",
    href: "/t/anapana-and-vipassana",
    excerpt:
      "Two Pali terms, the lineage that carries them, and why the technique itself is reserved to the 10-day course. A sibling page to this one in shape: linguistic, not instructional.",
    tag: "Linguistic note",
  },
  {
    title: "Vipassana Buddhism definition: a lineage, not a paragraph",
    href: "/t/vipassana-buddhism-definition",
    excerpt:
      "Inside Buddhism, vipassana resolves to several modern lineages with different operational definitions. Useful counterpart to a page about zazen: same question, different commentarial soil.",
    tag: "Lineage",
  },
  {
    title: "Vipassana vs other meditation",
    href: "/guide/vipassana-vs-other-meditation",
    excerpt:
      "The site's broader compare guide, which already contains a section on Zen and zazen alongside MBSR, TM, and metta. Lighter and more practical than this page.",
    tag: "Compare",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline: "The purpose of zazen meditation, in zen's own words",
    description:
      "An honest, sourced answer to a contested question. Sōtō Zen, following Dōgen, teaches zazen as shikantaza, just sitting, not a means to anything outside itself. Rinzai Zen frames zazen as the container for kōan inquiry aimed at kenshō. The page draws on Dōgen, Hakuin, Issho Fujita and Lewis Richmond and is written from outside the Zen tradition by a Vipassana practitioner.",
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
        <p className="text-xs font-mono uppercase tracking-[0.22em] text-teal-600 mb-3">
          A note from outside the tradition
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          The purpose of zazen meditation, in <GradientText>zen's own words</GradientText>
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl leading-relaxed">
          The question is older than the answer. Zen schools have given
          two different replies for roughly eight centuries, and one of
          them treats the question itself as a category error. This page
          walks through both, sourced from Zen writers, written by a
          Vipassana practitioner who reads them as a peer rather than a
          colleague. For actual instruction, please go to a Zen teacher.
        </p>
      </header>

      <div className="py-4">
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="8 min read"
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 md:p-7">
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-teal-700 mb-3">
            Direct answer · verified 2026-05-02
          </p>
          <p className="text-zinc-800 text-[15px] md:text-base leading-relaxed">
            Zen schools answer the question differently. In Sōtō Zen,
            following the 13th century teacher Dōgen, zazen is{" "}
            <em>shikantaza</em>, just sitting; the prescribed posture
            held with the attitude Dōgen calls <em>hishiryō</em>, non-thinking, is
            itself the practice and the realization, not a means to it.
            In Rinzai Zen, zazen is the container for{" "}
            <em>kōan</em> inquiry under a teacher, with{" "}
            <em>kenshō</em>, a direct seeing into one's own nature, as
            the named target. Both schools share the Mahayana premise
            that what zazen would supposedly attain is already present,
            which is why both are uncomfortable with the word{" "}
            <em>purpose</em> taken in a strictly instrumental sense.
            Sources:{" "}
            <a
              href="https://en.wikipedia.org/wiki/Zazen"
              className="text-teal-700 underline hover:text-teal-900"
              rel="noopener noreferrer"
              target="_blank"
            >
              Wikipedia on Zazen
            </a>
            ,{" "}
            <a
              href="https://www.buddhistinquiry.org/article/zazen-is-not-the-same-as-meditation/"
              className="text-teal-700 underline hover:text-teal-900"
              rel="noopener noreferrer"
              target="_blank"
            >
              Issho Fujita in Buddhist Inquiry
            </a>
            ,{" "}
            <a
              href="https://www.lionsroar.com/zazen-just-sitting-going-nowhere/"
              className="text-teal-700 underline hover:text-teal-900"
              rel="noopener noreferrer"
              target="_blank"
            >
              Lewis Richmond in Lion's Roar
            </a>
            .
          </p>
        </div>
      </section>

      <div className="py-2 max-w-4xl mx-auto px-6">
        <ProofBanner
          quote="Sitting fixedly, think of not thinking. How do you think of not thinking? Nonthinking. This is the art of zazen."
          source="Eihei Dōgen, Shōbōgenzō Zazenshin (c. 1242), as quoted in Wikipedia's article on Zazen"
          metric="1242"
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Why the question is harder than it looks
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          Most pages that come up for this query treat the question as
          settled. They give a short answer about calmness, focus, or
          insight, and move on to posture. That is fine for a wellness
          frame, but it skips a thing the Zen tradition has been arguing
          about for almost a thousand years. In its own commentarial
          literature, Zen does not converge on a single instrumental
          purpose for zazen, and the largest school within it (Sōtō)
          treats the demand for one as a misreading of the practice.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The reason the question is hard is grammatical. Asking what
          something is for assumes the thing and the goal sit at
          different points on a cause-and-effect line: do A, get B. Most
          meditation contexts the modern reader has lived inside (apps,
          MBSR, secular mindfulness courses, even most introductory
          books) accept that grammar without remark. They are
          technique-and-outcome shaped. Zen, especially Sōtō, refuses
          that grammar at the level of doctrine. The refusal is not
          mystical; it is a specific Mahayana claim about the
          relationship between practice and realization, made explicit
          by Dōgen in the 13th century and held since.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          One other thing to flag, in the interest of honesty: I am a
          Vipassana practitioner in S. N. Goenka's lineage, not a Zen
          student or a Zen teacher. Six 10-day courses, 945+ days of
          daily sit, no claim to authority on Zen. What follows is what
          the Zen sources say, in their own words, with my reading
          interleaved as a peer rather than a colleague. For actual
          zazen instruction, you want a Zen teacher, not me.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The Sōtō answer: shikantaza, just sitting
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          Sōtō Zen takes the most striking position. The classical
          founding text in Japan is Dōgen's <em>Fukanzazengi</em> (the
          Universal Promotion of the Principles of Zazen), written
          around 1227, with a parallel argument in the{" "}
          <em>Shōbōgenzō Zazenshin</em>. In those texts and the talks
          around them, Dōgen argues that practice and realization are
          not separable steps. Sitting in the posture is, in his
          framing, already the awakening that other framings would treat
          as a future result. The technical term is{" "}
          <em>shikantaza</em>, often rendered as just sitting, and the
          attendant attitude he calls <em>hishiryō</em>, non-thinking
          (not no-thinking, and not thinking, but a third state the
          tradition has been writing books about ever since).
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          Issho Fujita, a Sōtō priest who served as director of the Soto
          Zen Buddhism International Center, makes the consequence of
          this explicit in his Buddhist Inquiry essay{" "}
          <em>Zazen Is Not the Same as Meditation</em>. He writes:
          &ldquo;for Dogen, the objective of zazen is just to sit in
          kekka-fuza correctly, there is absolutely nothing to add to
          it.&rdquo; And, more strikingly: &ldquo;zazen goes beyond
          mind/body dualism; both the body and the mind are
          simultaneously and completely used up just by the act of
          sitting in kekka-fuza.&rdquo; Read those two sentences slowly.
          The first one disposes of technique: there is nothing to add.
          The second one disposes of the body/mind split that most
          meditation discourse runs on. Together they describe a
          practice whose stated content is the bare posture, held
          correctly, period.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          Lewis Richmond, a Sōtō priest in the lineage of Shunryu Suzuki
          Roshi, writes for Lion's Roar in a piece titled{" "}
          <em>Zazen: Just Sitting, Going Nowhere</em>. His distillation
          is closer to what a student first hears in a zendo: &ldquo;do
          not desire to become a buddha; do not try to get somewhere, to
          do something.&rdquo; That sentence reads like a paradox until
          you put it next to Dōgen's claim. If sitting is already the
          practice and already the realization, then trying to get
          somewhere reintroduces the gap that the practice is supposed
          to dissolve. The trying is itself the misalignment.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          A Sōtō student would phrase the answer to this page's question
          something like this: zazen does not have a purpose external to
          itself, because what such a purpose would name is already
          here, and naming it as a goal pushes it out into a future that
          will never arrive. Sit, and that is enough.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The Rinzai answer: zazen as the container for kōan inquiry
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          Rinzai Zen names a target. The classical Rinzai curriculum,
          shaped substantially by Hakuin Ekaku in 18th century Japan,
          uses zazen as the seat in which the student works through{" "}
          <em>kōans</em>, paradoxical questions or stories assigned by a
          teacher and worked at over months and years in private
          interviews called <em>dokusan</em>. The named goal of the
          process is <em>kenshō</em>, often translated as a direct
          seeing into one's own nature: a sudden, recognized shift in
          what the practitioner takes themselves to be.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          Read straight, the Rinzai framing looks more instrumental than
          the Sōtō one. There is a method (kōan inquiry inside zazen),
          there is an outcome (kenshō), and there is a path through
          subsequent kōans to deepen and integrate it. Rinzai teachers
          are comfortable saying so. The reason most introductory
          accounts of Zen lean Rinzai-shaped is that the structure is
          easier to write down.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          The qualifier matters, though. Even in Rinzai, kenshō is not
          described as the manufacture of a new state. It is described
          as the surfacing of something already present that the student
          had been overlooking. The Mahayana doctrine underneath both
          schools, that buddha-nature is the ground rather than the
          target, keeps the underlying grammar intact. Rinzai zazen is
          for kenshō the way a window is for the light that is already
          on the other side of it.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What the Mahayana premise does to the word "purpose"
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          Both Zen schools sit inside the Mahayana stream of Buddhism,
          which inherits two doctrines that interfere with the word{" "}
          purpose. The first is <em>śūnyatā</em>, often glossed as
          emptiness: the claim that phenomena lack inherent, independent
          existence and arise relationally. The second is{" "}
          <em>tathāgatagarbha</em> or buddha-nature: the claim that the
          ground of awakening is already present in every being.
          Together, these doctrines pull at any account of practice that
          treats awakening as a separate state to be produced from a
          starting state. If the ground is already what it is, and the
          gap is conceptual rather than ontological, then the language
          of method-and-result starts to look misleading.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          That is the philosophical pressure under Sōtō's refusal of
          purpose-talk. It is not that Sōtō teachers think nothing
          happens when one sits. They think it does. They simply hold
          that describing what happens in instrumental terms (do A, get
          B) reintroduces the very split the practice is meant to
          unmake. So they describe the practice in a different grammar:
          posture, attitude, presence, just sitting.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          Rinzai accepts more of the instrumental grammar in its
          pedagogy because kōan work needs visible markers of progress
          to function as a curriculum. But the doctrinal floor is the
          same. When a Rinzai teacher confirms a kenshō, they are not
          confirming something built; they are confirming something
          recognized.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          How this lands next to a Theravada-style answer
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The reason this page exists on a Vipassana resource site is
          that the question of purpose looks completely different from
          the Theravada side. Theravada lineages, including the modern
          Goenka tradition I sit in, are comfortable naming an
          instrumental purpose for their seated practice: training the
          mind to read experience directly, with the long-arc aim of a
          gradual thinning of conditioned reaction. The grammar is cause
          and effect, openly. A 10-day course is described in those
          terms; the discourses given on the course evenings are
          described in those terms; the daily-practice ask afterwards is
          described in those terms.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          A reader who arrives at zazen expecting the same grammar will
          be confused by Sōtō. The confusion is not an
          accident. It is the difference between two commentarial soils.
          Both schools descend from the historical Buddha. Theravada
          preserved a path-and-fruit pedagogy that names stages and
          their effects. Mahayana, while keeping the path-and-fruit
          texts in its canon, layered emptiness and buddha-nature on top
          and pushed the underlying doctrine toward a non-dual reading
          where the path/fruit distinction itself is provisional. Both
          readings have been defended for centuries by careful people.
          Neither is a misreading.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          What it means in practice for a reader: do not import the
          grammar of one tradition wholesale into your reading of the
          other. If you sit zazen, sit it in the framing the Zen
          teachers actually use. If you sit Vipassana, sit it in the
          framing the Goenka tradition uses. Mixing the framings on the
          cushion tends to produce neither of them. (The Goenka
          tradition asks new students not to mix techniques during a
          fair-trial window for exactly this reason; Sōtō Zen has its
          own version of the same caution.)
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <Team
          subtitle="Sources cited on this page"
          title="The Zen writers this page draws on"
          members={citedAuthors}
        />
        <p className="text-zinc-700 mt-4 max-w-3xl leading-relaxed">
          For an actual introduction to zazen in either school, the
          right move is a real zendo with a real teacher. Three
          starting points used by many Western practitioners: Zen
          Mountain Monastery in upstate New York (
          <a
            href="https://zmm.org/meditation-instructions/"
            className="text-teal-700 underline hover:text-teal-900"
            rel="noopener noreferrer"
            target="_blank"
          >
            zmm.org
          </a>
          ) for the Soto/Rinzai-blended Mountains and Rivers Order,
          San Francisco Zen Center (
          <a
            href="https://www.sfzc.org"
            className="text-teal-700 underline hover:text-teal-900"
            rel="noopener noreferrer"
            target="_blank"
          >
            sfzc.org
          </a>
          ) in the Suzuki Roshi Sōtō lineage, and the Soto Zen Buddhism
          International Center (
          <a
            href="https://global.sotozen-net.or.jp"
            className="text-teal-700 underline hover:text-teal-900"
            rel="noopener noreferrer"
            target="_blank"
          >
            global.sotozen-net.or.jp
          </a>
          ) for the Sōtō school's own institutional voice. None of
          these are this site, and none are affiliated with it. They
          are simply the right places to ask.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          A practical note for the cross-tradition reader
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          Many Western meditators move between traditions over a
          lifetime. People who came up in MBSR drift into TM, drift into
          Zen, drift into Vipassana, drift back. The drift is normal and
          probably healthy. What is not healthy is sitting one tradition
          while reading another's purpose statement, because the
          mismatch produces a low-grade chronic disappointment: I am
          doing zazen, why do I not feel a result, when "result" is a
          word the tradition does not use? Or: I am sitting Vipassana,
          why am I not in shikantaza, when shikantaza is a word the
          Goenka tradition does not use either?
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          The honest move is to read each tradition in its own grammar
          and let the grammars not collapse into one. This page is one
          attempt at that for the Zen side, written from outside it.
          For the Vipassana side, the corresponding pages on this site
          are linked below. For everything operational in either
          tradition, please go to a teacher.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <RelatedPostsGrid
          subtitle="Related on this site"
          title="Sibling pages on lineage and language"
          posts={relatedPosts}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Want to talk through cross-tradition meditation honestly, with a peer?"
          description="If you are a Vipassana practitioner curious about Zen, or a Zen practitioner curious about Vipassana, I am happy to compare notes peer to peer. Not as a teacher in either tradition. Just as someone who has read across the line."
        />
      </section>

      <FaqSection items={faqs} />

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Compare notes on Zen, Vipassana, daily practice"
      />
    </article>
  );
}
