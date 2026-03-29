"use client";

import { useState, useRef, useEffect } from "react";
import { WaitlistTable } from "@/components/waitlist-table";
import { WaitlistSignup } from "@/components/waitlist-signup";

type QuickSetup = { timezone: string; morningHour: string };
type SignupPrefill = { timezone?: string; morningTime?: string; frequency?: string };

export function PracticeBuddyClient() {
  const [matchRequest, setMatchRequest] = useState<{ id: string; name: string } | null>(null);
  const [prefill, setPrefill] = useState<SignupPrefill | null>(null);
  const [matchedCount, setMatchedCount] = useState<number | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/admin/waitlist?stats=true")
      .then((r) => r.json())
      .then((data) => {
        if (data.matchedCount != null) setMatchedCount(data.matchedCount);
        else if (data.entries) setMatchedCount(data.entries.filter((e: { status: string }) => e.status === "matched").length);
      })
      .catch(() => {});
  }, []);

  function handleRequestMatch(personId: string, personName: string) {
    setMatchRequest({ id: personId, name: personName });
  }

  function clearMatchRequest() {
    setMatchRequest(null);
  }

  function handleSetup(setup: QuickSetup) {
    const morningTime = setup.morningHour !== "" ? `${setup.morningHour.padStart(2, "0")}:00` : "";
    setPrefill({ timezone: setup.timezone, morningTime, frequency: "" });
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Practice Buddy
        </h1>
        <p className="mx-auto mb-6 max-w-2xl text-lg text-muted">
          Get matched with a fellow Vipassana meditator who shares your commitment,
          time zone, and practice goals. Meditate together over Google Meet every day.
        </p>
        {matchedCount !== null && matchedCount > 0 && (
          <p className="mb-8 text-2xl font-bold text-accent">
            {matchedCount} meditators matched so far
          </p>
        )}
        <a
          href="#waitlist-form"
          className="inline-block rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Get Matched
        </a>
      </section>

      {/* How It Works — animated flow */}
      <section className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-2 text-center">
            <FlowStep
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>}
              title="Sign up"
              subtitle="2 min form"
              delay={0}
            />
            <FlowArrow />
            <FlowStep
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
              title="Get matched"
              subtitle="By time & style"
              delay={1}
            />
            <FlowArrow />
            <FlowStep
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>}
              title="Meet daily"
              subtitle="Google Meet link"
              delay={2}
            />
            <FlowArrow />
            <FlowStep
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
              title="Stay consistent"
              subtitle="Same time, every day"
              delay={3}
            />
          </div>
          <p className="mt-6 text-center text-sm text-muted">
            You get a permanent Google Meet link. Join at your sit time, play a Goenka recording, meditate together. No scheduling, no app &mdash; just show up.
          </p>
        </div>
      </section>

      {/* Who's Waiting — right after flow */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="mb-8 text-2xl font-bold">Who&apos;s Waiting</h2>
          <WaitlistTable onRequestMatch={handleRequestMatch} onSetup={handleSetup} />
        </div>
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

      {/* Social proof one-liner */}
      <section className="border-t border-border bg-accent/5">
        <div className="mx-auto max-w-3xl px-6 py-5 text-center text-sm text-muted">
          {matchedCount !== null && matchedCount > 0 ? `${matchedCount} meditators matched` : "Meditators matched"} so far — from Paris to Delhi to San Diego.{" "}
          <a
            href="https://old.reddit.com/r/vipassana/comments/1roib8y/the_real_reason_most_of_us_lose_our_practice/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            See the conversation on Reddit →
          </a>
        </div>
      </section>

      {/* What People Are Saying */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-10">
          <h2 className="mb-5 text-lg font-semibold">What People Are Saying</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <Quote
              text="Thank you so much for the initiative, the connections and beautiful tool. It is a very helpful thing that you built here."
              attribution="Marine, Paris"
            />
            <Quote
              text="Having an accountability partner in meditation goes a long way in ensuring that you continue on this journey continuously."
              attribution="Vikas, Delhi"
            />
            <Quote
              text="What an amazing initiative! Thank you for doing this 🙏"
              attribution="u/salothedud on Reddit"
              href="https://old.reddit.com/r/vipassana/comments/1roib8y/the_real_reason_most_of_us_lose_our_practice/o9i937f/"
            />
            <Quote
              text="This is actually awesome, thank you very much for sharing!"
              attribution="u/fronku on Reddit"
              href="https://old.reddit.com/r/vipassana/comments/1roib8y/the_real_reason_most_of_us_lose_our_practice/o9gtvrj/"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="mb-8 text-2xl font-bold">How It Works</h2>
          <div className="space-y-8">
            <Step
              number="1"
              title="Tell us about your practice"
              description="Fill out a short form — your time zone, when you sit, session duration, and experience level. Takes about 2 minutes."
            />
            <Step
              number="2"
              title="Get matched"
              description="We manually review every signup and pair you with someone who sits at a compatible time. You'll get an email with your match and a shared Google Meet link."
            />
            <Step
              number="3"
              title="Meditate together daily"
              description="Open the same Meet link at your sit time every day. When your buddy joins, one of you plays a Goenka recording and shares their screen. Meditate together, chat after, and go about your day."
            />
            <Step
              number="4"
              title="Keep going"
              description="The link never changes — same time, same link, every day. If life changes, we'll find you a new buddy. Some pairs last months. Some become lifelong Dhamma friends."
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

      {/* Signup Form */}
      <section className="border-t border-border">
        <div ref={formRef} className="mx-auto max-w-3xl px-6 py-16">
          <WaitlistSignup location="bottom-cta" prefill={prefill ?? undefined} />
        </div>
      </section>

      {/* Match Request Modal */}
      {matchRequest && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
          onClick={(e) => { if (e.target === e.currentTarget) clearMatchRequest(); }}
        >
          <div className="relative mx-4 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-background p-6 shadow-2xl animate-[pop_0.3s_ease-out]">
            <button
              onClick={clearMatchRequest}
              className="absolute right-4 top-4 text-muted hover:text-foreground transition-colors text-xl"
            >
              ✕
            </button>
            <WaitlistSignup
              location="match-modal"
              requestedMatchId={matchRequest.id}
              requestedMatchName={matchRequest.name}
            />
          </div>
        </div>
      )}
    </>
  );
}

function Quote({ text, attribution, href }: { text: string; attribution: string; href?: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <p className="mb-4 text-sm leading-relaxed text-foreground">&ldquo;{text}&rdquo;</p>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline">
          — {attribution}
        </a>
      ) : (
        <p className="text-xs text-muted">— {attribution}</p>
      )}
    </div>
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

function FlowStep({
  icon,
  title,
  subtitle,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  delay: number;
}) {
  return (
    <div
      className="flex flex-col items-center gap-2 opacity-0 animate-[fadeSlideUp_0.5s_ease-out_forwards]"
      style={{ animationDelay: `${delay * 200}ms` }}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
        {icon}
      </div>
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-xs text-muted">{subtitle}</p>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="hidden sm:flex items-center justify-center text-accent/40">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}
