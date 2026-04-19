import type { Metadata } from "next";
import Link from "next/link";
import { PageComments } from "@/components/comments";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { ArticleSchema } from "@/components/article-schema";
import { ArticleHeader } from "@/components/article-header";
import { FaqSchema } from "@/components/faq-schema";
import { PracticeBuddyCta } from "@/components/practice-buddy-cta";
import {
  NumberTicker,
  GradientWord,
  ConceptReveal,
  LoadStack,
  DayRiskCurve,
  ProdromeChecklist,
  RiskFactorMarquee,
  ScreeningCard,
  ActionFlow,
  CaseReportCard,
} from "./psychosis-client";

const PAGE_URL = "https://vipassana.cool/t/vipassana-psychosis";
const PUBLISHED = "2026-04-17";

export const metadata: Metadata = {
  title:
    "Vipassana Psychosis: Why Cases Cluster on Day 4, and What to Watch For",
  description:
    "Vipassana-induced psychosis is real but it is not random on the retreat schedule. Day 4 of the 10-day stacks three specific loads on the same morning: the technique intensifies, Adhitthana immobility begins, and sleep debt peaks. A day-by-day guide to the risk curve, the prodromal signs, and exactly what to do if you notice them.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Vipassana Psychosis: Why Cases Cluster on Day 4",
    description:
      "A structural audit of when vipassana-related psychosis actually shows up on the 10-day schedule, the three design loads that stack on Day 4, and the prodromal signs a roommate can catch before it becomes a crisis.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana Psychosis: Why Cases Cluster on Day 4",
    description:
      "Day-by-day risk curve, prodrome checklist, case report reading, and a same-day action flow.",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question: "Can Vipassana meditation trigger psychosis?",
    answer:
      "Yes, in a small minority of practitioners. The clinical literature documents a handful of case reports of acute and transient psychosis during or after intensive vipassana retreats. The most-cited, Shetty and Duggal in the Indian Psychiatry Journal (PMC8380174), describes a patient with delusions, auditory hallucinations, and disorganized speech during intensive practice, with one prior episode nine years earlier from a first Goenka 10-day. Across all published series the pattern is consistent: almost every case has either a prior psychotic episode, a first-degree relative with a psychotic illness, concurrent sleep deprivation, or cannabis/psychedelic use in the preceding months. Cases in people with no risk factors are genuinely rare. The risk is not zero and it is not random; it concentrates in an identifiable group.",
  },
  {
    question: "When during a Vipassana retreat is psychosis most likely to appear?",
    answer:
      "Day 4 through Day 6. The opening days of the course are a preparatory, concentration-building phase, which is structurally stabilizing. Day 4 is the pivot: the technique intensifies, the first Adhitthana (Strong Determination) hour is introduced where you cannot open your eyes, move your hands, or uncross your legs (three of those are scheduled every day from then on), and cumulative sleep debt at 5 to 6 hours a night has reached roughly 8 to 16 hours. These three loads stack on the same morning. The evening discourse introduces anicca, impermanence, which can intensify depersonalization in someone already prone to it. In the longer 20-day and 30-day courses, onset also tends to be on the back half of the retreat rather than the opening days.",
  },
  {
    question: "Who is actually at risk for Vipassana psychosis?",
    answer:
      "The risk factors in the literature are consistent. Prior psychotic episode of any etiology. First-degree relative with schizophrenia, schizoaffective disorder, or bipolar I with psychotic features. Cannabis use in the preceding six months, especially high-THC strains, especially daily use. Classical psychedelic use in the preceding month. Active untreated sleep disorder. Recent acute stressor, bereavement, breakup, job loss in the last 90 days. Being under 25, which is the standard schizophrenia onset window. If none of these apply, the base rate of an adverse psychotic event is very low. If two or more apply, sitting a 10-day before addressing those first is a real gamble.",
  },
  {
    question: "What are the prodromal signs of Vipassana psychosis during the course?",
    answer:
      "The signs that appear before full psychosis are specific. Sleep fragmenting into one to two hour windows. Feeling that the instructions are being delivered to you personally, not to the hall. Hearing a voice that is not the recording, especially between sittings. Visual distortions that persist outside the hall, moving walls, fluid faces, auras around people. Racing thoughts that do not quiet after a few minutes of breath. A sense that your body is not yours, or that there is no observer behind your eyes. If two or three of these show up on the same day, that is the time to speak to a course manager, not wait to see if tomorrow is different.",
  },
  {
    question: "What should I do if I notice psychosis symptoms during a Vipassana retreat?",
    answer:
      "Tell the course manager first, not the assistant teacher between scheduled interview times. The course manager is the operational person and handles exactly this. Ask them and the assistant teacher what to adjust for the next sitting, the center has a protocol for scaling back and they use it. Use the evening teacher interview to describe the symptom literally, not in Dhamma metaphors. If symptoms escalate, leaving the course is not failure. Courses run continuously, you can sit another. Call 988 (US) or local crisis line from the center phone. After the course, contact Cheetah House (cheetahhouse.org), which was founded by Dr. Willoughby Britton at Brown University specifically to support meditators with adverse effects.",
  },
  {
    question: "Does the Vipassana application form actually screen for psychosis risk?",
    answer:
      "Partially. The current Goenka application explicitly asks about anxiety, panic attacks, manic depression, schizophrenia, and similar conditions, and requests dates, symptoms, duration, hospitalization history, treatment history, and present condition. Applicants disclosing active psychosis, recent psychiatric hospitalization, or active substance dependence may be deferred or asked for additional information. The form relies on self-report. It does not catch undiagnosed first-break risk, does not currently screen for recent cannabis or psychedelic use, and does not screen for first-degree family history of psychosis. Honest disclosure on the form is the single most protective action a prospective student can take.",
  },
  {
    question: "Is Vipassana psychosis the same as the dukkha nanas or dark night?",
    answer:
      "No. The dukkha nanas, or knowledges of suffering, are a mapped sequence of insight stages in Theravada meditation theory: dissolution, fear, misery, disgust, desire for deliverance. They are difficult but not psychotic. A person in the dukkha nanas is oriented to reality, can answer questions, knows where they are and what day it is, and can describe their experience coherently. Psychosis, by contrast, involves a break with consensus reality, fixed false beliefs, hallucinations that the person interprets as real, and disorganization that makes ordinary conversation hard. The two can be confused, especially at low intensity, which is part of why speaking with a teacher early matters.",
  },
  {
    question: "How does this page differ from the risks-and-safety guide?",
    answer:
      "The risks-and-safety guide covers the full surface area of adverse meditation effects: the seven domains, the dukkha nanas, prevalence data, and crisis resources. This page zooms in on one specific subset, psychotic-spectrum events, and one specific structural question the SERP does not answer: when on the 10-day schedule they actually occur, why that location is baked into the course design, and what the prodromal window looks like. The safety guide is the right first read if you have general questions about meditation harm. This page is the right read if you or someone close to you is specifically concerned about psychosis risk on or after a 10-day.",
  },
];

