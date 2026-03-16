# Content Quality & E-E-A-T SEO Audit: vipassana.cool

**Audit Date:** 2026-03-16
**Auditor Framework:** Google September 2025 Quality Rater Guidelines
**Site Type:** Informational / YMYL-adjacent (health, mental health guidance)
**Overall Content Quality Score: 82/100**

---

## 1. Executive Summary

vipassana.cool is a well-executed informational site with genuinely strong first-hand experience signals, solid topical coverage across 45+ pages, and thoughtful content that avoids the generic patterns typical of AI-generated material. The site's biggest strengths are its authentic practitioner voice (60 days of courses, 881+ days of daily practice), balanced coverage of risks and adverse effects, and comprehensive structured data. Its biggest weaknesses are the absence of a dedicated author/about page, missing privacy policy and terms pages, thin homepage word count, and lack of formal content dating or update signals.

---

## 2. E-E-A-T Breakdown

### Experience: 85/100 (Weight: 20%)

**Strengths:**
- Author has completed six 10-day Vipassana courses (60 days total) -- stated throughout the site
- Day-by-day personal experience section (10 pages) provides granular first-hand accounts
- Content includes specific sensory details ("The gong sounds at 4:00 AM. It's still dark. You stumble to the meditation hall...")
- Practical tips clearly drawn from real experience ("One thing that helped me: during breaks, do gentle stretches")
- "My Practice" and "My Honest Assessment" sections use first-person voice with specific details (45-60 minute morning sits, evening sits 4 days a week)
- Day counter component in footer dynamically shows practice streak (881+ days)
- Practice Buddy matching service indicates active community involvement

**Gaps:**
- No photos from retreats or meditation spaces (only matthew.jpg in public/)
- Experience sections could include more specific course locations/centers attended
- No video content or audio from the author's perspective

### Expertise: 78/100 (Weight: 25%)

**Strengths:**
- Scientific Evidence page cites 9+ specific studies by author name and year (Szekeres & Wertheim 2015, Al-Hussaini et al. 2001, Bowen et al. 2006, Fox et al. 2014, Lazar et al. 2005, etc.)
- References a 2025 systematic review published in Cureus
- Correctly distinguishes between Vipassana-specific research and broader mindfulness research
- Acknowledges research limitations (small sample sizes, selection bias, no double-blind possible, publication bias)
- Technical accuracy in neuroscience claims (anterior insula, anterior cingulate cortex, gamma activity, HPA axis)
- Safety page properly delineates contraindications (active psychosis, severe trauma, bipolar during mania)

**Gaps:**
- Author is identified as a tech professional and practitioner, not a meditation teacher or researcher -- this is appropriate but limits formal expertise claims
- No professional credentials in meditation instruction, psychology, or neuroscience
- Scientific evidence page references specific studies but does not include DOIs, links, or full citations
- No expert review or endorsement from qualified professionals (e.g., a psychiatrist reviewing the mental health content)

### Authoritativeness: 68/100 (Weight: 25%)

**Strengths:**
- Clear positioning as "unofficial guide" -- honest about scope and authority
- Links to dhamma.org as the official authority throughout
- Footer disclaimer: "Not affiliated with the Vipassana Research Institute"
- Author identified by full name (Matthew Diakonov) with links to personal site, LinkedIn, Twitter, GitHub, Telegram
- Comprehensive resource library (200+ links) demonstrates curation authority
- FAQ Schema markup implemented for search feature panels
- llms.txt file provided for AI system discovery

**Gaps:**
- No dedicated About page with author bio, photo, and credentials
- No external citations pointing to this site (cannot assess from code, but no testimonials or press mentions visible)
- No editorial review process documented
- Site is relatively new -- limited backlink profile likely
- No mention of any advisory board or expert contributors
- Domain (vipassana.cool) is a novelty TLD which may carry slightly less authority signal than .org or .com

### Trustworthiness: 72/100 (Weight: 30%)

