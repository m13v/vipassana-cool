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

type DangerCategory = {
  id: string;
  name: string;
  baseRate: string;
  baseRateValue: number;
  severity: "low" | "moderate" | "high" | "rare-but-severe";
  mechanism: string;
  screening: "explicit" | "partial" | "missing";
  shortAction: string;
};

const SEVERITY_TINTS: Record<DangerCategory["severity"], string> = {
  low: "bg-emerald-50 border-emerald-200 text-emerald-900",
  moderate: "bg-amber-50 border-amber-200 text-amber-900",
  high: "bg-orange-50 border-orange-200 text-orange-900",
  "rare-but-severe": "bg-rose-50 border-rose-200 text-rose-900",
};

const SEVERITY_LABEL: Record<DangerCategory["severity"], string> = {
  low: "low severity",
  moderate: "moderate severity",
  high: "high severity",
  "rare-but-severe": "rare but severe",
};

const SCREENING_DOT: Record<DangerCategory["screening"], string> = {
  explicit: "bg-emerald-500",
  partial: "bg-amber-500",
  missing: "bg-rose-500",
};

const SCREENING_LABEL: Record<DangerCategory["screening"], string> = {
  explicit: "screened on form",
  partial: "partially screened",
  missing: "not screened",
};

export function DangerMatrix({ categories }: { categories: DangerCategory[] }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {categories.map((c) => {
        const open = active === c.id;
        return (
          <button
            key={c.id}
            type="button"
            onClick={() => setActive(open ? null : c.id)}
            className={`w-full rounded-xl border p-5 text-left transition-all ${
              open
                ? "border-accent/40 bg-accent/5 shadow-sm"
                : "border-border bg-card hover:border-accent/30"
            }`}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div className="flex items-baseline gap-3">
                <span className="text-xs font-mono text-muted">
                  {String(categories.indexOf(c) + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-semibold text-foreground">
                  {c.name}
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`rounded-full border px-2 py-0.5 text-[11px] font-medium ${SEVERITY_TINTS[c.severity]}`}
                >
                  {SEVERITY_LABEL[c.severity]}
                </span>
                <span className="flex items-center gap-1.5 text-[11px] text-muted">
                  <span
                    className={`inline-block h-1.5 w-1.5 rounded-full ${SCREENING_DOT[c.screening]}`}
                  />
                  {SCREENING_LABEL[c.screening]}
                </span>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-xs text-muted sm:grid-cols-4">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted/70">
                  Base rate
                </div>
                <div className="mt-0.5 font-medium text-foreground">
                  {c.baseRate}
                </div>
              </div>
              <div className="col-span-1 sm:col-span-3">
                <div className="text-[10px] uppercase tracking-widest text-muted/70">
                  Same-day action
                </div>
                <div className="mt-0.5 font-medium text-foreground">
                  {c.shortAction}
                </div>
              </div>
            </div>

            {open && (
              <div className="mt-4 rounded-lg bg-background/60 p-4 text-sm text-muted">
                <div className="mb-1 text-[11px] uppercase tracking-widest text-accent">
                  How the course produces this
                </div>
                <p>{c.mechanism}</p>
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}

export function ScreeningAudit({
  rows,
}: {
  rows: { question: string; covered: boolean; risk: string }[];
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <div className="grid grid-cols-12 gap-2 border-b border-border bg-background/50 px-5 py-3 text-[11px] font-medium uppercase tracking-widest text-muted">
        <div className="col-span-7">Risk factor in the literature</div>
        <div className="col-span-2">On the form?</div>
        <div className="col-span-3">Why it matters</div>
      </div>
      <div className="divide-y divide-border">
        {rows.map((r, i) => (
          <div
            key={i}
            className="grid grid-cols-12 items-start gap-2 px-5 py-4 text-sm"
          >
            <div className="col-span-7 text-foreground">{r.question}</div>
            <div className="col-span-2">
              {r.covered ? (
                <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-50 px-2 py-1 text-[11px] font-medium text-emerald-800">
                  <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                    <path
                      d="M2 5l2 2 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Yes
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-md bg-rose-50 px-2 py-1 text-[11px] font-medium text-rose-800">
                  <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                    <path
                      d="M2 2l6 6M8 2l-6 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  No
                </span>
              )}
            </div>
            <div className="col-span-3 text-xs text-muted">{r.risk}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DecisionFork({
  branches,
}: {
  branches: { label: string; verdict: string; tone: "go" | "pause" | "defer" }[];
}) {
  const tone: Record<string, string> = {
    go: "border-emerald-200 bg-emerald-50",
    pause: "border-amber-200 bg-amber-50",
    defer: "border-rose-200 bg-rose-50",
  };
  const dot: Record<string, string> = {
    go: "bg-emerald-500",
    pause: "bg-amber-500",
    defer: "bg-rose-500",
  };
  const verdictLabel: Record<string, string> = {
    go: "Likely fine to sit",
    pause: "Talk to a clinician first",
    defer: "Defer until something else changes",
  };

  return (
    <div className="grid gap-3 md:grid-cols-3">
      {branches.map((b, i) => (
        <div
          key={i}
          className={`rounded-xl border p-5 ${tone[b.tone]}`}
        >
          <div className="mb-3 flex items-center gap-2">
            <span className={`inline-block h-2 w-2 rounded-full ${dot[b.tone]}`} />
            <span className="text-[11px] font-medium uppercase tracking-widest text-foreground/80">
              {verdictLabel[b.tone]}
            </span>
          </div>
          <p className="mb-3 text-sm font-semibold text-foreground">{b.label}</p>
          <p className="text-xs text-foreground/70">{b.verdict}</p>
        </div>
      ))}
    </div>
  );
}

export function ActionChain({
  steps,
}: {
  steps: { who: string; what: string; when: string }[];
}) {
  return (
    <ol className="space-y-3">
      {steps.map((s, i) => (
        <li
          key={i}
          className="flex gap-4 rounded-xl border border-border bg-card p-5"
        >
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-semibold text-accent">
            {i + 1}
          </div>
          <div className="flex-1">
            <div className="mb-1 flex flex-wrap items-baseline gap-2">
              <span className="text-sm font-semibold text-foreground">
                {s.who}
              </span>
              <span className="text-[11px] uppercase tracking-widest text-muted">
                {s.when}
              </span>
            </div>
            <p className="text-sm text-muted">{s.what}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
