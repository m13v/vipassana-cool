import type { Metadata } from "next";
import Link from "next/link";
import { PageComments } from "@/components/comments";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { ArticleSchema } from "@/components/article-schema";
import { ArticleHeader } from "@/components/article-header";
import { FaqSchema } from "@/components/faq-schema";
import { PracticeBuddyCta } from "@/components/practice-buddy-cta";

const PAGE_URL = "https://vipassana.cool/t/daily-handwriting-practice-pdf-free";
const PRINT_URL = "/daily-sit-log/print";
const PUBLISHED = "2026-04-18";

export const metadata: Metadata = {
  title: "Daily Handwriting Practice PDF (Free): A Hand-Filled Sit Log for Meditators",
  description:
    "A free, one-page, handwritten-by-design daily practice PDF for Vipassana old students. 366 blank squares, no streaks, no notifications. Print once, keep a pen with it, and mark the square after every sit.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Daily Handwriting Practice PDF (Free): A Hand-Filled Sit Log for Meditators",
    description:
      "One page. One pen. One year. A free printable daily sit log built for Vipassana daily practice, not for habit app dashboards.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Handwriting Practice PDF (Free)",
    description:
      "A free, handwritten-by-design daily sit log for meditators. 366 blank squares on one page. No app. No streak.",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question:
      "Is this actually a free PDF?",
    answer:
      "Yes. The printable page lives at /daily-sit-log/print. Open it, press Cmd+P on Mac or Ctrl+P on Windows and Linux, and choose Save as PDF in the destination dropdown. There is no email wall, no sign-up, no watermark, and no tracking. The sheet is in the public domain; you can share it, modify it, or fold it into a larger zine.",
  },
  {
    question: "Why handwriting? Why not a habit-tracking app?",
    answer:
      "Apps optimize for metrics: current streak, longest streak, completion rate, weekly percentage. That framing is helpful for gym sessions; it works against Vipassana daily practice, which the tradition explicitly teaches is not about achievement. Paper has no streak count. Paper does not punish a missed day with a buzzing notification. A single pen stroke in a square, done after the sit, is slow enough to be noticed and small enough to stay egoless. The practice is what matters; the log only exists so you know you sat.",
  },
  {
    question: "How many squares does the sheet have, exactly?",
    answer:
      "The grid is 12 rows (one per month) by 31 columns (one per day of month). That is 372 cells. 6 cells are greyed out for dates that never exist (Feb 30, Feb 31, April 31, June 31, September 31, November 31), leaving exactly 366 fillable daily squares. The 366 accommodates a leap year without needing a different PDF for 2024, 2028, and so on. Each square is bisected by a diagonal line: upper-left half is AM, lower-right half is PM.",
  },
  {
    question: "What paper size is it designed for?",
    answer:
      "Letter portrait, 8.5 by 11 inches, with 0.5 inch margins. It also prints cleanly on A4 portrait because the internal grid uses percentage widths, not fixed millimeter units. Black ink only, no color fills, no shading. That keeps it cheap to print at a library, a coworking space, or a hotel front desk if you are traveling.",
  },
  {
    question: "Does this teach the technique?",
    answer:
      "No. In the Goenka tradition, the technique is transmitted during a 10-day residential course by an authorized teacher, and this page does not replace that. The PDF is a logistical tool for old students who already know how to sit and want a paper accountability record. If you have not yet taken a course, see the beginner guide and the retreat finder first.",
  },
  {
    question: "What if I miss a week or a month?",
    answer:
      "Leave the squares blank and start marking again when you resume. Do not fill in missed days after the fact. The value of the sheet is in the honesty of the record, not in the density of ink. Most long-term practitioners have sparse months on their sheets. If a gap was long enough that the practice felt lost, sit a course again; a 10-day reset is the traditional way to re-anchor.",
  },
  {
    question: "Can I use this for other meditation traditions?",
    answer:
      "The grid is neutral. The framing on this page is specific to Goenka Vipassana old students because that is who the site serves, but a square is a square. If you practice in another tradition, the sheet will still work. The only tradition-dependent choice is the AM/PM split, which mirrors the two-sittings-per-day recommendation given at the end of a Goenka course.",
  },
  {
    question: "How does this relate to a Practice Buddy?",
    answer:
      "A paper log is the solo version of accountability. A Practice Buddy is the partnered version. They complement each other: the pen in the morning, the other person silent in the Meet room. Old students who do both report that the paper makes individual sits feel earned, while the partner makes the schedule feel structural. One is not a substitute for the other. If you want to try the partnered side, see /practice-buddy.",
  },
];

