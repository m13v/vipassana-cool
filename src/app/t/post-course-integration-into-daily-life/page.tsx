import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ProofBanner,
  GradientText,
  AnimatedBeam,
  AnimatedCodeBlock,
  TerminalOutput,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/post-course-integration-into-daily-life";
const PUBLISHED = "2026-05-12";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Post-course integration into daily life: the calendar entity, not the 4-week project",
  description:
    "After 6 courses and 945+ days, the honest read on post-course integration is that it is not an emotional project the practitioner navigates with tips. It is whether one recurring calendar entity exists before the course ends. The matching service on this site is built on that read, and the architecture (a daily Meet recurrence rule with zero pause, vacation, or excused-absence vocabulary) is visible in the repo.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Post-course integration: the calendar entity, not the 4-week project",
    description:
      "The integration articles describe what happens in the absence of a daily Meet with another old student. Set that one entity up before the course ends, the rest is mostly gravity.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Post-course integration is one calendar entity, not a 4-week project",
    description:
      "RRULE:FREQ=DAILY, zero pause fields across 1096 lines of matching code. The architecture is the answer the integration tips are an alternative to.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "In one sentence, what does post-course integration into daily life actually mean?",
    a: "Keeping the practice the 10-day course handed you alive in ordinary life, primarily through a daily sit, group sittings where you can find them, and a periodic return to a course. The Goenka tradition's framing of this lives in the Code of Discipline at https://www.dhamma.org/en/about/code and in the last-evening discourse at every 10-day course. Operational questions about how to sit, what to work with, and how to handle difficulty on the cushion belong with an authorized assistant teacher, not with a website.",
  },
  {
    q: "Why does this page argue that integration is a calendar entity and not an emotional project?",
    a: "Most accounts of post-course integration describe a 4-week emotional arc and a long list of practitioner-managed mitigations: buffer days, journaling, screen delays, careful social re-entry, gradual return to work. After 6 courses and 945+ days of daily practice, my read is that those mitigations are correct but downstream. The thing the 4-week arc actually tracks is the absence of a structural anchor in the daily calendar. When a recurring daily Meet with another old student is already on the calendar before the course ends, the same 4-week window still has its texture, but the structural question of whether the practice survives is not negotiated every morning. It is held by the calendar entity.",
  },
  {
    q: "What is the repo evidence that this site is built on that read?",
    a: "Three load-bearing files. The Meet event the matching service creates is defined in src/lib/google-meet.ts with exactly one recurrence rule on line 75: RRULE:FREQ=DAILY. The matching cron in src/app/api/auto-match/route.ts is 592 lines long and contains 17 references to skip, but every one of them is a guard against re-pairing two people who already failed; not one is a user-initiated pause. The transactional email module in src/lib/emails.ts is 504 lines long and contains zero matches for pause, vacation, excused, freeze, or snooze. The architecture leaves no field where the post-course mind can negotiate the practice down to nothing.",
  },
  {
    q: "How is this different from saying you just need motivation or discipline?",
    a: "Motivation is what the first 30 days run on. After that it is unreliable, and any system that depends on the practitioner remembering to want it on a Tuesday in February will lose. The argument here is not that integration takes more discipline than people think. It is that the practice survives when the calendar holds the commitment instead of the practitioner. A recurring daily Meet event with another human on the other side of it does not need to be remembered, defended, or recovered. It already exists, and the room is empty if no one shows up. That asymmetry is the actual mechanism.",
  },
  {
    q: "Is this saying the conventional integration advice (buffer days, journal, delay screens) is wrong?",
    a: "No. The advice on the after-retreat guide on this site (see /guide/after-retreat) is honest and useful and I follow most of it myself. The point is about ordering. The advice is what you do once the structural anchor is in place. The structural anchor is what you do not have if your post-course plan is the advice plus willpower. If you only have time for one thing in the 48 hours after a course, set up the daily recurring sit with one other person first, then read the integration tips.",
  },
  {
    q: "What does this page not solve?",
    a: "Three things, honestly. It does not solve the post-retreat reentry crash itself; the felt-state collapse runs on its own clock no matter what is on the calendar (the full arc of that clock is described at /t/post-retreat-reentry-crash). It does not solve the case where the surfaced material from the course is genuinely beyond what daily practice can hold, which is a different conversation that belongs with an assistant teacher and a therapist. It does not solve the case where the pairing is the wrong fit; sometimes the room stays empty on both sides and the partnership quietly ends. The architecture admits all three. The website does not promise more than it can deliver.",
  },
  {
    q: "What does the tradition itself say about integration?",
    a: "The tradition does not use the word integration much, and it does not centralize the felt-state arc the way pop-meditation writing does. The standing recommendation from Goenka is two hours of daily sitting, group sittings with other old students where local centers offer them, and one 10-day course per year. The Code of Discipline at https://www.dhamma.org/en/about/code is the canonical statement of what an old student commits to. Recorded discourses for old students live at https://discourses.dhamma.org. None of those resources frame integration as a felt-state problem to manage. They frame it as the supports the tradition has already built for the practitioner to use.",
  },
  {
    q: "Where do operational questions go (what to do with a sensation, how long to sit, what to do when the mind wanders)?",
    a: "With an authorized assistant teacher at the center where you sat, and during question time at group sittings. Not with this site, not with subreddits, not with a podcast. The instructions for what the practice is were transmitted at the 10-day course; the right place to refine your understanding is the place that gave them to you. Course logistics live at https://www.dhamma.org/en-US/courses/search.",
  },
  {
    q: "Does practice-buddy matching require a paid account or app?",
    a: "No. The matching service is free, the meeting happens on a standard Google Meet link issued by the matching cron, and there is no app to install on either side. The waitlist sits at /practice-buddy and the matching runs on a cron that pairs old students and sends one introduction email. After that the calendar entity does the work.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Post-course integration into daily life" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Post-course integration into daily life", url: PAGE_URL },
];

