"use client";

import { useEffect, useRef, useState } from "react";

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

// Hero concept reveal. Staggered captions that spring in one by one.
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
          The zero-app product
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

// Magic UI style animated beam. Left column inputs, single hub, right column
// outputs. SVG paths animate in on scroll.
export function PipelineBeam() {
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

  const inputs = [
    { label: "timezone" },
    { label: "morning_time" },
    { label: "evening_time" },
    { label: "session_duration" },
    { label: "is_old_student" },
  ];
  const outputs = [
    { label: "intro email (Reply-All)" },
    { label: "permanent Google Meet URL" },
    { label: "tracked /meet/<token> redirect" },
    { label: "calendar event invite" },
  ];

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-10"
    >
      <div className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-accent">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        /api/auto-match — the whole stack
      </div>
      <div className="relative grid grid-cols-[1fr_auto_1fr] gap-3 md:gap-8">
        <div className="flex flex-col gap-2 md:gap-3">
          {inputs.map((n, i) => (
            <div
              key={i}
              className={`rounded-lg border border-border bg-card-hover px-3 py-2 font-mono text-xs text-foreground transition-all duration-700 md:text-sm ${
                drawn ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 110}ms` }}
            >
              {n.label}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <div
            className={`relative flex h-40 w-40 flex-col items-center justify-center rounded-full border-2 border-accent bg-accent/10 text-center transition-all duration-700 md:h-48 md:w-48 ${
              drawn ? "scale-100 opacity-100" : "scale-75 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">
              Matcher
            </p>
            <p className="mt-1 text-sm font-semibold text-foreground md:text-base">
              SessionSlot[]
            </p>
            <p className="text-xs text-muted">greedy pair</p>
            <p className="mt-1 text-[10px] text-muted">±60 min UTC</p>
            <div className="absolute inset-0 -z-10 rounded-full bg-accent/5 blur-xl" />
          </div>
        </div>
        <div className="flex flex-col gap-2 md:gap-3">
          {outputs.map((n, i) => (
            <div
              key={i}
              className={`rounded-lg border border-accent/25 bg-accent/5 px-3 py-2 text-xs text-foreground transition-all duration-700 md:text-sm ${
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
        Everything on the right side is delivered by email and a redirect.
        No app, no account, no SDK, no push notification service.
      </p>
    </div>
  );
}

// Infinite horizontal marquee of generic "accountability app" names, dimmed
// and crossed out — the crowd this angle breaks from.
export function AppMarquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max gap-3 [animation:appMarquee_44s_linear_infinite] hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-border bg-card-hover px-4 py-1.5 text-sm text-muted"
          >
            {item}
          </span>
        ))}
      </div>
      <style>{`@keyframes appMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

// Animated Step timeline, vertical rail draws itself, each step springs in.
export function MatchTimeline({
  steps,
}: {
  steps: { title: string; body: string; code?: string }[];
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
    <div ref={ref} className="relative pl-10">
      <div
        className={`absolute left-4 top-2 w-0.5 bg-accent/40 transition-all duration-[1600ms] ease-out ${
          visible ? "h-[calc(100%-16px)]" : "h-0"
        }`}
      />
      <div className="space-y-6">
        {steps.map((s, i) => (
          <div
            key={i}
            className={`relative transition-all duration-700 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: `${250 + i * 150}ms` }}
          >
            <span className="absolute -left-10 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-accent bg-card text-xs font-semibold text-accent">
              {i + 1}
            </span>
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="mb-2 text-base font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="text-sm text-muted">{s.body}</p>
              {s.code && (
                <pre className="mt-3 overflow-x-auto rounded-md border border-border bg-card-hover p-3 font-mono text-xs text-foreground">
                  {s.code}
                </pre>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Animated BeforeAfter tab. Two panels, switch by click.
export function AppVsNotApp({
  app,
  notApp,
}: {
  app: { title: string; points: string[] };
  notApp: { title: string; points: string[] };
}) {
  const [side, setSide] = useState<"app" | "not">("not");
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="flex border-b border-border">
        <button
          type="button"
          onClick={() => setSide("app")}
          className={`flex-1 px-4 py-3 text-sm font-semibold transition-colors ${
            side === "app"
              ? "bg-card-hover text-foreground"
              : "text-muted hover:text-foreground"
          }`}
        >
          Typical accountability app
        </button>
        <button
          type="button"
          onClick={() => setSide("not")}
          className={`flex-1 px-4 py-3 text-sm font-semibold transition-colors ${
            side === "not"
              ? "bg-accent/10 text-accent"
              : "text-muted hover:text-foreground"
          }`}
        >
          Practice Buddy (no app)
        </button>
      </div>
      <div className="relative p-6 md:p-8">
        <div
          className={`transition-all duration-500 ${
            side === "app" ? "translate-y-0 opacity-100" : "pointer-events-none absolute inset-0 p-6 opacity-0 md:p-8"
          }`}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
            The app path
          </p>
          <p className="mb-5 text-base font-semibold text-foreground">{app.title}</p>
          <ul className="space-y-2">
            {app.points.map((p, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/70" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`transition-all duration-500 ${
            side === "not" ? "translate-y-0 opacity-100" : "pointer-events-none absolute inset-0 p-6 opacity-0 md:p-8"
          }`}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
            The no-app path
          </p>
          <p className="mb-5 text-base font-semibold text-foreground">{notApp.title}</p>
          <ul className="space-y-2">
            {notApp.points.map((p, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// Static comparison grid. Rows are capabilities, columns are the named apps
// plus Practice Buddy. Check / dash / cross marks.
export function AppComparison({
  rows,
}: {
  rows: {
    feature: string;
    app: "yes" | "no" | "partial";
    pb: "yes" | "no" | "partial";
  }[];
}) {
  const mark = (v: "yes" | "no" | "partial") => {
    if (v === "yes")
      return (
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent">
          <svg width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 7l3.5 3.5L12 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      );
    if (v === "no")
      return (
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-50 text-red-400">
          <svg width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      );
    return (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-muted/10 text-muted">
        <span className="h-0.5 w-2.5 rounded bg-current" />
      </span>
    );
  };
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="grid grid-cols-[minmax(0,1fr)_120px_120px] border-b border-border bg-card-hover text-xs font-semibold uppercase tracking-wider text-muted">
        <div className="px-5 py-3">Capability</div>
        <div className="border-l border-border px-4 py-3 text-center">Typical app</div>
        <div className="border-l border-border px-4 py-3 text-center text-accent">Practice Buddy</div>
      </div>
      {rows.map((r, i) => (
        <div
          key={i}
          className={`grid grid-cols-[minmax(0,1fr)_120px_120px] border-b border-border text-sm last:border-0 ${
            i % 2 === 1 ? "bg-card-hover/40" : ""
          }`}
        >
          <div className="px-5 py-3 text-foreground">{r.feature}</div>
          <div className="flex items-center justify-center border-l border-border px-4 py-3">
            {mark(r.app)}
          </div>
          <div className="flex items-center justify-center border-l border-border px-4 py-3">
            {mark(r.pb)}
          </div>
        </div>
      ))}
    </div>
  );
}

// Bento grid: four mechanics behind the matcher, each a card with varying
// sizes. Card 1 is the anchor fact (wide), cards 2/3 are square, card 4 is
// wide under them.
export function MechanicsBento() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-card to-accent-light/5 p-6 md:col-span-2">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
          Anchor fact
        </p>
        <h3 className="mb-3 text-xl font-bold text-foreground">
          Sixty-minute UTC hard filter, at the <GradientWord>session</GradientWord> level
        </h3>
        <p className="text-sm text-muted">
          The matcher does not pair people. It pairs sessions. A &ldquo;Twice a
          day&rdquo; sitter generates two <code className="rounded bg-card-hover px-1 font-mono text-xs">SessionSlot</code>
          {" "}objects, morning and evening, each keyed as
          {" "}<code className="rounded bg-card-hover px-1 font-mono text-xs">{"`${personId}:${session}`"}</code>.
          A pair is viable only when{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">timeDiff(a, b) &le; 60</code>
          {" "}UTC minutes. Slots are then consumed greedily by a sort that puts
          &ldquo;both ready&rdquo; first, then &ldquo;both old students,&rdquo;
          then same duration, then smallest time gap. One person can end up with
          two different buddies.
        </p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">
          Guard
        </p>
        <h3 className="mb-2 text-base font-bold text-foreground">
          Serial-ghoster cap
        </h3>
        <p className="text-sm text-muted">
          After{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">contact_count &ge; 10</code>
          {" "}the person is quietly dropped from the eligible pool. No email is
          sent. No waitlist lifetime. No punishment points.
        </p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">
          Anti-spam
        </p>
        <h3 className="mb-2 text-base font-bold text-foreground">
          24-hour cooldown before the first match
        </h3>
        <p className="text-sm text-muted">
          A pending user is not matched until they have been in the pool for at
          least one day. That is how long the operator takes to eyeball the
          signup and catch a bot or a duplicate.
        </p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-6 md:col-span-3">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">
          Return path
        </p>
        <h3 className="mb-2 text-base font-bold text-foreground">
          Declined matches cost nothing and prior pairs are blocked forever
        </h3>
        <p className="text-sm text-muted">
          When a match expires or is declined, both people go back to the pool.
          A{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">blockedPairs</code>
          {" "}set rebuilt each cron run guarantees the same two people will not
          be offered to each other again. If a match confirms, a Google Calendar
          event is created and a permanent Meet URL is issued through{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">createMeetEvent()</code>.
          The URL does not change day to day.
        </p>
      </div>
    </div>
  );
}
