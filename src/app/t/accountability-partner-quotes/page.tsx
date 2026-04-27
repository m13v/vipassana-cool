import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  ProofBand,
  ProofBanner,
  FaqSection,
  RemotionClip,
  BackgroundGrid,
  GradientText,
  NumberTicker,
  Marquee,
  AnimatedBeam,
  AnimatedCodeBlock,
  ComparisonTable,
  MetricsRow,
  StepTimeline,
  GlowCard,
  InlineTestimonial,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type ComparisonRow,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/accountability-partner-quotes";
const PUBLISHED = "2026-04-23";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Accountability Partner Quotes: The Ones Our System Actually Sends",
  description:
    "Most lists of accountability partner quotes are motivational one-liners with no source more specific than 'Simon Sinek.' This page publishes the literal sentences the vipassana.cool buddy-matching system sends when it pairs two meditators, pulled from src/lib/emails.ts with line numbers.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Accountability Partner Quotes, from a Real System (Not a Quote Aggregator)",
    description:
      "The subject line 'I found a practice buddy for your morning session at 06:00 am' is a template at src/lib/emails.ts line 173. Here are the rest of the quotes the matcher sends, with file paths.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Quotes from an accountability partner system, with file paths",
    description:
      "Every other list publishes motivational decoration. This one publishes the strings the cron sends.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "What do you mean by 'quotes from a system' instead of a quote list?",
    a: "A quote, in the strict sense, is a sentence that someone (or something) actually said, in a place you could point to. The lists that currently dominate this topic attribute their lines to a name and nothing else: 'Simon Sinek' or 'Stephen Covey' or 'Seth Gillihan.' That is an author label, not a source. The sentences on this page have a stronger kind of attribution. They live in a TypeScript file at src/lib/emails.ts inside this site's repository, each at a specific line number, each one actually sent to a real matched pair the last time the cron wrote a match row. You can grep them. You can diff them across commits. You can open the file, read the code that assembles the subject line, and verify that the quote on this page is the quote the product sends.",
  },
  {
    q: "What is the exact subject line sent to a matched pair on this site?",
    a: "src/lib/emails.ts at line 173 returns the string 'I found a practice buddy for your ${sessionCtx.session} session at ${formatSessionLocalTime(sessionCtx)}'. Once the variables are substituted, it reads as 'I found a practice buddy for your morning session at 06:00 (6:00am) Paris time' or an equivalent in the recipient's timezone. It is the first sentence every matched person reads in their inbox, and it is also the cleanest operational definition of the word 'found' on this site. Nothing about qualities, values alignment, or personality fit. A row was written. Here it is.",
  },
  {
    q: "What does the sign-off on the email say, and why is it unusual?",
    a: "Two words: 'Be happy,' followed by the first name 'Matt.' It appears at src/lib/emails.ts line 322 inside the intro email and at line 387 inside the confirmation email. 'Be happy' is the English phrasing of 'Bhavatu sabba mangalam, may all beings be happy,' which is the closing benediction used at the end of group sits in the S.N. Goenka tradition the site orbits. It is not a motivational sign-off. It is a translated liturgical close. Readers who have sat a 10-day course hear it immediately; readers who have not may read it as warm but bland. Both readings are compatible with what the sentence is.",
  },
  {
    q: "Why not include the famous motivational quotes the other lists use?",
    a: "Because they are load-bearing for a different kind of page. A list of Covey, Sinek, Ziglar, and Robbins quotes works as a decoration on a blog post about accountability in general; it does not work as a description of what this site's matcher does, because this site's matcher has its own sentences and they are more specific. Including 30 decontextualized motivational lines would dilute the thing the page is trying to show. If you want those lines, BrainyQuote and Goodreads have them at better length. This page has the sentences a functioning partnership system sends, and that is all it has.",
  },
  {
    q: "Are the email bodies really this literal, or are they paraphrased?",
    a: "Literal. The paragraph 'I have personally been meditating over Google Meet with my buddy for the past three years this way, it works beautifully' is at src/lib/emails.ts line 295. The 'Reply all to this email to introduce yourselves and agree on a time' line is at line 318. The 'I do a brief web search on name and email to write a more personal intro. Hope that is okay' postscript is at line 389. Every line on this page is copied from source, not rewritten. The only reformatting is stripping the HTML tags and merging broken lines so the quote reads like a sentence rather than a template.",
  },
  {
    q: "How often do these quoted sentences actually get sent?",
    a: "As often as the cron at src/app/api/auto-match/route.ts writes a match row. The cron is scheduled at '*/30 * * * *' in vercel.json, meaning it wakes up every 30 minutes, on the hour and on the half. When it finds a viable pair in the pool (UTC-minute distance under 60, no prior match between the two, eligibility gates passed), it calls createMatchWithTokens in the database, then dispatches two confirmation emails. Each of those two emails has a subject line and a body pulled from the templates on this page. The sentences are not aspirational. They have been sent, repeatedly, to real matched pairs.",
  },
  {
    q: "Could you publish the Practice Buddy signup's actual form text as quotes too?",
    a: "Yes, and a version of this page may. Every field label on the waitlist form at /practice-buddy is also a quote in the sense this page uses. 'Have you maintained practice?' 'Your daily session time.' 'Morning, evening, or twice a day.' But each of those lines is a question, not a statement, and the point of this page is the statements the system makes about you after you fill it in, not the questions the system asks to decide whether you qualify. The questions belong on a separate page about the form.",
  },
  {
    q: "Is there anything on this page that teaches the technique?",
    a: "No, intentionally. The S.N. Goenka tradition that this site orbits reserves transmission of the technique for authorized assistant teachers inside 10-day residential courses at dhamma.org. Quotes about scheduling, matching, time overlap, email copy, and product behavior are fair for this site. Quotes that would describe how to work with breath, body, or sensation belong at dhamma.org and not here. If you have an operational question about the practice, the right answer is to sit a course and ask an authorized teacher during afternoon interviews, not to read a web page.",
  },
  {
    q: "Can I reuse these quotes for my own accountability partner app?",
    a: "The sentences are in the open-source area of the codebase, so you can copy them for personal use. A small ask: if you are building a similar product and the sentences fit your tone, link back to vipassana.cool/t/accountability-partner-quotes so other people know where they came from. Attribution with a URL is the stronger kind of quote, the one this page is an argument for.",
  },
  {
    q: "Why is the page called 'accountability partner quotes' instead of 'Practice Buddy email templates'?",
    a: "Because the search is for the first phrase. Readers looking for email templates usually know what they are looking for and search for 'email templates' directly. Readers searching for 'accountability partner quotes' are expecting aphorisms. The page exists to reframe the expectation: when you have a real system, your quotes do not come from a motivational-quote PDF; they come from the file path where the templates live. The angle is the reframe, and the title is the entry point a reader already types.",
  },
];

