"use client";

import { useState, useEffect, useCallback } from "react";

type EmailRecord = {
  id: number;
  direction: string;
  from_email: string;
  to_email: string;
  subject: string;
  body_text: string | null;
  status: string;
  created_at: string;
};

type WaitlistPerson = {
  id: string;
  email: string;
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
  researchNotes: string | null;
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
  const [emails, setEmails] = useState<EmailRecord[]>([]);
  const [syncing, setSyncing] = useState(false);
  const [matching, setMatching] = useState(false);
  const [message, setMessage] = useState("");
  const [editingNotes, setEditingNotes] = useState<Record<string, string>>({});
  const [savingNotes, setSavingNotes] = useState<Set<string>>(new Set());
  const [threadModal, setThreadModal] = useState<{ person: WaitlistPerson; thread: EmailRecord[] } | null>(null);

  const headers = useCallback(() => ({
    Authorization: `Bearer ${secret}`,
    "Content-Type": "application/json",
  }), [secret]);

  const fetchData = useCallback(async () => {
    const [wRes, mRes] = await Promise.all([
      fetch("/api/admin/waitlist", { headers: headers() }),
      fetch("/api/admin/matches", { headers: headers() }),
    ]);
    const eRes = await fetch("/api/admin/emails", { headers: headers() });
    if (wRes.ok) {
      const wData = await wRes.json();
      setEntries(wData.entries);
    }
    if (mRes.ok) {
      const mData = await mRes.json();
      setMatches(mData.matches);
    }
    if (eRes.ok) {
      const eData = await eRes.json();
      setEmails(eData.emails);
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

  async function saveNotes(id: string) {
    const notes = editingNotes[id] ?? "";
    setSavingNotes((prev) => new Set(prev).add(id));
    await fetch("/api/admin/waitlist", {
      method: "PATCH",
      headers: headers(),
      body: JSON.stringify({ id, researchNotes: notes }),
    });
    setSavingNotes((prev) => { const n = new Set(prev); n.delete(id); return n; });
    fetchData();
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

  const sortedEntries = [...entries].sort((a, b) => {
    const order = { pending: 0, matched: 1, ended: 2 };
    return (order[a.status as keyof typeof order] ?? 9) - (order[b.status as keyof typeof order] ?? 9);
  });

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

      {/* Unified people table */}
      <div>
        <h2 className="mb-3 text-lg font-semibold">
          All People ({entries.length})
        </h2>
        {entries.length === 0 ? (
          <p className="text-sm text-muted">No entries. Try syncing from PostHog.</p>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-card text-left">
                  <th className="px-3 py-2 font-medium"></th>
                  <th className="px-3 py-2 font-medium">Name</th>
                  <th className="px-3 py-2 font-medium">Status</th>
                  <th className="px-3 py-2 font-medium">City</th>
                  <th className="px-3 py-2 font-medium">TZ</th>
                  <th className="px-3 py-2 font-medium">Freq</th>
                  <th className="px-3 py-2 font-medium">Dur</th>
                  <th className="px-3 py-2 font-medium">Local</th>
                  <th className="px-3 py-2 font-medium text-accent cursor-pointer select-none" title="Sort by UTC time">UTC ↕</th>
                  <th className="px-3 py-2 font-medium">Old?</th>
                  <th className="px-3 py-2 font-medium max-w-[120px]">Practice</th>
                  <th className="px-3 py-2 font-medium">Signed Up</th>
                  <th className="px-3 py-2 font-medium">Thread</th>
                  <th className="px-3 py-2 font-medium">Research Notes</th>
                </tr>
              </thead>
              <tbody>
                {sortedEntries.map((e) => (
                  <tr
                    key={e.id}
                    onClick={() => e.status === "pending" && toggleSelect(e.id)}
                    className={`border-b border-border transition-colors ${
                      e.status === "pending" ? "cursor-pointer" : "opacity-60"
                    } ${
                      selected.has(e.id)
                        ? "bg-accent/10"
                        : isRequestedBy(e.id, entries)
                        ? "bg-blue-50/60 hover:bg-blue-50"
                        : e.status === "pending"
                        ? "hover:bg-card"
                        : ""
                    }`}
                  >
                    <td className="px-3 py-2">
                      {e.status === "pending" && (
                        <input
                          type="checkbox"
                          checked={selected.has(e.id)}
                          onChange={() => toggleSelect(e.id)}
                          className="accent-accent"
                        />
                      )}
                    </td>
                    <td className="px-3 py-2 font-medium">
                      <div className="flex flex-col gap-0.5">
                        <span>{e.firstName || "—"}</span>
                        {e.requestedMatchId && (
                          <span className="text-xs font-normal text-blue-600">
                            → requested {entries.find(p => p.id === e.requestedMatchId)?.firstName || e.requestedMatchId.slice(0, 8)}
                          </span>
                        )}
                        {isRequestedBy(e.id, entries) && (
                          <span className="text-xs font-normal text-purple-600">
                            ← requested by {entries.find(p => p.requestedMatchId === e.id)?.firstName || "someone"}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-3 py-2">
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        e.status === "pending" ? "bg-yellow-100 text-yellow-700" :
                        e.status === "matched" ? "bg-green-100 text-green-700" :
                        "bg-red-100 text-red-700"
                      }`}>
                        {e.status}
                      </span>
                    </td>
                    <td className="px-3 py-2">{e.city || "—"}</td>
                    <td className="px-3 py-2 text-xs">{shortTz(e.timezone)}</td>
                    <td className="px-3 py-2">{e.frequency || "—"}</td>
                    <td className="px-3 py-2">{e.sessionDuration || "—"}</td>
                    <td className="px-3 py-2 text-xs">
                      {e.morningTime || "—"}
                      {e.eveningTime && ` / ${e.eveningTime}`}
                    </td>
                    <td className="px-3 py-2 text-xs font-mono font-medium text-accent">
                      {toUtcTime(e.morningTime, e.timezone)}
                    </td>
                    <td className="px-3 py-2">
                      <StatusBadge value={e.isOldStudent} />
                    </td>
                    <td className="px-3 py-2 max-w-[120px]">
                      <span className="text-xs">
                        {e.hasMaintainedPractice || "—"}
                        {e.practiceLength && <><br /><span className="text-muted">{e.practiceLength}</span></>}
                      </span>
                    </td>
                    <td className="px-3 py-2 text-xs text-muted">
                      {e.createdAt ? new Date(e.createdAt).toLocaleDateString() : "—"}
                    </td>
                    <td className="px-3 py-2" onClick={(ev) => ev.stopPropagation()}>
                      <ThreadCell person={e} emails={emails} onOpen={(thread) => setThreadModal({ person: e, thread })} />
                    </td>
                    <td className="px-3 py-2" onClick={(ev) => ev.stopPropagation()}>
                      <div className="flex items-start gap-1">
                        <textarea
                          rows={2}
                          className="w-48 rounded border border-border bg-background px-2 py-1 text-xs outline-none focus:border-accent resize-none"
                          placeholder="Add research notes…"
                          value={editingNotes[e.id] ?? e.researchNotes ?? ""}
                          onChange={(ev) => setEditingNotes((prev) => ({ ...prev, [e.id]: ev.target.value }))}
                        />
                        {(editingNotes[e.id] !== undefined && editingNotes[e.id] !== (e.researchNotes ?? "")) && (
                          <button
                            onClick={() => saveNotes(e.id)}
                            disabled={savingNotes.has(e.id)}
                            className="rounded bg-accent px-2 py-1 text-xs text-white hover:opacity-90 disabled:opacity-50 whitespace-nowrap"
                          >
                            {savingNotes.has(e.id) ? "…" : "Save"}
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Thread modal */}
      {threadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setThreadModal(null)}>
          <div className="relative max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-background p-6 shadow-xl" onClick={(ev) => ev.stopPropagation()}>
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="font-semibold">{threadModal.person.firstName} — email thread</h3>
                <p className="text-xs text-muted">{threadModal.person.email}</p>
              </div>
              <button onClick={() => setThreadModal(null)} className="text-muted hover:text-foreground text-lg leading-none">✕</button>
            </div>
            {threadModal.thread.length === 0 ? (
              <p className="text-sm text-muted">No emails yet.</p>
            ) : (
              <div className="space-y-4">
                {threadModal.thread.map((em) => (
                  <div key={em.id} className={`rounded-xl border p-4 text-sm ${em.direction === "inbound" ? "border-blue-200 bg-blue-50" : "border-border bg-card"}`}>
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${em.direction === "inbound" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-600"}`}>
                          {em.direction === "inbound" ? "↩ reply" : "→ sent"}
                        </span>
                        <span className="font-medium">{em.subject}</span>
                      </div>
                      <span className="whitespace-nowrap text-xs text-muted">{new Date(em.created_at).toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-muted mb-1">{em.direction === "inbound" ? `From: ${em.from_email}` : `To: ${em.to_email}`}</p>
                    {em.body_text && (
                      <pre className="mt-2 whitespace-pre-wrap text-xs leading-relaxed text-foreground/80 font-sans">
                        {em.body_text.split("\n\nOn ")[0].trim()}
                      </pre>
                    )}
                  </div>
                ))}
              </div>
            )}
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

function ThreadCell({ person, emails, onOpen }: { person: WaitlistPerson; emails: EmailRecord[]; onOpen: (thread: EmailRecord[]) => void }) {
  const thread = emails.filter(em =>
    em.from_email.includes(person.email) || em.to_email.includes(person.email)
  );
  const inbound = thread.filter(em => em.direction === "inbound");
  const last = thread[thread.length - 1];

  if (thread.length === 0) {
    return <span className="text-xs text-muted">—</span>;
  }

  return (
    <button
      onClick={() => onOpen(thread)}
      className="flex flex-col gap-0.5 text-left hover:opacity-80"
    >
      <span className="text-xs font-medium">
        {inbound.length > 0 ? `💬 ${inbound.length} repl${inbound.length === 1 ? "y" : "ies"}` : "📧 sent"}
      </span>
      {last && (
        <span className="text-xs text-muted">
          {new Date(last.created_at).toLocaleDateString()}
        </span>
      )}
    </button>
  );
}

function shortTz(tz: string | null): string {
  if (!tz) return "—";
  try {
    const offset = new Intl.DateTimeFormat("en", { timeZone: tz, timeZoneName: "shortOffset" })
      .formatToParts(new Date())
      .find((p) => p.type === "timeZoneName")?.value ?? tz;
    return offset.replace("GMT+0", "GMT").replace("UTC", "GMT");
  } catch {
    return tz.split("/").pop()?.replace(/_/g, " ") ?? tz;
  }
}

function tzOffsetMinutes(tz: string): number {
  // Handles both IANA timezones and GMT offset strings like "GMT+5:30"
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

function toUtcTime(localTime: string | null, timezone: string | null): string {
  if (!localTime || !timezone) return "—";
  try {
    const [h, m] = localTime.split(":").map(Number);
    if (isNaN(h)) return "—";
    const offsetMins = tzOffsetMinutes(timezone);
    const utcMins = (((h * 60 + (m || 0)) - offsetMins) % 1440 + 1440) % 1440;
    const uh = Math.floor(utcMins / 60);
    const um = utcMins % 60;
    return `${String(uh).padStart(2, "0")}:${String(um).padStart(2, "0")}`;
  } catch { return "—"; }
}

function StatusBadge({ value }: { value: string | null }) {
  if (!value) return <span className="text-muted">—</span>;
  const color = value === "Yes" ? "text-green-600" : value === "No" ? "text-red-500" : "text-muted";
  return <span className={`text-xs font-medium ${color}`}>{value}</span>;
}
