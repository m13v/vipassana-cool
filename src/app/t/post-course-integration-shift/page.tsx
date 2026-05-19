import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ProofBanner,
  StepTimeline,
  BentoGrid,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/post-course-integration-shift";
const PUBLISHED = "2026-05-18";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Post course integration: the week-by-week shift across the four weeks after a 10 day course",
  description:
    "Across six 10-day courses, the post-course shift clusters into four predictable weeks. Week 1 the sensory amplification fades, Week 2 the felt-state collapses and the morning sit quietly gets dropped, Week 3 a brief reactivity gap becomes visible, Week 4 only the structural shift remains. A ledger from 6 courses and 945+ days of daily practice.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Post-course integration: the week-by-week shift after a 10 day Vipassana course",
    description:
      "Four weeks, four predictable shifts. The sensory crash. The felt-state collapse. The visible reactivity gap. The structural shift you only see once the high is gone.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The week-by-week shift after a 10 day Vipassana course",
    description:
      "Six courses watching the same arc. Week 1 sensory fade. Week 2 felt-state collapse. Week 3 reactivity gap. Week 4 the part that actually survives.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "What does post course integration mean, and what is the shift this page is talking about?",
    a: "Post-course integration is the period after leaving a 10-day Vipassana course when the conditions of the course (silence, schedule, segregation, no phones, no decisions) are gone and the practitioner has to live with what the course left them with. The shift this page describes is the change a returning old student goes through over the first four weeks back in ordinary life. It is not a single shift; it is at least two clocks running at once, a fast felt-state clock that resolves in three to four weeks and a slow structural clock that is only visible months later. Operational questions about how to practice belong with an authorized assistant teacher and with dhamma.org, not with this page.",
  },
  {
    q: "Is the four-week framing accurate, or is integration longer than that?",
    a: "Four weeks is the envelope for the felt-state part of the shift. The structural part keeps moving for months. In my own logs across six courses, the felt-state collapse is mostly resolved by Week 4. What survives after Week 4 (a wider gap between trigger and reaction, a faster recognition of mind-state, an earlier exit from a spiraling thought loop) keeps changing for a long time, especially if the daily sit survives Week 2. The Goenka tradition does not centralize the four-week framing at all; the standing recommendation is daily practice and one 10-day course per year, full stop. The four-week ledger here is descriptive, not prescriptive.",
  },
  {
    q: "Why does the morning sit get quietly dropped in Week 2 specifically?",
    a: "Two things land on the same week. The felt-state of the course is gone, which removes the felt reward that was carrying the morning sit through Week 1. And ordinary life has fully returned by Day 8 to Day 14 (work, errands, social schedule, the screen), which means the morning has competing inputs again. The mind reads the absence of the course felt-state as the practice not working anymore, and the calendar reads the morning as the cheapest slot to give up. Week 2 is the trough described on /t/post-retreat-reentry-crash, and it is the week the morning sit is structurally most vulnerable. People who plan for Week 2 in advance usually survive it. People who assume motivation will carry them through Week 2 usually do not.",
  },
  {
    q: "What is the difference between the felt-state shift and the structural shift?",
    a: "The felt-state shift is what most people mean when they talk about post-course integration. It is the recalibration of bliss, vividness, present-moment quality, and the sense of clarity back to ordinary baseline. It is loud, it is on a tight clock (3 to 4 weeks), and it is the part that fades. The structural shift is quieter and slower. It is the widening of the gap between a provocation and a reaction. It is the speed at which the mind recognizes itself in a thought loop. It is the earlier exit from anger or anxiety. The structural shift survives the felt-state collapse, but it is not legible until the felt-state is gone, which is part of why Week 4 feels different from Week 2 even though nothing dramatic has changed.",
  },
  {
    q: "Why does the reactivity gap appear in Week 3 and not earlier?",
    a: "Honestly, I do not know with certainty. My own guess from watching six arcs is that Weeks 1 and 2 are too noisy. Week 1 has the felt-state of the course covering everything, so the reactivity gap is there but it reads as part of the post-course glow. Week 2 has the felt-state crash covering everything, and the mind cannot easily tell whether a slower reaction is the practice or just exhaustion. By Week 3 both extremes have eased, ordinary life is back to ordinary pace, and the gap becomes briefly visible against a normal baseline. It is the same gap that was there in Week 1; the difference is the lighting.",
  },
  {
    q: "Does the same arc repeat after every course?",
    a: "Mostly yes, with the edges softening. By a third or fourth course the felt-state crash still happens but the interpretation that the crash means the practice did not work has lost almost all of its weight. The mind has watched the arc enough times to recognize it as the arc. The morning sit becomes harder to lose in Week 2 because the mind no longer reads Week 2 as a verdict. The reactivity gap still shows up around Week 3, although by the fifth or sixth course it shows up sooner because the daily sit was already in place before the course. The arc is consistent. The interpretation of the arc is what changes with repetition.",
  },
  {
    q: "What does this page not solve?",
    a: "It does not solve the case where the surfaced material from a course is genuinely beyond what daily practice can hold (clinical-shape low mood that persists past Week 4, intrusive thoughts, sleep collapse, anything in the direction of self-harm ideation). That is a conversation that belongs with a therapist and with the assistant teacher at the center where you sat. The on-site notes at /guide/risks-and-safety point at that conversation; they do not substitute for it. It also does not solve the case where the daily sit was never set up before the course ended; once Week 2 lands without a structural anchor, willpower alone rarely brings the sit back.",
  },
  {
    q: "Where do operational questions about technique go?",
    a: "With an authorized assistant teacher at the center where you sat, and with the recorded discourses for old students at https://discourses.dhamma.org. Course logistics live at https://www.dhamma.org/en-US/courses/search. This page is reflective, not instructional. Anything about how to sit, what to work with on the cushion, how long to sit, or what to do with a particular difficulty belongs with the tradition, not with a website.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Post-course integration shift" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Post-course integration shift", url: PAGE_URL },
];

