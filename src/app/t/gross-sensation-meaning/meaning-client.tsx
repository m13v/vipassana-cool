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

type ConceptFrame = { label: string; title: string; captions: string[] };

const conceptFrames: ConceptFrame[] = [
  {
    label: "00 / Open",
    title: "Gross sensation, plainly.",
    captions: [
      "A coarse-grained body sensation.",
      "Easy to detect without sharpening attention.",
      "Not a moral category. Not a synonym for bad.",
    ],
  },
  {
    label: "01 / Definition",
    title: "Coarse, not unpleasant.",
    captions: [
      "Pali oḷārika vedanā: coarse-grained feeling.",
      "Resolution axis. Not pleasantness axis.",
      "A warm chest glow can be gross. So can knee pain.",
    ],
  },
  {
    label: "02 / Practice",
    title: "Naming beats judging.",
    captions: [
      "Twelve labels replace one word called pain.",
      "Each label has a physical signature.",
      "Naming reduces aversion before equanimity has to.",
    ],
  },
  {
    label: "03 / Anchor",
    title: "A field guide for the cushion.",
    captions: [
      "Twelve sensations.",
      "Three diagnostic questions.",
      "One rule: describe in two words, never in judgment.",
    ],
  },
];

export function ConceptReel() {
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
            setIdx((i) => (i + 1) % conceptFrames.length);
          }, 3200);
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

  const frame = conceptFrames[idx];
  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/10 via-card to-card p-8 shadow-sm md:p-12"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--accent) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent-light/15 blur-3xl" />

      <div className="relative">
        <div className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-accent" />
          Concept reel
          <span className="text-border">/</span>
          <span className="tabular-nums text-muted">
            {String(idx + 1).padStart(2, "0")} / {String(conceptFrames.length).padStart(2, "0")}
          </span>
        </div>

        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
          {frame.label}
        </p>

        <h2
          key={`t-${idx}`}
          className="mb-5 text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          style={{ animation: "fadeSlideUp 620ms ease-out" }}
        >
          {frame.title}
        </h2>

        <ul className="space-y-2">
          {frame.captions.map((c, i) => (
            <li
              key={`${idx}-${i}`}
              className="flex items-start gap-2 text-base text-muted md:text-lg"
              style={{
                animation: `fadeSlideUp ${600 + i * 160}ms ease-out`,
              }}
            >
              <span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-accent/70" />
              <span>{c}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex gap-1.5">
          {conceptFrames.map((_, i) => (
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

const stats = [
  {
    value: 12,
    suffix: "",
    label: "Working labels in the field guide",
    note: "Each one names a distinct physical signature, not a degree of badness.",
  },
  {
    value: 3,
    suffix: "",
    label: "Diagnostic questions",
    note: "Outer edge, gravitational pull, two-word fit. Together they pick the label.",
  },
  {
    value: 6,
    suffix: "",
    label: "10-day courses behind this glossary",
    note: "Three centers. The vocabulary settled across roughly nine hundred sits.",
  },
];

export function Stats() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {stats.map((m) => (
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

type Label = {
  word: string;
  signature: string;
  region: string;
  moment: string;
};

const labels: Label[] = [
  {
    word: "Dense",
    signature: "A heavy, blocky weight with no clear edge.",
    region: "Thighs, sit bones, lower abdomen",
    moment: "First long sit of the day, before the body warms up.",
  },
  {
    word: "Sharp",
    signature: "A pin-thin, point-like sting that cuts inward.",
    region: "Knee joint line, edge of the kneecap",
    moment: "Around the 35 minute mark of a fixed-posture sit.",
  },
  {
    word: "Throbbing",
    signature: "A rhythmic pulse, often matching the heartbeat.",
    region: "Calves, ankles, sometimes the temples",
    moment: "After the legs have been compressed for forty minutes.",
  },
  {
    word: "Pressing",
    signature: "Even, broad downward weight, like a flat hand.",
    region: "Shoulders, upper back, sometimes the crown",
    moment: "Mid-sit, often when concentration steadies.",
  },
  {
    word: "Twisting",
    signature: "An internal corkscrew, tissue rotating around itself.",
    region: "Lower back near the sacrum, hip flexors",
    moment: "Late in a sit, after the back has been holding still.",
  },
  {
    word: "Grinding",
    signature: "Two surfaces moving against each other under load.",
    region: "Hip socket, lower vertebrae",
    moment: "When you shift posture and immediately settle again.",
  },
  {
    word: "Prickling",
    signature: "A field of tiny coarse points, not a smooth tingle.",
    region: "Outer thighs, calves, top of the feet",
    moment: "Right after a long Anapana session, before a body scan.",
  },
  {
    word: "Burning",
    signature: "A diffuse heat that does not have a center.",
    region: "Sit bones, between the shoulder blades, jaw",
    moment: "After sixty minutes in the same posture.",
  },
  {
    word: "Dragging",
    signature: "A slow downward pull that resists movement.",
    region: "Eyelids, jaw, the front of the chest",
    moment: "Drowsy sits. Common between the 4:30 a.m. and 6:30 a.m. sittings.",
  },
  {
    word: "Knotting",
    signature: "A bounded lump of tension with a clear circumference.",
    region: "Upper trapezius, lateral neck, between the shoulder blades",
    moment: "Day five and onward, once the lower body has quieted.",
  },
  {
    word: "Stinging",
    signature: "A bright, narrow heat at the surface of the skin.",
    region: "Scalp, ear, ankle bone, the bridge of the nose",
    moment: "When concentration first sharpens and the field of awareness widens.",
  },
  {
    word: "Locking",
    signature: "A frozen joint that refuses to release on the in-breath.",
    region: "Jaw hinge, base of the skull, hip socket",
    moment: "When unspoken material is moving. Often paired with emotion.",
  },
];

export function FieldGuide() {
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
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        Field guide / twelve gross sensation labels
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {labels.map((l, i) => (
          <div
            key={l.word}
            className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-700 hover:border-accent/40 hover:shadow-sm ${
              shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="text-lg font-semibold tracking-tight text-foreground">
                {l.word}
              </span>
              <span className="rounded-full border border-accent/30 bg-accent/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="mb-3 text-sm text-foreground/80 leading-relaxed">
              {l.signature}
            </p>
            <div className="space-y-1.5 border-t border-border pt-3 text-xs text-muted">
              <div>
                <span className="font-semibold text-foreground/70">Region.</span>{" "}
                {l.region}
              </div>
              <div>
                <span className="font-semibold text-foreground/70">When.</span>{" "}
                {l.moment}
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 text-xs text-muted">
        These are working labels, not a closed taxonomy. The point is precision over judgment. If you can name the sensation in two words from this set, you have already pulled the reaction off the sensation.
      </p>
    </div>
  );
}

const diagnosticSteps = [
  {
    q: "Can you feel its outer edge?",
    yes: "It is a bounded sensation. You are looking for words like knotting, sharp, or stinging.",
    no: "It is unbounded. You are looking for words like dense, pressing, dragging, or burning.",
  },
  {
    q: "Does it pull harder than the area around it?",
    yes: "It has gravity. Throbbing, grinding, twisting, and locking belong here.",
    no: "It sits flat in the field. Prickling, dense, and pressing belong here.",
  },
  {
    q: "Could you describe it in one word, or do you need two?",
    yes: "Two words means you are already at the right resolution. Use the more specific noun and the qualifier together (sharp + cutting, dense + heavy).",
    no: "One word means you are still labeling. Stay with the sensation for one more breath cycle and ask question one again.",
  },
];

export function Diagnostic() {
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
            if (i <= diagnosticSteps.length) {
              timer = window.setTimeout(step, 380);
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
    <div ref={ref} className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        Three-question diagnostic, asked in real time
      </div>
      <ol className="relative space-y-4 border-l border-accent/30 pl-6">
        {diagnosticSteps.map((d, i) => (
          <li
            key={i}
            className={`relative transition-all duration-700 ${
              active >= i ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <span
              className={`absolute -left-[29px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                active >= i ? "border-accent bg-card" : "border-border bg-background"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full transition-opacity ${
                  active >= i ? "bg-accent opacity-100" : "opacity-0"
                }`}
              />
            </span>
            <div className="rounded-xl border border-accent/20 bg-accent/5 p-4">
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-full border border-accent/40 bg-card px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-accent tabular-nums">
                  Q{i + 1}
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {d.q}
                </span>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div className="rounded-lg border border-border bg-card p-3 text-xs text-muted">
                  <span className="mb-1 block text-[10px] font-semibold uppercase tracking-widest text-accent">
                    Yes
                  </span>
                  {d.yes}
                </div>
                <div className="rounded-lg border border-border bg-card p-3 text-xs text-muted">
                  <span className="mb-1 block text-[10px] font-semibold uppercase tracking-widest text-accent">
                    No
                  </span>
                  {d.no}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-5 text-xs text-muted">
        Run the three questions in under ten seconds. The point is the labeling itself, which collapses the gap between feeling and reaction. You do not need a perfect label. You need a specific one.
      </p>
    </div>
  );
}

const replacements = [
  { lazy: "It hurts.", precise: "Sharp, narrow, on the inner knee line." },
  { lazy: "My back is killing me.", precise: "Twisting, low and to the right of the sacrum." },
  { lazy: "I can't sit anymore.", precise: "Locking in the right hip socket. Will release on the next out-breath." },
  { lazy: "This is unbearable.", precise: "Burning, broad, across the upper back. Has no center." },
  { lazy: "I'm so tired.", precise: "Dragging on both eyelids. Concentration is intact below." },
  { lazy: "It feels good now.", precise: "Pressing, even, across the crown. Pleasant. Same instruction." },
];

export function Replacements() {
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
  return (
    <div ref={ref} className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr]">
        <div className="bg-card-hover px-5 py-3 text-[11px] font-semibold uppercase tracking-widest text-muted">
          Lazy default
        </div>
        <div className="hidden items-center justify-center px-3 text-[11px] text-border sm:flex">
          →
        </div>
        <div className="bg-accent/5 px-5 py-3 text-[11px] font-semibold uppercase tracking-widest text-accent">
          Precise label
        </div>
        {replacements.map((r, i) => (
          <Fragment key={r.lazy}>
            <div
              className={`border-t border-border bg-card-hover px-5 py-4 text-sm text-muted transition-all duration-700 ${
                shown ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className="line-through decoration-accent/40">{r.lazy}</span>
            </div>
            <div className="hidden items-center justify-center border-t border-border px-3 text-[11px] text-accent/60 sm:flex">
              →
            </div>
            <div
              className={`border-t border-border bg-accent/5 px-5 py-4 text-sm text-foreground transition-all duration-700 ${
                shown ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 90 + 120}ms` }}
            >
              {r.precise}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

const beamLeft = ["Coarse", "Bounded", "Pulls attention", "Easy to detect"];
const beamRight = [
  "It is a gross sensation.",
  "Pick a label from the twelve.",
  "Apply the diagnostic in ten seconds.",
  "Return to the body scan at the teacher's pace.",
];

export function Beam() {
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
        Inputs into the loop / what you do next
      </div>
      <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        <div className="space-y-2">
          {beamLeft.map((f, i) => (
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
            Name
          </div>
          <svg
            viewBox="0 0 80 220"
            className="absolute inset-0 h-full w-full"
            aria-hidden
          >
            <defs>
              <linearGradient id="meaningBeam" x1="0%" y1="0%" x2="100%" y2="0%">
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
                stroke="url(#meaningBeam)"
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
                stroke="url(#meaningBeam)"
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
          {beamRight.map((t, i) => (
            <div
              key={t}
              className={`rounded-lg border border-accent/30 bg-accent/10 px-3 py-2 text-sm text-foreground transition-all duration-700 ${
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
        The labeling is the work. Equanimity is the outcome of it, not a separate effort.
      </p>
    </div>
  );
}

const ruleSteps = [
  "Hear the word in your head: pain, bad, terrible, unbearable. Catch it.",
  "Drop the judgment word. Replace it with a physical noun: dense, sharp, throbbing.",
  "Add a qualifier of one word. Inner knee. Lower sacrum. Right shoulder. Both eyelids.",
  "Hold the two-word label for one full breath cycle without revising it.",
  "Move to the next region of the body scan at the pace your teacher gave you.",
];

export function MidSitRule() {
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
            if (i <= ruleSteps.length) {
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
      {ruleSteps.map((text, i) => (
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
