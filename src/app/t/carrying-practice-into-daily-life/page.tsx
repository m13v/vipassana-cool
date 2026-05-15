import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  MotionSequence,
  FlowDiagram,
  AnimatedCodeBlock,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/carrying-practice-into-daily-life";
const PUBLISHED = "2026-05-15";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Carrying practice into daily life: the survival question under the checklists",
  description:
    "Most guides answer this with a list of daytime mindfulness tips. After 6 courses and 978+ days of daily sitting, the honest read is that carrying practice into daily life is downstream of one thing: whether the seated practice survives a real schedule. Here is what actually holds it, and the matching code that proves it.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Carrying practice into daily life is downstream of one thing",
    description:
      "The daytime-mindfulness checklists assume a seated practice you can carry. Most people leaving a course do not have one a month later. What actually carries the practice is one fixed appointment two real lives hold up.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carrying practice into daily life is not a daytime checklist",
    description:
      "You cannot carry a sit you do not have. The matching code reconciles two time zones with a +/-60 minute UTC filter so one shared appointment survives both schedules.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "What does carrying practice into daily life actually mean in this tradition?",
    a: "It means keeping the practice the 10-day course handed you continuous in ordinary life, primarily through the daily sit and a periodic return to a course. The closing instruction at every course points students back to daily life as the place the practice is meant to land, but the tradition does not frame that as a separate daytime project. It frames it as: keep sitting, and the rest follows. The canonical statement of what an old student commits to is the Code of Discipline at dhamma.org/en/about/code. Anything operational, meaning how to sit or what to work with, belongs with an authorized assistant teacher, not a website.",
  },
  {
    q: "Isn't carrying practice into daily life about being mindful during everyday activities?",
    a: "That is the framing most articles online lead with: be present while you wash the dishes, take a few conscious breaths before a meeting, walk slowly after dinner. Some traditions teach exactly that. In the Goenka tradition the seated practice is the practice, and the change in how daily life is met is treated as a byproduct of consistency on the cushion, not a separate set of exercises bolted onto the day. This page is reflective, not instructional. It is not telling you how to practice, on or off the cushion. It is making one structural point: the daytime shift is downstream of the sit surviving.",
  },
  {
    q: "Why does the seated practice fall apart once I get home?",
    a: "Not usually because of weak intention. It falls apart because a daily sit that depends on the day cooperating will eventually meet a day that does not: a 6am flight, a sick kid, a deadline week, a move across time zones. The after-retreat notes on this site describe the well-known pattern that most old students lose their daily sit within about four weeks of leaving a course. Willpower is what the first 30 days run on, and after that it is unreliable. A practice held only by remembering to want it on a Tuesday in February tends to lose.",
  },
  {
    q: "How does the matching reconcile two people in different time zones?",
    a: "Each person submits a local morning time in their own time zone. The matching cron converts every local time to UTC minutes in a DST-aware way with toUtcTime(), then for every candidate pair computes the circular distance between the two UTC times and drops any pair more than 60 minutes apart. The filter is literally the line if (diff > 60) continue; in src/app/api/auto-match/route.ts. The result is a single shared sit time that fits inside both daily lives, rather than one person bending their schedule to the other.",
  },
  {
    q: "Does this require an app, a streak counter, or a fee?",
    a: "No. The matching service is free, the sit happens on a standard Google Meet link issued by the matching cron, and there is no app to install on either side. There is no streak, no badge, no gamification. The waitlist sits at /practice-buddy. Once two old students are paired, a recurring daily Meet event is the entire surface.",
  },
  {
    q: "Where do questions about how to actually practice belong?",
    a: "With an authorized assistant teacher at the center where you sat, and during question time at group sittings. Anything about how to sit, what to do with an experience during a sit, how long to sit, or how to handle a difficulty on the cushion was transmitted at the 10-day course and is refined with the people who gave those instructions. Recorded discourses for old students live at discourses.dhamma.org. Course logistics live at dhamma.org/en-US/courses/search. This page does not answer operational questions.",
  },
  {
    q: "What does a shared appointment not solve?",
    a: "It does not do the off-cushion work for you. How the practice meets a hard conversation, a craving, a flash of anger, is between you and your own practice, and it is not something this site teaches or scripts. A shared appointment also does not solve clinically heavy material that surfaces after a course; that is a conversation for a therapist and an assistant teacher, not a calendar. And it does not solve a pairing that is the wrong fit. What it does solve is the one structural question the daytime checklists skip: whether the sit happens tomorrow.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Carrying practice into daily life" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Carrying practice into daily life", url: PAGE_URL },
];

