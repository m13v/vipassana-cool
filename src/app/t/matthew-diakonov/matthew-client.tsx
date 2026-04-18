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
            timer = window.setTimeout(tick, 3000);
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
      className="relative overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/10 via-card to-card p-8 shadow-sm"
    >
      <div className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
        <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-accent" />
        Who Matthew actually is
      </div>
      <div className="relative min-h-[140px]">
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

export function TerminalBlock({
  title = "terminal",
  lines,
}: {
  title?: string;
  lines: { kind: "cmd" | "out" | "ok" | "dim"; text: string }[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          obs.disconnect();
          let i = 0;
          const tick = () => {
            i += 1;
            setShown(i);
            if (i < lines.length) window.setTimeout(tick, 260);
          };
          window.setTimeout(tick, 250);
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [lines.length]);

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-xl border border-border bg-[#0f0f0c] shadow-sm"
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#1a1814] px-4 py-2">
        <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-500/80" />
        <span className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
        <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500/80" />
        <span className="ml-2 text-[11px] font-medium text-white/40">{title}</span>
      </div>
      <pre className="overflow-x-auto px-4 py-4 font-mono text-[13px] leading-6">
        {lines.slice(0, shown).map((l, i) => (
          <div
            key={i}
            className={
              l.kind === "cmd"
                ? "text-white"
                : l.kind === "ok"
                  ? "text-green-400"
                  : l.kind === "dim"
                    ? "text-white/40"
                    : "text-white/70"
            }
          >
            {l.kind === "cmd" ? <span className="text-accent">$ </span> : null}
            {l.text}
          </div>
        ))}
        {shown < lines.length && (
          <span className="inline-block h-4 w-2 animate-pulse bg-white/60 align-middle" />
        )}
      </pre>
    </div>
  );
}

export function CodeSnippet({
  filename,
  code,
}: {
  filename: string;
  code: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-[#0f0f0c] shadow-sm">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#1a1814] px-4 py-2 text-[11px]">
        <span className="font-medium text-white/60">{filename}</span>
        <span className="text-white/30">javascript</span>
      </div>
      <pre className="overflow-x-auto px-4 py-4 font-mono text-[12.5px] leading-6 text-white/85">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export function JourneyTimeline({
  steps,
}: {
  steps: { t: string; h: string; b: string }[];
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
      <ol className="space-y-7">
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
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-accent">
                {s.t}
              </p>
              <h3 className="mb-1 text-base font-semibold text-foreground">{s.h}</h3>
              <p className="text-sm text-muted">{s.b}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function HandMatchBand() {
  const pairs = [
    "Nahïl + Greta",
    "Artur + Kimberly",
    "Vanditt + Chandan",
    "Akash + Jess",
    "Thiago + Andrés",
  ];
  return (
    <div className="group relative overflow-hidden rounded-xl border border-accent/20 bg-gradient-to-r from-accent/5 via-card to-accent/5 py-4">
      <div className="flex animate-[scroll_30s_linear_infinite] gap-8 whitespace-nowrap">
        {[...pairs, ...pairs, ...pairs].map((p, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            {p}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}

export function ShimmerCta({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="group relative inline-flex overflow-hidden rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
    >
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2.4s_ease-in-out_infinite]" />
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          60% { transform: translateX(120%); }
          100% { transform: translateX(120%); }
        }
      `}</style>
    </a>
  );
}

export function HeroBackdrop({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-10">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 0%, rgba(139,115,85,0.08), transparent 50%), radial-gradient(circle at 80% 100%, rgba(196,168,130,0.08), transparent 55%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(139,115,85,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(139,115,85,0.14) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent 75%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

export function GradientWord({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
      {children}
    </span>
  );
}
