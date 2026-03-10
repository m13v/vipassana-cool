"use client";

import { useState, useEffect, useCallback } from "react";

type WaitlistPerson = {
  id: string;
  firstName: string | null;
  city: string | null;
  timezone: string | null;
  frequency: string | null;
  sessionDuration: string | null;
  morningTime: string | null;
  eveningTime: string | null;
  days: string[];
  isOldStudent: string | null;
  isGoenkatradition: string | null;
  hasMaintainedPractice: string | null;
  practiceLength: string | null;
  requestedMatchId: string | null;
  status: string;
  createdAt: string | null;
};

type MatchPerson = {
  id: string;
  firstName: string | null;
  city: string | null;
  timezone: string | null;
  frequency: string | null;
  sessionDuration: string | null;
};

type MatchRecord = {
  id: string;
  status: string;
  createdAt: string | null;
  notes: string | null;
  personA: MatchPerson;
  personB: MatchPerson;
};

export function MatchingDashboard() {
  const [secret, setSecret] = useState("");
  const [authed, setAuthed] = useState(false);
  const [entries, setEntries] = useState<WaitlistPerson[]>([]);
  const [matches, setMatches] = useState<MatchRecord[]>([]);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [syncing, setSyncing] = useState(false);
  const [matching, setMatching] = useState(false);
  const [message, setMessage] = useState("");

  const headers = useCallback(() => ({
    Authorization: `Bearer ${secret}`,
    "Content-Type": "application/json",
  }), [secret]);

  const fetchData = useCallback(async () => {
    const [wRes, mRes] = await Promise.all([
      fetch("/api/admin/waitlist", { headers: headers() }),
      fetch("/api/admin/matches", { headers: headers() }),
    ]);
    if (wRes.ok) {
      const wData = await wRes.json();
      setEntries(wData.entries);
    }
    if (mRes.ok) {
      const mData = await mRes.json();
      setMatches(mData.matches);
    }
  }, [headers]);

  useEffect(() => {
    const saved = sessionStorage.getItem("admin_secret");
    if (saved) {
      setSecret(saved);
      setAuthed(true);
    }
  }, []);

  useEffect(() => {
    if (authed) fetchData();
  }, [authed, fetchData]);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    sessionStorage.setItem("admin_secret", secret);
    setAuthed(true);
  }

  async function handleSync() {
    setSyncing(true);
    setMessage("");
    try {
      const res = await fetch("/api/admin/sync-waitlist", {
        method: "POST",
        headers: headers(),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(`Synced ${data.synced} entries (${data.created} new)`);
        fetchData();
      } else {
        setMessage(`Sync failed: ${data.error}`);
      }
    } catch {
      setMessage("Sync failed");
    }
    setSyncing(false);
  }

  function toggleSelect(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else if (next.size < 2) {
        next.add(id);
      }
      return next;
    });
  }

  async function handleMatch() {
    const ids = Array.from(selected);
    if (ids.length !== 2) return;
    setMatching(true);
    setMessage("");
    try {
      const res = await fetch("/api/admin/matches", {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({ personAId: ids[0], personBId: ids[1] }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Match created and intro email sent!");
        setSelected(new Set());
        fetchData();
      } else {
        setMessage(`Match failed: ${data.error}`);
      }
    } catch {
      setMessage("Match failed");
    }
    setMatching(false);
  }

  async function handleMatchStatus(matchId: string, status: string) {
    await fetch(`/api/admin/matches/${matchId}`, {
      method: "PATCH",
      headers: headers(),
      body: JSON.stringify({ status }),
    });
    fetchData();
  }

  if (!authed) {
    return (
      <form onSubmit={handleLogin} className="mx-auto max-w-sm space-y-4">
        <label className="block text-sm font-medium">Admin Secret</label>
        <input
          type="password"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent"
          placeholder="Enter admin secret"
        />
        <button
          type="submit"
          className="w-full rounded-lg bg-accent px-4 py-3 text-sm font-medium text-white hover:opacity-90"
        >
          Login
        </button>
      </form>
    );
  }

  const pending = entries.filter((e) => e.status === "pending");
  const nonPending = entries.filter((e) => e.status !== "pending");

  return (
    <div className="space-y-8">
      {/* Actions bar */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleSync}
          disabled={syncing}
          className="rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-card disabled:opacity-50"
        >
          {syncing ? "Syncing..." : "Sync from PostHog"}
        </button>
        {selected.size === 2 && (
          <button
            onClick={handleMatch}
            disabled={matching}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:opacity-90 disabled:opacity-50"
          >
            {matching ? "Matching..." : "Match Selected (2)"}
          </button>
        )}
        {selected.size === 1 && (
          <span className="text-sm text-muted">Select one more person to match</span>
        )}
        {message && (
          <span className="text-sm text-accent">{message}</span>
        )}
      </div>

      {/* Pending entries table */}
      <div>
        <h2 className="mb-3 text-lg font-semibold">
          Pending ({pending.length})
        </h2>
        {pending.length === 0 ? (
          <p className="text-sm text-muted">No pending entries. Try syncing from PostHog.</p>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-card text-left">
                  <th className="px-3 py-2 font-medium"></th>
                  <th className="px-3 py-2 font-medium">Name</th>
                  <th className="px-3 py-2 font-medium">City</th>
                  <th className="px-3 py-2 font-medium">Timezone</th>
                  <th className="px-3 py-2 font-medium">Frequency</th>
                  <th className="px-3 py-2 font-medium">Duration</th>
                  <th className="px-3 py-2 font-medium">Times</th>
                  <th className="px-3 py-2 font-medium">Old Student</th>
                  <th className="px-3 py-2 font-medium">Practice</th>
                  <th className="px-3 py-2 font-medium">Signed Up</th>
                </tr>
              </thead>
              <tbody>
                {pending.map((e) => (
                  <tr
                    key={e.id}
                    onClick={() => toggleSelect(e.id)}
                    className={`cursor-pointer border-b border-border transition-colors ${
                      selected.has(e.id)
                        ? "bg-accent/10"
                        : isRequestedBy(e.id, pending)
                        ? "bg-blue-50/60 hover:bg-blue-50"
                        : "hover:bg-card"
                    }`}
                  >
                    <td className="px-3 py-2">
                      <input
                        type="checkbox"
                        checked={selected.has(e.id)}
                        onChange={() => toggleSelect(e.id)}
                        className="accent-accent"
                      />
                    </td>
                    <td className="px-3 py-2 font-medium">
                      <div className="flex flex-col gap-0.5">
                        <span>{e.firstName || "—"}</span>
                        {e.requestedMatchId && (
                          <span className="text-xs font-normal text-blue-600">
                            → requested {pending.find(p => p.id === e.requestedMatchId)?.firstName || e.requestedMatchId.slice(0, 8)}
                          </span>
                        )}
                        {isRequestedBy(e.id, pending) && (
                          <span className="text-xs font-normal text-purple-600">
                            ← requested by {pending.find(p => p.requestedMatchId === e.id)?.firstName || "someone"}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-3 py-2">{e.city || "—"}</td>
                    <td className="px-3 py-2 text-xs">{shortTz(e.timezone)}</td>
                    <td className="px-3 py-2">{e.frequency || "—"}</td>
                    <td className="px-3 py-2">{e.sessionDuration || "—"}</td>
                    <td className="px-3 py-2 text-xs">
                      {e.morningTime && `AM ${e.morningTime}`}
                      {e.morningTime && e.eveningTime && " · "}
                      {e.eveningTime && `PM ${e.eveningTime}`}
                      {!e.morningTime && !e.eveningTime && "—"}
                    </td>
                    <td className="px-3 py-2">
                      <StatusBadge value={e.isOldStudent} />
                    </td>
                    <td className="px-3 py-2">
                      <span className="text-xs">
                        {e.hasMaintainedPractice || "—"}
                        {e.practiceLength && ` (${e.practiceLength})`}
                      </span>
                    </td>
                    <td className="px-3 py-2 text-xs text-muted">
                      {e.createdAt ? new Date(e.createdAt).toLocaleDateString() : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Already matched */}
      {nonPending.length > 0 && (
        <div>
          <h2 className="mb-3 text-lg font-semibold">
            Matched ({nonPending.length})
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-card text-left">
                  <th className="px-3 py-2 font-medium">Name</th>
                  <th className="px-3 py-2 font-medium">City</th>
                  <th className="px-3 py-2 font-medium">Timezone</th>
                  <th className="px-3 py-2 font-medium">Frequency</th>
                  <th className="px-3 py-2 font-medium">Duration</th>
                  <th className="px-3 py-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {nonPending.map((e) => (
                  <tr key={e.id} className="border-b border-border">
                    <td className="px-3 py-2 font-medium">{e.firstName || "—"}</td>
                    <td className="px-3 py-2">{e.city || "—"}</td>
                    <td className="px-3 py-2 text-xs">{shortTz(e.timezone)}</td>
                    <td className="px-3 py-2">{e.frequency || "—"}</td>
                    <td className="px-3 py-2">{e.sessionDuration || "—"}</td>
                    <td className="px-3 py-2">
                      <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                        {e.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Matches */}
      {matches.length > 0 && (
        <div>
          <h2 className="mb-3 text-lg font-semibold">
            Matches ({matches.length})
          </h2>
          <div className="space-y-3">
            {matches.map((m) => (
              <div
                key={m.id}
                className="flex items-center justify-between rounded-xl border border-border p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="text-sm">
                    <strong>{m.personA.firstName || "?"}</strong>
                    <span className="text-muted"> ({m.personA.city || "?"})</span>
                  </div>
                  <span className="text-muted">&harr;</span>
                  <div className="text-sm">
                    <strong>{m.personB.firstName || "?"}</strong>
                    <span className="text-muted"> ({m.personB.city || "?"})</span>
                  </div>
                  <span className={`ml-2 rounded-full px-2 py-0.5 text-xs font-medium ${
                    m.status === "active" ? "bg-green-100 text-green-700" :
                    m.status === "ended" ? "bg-red-100 text-red-700" :
                    "bg-yellow-100 text-yellow-700"
                  }`}>
                    {m.status}
                  </span>
                </div>
                <div className="flex gap-2">
                  {m.status === "pending" && (
                    <button
                      onClick={() => handleMatchStatus(m.id, "active")}
                      className="rounded border border-border px-3 py-1 text-xs hover:bg-card"
                    >
                      Mark Active
                    </button>
                  )}
                  {m.status !== "ended" && (
                    <button
                      onClick={() => handleMatchStatus(m.id, "ended")}
                      className="rounded border border-border px-3 py-1 text-xs text-red-500 hover:bg-card"
                    >
                      End Match
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function isRequestedBy(id: string, entries: WaitlistPerson[]): boolean {
  return entries.some(e => e.requestedMatchId === id);
}

function shortTz(tz: string | null): string {
  if (!tz) return "—";
  const parts = tz.split("/");
  return parts[parts.length - 1].replace(/_/g, " ");
}

function StatusBadge({ value }: { value: string | null }) {
  if (!value) return <span className="text-muted">—</span>;
  const color = value === "Yes" ? "text-green-600" : value === "No" ? "text-red-500" : "text-muted";
  return <span className={`text-xs font-medium ${color}`}>{value}</span>;
}
