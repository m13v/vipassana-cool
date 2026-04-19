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

// Video-style hero reveal. Staggered captions fade in on a timer.
export function InboxConceptReveal({
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
          inbox-as-state-machine
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

// State machine visual. Four nodes across the top, animated beam connectors,
// each node shows its trigger below.
export function StateMachineFlow() {
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

  const states = [
    {
      name: "confirming",
      body: "Match created by /api/auto-match. Both people get a confirmation email with a unique token.",
      trigger: "GET /api/confirm-match?token=…&response=yes",
    },
    {
      name: "pending",
      body: "Both clicked Yes on the confirmation link. Intro email sent, Meet link provisioned.",
      trigger: "first inbound email reply → webhook",
    },
    {
      name: "replied",
      body: "One side has replied. The other has not. Match is live but one-way.",
      trigger: "second inbound email reply → webhook",
    },
    {
      name: "active",
      body: "Both sides have replied at least once. The pair is real, the Meet URL is bookmarked, the thread is the app.",
      trigger: "calendar decline → ended, silence → stays active",
    },
  ];

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-10"
    >
      <div className="mb-6 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.25em] text-accent">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        matches.status — the finite state machine
      </div>
      <div className="relative grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-3">
        {states.map((s, i) => (
          <div key={s.name} className="relative">
            <div
              className={`relative rounded-xl border border-accent/30 bg-accent/5 p-4 transition-all duration-700 ${
                drawn ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 160}ms` }}
            >
              <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                state {i + 1}
              </p>
              <p className="mb-2 font-mono text-sm font-bold text-foreground">
                status = &ldquo;{s.name}&rdquo;
              </p>
              <p className="mb-3 text-xs text-muted">{s.body}</p>
              <p className="font-mono text-[10px] leading-snug text-accent">
                advances on:
                <br />
                {s.trigger}
              </p>
            </div>
            {i < states.length - 1 && (
              <div
                className={`hidden md:absolute md:-right-2 md:top-1/2 md:block md:h-0.5 md:w-4 md:-translate-y-1/2 md:bg-accent/50 md:transition-all md:duration-700 ${
                  drawn ? "scale-x-100" : "scale-x-0"
                }`}
                style={{ transitionDelay: `${i * 160 + 200}ms`, transformOrigin: "left" }}
              />
            )}
          </div>
        ))}
      </div>
      <div
        className={`mt-6 flex items-center justify-center gap-4 rounded-lg border border-red-200 bg-red-50 p-3 transition-all duration-700 ${
          drawn ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "900ms" }}
      >
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-red-500">
          terminal
        </span>
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          <span className="rounded-md bg-white px-2 py-1 text-red-600">
            expired
          </span>
          <span className="text-muted">(3-day silence in confirming)</span>
          <span className="rounded-md bg-white px-2 py-1 text-red-600">
            ended
          </span>
          <span className="text-muted">(calendar RSVP declined)</span>
          <span className="rounded-md bg-white px-2 py-1 text-red-600">
            declined
          </span>
          <span className="text-muted">(either clicks No)</span>
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-muted">
        Every state change is triggered by a human action outside the browser.
        No one logs into a dashboard to move a match forward.
      </p>
    </div>
  );
}

// Sequence diagram showing a reply → webhook → state advance.
export function ReplySequence() {
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

  const actors = ["You (inbox)", "ImprovMX", "/api/webhooks/improvmx", "advanceMatchOnReply", "matches table"];
  const messages = [
    { from: 0, to: 1, label: "Reply-All to intro thread" },
    { from: 1, to: 2, label: "POST JSON payload" },
    { from: 2, to: 3, label: "call with fromEmail + subject" },
    { from: 3, to: 4, label: "SELECT matches WHERE person_a OR person_b" },
    { from: 4, to: 3, label: "{ status: 'pending' } row" },
    { from: 3, to: 4, label: "UPDATE status = 'replied'" },
    { from: 3, to: 4, label: "INSERT vipassana_activity_log (email_reply)" },
  ];

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-8"
    >
      <div className="mb-5 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.25em] text-accent">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        reply → state advance
      </div>
      <div className="grid grid-cols-5 gap-1 border-b border-border pb-3 md:gap-4">
        {actors.map((a, i) => (
          <div key={i} className="text-center">
            <div
              className={`mx-auto mb-2 inline-flex h-8 w-full items-center justify-center rounded-md border border-accent/30 bg-accent/10 px-1 text-[9px] font-semibold text-accent transition-all duration-500 md:h-10 md:text-xs ${
                visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {a}
            </div>
          </div>
        ))}
      </div>
      <div className="relative grid grid-cols-5 gap-1 pt-3 md:gap-4">
        {actors.map((_, i) => (
          <div key={i} className="relative">
            <div
              className={`mx-auto w-0.5 bg-accent/30 transition-all duration-1000 ${
                visible ? "h-[340px]" : "h-0"
              }`}
            />
          </div>
        ))}
        <div className="pointer-events-none absolute inset-0 grid grid-cols-5 gap-1 pt-3 md:gap-4">
          {messages.map((m, i) => {
            const left = Math.min(m.from, m.to);
            const width = Math.abs(m.to - m.from);
            const top = 18 + i * 45;
            const reverse = m.to < m.from;
            return (
              <div
                key={i}
                className={`absolute transition-all duration-500 ${
                  visible ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  left: `calc(${(left / 5) * 100}% + ${(100 / 5) / 2}%)`,
                  width: `calc(${(width / 5) * 100}%)`,
                  top,
                  transitionDelay: `${600 + i * 180}ms`,
                }}
              >
                <div className="relative">
                  <div className="h-0.5 w-full bg-accent" />
                  <div
                    className={`absolute top-0 ${reverse ? "left-0 -translate-y-[5px]" : "right-0 -translate-y-[5px]"}`}
                  >
                    <span className="inline-block text-accent">
                      {reverse ? "◀" : "▶"}
                    </span>
                  </div>
                  <p className="mt-1 text-center font-mono text-[10px] text-muted md:text-[11px]">
                    {m.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-[360px]" />
      <p className="text-center text-xs text-muted">
        If the other person has any inbound row in{" "}
        <code className="rounded bg-card-hover px-1 font-mono">vipassana_emails</code>,
        the step six update writes <code className="rounded bg-card-hover px-1 font-mono">active</code>{" "}
        instead of <code className="rounded bg-card-hover px-1 font-mono">replied</code>.
      </p>
    </div>
  );
}

// Code comparison: typical app state endpoint vs inbox webhook.
export function CodeCompare() {
  const [side, setSide] = useState<"app" | "inbox">("inbox");

  const typical = `// Typical accountability app
POST /api/habits/:id/checkin

function checkIn(req, res) {
  const user = authUser(req);
  const habit = loadHabit(req.params.id, user.id);
  habit.streak += 1;
  habit.lastCheckin = new Date();
  await habit.save();
  sendPushToPartner(habit.partnerId);
  return res.json({ streak: habit.streak });
}`;

  const inbox = `// vipassana.cool
POST /api/webhooks/improvmx

export async function POST(request) {
  const payload = await request.json();
  const fromEmail = payload.email?.sender;
  const subject  = payload.email?.subject;

  await sql\`INSERT INTO vipassana_emails
    (direction, from_email, subject, body_html, status)
    VALUES ('inbound', \${fromEmail},
            \${subject}, \${payload.html},
            'received')\`;

  await advanceMatchOnReply(fromEmail, subject);
}

// advanceMatchOnReply walks the state machine.
// SELECT matches WHERE status IN ('pending','replied').
// If other party has any inbound row → 'active'.
// Else pending → 'replied'.`;

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
          Typical accountability app endpoint
        </button>
        <button
          type="button"
          onClick={() => setSide("inbox")}
          className={`flex-1 px-4 py-3 text-sm font-semibold transition-colors ${
            side === "inbox"
              ? "bg-accent/10 text-accent"
              : "text-muted hover:text-foreground"
          }`}
        >
          The inbox webhook
        </button>
      </div>
      <div className="p-0">
        <pre className="overflow-x-auto bg-card-hover/40 p-5 font-mono text-[11px] leading-relaxed text-foreground md:text-xs">
          <code>{side === "app" ? typical : inbox}</code>
        </pre>
      </div>
      <div className="border-t border-border bg-card px-5 py-3 text-xs text-muted">
        {side === "app" ? (
          <span>
            The app owns the state. The user must open the app to move it.
          </span>
        ) : (
          <span>
            The email thread owns the state. The user moves it by doing the
            only thing they were already going to do: reply to the person.
          </span>
        )}
      </div>
    </div>
  );
}

// Four-mechanism bento. Each card is one of the backchannels that keep the
// state honest without a UI.
export function BackchannelBento() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-card to-accent-light/5 p-6 md:col-span-2">
        <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-accent">
          anchor fact
        </p>
        <h3 className="mb-3 text-xl font-bold text-foreground">
          The reply IS the check-in, via{" "}
          <GradientWord>advanceMatchOnReply()</GradientWord>
        </h3>
        <p className="text-sm text-muted">
          When the ImprovMX webhook fires at{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            /api/webhooks/improvmx
          </code>
          , it calls{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            advanceMatchOnReply(fromEmail, subject)
          </code>
          . That function runs a single SQL select: pull every match where this
          email address is{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            person_a
          </code>{" "}
          or{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            person_b
          </code>{" "}
          and status is{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            pending
          </code>{" "}
          or{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            replied
          </code>
          . For each row, it asks a follow-up: has the other person ever sent
          an inbound email? If yes, write{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            active
          </code>
          . If no and the current status is{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            pending
          </code>
          , write{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            replied
          </code>
          . That is the entire check-in. No button. No endpoint the user calls.
          The thing they did in Gmail was the thing the database was watching
          for.
        </p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-6">
        <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-muted">
          backchannel 2
        </p>
        <h3 className="mb-2 text-base font-bold text-foreground">
          3-day expiry on <code className="font-mono text-sm">confirming</code>
        </h3>
        <p className="text-sm text-muted">
          A cron hits{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            /api/expire-matches
          </code>{" "}
          daily at 12:00 UTC and calls{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            expireStaleMatches(3)
          </code>
          . Any match still in{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            confirming
          </code>{" "}
          after three days flips to{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            expired
          </code>{" "}
          and both people go back to the pool. Silence is its own signal.
        </p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-6">
        <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-muted">
          backchannel 3
        </p>
        <h3 className="mb-2 text-base font-bold text-foreground">
          Calendar RSVP as a hang-up signal
        </h3>
        <p className="text-sm text-muted">
          Every day at 14:00 UTC, the{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            /api/check-rsvp
          </code>{" "}
          cron hits the Google Calendar API for every match with a{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            calendar_event_id
          </code>{" "}
          and reads the attendee{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            responseStatus
          </code>
          . If either side has{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            &quot;declined&quot;
          </code>
          , the match jumps to{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            ended
          </code>
          .
        </p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-6 md:col-span-3">
        <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-muted">
          backchannel 4
        </p>
        <h3 className="mb-2 text-base font-bold text-foreground">
          The tracked Meet redirect, as the only telemetry that exists
        </h3>
        <p className="text-sm text-muted">
          The intro email hands each person a unique{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            /meet/&lt;token&gt;
          </code>{" "}
          redirect. Clicking it logs a row in the{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            meet_clicks
          </code>{" "}
          table and then 302s to the shared Google Meet URL. No UI shows you
          your own click count. No streak is computed. The click table exists
          so the operator can see which pairs are real without asking.
        </p>
      </div>
    </div>
  );
}

// Horizontal scrolling chip strip of status strings the database actually
// uses. Visual marker for the shape of the state space.
export function StatusMarquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max gap-3 [animation:inboxMarquee_36s_linear_infinite] hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-accent/25 bg-accent/5 px-4 py-1.5 font-mono text-xs text-foreground"
          >
            status = &ldquo;{item}&rdquo;
          </span>
        ))}
      </div>
      <style>{`@keyframes inboxMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

// Vertical animated timeline of the full lifecycle, from signup to terminal.
export function LifecycleTimeline({
  steps,
}: {
  steps: { title: string; body: string; code?: string; actor?: string }[];
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
              {s.actor && (
                <p className="mb-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-accent">
                  {s.actor}
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

// Side-by-side comparison: the user's surface in an app vs. in an inbox.
export function SurfaceTable({
  rows,
}: {
  rows: { action: string; app: string; inbox: string }[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,1fr)] border-b border-border bg-card-hover text-xs font-semibold uppercase tracking-wider text-muted">
        <div className="px-4 py-3 md:px-5">User action</div>
        <div className="border-l border-border px-4 py-3 md:px-5">
          Typical accountability app
        </div>
        <div className="border-l border-border px-4 py-3 text-accent md:px-5">
          vipassana.cool
        </div>
      </div>
      {rows.map((r, i) => (
        <div
          key={i}
          className={`grid grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,1fr)] border-b border-border text-sm last:border-0 ${
            i % 2 === 1 ? "bg-card-hover/40" : ""
          }`}
        >
          <div className="px-4 py-3 text-foreground md:px-5">{r.action}</div>
          <div className="border-l border-border px-4 py-3 text-muted md:px-5">
            {r.app}
          </div>
          <div className="border-l border-border px-4 py-3 text-foreground md:px-5">
            {r.inbox}
          </div>
        </div>
      ))}
    </div>
  );
}
