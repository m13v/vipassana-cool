import type { Metadata } from "next";
import Link from "next/link";
import { PageComments } from "@/components/comments";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { ArticleSchema } from "@/components/article-schema";
import { ArticleHeader } from "@/components/article-header";
import { FaqSchema } from "@/components/faq-schema";
import { PracticeBuddyCta } from "@/components/practice-buddy-cta";
import {
  GradientWord,
  ConceptReel,
  Stats,
  FieldGuide,
  Diagnostic,
  Replacements,
  Beam,
  MidSitRule,
} from "./meaning-client";

const PAGE_URL = "https://vipassana.cool/t/gross-sensation-meaning";
const PUBLISHED = "2026-04-18";

export const metadata: Metadata = {
  title:
    "Gross Sensation Meaning: A Working Vocabulary for Naming What You Feel",
  description:
    "Gross sensation in Vipassana means a coarse-grained body sensation. A field guide of twelve specific labels, a three-question real-time diagnostic, and the rule that turns 'pain' into a precise two-word phrase you can use mid-sit.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Gross Sensation Meaning: A Working Vocabulary for Naming What You Feel",
    description:
      "A field guide of twelve gross sensation labels, a three-question diagnostic, and the rule that replaces 'it hurts' with a precise label you can apply during a sit.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Gross Sensation Meaning: A Working Vocabulary for Naming What You Feel",
    description:
      "Coarse-grained, not unpleasant. Twelve labels, three diagnostic questions, one rule. Built for the cushion, not the dictionary.",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question: "What does gross sensation mean?",
    answer:
      "In Goenka Vipassana, gross sensation translates the Pali term oḷārika vedanā. The literal sense is coarse-grained, blocky, low-resolution. A gross sensation is one your awareness can detect easily without sharpening. The English word gross is doing technical duty here, in the sense of a gross estimate or the gross motor system. It is not doing connotative duty. A gross sensation is not by definition unpleasant, disgusting, or bad. Pleasantness is a separate axis. A warm glow across the chest can be a gross sensation. So can knee pain. The opposite of gross is subtle, which means fine-grained and harder to detect.",
  },
  {
    question: "What are examples of gross sensations in meditation?",
    answer:
      "A working twelve-label vocabulary covers most cases: dense (heavy, blocky weight), sharp (a pin-thin point), throbbing (a rhythmic pulse), pressing (broad even downward weight), twisting (an internal corkscrew), grinding (two surfaces moving against each other), prickling (a field of coarse points), burning (diffuse heat), dragging (a slow downward pull), knotting (a bounded lump of tension), stinging (bright narrow surface heat), and locking (a frozen joint that refuses to release on the in-breath). Each label has a physical signature you can verify by attention. The point of the vocabulary is precision over judgment. Naming a sensation by its actual qualities short-circuits the reflex to label it as bad and start fighting it.",
  },
  {
    question: "How do I know if a sensation is gross or subtle?",
    answer:
      "Three questions, asked in real time. First, can you feel its outer edge? Bounded sensations tend to be the named gross sensations like knotting or sharp. Unbounded sensations split into either the broad gross category like pressing and dragging, or the subtle category like field-wide tingling. Second, does it pull harder than the area around it? Gravity is a gross sensation marker. Subtle sensations sit flat in the field. Third, can you describe it in one word, or do you need two? A two-word description (sharp inner knee, dense lower back, dragging both eyelids) is at the resolution gross sensations sit at. A one-word description means you have not specified yet and should stay with the sensation for one more breath cycle.",
  },
  {
    question: "Is a gross sensation always painful?",
    answer:
      "No. Gross is a resolution category, not a pleasantness category. A pleasant gross sensation is common: a warm glow across the chest, dense pleasant heaviness in the lower body near the end of a long sit, a sudden wash of well-being. These are coarse-grained (your awareness picks them up at a chunky scale) and pleasant at the same time. The instruction for them is the same as for unpleasant gross sensations: observe with equanimity, do not crave more of them, do not linger. Treating a pleasant gross sensation as if it were subtle is the standard mistake that leads to chasing pleasant experiences and undermining the practice.",
  },
  {
    question: "Why use a vocabulary of twelve labels instead of just observing?",
    answer:
      "Because un-labeled observation tends to collapse, in practice, to the two judgments your nervous system already runs: this is bad, this is good. The gap between feeling a sensation and reacting to it is short, and judgment fills it before equanimity has a chance to. Naming the sensation precisely (sharp, twisting, knotting, dragging) replaces the judgment with a description, and a description does not generate aversion the way a verdict does. The labels are not metaphysical claims. They are operational handles. After a few hundred sits the labels become automatic and the rule (replace any moral word with a physical noun and a region) does the work without the list in front of you.",
  },
  {
    question: "Where does the word gross come from in Vipassana terminology?",
    answer:
      "It is the standard English translation of the Pali oḷārika, used by S.N. Goenka inheriting the vocabulary from his teacher Sayagyi U Ba Khin, who learned it from Ledi Sayadaw, who drew it directly from the Theravada Abhidhamma. In every link of the chain, oḷārika means coarse, blocky, palpable. The English word gross, in its older sense, captures this well. The connotation of disgusting that the word picked up over the last few centuries in spoken English is unrelated and does not appear in the Pali source. For the deeper version of this lineage breakdown and the body-map of where gross sensations cluster across a 10-day course, see the companion article on gross sensation linked at the end of this page.",
  },
  {
    question: "How do I apply this during a real sit?",
    answer:
      "Five steps, in this order. First, hear the word in your head when it arrives: pain, bad, terrible, unbearable. Catch it. Second, drop the judgment word. Replace it with a physical noun from the twelve-label set. Third, add a qualifier of one word that locates it (inner knee, lower sacrum, both eyelids). Fourth, hold the two-word label for one full breath cycle without revising it. Fifth, move to the next region of the body scan at the pace your teacher gave you, not at the pace the loudest sensation pulls. The goal is not a perfect label. The goal is the move from judgment to description. The reaction loosens as a side effect of the labeling, not as a separate piece of work.",
  },
  {
    question: "Does this work for non-Vipassana meditation styles?",
    answer:
      "The vocabulary transfers cleanly to any practice that asks you to attend to body sensation: Mahasi noting, Shinzen Young's noting system, somatic experiencing, basic mindfulness of body in MBSR. The terminology of gross and subtle is specifically Goenka inflected by his Burmese lineage, but the underlying split (coarse-grained sensations versus fine-grained sensations) is present across most somatic traditions. The diagnostic and the rule (drop the judgment word, replace with a physical noun, add a one-word qualifier) work in any practice. They are not specific to a 10-day Vipassana course.",
  },
];

