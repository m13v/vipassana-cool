import Link from "next/link";
import { PageComments } from "@/components/comments";
import { TrackedLink } from "@/components/tracked-events";

const days = [
  { num: 1, slug: "day-1", label: "Day 1" },
  { num: 2, slug: "day-2", label: "Day 2" },
  { num: 3, slug: "day-3", label: "Day 3" },
  { num: 4, slug: "day-4", label: "Day 4" },
  { num: 5, slug: "day-5", label: "Day 5" },
  { num: 6, slug: "day-6", label: "Day 6" },
  { num: 7, slug: "day-7", label: "Day 7" },
  { num: 8, slug: "day-8", label: "Day 8" },
  { num: 9, slug: "day-9", label: "Day 9" },
  { num: 10, slug: "day-10", label: "Day 10" },
];

export function DayPage({
  day,
  title,
  children,
}: {
  day: number;
  title: string;
  children: React.ReactNode;
}) {
  const prev = days.find((d) => d.num === day - 1);
  const next = days.find((d) => d.num === day + 1);

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/experience"
        className="mb-4 inline-block text-sm text-muted hover:text-accent"
      >
        &larr; Back to Experience
      </Link>
      <p className="mb-4 text-sm font-medium tracking-widest uppercase text-accent">
        Day {day} of 10
      </p>
      <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h1>

      <div className="space-y-6 text-muted">{children}</div>

      {/* Prev / Next navigation */}
      <div className="mt-16 flex items-center justify-between border-t border-border pt-8">
        {prev ? (
          <TrackedLink
            href={`/experience/${prev.slug}`}
            event="day_nav_click"
            properties={{ from: day, to: prev.num, direction: "prev" }}
            className="text-sm font-medium text-accent hover:text-foreground"
          >
            &larr; {prev.label}
          </TrackedLink>
        ) : (
          <span />
        )}
        {next ? (
          <TrackedLink
            href={`/experience/${next.slug}`}
            event="day_nav_click"
            properties={{ from: day, to: next.num, direction: "next" }}
            className="text-sm font-medium text-accent hover:text-foreground"
          >
            {next.label} &rarr;
          </TrackedLink>
        ) : (
          <TrackedLink
            href="/experience"
            event="day_nav_click"
            properties={{ from: day, to: 0, direction: "next" }}
            className="text-sm font-medium text-accent hover:text-foreground"
          >
            Full Experience &rarr;
          </TrackedLink>
        )}
      </div>

      <PageComments pageId={`experience-day-${day}`} />
    </article>
  );
}
