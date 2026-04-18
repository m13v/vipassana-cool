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
  GradientText,
  ConceptReveal,
  PhaseTrack,
  WeekTable,
  GateMeter,
  MatchFlow,
  Marquee,
  ChecklistCard,
} from "./program-client";

const PAGE_URL =
  "https://vipassana.cool/t/vipassana-meditation-3-month-beginner-program-daily-practice";
const PUBLISHED = "2026-04-17";

export const metadata: Metadata = {
  title:
    "The 3-Month Vipassana Beginner Program: Daily Practice Gated by Sensitivity, Not Calendar",
  description:
    "A 12-week at-home Vipassana program for beginners, gated the way the 10-day course actually gates students. You do not add the body scan until your Anapana detection threshold is met. Daily structure, weekly schedule, and the accountability layer that makes it last.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "The 3-Month Vipassana Beginner Program",
    description:
      "12 weeks of at-home practice, gated by sensation rather than calendar, with a real daily accountability mechanism built in.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The 3-Month Vipassana Beginner Program",
    description:
      "Three gated phases, twelve weeks, daily Anapana to body scan to adhitthana. Includes the matching window the Practice Buddy system actually uses.",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question:
      "Is there an official Goenka 3-month vipassana program for beginners?",
    answer:
      "No. The Goenka tradition does not publish a 3-month at-home beginner program. The official entry point is the residential 10-day course, with the recommendation to sit one hour morning and one hour evening daily afterward. The 12-week program on this page is a structured at-home progression that prepares a beginner for the 10-day or rebuilds a lapsed practice. It mirrors the same gating logic the residential course uses, where you do not advance to body scan until your Anapana sensitivity is calibrated, and you do not add adhitthana until you can hold equanimity through the scan.",
  },
  {
    question:
      "Can I do this 3-month program without ever going to a 10-day vipassana course?",
    answer:
      "You can build a real concentration practice from this alone. You cannot get the full Vipassana technique from any home program, including this one. The body scan instruction is taught in person on Day 4 of the 10-day course for a reason: the assistant teacher reads the room, gives one-on-one corrections, and the group container holds the depth. Treat this 12-week program as the strongest possible preparation for the residential course, or as the daily structure you maintain between courses. It is not a substitute for sitting a 10-day.",
  },
  {
    question:
      "How many minutes per day does the 3-month program require?",
    answer:
      "It ramps from 20 minutes a day in week 1 to two hours a day by week 12, in line with the standard Goenka recommendation. Weeks 1 through 4 are 20 to 30 minutes once a day, all Anapana. Weeks 5 through 8 are 30 to 45 minutes morning plus an optional 20 minutes evening, introducing the body scan. Weeks 9 through 12 are 45 to 60 minutes morning and 30 to 60 minutes evening, with adhitthana sittings introduced on weekends. The point of the ramp is sustainability. A 20-minute daily streak that lasts 12 weeks beats a one-hour streak that breaks in week 3.",
  },
  {
    question:
      "What is the 'sensitivity gate' between phases of the program?",
    answer:
      "The Goenka 10-day course does not switch students from Anapana to body scan on a fixed clock. It switches them when they can detect a distinct localized sensation at the small moustache area above the upper lip. This program uses the same logic. Phase 1 ends not because four weeks have passed but because you can sit 25 minutes of Anapana with a steady, defined sensation in the small zone. Phase 2 ends not because eight weeks have passed but because you can complete a full head-to-feet body scan without needing to open your eyes or shift posture mid-pass. If you do not meet the gate, you hold the line for another week. The calendar serves the practice, not the other way around.",
  },
  {
    question:
      "Do I need a teacher to follow this 3-month program?",
    answer:
      "No, and a self-appointed external teacher is explicitly not part of the Goenka path between courses. The substitute is the structure itself, the recordings you already have access to as an old student, and a daily accountability partner. The Practice Buddy match on this site exists for the third piece. It pairs you with another meditator whose sit time overlaps yours within a 60-minute window in UTC, and you sit together over Google Meet, daily, with one person sharing the Goenka recording through screen share. That is the closest at-home equivalent to a group sitting.",
  },
  {
    question:
      "What is the daily structure inside a single sit during this program?",
    answer:
      "It mirrors the structure of a course sitting, compressed. Open with metta intention for 30 to 60 seconds. Move into Anapana at the small zone above the upper lip until the mind settles, typically 5 to 10 minutes for an experienced sit, longer at the start of the program. Move into the body scan, head to feet, then feet to head, observing every sensation with equanimity. Close with 1 to 2 minutes of metta. In phase 1 of the program, the entire sit is just the Anapana segment. In phase 2 you add the scan. In phase 3 you add adhitthana, which is the commitment not to open your eyes, move your hands, or uncross your legs for the full hour.",
  },
  {
    question:
      "What if I miss days during the 3-month program?",
    answer:
      "Missing days is universal and the program is built around it. The rule is simple: if you miss one day, sit the next. If you miss a week, drop back to the previous phase for one week before resuming. If you miss a month, restart from week 1. Guilt is itself aversion and adds nothing to the practice. The streak you are building is not a calendar streak. It is the cumulative effect of returning to the cushion after every interruption. Long-term meditators are not the ones who never stopped. They are the ones who kept coming back.",
  },
  {
    question:
      "How does this compare to the 10-week online course or the 30-day Foundations course?",
    answer:
      "The 10-week online vipassana course is a curriculum-led program with live sessions, Q&As, and theory videos delivered over Zoom. The 30-day Foundations course is similar in format. Both are excellent if you want a teacher-led structure with a fixed weekly cadence. This 12-week program is different in three ways: it is gated by sensation rather than calendar, it is built around the daily-sit accountability layer rather than weekly group classes, and it is designed to plug directly into the residential 10-day at the end. Use whichever matches how you actually learn. If you bounce off self-directed structure, take the 10-week. If you have already taken at least one 10-day and need the daily layer, this is the better fit.",
  },
];

