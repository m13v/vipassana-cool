import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  BeforeAfter,
  AnimatedChecklist,
  OrbitingCircles,
  NumberTicker,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type RelatedPost,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/what-surfaces-meditation-practice";
const PUBLISHED = "2026-05-18";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title: "What Surfaces in Meditation Practice: The Honest Answer",
  description:
    "What surfaces when you sit is mostly ordinary mental traffic on rotation, not a ladder of insights. A descriptive reflection from six 10-day courses and the better part of a thousand logged daily sits. Not instruction.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "What Surfaces in Meditation Practice: The Honest Answer",
    description:
      "Most of what comes up when you meditate is the same handful of ordinary things on loop. A reflective, non-teaching look at what actually surfaces, and why no sit predicts the next.",
    url: PAGE_URL,
    type: "article",
    publishedTime: PUBLISHED,
  },
  twitter: {
    card: "summary_large_image",
    title: "What Surfaces in Meditation Practice",
    description:
      "It is mostly the to-do list, replayed conversations, and boredom on rotation. The dramatic stuff is rare. A reflection from six courses.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "https://vipassana.cool" },
  { label: "Guides", href: "https://vipassana.cool/guide" },
  { label: "What surfaces in meditation practice" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "What surfaces in meditation practice", url: PAGE_URL },
];

const faqs: FaqItem[] = [
  {
    q: "What actually comes up when you meditate?",
    a: "In honest terms, mostly ordinary mental traffic on repeat: tomorrow's plans, replayed conversations, a song stuck in your head, the state of your knee or your back, drowsiness, and plain boredom. Stronger material like a wave of grief, anger, or an old memory does come up, but far less often than the popular write-ups suggest. The texture of a typical sit is unremarkable, and that is normal rather than a sign anything is wrong.",
  },
  {
    q: "Is it bad that nothing dramatic happens when I sit?",
    a: "No. The idea that meditation should produce vivid experiences or steady bliss is the single most common expectation that does not match reality. Old students talk constantly about how ordinary and even dull most sittings feel. A quiet, uneventful sit is not a wasted one, and a dramatic sit is not a better one. Neither tells you much about the next day.",
  },
  {
    q: "Why do old memories and emotions surface during meditation?",
    a: "When the usual stream of input and distraction drops away, material that normally stays in the background has more room to come forward, and students commonly report emotions and old memories arriving unexpectedly, especially in longer sits. This page only describes that this happens. How to hold such material inside practice is explained by the teacher during a 10-day course and afterward by an assistant teacher, not on a website.",
  },
  {
    q: "Does what surfaces get better or deeper over time?",
    a: "It is worth being careful with the word better. Practice is not a ladder where each sit clears a higher rung. Sittings stay variable for years: some turbulent, some blank, some boringly ordinary. What tends to change is structural and shows up off the cushion, like a slightly wider gap between a provocation and your reaction, rather than as a more impressive sit. Measuring practice by how a sit felt is the trap the tradition warns against most often.",
  },
  {
    q: "What if something heavy or alarming surfaces?",
    a: "If difficult emotional material, intrusive memories, dissociation, panic, or distress beyond ordinary discomfort comes up, the right channels are clear. Talk to an authorized assistant teacher at your nearest Vipassana center, who is the correct first contact for any question about your practice, and also seek a qualified mental-health professional if the distress is clinical. A meditation resource site is not the place to work that through.",
  },
  {
    q: "Should I write down what comes up in each sit?",
    a: "That is a personal choice, not something this site prescribes. Worth knowing: the printable daily sit log on vipassana.cool deliberately has no field for what surfaced or how the sit went. It records only that you sat, with no duration and no streak count. The design assumes that grading sittings by their content is the habit most likely to pull a practice off course.",
  },
];

