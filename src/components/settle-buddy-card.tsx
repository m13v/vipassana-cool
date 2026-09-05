"use client";

import { useState } from "react";

type Status = "idle" | "saving" | "done" | "error";

export function SettleBuddyCard({ token }: { token: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onClick() {
    setErrorMsg("");
    setStatus("saving");
    try {
      const res = await fetch("/api/settle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Something went wrong");
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "done") {
    return (
      <div className="mt-5 rounded-xl border border-[#cfe3d6] bg-[#f1f7f3] p-5 text-left">
        <p className="text-sm font-semibold text-[#2c2c2c]">Done ✓</p>
        <p className="mt-1.5 text-sm text-[#4a6b54] leading-relaxed">
          I&apos;ll stop sending you new match suggestions. Your email still
          works, and you can rejoin any time from{" "}
          <a
            href="https://vipassana.cool/practice-buddy"
            className="underline"
          >
            vipassana.cool/practice-buddy
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="mt-5 rounded-xl border border-[#e8e4de] bg-[#faf9f6] p-5 text-left">
      <p className="mb-2 text-sm font-semibold text-[#2c2c2c]">
        Already have a practice buddy?
      </p>
      <p className="text-sm text-[#6b6b6b] leading-relaxed">
        If you&apos;re already sitting with someone and don&apos;t need new
        matches, I&apos;ll stop sending them. You&apos;ll still get the
        occasional email, and you can rejoin any time.
      </p>
      {errorMsg && <p className="mt-2 text-xs text-red-600">{errorMsg}</p>}
      <button
        type="button"
        onClick={onClick}
        disabled={status === "saving"}
        className="mt-4 w-full rounded-lg bg-[#8b7355] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "saving" ? "Saving…" : "I already have a buddy, stop matching me"}
      </button>
    </div>
  );
}
