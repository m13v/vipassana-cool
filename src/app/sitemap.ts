import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vipassana.cool";
  const now = new Date("2026-03-19");

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/guide`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/prepare`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/resources`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/experience`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // Day-by-day experience pages
    { url: `${baseUrl}/experience/day-1`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/experience/day-2`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/experience/day-3`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/experience/day-4`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/experience/day-5`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/experience/day-6`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/experience/day-7`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/experience/day-8`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/experience/day-9`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/experience/day-10`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // FAQ detail pages
    { url: `${baseUrl}/faq/is-vipassana-safe`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq/why-is-vipassana-free`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq/can-i-leave-early`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq/is-vipassana-a-cult`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq/vipassana-vs-therapy`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq/vipassana-with-adhd-anxiety`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq/is-vipassana-right-for-me`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq/vipassana-and-depression`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq/what-to-expect`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq/can-i-do-shorter-sessions`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq/is-vipassana-worth-it`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Packing list
    { url: `${baseUrl}/prepare/packing-list`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // Guide pages
    { url: `${baseUrl}/guide/daily-practice`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide/after-retreat`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guide/risks-and-safety`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guide/vipassana-vs-other-meditation`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guide/course-application-tips`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guide/scientific-evidence`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guide/course-progression`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide/dhamma-service`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide/vipassana-for-addiction`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide/vipassana-and-sleep`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide/vipassana-for-pain`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide/anapana-and-vipassana-explained`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guide/sensations-and-experiences`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guide/vipassana-and-relationships`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide/how-vipassana-changes-you`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide/restarting-your-practice`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide/group-sittings`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide/old-student-path`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide/recognizing-progress`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide/first-course-tips`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guide/find-a-retreat`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guide/vipassana-meaning`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide/vipassana-for-beginners`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/guide/vipassana-benefits`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guide/vipassana-at-home`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide/free-meditation-retreats`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Practice Buddy
    { url: `${baseUrl}/practice-buddy/how-it-works`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Legal / info pages
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.3 },
  ];
}
