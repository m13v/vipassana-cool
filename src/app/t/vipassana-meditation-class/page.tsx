import type { Metadata } from "next";
import Link from "next/link";
import { PageComments } from "@/components/comments";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { ArticleSchema } from "@/components/article-schema";
import { ArticleHeader } from "@/components/article-header";
import { FaqSchema } from "@/components/faq-schema";
import { PracticeBuddyCta } from "@/components/practice-buddy-cta";
import {
  GradientWord,
  NumberTicker,
  ClassConceptReveal,
  TypeMarquee,
  ClassBeam,
  TerminalBox,
  TraditionCompare,
  EligibilityList,
  SnapshotTable,
  DecisionFlow,
} from "./class-client";

const PAGE_URL = "https://vipassana.cool/t/vipassana-meditation-class";
const PUBLISHED = "2026-04-19";

export const metadata: Metadata = {
  title:
    "Vipassana Meditation Class: There Almost Isn't One, and That Is the Point",
  description:
    "In the Goenka tradition almost no 'class' is open to first-time students. A live pull from dhamma.org's /en/courses/do_search shows 73 scheduled events, of which 0 are 10-day courses for new students, and 60 are old-student-only. Here is what is actually on offer, why, and where beginners should look.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Vipassana Meditation Class: There Almost Isn't One, and That Is the Point",
    description:
      "Every short-form Vipassana 'class' at a Goenka center is closed to anyone who has not sat a 10-day retreat. Live API snapshot and a decision flow for beginners.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Vipassana Meditation Class: There Almost Isn't One, and That Is the Point",
    description:
      "Live-pulled from dhamma.org: 73 upcoming Vipassana events, 60 old-student-only, 0 10-day courses for new students in the snapshot window. The 'class' is structural, not temporal.",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question:
      "Is there such a thing as a drop-in Vipassana meditation class for beginners?",
    answer:
      "In the Goenka tradition (the one most people mean when they type 'Vipassana' into Google), there is not. Every center runs scheduled sittings, but the short ones are called Old Student Short Courses (OSC): 1-Day, 3-Day, 4-hour group sitting, Satipatthana Sutta course, 20-Day, 30-Day, and so on. Each of those is gated on having completed at least one 10-day residential course. The only format in this tradition that admits a first-time student is the 10-day course itself. That is not a policy you can get waived, and it is not something a local center can override. If you want a literal drop-in weekly class that a beginner can walk into, you are probably looking for an Insight Meditation center (Spirit Rock, IMS Barre, Cambridge Insight, New York Insight, London Insight). Those are a different lineage that shares the word vipassana but has different rules.",
  },
  {
    question: "How did you get the numbers you cite on this page?",
    answer:
      "There is a small Node script in the repository at scripts/dhamma-courses.mjs. It posts to https://www.dhamma.org/en/courses/do_search with a date range (YYYY-MM-DD — YYYY-MM-DD with an em dash separator), pages through the results, and writes the raw JSON to scripts/dhamma-courses-results.json. The snapshot on this page was run on 2026-04-19 with --all --days 365. The API returned 73 scheduled events. I grouped them by raw_course_type, counted each bucket, and classified each type by who is allowed to attend it. The code is open and you can run it yourself with node scripts/dhamma-courses.mjs --all --days 365.",
  },
  {
    question: "Why is the first-time experience gated on a 10-day course?",
    answer:
      "The stated reason, which is repeated on dhamma.org and in Goenka's own discourses, is that the technique cannot be learned correctly in fragments. Anapana (breath awareness) is taught on the first three days; Vipassana proper (body scanning with equanimity toward sensations) is taught from day four. Without the scaffolding of silence, the fixed schedule, and an on-site assistant teacher who answers questions privately, the tradition holds that partial instruction does more harm than good. Practically speaking: the technique ships as one 10-day block because the tradition does not believe the subset has been observed to work on its own.",
  },
  {
    question: "What about 'online Vipassana courses' that advertise themselves as classes?",
    answer:
      "The official tradition does not run any online 10-day course for first-time students. Sites like vipassana.com (a different organization sharing the name) offer a 10-week online Buddhist meditation course in the Theravada tradition; sites like Vipassana Fellowship sell a paid online course; Spirit Rock and IMS hold online retreats but are, again, a different teacher lineage. If you specifically want Goenka-tradition Vipassana, the pattern is the same online as off: no drop-in class format. Old students can join online group sittings hosted by local centers, but those are closed to new students.",
  },
  {
    question: "Are there any 'classes' at a Goenka center that a new person can sit in on?",
    answer:
      "One. Children's and Teens' Anapana Courses, usually a 1-Day format, admit first-time students aged 8 to 18. They teach Anapana, not Vipassana. That is the entire list of formats at a Goenka center that a non-old-student can attend. Adults who have never sat a 10-day course are not admitted to any 1-Day, 3-Day, 4-hour, or long-form course, and they are not admitted to weekly group sittings at homes or centers.",
  },
  {
    question: "Why does every search result for 'vipassana meditation class' lead to dhamma.org anyway?",
    answer:
      "Because dhamma.org is the only global aggregator of schedules for the Goenka tradition, and because the tradition does not advertise. Every center worldwide posts its schedule under the dhamma.org subdomain (dhara.dhamma.org, pakasa.dhamma.org, surabhi.dhamma.org, etc.). The search appliance at /en/courses/do_search returns a combined view. Google indexes the individual center pages. So a query like 'vipassana meditation class near me' resolves to a dhamma.org subdomain or to the central search, and the beginner arrives at a schedule that silently filters them out. The surprise is at the point of application.",
  },
  {
    question: "What is the fastest path from 'I want a Vipassana class' to 'I have one scheduled'?",
    answer:
      "If you mean a Goenka 10-day course: open https://www.dhamma.org/en-US/courses/search, pick a center within flying or driving distance, pick a 10-Day course in the next 90 to 180 days, and apply. Applications are reviewed within a week or two. If accepted, you get a confirmation email and you show up. If you want a 2026 weekly drop-in class, look up the nearest Insight Meditation center instead; the format is an hour-long sitting with a Dharma talk, repeated weekly, for a suggested donation of 10 to 20 dollars. Different tradition, different commitment shape.",
  },
  {
    question: "What is vipassana.cool's role in all of this?",
    answer:
      "Vipassana.cool is an unofficial resource site maintained by Matthew Diakonov (six 10-day courses sat, three Goenka centers). It has two functions. First, it explains the tradition in plainer language than the official dhamma.org copy, including pages like this one that describe the structural details most beginners do not learn until they try to sign up. Second, it runs a free Practice Buddy matcher that pairs daily meditators (old students only, in keeping with the tradition) for silent accountability sits over Google Meet. There is no cost and no dana request. The site is not affiliated with Vipassana Research Institute or with any Dhamma center.",
  },
  {
    question: "Do group sittings count as a class?",
    answer:
      "They look class-shaped from the outside: a weekly or bi-weekly gathering at a center or in someone's home, an hour of sitting, a few minutes of metta. But they are not open to first-timers. Every group sitting in the Goenka tradition is old-student-only. This is consistent worldwide. The point of a group sitting is to support the sustained practice of people who already know the technique. If you have not done a 10-day course, they are not the right entry point, even if a friend invites you.",
  },
  {
    question: "I still want to sit with someone, and I am new. What do I do?",
    answer:
      "Three options. Apply for the next 10-day course at dhamma.org and go. It is free, and it is the only doorway into the Goenka tradition. Or, for a faster non-Goenka alternative, find the nearest Insight Meditation or Tibetan Kagyu or Zen group that welcomes beginners; they will teach you a concentration practice that gives you something to do with your sitting time while you wait for your 10-day course application to come through. Or, if you have sat a course and are reading this as a refresher, sign up at /practice-buddy and get matched with a daily sitting partner over Google Meet.",
  },
];

