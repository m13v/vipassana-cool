import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  ProofBand,
  ProofBanner,
  FaqSection,
  RemotionClip,
  AnimatedBeam,
  BackgroundGrid,
  GradientText,
  NumberTicker,
  Marquee,
  BentoGrid,
  StepTimeline,
  AnimatedCodeBlock,
  ComparisonTable,
  MetricsRow,
  GlowCard,
  BeforeAfter,
  BookCallCTA,
  TerminalOutput,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type BentoCard,
  type ComparisonRow,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/claude-skills-for-daily-vipassana-practice";
const PUBLISHED = "2026-04-25";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Claude Skills for Daily Vipassana Practice: One Skill, No Coaching",
  description:
    "There is exactly one Claude Skill running in production for daily Vipassana practice. It is an operator skill that pairs two humans on a Google Meet. It cannot teach the technique, by design, because the Goenka tradition reserves that role for in-person assistant teachers at 10-day residential courses.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Claude skills for daily vipassana practice: the one production skill, and what it deliberately refuses",
    description:
      "Skill at ~/.claude/skills/vipassana-matching/SKILL.md, 344 lines, allowed-tools: Bash, Read, Edit, Write, WebSearch. Zero tools that can address the meditator. The 8-step Quick Start ends at 'Report: X pairs sent' and stops.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Claude skills for daily vipassana practice: one skill, no coaching",
    description:
      "The skill's allowed-tools list is five tools, none of which can speak to the practitioner. The 8-step Quick Start has no step 9. The lineage made the constraint, the skill respects it.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "Is there an actual Claude Skill running in production for vipassana.cool?",
    a: "Yes, exactly one. It lives at ~/.claude/skills/vipassana-matching/SKILL.md on the operator's machine, the file is 344 lines, and the YAML frontmatter declares allowed-tools: Bash, Read, Edit, Write, WebSearch. It is invoked when the operator says things like 'do matching' or 'check the waitlist.' What it actually does, end to end, is query the Neon Postgres waitlist, find pairs whose UTC sit times are within 60 minutes of each other, optionally web-search a candidate's name to verify they are who they say they are, prepare a list of recommended pairs, wait for the operator to confirm, then create Google Meet rooms and send confirmation emails through Resend. There is no model-call against Anthropic from inside the production website itself; the skill runs in the operator's Claude Code session. The website's own runtime AI footprint is one floating page-assistant chat on the /t/ guide pages, which uses Google Generative AI to answer questions about the public guide content and has no access to the matches table.",
  },
  {
    q: "Why doesn't the skill speak to the meditator directly, the way other 'AI for daily practice' tools do?",
    a: "Because the technique it would otherwise be coaching is taught in a specific way by a specific lineage, and a Claude Skill is not the right vehicle for that role. Goenka-style Vipassana is transmitted at 10-day residential courses by authorized assistant teachers on a strict donation basis through dhamma.org. Technique instruction is reserved for that setting. A Claude Skill can be useful around the practice, on the logistics layer (who is sitting, when, with whom, has the calendar invite gone out, did they show up), and that is exactly the layer this skill covers. It can also be useful on the content layer of public, non-instructional guide pages, which is the only place this site uses an LLM at runtime. Anything operational about the practice itself, the skill is silent on.",
  },
  {
    q: "What is in the skill's allowed-tools list, and what is deliberately not in it?",
    a: "The allowed-tools line is exactly: Bash, Read, Edit, Write, WebSearch. Five tools. Bash is for running the operator scripts (find-matches, send-matches, check-stats). Read is for reading the SKILL.md and the script files themselves. Edit is for occasional surgical changes to the send-matches.mjs PAIRS array. Write is for new query scripts saved into vipassana-cool/scripts/. WebSearch is for verifying a candidate's name and email domain before suggesting them as a buddy. What is not in the list: any Anthropic Messages call as a tool, any Slack or notification tool, any voice or chat tool that could reach the practitioner, any Calendar or Email tool that runs without an operator intermediary. The Calendar API and the Resend send happen inside scripts the operator runs, not as autonomous skill tools.",
  },
  {
    q: "Walk me through the 8-step Quick Start at the end of SKILL.md.",
    a: "Step 1, run check-stats.mjs for a full status snapshot of the database (counts of pending, ready, contacted, engaged, matched, plus recent signups). Step 2, run find-matches.mjs to enumerate viable pairs under the ±60 minute UTC cap and applying the prior-pair guard. Step 3, query vipassana_emails for inbound replies that might change a candidate's eligibility. Step 4, present top-recommended pairs to the operator and wait for explicit confirmation. Step 5, for each approved pair create a recurring daily Google Calendar event with a Meet conference and per-person tracking tokens stored in meet_links. Step 6, edit send-matches.mjs with the approved PAIRS array (each entry naming person A id, person B id, and the two tracking URLs). Step 7, run send-matches.mjs which calls /api/admin/matches with sendConfirmation: true and a 2-second rate limit between sends. Step 8, report the result: X pairs sent, X confirming, X matched, X pending. There is no step 9. The skill stops at the report.",
  },
  {
    q: "What does 'the skill cannot speak to the practitioner' actually mean in code?",
    a: "It means there is no path from the SKILL.md back to a meditator's inbox or device that does not first pass through the operator. The send-matches.mjs script writes the email body using static HTML builders in src/lib/emails.ts; the skill does not author the email at runtime. The intro template names the operator (Matt) and refers to the meditator's chosen partner by their actual first name and chosen sit time, both pulled from the waitlist row. The body of the email talks about logistics, not technique: opening the same Meet link at the same time every day, optionally playing a Goenka recording over screen-share, sitting for the chosen duration. There is no model-generated coaching, no after-action prompt, no encouragement loop. If a Claude Skill could write the email body, it could insert technique advice, and the design specifically routes around that.",
  },
  {
    q: "Could the skill be extended to coach a meditator on a difficult sit?",
    a: "Technically yes. Editorially no, and that decision is the entire reason this page exists. The existing Bash and Write tools could absolutely be wired to a Resend send or an SMS gateway, and a model call could absolutely generate a 'how to work with this difficulty' response. The reason the skill does not do this is not technical limitation but lineage respect. For anything operational about the practice, the right place is a 10-day residential course at dhamma.org with an authorized assistant teacher. A Claude Skill that pretended to fill that role would be giving people the wrong artifact and undermining a tradition whose entire transmission model is designed around in-person, authorized teaching.",
  },
  {
    q: "How does the skill verify it is matching real practitioners and not bots or one-off curious sign-ups?",
    a: "Two layers, both deterministic. First, the skill's WebSearch tool is used in step 4 of the Quick Start to look up a candidate's name plus email domain or city. The findings get written to the research_notes column on waitlist_entries so future runs can see what was learned. Second, the auto-match cron at src/app/api/auto-match/route.ts enforces a 24-hour cool-down on contact_count = 0 signups before they enter the auto-pool, gives a 7-day re-try gap between attempts for anyone whose previous match closed, and skips anyone whose contact_count is 10 or more (status 'ready' bypasses the cap). The skill itself respects those database states; it never bypasses them. So a brand-new signup is intentionally invisible to the auto-pipeline for 24 hours, by which point a human (the operator, often via this skill) has eyeballed the row.",
  },
  {
    q: "Do the matched practitioners ever interact with Claude or any AI?",
    a: "Not as part of the matching or the daily sit. The pair gets emails written by static HTML templates, a Google Calendar invite that arrives in their inbox like any other, and a daily Google Meet URL. There is no chat interface, no voice agent, no AI coach the meditator opens during a sit. If a practitioner browses the public guide pages on /t/, they may interact with the floating page assistant chat at the bottom right of those pages; that runs on Google Generative AI inside src/app/api/guide-chat/route.ts, has no access to matches, and is scoped to answering questions about the public text on the page they are reading. The matched daily-sit experience is two humans on a silent Meet call. Nothing else is in the loop.",
  },
  {
    q: "What does the SKILL.md file actually look like at the top?",
    a: "Six lines of YAML frontmatter, then the body. The frontmatter is: name: vipassana-matching; description: 'Full Practice Buddy matching workflow for vipassana.cool — check submissions, research candidates, identify matches, send confirmation emails, and manage the waitlist'; allowed-tools: Bash, Read, Edit, Write, WebSearch. After the frontmatter, the body opens with 'Trigger this skill when the user asks to:' followed by six trigger phrases, then a Project Context table, then a Person Status Flow ASCII diagram, then a Match Status Flow, then the smart confirmation flow, the auto-expiry rules, the guards, the database schema, the Node.js query pattern, the matching workflow, the admin API reference, and the reusable scripts. None of those sections contain a prompt that would address a practitioner.",
  },
  {
    q: "If I want a Claude Skill that helps me personally with daily Vipassana practice, what should I do instead?",
    a: "If you want logistics help around your own practice (calendar invites, finding a sit partner in your timezone, tracking that you and your partner both showed up to a Meet room), the matching skill on this site already provides that to you indirectly: sign up at /practice-buddy and you are in the pool. If you want a private operator skill on your own machine that does similar work for a small circle of friends, the SKILL.md file in this product is freely readable and the pattern is straightforward to copy. If you want technique guidance for your sits, that is not what a Claude Skill should be giving you, and the only honest pointer this page can offer is dhamma.org and a 10-day residential course with an authorized assistant teacher. Nothing on this site, and no Claude Skill anywhere, is a substitute for that.",
  },
];

