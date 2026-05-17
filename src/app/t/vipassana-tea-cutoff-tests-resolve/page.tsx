import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ComparisonTable,
  HorizontalStepper,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type ComparisonRow,
  type StepperStep,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/vipassana-tea-cutoff-tests-resolve";
const PUBLISHED = "2026-05-17";
const VERIFIED = "2026-05-17";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Noble Silence and the 5pm Tea Cutoff: What First-Course Students Actually Get",
  description:
    "The 5pm tea cutoff is not the same rule for first-course students as for old students. New students get fruit and tea with milk; old students get lemon water. Noble silence has a written carve-out: you can speak to the course manager about food at any time. Verified against the official Code of Discipline.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "The 5pm Tea Cutoff and Noble Silence on a First Vipassana Course",
    description:
      "What you actually get at 5pm on your first course, why it differs from what old students get, and the carve-out in noble silence that most write-ups never mention.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The 5pm Tea Cutoff on a First Vipassana Course",
    description:
      "New students get fruit and milk tea. Old students get lemon water. Noble silence has a written carve-out for talking to the course manager about food.",
  },
  robots: { index: true, follow: true },
};

const comparisonRows: ComparisonRow[] = [
  {
    feature: "What you get at the 5pm break",
    competitor: "Lemon water or tea without milk",
    ours: "Tea with milk and some fruit",
  },
  {
    feature: "Underlying precept",
    competitor:
      "Sixth precept: no eating after midday, undertaken voluntarily by old students",
    ours:
      "Sixth precept does not apply to new students for the duration of the first course",
  },
  {
    feature: "Can the rule be eased for health reasons?",
    competitor:
      "Yes, the teacher may excuse an old student from observing the precept",
    ours: "Not relevant; the precept is not undertaken in the first place",
  },
  {
    feature: "Who counts as which",
    competitor:
      "Anyone who has completed a full 10-day course in this tradition",
    ours: "Anyone on their first 10-day course in this tradition",
  },
  {
    feature: "Can you ask the course manager for more food if needed?",
    competitor:
      "Yes, food questions are explicitly permitted under noble silence",
    ours:
      "Yes, food questions are explicitly permitted under noble silence",
  },
];