const weekSteps = [
  {
    title: "Week 1: the sensory amplification fades",
    description:
      "Days 1 to 7 after leaving the center. Lights, sounds, food, and skin contact are loud for the first 24 to 72 hours and then begin to ease. The felt-state of the course is still on, so most things still feel meaningful. The morning sit is still easy because the schedule has just ended; the body remembers 4am and the mind wants the cushion. If a daily commitment is going to be set up, this is the week to set it up. By Day 5 to Day 7 the sensory edge is mostly gone and ordinary life is louder than it sounded on Day 11.",
  },
  {
    title: "Week 2: the felt-state collapses, the morning sit gets dropped",
    description:
      "Days 8 to 14. The peak is gone. The trough described on the reentry-crash page lands somewhere in this window. The mind reads the absence of the course felt-state as the practice failing, even though nothing about the practice has actually changed. Work has fully returned. The morning sit goes from 'easy because the body remembers' to 'a thing to negotiate against a real schedule.' Most of the people who quit do it here, often without noticing they quit. The phrase 'I will start back up next week' is the sound of Week 2.",
  },
  {
    title: "Week 3: a reactivity gap becomes briefly visible",
    description:
      "Days 15 to 21. The felt-state crash has eased, ordinary life is back to ordinary pace, and against a normal baseline the change is briefly legible. A conversation that used to spiral does not. The first sip of coffee gets noticed. An old trigger sits a beat longer before it becomes anger. This is the part most people miss because they are still looking for the felt-state of the course, which is gone. The gap is the same one that was there in Week 1; only the lighting has changed.",
  },
  {
    title: "Week 4: the felt-state is gone, only the structural shift remains",
    description:
      "Days 22 to 28. The recalibration is complete. The world looks ordinary again. People who measure the practice by how vivid the world looked two weeks ago will conclude they lost everything. People who measure it by how they handled the same triggering conversation they used to lose are usually telling a different story. The structural shift is quiet, which is the only reason the felt-state collapse felt load-bearing. From here on, what survives is whatever the daily sit can hold.",
  },
];