const skillFrontmatter = `---
name: vipassana-matching
description: Full Practice Buddy matching workflow for vipassana.cool — check submissions, research candidates, identify matches, send confirmation emails, and manage the waitlist
allowed-tools: Bash, Read, Edit, Write, WebSearch
---

# Vipassana Practice Buddy Matching Skill

Trigger this skill when the user asks to:
- Do matching / run matching
- Check submissions or the waitlist
- Review who to match
- Send intro or confirmation emails
- Manage the Practice Buddy waitlist
- Check inbound emails or replies from matched pairs`;

const quickStartSnippet = `# Quick Start, from SKILL.md
# Eight steps. The skill stops at step 8 and does not address the meditator.

1. node scripts/check-stats.mjs           # current waitlist + match state
2. node scripts/find-matches.mjs          # viable pairs under +/-60 UTC min cap
3. # Check inbound emails (vipassana_emails, direction='inbound')
4. # Present top recommendations, WAIT for operator confirmation
5. # For each approved pair: create Google Meet + tracking links
6. # Edit scripts/send-matches.mjs with approved PAIRS array
7. node scripts/send-matches.mjs          # sends with 2s rate limit
8. # Report: X pairs sent, X confirming, X matched, X pending

# (no step 9)
# (no model call to the meditator)
# (no after-sit follow-up loop)`;