const phases = [
  {
    weeks: "Weeks 1 to 4",
    label: "Phase 1: Calibrate the instrument",
    technique: "Anapana only, narrowing zone",
    duration: "20 to 30 min, morning only",
    gate: "You can detect a distinct, localized sensation at the small moustache area above the upper lip in 25 of 30 sits.",
    color: "border-accent/30 bg-accent/5",
  },
  {
    weeks: "Weeks 5 to 8",
    label: "Phase 2: Add the body scan",
    technique: "Anapana opener, head-to-feet scan",
    duration: "30 to 45 min morning, optional 20 min evening",
    gate: "You can complete a full head-to-feet pass without opening your eyes or shifting posture in 4 of 7 daily sits.",
    color: "border-accent-light/40 bg-accent-light/10",
  },
  {
    weeks: "Weeks 9 to 12",
    label: "Phase 3: Add adhitthana",
    technique: "Full sit pattern with no-move, no-open-eyes hour",
    duration: "45 to 60 min morning, 30 to 60 min evening",
    gate: "You can sit a one-hour adhitthana on Saturday and again on Sunday without breaking posture. You are now ready for a 10-day course.",
    color: "border-accent/40 bg-accent/10",
  },
];

const weeks = [
  { week: 1, phase: "anapana" as const, morning: "20 min Anapana", evening: "—", focus: "Whole nose area, find your spot and time", check: "Same spot, same time, 6 of 7 days" },
  { week: 2, phase: "anapana" as const, morning: "20 min Anapana", evening: "—", focus: "Narrow to below the nostrils", check: "Awareness stays in the smaller zone for at least 5 min" },
  { week: 3, phase: "anapana" as const, morning: "25 min Anapana", evening: "—", focus: "Narrow to upper lip triangle", check: "Notice warmth on outbreath, cool draft on inbreath" },
  { week: 4, phase: "anapana" as const, morning: "30 min Anapana", evening: "—", focus: "Narrow to the moustache strip", check: "GATE: distinct localized sensation in the small zone, 25 of 30 sits" },
  { week: 5, phase: "scan" as const, morning: "5 min Anapana + 25 min scan", evening: "—", focus: "First body scan, top of head to feet, one pass", check: "One complete pass without giving up mid-body" },
  { week: 6, phase: "scan" as const, morning: "5 min Anapana + 30 min scan", evening: "—", focus: "Head to feet, then feet to head", check: "Two complete passes, no posture shift in pass 1" },
  { week: 7, phase: "scan" as const, morning: "5 min Anapana + 35 min scan", evening: "Optional 15 min Anapana", focus: "Slower passes, smaller body parts", check: "Notice a free flow segment somewhere on the body" },
  { week: 8, phase: "scan" as const, morning: "5 min Anapana + 40 min scan", evening: "Optional 20 min Anapana", focus: "Equanimity with discomfort", check: "GATE: full head-to-feet pass with closed eyes, no shift, 4 of 7 sits" },
  { week: 9, phase: "adhitthana" as const, morning: "5 min Anapana + 45 min scan + 2 min metta", evening: "20 min scan", focus: "Saturday: one 60 min adhitthana", check: "One hour without moving hands or opening eyes" },
  { week: 10, phase: "adhitthana" as const, morning: "60 min full pattern", evening: "30 min scan", focus: "Saturday + Sunday: 60 min adhitthana each", check: "Two adhitthana sits in one weekend" },
  { week: 11, phase: "full" as const, morning: "60 min full pattern", evening: "45 min scan", focus: "Add Wednesday adhitthana", check: "Three adhitthana sits in the week" },
  { week: 12, phase: "full" as const, morning: "60 min full pattern", evening: "60 min full pattern", focus: "Two-hour daily, course-ready", check: "Apply for a residential 10-day course" },
];

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://vipassana.cool" },
          { name: "Guides", url: "https://vipassana.cool/t" },
          {
            name: "3-Month Beginner Program",
            url: PAGE_URL,
          },
        ]}
      />
      <ArticleSchema
        title="The 3-Month Vipassana Beginner Program: Daily Practice Gated by Sensitivity"
        description="A 12-week at-home Vipassana program for beginners. Three gated phases, twelve weeks, daily Anapana to body scan to adhitthana, with a real accountability layer."
        url={PAGE_URL}
        datePublished={PUBLISHED}
      />
      <FaqSchema faqs={faqs} />

      <ArticleHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/t" },
          { label: "3-Month Beginner Program" },
        ]}
        category="Daily Practice Program"
        title="The 3-Month Vipassana Beginner Program: Daily Practice Gated by Sensitivity"
        description="Twelve weeks. Three gated phases. You advance not on the calendar but on whether your sensitivity actually shows up. Built to mirror the way the 10-day course already gates students from Anapana to the body scan."
        datePublished={PUBLISHED}
      />

      <div className="mb-10 rounded-lg border border-accent/20 bg-accent/5 p-5">
        <p className="mb-1 text-sm font-medium text-accent">TL;DR</p>
        <p className="text-sm text-muted">
          A 12-week at-home program in three gated phases. <GradientText animate={false}>Phase 1 (weeks 1 to 4)</GradientText> is Anapana only, narrowing the attention zone the way the 10-day course narrows it. <GradientText animate={false}>Phase 2 (weeks 5 to 8)</GradientText> introduces the body scan once the Anapana gate is met. <GradientText animate={false}>Phase 3 (weeks 9 to 12)</GradientText> adds adhitthana, the no-move, no-open-eyes hour, and ramps daily duration to the standard two-hour pattern. Phase advancement is gated by sensation detection, not by the calendar. Daily accountability comes from a Practice Buddy match that pairs you on a ±60 minute UTC overlap with another meditator over Google Meet.
        </p>
      </div>

      <section className="mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
        <div className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          The program in numbers
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={12} />
            </div>
            <p className="mt-1 text-xs text-muted">weeks total</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={3} />
            </div>
            <p className="mt-1 text-xs text-muted">gated phases</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={120} />
              <span className="text-xl text-muted"> min</span>
            </div>
            <p className="mt-1 text-xs text-muted">daily by week 12</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={60} />
              <span className="text-xl text-muted"> min</span>
            </div>
            <p className="mt-1 text-xs text-muted">UTC match window</p>
          </div>
        </div>
      </section>

      <div className="mb-12">
        <ConceptReveal
          title="The part every beginner program gets backwards"
          subtitle="Calendars do not produce sensitivity. Sensitivity gates the calendar."
          captions={[
            "Most 90-day programs ramp duration on a fixed weekly schedule.",
            "The 10-day course does not work that way. It gates the body scan on a sensation threshold.",
            "If you cannot feel a defined sensation at the small zone, more body-scan instruction will not help.",
            "This program runs the same gate at home: hold each phase until the threshold is met.",
            "The result is a real progression instead of a long, demoralizing plateau.",
          ]}
        />
      </div>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Why a 90-day program at all
        </h2>
        <p className="mb-4 text-muted">
          Most people who search for a beginner Vipassana program end up at one of two destinations. One is the 10-day residential course, which is the right destination but not something you can do this weekend. The other is a 10-week online curriculum, which works for some people and feels too schedule-heavy for others. There is a missing middle, and the missing middle is a structured at-home daily practice you can run on your own, before or between courses, that ramps the way a real practice ramps.
        </p>
        <p className="mb-4 text-muted">
          Twelve weeks is enough time to build a daily habit, work through three real phases, and arrive at the cushion with the duration and sensitivity a residential 10-day expects. It is short enough that you can see the end from the start, and long enough that the changes are real.
        </p>
        <p className="text-muted">
          The thing this program does that other programs do not is borrow the gating logic of the residential course directly. Read{" "}
          <Link
            href="/t/anapana-and-vipassana"
            className="text-accent underline hover:text-foreground"
          >
            the 3.5-day zone-narrowing arc
          </Link>{" "}
          for the full mechanics. The short version: the course advances you when sensation appears, not when the bell rings. This program does the same thing on a 12-week scale.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          The three phases at a glance
        </h2>
        <p className="mb-6 text-muted">
          Each phase has a single technique focus, a daily duration band, and a gate to the next phase. You only advance when the gate is met.
        </p>
        <PhaseTrack phases={phases} />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Week-by-week, all 12 weeks
        </h2>
        <p className="mb-6 text-muted">
          The table below is the full plan. The end-of-week check is what tells you whether to advance, repeat, or drop back. If you fail a gate two weeks in a row, do not push, hold the phase and read the gate diagnosis below.
        </p>
        <WeekTable weeks={weeks} />
      </section>

      <section className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        <ChecklistCard
          title="The single sit, in five steps"
          items={[
            "30 to 60 sec of metta intention before you begin",
            "Anapana at the small zone, until the mind settles",
            "Body scan, head to feet, then feet to head",
            "Equanimity with whatever arises, including nothing",
            "1 to 2 min of metta to close",
          ]}
        />
        <ChecklistCard
          title="The weekly review, on Sunday"
          items={[
            "Count the sits actually completed this week",
            "Note the phase you are in and the gate you are tracking",
            "Read your end-of-week check from the table above",
            "Decide: advance, repeat the week, or drop back one week",
            "Confirm the same time and same spot for the week ahead",
          ]}
        />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          The Phase 1 to Phase 2 gate, in detail
        </h2>
        <p className="mb-6 text-muted">
          This is the most important transition in the program. If you cross it cleanly, the rest of the ramp works. If you cross it by force, the body scan in Phase 2 produces a confused, sweep-over-nothing feeling and you will quit.
        </p>
        <GateMeter
          title="Anapana to body scan"
          subtitle="Run for one week before deciding. Do not advance based on a single good sit."
          bullets={[
            {
              pass: "I notice a distinct sensation at the small zone in 25 of 30 sits this month",
              fail: "Sensation is intermittent or vague in more than 5 of 30 sits, hold the phase",
            },
            {
              pass: "The 30-min Anapana sit feels finite, not impossible",
              fail: "30 min still feels like a slog, repeat week 4 with same duration",
            },
            {
              pass: "I can keep awareness in the moustache strip for at least 10 consecutive min",
              fail: "Mind wanders out of the zone within 2 to 3 min, narrow earlier in the week",
            },
            {
              pass: "I have a same-time, same-spot routine that survives travel days",
              fail: "Practice still depends on motivation rather than structure, fix the time first",
            },
          ]}
        />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          The accountability layer, with the actual matching mechanic
        </h2>
        <p className="mb-4 text-muted">
          Three months of solo daily practice is hard. Three months of solo daily practice with no external structure is a coin flip. The piece that consistently keeps a daily sit alive past month 1 is sitting with another human at the same time, every day. Group sittings at a center do this if you can get to one weekly. For the other six days, the Practice Buddy system on this site exists.
        </p>
        <p className="mb-6 text-muted">
          The matching is not an algorithm pretending to be smart. It is a human review that filters on a single hard constraint, then ranks the rest. The constraint is the sit-time overlap, expressed in UTC, not in your local time. Here is the order in which a candidate match is decided.
        </p>
        <MatchFlow />
        <p className="mt-6 text-muted">
          The full mechanics are documented in{" "}
          <Link
            href="/practice-buddy/how-it-works"
            className="text-accent underline hover:text-foreground"
          >
            how Practice Buddy works
          </Link>
          . The reason the program references it here is that this is the only piece of infrastructure on the site that survives a 12-week ramp. Apps with streaks and notifications collapse on day 17 because the social tie is fake. A real human who logs into the same Google Meet link tomorrow morning is the actual difference.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          What the daily Google Meet sit looks like
        </h2>
        <p className="mb-4 text-muted">
          Once you are matched, the routine is the same every day. You open the same permanent Google Meet link at your sit time. You wait for your buddy to join. One of you starts the Goenka recording you both want to use, shares the screen and audio through Meet, and you both sit. The video feed is on, low quality, off to the side. It is closer to a group sitting than anything else you can run from a bedroom.
        </p>
        <div className="rounded-lg border border-accent/20 bg-accent/5 p-5">
          <p className="mb-2 text-sm font-semibold text-accent">
            The one nonobvious detail
          </p>
          <p className="text-sm text-muted">
            The match window is calculated in UTC, not in local time. If you sit at 6 AM Pacific and another meditator sits at 6 AM Eastern, those are not equivalent. They are 3 hours apart. The system filters in UTC so cross-timezone pairs work cleanly. After your first confirmed match, the system tags you as ready, and any later match skips the 3-day yes/no confirmation step entirely. You are matched directly. This is genuinely uncopyable infrastructure: most beginner programs publish a calendar and stop there.
          </p>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Pali terms you will hear during the program
        </h2>
        <p className="mb-5 text-muted">
          You will encounter these in any Goenka recording you use during the 12 weeks. Hover the marquee to pause it.
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
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          What this program is not
        </h2>
        <div className="space-y-3">
          {[
            {
              title: "It is not a substitute for the 10-day residential course",
              body: "The Vipassana technique is taught in person on Day 4 of a 10-day under an assistant teacher. No home program, including this one, replaces that transmission. Treat the 12 weeks as preparation for or maintenance between residential courses.",
            },
            {
              title: "It is not a streak app",
              body: "There is no count to protect, no notification to dismiss. The metric is whether you sat today, and the accountability comes from another human being on a Google Meet link, not a leaderboard.",
            },
            {
              title: "It is not a fixed weekly curriculum",
              body: "Some people will need 6 weeks for Phase 1. Some will need 3. The schedule is a suggestion, the gates are the contract. Hold the phase until the gate is met.",
            },
            {
              title: "It is not aimed at trauma processing",
              body: "Intensive sensation observation can surface stored material. If you have a trauma history, do this program at lower intensity, with a therapist in the loop, and read the safety guidance before scaling up.",
            },
            {
              title: "It is not the only path",
              body: "Calm, Insight Timer, Cambridge Insight, Vipassana at Home, the Vipassana.com 10-week course are all real options. Pick whichever matches how you actually learn. This program is for people who want to mirror the residential gating logic at home.",
            },
          ].map((item, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-5">
              <h3 className="mb-2 text-base font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          What week 13 looks like, after the program
        </h2>
        <p className="mb-4 text-muted">
          The 12-week ramp ends with you sitting two hours a day and able to hold a one-hour adhitthana on weekends. Week 13 is the same daily structure plus one of three options. Apply for a residential 10-day course at{" "}
          <a
            href="https://www.dhamma.org/en-US/courses/search"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline hover:text-foreground"
          >
            dhamma.org
          </a>{" "}
          since you are now genuinely ready. Or join a weekly group sitting at your nearest center to add the in-person accountability layer the home practice cannot fully replace. Or, if you sat the program for the practice itself rather than as preparation for a course, simply continue the week 12 schedule indefinitely with your Practice Buddy. The structure was the goal.
        </p>
        <p className="text-muted">
          For the longer view of what daily practice looks like in year 1 and year 2, read{" "}
          <Link
            href="/guide/daily-practice"
            className="text-accent underline hover:text-foreground"
          >
            the daily practice guide
          </Link>
          ,{" "}
          <Link
            href="/guide/why-20-minutes-beats-two-hours"
            className="text-accent underline hover:text-foreground"
          >
            why 20 minutes beats two hours
          </Link>
          , and{" "}
          <Link
            href="/guide/restarting-your-practice"
            className="text-accent underline hover:text-foreground"
          >
            restarting your practice
          </Link>{" "}
          for what to do when, inevitably, you fall off and come back.
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
        heading="Want the accountability layer for the 12 weeks"
        description="Free Practice Buddy matching pairs you with another meditator inside a 60-minute UTC overlap and you sit daily over Google Meet. The match is human-reviewed, the link is permanent, and there is no app to manage."
      />

      <div className="mt-12 rounded-xl border border-border bg-card p-6">
        <h2 className="mb-4 font-semibold text-foreground">Related</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/t/anapana-and-vipassana"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            The 3.5-day zone-narrowing arc
          </Link>
          <Link
            href="/guide/daily-practice"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Daily practice at home
          </Link>
          <Link
            href="/guide/why-20-minutes-beats-two-hours"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Why 20 minutes beats two hours
          </Link>
          <Link
            href="/guide/restarting-your-practice"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Restarting your practice
          </Link>
          <Link
            href="/guide/vipassana-for-beginners"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            For beginners
          </Link>
          <Link
            href="/practice-buddy/how-it-works"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Practice Buddy mechanics
          </Link>
        </div>
      </div>

      <PageComments pageId="t-vipassana-3-month-beginner-program" />
    </article>
  );
}
