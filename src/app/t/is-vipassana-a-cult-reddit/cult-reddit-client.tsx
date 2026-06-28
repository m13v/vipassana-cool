"use client";

import { motion } from "framer-motion";

type Referent = {
  tag: string;
  label: string;
  verdict: string;
  body: string;
  cleared: boolean;
};

const referents: Referent[] = [
  {
    tag: "1",
    label: "The technique",
    verdict: "Not a cult",
    body: "A meditation method. You can read about it, listen to the recorded discourses on YouTube, and walk away with it. A method has no members, no dues, and no gate to keep you in.",
    cleared: true,
  },
  {
    tag: "2",
    label: "The organization",
    verdict: "Not a cult",
    body: "200+ centers in 90+ countries, no living leader since 2013, no successor, courses run on donation only. There is no entity that profits from you or holds anything over you after day 10.",
    cleared: true,
  },
  {
    tag: "3",
    label: "The old-student layer",
    verdict: "Where the fair criticism lives",
    body: "The social culture among returning students. This is where 'don't mix techniques' and 'this is the only pure way' get repeated. It is real, it is worth pushing back on, and it is still not the same thing as control.",
    cleared: false,
  },
];

export function ThreeReferents() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {referents.map((r, i) => (
        <motion.div
          key={r.tag}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ type: "spring", stiffness: 240, damping: 26, delay: i * 0.1 }}
          className={`rounded-2xl border p-5 ${
            r.cleared
              ? "border-zinc-200 bg-white"
              : "border-teal-200 bg-teal-50"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white">
              {r.tag}
            </span>
            <span
              className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                r.cleared
                  ? "bg-zinc-100 text-zinc-600"
                  : "bg-teal-100 text-teal-700"
              }`}
            >
              {r.verdict}
            </span>
          </div>
          <h3 className="mt-4 text-lg font-semibold text-zinc-900">{r.label}</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">{r.body}</p>
        </motion.div>
      ))}
    </div>
  );
}

export function PullQuote({
  quote,
  cite,
  href,
}: {
  quote: string;
  cite: string;
  href: string;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ type: "spring", stiffness: 200, damping: 24 }}
      className="rounded-2xl border border-zinc-900 bg-zinc-900 p-6 sm:p-8"
    >
      <blockquote className="text-xl font-medium leading-snug text-white sm:text-2xl">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-4 text-sm text-zinc-400">
        {cite} &middot;{" "}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400 underline underline-offset-2"
        >
          read it on dhamma.org
        </a>
      </figcaption>
    </motion.figure>
  );
}
