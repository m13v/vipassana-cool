# Schema.org Structured Data Audit — vipassana.cool

**Audit date:** 2026-03-16
**Audited pages:** 5
**Tool:** Manual source + live HTML inspection

---

## 1. Detection Summary

| Page | JSON-LD Found | Microdata | RDFa |
|------|--------------|-----------|------|
| `/` (homepage) | None | None | None |
| `/faq` (FAQ hub) | FAQPage (13 Q&A pairs) | None | None |
| `/faq/is-vipassana-safe` | FAQPage (3 Q&A pairs) | None | None |
| `/guide` (guide hub) | None | None | None |
| `/guide/scientific-evidence` | None | None | None |

---

## 2. Validation of Existing Schema

### 2.1 `/faq` — FAQPage

**Source:** `src/components/faq-schema.tsx` via `src/app/faq/page.tsx`

| Check | Result |
|-------|--------|
| @context is `https://schema.org` | PASS |
| @type is valid and not deprecated | PASS (FAQPage) |
| All required properties present | PASS (mainEntity with Question + acceptedAnswer) |
| Property values match expected types | PASS |
| No placeholder text | PASS |
| URLs are absolute | N/A (no URLs in schema) |
| Dates in ISO 8601 | N/A (no dates) |

**Google Rich Result Eligibility:** FAQPage rich results are restricted to government and healthcare sites since August 2023. vipassana.cool is a commercial/informational site, so this schema will NOT trigger Google FAQ rich results. However, the markup is still valid Schema.org and benefits AI/LLM citation and discoverability (GEO). **Priority: Info** — keep the existing markup for AI discoverability but do not expect Google rich result treatment.

### 2.2 `/faq/is-vipassana-safe` — FAQPage

**Source:** `src/components/faq-detail-page.tsx` passes `schemaFaqs` to `FaqSchema`

| Check | Result |
|-------|--------|
| @context is `https://schema.org` | PASS |
| @type is valid and not deprecated | PASS |
| All required properties present | PASS |
| Property values match expected types | PASS |
| No placeholder text | PASS |

**Same note as above** — FAQPage will not generate Google rich results for this site, but retaining it for AI/LLM discoverability is reasonable.

---

## 3. Missing Schema Opportunities

### 3.1 CRITICAL — Site-wide: WebSite + SearchAction (sitelinks search box)

**Applies to:** Homepage (`/`)
**Benefit:** Eligible for Google sitelinks search box in SERP. Also establishes the site entity for knowledge graph.

### 3.2 CRITICAL — Site-wide: Organization

**Applies to:** Homepage (`/`)
**Benefit:** Establishes publisher identity, links to social profiles, supports authorship signals across all pages.

### 3.3 HIGH — All pages: BreadcrumbList

**Applies to:** Every page with navigation hierarchy
**Benefit:** Eligible for breadcrumb rich results in Google SERP. Improves site structure understanding.

### 3.4 HIGH — Article pages: Article / BlogPosting

**Applies to:** `/faq/*` detail pages, `/guide/*` detail pages, `/experience`
**Benefit:** Eligible for article rich results, Top Stories, and Discover. Establishes authorship and publish dates.

### 3.5 MEDIUM — Homepage: WebPage

**Applies to:** `/`
**Benefit:** Explicit page typing, connects to Organization as publisher.

### 3.6 DO NOT ADD — HowTo

HowTo rich results were removed by Google in September 2023. Do NOT add HowTo schema to `/guide` or any other page despite the step-by-step content format.

---

## 4. Recommended JSON-LD Implementations

### 4.1 WebSite + Organization (add to root layout or homepage)

Place in `src/app/layout.tsx` inside `<body>` so it appears on every page:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://vipassana.cool/#website",
      "url": "https://vipassana.cool",
      "name": "Vipassana.cool",
      "description": "An unofficial guide to Vipassana meditation and dhamma.org. FAQ, preparation tips, personal experiences, and everything you need to know before your first 10-day course.",
      "publisher": {
        "@id": "https://vipassana.cool/#organization"
      },
      "inLanguage": "en-US",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.google.com/search?q=site:vipassana.cool+{search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://vipassana.cool/#organization",
      "name": "Vipassana.cool",
      "url": "https://vipassana.cool",
      "description": "An unofficial guide to Vipassana meditation and dhamma.org courses."
    }
  ]
}
```

### 4.2 BreadcrumbList (add per page)

Create a reusable component. Examples for key pages:

**Homepage** — no breadcrumb needed (it is the root).

**`/faq`:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://vipassana.cool"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "FAQ"
    }
  ]
}
```

**`/faq/is-vipassana-safe`:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://vipassana.cool"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "FAQ",
      "item": "https://vipassana.cool/faq"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Is Vipassana Safe?"
    }
  ]
}
```

**`/guide/scientific-evidence`:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://vipassana.cool"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Guide",
      "item": "https://vipassana.cool/guide"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Scientific Evidence"
    }
  ]
}
```

