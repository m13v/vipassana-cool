# GEO Audit Report: vipassana.cool

**Date:** 2026-03-16
**Auditor:** Claude Opus 4.6 (Automated GEO Analysis)
**Site:** https://vipassana.cool
**Framework:** Next.js (App Router)
**Pages analyzed:** 47 indexed URLs

---

## GEO Readiness Score: 72 / 100

| Dimension                    | Weight | Score | Weighted |
|------------------------------|--------|-------|----------|
| Citability                   | 25%    | 78    | 19.5     |
| Structural Readability       | 20%    | 82    | 16.4     |
| Multi-Modal Content          | 15%    | 38    | 5.7      |
| Authority & Brand Signals    | 20%    | 62    | 12.4     |
| Technical Accessibility      | 20%    | 90    | 18.0     |
| **Total**                    |        |       | **72.0** |

---

## 1. AI Crawler Access Status

### robots.txt

The site uses a permissive wildcard rule:

```
User-Agent: *
Allow: /
Sitemap: https://vipassana.cool/sitemap.xml
```

| Crawler          | Purpose           | Status    | Notes                          |
|------------------|-------------------|-----------|--------------------------------|
| GPTBot           | ChatGPT search    | ALLOWED   | No block in robots.txt         |
| OAI-SearchBot    | OpenAI search     | ALLOWED   | No block in robots.txt         |
| ClaudeBot        | Anthropic/Claude  | ALLOWED   | No block in robots.txt         |
| PerplexityBot    | Perplexity search | ALLOWED   | No block in robots.txt         |
| Google-Extended  | Google AI/Gemini  | ALLOWED   | No block in robots.txt         |
| CCBot            | Common Crawl      | ALLOWED   | Consider blocking (training)   |
| anthropic-ai     | Anthropic train   | ALLOWED   | Consider blocking (training)   |
| cohere-ai        | Cohere training   | ALLOWED   | Consider blocking (training)   |
| Bytespider       | ByteDance/TikTok  | ALLOWED   | Consider blocking (training)   |

**Assessment:** All AI search crawlers are allowed, which is correct for maximum AI visibility. However, training-only crawlers (CCBot, anthropic-ai, cohere-ai, Bytespider) are also allowed. Consider adding explicit blocks for training crawlers while keeping search crawlers allowed, to protect content from being used in training without attribution.

**Recommended robots.txt addition:**

```
# Allow AI search crawlers
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

# Block training-only crawlers
User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: cohere-ai
Disallow: /

User-agent: Bytespider
Disallow: /
```

---

## 2. llms.txt Status

**Status:** PRESENT at `/public/llms.txt`
**Accessible at:** https://vipassana.cool/llms.txt
**Format:** Follows the llms.txt specification (Markdown-based)

### Compliance Checklist

| Element                    | Status | Notes                                                |
|----------------------------|--------|------------------------------------------------------|
| Title (H1)                 | YES    | `# Vipassana.cool`                                  |
| Description (blockquote)   | YES    | Clear practitioner-authored description              |
| Site overview section       | YES    | `## What is Vipassana.cool?` with comprehensive summary |
| Content summary             | YES    | `## Content` with detailed coverage description       |
| Key page links              | YES    | `## Key Pages` with 30+ linked pages                 |
| FAQ detail pages            | YES    | 10 FAQ pages individually linked                     |
| Guide detail pages          | YES    | 20 guide pages individually linked                   |
| External links              | YES    | Links to dhamma.org, course search, center directory |
| Contact / attribution       | YES    | Creator name, website, social links                  |

### llms.txt Quality Score: 85/100

**Strengths:**
- Comprehensive page listing with descriptive labels
- Clear site purpose and scope description
- Well-organized hierarchical structure (FAQ, Guide, Experience sections)
- Contact information with social links

**Gaps:**
- No explicit licensing or usage permissions (e.g., RSL 1.0 or CC license statement)
- No `llms-full.txt` file for deeper content summaries per page
- No date/freshness indicator (e.g., "Last updated: 2026-03-16")
- No content type indicators per page (e.g., "FAQ", "Guide", "Narrative")
- Missing page-level descriptions for most guide pages (only titles + URLs)

---

## 3. Citability Analysis

### Passage-Level Assessment

Analyzed passages from `/guide/scientific-evidence` and `/faq/is-vipassana-safe`.

**Optimal passage length (134-167 words):** PARTIALLY MET

| Page                     | Avg paragraph length | Self-contained? | Direct answer in first 40-60 words? |
|--------------------------|---------------------|-----------------|--------------------------------------|
| Scientific Evidence      | 60-120 words        | YES             | YES                                  |
| Is Vipassana Safe?       | 40-80 words         | YES             | YES - "For most people, Vipassana is safe and profoundly beneficial." |
| Homepage                 | 30-50 words         | PARTIAL         | YES                                  |

