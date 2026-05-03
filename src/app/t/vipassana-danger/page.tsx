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
  DangerMatrix,
  ScreeningAudit,
  DecisionFork,
  ActionChain,
} from "./danger-client";

const PAGE_URL = "https://vipassana.cool/t/vipassana-danger";
const PUBLISHED = "2026-05-03";

export const metadata: Metadata = {
  title:
    "Vipassana Danger: A Triaged Inventory of Every Risk, Mapped to the Course Mechanic That Causes It",
  description:
    "How dangerous is a 10-day Vipassana retreat actually? 53 to 63 percent of attendees report at least one adverse experience and 6 to 14 percent report enduring effects, per the Lindahl 2017 PLOS ONE study. Severe psychiatric harm is rare and concentrates in an identifiable risk group. A category-by-category triage of seven distinct danger types, the course mechanic that produces each one, and an audit of what the application form does and does not screen for.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Vipassana Danger: Seven Categories, Honestly Triaged",
    description:
      "Every category of vipassana danger people search for, sorted by base rate and severity, mapped to the specific course mechanic and to whether the application form screens for it.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana Danger: Seven Categories, Honestly Triaged",
    description:
      "Base rates, mechanisms, screening gaps, and an action chain for when something goes wrong on a 10-day.",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question: "How dangerous is a Vipassana retreat?",
    answer:
      "Across the meditation literature, 53 to 63 percent of intensive-retreat attendees report at least one adverse experience and 6 to 14 percent report effects that persist after the retreat. These rates are comparable to the adverse-effect rates of psychotherapy, which run 5 to 13 percent. The most cited dataset is Lindahl, Fisher, Cooper, Rosen, and Britton (2017), Varieties of Contemplative Experience, in PLOS ONE. Severe and lasting psychiatric harm is rare and concentrates in an identifiable risk group: prior psychotic episode of any cause, first-degree relative with schizophrenia or bipolar I with psychotic features, recent heavy cannabis or classical psychedelic use, untreated PTSD, or being under 25 with no prior practice. Outside of that group the base rate of severe harm is low. Inside it the base rate is meaningfully higher.",
  },
  {
    question: "What are the actual dangers of a 10-day Vipassana retreat?",
    answer:
      "Seven distinct categories appear in the literature and in the personal accounts. Acute psychotic-spectrum events on the back half of the course. Dukkha nana or dark night experiences during and after. Resurfaced trauma in students with unresolved PTSD. Knee, back, and hip injuries from long sittings. Sleep deprivation and food cutoff side effects. Re-entry difficulty in the week after the course. Difficulty integrating with relationships and work in the month after. The first three are the ones that rank as severe in the case literature. The last four are common, manageable, and resolve with time and practice adjustments.",
  },
  {
    question: "Is the danger of vipassana mostly psychological or physical?",
    answer:
      "Both, but the asymmetry matters. Physical danger is high frequency and low severity for most students: knee strain, back pain, hip tightness, headaches from sitting still 10 hours a day. These resolve in a week and have well-known accommodations the center will offer if asked. Psychological danger is low frequency and high severity for the at-risk subgroup: a small minority of students with pre-existing risk factors can experience an acute psychiatric crisis. Outside that subgroup, psychological difficulty is common and usually productive. Inside it, the risk is real enough that a clinician conversation before the course is the proportionate move.",
  },
  {
    question: "Does the Goenka application form screen for these dangers?",
    answer:
      "Partially. The current application asks about anxiety, panic attacks, manic depression, schizophrenia, and similar conditions, with follow-ups on dates, symptoms, hospitalization, treatment, and present condition. It does not currently ask about first-degree family history of psychotic illness, recent cannabis or psychedelic use, unresolved PTSD or active trauma processing, or recent acute stressors in the prior 90 days. The form relies on self-report and proportionate disclosure. An assistant teacher who has the full picture can make a proportionate call. An assistant teacher working from a partial picture cannot. The most protective single action a prospective student can take is to disclose risk factors honestly in the additional-information section even when the form does not specifically ask about them.",
  },
  {
    question: "Should I do a Vipassana retreat if I have anxiety or depression?",
    answer:
      "Generalized anxiety, well managed with therapy and medication, is generally not a contraindication. Stable unipolar depression on medication, with years of stability and no recent major episode, is generally accepted, and the tradition has explicit guidance to continue prescribed medication during the course. Currently active major depression with suicidal ideation, or anxiety severe enough to be functionally impairing, is the wrong context for a 10-day. The course intensifies what is already there. A stabilizing therapy relationship and a steady daily life is the foundation that makes the course productive rather than destabilizing. If you are uncertain, an honest conversation with your clinician before applying is the right step.",
  },
  {
    question: "What is the dukkha nana or dark night, and is it dangerous?",
    answer:
      "The dukkha nanas, knowledges of suffering, are a mapped sequence of insight stages in Theravada meditation theory. They include dissolution, fear, misery, disgust, desire for deliverance, and re-observation. Students moving through them often describe weeks or months of uncomfortable mental territory. They are difficult but not psychotic. A person in the dukkha nanas is oriented to reality, can answer questions, can describe their experience coherently. They can pass without crisis with a teacher conversation and continued practice. They are sometimes confused with psychiatric harm because the symptoms read similar at low resolution. They are not the same and the response to each is different. Cheetah House at cheetahhouse.org documents this distinction in detail.",
  },
  {
    question: "Are knee or back injuries from sitting a real danger?",
    answer:
      "Yes, low severity, high frequency. The course schedules roughly 10.5 hours of seated meditation per day. From Day 4 onward there are three Adhitthana hours per day where students are asked to remain still. Most first-time students develop some knee, hip, or lower back discomfort. A subset develop acute strain or aggravated chronic back conditions. The center will provide chairs, back supports, extra cushions, kneeling benches, and modified postures on request. Old students sometimes underuse these supports out of misplaced effort. Asking for accommodations is not weakness and the assistant teachers actively encourage it when the difficulty is physical and not technique-related.",
  },
  {
    question: "What if I am taking psychiatric medication, do I need to stop?",
    answer:
      "No. The Goenka tradition has explicit guidance to continue prescribed psychiatric medication during the course. Stopping antidepressants, mood stabilizers, or antipsychotics for the course is a documented bad pattern that has produced multiple adverse events. The application asks about current treatment so the center can plan for it. Bring enough medication for the full 10 days plus a buffer, plus a written list of what you take and your prescriber's contact. The center stores it for you and returns it daily. If you are considering tapering off a medication, do that with your prescriber before or after the course, not during it.",
  },
  {
    question: "What should I do if I or someone I know has a crisis during a course?",
    answer:
      "Tell the course manager first, not the assistant teacher between scheduled interview times. The course manager is the operational person and handles exactly this. Ask them and the assistant teacher what to scale back for the next sitting. The center has a documented protocol for tapering the technique back to a stabilizing register and they use it. Use the evening teacher interview to describe the symptom in plain language, not in Pali or in technique vocabulary. If symptoms escalate, leaving the course is not failure. Courses run continuously, you can sit another. Call 988 from the United States or your local crisis line from the center phone if you are in acute danger. After the course, contact Cheetah House at cheetahhouse.org for follow-up support.",
  },
  {
    question: "How does this differ from the Vipassana psychosis page on this site?",
    answer:
      "The Vipassana psychosis page zooms in on one specific danger category, acute psychotic-spectrum events, and answers one specific structural question that the existing literature does not surface clearly: when on the 10-day schedule those events actually appear, and why the course design concentrates them on Day 4 through Day 6. This page is the wider triage. It is the right read if you are asking whether to sit a course at all, and which of the seven danger categories applies to your situation. The psychosis page is the right deeper read if you have decided to sit and want to understand the highest-severity scenario in detail.",
  },
];

