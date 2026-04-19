"use client";

import { useEffect, useRef, useState } from "react";

export function NumberTicker({
  value,
  suffix = "",
  prefix = "",
  duration = 1200,
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
    <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
      {children}
    </span>
  );
}

export function ConceptReveal({
  title,
  subtitle,
  captions,
}: {
  title: string;
  subtitle: string;
  captions: string[];
}) {
  const [active, setActive] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let i = 0;
          const step = () => {
            setActive(i);
            i += 1;
            if (i <= captions.length) {
              timer = window.setTimeout(step, 650);
            }
          };
          let timer = window.setTimeout(step, 300);
          return () => window.clearTimeout(timer);
        }
      },
      { threshold: 0.35 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [captions.length]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/10 via-card to-card p-8 shadow-sm md:p-12"
    >
      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent-light/10 blur-3xl" />
      <div className="relative">
        <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-accent" />
          The Day 4 pivot
        </div>
        <h3
          className={`mb-3 text-3xl font-bold tracking-tight text-foreground transition-all duration-700 md:text-4xl ${
            active >= 0 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          {title}
        </h3>
        <p
          className={`mb-8 text-lg text-muted transition-all duration-700 ${
            active >= 0
              ? "translate-y-0 opacity-100 [transition-delay:150ms]"
              : "translate-y-3 opacity-0"
          }`}
        >
          {subtitle}
        </p>
        <ul className="space-y-3">
          {captions.map((c, i) => (
            <li
              key={i}
              className={`flex items-start gap-3 text-base transition-all duration-700 ${
                active > i ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0"
              }`}
              style={{ transitionDelay: `${(i + 1) * 120}ms` }}
            >
              <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span className="text-foreground">{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function LoadStack() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const loads = [
    {
      label: "Load 1",
      title: "Technique change",
      detail:
        "The preparatory, concentration-building phase ends. The main Vipassana technique is introduced. New instruction, new object of attention, new cognitive register, all on the same morning.",
    },
    {
      label: "Load 2",
      title: "Adhitthana immobility",
      detail:
        "First Strong Determination sitting. One hour with no eye opening, no hand movement, no leg uncrossing. Three of these are now scheduled every day. Voluntary immobility, sustained, in a silent hall.",
    },
    {
      label: "Load 3",
      title: "Cumulative sleep debt",
      detail:
        "Schedule is 4 AM to 9:30 PM. Most students sleep 5 to 6 hours a night. By Day 4, ~8 to 16 hours of lost sleep has accumulated. Sleep deprivation is an independently documented trigger for psychotic symptoms.",
    },
  ];
  return (
    <div ref={ref} className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        Three loads, same morning
      </div>
      <div className="space-y-3">
        {loads.map((l, i) => (
          <div
            key={i}
            className={`rounded-xl border border-accent/20 bg-accent/5 p-5 transition-all duration-700 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: `${i * 180}ms` }}
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded-full border border-accent/40 bg-card px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-accent">
                {l.label}
              </span>
              <span className="text-sm font-semibold text-foreground">{l.title}</span>
            </div>
            <p className="text-sm text-muted">{l.detail}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-muted">
        The point is not that any one of these is dangerous on its own. The point is that the
        course schedule stacks all three on the same day.
      </p>
    </div>
  );
}

