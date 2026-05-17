import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  BeforeAfter,
  AnimatedChecklist,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";
import { DayCounter } from "@/components/day-counter";

const PAGE_URL =
  "https://vipassana.cool/t/decades-long-daily-meditation-habit";
const PUBLISHED = "2026-05-17";
const VERIFIED = "2026-05-17";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "A Decades-Long Daily Meditation Habit Is Not a Streak",
  description:
    "Most advice on a lifelong meditation habit stops at the first month and tells you to protect a streak. A decade of daily practice is a habit that has been restarted many times. The day counter on vipassana.cool is 16 lines with no reset-to-zero on purpose, and the Goenka tradition's own materials say lapses are essentially universal. What lasts decades is a cheap restart, not perfect adherence.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "A Decades-Long Daily Meditation Habit Is Not a Streak",
    description:
      "Don't-break-the-chain breaks at decade scale. A streak counter built for 3,650 days spends most of its life lying or reading 1. What actually lasts decades is a low-shame restart.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Decades-Long Daily Meditation Habit Is Not a Streak",
    description:
      "Long-term meditators describe returns, not an unbroken line. The counter on this site has no reset-to-zero on purpose. Engineer the restart, not the adherence.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "Can you really keep a daily meditation habit for decades?",
    a: "Yes, and people do, but almost none of them did it as an unbroken streak. A practice that survives twenty or thirty years is a practice that has been picked up, dropped, and picked up again, often many times. The Goenka tradition's own guidance for practitioners treats this as ordinary, not as failure. The honest version of the question is not 'how do I never miss' but 'how cheap can I make the way back in.' That is the variable that decides whether year fifteen happens.",
  },
  {
    q: "Do long-term meditators actually miss days?",
    a: "Routinely. The guide on this site about restarting after a long gap opens with the plain statement that most long-term practitioners in the tradition have had stretches, sometimes years, without daily practice, and that lapses are essentially universal. That is the tradition describing what decades of practice look like from the inside. It is a series of returns, not a single line. Anyone selling a perfect-streak version of a lifelong habit is describing the first month and calling it the whole thing.",
  },
  {
    q: "Why is a streak counter the wrong tool for a decades-long habit?",
    a: "Two reasons. First, the math: a decade is roughly 3,650 sits, and over that span the probability that you sit every single morning is not low, it is zero. Travel, illness, a newborn, grief, a move, one genuinely hard year. A streak counter built for decade scale spends most of its life either reading a small number or lying. Second, the demoralization: the worst feature of a streak is what it does on the day you miss after a long run. It does not say 'you have sat four thousand times.' It says zero. The number that should be your strongest evidence becomes your most painful one, and that is where people quit.",
  },
  {
    q: "How does the counter on vipassana.cool handle a missed day?",
    a: "It does not handle it, because it never measures attendance. The day counter is sixteen lines of TypeScript at src/components/day-counter.tsx. It holds a constant, BASE_COUNT, set to 881, and a REFERENCE_DATE of 2026-02-07. On every render it subtracts the reference date from today, floors the result to whole days, and adds the base. There is no streak field, no reset branch, no make-up day, no freeze or vacation mode. A missed sit does not appear in the number and cannot erase it. You can clone the repo and read the file in under a minute.",
  },
  {
    q: "What does the Goenka tradition offer for restarting after a long gap?",
    a: "The tradition has built specific structures for exactly this situation: group sittings for old students at local centers, one-day and short courses, and another full 10-day course when it has been a long time. The restarting guide on this site notes that a 10-day course is often the most reliable re-entry after a long lapse. Assistant teachers also welcome questions from old students. For anything operational, how to sit, how to work with a difficulty, the right place is dhamma.org and an authorized assistant teacher at a 10-day course, not a website.",
  },
  {
    q: "The counter is under three years old. Isn't calling this a decades page dishonest?",
    a: "The counter currently reads under three years, and this page says so plainly. It is not a decades-long habit yet. The page is an argument about what a decades-long habit requires, grounded in two things: the tradition's own materials about practitioners who have sat for thirty and forty years, and a design choice. The reason the counter can one day read 7,000 without lying is that it was never wired to a streak. It counts elapsed calendar days from a fixed origin, the way a tree counts rings.",
  },
  {
    q: "What single thing most predicts a habit lasting decades?",
    a: "A cheap, low-shame restart. The practitioners who reach decades are not the ones with the best attendance record. They are the ones for whom returning after a gap became boring: a known, rehearsed move they have made twenty times without drama. If a missed week triggers guilt, a story about being undisciplined, and a multi-day recovery, the restart is expensive and the habit is fragile. If it triggers nothing but tomorrow morning, the habit can absorb almost anything life does to it.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t/preserving-daily-practice-discipline" },
  { label: "A decades-long daily meditation habit is not a streak" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  {
    name: "Preserving daily practice discipline",
    url: "https://vipassana.cool/t/preserving-daily-practice-discipline",
  },
  {
    name: "A decades-long daily meditation habit is not a streak",
    url: PAGE_URL,
  },
];

