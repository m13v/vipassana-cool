import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // AI search crawlers — explicitly allowed for AI search visibility
      {
        userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User"],
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      // Training-only crawlers — blocked (no search benefit)
      {
        userAgent: "CCBot",
        disallow: "/",
      },
      {
        userAgent: "anthropic-ai",
        disallow: "/",
      },
      {
        userAgent: "cohere-ai",
        disallow: "/",
      },
      {
        userAgent: "Bytespider",
        disallow: "/",
      },
      {
        userAgent: "Diffbot",
        disallow: "/",
      },
    ],
    sitemap: "https://vipassana.cool/sitemap.xml",
  };
}