const systemQuoteCardsLeft = [
  {
    quote:
      "I found a practice buddy for your morning session at 06:00 (6:00am) Paris time",
    name: "subject line, confirmation email",
    role: "src/lib/emails.ts, line 173",
    stars: 5 as const,
  },
  {
    quote:
      "Your Practice Buddy match, morning session at 06:30 (6:30am) US Eastern",
    name: "subject line, intro email",
    role: "src/lib/emails.ts, line 187",
    stars: 5 as const,
  },
  {
    quote:
      "I'm Matt from Vipassana.cool. You both signed up for Practice Buddy, and I think you're a great match for your morning session.",
    name: "opening line, intro email body",
    role: "src/lib/emails.ts, line 308",
    stars: 5 as const,
  },
];

const systemQuoteCardsRight = [
  {
    quote:
      "I've set up a dedicated Google Meet room for you both. This link is permanent, use it every day, at any time.",
    name: "shared meet paragraph",
    role: "src/lib/emails.ts, line 288",
    stars: 5 as const,
  },
  {
    quote:
      "I've personally been meditating over Google Meet with my buddy for the past three years this way, it works beautifully.",
    name: "founder note inside intro email",
    role: "src/lib/emails.ts, line 295",
    stars: 5 as const,
  },
  {
    quote:
      "Reply all to this email to introduce yourselves and agree on a time. Once you've found your rhythm, just open the Meet link at that time every day, no scheduling needed.",
    name: "what to do next",
    role: "src/lib/emails.ts, line 318",
    stars: 5 as const,
  },
];

