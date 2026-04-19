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
  eyebrow,
}: {
  title: string;
  subtitle: string;
  captions: string[];
  eyebrow?: string;
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
          let timer = 0;
          const step = () => {
            setActive(i);
            i += 1;
            if (i <= captions.length) {
              timer = window.setTimeout(step, 650);
            }
          };
          timer = window.setTimeout(step, 300);
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
          {eyebrow ?? "Concept"}
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

export function PaywallMarquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card py-4 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max gap-3 [animation:limitMarquee_42s_linear_infinite] hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-sm text-red-700"
          >
            {item}
          </span>
        ))}
      </div>
      <style>{`@keyframes limitMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

export function PaywallVsTradition() {
  const ref = useRef<HTMLDivElement>(null);
  const [side, setSide] = useState<"app" | "tradition">("app");
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

  const app = {
    tag: "App paywall",
    reason: "Monetization",
    limits: [
      { x: true, t: "10 free sessions, then upgrade" },
      { x: true, t: "Premium content behind a $70 to $120 a year plan" },
      { x: true, t: "Daily quota resets at midnight in a timezone you did not pick" },
      { x: true, t: "Limit triggers regardless of whether you were actually benefiting" },
    ],
  };
  const tradition = {
    tag: "Vipassana ceiling",
    reason: "Effectiveness",
    limits: [
      { x: false, t: "2 hours a day, 1 AM and 1 PM, as a daily direction" },
      { x: false, t: "Courses free; donations only from old students, only after benefit" },
      { x: false, t: "Fixed progression: 10-day before 20-day before 30-day" },
      { x: false, t: "Stacking past the ceiling is linked to clinical adverse events" },
    ],
  };
  const shown = side === "app" ? app : tradition;
  return (
    <div ref={ref} className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          Two kinds of limit
        </div>
        <div className="flex rounded-full border border-border bg-card-hover p-1 text-xs font-medium">
          <button
            onClick={() => setSide("app")}
            className={`rounded-full px-3 py-1.5 transition-colors ${
              side === "app"
                ? "bg-accent text-card"
                : "text-muted hover:text-foreground"
            }`}
          >
            App paywall
          </button>
          <button
            onClick={() => setSide("tradition")}
            className={`rounded-full px-3 py-1.5 transition-colors ${
              side === "tradition"
                ? "bg-accent text-card"
                : "text-muted hover:text-foreground"
            }`}
          >
            Vipassana ceiling
          </button>
        </div>
      </div>
      <div
        className={`rounded-xl border p-5 transition-all duration-500 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        } ${
          side === "app"
            ? "border-red-200 bg-red-50/50"
            : "border-accent/30 bg-accent/5"
        }`}
      >
        <div className="mb-4 flex items-baseline justify-between gap-3">
          <p className="text-sm font-semibold text-foreground">{shown.tag}</p>
          <p className="text-xs uppercase tracking-widest text-muted">
            Purpose: {shown.reason}
          </p>
        </div>
        <ul className="space-y-2.5">
          {shown.limits.map((l, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-foreground">
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                  l.x
                    ? "bg-red-100 text-red-700"
                    : "bg-accent/20 text-accent"
                }`}
                aria-hidden="true"
              >
                {l.x ? (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 2L8 8M8 2L2 8"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path
                      d="M1.5 5.5L4.5 8.5L9.5 2.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
              <span>{l.t}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-5 text-xs text-muted">
        Same word, "limit," two opposite mechanics. One protects a business model. The
        other protects the practitioner.
      </p>
    </div>
  );
}