**Strengths:**
- Transparent about being unofficial and unaffiliated
- Balanced coverage of risks and adverse effects (62.9% adverse effect statistic cited, NPR investigation referenced)
- Honest disclaimers throughout ("This is not a universally positive story, and ignoring the negative findings would be dishonest")
- Safety content recommends consulting mental health professionals
- Contact information available (personal website, LinkedIn, Twitter, GitHub, Telegram)
- HTTPS (implied by Vercel deployment)
- Properly configured robots.txt and sitemap.xml
- No dark patterns, aggressive upselling, or misleading claims

**Gaps:**
- **No privacy policy page** -- significant gap especially given email capture, Practice Buddy waitlist, and PostHog analytics
- **No terms of service/use page**
- **No medical disclaimer page** -- critical given YMYL mental health content
- No editorial policy or content accuracy statement
- No "last updated" dates on any content pages
- Email capture exists but privacy handling is not documented
- Practice Buddy collects personal data (email, practice details) with no visible data handling policy

---

## 3. Page-by-Page Analysis

### Homepage (/)

| Metric | Value | Assessment |
|--------|-------|------------|
| Estimated Word Count | ~350 (visible text) | Below 500-word minimum for homepage |
| Readability | Grade 8-9 (Flesch-Kincaid est.) | Good for general audience |
| H1 | "Everything You Need to Know About Vipassana Meditation" | Clear, keyword-rich |
| Internal Links | 6 card links + nav + footer | Good hub structure |
| Meta Title | "Vipassana.cool -- Your Guide to Vipassana Meditation & dhamma.org" | Good, within 60 chars |
| Meta Description | Comprehensive, mentions "unofficial guide" | Good |

**Issues:**
- Visible body text is thin (~350 words of actual prose). The "What is Vipassana?" section and card descriptions are the primary content. Needs more substantive content to meet the 500-word homepage floor.
- No author introduction on homepage. Adding a brief "Who wrote this" section would strengthen E-E-A-T.
- "Vipassana by the Numbers" section uses generic stats (200+ centers, 100+ countries). Source attribution would strengthen trust.

### Guide Hub (/guide)

| Metric | Value | Assessment |
|--------|-------|------------|
| Estimated Word Count | ~800 (visible text) | Meets service page minimum |
| H1 | "How to Use dhamma.org" | Clear, specific |
| Internal Links | 13 guide sub-page cards + 7 numbered sections | Excellent hub page |
| Structured Sections | 7 numbered steps | Clear hierarchy |

**Strengths:** Well-structured hub with clear navigation. The numbered step-by-step format is highly scannable. Each section has practical, specific guidance.

**Issues:**
- The 13 guide cards at top do not include descriptions of what makes them unique vs. the main page content below
- Missing breadcrumb schema markup

### Scientific Evidence (/guide/scientific-evidence)

| Metric | Value | Assessment |
|--------|-------|------------|
| Estimated Word Count | ~1,800 | Meets blog post minimum |
| H1 | "Scientific Evidence for Vipassana Meditation" | Strong keyword target |
| Meta Title | Includes "Research, Brain Changes & Studies" | Good for long-tail |
| Sections | 10 distinct sections | Comprehensive coverage |
| Citations | 9+ specific studies with author names and years | Strong |
| Internal Links | 2 (safety guide, risks page) | Could be stronger |
| Data Table | Key Studies at a Glance table | Excellent for AI citation |

**Strengths:** This is the strongest page on the site for E-E-A-T. It cites specific studies, acknowledges limitations, includes adverse effects research, and offers the author's balanced personal perspective in a clearly labeled "My Take" section. The summary table is excellent for structured data extraction.

**Issues:**
- No DOIs or hyperlinks to actual studies -- adding these would significantly boost trust and verifiability
- The "My Take" section is valuable for experience signals but should be more clearly visually separated from the evidence review to avoid conflating opinion with research
- No publication date or "last reviewed" date
- Missing Article schema markup with author, datePublished, dateModified