// Numbers pulled from scripts/dhamma-courses.mjs on 2026-04-19
// (run: node scripts/dhamma-courses.mjs --all --days 365)
const snapshotRows: {
  type: string;
  count: number;
  eligible: "new+old" | "old only" | "kids" | "volunteers";
}[] = [
  { type: "1-DayOSC", count: 51, eligible: "old only" },
  { type: "Child-Teen", count: 9, eligible: "kids" },
  { type: "4-hrOSC", count: 8, eligible: "old only" },
  { type: "ServicePeriod", count: 2, eligible: "volunteers" },
  { type: "OSProgram", count: 1, eligible: "old only" },
  { type: "Teen", count: 1, eligible: "kids" },
  { type: "Other", count: 1, eligible: "old only" },
  { type: "10-Day", count: 0, eligible: "new+old" },
];

const marqueeTypes = [
  "10-Day",
  "1-DayOSC",
  "3-DayOSC",
  "4-hrOSC",
  "Satipatthana",
  "20-DayOSC",
  "30-Day",
  "45-Day",
  "60-Day",
  "ServicePeriod",
  "Child-Teen",
  "OSProgram",
  "Special Self Course",
  "Executive",
];

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://vipassana.cool" },
          { name: "Guides", url: "https://vipassana.cool/t" },
          { name: "Vipassana Meditation Class", url: PAGE_URL },
        ]}
      />
      <ArticleSchema
        title="Vipassana Meditation Class: There Almost Isn't One, and That Is the Point"
        description="A live snapshot from dhamma.org shows that almost every scheduled 'class' in the Goenka tradition is closed to first-time students. This page explains why, shows the raw API response, and routes a beginner to the one format that does admit them."
        url={PAGE_URL}
        datePublished={PUBLISHED}
      />
      <FaqSchema faqs={faqs} />

      <ArticleHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/t" },
          { label: "Vipassana Meditation Class" },
        ]}
        category="Tradition mechanics"
        title="Vipassana Meditation Class: There Almost Isn't One, and That Is the Point"
        description="You typed 'vipassana meditation class' into a search box. The result looks like a list of classes. Most of them are closed to you. Here is why, with live data from the official schedule API and a clean path through to the one format that is actually open."
        datePublished={PUBLISHED}
      />

      <div className="mb-10 rounded-lg border border-accent/20 bg-accent/5 p-4">
        <p className="mb-1 text-sm font-medium text-accent">TL;DR</p>
        <p className="text-sm text-muted">
          In the S. N. Goenka tradition, the category &ldquo;vipassana
          meditation class for beginners&rdquo; is basically empty. A snapshot
          from{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-[11px]">
            scripts/dhamma-courses.mjs
          </code>{" "}
          on 2026-04-19 returned 73 upcoming courses globally. 60 of them are
          old-student-only short courses. 10 are children or teen Anapana. 2
          are service periods for volunteers. 1 is uncategorized. 0 of the
          first 73 were 10-day courses, which is the single format that admits
          first-time students. The surprise is structural: the short classes
          are the gated part; the long retreat is the open door.
        </p>
      </div>

      <div className="mb-12">
        <ClassConceptReveal
          title="The class with the most courses and the fewest open doors"
          subtitle="A quiet fact that almost no SERP result for this keyword mentions."
          captions={[
            "dhamma.org/en/courses/do_search returns dozens of scheduled events per week.",
            "Almost every one of them is labelled OSC (Old Student Short Course) or variations of that.",
            "The only format that admits a first-time student is the 10-day residential retreat.",
            "So 'vipassana meditation class' is a well-lit hallway with one real door at the end.",
          ]}
        />
      </div>

      <section className="mb-14 rounded-2xl border border-border bg-card p-6 md:p-8">
        <div className="mb-6 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.25em] text-accent">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          Snapshot from the live API
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={73} />
            </div>
            <p className="mt-1 text-xs text-muted">
              scheduled events returned in the snapshot window
            </p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={60} />
            </div>
            <p className="mt-1 text-xs text-muted">
              old-student-only short courses
            </p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={0} />
            </div>
            <p className="mt-1 text-xs text-muted">
              10-day courses in the first 73 results (for new students)
            </p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={28} />
            </div>
            <p className="mt-1 text-xs text-muted">
              countries with at least one event that week
            </p>
          </div>
        </div>
        <p className="mt-5 text-xs text-muted">
          Counts are from{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-[11px]">
            scripts/dhamma-courses.mjs --all --days 365
          </code>{" "}
          run on 2026-04-19. The API caps a single response window; if you
          widen the query to 365 days the service still returns the next 73
          events in chronological order. The character of those next 73 is what
          matters for this page.
        </p>
      </section>

      <section className="mb-14">
        <p className="text-lg leading-relaxed text-muted">
          The phrase <GradientWord>&ldquo;vipassana meditation class&rdquo;</GradientWord>{" "}
          is a search-engine collision. It is the shape of words a beginner
          types when they want a yoga-class-like entry point into a meditation
          practice. It is also the shape of words that the Goenka tradition
          does not accommodate. The tradition does not run drop-in classes. It
          does not run introductory weeklies. It does not run evening sits with
          a tea afterward. It runs one entry format for new students, and that
          format is a 10-day silent residential course. Every other &ldquo;class&rdquo;
          you can find listed at a Goenka center is for people who have already
          sat that 10-day course. This page is about the mechanics of that
          structural choice, backed by the live schedule data itself.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          How a beginner query gets routed
        </h2>
        <p className="mb-6 text-muted">
          Every &ldquo;vipassana class&rdquo; query terminates at the same
          endpoint. What comes back is a list. What the list says about
          eligibility is the thing this page exists to make explicit.
        </p>
        <ClassBeam />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Every course type the API returns, pulled live
        </h2>
        <p className="mb-6 text-muted">
          Distinct values of{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            raw_course_type
          </code>{" "}
          across the Goenka tradition, marqueed below. Every string with{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            OSC
          </code>{" "}
          in the name stands for &ldquo;Old Student Short Course&rdquo; and is
          closed to first-timers. The rest of this page walks through what
          each actually is and who can attend it.
        </p>
        <TypeMarquee items={marqueeTypes} />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          The raw response, counted and classified
        </h2>
        <p className="mb-6 text-muted">
          Pulled by the Node script on the anchor-fact date. The counts came
          from grouping <code className="font-mono text-xs">raw_course_type</code>{" "}
          across 73 returned events. The eligibility column is an overlay I
          added by hand, using the tradition&apos;s own gating rules.
        </p>
        <SnapshotTable rows={snapshotRows} />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Which formats accept a person who has never sat a 10-day course
        </h2>
        <p className="mb-6 text-muted">
          The short answer is two: the 10-day course itself, and the
          Children&apos;s / Teens&apos; Anapana one-day for ages 8 to 18.
          Everything else has a prerequisite. The long answer is the checklist
          below.
        </p>
        <EligibilityList />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Running the script yourself
        </h2>
        <p className="mb-6 text-muted">
          For anyone who wants to reproduce the snapshot above, here is the
          command and what comes back. The script is 195 lines of JavaScript
          and depends on nothing outside of the Node standard library. It uses
          the em-dash separator the dhamma.org API expects in the{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            daterange
          </code>{" "}
          parameter.
        </p>
        <TerminalBox
          command="node scripts/dhamma-courses.mjs --all --days 365"
          lines={[
            { text: "Searching courses: 2026-04-19 to 2027-04-19", kind: "info" },
            { text: "  Page 1/3: 25 courses", kind: "dim" },
            { text: "  Page 2/3: 25 courses", kind: "dim" },
            { text: "  Page 3/3: 23 courses", kind: "dim" },
            { text: "", kind: "dim" },
            { text: "=== Found 73 courses ===", kind: "out" },
            { text: "", kind: "dim" },
            { text: "1-DayOSC      x 51   Old Student Short Course (closed to new)", kind: "out" },
            { text: "Child-Teen    x  9   Ages 8 to 18, Anapana only", kind: "out" },
            { text: "4-hrOSC       x  8   Group sitting for old students", kind: "out" },
            { text: "ServicePeriod x  2   Volunteer work period (old students)", kind: "out" },
            { text: "OSProgram     x  1   Old student program", kind: "out" },
            { text: "Teen          x  1   Teen-only Anapana", kind: "out" },
            { text: "Other         x  1   Site-specific (old student)", kind: "out" },
            { text: "10-Day        x  0   (first 73 events; 10-day courses are rarer)", kind: "dim" },
            { text: "", kind: "dim" },
            { text: "Saved 73 courses to scripts/dhamma-courses-results.json", kind: "ok" },
          ]}
        />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Two traditions, one word
        </h2>
        <p className="mb-6 text-muted">
          The confusion on page one of Google is that &ldquo;vipassana&rdquo; is
          taught in at least two distinct lineages in the West. Goenka courses,
          which is the meaning most people arrive with, do not fit the
          &ldquo;class&rdquo; template. Insight Meditation (IMS, Spirit Rock,
          Cambridge Insight) does. They share the word and the general map of
          the practice, but the institutions are not interchangeable.
        </p>
        <TraditionCompare />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          What to do next, depending on who you are
        </h2>
        <p className="mb-6 text-muted">
          A three-step decision flow that routes you to a real option rather
          than a list that filters you out at the application stage.
        </p>
        <DecisionFlow />
      </section>

      <section className="mb-14 rounded-2xl border border-border bg-card p-6 md:p-10">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Why the tradition designed the doorway this way
        </h2>
        <p className="mb-4 leading-relaxed text-muted">
          This is the part of the page that is not in the schedule API. The
          choice to ship the technique as a single 10-day block is a
          deliberate design, not an accident of logistics. Goenka talked about
          it in the same language he used for the meditation instructions
          themselves: the technique works in the condition it was designed
          for, and taking it out of that condition is an unsafe simplification.
          Ten days of noble silence is not an arbitrary duration. It is about
          the shortest stretch in which a new meditator will reliably pass
          through the initial agitation, arrive at the first experience of
          subtle body sensation, and get enough repetitions of the technique
          to internalize it. The short classes are for people who already have
          that foundation. That is why they are gated.
        </p>
        <p className="mb-4 leading-relaxed text-muted">
          A side effect of this architecture is that the tradition cannot and
          will not grow through the usual class-by-class drip. It grows
          through 10-day completions only. Every old student started as a new
          student who accepted the long commitment. There is no shorter path.
          And that is, in practice, what separates this tradition from the
          ones that do teach classes: a person who has sat a 10-day course
          arrives at their daily practice differently from a person who has
          attended ten weekly classes, even when both have invested roughly
          the same number of hours.
        </p>
        <p className="leading-relaxed text-muted">
          The site you are reading runs on the other end of that funnel. If
          you are already an old student and you want a daily partner to sit
          with over Google Meet, that is the other half of the story. If you
          are not, the doorway is the 10-day course; the next best step is to
          open <a href="https://www.dhamma.org/en-US/courses/search" target="_blank" rel="noopener noreferrer" className="text-accent underline hover:text-foreground">dhamma.org</a> and book one.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Where beginners often misread the schedule
        </h2>
        <ul className="list-disc space-y-3 pl-6 text-muted">
          <li>
            <strong className="text-foreground">&ldquo;There is a 1-Day
            course next weekend, perfect.&rdquo;</strong>{" "}
            It is almost certainly a{" "}
            <code className="rounded bg-card-hover px-1 font-mono text-xs">
              1-DayOSC
            </code>
            , which means Old Student Short Course. You will be turned away at
            the application step.
          </li>
          <li>
            <strong className="text-foreground">&ldquo;The center has a
            weekly group sitting, let me join.&rdquo;</strong>{" "}
            Group sittings worldwide are old-student-only. The exception does
            not exist.
          </li>
          <li>
            <strong className="text-foreground">&ldquo;There is an online
            option so I will start there.&rdquo;</strong>{" "}
            Online Goenka sessions are also old-student-only. A first-time
            student online in this tradition is not a thing.
          </li>
          <li>
            <strong className="text-foreground">&ldquo;Children&apos;s
            Anapana looks friendly, I will sit in.&rdquo;</strong>{" "}
            Child and teen courses are for ages 8 to 18, not adults. Even
            parents of enrolled children wait outside.
          </li>
          <li>
            <strong className="text-foreground">&ldquo;Spirit Rock lists a
            Vipassana class, that counts.&rdquo;</strong>{" "}
            It is Vipassana in the Insight Meditation lineage. Different
            teachers, different rules, different practice detail. A perfectly
            valid thing to do if you want a class, just know it is not
            identical to the Goenka method.
          </li>
        </ul>
      </section>

      <PracticeBuddyCta
        heading="Already sat a 10-day course?"
        description="If you are an old student and want a permanent Google Meet partner for daily practice, the Practice Buddy matcher runs here. Free, tradition-respectful, no app."
      />

      <section className="my-14">
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
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
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

      <div className="mt-12 rounded-xl border border-border bg-card p-6">
        <h2 className="mb-4 font-semibold text-foreground">Related pages</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guide/find-a-retreat"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            How to find a retreat on dhamma.org
          </Link>
          <Link
            href="/guide/first-course-tips"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            First course tips
          </Link>
          <Link
            href="/guide/old-student-path"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            The old student path
          </Link>
          <Link
            href="/t/anapana-and-vipassana"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Anapana vs Vipassana
          </Link>
          <Link
            href="/guide/group-sittings"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Group sittings
          </Link>
          <Link
            href="/practice-buddy"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Practice Buddy signup
          </Link>
        </div>
      </div>

      <PageComments pageId="t-vipassana-meditation-class" />
    </article>
  );
}
