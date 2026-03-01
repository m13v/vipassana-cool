import Link from "next/link";
import { TrackedLink } from "@/components/tracked-events";

const days = [
  { num: 1, slug: "day-1" },
  { num: 2, slug: "day-2" },
  { num: 3, slug: "day-3" },
  { num: 4, slug: "day-4" },
  { num: 5, slug: "day-5" },
  { num: 6, slug: "day-6" },
  { num: 7, slug: "day-7" },
  { num: 8, slug: "day-8" },
  { num: 9, slug: "day-9" },
  { num: 10, slug: "day-10" },
];

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="border-b border-border bg-card/50">
        <div className="mx-auto flex max-w-3xl items-center gap-1 overflow-x-auto px-6 py-3 text-sm">
          <Link
            href="/experience"
            className="shrink-0 rounded-md px-3 py-1.5 font-medium text-muted transition-colors hover:bg-card hover:text-foreground"
          >
            Overview
          </Link>
          <span className="text-border">|</span>
          {days.map((day) => (
            <TrackedLink
              key={day.slug}
              href={`/experience/${day.slug}`}
              event="day_strip_click"
              properties={{ day: day.num }}
              className="shrink-0 rounded-md px-2.5 py-1.5 text-muted transition-colors hover:bg-card hover:text-foreground"
            >
              {day.num}
            </TrackedLink>
          ))}
        </div>
      </div>
      {children}
    </>
  );
}
