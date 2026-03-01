import type { Metadata } from "next";
import Link from "next/link";
import { PageComments } from "@/components/comments";
import { WaitlistSignup } from "@/components/waitlist-signup";

export const metadata: Metadata = {
  title: "Practice Buddy — Find an Accountability Partner for Daily Vipassana",
  description:
    "Get matched with a fellow Vipassana meditator for daily practice accountability. Free, tradition-respectful, no gamification — just one human supporting another.",
  openGraph: {
    title: "Practice Buddy — Vipassana Accountability Partners",
    description:
      "Get matched with a fellow Vipassana meditator for daily practice accountability. Free, tradition-respectful, no gamification.",
  },
};

export default function PracticeBuddyPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="mb-4 text-sm font-medium tracking-widest uppercase text-accent">
          Coming Soon
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Practice Buddy
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted">
          Get matched with a fellow Vipassana meditator who shares your commitment,
          time zone, and practice goals. Check in with each other. Stay on the path.
        </p>
        <a
          href="#waitlist-form"
          className="inline-block rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Join the Waitlist
        </a>
      </section>

      {/* The Problem */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="mb-6 text-2xl font-bold">The Problem Everyone Knows</h2>
          <div className="space-y-4 text-muted">
            <p>
              You leave a 10-day course transformed. You commit to sitting two hours a day.
              Then life happens — work, family, fatigue, doubt. Within weeks, the cushion
              gathers dust.
            </p>
            <p>
              This isn&apos;t a personal failure. It&apos;s a structural one. At the center, you had a
              schedule, a group, a shared commitment. At home, you have none of that.
              The technique is the same, but the support system vanishes.
            </p>
            <p>
              Research backs this up: meditation apps have a <strong>4.7% retention rate</strong> after
              30 days. Most people who start a daily practice lose it within a month.
            </p>
          </div>
        </div>
      </section>

      {/* The Research */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="mb-8 text-2xl font-bold">What the Research Says</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <StatCard number="95%" label="goal completion rate when you have a specific accountability appointment with someone" />
            <StatCard number="10%" label="goal completion rate when you just have the goal in your head" />
            <StatCard number="2.8x" label="more likely to maintain a new habit with structured accountability (meta-analysis of 42 studies)" />
            <StatCard number="62%" label="of well-being app benefits come through reduced loneliness, not the content itself" />
          </div>
          <p className="mt-8 text-muted">
            The evidence is clear: the single most effective thing you can do for your
            practice is commit to another person. Not an app, not a streak counter, not a
            notification — a real human who expects to hear from you.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="mb-8 text-2xl font-bold">How It Will Work</h2>
          <div className="space-y-8">
            <Step
              number="1"
              title="Tell us about your practice"
              description="How many courses you've completed, your time zone, your current practice goals, what you struggle with, and how you prefer to communicate."
            />
            <Step
              number="2"
              title="Get matched"
              description="We pair you with another old student who shares your commitment level and schedule. Not randomly — based on compatibility."
            />
            <Step
              number="3"
              title="Check in regularly"
              description="A simple daily or weekly check-in with your buddy. Did you sit today? How was it? What's hard right now? No tracking app — just honest conversation."
            />
            <Step
              number="4"
              title="Rotate or stay"
              description="After a month, you can keep your buddy or get a new match. Some pairs last months. Some become lifelong Dhamma friends."
            />
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="mb-8 text-2xl font-bold">What Makes This Different</h2>
          <div className="space-y-6">
            <Principle
              title="Connection is the product"
              description="We don't offer guided meditations, timers, or content. Those already exist. We offer one thing: a matched human who cares whether you sat today."
            />
            <Principle
              title="No gamification"
              description="No streaks, no badges, no leaderboards. The Vipassana tradition teaches non-attachment — we're not going to undermine that with dopamine loops."
            />
            <Principle
              title="Vipassana-native"
              description="Built by and for Vipassana meditators. We use the language of the tradition, respect the teacher's guidance, and require course completion to participate."
            />
            <Principle
              title="Free, in the spirit of Dana"
              description="Just as the courses are offered freely, Practice Buddy will be free. We may accept donations to cover operating costs, but the matching service itself will always be free."
            />
            <Principle
              title="For old students only"
              description="You must have completed at least one 10-day Vipassana course (as taught by S.N. Goenka). This ensures shared context and a genuine practice foundation."
            />
          </div>
        </div>
      </section>

      {/* The Gap */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="mb-6 text-2xl font-bold">Why This Doesn&apos;t Exist Yet</h2>
          <div className="space-y-4 text-muted">
            <p>
              The Vipassana tradition is intentionally low-tech. Centers run on volunteers
              and donations. The official app has course schedules and recordings — but no
              community features, no accountability tools, no way to connect meditators.
            </p>
            <p>
              Virtual group sittings exist at some centers, but they&apos;re at fixed times, passive
              (you join a Zoom room), and don&apos;t create personalized accountability. Local sit
              groups require geographic proximity.
            </p>
            <p>
              Meanwhile, the broader meditation app market (Insight Timer, Waking Up, Balance)
              treats community as a bolt-on feature, not the core mechanism. And none of them
              understand the specific needs of Vipassana practitioners — the two-hour daily
              commitment, the body scanning technique, the retreat-to-home transition.
            </p>
            <p>
              There&apos;s a gap between what the tradition provides and what practitioners need.
              Practice Buddy is designed to fill it — respectfully, simply, and freely.
            </p>
          </div>
        </div>
      </section>

      {/* Matching Criteria */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="mb-8 text-2xl font-bold">How We Match</h2>
          <p className="mb-8 text-muted">
            Research on peer support platforms shows that matching on shared goals and interests
            produces far better outcomes than matching on problems or diagnoses. Here&apos;s what
            we&apos;ll consider:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <MatchCriteria title="Experience Level" description="Number of courses completed — so you're paired with someone at a similar stage" />
            <MatchCriteria title="Time Zone" description="Within a few hours of each other, so check-ins happen at reasonable times" />
            <MatchCriteria title="Practice Goals" description="Daily consistency, longer sits, preparing for a longer course, deepening equanimity" />
            <MatchCriteria title="Communication Style" description="Weekly video call, daily text check-in, or async voice messages — matched to your preference" />
            <MatchCriteria title="Current Struggles" description="Consistency, restlessness, doubt, integrating practice into daily life" />
            <MatchCriteria title="Language" description="So you can discuss subtle meditation experiences in a language you're comfortable with" />
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <WaitlistSignup location="bottom-cta" />
        </div>
      </section>

      <PageComments pageId="practice-buddy" />
    </>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="mb-2 text-3xl font-bold text-accent">{number}</div>
      <p className="text-sm text-muted">{label}</p>
    </div>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/30 text-sm font-bold text-accent">
        {number}
      </div>
      <div>
        <h3 className="mb-1 font-semibold">{title}</h3>
        <p className="text-sm text-muted">{description}</p>
      </div>
    </div>
  );
}

function Principle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border-l-2 border-accent/30 pl-4">
      <h3 className="mb-1 font-semibold">{title}</h3>
      <p className="text-sm text-muted">{description}</p>
    </div>
  );
}

function MatchCriteria({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-border p-4">
      <h3 className="mb-1 text-sm font-semibold">{title}</h3>
      <p className="text-xs text-muted">{description}</p>
    </div>
  );
}