const dangerCategories = [
  {
    id: "psychotic",
    name: "Acute psychotic-spectrum events",
    baseRate: "Rare. Concentrated in an identifiable risk group.",
    baseRateValue: 1,
    severity: "rare-but-severe" as const,
    mechanism:
      "Day 4 of the 10-day stacks three loads on the same morning: the technique shifts from a stabilizing preparatory phase to a more activating one, the first Adhitthana sittings begin where students are asked not to move, and cumulative sleep debt at 5 to 6 hours per night has reached roughly 8 to 16 hours. The combination is destabilizing for a small minority of students with pre-existing risk factors, primarily prior psychotic episodes, family history of schizophrenia or bipolar I with psychotic features, recent heavy cannabis or classical psychedelic use, and active untreated sleep disorders.",
    screening: "partial" as const,
    shortAction:
      "Tell the course manager same day if prodromal signs appear. Cheetah House for follow-up.",
  },
  {
    id: "dukkha-nana",
    name: "Dukkha nana or dark night experiences",
    baseRate:
      "Moderate. Many serious practitioners encounter at least one phase.",
    baseRateValue: 25,
    severity: "moderate" as const,
    mechanism:
      "The Theravada insight maps describe a sequence of difficult stages, dissolution, fear, misery, disgust, desire for deliverance, that often arise during or after intensive practice. They are mapped, expected, and not psychotic. They can be unsettling for weeks to months and are sometimes confused with psychiatric harm. The technique itself is the cause and a teacher conversation plus continued practice is the standard handling.",
    screening: "missing" as const,
    shortAction:
      "Stay oriented to reality, talk to an assistant teacher, do not stop practice on impulse.",
  },
  {
    id: "trauma",
    name: "Resurfaced trauma in unresolved PTSD",
    baseRate:
      "Real risk for students with active or unprocessed trauma history.",
    baseRateValue: 8,
    severity: "high" as const,
    mechanism:
      "Long silent retreats remove the everyday distractions that hold unprocessed material in the background. For students with unresolved trauma, this can surface flashbacks, dissociation, or panic. The course is not designed as a trauma container and the assistant teachers are not trauma therapists. A stabilizing therapy relationship before the course is the standard recommendation in the trauma-aware meditation literature.",
    screening: "missing" as const,
    shortAction:
      "Establish a therapy relationship before the course. Disclose history on the form.",
  },
  {
    id: "physical",
    name: "Knee, back, hip, and posture injury",
    baseRate: "Common. Most first-time students experience some form of it.",
    baseRateValue: 60,
    severity: "low" as const,
    mechanism:
      "The course schedules roughly 10.5 hours of seated meditation per day. Three Adhitthana hours from Day 4 onward ask students to remain still. Knee strain, lower back stiffness, hip tightness, and tension headaches are the most common physical issues. A small fraction develop acute strain or aggravate chronic conditions.",
    screening: "explicit" as const,
    shortAction:
      "Ask the course manager for chairs, back supports, kneeling benches, or modified posture.",
  },
  {
    id: "sleep-food",
    name: "Sleep restriction and food-cutoff side effects",
    baseRate:
      "Universal. Built into the schedule. Adapts after the first few days for most.",
    baseRateValue: 95,
    severity: "low" as const,
    mechanism:
      "Old students do not eat after 12 noon. The wakeup bell is at 4 am. Cumulative sleep debt and the late-afternoon hunger window produce light-headedness, irritability, vivid dreams, and an early-evening energy crash. Most students adapt by Day 3 or 4. New students get tea and fruit at 5 pm, which softens the curve.",
    screening: "explicit" as const,
    shortAction:
      "Eat a larger lunch by Day 2. Use the 5 pm tea allowance if you are a new student.",
  },
  {
    id: "reentry",
    name: "Re-entry difficulty in the week after",
    baseRate:
      "Common. The first 72 hours back in normal life are the hardest.",
    baseRateValue: 40,
    severity: "low" as const,
    mechanism:
      "The retreat removes input. Phones, screens, conversation, music, eye contact, sexual activity, and most decisions are absent for ten days. The return is a sudden re-introduction of all of that at once. Students often report sensory overload, irritability with friends and family, and a strong urge to either skip social commitments or to over-correct toward them. This passes within a week for most.",
    screening: "missing" as const,
    shortAction:
      "Schedule a quiet first 48 hours back. Plan one social commitment, not five.",
  },
  {
    id: "integration",
    name: "Relationship and work integration in the first month",
    baseRate:
      "Variable. Depends on whether daily practice is established.",
    baseRateValue: 30,
    severity: "moderate" as const,
    mechanism:
      "Students often return with strong intent to maintain a daily practice and find that work, relationships, and existing habits do not bend to fit a new 5 am schedule. The gap between the retreat self and the home self is often jarring, and a small number of students make impulsive life changes in the first month that they later regret. Most settle into a steady practice within 30 to 90 days, often with help from an old-student community or a practice buddy.",
    screening: "missing" as const,
    shortAction:
      "Defer big decisions for 30 days. Build the daily practice first, change the rest later.",
  },
];

