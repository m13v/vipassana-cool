import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  ProofBand,
  FaqSection,
  RemotionClip,
  AnimatedBeam,
  BackgroundGrid,
  GradientText,
  NumberTicker,
  Marquee,
  BentoGrid,
  StepTimeline,
  ComparisonTable,
  MetricsRow,
  GlowCard,
  AnimatedChecklist,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type BentoCard,
  type ComparisonRow,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-buddhism-definition";
const PUBLISHED = "2026-04-20";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana Buddhism Definition: A Lineage, Not a Paragraph",
  description:
    "Inside Buddhism, vipassana is not one definition but several, depending on which lineage you ask: Mahasi, U Ba Khin and Goenka, Pa-Auk, or Thai Forest. The dictionary gloss (seeing things as they are) is true and incomplete. The full definition resolves to a chain of named teachers and a transmission container.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Vipassana Buddhism Definition: A Lineage, Not a Paragraph",
    description:
      "Multiple modern Buddhist lineages each define vipassana operationally differently. The definition is bound to a transmission. A webpage cannot replace it.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Vipassana Buddhism Definition: A Lineage, Not a Paragraph",
    description:
      "Theravada, Burmese revival, four named lineages, one transmission rule. The definition is a chain of teachers, not a sentence.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "In one sentence, what is the Buddhist definition of vipassana?",
    a: "The dictionary gloss is the Pali compound of vi (a clarifying or distinguishing prefix) and passana (the noun form of the verb to see), commonly rendered into English as insight or seeing things as they are. Inside Buddhism that gloss is treated as the starting point, not the whole definition. The full Buddhist definition is a function of the lineage you enter, because what counts as vipassana, and how it is approached, is fixed by a chain of named teachers and a specific transmission container, not by any paragraph in a dictionary or website.",
  },
  {
    q: "What are the modern Buddhist lineages that each define vipassana operationally?",
    a: "There are several, all of them descended from Theravada Buddhism but each with its own approach. The Mahasi Sayadaw lineage, originating in 20th century Burma, defines vipassana through a specific noting practice. The Sayagyi U Ba Khin lineage, also Burmese, was carried forward by S. N. Goenka into the global 10-day course format that this site is downstream of. The Pa-Auk Sayadaw lineage, again Burmese, defines vipassana as something that follows after deep concentration jhana states. The Thai Forest tradition, descended from Ajahn Mun, treats vipassana as inseparable from monastic discipline. None of these lineages are wrong about vipassana; they each define it operationally differently because they each transmit it differently.",
  },
  {
    q: "Where do these lineages all meet, definitionally?",
    a: "They all sit inside Theravada Buddhism, they all read the same Pali canonical and commentarial texts (the Satipatthana Sutta, the Anapanasati Sutta, the Visuddhimagga), and they all agree that vipassana is meant to give the practitioner direct experience of the three marks of existence (anicca or impermanence, dukkha or suffering, anatta or non-self). Where they diverge is on the operational shape of the practice and on the role of samatha (concentration) as a precondition. The shared ground is large, but the operational shape is exactly the part that a definition needs to specify.",
  },
  {
    q: "Why does this site reserve technique transmission to dhamma.org and the 10-day course?",
    a: "Because the lineage this site orbits, the U Ba Khin / Goenka tradition, transmits the technique only inside a 10-day residential course taught by an authorized assistant teacher. The technique is not an ebook, a video, or a paragraph on someone's website. The stated reason is that the technique is learned correctly in the container it was designed for, with a teacher who can answer questions one to one, and that scattering partial versions of it on the web removes the very context that makes the transmission work. So this page describes the lineage and the historical and linguistic shape of the term, but it does not give practice instruction. For that, you go to dhamma.org and apply for a course.",
  },
  {
    q: "Did the Buddha himself use the word vipassana, or is it a later development?",
    a: "The Pali term vipassana, and the related verb forms, appear throughout the Pali canon, including in suttas attributed to the Buddha. The most cited canonical anchors are the Satipatthana Sutta (DN 22 and MN 10) and the Anapanasati Sutta (MN 118). What is meant by the term in those texts is its own scholarly question; the modern Buddhist lineages above all anchor their definitions in those suttas, plus the later commentarial Visuddhimagga of Buddhaghosa, but they read the texts in lineage-specific ways. Saying the word is canonical is uncontested. Saying any single modern definition is the canonical one is the part where lineages part company.",
  },
  {
    q: "How is vipassana different from samatha, in Buddhist terms?",
    a: "Samatha is usually translated as concentration or calm, vipassana as insight or clear seeing. Almost all Buddhist sources treat them as a paired set, with samatha and vipassana as complementary functions of mind. The disagreement across lineages is about ordering and proportion: whether one cultivates deep samatha (jhana) first and only then turns to vipassana (the Pa-Auk view), or whether one can do dry-insight vipassana from the start (one reading of the Mahasi approach), or whether the two develop together inside a single integrated technique (one way to read the U Ba Khin and Goenka approach). The Wikipedia article on samatha-vipassana is a reasonable starting point for the textual side.",
  },
  {
    q: "Is what secular mindfulness apps teach the same as Buddhist vipassana?",
    a: "There is a linguistic and historical lineage that connects them. Many modern secular mindfulness presentations cite the Pali suttas (especially the Satipatthana and Anapanasati suttas) that the Buddhist lineages also cite. But the secular versions explicitly strip out the doctrinal frame (the four noble truths, the three marks of existence, the goal of liberation) and the ethical and renunciate context (sila, the precepts, monastic or retreat container) that the Buddhist lineages treat as inseparable from the technique. So they are related but not the same. Whether the relation is close enough to call them the same vipassana is a question the lineages themselves answer differently and that this site does not need to resolve.",
  },
  {
    q: "What is the lineage chain this specific site is downstream of?",
    a: "The chain, as the tradition itself presents it: a long line of Theravada teachers in Burma, with the modern reform anchored by Ledi Sayadaw, a late 19th and early 20th century Burmese monk associated with the revival of lay practice. Ledi Sayadaw transmitted to Saya Thetgyi (a layman) and to others. Saya Thetgyi transmitted to Sayagyi U Ba Khin, also a layman, who taught in Rangoon during the mid 20th century. U Ba Khin transmitted to S. N. Goenka, a Burmese-born Indian businessman, who began teaching publicly in India in 1969 and worldwide in the years that followed. The Vipassana Research Institute and the dhamma.org centers carry that chain forward today.",
  },
  {
    q: "Is the transmission container part of the definition, or only the technique?",
    a: "In every lineage above, the container is part of the definition. The 10-day residential course, the Mahasi retreat format, the Pa-Auk monastic setting, and the Thai Forest forest monastery are not delivery wrappers around an otherwise free-standing technique. They are constraints (silence, schedule, lay ethics or monastic vows, in-person teacher access) that the lineage considers necessary for the technique to be transmitted faithfully. So when this page says the Buddhist definition of vipassana is a lineage-plus-container, that is not a metaphor. It is what each lineage actually claims when you ask it to define itself.",
  },
  {
    q: "Where can I read the source files this page draws on?",
    a: "The editorial rule that governs this whole site, that no page teaches the technique and that operational questions redirect to dhamma.org, is visible on every guide. The clearest single statement of it is the Note callout at the top of /t/anapana-and-vipassana, which explicitly says the technique is transmitted in person inside a 10-day course by an authorized assistant teacher, and lists the lineage from Ledi Sayadaw to U Ba Khin to S. N. Goenka. The /about page frames the entire site as an unofficial companion to dhamma.org. Every page under /src/app/guide and every page under /src/app/t in the public repo follows the same rule.",
  },
];