const relatedPosts = [
  {
    title: "Preserving daily practice discipline by subtraction",
    href: "/t/preserving-daily-practice-discipline",
    excerpt:
      "The same architecture argument applied to a single day instead of a decade: discipline is preserved by removing the branches where a tired mind can negotiate, not by adding motivation.",
    tag: "Argument",
  },
  {
    title: "Morning meditation habit, long term: three off-the-cushion anchors",
    href: "/t/morning-meditation-habit-long-term",
    excerpt:
      "Where the decades question narrows to one piece: what keeps a year-2 morning sit alive when motivation has already run out.",
    tag: "Long term",
  },
  {
    title: "After Vipassana: daily practice and the long work",
    href: "/t/after-vipassana-daily-practice-rewire-habits",
    excerpt:
      "The course is the seed, not the tree. Honest notes on the months of daily sits that do the actual work, and why the timeline is longer than the brochures suggest.",
    tag: "After your course",
  },
];

const dayCounterSource = `"use client";

// Reference: 881 days of practice as of 2026-02-07
const BASE_COUNT = 881;
const REFERENCE_DATE = new Date("2026-02-07T00:00:00");

function getDayCount() {
  const now = new Date();
  const diffMs = now.getTime() - REFERENCE_DATE.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  return BASE_COUNT + diffDays;
}

export function DayCounter() {
  return <>{getDayCount()}+</>;
}`;

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline: "A Decades-Long Daily Meditation Habit Is Not a Streak",
    description:
      "An argument that a decades-long daily meditation habit is not an unbroken streak but a habit restarted many times. Grounded in the Goenka tradition's own materials on universal lapses and in the 16-line, reset-free day counter of vipassana.cool.",
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
    <article className="min-h-screen text-zinc-900">
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

      <header className="max-w-3xl mx-auto px-6 pt-6 pb-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">
          On the long arc of a practice
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
          A decades-long daily meditation habit is not a streak
        </h1>
        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          Most advice on building a meditation habit for life is really advice
          about the first month. Two-minute starters, habit stacking, a tidy
          corner of the bedroom, and above all a streak you protect. All of
          that is fine in week one. But read what the tradition&apos;s own
          materials say about practitioners who have sat for thirty and forty
          years, and the shape is the opposite of a clean line. A practice that
          survives decades is a practice that has been restarted, often many
          times. The thing worth engineering is not adherence. It is the way
          back in.
        </p>
      </header>

      <ArticleMeta
        author="Matthew Diakonov"
        authorRole="Written with AI"
        datePublished={PUBLISHED}
        readingTime="8 min read"
      />

      <section className="max-w-3xl mx-auto px-6 pt-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Direct answer (verified {VERIFIED})
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            Can you keep a daily meditation habit for decades? Yes, and people
            do. But almost none of them did it as an unbroken streak. The
            tradition&apos;s own guidance for practitioners treats lapses as
            essentially universal, and long-term meditators describe a practice
            they returned to repeatedly after gaps. What makes a habit last
            decades is a cheap, low-shame way back in, not perfect attendance.
            Verified against the tradition&apos;s{" "}
            <a
              href="https://www.dhamma.org/en/osguide"
              className="text-teal-700 underline hover:text-teal-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guidelines for Practicing
            </a>{" "}
            on {VERIFIED}.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The streak math breaks at decade scale
        </h2>
        <div className="mt-4 space-y-4 text-zinc-700 leading-relaxed">
          <p>
            A decade of daily practice is roughly 3,650 sits. The
            don&apos;t-break-the-chain model treats every one of them as
            load-bearing: miss a single morning and the chain snaps, the count
            falls back to zero. Across thirty days that is a useful fiction. It
            borrows tomorrow&apos;s motivation by making today feel expensive to
            waste.
          </p>
          <p>
            Across 3,650 days it is a guarantee of failure with a demoralizing
            reset bolted on. Over a span that long, the probability that you sit
            every single morning is not low. It is zero. Travel, illness, a
            newborn, grief, a move, one genuinely hard year. A streak counter
            built for decade-scale practice spends most of its life either
            reading a small number or quietly lying about what it measures.
          </p>
          <p>
            The deeper problem is not the math, it is what the streak does on
            the day you miss after a long run. It does not say{" "}
            <em>you have sat four thousand times</em>. It says zero. The number
            that should be your single strongest piece of evidence becomes the
            most painful thing on the screen. That is the moment people quit.
            Not because they missed a Tuesday, but because the tool they chose
            told them the missed Tuesday erased four thousand mornings.
          </p>
        </div>

        <div className="mt-8">
          <BeforeAfter
            title="Two ways to count a long practice"
            before={{
              label: "Streak model",
              content:
                "The number is your unbroken run. It is fragile by design. Every morning is a fresh chance to lose everything you have built, and the counter is most punishing exactly when you are most vulnerable.",
              highlights: [
                "One missed day resets the count to zero",
                "Trains you to protect the number over the practice",
                "Rewards the token sit done only to keep the streak alive",
                "Most discouraging on the day you most need encouragement",
              ],
            }}
            after={{
              label: "Restart model",
              content:
                "The number is how long the practice has been part of your life, counted from a fixed origin. A gap does not appear in it and cannot erase it. The only question a missed day raises is how quickly you come back.",
              highlights: [
                "A missed day is not an event the number records",
                "Nothing to protect, so nothing to perform",
                "Restarting is the rehearsed skill, not the failure",
                "The count keeps growing the way a tree adds rings",
              ],
            }}
          />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          What the counter on this site refuses to do
        </h2>
        <div className="mt-4 space-y-4 text-zinc-700 leading-relaxed">
          <p>
            The day counter on vipassana.cool is sixteen lines of TypeScript.
            Here is the entire file, <code className="text-sm">src/components/day-counter.tsx</code>:
          </p>
        </div>

        <div className="mt-5 overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900">
          <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="ml-2 font-mono text-xs text-zinc-500">
              src/components/day-counter.tsx
            </span>
          </div>
          <pre className="px-4 py-4 text-[13px] leading-relaxed text-zinc-100 font-mono">
            <code>{dayCounterSource}</code>
          </pre>
        </div>

        <div className="mt-6 space-y-4 text-zinc-700 leading-relaxed">
          <p>
            It holds one constant, <code className="text-sm">BASE_COUNT</code>,
            set to 881, and a{" "}
            <code className="text-sm">REFERENCE_DATE</code> of 2026-02-07. On
            every render it subtracts the reference date from today, floors the
            difference to whole days, and adds the base. That is the whole
            program. There is no streak field. There is no{" "}
            <code className="text-sm">if (missedYesterday) count = 0</code>.
            There is no make-up day, no freeze, no vacation mode, no
            celebrate-milestone modal, no analytics event. As this page is
            served, the counter reads{" "}
            <span className="font-semibold text-zinc-900">
              <DayCounter />
            </span>
            .
          </p>
          <p>
            Two honest caveats. First, that number is under three years old. It
            is not a decades-long habit yet, and this page is not pretending it
            is. Second, counting elapsed calendar days from an origin means the
            counter does not claim a sit happened on every one of those days.
            It is a measure of how long the practice has been alive, an
            origin-anchored count, not an attendance log.
          </p>
          <p>
            That is exactly the point. The reason the counter can one day read
            7,000 without lying is that it was never wired to a streak. It
            measures elapsed time against a fixed origin, the way a tree counts
            rings. A missed morning does not enter it and cannot reset it. That
            is a deliberate design choice, and it is the single choice that
            makes a decade-scale number structurally possible. A streak counter
            that zeroed out on day 4,001 would not be a long-practice tool. It
            would be a machine for talking people out of fifteen-year habits.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Decades-long practitioners describe returns, not a line
        </h2>
        <div className="mt-4 space-y-4 text-zinc-700 leading-relaxed">
          <p>
            The clearest evidence for all of this is not in habit literature. It
            is in the tradition&apos;s own writing. The guide on this site about
            restarting a practice after a long gap opens with a statement that
            is worth reading slowly:
          </p>
        </div>

        <blockquote className="mt-6 border-l-4 border-teal-300 bg-teal-50/60 px-6 py-5">
          <p className="text-lg text-zinc-800 leading-relaxed">
            &ldquo;Most long-term practitioners in the Goenka tradition have had
            stretches, sometimes years, without daily practice. Lapses are
            essentially universal and not something to feel unusually guilty
            about.&rdquo;
          </p>
          <footer className="mt-3 text-sm text-zinc-500">
            From{" "}
            <Link
              href="/guide/restarting-your-practice"
              className="text-teal-700 underline hover:text-teal-900"
            >
              the restarting-your-practice guide
            </Link>{" "}
            on this site
          </footer>
        </blockquote>

        <div className="mt-6 space-y-4 text-zinc-700 leading-relaxed">
          <p>
            That is not a soft reassurance bolted onto a guilt-driven program.
            It is the tradition describing, accurately, what thirty and forty
            years of practice look like from the inside. Not an unbroken line.
            A series of returns. The people held up as long-term practitioners
            are not people who never stopped. They are people who always came
            back.
          </p>
          <p>
            The framing the tradition gives for a missed sit is close to three
            words: notice, come back, continue. There is no narration of the
            slip, no streak to mourn, no make-up debt to pay down before normal
            practice resumes. In that framing, guilt about a gap is itself a
            form of aversion, the exact reactivity the practice works on. A
            practitioner who treats a two-week lapse as a catastrophe has, in a
            small and ordinary way, missed what the practice is for.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The renewal architecture: making the restart cheap
        </h2>
        <div className="mt-4 space-y-4 text-zinc-700 leading-relaxed">
          <p>
            If lapses are universal, the useful question is not how to prevent
            them. It is how cheap, how low-friction, how low-shame you can make
            the way back. The tradition has built specific structures for
            exactly this, and they are worth knowing about <em>before</em> you
            need them, while you are not in a gap and can think clearly.
          </p>
        </div>

        <div className="mt-6">
          <AnimatedChecklist
            title="Ways the tradition makes restarting cheap"
            items={[
              {
                text: "Group sittings: old students can sit with others at a local center on a regular schedule, no course required. A low-commitment door back in.",
              },
              {
                text: "One-day and short courses: a few hours or a few days, far less commitment than a full course, often enough to re-establish a daily sit.",
              },
              {
                text: "Another 10-day course: after a long lapse this is frequently the most reliable re-entry, and the tradition encourages old students to sit one periodically rather than treating courses as one-time events.",
              },
              {
                text: "An assistant teacher: centers welcome questions from old students by email, phone, and in person. Teachers are the right place for anything operational about resuming.",
              },
              {
                text: "A practice buddy: a fellow old student who sits with you over video, in silence, on a schedule, so a restart has a person attached to it rather than only willpower.",
              },
            ]}
          />
        </div>

        <div className="mt-6 space-y-4 text-zinc-700 leading-relaxed">
          <p>
            Notice what every one of these has in common. None of them is about
            preventing the gap. Each one is a low-friction door back in. A habit
            lasts decades not when the gaps never happen, but when the door back
            is always unlocked and never far away. The{" "}
            <Link
              href="/t/practice-buddy"
              className="text-teal-700 underline hover:text-teal-900"
            >
              practice buddy matching
            </Link>{" "}
            program on this site exists as one more such door: it pairs old
            students for a silent daily sit so that coming back is something you
            do alongside a person, not alone against your own inertia.
          </p>
          <p>
            One boundary worth stating plainly. For anything about how to
            actually practice, how to sit, or how to work with a difficulty
            that surfaces, the right place is{" "}
            <a
              href="https://www.dhamma.org/en/osguide"
              className="text-teal-700 underline hover:text-teal-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              dhamma.org
            </a>{" "}
            and an authorized assistant teacher at a 10-day course. This page is
            about the shape of a habit over time. It is not, and cannot be,
            instruction in the technique.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          What a decades frame actually buys you
        </h2>
        <div className="mt-4 space-y-4 text-zinc-700 leading-relaxed">
          <p>
            When you stop counting a streak and start counting from an origin, a
            few quiet things change. A missed Tuesday stops being an event. It
            does not get a number, a notification, or a story about your
            character. The next morning is just the next morning, which is
            exactly what notice-come-back-continue already said.
          </p>
          <p>
            You also stop optimizing for the wrong thing. A streak rewards never
            missing, which trains you, subtly, to protect the streak over the
            practice. That is the origin of the token sit, the few minutes done
            half-asleep purely so the number does not reset. An origin-anchored
            count rewards nothing and punishes nothing. It simply reports how
            long the practice has been part of your life, which leaves you free
            to make each sit honest rather than defensive.
          </p>
          <p>
            The practitioners who reach decades are not the ones with the
            cleanest attendance record. They are the ones for whom restarting
            became boring: a known, rehearsed, low-shame move they have made
            twenty times without drama. That is the skill actually worth
            building. Build a cheap restart, keep the door unlocked, and the
            decades mostly take care of themselves.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          section="decades-long-habit-footer"
          heading="Compare notes on the long arc of a practice"
          description="A short, peer-to-peer call about restarting after a gap, what a decades frame changes, or being paired with another old student through the matching program on this site. Not teacher to student, just a fellow practitioner."
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12 pb-4" id="faq">
        <FaqSection items={faqs} heading="Frequently asked questions" />
      </section>

      <section className="max-w-5xl mx-auto px-6 pt-8 pb-16">
        <RelatedPostsGrid
          title="Keep reading"
          subtitle="Adjacent notes from this site"
          posts={relatedPosts}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="decades-long-habit-sticky"
        description="Compare notes on restarting and the long arc of a practice"
      />
    </article>
  );
}