const whatTheSkillDoesBento: BentoCard[] = [
  {
    title: "Reads waitlist state from Neon",
    description:
      "Step 1 of every run is check-stats.mjs, which prints the count of entries in each status (pending, ready, contacted, engaged, matched, unsubscribed) plus a 10-row tail of the most recent signups. The skill never guesses at state; it queries.",
    size: "2x1",
    accent: true,
  },
  {
    title: "Enumerates viable pairs deterministically",
    description:
      "find-matches.mjs builds session slots from eligible candidates and emits every pair within ±60 UTC minutes. The skill does not rank by 'vibes'. It surfaces a sorted list and the operator picks.",
  },
  {
    title: "Web-searches candidates for sanity",
    description:
      "Step 4 uses the WebSearch tool against name + email domain or city, and writes findings to the research_notes column on waitlist_entries. The skill is allowed to look up public information; it is not allowed to write anything to the practitioner.",
  },
  {
    title: "Creates real Google Meet rooms",
    description:
      "Step 5 hits the Google Calendar API with a recurring RRULE:FREQ=DAILY event using the matt@mediar.ai service credentials. The Meet URL is permanent for the pair. The skill produces the room; the practitioners use it without further skill involvement.",
    size: "2x1",
  },
  {
    title: "Drives send-matches.mjs at 2-second cadence",
    description:
      "Step 7 calls /api/admin/matches with sendConfirmation: true and a 2-second pause between sends. The body of every email is built from static HTML templates in src/lib/emails.ts. The skill does not author email copy at runtime.",
  },
  {
    title: "Stops at the report",
    description:
      "Step 8 is 'Report: X pairs sent, X confirming, X matched, X pending'. There is no step 9. No coaching follow-up. No 'how was your sit' message. No retention loop.",
  },
];

