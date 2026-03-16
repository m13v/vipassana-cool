# SEO Audit Report: vipassana.cool

**Date:** 2026-03-16
**Site:** https://vipassana.cool
**Business Type:** Educational / Informational (Meditation Guide)
**Tech Stack:** Next.js 16 / Vercel / PostgreSQL (Neon)
**Pages Crawled:** 48

---

## Executive Summary

### Overall SEO Health Score: 72/100

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Technical SEO | 74/100 | 25% | 18.5 |
| Content Quality | 82/100 | 25% | 20.5 |
| On-Page SEO | 70/100 | 20% | 14.0 |
| Schema / Structured Data | 45/100 | 10% | 4.5 |
| Performance (CWV) | 85/100 | 10% | 8.5 |
| Images | 60/100 | 5% | 3.0 |
| AI Search Readiness (GEO) | 72/100 | 5% | 3.6 |
| **Total** | | **100%** | **72.6** |

### Top 5 Critical Issues

1. **No canonical tags on any page** — search engines must guess preferred URLs
2. **No privacy policy, medical disclaimer, or terms of service** — YMYL site collecting personal data
3. **No OG image** — social shares show blank previews despite `summary_large_image` card
4. **No security headers** — missing CSP, X-Frame-Options, HSTS in next.config.ts
5. **Sitemap lastmod dates are fake** — all 48 URLs use `new Date()`, resetting every build

### Top 5 Quick Wins

1. Add `alternates: { canonical: "/path" }` to every page's metadata export
2. Create an About page with author bio, photo (matthew.jpg already exists), and credentials
3. Add `WebSite` + `Organization` JSON-LD to layout.tsx
4. Add publish/update dates to all content pages
5. Set real `lastModified` dates in sitemap.ts based on git commit history or hardcoded dates

---

## Detailed Findings

### 1. Technical SEO (74/100)

**Strengths:**
- All pages are server-rendered (SSR) — no `"use client"` on page components
- Clean URL structure with proper trailing-slash redirects
- robots.txt correctly allows all crawlers and points to sitemap
- Meta tags (title, description, OG, Twitter) present on every page
- HTTPS enforced via Vercel

**Issues:**

| Priority | Issue | Impact |
|----------|-------|--------|
| Critical | No `<link rel="canonical">` on any page | Search engines may index duplicate URLs |
| High | No OG image set — `summary_large_image` card has no image | Social shares show blank previews |
| High | No security headers in next.config.ts (CSP, X-Frame-Options, X-Content-Type-Options) | Security and trust signals |
| High | Empty next.config.ts — no custom headers, redirects, or security config | Multiple missed optimizations |
| Medium | Sitemap uses `new Date()` for all lastModified — no real dates | Freshness signals are meaningless |
| Medium | No structured data on homepage | Missing sitelinks search box eligibility |
| Low | Keywords meta tag is present but ignored by Google | No harm, but unnecessary |

---

### 2. Content Quality (82/100)

**E-E-A-T Composite Score: 75.1/100**

| Signal | Score |
|--------|-------|
| Experience | 85/100 |
| Expertise | 78/100 |
| Authoritativeness | 65/100 |
| Trustworthiness | 72/100 |

**Strengths:**
- Authentic first-hand experience with specific details (60 days of courses completed)
- Honest, balanced coverage — addresses risks, not just benefits
- Scientific evidence page cites actual studies with specific results
- Consistent personal voice throughout — not AI-generated filler
- Good content depth across 48 pages

**Issues:**

| Priority | Issue | Impact |
|----------|-------|--------|
| Critical | No privacy policy, medical disclaimer, or terms of service | YMYL site handling personal data without legal pages |
| High | No dedicated About page with author bio | Expertise/authority not formally established |
| High | No content dates (publish or last-reviewed) on any page | Freshness invisible to search engines and AI |
| Medium | Footer author mention is minimal — name + links only | Weak author attribution |
| Medium | No external citations with links to studies on most pages | Expertise could be stronger |
| Low | Some guide pages could be longer (thin content risk) | Minor impact |

**AI Citation Readiness: 78/100**
- Content is quotable with self-contained paragraphs
- Specific statistics cited (e.g., "anxiety scores dropped from 10 to 3.29")
- Missing: summary blocks at top of pages (optimal: 134-167 words)

---

### 3. On-Page SEO (70/100)

**Strengths:**
- Every page has unique title and description
- Good H1 usage on homepage
- Internal linking between sections
- Keyword-rich URLs (e.g., `/guide/scientific-evidence`, `/faq/is-vipassana-safe`)

**Issues:**

| Priority | Issue | Impact |
|----------|-------|--------|
| High | No image alt texts detected on homepage | Accessibility + image SEO |
| High | Guide H2 headings are statements, not questions | Misses AI query-matching patterns |
| Medium | No breadcrumb navigation (visual or schema) | Navigation clarity + SERP breadcrumbs |
| Medium | Internal linking could be deeper between related guide pages | Link equity distribution |
| Low | Title template uses " | " separator — consider " — " for brand | Minor branding |

---

### 4. Schema / Structured Data (45/100)

