"use client";

import { useEffect, useRef, useState } from "react";

export function NumberTicker({
  value,
  suffix = "",
  prefix = "",
  duration = 1200,
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
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
            setDisplay(value * eased);
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

  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.round(display).toLocaleString();

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export function GradientText({
  children,
  animate = true,
}: {
  children: React.ReactNode;
  animate?: boolean;
}) {
  return (
    <span
      className={`bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent ${
        animate ? "bg-[length:200%_auto] [animation:shimmerText_6s_linear_infinite]" : ""
      }`}
      style={{ WebkitBackgroundClip: "text" }}
    >
      {children}
      {animate && (
        <style>{`@keyframes shimmerText { from { background-position: 0% center; } to { background-position: 200% center; } }`}</style>
      )}
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
              timer = window.setTimeout(step, 700);
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
          Concept
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

type Phase = {
  weeks: string;
  label: string;
  technique: string;
  duration: string;
  gate: string;
  color: string;
};

export function PhaseTrack({ phases }: { phases: Phase[] }) {
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
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-8"
    >
      <div className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        The 12-week track
      </div>
      <div className="relative grid grid-cols-1 gap-4 md:grid-cols-3">
        {phases.map((p, i) => (
          <div
            key={i}
            className={`relative rounded-xl border p-5 transition-all duration-700 ${p.color} ${
              drawn ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: `${i * 200}ms` }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              {p.weeks}
            </p>
            <p className="mt-2 text-lg font-semibold text-foreground">{p.label}</p>
            <div className="mt-3 space-y-2 text-sm text-muted">
              <p>
                <span className="font-medium text-foreground">Technique:</span> {p.technique}
              </p>
              <p>
                <span className="font-medium text-foreground">Daily duration:</span>{" "}
                {p.duration}
              </p>
            </div>
            <div className="mt-4 rounded-lg border border-accent/20 bg-accent/5 p-3 text-xs text-foreground">
              <p className="mb-1 font-semibold uppercase tracking-widest text-accent">
                Gate to next phase
              </p>
              <p className="text-muted">{p.gate}</p>
            </div>
            {i < phases.length - 1 && (
              <div className="hidden md:block absolute -right-4 top-1/2 h-6 w-6 -translate-y-1/2 text-accent">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14m0 0l-5-5m5 5l-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-muted">
        Calendar weeks are a guideline. The real instrument is the gate at the bottom of each card.
      </p>
    </div>
  );
}

type WeekRow = {
  week: number;
  phase: "anapana" | "scan" | "adhitthana" | "full";
  morning: string;
  evening: string;
  focus: string;
  check: string;
};

export function WeekTable({ weeks }: { weeks: WeekRow[] }) {
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
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const phaseColor: Record<WeekRow["phase"], string> = {
    anapana: "bg-accent/10 text-accent",
    scan: "bg-accent-light/20 text-foreground",
    adhitthana: "bg-accent/20 text-accent",
    full: "bg-accent text-white",
  };
  const phaseLabel: Record<WeekRow["phase"], string> = {
    anapana: "Anapana",
    scan: "+ body scan",
    adhitthana: "+ adhitthana",
    full: "Full pattern",
  };

  return (
    <div ref={ref} className="overflow-x-auto rounded-2xl border border-border bg-card">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-card-hover">
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-muted">
              Week
            </th>
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-muted">
              Phase
            </th>
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-muted">
              Morning
            </th>
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-muted">
              Evening
            </th>
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-muted">
              Focus
            </th>
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-muted">
              End-of-week check
            </th>
          </tr>
        </thead>
        <tbody>
          {weeks.map((w, i) => (
            <tr
              key={w.week}
              className={`border-b border-border last:border-b-0 transition-all duration-500 ${
                drawn ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <td className="px-4 py-3 align-top text-base font-semibold text-foreground">
                {w.week}
              </td>
              <td className="px-4 py-3 align-top">
                <span
                  className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${phaseColor[w.phase]}`}
                >
                  {phaseLabel[w.phase]}
                </span>
              </td>
              <td className="px-4 py-3 align-top text-sm text-foreground">{w.morning}</td>
              <td className="px-4 py-3 align-top text-sm text-foreground">{w.evening}</td>
              <td className="px-4 py-3 align-top text-sm text-muted">{w.focus}</td>
              <td className="px-4 py-3 align-top text-sm text-muted">{w.check}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function GateMeter({
  title,
  subtitle,
  bullets,
}: {
  title: string;
  subtitle: string;
  bullets: { pass: string; fail: string }[];
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
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 to-card p-6 md:p-8"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-accent">
        Phase gate
      </p>
      <h3 className="mt-2 text-2xl font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-muted">{subtitle}</p>
      <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="rounded-lg border border-accent/30 bg-accent/5 p-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
            Pass: advance
          </p>
          <ul className="space-y-2">
            {bullets.map((b, i) => (
              <li
                key={i}
                className={`flex items-start gap-2 text-sm text-foreground transition-all duration-500 ${
                  visible ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 011.4-1.4L8.5 12 15.3 5.3a1 1 0 011.4 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{b.pass}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">
            Fail: hold the line
          </p>
          <ul className="space-y-2">
            {bullets.map((b, i) => (
              <li
                key={i}
                className={`flex items-start gap-2 text-sm text-muted transition-all duration-500 ${
                  visible ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 100 + 50}ms` }}
              >
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-muted"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-10.3a1 1 0 010 1.4L11.4 10l2.3 2.3a1 1 0 11-1.4 1.4L10 11.4l-2.3 2.3a1 1 0 11-1.4-1.4L8.6 10 6.3 7.7a1 1 0 011.4-1.4L10 8.6l2.3-2.3a1 1 0 011.4 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{b.fail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function MatchFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(-1);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          let i = 0;
          const total = 5;
          const t = window.setInterval(() => {
            setActive(i);
            i += 1;
            if (i >= total) window.clearInterval(t);
          }, 600);
          obs.disconnect();
          return () => window.clearInterval(t);
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const steps = [
    {
      title: "Sit time, in UTC",
      body: "Your morning or evening sit must overlap a buddy's within ±60 minutes, compared in UTC. This is the only hard filter.",
    },
    {
      title: "Old student priority",
      body: "Both completed at least one Goenka 10-day? Match weight increases. Not required to participate.",
    },
    {
      title: "Session duration",
      body: "Same length is preferred. Different lengths still pair, you just end at different times.",
    },
    {
      title: "Confirmation, once",
      body: "First-time signups get a 3-day yes/no confirmation email before any introduction.",
    },
    {
      title: "Ready state",
      body: "After your first confirmed match, you are tagged as ready. Future matches skip the confirmation step entirely.",
    },
  ];

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-border bg-card p-6 md:p-8"
    >
      <div className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        How the match is decided
      </div>
      <ol className="space-y-3">
        {steps.map((s, i) => (
          <li
            key={i}
            className={`flex gap-4 rounded-lg border p-4 transition-all duration-500 ${
              active >= i
                ? "border-accent/30 bg-accent/5 opacity-100"
                : "border-border bg-card opacity-50"
            }`}
          >
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold transition-colors ${
                active >= i
                  ? "border-accent bg-card text-accent"
                  : "border-border bg-card text-muted"
              }`}
            >
              {i + 1}
            </div>
            <div>
              <p className="text-base font-semibold text-foreground">{s.title}</p>
              <p className="mt-1 text-sm text-muted">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card py-4 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max gap-3 [animation:marqueeScroll_40s_linear_infinite] hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm text-accent"
          >
            {item}
          </span>
        ))}
      </div>
      <style>{`@keyframes marqueeScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

export function ChecklistCard({
  title,
  items,
}: {
  title: string;
  items: string[];
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
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="rounded-xl border border-border bg-card p-6"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-accent">
        Daily anchor
      </p>
      <h3 className="mt-2 text-lg font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 space-y-2">
        {items.map((it, i) => (
          <li
            key={i}
            className={`flex items-start gap-3 text-sm text-foreground transition-all duration-500 ${
              visible ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0"
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <span
              className={`mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border-2 transition-all ${
                visible ? "border-accent bg-accent text-white" : "border-border bg-card"
              }`}
            >
              {visible && (
                <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3">
                  <path
                    d="M2 6l3 3 5-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