function MiniGridPreview() {
  const weeks = 12;
  const days = 7;
  const filled = new Set<string>([
    "0-0", "0-1", "0-2", "0-3", "0-4", "0-6",
    "1-0", "1-1", "1-2", "1-4", "1-5", "1-6",
    "2-0", "2-1", "2-2", "2-3", "2-4", "2-5", "2-6",
    "3-1", "3-2", "3-3", "3-4",
    "4-0", "4-1", "4-2", "4-3", "4-4", "4-5", "4-6",
    "5-0", "5-1", "5-3", "5-4", "5-5", "5-6",
    "6-0", "6-1", "6-2", "6-3", "6-4", "6-5",
    "7-0", "7-2", "7-3", "7-4", "7-5", "7-6",
    "8-0", "8-1", "8-2", "8-3", "8-4", "8-5", "8-6",
    "9-1", "9-2", "9-3", "9-5", "9-6",
    "10-0", "10-1", "10-2", "10-3", "10-4",
    "11-0", "11-2", "11-3", "11-4", "11-5", "11-6",
  ]);
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Preview</p>
        <p className="text-xs text-muted">12 weeks shown, 366 on the real sheet</p>
      </div>
      <div
        className="grid gap-[3px]"
        style={{ gridTemplateColumns: `repeat(${weeks}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: weeks }).map((_, w) =>
          Array.from({ length: days }).map((_, d) => {
            const isFilled = filled.has(`${w}-${d}`);
            return (
              <div
                key={`${w}-${d}`}
                className="aspect-square rounded-[2px] border border-foreground/30"
                style={{
                  backgroundImage: isFilled
                    ? "linear-gradient(to bottom right, var(--foreground) 0%, var(--foreground) 48%, transparent 48%, transparent 52%, transparent 52%, transparent 100%)"
                    : undefined,
                }}
              />
            );
          })
        )}
      </div>
      <p className="mt-4 text-xs text-muted">
        Filled upper-left triangle = morning sit completed. Filled lower-right triangle = evening sit completed. Both = full day. Empty = missed.
      </p>
    </div>
  );
}

function AppVsPaper() {
  const rows = [
    { dim: "Streak counter", app: "Visible, growing, gamified", paper: "None" },
    { dim: "Missed-day behavior", app: "Red X, streak reset, notification", paper: "Blank square, silence" },
    { dim: "Data exported to", app: "HealthKit, Google Fit, cloud", paper: "Your drawer" },
    { dim: "Cost if phone dies", app: "Lost history", paper: "Still on the wall" },
    { dim: "Pressure source", app: "App + social comparison", paper: "Only yourself" },
    { dim: "Works on silent retreat", app: "No, phone is surrendered on Day 0", paper: "Yes, fold it into your bag" },
  ];
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead className="bg-card">
          <tr className="text-left">
            <th className="p-3 font-medium text-muted">Dimension</th>
            <th className="p-3 font-medium text-muted">Habit app</th>
            <th className="p-3 font-medium text-foreground">Paper sheet</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((r) => (
            <tr key={r.dim}>
              <td className="p-3 font-medium text-foreground">{r.dim}</td>
              <td className="p-3 text-muted">{r.app}</td>
              <td className="p-3 text-foreground">{r.paper}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MorningFlow() {
  const steps = [
    { n: "1", t: "Wake", d: "Alarm, feet on floor, no phone." },
    { n: "2", t: "Sit", d: "Same cushion, same clock, same length floor." },
    { n: "3", t: "Mark", d: "Pick up the pen, stroke the AM half of today's square." },
    { n: "4", t: "Close", d: "Put the pen back on top of the sheet so it is the first thing you see tomorrow." },
  ];
  return (
    <ol className="grid gap-4 sm:grid-cols-4">
      {steps.map((s) => (
        <li key={s.n} className="rounded-xl border border-border bg-card p-5">
          <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-sm font-semibold text-accent">
            {s.n}
          </div>
          <p className="mb-1 font-semibold text-foreground">{s.t}</p>
          <p className="text-sm text-muted">{s.d}</p>
        </li>
      ))}
    </ol>
  );
}

function AnchorCallout() {
  return (
    <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">What you are getting, exactly</p>
      <ul className="space-y-2 text-sm text-foreground">
        <li><span className="font-semibold">1 page.</span> Letter portrait; prints cleanly on A4 too.</li>
        <li><span className="font-semibold">366 fillable squares.</span> 12 rows &times; 31 cols = 372 cells; 6 non-existent dates greyed out.</li>
        <li><span className="font-semibold">AM / PM split.</span> Diagonal line bisects every square.</li>
        <li><span className="font-semibold">Black ink only.</span> No fills, no color, no logos to waste toner.</li>
        <li><span className="font-semibold">No streak number.</span> Deliberately. The point of the sheet is that it does not count anything for you.</li>
        <li><span className="font-semibold">Public domain.</span> Download, print, photocopy, hand to a friend.</li>
      </ul>
    </div>
  );
}

function Testimonial() {
  return (
    <blockquote className="rounded-xl border border-border bg-card p-6">
      <p className="text-foreground italic leading-relaxed">
        &ldquo;The practice is to be done from morning to night, not only during the one hour of sitting. Awareness of sensation and equanimity toward it, this should continue throughout the day.&rdquo;
      </p>
      <footer className="mt-4 text-xs uppercase tracking-widest text-muted">S.N. Goenka, Day 10 discourse</footer>
    </blockquote>
  );
}

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://vipassana.cool" },
          { name: "Guides", url: "https://vipassana.cool/t" },
          { name: "Daily Handwriting Practice PDF Free", url: PAGE_URL },
        ]}
      />
      <ArticleSchema
        title="Daily Handwriting Practice PDF (Free): A Hand-Filled Sit Log for Meditators"
        description="A free, one-page, handwritten-by-design daily practice PDF for Vipassana old students. 366 blank squares, no streaks, no notifications."
        url={PAGE_URL}
        datePublished={PUBLISHED}
      />
      <FaqSchema faqs={faqs} />
      <ArticleHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/t" },
          { label: "Daily Handwriting Practice PDF Free" },
        ]}
        category="Daily Practice Tools"
        title="A Free Daily Handwriting Practice PDF, for People Who Sit"
        description="Most handwriting practice PDFs are for kids learning cursive. This one is for adults with a daily meditation practice. 366 squares, one pen, one year, no streak."
        datePublished={PUBLISHED}
      />

      <div className="mb-8 rounded-lg border border-accent/20 bg-accent/5 p-4">
        <p className="text-sm font-medium text-accent mb-1">TL;DR</p>
        <p className="text-sm text-muted">
          Most search results for &ldquo;daily handwriting practice PDF free&rdquo; are cursive worksheets for schoolchildren. This page is a different use of the same request: a free, printable, single-page daily sit log for Vipassana old students, designed so the act of picking up a pen is the whole interaction. No app, no dashboard, no notification. Open <Link href={PRINT_URL} className="text-accent underline hover:text-foreground">/daily-sit-log/print</Link>, press Cmd+P, save as PDF, and the year fits on one sheet.
        </p>
      </div>

      <div className="mb-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <Link
          href={PRINT_URL}
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Open the printable page
          <span aria-hidden>&rarr;</span>
        </Link>
        <p className="text-xs text-muted">Then press Cmd+P (Mac) or Ctrl+P (Windows/Linux) to save as PDF.</p>
      </div>

      <div className="space-y-14 text-muted leading-relaxed">
        <section>
          <h2 className="mb-4 text-2xl font-bold text-foreground">The sheet, one glance</h2>
          <MiniGridPreview />
          <p className="mt-4">
            This is a compressed preview. The real sheet has a full calendar grid: 12 rows of months, 31 columns of days, 366 fillable squares in total. Cells for dates that do not exist are greyed out so February ends clean, April ends clean, and the eye is not pulled into phantom days.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-foreground">Why a pen and paper, and not another app</h2>
          <p className="mb-4">
            If you came to this page searching for &ldquo;daily handwriting practice PDF free,&rdquo; you were probably not looking for a meditation accountability sheet. You were probably looking for letter-tracing worksheets. That is a legitimate search and the big sites serve it well. This page exists because a different population also types those words: adults with a daily Vipassana practice, looking for something on paper because their phone has become the opposite of focus.
          </p>
          <p className="mb-4">
            The design constraint was simple: build the smallest possible artifact that answers the question &ldquo;did I sit today,&rdquo; and nothing else. No streak. No graph. No &ldquo;you are 87% of the way to your monthly goal.&rdquo; A habit app answers that question by rewarding you; paper answers it by just being there, with an empty square, waiting.
          </p>
          <AppVsPaper />
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-foreground">What the sheet is, specifically</h2>
          <AnchorCallout />
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-foreground">The four-step morning</h2>
          <p className="mb-6">
            The whole point of the sheet is to be boring and unambiguous. Once it is printed and pinned somewhere you already walk past, the daily interaction shrinks to this:
          </p>
          <MorningFlow />
          <p className="mt-6">
            That is the entire workflow. If it feels too small to take seriously, good. Small is the point. The work is the sit. The sheet is only a receipt.
          </p>
        </section>

        <section>
          <Testimonial />
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-foreground">What the tradition actually asks for</h2>
          <p className="mb-4">
            At the end of a 10-day course, old students are asked to maintain daily practice, traditionally two hours split across morning and evening. The recommendation is pastoral, not arithmetic. Assistant teachers do not issue report cards. Nobody is measuring your compliance.
          </p>
          <p className="mb-4">
            That framing matters because it changes what a tracking tool should do. A tool that counts streaks implies there is an exam. A blank square implies only that there is a day, and that you can choose to sit in it. The sheet on this page was designed around the second framing, because that is the one the tradition actually uses.
          </p>
          <p>
            If you want a longer read on why the daily frequency matters more than any single long sitting, see <Link href="/guide/why-20-minutes-beats-two-hours" className="text-accent underline hover:text-foreground">why 20 minutes beats two hours</Link> and <Link href="/guide/daily-practice" className="text-accent underline hover:text-foreground">daily practice at home</Link>.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-foreground">How to print it in sixty seconds</h2>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              Open <Link href={PRINT_URL} className="text-accent underline hover:text-foreground">vipassana.cool/daily-sit-log/print</Link> in your browser.
            </li>
            <li>
              Press <kbd className="rounded border border-border bg-card px-1.5 py-0.5 font-mono text-xs">Cmd</kbd> + <kbd className="rounded border border-border bg-card px-1.5 py-0.5 font-mono text-xs">P</kbd> on Mac, or <kbd className="rounded border border-border bg-card px-1.5 py-0.5 font-mono text-xs">Ctrl</kbd> + <kbd className="rounded border border-border bg-card px-1.5 py-0.5 font-mono text-xs">P</kbd> on Windows and Linux.
            </li>
            <li>
              In the print dialog, set destination to &ldquo;Save as PDF.&rdquo; Leave paper size on Letter or A4, orientation on Portrait, margins on Default. Scale 100%.
            </li>
            <li>
              Click Save. You now have the free daily handwriting practice PDF. The file is about 20 KB.
            </li>
            <li>
              Print it once, or print twelve and date them. Pin it somewhere you pass before you check your phone in the morning.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-foreground">A note on what this page is not</h2>
          <p className="mb-4">
            This is not a cursive worksheet, not a calligraphy drill, not a letter-formation PDF for kids. If you or a child in your household needs those, Education.com, K5 Learning, and Teachers Pay Teachers are better destinations. This page will not help you learn to write.
          </p>
          <p>
            What it will help you do is notice, on a Tuesday in October, that you have sat for eighteen of the last twenty-one days, in ink, in your own hand, and that no app needed to tell you so.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-foreground">Frequently asked questions</h2>
          <div className="mt-4 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-l-2 border-accent/30 pl-4">
                <h3 className="mb-1 font-semibold text-foreground">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <PracticeBuddyCta
        heading="Paper log + a person in the Meet room"
        description="The sheet handles solo accountability. A Practice Buddy handles the schedule. Get matched with a fellow old student for daily silent sits over Google Meet. Free, tradition-respectful."
      />

      <div className="mt-12 rounded-xl border border-border bg-card p-6">
        <h2 className="mb-4 font-semibold text-foreground">Related guides</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/guide/daily-practice" className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent">
            Daily Practice at Home
          </Link>
          <Link href="/guide/why-20-minutes-beats-two-hours" className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent">
            Why 20 Minutes Beats Two Hours
          </Link>
          <Link href="/guide/restarting-your-practice" className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent">
            Restarting Your Practice
          </Link>
          <Link href="/t/after-vipassana-daily-practice-rewire-habits" className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent">
            After Vipassana: Daily Practice and Habits
          </Link>
          <Link href="/guide/group-sittings" className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent">
            Group Sittings
          </Link>
        </div>
      </div>

      <PageComments pageId="t-daily-handwriting-practice-pdf-free" />
    </article>
  );
}
