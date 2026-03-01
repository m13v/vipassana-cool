"use client";

import { useState, useEffect } from "react";
import posthog from "posthog-js";

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

const DURATION_OPTIONS = [
  "15 minutes",
  "20 minutes",
  "30 minutes",
  "45 minutes",
  "1 hour",
];

export function WaitlistSignup({ location = "practice-buddy" }: { location?: string }) {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    isOldStudent: "",
    isGoenkatradition: "",
    timezone: "",
    city: "",
    frequency: "",
    morningTime: "",
    eveningTime: "",
    days: [],
    sessionDuration: "",
    hasMaintainedPractice: "",
    practiceLength: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz) setForm((f) => ({ ...f, timezone: tz }));
    } catch {
      // ignore
    }
  }, []);

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
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      posthog.capture("waitlist_signup", {
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
    return (
      <div id="waitlist-form" className="rounded-xl border border-accent/30 bg-accent/5 p-8 text-center">
        <div className="mb-3 text-2xl">&#10003;</div>
        <h3 className="mb-2 text-lg font-bold">You&apos;re on the list, {form.name.split(" ")[0] || "friend"}!</h3>
        <p className="text-sm text-muted">
          We&apos;ll reach out to <strong>{form.email}</strong> when Practice Buddy is ready
          to match you with a fellow meditator.
        </p>
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
        <h3 className="mb-2 text-xl font-bold">Join the Waitlist</h3>
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
              className={inputClass}
            />
          </div>
        </div>

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
            <input
              id="wb-timezone"
              type="text"
              required
              placeholder="e.g. America/New_York"
              value={form.timezone}
              onChange={(e) => update("timezone", e.target.value)}
              className={inputClass}
            />
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
          {status === "loading" ? "Joining..." : "Join the waitlist"}
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
