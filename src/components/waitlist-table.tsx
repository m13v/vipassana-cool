"use client";

import { useState, useEffect } from "react";

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

export function WaitlistTable() {
  const [entries, setEntries] = useState<WaitlistPerson[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/waitlist/entries")
      .then((r) => r.json())
      .then((data) => {
        setEntries(data.entries || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

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

  const pending = entries.filter((e) => e.status === "pending");
  const matched = entries.filter((e) => e.status === "matched");

  return (
    <div className="space-y-6">
      <div className="flex items-baseline justify-between">
        <h3 className="text-lg font-semibold">
          {entries.length} {entries.length === 1 ? "person" : "people"} on the waitlist
        </h3>
        {matched.length > 0 && (
          <span className="text-sm text-muted">
            {matched.length} already matched
          </span>
        )}
      </div>

      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-card text-left">
              <th className="px-4 py-3 font-medium">Person</th>
              <th className="px-4 py-3 font-medium">Location</th>
              <th className="px-4 py-3 font-medium">Practice</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((e) => (
              <tr key={e.id} className="border-b border-border last:border-0">
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
                    className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      e.status === "matched"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                    }`}
                  >
                    {e.status === "matched" ? "Matched" : "Waiting"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {pending.length > 0 && (
        <p className="text-center text-xs text-muted">
          Join the waitlist below to get matched with a compatible practice partner.
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
