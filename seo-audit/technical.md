# Technical SEO Audit: vipassana.cool

**Date:** 2026-03-16
**Stack:** Next.js 16.1.6, React 19, Tailwind CSS 4, Vercel hosting
**Overall Technical Score: 74/100**

---

## Executive Summary

vipassana.cool is a well-structured Next.js site with solid SSR foundations, proper meta tags on all pages, and good crawlability. The main gaps are: missing canonical URLs across the site, no OG image, missing security headers (CSP, X-Frame-Options), no JSON-LD on the homepage and non-FAQ pages, and stale sitemap `lastmod` dates. The AI crawler management (llms.txt) is a notable positive.

---

## 1. Crawlability

**Status: PASS (with notes)**
**Score: 85/100**

### robots.txt
- **Location:** Generated via `src/app/robots.ts`
- **Content:** Allows all user agents on `/`, references sitemap correctly
- **Issue (Medium):** No rules for AI crawlers (GPTBot, ClaudeBot, Google-Extended, etc.). Consider explicitly allowing or blocking these based on your content strategy.
- **Issue (Low):** No `Disallow` rules for `/admin/*`, `/api/*`, or `/match-confirmed`. While admin/match-confirmed pages set `noindex` via meta tags, blocking at the robots.txt level provides defense-in-depth.

### Sitemap
- **Location:** `https://vipassana.cool/sitemap.xml` (generated from `src/app/sitemap.ts`)
- **URL Count:** 48 URLs
- **Issue (Medium):** All 48 URLs share the identical `lastmod` timestamp (`2026-03-16T15:28:30.933Z`). This is because `new Date()` is called at build time, making every URL appear equally fresh. Search engines use `lastmod` to prioritize crawl -- uniform timestamps reduce its signal value.
  - **Fix:** Use actual file modification dates or hardcode realistic dates for each page. For static content, set the date when content was last meaningfully updated.
