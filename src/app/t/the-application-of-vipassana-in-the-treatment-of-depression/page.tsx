import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  BackgroundGrid,
  GradientText,
  NumberTicker,
  ComparisonTable,
  MetricsRow,
  GlowCard,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type ComparisonRow,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/the-application-of-vipassana-in-the-treatment-of-depression";
const PUBLISHED = "2026-05-13";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "The Application of Vipassana in the Treatment of Depression: What the Literature Actually Says",
  description:
    "A research-honest map of the clinical literature on the Goenka 10-day Vipassana course as it relates to depression. No randomized controlled trial in clinically diagnosed depression has been published. The strongest evidence is small naturalistic before/after studies and a Tihar Jail prison comparison. Named studies, sample sizes, instruments, and the gap that every other page glosses over.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "The Application of Vipassana in the Treatment of Depression: What the Literature Actually Says",
    description:
      "Most pages on this topic say studies show Vipassana reduces depression. This one names the studies, their sample sizes, their instruments, and the gap nobody else mentions.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "The Application of Vipassana in the Treatment of Depression: A Research-Honest Map",
    description:
      "Jain 2015 reviewed 18 meditation trials for clinical depression. None were Vipassana. Here is what the literature actually contains.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "Is the Goenka 10-day Vipassana course an evidence-based treatment for clinical depression?",
    a: "No. As of the most recent published reviews, no randomized controlled trial of the Goenka 10-day course in a clinically diagnosed depressed population has been published. Jain and colleagues, in their 2015 critical analysis of meditation therapies for acute and subacute phase depressive disorders (PMC4383597), reviewed 18 trials and zero of them used the Goenka 10-day technique. The 2025 Cureus systematic review of 11 Vipassana-specific studies (PMC12558566) likewise did not analyze depression as a primary outcome. The technique is not marketed by the tradition as a depression treatment, and the published literature does not support such a positioning.",
  },
  {
    q: "What studies do the existing claims about Vipassana and depression actually rest on?",
    a: "There are three buckets. The first is naturalistic before/after observation in non-clinical or mixed populations, most cited being Al-Hussaini and colleagues in Muscat (PMC3174711), which measured 14 participants on the Hospital Anxiety and Depression Scale and reported the depression subscale dropping from a mean of 6.00 to 3.14, p=0.004. The second is the Tihar Jail prison series by Chandiramani and colleagues, with one cohort of 120 in January 1994 and a second of 150 in April 1994 (85 course attenders versus 65 controls), reporting Hamilton Anxiety and Montgomery Depression score reductions at p less than 0.01 and p less than 0.001 respectively. The third is the Khosla five-case series from the Vipassana Research Institute, where Hamilton Depression Scale scores fell over follow-up (one depression case 20 to 4, comorbid OCD 12 to 2, BPD 16 to 6). None of these are randomized controlled trials in clinically diagnosed depression.",
  },
  {
    q: "Why does this matter? Are not those studies enough?",
    a: "It matters because the language a research-style query implies (the application of vipassana in the treatment of depression) carries a clinical connotation that the underlying evidence base does not. Naturalistic before/after on self-selecting course attendees is informative but is the lowest tier of clinical evidence: there is no control for expectancy, retreat environment effects (silence, simple food, sleep, no phones), self-selection of the kind of person who books a 10-day, or regression to the mean for participants who entered with elevated symptoms. The Jain 2015 review explicitly notes those issues across the entire meditation-for-depression literature, including for MBCT and MBSR which have far more trials than Vipassana does. Saying these effects are real and saying Vipassana is a treatment for clinical depression are not the same statement.",
  },
  {
    q: "What does the Goenka tradition itself say about depression?",
    a: "The tradition does not position the technique as a treatment for depression. The application form for the 10-day asks about psychiatric history (anxiety, panic, manic depression, schizophrenia, hospitalization, medication, present condition) and applicants disclosing acute conditions may be deferred. The standard guidance is to continue prescribed medication during the course, not to stop it. Assistant teachers are explicitly not mental health professionals and are not authorized to give clinical advice. For anything operational about practice, the redirect is always to dhamma.org and to a 10-day taught by an authorized assistant teacher; this page is a literature note, not a recommendation.",
  },
  {
    q: "What does the 2025 Cureus systematic review actually find?",
    a: "Saxena and colleagues, published in Cureus on 27 September 2025 (PMC12558566), screened the published Vipassana literature from January 2010 to April 2025 against PRISMA 2020 criteria. They included 11 studies: 3 randomized controlled trials, 2 single-arm trials, 1 pilot trial, and 5 observational studies. Their summary finding is moderate evidence for benefits across psychological (stress, anxiety, mindfulness, well-being), physiological (heart rate variability, hippocampal topology), and behavioural (executive function, memory) domains, with effects appearing intensity-dependent (stronger with longer retreats, stronger in experienced meditators). Depression as a primary outcome was not analyzed; heterogeneity precluded meta-analysis. The authors call for larger, well-controlled RCTs.",
  },
  {
    q: "Is Vipassana different from MBCT for depression?",
    a: "Yes, in three structural ways. First, transmission: MBCT (mindfulness-based cognitive therapy) is an 8-week outpatient group programme, secular by design, developed by Segal, Williams, and Teasdale specifically for relapse prevention in recurrent depression, and is delivered by clinically trained instructors. The Goenka Vipassana 10-day is a residential silent course in a specific Theravada lineage, taught by assistant teachers who are not clinicians. Second, evidence base: MBCT has multiple multi-site RCTs in recurrent major depression and is included in NICE guidance in the UK as a relapse-prevention option. Vipassana does not have an equivalent body of clinical trials in clinically diagnosed depression. Third, framing: MBCT is positioned as an adjunct to depression care; Vipassana is positioned by its own tradition as a general training programme, not a clinical intervention.",
  },
  {
    q: "What about people who attend a course while on antidepressants?",
    a: "The application form asks for medication disclosure and the standard guidance is to continue prescribed medication during the course. Stopping medication to attend is not advised by the tradition and has been associated with adverse outcomes in case reports across the meditation-and-mental-health literature. Practical patterns commonly seen across centres: bring enough doses for the full 10 days plus margin, disclose to the course manager on day zero so the team is aware, do not adjust doses on the course, plan a clinician check-in in the first week after the course. None of this is medical advice; the decision sits between the attendee and their treating clinician.",
  },
  {
    q: "What would actually constitute a credible trial of Vipassana for depression?",
    a: "Sketching what is missing in the current literature: a registered, multi-site randomized controlled trial in adults with current major depressive disorder (DSM or ICD diagnosed), with a validated continuous outcome (HAM-D or PHQ-9 administered by blinded raters), an active control (typically MBSR or treatment-as-usual), pre-registered analysis plan, intent-to-treat analysis, follow-up at 6 and 12 months, attention to dropout (the 10-day format has a real selection effect because not everyone who signs up completes), and clinical-event reporting for adverse outcomes. As of the 2025 Cureus review window, no such trial in Goenka-tradition Vipassana has been published. Until one is, the honest statement is that the technique is promising for general well-being in people who already function and is not established as a treatment for clinical depression.",
  },
  {
    q: "Where does this leave someone with depression who is thinking about a course?",
    a: "For anyone weighing this practically, the more useful resource on this site is the Vipassana and Depression FAQ at /faq/vipassana-and-depression, which is written for the decision rather than for the literature. Operational questions about attending a course belong with the centre, with dhamma.org, and with your own clinician. This page is here so that anyone arriving via a research-flavoured query gets the honest research-flavoured answer.",
  },
];

