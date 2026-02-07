"use client";

// Reference: 881 days of practice as of 2026-02-07
const BASE_COUNT = 881;
const REFERENCE_DATE = new Date("2026-02-07T00:00:00");

function getDayCount() {
  const now = new Date();
  const diffMs = now.getTime() - REFERENCE_DATE.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  return BASE_COUNT + diffDays;
}

export function DayCounter() {
  return <>{getDayCount()}+</>;
}
