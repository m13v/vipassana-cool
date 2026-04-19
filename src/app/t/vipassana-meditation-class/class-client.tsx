"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export function GradientWord({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
      {children}
    </span>
  );
}

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

// Video-style hero reveal: staggered captions fade in on a timer.
export function ClassConceptReveal({
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
              timer = window.setTimeout(step, 640);
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
        <div className="mb-5 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.25em] text-accent">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-accent" />
          the class that is not a class
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

// Infinite horizontal marquee of course-type strings. Fades on edges. Pauses on hover.
export function TypeMarquee({ items }: { items: string[] }) {
  const doubled = useMemo(() => [...items, ...items, ...items], [items]);
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-card py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-card to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-card to-transparent" />
      <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-4 group-hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 font-mono text-xs text-foreground"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
      `}</style>
    </div>
  );
}

// "Inputs → system → outputs" animated beam. Left column: search queries a
// beginner types. Hub: the dhamma.org search API. Right column: what the
// beginner can actually attend.
export function ClassBeam() {
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

  const queries = [
    '"vipassana meditation class near me"',
    '"vipassana class online"',
    '"drop in vipassana class"',
    '"weekly vipassana class"',
  ];
  const outputs = [
    { label: "10-day residential course", eligible: "all students" },
    { label: "1-day old student course", eligible: "old students only" },
    { label: "4-hour group sitting", eligible: "old students only" },
    { label: "Satipatthana / 20-day", eligible: "experienced old students" },
  ];

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-10"
    >
      <div className="mb-6 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.25em] text-accent">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        the routing of a beginner query
      </div>
      <div className="relative grid grid-cols-3 items-center gap-4 md:gap-8">
        <div className="space-y-3">
          {queries.map((q, i) => (
            <div
              key={q}
              className={`rounded-lg border border-accent/20 bg-accent/5 p-3 text-[11px] text-foreground transition-all duration-700 md:text-xs ${
                visible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="mb-1 font-mono text-[9px] uppercase tracking-widest text-muted">
                query
              </div>
              <div className="font-mono">{q}</div>
            </div>
          ))}
        </div>

        <div className="relative flex h-full items-center justify-center">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 200 300"
            preserveAspectRatio="none"
          >
            {[0, 1, 2, 3].map((i) => (
              <g key={`l-${i}`}>
                <path
                  d={`M 0 ${38 + i * 74} Q 100 ${38 + i * 74} 100 150`}
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth="1.25"
                  strokeDasharray="220"
                  strokeDashoffset={visible ? 0 : 220}
                  style={{
                    transition: "stroke-dashoffset 1200ms ease",
                    transitionDelay: `${i * 150 + 300}ms`,
                    opacity: 0.45,
                  }}
                />
              </g>
            ))}
            {[0, 1, 2, 3].map((i) => (
              <g key={`r-${i}`}>
                <path
                  d={`M 100 150 Q 100 ${38 + i * 74} 200 ${38 + i * 74}`}
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth="1.25"
                  strokeDasharray="220"
                  strokeDashoffset={visible ? 0 : 220}
                  style={{
                    transition: "stroke-dashoffset 1200ms ease",
                    transitionDelay: `${i * 150 + 800}ms`,
                    opacity: 0.45,
                  }}
                />
              </g>
            ))}
          </svg>
          <div
            className={`relative z-10 flex flex-col items-center justify-center rounded-2xl border border-accent/40 bg-accent/10 px-4 py-5 text-center shadow-sm transition-all duration-700 md:px-5 md:py-6 ${
              visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="mb-1 font-mono text-[9px] uppercase tracking-widest text-accent">
              routes through
            </div>
            <div className="font-mono text-xs font-semibold text-foreground md:text-sm">
              dhamma.org
            </div>
            <div className="font-mono text-[10px] text-muted">
              /en/courses/do_search
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {outputs.map((o, i) => (
            <div
              key={o.label}
              className={`rounded-lg border border-border bg-background p-3 text-[11px] text-foreground transition-all duration-700 md:text-xs ${
                visible ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 120 + 900}ms` }}
            >
              <div className="mb-1 font-mono text-[9px] uppercase tracking-widest text-muted">
                format
              </div>
              <div className="font-mono">{o.label}</div>
              <div
                className={`mt-1 font-mono text-[9px] ${
                  o.eligible === "all students"
                    ? "text-emerald-600"
                    : "text-red-500"
                }`}
              >
                {o.eligible}
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-muted">
        Every &ldquo;vipassana meditation class&rdquo; query eventually lands at
        a dhamma.org course page. The structural surprise is on the right.
      </p>
    </div>
  );
}

// Terminal output panel. Types line by line on scroll-in.
export function TerminalBox({
  command,
  lines,
}: {
  command: string;
  lines: { text: string; kind?: "out" | "info" | "ok" | "dim" }[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          let i = 0;
          const tick = () => {
            i += 1;
            setShown(i);
            if (i <= lines.length) window.setTimeout(tick, 180);
          };
          tick();
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [lines.length]);

  const colorFor = (k?: string) => {
    if (k === "ok") return "text-emerald-500";
    if (k === "info") return "text-sky-500";
    if (k === "dim") return "text-muted";
    return "text-foreground";
  };

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-2xl border border-border bg-[#111111] font-mono text-[12px] leading-relaxed shadow-sm"
    >
      <div className="flex items-center gap-1.5 border-b border-zinc-800 bg-zinc-900 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-red-400/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
        <span className="ml-3 text-[10px] uppercase tracking-widest text-zinc-500">
          scripts/dhamma-courses.mjs
        </span>
      </div>
      <div className="px-4 py-5">
        <div className="mb-2 text-emerald-400">
          <span className="mr-2 text-zinc-500">$</span>
          {command}
        </div>
        <div className="space-y-1">
          {lines.map((l, i) => (
            <div
              key={i}
              className={`${colorFor(l.kind)} transition-opacity duration-300 ${
                shown > i ? "opacity-100" : "opacity-0"
              }`}
            >
              {l.text}
            </div>
          ))}
          <div className="inline-block h-4 w-2 animate-pulse bg-emerald-400/80 align-middle" />
        </div>
      </div>
    </div>
  );
}

// Side-by-side comparison of the two traditions that own the phrase
// "vipassana meditation class."
export function TraditionCompare() {
  const rows = [
    {
      label: "format",
      goenka: "10-day residential retreat; 1-day, 3-day, Satipatthana old-student courses; 4-hour group sits",
      insight: "drop-in weekly class, half-day, weekend non-residential, some residential retreats",
    },
    {
      label: "open to first-timers?",
      goenka: "Only the 10-day course. Everything else is gated on prior completion.",
      insight: "Yes. Weekly sits and intro classes explicitly welcome beginners.",
    },
    {
      label: "cost",
      goenka: "No payment. Donations from past students only.",
      insight: "Sliding-scale fees and donation-based classes, depending on center.",
    },
    {
      label: "location",
      goenka: "A Dhamma center or off-site course venue. You move in.",
      insight: "Meditation halls in cities (IMS in Barre, Spirit Rock in Marin, Cambridge Insight, etc).",
    },
    {
      label: "teacher",
      goenka: "S. N. Goenka on audio / video; assistant teachers on site.",
      insight: "A named living teacher (Joseph Goldstein, Sharon Salzberg, Jack Kornfield, many others).",
    },
    {
      label: "silence",
      goenka: "Noble silence for 9 days. Questions in private, briefly.",
      insight: "Most classes are talkative. Some retreats are silent.",
    },
    {
      label: "commitment at signup",
      goenka: "Full 10 days, phone surrendered, no reading or writing.",
      insight: "A two-hour class on a Tuesday night.",
    },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="grid grid-cols-3 border-b border-border bg-accent/5 p-4 text-sm font-semibold">
        <div className="text-muted">dimension</div>
        <div className="text-foreground">Goenka &ldquo;course&rdquo;</div>
        <div className="text-foreground">Insight Meditation &ldquo;class&rdquo;</div>
      </div>
      {rows.map((r, i) => (
        <div
          key={r.label}
          className={`grid grid-cols-3 gap-2 p-4 text-sm ${
            i < rows.length - 1 ? "border-b border-border" : ""
          }`}
        >
          <div className="font-mono text-xs uppercase tracking-wider text-accent">
            {r.label}
          </div>
          <div className="text-muted">{r.goenka}</div>
          <div className="text-muted">{r.insight}</div>
        </div>
      ))}
    </div>
  );
}

// Eligibility checklist: which formats are open to someone who has never
// sat a 10-day course.
export function EligibilityList() {
  const items = [
    {
      label: "10-Day Course",
      open: true,
      note: "The only Goenka format that admits first-time students. Silent, residential, ten full days.",
    },
    {
      label: "1-Day Old Student Course",
      open: false,
      note: "raw_course_type = 1-DayOSC. Closed unless you have completed a 10-day course.",
    },
    {
      label: "3-Day Old Student Course",
      open: false,
      note: "Same tradition. Closed to first-timers.",
    },
    {
      label: "4-hour Group Sitting",
      open: false,
      note: "raw_course_type = 4-hrOSC. Old students only, at a center or approved home.",
    },
    {
      label: "Satipatthana Sutta Course",
      open: false,
      note: "For students who have completed three 10-day courses and maintained two years of daily sitting.",
    },
    {
      label: "20-Day, 30-Day, 45-Day, 60-Day",
      open: false,
      note: "Long courses for deeply committed old students. Application-reviewed.",
    },
    {
      label: "Service Period",
      open: false,
      note: "Volunteer period. You cook and clean for a course. Old students only.",
    },
    {
      label: "Children / Teen Anapana",
      open: true,
      note: "Open to anyone aged 8 to 18. Teaches Anapana only, not Vipassana.",
    },
  ];
  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="mb-5 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.25em] text-accent">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        who can attend each format
      </div>
      <ul className="space-y-3">
        {items.map((it, i) => (
          <li
            key={it.label}
            className="grid grid-cols-[auto_1fr] gap-3 rounded-lg border border-border bg-background p-3"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                it.open ? "bg-emerald-500/15 text-emerald-600" : "bg-red-500/10 text-red-500"
              }`}
              aria-hidden="true"
            >
              {it.open ? (
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7.5L5.5 11L12 3.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M1 1L9 9M9 1L1 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold text-foreground">{it.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest ${
                    it.open
                      ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
                      : "bg-red-50 text-red-700 ring-1 ring-red-200"
                  }`}
                >
                  {it.open ? "new students ok" : "old students only"}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">{it.note}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Live-snapshot table pulled from the scraper run on the anchor-fact date.
export function SnapshotTable({
  rows,
}: {
  rows: { type: string; count: number; eligible: "new+old" | "old only" | "kids" | "volunteers" }[];
}) {
  const total = rows.reduce((s, r) => s + r.count, 0);
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="flex items-baseline justify-between border-b border-border bg-accent/5 p-4">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
            snapshot from scripts/dhamma-courses.mjs
          </div>
          <div className="text-sm font-semibold text-foreground">
            Next {total} scheduled events worldwide (run 2026-04-19)
          </div>
        </div>
        <div className="text-right text-sm text-muted">
          Source:
          <br />
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            /en/courses/do_search
          </code>
        </div>
      </div>
      <table className="w-full text-left text-sm">
        <thead className="border-b border-border bg-background text-xs uppercase tracking-widest text-muted">
          <tr>
            <th className="p-3">raw_course_type</th>
            <th className="p-3">count</th>
            <th className="p-3">open to</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={r.type}
              className={i < rows.length - 1 ? "border-b border-border" : ""}
            >
              <td className="p-3 font-mono text-foreground">{r.type}</td>
              <td className="p-3 font-mono text-foreground tabular-nums">{r.count}</td>
              <td className="p-3">
                <span
                  className={`inline-flex items-center rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest ${
                    r.eligible === "new+old"
                      ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
                      : r.eligible === "kids"
                      ? "bg-sky-50 text-sky-700 ring-1 ring-sky-200"
                      : r.eligible === "volunteers"
                      ? "bg-amber-50 text-amber-700 ring-1 ring-amber-200"
                      : "bg-red-50 text-red-700 ring-1 ring-red-200"
                  }`}
                >
                  {r.eligible}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Decision tree on how a real beginner should route themselves.
export function DecisionFlow() {
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
      q: "Have you completed a 10-day Goenka course?",
      yes: "You are an old student. Almost every scheduled &lsquo;class&rsquo; at a dhamma.org center is open to you. Filter the schedule by 1-Day, 4-hour sittings, 3-day, Satipatthana, or longer courses.",
      no: "Continue.",
    },
    {
      q: "Do you want the Goenka method specifically?",
      yes: "There is no drop-in class. Apply for the next 10-day course at dhamma.org. Silent, residential, free. That is the doorway.",
      no: "Continue.",
    },
    {
      q: "Do you want something class-shaped you can walk into tonight?",
      yes: "Look at Insight Meditation centers: Spirit Rock, IMS Barre, Cambridge Insight, New York Insight. They are a different lineage but share the word &lsquo;vipassana.&rsquo; Weekly, non-residential, open to beginners.",
      no: "A weekly group sitting at a Goenka home group is not a class for beginners. See &lsquo;Who can attend&rsquo; above.",
    },
  ];

  return (
    <div
      ref={ref}
      className="relative rounded-2xl border border-border bg-card p-6 md:p-10"
    >
      <div className="mb-6 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.25em] text-accent">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        decision flow for a beginner
      </div>
      <div className="space-y-6">
        {steps.map((s, i) => (
          <div
            key={i}
            className={`rounded-xl border border-accent/20 bg-accent/5 p-5 transition-all duration-700 ${
              drawn ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
            style={{ transitionDelay: `${i * 180}ms` }}
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent font-mono text-xs font-bold text-background">
                {i + 1}
              </span>
              <p className="text-base font-semibold text-foreground">{s.q}</p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-emerald-200 bg-emerald-50/60 p-3 text-sm text-emerald-900">
                <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-emerald-600">
                  if yes
                </p>
                <p dangerouslySetInnerHTML={{ __html: s.yes }} />
              </div>
              <div className="rounded-lg border border-border bg-background p-3 text-sm text-muted">
                <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-accent">
                  if no
                </p>
                <p dangerouslySetInnerHTML={{ __html: s.no }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
