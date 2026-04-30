import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ProofBanner,
  InlineTestimonial,
  BeforeAfter,
  AnimatedChecklist,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/vipassana-meditation-research-roundup-april-2026";
const PUBLISHED = "2026-04-29";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "New Vipassana Meditation Research, April 2026: A Roundup of Four Recent Papers",
  description:
    "Four peer-reviewed Vipassana papers published between August 2025 and April 2026: a Cureus systematic review of 11 studies (792 participants), a 152-participant mindfulness observational study, a 12-monk MEG study on brain criticality, and an 89-student Frontiers paper on ānāpāna in eighth-grade classrooms. Sample sizes, effect sizes, and the limitations the authors themselves name.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "New Vipassana Meditation Research, April 2026: A Roundup of Four Recent Papers",
    description:
      "What's actually new in Vipassana research since the last systematic review's April 2025 cutoff. A peer-practitioner walk-through of four papers, with sample sizes, effect sizes, and methodological caveats.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "New Vipassana Meditation Research, April 2026: Four Papers, Sample Sizes, and Caveats",
    description:
      "Pascarella in MEG, Giridharan in Cureus, Wankhade on mindfulness, Oswal on ānāpāna in schools. What landed since April 2025 and what each paper admits about itself.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "What new Vipassana research has been published between August 2025 and April 2026?",
    a: "Four peer-reviewed papers stand out. (1) Wankhade, Lavangare, and Dani in Cureus, August 12, 2025: an observational study of 152 retreat participants showing Philadelphia Mindfulness Scale total scores rising from 61.47 to 81.09 after a 10-day course. (2) Giridharan, Soumian, Kumar, and Godbole in Cureus 17(9), September 27, 2025: a PRISMA systematic review of 11 studies (792 participants), reporting moderate-to-large effect sizes for stress (d = 0.79). (3) Pascarella, Thölke, Meunier, O'Byrne, Lajnef, Raffone, Guidotti, Pizzella, Marzetti, and Jerbi in Neuroscience of Consciousness, November 23, 2025: a magnetoencephalography study of 12 Thai Forest Tradition monks showing Vipassana pulls the brain closer to a chaos-order critical point than Samatha does. (4) Oswal, Jagtap, and Dasarwar in Frontiers in Public Health, April 24, 2026: a quasi-experimental study of 89 eighth-grade students (44 experimental, 45 control) showing Cohen's d = 0.61 for sustained attention after one academic year of ānāpāna practice.",
  },
  {
    q: "Why does the April 2025 cutoff matter?",
    a: "The Giridharan systematic review published in Cureus searched the literature from January 2010 to April 2025. That means the review can't include itself, and it can't include the three other papers on this list (Wankhade in August 2025, Pascarella in November 2025, Oswal in April 2026). If you're reading the Giridharan review and you stop there, you are missing about eight months of follow-on work that the review's own database freeze excluded by definition. This page is, in part, the post-cutoff supplement.",
  },
  {
    q: "What is the Pascarella MEG study actually claiming about Vipassana?",
    a: "It is claiming, with twelve subjects and a magnetoencephalography setup, that Vipassana practice is associated with a measurable shift in 'brain criticality,' which the authors define as the equilibrium point between order and chaos in neural dynamics. Their analysis showed that during Vipassana, deviation-from-criticality dropped relative to rest, which they interpret as the brain operating closer to that boundary. Samatha did not produce the same shift. The same analysis showed widespread reductions in gamma-band long-range temporal correlations, which the authors note contrasts with some prior literature; they attribute the contrast to improved 1/f-slope correction methods. The paper does not claim Vipassana is 'better' than Samatha, only that the two states sit at different points in a state space that this measurement framework can resolve.",
  },
  {
    q: "What were the limitations the authors of these papers named themselves?",
    a: "All four papers are unusually direct about their constraints. Pascarella et al.: twelve subjects, all expert monks, no novice control; the MEG state-space analysis is correlational, not causal. Giridharan et al.: 11 studies of which 3 are RCTs and 5 are observational, median sample size 40, methodological heterogeneity precluded a meta-analysis, generalisability is moderate at best. Wankhade et al.: pre-test/post-test design with no control group, self-selected sample, social-desirability bias likely on a self-reported mindfulness scale. Oswal et al.: single school, two intact eighth-grade classes, quasi-experimental rather than randomized, parents and teachers were not blinded. Each paper says some version of 'this is suggestive, not definitive.'",
  },
  {
    q: "Did any of these papers change the practice instructions for Vipassana students?",
    a: "No. None of them are about technique transmission. The Goenka tradition reserves that for an authorized assistant teacher inside a 10-day residential course, and these papers do not attempt to substitute for that. They measure outcomes (mindfulness, attention, neural dynamics, stress) in people who have already taken the course, or in students practicing ānāpāna as a school-program adjunct. For anything operational about how to sit, the redirect remains dhamma.org and a 10-day course.",
  },
  {
    q: "How does this roundup relate to the existing scientific-evidence guide on this site?",
    a: "The existing /guide/scientific-evidence page is a longer-form overview written before the 2025 cutoff and covers older results: anxiety dropping from 10 to 3.29, slow-wave sleep at 10.63 percent versus 3.94 percent in non-meditators 50 to 60, the 56 percent versus 75 percent recidivism number from the Northwest Rehabilitation Facility, the eight-region meta-analysis. This page is the time-boxed update on top of that: it covers four specific papers that landed after the older guide, with the sample sizes and limitations stated in each paper's own abstract. If you want the broader picture, read the guide first; if you want the recent additions, this page is the supplement.",
  },
  {
    q: "Is this page peer-reviewed or affiliated with the dhamma.org organization?",
    a: "No, on both counts. This is a peer-practitioner reading note written by an old student of six 10-day courses in the Goenka tradition. It is not a publication of dhamma.org, Vipassana Research Institute, Pariyatti, or any university. The four papers it links to are peer-reviewed; the framing here is one practitioner's summary of what landed where, not an endorsement. For anything operational about how to practice, please go to dhamma.org and an authorized assistant teacher.",
  },
  {
    q: "Where can I read each paper in full?",
    a: "Pascarella et al., 'Meditation induces shifts in neural oscillations, brain complexity, and critical dynamics: novel insights from MEG,' is at PubMed ID 41287816 and the full PDF is open access through Neuroscience of Consciousness. Giridharan et al., 'The Impact of Vipassana Meditation on Health and Well-Being,' is open access at PMC12558566 (also at cureus.com, article 413106). Wankhade et al., 'An Observational Study to Assess the Reflection of Vipassana Meditation on the Perception of Mindfulness,' is open access at PMC12424088 (also at cureus.com, article 383716). Oswal et al., 'Effect of ānāpāna meditation on attention and mental well-being in secondary school students,' is at frontiersin.org under DOI 10.3389/fpubh.2026.1772248.",
  },
];

