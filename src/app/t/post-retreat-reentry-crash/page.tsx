import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ProofBanner,
  MetricsRow,
  InlineTestimonial,
  GlowCard,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/post-retreat-reentry-crash";
const PUBLISHED = "2026-05-07";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title: "Post-Retreat Reentry Crash: What's Actually Crashing And What Isn't",
  description:
    "After a 10-day Vipassana course the felt-state of the retreat (bliss, vividness, presence) recalibrates to baseline over 1 to 4 weeks. That clock and the structural-shift clock run on different timetables, and confusing them is what makes people quit. A non-teaching reflection from six courses and 945+ days of daily practice.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Post-Retreat Reentry Crash: What's Actually Crashing And What Isn't",
    description:
      "Two clocks, not one. The felt-state of a retreat fades on schedule. The structural shift does not. Mistaking the first for the second is what makes most people abandon the practice in the four weeks after a course.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Post-Retreat Reentry Crash: Two Clocks, Not One",
    description:
      "Six 10-day courses across three centers. The felt-state collapse is real. The conclusion that you have lost everything you gained is the actual trap.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "How long does the post-retreat reentry crash last?",
    a: "Across the six 10-day courses I have sat, the felt-state collapse has a fairly tight envelope. The first 24 to 72 hours after leaving the center tend to be a peak (heightened senses, present-moment feeling, a sense of clarity). The trough lands somewhere between Day 5 and Day 14, when the contrast between retreat life and ordinary life is loudest. Most of the felt-state turbulence is resolved by Week 4. A small minority of people experience a longer arc, particularly after a first course or when the course surfaced unresolved material. The dhamma.org code of discipline at https://www.dhamma.org/en/about/code is the right place for any operational question, and an authorized assistant teacher is the right person for any difficulty that does not resolve.",
  },
  {
    q: "Is the reentry crash the same as post-retreat depression?",
    a: "There is overlap, but they are not the same thing. The reentry crash describes the predictable recalibration of the felt-state of the retreat (bliss, vividness, the sense of having figured something out) back to ordinary baseline. Post-retreat depression refers to a clinical-shape low mood that can persist beyond the recalibration window and that may need professional attention. The crash is normal and bounded. A persistent low mood that lasts more than three or four weeks, that is paired with intrusive thoughts, dissociation, sleep collapse, or self-harm ideation, is a different conversation. Talk to your therapist and to the assistant teacher at the center where you sat.",
  },
  {
    q: "Why does the felt-state of the retreat fade so fast?",
    a: "The felt-state is the product of the conditions of the course, and most of those conditions evaporate the moment you leave. The schedule, the silence, the absence of phones and screens, the absence of decisions, the diet, the segregation, the assistant teacher, the recorded discourse every evening: all of it is engineered, and all of it is gone on Day 11. A nervous system that has been operating on that schedule for ten days does not stay there once the schedule stops. It recalibrates back to whatever your normal inputs are. That recalibration is the felt experience of the crash. It is not a failure of the practice and it is not a sign that the course did not work. It is the expected response to the inputs changing.",
  },
  {
    q: "What survives the crash if the felt-state does not?",
    a: "From my own experience and from old students I have compared notes with, the part that more often persists is structural. The gap between a provocation and a reaction is wider than it was. Ordinary irritations sit a beat longer before they become anger. The mind notices itself spinning earlier. None of that survives in the form of a felt high, which is what makes it easy to miss in the first month. People who measure the practice by how vivid the world looks two weeks after the course will conclude they have lost everything. People who measure it by how they handled the same triggering conversation they used to lose are usually telling a different story. The structural shift is not loud, which is the only reason the felt-state crash feels load-bearing.",
  },
  {
    q: "Should I sign up for another course right away to recover the feeling?",
    a: "If the motivation is to recreate the felt-state of the retreat, the tradition does not endorse that and neither would I. Goenka's standing recommendation is one course per year for old students, and the intent is depth, not relief. Signing up for a second course while still in the comparison-trap phase usually produces a course that is mostly an attempt to reproduce a memory. The honest fix for the felt-state collapse is not another course, it is time. The honest fix for the structural-shift fading is daily practice. The 10-day course is for deepening, not for re-experiencing. Course logistics live at https://www.dhamma.org/en-US/courses/search.",
  },
  {
    q: "Does the crash get easier after the first course?",
    a: "Yes, mostly because the comparison trap loses its grip. By a third course the mind has watched the felt-state collapse twice already and has stopped reading the collapse as a verdict. The peak is still real, the trough is still real, but the interpretation that the trough means the course did not work has lost most of its weight. The other thing that gets easier is the planning. After my third course I started building in two buffer days before going back to work, not as advice but as logistics. The recalibration window is real and the calendar can hold it.",
  },
  {
    q: "What does the tradition itself say about post-course integration?",
    a: "The tradition does not focus on the felt-state at all. It treats post-course difficulty the same way it treats on-course difficulty: as a signal to return to the practice and, if it persists, to talk to the assistant teacher. The structural supports are group sittings for old students at local centers, short courses where they exist, the once-a-year 10-day course recommendation, and the recorded discourses available to old students at https://discourses.dhamma.org. None of those are felt-state interventions. They are the supports the tradition has built for exactly the situation the keyword describes.",
  },
  {
    q: "When should I worry that something more than the normal crash is going on?",
    a: "When the low mood does not move after three or four weeks, when there are intrusive thoughts that frighten you, when sleep has collapsed and not recovered, when you feel disconnected from reality in a way that does not pass, or when you have any thought of self-harm. None of these are normal reentry phenomena and none of them belong on a website. Talk to a therapist, talk to the assistant teacher at the center where you sat, and read the on-site notes about risks at /guide/risks-and-safety as a pointer, not as guidance. A blog post is not the right input for that decision, including this one.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Post-Retreat Reentry Crash" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Post-Retreat Reentry Crash", url: PAGE_URL },
];

