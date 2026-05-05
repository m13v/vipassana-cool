import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  FaqSection,
  ComparisonTable,
  ProofBanner,
  InlineTestimonial,
  Marquee,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type ComparisonRow,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/alternative/felt-sense-vs-mental-image-meditation";
const PUBLISHED = "2026-05-04";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Felt Sense vs Mental Image Meditation: Why Vipassana Sits On One Side By Design",
  description:
    "Felt-sense meditation works with bodily and sensory experience as it actually arises. Mental-image meditation generates or holds an internally-produced visual scene (deity, light, color, place). They are not stylistic variants. Amihai and Kozhevnikov (PLOS ONE 2014) showed they produce opposite autonomic responses: parasympathetic relaxation for Theravada, sympathetic arousal for Vajrayana visualization. Vipassana in the S.N. Goenka tradition has, by tradition rule, placed itself entirely on the felt-sense side and transmits no visualization.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Felt Sense vs Mental Image Meditation, and Where Vipassana Sits",
    description:
      "Two contemplative styles, opposite autonomic signatures (Amihai and Kozhevnikov 2014), and why one 50+ year tradition has structurally chosen one side and refused the other.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Felt Sense vs Mental Image Meditation",
    description:
      "Different brain systems, different traditions, different choices. Vipassana is not on the visualization side, by design.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "What is the difference between felt sense and mental image meditation?",
    a: "Felt-sense meditation works with bodily and sensory experience as it actually arises in the moment: warmth, pressure, breath at the body, sound in the room, the texture of attention itself. The reference point is direct experience, not a generated picture. Mental-image meditation generates or sustains an internally-produced visual scene: a deity, a colored disk, a stream of light, a remembered place, a candle flame in the mind's eye. The reference point is an image the practitioner is asked to hold or build. The two are often lumped together as meditation, but they recruit different cognitive systems and, per Amihai and Kozhevnikov's 2014 PLOS ONE study, produce opposite autonomic signatures. The felt-sense family is the Theravada side: Vipassana, Samatha as taught in the same lineage, Mahasi noting, MBSR. The mental-image family is most strongly associated with Vajrayana practice, including deity yoga and certain Tibetan visualization sets, and with Hindu kasina-derived practices. Both are real practices. They are not interchangeable.",
  },
  {
    q: "Where does Vipassana sit on this divide?",
    a: "Vipassana in the S.N. Goenka tradition is, by tradition rule, entirely on the felt-sense side. The tradition does not transmit any visualization component, does not ask students to generate an internal image, does not include a deity-yoga element, and does not include any chakra-visualization or color-light practice. This is not a stylistic choice the tradition makes individually for each student; it is structural and uniform across all 200+ Goenka centers worldwide. The technique itself is reserved for transmission inside a 10-day residential course by an authorized assistant teacher and is not published in app, audio, video, written, or visual form. This page therefore does not describe how the technique works. It only describes where it sits, which is unambiguously on the felt-sense side of this comparison.",
  },
  {
    q: "Are felt sense and mental image meditation just different styles, or are they actually different?",
    a: "Actually different, in measurable ways. Amihai and Kozhevnikov ran EEG and electrocardiogram on experienced practitioners from temples in Thailand and Nepal. Theravada Shamatha and Vipassana practitioners showed parasympathetic activation, the autonomic signature of relaxation. Vajrayana Deity and Rig-pa practitioners showed sympathetic activation, the signature of arousal, and showed immediate dramatic improvements in visual cognitive tasks (mental rotation and visual memory) administered right after the sit. Same room, same researchers, opposite signatures. The popular framing of all meditation as a generalized relaxation response was set up against this study and the literature it sits in. Different practices do different work. That is the load-bearing claim of the page.",
  },
  {
    q: "Is Eugene Gendlin's felt sense the same thing meditation traditions are talking about?",
    a: "Related, not identical. Gendlin's term 'felt sense' was introduced in his 1978 book Focusing, in a psychotherapy context. He used it for the unclear, pre-verbal, bodily-located sense of a situation that is more than emotion and more than thought, and his six-step Focusing method is a way of letting that bodily sense come into language. Contemplative traditions that work with sensation-as-it-arises (Theravada, MBSR, body awareness practices) overlap with Gendlin's territory but are not derived from him; the Theravada line is roughly 2500 years older and was formed inside a different framing. The reason the same English phrase 'felt sense' now does double duty for a Gendlin therapeutic concept and for a sensation-side meditative emphasis is that the English-speaking world picked it up from him and applied it to neighboring practices. The traditions themselves use their own terms.",
  },
  {
    q: "Can someone with aphantasia practice Vipassana?",
    a: "Yes. The Goenka tradition does not include any visualization step, so the absence of mental imagery is not a barrier to the technique as taught. People who report no visual mental imagery (aphantasia) and people who report extremely vivid imagery (hyperphantasia) sit the same 10-day course, are taught the same way, and are not asked to do anything that depends on a mind's eye. This is one practical implication of the tradition's choice to sit on the felt-sense side. For practices that do depend on visualization (deity yoga, certain guided imagery techniques, kasina-derived sets), aphantasia is a more genuine constraint, and practitioners are usually directed to alternative approaches inside those traditions. None of this is medical advice; for any specific question about whether a 10-day course is appropriate for you, see the safety guide on this site and the screening section on dhamma.org.",
  },
  {
    q: "Does the difference between felt-sense and mental-image meditation matter for daily practice?",
    a: "Yes, in two practical ways. First, daily practice in the Goenka tradition is silent and self-led; old students sit on their own, without guided audio of any kind, after the technique was transmitted at the course. A practice on the visualization side typically continues to work with a generated image at home and may include guided audio or a teacher's prompt to anchor the visual. The shape of the daily sit is therefore different. Second, the autonomic signature carries over. A felt-sense daily sit tends to wind the nervous system down. A visualization daily sit tends to wind a particular kind of attention up. Neither is wrong; they are pointing at different things. Choosing which one you build a daily practice around is partly a question of what you want the practice to do.",
  },
  {
    q: "Is one approach better than the other?",
    a: "No, and the question is shaped wrong. Felt-sense and mental-image practices come out of long lineages that have each been refined for the work they do. Visualization practices in the Vajrayana line are highly developed and are taken seriously by their own practitioners and by serious scholars; the Amihai and Kozhevnikov result that visualization produces immediate cognitive task improvement is not a knock on Vajrayana, it is a description of what those practices actually do. Felt-sense practices in the Theravada line are similarly refined for their own purposes, including the parasympathetic settling and the long-term work the Goenka tradition organizes around. Choosing between them is a question about what work you are trying to do. It is not a quality contest.",
  },
  {
    q: "Why does the Goenka tradition refuse to include any visualization?",
    a: "The tradition's framing, as articulated in Goenka's recorded discourses and on dhamma.org, is that the technique works with experience as it actually is, including sensation that arises without effort, and that introducing a generated image would shift the practice toward a different kind of work. The line is held strictly: the 10-day course does not include kasina-style visualizations, does not include deity practices, does not include color or light visualizations, and does not include guided imagery. This is consistent across all centers because the tradition is centrally administered by the Vipassana Research Institute and follows S.N. Goenka's lineage from Sayagyi U Ba Khin. It is not a stylistic choice; it is a curriculum-level commitment. For operational questions about why, students are directed to an authorized assistant teacher at a 10-day residential course.",
  },
  {
    q: "How do I find out which approach fits me?",
    a: "The most useful answer is also the most boring one: you find out by sitting. A 10 minute trial of guided visualization (most apps offer one) and a 10 minute trial of body-awareness meditation (also widely available) will tell you more than any reading. If you want to commit to the felt-sense path in the Goenka tradition specifically, the only door is a 10-day residential course; you can find one at dhamma.org. The course is donation-funded and carries no application fee. If you want to explore visualization-based practice, look for a teacher in a Vajrayana lineage; that is not something this site can authoritatively recommend, and it is outside the scope of what is taught here.",
  },
  {
    q: "Is there a practice buddy program for people sitting daily on the felt-sense side?",
    a: "Yes. This site runs a free practice buddy matching program for old students of the S.N. Goenka tradition. The flow is short: enter an email and the time-zone overlap window in which you can sit. Once a partner with overlapping availability appears, both parties get an email with a permanent Google Meet link and sit silently together at the same time every day. There is no app, no streak, no guided audio. The match is a real human, not an LLM. The eligibility is narrow on purpose: one or more 10-day Goenka courses sat. If that is you, the path is /practice-buddy on this site.",
  },
  {
    q: "What does this site offer for the question itself?",
    a: "This page, plus a small set of related guides on the descriptive side of the line. The vipassana.cool homepage metadata, in src/app/page.tsx of this repository, opens with: 'Get matched 1-on-1 with the same fellow old student in your time zone and sit together at the same time every day over Google Meet. Not a group sit, not an app, no streaks. Free, silent, tradition-respectful. For students of S.N. Goenka 10-day courses.' That phrasing is the same ethic the technique itself sits inside: silent, bare, no generated content. The site is run by Matthew Diakonov, an old student with six 10-day courses sat at three Goenka centers (Dhammamanda in NorCal, CYO in the Bay Area, North Fork in Central California), as a peer resource. It is not a teaching site; for any operational question about the technique, the redirect is to dhamma.org and to an authorized assistant teacher.",
  },
];

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Reference point of the practice",
    competitor:
      "An internally-generated image: deity, color disk, light, scene, candle flame in the mind's eye",
    ours:
      "Direct sensation as it arises in the body and sensory field, with no generated content",
  },
  {
    feature: "Cognitive system primarily recruited",
    competitor:
      "Mental imagery, visual working memory, sustained generation of an internal scene",
    ours:
      "Interoception, attention to ongoing bodily and sensory experience",
  },
  {
    feature: "Autonomic signature (Amihai and Kozhevnikov 2014)",
    competitor:
      "Sympathetic activation, signature of arousal; immediate gains on visual cognitive tasks",
    ours:
      "Parasympathetic activation, signature of relaxation; no immediate cognitive task gains",
  },
  {
    feature: "Required ability to visualize",
    competitor:
      "High; aphantasia is a real constraint and traditions adapt or redirect",
    ours:
      "None; absence of mental imagery is not a barrier to the technique as taught",
  },
  {
    feature: "Typical lineage home",
    competitor:
      "Vajrayana (deity yoga, Rig-pa), Hindu kasina-derived sets, contemporary guided imagery",
    ours:
      "Theravada (Vipassana, Samatha as taught alongside it, Mahasi noting), and the secular MBSR descendant",
  },
  {
    feature: "Form of daily practice after instruction",
    competitor:
      "Often continues with the generated image, may use guided audio or teacher prompts to anchor it",
    ours:
      "Silent, self-led, no guided audio, no generated content; the technique was received at the course",
  },
  {
    feature: "Position of the Goenka tradition",
    competitor:
      "Not part of the curriculum; not transmitted; not included in the 10-day course",
    ours:
      "Curriculum-level commitment, uniform across all 200+ Goenka centers worldwide",
  },
];

