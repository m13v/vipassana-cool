import type { NextConfig } from "next";
import { withSeoContent } from "@seo/components/next";

const nextConfig: NextConfig = {
  transpilePackages: ["@seo/components", "@m13v/seo-components"],
  async redirects() {
    return [
      { source: "/t/buddy-practice", destination: "/t/practice-buddy", permanent: true },
      { source: "/t/accountability-and-practice-buddies", destination: "/t/practice-buddy", permanent: true },
      { source: "/alternative/ai-meditation-apps-vs-daily-vipassana-practice", destination: "/alternative/ai-meditation-apps-vs-vipassana-daily-practice-2026", permanent: true },
      { source: "/t/ai-meditation-apps-for-vipassana-practitioners", destination: "/alternative/ai-meditation-apps-vs-vipassana-daily-practice-2026", permanent: true },
      { source: "/t/rebuild-daily-vipassana-practice-after-course", destination: "/t/after-vipassana-daily-practice-rewire-habits", permanent: true },
      { source: "/t/daily-practice-after-vipassana-course", destination: "/t/after-vipassana-daily-practice-rewire-habits", permanent: true },
      { source: "/t/same-time-same-cushion-daily-sit-habit", destination: "/t/preserving-daily-practice-discipline", permanent: true },
      { source: "/t/vipassana-breath-observation-meditation", destination: "/t/anapana-and-vipassana", permanent: true },
      { source: "/t/vipassana-dangers", destination: "/t/vipassana-danger", permanent: true },
      { source: "/t/is-vipassana-safe", destination: "/t/vipassana-danger", permanent: true },
      { source: "/t/vipassana-zagro-enia", destination: "/t/vipassana-danger", permanent: true },
      { source: "/t/vipassana", destination: "/t/vipassana-meditation", permanent: true },
      { source: "/t/what-is-vipassana-meditation", destination: "/t/vipassana-meditation", permanent: true },
      { source: "/t/is-vipassana-free", destination: "/faq/why-is-vipassana-free", permanent: true },
      { source: "/t/vipassana-10-day-course-registration", destination: "/guide/course-application-tips", permanent: true },
      { source: "/t/vipassana-centre", destination: "/t/vipassana-meditation-centre", permanent: true },
      { source: "/t/vipassana-group-sitting", destination: "/guide/group-sittings", permanent: true },
      { source: "/t/vipassana-group-sitting-near-me", destination: "/guide/group-sittings", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.posthog.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://*.posthog.com https://s4l.ai; frame-src 'self';",
          },
        ],
      },
    ];
  },
};

export default withSeoContent(nextConfig, { contentDir: "src/app/t" });