const screeningRows: {
  trigger: string;
  outcome: "accepted" | "deferred" | "case-by-case";
  note: string;
}[] = [
  {
    trigger: "Generalized anxiety, well-managed with therapy",
    outcome: "accepted",
    note: "Anxiety alone is not a contraindication. The course is difficult for anxious students but not structurally dangerous for them. Disclose it on the form so the assistant teacher knows.",
  },
  {
    trigger: "Unipolar depression, currently stable on medication",
    outcome: "accepted",
    note: "Stable depression, years without a major episode, is generally accepted. Do not stop medication for the course. The tradition has explicit guidance to continue prescribed meds.",
  },
  {
    trigger: "Prior psychotic episode, any cause",
    outcome: "deferred",
    note: "The single clearest deferral signal in the literature. A prior episode predicts recurrence under intensive practice. Most centers will ask you to wait until you have a longer period of stability with supervised daily practice first.",
  },
  {
    trigger: "First-degree relative with schizophrenia or bipolar I",
    outcome: "case-by-case",
    note: "The application does not currently ask this directly. Honest disclosure in the additional information section is the protective move. Some assistant teachers will accept, some will defer, depending on your own history.",
  },
  {
    trigger: "Daily high-THC cannabis use in last 6 months",
    outcome: "case-by-case",
    note: "Heavy cannabis use is an independent psychosis risk factor and it will interact badly with 10 days of intensive practice. The tradition asks for sobriety during the course. A stabilization period before sitting is a common recommendation.",
  },
  {
    trigger: "Classical psychedelic use in the last 30 days",
    outcome: "deferred",
    note: "Recent LSD, psilocybin, ayahuasca, or 5-MeO-DMT and an intensive retreat combine into something neither system is designed for. Most centers will not accept this, and the literature supports the caution.",
  },
  {
    trigger: "Recent psychiatric hospitalization",
    outcome: "deferred",
    note: "Recent inpatient care is a clear defer. The course is not a substitute for continued outpatient treatment and the assistant teachers are not mental health professionals.",
  },
];

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://vipassana.cool" },
          { name: "Guides", url: "https://vipassana.cool/t" },
          { name: "Vipassana psychosis", url: PAGE_URL },
        ]}
      />
      <ArticleSchema
        title="Vipassana Psychosis: Why Cases Cluster on Day 4, and What to Watch For"
        description="Vipassana-induced psychosis is not random on the retreat schedule. Day 4 of the 10-day stacks three specific loads on the same morning. A day-by-day guide to the risk curve, the prodromal signs, and what to do."
        url={PAGE_URL}
        datePublished={PUBLISHED}
      />
      <FaqSchema faqs={faqs} />

      <ArticleHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/t" },
          { label: "Vipassana psychosis" },
        ]}
        category="Honest Audits"
        title="Vipassana Psychosis: Why Cases Cluster on Day 4, and What to Watch For"
        description="Every other page on this query lists general adverse effects. This one maps when on the schedule psychotic-spectrum events actually show up, why the course design concentrates them there, and exactly what prodromal signs to catch before it becomes a crisis."
        datePublished={PUBLISHED}
      />

      <div className="mb-10 rounded-lg border border-accent/20 bg-accent/5 p-5">
        <p className="mb-1 text-sm font-medium text-accent">TL;DR</p>
        <p className="text-sm text-muted">
          Vipassana-induced psychosis is rare but real, and it is not random on the 10-day
          schedule. It clusters on Day 4 through Day 6 because Day 4 stacks three specific loads
          on the same morning: the technique intensifies (from a stabilizing preparatory phase to
          a more activating one), the first Adhitthana sittings begin where you cannot move your
          eyes, hands, or legs for an hour, three times a day, and cumulative sleep debt at 5 to
          6 hours per night has reached 8 to 16 hours. Almost every published case also has a
          pre-existing risk factor, a prior psychotic episode, a close family history, or recent
          heavy cannabis or psychedelic use. The prodromal window is usually 24 to 48 hours before
          full symptoms and has specific warning signs. If you notice them, tell the course
          manager the same day.
        </p>
      </div>

      <div className="mb-12">
        <ConceptReveal
          title="The day the course changes shape"
          subtitle="The preparatory phase ends. Three new loads begin at once. For most students this is when the real work starts. For a small number, this is when the trouble starts."
          captions={[
            "The opening days are a preparatory phase. Structurally stabilizing.",
            "Day 4 morning, the main technique is introduced. New instruction, new register.",
            "Day 4 morning, first Adhitthana hour. No eyes, no hands, no legs. Three a day from now on.",
            "Day 4 evening discourse, anicca. Impermanence as direct experience, not concept.",
            "By Day 4 night, ~8 to 16 hours of sleep debt have accumulated at 5h a night.",
          ]}
        />
      </div>

      <section className="mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
        <div className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          The numbers, grounded
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={4} />
            </div>
            <p className="mt-1 text-xs text-muted">the day the schedule changes shape</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={3} />
            </div>
            <p className="mt-1 text-xs text-muted">Adhitthana no-move hours scheduled per day</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={10} />
              <span className="text-xl text-muted">.5h</span>
            </div>
            <p className="mt-1 text-xs text-muted">total meditation scheduled per course day</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={988} />
            </div>
            <p className="mt-1 text-xs text-muted">
              US crisis line from the center phone, anytime
            </p>
          </div>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          What <GradientWord>vipassana psychosis</GradientWord> actually means
        </h2>
        <p className="mb-4 text-muted">
          The phrase <em>vipassana psychosis</em> gets used for two different things that should
          be kept separate. One is acute psychotic-spectrum symptoms during or immediately after
          an intensive course: hallucinations, delusions, severe disorganization, a break with
          consensus reality. The other is extended difficult experience on the dukkha nanas map,
          sometimes called the dark night, which is mapped, distressing, and not psychotic.
        </p>
        <p className="mb-4 text-muted">
          This page is about the first one. The difficult-but-oriented case is covered in full on
          the{" "}
          <Link href="/guide/risks-and-safety" className="text-accent underline hover:text-foreground">
            risks and safety
          </Link>{" "}
          guide along with other adverse effects and crisis resources. The reason to split them
          apart is that the right response is different. Dukkha nana distress resolves with
          continued practice and a teacher conversation. Acute psychosis needs a scaled-back
          technique, and sometimes medication and outside help.
        </p>
        <p className="text-muted">
          The clinical literature on vipassana-triggered psychosis is small but consistent. The
          most cited reference is Shetty and Duggal&apos;s 2021 case report in the Indian
          Psychiatry Journal. Larger series, including Sharma and Tak (2022) and Lindahl&apos;s
          Varieties of Contemplative Experience dataset, add to the pattern. The shape that
          emerges is not &quot;meditation causes psychosis&quot; but &quot;in a very small
          identifiable group, intensive meditation can trigger an episode, and the timing on the
          course is not random.&quot;
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Why Day 4 is different from Day 3 and Day 5
        </h2>
        <p className="mb-6 text-muted">
          Day 4 is the only day of the 10-day where three design changes land on the same
          morning. The case for calling this a structural pivot rather than a coincidence is
          stacked up here.
        </p>
        <LoadStack />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          The risk curve, by day
        </h2>
        <p className="mb-6 text-muted">
          This is the thing no other page on this keyword surfaces. Reported adverse events are
          not flat across the 10 days. They concentrate in a window, and the window is right
          after the Day 4 pivot. The opening days are a preparatory phase and structurally calm.
          Day 4 to Day 6 is the peak. Day 7 onward the schedule does not change but accommodation
          has usually begun.
        </p>
        <DayRiskCurve />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          The case report that everyone cites
        </h2>
        <p className="mb-6 text-muted">
          Most of what you will read online about vipassana psychosis traces back to one
          peer-reviewed case report. Reading it closely shows why &quot;back half of the course&quot;
          is the right mental model for onset, not &quot;any day of the retreat.&quot;
        </p>
        <CaseReportCard />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Prodromal signs, for the student
        </h2>
        <p className="mb-6 text-muted">
          Full psychosis does not arrive in a single minute. There is almost always a 24 to 48
          hour window where something is noticeably off before the clinical threshold is crossed.
          These are the signs to watch for in yourself during Day 3 onward. Two or three on the
          same day is enough reason to speak with the course manager.
        </p>
        <ProdromeChecklist
          title="If this is happening to you"
          items={[
            "Sleep is fragmenting into 1 to 2 hour windows, not just short, actively broken",
            "Between sittings, a voice in your head sounds different from your usual inner speech",
            "Visual distortions persist outside the hall, walls moving, faces not staying still",
            "You feel that the recorded instructions are being delivered to you personally",
            "You cannot locate the observer, the who-is-watching feels absent rather than quiet",
            "Racing thoughts do not quiet within a few minutes of returning to the breath",
            "You have a specific intrusive belief about other students that you cannot dismiss",
            "Time feels non-linear, not just slow, actively re-sequenced",
          ]}
        />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Prodromal signs, for a roommate or course manager
        </h2>
        <p className="mb-6 text-muted">
          The person in difficulty often cannot self-report accurately. What a roommate or course
          manager sees from the outside is equally useful and sometimes more actionable.
        </p>
        <ProdromeChecklist
          title="If this is what you are observing"
          items={[
            "They stopped eating at group meals on Day 4 or 5 and are taking food back to their room",
            "They are in their seat at the bell but leave before the closing chant and walk off",
            "They are speaking aloud in their room or during the break, not to anyone",
            "They keep looking over their shoulder or at the corner of the room as if hearing something",
            "Posture is unusually rigid or unusually collapsed compared to earlier days",
            "They have become very interested or very uninterested in a single specific student",
            "Their questions in the teacher interview have shifted from technique to cosmology",
          ]}
        />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Who is actually at risk
        </h2>
        <p className="mb-6 text-muted">
          The literature is consistent on risk factors. Every major case report has at least one
          of these in the history. Most have two or more.
        </p>
        <div className="mb-6">
          <RiskFactorMarquee
            items={[
              "Prior psychotic episode, any cause",
              "First-degree relative with schizophrenia",
              "First-degree relative with bipolar I + psychotic features",
              "Daily high-THC cannabis, last 6 months",
              "LSD or psilocybin in the last 30 days",
              "Ayahuasca or 5-MeO-DMT in the last 90 days",
              "Active untreated insomnia",
              "Recent acute stressor, last 90 days",
              "Age under 25, no prior sit",
              "Previous 10-day with adverse effect",
            ]}
          />
        </div>
        <p className="text-muted">
          None of these is a guarantee of trouble, and plenty of people with one or more of them
          sit courses without incident. The point is that the population of people who have had
          an episode during or after a retreat is not random. They are clustered in this group.
          If three or more of these apply to you, speaking with a clinician before signing up for
          a 10-day is not overcautious, it is the proportionate move.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          The application form, in practice
        </h2>
        <p className="mb-6 text-muted">
          The current Goenka application asks about anxiety, panic attacks, manic depression,
          schizophrenia, and similar conditions. It asks for dates, symptoms, duration,
          hospitalization history, treatment, and present condition. It is a self-report form,
          which is both its strength (students with honest answers get proportionate screening)
          and its limitation (it does not catch undiagnosed or underreported risk). These are the
          most common patterns and how they typically get handled.
        </p>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {screeningRows.map((r, i) => (
            <ScreeningCard
              key={i}
              trigger={r.trigger}
              outcome={r.outcome}
              note={r.note}
            />
          ))}
        </div>
        <p className="mt-6 text-muted">
          The application does not currently ask directly about family history of psychosis or
          recent cannabis or psychedelic use. Disclosing those in the additional-information
          section is the protective move. An assistant teacher who knows the full picture can make
          a proportionate call. An assistant teacher working from a partial picture cannot.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          What to actually do, same day
        </h2>
        <p className="mb-6 text-muted">
          If the prodromal signs above are showing up on Day 4, 5, or 6, this is the flow that
          actually works at a Goenka center. It is ordinary and it is used.
        </p>
        <ActionFlow />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          What the center can, and cannot, do
        </h2>
        <p className="mb-4 text-muted">
          Worth being direct about the scope of the center&apos;s support. Assistant teachers are
          trained volunteers, not mental health professionals. They have a few hundred retreats of
          pattern recognition but they do not diagnose, they do not prescribe, and they do not run
          a psychiatric unit. What they can do is often the right thing: scale back the technique,
          move you to the preparatory phase, extend sleep, adjust the schedule, and call outside
          help if needed.
        </p>
        <p className="mb-4 text-muted">
          What they cannot do is manage an acute psychotic episode on the premises. If you are in
          one, the center will help you reach a hospital, your family, or a crisis line. That is
          the correct handoff, and asking for it is not failure. The 10-day is a training program
          with an admission cap and a silence rule. It is not an inpatient unit and it has never
          claimed to be.
        </p>
        <p className="text-muted">
          After the course, Cheetah House at{" "}
          <a
            href="https://www.cheetahhouse.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline hover:text-foreground"
          >
            cheetahhouse.org
          </a>{" "}
          is the specialized resource for meditation-related adverse effects. Founded by Dr.
          Willoughby Britton at Brown University, they offer sliding-scale Zoom consults
          specifically for practitioners who have had something like what this page is about.
          They are not a crisis line. For acute crisis, 988 (US) or your local equivalent first.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          My read, after six courses
        </h2>
        <p className="mb-4 text-muted">
          I have sat six 10-day courses at three different centers. I have watched three students
          across those courses leave early under circumstances that looked like the prodromal
          window above. In two of those three, the course manager caught it, they were moved to
          Anapana, and they finished. In one, they left on Day 5 and the center called a taxi. I
          do not know what happened after. The structure handled the cases it could handle and
          handed off the one it could not.
        </p>
        <p className="mb-4 text-muted">
          My honest take: the risk of a vipassana-induced psychotic event is genuinely small for
          the population the application is designed to filter. It is meaningfully larger for
          people with the risk factors above, and it is a real mistake to treat the
          &quot;anyone can sit&quot; rhetoric as if it applies to everyone. The course is not for
          everyone. The assistant teachers are the first ones to say so when a student discloses
          an active psychiatric history. The community makes mistakes in both directions, screening
          out people it did not need to, and accepting people it should have deferred. The
          counterweight that works is honest disclosure on the form.
        </p>
        <p className="text-muted">
          If you have no risk factors and you are considering a first course, the honest
          probability of a psychotic episode is low enough that it should not be the thing that
          stops you. If you have two or more risk factors, the honest probability is not low
          enough to ignore. Both of those are true at the same time.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Frequently asked questions</h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group rounded-lg border border-border bg-card p-5 open:border-accent/30 open:bg-accent/5"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-base font-semibold text-foreground">
                <span>{f.question}</span>
                <span className="mt-1 shrink-0 text-accent transition-transform group-open:rotate-45">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted">{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <PracticeBuddyCta
        heading="A gentler way to build the practice"
        description="If the 10-day feels too activating for your current situation, free daily 20-minute sits with a partner over Google Meet can stabilize a practice without the intensive load. Old students run it, and it is tradition-respectful."
      />

      <div className="mt-12 rounded-xl border border-border bg-card p-6">
        <h2 className="mb-4 font-semibold text-foreground">Related reading</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guide/risks-and-safety"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Risks and safety, the full guide
          </Link>
          <Link
            href="/experience/day-4"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Day 4, what happens
          </Link>
          <Link
            href="/faq/vipassana-and-depression"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Vipassana and depression
          </Link>
          <Link
            href="/faq/vipassana-with-adhd-anxiety"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Vipassana with ADHD and anxiety
          </Link>
          <Link
            href="/guide/course-application-tips"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Course application tips
          </Link>
          <Link
            href="/t/matthew-diakonov"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Who is writing this
          </Link>
        </div>
      </div>

      <PageComments pageId="t-vipassana-psychosis" />
    </article>
  );
}