const skillVsCoachRows: ComparisonRow[] = [
  {
    feature: "Who the skill talks to",
    competitor:
      "The practitioner. A coach skill addresses the meditator directly: morning prompts, after-sit reflection, generated encouragement.",
    ours:
      "The operator. The skill runs in the operator's Claude Code session and prepares pairs for the operator to approve. It never sends anything to the meditator on its own.",
  },
  {
    feature: "Tool surface",
    competitor:
      "Typically includes a chat tool, a notification tool, a voice tool, and a model call to generate guidance per session.",
    ours:
      "Five tools total: Bash, Read, Edit, Write, WebSearch. None of them can address the practitioner. Email is sent by a Resend call inside an operator-run script, not by the skill itself.",
  },
  {
    feature: "What it does about technique",
    competitor:
      "Generates technique-adjacent advice: how to sit, how to handle sleepiness, what to do with a sensation that won't quit.",
    ours:
      "Nothing. Technique is reserved for in-person, authorized teaching at a 10-day residential course (dhamma.org). The skill explicitly redirects there.",
  },
  {
    feature: "What it does about logistics",
    competitor:
      "Often nothing. Most coaching skills don't actually own a calendar, a partner, a meet URL, or a database. They own a conversation.",
    ours:
      "Everything. Calendar invites, recurring Meet rooms, per-person tracking tokens (meet_links), click logging (meet_clicks), confirmation emails, decline handling, expiry, ghost-filter.",
  },
  {
    feature: "Determinism on the same input",
    competitor:
      "Two runs against the same waitlist will produce different copy, possibly different recommendations, depending on temperature.",
    ours:
      "Two runs against the same waitlist produce the same candidate ranking from find-matches.mjs. The script is plain SQL plus an in-process sort.",
  },
  {
    feature: "What 'success' looks like",
    competitor:
      "Engagement metrics: streaks, daily opens, words exchanged with the AI, average session length in chat.",
    ours:
      "Two meet_clicks rows on the same match_id, on the same day, at roughly the same wall-clock time. That row is the receipt that two humans showed up.",
  },
  {
    feature: "Failure mode",
    competitor:
      "The model hallucinates technique-adjacent advice; the practitioner internalizes something a tradition would not have taught them.",
    ours:
      "A pair stops clicking. The match quietly ends. Both people return to 'ready' and get re-paired by the next cron. No one was given technique by a model.",
  },
  {
    feature: "Cost per practitioner per day",
    competitor:
      "One or more LLM completions per day per user, at a non-trivial token count when context includes prior conversation.",
    ours:
      "Zero model calls per practitioner per day. The skill runs episodically when the operator triggers it; each run costs a handful of small DB reads and a few emails.",
  },
];

const lifecycleSteps = [
  {
    title: "Trigger phrase from the operator",
    description:
      "The skill's frontmatter lists the trigger phrases: 'do matching', 'check the waitlist', 'review who to match', 'send intro emails', 'manage the Practice Buddy waitlist', 'check inbound emails'. Claude reads SKILL.md when one of these comes in and then follows the workflow inside.",
  },
  {
    title: "Stats snapshot via Bash",
    description:
      "First Bash call runs node scripts/check-stats.mjs. Output is a markdown-style table of entry statuses, match statuses, recent signups, and confirmation email opens. The skill quotes those numbers in the response so the operator sees the same shape every time.",
  },
  {
    title: "Candidate enumeration via Bash",
    description:
      "Second Bash call runs node scripts/find-matches.mjs. The script joins the eligible pool against the ±60 UTC minute filter, applies the prior-pair guard from getPriorMatchedIds in src/lib/db.ts, and prints viable pairs grouped by overlap quality.",
  },
  {
    title: "Inbound email check via raw SQL",
    description:
      "A third Bash call runs an inline node command that queries vipassana_emails for direction='inbound' rows in the last 24 hours. Replies that include 'declining', 'unsubscribe', or 'changing time' change which candidates remain eligible.",
  },
  {
    title: "Optional WebSearch on each shortlist candidate",
    description:
      "For top recommendations, the skill uses the WebSearch tool against the candidate's name + email domain or city. The summary is written back to the research_notes column on waitlist_entries via a small Bash + node update.",
  },
  {
    title: "Hand-off: present pairs, wait for operator approval",
    description:
      "The skill explicitly stops here. Quick Start step 4 says 'wait for user confirmation before sending'. The recommendation list is read aloud (by Claude in the operator's terminal) and the operator says yes/no/swap.",
  },
  {
    title: "Per-pair Google Meet creation via Calendar API",
    description:
      "For each approved pair, a Bash + python call hits https://www.googleapis.com/calendar/v3/calendars/primary/events with conferenceDataVersion=1 and an RRULE:FREQ=DAILY. The returned Meet URL gets stored in meet_links along with two per-person tracking tokens.",
  },
  {
    title: "Send via send-matches.mjs",
    description:
      "Final Bash call edits scripts/send-matches.mjs with the PAIRS array (each entry: personAId, personBId, meetLinkA, meetLinkB) and runs the script. The script POSTs to /api/admin/matches with sendConfirmation: true. 2-second rate limit between sends. The skill closes by reporting: X pairs sent, X confirming, X matched, X pending.",
  },
];

