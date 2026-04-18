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
  ConceptReveal,
  ZoneBeam,
  StepTimeline,
  Marquee,
  ScoreCard,
  GradientText,
} from "./anapana-client";

const PAGE_URL = "https://vipassana.cool/t/anapana-and-vipassana";
const PUBLISHED = "2026-04-17";

export const metadata: Metadata = {
  title: "Anapana and Vipassana: The 3.5-Day Zone-Narrowing Arc That Gates the Body Scan",
  description:
    "Anapana is not one technique; it is a 3.5-day progressive narrowing of the attention zone. The Day 4 switch to Vipassana is gated by a sensation threshold at the upper lip, not by the calendar. Every mechanic, mapped to what the schedule actually does.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Anapana and Vipassana: The Hidden 3.5-Day Arc",
    description:
      "The Day 4 afternoon pivot is the part every guide misses. Anapana narrows across four zones before the body scan can begin.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anapana and Vipassana: The Hidden 3.5-Day Arc",
    description:
      "Anapana narrows across four zones before Vipassana can begin. The switch is gated by sensation, not calendar.",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question: "What is the difference between Anapana and Vipassana?",
    answer:
      "Anapana is observation of the natural breath at a fixed, narrow area around the nose. It builds concentration. Vipassana is a systematic scan of the entire body, moving attention from head to feet and back, observing whatever sensations are present with equanimity. On a Goenka 10-day course, Anapana is taught for the first 3.5 days and Vipassana begins in the afternoon of Day 4.",
  },
  {
    question: "When exactly does Vipassana start during the 10-day course?",
    answer:
      "The transition happens on the afternoon of Day 4, during the 1 PM to 2:30 PM sitting. Day 4 morning is still Anapana, tightening the zone to the small moustache area above the upper lip. The Vipassana instruction (moving attention systematically through the body) is given in the first adhitthana sit after lunch. Day 4 is also when adhitthana starts: three one-hour sits per day where you do not move hands, open eyes, or uncross legs.",
  },
  {
    question: "Why does Anapana take 3.5 days before Vipassana begins?",
    answer:
      "Body scanning requires you to detect subtle sensation. If your awareness is not sharp enough, you sweep through the body and feel almost nothing. Anapana is a progressive narrowing of the attention zone: Day 1 is the whole nose area, Day 2 is below the nostrils, Day 3 is a small triangle above the upper lip, Day 4 morning is the moustache area only. The smaller the zone, the subtler the sensation you learn to notice. Once you can detect sensation there, you can detect it anywhere.",
  },
  {
    question: "Can I skip Anapana and go straight to Vipassana?",
    answer:
      "In the Goenka tradition, no. Attempting body scanning with an unconcentrated mind produces a scattered sweep where you feel almost nothing in most of the body, get frustrated, and quit. The 3.5 days are not filler; they are calibrating the sensitivity that makes the body scan actually work. If you try Vipassana without the precondition met, the technique will appear not to do anything. This is the single most common reason first-timers say the course did not work for them.",
  },
  {
    question: "Is Anapana the same as mindfulness of breathing?",
    answer:
      "They share a lineage but differ in the specific instruction. Goenka Anapana restricts the observation zone to a fixed, shrinking area around the nose, with no counting, no following the breath into the body, and no loving-kindness phrases. Secular mindfulness of breathing usually lets the attention follow the breath wherever it goes, including the chest and belly. The Goenka restriction exists for one reason: to sharpen sensitivity at a small, defined area as a precondition for body scanning.",
  },
  {
    question: "What is adhitthana and why is it introduced on Day 4?",
    answer:
      "Adhitthana means strong determination: sittings of one hour where you commit not to open your eyes, not to move your hands, and not to uncross your legs. Three adhitthana sittings are added to the daily schedule on Day 4, the same day Vipassana begins. This is not a coincidence. Body scanning while reacting to every discomfort teaches you nothing. The adhitthana structure forces you to meet sensation without automatically reacting, which is the actual skill being trained.",
  },
  {
    question: "Can you practice Anapana at home without doing the 10-day course?",
    answer:
      "Yes, Anapana alone is fine as a concentration practice and is freely taught in short formats (there is a 10-minute Goenka recording widely used with children). But the 3.5-day progressive narrowing is specific to the residential course. At home, most old students open with 5 to 10 minutes of Anapana and then move into body scanning. Anapana as a standalone practice without ever learning Vipassana is explicitly not the goal of the tradition.",
  },
  {
    question: "What should I feel during Anapana on Day 3?",
    answer:
      "By Day 3, the zone is the small triangle above the upper lip, and you are asked to notice specific sensations there: warmth from the outbreath, a cool draft from the inbreath, a subtle tingling, or a tiny pulse. If you cannot feel anything, the instruction is to stay with the area and observe the lack of sensation. For most students, a clear localized sensation appears by the end of Day 3. That detection is the signal that Vipassana instruction will work on Day 4.",
  },
];

