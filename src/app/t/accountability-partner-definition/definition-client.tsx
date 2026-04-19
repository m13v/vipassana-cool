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
  duration = 1500,
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

// Video-style hero. Title + subtitle + captions fade in on a timer.
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
          }, 220);
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
          operational definition
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

// Animated beam diagram. Two candidate inputs flow through 7 predicate gates
// into a single "accountability partner" output. Beams draw in on scroll.
export function PredicateBeam() {
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

  const gates = [
    "not unsubscribed",
    "contact_count < 2",
    "signed up > 24h",
    "not prior match",
    "no active slot",
    "UTC diff ≤ 60m",
    "matcher picks pair",
  ];

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-10"
    >
      <div className="mb-6 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.25em] text-accent">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        two strangers → one accountability partner
      </div>

      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 md:gap-8">
        <div className="flex flex-col gap-4">
          <div
            className={`rounded-lg border border-accent/30 bg-accent/10 px-3 py-2 text-xs font-mono text-foreground transition-all duration-700 ${
              drawn ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
            }`}
          >
            candidate A
            <div className="text-[10px] text-muted">
              morning 06:30 UTC+1
            </div>
          </div>
          <div
            className={`rounded-lg border border-accent/30 bg-accent/10 px-3 py-2 text-xs font-mono text-foreground transition-all duration-700 ${
              drawn ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
            }`}
            style={{ transitionDelay: "120ms" }}
          >
            candidate B
            <div className="text-[10px] text-muted">
              morning 06:00 UTC
            </div>
          </div>
        </div>

        <div className="relative flex flex-col gap-2">
          {gates.map((g, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 transition-all duration-700 ${
                drawn ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-card font-mono text-[10px] font-semibold text-accent">
                {i + 1}
              </span>
              <div className="relative h-[2px] flex-1 overflow-hidden rounded-full bg-border">
                <span
                  className={`absolute inset-y-0 left-0 bg-accent transition-all ease-out ${
                    drawn ? "w-full" : "w-0"
                  }`}
                  style={{
                    transitionDuration: "800ms",
                    transitionDelay: `${260 + i * 100}ms`,
                  }}
                />
              </div>
              <span className="shrink-0 rounded-md border border-border bg-card-hover px-2 py-1 font-mono text-[10px] text-foreground md:text-[11px]">
                {g}
              </span>
            </div>
          ))}
        </div>

        <div
          className={`rounded-xl border border-accent/40 bg-gradient-to-br from-accent/10 to-accent-light/5 px-3 py-4 text-center text-xs font-semibold text-foreground transition-all duration-700 ${
            drawn ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <span className="block font-mono uppercase tracking-widest text-[9px] text-accent">
            output
          </span>
          accountability
          <br />
          partner
          <div className="mt-1 text-[10px] font-mono text-muted">
            status=&lsquo;pending&rsquo;
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-muted">
        If any one gate returns false, the pair drops out. The word
        &ldquo;accountability partner&rdquo; is what the algorithm calls
        whoever survives every gate.
      </p>
    </div>
  );
}

// Dictionary definition vs the actual code that admits two people to the
// "accountability partner" relation. Click-to-toggle.
export function DefinitionCompare() {
  const [side, setSide] = useState<"dictionary" | "code">("code");

  const dictionary = `// The definition every top-10 SERP gives
"An accountability partner is someone who
 supports another person to keep a
 commitment or maintain progress on a
 desired goal."

// Source: Wikipedia, paraphrased on BetterUp,
// Indeed, MentorLoft, Columbia GSAS, and most
// of the results ranking for this keyword.

// Problems:
// - Can the definition be evaluated by a program? No.
// - Does it tell you if person X is a partner? No.
// - What are the boundary conditions?            No.`;

  const code = `// The operational definition from
// src/app/api/auto-match/route.ts
function isAccountabilityPartner(a, b) {
  // (1) both subscribed to the thread
  if (a.unsubscribed || b.unsubscribed) return false;

  // (2) neither has burned two intros already
  if (a.contact_count >= 2) return false;
  if (b.contact_count >= 2) return false;

  // (3) at least 24 hours since signup
  //     (unless status = 'ready')
  if (now - a.created_at < DAY_MS && a.status !== "ready")
    return false;
  if (now - b.created_at < DAY_MS && b.status !== "ready")
    return false;

  // (4) they have not already been matched
  if (priorMatchedIds(a).includes(b.id)) return false;

  // (5) neither session slot is already in use
  if (activeMatchForSession(a, slotA)) return false;
  if (activeMatchForSession(b, slotB)) return false;

  // (6) UTC session times agree within 60 minutes
  if (timeDiff(a.utc, b.utc) > 60) return false;

  // (7) the greedy scorer has not allocated
  //     either slot to a better candidate
  return scorer.picks(a, b);
}`;

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="flex border-b border-border">
        <button
          type="button"
          onClick={() => setSide("dictionary")}
          className={`flex-1 px-4 py-3 text-sm font-semibold transition-colors ${
            side === "dictionary"
              ? "bg-card-hover text-foreground"
              : "text-muted hover:text-foreground"
          }`}
        >
          Dictionary definition
        </button>
        <button
          type="button"
          onClick={() => setSide("code")}
          className={`flex-1 px-4 py-3 text-sm font-semibold transition-colors ${
            side === "code"
              ? "bg-accent/10 text-accent"
              : "text-muted hover:text-foreground"
          }`}
        >
          Operational definition
        </button>
      </div>
      <pre className="overflow-x-auto bg-card-hover/40 p-5 font-mono text-[11px] leading-relaxed text-foreground md:text-xs">
        <code>{side === "dictionary" ? dictionary : code}</code>
      </pre>
      <div className="border-t border-border bg-card px-5 py-3 text-xs text-muted">
        {side === "dictionary" ? (
          <span>
            A role description. Tells you what an accountability partner is
            for. Does not tell you whether any particular person qualifies.
          </span>
        ) : (
          <span>
            A total function. Takes two people. Returns a boolean. Pseudocode
            reading of{" "}
            <code className="rounded bg-card-hover px-1 font-mono">
              /api/auto-match/route.ts
            </code>
            , lines 74 through 203.
          </span>
        )}
      </div>
    </div>
  );
}

// Marquee of the seven predicates as short code-style chips.
export function PredicateMarquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max gap-3 [animation:defMarquee_42s_linear_infinite] hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-accent/25 bg-accent/5 px-4 py-1.5 font-mono text-xs text-foreground"
          >
            {item}
          </span>
        ))}
      </div>
      <style>{`@keyframes defMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

// Bento grid of the seven predicates, each with its source-line citation.
export function PredicateBento() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-card to-accent-light/5 p-6 md:col-span-2">
        <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-accent">
          anchor predicate
        </p>
        <h3 className="mb-3 text-xl font-bold text-foreground">
          The ±60 minute UTC tolerance is the one concrete number nobody else
          names
        </h3>
        <p className="mb-3 text-sm text-muted">
          At{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            src/app/api/auto-match/route.ts:164
          </code>
          , the line{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            if (diff &gt; 60) continue;
          </code>{" "}
          throws out any candidate pair whose scheduled sit times drift more
          than an hour apart in UTC. That number, 60, is the operational edge
          of what the word &ldquo;accountability partner&rdquo; means on this
          site. Sit at 6:30 in London and 7:10 in Paris? Partner. Sit at 5:00
          and 7:01? Not a partner. The word collapses to a single integer and
          a comparison operator.
        </p>
        <p className="text-sm text-muted">
          One person can occupy two slots, morning and evening, and gets a
          fresh 60-minute window for each. That is why the matcher iterates
          over{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            slots
          </code>
          , not users (line 151).
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6">
        <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-muted">
          predicate 2
        </p>
        <h3 className="mb-2 text-base font-bold text-foreground">
          Two-strike rule on prior intros
        </h3>
        <p className="text-sm text-muted">
          Line 81:{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            if (c.contact_count &gt;= 2) continue;
          </code>
          . Anyone who has received two intros without replying is out of the
          pool. The comment in the source calls this the{" "}
          <em>serial ghoster</em> threshold.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6">
        <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-muted">
          predicate 3
        </p>
        <h3 className="mb-2 text-base font-bold text-foreground">
          24-hour cooldown from signup
        </h3>
        <p className="text-sm text-muted">
          Lines 88 to 90. A fresh row has to sit in{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            waitlist_entries
          </code>{" "}
          for 24 hours before the matcher considers it, so the operator can
          spot-check the signup. Status{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            &quot;ready&quot;
          </code>{" "}
          jumps the cooldown.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6">
        <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-muted">
          predicate 4
        </p>
        <h3 className="mb-2 text-base font-bold text-foreground">
          No prior match between the pair
        </h3>
        <p className="text-sm text-muted">
          Line 242:{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            if (priorIds.includes(personB.id))
          </code>{" "}
          skips anyone A has already been paired with, including matches that
          expired. Accountability is a new-bond relation, not a retry.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6">
        <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-muted">
          predicate 5
        </p>
        <h3 className="mb-2 text-base font-bold text-foreground">
          No active match on that session slot
        </h3>
        <p className="text-sm text-muted">
          Lines 229 to 238 call{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            getActiveMatchForSession(personA.id, slotA.session)
          </code>
          . A person sitting twice a day can have a different partner for
          morning and evening; each slot carries its own accountability
          relation.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 md:col-span-3">
        <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-muted">
          predicate 6 and 7
        </p>
        <h3 className="mb-2 text-base font-bold text-foreground">
          Unsubscribed filter, plus the scorer that breaks ties
        </h3>
        <p className="text-sm text-muted">
          Line 74 drops anyone whose{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            unsubscribed
          </code>{" "}
          flag is true before the outer loop even sees them; by the time the
          pair is evaluated, both have an open relationship with the email
          thread. Lines 183 to 189 then rank the surviving pairs in priority
          order: status=ready &gt; both old students &gt; matching session
          duration &gt; smallest UTC diff. The greedy loop at 195 to 203
          locks in the top-ranked pair, burns both session slots, and moves
          on. The word &ldquo;accountability partner&rdquo; is whoever the
          scorer admitted first.
        </p>
      </div>
    </div>
  );
}

// Side-by-side comparison: dictionary role vs operational predicate.
export function DefinitionTable({
  rows,
}: {
  rows: { attribute: string; dictionary: string; operational: string }[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)_minmax(0,1fr)] border-b border-border bg-card-hover text-xs font-semibold uppercase tracking-wider text-muted">
        <div className="px-4 py-3 md:px-5">Attribute</div>
        <div className="border-l border-border px-4 py-3 md:px-5">
          Dictionary definition
        </div>
        <div className="border-l border-border px-4 py-3 text-accent md:px-5">
          Operational definition
        </div>
      </div>
      {rows.map((r, i) => (
        <div
          key={i}
          className={`grid grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)_minmax(0,1fr)] border-b border-border text-sm last:border-0 ${
            i % 2 === 1 ? "bg-card-hover/40" : ""
          }`}
        >
          <div className="px-4 py-3 font-semibold text-foreground md:px-5">
            {r.attribute}
          </div>
          <div className="border-l border-border px-4 py-3 text-muted md:px-5">
            {r.dictionary}
          </div>
          <div className="border-l border-border px-4 py-3 text-foreground md:px-5">
            {r.operational}
          </div>
        </div>
      ))}
    </div>
  );
}

// Vertical animated timeline of the seven predicates in evaluation order.
export function PredicateTimeline({
  steps,
}: {
  steps: { title: string; body: string; code?: string; line?: string }[];
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
      { threshold: 0.12 },
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
      <div className="space-y-5">
        {steps.map((s, i) => (
          <div
            key={i}
            className={`relative transition-all duration-700 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: `${200 + i * 120}ms` }}
          >
            <span className="absolute -left-10 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-accent bg-card text-xs font-semibold text-accent">
              {i + 1}
            </span>
            <div className="rounded-xl border border-border bg-card p-5">
              {s.line && (
                <p className="mb-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-accent">
                  {s.line}
                </p>
              )}
              <h3 className="mb-2 text-base font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="text-sm text-muted">{s.body}</p>
              {s.code && (
                <pre className="mt-3 overflow-x-auto rounded-md border border-border bg-card-hover p-3 font-mono text-[11px] text-foreground">
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
