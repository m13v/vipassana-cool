"use client";

import { useState, useEffect } from "react";
import { posthog } from "@/components/posthog-provider";

type FormData = {
  name: string;
  email: string;
  isOldStudent: string;
  isGoenkatradition: string;
  timezone: string;
  city: string;
  frequency: string;
  morningTime: string;
  eveningTime: string;
  days: string[];
  sessionDuration: string;
  hasMaintainedPractice: string;
  practiceLength: string;
};

const DAYS_OF_WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const GMT_OFFSETS = [
  "GMT-12", "GMT-11", "GMT-10", "GMT-9", "GMT-8", "GMT-7", "GMT-6", "GMT-5",
  "GMT-4", "GMT-3", "GMT-2", "GMT-1", "GMT+0", "GMT+1", "GMT+2", "GMT+3",
  "GMT+3:30", "GMT+4", "GMT+4:30", "GMT+5", "GMT+5:30", "GMT+5:45", "GMT+6",
  "GMT+6:30", "GMT+7", "GMT+8", "GMT+8:30", "GMT+9", "GMT+9:30", "GMT+10",
  "GMT+10:30", "GMT+11", "GMT+12", "GMT+13", "GMT+14",
];

const DURATION_OPTIONS = [
  "15 minutes",
  "20 minutes",
  "30 minutes",
  "45 minutes",
  "1 hour",
];

type Prefill = { timezone?: string; morningTime?: string; frequency?: string };
type LookupStatus = "idle" | "checking" | "new" | "returning_pending" | "returning_matched";