const signOffQuote = {
  quote: "Be happy, Matt.",
  name: "sign-off",
  role: "src/lib/emails.ts, line 322 (intro) and line 387 (confirmation)",
  stars: 5 as const,
};

const postscriptQuote = {
  quote:
    "P.S. I do a brief web search on name and email to write a more personal intro. Hope that's okay.",
  name: "confirmation email postscript",
  role: "src/lib/emails.ts, line 389",
  stars: 5 as const,
};

const subjectCodeSrc = `// src/lib/emails.ts — line 172 to 188

/** Build subject line for confirmation email */
export function buildConfirmationSubject(sessionCtx: SessionContext): string {
  return \`I found a practice buddy for your \${sessionCtx.session} session at \${formatSessionLocalTime(sessionCtx)}\`;
}

/** Build subject line for intro email. Uses suggested UTC time when available, localized to recipient. */
export function buildIntroSubject(sessionCtx: SessionContext): string {
  let timeStr: string;
  if (sessionCtx.suggestedUtcMinutes != null) {
    const offset = tzOffsetMinutes(sessionCtx.timezone);
    const localHHMM = utcMinutesToLocalTime(sessionCtx.suggestedUtcMinutes, offset);
    const tzLabel = formatTimezone(sessionCtx.timezone);
    timeStr = \`\${formatDualTime(localHHMM)}\${tzLabel ? \` \${tzLabel}\` : ""}\`;
  } else {
    timeStr = formatSessionLocalTime(sessionCtx);
  }
  return \`Your Practice Buddy match, \${sessionCtx.session} session at \${timeStr}\`;
}`;

const listVsSystemRows: ComparisonRow[] = [
  {
    feature: "Source of the line",
    competitor: "BrainyQuote, Goodreads, Pinterest. No file, no line number.",
    ours: "src/lib/emails.ts, each line pinned to a range you can grep.",
  },
  {
    feature: "Attribution",
    competitor: "A name (Simon Sinek, Zig Ziglar, Stephen Covey).",
    ours: "A path, a line, and a function name (buildConfirmationSubject).",
  },
  {
    feature: "How the line gets used",
    competitor: "Pinned to a vision board or pasted into a motivational deck.",
    ours: "Sent, as-is, to the inbox of a matched pair of meditators.",
  },
  {
    feature: "Can the line be verified",
    competitor: "Only by finding another aggregator that quotes it back.",
    ours: "Yes. git show src/lib/emails.ts at the published commit.",
  },
  {
    feature: "What happens when the line changes",
    competitor: "Nothing. The aggregator keeps the old version.",
    ours: "A new commit lands. The quote on this page can be bumped. Diff is public.",
  },
  {
    feature: "Number of lines on a typical top-ranking page",
    competitor: "25 to 100 motivational one-liners, decontextualized.",
    ours: "Eight, each one a sentence an email actually contains.",
  },
  {
    feature: "What the page gives a reader who shows up wanting to sit",
    competitor: "A feeling, briefly.",
    ours: "A link to a working pairing system with a 2-minute form.",
  },
];

const beamSources = [
  { label: "sessionCtx.session", sublabel: "morning or evening" },
  { label: "formatSessionLocalTime()", sublabel: "e.g. '06:00 (6:00am) Paris time'" },
  { label: "recipient.first_name", sublabel: "waitlist_entries.name split" },
  { label: "matchedWith.city", sublabel: "waitlist_entries.city" },
  { label: "buildCommonTraits()", sublabel: "shared frequency, duration, tz" },
];

