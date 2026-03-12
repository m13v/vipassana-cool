"use client";

import { useState, useMemo, useEffect } from "react";

type WaitlistPerson = {
  id: string;
  name: string | null;
  email: string;
  city: string | null;
  timezone: string | null;
  frequency: string | null;
  sessionDuration: string | null;
  morningTime: string | null;
  isOldStudent: string | null;
  hasMaintainedPractice: string | null;
  status: string;
  createdAt: string | null;
};

type QuickSetup = { timezone: string; morningHour: string };

const GMT_OFFSETS = [
  "GMT-12", "GMT-11", "GMT-10", "GMT-9", "GMT-8", "GMT-7", "GMT-6", "GMT-5",
  "GMT-4", "GMT-3", "GMT-2", "GMT-1", "GMT+0", "GMT+1", "GMT+2", "GMT+3",
  "GMT+3:30", "GMT+4", "GMT+4:30", "GMT+5", "GMT+5:30", "GMT+5:45", "GMT+6",
  "GMT+6:30", "GMT+7", "GMT+8", "GMT+8:30", "GMT+9", "GMT+9:30", "GMT+10",
  "GMT+10:30", "GMT+11", "GMT+12", "GMT+13", "GMT+14",
];

const HOUR_OPTIONS = [
  { value: "", label: "Any time" },
  ...Array.from({ length: 24 }, (_, i) => ({
    value: String(i),
    label: i === 0 ? "12 AM" : i < 12 ? `${i} AM` : i === 12 ? "12 PM" : `${i - 12} PM`,
  })),
];

function detectedGmtOffset(): string {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const parts = new Intl.DateTimeFormat("en", { timeZone: tz, timeZoneName: "shortOffset" }).formatToParts(new Date());
    const raw = parts.find((p) => p.type === "timeZoneName")?.value ?? "";
    return raw.replace("UTC", "GMT+0") || "";
  } catch { return ""; }
}

function tzToOffsetMinutes(tz: string): number {
  if (!tz) return 0;
  if (tz.startsWith("GMT") || tz.startsWith("UTC")) {
    const match = tz.match(/([+-])(\d{1,2})(?::(\d{2}))?/);
    if (!match) return 0;
    const sign = match[1] === "+" ? 1 : -1;
    return sign * (parseInt(match[2]) * 60 + parseInt(match[3] || "0"));
  }
  try {
    const now = new Date();
    const utc = now.getTime();
    const local = new Date(now.toLocaleString("en-US", { timeZone: tz })).getTime();
    return Math.round((local - utc) / 60000);
  } catch { return 0; }
}

function toUtcHour(localTime: string | null, tz: string): number | null {
  if (!localTime || !tz) return null;
  const [h, m] = localTime.split(":").map(Number);
  if (isNaN(h)) return null;
  const offsetMins = tzToOffsetMinutes(tz);
  const utcMins = (((h * 60 + (m || 0)) - offsetMins) % 1440 + 1440) % 1440;
  return Math.floor(utcMins / 60);
}

