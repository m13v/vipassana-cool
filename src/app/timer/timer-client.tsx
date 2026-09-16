"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { posthog } from "@/components/posthog-provider";

type MarkerType = "gong" | "chanting";
type Phase = "setup" | "running" | "done";
type SegmentKind = "opening" | "meditation" | "closing" | "metta";

type Segment = {
  kind: SegmentKind;
  label: string;
  seconds: number;
};

const DURATION_PRESETS = [20, 30, 45, 60];

// Marker segment lengths (seconds). Chanting lengths approximate a typical
// Goenka opening/closing chant; the gong is a short resonant strike.
const MARKER_SECONDS: Record<MarkerType, { opening: number; closing: number }> = {
  gong: { opening: 12, closing: 12 },
  chanting: { opening: 180, closing: 150 },
};
const METTA_SECONDS = 300;

function buildSegments(
  meditationMin: number,
  marker: MarkerType,
  metta: boolean
): Segment[] {
  const m = MARKER_SECONDS[marker];
  const openLabel = marker === "gong" ? "Opening gong" : "Opening chant";
  const closeLabel = marker === "gong" ? "Closing gong" : "Closing chant";
  const segs: Segment[] = [
    { kind: "opening", label: openLabel, seconds: m.opening },
    { kind: "meditation", label: "Meditation", seconds: meditationMin * 60 },
    { kind: "closing", label: closeLabel, seconds: m.closing },
  ];
  if (metta) segs.push({ kind: "metta", label: "Metta", seconds: METTA_SECONDS });
  return segs;
}