### Is Vipassana Safe? (/faq/is-vipassana-safe)

| Metric | Value | Assessment |
|--------|-------|------------|
| Estimated Word Count | ~750 | Slightly below 800-word service/guide minimum |
| H1 | "Is Vipassana Safe?" | Directly answers search query |
| FAQ Schema | 3 FAQPage schema entries | Implemented |
| Internal Links | 4 related links + back to FAQ | Good |
| Sections | 5 sections | Well-organized |

**Strengths:** Directly targets a high-intent informational query. Balanced -- covers both safety mechanisms and genuine risks. The "When It May Not Be Appropriate" section is responsible YMYL content. FAQ schema is properly implemented for rich results.

**Issues:**
- Slightly thin at ~750 words for a YMYL health/safety page. Could expand the "Safety Mechanisms" and "My Honest Assessment" sections.
- No links to external mental health resources (e.g., crisis hotlines, NAMI)
- Missing medical disclaimer

### Day 1 Experience (/experience/day-1)

| Metric | Value | Assessment |
|--------|-------|------------|
| Estimated Word Count | ~550 | Below 800-word blog post minimum |
| H1 | "Arrival, Anapana & the First Sit" | Descriptive |
| Sections | 6 sections | Good structure |
| Internal Links | Prev/Next day navigation | Functional |

**Strengths:** Strong first-person narrative voice. Specific sensory details that demonstrate genuine experience. Practical tips section at the end adds utility.

**Issues:**
- At ~550 words, this is the thinnest of the experience pages analyzed. For a day-by-day personal account, 800-1,200 words would provide more depth.
- No images or visuals
- No timestamp or "written after course #N" context

### Daily Practice (/guide/daily-practice)

| Metric | Value | Assessment |
|--------|-------|------------|
| Estimated Word Count | ~1,800 | Exceeds blog post minimum |
| H1 | "Daily Vipassana Practice at Home" | Strong keyword target |
| Sections | 7 major sections | Comprehensive |
| Internal Links | 3 (group sittings, recognizing progress) | Good |

**Strengths:** Exceptional content quality. Practical, tiered schedule recommendations (20 min to 2 hours). "Common Obstacles" section uses conversational Q&A format. "Practice and Family Life" section addresses real-world scenarios (partner, young children, shared spaces). The "My Practice" section provides specific personal details.

**Issues:**
- No structured data (HowTo or Article schema)
- Could link to Practice Buddy as an accountability tool

### FAQ Hub (/faq)

| Metric | Value | Assessment |
|--------|-------|------------|
| Estimated Word Count | ~1,200 | Good for an FAQ hub |
| H1 | "Frequently Asked Questions" | Standard |
| FAQ Schema | 13 FAQPage entries | Properly implemented |
| Sub-page Cards | 9 deep-dive FAQ links | Excellent hub structure |
| Credential Signal | "six 10-day courses and 881 days of daily practice" | Strong |

**Strengths:** Dual structure -- quick answers on the hub page plus deep-dive sub-pages. FAQ schema properly implemented. Sub-page cards encourage deeper engagement.

### Resources (/resources)

| Metric | Value | Assessment |
|--------|-------|------------|
| Estimated Word Count | ~3,000+ | Exceeds all minimums |
| Content | 200+ curated links across 12+ categories | Massive resource |
| Table of Contents | Implemented | Good navigation |

**Strengths:** This is an authoritative curation effort. 200+ links organized by category (books, documentaries, podcasts, research papers, apps, blogs, official resources). The sheer scope signals deep familiarity with the topic.

**Issues:**
- No descriptions or annotations for individual resources explaining why they were selected
- No "dead link" checking mechanism visible
- Could benefit from a "last verified" date

---

## 4. AI Citation Readiness Score: 78/100

### Strengths