const tellsCards = [
  {
    title: "Fades in Week 1 to Week 2",
    description:
      "The loud sensory edge. The unprompted present-moment quality. The sense of having figured something out. The conviction that everything is clear and obvious. The desire to tell everyone about the course. The unusual ease in long silences.",
    accent: false,
  },
  {
    title: "Visible only in Week 3 to Week 4",
    description:
      "The slightly wider gap between trigger and reaction. The earlier exit from a thought loop. The faster recognition of a mind-state. A small drop in the urge to defend or rebut. None of it is loud. All of it is the part that survives if the daily sit survives.",
    accent: true,
  },
  {
    title: "Most vulnerable structural surface",
    description:
      "The morning sit in Week 2. The felt-state is gone, ordinary life is back, motivation is unreliable, and the mind has its first chance to read the absence of bliss as evidence the practice does not work. The single most common time the daily sit gets dropped is Day 8 to Day 14.",
    accent: false,
  },
];

const relatedPosts = [
  {
    title:
      "Post-retreat reentry crash: what is actually crashing, and what is not",
    href: "/t/post-retreat-reentry-crash",
    excerpt:
      "Two clocks, not one. The felt-state of a course fades on a 1 to 4 week schedule. The structural shift does not. Confusing the two is the trap.",
    tag: "Reflection",
  },
  {
    title:
      "Post-course integration is one calendar entity, not a four-week project",
    href: "/t/post-course-integration-into-daily-life",
    excerpt:
      "The integration articles describe what happens in the absence of a daily Meet with another old student. The architectural argument from the matching service repo.",
    tag: "Architecture",
  },
  {
    title: "After Vipassana: daily practice, rewiring habits, and the long work",
    href: "/t/after-vipassana-daily-practice-rewire-habits",
    excerpt:
      "The course is the seed, not the tree. What habit rewiring actually takes over the months following a 10-day course, and how to sustain it past Week 2.",
    tag: "Reflection",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Post-course integration: the week-by-week shift across the four weeks after a 10 day Vipassana course",
    description:
      "A week-by-week ledger of the predictable shifts in the four weeks after a 10-day Vipassana course, based on observing the same arc across 6 of my own courses. The fast felt-state clock and the slow structural clock, named separately.",
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
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
          The post-course shift, week by week
        </h1>
        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          Six 10-day Vipassana courses across three centers, 945+ days of daily
          practice. The shift in the four weeks after a course is not one thing
          and it does not move on one clock. The felt-state of the course
          collapses on a tight schedule and the structural shift moves on a
          slower one. Below is what each of the four weeks tends to look like,
          drawn from watching the same arc six times.
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
            Direct answer (verified 2026-05-18)
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            Across six 10-day courses the post-course shift clusters into four
            predictable weeks. Week 1 the sensory amplification fades. Week 2
            the felt-state collapses and the morning sit quietly gets dropped.
            Week 3 a brief gap between provocation and reaction becomes
            visible. Week 4 the felt-state is gone and only the structural
            shift remains. The Goenka tradition&apos;s framing of old-student
            practice lives at{" "}
            <a
              href="https://www.dhamma.org/en/about/code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              dhamma.org/en/about/code
            </a>
            . Anything operational about how to sit belongs with an authorized
            assistant teacher, not with this page.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Two clocks, not one
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The thing that confuses most accounts of post-course integration is
          that there are two separate shifts happening at once and they run on
          different timetables. The fast clock is the felt-state of the course:
          the bliss, the vividness, the present-moment quality, the sense of
          clarity. That clock has a tight envelope of three to four weeks. The
          slow clock is the structural shift: the slight widening of the gap
          between a provocation and a reaction. That clock keeps moving for
          months. Most people watch the fast clock and conclude the slow one
          stopped too, because the slow one is too quiet to register while the
          fast one is loud.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The ledger below is the fast clock. The structural shift is named in
          the prose underneath each week, where it is visible, but it does not
          have a tidy week number because it does not move tidily.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-10">
        <StepTimeline
          title="The four-week ledger"
          steps={weekSteps}
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-2">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The tells that fade and the tells that survive
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          When people return from a course and try to read whether anything
          changed, they almost always look in the wrong place. The loud part
          (sensory amplification, present-moment quality, the conviction that
          something is now obvious) is the part with a four-week clock on it.
          The quiet part (a slightly slower reaction, an earlier mind-state
          recognition) is the part that survives. Sorting them takes some
          practice. The grid below is the rough sort I use after each course.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6">
        <BentoGrid cards={tellsCards} />
      </section>

      <ProofBanner
        metric="6 / 6"
        quote="Six courses watching the same arc. The felt-state collapse always lands in Week 2. The reactivity gap always shows up around Week 3 once ordinary life has resumed and the lighting has changed. The Week 4 quiet is not absence; it is the structural shift becoming legible only because the felt-state is finally gone."
        source="Author log across six 10-day Vipassana courses at Dhammamanda (NorCal), CYO (Bay Area), and North Fork (Central CA), 2026-05-18"
      />

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The Week 2 problem
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          If only one of these four weeks gets attention before a course, the
          honest answer is Week 2. It is the structurally most vulnerable
          window and the one where the daily sit is most often lost. Two things
          stack: the felt-state of the course is gone, which removes the felt
          reward that carried the morning through Week 1, and ordinary life is
          fully back, which means the morning has competing inputs again. The
          mind reads the absence of the course felt-state as the practice not
          working anymore, and the calendar reads the morning as the cheapest
          slot to give up. The phrase &quot;I will start back up next week&quot;
          is the sound of Week 2.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The way I have come to think about it after six courses is that
          Week 2 is decided before the course ends, not during it. If a daily
          commitment is already set up (a recurring morning sit with another
          old student on a shared Meet, a weekly group sitting at a local
          center, an assistant teacher whose office hours are on the calendar)
          Week 2 is uncomfortable but the practice is not negotiated. If
          nothing is set up before leaving the center, Week 2 is negotiated
          every morning, and the mind in Week 2 is not the mind you want
          renegotiating anything. The architecture-vs-willpower argument lives
          on{" "}
          <Link
            href="/t/post-course-integration-into-daily-life"
            className="text-teal-700 underline hover:text-teal-900"
          >
            the calendar-entity page
          </Link>
          ; the practical implication for this ledger is just that Week 2 is
          the week to plan for.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          What changes after the four weeks are over
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          After Week 4 the felt-state crash is done. What is left is the slow
          clock, and the slow clock does not have weeks; it has months. A few
          things I have noticed in my own logs across the months after each of
          the six courses. The gap between trigger and reaction keeps widening
          slightly, in a way that is only visible by comparing the same
          recurring trigger across two courses. The daily sit gets cheaper to
          start, mostly because the morning has stopped being a negotiation.
          The conviction that a felt-state high is what the practice is for
          gradually erodes. The recorded discourses for old students at{" "}
          <a
            href="https://discourses.dhamma.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            discourses.dhamma.org
          </a>{" "}
          are the right place to take any operational question that came up
          during the four weeks. The Code of Discipline at{" "}
          <a
            href="https://www.dhamma.org/en/about/code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            dhamma.org/en/about/code
          </a>{" "}
          is what an old student commits to once the four-week shift is over.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The honest caveats
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The four-week ledger is descriptive, not prescriptive. It is what I
          have observed across my own six courses, not a course of treatment to
          run yourself through. The Goenka tradition does not centralize the
          four-week framing at all. It frames post-course support as daily
          practice, group sittings where local centers offer them, and one
          10-day course per year. Operational questions go to an authorized
          assistant teacher. Anything in the direction of a persistent
          clinical-shape low mood past Week 4, intrusive thoughts, sleep
          collapse, dissociation, or self-harm ideation is not on this clock at
          all. That is a conversation with a therapist and with the assistant
          teacher at the center where you sat. The on-site notes at{" "}
          <Link
            href="/guide/risks-and-safety"
            className="text-teal-700 underline hover:text-teal-900"
          >
            /guide/risks-and-safety
          </Link>{" "}
          are a pointer to that conversation, not a substitute for it. This
          page is reflective, not instructional, and I am a fellow practitioner,
          not a teacher.
        </p>
      </section>

      <FaqSection items={faqs} />

      <section className="max-w-3xl mx-auto px-6 pt-12 pb-8">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Plan your Week 2 before you leave the center"
          description="A short call to talk through the four-week ledger and what to set up before the felt-state of the course fades. Free, peer-to-peer, no teacher framing."
        />
      </section>

      <RelatedPostsGrid
        title="Related reading"
        subtitle="Other notes on the post-course window and what holds it together."
        posts={relatedPosts}
      />

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Plan for Week 2 before it lands."
      />
    </article>
  );
}