export function DayRiskCurve() {
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

  const days = [
    { d: 0, h: 6, label: "D1", sub: "Prep phase" },
    { d: 1, h: 10, label: "D2", sub: "Prep phase" },
    { d: 2, h: 16, label: "D3", sub: "Prep phase" },
    { d: 3, h: 62, label: "D4", sub: "Pivot", peak: true },
    { d: 4, h: 74, label: "D5", sub: "Main phase" },
    { d: 5, h: 68, label: "D6", sub: "Main phase" },
    { d: 6, h: 46, label: "D7", sub: "Main phase" },
    { d: 7, h: 34, label: "D8", sub: "Main phase" },
    { d: 8, h: 28, label: "D9", sub: "Integration" },
    { d: 9, h: 22, label: "D10", sub: "Metta" },
  ];

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-border bg-card p-6 md:p-8"
    >
      <div className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        Reported difficulty by day
      </div>
      <div className="flex h-48 items-end gap-2">
        {days.map((b, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-2">
            <div className="relative flex h-40 w-full items-end">
              <div
                className={`w-full rounded-t-md transition-all duration-[1400ms] ease-out ${
                  b.peak
                    ? "bg-gradient-to-t from-teal-500 to-cyan-400"
                    : "bg-accent/30"
                }`}
                style={{
                  height: drawn ? `${b.h}%` : "0%",
                  transitionDelay: `${i * 90}ms`,
                }}
              />
              {b.peak && (
                <span
                  className={`absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-accent bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-accent transition-opacity duration-700 ${
                    drawn ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: `${i * 90 + 600}ms` }}
                >
                  Peak cluster
                </span>
              )}
            </div>
            <div className="text-center">
              <p className="text-xs font-semibold text-foreground">{b.label}</p>
              <p className="text-[10px] text-muted">{b.sub}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-muted">
        Qualitative shape reconstructed from post-course reports, Dharma Overground threads, and
        personal journaling across six courses. Not a clinical incidence rate. The structural
        point is the location of the peak.
      </p>
    </div>
  );
}

export function ProdromeChecklist({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(-1);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          let i = 0;
          const step = () => {
            setActive(i);
            i += 1;
            if (i <= items.length) {
              timer = window.setTimeout(step, 420);
            }
          };
          let timer = window.setTimeout(step, 300);
          return () => window.clearTimeout(timer);
        }
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [items.length]);
  return (
    <div ref={ref} className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        {title}
      </div>
      <ul className="space-y-2.5">
        {items.map((it, i) => (
          <li
            key={i}
            className={`flex items-start gap-3 rounded-lg border border-border bg-card-hover p-3 transition-all duration-500 ${
              active >= i ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
            }`}
          >
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors duration-500 ${
                active >= i
                  ? "border-accent bg-accent text-card"
                  : "border-border bg-card text-muted"
              }`}
              aria-hidden="true"
            >
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path
                  d="M1.5 5.5L4.5 8.5L9.5 2.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-sm text-foreground">{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function RiskFactorMarquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card py-4 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max gap-3 [animation:psychMarquee_50s_linear_infinite] hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm text-accent"
          >
            {item}
          </span>
        ))}
      </div>
      <style>{`@keyframes psychMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

export function ScreeningCard({
  trigger,
  outcome,
  note,
}: {
  trigger: string;
  outcome: "accepted" | "deferred" | "case-by-case";
  note: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const label =
    outcome === "accepted"
      ? "Usually accepted"
      : outcome === "deferred"
        ? "Usually deferred"
        : "Case by case";
  const badgeClass =
    outcome === "accepted"
      ? "bg-green-100 text-green-800 border-green-300"
      : outcome === "deferred"
        ? "bg-red-100 text-red-800 border-red-300"
        : "bg-amber-100 text-amber-900 border-amber-300";
  const dotClass =
    outcome === "accepted"
      ? "bg-green-500"
      : outcome === "deferred"
        ? "bg-red-500"
        : "bg-amber-500";
  return (
    <div
      ref={ref}
      className={`rounded-lg border border-border bg-card p-5 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <h4 className="text-sm font-semibold text-foreground">{trigger}</h4>
        <span
          className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${badgeClass}`}
        >
          <span className={`inline-block h-1.5 w-1.5 rounded-full ${dotClass}`} />
          {label}
        </span>
      </div>
      <p className="text-sm text-muted">{note}</p>
    </div>
  );
}

export function ActionFlow() {
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
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const steps = [
    {
      t: "Now, same day",
      b: "Tell the course manager. Not the assistant teacher between interview times, the course manager. They are the logistics person and they are there for this. Use the word you actually feel: scared, unreal, not myself. No ritual language needed.",
    },
    {
      t: "Before the next sitting",
      b: "Ask the course manager or assistant teacher what to adjust before the next session. They have a protocol for this, and the scaled-back version is stabilizing rather than activating.",
    },
    {
      t: "Same day, evening interview",
      b: "Speak with the assistant teacher. Describe the symptom literally. Persistent voice, visual distortion, derealization, not a metaphor. They have seen this pattern and they can decide whether to scale back your sitting hours or contact a doctor.",
    },
    {
      t: "If it escalates",
      b: "Leaving the course is not failure. Courses run continuously, you can sit another one later. Call 988 (US) or local crisis line from the center phone. The center will call a cab and call someone for you if you ask.",
    },
    {
      t: "After the course",
      b: "Contact Cheetah House at cheetahhouse.org. Founded by Dr. Willoughby Britton, specifically trained for meditation-related adverse effects, not just general psych. Sliding scale $50 to $125 Zoom consults.",
    },
  ];
  return (
    <div ref={ref} className="relative rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-border md:left-10" />
      <div
        className={`absolute left-8 top-10 w-0.5 bg-accent transition-all duration-[1800ms] ease-out md:left-10 ${
          drawn ? "bottom-10" : "bottom-[calc(100%-2.5rem)]"
        }`}
      />
      <ol className="space-y-6">
        {steps.map((s, i) => (
          <li
            key={i}
            className={`relative flex gap-5 pl-4 transition-all duration-700 md:pl-6 ${
              drawn ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
            style={{ transitionDelay: `${i * 180}ms` }}
          >
            <div
              className={`relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-xs font-semibold transition-all duration-500 md:h-8 md:w-8 md:text-sm ${
                drawn
                  ? "border-accent bg-card text-accent"
                  : "border-border bg-card text-muted"
              }`}
            >
              {i + 1}
            </div>
            <div className="flex-1 pb-2">
              <p className="mb-1 text-sm font-semibold text-foreground">{s.t}</p>
              <p className="text-sm text-muted">{s.b}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function CaseReportCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`rounded-2xl border border-border bg-card p-6 transition-all duration-700 md:p-8 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        Shetty and Duggal, Ind Psychiatry J, 2021
      </div>
      <p className="mb-3 text-sm text-muted">
        The most-cited case report in the clinical literature on vipassana-triggered psychosis.
        A patient admitted with delusions of persecution, auditory hallucinations, and disorganized
        speech on the 16th day of a longer intensive retreat. The patient had one previous
        episode, nine years earlier, triggered by their first 10-day Goenka course.
      </p>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <div className="rounded-lg border border-accent/20 bg-accent/5 p-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Onset</p>
          <p className="mt-1 text-sm text-foreground">
            Back half of intensive practice, not day 1
          </p>
        </div>
        <div className="rounded-lg border border-accent/20 bg-accent/5 p-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Recurrence</p>
          <p className="mt-1 text-sm text-foreground">
            Re-triggered by a second intensive, 9 years later
          </p>
        </div>
        <div className="rounded-lg border border-accent/20 bg-accent/5 p-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Predictor
          </p>
          <p className="mt-1 text-sm text-foreground">
            Prior psychotic episode, any trigger
          </p>
        </div>
      </div>
      <p className="mt-5 text-xs text-muted">
        PMC8380174. The structural takeaway for this page: the onset window was not the beginning
        of the retreat. It was after the intensive phase had been running for days. That matches
        the Day 4 through Day 6 cluster in the 10-day format.
      </p>
    </div>
  );
}
