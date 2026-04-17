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

export function MotionSequence({
  frames,
}: {
  frames: { title: string; body: string }[];
}) {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const playing = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !playing.current) {
          playing.current = true;
          let i = 0;
          const tick = () => {
            setActive(i);
            i = (i + 1) % frames.length;
            timer = window.setTimeout(tick, 2800);
          };
          let timer = window.setTimeout(tick, 400);
          return () => window.clearTimeout(timer);
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [frames.length]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 via-card to-card p-8 shadow-sm"
    >
      <div className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
        <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-accent" />
        Running the audit
      </div>
      <div className="relative min-h-[120px]">
        {frames.map((f, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-700 ${
              i === active
                ? "translate-y-0 opacity-100"
                : i < active
                  ? "-translate-y-4 opacity-0"
                  : "translate-y-4 opacity-0"
            }`}
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">
              Frame {i + 1} of {frames.length}
            </p>
            <h3 className="mb-2 text-xl font-bold text-foreground">{f.title}</h3>
            <p className="text-muted">{f.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex gap-1.5">
        {frames.map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-all duration-500 ${
              i === active ? "bg-accent" : i < active ? "bg-accent/50" : "bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function ScoreCard({
  criterion,
  score,
  mechanic,
  verdict,
}: {
  criterion: string;
  score: "clears" | "partial" | "fails";
  mechanic: string;
  verdict: string;
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
    score === "clears"
      ? "Clears"
      : score === "partial"
        ? "Partial"
        : "Fails";
  const badgeClass =
    score === "clears"
      ? "bg-green-100 text-green-800 border-green-300"
      : score === "partial"
        ? "bg-amber-100 text-amber-900 border-amber-300"
        : "bg-red-100 text-red-800 border-red-300";
  const dotClass =
    score === "clears"
      ? "bg-green-500"
      : score === "partial"
        ? "bg-amber-500"
        : "bg-red-500";

  return (
    <div
      ref={ref}
      className={`rounded-lg border border-border bg-card p-5 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <h4 className="text-base font-semibold text-foreground">{criterion}</h4>
        <span
          className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${badgeClass}`}
        >
          <span className={`inline-block h-1.5 w-1.5 rounded-full ${dotClass}`} />
          {label}
        </span>
      </div>
      <p className="mb-2 text-sm text-muted">
        <span className="font-medium text-foreground">Mechanic: </span>
        {mechanic}
      </p>
      <p className="text-sm text-muted">
        <span className="font-medium text-foreground">Verdict: </span>
        {verdict}
      </p>
    </div>
  );
}

export function Day11Flow() {
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
  const steps = [
    { t: "Day 10, evening", b: "Noble silence broken. You speak to other students, collect your phone, retrieve your key." },
    { t: "Day 11, 6:30 AM", b: "Final group sit. Metta. You walk out the gate." },
    { t: "Week 1 after", b: "Zero emails, zero texts, zero calls from the center unless you explicitly asked to be contacted." },
    { t: "Months later", b: "Your name is not on a mailing list you cannot leave. No ritual to re-enter secular life. No tithe." },
  ];
  return (
    <div ref={ref} className="relative rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-border md:left-10" />
      <div
        className={`absolute left-8 top-10 w-0.5 bg-accent transition-all duration-[1600ms] ease-out md:left-10 ${
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