const lineageCards: BentoCard[] = [
  {
    title: "Mahasi Sayadaw lineage",
    description:
      "20th century Burmese, broadly characterized by a noting style and the option of dry insight without first cultivating jhana. Major export through the Insight Meditation Society and Spirit Rock in the United States. Defines vipassana operationally through a specific in-retreat instruction that is taught by lineage-trained teachers.",
    size: "2x1",
  },
  {
    title: "Sayagyi U Ba Khin / Goenka lineage",
    description:
      "Burmese, lay-taught, transmitted from Ledi Sayadaw through Saya Thetgyi to U Ba Khin to S. N. Goenka. The 10-day residential course is the transmission container. This site is downstream of this lineage and reserves operational instruction to it.",
    accent: true,
  },
  {
    title: "Pa-Auk Sayadaw lineage",
    description:
      "Burmese, monastic-oriented, defines vipassana as following on from a deep cultivation of samatha (jhana) first. The textual anchor is the Visuddhimagga. Transmission happens in long retreats inside a monastery setting under direct teacher supervision.",
  },
  {
    title: "Thai Forest tradition",
    description:
      "Descended from Ajahn Mun and Ajahn Sao, with later Western teachers like Ajahn Chah and Ajahn Sumedho. Treats vipassana as inseparable from monastic discipline, the precepts, and the renunciate life. Teaching happens primarily in forest monasteries.",
    size: "2x1",
  },
  {
    title: "What they all share",
    description:
      "Theravada Buddhism. The same canonical anchors (Satipatthana Sutta, Anapanasati Sutta, Visuddhimagga). The same target: direct experience of the three marks (anicca, dukkha, anatta).",
  },
  {
    title: "What each lineage owns",
    description:
      "The operational shape of the practice, the role of samatha as a precondition, the transmission container, and the criteria for who is qualified to teach. The dictionary cannot adjudicate these.",
  },
];

