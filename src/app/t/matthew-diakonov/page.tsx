import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageComments } from "@/components/comments";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { ArticleSchema } from "@/components/article-schema";
import { ArticleHeader } from "@/components/article-header";
import { FaqSchema } from "@/components/faq-schema";
import { PracticeBuddyCta } from "@/components/practice-buddy-cta";
import { DayCounter } from "@/components/day-counter";
import {
  NumberTicker,
  MotionSequence,
  TerminalBlock,
  CodeSnippet,
  JourneyTimeline,
  HandMatchBand,
  ShimmerCta,
  HeroBackdrop,
  GradientWord,
} from "./matthew-client";

const PAGE_URL = "https://vipassana.cool/t/matthew-diakonov";
const PUBLISHED = "2026-04-17";

export const metadata: Metadata = {
  title: "Matthew Diakonov: The Vipassana Practitioner Who Hand-Matches Meditators From the Terminal",
  description:
    "Who is Matthew Diakonov? Engineer, six-time Goenka Vipassana student, 950+ days of unbroken daily practice, and the person personally running the Practice Buddy matching on vipassana.cool from a CLI called matching.mjs.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Matthew Diakonov: The Practitioner Behind vipassana.cool",
    description:
      "Six 10-day Goenka courses. 950+ days of daily practice. A hand-operated matching CLI. Here is the specific story behind vipassana.cool.",
    url: PAGE_URL,
    type: "article",
    images: [{ url: "https://vipassana.cool/matthew.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matthew Diakonov: The Practitioner Behind vipassana.cool",
    description:
      "Engineer. Six Vipassana courses. 950+ days of daily practice. One hand-operated matching CLI for Practice Buddy.",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question: "Who is Matthew Diakonov?",
    answer:
      "Matthew Diakonov is a software engineer and startup founder based in the San Francisco Bay Area who has completed six 10-day Goenka Vipassana courses across three California centers (Dhammamanda in Northern California, the CYO Bay Area Christmas course, and North Fork in Central California). He has maintained over 950 days of continuous daily meditation practice and publishes vipassana.cool as an unofficial companion to dhamma.org.",
  },
  {
    question: "How many Vipassana courses has Matthew Diakonov completed?",
    answer:
      "Six 10-day courses, for a total of 60 days on the cushion at a formal center. Four of those six were completed in his first year of practice, while working full time in tech. He now returns to a center roughly twice a year.",
  },
  {
    question: "What is vipassana.cool and how is it related to dhamma.org?",
    answer:
      "Vipassana.cool is Matthew Diakonov's unofficial companion site to dhamma.org. It covers what the official site does not: day-by-day personal experience, honest FAQ answers, a preparation and packing guide, a scientific evidence roundup, and a free Practice Buddy matching program. The site is explicit that it is not affiliated with the Vipassana Research Institute.",
  },
  {
    question: "What is Practice Buddy and does a human actually do the matching?",
    answer:
      "Practice Buddy pairs two old Vipassana students for daily accountability sitting over Google Meet. A human does the matching. Matthew personally reviews every signup (timezone, sit time, duration, old-student status, years of practice) and runs a CLI tool he wrote, scripts/matching.mjs, to send each pair. The program is free and runs on donation.",
  },
  {
    question: "How does matching.mjs actually work?",
    answer:
      "matching.mjs is a single Node.js file with five commands: stats (status snapshot), find (viable pairs), send <idA> <idB> (one pair), send-batch (a hand-edited array of pairs), and verify (DB and email status check). Matthew edits the BATCH array at the top of the file with named pairs like 'Nahïl + Greta' and then runs send-batch from the terminal. There is no automated matching engine.",
  },
  {
    question: "How long has Matthew Diakonov been practicing daily?",
    answer:
      "Over 950 days of unbroken daily practice as of April 2026. He typically sits 45 to 60 minutes in the morning and four to five evenings per week, following the standard Goenka two-hour-a-day recommendation for old students.",
  },
  {
    question: "Why does Matthew write about Vipassana?",
    answer:
      "He built vipassana.cool as the resource he wished existed before his first course. Before Vipassana, he had not taken a single vacation in eight years and worked seven days a week. After six courses and 950+ days of practice, the site is his way of compiling the honest, practical, non-official information most first-time students are looking for but cannot find on dhamma.org.",
  },
  {
    question: "Where can I find Matthew Diakonov's personal work outside Vipassana?",
    answer:
      "His engineering work is at m13v.com and on GitHub at github.com/m13v. He has shipped 20+ products, won three hackathons, and had a startup exit. The Vipassana work at vipassana.cool is a separate public-good project, not a commercial product.",
  },
];

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://vipassana.cool" },
          { name: "Guides", url: "https://vipassana.cool/t" },
          { name: "Matthew Diakonov", url: PAGE_URL },
        ]}
      />
      <ArticleSchema
        title="Matthew Diakonov: The Vipassana Practitioner Who Hand-Matches Meditators From the Terminal"
        description="Engineer, six-time Goenka Vipassana student, 950+ days of daily practice, and the person personally running Practice Buddy matching on vipassana.cool from a CLI."
        url={PAGE_URL}
        datePublished={PUBLISHED}
      />
      <FaqSchema faqs={faqs} />

      <ArticleHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/t" },
          { label: "Matthew Diakonov" },
        ]}
        category="Who Made This Site"
        title="Matthew Diakonov, the Practitioner Behind vipassana.cool"
        description="A tech founder who went from zero vacations in eight years to six 10-day Vipassana courses and 950+ days of unbroken daily practice. The matching that pairs strangers into daily sitting partners on this site is not an algorithm. It is one person running a CLI tool he wrote, by hand."
        datePublished={PUBLISHED}
      />

      <div className="mb-10">
        <HeroBackdrop>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
            <Image
              src="/matthew.jpg"
              alt="Matthew Diakonov"
              width={112}
              height={112}
              className="rounded-full border-2 border-accent/30 object-cover"
            />
            <div className="flex-1">
              <p className="mb-1 text-sm font-medium uppercase tracking-widest text-accent">
                Matthew Diakonov
              </p>
              <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
                Engineer. <GradientWord>Six courses.</GradientWord>{" "}
                <GradientWord>
                  <DayCounter />
                </GradientWord>{" "}
                days of daily practice.
              </h2>
              <p className="text-muted">
                Not a teacher. Not a VRI spokesperson. A practitioner who builds the site,
                sits every morning, and hand-matches every Practice Buddy pair himself.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <ShimmerCta href="/practice-buddy">Get matched for daily practice</ShimmerCta>
                <Link
                  href="/experience"
                  className="inline-flex items-center rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  Read the full journey
                </Link>
              </div>
            </div>
          </div>
        </HeroBackdrop>
      </div>

      <div className="mb-10 rounded-lg border border-accent/20 bg-accent/5 p-5">
        <p className="mb-1 text-sm font-medium text-accent">TL;DR</p>
        <p className="text-sm text-muted">
          Matthew Diakonov is the engineer and practitioner behind vipassana.cool. He has
          completed six Goenka 10-day courses at three California centers, sat 60 total days
          of residential retreat, and maintained more than 950 days of daily practice. The
          non-obvious part: the Practice Buddy matching program on his site is not automated.
          He reviews every signup, edits a BATCH array in a file called{" "}
          <code className="rounded bg-card px-1 py-0.5 text-xs text-foreground">
            scripts/matching.mjs
          </code>
          , and runs the pairs by hand from his terminal.
        </p>
      </div>

      <section className="mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
        <div className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          The practitioner, in numbers
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={6} />
            </div>
            <p className="mt-1 text-xs text-muted">Goenka 10-day courses</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={60} />
              <span className="text-xl text-muted">d</span>
            </div>
            <p className="mt-1 text-xs text-muted">at a center on the cushion</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={950} suffix="+" />
            </div>
            <p className="mt-1 text-xs text-muted">days of daily practice</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={8} />
              <span className="text-xl text-muted">y</span>
            </div>
            <p className="mt-1 text-xs text-muted">of zero vacations before starting</p>
          </div>
        </div>
        <p className="mt-5 border-t border-border pt-4 text-sm italic text-muted">
          &ldquo;Vipassana is the single most important event in my life. It completely
          changed everything, making me from an extremely agitated, ego-centered person into
          someone much better and much more happy.&rdquo;
        </p>
      </section>

      <div className="mb-14">
        <MotionSequence
          frames={[
            {
              title: "Frame 1. Tech founder with no inside world",
              body: "20+ products shipped, three hackathons won, a startup exit, and not a single day of vacation in eight years. The outside game was optimized. The inside had no tools at all.",
            },
            {
              title: "Frame 2. Someone recommends a 10-day course",
              body: "He almost did not go. Ten days of silence sounded like either a cult or a waste of time. Apps had failed. Weekend workshops had failed. He signed up anyway.",
            },
            {
              title: "Frame 3. Four courses in the first twelve months",
              body: "The first course landed. He restructured his year around the technique: four 10-day courses in twelve months, all while working full time in tech. Total by course six: 60 days on the cushion.",
            },
            {
              title: "Frame 4. The site and the hand-run matching",
              body: "950+ days of daily practice later, vipassana.cool is the resource he wished existed in 2022, and the Practice Buddy matching that pairs daily sitters is a Node script he runs himself.",
            },
          ]}
        />
      </div>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">Who is Matthew Diakonov</h2>
        <p className="mb-4 text-muted">
          Matthew Diakonov is a software engineer and startup founder based in the San
          Francisco Bay Area. He has shipped more than 20 products, won three hackathons,
          and had a startup exit. Publicly he writes code at m13v.com and ships on{" "}
          <a
            href="https://github.com/m13v"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline hover:text-foreground"
          >
            github.com/m13v
          </a>
          . None of that is why this page exists.
        </p>
        <p className="mb-4 text-muted">
          This page exists because of what he does outside of work: six 10-day Goenka
          Vipassana courses across three California centers, a <DayCounter /> day unbroken
          daily practice streak, and a hand-operated matching service that pairs other
          practitioners into daily sitting partners. The engineering surface of
          vipassana.cool is a side effect of the practice, not the other way around.
        </p>
        <p className="text-muted">
          He is explicit in his own disclaimer that he is not a teacher, not a VRI
          spokesperson, and not affiliated with dhamma.org. Every word on the site is one
          practitioner writing down what he wishes he had known before his first course.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">The anchor fact: the matching is done by hand</h2>
        <p className="mb-4 text-muted">
          The single most copied thing on Vipassana resource sites is a signup form that
          claims to match you with a partner. On vipassana.cool the form is the same. What
          happens after you submit it is not.
        </p>
        <p className="mb-6 text-muted">
          After submission, Matthew opens a file in his repo,{" "}
          <code className="rounded bg-card px-1.5 py-0.5 text-sm text-foreground">
            scripts/matching.mjs
          </code>
          , reads the pending students, writes compatible pairs into the BATCH array at the
          top of that file by name, and then runs the CLI. Five commands: stats, find, send,
          send-batch, verify. Here is what that looks like when he runs it.
        </p>

        <div className="mb-5">
          <TerminalBlock
            title="matthew@mac ~/vipassana-cool"
            lines={[
              { kind: "cmd", text: "node scripts/matching.mjs stats" },
              { kind: "dim", text: "reading .env.local" },
              { kind: "out", text: "pending signups:            18" },
              { kind: "out", text: "old students in pool:       14" },
              { kind: "out", text: "compatible timezones:        9 candidate pairs" },
              { kind: "cmd", text: "node scripts/matching.mjs find" },
              { kind: "out", text: "Nahïl (UTC+1, 06:00, 45m)  -> Greta (UTC+2, 06:30, 45m)" },
              { kind: "out", text: "Artur (UTC+0, 06:30, 60m)  -> Kimberly (UTC+1, 07:00, 60m)" },
              { kind: "out", text: "Vanditt (UTC+5:30, 06:00)  -> Chandan (UTC+5:30, 06:00)" },
              { kind: "cmd", text: "node scripts/matching.mjs send-batch" },
              { kind: "ok", text: "  ✓ Nahïl + Greta    — confirmed (match: b4e1…)" },
              { kind: "ok", text: "  ✓ Artur + Kimberly — confirmed (match: 7a22…)" },
              { kind: "ok", text: "  ✓ Vanditt + Chandan — confirmed (match: c9f8…)" },
              { kind: "ok", text: "  ✓ Akash + Jess     — confirmed (match: 1d55…)" },
              { kind: "ok", text: "  ✓ Thiago + Andrés  — confirmed (match: 3fae…)" },
              { kind: "dim", text: "5 pairs sent, 0 errors" },
            ]}
          />
        </div>

        <p className="mb-4 text-muted">
          The pairs above are real. They are in the BATCH array of{" "}
          <code className="rounded bg-card px-1.5 py-0.5 text-sm text-foreground">
            scripts/matching.mjs
          </code>{" "}
          as written, with notes next to each UUID so a human can read them. The whole
          matching pipeline fits in one file because it is one person.
        </p>

        <CodeSnippet
          filename="scripts/matching.mjs (excerpt)"
          code={`// ——— BATCH PAIRS (edit for send-batch) ———
const BATCH = [
  { a: "66737e…", b: "0285ce…", note: "Nahïl + Greta" },
  { a: "072143…", b: "07ec73…", note: "Artur + Kimberly" },
  { a: "094c9c…", b: "8cc632…", note: "Vanditt + Chandan" },
  { a: "581235…", b: "9c253d…", note: "Akash + Jess" },
  { a: "e53e97…", b: "677ae9…", note: "Thiago + Andrés" },
];

// Usage:
//   node scripts/matching.mjs stats       — status snapshot
//   node scripts/matching.mjs find        — find viable pairs
//   node scripts/matching.mjs send A B    — send one pair
//   node scripts/matching.mjs send-batch  — send all pairs in BATCH
//   node scripts/matching.mjs verify      — verify recent matches`}
        />

        <div className="mt-6">
          <HandMatchBand />
          <p className="mt-2 text-center text-xs text-muted">
            Sample of named pairs from a recent run. Each notes field is hand-written.
          </p>
        </div>

        <div className="mt-6 rounded-lg border border-accent/20 bg-accent/5 p-5">
          <p className="mb-2 text-sm font-semibold text-accent">Why this matters</p>
          <p className="text-sm text-muted">
            The folder{" "}
            <code className="rounded bg-card px-1 py-0.5 text-xs text-foreground">
              scripts/
            </code>{" "}
            in the vipassana.cool repo contains 93 scripts, 76 of them .mjs. None of them
            is an auto-matching cron job. The closest thing to an automation layer is the
            BATCH array, and editing it is a human reading names.
          </p>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">The journey, step by step</h2>
        <p className="mb-6 text-muted">
          The trajectory from no-vacation engineer to 950+ days of daily practice did not
          happen gradually. Here are the actual inflection points, in order.
        </p>
        <JourneyTimeline
          steps={[
            {
              t: "2014 to 2022",
              h: "Zero vacations, seven days a week",
              b: "Eight years with no time off. Building products, winning hackathons, shipping a startup exit. No inside-facing tools.",
            },
            {
              t: "2022, first course",
              h: "10 days, one of the hardest of his life",
              b: "Signed up on a recommendation. Almost left on day 3. Walked out on day 10 having felt something that apps and books had never touched.",
            },
            {
              t: "First 12 months",
              h: "Four courses in one year",
              b: "Reorganized the year around returning. Dhammamanda in NorCal, the CYO Christmas course (nearly 300 meditators), North Fork in Central CA.",
            },
            {
              t: "Years 1 to 3",
              h: "Daily practice becomes the anchor",
              b: "Two hours a day becomes non-negotiable. Morning 45 to 60 minutes. Four to five evenings per week.",
            },
            {
              t: "2026",
              h: "vipassana.cool and Practice Buddy",
              b: "Publishes the unofficial companion site and the free Practice Buddy matching he now runs by hand. Six courses done, 950+ days and counting.",
            },
          ]}
        />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Algorithm match vs Matthew&apos;s hand match
        </h2>
        <p className="mb-5 text-muted">
          A shorthand for why vipassana.cool&apos;s matching feels different from other
          accountability services. Same signup form on the surface, very different mechanic
          on the back end.
        </p>
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-accent/5">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-foreground">
                  Dimension
                </th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">
                  Typical algorithm
                </th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">
                  matching.mjs, by Matthew
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card">
              <tr>
                <td className="px-4 py-3 align-top font-medium text-foreground">
                  Who does the matching
                </td>
                <td className="px-4 py-3 align-top text-muted">A cron job or an LLM.</td>
                <td className="px-4 py-3 align-top text-muted">
                  One practitioner reading every row.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 align-top font-medium text-foreground">
                  How pairs are encoded
                </td>
                <td className="px-4 py-3 align-top text-muted">
                  Hidden vector similarity score.
                </td>
                <td className="px-4 py-3 align-top text-muted">
                  Named lines in a BATCH array: &ldquo;Nahïl + Greta&rdquo;.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 align-top font-medium text-foreground">
                  Priority signal
                </td>
                <td className="px-4 py-3 align-top text-muted">
                  Whoever signed up first, or random.
                </td>
                <td className="px-4 py-3 align-top text-muted">
                  Old students prioritized, timezone compatibility, sit duration alignment.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 align-top font-medium text-foreground">
                  Send trigger
                </td>
                <td className="px-4 py-3 align-top text-muted">
                  Automatic email blast on a schedule.
                </td>
                <td className="px-4 py-3 align-top text-muted">
                  <code className="rounded bg-card px-1 text-xs">
                    node scripts/matching.mjs send-batch
                  </code>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 align-top font-medium text-foreground">
                  Failure mode
                </td>
                <td className="px-4 py-3 align-top text-muted">
                  Silent mismatch, nobody notices.
                </td>
                <td className="px-4 py-3 align-top text-muted">
                  Matthew sees the ✗ in his terminal and fixes it the same evening.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 align-top font-medium text-foreground">
                  Cost to the practitioner
                </td>
                <td className="px-4 py-3 align-top text-muted">
                  Usually a monthly subscription.
                </td>
                <td className="px-4 py-3 align-top text-muted">
                  Zero. Dana, same as the tradition.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Where Matthew has sat courses
        </h2>
        <p className="mb-5 text-muted">
          All six courses are in California. Each center has a different character, which
          is why most of his practical tips on the site cross-reference the three.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-accent">
              Northern California
            </p>
            <h3 className="mb-2 font-semibold text-foreground">Dhamma Manda</h3>
            <p className="text-sm text-muted">
              Private rooms, tall trees. The quieter end of the three. Closer to resort
              conditions than any center has a right to be.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-accent">
              Bay Area
            </p>
            <h3 className="mb-2 font-semibold text-foreground">CYO Christmas course</h3>
            <p className="text-sm text-muted">
              Bunk beds, 12 to a room, rain and snow. Nearly 300 meditators, the biggest
              course in the Western hemisphere. The hardest of the three.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-accent">
              Central California
            </p>
            <h3 className="mb-2 font-semibold text-foreground">North Fork</h3>
            <p className="text-sm text-muted">
              One of the oldest centers in North America. Pagoda and private meditation
              cells. The technical center: where his deepest sittings have happened.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-14 rounded-2xl border border-accent/20 bg-accent/5 p-6 md:p-8">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          What Matthew actually says about the practice
        </h2>
        <p className="mb-4 text-muted">
          From the experience page, not paraphrased:
        </p>
        <ul className="space-y-3 text-muted">
          <li className="border-l-2 border-accent/40 pl-4">
            &ldquo;Just go. Stop reading about it, stop analyzing whether it&apos;s right
            for you, and just sign up. The intellectual understanding of Vipassana is
            worth nothing compared to the experiential understanding.&rdquo;
          </li>
          <li className="border-l-2 border-accent/40 pl-4">
            &ldquo;The real practice happens off the cushion. You have to actually pay
            attention to how you behave in normal life and actively apply your meditation
            skills.&rdquo;
          </li>
          <li className="border-l-2 border-accent/40 pl-4">
            &ldquo;Every time it&apos;s a massive mind reset. The depth of meditation at a
            centre is night and day compared to home practice. You just can&apos;t reach
            that same level on your own.&rdquo;
          </li>
          <li className="border-l-2 border-accent/40 pl-4">
            &ldquo;I&apos;m not a teacher. This is just my personal story and analogy to
            help you find the practice. You need to come to the course.&rdquo;
          </li>
        </ul>
      </section>

      <section className="mb-14">
        <h2 className="mb-4 text-2xl font-bold text-foreground">
          Frequently asked questions
        </h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group rounded-lg border border-border bg-card p-5 open:border-accent/30 open:bg-accent/5"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-base font-semibold text-foreground">
                <span>{f.question}</span>
                <span className="mt-1 shrink-0 text-accent transition-transform group-open:rotate-45">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path
                      d="M7 1v12M1 7h12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted">{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <PracticeBuddyCta
        heading="Want Matthew to match you with a sitting partner?"
        description="Free. Human-matched. Google Meet sessions every morning with an old student in a compatible timezone. The same CLI you read about on this page is how your pair gets sent."
      />

      <div className="mt-12 rounded-xl border border-border bg-card p-6">
        <h2 className="mb-4 font-semibold text-foreground">Related reading on vipassana.cool</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/experience"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            The full six-course journey
          </Link>
          <Link
            href="/practice-buddy"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Practice Buddy signup
          </Link>
          <Link
            href="/practice-buddy/how-it-works"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            How the matching works
          </Link>
          <Link
            href="/t/is-vipassana-a-cult"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Is Vipassana a cult?
          </Link>
          <Link
            href="/t/after-vipassana-daily-practice-rewire-habits"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            After the course
          </Link>
          <Link
            href="/guide/first-course-tips"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            First course tips
          </Link>
        </div>
      </div>

      <PageComments pageId="t-matthew-diakonov" />
    </article>
  );
}