const relatedPosts: RelatedPost[] = [
  {
    title: "Sensations and experiences students commonly report",
    href: "https://vipassana.cool/guide/sensations-and-experiences",
    excerpt:
      "A descriptive, non-teaching look at the physical and emotional phenomena students talk about, and why the range is so wide.",
    tag: "Guide",
  },
  {
    title: "Memory after a Vipassana retreat: why the ten days blur",
    href: "https://vipassana.cool/t/memory-after-vipassana-retreat",
    excerpt:
      "Old memories surfacing during a course is one of three different things people mean by memory after a retreat. Here is how they sort out.",
    tag: "Reflection",
  },
  {
    title: "The post-retreat reentry crash: what is actually crashing",
    href: "https://vipassana.cool/t/post-retreat-reentry-crash",
    excerpt:
      "When a lot surfaces during a course, the days after can feel like a crash. What is really happening, and what is not.",
    tag: "Reflection",
  },
];

const rotationItems = [
  "Tomorrow's to-do list",
  "Replayed conversations",
  "The knee, the back, the itch",
  "Drowsiness and dullness",
  "Plain boredom",
  "An occasional emotional wave",
].map((label) => (
  <div
    key={label}
    className="rounded-full border border-teal-200 bg-white px-3 py-1.5 text-center text-xs font-medium text-zinc-700 shadow-sm"
  >
    {label}
  </div>
));

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline: "What Surfaces in Meditation Practice: The Honest Answer",
    description:
      "What surfaces when you meditate is mostly ordinary mental traffic on rotation, not a ladder of insights. A descriptive, non-teaching reflection from six 10-day courses and close to a thousand logged daily sits.",
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

      <div className="mx-auto max-w-3xl px-6 pt-10">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <header className="mx-auto max-w-3xl px-6 pt-6 pb-2">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          What surfaces in meditation practice
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-zinc-600">
          If you landed here wondering what is going to come up once you sit
          down and close your eyes, the honest answer is less dramatic than
          most articles make it sound. It is mostly the same handful of
          ordinary things, on rotation. This is a reflective, non-teaching
          look at what actually surfaces, written by a fellow practitioner,
          not a teacher.
        </p>
      </header>

      <div className="mx-auto max-w-3xl px-6">
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="7 min read"
        />
      </div>

      <section className="mx-auto max-w-3xl px-6 pt-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Direct answer (verified 2026-05-18)
          </p>
          <p className="mt-3 leading-relaxed text-zinc-800">
            What surfaces in meditation practice is overwhelmingly ordinary:
            tomorrow&apos;s plans, replayed conversations, a song you cannot
            shake, the state of your body, drowsiness, and plain boredom, all
            looping past in no particular order. Stronger material, a wave of
            emotion or an old memory, does come up, but far less often than the
            popular accounts imply. It changes sit to sit, no sitting predicts
            the next, and none of it is a score. The dramatic version of this
            question is the rare version.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-10">
        <div className="grid grid-cols-3 gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <div className="text-center">
            <div className="text-3xl font-semibold text-teal-600">
              <NumberTicker value={6} />
            </div>
            <p className="mt-1 text-xs text-zinc-500">10-day courses sat</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-semibold text-teal-600">
              <NumberTicker value={3} />
            </div>
            <p className="mt-1 text-xs text-zinc-500">centers</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-semibold text-teal-600">
              <NumberTicker value={981} suffix="+" />
            </div>
            <p className="mt-1 text-xs text-zinc-500">daily sits logged</p>
          </div>
        </div>
        <p className="mt-3 text-center text-xs text-zinc-500">
          This page is reflective experience from six 10-day courses across
          three centers and close to a thousand tracked daily sits. It is not
          instruction. For anything operational about practice, see{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            dhamma.org
          </a>{" "}
          and an authorized assistant teacher.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          A rotation, not a ladder
        </h2>
        <p className="mt-4 leading-relaxed text-zinc-700">
          Almost every popular guide on this topic frames what surfaces as a
          climb. First you meet your busy mind, then emotions release, then
          subtle states, then a quieter, deeper awareness. The implied shape is
          a staircase, and a good practice is one where you move up it.
        </p>
        <p className="mt-4 leading-relaxed text-zinc-700">
          That shape does not match what hundreds of logged sittings look like.
          What surfaces is not a staircase. It is a rotation. The same small
          set of ordinary mental events keeps coming around, in a different
          order each time, at different volumes, and that pattern holds for
          years. A sit where the planning mind runs the whole hour is not a
          lower rung than a calm one. It is just Tuesday.
        </p>
        <p className="mt-4 leading-relaxed text-zinc-700">
          This matters because a beginner who expects a staircase reads every
          ordinary sit as a stall. They are not stalling. They are seeing the
          rotation clearly, which is the thing actually happening.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-10">
        <BeforeAfter
          title="Two versions of what surfaces"
          before={{
            label: "What people expect",
            content:
              "The expectation, set by most articles and apps, is that sitting produces a steady drift toward calm, that buried emotional material plays back like a film you watch, and that each sit lands somewhere deeper than the last.",
            highlights: [
              "A steady climb toward calm",
              "Buried material plays back like a film",
              "Each sit deeper than the last",
            ],
          }}
          after={{
            label: "What actually shows up",
            content:
              "What practitioners report instead is the same handful of plain thoughts on loop, long stretches of unremarkable boredom, and sittings that swing widely from one day to the next with no pattern you can lean on.",
            highlights: [
              "The same ordinary thoughts, on loop",
              "Long stretches of plain boredom",
              "Sits that swing widely, no pattern",
            ],
          }}
        />
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-10">
        <h2 className="text-2xl font-semibold text-zinc-900">
          What is actually on the rotation
        </h2>
        <p className="mt-4 leading-relaxed text-zinc-700">
          Strip out the marketing language and the contents of a typical sit
          are mundane. Below is the loop most practitioners would recognize.
          Picture it circling one sitting: no item is a milestone, and the same
          ones keep coming back.
        </p>
        <div className="mt-8 flex justify-center">
          <OrbitingCircles
            center={
              <div className="rounded-full border border-teal-300 bg-teal-50 px-5 py-4 text-center">
                <div className="text-sm font-semibold text-teal-700">
                  One sit
                </div>
                <div className="text-[11px] text-zinc-500">~45 minutes</div>
              </div>
            }
            items={rotationItems}
            radius={150}
            duration={26}
          />
        </div>
        <p className="mt-8 leading-relaxed text-zinc-700">
          The to-do list and the replayed conversations make up the bulk of it.
          Body discomfort is constant company, especially early on, when you
          are not yet used to sitting still for long stretches. Drowsiness
          arrives uninvited, particularly in afternoon or evening sits.
          Boredom is not an interruption to the practice, it is a large,
          honest part of the experience. And then, less often, an emotional
          wave: a flash of grief, a spike of irritation, a memory you did not
          ask for.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Why no two sits match
        </h2>
        <p className="mt-4 leading-relaxed text-zinc-700">
          The most consistent thing students say about their own experience is
          how inconsistent it is. Sittings differ widely, even between
          consecutive days. One feels turbulent, the next blank, the next
          almost boringly ordinary. One is colored for the whole hour by a
          single ache, another is dominated by thoughts. People who sit 10-day
          courses describe an enormous range, and that range is part of what
          makes practice hard to explain from the outside.
        </p>
        <p className="mt-4 leading-relaxed text-zinc-700">
          The practical consequence is the part that surprises people most: a
          good sit does not predict the next one, and a hard sit does not
          either. You cannot bank a calm sitting and draw on it tomorrow. This
          is why the tradition warns, repeatedly, against rating sittings by
          how they felt. The variability is not noise sitting on top of the
          real practice. The variability is a large part of what the practice
          puts in front of you.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-8">
        <AnimatedChecklist
          title="What old students consistently say"
          items={[
            {
              text: "Most of a sit is ordinary mental traffic, not insight",
              checked: true,
            },
            {
              text: "No two sittings feel the same, even back to back",
              checked: true,
            },
            {
              text: "A good sit does not predict the next one",
              checked: true,
            },
            {
              text: "Boredom and a wandering mind are the norm, not a failure",
              checked: true,
            },
            {
              text: "A vivid sit is not a score, and a dull one is not a loss",
              checked: true,
            },
          ]}
        />
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-8">
        <h2 className="text-2xl font-semibold text-zinc-900">
          When something bigger surfaces
        </h2>
        <p className="mt-4 leading-relaxed text-zinc-700">
          None of this means meditation is always quiet. When the usual stream
          of input and distraction drops away, material that normally stays in
          the background has more room to come forward. Emotions and old
          memories arriving unexpectedly is one of the most commonly shared
          themes in old-student conversation, especially during longer
          sittings on a course. For most people most of the time this is
          manageable. Sometimes it is not, and it is worth being plain about
          where the line is.
        </p>
        <p className="mt-4 leading-relaxed text-zinc-700">
          This page describes that heavier material can surface. It does not,
          and cannot, tell you how to work with it. In the tradition this site
          reflects, how to hold whatever arises in practice is explained by the
          teacher inside a 10-day residential course, and afterward by an
          authorized assistant teacher. That is the correct channel, and it is
          a real one. If something alarming comes up, an assistant teacher at
          your nearest center is the first contact.
        </p>
        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm leading-relaxed text-zinc-800">
            If you are experiencing dissociation, panic, intrusive trauma
            material, or distress beyond ordinary discomfort, please also seek
            help from a qualified mental-health professional. A meditation
            resource site is not the place to diagnose or treat that. For
            anything operational about practice itself, the channels are{" "}
            <a
              href="https://www.dhamma.org"
              className="text-teal-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              dhamma.org
            </a>{" "}
            and an authorized assistant teacher.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The log on this site has no column for it
        </h2>
        <p className="mt-4 leading-relaxed text-zinc-700">
          Here is the most concrete way I can show you that what surfaces is
          not a score. Vipassana.cool publishes a free, printable{" "}
          <Link
            href="/daily-sit-log/print"
            className="text-teal-600 underline"
          >
            daily sit log
          </Link>
          . It is one sheet of paper for a whole year: 366 small squares, each
          one a day, each square split on the diagonal so the upper-left half
          is the morning sit and the lower-right half is the evening sit. After
          you sit, you draw one stroke in the half you completed.
        </p>
        <p className="mt-4 leading-relaxed text-zinc-700">
          What that log does not have is just as deliberate as what it does.
          There is no field for what came up. No box for how the sit felt. No
          duration. The printed instruction on the sheet says it directly: do
          not write the duration, do not count streaks, and if you miss a day,
          leave the square empty and sit tomorrow. The log records exactly one
          fact, that you sat, and refuses to record anything else.
        </p>
        <p className="mt-4 leading-relaxed text-zinc-700">
          That refusal is the whole point. The moment a log has a column for
          the contents of a sit, you start grading sittings, and grading
          sittings turns the rotation back into a staircase you think you are
          supposed to be climbing. A sheet with nothing but filled and empty
          squares cannot lie to you about progress. It can only tell you
          whether you showed up. Across close to a thousand of those squares,
          that is the only number that has held up.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          So what should you expect
        </h2>
        <p className="mt-4 leading-relaxed text-zinc-700">
          Expect ordinary. Expect the to-do list, the replayed argument, the
          ache, the drowsiness, the boredom, in some new order every day.
          Expect the occasional sit where something heavier moves through, and
          expect that you will not be able to schedule those or repeat them.
          Expect no two days to match. If you arrived hoping for a reliable
          climb toward calm, that specific expectation is the one thing almost
          certain not to surface, and letting go of it tends to make the actual
          practice a great deal easier to stay with.
        </p>
        <p className="mt-4 leading-relaxed text-zinc-700">
          The reason any of this is worth saying out loud is that the gap
          between the expected version and the real version is where most
          people quit. Not because the practice failed them, but because the
          ordinary rotation did not look like the staircase they were promised.
          It was never a staircase. It is allowed to be ordinary.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-12">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          section="what-surfaces-meditation-practice-footer"
          heading="The ordinary rotation is easier to sit with alongside someone"
          description="If you sat a 10-day course and want to talk through keeping a daily practice when the sits feel unremarkable, book a short call with a fellow old student."
        />
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-12 pb-4" id="faq">
        <FaqSection items={faqs} heading="Frequently asked questions" />
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-8 pb-16">
        <RelatedPostsGrid title="Keep reading" posts={relatedPosts} />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="what-surfaces-meditation-practice-sticky"
        description="Talk through a daily practice that holds when sits feel ordinary"
      />
    </article>
  );
}