const reentryMetrics = [
  {
    value: 6,
    suffix: "",
    label: "courses sat across three centers",
  },
  {
    value: 945,
    suffix: "+",
    label: "days of daily practice and counting",
  },
  {
    value: 4,
    suffix: " wk",
    label: "outer envelope of the felt-state collapse",
  },
  {
    value: 2,
    suffix: " days",
    label: "buffer days I now plan in after a course",
  },
];

const relatedPosts = [
  {
    title: "After Vipassana: Day 11 Survival, Post-Retreat Depression and Integration",
    href: "/guide/after-retreat",
    excerpt:
      "The day-by-day arc of reentry across six 10-day courses, the predictable emotional patterns, and the structural anchors the tradition recommends.",
    tag: "Guide",
  },
  {
    title: "Restarting Your Practice After a Long Gap",
    href: "/guide/restarting-your-practice",
    excerpt:
      "Most old students stop sitting at some point. The traditional paths back: group sittings, short courses, and the 10-day course.",
    tag: "Guide",
  },
  {
    title: "Vipassana Retreat Overintellectualizing: The Trap That Peaks On Day 4",
    href: "/t/vipassana-retreat-overintellectualizing",
    excerpt:
      "The four shapes the over-thinking takes during a course, when each one peaks, and what changes between a first and a sixth course.",
    tag: "Reflection",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Post-Retreat Reentry Crash: What's Actually Crashing And What Isn't",
    description:
      "The felt-state of a 10-day Vipassana course recalibrates to baseline over 1 to 4 weeks. The structural shift the course produces usually does not collapse on the same schedule. A non-teaching reflection from six 10-day courses and 945+ days of daily practice on the actual shape of the crash.",
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

      <header className="max-w-4xl mx-auto px-6 pt-6 pb-4">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900">
          Post-retreat reentry crash: what is actually crashing, and what is not
        </h1>
        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          The felt-state of a 10-day Vipassana course (the bliss, the
          vividness, the sense that the world is unusually present) is on a
          predictable recalibration schedule the moment you leave the center.
          Most people who write about the crash treat it as a single event.
          From the inside it is two events on two clocks, and confusing them
          is the actual mistake. This page does not teach the technique. It
          describes what the felt-state crash looks like, what it does not
          take with it, and where the operational questions belong.
        </p>
      </header>

      <ArticleMeta
        author="Matthew Diakonov"
        authorRole="Written with AI"
        datePublished={PUBLISHED}
        readingTime="8 min read"
      />

      <section className="max-w-4xl mx-auto px-6 pt-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Direct answer (verified 2026-05-07)
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            The reentry crash is the felt-state of the retreat (the bliss,
            the heightened senses, the present-moment feeling) recalibrating
            to ordinary baseline. The peak is usually 24 to 72 hours after
            leaving the center, the trough usually lands between Day 5 and
            Day 14, and most of it is resolved by Week 4. It is a normal,
            bounded response to the inputs changing, and it is separate from
            any structural shift the course produced, which does not follow
            that timeline. The official structural facts about the course
            (silence, segregation, absence of writing and phones, schedule)
            are documented at{" "}
            <a
              href="https://www.dhamma.org/en/about/code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              dhamma.org/en/about/code
            </a>
            . Operational questions about practice belong with an authorized
            assistant teacher and with the recorded discourses at{" "}
            <a
              href="https://discourses.dhamma.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              discourses.dhamma.org
            </a>
            , not with a website. If a clinical-shape low mood persists
            beyond three or four weeks, that is a different conversation
            and belongs with a therapist.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          A note on what this page is and is not
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          In the Goenka tradition the technique is transmitted at a 10-day
          residential course by an authorized teacher. What you actually do
          during a sitting, how to work with a particular sensation, how to
          respond to a difficulty on the cushion, all of those questions
          belong with an assistant teacher. This page is written by an old
          student of six 10-day courses with 945+ days of daily practice.
          It is reflective, not instructional. If a sentence here reads as
          advice on how to sit, read past it. The instructions are given at
          the course.
        </p>
      </section>

      <MetricsRow metrics={reentryMetrics} />

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Two clocks, not one
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The thing almost every account of the reentry crash gets wrong is
          treating the crash as a single state with a single timeline. From
          the inside, what happens after a course is at least two distinct
          processes running on two different clocks, and they are not in
          phase.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The first clock, the loud one, is the felt-state clock. This is
          the felt experience of the retreat conditions: the unusual
          vividness of light and sound on Day 10, the sense of slowness
          inside ordinary moments, the feeling of being present without
          effort, the unfamiliar quality of food, the sometimes startling
          intensity of a stranger&apos;s face. All of this is downstream of
          the actual conditions of the course. The schedule, the silence,
          the absence of phones, the absence of conversation, the assigned
          room, the assigned diet, the absence of decisions. None of those
          conditions exist after Day 10. The felt-state is the experiential
          shadow of the conditions, and the moment the conditions go, the
          shadow goes with them. That is the felt-state collapse. It runs
          its course over roughly one to four weeks and then it is over.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The second clock, the quiet one, is the structural-shift clock.
          This is whatever change the course produced underneath the
          felt-state: a wider gap between a provocation and a reaction, a
          shorter latency on noticing the mind has wandered, a less
          claustrophobic relationship to ordinary discomfort, a willingness
          to sit with something for an extra second instead of acting on
          it. None of that has the texture of the felt-state. None of it
          glows. It does not arrive as a feeling. It arrives as the absence
          of an old reaction, which is exactly the kind of thing the mind
          is bad at noticing in real time. This clock does not follow the
          felt-state clock. It runs on its own schedule, mostly downstream
          of the daily practice you keep or do not keep after the course.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The reentry crash is the first clock running its course. The
          conclusion that follows the crash for most people, that they have
          lost everything they gained, comes from reading the first clock
          as a measure of the second. It is not a measure of the second.
        </p>
      </section>

      <ProofBanner
        metric="Two clocks"
        quote="People who measure the practice by how vivid the world looks two weeks after the course will conclude they have lost everything. People who measure it by how they handled the same triggering conversation they used to lose are usually telling a different story."
        source="Author note, six 10-day courses across Dhammamanda, CYO, and North Fork"
      />

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          What the felt-state collapse actually looks like
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The felt-state collapse is unpleasant, but it is not formless.
          The arc is repeatable enough that after my third course I started
          planning around it instead of arguing with it. Roughly: a peak on
          Days 1 to 3 after leaving the center where the world feels
          unusually open, a steady contraction over the first week as
          ordinary inputs return, a trough somewhere between Day 5 and Day
          14 where flatness or irritability is most likely to land, and a
          gradual return to ordinary baseline by Week 4. Some details
          cluster reliably. Sleep is often the first thing to wobble in
          the second week. Food sensitivity is often the first thing to
          come back in the third. Patience for small talk is the last
          thing to recover and sometimes does not fully recover at all,
          which is its own data point.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          None of this is universal. First courses, second courses, and
          courses where unresolved material surfaced all have their own
          shapes. But the broad envelope is consistent enough across old
          students that recognizing it removes most of its charge. The
          piece of the felt-state crash that is genuinely difficult is
          usually not the trough itself. It is the conclusion the mind
          reaches at the bottom of the trough, which is almost always some
          version of the course did not work, the practice does not
          survive contact with real life, and I have lost what I came home
          with.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The four felt-state comparison traps
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The felt-state crash is unpleasant. The interpretation of the
          felt-state crash is what makes people quit. Across six courses
          and the conversations I have had with other old students, the
          interpretation tends to land in one of four shapes during the
          first month off-site.
        </p>
        <ol className="mt-5 space-y-5 text-zinc-700">
          <li>
            <strong className="text-zinc-900">
              The Memory-As-Meter trap.
            </strong>{" "}
            You compare every moment of the next two weeks to the most
            vivid moment of the course and treat the gap as evidence of
            backsliding. The course peak was a peak under specific
            conditions. The conditions are gone. The comparison is not
            structurally fair, and it is the single most common shape the
            interpretation takes.
          </li>
          <li>
            <strong className="text-zinc-900">
              The Recreate-The-Conditions trap.
            </strong>{" "}
            You try to rebuild the retreat at home: long sittings, partial
            silence, restricted screens, restricted food. Some of that is
            useful in moderation. Most of it is an attempt to reproduce
            the felt-state, which cannot be reproduced from outside the
            course because the conditions cannot be reproduced from
            outside the course. The effort tends to produce frustration,
            not depth.
          </li>
          <li>
            <strong className="text-zinc-900">
              The All-Or-Nothing-Streak trap.
            </strong>{" "}
            You miss a sitting in week two and conclude the practice is
            broken. The Goenka tradition does not treat lapses as
            terminal, and most long-term old students have years of gaps
            in their record. Treating a missed morning as a referendum on
            the practice is almost always the felt-state crash dressed up
            in the language of self-discipline.
          </li>
          <li>
            <strong className="text-zinc-900">The I-Was-Wrong trap.</strong>{" "}
            You start to suspect the felt-state of the course was an
            artifact, that what felt true was not true, that the whole
            thing was a kind of dissociation. Some part of the felt-state
            was indeed an artifact of the conditions. That observation is
            correct. The conclusion that the structural shift was also an
            artifact does not follow. Different processes, different
            clocks.
          </li>
        </ol>
        <p className="mt-5 text-zinc-700 leading-relaxed">
          Naming the four shapes does most of the work of defanging them.
          They are not insights about the practice. They are the shape the
          comparison takes when you are using the wrong meter.
        </p>
      </section>

      <GlowCard>
        <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
          The anchor fact
        </p>
        <p className="mt-3 text-zinc-800 leading-relaxed">
          After the third course I stopped tracking the felt-state at all.
          The peak happens on its own, the trough lands on its own, the
          recovery happens on its own, and chasing the felt-state was the
          single most reliable way to convince myself the practice had
          stopped working. I now build in two buffer days before going
          back to work after a course, treat the felt-state arc as logistics
          rather than as a referendum, and read the structural-shift clock
          off behavior in real provocations rather than off how vivid a
          tree looks on the drive home. None of that is advice. It is the
          shape of the recalibration after sitting six 10-day courses
          across three centers (Dhammamanda in NorCal, CYO in the Bay Area,
          North Fork in central California).
        </p>
      </GlowCard>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Where the structural shift actually shows up
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The structural shift is the part of the course that the
          felt-state crash cannot take with it, and it is the part that
          almost no first-time account describes well. Two reasons. First,
          the shift does not feel like anything. It is the absence of an
          old reaction, which is the kind of thing the mind only catches
          retroactively. Second, the only place the shift becomes visible
          is in real provocation, and provocation is by definition rare
          enough to be hard to track in real time.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The honest version is that the markers tend to be small,
          domestic, and unflattering to repeat in public. The conversation
          you used to escalate with your partner that you let go this
          time. The email that used to take you twenty minutes of
          re-reading before sending that you sent in two. The traffic
          incident that used to ruin a morning that you noticed and let
          pass. None of that produces a felt high. Most of it would not
          even survive being written down without sounding banal. The
          banality is the point. The structural shift is shaped like the
          absence of a familiar drama, not like the presence of a new
          state. It is exactly the kind of thing the felt-state meter is
          incapable of detecting.
        </p>
      </section>

      <InlineTestimonial
        quote="Two weeks after my second course I was certain I had lost the entire thing. The vividness was gone, the present-moment feeling was gone, and my partner asked me a question that would normally have started a fight, and I noticed the start of the fight in my chest before it left my mouth, and I just answered the question. I had no felt-sense of having gained anything. My partner did. The practice was not in the felt-state I was missing. It had moved into the gap I was no longer noticing."
        name="An old student of six 10-day courses"
        role="Author of this page"
        stars={5}
      />

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          What the tradition has built for this exact week
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The Goenka tradition does not focus on the felt-state at all.
          The structural supports it has built for the post-course window
          are unromantic. Old-student group sittings at local centers are
          held weekly or biweekly in many regions, and the in-person
          accountability of sitting with other old students is one of the
          most reliable ways to keep the daily sit alive during the
          recalibration weeks. Short courses (where they are offered) and
          the standing recommendation of one 10-day course per year are
          the longer-term structural supports. The recorded discourses are
          available to old students at{" "}
          <a
            href="https://discourses.dhamma.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            discourses.dhamma.org
          </a>{" "}
          and the official course code at{" "}
          <a
            href="https://www.dhamma.org/en/about/code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            dhamma.org/en/about/code
          </a>{" "}
          documents the structural decisions that produced the conditions
          you are now recalibrating away from. None of these are designed
          to recreate the felt-state of the retreat. They are designed to
          keep the daily practice alive while the felt-state recalibrates.
          That distinction is the entire point.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          For a long-form site account of the same window, the existing{" "}
          <Link
            href="/guide/after-retreat"
            className="text-teal-700 underline hover:text-teal-900"
          >
            after-retreat guide
          </Link>{" "}
          covers the day-by-day arc, the relational pieces, and the
          markers for when the crash is and is not the normal shape. If
          the practice has already lapsed, the{" "}
          <Link
            href="/guide/restarting-your-practice"
            className="text-teal-700 underline hover:text-teal-900"
          >
            restarting your practice
          </Link>{" "}
          notes describe the traditional paths back. Course logistics
          themselves (dates, locations, application) live at{" "}
          <a
            href="https://www.dhamma.org/en-US/courses/search"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            dhamma.org/en-US/courses/search
          </a>
          , not here.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          When the crash is not the normal felt-state crash
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Everything above describes the ordinary recalibration after a
          course in a healthy student. It is a different conversation
          when the post-course period includes insomnia that does not
          resolve, intrusive thoughts that frighten you, dissociation,
          flashbacks, a felt sense that something has gone wrong inside
          you, or any thought of self-harm. None of that is normal
          reentry. None of it should be ridden out from a blog post. The
          dhamma.org application form asks about mental-health history
          for a reason, and the assistant teachers, the course manager,
          and a therapist (if you have one) are the right inputs in that
          order. The crisis-resource and risks notes on this site live at{" "}
          <Link
            href="/guide/risks-and-safety"
            className="text-teal-700 underline hover:text-teal-900"
          >
            /guide/risks-and-safety
          </Link>{" "}
          as a pointer, not as guidance. The right input for that
          decision is not a stranger&apos;s blog post, including this one.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          What this page is for
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The page exists because almost every account of the reentry
          crash treats it as a single event needing generic self-care,
          and almost every old student I have compared notes with reads
          the crash in two pieces: a felt-state collapse on a fast clock,
          and a structural shift on a slower one. Bridging that gap is
          most of what the page can honestly do. It is not the technique,
          it is not a substitute for the assistant teacher, and it is not
          a recommendation about whether to sit your next course. It is
          one old student saying to another, on Day 9 of your post-course
          week, that the felt-state going does not mean the rest is going
          with it. Different processes, different clocks. The kindest
          thing to do with the crash is to recognize it, plan around it,
          keep sitting, and stop using the felt-state as the meter.
        </p>
      </section>

      <RelatedPostsGrid
        title="Keep reading"
        subtitle="Related notes from this site"
        posts={relatedPosts}
      />

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          section="reentry-crash-footer"
          heading="Compare notes from your own reentry"
          description="A short call about the post-course week, daily practice that is wobbling, or being paired with a fellow old student through the practice-buddy matching program on this site. Peer to peer, not teacher to student."
        />
      </section>

      <section
        className="max-w-4xl mx-auto px-6 pt-12 pb-16"
        id="faq"
      >
        <FaqSection items={faqs} heading="Frequently asked questions" />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="reentry-crash-sticky"
        description="Compare notes about your post-course week"
      />
    </article>
  );
}