| Signal | Status |
|--------|--------|
| llms.txt file | Present and comprehensive |
| FAQ Schema (FAQPage) | Implemented on FAQ hub + detail pages |
| Clear H1-H2-H3 hierarchy | Consistent across all pages |
| Quotable statistics | Strong (anxiety scores 10 to 3.29, 62.9% adverse effects, 56% vs 75% recidivism) |
| Definitive statements | Present ("For most people, Vipassana is safe and profoundly beneficial") |
| Summary tables | Scientific evidence table with study, year, key finding |
| Sitemap.xml | Implemented with 60+ URLs |
| robots.txt | Allows all crawlers |
| Open Graph metadata | Implemented site-wide |

### Gaps

| Signal | Status |
|--------|--------|
| Article schema markup | Missing -- no datePublished, dateModified, author structured data |
| BreadcrumbList schema | Missing |
| Speakable schema | Missing |
| HowTo schema (guide pages) | Missing |
| Content dating | No visible publish/update dates anywhere |
| Named author in schema | Not implemented |
| Canonical URLs | Not explicitly set (Next.js may handle automatically via metadataBase) |

### AI Citation Quality Assessment

The site is reasonably well-positioned for AI citation. The llms.txt file is a significant advantage -- it provides a machine-readable site overview that AI systems can use for discovery and attribution. The FAQ schema entries are well-formed and likely to appear in featured snippets and AI overviews.

The scientific evidence page is the most citable page, with specific study references, a summary data table, and clearly attributed statistics. However, the lack of Article schema with author and date metadata limits how confidently AI systems can attribute and date the information.

---

## 5. Thin Content Detection

| Page | Est. Words | Minimum | Status |
|------|-----------|---------|--------|
| Homepage (/) | ~350 | 500 | **Below minimum** |
| Guide hub (/guide) | ~800 | 800 | Borderline |
| Scientific Evidence | ~1,800 | 1,500 | Pass |
| Is Vipassana Safe? | ~750 | 800 | **Slightly below** |
| Day 1 Experience | ~550 | 800 (blog) | **Below minimum** |
| Daily Practice | ~1,800 | 1,500 | Pass |
| FAQ Hub | ~1,200 | 800 | Pass |
| Resources | ~3,000+ | 800 | Pass |
| Practice Buddy | ~50 (server page, client-rendered) | 300 | **Cannot assess** |

**Thin content risk:** The homepage, Day 1 experience page, and "Is Vipassana Safe?" page are below their respective content minimums. The experience/day pages should be reviewed as a set -- if all 10 are at ~550 words each, the collective series totals ~5,500 words, which is substantial, but individual pages may appear thin to crawlers evaluating them in isolation.

---

## 6. Internal Linking Analysis

### Strengths
- Hub-and-spoke architecture: Guide hub links to 13+ sub-pages, FAQ hub links to 9+ sub-pages
- Experience pages have prev/next navigation connecting all 10 days
- Footer provides consistent site-wide links to all major sections
- FAQ detail pages include "Related" links to other relevant pages
- Cross-section linking exists (e.g., scientific evidence links to safety guide and risks page)
- Navigation includes dropdown menus with all sub-pages listed

### Gaps
- **Homepage does not link to any specific sub-pages** within guide or FAQ -- only to section hubs
- Guide sub-pages link back to guide hub but rarely cross-link to each other
- Experience day pages do not link to relevant guide/FAQ content (e.g., Day 1 could link to /guide/anapana-and-vipassana-explained, Day 3 could link to /faq/can-i-leave-early)
- Resources page does not link to the guide pages that cover the same topics
- Daily Practice page does not link to Practice Buddy
- No contextual links from guide pages to the experience day pages (e.g., "here's what Day 4 is actually like when the technique shifts")

### Internal Link Density (Sampled)