const studyRows: ComparisonRow[] = [
  {
    feature: "Design",
    ours: "Naturalistic, no control group",
    competitor: "Quasi-experimental, non-randomized control",
  },
  {
    feature: "Sample size",
    ours: "14 course attenders",
    competitor: "150 (85 attenders, 65 controls)",
  },
  {
    feature: "Population",
    ours: "Non-clinical adults, Muscat",
    competitor: "Tihar Jail inmates, Delhi",
  },
  {
    feature: "Depression instrument",
    ours: "HADS depression subscale",
    competitor: "Montgomery Depression Inventory",
  },
  {
    feature: "Reported result",
    ours: "Mean 6.00 to 3.14, p=0.004",
    competitor: "Significant reduction in attenders, p<0.001",
  },
  {
    feature: "Follow-up",
    ours: "None (immediate post)",
    competitor: "Post-course only",
  },
  {
    feature: "Clinically diagnosed depression?",
    ours: "No",
    competitor: "No (psychiatric history mixed)",
  },
  {
    feature: "Authors' caveats",
    ours: "Small N, self-selection, no follow-up",
    competitor: "Non-random allocation, setting confounders",
  },
];

export default function Page() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Topics", href: "/t" },
    { label: "Application of Vipassana in the treatment of depression" },
  ];

  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline:
                "The Application of Vipassana in the Treatment of Depression: What the Literature Actually Says",
              description:
                "A research-honest map of the clinical literature on the Goenka 10-day Vipassana course as it relates to depression. No published RCT in clinically diagnosed depression. The strongest evidence is small naturalistic before/after studies and a Tihar Jail prison comparison.",
              url: PAGE_URL,
              datePublished: PUBLISHED,
              author: "Matthew Diakonov",
              authorUrl: "https://m13v.com",
              publisherName: "Vipassana.cool",
              publisherUrl: "https://vipassana.cool",
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbListSchema([
              { name: "Home", url: "https://vipassana.cool" },
              { name: "Topics", url: "https://vipassana.cool/t" },
              {
                name: "Application of Vipassana in the treatment of depression",
                url: PAGE_URL,
              },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />

      <div className="mx-auto max-w-3xl px-6 pt-12">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <BackgroundGrid pattern="dots" glow>
        <div className="mx-auto max-w-3xl px-6 pt-6 pb-10">
          <p className="mb-4 text-xs font-medium tracking-widest uppercase text-teal-700">
            Literature note
          </p>
          <h1 className="mb-5 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            The application of Vipassana in the{" "}
            <GradientText>treatment of depression</GradientText>: what the
            literature actually says
          </h1>
          <p className="mb-6 text-lg text-zinc-600">
            Most pages on this query say studies show Vipassana reduces
            depression and stop there. This one names the studies, their
            sample sizes, their instruments, the populations they were drawn
            from, and the structural gap that the existing evidence does not
            close.
          </p>
        </div>
      </BackgroundGrid>

      <div className="mx-auto max-w-3xl px-6 py-10">
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="11 min read"
        />

        <div className="my-10 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-teal-700">
            Direct answer, verified 2026-05-13
          </p>
          <p className="text-base text-zinc-800">
            No randomized controlled trial of the Goenka 10-day Vipassana
            course in a clinically diagnosed depressed population has been
            published. The Jain et al. 2015 critical analysis of meditation
            therapies for acute and subacute phase depressive disorders
            reviewed 18 trials and zero of them used the Goenka technique.
            The 2025 Cureus systematic review of 11 Vipassana-specific
            studies did not analyze depression as a primary outcome. The
            strongest available evidence is naturalistic before/after in
            non-clinical adults (Al-Hussaini 2001, n=14: HADS depression
            6.00 → 3.14, p=0.004) and one Tihar Jail prison comparison
            (Chandiramani 1994, n=150). Vipassana is not established as a
            clinical depression treatment and is not positioned as one by
            the tradition. For anything operational about practice, see{" "}
            <a
              href="https://www.dhamma.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              dhamma.org
            </a>{" "}
            and an authorized assistant teacher at a 10-day course.
          </p>
          <p className="mt-3 text-xs text-zinc-500">
            Authoritative source for this answer:{" "}
            <a
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4383597/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              Jain et al. 2015, Critical Analysis of the Efficacy of
              Meditation Therapies for Acute and Subacute Phase Treatment of
              Depressive Disorders (PMC4383597)
            </a>
            .
          </p>
        </div>

        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-bold text-zinc-900">
            The shape of the evidence, in numbers
          </h2>
          <p className="mb-6 text-zinc-700">
            The honest summary of the published Vipassana-and-depression
            literature is small. Counting is the cleanest way to show why.
          </p>
          <MetricsRow
            metrics={[
              {
                value: 18,
                label: "Trials reviewed in Jain 2015 for clinical depression",
                suffix: "",
              },
              {
                value: 0,
                label: "of those 18 trials used the Goenka 10-day technique",
                suffix: "",
              },
              {
                value: 11,
                label: "Vipassana studies in the 2025 Cureus systematic review",
                suffix: "",
              },
              {
                value: 14,
                label: "Participants in Al-Hussaini 2001 (Muscat)",
                suffix: "",
              },
            ]}
          />
          <p className="mt-6 text-sm text-zinc-500">
            None of these counts are an argument against Vipassana. They are
            a precise account of what the published clinical literature on
            the technique, with depression as the question, currently holds.
            Saying the corpus is small is not saying the practice is
            ineffective; it is saying the gold-standard evidence has not
            been generated.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-bold text-zinc-900">
            The two most-cited primary studies, side by side
          </h2>
          <p className="mb-6 text-zinc-700">
            Almost every article online that claims Vipassana reduces
            depression traces back, somewhere in its citation chain, to one
            of these two studies. Putting them next to each other makes the
            scope (and the limits) easier to see than reading either alone.
          </p>
          <ComparisonTable
            productName="Al-Hussaini 2001"
            competitorName="Chandiramani 1994"
            rows={studyRows}
          />
          <p className="mt-6 text-sm text-zinc-500">
            Both studies report a statistically significant drop in
            depression scores after a 10-day course. Both have the design
            limitations the authors disclosed in print: small samples,
            self-selection, environmental confounders (silence, simple food,
            sleep, no phones), and no clinical-population diagnosis at
            intake. Reading them as foundational rather than as definitive
            is the position consistent with what their own authors wrote.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-bold text-zinc-900">
            What the Khosla five-case series adds
          </h2>
          <p className="mb-4 text-zinc-700">
            The Vipassana Research Institute hosts a paper by Dr. Raman
            Khosla titled{" "}
            <em>
              Before and After: Five Case Studies of Improvement in Mental
              Health
            </em>
            . It is a case series, not a trial, and it should be read as one.
            What it does offer is named instruments (Hamilton Depression
            Scale, Hardiness Index, Symptom Checklist, Ways of Coping
            Questionnaire) and pre/post numbers for five individuals across
            different presentations: alcohol dependence, depression, anxiety
            and panic, OCD, and borderline personality disorder.
          </p>
          <GlowCard>
            <div className="space-y-3 text-sm text-zinc-700">
              <p>
                <strong className="text-zinc-900">Case 2 (depression):</strong>{" "}
                Hamilton Depression Scale 20 → 4 at follow-up.
              </p>
              <p>
                <strong className="text-zinc-900">Case 1 (alcohol):</strong>{" "}
                HAM-D 14 → 4, reported one-year abstinence.
              </p>
              <p>
                <strong className="text-zinc-900">Case 3 (panic):</strong>{" "}
                HAM-D 6 → 2, discontinued anxiolytic.
              </p>
              <p>
                <strong className="text-zinc-900">Case 4 (OCD):</strong>{" "}
                HAM-D 12 → 2, discontinued psychiatric medication.
              </p>
              <p>
                <strong className="text-zinc-900">Case 5 (BPD):</strong>{" "}
                HAM-D 16 → 6, discontinued lithium and carbamazepine while
                reportedly stable.
              </p>
            </div>
          </GlowCard>
          <p className="mt-6 text-sm text-zinc-500">
            A case series of five is not a basis for clinical
            recommendation. It is a record of what the technique looked
            like alongside other treatment changes in specific named
            individuals, written by an author affiliated with the
            tradition. The medication discontinuations in particular need
            to be read as descriptions of those specific cases under
            specific care, not as a generalizable pattern.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-bold text-zinc-900">
            Why the bigger meta-analyses on meditation and depression do not
            settle this question
          </h2>
          <p className="mb-4 text-zinc-700">
            The body of clinical evidence for{" "}
            <em>meditation broadly</em> on depression is much larger than
            the Vipassana-specific evidence. The Jain et al. 2015 review,
            which is the most widely cited critical analysis of meditation
            therapies in acute and subacute phase depression, examined 18
            trials with within-group effect sizes ranging from 0.93 to 3.33
            in acute populations and 0.65 to 1.02 in subacute populations.
            Those numbers are encouraging.
          </p>
          <p className="mb-4 text-zinc-700">
            The catch is what those 18 trials studied. They studied
            mindfulness-based cognitive therapy (MBCT, the bulk of the
            corpus), mindfulness-based stress reduction (MBSR), and a small
            number of other mixed mindfulness interventions. They did not
            study the Goenka 10-day Vipassana course. The review excluded
            it because no trial of that intervention in clinically
            diagnosed depression met its inclusion criteria. Citing the
            review&apos;s effect sizes as evidence that Vipassana works for
            depression is a category error: those effect sizes belong to a
            related but distinct family of interventions delivered in a
            different format by different practitioners over a different
            duration.
          </p>
          <p className="text-zinc-700">
            The 2025 Cureus review of 11 Vipassana-specific studies is the
            most recent attempt to summarize the technique on its own.
            Saxena and colleagues report moderate evidence across
            psychological, physiological, and behavioural domains
            (anxiety, stress, mindfulness, well-being, heart rate
            variability, hippocampal topology, executive function), with
            heterogeneity precluding meta-analysis. Depression as a
            primary, separately-analyzed outcome is not in their narrative.
            That absence is the gap the keyword surfaces.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-bold text-zinc-900">
            What the tradition itself does and does not claim
          </h2>
          <p className="mb-4 text-zinc-700">
            The Goenka tradition does not market the 10-day course as a
            depression treatment. The application form has a long
            psychiatric history section (anxiety, panic, manic depression,
            schizophrenia, hospitalization history, medication, present
            condition). Applicants disclosing acute or unstable conditions
            may be deferred. The standard guidance is to continue
            prescribed medication; the tradition explicitly does not ask
            attendees to stop. Assistant teachers, who run the course, are
            trained volunteers, not clinicians.
          </p>
          <p className="text-zinc-700">
            For anything operational about practice, posture, sensation,
            duration, or how to work with a difficulty on the cushion, the
            redirect across this entire site is the same: go to{" "}
            <a
              href="https://www.dhamma.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              dhamma.org
            </a>{" "}
            and to an authorized assistant teacher inside a 10-day
            residential course. This page is a literature note about how a
            research-flavoured query maps onto the published evidence base.
            It is not practice instruction and it is not clinical advice.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-bold text-zinc-900">
            What I have noticed across <NumberTicker value={6} /> ten-day
            courses
          </h2>
          <p className="mb-4 text-zinc-700">
            I am not a teacher and not a clinician, just a long-time
            student. Across six 10-day courses at three centres
            (Dhammamanda in NorCal, CYO in the Bay Area, North Fork in
            Central California), and across roughly 40 days of dhamma
            service volunteering at courses, the pattern I have personally
            observed in students disclosing a history of depression has
            been consistent with what the literature implies, not with
            stronger claims. Students with managed, stable depression
            typically complete the course; some describe the experience as
            useful in changing the relationship to depressive states over
            time. Students in an acute episode are advised, and sometimes
            decide, to defer. Nobody at any of those centres has ever told
            a student that the course will treat their depression. The
            language used is general practice training, not clinical
            intervention. That gap between language and clinical claim is
            doing real work.
          </p>
          <p className="text-sm text-zinc-500">
            None of this is data, only observation. The reason it sits in
            its own section, clearly labelled, is that other pages tend to
            blur observation and evidence into a single softer claim. The
            two are different and deserve to be kept apart.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-bold text-zinc-900">
            For anyone who arrived at this page looking for a decision, not
            a literature review
          </h2>
          <p className="mb-4 text-zinc-700">
            If the question behind your search is whether to attend a
            10-day course while living with depression, the page on this
            site that is actually written for that question is{" "}
            <Link
              href="/faq/vipassana-and-depression"
              className="text-teal-700 underline hover:text-teal-900"
            >
              Vipassana and Depression
            </Link>
            . It covers when attending is generally fine, when to wait,
            what the post-course period can look like, and how the practice
            sits alongside professional care. If your question is whether
            to stop or continue prescribed medication for a course, that
            conversation belongs with your treating clinician and the
            course management team, in that order, not with any web page.
          </p>
          <p className="text-zinc-700">
            If you want to be matched with another practitioner for daily
            accountability after a course, the{" "}
            <Link
              href="/practice-buddy"
              className="text-teal-700 underline hover:text-teal-900"
            >
              practice buddy
            </Link>{" "}
            programme pairs old students for short daily sits over a video
            call. It is peer support, not therapy, and is appropriate when
            the depression piece is being held by someone qualified to
            hold it.
          </p>
        </section>

        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          section="application-of-vipassana-in-the-treatment-of-depression"
          heading="Sorting out where Vipassana fits, honestly"
          description="A short call with a long-time student, not a teacher and not a clinician, to talk through where the practice sits alongside whatever else you have in place for depression. No technique transmission, just an honest peer conversation."
        />

        <section className="mt-16 mb-12">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Frequently asked questions
          </h2>
          <FaqSection items={faqs} />
        </section>

        <section className="mt-16 mb-12">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">
            Cited literature
          </h2>
          <ul className="space-y-3 text-sm text-zinc-700">
            <li>
              Jain FA, Walsh RN, Eisendrath SJ, Christensen S, Rael Cahn B.{" "}
              <em>
                Critical Analysis of the Efficacy of Meditation Therapies for
                Acute and Subacute Phase Treatment of Depressive Disorders: A
                Systematic Review
              </em>
              . Psychosomatics. 2015.{" "}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4383597/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 underline hover:text-teal-900"
              >
                PMC4383597
              </a>
              .
            </li>
            <li>
              Saxena R, et al.{" "}
              <em>
                The Impact of Vipassana Meditation on Health and Well-Being:
                A Systematic Review of Current Evidence
              </em>
              . Cureus. 2025.{" "}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12558566/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 underline hover:text-teal-900"
              >
                PMC12558566
              </a>
              .
            </li>
            <li>
              Al-Hussaini A, Dorvlo ASS, Antony SX, Chavan D, Dave J, Purecha
              V, Al-Rahbi S, Al-Sharbati MM.{" "}
              <em>
                Vipassana Meditation: A Naturalistic, Preliminary Observation
                in Muscat
              </em>
              . Journal for Scientific Research: Medical Sciences. 2001.{" "}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3174711/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 underline hover:text-teal-900"
              >
                PMC3174711
              </a>
              .
            </li>
            <li>
              Vipassana Research Institute.{" "}
              <em>
                Before and After: Five Case Studies of Improvement in Mental
                Health
              </em>{" "}
              by Dr. Raman Khosla.{" "}
              <a
                href="https://www.vridhamma.org/research/Five-Case-Studies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 underline hover:text-teal-900"
              >
                vridhamma.org/research/Five-Case-Studies
              </a>
              .
            </li>
            <li>
              Vipassana Research Institute.{" "}
              <em>
                Psychological Effects of Vipassana on Tihar Jail Inmates
              </em>{" "}
              (Chandiramani, Dhar et al.).{" "}
              <a
                href="https://www.vridhamma.org/research/Psychological-Effects-of-Vipassana-on-Tihar-Jail-Inmates"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 underline hover:text-teal-900"
              >
                vridhamma.org Tihar paper
              </a>
              .
            </li>
          </ul>
        </section>

        <section className="mt-12 rounded-xl border border-zinc-200 bg-zinc-50 p-6">
          <h2 className="mb-3 font-semibold text-zinc-900">Related reading</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/faq/vipassana-and-depression"
              className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-teal-300 hover:text-teal-700"
            >
              Vipassana and depression, the decision guide
            </Link>
            <Link
              href="/guide/scientific-evidence"
              className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-teal-300 hover:text-teal-700"
            >
              Scientific evidence, full guide
            </Link>
            <Link
              href="/guide/risks-and-safety"
              className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-teal-300 hover:text-teal-700"
            >
              Risks and safety
            </Link>
            <Link
              href="/t/vipassana-psychosis"
              className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-teal-300 hover:text-teal-700"
            >
              Vipassana psychosis, what to watch for
            </Link>
            <Link
              href="/t/vipassana-meditation-research-roundup-april-2026"
              className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-teal-300 hover:text-teal-700"
            >
              Recent Vipassana research roundup
            </Link>
          </div>
        </section>
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="application-of-vipassana-in-the-treatment-of-depression"
        description="Talk to a long-time student, not a teacher, about how the practice sits alongside care"
      />
    </article>
  );
}