export function CeilingBars() {
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
    { label: "10 min", value: 10, note: "Below floor. Fine as a reset on chaotic days." },
    { label: "20 min", value: 20, note: "A sustainable daily floor for most people.", good: true },
    { label: "60 min", value: 60, note: "Half the tradition's recommendation.", good: true },
    {
      label: "120 min",
      value: 120,
      note: "Goenka daily recommendation. 1 hr AM + 1 hr PM.",
      peak: true,
    },
    {
      label: "180 min",
      value: 180,
      note: "Past the recommendation. Gains flatten for most practitioners.",
    },
    {
      label: "240 min+",
      value: 240,
      note: "Off-retreat, this starts to look like retreat conditions. Sleep debt compounds.",
      danger: true,
    },
  ];
  const max = 240;
  return (
    <div ref={ref} className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        Daily minutes, off-retreat
      </div>
      <div className="space-y-3">
        {rows.map((r, i) => {
          const pct = (r.value / max) * 100;
          const barClass = r.danger
            ? "from-red-400 to-red-500"
            : r.peak
              ? "from-teal-500 to-cyan-400"
              : r.good
                ? "from-accent to-accent-light"
                : "from-accent/50 to-accent/30";
          return (
            <div key={i} className="grid grid-cols-[68px_1fr] items-center gap-4">
              <p className="text-xs font-semibold text-foreground">{r.label}</p>
              <div className="relative h-8 w-full overflow-hidden rounded-md border border-border bg-card-hover">
                <div
                  className={`absolute inset-y-0 left-0 rounded-md bg-gradient-to-r transition-all duration-[1400ms] ease-out ${barClass}`}
                  style={{
                    width: drawn ? `${pct}%` : "0%",
                    transitionDelay: `${i * 110}ms`,
                  }}
                />
                <p className="relative z-10 flex h-full items-center px-3 text-xs text-foreground">
                  {r.note}
                </p>
                {r.peak && (
                  <span
                    className={`absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-accent bg-card px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-accent transition-opacity duration-700 ${
                      drawn ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ transitionDelay: `${i * 110 + 700}ms` }}
                  >
                    Ceiling
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-6 text-xs text-muted">
        The ceiling is not a rule that punishes. It is a direction the tradition has
        repeated to old students for decades, because going past it tends to stop
        helping and start hurting.
      </p>
    </div>
  );
}

export function ScheduleBeam() {
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

  const hub = "Day 4 pivot";
  const inputs = [
    { label: "New technique", detail: "Prep phase ends, main Vipassana begins" },
    { label: "Adhitthana x 3", detail: "60 min, no move, 3 sittings/day" },
    { label: "Sleep debt", detail: "4 AM wake, 5 to 6 hr sleep, ~8 to 16 hr lost" },
  ];
  const outputs = [
    { label: "Adverse-event cluster", detail: "Day 4 to Day 6 onset window" },
    { label: "Clinical case reports", detail: "Shetty and Duggal, PMC8380174" },
    { label: "Derealization / prodrome", detail: "Voices, visual distortion, no observer" },
  ];
  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-8"
    >
      <div className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        Three loads, one morning
      </div>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 md:gap-6">
        <div className="space-y-3">
          {inputs.map((n, i) => (
            <div
              key={i}
              className={`rounded-lg border border-border bg-card-hover p-3 transition-all duration-700 ${
                drawn ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 140}ms` }}
            >
              <p className="text-sm font-semibold text-foreground">{n.label}</p>
              <p className="text-xs text-muted">{n.detail}</p>
            </div>
          ))}
        </div>
        <div className="relative flex h-full items-center justify-center">
          <div className="relative z-10 rounded-2xl border border-accent bg-accent/10 px-4 py-6 text-center shadow-sm">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">
              Hub
            </p>
            <p className="mt-1 text-sm font-bold text-foreground">{hub}</p>
          </div>
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full"
          >
            <defs>
              <linearGradient id="beamL" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#14b8a6" stopOpacity="0" />
                <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 justify-between">
            <span
              className={`h-0.5 w-[44%] origin-right bg-gradient-to-r from-teal-400/0 via-teal-400/70 to-teal-400 transition-transform duration-1000 ${
                drawn ? "scale-x-100" : "scale-x-0"
              }`}
            />
            <span
              className={`h-0.5 w-[44%] origin-left bg-gradient-to-r from-teal-400 via-teal-400/70 to-teal-400/0 transition-transform duration-1000 ${
                drawn ? "scale-x-100" : "scale-x-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            />
          </div>
        </div>
        <div className="space-y-3">
          {outputs.map((n, i) => (
            <div
              key={i}
              className={`rounded-lg border border-border bg-card-hover p-3 transition-all duration-700 ${
                drawn ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 140 + 350}ms` }}
            >
              <p className="text-sm font-semibold text-foreground">{n.label}</p>
              <p className="text-xs text-muted">{n.detail}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-6 text-xs text-muted">
        The Day 4 pivot is not a random day. It is where three independent loads
        (technique, immobility, sleep debt) reach maximum at the same time.
      </p>
    </div>
  );
}

export function FourCeilings() {
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

  const cards = [
    {
      n: "01",
      t: "Daily ceiling",
      body: "2 hours per day, traditionally split 1 hour morning and 1 hour evening. The recommendation given to every old student at the close of a 10-day course.",
      detail:
        "Most people do not hit this every day. That is fine. The point is the ceiling, not the quota.",
    },
    {
      n: "02",
      t: "Sit-length ceiling",
      body: "Adhitthana, Strong Determination, is exactly 60 minutes. No eye opening, no hand movement, no leg uncrossing. Scheduled three times a day on-retreat from Day 4.",
      detail:
        "The 60-minute bound is architectural. Past that, the point of the exercise breaks.",
    },
    {
      n: "03",
      t: "Course-progression ceiling",
      body: "You cannot skip. 10-day, then Satipatthana, then 20-day, then 30-day, then 45-day, then 60-day. Each level has an attendance prerequisite, not a purchase.",
      detail:
        "The ceiling is not a subscription tier. It is the tradition saying: you are not ready yet.",
    },
    {
      n: "04",
      t: "Retreat-frequency ceiling",
      body: "Old students are encouraged to take one 10-day per year. Sitting back-to-back long courses outside the teacher-managed path is what the literature shows breaking people.",
      detail:
        "A re-up every 12 months. Like an oil change. Not a status bar you fill up.",
    },
  ];

  return (
    <div ref={ref} className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {cards.map((c, i) => (
        <div
          key={i}
          className={`group relative rounded-2xl border border-border bg-card p-6 transition-all duration-700 hover:border-accent/60 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: `${i * 120}ms` }}
        >
          <div className="absolute right-5 top-5 text-xs font-semibold uppercase tracking-widest text-accent/60">
            {c.n}
          </div>
          <h4 className="mb-2 pr-10 text-lg font-semibold text-foreground">
            {c.t}
          </h4>
          <p className="mb-3 text-sm text-muted">{c.body}</p>
          <p className="border-t border-border pt-3 text-xs text-muted">{c.detail}</p>
        </div>
      ))}
    </div>
  );
}

export function Checklist({
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
          let timer = 0;
          const step = () => {
            setActive(i);
            i += 1;
            if (i <= items.length) {
              timer = window.setTimeout(step, 360);
            }
          };
          timer = window.setTimeout(step, 300);
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

export function ProofBand() {
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
  const stats = [
    { v: 0, suffix: "", p: "$", label: "Cost of a 10-day course, return or otherwise" },
    { v: 2, suffix: " hrs", label: "Daily ceiling, 1 AM + 1 PM" },
    { v: 60, suffix: " min", label: "Adhitthana, no move, no eye-open" },
    { v: 4, suffix: "", p: "Day ", label: "Pivot day where loads stack" },
  ];
  return (
    <div
      ref={ref}
      className={`grid grid-cols-2 gap-3 rounded-2xl border border-border bg-gradient-to-br from-accent/5 via-card to-card p-5 md:grid-cols-4 md:gap-6 md:p-6 ${
        visible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-700`}
    >
      {stats.map((s, i) => (
        <div key={i} className="text-center">
          <p className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            <NumberTicker value={s.v} prefix={s.p ?? ""} suffix={s.suffix ?? ""} />
          </p>
          <p className="mt-1 text-xs leading-snug text-muted">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

export function ShimmerCta({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-accent bg-gradient-to-r from-accent to-accent-light px-6 py-3 text-sm font-semibold text-card shadow-sm transition-transform hover:scale-[1.02]"
    >
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
      />
      <svg
        aria-hidden="true"
        className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M3 8h10m0 0L8.5 3.5M13 8l-4.5 4.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