| Page | Outbound Internal Links | Assessment |
|------|------------------------|------------|
| Homepage | 6 | Low for a hub page |
| Guide hub | 13+ | Good |
| Scientific Evidence | 2 | Low -- should cross-link more |
| Is Vipassana Safe? | 6 (2 body + 4 related) | Adequate |
| Day 1 | 2 (prev/next only) | **Too low** |
| Daily Practice | 3 | Could be higher |
| FAQ Hub | 9+ cards + inline | Good |

---

## 7. AI Content Assessment (Sept 2025 QRG Criteria)

**Assessment: The content does NOT exhibit markers of low-quality AI-generated content.**

Evidence:
- **Specificity over generality:** Content includes specific personal details ("sit every morning, usually for 45-60 minutes, evening sittings maybe four days a week"), specific study citations, and granular practical advice
- **Authentic voice:** Consistent first-person perspective with personality ("It sounds easy. It isn't. Within two minutes, your mind has replayed a conversation from three years ago")
- **Original insight:** The "My Take" sections, obstacle Q&As ("I don't have time" -- "This is usually a priority issue rather than a time issue"), and the Practice and Family Life section demonstrate original thinking
- **Balanced coverage:** Adverse effects are covered honestly (62.9% adverse psychological effects statistic), research limitations are explicitly listed, contraindications are clearly stated
- **Non-repetitive structure:** Each page has a distinct structure appropriate to its content type (numbered steps for guide, narrative for experience, Q&A for FAQ, table for scientific evidence)

**One concern:** The sheer volume of content (45+ pages) for what appears to be a single-author site could raise questions about production pace. However, the consistent voice and level of personal detail across pages suggest authentic authorship rather than bulk AI generation.

---

## 8. Content Freshness Signals

| Signal | Status |
|--------|--------|
| Publish dates on pages | **Not present** |
| "Last updated" dates | **Not present** |
| Sitemap lastModified | Set to `new Date()` (always current -- not meaningful) |
| Dynamic day counter | Present in footer (881+ days, updates daily) |
| References to recent research | 2025 Cureus systematic review cited |
| Temporal language in content | Minimal ("after six courses") |

**Critical gap:** No content has visible publish or update dates. This is a significant issue for both E-E-A-T and AI citation. Search engines and AI systems use dates to evaluate content freshness, especially for YMYL topics. The sitemap using `new Date()` makes lastModified meaningless since it regenerates on every build.

---

## 9. Specific Improvement Recommendations

### Priority 1 -- Trust & Legal (Impact: High, Effort: Low)

1. **Add a privacy policy page** covering PostHog analytics, email capture (subscribe), Practice Buddy data collection, and Resend email processing
2. **Add a medical/health disclaimer** on all YMYL pages (safety, depression, ADHD, risks) stating the content is not a substitute for professional medical advice
3. **Add terms of use** covering the Practice Buddy service and general site usage

### Priority 2 -- E-E-A-T Signals (Impact: High, Effort: Low-Medium)

4. **Create a dedicated /about page** with the author's photo (matthew.jpg exists in public/), full bio, meditation background, number of courses completed, and credentials. Link to it from the footer and homepage
5. **Add Article schema markup** to all guide and FAQ detail pages with `author`, `datePublished`, and `dateModified` fields
6. **Add real publish dates and "last reviewed" dates** to all content pages. Set sitemap lastModified to actual content modification dates rather than `new Date()`
7. **Add a visible "Written by Matthew Diakonov" byline** to each guide and FAQ page with a link to the about page

### Priority 3 -- Content Depth (Impact: Medium, Effort: Medium)

8. **Expand the homepage** to 500+ words. Add a brief author introduction section ("Who wrote this" with photo), expand the "What is Vipassana?" section, or add a "Why this site exists" paragraph
9. **Expand experience day pages** to 800+ words each. Add more sensory detail, specific memories, and practical reflections. These pages are the site's strongest first-hand experience signal -- lean into them
10. **Expand "Is Vipassana Safe?"** to 1,000+ words. Add external mental health resource links (crisis hotlines, NAMI, finding a therapist). For YMYL content, thoroughness matters
11. **Add DOIs or hyperlinks** to the studies cited on the scientific evidence page