- **Issue (Low):** `changefreq` and `priority` are largely ignored by Google (officially deprecated from Google's perspective), but they do not cause harm.
- **Positive:** Admin pages (`/admin/matching`, `/match-confirmed`) are correctly excluded from the sitemap.

### AI Crawler Readiness
- **Positive:** `public/llms.txt` is present and well-structured with site description and full page index.
- **Issue (Low):** No `llms-full.txt` with complete page content for deeper AI ingestion.

---

## 2. Indexability

**Status: NEEDS IMPROVEMENT**
**Score: 60/100**

### Canonical Tags
- **Issue (Critical):** No `<link rel="canonical">` tag is present on any page (confirmed on both homepage and subpages via live HTML inspection). While `metadataBase` is set in the root layout, Next.js only auto-generates canonical tags when `alternates.canonical` is explicitly set in the metadata export.
  - **Impact:** Without canonical tags, search engines must guess the preferred URL version. This can lead to duplicate content issues (e.g., `vipassana.cool/guide` vs `vipassana.cool/guide/` before the 308 redirect is processed).
  - **Fix (root layout):**
    ```typescript
    // In src/app/layout.tsx metadata export, add:
    alternates: {
      canonical: "/",
    },
    ```
    Then on each page, set `alternates: { canonical: "/path" }` in its metadata export, or use `generateMetadata` to derive it automatically.

### noindex Pages
- **Positive:** `/admin/matching` and `/match-confirmed` correctly set `robots: { index: false, follow: false }`.
- **Positive:** All 48 public content pages export metadata with unique titles and descriptions.

### Thin Content Risk
- No thin content detected. Homepage has substantial text content rendered server-side.

---

## 3. Security Headers

**Status: NEEDS IMPROVEMENT**
**Score: 55/100**

### Headers Present (from Vercel response)
| Header | Value | Status |
|--------|-------|--------|
| HTTPS | Yes (308 redirect from HTTP) | PASS |
| `strict-transport-security` | `max-age=63072000` (~2 years) | PASS |
| `x-vercel-cache` | HIT | PASS |

### Headers Missing
| Header | Risk | Priority |
|--------|------|----------|
| `Content-Security-Policy` | XSS protection | High |
| `X-Frame-Options` | Clickjacking protection | High |
| `X-Content-Type-Options` | MIME-sniffing protection | Medium |
| `Referrer-Policy` | Privacy leakage | Medium |
| `Permissions-Policy` | Feature access control | Low |

- **Fix:** Add security headers via `next.config.ts`:
  ```typescript
  const nextConfig: NextConfig = {
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
              value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://us.i.posthog.com https://talk.hyvor.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://us.i.posthog.com https://talk.hyvor.com; frame-src https://talk.hyvor.com;",
            },
          ],
        },
      ];
    },
  };
  ```

### Additional Concern
- **Issue (Medium):** `access-control-allow-origin: *` is set on all responses. This is Vercel's default but means any origin can fetch your pages. For a content site this is low risk, but worth noting.

---

## 4. URL Structure

**Status: PASS**
**Score: 90/100**

### Clean URLs
- **Positive:** All URLs use clean, descriptive, lowercase slug patterns (e.g., `/faq/is-vipassana-safe`, `/guide/daily-practice`, `/experience/day-1`).
- **Positive:** No query parameters on content pages.
- **Positive:** Logical hierarchy (`/guide/[topic]`, `/faq/[question]`, `/experience/day-[n]`).

### Trailing Slash Handling
- **Positive:** Trailing slashes are 308-redirected to non-trailing versions (e.g., `/guide/` -> `/guide`). This is consistent across the site.

### Redirect Chain
- HTTP -> HTTPS: 308 Permanent Redirect (correct)
- www -> non-www: 307 Temporary Redirect
  - **Issue (Medium):** The www-to-non-www redirect uses a 307 (temporary) instead of a 301/308 (permanent). This means search engines will not consolidate link equity from `www.vipassana.cool` to `vipassana.cool`.
  - **Fix:** Configure Vercel to issue a 308 for the www redirect. This is typically set via the Vercel dashboard under Domains settings -- ensure the `www` variant is configured as a redirect (not a rewrite) with permanent status.

---

## 5. Mobile Optimization

**Status: PASS**
**Score: 88/100**

### Viewport
- **Positive:** `<meta name="viewport" content="width=device-width, initial-scale=1"/>` is present.

### Responsive Design
- **Positive:** Tailwind CSS responsive utilities used throughout (`sm:`, `md:` breakpoints).
- **Positive:** Navigation has mobile-specific hamburger menu with submenu accordion pattern.
- **Positive:** Grid layouts adapt: `grid-cols-2 sm:grid-cols-4` for stats, `sm:grid-cols-2` for cards.
- **Positive:** `max-w-4xl` constrains content width with `px-6` padding.

### Touch Targets
- **Issue (Low):** Footer social icons use `width="16" height="16"` SVGs. While the `<a>` wrapper may have sufficient padding via Tailwind classes, the visual touch target of 16x16px is below the recommended 48x48px minimum for mobile.
  - **Fix:** Add `p-2` or `min-w-[44px] min-h-[44px]` to the social link wrappers in `footer.tsx`.

### Font Loading
- **Positive:** Geist font is preloaded with `rel="preload"` and `as="font"` for optimal rendering.

---

## 6. Core Web Vitals (Source-Level Analysis)

**Status: NEEDS IMPROVEMENT**
**Score: 70/100**

### LCP (Largest Contentful Paint)
- **Positive:** Homepage hero text (`<h1>`) is server-rendered, no client-side data fetching required for initial paint.
- **Positive:** Single CSS file with `data-precedence="next"` for critical CSS.
- **Positive:** Font preloaded as woff2.
- **Issue (Medium):** 9 JavaScript chunks loaded in `<head>` with `async` attribute. While they do not block rendering, their download competes for bandwidth on slow connections, potentially delaying LCP.

### INP (Interaction to Next Paint)
- **Positive:** PostHog analytics initialization is deferred via `requestIdleCallback` with a 3-second timeout. This prevents analytics from blocking main thread during initial interaction.
- **Issue (Low):** Navigation component is a client component (`"use client"`) with multiple `useState` and `useEffect` hooks. On low-end devices, hydration of the navigation could delay first interaction response.

### CLS (Cumulative Layout Shift)
- **Positive:** No images on the homepage that could cause layout shift (only one image on `/experience` page, using Next.js `<Image>` component which reserves space).
- **Positive:** Font loading uses `next/font/google` which applies `font-display: swap` with size-adjust, minimizing FOIT/FOUT shift.
- **Issue (Medium):** The `<DayCounter>` component in the footer renders dynamically on the client. In the SSR HTML it renders as `918` but if the calculation differs on the client, it could cause a minor layout shift.
- **Issue (Medium):** The Hyvor Talk comments section (`<div class="ht-comments-wrap">`) loads as an empty div and fills with content after the third-party script loads. This will cause CLS unless the container has a minimum height set.
  - **Fix:** Add `min-h-[300px]` or similar to the comments container to reserve space.

---

## 7. Structured Data

**Status: NEEDS IMPROVEMENT**
**Score: 55/100**

### JSON-LD Present
- **Positive:** All 11 FAQ pages include `FAQPage` schema with proper `Question`/`Answer` entities. This enables rich snippet results in Google (expandable FAQ answers in SERPs).

### JSON-LD Missing
- **Issue (High):** No structured data on the homepage. A `WebSite` schema with `SearchAction` (for sitelinks search box) or `Organization` schema would improve SERP presentation.
  - **Fix:** Add to homepage:
    ```json
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Vipassana.cool",
      "url": "https://vipassana.cool",
      "description": "An unofficial guide to Vipassana meditation and dhamma.org"
    }
    ```
- **Issue (Medium):** Guide pages (21 pages) have no structured data. `Article` or `HowTo` schema would be appropriate for pages like `/guide/first-course-tips` or `/prepare/packing-list`.
- **Issue (Medium):** Experience day pages have no `Article` or `BlogPosting` schema. Adding `datePublished`, `author`, and `articleBody` would improve crawl signal.
- **Issue (Low):** No `BreadcrumbList` schema on any page. The site has clear hierarchy (Home > Guide > Topic) that could be expressed as breadcrumbs in SERPs.

---

## 8. JavaScript Rendering

**Status: PASS**
**Score: 90/100**

### SSR vs CSR Analysis
- **Positive:** All page components are Server Components by default (no `"use client"` directive in any `page.tsx` file). This means all content is rendered server-side and fully available to crawlers without JavaScript execution.
- **Positive:** `x-nextjs-prerender: 1` header confirms pages are statically pre-rendered at build time.
- **Positive:** Next.js RSC (React Server Components) payload is included in the HTML for hydration without additional round trips.

### Client Components (Interactive Only)
The following components are client-side only, which is appropriate:
- `Navigation` (hamburger menu, search modal, dropdowns)
- `PostHogProvider` (analytics -- correctly deferred)
- `EmailCapture` (form interaction)
- `PageComments` (Hyvor Talk embed)
- `DayCounter` (dynamic date calculation)
- `TrackedLink` / `TrackedCTA` (click tracking wrappers)

### Hydration
- **Positive:** Client components are leaf nodes that wrap interactive behavior. Core content is never behind a client-side fetch boundary.

---

## 9. IndexNow Protocol

**Status: NOT IMPLEMENTED**
**Score: 0/100**

- **Issue (Medium):** IndexNow is not configured. For a content site with 48 pages that updates infrequently, the benefit is moderate but easy to implement.
  - **Fix:** Create an IndexNow API key file at `public/<key>.txt` and call the IndexNow API from a post-deploy webhook or the existing weekly report cron job.
  - Supported engines: Bing, Yandex, Naver, Seznam.

---

## Prioritized Issue List

### Critical
1. **Missing canonical tags on all pages** -- Add `alternates.canonical` to metadata exports

### High
2. **Missing security headers** (CSP, X-Frame-Options, X-Content-Type-Options) -- Add via `next.config.ts` headers
3. **No structured data on homepage** -- Add `WebSite` JSON-LD schema
4. **No OG image** -- `twitter:card` is set to `summary_large_image` but no image is provided, which will cause blank/generic previews when shared on social media. Add an `og:image` via the metadata export or use Next.js `opengraph-image.tsx` file convention.

### Medium
5. **Sitemap `lastmod` dates all identical** -- Use actual content modification dates instead of `new Date()`
6. **www redirect uses 307 (temporary)** -- Should be 308/301 permanent
7. **Comments container causes CLS** -- Add `min-h` to Hyvor Talk wrapper
8. **No Article/HowTo schema on guide pages** -- Add JSON-LD to the 21 guide pages
9. **No AI crawler rules in robots.txt** -- Add explicit allow/disallow for GPTBot, ClaudeBot, etc.
10. **No IndexNow integration** -- Implement for faster Bing/Yandex indexing

### Low
11. **Footer social icon touch targets too small** -- Increase to 44x44px minimum
12. **No BreadcrumbList schema** -- Add for better SERP presentation
13. **No Disallow for `/api/*` and `/admin/*` in robots.txt** -- Defense-in-depth
14. **No `llms-full.txt`** -- Extend AI readiness with full content file
15. **DayCounter potential CLS** -- Verify server/client value consistency

---

## Files Reviewed

- `/Users/matthewdi/vipassana-cool/src/app/layout.tsx` -- Root layout with metadata config
- `/Users/matthewdi/vipassana-cool/src/app/robots.ts` -- robots.txt generator
- `/Users/matthewdi/vipassana-cool/src/app/sitemap.ts` -- Sitemap generator (all entries use `new Date()`)
- `/Users/matthewdi/vipassana-cool/src/app/page.tsx` -- Homepage (no JSON-LD, no canonical)
- `/Users/matthewdi/vipassana-cool/next.config.ts` -- Empty config (no security headers)
- `/Users/matthewdi/vipassana-cool/src/components/navigation.tsx` -- Client component nav
- `/Users/matthewdi/vipassana-cool/src/components/posthog-provider.tsx` -- Deferred analytics
- `/Users/matthewdi/vipassana-cool/src/components/footer.tsx` -- Small touch targets on social icons
- `/Users/matthewdi/vipassana-cool/public/llms.txt` -- AI crawler readiness file
- `/Users/matthewdi/vipassana-cool/vercel.json` -- Cron config only