const STATUS_CONFIG: Record<string, { bg: string; text: string; label: string }> = {
  matched: { bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-700 dark:text-green-400", label: "Matched" },
  pending: { bg: "bg-yellow-100 dark:bg-yellow-900/30", text: "text-yellow-700 dark:text-yellow-400", label: "Waiting" },
};

type Filter = "all" | "pending" | "matched";

export function WaitlistTable({ onRequestMatch, onSetup }: { onRequestMatch?: (personId: string, personName: string) => void; onSetup?: (setup: QuickSetup) => void }) {
  const [entries, setEntries] = useState<WaitlistPerson[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<Filter>("all");
  const [setup, setSetup] = useState<QuickSetup>({ timezone: "", morningHour: "" });
  const [setupActive, setSetupActive] = useState(false);

  useEffect(() => {
    fetch("/api/waitlist/entries")
      .then((r) => r.json())
      .then((data) => {
        setEntries(data.entries || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
    const offset = detectedGmtOffset();
    if (offset) setSetup((s) => ({ ...s, timezone: offset }));
  }, []);

  const counts = useMemo(() => ({
    all: entries.length,
    pending: entries.filter((e) => e.status === "pending").length,
    matched: entries.filter((e) => e.status === "matched").length,
  }), [entries]);

  const filtered = useMemo(() => {
    let list = filter === "all" ? entries : entries.filter((e) => e.status === filter);
    if (!setupActive) return list;
    // Convert my selected hour + GMT offset to UTC hour for comparison
    const myUtcHour = setup.morningHour !== "" && setup.timezone
      ? toUtcHour(`${setup.morningHour.padStart(2, "0")}:00`, setup.timezone)
      : null;
    return list.filter((e) => {
      if (myUtcHour !== null && e.morningTime && e.timezone) {
        const theirUtcHour = toUtcHour(e.morningTime, e.timezone);
        if (theirUtcHour !== null) {
          const diff = Math.abs(theirUtcHour - myUtcHour);
          const wrappedDiff = Math.min(diff, 24 - diff);
          if (wrappedDiff > 1) return false;
        }
      }
      return true;
    });
  }, [entries, filter, setup, setupActive]);

  if (loading) {
    return (
      <div className="py-8 text-center text-sm text-muted">
        Loading waitlist...
      </div>
    );
  }

  if (entries.length === 0) {
    return (
      <div className="py-8 text-center text-sm text-muted">
        No one on the waitlist yet. Be the first!
      </div>
    );
  }

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: "All" },
    { key: "pending", label: "Waiting" },
    { key: "matched", label: "Matched" },
  ];

  return (
    <div className="space-y-5">
      {/* Stats */}
      <div className="flex items-baseline justify-between">
        <h3 className="text-lg font-semibold">
          {entries.length} {entries.length === 1 ? "person" : "people"} on the waitlist
        </h3>
        {counts.matched > 0 && (
          <span className="text-sm text-muted">
            {counts.matched} already matched
          </span>
        )}
      </div>

      {/* Quick Setup */}
      <div className="rounded-xl border border-border bg-card p-4 space-y-3">
        <p className="text-sm font-medium">Find compatible partners</p>
        <div className="flex flex-wrap gap-3 items-end">
          <div className="flex flex-col gap-1">
            <label className="text-xs text-muted">When do you meditate?</label>
            <select
              value={setup.morningHour}
              onChange={(e) => setSetup((s) => ({ ...s, morningHour: e.target.value }))}
              className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
            >
              {HOUR_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-muted">Your timezone</label>
            <select
              value={setup.timezone}
              onChange={(e) => setSetup((s) => ({ ...s, timezone: e.target.value }))}
              className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
            >
              <option value="">—</option>
              {GMT_OFFSETS.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>
          <button
            onClick={() => {
              const next = !setupActive;
              setSetupActive(next);
              if (next && onSetup) onSetup(setup);
            }}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              setupActive
                ? "bg-accent text-white hover:opacity-90"
                : "border border-accent/30 bg-accent/5 text-accent hover:bg-accent/15"
            }`}
          >
            {setupActive ? `Filtering (${filtered.length})` : "Filter"}
          </button>
          {setupActive && (
            <button onClick={() => setSetupActive(false)} className="text-xs text-muted hover:text-foreground">
              Clear
            </button>
          )}
        </div>
        {setupActive && (
          <p className="text-xs text-muted">
            Showing people who meditate within 1 hour of your time (UTC-adjusted).
            Your settings will pre-fill the application form below.
          </p>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {filters.map((f) => {
          const count = counts[f.key];
          if (f.key !== "all" && count === 0) return null;
          const active = filter === f.key;
          return (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                active
                  ? "bg-accent/15 text-accent border border-accent/30"
                  : "bg-card text-muted border border-border hover:border-accent/30"
              }`}
            >
              {f.label}
              <span className="ml-1.5 text-xs opacity-70">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Table - Desktop */}
      <div className="hidden sm:block overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-card text-left">
              <th className="px-4 py-3 font-medium w-36">Person</th>
              <th className="px-4 py-3 font-medium w-28">Location</th>
              <th className="px-4 py-3 font-medium w-28">Meditates at</th>
              <th className="px-4 py-3 font-medium">Practice</th>
              <th className="px-4 py-3 font-medium w-28">
                {onRequestMatch ? "Status / Request" : "Status"}
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((e) => {
              const st = STATUS_CONFIG[e.status] ?? STATUS_CONFIG.pending;
              return (
                <tr key={e.id} className="border-b border-border last:border-0 transition-colors hover:bg-card-hover">
                  <td className="px-4 py-3">
                    <div className="font-medium">{e.name || e.email}</div>
                    <div className="text-xs text-muted">{e.email}</div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-sm">{e.city || "—"}</div>
                    <div className="text-xs text-muted">{shortTz(e.timezone)}</div>
                  </td>
                  <td className="px-4 py-3">
                    {e.morningTime ? (
                      <>
                        <div className="text-sm font-medium">{e.morningTime} {shortTz(e.timezone)}</div>
                        <div className="text-xs text-muted">
                          {(() => {
                            const utcH = toUtcHour(e.morningTime, e.timezone || "");
                            return utcH !== null ? `${String(utcH).padStart(2,"0")}:00 UTC` : "—";
                          })()}
                        </div>
                      </>
                    ) : <span className="text-muted">—</span>}
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-xs">
                      {e.frequency || "—"}, {e.sessionDuration || "—"}
                    </div>
                    <div className="text-xs text-muted">
                      {e.isOldStudent === "Yes" ? "Old student" : e.isOldStudent === "No" ? "New student" : "—"}
                      {e.hasMaintainedPractice && e.hasMaintainedPractice !== "—" && (
                        <> · {e.hasMaintainedPractice} maintained</>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${st.bg} ${st.text}`}
                    >
                      {st.label}
                    </span>
                    {onRequestMatch && (
                      <div className="mt-1.5">
                        <button
                          onClick={() => onRequestMatch(e.id, e.name || e.city || "this person")}
                          className="whitespace-nowrap rounded-lg border border-accent/30 bg-accent/5 px-2.5 py-1 text-xs font-medium text-accent transition-colors hover:bg-accent/15"
                        >
                          Request
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Cards - Mobile */}
      <div className="sm:hidden space-y-3">
        {filtered.map((e) => {
          const st = STATUS_CONFIG[e.status] ?? STATUS_CONFIG.pending;
          return (
            <div key={e.id} className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="font-medium">{e.name || e.email}</div>
                  <div className="text-xs text-muted">{e.city || "—"}{e.timezone ? ` · ${shortTz(e.timezone)}` : ""}</div>
                </div>
                <span
                  className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${st.bg} ${st.text}`}
                >
                  {st.label}
                </span>
              </div>
              <div className="text-xs text-muted mb-3">
                {e.frequency || "—"}, {e.sessionDuration || "—"}
                {e.isOldStudent === "Yes" && " · Old student"}
                {e.hasMaintainedPractice && e.hasMaintainedPractice !== "—" && (
                  <> · {e.hasMaintainedPractice} maintained</>
                )}
              </div>
              {onRequestMatch && (
                <button
                  onClick={() => onRequestMatch(e.id, e.name || e.city || "this person")}
                  className="w-full rounded-lg border border-accent/30 bg-accent/5 px-3 py-2 text-xs font-medium text-accent transition-colors hover:bg-accent/15"
                >
                  Request to match
                </button>
              )}
            </div>
          );
        })}
      </div>

      {counts.pending > 0 && (
        <p className="text-center text-xs text-muted">
          Apply below to get matched with a compatible practice partner.
        </p>
      )}
    </div>
  );
}

function shortTz(tz: string | null): string {
  if (!tz) return "";
  try {
    const now = new Date();
    const fmt = new Intl.DateTimeFormat("en-US", { timeZone: tz, timeZoneName: "shortOffset" });
    const parts = fmt.formatToParts(now);
    const offsetPart = parts.find((p) => p.type === "timeZoneName");
    return offsetPart?.value ?? tz;
  } catch {
    return tz;
  }
}