**What exists:**
- FAQPage JSON-LD on `/faq` hub (13 Q&A pairs) — valid
- FAQPage JSON-LD on individual FAQ pages (3 Q&A each) — valid
- Implementation via `FaqSchema` component is clean

**What's missing:**

| Priority | Schema Type | Where | Impact |
|----------|------------|-------|--------|
| Critical | WebSite + Organization | layout.tsx (site-wide) | Sitelinks search box, knowledge graph |
| High | BreadcrumbList | All non-homepage pages | Breadcrumb rich results in SERPs |
| High | Article | All /guide/* and /faq/* detail pages | Article rich result eligibility |
| Medium | WebPage | Hub pages (/faq, /guide) | Explicit page typing |

**Note:** Google restricted FAQ rich results to government/healthcare sites (Aug 2023). Existing FAQ schema still benefits AI/LLM discoverability — keep it. Do NOT add HowTo schema (deprecated Sep 2023).

---

### 5. Performance / Core Web Vitals (85/100)

**Strengths:**
- Next.js SSR with automatic code splitting
- Vercel edge network for fast delivery
- Minimal JavaScript — no heavy client-side frameworks
- Geist font loaded via `next/font` (optimized)

**Potential concerns:**
- PostHog and Hyvor Talk are third-party scripts that could impact LCP/INP
- No explicit image optimization strategy visible (next/image usage not confirmed)

---

### 6. Images (60/100)

| Priority | Issue | Impact |
|----------|-------|--------|
| High | Missing alt text on images | Accessibility + image search |
| Medium | Only one image detected (matthew.jpg) — site is text-heavy | Missed engagement + image search traffic |
| Medium | No OG image for social sharing | Blank social previews |
| Low | Consider adding diagrams/infographics to guide pages | Content enrichment |

---

### 7. AI Search Readiness / GEO (72/100)

**Platform Scores:**

| Platform | Score |
|----------|-------|
| Google AI Overviews | 70/100 |
| ChatGPT | 75/100 |
| Perplexity | 72/100 |
| Bing Copilot | 65/100 |

**Strengths:**
- All AI crawlers allowed (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot)
- llms.txt is comprehensive and well-structured (30+ page links)
- SSR content available in initial HTML
- Content is genuinely quotable with specific data points

**Issues:**

| Priority | Issue | Impact |
|----------|-------|--------|
| High | No Article schema + author/date metadata on guide pages | AI Overviews and Bing Copilot need this |
| High | Guide headings are statements, not questions | AI systems match queries to question-formatted content |
| Medium | No summary blocks at top of pages (optimal: 134-167 words) | Below AI citation extraction sweet spot |
| Medium | No YouTube/video presence | YouTube mentions correlate 0.737 with AI citations |
| Medium | Multi-modal content score: 38/100 | Text-only limits engagement signals |

---

## Prioritized Action Plan

### Critical (Fix Immediately)

1. **Add canonical URLs to all pages**
   - Add `alternates: { canonical: "https://vipassana.cool/path" }` to every page's metadata export

2. **Add privacy policy + medical disclaimer**
   - Create `/privacy` and `/disclaimer` pages
   - Add links to footer
   - Essential for YMYL compliance

3. **Add WebSite + Organization schema to layout.tsx**
   - Site-wide JSON-LD with name, URL, search action, author info

### High Priority (Fix Within 1 Week)

4. **Create an About page** (`/about`)
   - Author photo (matthew.jpg exists), bio, meditation background (60 days of courses)
   - Links to social profiles
   - Establishes E-E-A-T

5. **Add OG image**
   - Create `opengraph-image.tsx` or static image in `/public`
   - Use for all social sharing

6. **Add BreadcrumbList schema** to all sub-pages

7. **Add Article schema** to all `/guide/*` and `/faq/*` detail pages
   - Include `datePublished`, `dateModified`, `author`, `publisher`

8. **Fix sitemap dates**
   - Replace `new Date()` with real dates (git history or hardcoded)
   - Each page should have its actual last-modified date

9. **Add security headers** to next.config.ts
   - CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy

10. **Add image alt texts** to all images

### Medium Priority (Fix Within 1 Month)

11. **Add publish/update dates** to all content pages (visible to users)

12. **Rewrite guide H2 headings as questions** for AI query matching

13. **Add 134-167 word summary blocks** at the top of guide and FAQ pages

14. **Add breadcrumb navigation** (visual UI component)

15. **Improve internal linking** between related guide pages

16. **Add terms of service** page

### Low Priority (Backlog)

17. **Add infographics/diagrams** to guide pages for visual engagement

18. **Consider YouTube content** for multi-modal presence

19. **Add WebPage schema** to hub pages

20. **Remove keywords meta tag** (not harmful, but unnecessary)

---

## Files Generated

- `seo-audit/FULL-AUDIT-REPORT.md` — This report
- `seo-audit/technical.md` — Detailed technical SEO findings
- `seo-audit/content.md` — Content quality and E-E-A-T analysis
- `seo-audit/schema.md` — Schema markup audit and recommendations
- `seo-audit/geo.md` — AI search readiness (GEO) analysis