function fmt(totalSeconds: number): string {
  const s = Math.max(0, Math.round(totalSeconds));
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

function fmtLong(totalSeconds: number): string {
  const s = Math.max(0, Math.round(totalSeconds));
  const m = Math.floor(s / 60);
  const sec = s % 60;
  if (sec === 0) return `${m} min`;
  return `${m} min ${sec}s`;
}

export function TimerClient() {
  const [phase, setPhase] = useState<Phase>("setup");
  const [meditationMin, setMeditationMin] = useState(30);
  const [customMin, setCustomMin] = useState("");
  const [marker, setMarker] = useState<MarkerType>("gong");
  const [metta, setMetta] = useState(false);
  const [paused, setPaused] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [activeSegments, setActiveSegments] = useState<Segment[]>([]);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTickRef = useRef<number | null>(null);
  const segIndexRef = useRef<number>(-1);

  const segments = buildSegments(meditationMin, marker, metta);
  const totalSeconds = segments.reduce((a, s) => a + s.seconds, 0);

  const ensureCtx = useCallback(() => {
    if (!audioCtxRef.current) {
      const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AC();
    }
    if (audioCtxRef.current.state === "suspended") audioCtxRef.current.resume();
    return audioCtxRef.current;
  }, []);

  const playGong = useCallback(() => {
    const ctx = ensureCtx();
    const now = ctx.currentTime;
    const master = ctx.createGain();
    master.connect(ctx.destination);
    master.gain.setValueAtTime(0.0001, now);
    master.gain.exponentialRampToValueAtTime(0.55, now + 0.015);
    master.gain.exponentialRampToValueAtTime(0.0001, now + 7.5);
    // inharmonic partials give a bell/gong timbre
    const partials = [1, 2.76, 5.4, 8.93];
    const fundamental = 138;
    partials.forEach((p, i) => {
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = fundamental * p;
      const g = ctx.createGain();
      g.gain.value = 1 / (i + 1.4);
      osc.connect(g);
      g.connect(master);
      osc.start(now);
      osc.stop(now + 7.5);
    });
  }, [ensureCtx]);

  const cleanup = useCallback(() => {
    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    lastTickRef.current = null;
  }, []);

  const start = useCallback(() => {
    ensureCtx();
    setActiveSegments(buildSegments(meditationMin, marker, metta));
    segIndexRef.current = -1;
    setElapsed(0);
    setPaused(false);
    setPhase("running");
    posthog.capture("timer_start", {
      meditation_min: meditationMin,
      marker,
      metta,
      total_seconds: totalSeconds,
    });
  }, [ensureCtx, meditationMin, marker, metta, totalSeconds]);

  const reset = useCallback(() => {
    cleanup();
    setPhase("setup");
    setElapsed(0);
    setPaused(false);
    segIndexRef.current = -1;
  }, [cleanup]);

  // ticking loop
  useEffect(() => {
    if (phase !== "running" || paused || activeSegments.length === 0) {
      cleanup();
      return;
    }
    const segs = activeSegments;
    const bnds: number[] = [];
    segs.reduce((acc, s) => {
      const end = acc + s.seconds;
      bnds.push(end);
      return end;
    }, 0);
    const total = segs.reduce((a, s) => a + s.seconds, 0);

    const loop = (ts: number) => {
      if (lastTickRef.current == null) lastTickRef.current = ts;
      const dt = (ts - lastTickRef.current) / 1000;
      lastTickRef.current = ts;
      setElapsed((prev) => {
        const next = Math.min(total, prev + dt);
        // determine current segment
        let idx = bnds.findIndex((b) => next < b);
        if (idx === -1) idx = segs.length - 1;
        if (idx !== segIndexRef.current) {
          segIndexRef.current = idx;
          // sound the transition into a new segment
          playGong();
        }
        if (next >= total) {
          // final gong already fired at last boundary entry; end session
          cleanup();
          setPhase("done");
          posthog.capture("timer_complete", { total_seconds: total });
          return total;
        }
        return next;
      });
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return cleanup;
  }, [phase, paused, activeSegments, cleanup, playGong]);

  useEffect(() => () => cleanup(), [cleanup]);

  const selectDuration = (min: number) => {
    setMeditationMin(min);
    setCustomMin("");
  };
  const applyCustom = (v: string) => {
    setCustomMin(v);
    const n = parseInt(v, 10);
    if (!Number.isNaN(n) && n > 0 && n <= 240) setMeditationMin(n);
  };

  const isPreset = DURATION_PRESETS.includes(meditationMin) && customMin === "";

  // ---- Running / done view ----
  if (phase === "running" || phase === "done") {
    const segs = activeSegments;
    const total = segs.reduce((a, s) => a + s.seconds, 0);
    const remaining = total - elapsed;
    const bnds: number[] = [];
    segs.reduce((acc, s) => {
      const end = acc + s.seconds;
      bnds.push(end);
      return end;
    }, 0);
    let curIdx = bnds.findIndex((b) => elapsed < b);
    if (curIdx === -1) curIdx = segs.length - 1;
    const current = segs[curIdx];

    return (
      <div className="flex flex-col items-center gap-10 py-8">
        <div className="text-center">
          <div className="mb-2 text-sm uppercase tracking-widest text-muted">
            {phase === "done" ? "Session complete" : current.label}
          </div>
          <div className="font-mono text-7xl tabular-nums text-foreground sm:text-8xl">
            {phase === "done" ? fmt(0) : fmt(remaining)}
          </div>
          <div className="mt-2 text-sm text-muted">
            {phase === "done"
              ? "May all beings be happy."
              : `${fmt(elapsed)} of ${fmt(total)} elapsed`}
          </div>
        </div>

        {/* segmented progress: subtracks inside the overall timer */}
        <div className="w-full max-w-xl">
          <div className="flex h-3 w-full gap-0.5 overflow-hidden rounded-full">
            {segs.map((s, i) => {
              const segStart = i === 0 ? 0 : bnds[i - 1];
              const localElapsed = Math.min(
                s.seconds,
                Math.max(0, elapsed - segStart)
              );
              const fillPct = (localElapsed / s.seconds) * 100;
              return (
                <div
                  key={i}
                  className="relative h-full bg-border"
                  style={{ flexGrow: s.seconds }}
                  title={`${s.label} — ${fmtLong(s.seconds)}`}
                >
                  <div
                    className="absolute inset-y-0 left-0 bg-accent transition-[width] duration-200"
                    style={{ width: `${fillPct}%` }}
                  />
                </div>
              );
            })}
          </div>
          <div className="mt-2 flex justify-between text-[11px] text-muted">
            {segs.map((s, i) => (
              <span key={i} className={i === curIdx && phase === "running" ? "text-accent" : ""}>
                {s.label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          {phase === "running" ? (
            <button
              onClick={() => {
                setPaused((p) => !p);
                lastTickRef.current = null;
              }}
              className="rounded-full border border-foreground/30 px-6 py-2 text-sm text-foreground transition-colors hover:border-foreground"
            >
              {paused ? "Resume" : "Pause"}
            </button>
          ) : (
            <button
              onClick={start}
              className="rounded-full bg-accent px-6 py-2 text-sm text-background transition-opacity hover:opacity-90"
            >
              Sit again
            </button>
          )}
          <button
            onClick={reset}
            className="rounded-full border border-border px-6 py-2 text-sm text-muted transition-colors hover:text-foreground hover:border-foreground/30"
          >
            {phase === "done" ? "Change settings" : "End"}
          </button>
        </div>
      </div>
    );
  }

  // ---- Setup view ----
  return (
    <div className="flex flex-col gap-8 py-4">
      {/* Meditation duration */}
      <div>
        <div className="mb-3 text-sm uppercase tracking-widest text-muted">
          Meditation duration
        </div>
        <div className="flex flex-wrap gap-2">
          {DURATION_PRESETS.map((min) => (
            <button
              key={min}
              onClick={() => selectDuration(min)}
              className={`rounded-full border px-5 py-2 text-sm transition-colors ${
                isPreset && meditationMin === min
                  ? "border-accent bg-accent text-background"
                  : "border-border text-muted hover:border-foreground/30 hover:text-foreground"
              }`}
            >
              {min} min
            </button>
          ))}
          <input
            type="number"
            inputMode="numeric"
            min={1}
            max={240}
            placeholder="Custom"
            value={customMin}
            onChange={(e) => applyCustom(e.target.value)}
            className={`w-24 rounded-full border bg-transparent px-4 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted ${
              customMin !== "" ? "border-accent" : "border-border focus:border-foreground/30"
            }`}
          />
        </div>
      </div>

      {/* Opening & closing sound */}
      <div>
        <div className="mb-3 text-sm uppercase tracking-widest text-muted">
          Opening &amp; closing
        </div>
        <div className="inline-flex rounded-full border border-border p-1">
          {(["gong", "chanting"] as MarkerType[]).map((m) => (
            <button
              key={m}
              onClick={() => setMarker(m)}
              className={`rounded-full px-5 py-1.5 text-sm capitalize transition-colors ${
                marker === m
                  ? "bg-accent text-background"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
        {marker === "chanting" && (
          <p className="mt-2 text-xs text-muted">
            Chant segments are timed now; drop an audio file in to hear them.
          </p>
        )}
      </div>

      {/* Metta */}
      <div>
        <div className="mb-3 text-sm uppercase tracking-widest text-muted">
          Metta at the end
        </div>
        <div className="inline-flex rounded-full border border-border p-1">
          {[
            { v: false, label: "Off" },
            { v: true, label: "5 min" },
          ].map((opt) => (
            <button
              key={opt.label}
              onClick={() => setMetta(opt.v)}
              className={`rounded-full px-5 py-1.5 text-sm transition-colors ${
                metta === opt.v
                  ? "bg-accent text-background"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Total summary */}
      <div className="rounded-2xl border border-border bg-card/40 p-6">
        <div className="mb-4 flex items-baseline justify-between">
          <span className="text-sm uppercase tracking-widest text-muted">
            Total session
          </span>
          <span className="font-mono text-3xl tabular-nums text-foreground">
            {fmt(totalSeconds)}
          </span>
        </div>
        <ul className="space-y-1.5">
          {segments.map((s, i) => (
            <li key={i} className="flex justify-between text-sm">
              <span className="text-foreground">{s.label}</span>
              <span className="font-mono tabular-nums text-muted">
                {fmtLong(s.seconds)}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={start}
        className="rounded-full bg-accent px-8 py-3 text-base text-background transition-opacity hover:opacity-90"
      >
        Start session
      </button>
    </div>
  );
}