const stepperSteps: StepperStep[] = [
  {
    title: "Talk to the course manager",
    description:
      "Communication with course management about food, accommodation, or other practical needs is explicitly permitted while noble silence is in effect.",
  },
  {
    title: "Ask the assistant teacher",
    description:
      "Questions about the technique go to the assistant teacher at the designated daily question time. Also exempt from noble silence.",
  },
  {
    title: "Use a written or signed note in the office",
    description:
      "Most centers have a small office or sign-up sheet where you can leave a note for management. A quiet alternative to a verbal exchange.",
  },
  {
    title: "Eat well at lunch tomorrow",
    description:
      "The most common adjustment is simply taking a larger lunch, since lunch is the last meal of the day for everyone and the cutoff lands hours later.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Is there really a 5pm food cutoff during a first Vipassana course?",
    a: "Yes, but it is not a fast for first-course students. The official Code of Discipline distinguishes new from old students at the 5pm break. New students may have tea with milk and some fruit. Old students take only lemon water or tea without milk because they have voluntarily undertaken the sixth precept, which forbids eating after midday. The cutoff is built around that precept, so the part that lands hardest is on the people who chose to take it on. A first-time student is not in that group.",
  },
  {
    q: "Does noble silence mean I cannot ask anyone for help with food?",
    a: "No. Noble silence is silence between students. The same Code of Discipline that introduces noble silence makes the exception explicit: students may communicate with teachers and management about problems related to the technique, food, accommodation, or other practical matters. If you genuinely need to adjust something about your food situation on a first course, the path to do that is written into the rules, not against them.",
  },
  {
    q: "What does the Code of Discipline actually say about 5pm?",
    a: "On the evening break it says, in essence, that old students take lemon water or tea without milk, and new students may have tea with milk and some fruit. On noble silence it says that silence of body, speech, and mind is required, and that any form of communication between students, whether by gestures, sign language, or written notes, is not allowed. Those two clauses sit a few paragraphs apart in the same document, and reading them together is the answer most posts about a first course never give you.",
  },
  {
    q: "Why are the rules different for first-time students at all?",
    a: "Because the no-eating-after-midday rule is a precept old students choose to undertake for the course, not a constraint of the course. The five precepts everyone takes during the course are about not killing, not stealing, no sexual activity, no lying, and no intoxicants. The sixth precept, no food after midday, plus the seventh and eighth, are added for old students only. The 5pm break is built so that everyone has something at the same hour, but the menu differs because the underlying precepts differ.",
  },
  {
    q: "Is hunger the actual problem, or is it something else?",
    a: "From talking with other first-timers and from sitting through several courses, the first two or three evenings can feel hungry. By the third or fourth day most people stop noticing the evening gap, partly because the body adapts to a larger lunch as the main meal, and partly because the mind has many other things to attend to by then. The hunger story is also tangled with the silence: there is no chatter at dinner to distract from a quiet stomach, which makes the same number of calories feel sharper than it would at home.",
  },
  {
    q: "Should I ask for an exception or just sit with it?",
    a: "That is a decision only you and the course management can make, and the rules already have a path for it. If something about food is health-relevant, course managers want to know. If it is discomfort that you can sit with, that is also a perfectly reasonable answer. Both options are inside the lines drawn by the tradition. The page on this site about first-course tips covers the wider preparation question. For anything operational about the practice itself, the right place is dhamma.org and an authorized assistant teacher at a 10-day course.",
  },
  {
    q: "Where can I read the actual rules?",
    a: "The Code of Discipline is published in full on dhamma.org. The page at dhamma.org/en-US/about/code contains the precepts, the rules on noble silence, and the daily schedule including the 5pm break. Any first-course student is asked to read it before applying, and rereading the food and silence sections the week before the course gives the most settled answer to the question this page is built around.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guide", href: "/guide" },
  { label: "First-course tea cutoff under noble silence" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guide", url: "https://vipassana.cool/guide" },
  {
    name: "First-course tea cutoff under noble silence",
    url: PAGE_URL,
  },
];

const relatedPosts = [
  {
    title: "First course: 15 things I wish I knew",
    href: "/guide/first-course-tips",
    excerpt:
      "Practical notes from six courses on what actually carries you through Days 2 to 4, including the eat-big-at-lunch move that fixes most of the 5pm story.",
    tag: "First course",
  },
  {
    title: "After Vipassana: daily practice and the long work",
    href: "/t/after-vipassana-daily-practice-rewire-habits",
    excerpt:
      "What changes once the course ends. The retreat is the seed. Daily sits and the rest of the food, silence, and routine become your own to shape again.",
    tag: "After your course",
  },
  {
    title: "A decades-long daily meditation habit is not a streak",
    href: "/t/decades-long-daily-meditation-habit",
    excerpt:
      "The shape of a practice that lasts decades, written from the tradition's own materials on lapses and returns rather than from streak literature.",
    tag: "Long arc",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Noble silence and the 5pm tea cutoff: what first-course students actually get",
    description:
      "A first-course Vipassana student gets fruit and tea with milk at the 5pm break, while old students take only lemon water. Noble silence has an explicit carve-out that permits speaking to course management about food. Verified against the official Code of Discipline.",
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
          First course, the food and silence rules read together
        </p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 leading-tight">
          Noble silence and the 5pm tea cutoff on a first Vipassana course
        </h1>
        <p className="mt-5 text-base sm:text-lg text-zinc-600 leading-relaxed">
          Most write-ups about a first 10-day course tell you the cutoff
          like one flat rule: no dinner, just fruit at 5pm. Read the
          actual Code of Discipline and the cutoff is two rules, not one,
          and noble silence has a written carve-out that nobody on a
          social-media thread bothers to quote. The whole picture matters
          if you are about to sit your first course.
        </p>
      </header>

      <ArticleMeta
        author="Matthew Diakonov"
        authorRole="Written with AI"
        datePublished={PUBLISHED}
        readingTime="6 min read"
      />

      <section className="max-w-3xl mx-auto px-6 pt-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Direct answer (verified {VERIFIED})
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            On a first 10-day course, the 5pm break is not a fast. New
            students may have tea with milk and some fruit. Only old
            students restrict to lemon water or tea without milk, because
            only they have undertaken the sixth precept of no eating
            after midday. Noble silence is silence between students, and
            the same document that defines it explicitly permits speaking
            to teachers and management about food, accommodation, or the
            technique. Verified against the official{" "}
            <a
              href="https://www.dhamma.org/en-US/about/code"
              className="text-teal-700 underline hover:text-teal-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code of Discipline
            </a>{" "}
            on {VERIFIED}.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-10">
        <h2 className="text-2xl font-semibold text-zinc-900">
          What the cutoff actually looks like at 5pm
        </h2>
        <div className="mt-4 space-y-4 text-zinc-700 leading-relaxed">
          <p>
            The schedule has an evening break around 5pm where everyone
            gathers in the dining hall. That part is shared. What lands
            on the table is not the same for everyone, because the food
            rule and the precept it rests on are not the same for
            everyone. The table below is the part of the Code of
            Discipline most posts paraphrase incorrectly.
          </p>
        </div>

        <div className="mt-6">
          <ComparisonTable
            productName="New (first-course) students"
            competitorName="Old students"
            rows={comparisonRows}
          />
        </div>

        <p className="mt-6 text-sm text-zinc-500 leading-relaxed">
          Source: the Code of Discipline at dhamma.org. The split rests
          on the sixth precept, which is taken on for the course only by
          old students who have completed a full 10-day course in this
          tradition before.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Noble silence has named exceptions, in writing
        </h2>
        <div className="mt-4 space-y-4 text-zinc-700 leading-relaxed">
          <p>
            The keyword behind this page collides two rules that look
            related and behave differently. Noble silence is a rule about
            communication between students. The food cutoff is a rule
            about precepts and what is served when. They both come from
            the same Code of Discipline, and the same document spells
            out the boundary that ties them together.
          </p>
        </div>

        <blockquote className="mt-6 border-l-4 border-teal-300 bg-teal-50/60 px-6 py-5">
          <p className="text-base sm:text-lg text-zinc-800 leading-relaxed">
            &ldquo;Silence of body, speech, and mind. Any form of
            communication with fellow students, whether by gestures,
            sign language, written notes, etc., is not allowed.&rdquo;
          </p>
          <footer className="mt-3 text-sm text-zinc-500">
            From the{" "}
            <a
              href="https://www.dhamma.org/en-US/about/code"
              className="text-teal-700 underline hover:text-teal-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code of Discipline
            </a>{" "}
            on dhamma.org, on noble silence
          </footer>
        </blockquote>

        <div className="mt-6 space-y-4 text-zinc-700 leading-relaxed">
          <p>
            A few paragraphs later, the same document is just as explicit
            about what silence does <em>not</em> cover. Students may
            speak to the teacher when needed about the technique. They
            may speak to the course management about anything related
            to food, accommodation, or other material matters. Those two
            channels stay open from Day 0 through the morning of Day 10.
          </p>
          <p>
            Read together, the cutoff at 5pm and noble silence stop being
            a single intimidating rule and become two ordinary ones with
            named pressure-release valves. The reason the rules are
            written this way is practical: a course where a hungry or
            unwell student had no path to ask for help would not function,
            and the tradition has been running these courses for decades.
            The carve-outs are not exceptions; they are part of the
            design.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          What a first-course student can actually do at 5pm
        </h2>
        <div className="mt-4 space-y-4 text-zinc-700 leading-relaxed">
          <p>
            The shape of the 5pm break for a first-time student looks
            something like this. None of these are workarounds. Each
            one is written into the rules of the course.
          </p>
        </div>

        <div className="mt-6">
          <HorizontalStepper
            title="Channels open to a first-course student during noble silence"
            steps={stepperSteps}
          />
        </div>

        <div className="mt-6 space-y-4 text-zinc-700 leading-relaxed">
          <p>
            On my first course at a rented camp in the Bay Area, the
            5pm thing felt brutal for the first two evenings. By my
            third course at a permanent center I had learned to eat much
            more at lunch, and the cutoff stopped registering as anything
            in particular. Not a teacher or anything, just a fellow
            student sharing what worked over six courses. For anything
            about how to actually sit with a difficulty on the cushion,
            the right place is{" "}
            <a
              href="https://www.dhamma.org/en-US/about/code"
              className="text-teal-700 underline hover:text-teal-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              dhamma.org
            </a>{" "}
            and an authorized assistant teacher at a 10-day course.
          </p>
          <p>
            The site has a longer page on{" "}
            <Link
              href="/guide/first-course-tips"
              className="text-teal-700 underline hover:text-teal-900"
            >
              first-course tips
            </Link>
            {" "}with more on the eat-big-at-lunch pattern, what to bring,
            and the days where the schedule feels heaviest.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The cutoff is mostly a Day-1-and-2 problem
        </h2>
        <div className="mt-4 space-y-4 text-zinc-700 leading-relaxed">
          <p>
            One small thing worth knowing before you arrive. The hunger
            part of the cutoff has a half-life. The first evening with
            no dinner feels like a deprivation. The second feels lighter.
            By Day 3 or 4 most first-course students stop noticing that
            the day ends at the 5pm break, partly because lunch has
            quietly grown into the main meal, partly because the rest
            of the schedule has more than enough to occupy attention.
            What is left at the 5pm break, by the end of the week, is
            usually fruit, hot tea, and an early hour of quiet before
            the evening discourse.
          </p>
          <p>
            The other small thing. Noble silence makes hunger louder
            than it would be at home, the same way it makes everything
            else louder. There is no conversation at dinner to distract
            from a quiet stomach. That sharpening is part of why the
            course is structured the way it is, and it is not a glitch
            to be worked around. It is also a finite phenomenon. A few
            days in, the courses on this site, the older students at
            them, and the discourse itself all converge on roughly the
            same observation: most of what felt like a hunger problem
            on Day 1 is a familiarity problem, and familiarity arrives
            on its own.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          section="tea-cutoff-footer"
          heading="First course coming up? Compare notes with a fellow student"
          description="A short, peer-to-peer call about the 5pm cutoff, noble silence, what actually carries a first course, and whether the practice-buddy matching on this site is a fit for after you get home. Not teacher to student, just one fellow practitioner who has been through it six times."
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
        section="tea-cutoff-sticky"
        description="Compare notes on the 5pm cutoff and your first course"
      />
    </article>
  );
}