export function WaitlistSignup({ location = "practice-buddy", requestedMatchId, requestedMatchName, prefill }: { location?: string; requestedMatchId?: string; requestedMatchName?: string; prefill?: Prefill }) {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    isOldStudent: "",
    isGoenkatradition: "",
    timezone: "",
    city: "",
    frequency: prefill?.frequency ?? "",
    morningTime: prefill?.morningTime ?? "",
    eveningTime: "",
    days: [],
    sessionDuration: "",
    hasMaintainedPractice: "",
    practiceLength: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [lookupStatus, setLookupStatus] = useState<LookupStatus>("idle");
  const [rematching, setRematching] = useState(false);

  async function handleEmailBlur() {
    const email = form.email.trim();
    if (!email.includes("@")) return;
    setLookupStatus("checking");
    try {
      const res = await fetch(`/api/waitlist/lookup?email=${encodeURIComponent(email)}`);
      const data = await res.json();
      if (!data.found) {
        setLookupStatus("new");
        return;
      }
      // Pre-fill form with existing data
      setForm((f) => ({
        ...f,
        name: data.name ?? f.name,
        isOldStudent: data.isOldStudent ?? f.isOldStudent,
        isGoenkatradition: data.isGoenkatradition ?? f.isGoenkatradition,
        timezone: data.timezone ?? f.timezone,
        city: data.city ?? f.city,
        frequency: data.frequency ?? f.frequency,
        morningTime: data.morningTime ?? f.morningTime,
        eveningTime: data.eveningTime ?? f.eveningTime,
        days: data.days?.length ? data.days : f.days,
        sessionDuration: data.sessionDuration ?? f.sessionDuration,
        hasMaintainedPractice: data.hasMaintainedPractice ?? f.hasMaintainedPractice,
        practiceLength: data.practiceLength ?? f.practiceLength,
      }));
      setLookupStatus(data.status === "matched" ? "returning_matched" : "returning_pending");
    } catch {
      setLookupStatus("new");
    }
  }

  useEffect(() => {
    try {
      if (prefill?.timezone) {
        setForm((f) => ({ ...f, timezone: prefill.timezone! }));
      } else {
        const ianaZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const parts = new Intl.DateTimeFormat("en", { timeZone: ianaZone, timeZoneName: "shortOffset" }).formatToParts(new Date());
        const offset = parts.find((p) => p.type === "timeZoneName")?.value ?? "";
        const gmt = offset.replace("UTC", "GMT+0") || "";
        if (gmt) setForm((f) => ({ ...f, timezone: gmt }));
      }
    } catch { /* ignore */ }
  }, [prefill?.timezone]);

  function update(field: keyof FormData, value: string | string[]) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function toggleDay(day: string) {
    setForm((f) => ({
      ...f,
      days: f.days.includes(day)
        ? f.days.filter((d) => d !== day)
        : [...f.days, day],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, requestedMatchId: requestedMatchId || undefined }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Something went wrong");
      }

      const resData = await res.json();
      setRematching(resData.rematching === true);
      setStatus("success");
      posthog.capture("newsletter_subscribed", {
        source: "waitlist",
        location,
        frequency: form.frequency,
        is_old_student: form.isOldStudent,
        has_maintained_practice: form.hasMaintainedPractice,
        session_duration: form.sessionDuration,
      });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    const isReturning = lookupStatus === "returning_pending" || lookupStatus === "returning_matched";
    return (
      <div id="waitlist-form" className="rounded-xl border border-accent/30 bg-accent/5 p-8 text-center">
        <div className="mb-3 text-2xl">&#10003;</div>
        {rematching ? (
          <>
            <h3 className="mb-2 text-lg font-bold">We&apos;ll find you a new match</h3>
            <p className="text-sm text-muted">
              Your schedule preferences have changed, so we&apos;ll reconsider your match and reach out to <strong>{form.email}</strong> when we find the right person.
            </p>
          </>
        ) : isReturning ? (
          <>
            <h3 className="mb-2 text-lg font-bold">Preferences updated</h3>
            <p className="text-sm text-muted">
              We&apos;ve saved your updated preferences for <strong>{form.email}</strong>.
            </p>
          </>
        ) : (
          <>
            <h3 className="mb-2 text-lg font-bold">You&apos;re on the list, {form.name.split(" ")[0] || "friend"}!</h3>
            <p className="text-sm text-muted">
              We&apos;ll reach out to <strong>{form.email}</strong> when Practice Buddy is ready
              to match you with a fellow meditator.
            </p>
          </>
        )}
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-accent";
  const labelClass = "mb-1.5 block text-sm font-medium";
  const radioGroupClass = "flex flex-wrap gap-3";
  const radioLabelClass =
    "flex cursor-pointer items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm transition-colors has-[:checked]:border-accent has-[:checked]:bg-accent/5";

  return (
    <div id="waitlist-form" className="rounded-xl border border-border bg-card p-8">
      <div className="mb-8 text-center">
        <h3 className="mb-2 text-xl font-bold">
          {requestedMatchName ? `Request to match with ${requestedMatchName}` : "Apply to Be Matched"}
        </h3>
        <p className="text-sm text-muted">
          Tell us about your practice so we can find the right match for you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name & Email */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="wb-name" className={labelClass}>
              Name
            </label>
            <input
              id="wb-name"
              type="text"
              required
              minLength={2}
              placeholder="Your name"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="wb-email" className={labelClass}>
              Email
            </label>
            <input
              id="wb-email"
              type="email"
              required
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              onBlur={handleEmailBlur}
              className={inputClass}
            />
          </div>
        </div>

        {lookupStatus === "returning_pending" && (
          <div className="rounded-lg border border-accent/30 bg-accent/5 px-4 py-3 text-sm">
            <p className="font-medium">Welcome back — we found your application.</p>
            <p className="mt-0.5 text-muted">Your current preferences are filled in below. Update anything that&apos;s changed and resubmit.</p>
          </div>
        )}
        {lookupStatus === "returning_matched" && (
          <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm">
            <p className="font-medium text-green-800">You&apos;re already matched!</p>
            <p className="mt-0.5 text-green-700">Your current preferences are filled in below. If you update your schedule, timezone, or session length, we&apos;ll reconsider your match and find someone who fits your new preferences.</p>
          </div>
        )}

        {/* Old student */}
        <fieldset>
          <legend className={labelClass}>
            Are you an old student?{" "}
            <span className="font-normal text-muted">(completed at least one 10-day course)</span>
          </legend>
          <div className={radioGroupClass}>
            {["Yes", "No"].map((opt) => (
              <label key={opt} className={radioLabelClass}>
                <input
                  type="radio"
                  name="isOldStudent"
                  value={opt}
                  required
                  checked={form.isOldStudent === opt}
                  onChange={(e) => update("isOldStudent", e.target.value)}
                  className="accent-accent"
                />
                {opt}
              </label>
            ))}
          </div>
        </fieldset>

        {/* Goenka tradition */}
        <fieldset>
          <legend className={labelClass}>
            Are you a student in the tradition of Sayagyi U Ba Khin?{" "}
            <span className="font-normal text-muted">(as taught by S.N. Goenka)</span>
          </legend>
          <div className={radioGroupClass}>
            {["Yes", "No"].map((opt) => (
              <label key={opt} className={radioLabelClass}>
                <input
                  type="radio"
                  name="isGoenkatradition"
                  value={opt}
                  required
                  checked={form.isGoenkatradition === opt}
                  onChange={(e) => update("isGoenkatradition", e.target.value)}
                  className="accent-accent"
                />
                {opt}
              </label>
            ))}
          </div>
        </fieldset>

        {/* Location */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="wb-city" className={labelClass}>
              City
            </label>
            <input
              id="wb-city"
              type="text"
              required
              placeholder="e.g. San Francisco"
              value={form.city}
              onChange={(e) => update("city", e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="wb-timezone" className={labelClass}>
              Time zone
            </label>
            <select
              id="wb-timezone"
              required
              value={form.timezone}
              onChange={(e) => update("timezone", e.target.value)}
              className={inputClass}
            >
              <option value="">Select timezone</option>
              {GMT_OFFSETS.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
            <p className="mt-1 text-xs text-muted/60">Auto-detected — change if incorrect</p>
          </div>
        </div>

        <hr className="border-border" />

        {/* Practice schedule */}
        <fieldset>
          <legend className={labelClass}>How often do you want to meditate?</legend>
          <div className={radioGroupClass}>
            {["Once a day", "Twice a day"].map((opt) => (
              <label key={opt} className={radioLabelClass}>
                <input
                  type="radio"
                  name="frequency"
                  value={opt}
                  required
                  checked={form.frequency === opt}
                  onChange={(e) => update("frequency", e.target.value)}
                  className="accent-accent"
                />
                {opt}
              </label>
            ))}
          </div>
        </fieldset>

        {/* Session duration */}
        <fieldset>
          <legend className={labelClass}>How long is each session?</legend>
          <div className={radioGroupClass}>
            {DURATION_OPTIONS.map((opt) => (
              <label key={opt} className={radioLabelClass}>
                <input
                  type="radio"
                  name="sessionDuration"
                  value={opt}
                  required
                  checked={form.sessionDuration === opt}
                  onChange={(e) => update("sessionDuration", e.target.value)}
                  className="accent-accent"
                />
                {opt}
              </label>
            ))}
          </div>
        </fieldset>

        {/* Preferred times */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="wb-morning" className={labelClass}>
              Morning sit time
            </label>
            <input
              id="wb-morning"
              type="time"
              value={form.morningTime}
              onChange={(e) => update("morningTime", e.target.value)}
              className={inputClass}
            />
          </div>
          {form.frequency === "Twice a day" && (
            <div>
              <label htmlFor="wb-evening" className={labelClass}>
                Evening sit time
              </label>
              <input
                id="wb-evening"
                type="time"
                value={form.eveningTime}
                onChange={(e) => update("eveningTime", e.target.value)}
                className={inputClass}
              />
            </div>
          )}
        </div>

        {/* Days of the week */}
        <fieldset>
          <legend className={labelClass}>Which days do you plan to sit?</legend>
          <div className="flex flex-wrap gap-2">
            {DAYS_OF_WEEK.map((day) => (
              <label
                key={day}
                className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors ${
                  form.days.includes(day)
                    ? "border-accent bg-accent/5 text-foreground"
                    : "border-border text-muted"
                }`}
              >
                <input
                  type="checkbox"
                  checked={form.days.includes(day)}
                  onChange={() => toggleDay(day)}
                  className="sr-only"
                />
                {day.slice(0, 3)}
              </label>
            ))}
          </div>
        </fieldset>

        <hr className="border-border" />

        {/* Current practice */}
        <fieldset>
          <legend className={labelClass}>
            Have you maintained a daily practice since your last course?
          </legend>
          <div className={radioGroupClass}>
            {["Yes", "Partially", "No"].map((opt) => (
              <label key={opt} className={radioLabelClass}>
                <input
                  type="radio"
                  name="hasMaintainedPractice"
                  value={opt}
                  required
                  checked={form.hasMaintainedPractice === opt}
                  onChange={(e) => update("hasMaintainedPractice", e.target.value)}
                  className="accent-accent"
                />
                {opt}
              </label>
            ))}
          </div>
        </fieldset>

        {(form.hasMaintainedPractice === "Yes" ||
          form.hasMaintainedPractice === "Partially") && (
          <div>
            <label htmlFor="wb-practice-length" className={labelClass}>
              For how long?
            </label>
            <input
              id="wb-practice-length"
              type="text"
              placeholder="e.g. 6 months, 2 years, since my first course"
              value={form.practiceLength}
              onChange={(e) => update("practiceLength", e.target.value)}
              className={inputClass}
            />
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === "loading"
            ? "Submitting..."
            : requestedMatchName
              ? `Request to match with ${requestedMatchName}`
              : (lookupStatus === "returning_pending" || lookupStatus === "returning_matched")
                ? "Update my preferences"
                : "Apply to be matched"
          }
        </button>

        {status === "error" && (
          <p className="text-center text-sm text-red-500">{errorMsg}</p>
        )}

        <p className="text-center text-xs text-muted/60">
          No spam. We&apos;ll only email you about Practice Buddy.
        </p>
      </form>
    </div>
  );
}
