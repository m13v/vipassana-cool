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
  passCount: number;
  contactCount: number;
  createdAt: string | null;
  priorMatchedIds: string[];
};

type MatchPerson = {
  id: string;
  firstName: string | null;
  city: string | null;
  timezone: string | null;
  frequency: string | null;
  sessionDuration: string | null;
};

type MatchEngagement = {
  confirmation: { a: boolean; b: boolean };
  replies: { a: boolean; b: boolean };
  meetClicks: { a: number; b: number };
  rsvp: { a: string | null; b: string | null };
};

type MatchRecord = {
  id: string;
  status: string;
  createdAt: string | null;
  notes: string | null;
  personAConfirmed: boolean;
  personBConfirmed: boolean;
  personA: MatchPerson;
  personB: MatchPerson;
  engagement?: MatchEngagement;
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
        setMessage(`⚠ ${data.error}`);
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
    const order: Record<string, number> = { ready: 0, pending: 1, engaged: 2, contacted: 3, matched: 4, ended: 5 };
    return (order[a.status] ?? 9) - (order[b.status] ?? 9);
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
                        {getPriorMatchWarning(e.id, selected, entries) && (
                          <span className="text-xs font-normal text-red-500" title={getPriorMatchWarning(e.id, selected, entries)!}>
                            ⚠ matched before
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-3 py-2">
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        e.status === "ready"     ? "bg-emerald-100 text-emerald-700" :
                        e.status === "pending"   ? "bg-yellow-100 text-yellow-700" :
                        e.status === "contacted" ? "bg-blue-100 text-blue-700" :
                        e.status === "engaged"   ? "bg-orange-100 text-orange-700" :
                        e.status === "matched"   ? "bg-green-100 text-green-700" :
                        "bg-gray-100 text-gray-500"
                      }`}>
                        {e.status === "contacted" && e.contactCount > 1 ? `contacted (${e.contactCount})` :
                         e.passCount > 0 ? `${e.status} (${e.passCount} declined)` :
                         e.status}
                      </span>
                    </td>
                    <td className="px-3 py-2 max-w-[100px] truncate text-xs" title={e.city || ""}>{e.city || "—"}</td>
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
                        {em.direction === "outbound" && <DeliveryBadge status={em.status} />}
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
            {[...matches].sort((a, b) => {
              const order: Record<string, number> = { confirming: 0, pending: 1, replied: 2, scheduling: 3, active: 4, ended: 5 };
              return (order[a.status] ?? 9) - (order[b.status] ?? 9);
            }).map((m) => (
              <div
                key={m.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border p-4"
              >
                <div className="flex flex-wrap items-center gap-3">
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
                    m.status === "active"      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                    m.status === "scheduling"  ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" :
                    m.status === "replied"     ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" :
                    m.status === "ended"       ? "bg-red-100 text-red-700" :
                    "bg-yellow-100 text-yellow-700"
                  }`}>
                    {m.status === "confirming" ? "awaiting confirm" :
                     m.status === "pending"    ? "intro sent" :
                     m.status === "replied"    ? "1 replied" :
                     m.status === "scheduling" ? "scheduling" :
                     m.status}
                  </span>
                  <EngagementCell engagement={m.engagement} />
                </div>
                <div className="flex gap-2">
                  {(m.status === "pending" || m.status === "replied" || m.status === "scheduling") && (
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

// Returns a warning string if this person was previously matched with any currently selected person
function getPriorMatchWarning(id: string, selected: Set<string>, entries: WaitlistPerson[]): string | null {
  const me = entries.find(e => e.id === id);
  if (!me || selected.has(id)) return null;
  for (const selectedId of selected) {
    if (me.priorMatchedIds.includes(selectedId)) {
      const name = entries.find(e => e.id === selectedId)?.firstName || "selected";
      return `Previously matched with ${name}`;
    }
  }
  return null;
}

const STATUS_RANK: Record<string, number> = {
  clicked: 6, opened: 5, delivered: 4, sent: 3, delivery_delayed: 2, bounced: 1, complained: 1,
};

function DeliveryBadge({ status }: { status: string }) {
  const cfg: Record<string, { label: string; cls: string }> = {
    delivered:        { label: "delivered",  cls: "bg-green-100 text-green-700" },
    opened:           { label: "opened",     cls: "bg-emerald-100 text-emerald-700" },
    clicked:          { label: "clicked",    cls: "bg-emerald-100 text-emerald-700" },
    sent:             { label: "sent",       cls: "bg-gray-100 text-gray-500" },
    delivery_delayed: { label: "delayed",    cls: "bg-yellow-100 text-yellow-700" },
    bounced:          { label: "⚠ bounced",  cls: "bg-red-100 text-red-700" },
    complained:       { label: "⚠ spam",     cls: "bg-red-100 text-red-700" },
  };
  const c = cfg[status];
  if (!c) return null;
  return (
    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${c.cls}`}>
      {c.label}
    </span>
  );
}

function threadSummaryLabel(thread: EmailRecord[]): string {
  const outbound = thread.filter(em => em.direction === "outbound");
  if (outbound.length === 0) return "📧 sent";
  const hasBounce = outbound.some(em => em.status === "bounced" || em.status === "complained");
  if (hasBounce) return "⚠️ bounced";
  const best = outbound.reduce((a, b) =>
    (STATUS_RANK[b.status] ?? 0) > (STATUS_RANK[a.status] ?? 0) ? b : a
  );
  if (best.status === "opened" || best.status === "clicked") return "👁 opened";
  if (best.status === "delivered") return "✓ delivered";
  return "📧 sent";
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
        {inbound.length > 0 ? `💬 ${inbound.length} repl${inbound.length === 1 ? "y" : "ies"}` : threadSummaryLabel(thread)}
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

// Renders a compact engagement summary for a match: confirmation clicks, intro replies,
// meet link clicks, and calendar RSVP. Green = positive, red = negative,
// grey = neutral/missing. Fits on one wide row alongside match status.
function EngagementCell({ engagement }: { engagement?: MatchEngagement }) {
  if (!engagement) {
    return <span className="text-xs text-muted">(no engagement data)</span>;
  }
  const { confirmation, replies, meetClicks, rsvp } = engagement;

  const pill = (active: boolean, labelOn: string, labelOff: string, title: string) => (
    <span
      title={title}
      className={`rounded-full px-1.5 py-0.5 text-[10px] font-medium ${
        active ? "bg-emerald-100 text-emerald-700" : "bg-gray-100 text-gray-400"
      }`}
    >
      {active ? labelOn : labelOff}
    </span>
  );

  const rsvpPill = (who: "A" | "B", value: string | null) => {
    const cfg: Record<string, { label: string; cls: string }> = {
      accepted:     { label: "accepted",     cls: "bg-emerald-100 text-emerald-700" },
      declined:     { label: "declined",     cls: "bg-red-100 text-red-700" },
      tentative:    { label: "tentative",    cls: "bg-yellow-100 text-yellow-700" },
      needsAction:  { label: "no action",    cls: "bg-gray-100 text-gray-500" },
      deleted:      { label: "deleted",      cls: "bg-red-100 text-red-700" },
    };
    const key = (value ?? "").toLowerCase();
    const c = cfg[key] ?? { label: value ?? "no cal", cls: "bg-gray-100 text-gray-400" };
    return (
      <span
        title={`Calendar RSVP (${who}): ${value ?? "none"}`}
        className={`rounded-full px-1.5 py-0.5 text-[10px] font-medium ${c.cls}`}
      >
        {who}: {c.label}
      </span>
    );
  };

  const clickPill = (who: "A" | "B", count: number) => (
    <span
      title={`Meet link clicks (${who}): ${count}`}
      className={`rounded-full px-1.5 py-0.5 text-[10px] font-medium ${
        count > 0 ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-400"
      }`}
    >
      {who}: {count} click{count === 1 ? "" : "s"}
    </span>
  );

  return (
    <div className="flex flex-wrap items-center gap-1" title="Engagement signals">
      <div className="flex items-center gap-0.5">
        <span className="text-[10px] uppercase tracking-wide text-muted">confirm</span>
        {pill(confirmation.a, "A yes", "A ?", "Person A clicked yes on confirmation email")}
        {pill(confirmation.b, "B yes", "B ?", "Person B clicked yes on confirmation email")}
      </div>
      <div className="flex items-center gap-0.5">
        <span className="text-[10px] uppercase tracking-wide text-muted">reply</span>
        {pill(replies.a, "A replied", "A quiet", "Person A replied to intro email")}
        {pill(replies.b, "B replied", "B quiet", "Person B replied to intro email")}
      </div>
      <div className="flex items-center gap-0.5">
        <span className="text-[10px] uppercase tracking-wide text-muted">meet</span>
        {clickPill("A", meetClicks.a)}
        {clickPill("B", meetClicks.b)}
      </div>
      <div className="flex items-center gap-0.5">
        <span className="text-[10px] uppercase tracking-wide text-muted">rsvp</span>
        {rsvpPill("A", rsvp.a)}
        {rsvpPill("B", rsvp.b)}
      </div>
    </div>
  );
}