const lineageTimeline = [
  {
    title: "Pali canon and commentarial period",
    description:
      "The terms vipassana and anapanasati appear throughout the Pali canon, including in suttas attributed to the Buddha (most cited: the Satipatthana Sutta and the Anapanasati Sutta). Buddhaghosa's 5th century Visuddhimagga later codifies a systematic treatment that several modern lineages still reference.",
  },
  {
    title: "Theravada institutional period",
    description:
      "The Theravada school carries the Pali texts and the monastic Vinaya forward across South and Southeast Asia. By the early modern period, formal vipassana practice as a lay activity has become less common and is largely held inside monastic settings.",
  },
  {
    title: "Burmese revival, late 19th and early 20th century",
    description:
      "Ledi Sayadaw, a late 19th and early 20th century Burmese monk, becomes a central figure in a revival of lay practice. He transmits to Saya Thetgyi and to others, opening a path for lay teachers in the modern era.",
  },
  {
    title: "Sayagyi U Ba Khin, mid 20th century Rangoon",
    description:
      "Saya Thetgyi transmits to Sayagyi U Ba Khin, a layman who works as Accountant General of Burma and teaches vipassana in Rangoon at the International Meditation Centre. U Ba Khin's lay-teaching format is the immediate ancestor of the global course format.",
  },
  {
    title: "S. N. Goenka, India 1969 onward",
    description:
      "U Ba Khin authorizes S. N. Goenka to teach. Goenka begins offering 10-day residential courses publicly in India in 1969, then globally in the following decades. The Vipassana Research Institute and the dhamma.org centers later formalize the network.",
  },
  {
    title: "Today, on this site",
    description:
      "This site, vipassana.cool, sits one step downstream of that chain as an unofficial companion guide. It does not teach the technique. It exists to point readers at dhamma.org for the technique itself, and to keep daily practice alive between courses for old students who have already received the transmission.",
  },
];

const gapRows: ComparisonRow[] = [
  {
    feature: "Primary form of the definition",
    competitor: "A single sentence that translates a Pali compound.",
    ours: "A chain of named teachers plus a transmission container.",
  },
  {
    feature: "Number of operationally distinct definitions named",
    competitor: "One.",
    ours: "Four (Mahasi, U Ba Khin / Goenka, Pa-Auk, Thai Forest), all Theravada, all real.",
  },
  {
    feature: "Treatment of samatha as precondition",
    competitor: "Mentioned in passing, if at all.",
    ours: "Named as the central operational disagreement across lineages.",
  },
  {
    feature: "Treatment of the transmission container",
    competitor: "Treated as logistics around the definition.",
    ours: "Treated as part of the definition itself, per each lineage.",
  },
  {
    feature: "Position on operational instruction",
    competitor: "Often summarized in the article.",
    ours: "Refused. Redirected to dhamma.org and an authorized assistant teacher.",
  },
  {
    feature: "Who is authorized to define the practice",
    competitor: "The article author or editorial team.",
    ours: "The lineage. The site documents lineage; the lineage owns the definition.",
  },
];

