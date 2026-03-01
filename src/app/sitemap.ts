import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vipassana.cool";

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/guide`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/prepare`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/resources`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/experience`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    // Day-by-day experience pages
    { url: `${baseUrl}/experience/day-1`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/experience/day-2`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/experience/day-3`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/experience/day-4`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/experience/day-5`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/experience/day-6`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/experience/day-7`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/experience/day-8`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/experience/day-9`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/experience/day-10`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    // FAQ detail pages
    { url: `${baseUrl}/faq/is-vipassana-safe`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq/why-is-vipassana-free`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq/can-i-leave-early`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq/is-vipassana-a-cult`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq/vipassana-vs-therapy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    // New content pages
    { url: `${baseUrl}/prepare/packing-list`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide/daily-practice`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    // New FAQ detail pages
    { url: `${baseUrl}/faq/vipassana-with-adhd-anxiety`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    // New guide pages — Tier 1
    { url: `${baseUrl}/guide/after-retreat`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guide/risks-and-safety`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guide/vipassana-vs-other-meditation`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guide/course-application-tips`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/guide/scientific-evidence`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    // New guide pages — Tier 3
    { url: `${baseUrl}/guide/course-progression`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide/dhamma-service`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide/vipassana-for-addiction`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide/vipassana-and-sleep`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide/vipassana-for-pain`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