### Priority 4 -- Internal Linking (Impact: Medium, Effort: Low)

12. **Cross-link experience day pages to guide/FAQ content** (e.g., Day 1 to Anapana explained, Day 4 to technique introduction, Day 6 to emotional processing guides)
13. **Link Daily Practice page to Practice Buddy** as an accountability tool
14. **Link Resources page entries to relevant guide pages** covering the same topics
15. **Add contextual links from guide pages into experience day pages** where relevant ("here is what this looks like in practice on Day 4")

### Priority 5 -- AI Citation (Impact: Medium, Effort: Low)

16. **Add BreadcrumbList schema** to all pages for clearer site hierarchy
17. **Add HowTo schema** to the guide hub page and daily practice page
18. **Fix sitemap lastModified values** to use actual file modification dates
19. **Add Speakable schema** to the FAQ pages for voice search optimization

### Priority 6 -- Structural (Impact: Low-Medium, Effort: Low)

20. **Add resource annotations** to the Resources page explaining why each resource was selected ("This is the most accessible introduction to the neuroscience" etc.)
21. **Add a "Content reviewed by" credit** if any pages have been reviewed by qualified professionals
22. **Add structured data for the author** (Person schema) connected to the about page

---

## 10. Scoring Summary

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Experience | 85 | 20% | 17.0 |
| Expertise | 78 | 25% | 19.5 |
| Authoritativeness | 68 | 25% | 17.0 |
| Trustworthiness | 72 | 30% | 21.6 |
| **E-E-A-T Composite** | | | **75.1** |

| Supplementary Score | Value |
|-------------------|-------|
| Content Quality (overall) | 82/100 |
| AI Citation Readiness | 78/100 |
| Internal Linking | 70/100 |
| Content Freshness | 55/100 |
| Thin Content Risk | Low-Medium (3 pages below floor) |

---

## 11. Key Files Referenced

- `/Users/matthewdi/vipassana-cool/src/app/page.tsx` -- Homepage
- `/Users/matthewdi/vipassana-cool/src/app/layout.tsx` -- Root layout with metadata
- `/Users/matthewdi/vipassana-cool/src/app/guide/page.tsx` -- Guide hub
- `/Users/matthewdi/vipassana-cool/src/app/guide/scientific-evidence/page.tsx` -- Scientific evidence
- `/Users/matthewdi/vipassana-cool/src/app/guide/daily-practice/page.tsx` -- Daily practice
- `/Users/matthewdi/vipassana-cool/src/app/faq/page.tsx` -- FAQ hub
- `/Users/matthewdi/vipassana-cool/src/app/faq/is-vipassana-safe/page.tsx` -- Safety FAQ
- `/Users/matthewdi/vipassana-cool/src/app/experience/day-1/page.tsx` -- Day 1 experience
- `/Users/matthewdi/vipassana-cool/src/app/resources/page.tsx` -- Resources
- `/Users/matthewdi/vipassana-cool/src/app/practice-buddy/page.tsx` -- Practice Buddy
- `/Users/matthewdi/vipassana-cool/src/components/faq-detail-page.tsx` -- FAQ detail template
- `/Users/matthewdi/vipassana-cool/src/components/faq-schema.tsx` -- FAQ schema component
- `/Users/matthewdi/vipassana-cool/src/components/day-page.tsx` -- Day page template
- `/Users/matthewdi/vipassana-cool/src/components/footer.tsx` -- Footer with author attribution
- `/Users/matthewdi/vipassana-cool/src/components/navigation.tsx` -- Navigation structure
- `/Users/matthewdi/vipassana-cool/src/app/sitemap.ts` -- Sitemap configuration
- `/Users/matthewdi/vipassana-cool/src/app/robots.ts` -- Robots configuration
- `/Users/matthewdi/vipassana-cool/public/llms.txt` -- LLM discovery file