const toc = [
  { id: "definition", label: "What gross sensation actually means" },
  { id: "stats", label: "The three numbers behind this glossary" },
  { id: "field-guide", label: "Twelve labels, with physical signatures" },
  { id: "diagnostic", label: "The three-question diagnostic" },
  { id: "replacements", label: "Lazy default vs. precise label" },
  { id: "beam", label: "Why naming is the work" },
  { id: "rule", label: "The mid-sit rule, in five steps" },
  { id: "context", label: "Where this fits with the rest of the practice" },
];

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://vipassana.cool" },
          { name: "Guides", url: "https://vipassana.cool/t" },
          { name: "Gross Sensation Meaning", url: PAGE_URL },
        ]}
      />
      <ArticleSchema
        title="Gross Sensation Meaning: A Working Vocabulary for Naming What You Feel"
        description="A field guide of twelve specific gross sensation labels, a three-question real-time diagnostic, and the mid-sit rule that replaces 'it hurts' with a precise two-word phrase."
        url={PAGE_URL}
        datePublished={PUBLISHED}
      />
      <FaqSchema faqs={faqs} />

      <ArticleHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/t" },
          { label: "Gross Sensation Meaning" },
        ]}
        category="Sensations & Vocabulary"
        title="Gross Sensation Meaning: A Working Vocabulary for Naming What You Feel"
        description="Gross sensation means a coarse-grained body sensation, full stop. The dictionary definition takes one sentence. What this page gives you instead is a working vocabulary of twelve labels you can apply during a real sit, a three-question diagnostic that picks the right one in under ten seconds, and the rule that turns 'it hurts' into a precise two-word phrase."
        datePublished={PUBLISHED}
      />

      <div className="mb-8 rounded-lg border border-accent/20 bg-accent/5 p-4">
        <p className="mb-1 text-sm font-medium text-accent">TL;DR</p>
        <p className="text-sm text-muted">
          Gross sensation translates the Pali <em>oḷārika vedanā</em> and means
          a coarse-grained body sensation. Coarse, not unpleasant. The two get
          conflated because the English word gross does double duty. This page
          replaces the judgment-loaded vocabulary (pain, bad, unbearable) with a
          twelve-label working glossary you can apply during a sit (dense,
          sharp, throbbing, pressing, twisting, grinding, prickling, burning,
          dragging, knotting, stinging, locking). A three-question diagnostic
          picks the right label in seconds. The mid-sit rule is one sentence:
          drop the judgment word, replace it with a physical noun, add a
          one-word region. The reaction loosens as a side effect.
        </p>
      </div>

      <div className="mb-12">
        <ConceptReel />
      </div>

      <div id="stats" className="mb-12">
        <Stats />
      </div>

      <div className="mb-12 rounded-lg border border-border bg-card p-6">
        <p className="mb-3 text-sm font-semibold text-foreground">
          What this page covers
        </p>
        <ol className="list-decimal space-y-1.5 pl-6 text-sm text-muted">
          {toc.map((t) => (
            <li key={t.id}>
              <a href={`#${t.id}`} className="hover:text-accent">
                {t.label}
              </a>
            </li>
          ))}
        </ol>
      </div>

      <div className="space-y-12 text-muted leading-relaxed">
        <section id="definition">
          <h2 className="mb-3 text-2xl font-bold text-foreground">
            1. What gross sensation <GradientWord>actually</GradientWord> means
          </h2>
          <p className="mb-4">
            Gross sensation is the standard English translation of the Pali term{" "}
            <em>oḷārika vedanā</em>. <em>Oḷārika</em> means coarse, blocky,
            palpable, low-resolution. <em>Vedanā</em> is the Pali word for the
            feeling tone that arises when a sense base meets its object, which
            in body-scan practice means the physical sensation under the
            attention right now. The paired term is <em>sukhuma vedanā</em>,
            translated as subtle sensation. <em>Sukhuma</em> means fine-grained
            and harder to detect. Both terms describe a resolution, not a
            valence.
          </p>
          <p className="mb-4">
            English is uncooperative here. The word gross has two meanings.
            One is technical: a gross estimate, the gross motor system, gross
            domestic product. That is the meaning Goenka&apos;s translators
            were using. The other meaning, the spoken English one, is
            connotative: disgusting, unpleasant, off-putting. First-course
            students hear the second meaning and import it into the practice.
            Gross sensations become the bad ones; subtle sensations become the
            good ones. Two axes (resolution and pleasantness) collapse into one,
            and the entire body of first-course confusion flows downhill from
            there.
          </p>
          <p>
            The version this page works from is the technical one. Gross means
            coarse-grained. A gross sensation can be pleasant, unpleasant, or
            neutral. So can a subtle sensation. The vocabulary below is built
            on that distinction and stays out of the moral register entirely.
          </p>
        </section>

        <section id="field-guide">
          <h2 className="mb-3 text-2xl font-bold text-foreground">
            2. Twelve labels, with physical signatures
          </h2>
          <p className="mb-6">
            Most pages on this topic stop at the definition. The harder
            problem, on the cushion, is that you sit down and a sensation
            arrives that you cannot name in any precise way, and so you call it
            pain, and pain is a verdict, and the verdict triggers a reaction
            before equanimity can. The fix is a working vocabulary. The twelve
            labels below cover most of what an experienced practitioner
            actually reports across hundreds of sits. They are not exhaustive
            and they are not a closed taxonomy. They are operational handles.
          </p>
          <FieldGuide />
        </section>

        <section id="diagnostic">
          <h2 className="mb-3 text-2xl font-bold text-foreground">
            3. The three-question diagnostic
          </h2>
          <p className="mb-6">
            Twelve labels is too many to scan through under pressure. The
            diagnostic narrows the field in seconds. Run it on whatever
            sensation is loudest in this moment, before you reach for a label.
          </p>
          <Diagnostic />
        </section>

        <section id="replacements">
          <h2 className="mb-3 text-2xl font-bold text-foreground">
            4. Lazy default vs. precise label
          </h2>
          <p className="mb-6">
            What this looks like in practice. The left column is the sentence
            most students hear in their own head during a hard sit. The right
            column is the same moment, named precisely. The difference between
            the two is most of the practice.
          </p>
          <Replacements />
          <p className="mt-6">
            The right column is not a softening or a euphemism. The sensations
            described are real and frequently severe. The shift is that a
            description does not invite the same reaction a verdict does. You
            can sit with sharp, narrow, on the inner knee line for forty
            minutes. It is much harder to sit with it hurts for two.
          </p>
        </section>

        <section id="beam">
          <h2 className="mb-3 text-2xl font-bold text-foreground">
            5. Why naming <GradientWord>is</GradientWord> the work
          </h2>
          <p className="mb-6">
            The standard instruction is observe with equanimity. The standard
            failure mode is to try to manufacture equanimity directly, on top
            of an active reaction, which does not work because equanimity is
            not a feeling you can summon. It is the absence of the reaction.
            Naming a sensation precisely is what removes the conditions for
            the reaction in the first place. Once the sensation has a label
            and the label is sufficiently specific, there is nothing for the
            reaction to attach to. Equanimity is the residual.
          </p>
          <Beam />
        </section>

        <section id="rule">
          <h2 className="mb-3 text-2xl font-bold text-foreground">
            6. The mid-sit rule, in five steps
          </h2>
          <p className="mb-6">
            All of the above compressed into one runnable rule. Five steps,
            executed in roughly ten seconds the first few times, dropping to
            two seconds after a few hundred sits.
          </p>
          <MidSitRule />
        </section>

        <section id="context">
          <h2 className="mb-3 text-2xl font-bold text-foreground">
            7. Where this fits with the rest of the practice
          </h2>
          <p className="mb-4">
            Naming sensations is not a substitute for the technique. The
            technique is the body scan, performed at the pace your teacher
            gave you, with equanimity toward whatever arises. Naming is a
            patch on the place the technique tends to break for new students,
            which is the moment a strong gross sensation arrives and the mind
            collapses into one of two reactions before the scan can move on.
            Once the patch is internalized, the labels disappear. You stop
            saying the words in your head. The vocabulary becomes the lens.
          </p>
          <p className="mb-4">
            The companion piece to this article is{" "}
            <Link
              href="/t/gross-sensation"
              className="text-accent underline hover:text-foreground"
            >
              the longer breakdown of where gross sensations live across a
              10-day course
            </Link>
            , which maps the body region by region from day one through day
            ten and goes deeper on the etymology, lineage, and the six-cell
            sensation matrix. For the broader sensation overview (subtle
            sensations, free flow, what to do when something scary arises),
            see{" "}
            <Link
              href="/guide/sensations-and-experiences"
              className="text-accent underline hover:text-foreground"
            >
              the sensations and experiences overview
            </Link>
            . For a deeper look at the knee, back, and shoulder mechanics that
            generate most gross sensations during a course, see{" "}
            <Link
              href="/guide/vipassana-for-pain"
              className="text-accent underline hover:text-foreground"
            >
              vipassana for pain
            </Link>
            .
          </p>
          <p>
            The vocabulary on this page is built from the author&apos;s notes
            across six 10-day courses at three centers and from a daily
            practice that has held for{" "}
            <Link
              href="/t/vipassana-daily-practice"
              className="text-accent underline hover:text-foreground"
            >
              well over two years
            </Link>
            . It is operational, not scholarly. The errors it corrects are the
            errors the author has made on the cushion, with enough rep count
            to notice what each one cost.
          </p>
        </section>
      </div>

      <div className="mt-16 rounded-lg border border-accent/20 bg-accent/5 p-6">
        <p className="mb-3 text-sm font-semibold text-foreground">
          Frequently asked questions
        </p>
        <div className="space-y-5">
          {faqs.map((f) => (
            <div key={f.question}>
              <p className="mb-1.5 text-sm font-semibold text-foreground">
                {f.question}
              </p>
              <p className="text-sm text-muted">{f.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <PracticeBuddyCta
        heading="Vocabulary becomes lens through repetition."
        description="The labels become automatic somewhere around sit two hundred. Sitting daily is what gets you there. A practice buddy, joining you silently on a Google Meet call each morning, is the lowest-friction way to make the rep count actually happen."
      />

      <div className="mt-12 rounded-xl border border-border bg-card p-6">
        <h2 className="mb-4 font-semibold text-foreground">Related guides</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/t/gross-sensation"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Gross Sensation: The Mistranslation
          </Link>
          <Link
            href="/guide/sensations-and-experiences"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Sensations &amp; Experiences Overview
          </Link>
          <Link
            href="/guide/vipassana-for-pain"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Vipassana for Pain
          </Link>
          <Link
            href="/guide/anapana-and-vipassana-explained"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Anapana &amp; Vipassana Explained
          </Link>
          <Link
            href="/guide/recognizing-progress"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Recognizing Progress
          </Link>
          <Link
            href="/t/vipassana-daily-practice"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Daily Practice Rewiring
          </Link>
        </div>
      </div>

      <PageComments pageId="t-gross-sensation-meaning" />
    </article>
  );
}
