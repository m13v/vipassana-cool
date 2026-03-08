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
  isOldStudent: string | null;
  hasMaintainedPractice: string | null;
  status: string;
  createdAt: string | null;
};

const STATUS_CONFIG: Record<string, { bg: string; text: string; label: string }> = {
  matched: { bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-700 dark:text-green-400", label: "Matched" },
  pending: { bg: "bg-yellow-100 dark:bg-yellow-900/30", text: "text-yellow-700 dark:text-yellow-400", label: "Waiting" },
};

type Filter = "all" | "pending" | "matched";

export function WaitlistTable({ onRequestMatch }: { onRequestMatch?: (personId: string, personName: string) => void }) {
  const [entries, setEntries] = useState<WaitlistPerson[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    fetch("/api/waitlist/entries")
      .then((r) => r.json())
      .then((data) => {
        setEntries(data.entries || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const counts = useMemo(() => ({
    all: entries.length,
    pending: entries.filter((e) => e.status === "pending").length,
    matched: entries.filter((e) => e.status === "matched").length,
  }), [entries]);

  const filtered = useMemo(
    () => (filter === "all" ? entries : entries.filter((e) => e.status === filter)),
    [entries, filter]
  );

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
              <th className="px-4 py-3 font-medium">Person</th>
              <th className="px-4 py-3 font-medium">Location</th>
              <th className="px-4 py-3 font-medium">Practice</th>
              <th className="px-4 py-3 font-medium">Status</th>
              {onRequestMatch && <th className="px-4 py-3 font-medium" />}
            </tr>
          </thead>
          <tbody>
            {filtered.map((e) => {
              const st = STATUS_CONFIG[e.status] ?? STATUS_CONFIG.pending;
              return (
                <tr key={e.id} className="border-b border-border last:border-0 transition-colors hover:bg-card-hover">
                  <td className="px-4 py-3">
                    <div className="font-medium">{e.name || "Anonymous"}</div>
                    <div className="text-xs text-muted">{e.email}</div>
                  </td>
                  <td className="px-4 py-3">
                    <div>{e.city || "—"}</div>
                    <div className="text-xs text-muted">{shortTz(e.timezone)}</div>
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
                  </td>
                  {onRequestMatch && (
                    <td className="px-4 py-3">
                      <button
                        onClick={() => onRequestMatch(e.id, e.name || e.city || "this person")}
                        className="whitespace-nowrap rounded-lg border border-accent/30 bg-accent/5 px-3 py-1.5 text-xs font-medium text-accent transition-colors hover:bg-accent/15"
                      >
                        Request to match
                      </button>
                    </td>
                  )}
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
                  <div className="font-medium">{e.name || "Anonymous"}</div>
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
  const parts = tz.split("/");
  return parts[parts.length - 1].replace(/_/g, " ");
}
