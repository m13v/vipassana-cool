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
      style={{
        WebkitBackgroundClip: "text",
      }}
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

export function ZoneBeam() {
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
      { threshold: 0.35 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const zones = [
    { day: "Day 1", label: "Whole nose area", radius: 92, delay: 0 },
    { day: "Day 2", label: "Below the nostrils", radius: 62, delay: 250 },
    { day: "Day 3", label: "Upper lip triangle", radius: 38, delay: 500 },
    { day: "Day 4 AM", label: "Moustache area, sensation-sharp", radius: 20, delay: 750 },
  ];

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-10"
    >
      <div className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        The shrinking attention zone
      </div>
      <div className="relative mx-auto flex h-72 w-full max-w-md items-center justify-center">
        {zones.map((z, i) => (
          <div
            key={i}
            className="absolute rounded-full border-2 transition-all duration-[1400ms] ease-out"
            style={{
              width: drawn ? `${z.radius * 2}px` : "20px",
              height: drawn ? `${z.radius * 2}px` : "20px",
              borderColor: `rgba(139, 115, 85, ${0.2 + i * 0.18})`,
              background: `rgba(139, 115, 85, ${0.03 + i * 0.02})`,
              transitionDelay: `${z.delay}ms`,
              opacity: drawn ? 1 : 0,
            }}
          />
        ))}
        <div
          className={`absolute h-3 w-3 rounded-full bg-accent transition-all duration-700 ${
            drawn ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
          style={{ transitionDelay: "900ms" }}
        />
      </div>
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
        {zones.map((z, i) => (
          <div
            key={i}
            className={`rounded-lg border border-border bg-card p-3 transition-all duration-700 ${
              drawn ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
            style={{ transitionDelay: `${z.delay + 300}ms` }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              {z.day}
            </p>
            <p className="mt-1 text-sm text-foreground">{z.label}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-muted">
        Each day, the instruction narrows the zone. The smaller the area, the
        subtler the sensation you are trained to detect.
      </p>
    </div>
  );
}

export function StepTimeline({
  steps,
}: {
  steps: { time: string; title: string; body: string }[];
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
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

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
            style={{ transitionDelay: `${i * 160}ms` }}
          >
            <div
              className={`relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-xs font-semibold transition-all duration-500 md:h-8 md:w-8 md:text-sm ${
                drawn ? "border-accent bg-card text-accent" : "border-border bg-card text-muted"
              }`}
            >
              {i + 1}
            </div>
            <div className="flex-1 pb-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                {s.time}
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

export function Marquee({
  items,
}: {
  items: string[];
}) {
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

export function ScoreCard({
  criterion,
  verdict,
  note,
  tone,
}: {
  criterion: string;
  verdict: string;
  note: string;
  tone: "anapana" | "vipassana";
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

  const toneClass =
    tone === "anapana"
      ? "border-accent/30 bg-accent/5"
      : "border-accent-light/40 bg-accent-light/10";

  return (
    <div
      ref={ref}
      className={`rounded-lg border p-5 transition-all duration-500 ${toneClass} ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-accent">
        {tone === "anapana" ? "Anapana" : "Vipassana"}
      </p>
      <h4 className="mb-2 text-base font-semibold text-foreground">{criterion}</h4>
      <p className="mb-2 text-sm text-muted">
        <span className="font-medium text-foreground">{verdict}</span>
      </p>
      <p className="text-sm text-muted">{note}</p>
    </div>
  );
}
