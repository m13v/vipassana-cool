"use client";

import { useEffect, useRef, useState } from "react";
import { DayCounter } from "@/components/day-counter";

export function NumberTicker({
  value,
  suffix = "",
  prefix = "",
  duration = 1400,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplay(Math.round(value * eased));
            if (t < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export function GradientWord({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
      {children}
    </span>
  );
}

export function AnchorFactCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-card to-card p-8 shadow-sm md:p-10">
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-accent-light/10 blur-3xl" />
      <div className="relative">
        <div className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-accent" />
          Live rep counter
        </div>
        <div className="mb-3 flex items-baseline gap-3">
          <span className="text-5xl font-bold tracking-tight text-foreground md:text-6xl tabular-nums">
            <DayCounter />
          </span>
          <span className="text-sm font-medium uppercase tracking-widest text-muted">
            consecutive morning sits
          </span>
        </div>
        <p className="max-w-2xl text-base text-muted">
          This number is not a boast. It is the author&apos;s own rep count, computed in
          twelve lines of React every time this page loads. You can read the source at{" "}
          <code className="rounded bg-accent/10 px-1.5 py-0.5 text-[13px] text-foreground">
            src/components/day-counter.tsx
          </code>
          . It started at 881 on 2026-02-07 and ticks up by one each calendar day.
          Everything below is a description of what that counter felt like on its way
          here.
        </p>
      </div>
    </div>
  );
}

type RepMilestone = {
  days: number;
  label: string;
  headline: string;
  detail: string;
};

const milestones: RepMilestone[] = [
  {
    days: 10,
    label: "10 days",
    headline: "The course ends. The habit hasn't started yet.",
    detail:
      "You just came off an environment that did the work for you. The cushion was set, the schedule was enforced, the phone was locked up. At home, the first ten days are almost entirely about the logistics of sitting, not the sitting itself.",
  },
  {
    days: 30,
    label: "30 days",
    headline: "Getting the body to the cushion, not much else.",
    detail:
      "One month in, the nervous system is still mostly defending the old routine. You sit, the mind races, you come out thinking the practice is not working. It is. What's installing is the gesture of showing up, not the depth of the sit.",
  },
  {
    days: 90,
    label: "90 days",
    headline: "A small gap opens between urge and action.",
    detail:
      "Around day 90, something different: an urge arrives, you notice it, and there is a quarter second of choice. Sometimes the old pattern still wins. The point is that there is now a gap. The gap is the only observable thing rewiring looks like.",
  },
  {
    days: 180,
    label: "180 days",
    headline: "The morning sit is harder to skip than to do.",
    detail:
      "Six months of reps flip the effort gradient. Skipping becomes the effortful act (you have to override the habit). Sitting becomes the path of least resistance. Most people who make it here do not fall off.",
  },
  {
    days: 365,
    label: "365 days",
    headline: "The baseline reactivity is measurably lower.",
    detail:
      "Friends notice before you do. Things that used to spike you now register, crest, and pass. You still have your personality. You have less of the automatic heat around it. This is the payoff the first 300 days were investing in.",
  },
  {
    days: 900,
    label: "900+ days",
    headline: "Rewiring is no longer the question.",
    detail:
      "By this count, the practice has stopped being a change you are making and started being a shape you are. Courses still reset depth. Daily sits still matter. But the old question of \"is this working\" has quietly retired, replaced by much more specific questions about specific sensations.",
  },
];

export function RepCurve() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let i = 0;
          const step = () => {
            setActive(i);
            i += 1;
            if (i <= milestones.length) {
              timer = window.setTimeout(step, 340);
            }
          };
          let timer = window.setTimeout(step, 200);
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-border bg-card p-6 md:p-8"
    >
      <div className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        The rewiring curve by rep count
      </div>
      <div className="space-y-3">
        {milestones.map((m, i) => (
          <div
            key={m.days}
            className={`rounded-xl border border-accent/20 bg-accent/5 p-5 transition-all duration-700 ${
              active > i
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0"
            }`}
          >
            <div className="mb-2 flex items-center gap-3">
              <span className="rounded-full border border-accent/40 bg-card px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-accent tabular-nums">
                {m.label}
              </span>
              <span className="text-sm font-semibold text-foreground">
                {m.headline}
              </span>
            </div>
            <p className="text-sm text-muted">{m.detail}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-muted">
        Not promises. Rough milestones reported by long-term practitioners and
        reflected in the author&apos;s own rep count. Some move faster, some slower,
        some plateau. The shape of the curve is consistent.
      </p>
    </div>
  );
}

export function GapWidening() {
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let i = 0;
          const tick = () => {
            setStep(i);
            i = (i + 1) % 4;
            timer = window.setTimeout(tick, 2200);
          };
          let timer = window.setTimeout(tick, 400);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const rows = [
    { reps: "Day 0", gapPct: 2, label: "Urge → action is automatic." },
    { reps: "Day 30", gapPct: 8, label: "You notice afterward that you reacted." },
    { reps: "Day 90", gapPct: 22, label: "You catch the urge mid-rise, sometimes." },
    { reps: "Day 365", gapPct: 55, label: "There is a long, observable pause." },
  ];

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-border bg-card p-6 md:p-8"
    >
      <div className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        Stimulus → response, widening over reps
      </div>
      <div className="space-y-5">
        {rows.map((r, i) => {
          const show = step >= i;
          return (
            <div key={r.reps} className="space-y-1.5">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-foreground tabular-nums">
                  {r.reps}
                </span>
                <span className="text-muted">{r.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-accent/20 px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
                  stim
                </span>
                <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-accent/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent via-accent-light to-accent transition-all duration-[1200ms] ease-out"
                    style={{ width: show ? `${r.gapPct}%` : "0%" }}
                  />
                </div>
                <span className="rounded-md bg-accent/20 px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
                  resp
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-6 text-xs text-muted">
        The bar is the gap. The whole point of daily practice is to widen it.
        Nothing else in the rewiring story is directly observable; this is.
      </p>
    </div>
  );
}

const invalidReps = [
  {
    title: "The guilt sit",
    body: "You skipped three days, felt bad, sat for 45 minutes with the whole session a mental courtroom. The body scan never started. That is a self-punishment session in meditation clothing. It does not deposit anything useful in the nervous system.",
  },
  {
    title: "The podcast sit",
    body: "One earbud in, a guided voice talking. Pleasant, relaxing, useful in its own way. Not Vipassana. The rewiring mechanism the technique trains is self-directed observation of sensation. Outsourcing the direction is a different practice entirely.",
  },
  {
    title: "The bed sit",
    body: "Sitting cross-legged on your bed, eyes closed, warm, drifting. Most of this session is a nap you are pretending is a sit. The posture matters because drowsiness at the body level undoes what the attention at the mind level is trying to build.",
  },
  {
    title: "The ten-minute apology",
    body: "Ten minutes is not zero. But if ten minutes becomes your normal (not your floor on a hard day), the dose is too low to carry over into daily reactivity. Twenty to thirty is the working minimum most practitioners land on.",
  },
];

export function InvalidReps() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {invalidReps.map((r, i) => (
        <div
          key={r.title}
          className={`rounded-xl border border-accent/20 bg-accent/5 p-5 transition-all duration-700 ${
            shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: `${i * 140}ms` }}
        >
          <div className="mb-2 text-sm font-semibold text-foreground">
            {r.title}
          </div>
          <p className="text-sm text-muted">{r.body}</p>
        </div>
      ))}
    </div>
  );
}

const sessions = [
  { reps: 20, label: "20 reps / month", path: "daily 20 min", totalMin: 400 },
  { reps: 8, label: "8 reps / month", path: "2x weekly 90 min", totalMin: 720 },
];

export function RepEconomics() {
  const ref = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setDrawn(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        Reps beat minutes
      </div>
      <div ref={ref} className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {sessions.map((s, i) => (
          <div
            key={s.label}
            className={`rounded-xl border p-5 transition-all duration-700 ${
              i === 0
                ? "border-accent/40 bg-accent/10"
                : "border-border bg-card"
            }`}
            style={{
              transform: drawn ? "translateY(0)" : "translateY(12px)",
              opacity: drawn ? 1 : 0,
              transitionDelay: `${i * 200}ms`,
            }}
          >
            <div className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted">
              {s.path}
            </div>
            <div className="mb-3 text-3xl font-bold tracking-tight text-foreground tabular-nums">
              {s.label}
            </div>
            <div className="mb-4 flex flex-wrap gap-1">
              {Array.from({ length: Math.min(s.reps, 30) }).map((_, k) => (
                <span
                  key={k}
                  className={`h-3 w-3 rounded-sm transition-all duration-500 ${
                    i === 0 ? "bg-accent" : "bg-accent/40"
                  }`}
                  style={{
                    transform: drawn ? "scale(1)" : "scale(0)",
                    transitionDelay: `${i * 200 + k * 30}ms`,
                  }}
                />
              ))}
            </div>
            <div className="text-sm text-muted">
              Total monthly minutes:{" "}
              <span className="font-semibold text-foreground tabular-nums">
                {s.totalMin}
              </span>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-muted">
        The column on the right puts in more time. The column on the left rewires
        faster. The brain learns from how often, not how much. 20 reps of 20 minutes
        outperforms 8 reps of 90 minutes at installing the default response to an
        unpleasant sensation.
      </p>
    </div>
  );
}

const sciencePoints = [
  {
    title: "Reduced amygdala reactivity",
    body: "Functional MRI work on long-term vipassana practitioners shows reduced amygdala activation to negative emotional stimuli, and the reduction scales with reported daily practice hours more than with total lifetime hours.",
  },
  {
    title: "Default mode network quieter",
    body: "The default mode network, most active during self-referential rumination, shows lower activity and different connectivity in experienced meditators. The subjective correlate is less mind-wandering about the self.",
  },
  {
    title: "Occipital gamma in expert sitters",
    body: "Long-term vipassana practitioners show elevated occipital gamma power during practice, interpreted as enhanced sensory awareness. This is an expert-vs-novice finding, not an after-one-course finding.",
  },
  {
    title: "What is not proven",
    body: "A specific dose-response curve. Clean causal claims about neurogenesis from the practice. Any timeline that guarantees a particular outcome at a particular rep count. The honest frame: consistent small effects, accumulated.",
  },
];

export function ScienceGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {sciencePoints.map((p, i) => (
        <div
          key={p.title}
          className={`rounded-xl border border-border bg-card p-5 transition-all duration-700 ${
            shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: `${i * 140}ms` }}
        >
          <div className="mb-2 text-sm font-semibold text-foreground">
            {p.title}
          </div>
          <p className="text-sm text-muted">{p.body}</p>
        </div>
      ))}
    </div>
  );
}