const screeningRows = [
  {
    question:
      "Diagnosed psychiatric condition, anxiety, depression, panic, manic depression, schizophrenia",
    covered: true,
    risk: "Direct question on the form, asks for dates and treatment.",
  },
  {
    question: "Current psychiatric medication and prescriber contact",
    covered: true,
    risk: "Asked so the center can store and return medication daily.",
  },
  {
    question: "First-degree relative with schizophrenia or bipolar I",
    covered: false,
    risk: "Strong predictor in the case literature. Disclose in additional information.",
  },
  {
    question: "Heavy cannabis use in the prior 6 months",
    covered: false,
    risk: "Independent psychosis risk factor. Disclose in additional information.",
  },
  {
    question: "Classical psychedelic use in the prior 30 days",
    covered: false,
    risk: "Combines badly with intensive practice. Most centers will defer if disclosed.",
  },
  {
    question: "Unresolved trauma or active PTSD without therapy support",
    covered: false,
    risk: "Long silent retreats can resurface unprocessed material. Therapy relationship first.",
  },
  {
    question: "Recent acute stressor in the last 90 days",
    covered: false,
    risk: "Bereavement, breakup, job loss, all reduce the cushion the course requires.",
  },
  {
    question: "Recent psychiatric hospitalization",
    covered: true,
    risk: "Asked under the conditions question. Usually deferred by the assistant teacher.",
  },
  {
    question: "Significant chronic physical condition",
    covered: true,
    risk: "Asked on the form. Center can usually accommodate with chairs and modified posture.",
  },
];

