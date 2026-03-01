"use client";

import { useState } from "react";
import posthog from "posthog-js";

export function EmailCapture({ location = "prepare" }: { location?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      posthog.capture("checklist_signup", { location });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-accent/30 bg-accent/5 p-8 text-center">
        <div className="mb-3 text-2xl">&#10003;</div>
        <h3 className="mb-2 text-lg font-bold">Check your inbox!</h3>
        <p className="text-sm text-muted">
          The retreat checklist is on its way to <strong>{email}</strong>.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-card p-8">
      <div className="mb-6 text-center">
        <h3 className="mb-2 text-xl font-bold">
          Get the 10-Day Retreat Checklist
        </h3>
        <p className="text-sm text-muted">
          A practitioner-tested packing list and insider tips — delivered to your inbox.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "Send me the checklist"}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-3 text-center text-sm text-red-500">{errorMsg}</p>
      )}
      <p className="mt-4 text-center text-xs text-muted/60">
        No spam. Just the checklist.
      </p>
    </div>
  );
}
