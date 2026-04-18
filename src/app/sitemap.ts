import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vipassana.cool";

  // Dates based on actual content last-modified (from git history)
  const d = (s: string) => new Date(s);

  return [
    { url: baseUrl, lastModified: d("2026-03-28"), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/guide`, lastModified: d("2026-03-16"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/faq`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/prepare`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/resources`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/experience`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.7 },
    // Day-by-day experience pages
    { url: `${baseUrl}/experience/day-1`, lastModified: d("2026-03-16"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/experience/day-2`, lastModified: d("2026-03-16"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/experience/day-3`, lastModified: d("2026-03-16"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/experience/day-4`, lastModified: d("2026-03-16"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/experience/day-5`, lastModified: d("2026-03-16"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/experience/day-6`, lastModified: d("2026-03-16"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/experience/day-7`, lastModified: d("2026-03-16"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/experience/day-8`, lastModified: d("2026-03-16"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/experience/day-9`, lastModified: d("2026-03-16"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/experience/day-10`, lastModified: d("2026-03-16"), changeFrequency: "monthly", priority: 0.7 },
    // FAQ detail pages
    { url: `${baseUrl}/faq/is-vipassana-safe`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq/why-is-vipassana-free`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq/can-i-leave-early`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq/is-vipassana-a-cult`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq/vipassana-vs-therapy`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq/vipassana-with-adhd-anxiety`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq/is-vipassana-right-for-me`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq/vipassana-and-depression`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq/what-to-expect`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq/can-i-do-shorter-sessions`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq/is-vipassana-worth-it`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.8 },
    // Packing list
    { url: `${baseUrl}/prepare/packing-list`, lastModified: d("2026-03-16"), changeFrequency: "monthly", priority: 0.7 },
    // Guide pages
    { url: `${baseUrl}/guide/daily-practice`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide/after-retreat`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guide/risks-and-safety`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guide/vipassana-vs-other-meditation`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guide/course-application-tips`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guide/scientific-evidence`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guide/course-progression`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide/dhamma-service`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide/vipassana-for-addiction`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide/vipassana-and-sleep`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide/vipassana-for-pain`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide/anapana-and-vipassana-explained`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guide/sensations-and-experiences`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guide/vipassana-and-relationships`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide/how-vipassana-changes-you`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide/restarting-your-practice`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide/group-sittings`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide/old-student-path`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide/recognizing-progress`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide/first-course-tips`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guide/find-a-retreat`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guide/vipassana-meaning`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide/vipassana-for-beginners`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/guide/vipassana-benefits`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guide/vipassana-at-home`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide/free-meditation-retreats`, lastModified: d("2026-03-19"), changeFrequency: "monthly", priority: 0.8 },
    // Topic guides (t/)
    { url: `${baseUrl}/t/vipassana-psychosis`, lastModified: d("2026-04-17"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/t/is-vipassana-a-cult`, lastModified: d("2026-04-17"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/t/goenka-cult`, lastModified: d("2026-04-17"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/t/anapana-and-vipassana`, lastModified: d("2026-04-17"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/t/after-vipassana-daily-practice-rewire-habits`, lastModified: d("2026-04-17"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/t/matthew-diakonov`, lastModified: d("2026-04-17"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/t/gross-sensation`, lastModified: d("2026-04-18"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/t/gross-sensation-meaning`, lastModified: d("2026-04-18"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/t/vipassana-cult`, lastModified: d("2026-04-18"), changeFrequency: "monthly", priority: 0.8 },
    // Practice Buddy
    { url: `${baseUrl}/practice-buddy/how-it-works`, lastModified: d("2026-03-28"), changeFrequency: "monthly", priority: 0.8 },
    // Legal / info pages
    { url: `${baseUrl}/about`, lastModified: d("2026-03-31"), changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/privacy`, lastModified: d("2026-03-16"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/disclaimer`, lastModified: d("2026-03-16"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: d("2026-03-16"), changeFrequency: "monthly" as const, priority: 0.3 },
  ];
}