const decisionForks = [
  {
    label: "No psychiatric history, no family history, no recent substances, stable life",
    verdict:
      "The base rate of severe adverse events is low for this group. Most reported difficulty is in the productive range and resolves with continued practice and a teacher conversation.",
    tone: "go" as const,
  },
  {
    label: "One risk factor, e.g. stable depression on medication, or under 25 with no prior sit",
    verdict:
      "A clinician conversation before the course is the proportionate move. Disclose honestly on the form. Continue prescribed medication during the course.",
    tone: "pause" as const,
  },
  {
    label: "Two or more risk factors, or active psychiatric crisis, or recent psychedelic use",
    verdict:
      "Defer until the load lightens. The course intensifies what is already there. A stabilizing period of supervised daily practice or therapy is the standard sequence before sitting a 10-day.",
    tone: "defer" as const,
  },
];

const actionSteps = [
  {
    who: "You, as soon as you notice",
    what: "Tell the course manager the same day, not at the next scheduled interview. The course manager is the operational person and is trained for exactly this.",
    when: "Within hours, not days",
  },
  {
    who: "Course manager and assistant teacher",
    what: "They will ask about the symptom in plain language and discuss what to scale back for the next sitting. The center has a tapering protocol from the active technique back to the stabilizing preparatory phase, and they use it.",
    when: "Same day",
  },
  {
    who: "Evening teacher interview",
    what: "Describe what is happening literally, not in technique vocabulary or Pali. The teachers are pattern-matching against several hundred retreats of experience and need plain language to do that well.",
    when: "Same day or next",
  },
  {
    who: "Outside help if symptoms escalate",
    what: "988 in the United States or your local crisis line from the center phone. Leaving the course is not failure. Courses run continuously and you can sit another. The 10-day is a training program with a silence rule, not an inpatient unit.",
    when: "If indicated",
  },
  {
    who: "Cheetah House after the course",
    what: "cheetahhouse.org runs sliding-scale Zoom consults specifically for meditators with adverse effects. Founded by Dr. Willoughby Britton at Brown University. Not a crisis line, an integration resource.",
    when: "Days to weeks after",
  },
];

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://vipassana.cool" },
          { name: "Guides", url: "https://vipassana.cool/t" },
          { name: "Vipassana danger", url: PAGE_URL },
        ]}
      />
      <ArticleSchema
        title="Vipassana Danger: A Triaged Inventory of Every Risk, Mapped to the Course Mechanic That Causes It"
        description="A category-by-category triage of seven distinct danger types in the 10-day Goenka course, with the mechanic that produces each one and an audit of what the application form does and does not screen for."
        url={PAGE_URL}
        datePublished={PUBLISHED}
      />
      <FaqSchema faqs={faqs} />

      <ArticleHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/t" },
          { label: "Vipassana danger" },
        ]}
        category="Honest Audits"
        title="Vipassana Danger: A Triaged Inventory of Every Risk, Mapped to the Course Mechanic That Causes It"
        description="Most pages on this question are either anecdotal warnings or generic 'meditation can be hard' framing. This is the triage. Seven categories of danger, sorted by base rate and severity, each mapped to the specific course mechanic that produces it and to whether the application form actually screens for it."
        datePublished={PUBLISHED}
      />

      <div className="mb-10 rounded-lg border border-accent/20 bg-accent/5 p-5">
        <p className="mb-1 text-sm font-medium text-accent">
          Direct answer (verified 2026-05-03)
        </p>
        <p className="text-sm text-muted">
          53 to 63 percent of intensive-retreat attendees report at least one
          adverse experience and 6 to 14 percent report enduring effects, per{" "}
          <a
            href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0176239"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline hover:text-foreground"
          >
            Lindahl et al. 2017, PLOS ONE
          </a>
          . Comparable to the 5 to 13 percent adverse-effect rate of
          psychotherapy. Severe psychiatric harm is rare and concentrates in an
          identifiable risk group: prior psychotic episode, first-degree
          relative with schizophrenia or bipolar I with psychotic features,
          recent heavy cannabis or classical psychedelic use, untreated PTSD,
          or being under 25 with no prior practice. Outside that group the base
          rate of severe harm is low. Inside it the base rate is meaningfully
          higher, and a clinician conversation before the course is the
          proportionate move.
        </p>
      </div>

      <section className="mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
        <div className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          The numbers, grounded
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={63} suffix="%" />
            </div>
            <p className="mt-1 text-xs text-muted">
              attendees report at least one adverse experience
            </p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={14} suffix="%" />
            </div>
            <p className="mt-1 text-xs text-muted">
              report effects that endure past the retreat
            </p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={7} />
            </div>
            <p className="mt-1 text-xs text-muted">
              distinct danger categories in the literature
            </p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={5} />
            </div>
            <p className="mt-1 text-xs text-muted">
              psychiatric conditions named on the application
            </p>
          </div>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Why &quot;is vipassana dangerous&quot; is the wrong question
        </h2>
        <p className="mb-4 text-muted">
          The phrasing on the search bar is one question, but the actual
          question underneath is at least seven different ones, each with a
          different base rate, a different severity, and a different response.
          Lumping them together produces either reassurance that overlooks the
          real risk subgroup, or alarm that misreads productive difficulty as
          harm. Both are common in what currently ranks for this topic.
        </p>
        <p className="mb-4 text-muted">
          What follows is the triage. Each row is a category of danger that
          appears in the literature or in the personal accounts. Tap any row to
          see the specific mechanic in the 10-day that produces it. The screening
          dot indicates whether the current Goenka application form catches the
          relevant risk factor.
        </p>
        <p className="text-muted">
          A note on framing. This page is not the technique. We never describe,
          prescribe, or teach the technique on this site. For anything
          operational about how to sit, how to handle a difficulty on the
          cushion, or how to work with a sensation, the right place is{" "}
          <a
            href="https://www.dhamma.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline hover:text-foreground"
          >
            dhamma.org
          </a>{" "}
          and an authorized assistant teacher at a 10-day residential course.
          What you will find below is structural, not operational.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          The seven categories of danger
        </h2>
        <p className="mb-6 text-muted">
          Sorted top to bottom by severity for the population most affected, not
          by frequency. The high-frequency categories at the bottom are common
          and almost always resolve. The low-frequency categories at the top
          are rare and concentrate in identifiable subgroups.
        </p>
        <DangerMatrix categories={dangerCategories} />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          The application form, audited row by row
        </h2>
        <p className="mb-6 text-muted">
          The Goenka 10-day application includes a medical and psychiatric
          screening section. It is the single most protective filter the
          tradition has, and it is genuinely good at the categories it covers.
          It also has documented gaps. This table compares the risk factors
          named in the case literature against what the form currently asks.
          Anything in a red &quot;no&quot; row is something an honest applicant
          should disclose in the additional-information section even though the
          form does not specifically ask.
        </p>
        <ScreeningAudit rows={screeningRows} />
        <p className="mt-6 text-muted">
          The form was strengthened over decades after specific adverse events
          made the gaps visible. It is a self-report instrument and inherits the
          limits of self-report. Disclosing a risk factor is the protective
          move. The assistant teachers have several hundred retreats of pattern
          recognition and they use disclosed information to make a proportionate
          call, accept, defer, or accept with specific accommodations. They do
          not use disclosure as a reason to decline lightly.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          The decision framework, three honest branches
        </h2>
        <p className="mb-6 text-muted">
          The most common dishonesty in writing about this topic is the
          implicit claim that everyone should sit, or that no one should. The
          honest answer is conditional on a small set of facts about your own
          history. These three branches cover most cases.
        </p>
        <DecisionFork branches={decisionForks} />
        <p className="mt-6 text-muted">
          A risk factor is not a sentence. People with one or even two risk
          factors sit courses every year without incident. The point of the
          framework is to make the conversation explicit instead of assuming the
          marketing &quot;anyone can sit&quot; framing applies uniformly. It does
          not, and the assistant teachers will be the first to say so when a
          student discloses an active history.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          When something is going wrong, the action chain
        </h2>
        <p className="mb-6 text-muted">
          If a problem develops during a course, this is the path that actually
          works at a Goenka center. It is ordinary, it is documented, and it is
          used regularly. The single most common mistake is waiting until the
          next scheduled teacher interview when a same-day word with the course
          manager would have triggered the protocol earlier.
        </p>
        <ActionChain steps={actionSteps} />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          What this page is not
        </h2>
        <p className="mb-4 text-muted">
          This is not a critique of the tradition. The Goenka 10-day is one of
          the few free, large-scale, donation-only meditation training
          structures in the world. Roughly 200 centers run it. The screening,
          the protocols, and the post-course resources have been refined over
          decades, often after specific adverse events made the gaps visible.
          The course is not a unique source of meditation harm; the same
          intensities exist in Zen sesshin, Mahasi noting retreats, Tibetan
          long retreats, and most other intensive contemplative formats. The
          Goenka tradition is unusual mainly in the volume of students it
          processes per year, which makes its adverse-event base rate visible
          where smaller traditions stay opaque.
        </p>
        <p className="mb-4 text-muted">
          This is also not a substitute for a clinician conversation. The
          assistant teachers are trained volunteers, not psychiatrists. The
          centers are not inpatient units. If you are in active psychiatric
          crisis, the right first call is your therapist or 988, not a course
          application.
        </p>
        <p className="text-muted">
          And this is not the technique. For any operational question about how
          to sit, how to work with a sensation, or how to handle a difficulty on
          the cushion, the right resource is dhamma.org and an authorized
          assistant teacher at a residential course. We do not teach technique on
          this site.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          My read, after six courses and 40 days of dhamma service
        </h2>
        <p className="mb-4 text-muted">
          I have sat six 10-day courses at three different centers, Dhammamanda
          in Northern California, CYO in the Bay Area, and North Fork in Central
          California, plus 40 days of volunteer dhamma service across multiple
          courses. Across that window I have watched students leave early under
          circumstances that looked like the high-severity categories above.
          The pattern I have seen, which matches the case literature, is that
          almost every difficult exit was a student with at least one disclosed
          or undisclosed risk factor that was visible on the way in if anyone
          had asked. The people most at risk were not the students with no
          history who got hit by surprise. They were the students with a known
          history who hoped the course would be the thing that resolved it.
        </p>
        <p className="mb-4 text-muted">
          The course is not therapy. It is not a substitute for therapy. For
          students in the lower-risk groups it is, in my experience, an
          unusually clean training format and the difficulty is in the
          productive range. For students in the higher-risk groups, treating it
          as an experiment instead of a planned next step is where the
          asymmetric downside lives. The hopeful version of that decision often
          produces the cases that end up in the literature.
        </p>
        <p className="text-muted">
          Not a teacher, not a clinician, just a long-time practitioner sharing
          what I have seen. For anything technique-related, dhamma.org and an
          authorized assistant teacher. For anything clinical, your prescriber.
          For everything in between, the categories above.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-4 text-2xl font-bold text-foreground">
          Frequently asked questions
        </h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group rounded-lg border border-border bg-card p-5 open:border-accent/30 open:bg-accent/5"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-base font-semibold text-foreground">
                <span>{f.question}</span>
                <span className="mt-1 shrink-0 text-accent transition-transform group-open:rotate-45">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 1v12M1 7h12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
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
        description="If a 10-day feels too activating for your current situation, free daily 20-minute sits with a partner over Google Meet can stabilize a practice without the intensive load. Old students run it, and it is tradition-respectful."
      />

      <div className="mt-12 rounded-xl border border-border bg-card p-6">
        <h2 className="mb-4 font-semibold text-foreground">Related reading</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/t/vipassana-psychosis"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Vipassana psychosis, the Day 4 deep dive
          </Link>
          <Link
            href="/guide/risks-and-safety"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Risks and safety, the full guide
          </Link>
          <Link
            href="/t/is-vipassana-a-cult"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Is vipassana a cult, the rubric audit
          </Link>
          <Link
            href="/faq/is-vipassana-safe"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Is vipassana safe, the FAQ
          </Link>
          <Link
            href="/faq/vipassana-and-depression"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Vipassana and depression
          </Link>
          <Link
            href="/guide/course-application-tips"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Course application tips
          </Link>
          <Link
            href="/experience/day-4"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Day 4, what happens
          </Link>
        </div>
      </div>

      <PageComments pageId="vipassana-danger" />
    </article>
  );
}