const feltSenseTraditions = [
  "Vipassana (Goenka)",
  "Mahasi noting",
  "Theravada Samatha",
  "MBSR (Kabat-Zinn)",
  "Body awareness practices",
  "Gendlin Focusing (1978)",
  "Somatic experiencing",
  "Anapana as taught in Theravada lineages",
];

const mentalImageTraditions = [
  "Vajrayana deity yoga",
  "Tibetan Rig-pa (visualization-anchored)",
  "Hindu kasina disks",
  "Light and color visualizations",
  "Tantric self-generation practices",
  "Guided imagery in clinical settings",
  "Chakra-visualization sets",
  "Devotional visualization in many traditions",
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Alternatives", href: "/alternative" },
  { label: "Felt Sense vs Mental Image Meditation" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Felt Sense vs Mental Image Meditation", url: PAGE_URL },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Felt Sense vs Mental Image Meditation: Why Vipassana Sits On One Side By Design",
    description:
      "Felt-sense meditation works with bodily and sensory experience as it arises. Mental-image meditation generates an internal visual scene. Amihai and Kozhevnikov (2014) showed they produce opposite autonomic responses. Vipassana in the Goenka tradition is structurally on the felt-sense side and includes no visualization.",
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
          A meditator's note, May 2026
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          Felt sense vs mental image meditation: why Vipassana sits on one side by design
        </h1>
        <p className="mt-5 text-lg text-zinc-600 max-w-3xl leading-relaxed">
          Two contemplative styles get described as if they were stylistic
          variants of the same thing. They are not. They recruit different
          cognitive systems, are taught inside different lineages, and produce
          opposite autonomic signatures in real laboratory measurements. The
          tradition I sit in, S.N. Goenka's Vipassana, has placed itself
          entirely on one of those sides. That choice is structural, uniform,
          and over fifty years old. This page is a reflective comparison from a
          peer practitioner, not a teaching of either technique.
        </p>
      </header>

      <section className="max-w-4xl mx-auto px-6 my-10">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-teal-700 mb-2">
            Direct answer (verified 2026-05-04)
          </p>
          <p className="text-zinc-800 leading-relaxed">
            Felt-sense meditation works with direct bodily and sensory
            experience as it arises in the moment. Mental-image meditation
            generates or sustains an internally-produced visual scene (a deity,
            a color, a place, a light). They are not interchangeable.{" "}
            <a
              href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0102990"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              Amihai and Kozhevnikov, PLOS ONE 2014
            </a>{" "}
            measured the autonomic difference: Theravada felt-sense practices
            produced parasympathetic activation (relaxation), Vajrayana
            visualization practices produced sympathetic activation (arousal)
            with immediate gains on visual cognitive tasks. Vipassana in the
            S.N. Goenka tradition sits, by tradition rule, entirely on the
            felt-sense side and includes no visualization at any stage. The
            authoritative source for the tradition's framing is{" "}
            <a
              href="https://www.dhamma.org/en-US/courses/search"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              dhamma.org
            </a>
            .
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The thesis: this is a real divide, not a personal preference
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          Most popular writing on this question treats felt-sense and
          mental-image meditation as two equally valid flavors that you pick
          between based on your own wiring. The aphantasia literature reframes
          it as an accommodation problem (some people cannot generate vivid
          mental imagery, so they need a non-visual approach). Eugene Gendlin's
          1978 book Focusing introduced the English term &ldquo;felt sense&rdquo;
          for a particular kind of bodily-located, pre-verbal knowing in a
          psychotherapy context, and that term has since drifted into
          meditation discourse to label sensation-side practice. All of these
          framings are honest as far as they go. None of them puts the most
          load-bearing fact on the page: an entire fifty year contemplative
          lineage has placed itself on the felt-sense side as a structural
          commitment, and the laboratory data show the two sides are not doing
          the same kind of work.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          That is the argument of this page. The choice between felt-sense and
          mental-image meditation is partly answered before you ever sit down,
          by which tradition you walk into. If you walk into a 10-day Goenka
          course, you have already chosen the felt-sense side, because the
          tradition does not transmit a visualization at any point. If you walk
          into a Vajrayana center to study deity yoga, you have already chosen
          the visualization side, because deity practice is the load-bearing
          method of that lineage. The interesting question is not which one is
          better. The interesting question is which one matches the work you
          want the practice to do.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What &ldquo;felt sense&rdquo; means, and where the term comes from
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          The English phrase has two parents in modern usage. The first is
          Eugene Gendlin's 1978 book Focusing, where felt sense is given a
          precise meaning: the unclear, pre-verbal, bodily-located sense of a
          situation, which is more than emotion (you can already name an
          emotion) and more than thought (a felt sense is implicit, not
          articulated). Gendlin's six-step Focusing method, developed inside
          psychotherapy at the University of Chicago, is a procedure for
          letting that bodily sense come into language. The book sold over
          500,000 copies and is largely responsible for the phrase being in
          general circulation today.
        </p>
        <p className="text-zinc-700 leading-relaxed mb-4">
          The second parent is the Theravada Buddhist line, which is roughly
          2500 years older and uses its own technical vocabulary. When
          contemporary Theravada-influenced writing in English uses
          &ldquo;felt sense&rdquo; for the sensation-side emphasis, it is
          borrowing Gendlin's English phrase as a convenient shorthand for an
          older idea. The two are related but not identical: Gendlin's felt
          sense is a therapeutic concept, oriented toward articulating an
          implicit knowing. The Theravada use of sensation-as-it-arises sits
          inside a different framing about the nature of experience and is the
          object of a longer arc of practice. It is reasonable to use the
          phrase for both, as long as the borrowing is clear.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          On this page, &ldquo;felt-sense meditation&rdquo; refers to any
          practice whose reference point is direct experience of sensation,
          breath, sound, attention, or other immediate phenomena, without a
          generated image as the object. Vipassana in the Goenka tradition
          falls inside this. So does MBSR, which Jon Kabat-Zinn adapted from
          Vipassana into a clinical setting in 1979. So does Mahasi noting in
          the Burmese line. So do many somatic and body-awareness practices
          outside Buddhism.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What mental-image meditation actually covers
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          Visualization practice in serious contemplative traditions is not the
          guided-imagery vocabulary you find on most stress relief apps. The
          Vajrayana line treats visualization as a load-bearing method, not a
          decorative add-on. Deity yoga (yidam practice) asks the practitioner
          to generate, hold, and dissolve a complex internal image of a deity
          with a fixed iconography, often surrounded by an entourage and
          embedded in a mandala, and the practice is taught in stages by a
          qualified teacher. Hindu kasina practices, which predate the Buddha,
          use a colored disk or element as an external object that is
          internalized over many sittings until it becomes a stable internal
          image. Sufi imaginal disciplines, certain Christian contemplative
          practices, and many shamanic traditions also work in this register.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          The point worth holding onto, especially when comparing to felt-sense
          practice, is that visualization in these traditions is not a fluffy
          relaxation aid. It is a technical method with a long internal
          literature and a measurable effect on cognition, and it requires real
          training and capacity. Treating it as a lesser cousin of
          sensation-based practice is a common move in popular writing and not
          a fair one.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <ProofBanner
          metric={"opposite signatures"}
          quote="Both focused (Shamatha) and distributed (Vipassana) attention meditations of the Theravada tradition produced enhanced parasympathetic activation indicative of a relaxation response. In contrast, both focused (Deity) and distributed (Rig-pa) meditations of the Vajrayana tradition produced sympathetic activation indicative of arousal, with an immediate dramatic increase in cognitive task performance."
          source="Amihai I, Kozhevnikov M. PLOS ONE, 2014. doi:10.1371/journal.pone.0102990"
        />
        <p className="text-sm text-zinc-500 italic mt-2 leading-relaxed">
          The 2014 study measured EEG and electrocardiogram on experienced
          practitioners from temples in Thailand and Nepal and ran cognitive
          tasks (mental rotation and visual memory) before and after each sit.
          The autonomic difference was not subtle and is not predicted by the
          common claim that &ldquo;all meditation produces a relaxation
          response.&rdquo; That claim was set up against this study and the
          surrounding literature. Pages comparing felt sense to visualization
          rarely cite it.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <ComparisonTable
          heading="Felt sense and mental image, side by side"
          intro="Where the two approaches actually differ. The right column is descriptive of the felt-sense side that Vipassana sits inside; the left column is descriptive of the visualization side it does not include."
          productName="Felt-sense side (Vipassana sits here)"
          competitorName="Mental-image side"
          rows={comparisonRows}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Traditions on each side of the divide
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-6">
          A non-exhaustive sketch. Most living traditions do not cleanly belong
          to one column (Tibetan Buddhism teaches Shamatha and Vipassana
          alongside deity practice; some Theravada teachers fold in mettā
          visualizations), but the dominant emphasis pulls each lineage toward
          one side. The Goenka line sits unusually firmly on the felt-sense
          side because it has been deliberate about not folding visualization
          back in.
        </p>
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 my-6">
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-teal-700 mb-3">
            Felt-sense side
          </p>
          <Marquee speed={36}>
            <div className="flex gap-3 px-3">
              {feltSenseTraditions.map((t) => (
                <span
                  key={t}
                  className="whitespace-nowrap rounded-full border border-teal-300 bg-white px-4 py-2 text-sm text-teal-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </Marquee>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 my-6">
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-zinc-600 mb-3">
            Mental-image side
          </p>
          <Marquee speed={36} reverse>
            <div className="flex gap-3 px-3">
              {mentalImageTraditions.map((t) => (
                <span
                  key={t}
                  className="whitespace-nowrap rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm text-zinc-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </Marquee>
        </div>
        <p className="text-sm text-zinc-500 leading-relaxed mt-4">
          Gendlin's Focusing is listed under felt sense even though it is not a
          Buddhist practice; the placement is by working register, not by
          lineage. Somatic experiencing (Peter Levine) and similar trauma-aware
          body-awareness modalities are similarly placed.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Where Vipassana sits, and what that implies
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          Three things follow from the Goenka tradition's choice to remain
          entirely on the felt-sense side. First, the practice does not
          require, train, or use mental imagery; this is one practical reason
          the technique is accessible to people with aphantasia, who report no
          visual mental images and would struggle in a deity-yoga or kasina
          context. Second, the autonomic register of daily practice tends
          toward the parasympathetic, which is part of why old students
          describe the sit as settling rather than activating. Third, daily
          practice after the course is silent and self-led, with no guided
          audio of any kind, because the technique is not the kind of thing
          that needs an external image or prompt; it works with experience
          that is already arriving.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          For any operational question about how the technique works, the only
          appropriate redirect is to{" "}
          <a
            href="https://www.dhamma.org/en-US/courses/search"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            dhamma.org
          </a>{" "}
          and to an authorized assistant teacher at a 10-day residential
          course. This site does not teach the technique. It only describes the
          shape of the choice, which is what this page is doing.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The anchor fact: the homepage line, and why it matches the technique
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          One small thing on this site, but it carries the argument of the page
          inside it. Open <code className="rounded bg-zinc-100 px-1 py-0.5 text-sm">src/app/page.tsx</code> at line 9. The metadata
          description for the homepage reads:
        </p>
        <blockquote className="rounded-2xl border-l-4 border-teal-500 bg-zinc-50 p-6 text-zinc-800 italic leading-relaxed my-4">
          &ldquo;Get matched 1-on-1 with the same fellow old student in your
          time zone and sit together at the same time every day over Google
          Meet. Not a group sit, not an app, no streaks. Free, silent,
          tradition-respectful. For students of S.N. Goenka 10-day courses.&rdquo;
        </blockquote>
        <p className="text-zinc-700 leading-relaxed">
          The phrasing is deliberate and it tracks the same ethic as the
          technique itself. The match is one human, not a generated companion.
          The session is silent, not narrated. There is no streak, no app
          mechanic, no in-app purchase, no chatbot. Nothing is generated; the
          two practitioners just sit in a quiet room with cameras on. That is
          the same posture toward generated content that the Goenka tradition
          takes inside the technique. The homepage is the small surface
          application of the same principle: do not add a layer of generated
          imagery between the practitioner and what is already there. Felt
          sense, all the way down to the marketing copy.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <InlineTestimonial
          quote="945+ days in. I sit at the same time every morning, no audio, no app open, eyes closed, in a quiet room. I have tried guided visualization meditations a few times over the years for curiosity. They produce a different state, not a worse one, but it is not what the daily Vipassana sit is for. The two practices are pointing at different things and the felt-sense side is the one I have a 10-day arc of training in. That is why my daily practice stays here."
          name="Matthew Diakonov"
          role="6 courses sat across Dhammamanda, CYO, North Fork. Not a teacher, just sharing experience."
          stars={5}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Where mental-image meditation is the right answer
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          A fair page admits the cases where the other side wins. Three of
          them, with no hedging.
        </p>
        <div className="space-y-5">
          <div className="border-l-2 border-teal-300 pl-5">
            <h3 className="font-semibold text-zinc-900 mb-1">
              You want immediate cognitive task improvement
            </h3>
            <p className="text-zinc-700 leading-relaxed">
              The Amihai and Kozhevnikov 2014 result is unambiguous: Vajrayana
              visualization sessions produced an immediate dramatic increase in
              performance on visual cognitive tasks (mental rotation, visual
              memory). Felt-sense practice did not. If your motivation is
              short-term cognitive boost, visualization wins this directly.
            </p>
          </div>
          <div className="border-l-2 border-teal-300 pl-5">
            <h3 className="font-semibold text-zinc-900 mb-1">
              You are in a tradition that takes visualization seriously
            </h3>
            <p className="text-zinc-700 leading-relaxed">
              Vajrayana practitioners working with a qualified teacher in a
              live lineage have a decades-deep set of methods that are not
              available on the felt-sense side. Trying to substitute Vipassana
              for deity yoga inside a Vajrayana arc is a category error and the
              traditions themselves do not recommend it. If you are inside that
              line, stay there and follow your teacher.
            </p>
          </div>
          <div className="border-l-2 border-teal-300 pl-5">
            <h3 className="font-semibold text-zinc-900 mb-1">
              You are using guided imagery clinically
            </h3>
            <p className="text-zinc-700 leading-relaxed">
              Clinical guided imagery (often used in pain management, oncology
              support, anxiety treatment) has a real evidence base in its own
              right. It is not the same object as a 10-day Goenka course, and
              the two are not in competition. If a clinician has prescribed
              guided imagery, that is a different conversation; this page is
              not about that.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          A practical implication for aphantasia
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          One small but useful corollary of the Goenka tradition's choice. The
          standard advice for someone with aphantasia (no visual mental
          imagery) who wants to meditate is: skip visualization-heavy
          techniques and look for body-awareness or sensation-based practice.
          That advice points, without naming it, exactly at the felt-sense
          side. Vipassana in the Goenka line is a clean fit because it does not
          ask for a mind's eye. It is also true that hyperphantasia (extremely
          vivid mental imagery) is not a particular advantage in the technique
          either, because the technique does not include a step where you
          generate or hold an image. The tradition is, on this dimension,
          neutral to imagery capacity; the door is the same shape for both
          ends of the spectrum.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          For anything more specific about whether a residential course is
          appropriate for your particular situation, see this site's risks and
          safety guide and the screening section on dhamma.org.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The honest framing for someone deciding
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          If you typed this question into Google, you are probably weighing two
          things at once: which approach fits your wiring, and which approach
          fits the work you want to do. The first half is partly empirical
          (try a 10 minute sample of each, see which one is even available to
          your nervous system). The second half is what the tradition you walk
          into has already decided for you. Vipassana in the Goenka tradition
          has decided: felt sense, no visualization, silent daily practice, 10
          day residential transmission, no exceptions. Vajrayana lineages have
          decided: visualization is load-bearing, with structured stages and a
          qualified teacher. Picking your side is partly a question of which
          decision you want made.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          The thing this site can plausibly help with is the felt-sense side,
          specifically the Goenka line, and specifically the daily practice
          problem after a course is done. The technique itself is not on this
          site. The container around it (a daily silent partner over Google
          Meet, no app, no streak) is what this site builds. If that matches
          where you are, the path is{" "}
          <Link
            href="/practice-buddy"
            className="text-teal-700 underline hover:text-teal-900"
          >
            /practice-buddy
          </Link>
          . If you have not sat a course yet, the door is{" "}
          <a
            href="https://www.dhamma.org/en-US/courses/search"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            dhamma.org
          </a>
          .
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Trying to figure out which side fits, before booking 10 days?"
          description="A short call with an old student who has six 10-day courses behind him, has tried both sides over the years, and built the practice buddy matcher on this site. I am not a teacher. I am a peer with experience to share."
        />
      </section>

      <FaqSection items={faqs} />

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-xl font-semibold text-zinc-900 mb-4">Related</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guide/vipassana-vs-other-meditation"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Vipassana vs other meditation traditions
          </Link>
          <Link
            href="/guide/sensations-and-experiences"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            What students commonly report
          </Link>
          <Link
            href="/alternative/ai-meditation-apps-vs-vipassana-daily-practice-2026"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            AI meditation apps vs Vipassana daily practice (2026)
          </Link>
          <Link
            href="/guide/scientific-evidence"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Scientific evidence for Vipassana
          </Link>
          <Link
            href="/guide/risks-and-safety"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Risks and safety
          </Link>
          <Link
            href="/practice-buddy"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Practice buddy matching
          </Link>
        </div>
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Felt sense or mental image? 15 minutes with an old student."
      />
    </article>
  );
}