**Citability Strengths:**
- Paragraphs are genuinely self-contained and extractable without needing surrounding context
- FAQ pages open with direct, quotable answers ("The Short Answer" pattern)
- Statistics are specific and include source attribution (study names, years, journal names)
- Scientific evidence page includes a summary table with study names, years, and key findings
- Balanced tone (acknowledges limitations) increases trustworthiness for AI citation
- List items contain bolded labels followed by explanations -- excellent for extraction

**Citability Weaknesses:**
- Many paragraphs are shorter than the optimal 134-167 word citation range
- Guide pages lack explicit "TL;DR" or summary blocks at the top
- No definition-style passages (e.g., "Vipassana is...") that AI can extract verbatim
- Statistics are embedded in list items rather than highlighted in standalone quotable blocks
- Missing "key takeaway" boxes that AI systems favor for citation

### Question-Based Headings

| Page                | H2 headings use questions? | Notes                          |
|---------------------|---------------------------|--------------------------------|
| FAQ pages           | YES (page titles)         | URL slugs are question-based   |
| Guide pages         | NO                        | Statement-based headings       |
| Experience pages    | NO                        | Day-number based               |

FAQ pages are well-structured for question-answer AI retrieval. Guide pages would benefit from adding question-based H2/H3 subheadings (e.g., "What does the research say about Vipassana and anxiety?" instead of "Psychological Benefits").

---

## 4. Structured Data / Schema Markup

| Schema Type      | Present? | Pages                    | Notes                              |
|------------------|----------|--------------------------|------------------------------------|
| FAQPage          | YES      | 10 FAQ detail pages      | JSON-LD via `FaqSchema` component  |
| Article          | NO       | Guide pages              | Missing -- should be added         |
| BreadcrumbList   | NO       | All pages                | Missing -- should be added         |
| Person           | NO       | N/A                      | No author schema markup            |
| WebSite          | NO       | Homepage                 | Missing -- should be added         |
| HowTo            | NO       | Preparation/packing pages| Could benefit from HowTo schema    |

**Key gap:** Guide pages (especially `/guide/scientific-evidence`) should have `Article` schema with `author`, `datePublished`, and `dateModified` fields. This is one of the strongest authority signals for AI citation.

---

## 5. Authority & Brand Signals

### Author Attribution

- **Author identified:** Matthew Diakonov (mentioned on homepage and llms.txt)
- **Credentials stated:** "60 days of courses completed, 918+ days of daily practice"
- **Author schema markup:** MISSING (no JSON-LD Person schema)
- **Author page:** MISSING (no dedicated /about page with full bio)
- **Author byline on pages:** MISSING (no visible byline on guide/FAQ pages)

### Date Signals