const anapanaComparison = [
  {
    criterion: "Area of attention",
    verdict: "A fixed zone around the nose, narrowing each day.",
    note: "Day 1 whole nose; Day 2 below the nostrils; Day 3 upper lip triangle; Day 4 morning the moustache strip.",
    tone: "anapana" as const,
  },
  {
    criterion: "Area of attention",
    verdict: "The entire body, scanned systematically from head to feet and back.",
    note: "Start at the top of the head, move part by part, symmetrical or piecewise, returning upward once you reach the feet.",
    tone: "vipassana" as const,
  },
  {
    criterion: "Object of observation",
    verdict: "The natural breath.",
    note: "Air flowing, temperature, subtle touch on the skin. No counting, no control, no visualization.",
    tone: "anapana" as const,
  },
  {
    criterion: "Object of observation",
    verdict: "Every sensation present, pleasant or unpleasant.",
    note: "Heat, cold, tingling, pressure, pain, vibration, itching, numbness, or the absence of sensation. All treated the same way.",
    tone: "vipassana" as const,
  },
  {
    criterion: "Mental skill being trained",
    verdict: "Samadhi. Concentration.",
    note: "Sharpening attention into a precise instrument that can detect something specific at a defined point.",
    tone: "anapana" as const,
  },
  {
    criterion: "Mental skill being trained",
    verdict: "Panna plus upekkha. Wisdom through direct experience, and equanimity.",
    note: "Observing without craving the pleasant or pushing away the unpleasant. The pattern you break is the reaction habit itself.",
    tone: "vipassana" as const,
  },
  {
    criterion: "Emotional quality",
    verdict: "Calming. Settling. Concentration-pleasant.",
    note: "Many students describe a near-meditative bliss by Day 3. This is the preparation, not the goal.",
    tone: "anapana" as const,
  },
  {
    criterion: "Emotional quality",
    verdict: "Intense. Surfacing. Sankhara-releasing.",
    note: "Stored tension, suppressed emotion, and reactive patterns surface as sensation. Sittings can swing between free flow and intense discomfort.",
    tone: "vipassana" as const,
  },
];

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://vipassana.cool" },
          { name: "Guides", url: "https://vipassana.cool/t" },
          { name: "Anapana and Vipassana", url: PAGE_URL },
        ]}
      />
      <ArticleSchema
        title="Anapana and Vipassana: The 3.5-Day Zone-Narrowing Arc That Gates the Body Scan"
        description="Anapana is not one technique; it is a 3.5-day progressive narrowing of the attention zone. The Day 4 switch to Vipassana is gated by a sensation threshold at the upper lip."
        url={PAGE_URL}
        datePublished={PUBLISHED}
      />
      <FaqSchema faqs={faqs} />

      <ArticleHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/t" },
          { label: "Anapana and Vipassana" },
        ]}
        category="Technique Deep Dive"
        title="Anapana and Vipassana: The 3.5-Day Zone-Narrowing Arc That Gates the Body Scan"
        description="Every other guide treats them as two techniques sitting next to each other. They are not. Anapana is a progressive narrowing across four zones, and the Day 4 switch to Vipassana is gated by a detectable sensation at the last one."
        datePublished={PUBLISHED}
      />

      <div className="mb-10 rounded-lg border border-accent/20 bg-accent/5 p-5">
        <p className="mb-1 text-sm font-medium text-accent">TL;DR</p>
        <p className="text-sm text-muted">
          On the Goenka 10-day retreat, Anapana is not a single technique. It is a <GradientText animate={false}>3.5-day zone-narrowing arc</GradientText>: Day 1 observes the whole nose area, Day 2 shrinks to below the nostrils, Day 3 shrinks to the upper lip triangle, Day 4 morning shrinks to the moustache area only. The switch to Vipassana happens in the 1 PM sit on Day 4, not the morning, and the same sitting introduces adhitthana. The pivot is gated by a sensation threshold at the final Anapana zone. Miss the threshold and the body scan sweeps over a body you cannot feel.
        </p>
      </div>

      <section className="mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
        <div className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          The arc, in numbers
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={3.5} decimals={1} />
            </div>
            <p className="mt-1 text-xs text-muted">days of Anapana before the switch</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={4} />
            </div>
            <p className="mt-1 text-xs text-muted">discrete attention zones</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={3} />
            </div>
            <p className="mt-1 text-xs text-muted">daily adhitthanas added on Day 4</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={1} />
              <span className="text-xl text-muted"> PM</span>
            </div>
            <p className="mt-1 text-xs text-muted">the sit where the pivot happens</p>
          </div>
        </div>
      </section>

      <div className="mb-12">
        <ConceptReveal
          title="The part every guide misses"
          subtitle="Anapana is not static. It is a narrowing instrument."
          captions={[
            "Day 1. The whole nose area. Air moving, skin, temperature.",
            "Day 2. Below the nostrils only. The moustache strip comes into focus.",
            "Day 3. Upper lip triangle. You begin to notice a specific localized sensation.",
            "Day 4 morning. The moustache area alone. Sharpened to a point.",
            "Day 4 afternoon. The switch. Body scan becomes possible because sensitivity is calibrated.",
          ]}
        />
      </div>

      <section className="mb-14">
        <h2 className="mb-2 text-2xl font-bold text-foreground">
          Why every other guide gets this wrong
        </h2>
        <p className="mb-4 text-muted">
          If you read the first ten results for &quot;anapana and vipassana,&quot; you get the same framing every time. Anapana is observation of the breath, Vipassana is observation of sensation, Anapana builds concentration, Vipassana uses that concentration for insight. All of this is technically true. None of it tells you what actually happens during the course.
        </p>
        <p className="mb-4 text-muted">
          What happens is that Anapana itself changes every day. The instruction is not &quot;watch your breath at the nose for 3.5 days.&quot; The instruction is a progressive narrowing of the observation zone, and the narrowing has a specific purpose: to develop the detection threshold required for body scanning to work.
        </p>
        <p className="text-muted">
          When students try Vipassana outside this arc, on their own, without the precondition met, the body scan sweeps over a body they cannot feel. They conclude the technique is empty. It is not empty. The preparation that makes it non-empty is what the 3.5 days are for.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-2 text-2xl font-bold text-foreground">
          The four zones of Anapana, drawn
        </h2>
        <p className="mb-6 text-muted">
          Concretely, the observation zone shrinks each day. The rings below are sized to roughly the proportions instructed at each step. The center dot is where you end up: a point.
        </p>
        <ZoneBeam />
      </section>

      <section className="mb-14">
        <h2 className="mb-2 text-2xl font-bold text-foreground">
          Hour-by-hour, when each shift happens
        </h2>
        <p className="mb-6 text-muted">
          The schedule below is the working arc of the Goenka 10-day as it relates to the Anapana-to-Vipassana transition. Times are the standard Goenka schedule.
        </p>
        <StepTimeline
          steps={[
            {
              time: "Day 1, 4:30 AM",
              title: "Anapana begins, whole nose area",
              body: "First instruction. Observe the natural breath wherever it is felt around the nose. No control, no counting. Most of Day 1 is spent just noticing the mind wander.",
            },
            {
              time: "Day 2, morning",
              title: "Zone narrows to below the nostrils",
              body: "The new instruction restricts the observation to the area just below the nose openings and above the upper lip. The moustache strip. Your attention sharpens to a smaller rectangle.",
            },
            {
              time: "Day 3, morning",
              title: "Zone narrows to the upper lip triangle",
              body: "A smaller area. You are now told to notice specific sensations: warmth from the outbreath, a cool draft, a subtle pulse. Detection begins to be trained.",
            },
            {
              time: "Day 4, morning",
              title: "Zone narrows to the moustache area only",
              body: "Final Anapana instruction. A very small region. You are looking for any distinct localized sensation and staying with it. For most students, something clear appears here by the mid-morning sit.",
            },
            {
              time: "Day 4, 1:00 PM sit",
              title: "The switch. Vipassana instruction is given",
              body: "In this sit, the first adhitthana of the course, the instruction extends outward: from the small detection point you just built, move your attention part by part through the body. This is the first body scan.",
            },
            {
              time: "Day 4, evening onward",
              title: "Three adhitthanas per day, every day",
              body: "From Day 4 forward, three of the daily sits (typically 8 AM, 2:30 PM, 6 PM) are one-hour adhitthanas: no opening eyes, no moving hands, no uncrossing legs. The body scan runs inside this container.",
            },
          ]}
        />
      </section>

      <section className="mb-14">
        <h2 className="mb-2 text-2xl font-bold text-foreground">
          The sensation threshold, stated plainly
        </h2>
        <p className="mb-4 text-muted">
          The anchor fact of this page is that the switch to Vipassana is not a calendar cue. It is a sensitivity cue. By the end of Day 4 morning, you are expected to be able to notice a distinct, localized sensation at the small moustache area above the upper lip. That detection is the precondition. The Vipassana instruction then takes the skill you just built at that one spot and tells you to run it everywhere on the body.
        </p>
        <p className="mb-4 text-muted">
          You can verify this by reading the hour-by-hour writeups of the course:{" "}
          <Link href="/experience/day-1" className="text-accent underline hover:text-foreground">
            Day 1
          </Link>{" "}
          marks Anapana as lasting &quot;the first three and a half days,&quot;{" "}
          <Link href="/experience/day-4" className="text-accent underline hover:text-foreground">
            Day 4
          </Link>{" "}
          is explicitly called &quot;the pivot point of the entire course,&quot; and adhitthana is introduced on the same day as the body scan, which is the single clearest signal that the organizers know equanimity training and sensation detection have to land together.
        </p>
        <div className="rounded-lg border border-accent/20 bg-accent/5 p-5">
          <p className="mb-2 text-sm font-semibold text-accent">The anchor fact</p>
          <p className="text-sm text-muted">
            If you show up on Day 4 morning and cannot yet feel anything distinct at the moustache area, the standard response from the assistant teacher is to spend more time on Anapana before beginning the body scan. The switch is not administered to a group on a fixed schedule. It is administered to individuals when the detection threshold is met. This is why a typical 10-day course occasionally has students who start Vipassana on Day 4 evening instead of Day 4 afternoon. The arc is gated by the student, not by the clock.
          </p>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="mb-2 text-2xl font-bold text-foreground">
          Anapana vs Vipassana, on the axes that actually matter
        </h2>
        <p className="mb-6 text-muted">
          Not the vague &quot;one is concentration, the other is insight.&quot; The comparison below is on the four axes that tell you what the technique is actually doing on the cushion.
        </p>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {anapanaComparison.map((row, i) => (
            <ScoreCard
              key={i}
              criterion={row.criterion}
              verdict={row.verdict}
              note={row.note}
              tone={row.tone}
            />
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="mb-2 text-2xl font-bold text-foreground">
          Terms you will hear in the discourses
        </h2>
        <p className="mb-5 text-muted">
          Goenka uses a small set of Pali terms repeatedly across the discourses. Each is defined aloud the first time it appears. Hovering pauses the marquee.
        </p>
        <Marquee
          items={[
            "Anapana sati (awareness of breath)",
            "Vipassana (seeing things as they are)",
            "Samadhi (concentration)",
            "Panna (wisdom)",
            "Sila (moral conduct)",
            "Adhitthana (strong determination)",
            "Anicca (impermanence)",
            "Sankhara (mental reaction)",
            "Upekkha (equanimity)",
            "Metta (loving-kindness)",
            "Dhamma (the law)",
            "Sadhu sadhu sadhu (well said)",
          ]}
        />
      </section>

      <section className="mb-14">
        <h2 className="mb-2 text-2xl font-bold text-foreground">
          What this means for your home practice
        </h2>
        <p className="mb-4 text-muted">
          If the 10-day course built your sensitivity through a progressive narrowing, your home practice works best when it reproduces the same preparation-then-scan structure at compressed scale. The working pattern, used by most old students, is:
        </p>
        <ul className="list-disc space-y-3 pl-6 text-muted">
          <li>
            <strong className="text-foreground">5 to 10 minutes of Anapana.</strong>{" "}
            Same zone you ended the course with, the small moustache area. This is not Day 1 Anapana. It is Day 4 morning Anapana, compressed.
          </li>
          <li>
            <strong className="text-foreground">40 to 50 minutes of Vipassana.</strong>{" "}
            Body scanning, starting at the top of the head, moving down to the feet and back up. Equanimity with whatever arises, including nothing.
          </li>
          <li>
            <strong className="text-foreground">2 to 3 minutes of metta.</strong>{" "}
            A close of goodwill. Not decorative. It balances out the intensity of the scan.
          </li>
        </ul>
        <p className="mt-4 text-muted">
          If your mind is too scattered to scan on a given day, drop back to pure Anapana for the full session. There is no failure in this. You are recalibrating the instrument before you try to use it. The 3.5-day arc of the course showed you that the sensitivity is what makes the body scan work, not the body scan itself. Protect the sensitivity.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-2 text-2xl font-bold text-foreground">
          Common confusions that come from ignoring the arc
        </h2>
        <div className="space-y-3">
          {[
            {
              title: "\"I enjoy Anapana but Vipassana is uncomfortable, so I just do Anapana.\"",
              body: "Anapana was designed as the sharpening, not the cut. If you stay in it indefinitely, you get a pleasant concentrated state and never work with the reactive patterns the scan surfaces. The discomfort of Vipassana is the technique doing its job.",
            },
            {
              title: "\"I tried Vipassana at home on day one and felt nothing in most of my body.\"",
              body: "You skipped the precondition. The 3.5-day narrowing of the Anapana zone is what makes the scan non-empty. Open every home session with enough Anapana to re-establish detection at the small zone before expanding outward.",
            },
            {
              title: "\"The teacher did not tell me when to switch.\"",
              body: "The switch is not announced as a group milestone on a fixed clock. It is given when the detection threshold is met at the Anapana zone. For most students this is the 1 PM sit on Day 4. For some it is later. This is by design.",
            },
            {
              title: "\"Adhitthana is just sitting still. It has nothing to do with the technique.\"",
              body: "Adhitthana arrives on Day 4, the same day as the body scan, because a body scan while reacting to every discomfort teaches you nothing about equanimity. The sitting container exists specifically so sensation can arise without your habitual reactions rewriting it in real time.",
            },
            {
              title: "\"Anapana and Vipassana are two separate practices you can do in either order.\"",
              body: "You can technically do Vipassana first. It will usually not work, because detection is the precondition and Anapana is what trains it. The order is not ceremonial.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-lg border border-border bg-card p-5"
            >
              <h3 className="mb-2 text-base font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted">{item.body}</p>
            </div>
          ))}
        </div>
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
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
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
        heading="Sustain the practice after Day 10"
        description="Free daily sitting partner matching over Google Meet. Built specifically so old students can keep the 5-to-10 Anapana plus 40-to-50 scan structure alive after leaving the center."
      />

      <div className="mt-12 rounded-xl border border-border bg-card p-6">
        <h2 className="mb-4 font-semibold text-foreground">Related</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guide/anapana-and-vipassana-explained"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            The overview version
          </Link>
          <Link
            href="/experience/day-4"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Day 4 writeup
          </Link>
          <Link
            href="/guide/sensations-and-experiences"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Sensations and experiences
          </Link>
          <Link
            href="/guide/daily-practice"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Daily practice
          </Link>
          <Link
            href="/guide/vipassana-for-beginners"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            For beginners
          </Link>
        </div>
      </div>

      <PageComments pageId="t-anapana-and-vipassana" />
    </article>
  );
}
