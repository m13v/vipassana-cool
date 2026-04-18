"use client";

import { useEffect, useRef, useState } from "react";

export function NumberTicker({
  value,
  suffix = "",
  prefix = "",
  duration = 1300,
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

// Video-style animated concept reveal used as the page's hero composition
// (RemotionClip analog: timed frames that spring in with staggered captions).
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
          let timer = window.setTimeout(function step() {
            setActive(i);
            i += 1;
            if (i <= captions.length) {
              timer = window.setTimeout(step, 620);
            }
          }, 250);
          return () => window.clearTimeout(timer);
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [captions.length]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-3xl border border-accent/25 bg-gradient-to-br from-accent/15 via-card to-accent-light/10 p-8 shadow-sm md:p-14"
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          color: "var(--color-accent)",
        }}
      />
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-accent-light/20 blur-3xl" />
      <div className="relative">
        <div className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-accent">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-accent" />
          The 2,500-year defense
        </div>
        <h3
          className={`mb-4 text-3xl font-bold leading-tight tracking-tight text-foreground transition-all duration-700 md:text-5xl ${
            active >= 0 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {title}
        </h3>
        <p
          className={`mb-8 text-lg text-muted transition-all duration-700 md:text-xl ${
            active >= 0
              ? "translate-y-0 opacity-100 [transition-delay:160ms]"
              : "translate-y-4 opacity-0"
          }`}
        >
          {subtitle}
        </p>
        <ul className="space-y-3">
          {captions.map((c, i) => (
            <li
              key={i}
              className={`flex items-start gap-3 text-base transition-all duration-700 md:text-lg ${
                active > i
                  ? "translate-x-0 opacity-100"
                  : "translate-x-4 opacity-0"
              }`}
              style={{ transitionDelay: `${(i + 1) * 130}ms` }}
            >
              <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-accent" />
              <span className="text-foreground">{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// The anchor visual: a beam diagram showing each "culty" rule on the left
// flowing into the shared central "Pali source" hub and out to "modern cult
// misread" on the right. Dashed lines animate in sequence.
export function OriginBeam() {
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

  const leftNodes = [
    { label: "Noble silence for 9 days" },
    { label: "No food after noon" },
    { label: "4 AM wake bell" },
    { label: "Sex segregation on site" },
    { label: "No reading or writing" },
    { label: "Donation-only economy" },
  ];

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-10"
    >
      <div className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-accent">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        Where each rule actually comes from
      </div>
      <div className="relative grid grid-cols-[1fr_auto_1fr] gap-3 md:gap-8">
        <div className="flex flex-col gap-2 md:gap-3">
          {leftNodes.map((n, i) => (
            <div
              key={i}
              className={`rounded-lg border border-border bg-card-hover px-3 py-2 text-xs text-foreground transition-all duration-700 md:text-sm ${
                drawn ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {n.label}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <div
            className={`relative flex h-36 w-36 flex-col items-center justify-center rounded-full border-2 border-accent bg-accent/10 text-center transition-all duration-700 md:h-44 md:w-44 ${
              drawn ? "scale-100 opacity-100" : "scale-75 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">
              Codified
            </p>
            <p className="mt-1 text-sm font-semibold text-foreground md:text-base">
              Pali Vinaya
            </p>
            <p className="text-xs text-muted">+ Atthasila</p>
            <p className="mt-1 text-[10px] text-muted">circa 4th c. BCE</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:gap-3">
          {[
            { label: "Milieu control" },
            { label: "Sensory deprivation" },
            { label: "Sleep deprivation" },
            { label: "Isolation tactic" },
            { label: "Information control" },
            { label: "Financial coercion" },
          ].map((n, i) => (
            <div
              key={i}
              className={`rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-900 line-through decoration-red-400/70 transition-all duration-700 md:text-sm ${
                drawn ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0"
              }`}
              style={{ transitionDelay: `${500 + i * 120}ms` }}
            >
              {n.label}
            </div>
          ))}
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-muted md:text-sm">
        Modern cult rubrics read each monastic practice as a control tactic. The
        practices pre-date the rubric by roughly 23 centuries.
      </p>
    </div>
  );
}

export function RuleOriginCard({
  index,
  rule,
  source,
  date,
  explanation,
}: {
  index: number;
  rule: string;
  source: string;
  date: string;
  explanation: string;
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
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-700 hover:border-accent/40 hover:shadow-sm ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/30 text-[11px] font-semibold text-accent">
          {index + 1}
        </span>
        <span className="rounded-full border border-accent/20 bg-accent/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-accent">
          {date}
        </span>
      </div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
        Retreat rule
      </p>
      <p className="mb-4 text-base font-semibold text-foreground">{rule}</p>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
        Traceable to
      </p>
      <p className="mb-3 text-sm font-medium text-accent">{source}</p>
      <p className="text-sm text-muted">{explanation}</p>
    </div>
  );
}

// Infinite horizontal marquee of Pali / Buddhist source terms, fades on edges.
export function SourceMarquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max gap-3 [animation:cultMarquee_52s_linear_infinite] hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-accent/25 bg-accent/5 px-4 py-1.5 text-sm text-accent"
          >
            {item}
          </span>
        ))}
      </div>
      <style>{`@keyframes cultMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

// Epoch timeline: huge horizontal scale showing the gap between when the
// rules were codified and when the frameworks used to accuse them were
// published. The point is to make the anachronism visceral.
export function MillenniaTimeline() {
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

  // Position on a 0-100 scale where 0 = 500 BCE, 100 = 2026 CE.
  const span = 2526;
  const toPct = (year: number) =>
    ((year - -500) / span) * 100;

  const markers = [
    {
      year: -500,
      label: "Pali Vinaya\nbegins to form",
      detail: "Monastic code with silence, food, posture, and sexual conduct rules.",
      accent: true,
    },
    {
      year: -350,
      label: "Atthasila (8 precepts)\nfor lay retreatants",
      detail: "Uposatha-day practice. Includes no food after noon, no entertainment, no luxurious seats.",
      accent: true,
    },
    {
      year: 1969,
      label: "Goenka authorized\nto teach",
      detail: "Transmits an already-ancient format as a secular 10-day course.",
    },
    {
      year: 1961,
      label: "Lifton's\n8 criteria",
      detail: "Published after studying Chinese political prisoners. The rubric is 23 centuries younger than the rules it is being applied to.",
    },
    {
      year: 1988,
      label: "Hassan's\nBITE model",
      detail: "Published to evaluate modern high-control groups. Postdates the practices by over 2,300 years.",
    },
  ];

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-border bg-card p-6 md:p-10"
    >
      <div className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-accent">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        The anachronism, to scale
      </div>
      <div className="relative h-56 w-full md:h-64">
        <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-border" />
        <div
          className={`absolute left-0 top-1/2 h-0.5 -translate-y-1/2 bg-accent transition-all duration-[2000ms] ease-out ${
            drawn ? "w-full" : "w-0"
          }`}
        />
        {markers.map((m, i) => {
          const pct = toPct(m.year);
          const above = i % 2 === 0;
          return (
            <div
              key={i}
              className={`absolute -translate-x-1/2 transition-all duration-700 ${
                drawn ? "opacity-100" : "opacity-0"
              }`}
              style={{
                left: `${pct}%`,
                top: "50%",
                transitionDelay: `${400 + i * 180}ms`,
              }}
            >
              <div
                className={`flex h-3 w-3 -translate-y-1/2 items-center justify-center rounded-full border-2 ${
                  m.accent
                    ? "border-accent bg-accent"
                    : "border-red-400 bg-red-50"
                }`}
              />
              <div
                className={`absolute left-1/2 w-44 -translate-x-1/2 text-center ${
                  above ? "bottom-4" : "top-4"
                }`}
              >
                <p
                  className={`whitespace-pre-line text-xs font-semibold ${
                    m.accent ? "text-accent" : "text-red-700"
                  }`}
                >
                  {m.label}
                </p>
                <p className="mt-1 text-[10px] text-muted">
                  {m.year < 0 ? `${Math.abs(m.year)} BCE` : `${m.year} CE`}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
        {markers
          .slice()
          .sort((a, b) => a.year - b.year)
          .map((m, i) => (
            <div
              key={i}
              className={`rounded-lg border p-3 text-sm ${
                m.accent
                  ? "border-accent/25 bg-accent/5 text-foreground"
                  : "border-border bg-card-hover text-muted"
              }`}
            >
              <p
                className={`text-xs font-semibold uppercase tracking-wider ${
                  m.accent ? "text-accent" : "text-red-700"
                }`}
              >
                {m.year < 0 ? `${Math.abs(m.year)} BCE` : `${m.year} CE`}
              </p>
              <p className="mt-1 whitespace-pre-line font-medium text-foreground">
                {m.label.replace(/\n/g, " ")}
              </p>
              <p className="mt-1 text-xs text-muted">{m.detail}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

// Before-and-after style card: a real claim pulled from the "cult" SERP
// vocabulary, juxtaposed against the specific Buddhist source that actually
// authors the rule.
export function ClaimVsSource({
  index,
  claim,
  source,
  finding,
}: {
  index: number;
  claim: string;
  source: string;
  finding: string;
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
      className={`rounded-xl border border-border bg-card p-5 transition-all duration-700 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="mb-3 flex items-center gap-2 text-[10px] font-medium uppercase tracking-widest text-muted">
        <span>Claim #{index + 1}</span>
      </div>
      <div className="mb-3 rounded-lg border border-red-200 bg-red-50 p-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-red-700">
          What the critic post says
        </p>
        <p className="mt-1 text-sm text-red-900">&ldquo;{claim}&rdquo;</p>
      </div>
      <div className="mb-3 rounded-lg border border-accent/25 bg-accent/5 p-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          The rule&rsquo;s actual source
        </p>
        <p className="mt-1 text-sm font-medium text-foreground">{source}</p>
      </div>
      <p className="text-xs text-muted">
        <span className="font-semibold text-foreground">Finding: </span>
        {finding}
      </p>
    </div>
  );
}

// Step-based framework for how to read "vipassana cult" critiques.
export function ReadingFramework({
  steps,
}: {
  steps: { title: string; body: string }[];
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
    <div
      ref={ref}
      className="relative rounded-2xl border border-border bg-card p-6 md:p-10"
    >
      <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-border md:left-10" />
      <div
        className={`absolute left-8 top-12 w-0.5 bg-accent transition-all duration-[1800ms] ease-out md:left-10 ${
          drawn ? "bottom-12" : "bottom-[calc(100%-3rem)]"
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
              className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-500 md:h-10 md:w-10 ${
                drawn
                  ? "border-accent bg-accent text-card"
                  : "border-border bg-card text-muted"
              }`}
            >
              {i + 1}
            </div>
            <div className="flex-1">
              <p className="text-base font-semibold text-foreground md:text-lg">
                {s.title}
              </p>
              <p className="mt-1 text-sm text-muted md:text-base">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