const relatedPosts = [
  {
    title: "Post-course integration is one calendar entity, not a four-week project",
    href: "/t/post-course-integration-into-daily-life",
    excerpt:
      "The deeper version of this argument: integration is whether one recurring calendar event exists before the course ends, with the matching repo as proof.",
    tag: "Reflection",
  },
  {
    title: "After Vipassana: daily practice, rewiring habits, and the long work",
    href: "/t/after-vipassana-daily-practice-rewire-habits",
    excerpt:
      "The course is the seed, not the tree. What habit rewiring actually takes over the months following a 10-day course, and how to keep it alive past Week 2.",
    tag: "Reflection",
  },
  {
    title: "Post-retreat reentry crash: what is actually crashing, and what is not",
    href: "/t/post-retreat-reentry-crash",
    excerpt:
      "The felt-state of a course runs on its own clock, separate from the structural shift. Confusing the two is what makes most people quit in Week 2.",
    tag: "Reflection",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline: "Carrying practice into daily life is downstream of one thing",
    description:
      "After 6 courses and 978+ days of daily sitting, the honest read on carrying practice into daily life is that it is downstream of whether the seated practice survives a real schedule. The matching service on this site reconciles two time zones into one shared sit, and the filter is visible in the public repo.",
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

      <header className="max-w-3xl mx-auto px-6 pt-6 pb-2">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
          Carrying practice into daily life is{" "}
          <span className="text-teal-600">downstream of one thing</span>
        </h1>
        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          Almost every guide on this answers it the same way: a checklist of
          daytime mindfulness habits to scatter through your day. After six
          courses and more than 978 days of daily sitting, I think that answer
          quietly skips the part that actually decides it. You cannot carry a
          seated practice you do not have, and most people leaving a 10-day
          course do not have one a month later. The carry is not a daytime
          project. It is whether the sit survives a real schedule.
        </p>
      </header>

      <ArticleMeta
        author="Matthew Diakonov"
        authorRole="Written with AI"
        datePublished={PUBLISHED}
        readingTime="5 min read"
      />

      <section className="max-w-3xl mx-auto px-6 pt-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Direct answer (verified 2026-05-15)
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            Carrying practice into daily life is downstream of whether the
            seated practice survives. The off-cushion changes follow from
            consistency on the cushion; they are not a separate set of daytime
            exercises you bolt on. The most reliable structural support is a
            fixed daily sit shared with another practitioner, so that an
            appointment, not your willpower, holds the commitment. The
            tradition&apos;s own framing of old-student practice (daily
            sitting, group sittings, one course a year) lives in the Code of
            Discipline at{" "}
            <a
              href="https://www.dhamma.org/en/about/code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              dhamma.org/en/about/code
            </a>
            . Any question about how to practice belongs with an authorized
            assistant teacher, not this page.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-10">
        <p className="text-zinc-700 leading-relaxed">
          Here is the whole argument before the prose. It is short on purpose.
        </p>
        <MotionSequence
          title="Why the checklists miss"
          frames={[
            {
              title: "The usual answer",
              body: "Carry mindfulness into the day. Be present while you wash the dishes, breathe before a meeting, walk slowly after dinner.",
            },
            {
              title: "The hidden assumption",
              body: "All of that assumes a seated practice already exists to carry. For most people a month after a course, it does not.",
            },
            {
              title: "What actually decides it",
              body: "Whether the sit happens tomorrow, on a day that does not cooperate. Not intention, not daytime drills.",
            },
            {
              title: "What carries it",
              body: "One fixed appointment another person also keeps. The day-to-day shift follows from that, on its own.",
            },
          ]}
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          What every guide tells you to do
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Search this topic and the pages that come back are remarkably
          consistent. The most-cited one, a chapter from a well-known
          mindfulness book, opens by calling the moment you leave the cushion
          the most important moment in meditation. The rest follow the same
          shape: a list of ordinary activities you are told to do mindfully.
          Dishes. Showering. Standing in line. A slow walk. The promise is that
          if you sprinkle attention across enough daytime moments, the practice
          becomes continuous.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          None of that is wrong, exactly. Some traditions teach precisely this
          as their core method. But notice what the list quietly assumes. It
          assumes you already have a stable seated practice and the only open
          question is how to extend it. For the person actually typing this
          topic into a search bar, usually someone weeks or months past a
          course, watching the thing they found slip, that assumption is the
          whole problem. The checklist answers a question they do not have yet.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The part the lists skip
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          You cannot carry a practice you do not have. And the seated practice,
          for most people, does not survive contact with an ordinary life. The
          after-retreat notes on this site describe a pattern every center
          knows well: most old students lose their daily sit within about four
          weeks of leaving a course. Not because the technique stopped working.
          Because the sit met a schedule.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          A daily sit that depends on the day cooperating will, eventually,
          meet a day that does not. A 6am flight. A sick kid. A week where work
          eats every hour with a name on it. The conventional advice for this
          is &quot;find a consistent time and place,&quot; which is true and
          also not enough, because consistency is exactly the thing a real
          schedule keeps breaking. The honest version is structural: the sit
          survives when it is held by something other than you remembering to
          want it. An appointment with another human attached to it does not
          need to be remembered, defended, or recovered. It already exists, and
          the room is empty if no one shows up. That asymmetry is the mechanism.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          And once the sit is structurally held, the daytime carry mostly takes
          care of itself. The change in how you meet an irritating email or a
          long line is a byproduct of the practice continuing, not a separate
          drill you run at the sink. That is the ordering the checklists invert.
          The on-site reflection at{" "}
          <Link
            href="/guide/daily-practice"
            className="text-teal-700 underline hover:text-teal-900"
          >
            /guide/daily-practice
          </Link>{" "}
          puts it the same way: daily practice is the means by which the course
          integrates into ordinary life.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Your daily life has a time zone. So does theirs.
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Here is the part no other guide on this topic gets to, because no
          other guide is also a piece of software. The hardest practical
          obstacle to a shared daily sit is not motivation. It is that two
          people live two different daily lives. Different time zones,
          different mornings, different windows where a quiet half hour is even
          possible. &quot;Sit together every day&quot; is easy to say and
          structurally hard, because there is rarely an obvious overlapping
          slot.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The matching service on this site exists to compute that overlap.
          Each person submits a local morning time in their own time zone. The
          matching cron converts every local time to UTC, DST-aware, then for
          every candidate pair measures how far apart the two times are on a
          24-hour clock and drops any pair more than 60 minutes apart.
        </p>

        <FlowDiagram
          title="How two daily lives become one appointment"
          steps={[
            {
              label: "Two local mornings",
              detail: "each in its own time zone",
            },
            { label: "Converted to UTC", detail: "DST-aware, per person" },
            {
              label: "Distance measured",
              detail: "circular, wraps midnight",
            },
            {
              label: "One shared sit",
              detail: "recurring, both calendars",
            },
          ]}
        />

        <p className="mt-2 text-zinc-700 leading-relaxed">
          You do not have to take my word for it. The filter is one line, and
          it is in the public repo at{" "}
          <a
            href="https://github.com/m13v/vipassana-cool"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            github.com/m13v/vipassana-cool
          </a>
          .
        </p>

        <AnimatedCodeBlock
          filename="src/app/api/auto-match/route.ts"
          language="typescript"
          code={`// each person's local morning time -> UTC, DST-aware
const freshMorningUtc = toUtcTime(p.morning_time, p.timezone);
const mornMin = utcToMinutes(freshMorningUtc);

// for every candidate pair of practitioners:
const diff = timeDiff(sa.utcMinutes, sb.utcMinutes);
if (diff > 60) continue; // windows over an hour apart are dropped`}
        />

        <p className="mt-4 text-zinc-700 leading-relaxed">
          That is the whole anchor. The carry is not engineered by a list of
          daytime exercises. It is made possible by a single shared appointment
          that already reconciled two real schedules before either person had
          to negotiate it. After the pairing, the matching service gets out of
          the way: two old students get one recurring Google Meet event and an
          introduction email, and the room itself becomes the accountability.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          What the appointment does, and what it does not
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          A shared appointment does exactly one thing: it answers the question
          the daytime checklists skip, which is whether the sit happens
          tomorrow. It does not do the off-cushion work for you. How the
          practice meets a hard conversation or a flash of anger is between you
          and your own practice, and it is not something this site teaches,
          scripts, or has any business prescribing. If you want guidance on
          that, it belongs with an authorized assistant teacher and with the
          recorded discourses for old students at{" "}
          <a
            href="https://discourses.dhamma.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            discourses.dhamma.org
          </a>
          .
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          It also does not solve clinically heavy material that can surface
          after a course, which is a conversation for a therapist and a
          teacher, not a calendar. And it does not solve a pairing that turns
          out to be the wrong fit. The honest claim is narrow on purpose: get
          the structural question handled first, and the daytime carry the
          other guides describe becomes something that happens to you rather
          than something you have to manufacture. If you just finished a course
          or have one coming up, the deeper version of this argument, written
          for the post-course window specifically, is at{" "}
          <Link
            href="/t/post-course-integration-into-daily-life"
            className="text-teal-700 underline hover:text-teal-900"
          >
            /t/post-course-integration-into-daily-life
          </Link>
          . The free matching waitlist sits at{" "}
          <Link
            href="/practice-buddy"
            className="text-teal-700 underline hover:text-teal-900"
          >
            /practice-buddy
          </Link>
          .
        </p>
      </section>

      <FaqSection items={faqs} />

      <section className="max-w-3xl mx-auto px-6 pt-12 pb-8">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Talk through what is breaking your daily sit"
          description="If the carry keeps slipping, a short call to look at the actual schedule friction, and whether a paired daily sit fixes it, is what this is for."
        />
      </section>

      <RelatedPostsGrid
        title="Related reading"
        subtitle="Other notes on keeping a practice alive after a 10-day course."
        posts={relatedPosts}
      />

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="See if a paired daily sit fits your schedule."
      />
    </article>
  );
}