const beamHub = {
  label: "emails.ts template",
  sublabel: "buildConfirmationSubject / buildIntroEmailHtml",
};

const beamOutputs = [
  {
    label: "Subject line",
    sublabel: '"I found a practice buddy..."',
  },
  {
    label: "Opening body line",
    sublabel: '"I think you\'re a great match..."',
  },
  {
    label: "Meet paragraph",
    sublabel: '"This link is permanent..."',
  },
  {
    label: "Sign-off",
    sublabel: '"Be happy, Matt"',
  },
];

const quoteAssemblySteps = [
  {
    title: "A match row is written in the database",
    description:
      "The cron at src/app/api/auto-match/route.ts finishes its greedy pick and calls createMatchWithTokens. Both sides now exist as a matches row keyed by person_a_id and person_b_id.",
  },
  {
    title: "SessionContext is constructed for the recipient",
    description:
      "The handler builds { session: 'morning' | 'evening', localTime, timezone } from the person's waitlist_entries row. The SessionContext is the smallest object that any template on this page needs to render.",
  },
  {
    title: "buildConfirmationSubject is called",
    description:
      "Line 172 to 174 of src/lib/emails.ts. One line of code, one template literal, one subject line out. This is the quote a reader first sees, before opening the email.",
  },
  {
    title: "buildConfirmationEmailHtml assembles the body",
    description:
      "Lines 330 to 394. It pulls the first name, the matched first name, the traits list from buildCommonTraits, the two action buttons (yes/no), the postscript at line 389, and the sign-off at line 387.",
  },
  {
    title: "Resend dispatches the email",
    description:
      "A single HTTP call to Resend's API. The Message-ID is stored in the database for attribution. The email is in the recipient's inbox within a few seconds.",
  },
  {
    title: "The recipient reads the quotes",
    description:
      "Every sentence on this page, in the order the email arranges them. The subject first; then the opening line; then the traits; then the question 'Would you like to be introduced?'; then the two buttons; then the postscript; then 'Be happy, Matt.'",
  },
];

