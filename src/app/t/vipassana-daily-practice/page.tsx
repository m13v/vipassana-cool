import type { Metadata } from "next";
import Link from "next/link";
import { PageComments } from "@/components/comments";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { ArticleSchema } from "@/components/article-schema";
import { ArticleHeader } from "@/components/article-header";
import { FaqSchema } from "@/components/faq-schema";
import { PracticeBuddyCta } from "@/components/practice-buddy-cta";
import { DayCounter } from "@/components/day-counter";
import {
  NumberTicker,
  GradientWord,
  AnchorFactCard,
  RepCurve,
  GapWidening,
  InvalidReps,
  RepEconomics,
  ScienceGrid,
} from "./rewire-client";

const PAGE_URL = "https://vipassana.cool/t/vipassana-daily-practice";
const PUBLISHED = "2026-04-18";

export const metadata: Metadata = {
  title:
    "Vipassana Daily Practice Rewiring: What Actually Changes, Rep by Rep",
  description:
    "Vipassana rewiring is a rep-count phenomenon, not a course-day phenomenon. What the gap between stimulus and response looks like at 30, 90, 365, and 900 consecutive morning sits, anchored to a live day counter rather than claims.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Vipassana Daily Practice Rewiring: What Actually Changes, Rep by Rep",
    description:
      "What daily Vipassana actually rewires, on what timeline, and how to tell from the outside that the practice is working.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Vipassana Daily Practice Rewiring: What Actually Changes, Rep by Rep",
    description:
      "Rewiring is a rep count. Here is the shape of the curve at 30, 90, 365, and 900+ sits.",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question: "Does daily Vipassana practice actually rewire the brain?",
    answer:
      "Yes, with two caveats. The brain changes measurably with sustained meditation practice: reduced amygdala reactivity to negative stimuli, lowered default-mode-network activity linked to self-referential thinking, and in long-term practitioners elevated occipital gamma power during sitting. All three effects correlate more strongly with hours of recent daily practice than with cumulative lifetime hours. The caveats: the effect is cumulative and gradual, not dramatic after one course, and the claims that survive peer review are modest compared to popular neuroscience framing. What rewiring looks like from the inside is a slowly widening gap between an urge and the reaction that used to follow it, reported consistently by practitioners around the 90-day mark of daily sitting.",
  },
  {
    question: "How many days of daily practice before you notice the rewiring?",
    answer:
      "Most practitioners report a small but observable change around day 90: a quarter-second pause appears between an urge and the action that usually followed it. Before day 30, almost nobody notices anything, which is normal. The nervous system is still reinforcing the habit of sitting itself. Between day 30 and day 90 the reports shift. Around day 180, the morning sit itself becomes harder to skip than to do. Around day 365, people around you notice before you do: the baseline reactivity to small frustrations has dropped. Past day 900, the question of whether the practice is working stops being asked; it is replaced by more specific questions the practitioner takes to the next course.",
  },
  {
    question: "Why is 20 minutes daily better than 90 minutes twice a week for rewiring?",
    answer:
      "Because the nervous system learns from rep frequency, not from session length. Daily repetition gives the brain many more installations per month of whatever habit is being trained, compared with the same minute-total packed into fewer sessions. This is not a preference; it is how habit encoding works in the basal ganglia. The depth of any single sit matters much less than the count of consecutive mornings.",
  },
  {
    question: "What does the stimulus-response gap widening feel like in real life?",
    answer:
      "It is almost always subtractive, and boring. A driver cuts you off; you notice a small heat rise and then, in what used to be one continuous motion, notice that there is now space between the heat and your reaction. You still feel the irritation. You just observe it crest and pass instead of acting on it. A trigger that would have flattened you a year ago arrives, stays for a while, and leaves. A partner says something that used to start a fight; you register the sting, sit with it for a breath, and respond rather than react. Nobody writes memoirs about this experience because it is not dramatic. It is the actual shape of rewiring in daily life.",
  },
  {
    question: "What sessions do not count as a rewiring rep?",
    answer:
      "Four common ones. The guilt sit: you skipped, then sat 45 minutes berating yourself. The podcast sit: guided meditation with an external voice directing you, which is a different practice category than self-directed Vipassana. The bed sit: comfortable enough that most of the session is a nap you are pretending is a sit. The ten-minute apology: a tiny dose that, when it becomes the normal rather than a floor on hard days, is too short to carry into daily reactivity. A rep is a completed daily sit of at least 20 minutes, upright, self-directed, no media running. What happens inside the sit is between the meditator and the training they received at the course.",
  },
  {
    question: "How is the 881+ day counter on vipassana.cool calculated?",
    answer:
      "It is a twelve-line React client component in src/components/day-counter.tsx. A constant BASE_COUNT is set to 881 and REFERENCE_DATE to 2026-02-07. When the component renders, it takes the current date, subtracts the reference date, converts the millisecond delta to whole days, and adds the base count. There is no analytics, no server call, no database. The number is deterministic: anyone opening the source file can verify that on 2026-04-18 the counter displays 951, on 2027-01-01 it will display 1209, and so on. The counter is one of the few self-anchoring claims on a meditation site: the math is in the repo.",
  },
  {
    question: "What stops the rewiring and forces a reset?",
    answer:
      "Four patterns. Substance use that depresses memory consolidation (cannabis in particular, because the rewiring depends on consolidating each morning's sit during the following night's sleep). Extended travel without a protected morning window, where the sit drops from daily to a few times a week and the rep curve flattens. Outcome-chasing, where the practitioner starts demanding that sits feel a particular way and loses the point of just doing the rep. Unresolved physical pain that makes sitting dreaded rather than neutral. None of these end the practice; they pause the rewiring. A 10-day course generally resets the curve faster than white-knuckling it alone.",
  },
  {
    question: "Can the rewiring be undone?",
    answer:
      "Partially. The infrastructure you build does not disappear after a month off the cushion, the way muscle does not fully atrophy after a month out of the gym. But reactivity returns to its old baseline faster than most practitioners expect. The sensation-level awareness dulls first, then the pause between stimulus and response narrows, then the default responses return. Long-term practitioners who have gone through this describe it as restoring rather than rebuilding: one or two weeks of daily sitting brings back most of what six weeks off took away. The long rep count is still there underneath; it just needs to be woken up.",
  },
];

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://vipassana.cool" },
          { name: "Guides", url: "https://vipassana.cool/t" },
          {
            name: "Vipassana Daily Practice Rewiring",
            url: PAGE_URL,
          },
        ]}
      />
      <ArticleSchema
        title="Vipassana Daily Practice Rewiring: What Actually Changes, Rep by Rep"
        description="A rep-count view of what daily Vipassana actually rewires, anchored to a live day counter, with honest notes on what the neuroscience has and has not proven."
        url={PAGE_URL}
        datePublished={PUBLISHED}
      />
      <FaqSchema faqs={faqs} />

      <ArticleHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/t" },
          { label: "Vipassana Daily Practice Rewiring" },
        ]}
        category="Daily Practice"
        title="Vipassana Daily Practice Rewiring: What Actually Changes, Rep by Rep"
        description="The course plants the seed. The rewiring is a rep-count phenomenon that plays out over months and years of consecutive morning sits. Here is the shape of the curve, what the gap between stimulus and response actually feels like at each stage, and why a 20-minute daily sit outperforms a 90-minute twice-weekly one."
        datePublished={PUBLISHED}
      />

      <div className="mb-8 rounded-lg border border-accent/20 bg-accent/5 p-4">
        <p className="mb-1 text-sm font-medium text-accent">TL;DR</p>
        <p className="text-sm text-muted">
          Vipassana rewiring is a cumulative effect of consecutive morning reps,
          not a one-time course effect. The visible output is a slowly widening
          gap between an urge and the action that usually followed it. 30 days
          of daily practice installs almost nothing noticeable. 90 days opens
          the gap for the first time. 365 days is when people around you notice
          the change before you do. 900+ days is where the author is now, and
          the number he is sitting on is a live counter on this site, computed
          from twelve lines of code you can verify yourself. Frequency beats
          duration: a daily sit outperforms the same minute-total packed into a
          few long sits per week.
        </p>
      </div>

      <div className="mb-12">
        <AnchorFactCard />
      </div>

      <div className="mb-12 rounded-lg border border-border bg-card p-6">
        <p className="mb-3 text-sm font-semibold text-foreground">
          Table of contents
        </p>
        <ol className="list-decimal space-y-1.5 pl-6 text-sm text-muted">
          <li>
            <a href="#mean" className="hover:text-accent">
              What &quot;rewiring&quot; actually means in this practice
            </a>
          </li>
          <li>
            <a href="#rep" className="hover:text-accent">
              A sit is a rep, not a spiritual experience
            </a>
          </li>
          <li>
            <a href="#curve" className="hover:text-accent">
              The rewiring curve: 30 / 90 / 365 / 900+ days
            </a>
          </li>
          <li>
            <a href="#gap" className="hover:text-accent">
              The only visible output: stimulus-response gap
            </a>
          </li>
          <li>
            <a href="#economics" className="hover:text-accent">
              Why 20 minutes daily beats 90 minutes twice weekly
            </a>
          </li>
          <li>
            <a href="#invalid" className="hover:text-accent">
              Four sessions that do not count as a rep
            </a>
          </li>
          <li>
            <a href="#science" className="hover:text-accent">
              What the neuroscience has, and has not, proven
            </a>
          </li>
          <li>
            <a href="#pauses" className="hover:text-accent">
              What pauses the rewiring, and how to restart it
            </a>
          </li>
          <li>
            <a href="#own" className="hover:text-accent">
              How to count your own reps honestly
            </a>
          </li>
        </ol>
      </div>

      <div className="space-y-12 text-muted leading-relaxed">
        <section id="mean">
          <h2 className="mb-3 text-2xl font-bold text-foreground">
            1. What <GradientWord>rewiring</GradientWord> actually means in this
            practice
          </h2>
          <p className="mb-4">
            The word &quot;rewiring&quot; gets thrown around with enough
            casualness on meditation sites that it has started to mean nothing.
            Before building anything on top of it, a concrete definition is
            useful.
          </p>
          <p className="mb-4">
            Vipassana as Goenka teaches it is not trying to quiet the mind or
            produce any particular state. It is training one very specific
            habit: when an unpleasant sensation arises in the body, observe it
            without reacting to it. Sit. Watch. Do not move the hand toward the
            itch. Do not tense the shoulders against the ache. Do not narrate.
            Just observe the raw physical signal until it passes on its own.
          </p>
          <p className="mb-4">
            Repeat this thousands of times and something happens at the level
            of default response. Not because the meditator is enlightened, and
            not because their brain has been replaced. Because the nervous
            system, which learns the response it repeats, has been handed a new
            repeated response: observe, do not react.
          </p>
          <p>
            That is the entire mechanism. Everything else that is claimed for
            Vipassana (reduced anxiety, less rumination, equanimity around
            pain, loss, and craving) is a downstream effect of that one
            rewiring: the default relationship with an unpleasant sensation has
            shifted from react to observe. If there is a useful word for this
            it is conditioning, not awakening. Reps install the new default.
          </p>
        </section>

        <section id="rep">
          <h2 className="mb-3 text-2xl font-bold text-foreground">
            2. A sit is a rep, not a spiritual experience
          </h2>
          <p className="mb-4">
            The biggest single mental shift that saves a daily practice is
            demoting the sit from spiritual event to gym rep.
          </p>
          <p className="mb-4">
            In the gym, nobody expects a single squat session to produce a
            different body. Nobody feels cheated when their sixth squat session
            this month felt ordinary. The body is getting trained by volume at
            moderate intensity, not by a single perfect rep. The trainee who
            chases the perfect squat session abandons the practice in a month.
            The one who grinds out 30 workouts of 80% quality gets the results.
          </p>
          <p className="mb-4">
            Vipassana works the same way. The most common reason meditators
            stop practicing after a course is that their home sits stop feeling
            like the sits at the center. They do not. They cannot. At the
            center you were sitting 10+ hours a day in a silent, enforced
            environment. At home you are sitting 30 to 60 minutes in the noise
            of daily life. The depth is lower by design.
          </p>
          <p>
            The depth was never the point. The point is the rep. If you sat
            upright, ran the body scan, and held equanimity as the aim for
            thirty minutes, you did the rep, regardless of whether the session
            felt deep or shallow, focused or scattered. Most of your reps will
            be mediocre. All of them count.
          </p>
        </section>

        <section id="curve">
          <h2 className="mb-3 text-2xl font-bold text-foreground">
            3. The rewiring curve: 30 / 90 / 365 / 900+ days
          </h2>
          <p className="mb-6">
            Most guides describe daily practice in static terms: &quot;sit every
            day, the benefits compound.&quot; That is true and almost useless.
            A practitioner in their second week does not need to be told that
            there are benefits at year three. They need to know what to expect
            at month one, and month three, and month six, so they can calibrate
            whether the thing is working.
          </p>
          <p className="mb-6">
            The rough shape of the curve, consistent across long-term
            practitioners and reflected in the author&apos;s own rep count:
          </p>
          <RepCurve />
          <p className="mt-6">
            The curve is not linear. There are long plateaus, particularly
            between days 90 and 180, where nothing seems to be changing on the
            cushion. The rewiring is still happening. It is installing in the
            gap between trigger and response during the other 23 and a half
            hours of the day, not during the sit.
          </p>
        </section>

        <section id="gap">
          <h2 className="mb-3 text-2xl font-bold text-foreground">
            4. The only visible output: a slowly widening stimulus-response gap
          </h2>
          <p className="mb-4">
            Every claim Vipassana makes at the level of personality and
            behavior cashes out to one observable thing. The gap between a
            stimulus (trigger, urge, craving, insult, pain) and your response
            to it widens.
          </p>
          <p className="mb-6">
            Before the practice, stimulus and response are nearly fused. A
            thing happens, you react, and there is no experience in between.
            After enough reps, there is a space. Small at first. The space is
            where choice lives.
          </p>
          <GapWidening />
          <p className="mt-6">
            This is the only part of rewiring you can actually verify from the
            outside. Everything else (the neuroscience, the phenomenology, the
            subjective clarity) is reported. The gap is behavior. You can watch
            it in a practitioner. You can watch it, with more difficulty, in
            yourself. When the gap widens, the downstream claims (less
            anxiety, more equanimity, softer reactivity) follow automatically.
            When it does not widen, none of them arrive no matter how many
            discourses you have listened to.
          </p>
        </section>

        <section id="economics">
          <h2 className="mb-3 text-2xl font-bold text-foreground">
            5. Why 20 minutes daily beats 90 minutes twice weekly
          </h2>
          <p className="mb-4">
            The most common structural mistake in home practice is optimizing
            for session length instead of session frequency. It feels virtuous
            to sit for 90 minutes; it feels inadequate to sit for 20. The
            intuition is backwards.
          </p>
          <p className="mb-6">
            Rewiring is a count-of-repetitions problem, not a total-minutes
            problem. Every morning that the nervous system encodes the same
            lesson (unpleasant sensation observed without acting) is a
            deposit. A longer sit is a longer deposit on that morning, but the
            frequency of mornings is doing the arithmetic.
          </p>
          <RepEconomics />
          <p className="mt-6">
            The path with fewer total minutes rewires faster because it
            deposits more frequent installations of the same lesson. The brain
            consolidates the lesson in sleep between sits, not during sits. A
            gap of two or three days without a sit is a gap in the
            consolidation chain. Shorter, more frequent, almost always wins.
          </p>
          <p>
            This is also why{" "}
            <Link
              href="/guide/why-20-minutes-beats-two-hours"
              className="text-accent underline hover:text-foreground"
            >
              the recommended ideal of two hours per day
            </Link>{" "}
            hurts more practitioners than it helps. The ideal is the ideal. The
            realistic daily floor is much lower, and a floor you actually hit
            for a year outperforms an ideal you hit for a month and abandon.
          </p>
        </section>

        <section id="invalid">
          <h2 className="mb-3 text-2xl font-bold text-foreground">
            6. Four sessions that do not count as a rep
          </h2>
          <p className="mb-6">
            Not every time you put yourself on a cushion is a rep. A rep is
            upright, self-directed, attention on sensation, at a dose above
            roughly twenty minutes. Four common sessions fail one or more of
            those conditions and do not install anything useful.
          </p>
          <InvalidReps />
          <p className="mt-6">
            The point is not to be harsh. Some of these are still valuable as
            emotional hygiene. They are just not reps of Vipassana. Knowing
            which of your sits count as reps and which do not is the
            difference between a honest rep count and an inflated one.
          </p>
        </section>

        <section id="science">
          <h2 className="mb-3 text-2xl font-bold text-foreground">
            7. What the neuroscience has, and has not, proven
          </h2>
          <p className="mb-6">
            Popular meditation content overclaims what neuroscience has shown.
            The actual peer-reviewed findings are narrower than the blog
            summaries, and more interesting. Briefly:
          </p>
          <ScienceGrid />
          <p className="mt-6">
            The most important and least-discussed finding: the neural effects
            of meditation correlate more strongly with recent daily practice
            hours than with lifetime cumulative hours. A practitioner with 500
            lifetime hours and a current daily habit shows stronger effects
            than one with 2,000 lifetime hours and a two-year gap. The rewiring
            is not a thing you bank and keep; it is a thing you maintain.
            That is what makes the daily rep count (not the retreat count) the
            load-bearing variable.
          </p>
        </section>

        <section id="pauses">
          <h2 className="mb-3 text-2xl font-bold text-foreground">
            8. What pauses the rewiring, and how to restart it
          </h2>
          <p className="mb-4">
            The rewiring pauses under four conditions, all of them common and
            all of them survivable.
          </p>
          <ul className="mb-6 list-disc space-y-2 pl-6">
            <li>
              <strong className="text-foreground">
                Substance use that disrupts consolidation.
              </strong>{" "}
              Cannabis in particular degrades the memory consolidation that
              happens in sleep, which is where the morning rep gets encoded.
              You can still sit; the encoding is thinner. Regular alcohol
              across multiple nights per week has a milder version of the same
              effect.
            </li>
            <li>
              <strong className="text-foreground">
                Travel without a protected morning window.
              </strong>{" "}
              Two weeks abroad where the sit drops from daily to three days a
              week is enough to visibly flatten the gap. The sits you do still
              count. The missed days stop the rep count from advancing.
            </li>
            <li>
              <strong className="text-foreground">Outcome chasing.</strong> At
              some point, usually around the six-month mark, the practitioner
              starts wanting the sit to feel a particular way, and subtly
              grades each session on whether it felt profound. The grading
              itself is craving in disguise. It hollows the reps.
            </li>
            <li>
              <strong className="text-foreground">Unresolved physical pain.</strong>{" "}
              A chronic back or knee issue that makes sitting dreaded rather
              than neutral will slowly erode the habit, not through lack of
              will but through a rational body asking why it is being put in
              pain every morning. Posture changes (a bench, a chair, a cushion
              upgrade) solve this more often than willpower does.
            </li>
          </ul>
          <p className="mb-4">
            Restarting is simpler than most people think. A ten-day course is
            the most reliable reset; one course resets deeper than forty
            solitary sits. Between courses, a seven-day stretch of short
            daily sits (15 to 20 minutes every morning) will usually bring the
            gap back within two weeks. The long rep count is still there
            underneath.
          </p>
          <p>
            For the specific mechanics of coming back after a break, the{" "}
            <Link
              href="/guide/restarting-your-practice"
              className="text-accent underline hover:text-foreground"
            >
              restarting your practice
            </Link>{" "}
            guide is more tactical. For the habit-rewiring side of daily
            practice, the sister piece on{" "}
            <Link
              href="/t/after-vipassana-daily-practice-rewire-habits"
              className="text-accent underline hover:text-foreground"
            >
              rewiring compulsive habits after a course
            </Link>{" "}
            covers the compulsion-specific version of this same curve.
          </p>
        </section>

        <section id="own">
          <h2 className="mb-3 text-2xl font-bold text-foreground">
            9. How to count your own reps honestly
          </h2>
          <p className="mb-4">
            A rep count is only useful if it is honest. The practitioner who
            quietly counts the podcast sit and the ten-minute apology ends up
            with an inflated number that does not match what the nervous
            system actually received. A small ritual around honest rep
            counting removes the temptation.
          </p>
          <ul className="mb-6 list-disc space-y-2 pl-6">
            <li>
              <strong className="text-foreground">
                A rep is upright, self-directed, 20+ minutes, on sensation.
              </strong>{" "}
              Four conditions. All four, or it is a different session category,
              not a Vipassana rep.
            </li>
            <li>
              <strong className="text-foreground">
                Track it in the simplest place possible.
              </strong>{" "}
              A paper wall calendar with an X on each day works better than an
              app. The goal is to see the streak, not to accumulate data.
            </li>
            <li>
              <strong className="text-foreground">
                Keep two numbers: streak and total.
              </strong>{" "}
              Streak tells you about the current habit. Total tells you about
              the rewiring. Both matter. Both can be reset without losing the
              underlying conditioning.
            </li>
            <li>
              <strong className="text-foreground">
                Do not read the counter on a missed day.
              </strong>{" "}
              The point of the number is to encourage sitting tomorrow, not to
              punish missing today. Checking the number while not sitting is
              the opposite of what it is for.
            </li>
          </ul>
          <p>
            The live counter at the top of this page (
            <code className="rounded bg-accent/10 px-1.5 py-0.5 text-[13px] text-foreground">
              <DayCounter />
            </code>{" "}
            as of your reading) is the author&apos;s running total. It is the
            single most important number he tracks across every project he
            runs, and the one that predicts almost everything else about his
            ability to work, relate, and decide. A rep count is not a score.
            It is a load-bearing variable.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-bold text-foreground">
            A last note on what this is, and what it is not
          </h2>
          <p className="mb-4">
            None of this is a substitute for sitting a course. The
            rep-by-rep frame is a way to understand what is already happening
            in a daily practice, not a shortcut around the ten-day commitment.
            The course is where you learn the technique clearly enough that
            the reps actually install something specific. Without the course,
            the reps encode something vaguer.
          </p>
          <p>
            If you have not sat a course yet, the honest answer is that
            rewiring starts there. If you have, and the home practice has
            drifted, the honest answer is that the rep count, not the
            motivation, is the thing to rebuild.{" "}
            <NumberTicker value={20} /> minutes tomorrow morning, upright,
            self-directed, on sensation, counts as one.
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
        heading="One other person changes the rep count math."
        description="A daily practice partner, sitting silently on a Google Meet call every morning, is the single biggest lever on a consistent rep count. Free, tradition-respectful, and built specifically for daily sits rather than discussion."
      />

      <div className="mt-12 rounded-xl border border-border bg-card p-6">
        <h2 className="mb-4 font-semibold text-foreground">Related guides</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guide/daily-practice"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Daily Practice at Home
          </Link>
          <Link
            href="/t/after-vipassana-daily-practice-rewire-habits"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            After Vipassana: Rewiring Habits
          </Link>
          <Link
            href="/guide/why-20-minutes-beats-two-hours"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Why 20 Minutes Beats Two Hours
          </Link>
          <Link
            href="/guide/restarting-your-practice"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Restarting Your Practice
          </Link>
          <Link
            href="/guide/scientific-evidence"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Scientific Evidence
          </Link>
          <Link
            href="/guide/recognizing-progress"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Recognizing Progress
          </Link>
        </div>
      </div>

      <PageComments pageId="t-vipassana-daily-practice" />
    </article>
  );
}
