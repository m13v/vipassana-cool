"use client";

import { useState } from "react";

type Status = "idle" | "saving" | "saved" | "error";

export function PhonePreferenceCard({
  token,
  initialPhone,
  initialMethod,
}: {
  token: string;
  initialPhone: string;
  initialMethod: string; // "" | "sms" | "whatsapp"
}) {
  const [phone, setPhone] = useState(initialPhone);
  const [method, setMethod] = useState(initialMethod);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [dismissed, setDismissed] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");
    if (phone.trim().length < 5) {
      setErrorMsg("Please enter a valid phone number.");
      return;
    }
    if (method !== "sms" && method !== "whatsapp") {
      setErrorMsg("Pick SMS or WhatsApp so we know how to reach you.");
      return;
    }
    setStatus("saving");
    try {
      const res = await fetch("/api/save-phone-preference", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, phone: phone.trim(), method }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Something went wrong");
      setStatus("saved");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (dismissed && status !== "saved") return null;

  if (status === "saved") {
    const channelLabel = method === "whatsapp" ? "WhatsApp" : "SMS";
    return (
      <div className="mt-5 rounded-xl border border-[#cfe3d6] bg-[#f1f7f3] p-5 text-left">
        <p className="text-sm font-semibold text-[#2c2c2c]">Got it ✓</p>
        <p className="mt-1.5 text-sm text-[#4a6b54] leading-relaxed">
          We&apos;ll {channelLabel === "WhatsApp" ? "WhatsApp" : "text"} you on{" "}
          <span className="font-mono">{phone}</span> when your match confirms.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-5 rounded-xl border border-[#e8e4de] bg-[#faf9f6] p-5 text-left">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-[#2c2c2c]">
            Want a faster heads-up?
          </p>
          <p className="mt-1 text-sm text-[#6b6b6b] leading-relaxed">
            Drop your number and we&apos;ll text or WhatsApp you the second
            your buddy confirms, instead of (only) email.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="text-xs text-[#8b8b8b] hover:text-[#6b6b6b]"
          aria-label="Dismiss"
        >
          Skip
        </button>
      </div>

      <form onSubmit={onSubmit} className="mt-4 space-y-3">
        <div>
          <label
            htmlFor="pp-phone"
            className="mb-1 block text-xs font-medium text-[#2c2c2c]"
          >
            Phone number
          </label>
          <input
            id="pp-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+1 415 555 0123"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-lg border border-[#e0dcd4] bg-white px-3 py-2 text-sm outline-none focus:border-[#8b7355]"
          />
        </div>

        <fieldset>
          <legend className="mb-1 block text-xs font-medium text-[#2c2c2c]">
            Reach me on
          </legend>
          <div className="flex flex-wrap gap-2">
            {[
              { value: "sms", label: "SMS / text" },
              { value: "whatsapp", label: "WhatsApp" },
            ].map((opt) => (
              <label
                key={opt.value}
                className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors ${
                  method === opt.value
                    ? "border-[#8b7355] bg-[#f5efe7] text-[#2c2c2c]"
                    : "border-[#e0dcd4] bg-white text-[#6b6b6b]"
                }`}
              >
                <input
                  type="radio"
                  name="phone-method"
                  value={opt.value}
                  checked={method === opt.value}
                  onChange={() => setMethod(opt.value)}
                  className="accent-[#8b7355]"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </fieldset>

        {errorMsg && (
          <p className="text-xs text-red-600">{errorMsg}</p>
        )}

        <button
          type="submit"
          disabled={status === "saving"}
          className="w-full rounded-lg bg-[#8b7355] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === "saving" ? "Saving…" : "Notify me"}
        </button>

        <p className="text-[11px] leading-snug text-[#8b8b8b]">
          Only used to confirm your match. We won&apos;t share or text marketing.
        </p>
      </form>
    </div>
  );
}