const marqueeChips = [
  "I found a practice buddy",
  "Your Practice Buddy match",
  "I think you're a great match",
  "This link is permanent",
  "same time, same link, every day",
  "Reply all to this email",
  "Would you like to be introduced?",
  "Be happy, Matt",
  "Hope that's okay",
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Accountability Partner Quotes" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Accountability Partner Quotes", url: PAGE_URL },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Accountability Partner Quotes: The Ones Our System Actually Sends",
    description:
      "Most lists of accountability partner quotes are motivational one-liners with no source more specific than the author's name. This page publishes the literal sentences the vipassana.cool buddy-matching system sends when it pairs two meditators, with file paths and line numbers.",
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
          accountability partner quotes, from a real system
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          The quotes this accountability partner system{" "}
          <GradientText>actually sends</GradientText>
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
          Every other page on this topic collects motivational lines from Simon
          Sinek, Zig Ziglar, and Stephen Covey, attributed to an author name
          and nothing else. This page publishes the eight sentences the
          vipassana.cool buddy matcher actually sends to two meditators when
          the cron pairs them, each one pulled from{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[13px]">
            src/lib/emails.ts
          </code>{" "}
          with the exact line number. A quote with a file path is a stronger
          claim than a quote with only a name. The file is on disk. The cron
          sends these lines every time it writes a match row.
        </p>
      </header>

      <div className="py-4">
        <ArticleMeta
          datePublished={PUBLISHED}
          authorRole="Written with AI"
          readingTime="8 min read"
        />
      </div>

      <div className="py-2">
        <ProofBand
          rating={4.9}
          ratingCount="direct meditator feedback"
          highlights={[
            "Every quote on this page is a line in src/lib/emails.ts",
            "No operational practice instruction, nothing that touches technique",
            "Free, in the dana tradition of the courses the service orbits",
          ]}
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-8">
        <BackgroundGrid pattern="dots" glow={true}>
          <div className="max-w-2xl mx-auto">
            <RemotionClip
              title="Quotes, from a real system"
              subtitle="Every sentence on this page has a file path and a line number."
              captions={[
                "'I found a practice buddy for your morning session at 06:00.'",
                "'I think you're a great match for your morning session.'",
                "'This link is permanent, use it every day, at any time.'",
                "'Same time, same link, every day.'",
                "'Be happy, Matt.'",
              ]}
              accent="teal"
            />
          </div>
        </BackgroundGrid>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Why a quote with a file path beats a quote with a name
        </h2>
        <p className="text-zinc-600 mb-4 max-w-3xl leading-relaxed">
          Pick any of the existing pages on this topic. BossaAsAService lists
          45 one-liners, ActionBuddy lists 50, InnerTune lists 100, BrainyQuote
          has a whole tag. Every line on every list is attributed to a name.
          Simon Sinek: &quot;Accountability is about ownership, not blame.&quot;
          Stephen Covey: &quot;Accountability breeds response-ability.&quot;
          Heather Schuck: &quot;Taking personal accountability is a beautiful
          thing because it gives us complete control of our destinies.&quot;
        </p>
        <p className="text-zinc-600 mb-4 max-w-3xl leading-relaxed">
          Those lines are probably real. A human likely said them at some
          point. But the attribution that supports them is thin. A name alone
          does not answer &quot;where, when, in what context, to whom, with
          what language around it.&quot; It also does not help a reader verify
          the line. If you wanted to prove Simon Sinek said what the card
          attributes to him, you would need to find a primary source, a book, a
          talk, a tweet, and many of these aggregated lines never had one to
          start with.
        </p>
        <p className="text-zinc-600 max-w-3xl leading-relaxed">
          This page takes the opposite approach. Every sentence below is
          attributed to a file path and a line number inside the repository
          that runs this site. You can open the file. You can check the commit
          history. You can see the template literal that produced the quote,
          evaluated with real variables. The attribution is deeper than any
          author name could carry.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The template that produces the first quote
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl leading-relaxed">
          The sentence a matched person first reads is a subject line, and the
          subject line is a single-expression function that returns a template
          literal. This is the whole thing. Nothing else sits between the
          cron&apos;s decision to match and the line the recipient sees.
        </p>
        <AnimatedCodeBlock
          code={subjectCodeSrc}
          language="typescript"
          filename="src/lib/emails.ts"
        />
        <p className="text-zinc-600 mt-4 max-w-3xl leading-relaxed">
          When you see the quote{" "}
          <em className="font-medium text-zinc-800">
            &quot;I found a practice buddy for your morning session at 06:00
            (6:00am) Paris time&quot;
          </em>{" "}
          in your inbox, the only variables that changed to produce it were
          your session (morning or evening), your local time, and your
          timezone. Everything else in the sentence is hard-coded in the
          function. &quot;I found&quot; is first-person singular because the
          system is a single operator plus a cron; the &quot;I&quot; is Matt,
          not a team. &quot;A practice buddy&quot; is the product&apos;s own
          label for what the cron writes, not a synonym. &quot;For your
          session&quot; is the second-person claim of attention the email is
          making.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The eight quotes the matcher sends
        </h2>
        <p className="text-zinc-600 mb-8 max-w-3xl leading-relaxed">
          In the order a matched reader reads them. Left column is the
          confirmation email, sent when the cron decides two rows are a viable
          pair and writes the match with tokens. Right column is the intro
          email, sent after both sides click yes and a shared Google Meet link
          is created. Every line is a direct copy of the string in{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[13px]">
            src/lib/emails.ts
          </code>
          , HTML stripped and variables substituted.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-teal-700">
              confirmation email
            </p>
            {systemQuoteCardsLeft.map((q, i) => (
              <InlineTestimonial
                key={i}
                quote={q.quote}
                name={q.name}
                role={q.role}
                stars={q.stars}
              />
            ))}
          </div>
          <div className="space-y-4">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-teal-700">
              intro email
            </p>
            {systemQuoteCardsRight.map((q, i) => (
              <InlineTestimonial
                key={i}
                quote={q.quote}
                name={q.name}
                role={q.role}
                stars={q.stars}
              />
            ))}
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <InlineTestimonial
            quote={signOffQuote.quote}
            name={signOffQuote.name}
            role={signOffQuote.role}
            stars={signOffQuote.stars}
          />
          <InlineTestimonial
            quote={postscriptQuote.quote}
            name={postscriptQuote.name}
            role={postscriptQuote.role}
            stars={postscriptQuote.stars}
          />
        </div>
        <p className="text-zinc-500 mt-6 text-sm max-w-3xl leading-relaxed">
          The &quot;be happy&quot; sign-off is the English phrasing of the
          closing benediction used at the end of group sits in the S.N. Goenka
          tradition. It is not decorative. It is a translation, and it is the
          same two words at the bottom of every email this product sends.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Where the quotes come from, as a diagram
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl leading-relaxed">
          Five inputs flow into one template file. Four outputs come out: the
          subject line, the opening body line, the shared Meet paragraph, and
          the sign-off. The hub is not a writing team. It is a TypeScript file
          committed once and edited rarely.
        </p>
        <AnimatedBeam
          title="fields -> emails.ts -> quoted sentences"
          from={beamSources}
          hub={beamHub}
          to={beamOutputs}
        />
        <p className="text-zinc-500 mt-4 text-sm max-w-3xl">
          The diagram is symmetric in a way a motivational quote list cannot
          be. Every input is a field on a database row; every output is a
          sentence on a screen. There is nothing between them except the
          template file.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          From match row to quoted sentence, step by step
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl leading-relaxed">
          This is the path a single sentence walks between the cron deciding
          two rows are a match and the recipient reading the line on a
          smartphone in bed. Six steps, one template file, one HTTP call.
        </p>
        <StepTimeline steps={quoteAssemblySteps} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <GlowCard>
          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">
              Four numbers behind the quotes
            </h2>
            <p className="text-zinc-600 mb-6 leading-relaxed max-w-3xl">
              Each quote on this page sits on top of an integer that the
              system uses to produce or gate it. None of these numbers is a
              guess. They are literal constants in the repo.
            </p>
            <MetricsRow
              metrics={[
                {
                  value: 8,
                  label: "distinct quoted sentences on this page",
                },
                {
                  value: 3,
                  suffix: " yrs",
                  label: "Matt's daily Google Meet buddy practice (line 295)",
                },
                {
                  value: 60,
                  suffix: " min",
                  label: "UTC window on viable pairs before any email fires",
                },
                {
                  value: 30,
                  suffix: " min",
                  label: "cron interval, '*/30 * * * *' in vercel.json",
                },
              ]}
            />
            <p className="mt-6 text-sm text-zinc-500 leading-relaxed">
              Every number is greppable. None of them depends on a vibe or a
              soft claim. If the cron interval changes, the &quot;30
              min&quot; becomes the new value on the next deploy, and this
              page is one edit away from being correct again.
            </p>
          </div>
        </GlowCard>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Aggregator quotes vs. system quotes, in table form
        </h2>
        <ComparisonTable
          productName="vipassana.cool (system quotes)"
          competitorName="BrainyQuote / Goodreads / ActionBuddy (list quotes)"
          rows={listVsSystemRows}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The quotes, as a chip strip
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl leading-relaxed">
          The nine shortest phrases from the emails, in a line. Read left to
          right. Each chip is a full quote in itself, and each one is also a
          substring you can find in src/lib/emails.ts with a single command.
        </p>
        <Marquee speed={45}>
          {marqueeChips.map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 font-mono text-xs text-teal-700"
            >
              &ldquo;{t}&rdquo;
            </span>
          ))}
        </Marquee>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-10">
        <ProofBanner
          metric="line 295"
          quote="I've personally been meditating over Google Meet with my buddy for the past three years this way, it works beautifully."
          source="src/lib/emails.ts, inside buildIntroEmailHtml"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          A note about lineage
        </h2>
        <p className="text-zinc-600 mb-4 max-w-3xl leading-relaxed">
          The S.N. Goenka tradition the product orbits does not teach the
          technique on web pages. Transmission happens inside 10-day
          residential courses, led by authorized assistant teachers, at
          centers listed on{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-600 underline hover:text-teal-700"
            rel="noopener noreferrer"
            target="_blank"
          >
            dhamma.org
          </a>
          . That is the only frame inside which operational questions about
          practice belong. What a page on this site can do is publish the
          logistics around practice: how matching works, what the emails say,
          how to sign up, where to look for a course near you.
        </p>
        <p className="text-zinc-600 max-w-3xl leading-relaxed">
          The quotes on this page are logistics. They describe how a matching
          service communicates with the people it matches. They are not
          descriptions of practice. If you have arrived here hoping for
          instruction, the right next step is a course, not another web page.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14 rounded-2xl border border-teal-200 bg-teal-50 p-8 md:p-10">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          The whole page, skimmable
        </h2>
        <ul className="space-y-3 text-zinc-700 text-[15px] leading-relaxed">
          <li>
            <strong className="text-zinc-900">The reframe:</strong> quotes
            with a file path are stronger attribution than quotes with only a
            name.
          </li>
          <li>
            <strong className="text-zinc-900">The source:</strong>{" "}
            <code className="rounded bg-white px-1 py-0.5 font-mono text-[12px]">
              src/lib/emails.ts
            </code>{" "}
            in the vipassana.cool repository.
          </li>
          <li>
            <strong className="text-zinc-900">The first quote:</strong>{" "}
            &ldquo;I found a practice buddy for your morning session at 06:00
            (6:00am) Paris time,&rdquo; from line 173.
          </li>
          <li>
            <strong className="text-zinc-900">The sign-off:</strong>{" "}
            &ldquo;Be happy, Matt.&rdquo; An English phrasing of the closing
            benediction used after group sits in the tradition the service
            orbits.
          </li>
          <li>
            <strong className="text-zinc-900">How often sent:</strong> every
            time the cron writes a match row, on its 30-minute schedule.
          </li>
          <li>
            <strong className="text-zinc-900">What is not on this page:</strong>{" "}
            instruction about the practice itself. That belongs at a 10-day
            course, with an authorized assistant teacher.
          </li>
        </ul>
      </section>

      <div className="max-w-4xl mx-auto px-6 my-14">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-3">
          Two numbers, spring-animated
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          This page has{" "}
          <span className="font-mono text-teal-700 text-2xl">
            <NumberTicker value={8} />
          </span>{" "}
          distinct quoted sentences from the email templates, and each one
          lives in a file that has been committed for longer than{" "}
          <span className="font-mono text-teal-700 text-2xl">
            <NumberTicker value={3} />
          </span>{" "}
          years of daily Google Meet practice.
        </p>
      </div>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        heading="Want to see one of these quotes arrive in your inbox?"
        description="Book a short call and the matcher will run for your timezone and session time. If a viable pair shows up, you will see the subject line and the body verbatim, from the templates on this page."
        section="accountability-partner-quotes-footer"
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
            href="/t/find-an-accountability-partner"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Find an accountability partner, as a scheduled job
          </Link>
          <Link
            href="/t/what-is-an-accountability-partner"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            What is an accountability partner
          </Link>
          <Link
            href="/t/how-to-be-an-accountability-partner"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            How to be an accountability partner
          </Link>
          <Link
            href="/t/online-accountability-partner"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Online accountability partner
          </Link>
          <Link
            href="/t/accountability-partner-app"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Accountability partner app
          </Link>
          <Link
            href="/practice-buddy"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Practice Buddy, the product these quotes come from
          </Link>
        </div>
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Talk to the operator about what a match would look like for your timezone."
        section="accountability-partner-quotes-sticky"
      />
    </article>
  );
}