- **Publish dates on pages:** MISSING -- no visible publish or update dates on any content page
- **Sitemap lastModified:** Set to `new Date()` (always today's date) -- this provides no meaningful signal
- **Content freshness indicators:** MISSING

### External Brand Mentions (estimated)

| Platform       | Presence | Impact on AI Citations |
|----------------|----------|----------------------|
| Wikipedia      | NONE     | High negative impact -- no entity page for vipassana.cool |
| Reddit         | UNKNOWN  | Unable to verify; likely low given niche topic |
| YouTube        | NONE     | Strongest correlation (0.737) with AI citations; major gap |
| LinkedIn       | UNKNOWN  | Author profile may exist but no link from site |
| Domain Rating  | LOW      | New/niche domain; weak backlink profile expected |

### Entity Associations

The site benefits from proximity to well-established entities:
- **S.N. Goenka** (Wikipedia entity)
- **dhamma.org** (established organization)
- **Vipassana meditation** (Wikipedia entity)
- Notable practitioners cited: Yuval Noah Harari, Sam Harris, Tim Ferriss, Daniel Goleman

However, vipassana.cool itself has no independent entity presence.

---

## 6. Technical Accessibility for AI Crawlers

### Rendering

| Factor                      | Status | Notes                                          |
|-----------------------------|--------|-------------------------------------------------|
| Server-Side Rendering (SSR) | YES    | Next.js App Router with server components       |
| Meta tags in initial HTML   | YES    | Metadata exported from page components          |
| Content in initial HTML     | YES    | Server components render content server-side    |
| JavaScript dependency       | LOW    | Content accessible without JS execution         |
| Semantic HTML               | YES    | Proper `<article>`, `<section>`, `<h1>`-`<h2>` |
| `lang` attribute            | YES    | `<html lang="en">`                              |
| Sitemap                     | YES    | 47 URLs at /sitemap.xml                         |
| robots.txt                  | YES    | Permissive, allows all crawlers                 |
| llms.txt                    | YES    | Present with comprehensive page listing         |
| Canonical URLs              | NO     | No canonical tags or `alternates` metadata      |
| OpenGraph tags              | YES    | Title, description, URL, siteName, locale       |
| Twitter cards               | YES    | summary_large_image card type                   |

**Technical score: 90/100** -- The Next.js server rendering approach is excellent for AI crawlers. Content is available in the initial HTML response without requiring JavaScript execution, which is the primary technical requirement.

### Missing Technical Elements

1. **No canonical URLs** -- Could cause duplicate content issues for AI indexing
2. **No `alternates` metadata** -- Should specify canonical for each page
3. **No Open Graph images** -- OG tags exist but no `og:image` configured
4. **Sitemap `lastModified` is always `new Date()`** -- Provides no meaningful freshness signal

---

## 7. Platform-Specific Optimization Scores

| Platform            | Score | Key Strengths                              | Key Gaps                                    |
|---------------------|-------|--------------------------------------------|---------------------------------------------|
| Google AI Overviews  | 70    | FAQ schema, SSR, semantic HTML             | No Article schema, no dates, no author markup |
| ChatGPT (web search) | 75    | GPTBot allowed, llms.txt present, quotable content | No YouTube/Reddit presence, short passages |
| Perplexity           | 72    | PerplexityBot allowed, cited statistics    | No canonical URLs, weak brand signals       |
| Bing Copilot         | 65    | SSR, good meta tags                        | No BreadcrumbList, no Article schema, no dates |

### Google AI Overviews (70/100)
Google AI Overviews heavily weights structured data, E-E-A-T signals, and established domain authority. The FAQPage schema is a strong signal, but the absence of Article schema, author markup, and publish dates significantly weakens the authority signal. Google also favors content with verifiable citations, which the scientific evidence page provides well.

### ChatGPT Web Search (75/100)
ChatGPT search benefits from the llms.txt file (which many competitors lack), direct quotable answers, and permissive crawler access. The main gap is off-site brand presence -- ChatGPT strongly correlates citations with YouTube mentions (0.737 correlation) and Reddit presence, neither of which vipassana.cool has.

### Perplexity (72/100)
Perplexity favors in-depth, well-cited content with specific statistics. The scientific evidence page is an excellent fit. Gaps are canonical URL specification and cross-platform brand reinforcement.

### Bing Copilot (65/100)
Bing Copilot leans on structured data more than the others. The missing BreadcrumbList, Article schema, and author/date metadata create meaningful gaps.

---

## 8. Top 5 Highest-Impact Changes

### 1. Add Article Schema + Author/Date Metadata to All Guide Pages
**Impact:** HIGH | **Effort:** LOW (2-4 hours)
**Affects:** All platforms, especially Google AI Overviews and Bing Copilot

Create a reusable `ArticleSchema` component (similar to the existing `FaqSchema`) that outputs JSON-LD with:
- `@type: Article`
- `author: { @type: Person, name: "Matthew Diakonov", url: "https://m13v.com" }`
- `datePublished` and `dateModified` (store as constants in each page file)
- `publisher: { @type: Organization, name: "Vipassana.cool" }`

Also add visible bylines and dates to the page templates. AI systems use both visible and structured date/author signals.

### 2. Add Question-Based H2/H3 Headings to Guide Pages
**Impact:** HIGH | **Effort:** MEDIUM (4-8 hours)
**Affects:** ChatGPT, Perplexity, Google AI Overviews

Rewrite guide page H2 headings as questions that users would actually ask:
- "Psychological Benefits" -> "What are the psychological benefits of Vipassana meditation?"
- "Neurobiological Changes" -> "How does Vipassana change the brain?"
- "Adverse Effects: The Honest Picture" -> "What are the risks and side effects of Vipassana?"
- "Pain Management" -> "Can Vipassana help with chronic pain?"

This directly maps to how AI systems match user queries to content passages.

### 3. Add Summary/Definition Blocks at the Top of Each Page
**Impact:** HIGH | **Effort:** MEDIUM (4-6 hours)
**Affects:** All platforms

Add a highlighted "Key Takeaway" or definition block at the top of each guide and FAQ page, 134-167 words long, that serves as a self-contained, quotable summary. Example for the scientific evidence page:

> "Research on Vipassana meditation specifically (not general mindfulness) shows statistically significant reductions in anxiety (scores dropping from 10 to 3.29 post-course), increased cortical thickness in brain regions related to body awareness, and reduced recidivism in prison populations (56% vs. 75%). Sleep studies show senior practitioners maintain slow-wave sleep at rates nearly three times higher than non-meditators. However, 62.9% of retreat participants report at least one adverse psychological effect, and current evidence is limited by small sample sizes and self-selection bias. The 2025 systematic review in Cureus found moderate evidence for benefits but noted moderate to high risk of bias across studies."

This passage length is optimized for AI citation extraction.

### 4. Create a YouTube Presence
**Impact:** HIGH | **Effort:** HIGH (ongoing)
**Affects:** ChatGPT citations (0.737 correlation with YouTube mentions)

YouTube mentions have the single strongest correlation with AI citation. Options:
- Create short-form video summaries of key guide topics (5-10 minutes each)
- Record narrated versions of the day-by-day experience
- Create a "Vipassana FAQ" video series matching the site's FAQ pages
- Embed YouTube videos on relevant site pages (adds multi-modal content score)

This also addresses the multi-modal content gap (currently scored 38/100).

### 5. Add Canonical URLs and Fix Sitemap Dates
**Impact:** MEDIUM | **Effort:** LOW (1-2 hours)
**Affects:** All platforms

In `layout.tsx` or individual page metadata, add `alternates.canonical` for each page. In `sitemap.ts`, replace `new Date()` with actual content modification dates (can be hardcoded or derived from git commit dates).

```typescript
// In each page's metadata export:
export const metadata: Metadata = {
  alternates: {
    canonical: "https://vipassana.cool/guide/scientific-evidence",
  },
  // ...existing metadata
};
```

```typescript
// In sitemap.ts - use actual dates instead of new Date():
{ url: `${baseUrl}/guide/scientific-evidence`, lastModified: new Date("2026-02-15"), ... }
```

---

## 9. Additional Recommendations (Lower Priority)

### Add robots.txt granularity
Differentiate between AI search crawlers (allow) and AI training crawlers (block). See Section 1 for recommended configuration.

### Add BreadcrumbList schema
Every page should emit a BreadcrumbList JSON-LD (e.g., Home > Guide > Scientific Evidence). This helps all AI systems understand page hierarchy.

### Add WebSite schema to homepage
Include `potentialAction` with a SearchAction if search is available, or at minimum the site name and URL for entity recognition.

### Add an /about page
Create a dedicated author page at `/about` with full bio, credentials, social links, and links to other published work. Link to it from every page's byline. This strengthens E-E-A-T signals across the entire site.

### Add `llms-full.txt`
Create an extended version that includes a 2-3 sentence summary for each page, helping AI systems understand page content without crawling. This is especially valuable for pages that require JavaScript interaction (comments, etc.).

### Add licensing statement to llms.txt
Add a section like:
```
## License
Content is available for AI search citation with attribution to vipassana.cool and Matthew Diakonov.
Training use requires permission. Contact: [email]
```

### Post key content to Reddit
The r/vipassana and r/meditation subreddits are natural fits. Share the scientific evidence guide, FAQ answers, and day-by-day experience. Reddit presence strongly correlates with AI citation frequency.

### Add og:image for all pages
Create page-specific Open Graph images. These appear in AI-generated responses on platforms that support rich results (Perplexity, Bing Copilot).

---

## 10. Multi-Modal Content Gap

**Current score: 38/100**

| Element          | Present? | Notes                                    |
|------------------|----------|------------------------------------------|
| Images           | MINIMAL  | No content images, only UI elements      |
| Videos           | NO       | No embedded video content                |
| Audio            | NO       | No podcast/audio versions of content     |
| Infographics     | NO       | Scientific data could be visualized      |
| Tables           | YES      | One study summary table (good)           |
| Charts/graphs    | NO       | Statistics would benefit from visuals    |

The scientific evidence page has excellent data that would benefit from:
- An infographic summarizing key study findings
- A chart showing anxiety score reduction (10 to 3.29)
- A comparison chart of SWS sleep percentages by age group
- Timeline visualizations of the research landscape

Multi-modal content increases the likelihood of AI citation because it signals depth and editorial effort.

---

## Summary

vipassana.cool is well-positioned for AI search visibility with strong fundamentals: server-side rendering, permissive crawler access, an llms.txt file, FAQPage schema markup, and genuinely quotable content with specific statistics and balanced perspectives. The content quality is above average for the niche, with self-contained passages and direct answers.

The primary gaps are:
1. **Missing Article/author/date schema** on guide pages (biggest technical gap)
2. **No off-site brand presence** on YouTube, Reddit, or Wikipedia (biggest strategic gap)
3. **No multi-modal content** -- images, videos, infographics (biggest content gap)
4. **Statement-based headings** instead of question-based on guide pages
5. **Paragraphs slightly shorter** than the optimal 134-167 word citation range

Addressing items 1, 2, and 4 from the top 5 recommendations would likely move the GEO score from 72 to approximately 82-85.