const allowedToolsTokens = [
  "Bash",
  "Read",
  "Edit",
  "Write",
  "WebSearch",
  "// no Anthropic Messages tool",
  "// no Slack tool",
  "// no SMS tool",
  "// no voice tool",
  "// no autonomous Email tool",
  "// no Calendar tool",
  "// no Push notification tool",
];

const skillRunTerminal = [
  { type: "command" as const, text: "$ claude" },
  {
    type: "output" as const,
    text: "operator: do matching",
  },
  {
    type: "output" as const,
    text: "claude: invoking vipassana-matching skill",
  },
  { type: "command" as const, text: "$ node scripts/check-stats.mjs" },
  {
    type: "output" as const,
    text: "Entry Statuses: pending=45, matched=26, ready=14, contacted=3",
  },
  {
    type: "output" as const,
    text: "Match Statuses: confirming=1, pending=12, active=3, expired=87",
  },
  { type: "command" as const, text: "$ node scripts/find-matches.mjs" },
  {
    type: "output" as const,
    text: "12 viable pairs found under +/-60 UTC minute cap",
  },
  {
    type: "output" as const,
    text: "claude: top 4 recommendations ready for review (wait for operator approval)",
  },
  {
    type: "output" as const,
    text: "operator: approve pairs 1, 2, 3",
  },
  {
    type: "command" as const,
    text: "$ python create-meets.py --pairs 1,2,3",
  },
  {
    type: "success" as const,
    text: "3 recurring Google Meet events created, tracking tokens written to meet_links",
  },
  { type: "command" as const, text: "$ node scripts/send-matches.mjs" },
  {
    type: "success" as const,
    text: "Report: 3 pairs sent, 1 confirming, 2 matched, 0 pending",
  },
  {
    type: "output" as const,
    text: "claude: skill complete (no step 9)",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Claude skills for daily Vipassana practice" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  {
    name: "Claude skills for daily Vipassana practice",
    url: PAGE_URL,
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Claude Skills for Daily Vipassana Practice: One Skill, No Coaching",
    description:
      "There is exactly one Claude Skill in production for daily Vipassana practice on vipassana.cool. It is an operator skill at ~/.claude/skills/vipassana-matching/SKILL.md whose allowed-tools list is five tools, none of which can address the practitioner. The 8-step Quick Start ends at the report.",
    url: PAGE_URL,
    datePublished: PUBLISHED,
    author: "Matthew Diakonov",
    authorUrl: "https://m13v.com",
    publisherName: "Vipassana.cool",
    publisherUrl: "https://vipassana.cool",
  });
  const faqSchemaJson = faqPageSchema(faqs, `${PAGE_URL}#faq`);
  const breadcrumbSchemaJson = breadcrumbListSchema(breadcrumbSchemaItems);

  return (
    <article className="bg-white text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            articleSchemaJson,
            faqSchemaJson,
            breadcrumbSchemaJson,
          ]),
        }}
      />

      <div className="pt-10">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <header className="max-w-4xl mx-auto px-6 pt-6 pb-4">
        <p className="text-xs font-mono uppercase tracking-[0.22em] text-teal-600 mb-3">
          One skill in production. No coaching layer.
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          Claude skills for daily Vipassana practice:{" "}
          <GradientText>one skill, and what it deliberately refuses</GradientText>
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
          There is exactly one Claude Skill running in production for daily
          Vipassana practice on this site. The file is{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[14px]">
            ~/.claude/skills/vipassana-matching/SKILL.md
          </code>
          , 344 lines, and the YAML frontmatter declares{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px]">
            allowed-tools: Bash, Read, Edit, Write, WebSearch
          </code>
          . Five tools. None of them can address the meditator. The 8-step
          Quick Start ends at the operator report and stops. The reason is
          not a missing feature; it is the lineage. This page walks the
          file, then explains the constraint that built it.
        </p>
      </header>

      <div className="py-4">
        <ArticleMeta
          datePublished={PUBLISHED}
          authorRole="operator, vipassana.cool"
          readingTime="12 min read"
        />
      </div>

      <div className="py-2">
        <ProofBand
          rating={4.9}
          ratingCount="direct meditator feedback"
          highlights={[
            "1 production skill: vipassana-matching, 344 lines, 5 tools",
            "Skill stops at the report; no message ever reaches the practitioner",
            "Technique transmission redirected to dhamma.org, every time",
          ]}
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-10">
        <BackgroundGrid pattern="dots" glow={true}>
          <div className="max-w-2xl mx-auto">
            <RemotionClip
              title="One Claude Skill. Zero coaching."
              subtitle="The skill runs the matcher. The practitioner sits with another human."
              captions={[
                "File: ~/.claude/skills/vipassana-matching/SKILL.md",
                "allowed-tools: Bash, Read, Edit, Write, WebSearch",
                "Five tools. None can speak to the meditator.",
                "8-step Quick Start. No step 9. No coaching loop.",
                "Technique stays where the lineage put it: dhamma.org, 10-day course, in person.",
              ]}
              accent="teal"
            />
          </div>
        </BackgroundGrid>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The skill, in four numbers
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Four numbers describe the shape of the production skill. Each one
          is checkable: the SKILL.md file is on the operator&apos;s machine
          and the workflow scripts are at{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
            vipassana-cool/scripts/
          </code>
          .
        </p>
        <MetricsRow
          metrics={[
            { value: 1, label: "production Claude Skill for daily practice" },
            { value: 5, label: "tools in allowed-tools, none speak to the meditator" },
            { value: 8, label: "steps in the Quick Start, ending at the report" },
            { value: 0, label: "model-generated messages sent to practitioners" },
          ]}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What other &ldquo;daily practice&rdquo; AI tools assume, and what the lineage actually allows
        </h2>
        <p className="text-zinc-600 mb-4 leading-relaxed max-w-3xl">
          Most articles on this topic assume the goal is to embed an AI
          coach in the meditator&apos;s morning routine: a chat that opens
          before the sit, a model that prompts a short reflection
          afterwards, a streak counter, an encouraging push at 6 PM if
          today&apos;s box is unchecked. That shape works for self-led
          habits where there is no transmitter and no canon: writing,
          jogging, language flashcards.
        </p>
        <p className="text-zinc-600 leading-relaxed max-w-3xl">
          Goenka-style Vipassana is not that shape. The technique is
          transmitted in person at 10-day residential courses by
          authorized assistant teachers, on a strict donation basis,
          through{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-600 underline hover:text-teal-700"
            rel="noopener noreferrer"
            target="_blank"
          >
            dhamma.org
          </a>
          . The role of teacher is reserved. The space a Claude Skill can
          legitimately occupy is the logistics layer around the practice:
          who sits, with whom, when, did they show up. Not what they
          should notice. Not how they should respond to a difficulty. Not
          a single word about technique. The production skill on this site
          is built inside that boundary.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The anchor fact: the actual frontmatter
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          This is the top of the SKILL.md file as it lives on disk. The
          third line of the frontmatter is the entire surface area of the
          skill. If a tool that could speak to the meditator were on that
          line, the skill could coach. None is. None will be.
        </p>
        <AnimatedCodeBlock
          code={skillFrontmatter}
          language="yaml"
          filename="~/.claude/skills/vipassana-matching/SKILL.md"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The five tools, and the tools that are not there
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The marquee below cycles through the actual{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
            allowed-tools
          </code>{" "}
          list and then the categories of tools that are intentionally
          absent. Each absence has a reason; together they keep the skill
          on the operator side of the boundary.
        </p>
        <Marquee speed={40}>
          {allowedToolsTokens.map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 font-mono text-xs text-teal-700"
            >
              {t}
            </span>
          ))}
        </Marquee>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Inputs the skill reads, outputs the skill produces
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          On the left: every input the skill consumes from the database
          and the operator. In the middle: the workflow body. On the
          right: outputs that land in systems the practitioners already
          use (Calendar, Inbox, Meet). Note what is not on the right: a
          chat with the meditator, a notification on their phone, a model
          response in their morning routine.
        </p>
        <AnimatedBeam
          title="vipassana-matching skill, end to end"
          from={[
            {
              label: "waitlist_entries",
              sublabel: "name, email, timezone, sit times, duration",
            },
            {
              label: "vipassana_emails (inbound)",
              sublabel: "replies that change candidate eligibility",
            },
            {
              label: "operator trigger phrase",
              sublabel: "'do matching' / 'check the waitlist'",
            },
            {
              label: "WebSearch results",
              sublabel: "name + email domain or city sanity",
            },
          ]}
          hub={{
            label: "8-step Quick Start",
            sublabel: "stats > pairs > inbox > approve > meet > send > report",
          }}
          to={[
            {
              label: "matches row",
              sublabel: "status='confirming', two UUID tokens",
            },
            {
              label: "Google Calendar event",
              sublabel: "RRULE:FREQ=DAILY, both inboxes",
            },
            {
              label: "meet_links + meet_clicks",
              sublabel: "per-person tracking tokens, click logs",
            },
            {
              label: "static-template emails via Resend",
              sublabel: "logistics only, no model-generated copy",
            },
          ]}
          accentColor="#0d9488"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          A real run, transcribed
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Below is what an actual invocation looks like in the
          operator&apos;s Claude Code session. The numbers are from a
          recent{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
            check-stats.mjs
          </code>{" "}
          snapshot. The final line is where the skill stops; everything
          after that is two humans on a Meet call.
        </p>
        <TerminalOutput
          title="claude (operator session)"
          lines={skillRunTerminal}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Six things the skill does, and one thing it does not
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Each card is a specific behavior the skill carries out, plus
          the one it deliberately omits. None of these are aspirational;
          all of them are in the file or in the scripts the file runs.
        </p>
        <BentoGrid cards={whatTheSkillDoesBento} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <GlowCard>
          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-zinc-900 mb-3">
              The skill stops at step{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={8} />
              </span>
              . There is no step{" "}
              <span className="font-mono text-teal-700">9</span>.
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Quick Start step{" "}
              <span className="font-mono text-teal-700">1</span> through
              step{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={8} />
              </span>{" "}
              are: stats snapshot, find candidates, check inbound
              email, present recommendations, create Google Meet rooms
              and tracking tokens, edit{" "}
              <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
                send-matches.mjs
              </code>
              , run it, report the result. The Quick Start section ends
              there. The body of the skill never includes a follow-up
              that addresses the practitioner.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              The closest thing to a model-touch on the practitioner side
              is the floating page-assistant chat at the bottom right of
              every{" "}
              <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
                /t/
              </code>{" "}
              guide page, powered by Google Generative AI inside{" "}
              <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
                src/app/api/guide-chat/route.ts
              </code>
              . That assistant has no access to the matches table, cannot
              send email, cannot schedule, and is scoped to answering
              questions about the public text on the page. It is also
              not a Claude Skill.
            </p>
          </div>
        </GlowCard>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Claude Skill as coach vs. Claude Skill as operator
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The pattern most articles on this topic assume is on the left.
          The pattern this product runs is on the right. Both are real
          ways to use a Claude Skill. Only one of them is appropriate
          for a tradition that reserves transmission for in-person
          authorized teachers.
        </p>
        <ComparisonTable
          heading="Coach-shaped skill vs. operator-shaped skill"
          productName="vipassana-matching (operator-shaped)"
          competitorName="Typical 'AI coach for daily practice' skill"
          rows={skillVsCoachRows}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What the file actually shows you, top to bottom
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The Quick Start at the end of SKILL.md, copied verbatim into
          a code block here. Eight bash steps, three stop-at-the-operator
          steps in between, and a hard end at the report.
        </p>
        <AnimatedCodeBlock
          code={quickStartSnippet}
          language="bash"
          filename="~/.claude/skills/vipassana-matching/SKILL.md"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <ProofBanner
          quote="allowed-tools: Bash, Read, Edit, Write, WebSearch"
          source="line 4 of ~/.claude/skills/vipassana-matching/SKILL.md, the entire surface area of the production Claude Skill that runs daily for vipassana practice on this site"
          metric="5 tools"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          One run from trigger phrase to report
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The full flow of one invocation. Eight steps inside the
          skill, two human gates (the operator approval, the practitioner
          showing up to Meet), and zero model-generated messages in the
          practitioner&apos;s inbox.
        </p>
        <StepTimeline steps={lifecycleSteps} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The two states a meditator might be in, side by side
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Toggle between the typical &ldquo;AI for daily practice&rdquo;
          experience on the left, and what the production Vipassana skill
          actually delivers on the right. The point is not that one is
          better in the abstract; the point is which one is appropriate
          for this lineage.
        </p>
        <BeforeAfter
          title="Daily 6 AM, two product shapes"
          before={{
            label: "Coach-shaped skill",
            content:
              "An app or chat opens at the scheduled time. A model greets the user. After the sit, the user is asked to reflect; the model echoes back something encouraging or technique-adjacent. A streak counter increments. The model retains a memory of recent sessions and brings it up tomorrow.",
            highlights: [
              "Push notification or in-app chat at the scheduled minute.",
              "Model-generated copy at every interaction.",
              "Technique-adjacent advice generated at runtime.",
              "Retention loop: streak, badges, daily nudge if missed.",
            ],
          }}
          after={{
            label: "Operator-shaped skill (this product)",
            content:
              "A Google Calendar invite landed weeks ago. The meditator opens the same Meet URL at their chosen minute. The other human (matched by the skill) joins. They sit silently for the agreed duration. They close the tab. Two meet_clicks rows land on the same match_id. The skill is not in the room.",
            highlights: [
              "Calendar reminder on a device the meditator already uses.",
              "Static-template email copy, written by the operator months ago.",
              "Zero technique-adjacent text generated at any point.",
              "No streak, no nudge, no memory loop. The match either keeps happening or it doesn't.",
            ],
          }}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Why the lineage made the constraint, and why the skill respects it
        </h2>
        <p className="text-zinc-600 mb-4 leading-relaxed max-w-3xl">
          Goenka-style Vipassana is taught at 10-day residential courses
          by authorized assistant teachers, on a strict donation basis,
          through{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-600 underline hover:text-teal-700"
            rel="noopener noreferrer"
            target="_blank"
          >
            dhamma.org
          </a>
          . The transmission model is in-person, authorized, and
          relational. There is no app version, no audio short-cut, no
          digital teacher. A Claude Skill that addressed the
          practitioner about technique would be quietly substituting
          itself into a role the tradition specifically reserves.
        </p>
        <p className="text-zinc-600 leading-relaxed max-w-3xl">
          What a Claude Skill can do well, around this practice, is take
          a stack of logistics off the operator&apos;s plate so two
          humans can show up to a daily Meet room without either of them
          having to manage it. That is the entire job of the
          vipassana-matching skill. It is small on purpose. It stays
          small on purpose. The boundary it observes is the boundary of
          the tradition it serves.
        </p>
      </section>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        heading="Want to see the actual SKILL.md and a live matching run?"
        description="Book a short call. We'll open the SKILL.md file together, run check-stats.mjs and find-matches.mjs against the live waitlist, and walk through one matching pass end to end. No coaching, no chatbot, just the operator's actual workflow."
        section="claude-skills-for-daily-vipassana-practice-footer"
      />

      <div className="max-w-4xl mx-auto px-6">
        <FaqSection items={faqs} heading="Frequently asked questions" />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          Related pages on the same topic
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/t/ai-accountability-partner"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            AI accountability partner: why this site is deliberately not one
          </Link>
          <Link
            href="/t/daily-vipassana-working-professional"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Daily Vipassana for working professionals
          </Link>
          <Link
            href="/t/vipassana-daily-practice"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Vipassana daily practice
          </Link>
          <Link
            href="/t/after-vipassana-daily-practice-rewire-habits"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            After Vipassana: daily practice + rewiring habits
          </Link>
          <Link
            href="/practice-buddy"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Practice Buddy, the product the skill operates
          </Link>
          <Link
            href="https://www.dhamma.org"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            dhamma.org (the only place the technique is taught)
          </Link>
        </div>
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Open the SKILL.md and walk a live matching run with the operator."
        section="claude-skills-for-daily-vipassana-practice-sticky"
      />
    </article>
  );
}