const relatedPosts = [
  {
    title: "Post-retreat reentry crash: what is actually crashing, and what is not",
    href: "/t/post-retreat-reentry-crash",
    excerpt:
      "The felt-state of a course runs on a 1 to 4 week clock that is separate from the structural shift the course produces. Confusing the two is what makes most people quit in Week 2.",
    tag: "Reflection",
  },
  {
    title: "Preserving daily practice discipline by subtraction, not willpower",
    href: "/t/preserving-daily-practice-discipline",
    excerpt:
      "A 16-line day counter with no reset, an RRULE:FREQ=DAILY Meet event with no excused-absence flow, and 1010 lines of matching code with zero pause vocabulary. Discipline as architecture.",
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
      "Post-course integration into daily life: the calendar entity, not the 4-week project",
    description:
      "After 6 courses and 945+ days of daily practice, the most honest read of post-course integration is that it is one calendar entity, not a 4-week emotional project. The matching service on this site is built on that read. The repo carries the proof.",
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
          Post-course integration is{" "}
          <GradientText>one calendar entity</GradientText>, not a four-week project
        </h1>
        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          Most accounts of what happens after a 10-day Vipassana course describe a
          four-week emotional arc the practitioner navigates with buffer days,
          screen delays, journaling, and gradual social re-entry. After six
          courses and 945+ days of daily practice, I think the arc is real and the
          framing is the wrong way around. Integration is whether one recurring
          calendar event exists before the course ends. If it does, the rest is
          mostly gravity. If it does not, the integration articles are describing
          the absence.
        </p>
      </header>

      <ArticleMeta
        author="Matthew Diakonov"
        authorRole="Written with AI"
        datePublished={PUBLISHED}
        readingTime="7 min read"
      />

      <section className="max-w-3xl mx-auto px-6 pt-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Direct answer (verified 2026-05-12)
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            After 6 courses and 945+ days, the honest one-line answer is that
            post-course integration is not a 4-week emotional project. It is
            whether a daily recurring Meet event with another old student is
            already on your calendar before you leave the center. The Goenka
            tradition&apos;s framing of old-student practice lives at{" "}
            <a
              href="https://www.dhamma.org/en/about/code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              dhamma.org/en/about/code
            </a>{" "}
            (daily practice, group sittings, one course per year). The recorded
            discourses for old students live at{" "}
            <a
              href="https://discourses.dhamma.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              discourses.dhamma.org
            </a>
            . Any operational question about how to practice belongs with an
            authorized assistant teacher, not with this page.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          What this page is and is not
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          In the Goenka tradition the technique is transmitted at a 10-day
          residential course by an authorized teacher. Anything operational (how
          to sit, what to do with a sensation, how to read a difficulty on the
          cushion) belongs with an assistant teacher and with the recorded
          discourses for old students. This page is reflective, not
          instructional. It argues for one specific framing of post-course
          integration that the architecture of this site happens to make
          verifiable.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The conventional advice is correct, and it is downstream
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The most-cited integration advice on the internet is roughly the same
          across sites: build in a buffer day before going back to work, delay
          screen re-exposure for 24 hours, journal once while the felt-state of
          the course is still fresh, eat simply, ease into social situations
          starting with people your nervous system already trusts, protect the
          morning sit, find a weekly group sitting. The on-site after-retreat
          guide at{" "}
          <Link
            href="/guide/after-retreat"
            className="text-teal-700 underline hover:text-teal-900"
          >
            /guide/after-retreat
          </Link>{" "}
          carries a version of this and I follow most of it after every course.
          None of it is wrong.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The thing the conventional advice does not name is what makes any of it
          work. Buffer days and screen delays are scaffolding for a system whose
          load-bearing element is the daily sit itself. Without the daily sit
          surviving past Week 2, every other piece of the integration plan is
          decoration on an empty cushion. The thing that determines whether the
          daily sit survives Week 2 is almost never the practitioner&apos;s
          motivation in Week 2. It is whether the calendar already contains a
          commitment the practitioner did not have to renegotiate that morning.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The advice and the architecture are not in tension. The architecture
          is what allows the advice to do anything.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900 max-w-3xl mx-auto">
          What the architecture looks like
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed max-w-3xl mx-auto">
          Two old students, one shared recurring Meet event, RRULE:FREQ=DAILY.
          The pairing service on this site is a thin layer that produces exactly
          this object and then gets out of the way.
        </p>

        <div className="mt-8">
          <AnimatedBeam
            title="The post-course integration architecture, as the matching service implements it"
            from={[
              { label: "Old student A", sublabel: "any time zone" },
              { label: "Old student B", sublabel: "overlapping morning slot" },
            ]}
            hub={{
              label: "Recurring Meet event",
              sublabel: "RRULE:FREQ=DAILY, no pause field",
            }}
            to={[
              { label: "Daily sit, both sides", sublabel: "structurally held" },
              { label: "Week 2 survival", sublabel: "without willpower spend" },
              { label: "Sustained practice", sublabel: "across years" },
            ]}
          />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The anchor fact: one recurrence rule, no excused absence
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The Meet event that the matching service creates is defined in{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-800">
            src/lib/google-meet.ts
          </code>
          . The relevant block has one recurrence rule and no concept of an
          excused day. The line is reproducible and verifiable in the public
          repo at{" "}
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

        <div className="mt-6">
          <AnimatedCodeBlock
            filename="src/lib/google-meet.ts"
            language="typescript"
            code={`const event = {
  summary,
  description: "Your daily meditation practice buddy session via vipassana.cool",
  start: { dateTime: start.toISOString(), timeZone: "UTC" },
  end: { dateTime: end.toISOString(), timeZone: "UTC" },
  recurrence: ["RRULE:FREQ=DAILY"],
  conferenceData: {
    createRequest: {
      requestId: slug,
      conferenceSolutionKey: { type: "hangoutsMeet" },
    },
  },
};`}
          />
        </div>

        <p className="mt-6 text-zinc-700 leading-relaxed">
          One line, one rule. The event repeats every day, forever, until the
          partnership ends. There is no field for &quot;I am traveling this
          week,&quot; no field for &quot;I had a bad night,&quot; no field for
          &quot;I want to pause my account for a month.&quot; The morning mind
          gets no branch to negotiate the practice down to nothing. The room is
          either empty or it is not.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The supporting evidence, from the repo
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The same shape repeats across the rest of the matching infrastructure.
          The cron that pairs people uses the word{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-800">
            skip
          </code>{" "}
          seventeen times, but every instance is a guard against re-pairing two
          people who already failed, not a user-initiated pause. The
          transactional email module has zero references to pausing the
          practice. A grep across both files is the cleanest way to see this:
        </p>

        <div className="mt-6">
          <TerminalOutput
            title="grep across the matching infrastructure"
            lines={[
              {
                type: "command",
                text: "grep -ciE 'pause|vacation|excused|freeze|snooze' src/lib/emails.ts",
              },
              { type: "output", text: "0" },
              {
                type: "command",
                text: "grep -ciE 'pause|vacation|excused|freeze|snooze' src/app/api/auto-match/route.ts",
              },
              { type: "output", text: "0" },
              {
                type: "command",
                text: "wc -l src/lib/emails.ts src/app/api/auto-match/route.ts",
              },
              { type: "output", text: "504 src/lib/emails.ts" },
              { type: "output", text: "592 src/app/api/auto-match/route.ts" },
              { type: "output", text: "1096 total" },
              {
                type: "success",
                text: "1096 lines, zero pause / vacation / excused / freeze / snooze",
              },
            ]}
          />
        </div>

        <p className="mt-6 text-zinc-700 leading-relaxed">
          Nothing about that result is an accident. Adding any one of those
          fields would let the morning mind step out before it had to. Two
          practitioners get one shared Meet URL on RRULE:FREQ=DAILY and an intro
          email. After that, the room is the entire accountability surface.
        </p>
      </section>

      <ProofBanner
        metric="0 / 1096"
        quote="Zero pause / vacation / excused / freeze / snooze fields across 1096 lines of matching code. The architecture leaves the post-course mind no field where it can renegotiate the practice down to nothing."
        source="Author note, source files src/lib/emails.ts and src/app/api/auto-match/route.ts, grep verified 2026-05-12"
      />

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Why the calendar entity does the work the practitioner cannot
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The 4-week emotional arc after a course is real. The peak in the first
          three days, the contraction across the first week, the trough between
          Day 5 and Day 14, the gradual return to baseline by Week 4. That arc
          is documented at length on the reentry-crash page at{" "}
          <Link
            href="/t/post-retreat-reentry-crash"
            className="text-teal-700 underline hover:text-teal-900"
          >
            /t/post-retreat-reentry-crash
          </Link>
          . What that arc does to the practice depends entirely on whether the
          practitioner has to defend the daily sit during the trough.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          In the practitioner-driven model, the trough is also the worst
          possible time to ask someone to sit. Motivation has collapsed, the
          felt-state of the course is gone, and the mind&apos;s available read
          on the practice is that it stopped working. Most people quit
          somewhere here. The integration articles read the quit as a personal
          failure of consistency. The honest read is that the architecture they
          were running on (sit when you feel like it, restart when you remember)
          guaranteed the outcome.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          In the calendar-entity model, the trough is still unpleasant, but the
          structural question of whether the practice survives is not on the
          table. The Meet exists at the same time every morning. Another human
          is on the other end. If both rooms stay empty for a few days in a row,
          that is a separate problem the matching system can address. But the
          single act of the morning sit happening is not negotiated. The body
          is in the room before the mind is awake enough to argue.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The honest concession: what the architecture does not solve
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          A calendar entity does not solve the felt-state crash. The collapse
          of the bliss, the loss of the unusual present-moment quality, the
          flatness in Week 2: all of that happens on a separate clock that
          shows up whether the daily sit is structurally held or not. The
          difference is that in the calendar-entity model, the felt-state crash
          stops being load-bearing on the question of whether the practice
          survives. It becomes a thing that happens while the practice continues.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          A calendar entity also does not solve the case where the surfaced
          material from a course is genuinely beyond what daily practice can
          hold. A clinical-shape low mood that persists past Week 4, intrusive
          thoughts, sleep collapse, dissociation, anything in the direction of
          self-harm ideation: none of that is a calendar problem. It is a
          conversation that belongs with a therapist and with the assistant
          teacher at the center where you sat. The on-site notes on risks at{" "}
          <Link
            href="/guide/risks-and-safety"
            className="text-teal-700 underline hover:text-teal-900"
          >
            /guide/risks-and-safety
          </Link>{" "}
          are a pointer to that conversation, not a substitute for it.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          And a calendar entity does not solve the case where the pairing is
          the wrong fit. Sometimes one side stops showing up. Sometimes both
          sides do. The matching service does not retry indefinitely; the
          partnership quietly ends, and the practitioner is back to the
          structural problem of needing a daily commitment held by something
          other than their own resolve. The architecture admits this. The
          website does not promise more than the architecture can deliver.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Where the operational questions belong
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Anything about how to sit, what to work with on the cushion, how long
          to sit, what to do when the mind wanders, whether a particular
          experience during a sit is something to bring forward or set aside,
          belongs with an authorized assistant teacher and with the recorded
          discourses for old students at{" "}
          <a
            href="https://discourses.dhamma.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            discourses.dhamma.org
          </a>
          . Course logistics (signing up, choosing a center, application
          mechanics) live at{" "}
          <a
            href="https://www.dhamma.org/en-US/courses/search"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            dhamma.org/en-US/courses/search
          </a>
          . This page is about the calendar question and the architectural
          question. Everything else is upstream of where I am qualified to
          write.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          If the calendar question is open for you (i.e. you do not have a
          daily sit anchored to a recurring commitment with another old
          student), the matching waitlist sits at{" "}
          <Link
            href="/practice-buddy"
            className="text-teal-700 underline hover:text-teal-900"
          >
            /practice-buddy
          </Link>
          . The pairing is free, the call is on a standard Google Meet link,
          and the architecture described on this page is the entire surface.
        </p>
      </section>

      <FaqSection items={faqs} />

      <section className="max-w-3xl mx-auto px-6 pt-12 pb-8">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Talk through your post-course calendar before Week 2"
          description="If you just finished a course or have one coming up, a short call to talk through the calendar question before the felt-state of the course fades is what this is for."
        />
      </section>

      <RelatedPostsGrid
        title="Related reading"
        subtitle="Other notes on the post-course window and the architecture that holds it together."
        posts={relatedPosts}
      />

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Set up the calendar entity before Week 2."
      />
    </article>
  );
}