const sharedLimitations = [
  {
    text: "Self-selected samples. People who sign up for a 10-day silent retreat are already motivated; that biases every observational design upward.",
  },
  {
    text: "Small Ns. Median sample size in the Giridharan systematic review is 40 per study. The MEG paper has twelve subjects.",
  },
  {
    text: "No or weak controls. Wankhade et al. has no control group at all. Oswal et al. has a waitlisted control rather than a randomized one.",
  },
  {
    text: "Heterogeneous interventions. The studies aggregated by Giridharan et al. include 10-day residential courses, ongoing daily practice cohorts, and prison programs. Their effect sizes do not all reflect the same dose.",
  },
  {
    text: "Self-report on most psychological outcomes. Mindfulness scales are sensitive to social-desirability bias, especially right after a 10-day silent retreat where participants are primed to feel they have changed.",
  },
  {
    text: "Correlational neural measurements. The MEG criticality findings describe a state, not a mechanism; nothing here demonstrates that the criticality shift causes any downstream behavioral outcome.",
  },
];

export default function Page() {
  const articleJsonLd = articleSchema({
    headline:
      "New Vipassana Meditation Research, April 2026: A Roundup of Four Recent Papers",
    description:
      "Four peer-reviewed Vipassana-specific papers published between August 2025 and April 2026, with sample sizes, effect sizes, and the methodological limitations each paper names about itself.",
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
      name: "New Vipassana Meditation Research, April 2026",
      url: PAGE_URL,
    },
  ]);
  const faqJsonLd = faqPageSchema(faqs);

  return (
    <article className="min-h-screen text-zinc-900">
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
            { label: "New Vipassana Research, April 2026" },
          ]}
        />
      </div>

      <header className="max-w-4xl mx-auto px-6 pt-8 pb-6">
        <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-3">
          Research roundup
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
          New Vipassana Meditation Research, April 2026
        </h1>
        <p className="mt-5 text-lg text-zinc-600 max-w-3xl">
          Four peer-reviewed papers landed between August 2025 and April 2026.
          Two in Cureus, one in Neuroscience of Consciousness, one in Frontiers
          in Public Health. Together they cover 1,045 participants across an
          observational study, a systematic review, a magnetoencephalography
          experiment with monks of the Thai Forest Tradition, and a
          quasi-experimental study in two eighth-grade classrooms. This page
          walks through each one with the sample size, the effect size where
          one is reported, and the limitation the authors name themselves.
        </p>
      </header>

      <div className="pb-4">
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="11 min read"
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 mt-6">
        <div className="rounded-xl border border-teal-200 bg-teal-50 p-5 text-sm text-zinc-800 leading-relaxed">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-teal-700">
            Direct answer (verified 2026-04-29)
          </p>
          <p className="text-zinc-900 font-medium mb-3">
            What is new in Vipassana research right now?
          </p>
          <p className="mb-3">
            Four peer-reviewed papers between August 2025 and April 2026:
          </p>
          <ol className="list-decimal pl-6 space-y-1.5 text-zinc-800">
            <li>
              <strong>Wankhade et al.</strong>, Cureus, August 12, 2025.
              Observational study of 152 participants, Philadelphia Mindfulness
              Scale rising from 61.47 to 81.09 after a 10-day course (
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12424088/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 underline hover:text-teal-900"
              >
                PMC12424088
              </a>
              ).
            </li>
            <li>
              <strong>Giridharan et al.</strong>, Cureus 17(9), September 27,
              2025. PRISMA systematic review of 11 studies, 792 participants,
              stress effect size d = 0.79 (
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12558566/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 underline hover:text-teal-900"
              >
                PMC12558566
              </a>
              ).
            </li>
            <li>
              <strong>Pascarella et al.</strong>, Neuroscience of Consciousness,
              November 23, 2025. Magnetoencephalography study of 12 monks
              showing Vipassana pulls neural dynamics closer to a chaos-order
              critical point (
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/41287816/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 underline hover:text-teal-900"
              >
                PubMed 41287816
              </a>
              ).
            </li>
            <li>
              <strong>Oswal et al.</strong>, Frontiers in Public Health, April
              24, 2026. Quasi-experimental study of 89 eighth-grade students
              (44 experimental, 45 control), Cohen's d = 0.61 for sustained
              attention after one academic year of ānāpāna practice (
              <a
                href="https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2026.1772248/abstract"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 underline hover:text-teal-900"
              >
                DOI 10.3389/fpubh.2026.1772248
              </a>
              ).
            </li>
          </ol>
          <p className="mt-3 text-zinc-700">
            None of the four claim to demonstrate technique transmission. They
            measure outcomes in people who already learned the practice from
            an authorized teacher inside a 10-day course, or in students given
            a school-program preliminary practice (ānāpāna).
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
          Why a roundup, and why now
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          The most-cited resource for &ldquo;what does science say about
          Vipassana&rdquo; is a body of work that mostly predates 2025: the
          Holzel and Britton brain-imaging meta-analyses, the Bowen et al.
          Vipassana-and-recidivism papers from the early 2010s, the slow-wave
          sleep work from Sleep and Biological Rhythms, the Tihar Jail
          reports. The peer-reviewed literature did not stop in 2024. Between
          August 2025 and April 2026 four papers landed that change at least
          two things about the public picture: there is now a current PRISMA
          systematic review you can cite without apologizing for its age, and
          there is a magnetoencephalography paper with twelve highly
          experienced monks that distinguishes Vipassana from Samatha at the
          level of neural-state-space dynamics.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          The Giridharan systematic review searched the literature only
          through April 2025, by its own methods section. So even the
          most-current review on the public web cannot include the Wankhade
          observational study from the same journal four months later, the
          Pascarella MEG study from two months after that, or the Oswal
          ānāpāna-in-schools paper that came out the day before this page
          was written. That is the gap a roundup actually fills.
        </p>
      </section>

      <ProofBanner
        metric="d = 0.79"
        quote="Stress reduction showed moderate-to-large effect sizes (d = 0.79) across the included studies; mindfulness improvements ranged from d = 0.68 to 0.75."
        source="Giridharan et al., Cureus 17(9), 2025, systematic review of 11 studies, 792 total participants"
      />

      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">
          Paper 1 of 4
        </h2>
        <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 mb-3">
          Wankhade, Lavangare, and Dani: a 152-participant observational
          mindfulness study
        </h3>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-zinc-700 mb-6 rounded-xl border border-zinc-200 bg-zinc-50 p-5">
          <dt className="font-medium text-zinc-900">Journal</dt>
          <dd>Cureus, article 383716</dd>
          <dt className="font-medium text-zinc-900">Published</dt>
          <dd>August 12, 2025</dd>
          <dt className="font-medium text-zinc-900">Sample</dt>
          <dd>152 participants (4 of 156 did not complete)</dd>
          <dt className="font-medium text-zinc-900">Design</dt>
          <dd>Pre/post observational, no control group</dd>
          <dt className="font-medium text-zinc-900">Instrument</dt>
          <dd>Philadelphia Mindfulness Scale (PHLMS)</dd>
          <dt className="font-medium text-zinc-900">Open access</dt>
          <dd>
            <a
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12424088/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              PMC12424088
            </a>
          </dd>
        </dl>
        <p className="text-zinc-700 leading-relaxed mb-4">
          152 people who attended a 10-day Goenka-tradition Vipassana course
          completed the Philadelphia Mindfulness Scale before and after. Total
          mindfulness rose from 61.47 to 81.09 (p &lt; 0.001). Both subscales
          moved: awareness from 30.76 to 41.11, acceptance from 30.70 to 39.99.
          The authors report 74.3 percent of participants reaching a high
          level of mindfulness post-retreat, up from a much lower baseline
          rate.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          The paper is honest about its design. Pre-post with no control group
          cannot tell you what fraction of the change is the course itself
          versus regression to the mean, demand characteristics, or
          social-desirability effects. Self-report scales taken in the
          immediate afterglow of a 10-day silent retreat are exactly the
          condition where every one of those biases is most active. The number
          worth holding is the magnitude of the shift; the explanation of the
          shift is what later work, with controls, will need to disentangle.
        </p>
      </section>

      <BeforeAfter
        title="Philadelphia Mindfulness Scale, Wankhade et al. 2025, n = 152"
        before={{
          label: "Before 10-day course",
          content:
            "Mean total mindfulness score 61.47. Awareness subscale 30.76, acceptance subscale 30.70.",
          highlights: [
            "Pre-course baseline measured on day of arrival",
            "Self-report on PHLMS (Philadelphia Mindfulness Scale)",
            "Sample reflects a self-selected motivated cohort",
          ],
        }}
        after={{
          label: "After 10-day course",
          content:
            "Mean total mindfulness score 81.09 (p < 0.001). Awareness subscale 41.11, acceptance subscale 39.99. 74.3% reached the high-mindfulness threshold.",
          highlights: [
            "Both subscales moved by approximately 10 points",
            "Effect size implied by raw shift is substantial",
            "No control group, so the change cannot be cleanly attributed",
          ],
        }}
      />

      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">
          Paper 2 of 4
        </h2>
        <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 mb-3">
          Giridharan, Soumian, Kumar, and Godbole: a PRISMA systematic review
        </h3>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-zinc-700 mb-6 rounded-xl border border-zinc-200 bg-zinc-50 p-5">
          <dt className="font-medium text-zinc-900">Journal</dt>
          <dd>Cureus 17(9): e93355</dd>
          <dt className="font-medium text-zinc-900">Published</dt>
          <dd>September 27, 2025</dd>
          <dt className="font-medium text-zinc-900">Search range</dt>
          <dd>January 2010 to April 2025</dd>
          <dt className="font-medium text-zinc-900">Studies included</dt>
          <dd>11 (3 RCTs, 2 single-arm, 1 pilot, 5 observational)</dd>
          <dt className="font-medium text-zinc-900">Total participants</dt>
          <dd>792, median 40 per study</dd>
          <dt className="font-medium text-zinc-900">Open access</dt>
          <dd>
            <a
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12558566/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              PMC12558566
            </a>
          </dd>
        </dl>
        <p className="text-zinc-700 leading-relaxed mb-4">
          A PRISMA-registered systematic review across PubMed, Cochrane,
          Google Scholar, PsycINFO, and Scopus, restricted to studies of the
          Goenka-tradition 10-day Vipassana course or its direct continuations.
          Eleven studies met inclusion criteria. The headline numbers are a
          stress effect size of d = 0.79, mindfulness improvements at d = 0.68
          to 0.75, monthly migraine frequency reduced by approximately 2.7
          days, and hippocampal topology alterations significant at p = 0.009.
          Effects were sustained at 6 to 12 month follow-ups in studies that
          measured that long.
        </p>
        <p className="text-zinc-700 leading-relaxed mb-4">
          The review explicitly does not pool the studies into a meta-analysis.
          The authors cite methodological heterogeneity, small sample sizes,
          and a moderate risk of bias across the body of work as the reasons.
          Their phrase for the overall picture is &ldquo;moderate evidence
          supports the benefits&rdquo; for stress, anxiety, mindfulness, pain
          (especially migraine), and selected neurobiological markers,
          particularly with intensive 10-day-plus retreats. The dose-response
          pattern they note is intuitive: longer or more intensive retreats
          produced larger and longer-lasting effects in experienced
          practitioners.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          The April 2025 search cutoff is the practical limit of the review.
          It cannot include the Wankhade observational study from August 2025
          in the same journal, the Pascarella MEG paper from November 2025, or
          the Oswal Frontiers paper from April 2026. The next systematic
          review that includes those three will be a meaningfully different
          object.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">
          Paper 3 of 4
        </h2>
        <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 mb-3">
          Pascarella et al.: twelve monks, MEG, and the criticality finding
        </h3>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-zinc-700 mb-6 rounded-xl border border-zinc-200 bg-zinc-50 p-5">
          <dt className="font-medium text-zinc-900">Journal</dt>
          <dd>Neuroscience of Consciousness</dd>
          <dt className="font-medium text-zinc-900">Published</dt>
          <dd>November 23, 2025</dd>
          <dt className="font-medium text-zinc-900">PubMed</dt>
          <dd>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/41287816/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              41287816
            </a>
          </dd>
          <dt className="font-medium text-zinc-900">Sample</dt>
          <dd>12 Thai Forest Tradition monks, 15,000+ hours each</dd>
          <dt className="font-medium text-zinc-900">Recruitment site</dt>
          <dd>Santacittarāma monastery, near Rome</dd>
          <dt className="font-medium text-zinc-900">Method</dt>
          <dd>Magnetoencephalography (MEG), Chieti-Pescara MEG lab</dd>
          <dt className="font-medium text-zinc-900">Conditions</dt>
          <dd>Rest, Samatha (focused), Vipassana (open-monitoring)</dd>
          <dt className="font-medium text-zinc-900">Lead authors</dt>
          <dd>
            Annalisa Pascarella (CNR, Italy), Karim Jerbi (Université de
            Montréal)
          </dd>
        </dl>
        <p className="text-zinc-700 leading-relaxed mb-4">
          Twelve Buddhist monks from the Santacittarāma monastery outside
          Rome, each with more than 15,000 hours of meditation experience,
          were brought to the magnetoencephalography lab at Gabriele
          d'Annunzio University in Chieti-Pescara. Each monk was scanned at
          rest and during two meditation conditions: a focused-attention
          practice (Samatha) and an open-monitoring practice (Vipassana). The
          analysis pipeline used machine-learning classifiers and three
          quantitative measures: spectral power across canonical frequency
          bands, signal complexity (Lempel-Ziv compression), and
          deviation-from-criticality.
        </p>
        <p className="text-zinc-700 leading-relaxed mb-4">
          The headline finding is at the criticality layer. Both meditation
          conditions increased neural-signal complexity relative to rest.
          Samatha and Vipassana looked statistically distinguishable from each
          other on these measures. Vipassana was associated with a smaller
          deviation-from-criticality, which the authors interpret as the
          brain operating closer to the boundary between order and chaos.
          Samatha did not produce the same shift; the authors describe it as
          a more stable, more focused state in their discussion. They are
          careful to call the criticality finding a state-space description,
          not a mechanistic claim.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          A second finding worth flagging: the paper reports widespread
          reductions in gamma-band long-range temporal correlations during
          meditation, which contrasts with several earlier papers that
          reported gamma increases. The authors attribute the contrast to
          improved 1/f-slope correction methods that were not standard in
          earlier work. Whichever direction the next replication goes, this
          is a useful reminder that &ldquo;meditation increases gamma&rdquo;
          is not as settled as it has sometimes been reported.
        </p>
      </section>

      <InlineTestimonial
        quote="We observed increased levels of neural signal complexity during both meditation practices compared to the resting state, alongside widespread reductions in gamma-band long-range temporal correlations. Deviation-from-criticality analysis distinguished Vipassana from Samatha, with Vipassana associated with smaller deviation from the critical point."
        name="Pascarella et al., 2025"
        role="Neuroscience of Consciousness, abstract excerpt"
        stars={5}
      />

      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">
          Paper 4 of 4
        </h2>
        <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 mb-3">
          Oswal, Jagtap, and Dasarwar: ānāpāna in two eighth-grade
          classrooms
        </h3>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-zinc-700 mb-6 rounded-xl border border-zinc-200 bg-zinc-50 p-5">
          <dt className="font-medium text-zinc-900">Journal</dt>
          <dd>Frontiers in Public Health, Volume 14</dd>
          <dt className="font-medium text-zinc-900">Published</dt>
          <dd>April 24, 2026</dd>
          <dt className="font-medium text-zinc-900">DOI</dt>
          <dd>
            <a
              href="https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2026.1772248/abstract"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              10.3389/fpubh.2026.1772248
            </a>
          </dd>
          <dt className="font-medium text-zinc-900">Design</dt>
          <dd>Quasi-experimental, two intact classes, mixed methods</dd>
          <dt className="font-medium text-zinc-900">Sample</dt>
          <dd>
            89 eighth graders (n = 44 experimental, n = 45 waitlisted control)
          </dd>
          <dt className="font-medium text-zinc-900">Duration</dt>
          <dd>One academic year, three measurement points</dd>
        </dl>
        <p className="text-zinc-700 leading-relaxed mb-4">
          The intervention was ānāpāna, the preliminary practice the Goenka
          tradition offers to children separately from the 10-day adult
          course. Two eighth-grade classes were assigned to experimental
          (n = 44) or waitlisted control (n = 45). The experimental group
          received ānāpāna training and practiced daily over one academic
          year. Quantitative measures included sustained-attention tasks and
          psychological well-being scales at three time points; qualitative
          data came from focus group discussions with students and
          interviews with parents and teachers.
        </p>
        <p className="text-zinc-700 leading-relaxed mb-4">
          The headline numbers: Cohen's d = 0.61 for sustained attention by
          end of program, Cohen's d = 0.43 for self-adjustment at the interim
          measurement. Parents in the experimental group described better
          focus on studies, better emotional regulation, and improved
          relations with peers. Qualitative themes from the focus groups
          clustered around attention, self-acceptance, and emotional
          regulation. Both quantitative and qualitative streams pointed in
          the same direction.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          The design is quasi-experimental rather than randomized: the
          authors used two intact classes and could not randomize at the
          student level. Parents and teachers reporting on outcomes were not
          blinded to which class was the experimental one. The paper says all
          of this directly. As school-based mindfulness research goes, the
          effect sizes are well above the noise floor for the field, and the
          mixed-methods triangulation is more stringent than most
          school-program evaluations attempt.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
          Reading the four papers together
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          The four papers do not converge on a single mechanism, and they are
          not asking the same question. They cover different populations
          (course graduates, expert monks, eighth graders), different time
          horizons (immediate post-course, lifetime expert practice, one
          academic year), different instruments (self-report scales, MEG,
          school attention tasks), and different practices (full Vipassana,
          Samatha vs Vipassana, ānāpāna alone). What they share is a
          willingness to name their own design limits in the abstract or
          discussion, which is more than most coverage of meditation research
          does.
        </p>
        <p className="text-zinc-700 leading-relaxed mb-4">
          The point at which the four start to talk to each other is the
          attention layer. Wankhade reports a large jump in self-reported
          mindfulness, with both awareness and acceptance subscales moving.
          Giridharan reports d = 0.68 to 0.75 for mindfulness across the
          included studies. Pascarella reports a state-space shift toward
          criticality that is consistent with theoretical accounts of why
          attention might feel different during open-monitoring practice.
          Oswal reports a behaviorally measurable improvement in sustained
          attention in students who practiced ānāpāna daily for an
          academic year. Different measurements, partly overlapping
          construct, mostly consistent direction. Whether the construct
          itself is one thing or four is the open question the next round of
          research will have to deal with.
        </p>
      </section>

      <AnimatedChecklist
        title="Limitations the four papers name about themselves"
        items={sharedLimitations}
      />

      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
          What this roundup does not, and cannot, do
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          None of these papers tells anyone how to practice. The Goenka
          tradition reserves technique transmission for an authorized
          assistant teacher inside a 10-day residential course. That line
          stands. Pascarella et al. did not measure novices learning the
          method, they measured monks who had already spent more than 15,000
          hours in it. Oswal et al. did not teach ānāpāna from a webpage,
          they brought trained instructors into a school. Wankhade and
          Giridharan are evaluating outcomes in people who already took the
          course. The research is downstream of the transmission, not a
          substitute for it. For anything operational, the redirect is to{" "}
          <a
            href="https://www.dhamma.org/en-US/courses/search"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            dhamma.org
          </a>{" "}
          and an authorized assistant teacher.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          For the longer-form picture of older Vipassana research, the
          existing{" "}
          <Link
            href="/guide/scientific-evidence"
            className="text-teal-700 underline hover:text-teal-900"
          >
            scientific evidence guide
          </Link>{" "}
          on this site covers the pre-2025 work in more detail: the
          slow-wave-sleep findings, the Northwest Rehabilitation Facility
          recidivism numbers, the Tihar Jail studies, the meta-analyses of
          eight brain regions consistently altered by meditation. This page
          is the time-boxed update on top of that, not a replacement for it.
          The two are meant to be read together.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
          A peer-practitioner caveat
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          I write as an old student of six 10-day courses in the Goenka
          tradition (Dhammamanda in Northern California, CYO in the Bay Area,
          North Fork in Central California), with about forty days of dhamma
          service and a daily sit measured in years rather than months. I am
          not a teacher. I am not a neuroscientist. I read these papers
          because friends ask me about them, and because the practice has
          mattered enough in my own life that I want to know what the field
          is actually claiming and what it is not.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          The Pascarella paper is the one I find genuinely surprising. The
          interpretive frame, that Vipassana pulls neural dynamics toward a
          chaos-order critical boundary while Samatha settles into a more
          stable basin, lines up better with the phenomenology of
          open-monitoring practice than I expected a single small MEG study
          to manage. It is twelve subjects. It needs replication. It is also
          the most interesting Vipassana neuroimaging result I have seen
          since the cortical-thickness papers from the early 2010s, and the
          public coverage of it (one Medical Xpress write-up, one DNYUZ
          syndication, one ScienceAlert version) does not mention any of the
          three other 2025 to 2026 papers it sits next to. That is the gap
          this roundup tries to close.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6 mt-16">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          section="research-roundup-footer"
          heading="Want to talk about keeping a daily sit alive after a course?"
          description="Book a short call with the Practice Buddy team. We do not teach the technique. We can talk about how the matching works, and how reading any of these papers does not substitute for sitting."
        />
      </div>

      <FaqSection items={faqs} />

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="research-roundup-sticky"
        description="Book a short call about Practice Buddy matching."
      />
    </article>
  );
}