Note: The last item in a BreadcrumbList should omit the `item` property (it represents the current page).

### 4.3 Article schema for detail pages

**For FAQ detail pages** (e.g., `/faq/is-vipassana-safe`):
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Is Vipassana Safe? Risks, Side Effects & Mental Health",
  "description": "An honest look at Vipassana safety: psychological risks, who should avoid it, how to handle difficult experiences, and what the research says about meditation side effects.",
  "url": "https://vipassana.cool/faq/is-vipassana-safe",
  "author": {
    "@type": "Person",
    "name": "Matthew Diakonov",
    "url": "https://vipassana.cool"
  },
  "publisher": {
    "@id": "https://vipassana.cool/#organization"
  },
  "mainEntityOfPage": "https://vipassana.cool/faq/is-vipassana-safe",
  "inLanguage": "en-US",
  "datePublished": "2025-01-01",
  "dateModified": "2025-01-01"
}
```

**For guide detail pages** (e.g., `/guide/scientific-evidence`):
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Scientific Evidence for Vipassana Meditation — Research, Brain Changes & Studies",
  "description": "What does science say about Vipassana meditation? A balanced review of research on brain changes, anxiety reduction, pain management, addiction recovery, and adverse effects.",
  "url": "https://vipassana.cool/guide/scientific-evidence",
  "author": {
    "@type": "Person",
    "name": "Matthew Diakonov",
    "url": "https://vipassana.cool"
  },
  "publisher": {
    "@id": "https://vipassana.cool/#organization"
  },
  "mainEntityOfPage": "https://vipassana.cool/guide/scientific-evidence",
  "inLanguage": "en-US",
  "datePublished": "2025-01-01",
  "dateModified": "2025-01-01"
}
```

**Important:** Replace `"2025-01-01"` with actual publish and modification dates in ISO 8601 format. If you have git history for when these pages were created, use that. Google requires `datePublished` for Article rich result eligibility.

### 4.4 WebPage for hub pages

**For `/faq` hub:**
```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Vipassana FAQ — Honest Answers to Common Questions",
  "description": "Frequently asked questions about Vipassana meditation: noble silence, daily schedule, physical challenges, food, and what really happens during 10 days.",
  "url": "https://vipassana.cool/faq",
  "isPartOf": {
    "@id": "https://vipassana.cool/#website"
  },
  "inLanguage": "en-US"
}
```

**For `/guide` hub:**
```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "How to Use dhamma.org — Step-by-Step Guide",
  "description": "A complete walkthrough of dhamma.org: how to find a center, choose a course, fill out the application, and what to expect during the registration process.",
  "url": "https://vipassana.cool/guide",
  "isPartOf": {
    "@id": "https://vipassana.cool/#website"
  },
  "inLanguage": "en-US"
}
```

---

## 5. Implementation Plan

### Priority order

| Priority | Schema Type | Where | Effort |
|----------|-------------|-------|--------|
| 1 | WebSite + Organization | Root layout (site-wide) | Low — single script tag in layout.tsx |
| 2 | BreadcrumbList | All non-homepage pages | Medium — create reusable component, add to each page |
| 3 | Article | All `/faq/*` and `/guide/*` detail pages | Medium — extend FaqDetailPage component, create similar for guide pages |
| 4 | WebPage | Hub pages (`/faq`, `/guide`) | Low — add script tag to each hub page |

### Suggested component architecture

1. **`src/components/site-schema.tsx`** — Renders WebSite + Organization JSON-LD. Import into `layout.tsx`.
2. **`src/components/breadcrumb-schema.tsx`** — Accepts an array of `{ name, url? }` crumbs. Add to each page.
3. **`src/components/article-schema.tsx`** — Accepts headline, description, url, dates, author. Add to detail pages.
4. Extend existing **`FaqDetailPage`** to include Article and BreadcrumbList schema alongside the existing FAQPage schema.

### Notes on existing FAQPage schema

The existing FAQPage markup on `/faq` and `/faq/*` pages is technically valid and well-structured. Since FAQPage rich results are restricted to government/healthcare sites, this schema will not produce Google rich results for vipassana.cool. However, it remains valuable for:

- AI and LLM citation (ChatGPT, Perplexity, Google AI Overviews reference structured FAQ data)
- General Schema.org compliance
- Potential future changes to Google's eligibility rules

**Recommendation:** Keep existing FAQPage schema as-is. No changes needed.

---

## 6. Pages Not Audited

The following routes exist in the codebase but were not part of this audit scope. They would also benefit from BreadcrumbList and potentially Article schema:

- `/prepare` — Preparation guide
- `/resources` — Curated resources
- `/experience` — Personal experience
- `/practice-buddy` — Practice buddy matching
- All other `/faq/*` detail pages (9 total)
- All other `/guide/*` detail pages (15+ total)
