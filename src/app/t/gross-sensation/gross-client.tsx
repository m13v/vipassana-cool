"use client";

import { Fragment, useEffect, useRef, useState } from "react";

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

type HeroFrame = {
  label: string;
  title: string;
  body: string;
};

const heroFrames: HeroFrame[] = [
  {
    label: "Frame 1",
    title: "oḷārika vedanā",
    body: "Pali. Literal meaning: coarse-grained feeling.",
  },
  {
    label: "Frame 2",
    title: "Not a pain word.",
    body: "A resolution word. Paired with sukhuma (fine-grained).",
  },
  {
    label: "Frame 3",
    title: "Translated as gross.",
    body: "In Goenka's English, oḷārika became gross. The translation kept the structure and lost the connotation.",
  },
  {
    label: "Frame 4",
    title: "Where first-course students go wrong.",
    body: "They read gross as bad, chase subtle as good, and spend ten days fighting the technique instead of doing it.",
  },
  {
    label: "Frame 5",
    title: "This page is the correction.",
    body: "Six courses, three centers, one persistent mistake — and the map of where gross sensations reliably live.",
  },
];

export function HeroReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let interval: number | null = null;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          interval = window.setInterval(() => {
            setIdx((i) => (i + 1) % heroFrames.length);
          }, 2600);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => {
      if (interval !== null) window.clearInterval(interval);
      obs.disconnect();
    };
  }, []);

  const frame = heroFrames[idx];
  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/10 via-card to-card p-8 shadow-sm md:p-12"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent-light/15 blur-3xl" />
      <div className="relative">
        <div className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-accent" />
          Concept reel
          <span className="text-border">/</span>
          <span className="tabular-nums text-muted">
            {String(idx + 1).padStart(2, "0")} / {String(heroFrames.length).padStart(2, "0")}
          </span>
        </div>
        <div className="min-h-[180px] md:min-h-[160px]">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
            {frame.label}
          </p>
          <h2
            key={`t-${idx}`}
            className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            style={{ animation: "fadeSlideUp 620ms ease-out" }}
          >
            {frame.title}
          </h2>
          <p
            key={`b-${idx}`}
            className="max-w-2xl text-base text-muted md:text-lg"
            style={{ animation: "fadeSlideUp 780ms ease-out" }}
          >
            {frame.body}
          </p>
        </div>
        <div className="mt-8 flex gap-1.5">
          {heroFrames.map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                i === idx
                  ? "bg-accent"
                  : i < idx
                  ? "bg-accent/40"
                  : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function TranslationCompare() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div
        className={`rounded-2xl border border-border bg-card p-6 transition-all duration-700 ${
          shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
          How most students read it
        </div>
        <div className="mb-3 text-lg font-semibold text-foreground">
          gross = unpleasant
        </div>
        <ul className="space-y-2 text-sm text-muted">
          <li>Pain in the knees: gross.</li>
          <li>Back ache: gross.</li>
          <li>A warm glow across the chest: &quot;subtle.&quot;</li>
          <li>Fine tingling on the scalp: &quot;subtle.&quot;</li>
        </ul>
        <p className="mt-4 border-t border-border pt-4 text-xs text-muted">
          The pleasantness axis hijacks the resolution axis. Every gross sensation
          becomes a problem to flee.
        </p>
      </div>
      <div
        className={`rounded-2xl border border-accent/40 bg-accent/5 p-6 transition-all duration-700 ${
          shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
        style={{ transitionDelay: "180ms" }}
      >
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
          What the Pali actually says
        </div>
        <div className="mb-3 text-lg font-semibold text-foreground">
          gross = coarse-grained
        </div>
        <ul className="space-y-2 text-sm text-muted">
          <li>Knee pain: gross and unpleasant.</li>
          <li>Dull throb: gross and unpleasant.</li>
          <li>A warm glow across the chest: <strong className="text-foreground">gross and pleasant.</strong></li>
          <li>Fine tingling on the scalp: subtle and pleasant.</li>
        </ul>
        <p className="mt-4 border-t border-accent/20 pt-4 text-xs text-muted">
          Gross/subtle is a resolution axis. Pleasant/unpleasant is a separate
          axis. A gross sensation can be any of pleasant, unpleasant, or neutral.
        </p>
      </div>
    </div>
  );
}

type Quadrant = {
  row: "gross" | "subtle";
  col: "pleasant" | "neutral" | "unpleasant";
  label: string;
  example: string;
};

const quadrants: Quadrant[] = [
  { row: "gross", col: "pleasant", label: "Warm glow across chest", example: "Common on day 6 or 7 after mettā." },
  { row: "gross", col: "neutral", label: "Heaviness in the legs", example: "Dense, non-signaling pressure. Very common early course." },
  { row: "gross", col: "unpleasant", label: "Sharp knee pain", example: "The one most students call the only gross sensation." },
  { row: "subtle", col: "pleasant", label: "Fine scalp tingling", example: "Often mistaken for progress by itself." },
  { row: "subtle", col: "neutral", label: "Faint pulse at the crown", example: "Barely there. Detectable only when concentration is sharp." },
  { row: "subtle", col: "unpleasant", label: "Shivery, uncomfortable vibration", example: "Rare but real. Subtle is not automatically pleasant." },
];

export function SensationMatrix() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const cols: Quadrant["col"][] = ["pleasant", "neutral", "unpleasant"];
  const rows: Quadrant["row"][] = ["gross", "subtle"];

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-2xl border border-border bg-card p-5 md:p-7"
    >
      <div className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        The 2 × 3 map the tradition actually uses
      </div>
      <div className="overflow-x-auto">
        <div className="grid min-w-[560px] grid-cols-[120px_1fr_1fr_1fr] gap-2">
          <div />
          {cols.map((c) => (
            <div
              key={c}
              className="rounded-lg border border-border bg-background px-3 py-2 text-center text-[11px] font-semibold uppercase tracking-widest text-muted"
            >
              {c}
            </div>
          ))}
          {rows.map((r, rowIdx) => (
            <Fragment key={r}>
              <div className="flex items-center justify-end rounded-lg border border-border bg-background px-3 py-2 text-[11px] font-semibold uppercase tracking-widest text-muted">
                {r}
              </div>
              {cols.map((c, colIdx) => {
                const q = quadrants.find((x) => x.row === r && x.col === c);
                if (!q) return <div key={`${r}-${c}`} />;
                const delay = (rowIdx * 3 + colIdx) * 90;
                return (
                  <div
                    key={`${r}-${c}`}
                    className={`rounded-xl border p-3 transition-all duration-700 ${
                      r === "gross"
                        ? "border-accent/30 bg-accent/5"
                        : "border-border bg-card-hover"
                    } ${shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
                    style={{ transitionDelay: `${delay}ms` }}
                  >
                    <p className="mb-1 text-sm font-semibold text-foreground">
                      {q.label}
                    </p>
                    <p className="text-[12px] text-muted">{q.example}</p>
                  </div>
                );
              })}
            </Fragment>
          ))}
        </div>
      </div>
      <p className="mt-5 text-xs text-muted">
        Every cell is a sensation that actually arises during sitting. The whole
        top row is gross. One cell of the top row is pleasant. The single
        biggest misread of Goenka Vipassana is treating that cell as empty.
      </p>
    </div>
  );
}

type DayZone = {
  days: string;
  zone: string;
  quality: string;
  note: string;
};

const bodyMap: DayZone[] = [
  {
    days: "Days 1-3",
    zone: "Knees, ankles, hips",
    quality: "Dense, bone-deep, dull",
    note: "The gross sensation of a body not used to sitting ten hours a day. Structural, not emotional.",
  },
  {
    days: "Days 3-5",
    zone: "Lower back, sacrum",
    quality: "Aching, sometimes burning",
    note: "Postural, but also where long-held sankharas around holding-it-together tend to surface. Vipassana proper begins on day 4.",
  },
  {
    days: "Days 4-7",
    zone: "Shoulders, upper trapezius",
    quality: "Hard knots, bands of tension",
    note: "Classic daily-life armor coming up. Usually unpleasant, occasionally neutral. Does not dissolve in a single sit.",
  },
  {
    days: "Days 5-8",
    zone: "Jaw, temples, face",
    quality: "Grip, pulling, micro-twitches",
    note: "Emerges once the lower body has surrendered. The jaw in particular holds the unsaid.",
  },
  {
    days: "Days 6-9",
    zone: "Sternum, heart center",
    quality: "Heaviness, sudden warmth, tightness",
    note: "A gross sensation that is frequently pleasant — the mislabeled cell of the matrix. Also where grief surfaces.",
  },
  {
    days: "Days 8-10",
    zone: "Back to the whole body",
    quality: "Patches of gross against a field of subtle",
    note: "The point of the whole arc. Gross and subtle together, observed with the same equanimity. That equanimity is the only product.",
  },
];

export function BodyTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(-1);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let i = 0;
          const step = () => {
            setActive(i);
            i += 1;
            if (i <= bodyMap.length) {
              timer = window.setTimeout(step, 360);
            }
          };
          let timer = window.setTimeout(step, 200);
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
      className="rounded-2xl border border-border bg-card p-6 md:p-8"
    >
      <div className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        Where gross sensation parks itself across a 10-day course
      </div>
      <ol className="relative space-y-4 border-l border-accent/30 pl-6">
        {bodyMap.map((d, i) => (
          <li
            key={d.days}
            className={`relative transition-all duration-700 ${
              active > i ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <span
              className={`absolute -left-[29px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                active > i
                  ? "border-accent bg-card"
                  : "border-border bg-background"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full transition-opacity ${
                  active > i ? "bg-accent opacity-100" : "opacity-0"
                }`}
              />
            </span>
            <div className="rounded-xl border border-accent/20 bg-accent/5 p-4">
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-accent/40 bg-card px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-accent tabular-nums">
                  {d.days}
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {d.zone}
                </span>
                <span className="text-xs text-muted">· {d.quality}</span>
              </div>
              <p className="text-sm text-muted">{d.note}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-5 text-xs text-muted">
        Based on the author&apos;s notes across six 10-day Goenka courses at three
        centers. Exact timing varies. The sequence is remarkably stable.
      </p>
    </div>
  );
}

const misreads = [
  {
    bad: "Gross means bad, subtle means good.",
    good:
      "Neither. They are resolutions of observation, not moral values. The goal is equanimity toward whichever is present.",
  },
  {
    bad: "If a sensation is pleasant, it is subtle.",
    good:
      "Warm glow, bliss wash, waves of well-being in the chest — these are usually gross (coarse-grained) and pleasant. Craving them is the standard first trap.",
  },
  {
    bad: "Subtle sensation is the sign of deeper meditation.",
    good:
      "Subtle sensation is the sign of sharper concentration. Depth is whether the reaction to whatever is there has loosened. That can happen on a knee-pain sit.",
  },
  {
    bad: "You work with gross sensations by pushing past them to reach subtle.",
    good:
      "You work with gross sensations by observing them until the reaction to them changes. The sensation itself may or may not change. The reaction is the only thing you are training.",
  },
  {
    bad: "Gross sensation = sankhara coming up; subtle = no sankhara.",
    good:
      "Both can signal sankharas. Plenty of subtle sensations are also stored patterns releasing. Equanimity is the instruction either way.",
  },
];

export function MisreadList() {
  const ref = useRef<HTMLUListElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <ul ref={ref} className="space-y-3">
      {misreads.map((m, i) => (
        <li
          key={i}
          className={`rounded-xl border border-border bg-card p-5 transition-all duration-700 ${
            shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: `${i * 110}ms` }}
        >
          <div className="mb-2 flex items-start gap-2">
            <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-[11px] font-bold text-accent">
              ✕
            </span>
            <p className="text-sm font-semibold text-foreground line-through decoration-accent/50">
              {m.bad}
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-accent/40 bg-accent/15 text-[11px] font-bold text-accent">
              ✓
            </span>
            <p className="text-sm text-muted">{m.good}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

const metrics = [
  {
    value: 6,
    suffix: "",
    label: "10-day courses sat by the author",
    note: "Three different centers. The body map below is the common spine.",
  },
  {
    value: 4,
    suffix: "",
    label: "Days before Vipassana proper begins",
    note: "Days 1–3 are Anapana. Most gross sensation questions arrive before the technique does.",
  },
  {
    value: 100,
    suffix: "%",
    label: "Of new students who hit gross sensation on day 1",
    note: "Sitting that long that still is structurally intense, regardless of mind state.",
  },
];

export function MetricsRow() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {metrics.map((m) => (
        <div
          key={m.label}
          className="rounded-2xl border border-border bg-card p-6"
        >
          <div className="mb-2 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            <NumberTicker value={m.value} suffix={m.suffix} />
          </div>
          <div className="mb-2 text-sm font-semibold text-foreground">
            {m.label}
          </div>
          <p className="text-xs text-muted">{m.note}</p>
        </div>
      ))}
    </div>
  );
}

const instructions = [
  "Drop the word bad from the rest of the sit. Gross is coarse-grained, not bad.",
  "Name the sensation by its actual qualities: dense, sharp, warm, pulsing, heavy. Never by moral label.",
  "Run the body scan at the pace your teacher gave you, not the pace the sensation is pulling.",
  "When a gross sensation pulls attention hard, stay on it for three clean passes before moving.",
  "When a pleasant gross sensation (warmth, glow) arrives, use the same instruction. Do not linger.",
  "End the sit without evaluating it as good or bad. The rep counts regardless.",
];

export function SitInstructions() {
  const ref = useRef<HTMLOListElement>(null);
  const [shown, setShown] = useState(-1);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let i = 0;
          const step = () => {
            setShown(i);
            i += 1;
            if (i <= instructions.length) {
              timer = window.setTimeout(step, 240);
            }
          };
          let timer = window.setTimeout(step, 200);
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <ol ref={ref} className="space-y-3">
      {instructions.map((text, i) => (
        <li
          key={i}
          className={`flex items-start gap-3 rounded-xl border border-accent/20 bg-accent/5 p-4 transition-all duration-700 ${
            shown >= i ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
          }`}
        >
          <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent text-xs font-bold text-card tabular-nums">
            {i + 1}
          </span>
          <p className="text-sm text-foreground">{text}</p>
        </li>
      ))}
    </ol>
  );
}

const beam = {
  from: [
    "Goenka discourses",
    "Sayagyi U Ba Khin",
    "Theravada suttas",
    "Ledi Sayadaw",
  ],
  to: [
    "oḷārika = gross",
    "sukhuma = subtle",
    "vedanā = sensation",
    "sankhāra = reaction pattern",
  ],
};

export function TranslationBeam() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-8"
    >
      <div className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        The lineage of the word gross
      </div>
      <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        <div className="space-y-2">
          {beam.from.map((f, i) => (
            <div
              key={f}
              className={`rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground transition-all duration-700 ${
                active ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 140}ms` }}
            >
              {f}
            </div>
          ))}
        </div>
        <div className="relative flex h-full flex-col items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent bg-accent/10 text-[10px] font-bold uppercase tracking-widest text-accent">
            Pali
          </div>
          <svg
            viewBox="0 0 80 220"
            className="absolute inset-0 h-full w-full"
            aria-hidden
          >
            <defs>
              <linearGradient id="beamL" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
                <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.7" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[40, 80, 120, 160].map((y, i) => (
              <line
                key={`l-${y}`}
                x1="0"
                x2="32"
                y1={y}
                y2="110"
                stroke="url(#beamL)"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: 140,
                  strokeDashoffset: active ? 0 : 140,
                  transition: `stroke-dashoffset 900ms ease-out ${i * 120}ms`,
                }}
              />
            ))}
            {[40, 80, 120, 160].map((y, i) => (
              <line
                key={`r-${y}`}
                x1="48"
                x2="80"
                y1="110"
                y2={y}
                stroke="url(#beamL)"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: 140,
                  strokeDashoffset: active ? 0 : 140,
                  transition: `stroke-dashoffset 900ms ease-out ${i * 120 + 400}ms`,
                }}
              />
            ))}
          </svg>
        </div>
        <div className="space-y-2">
          {beam.to.map((t, i) => (
            <div
              key={t}
              className={`rounded-lg border border-accent/30 bg-accent/10 px-3 py-2 text-sm font-mono text-foreground transition-all duration-700 ${
                active ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 140 + 400}ms` }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
      <p className="mt-6 text-xs text-muted">
        Goenka&apos;s lineage inherits the Pali vocabulary directly. The English
        translation flattens four different axes into two words. The practice
        lives in the un-flattened version.
      </p>
    </div>
  );
}
