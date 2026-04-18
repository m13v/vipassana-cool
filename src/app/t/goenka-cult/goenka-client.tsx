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
          The inversion
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

export function RefusalCard({
  index,
  cultMove,
  goenkaMove,
  evidence,
}: {
  index: number;
  cultMove: string;
  goenkaMove: string;
  evidence: string;
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
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`rounded-xl border border-border bg-card p-5 transition-all duration-600 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-accent/30 text-xs font-semibold text-accent">
          {index + 1}
        </span>
        <span className="text-xs font-medium uppercase tracking-widest text-muted">
          Refusal
        </span>
      </div>
      <div className="mb-3 rounded-lg bg-card-hover p-3">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted">
          What a cult leader does
        </p>
        <p className="text-sm text-foreground line-through decoration-red-500/60 decoration-2">
          {cultMove}
        </p>
      </div>
      <div className="mb-3 rounded-lg border border-accent/20 bg-accent/5 p-3">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">
          What Goenka did instead
        </p>
        <p className="text-sm font-medium text-foreground">{goenkaMove}</p>
      </div>
      <p className="text-xs text-muted">
        <span className="font-medium text-foreground">Evidence: </span>
        {evidence}
      </p>
    </div>
  );
}

export function LifeTimeline({
  steps,
}: {
  steps: { year: string; title: string; body: string; big?: boolean }[];
}) {
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
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="relative rounded-2xl border border-border bg-card p-6 md:p-10">
      <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-border md:left-10" />
      <div
        className={`absolute left-8 top-10 w-0.5 bg-accent transition-all duration-[2000ms] ease-out md:left-10 ${
          drawn ? "bottom-10" : "bottom-[calc(100%-2.5rem)]"
        }`}
      />
      <ol className="space-y-7">
        {steps.map((s, i) => (
          <li
            key={i}
            className={`relative flex gap-5 pl-4 transition-all duration-700 md:pl-6 ${
              drawn ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <div
              className={`relative z-10 flex shrink-0 items-center justify-center rounded-full border-2 text-xs font-semibold transition-all duration-500 md:text-sm ${
                drawn
                  ? s.big
                    ? "border-accent bg-accent text-card"
                    : "border-accent bg-card text-accent"
                  : "border-border bg-card text-muted"
              } ${s.big ? "h-9 w-9 md:h-11 md:w-11" : "h-6 w-6 md:h-8 md:w-8"}`}
            >
              {s.big ? "★" : i + 1}
            </div>
            <div className="flex-1 pb-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                {s.year}
              </p>
              <p className="mt-1 text-base font-semibold text-foreground">{s.title}</p>
              <p className="mt-1 text-sm text-muted">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function LineageMarquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card py-4 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max gap-3 [animation:marqueeScroll_45s_linear_infinite] hover:[animation-play-state:paused]">
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

export function GuruDeathBeam() {
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

  const rows = [
    {
      org: "Rajneesh / Osho movement",
      died: "1990",
      outcome: "Commune dissolved before his death, multiple schisms after, felony convictions of inner circle",
      color: "red",
    },
    {
      org: "Siddha Yoga (Muktananda)",
      died: "1982",
      outcome: "Succession battle, sexual abuse allegations surfaced publicly, membership collapsed",
      color: "red",
    },
    {
      org: "Transcendental Meditation (Maharishi)",
      died: "2008",
      outcome: "Split into competing TM organizations, ongoing lawsuits over trademarks and funds",
      color: "red",
    },
    {
      org: "Goenka Vipassana",
      died: "2013",
      outcome: "No schism, no successor battle, 200+ centers still running the same recorded 10-day course",
      color: "green",
    },
  ];

  return (
    <div ref={ref} className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        The founder-death test
      </div>
      <div className="space-y-3">
        {rows.map((r, i) => (
          <div
            key={i}
            className={`flex flex-col gap-2 rounded-xl border p-4 transition-all duration-700 md:flex-row md:items-center md:gap-4 ${
              r.color === "green"
                ? "border-accent/40 bg-accent/5"
                : "border-border bg-card-hover"
            } ${drawn ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"}`}
            style={{ transitionDelay: `${i * 180}ms` }}
          >
            <div className="md:w-56 md:shrink-0">
              <p className="text-sm font-semibold text-foreground">{r.org}</p>
              <p className="text-xs text-muted">Founder died {r.died}</p>
            </div>
            <div className="hidden h-px flex-1 bg-border md:block" />
            <div className="flex-1">
              <p className="text-sm text-muted">{r.outcome}</p>
            </div>
            <span
              className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                r.color === "green"
                  ? "border border-green-300 bg-green-100 text-green-800"
                  : "border border-red-300 bg-red-100 text-red-800"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  r.color === "green" ? "bg-green-500" : "bg-red-500"
                }`}
              />
              {r.color === "green" ? "Continuity" : "Fracture"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DecentralizedDiagram() {
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

  const centers = [
    { label: "Dhamma Dhara, MA", x: 15, y: 18 },
    { label: "Dhamma Mahavana, CA", x: 80, y: 22 },
    { label: "Dhamma Giri, IN", x: 22, y: 78 },
    { label: "Dhamma Pabha, UK", x: 78, y: 76 },
    { label: "Dhamma Medini, NZ", x: 10, y: 48 },
    { label: "Dhamma Neru, ES", x: 88, y: 50 },
  ];

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-10"
    >
      <div className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        One audio file, 200+ centers
      </div>
      <div className="relative mx-auto h-80 w-full max-w-2xl">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {centers.map((c, i) => (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={c.x}
              y2={c.y}
              stroke="currentColor"
              strokeWidth="0.25"
              strokeDasharray="1 1"
              className={`text-accent transition-opacity duration-[1400ms] ${
                drawn ? "opacity-40" : "opacity-0"
              }`}
              style={{ transitionDelay: `${400 + i * 120}ms` }}
            />
          ))}
        </svg>
        <div
          className={`absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 border-accent bg-accent/10 text-center transition-all duration-700 md:h-24 md:w-24 ${
            drawn ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        >
          <p className="text-[10px] font-semibold uppercase tracking-wider text-accent md:text-xs">
            1990s
          </p>
          <p className="text-[10px] text-foreground md:text-xs">recorded</p>
          <p className="text-[10px] text-foreground md:text-xs">discourses</p>
        </div>
        {centers.map((c, i) => (
          <div
            key={i}
            className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
              drawn ? "scale-100 opacity-100" : "scale-50 opacity-0"
            }`}
            style={{
              left: `${c.x}%`,
              top: `${c.y}%`,
              transitionDelay: `${600 + i * 100}ms`,
            }}
          >
            <div className="flex h-3 w-3 items-center justify-center rounded-full border border-accent bg-card">
              <span className="h-1 w-1 rounded-full bg-accent" />
            </div>
            <p className="absolute left-1/2 top-full mt-1 w-max -translate-x-1/2 whitespace-nowrap text-[10px] text-muted">
              {c.label}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-muted">
        The same audio file plays at every center. No local teacher adds their
        own spin. No new discourses have been authorized since Goenka&apos;s death.
      </p>
    </div>
  );
}