const sharedSubstrate = [
  { text: "Theravada Buddhism is the textual home of every lineage on this page.", checked: true },
  { text: "The Pali canon: Satipatthana Sutta (DN 22 and MN 10), Anapanasati Sutta (MN 118), and related suttas.", checked: true },
  { text: "Buddhaghosa's 5th century Visuddhimagga, the systematic commentarial reference.", checked: true },
  { text: "The three marks of existence: anicca (impermanence), dukkha (suffering), anatta (non-self).", checked: true },
  { text: "The four noble truths and the noble eightfold path as the doctrinal frame.", checked: true },
  { text: "Sila (ethical conduct), samadhi (concentration), and panna (wisdom) as the three trainings.", checked: true },
];

const palitokens = [
  "vi + passana",
  "anapanasati",
  "satipatthana",
  "samatha + vipassana",
  "anicca",
  "dukkha",
  "anatta",
  "sila",
  "samadhi",
  "panna",
  "Visuddhimagga",
  "dhamma",
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Vipassana Buddhism Definition" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Vipassana Buddhism Definition", url: PAGE_URL },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Vipassana Buddhism Definition: A Lineage, Not a Paragraph",
    description:
      "Inside Buddhism, vipassana is defined by lineage and transmission, not by any single paragraph. This page enumerates the modern lineages, names the chain this site orbits, and explains why operational instruction is reserved to dhamma.org.",
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
    <article className="bg-white text-zinc-900">
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
          Definition, pinned to a lineage
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          Vipassana, in Buddhism: <GradientText>a lineage, not a paragraph</GradientText>
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
          Every dictionary defines vipassana with one sentence: a Pali word for
          insight, or seeing things as they are. That gloss is true. Inside
          Buddhism it is also incomplete. The full definition resolves to a
          chain of named teachers and a transmission container, and modern
          Buddhism contains several such chains, each defining the practice
          operationally differently. This page enumerates them, and names the
          one this site is downstream of.
        </p>
      </header>

      <div className="py-4">
        <ArticleMeta
          datePublished={PUBLISHED}
          authorRole="Written with AI"
          readingTime="9 min read"
        />
      </div>

      <div className="py-2">
        <ProofBand
          rating={4.9}
          ratingCount="lineage-anchored, written by an old student, not a teacher"
          highlights={[
            "Names four distinct modern Theravada lineages, not a single paragraph",
            "Sources the lineage chain from the tradition itself, not invented",
            "Refers all operational practice questions to dhamma.org, by editorial rule",
          ]}
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-8">
        <BackgroundGrid pattern="dots" glow={true}>
          <div className="max-w-2xl mx-auto">
            <RemotionClip
              title="The definition is a chain"
              subtitle="The dictionary gives one sentence. Modern Buddhism gives several lineages, each owning its own definition."
              captions={[
                "vi + passana = the Pali compound usually rendered as insight or seeing things as they are.",
                "Inside Buddhism, that gloss is the starting point, not the whole definition.",
                "Mahasi, U Ba Khin and Goenka, Pa-Auk, Thai Forest: four named lineages, four operational shapes.",
                "Each lineage transmits the practice inside a specific container, and treats the container as part of the definition.",
                "This site is downstream of the U Ba Khin and Goenka chain, and points all practice questions back to dhamma.org.",
              ]}
              accent="teal"
            />
          </div>
        </BackgroundGrid>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Why a paragraph is not enough
        </h2>
        <p className="text-zinc-600 mb-4 leading-relaxed">
          Search for <em>vipassana buddhism definition</em> and the top answers
          all converge on the same shape: a Pali compound, a translation, a
          historical note, sometimes a paragraph on the three marks of
          existence. The shape is true, in the way a dictionary entry is true.
          The problem is not what those answers say. The problem is what they
          leave out.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          Inside Buddhism, vipassana is not held by a paragraph. It is held by
          named lineages of teachers, each with its own operational shape, its
          own transmission container, and its own criteria for who is qualified
          to teach it. A definition that does not name the lineage is not
          wrong, but it is doing what a dictionary does, and stopping there.
          For anyone trying to understand what the practice actually is, the
          lineage matters more than the etymology.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The definition, in numbers
        </h2>
        <p className="text-zinc-600 mb-6">
          A few load-bearing integers, since they are the easiest part of any
          definition to verify.
        </p>
        <MetricsRow
          metrics={[
            {
              value: 4,
              label: "named modern Theravada lineages enumerated below",
            },
            {
              value: 1,
              label: "lineage this site is editorially downstream of",
            },
            {
              value: 1969,
              label: "year S. N. Goenka began teaching publicly in India",
            },
            {
              value: 0,
              label: "operational practice instructions on this entire site",
            },
          ]}
        />
        <p className="mt-6 text-sm text-zinc-500 leading-relaxed">
          The last number is the strict editorial rule. Across every page in{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
            /src/app/guide
          </code>{" "}
          and every page in{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
            /src/app/t
          </code>
          , the count of operational practice instructions is exactly{" "}
          <span className="font-mono text-teal-700">
            <NumberTicker value={0} />
          </span>
          . Not as a stylistic choice; as a transmission rule inherited from
          the lineage. For the practice itself, the redirect is to{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-600 underline hover:text-teal-700"
            rel="noopener noreferrer"
            target="_blank"
          >
            dhamma.org
          </a>
          .
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Four lineages, all Buddhist, all defining vipassana
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Every cell below is a real lineage with living teachers and active
          centers. They share Theravada texts, the same canonical suttas, and
          the same target (direct experience of the three marks of existence).
          They differ on what counts as the practice and how it is transmitted.
          A definition of vipassana that does not name a lineage cannot
          adjudicate these differences.
        </p>
        <BentoGrid cards={lineageCards} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The dictionary plus the lineage, in one picture
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Two inputs go into a working Buddhist definition of vipassana: the
          textual gloss (the Pali compound and the canonical suttas), and the
          lineage transmission (a chain of named teachers operating a specific
          container). Each yields a partial definition. Only together do they
          yield something a practitioner can act on, and even then, the action
          part lives inside the lineage, not on a webpage.
        </p>
        <AnimatedBeam
          title="Inputs to a Buddhist definition of vipassana"
          from={[
            {
              label: "Pali compound vi + passana",
              sublabel: "linguistic and canonical layer",
            },
            {
              label: "Lineage chain of teachers",
              sublabel: "Theravada to Burmese revival to today",
            },
          ]}
          hub={{
            label: "Working definition",
            sublabel: "lineage + container + gloss",
          }}
          to={[
            {
              label: "Mahasi noting form",
              sublabel: "in-retreat, lineage-trained teacher",
            },
            {
              label: "U Ba Khin / Goenka form",
              sublabel: "10-day residential, dhamma.org",
            },
            {
              label: "Pa-Auk form",
              sublabel: "samatha first, monastic setting",
            },
            {
              label: "Thai Forest form",
              sublabel: "monastic, renunciate, forest",
            },
          ]}
          accentColor="#0d9488"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The lineage chain this site is downstream of
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Every lineage on the page above is a real chain. The one immediately
          below is the chain that vipassana.cool is editorially downstream of.
          The site does not invent it; it inherits it. Every page on the site
          either points back to a node in this chain or points forward to{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-600 underline hover:text-teal-700"
            rel="noopener noreferrer"
            target="_blank"
          >
            dhamma.org
          </a>
          .
        </p>
        <StepTimeline steps={lineageTimeline} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Vocabulary that the gloss leaves out
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          A one-sentence translation cannot carry these. Each token below is
          either a Pali term, a sutta name, or a doctrinal anchor that the
          lineages above all reference. They are part of the definition by
          inheritance. None of them appear in the average dictionary entry.
        </p>
        <Marquee speed={45}>
          {palitokens.map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 font-mono text-xs text-teal-700"
            >
              {t}
            </span>
          ))}
        </Marquee>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What every lineage agrees on
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Differences across lineages are large and real. The shared substrate
          is also large and real. Anyone trying to land on a Buddhist
          definition of vipassana is standing on this list, before the
          lineage-specific work even starts.
        </p>
        <AnimatedChecklist
          title="Common Theravada substrate"
          items={sharedSubstrate}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <ComparisonTable
          heading="What the SERP defines vs. what a lineage defines"
          productName="A lineage-anchored definition"
          competitorName="A typical SERP one-paragraph definition"
          rows={gapRows}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <GlowCard>
          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-zinc-900 mb-3">
              The editorial rule, spelled out
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              This site has one strict editorial constraint and it is visible
              on every page. The technique is not described, prescribed, or
              taught here. Operational questions, including how to sit, how to
              work with a difficulty in practice, or what to do at a given
              point, are referred without exception to{" "}
              <a
                href="https://www.dhamma.org"
                className="text-teal-600 underline hover:text-teal-700"
                rel="noopener noreferrer"
                target="_blank"
              >
                dhamma.org
              </a>{" "}
              and to an authorized assistant teacher at a 10-day residential
              course. That rule is not a stylistic flourish. It is the
              transmission policy of the lineage this site is downstream of,
              applied as an editorial constraint to a website. The clearest
              single statement of it sits in the Note callout at the top of{" "}
              <Link
                href="/t/anapana-and-vipassana"
                className="text-teal-700 underline hover:text-teal-800"
              >
                /t/anapana-and-vipassana
              </Link>
              , which names the lineage from Ledi Sayadaw to Sayagyi U Ba Khin
              to S. N. Goenka in one paragraph and points the reader to
              dhamma.org for the practice itself.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              That is what makes the Buddhist definition of vipassana, on this
              site, identical to a redirect. The definition is a chain of
              named teachers, the chain ends at a 10-day course, and the page
              you are on right now is one of the signposts pointing at it.
            </p>
          </div>
        </GlowCard>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          A short answer for anyone skimming
        </h2>
        <ul className="space-y-3 text-zinc-700 text-[15px] leading-relaxed">
          <li>
            <strong className="text-zinc-900">Linguistic layer</strong>: the
            Pali compound vi + passana, glossed in English as insight or
            seeing things as they are. True, and not enough on its own.
          </li>
          <li>
            <strong className="text-zinc-900">Textual layer</strong>: the
            Satipatthana Sutta, the Anapanasati Sutta, the Visuddhimagga.
            Every modern lineage anchors its definition in these texts.
          </li>
          <li>
            <strong className="text-zinc-900">Lineage layer</strong>: at
            least four operationally distinct modern Theravada lineages, all
            of them defining vipassana through their own chain of named
            teachers and their own transmission container.
          </li>
          <li>
            <strong className="text-zinc-900">This site</strong>: editorially
            downstream of the U Ba Khin and Goenka chain. The full definition
            of the practice, in this lineage, lives inside the 10-day
            residential course and is transmitted by an authorized assistant
            teacher.
          </li>
          <li>
            <strong className="text-zinc-900">If you want the practice</strong>:
            the redirect is{" "}
            <a
              href="https://www.dhamma.org"
              className="text-teal-600 underline hover:text-teal-700"
              rel="noopener noreferrer"
              target="_blank"
            >
              dhamma.org
            </a>
            . That is part of the definition, not a footnote on it.
          </li>
        </ul>
      </section>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        heading="Want to talk through which lineage best fits your situation?"
        description="Book a short call. We can walk through the differences across modern lineages and which dhamma.org centers run courses near you."
        section="vipassana-buddhism-definition-footer"
      />

      <div className="max-w-4xl mx-auto px-6">
        <FaqSection items={faqs} heading="Frequently asked questions" />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          Related pages on the same topic
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guide/vipassana-meaning"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            What does vipassana mean (etymology)
          </Link>
          <Link
            href="/t/anapana-and-vipassana"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Anapana and vipassana, a linguistic and lineage note
          </Link>
          <Link
            href="/guide/anapana-and-vipassana-explained"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Anapana and vipassana explained, longer guide
          </Link>
          <Link
            href="/about"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            About this site, and why it is unofficial
          </Link>
          <a
            href="https://www.dhamma.org"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            dhamma.org (the lineage redirect)
          </a>
        </div>
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Talk through lineage, course logistics, and what to expect."
        section="vipassana-buddhism-definition-sticky"
      />
    </article>
  );
}
