import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  FaqSection,
  FlowDiagram,
  ProofBanner,
  InlineTestimonial,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/alternative/vipassana-vs-zen";
const PUBLISHED = "2026-05-30";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana vs Zen: The Real Difference Is the Container, Not the Technique",
  description:
    "Vipassana (Theravada, S.N. Goenka tradition) is a free, fixed 10-day residential course taught identically at 200+ centers worldwide, after which you practice alone. Zen (Mahayana, East Asia) has no standard entry course and makes the ongoing teacher-and-zendo relationship part of the method itself. A peer comparison of how each tradition is entered, how it transmits, and what your daily life looks like a year later.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Vipassana vs Zen: the difference that survives to your daily life",
    description:
      "Both are insight traditions. The split that actually matters is structural: one-time fixed transmission then solo practice (Vipassana) vs an ongoing teacher-and-sangha relationship (Zen).",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana vs Zen",
    description:
      "Different branches of Buddhism, different containers. One sends you home alone; one keeps you in a room with a teacher.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "What is the main difference between Vipassana and Zen?",
    a: "They come from different branches of Buddhism and, more practically, they hand you different containers. Vipassana as taught in the S.N. Goenka tradition is a Theravada lineage delivered as a fixed 10-day residential course; the technique is transmitted once, in full, by an authorized assistant teacher, and then you go home and practice on your own. Zen is a Mahayana school (Chan in China, Zen in Japan and Korea) with no standardized entry course; you typically join a local zendo and build an ongoing relationship with a teacher, and that relationship plus the sangha is itself part of the method. Both are insight traditions aimed at seeing experience clearly. The difference that survives to your actual week is the container, not just the seated technique.",
  },
  {
    q: "Is Vipassana or Zen better for a beginner?",
    a: "It depends on what kind of structure you want and what your schedule allows. Vipassana front-loads a large, fixed commitment: a continuous 10-day residential course in silence, with everything provided, at no charge. You learn the whole thing at once and there is no ambiguity about what you are doing. Zen has a gentle on-ramp (you can attend a weekly sitting at a zendo and leave after an hour) but a longer and less defined path; the depth comes from years of returning and from the teacher relationship. If you want one clear, unambiguous container handed to you, Vipassana fits. If you want to start small and local and grow into it with a community, Zen fits. Neither is a beginner mistake. This site is run by a peer practitioner, not a teacher; for anything operational about either path, the right move is to contact a center directly.",
  },
  {
    q: "Why is Vipassana free and Zen usually is not?",
    a: "The Goenka tradition runs on a strict donation model: courses are funded only by donations from previous students who completed a course and wished to give others the same opportunity. You pay nothing to learn, and you can donate afterward only if you found it valuable. This is uniform across all centers. Zen centers (zendo) typically run on modest membership dues or donations, often in the $20 to $50 per month range, and intensive retreats (sesshin) may carry a fee. Neither model is better; they encode different philosophies about how a practice should be supported. If cost is a hard constraint, Vipassana removes it entirely at the point of learning.",
  },
  {
    q: "Do Vipassana and Zen use the same meditation technique?",
    a: "No, and this is where most comparisons stop. At a high level, Vipassana in the Goenka tradition is a sensation-awareness insight practice; the specifics are reserved for transmission inside the 10-day course and are not published in app, audio, or written form, so this page does not describe them. Zen is usually described two ways depending on school: Soto Zen emphasizes shikantaza, often translated as 'just sitting,' an open, objectless awareness; Rinzai Zen works with koans, paradoxical questions a teacher assigns (the famous one is 'what is the sound of one hand clapping') to break conceptual thinking. The point of this page is that even if the seated techniques differ, the bigger practical fork is how each tradition is entered and sustained over time.",
  },
  {
    q: "Does Zen have a teacher relationship that Vipassana does not?",
    a: "Yes, and it is structural, not incidental. In Zen the student-teacher relationship (with a roshi or sensei) is central, and many schools include private interviews (dokusan or sanzen) where the student meets the teacher one-on-one to work with practice and, in Rinzai, present a koan. Formal transmission of the lineage happens through that relationship over years. The Goenka Vipassana tradition is different by design: assistant teachers answer questions during a course, but after you leave there is no required ongoing teacher relationship and no individual teacher you keep returning to. Daily practice is solitary and self-led. That structural absence of a built-in community is the specific gap this site's practice buddy program addresses.",
  },
  {
    q: "Are Vipassana and Zen from the same kind of Buddhism?",
    a: "No. Vipassana as taught by S.N. Goenka comes out of the Theravada line, the older school prevalent across Southeast Asia and India, transmitted in this case through the Burmese lineage of Sayagyi U Ba Khin, with Goenka beginning to teach in India in 1969. Zen is a Mahayana school that developed as Chan in China (traditionally traced to Bodhidharma) and later flowered in Japan, Korea (Seon), and Vietnam (Thien). They share Buddhist roots and both prize direct seeing over belief, but they sit on different branches of the family tree, which is part of why their forms, vocabularies, and institutions look so different.",
  },
  {
    q: "Can I practice both Vipassana and Zen?",
    a: "Plenty of experienced meditators have studied across traditions, but the Goenka tradition's explicit guidance to its own students is not to mix techniques, especially early on. Goenka compared mixing to digging several shallow wells instead of one deep one, and the standard advice is to give one technique a fair, exclusive run (at least a year of daily practice) before exploring another. Zen teachers vary in how they feel about students bringing in outside methods. If you are inside one tradition, the most honest answer is to ask the teacher or center you are actually working with rather than a comparison page on the internet.",
  },
  {
    q: "I sat a Vipassana course and now practice alone. Is that normal for this tradition?",
    a: "Yes, that solitary daily sit is the standard shape of the path after a Goenka course, and it is also the part people quietly struggle with. Zen builds community into the method (you keep going back to the zendo and the teacher); Vipassana hands you the technique once and trusts you to keep it going at home. The most common failure point old students describe is not the technique, it is consistency in isolation. That is the entire reason this site exists. The practice buddy program at /practice-buddy pairs you with one fellow old student in your time zone for a daily silent sit over a permanent Google Meet link: same person, same time, every day, no app, no streaks. It is a container that the tradition does not provide on its own.",
  },
  {
    q: "Is one tradition more scientifically studied than the other?",
    a: "The broader picture is that mindfulness research exploded after Jon Kabat-Zinn, himself a long-time Vipassana practitioner, adapted sensation- and breath-awareness practice into the secular MBSR program in 1979; that lineage means a large share of the meditation literature traces back to the Vipassana side of the family. There is also a growing body of research on Vipassana specifically. Zen has less technique-specific research but is covered by the general attention-and-emotion-regulation literature. None of this makes one tradition 'proven' over the other; the evidence base is thicker on the Theravada-derived side mostly for historical reasons about who built the clinical programs.",
  },
  {
    q: "Who runs this site, and is it a teaching resource?",
    a: "This is a peer resource run by Matthew Diakonov, an old student with six 10-day courses sat across three Goenka centers (Dhammamanda in NorCal, CYO in the Bay Area, North Fork in Central California) and 40+ days of dhamma service. It is not a teaching site and does not transmit the technique. For anything operational about how to practice, the redirect is to dhamma.org and to an authorized assistant teacher at a 10-day residential course. What this site builds is the container around daily practice: guides, and a free practice buddy matcher for old students who want a daily sitting partner.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Alternatives", href: "/alternative" },
  { label: "Vipassana vs Zen" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Vipassana vs Zen", url: PAGE_URL },
];

const vipassanaPath = [
  { label: "Find a course", detail: "dhamma.org, any of 200+ centers" },
  { label: "Sit 10 days", detail: "Silent, residential, free" },
  { label: "Full transmission", detail: "Given once, at the course" },
  { label: "Go home", detail: "Practice alone, daily" },
  { label: "Stay consistent?", detail: "No built-in community" },
];

const zenPath = [
  { label: "Find a zendo", detail: "Usually a local center" },
  { label: "Weekly sittings", detail: "Drop in, stay an hour" },
  { label: "Meet a teacher", detail: "Roshi or sensei, ongoing" },
  { label: "Dokusan / sesshin", detail: "Private interviews, retreats" },
  { label: "Keep returning", detail: "Community is the method" },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Vipassana vs Zen: The Real Difference Is the Container, Not the Technique",
    description:
      "Vipassana (Theravada, S.N. Goenka) is a free, fixed 10-day residential course taught identically at 200+ centers worldwide, then solo daily practice. Zen (Mahayana, East Asia) has no standard entry course and makes the ongoing teacher-and-zendo relationship part of the method. A peer comparison of how each is entered and sustained.",
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
        <p className="text-xs font-mono uppercase tracking-[0.22em] text-teal-600 mb-3">
          A meditator&apos;s note, May 2026
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          Vipassana vs Zen: the real difference is the container, not the
          technique
        </h1>
        <p className="mt-5 text-lg text-zinc-600 max-w-3xl leading-relaxed">
          Almost every comparison of these two stops at origins and seated
          technique: Theravada vs Mahayana, sensation-awareness vs &ldquo;just
          sitting&rdquo; and koans. That is all true and it is all the easy
          part. The fork that actually changes your life is how each tradition
          is entered and sustained. One hands you everything in a single fixed
          transmission and sends you home alone. The other keeps you in a room
          with a teacher for years. I sit in the first one. This is a peer
          comparison, not a teaching of either method.
        </p>
      </header>

      <section className="max-w-4xl mx-auto px-6 my-10">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-teal-700 mb-2">
            Direct answer (verified 2026-05-30)
          </p>
          <p className="text-zinc-800 leading-relaxed">
            Vipassana as taught by S.N. Goenka is a Theravada lineage delivered
            as a free, fixed 10-day residential course, transmitted in full at
            the course and then practiced alone at home. It is taught
            identically at{" "}
            <a
              href="https://www.dhamma.org/en-US/locations/directory"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              more than 200 centers worldwide
            </a>
            . Zen is a Mahayana school (Chan in China, Zen in Japan) with no
            standardized entry course; you join a local zendo and build an
            ongoing relationship with a teacher, and that teacher-and-sangha
            relationship is itself part of the method. Both are insight
            traditions. The biggest practical difference is the container around
            the practice, not just the seated technique.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The thesis: the technique split is real but overrated
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          If you read five articles on this question, they will all tell you the
          same things. Vipassana is analytical and works with direct experience;
          Zen distrusts the analytical mind and points you toward bare sitting
          or a koan. Vipassana came up through Theravada Southeast Asia; Zen came
          through Mahayana China and Japan. Vipassana is more structured; Zen is
          more open. All correct. And all of it describes what happens during the
          twenty, forty, sixty minutes you are on the cushion.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          The trouble is that the cushion is maybe one percent of your
          relationship with a practice. The other ninety-nine percent is the
          scaffolding around it: how you got in, who you answer to, whether
          anyone notices when you stop, what the path looks like a year from now.
          On that dimension the two traditions are not close, and almost nobody
          writes about it. Vipassana in the Goenka tradition and Zen have made
          opposite structural bets about where the support for a lifelong
          practice should live.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Two different doors, two different paths
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-2">
          The clearest way to see the difference is to trace how a real person
          actually enters and continues each tradition. The shapes are almost
          mirror images.
        </p>
        <FlowDiagram title="Entering Vipassana (Goenka tradition)" steps={vipassanaPath} />
        <FlowDiagram title="Entering Zen" steps={zenPath} />
        <p className="text-sm text-zinc-500 leading-relaxed mt-2">
          Notice where the weight sits. Vipassana puts almost all of its
          structure at the front, in one intense ten-day block, and then trusts
          you to carry it alone. Zen spreads its structure across years of
          returning to a room and a teacher. Neither is lazy; they are different
          theories of how a practice is kept alive.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Side by side, on the dimensions that decide your week
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-6">
          Not the philosophy-class comparison. The one that determines whether
          you are still practicing in six months.
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
            <p className="text-xs font-mono uppercase tracking-[0.22em] text-teal-700 mb-4">
              Vipassana (Goenka)
            </p>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-zinc-900">How you enter</dt>
                <dd className="text-zinc-700 mt-0.5">
                  One fixed 10-day residential course. Same curriculum at every
                  center on Earth.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-zinc-900">Cost to learn</dt>
                <dd className="text-zinc-700 mt-0.5">
                  Free. Funded entirely by donations from past students.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-zinc-900">Transmission</dt>
                <dd className="text-zinc-700 mt-0.5">
                  Given once, in full, at the course. Not published anywhere.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-zinc-900">Ongoing teacher</dt>
                <dd className="text-zinc-700 mt-0.5">
                  None required. No individual teacher you keep returning to.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-zinc-900">Daily life after</dt>
                <dd className="text-zinc-700 mt-0.5">
                  Solitary, silent, self-led at home. No built-in community.
                </dd>
              </div>
            </dl>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
            <p className="text-xs font-mono uppercase tracking-[0.22em] text-zinc-600 mb-4">
              Zen
            </p>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-zinc-900">How you enter</dt>
                <dd className="text-zinc-700 mt-0.5">
                  No standard course. You join a local zendo and start with
                  weekly sittings.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-zinc-900">Cost to learn</dt>
                <dd className="text-zinc-700 mt-0.5">
                  Usually modest dues or donations, often $20 to $50 a month;
                  retreats may have a fee.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-zinc-900">Transmission</dt>
                <dd className="text-zinc-700 mt-0.5">
                  Unfolds over years through the teacher relationship and formal
                  lineage transmission.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-zinc-900">Ongoing teacher</dt>
                <dd className="text-zinc-700 mt-0.5">
                  Central. Private interviews (dokusan / sanzen) with a roshi or
                  sensei.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-zinc-900">Daily life after</dt>
                <dd className="text-zinc-700 mt-0.5">
                  Embedded in a sangha. You keep returning to the zendo and the
                  teacher.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The consequence nobody warns you about
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          Here is what falls out of those opposite bets. In Zen, the community
          carries you. If you skip a week, the zendo is still there next week,
          the teacher remembers your face, the rhythm of returning is built into
          the form. The structure does some of the work of keeping you going.
        </p>
        <p className="text-zinc-700 leading-relaxed mb-4">
          In the Goenka tradition, after the course is over, nothing carries you
          but you. There is no teacher waiting, no group expecting you, no
          membership lapsing if you stop. The tradition deliberately keeps the
          daily practice silent and self-led. That purity is part of why it
          works, and it is also the exact place most old students quietly fall
          off. The thing that ends a Vipassana practice is almost never the
          technique. It is a Tuesday in February when no one would know if you
          skipped, so you skip, and then it is March.
        </p>
        <ProofBanner
          metric="0"
          quote="The Goenka tradition gives you the technique once and then no ongoing teacher, no sangha you answer to, and no one who notices if your daily sit quietly disappears. That structural silence is the feature and the failure point at the same time."
          source="Observation from six 10-day courses and daily practice; the tradition's after-course support is group sittings and annual courses, not a standing community."
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The anchor: what this site actually builds to fix that
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          This is the part no comparison page can copy, because it is not a fact
          about Zen or Vipassana, it is a thing that exists on this site. If
          Vipassana&apos;s structural weakness is the lonely daily sit, the
          obvious move is to manufacture the one piece Zen gets for free: another
          human who is sitting at the same time and would notice if you did not.
        </p>
        <p className="text-zinc-700 leading-relaxed mb-4">
          That is the entire product. The practice buddy matcher at{" "}
          <Link
            href="/practice-buddy"
            className="text-teal-700 underline hover:text-teal-900"
          >
            /practice-buddy
          </Link>{" "}
          pairs one old student with one other old student in their time zone.
          The copy on the page, in{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 text-sm">
            src/app/practice-buddy/client.tsx
          </code>
          , describes it plainly: &ldquo;One matched fellow old student in your
          time zone. The same person, the same time, the same Google Meet link,
          every day. Not a group sit. Not an app. No streaks.&rdquo; You enter an
          email and the window in which you can sit; when a partner with
          overlapping availability appears, you both get a permanent Google Meet
          link and sit silently together every day.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          It is, on purpose, the smallest possible version of what a sangha does.
          Not a teacher, not a group, not an app gamifying your streak. One
          person, cameras optional, sitting in a quiet room at the same time you
          are. It is the Zen-shaped piece (someone who notices) bolted onto the
          Vipassana-shaped practice (silent, self-led, technique already
          received). The eligibility is narrow by design: at least one 10-day
          Goenka course sat. The match is a real human, not a chatbot.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <InlineTestimonial
          quote="I tried sitting in a few different traditions over the years before a course finally stuck. The honest reason Vipassana stuck was not the technique, it was that the 10 days removed my exit. But once I got home, the hard part started: keeping a daily sit alone, with nobody watching. Zen friends had a zendo to walk back into. I had a cushion in a quiet room and my own discipline, which is a thinner thing than it sounds. Building a matcher so I had one other person sitting at the same time is the single biggest reason my daily practice survived. That gap is the real difference between the two traditions for me."
          name="Matthew Diakonov"
          role="6 courses across Dhammamanda, CYO, North Fork. Not a teacher, just sharing experience."
          stars={5}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Where Zen is the better pick
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          A fair comparison says plainly where the other tradition wins. Three
          cases, no hedging.
        </p>
        <div className="space-y-5">
          <div className="border-l-2 border-teal-300 pl-5">
            <h3 className="font-semibold text-zinc-900 mb-1">
              You want a living teacher and community
            </h3>
            <p className="text-zinc-700 leading-relaxed">
              If the part of practice you most want is a person who knows your
              practice and a room you belong to, Zen offers that as a built-in
              feature. The dokusan relationship and the standing sangha are not
              add-ons; they are the form. Goenka Vipassana simply does not
              provide an ongoing teacher relationship, and trying to force one
              out of it is swimming against the design.
            </p>
          </div>
          <div className="border-l-2 border-teal-300 pl-5">
            <h3 className="font-semibold text-zinc-900 mb-1">
              You cannot take ten continuous days
            </h3>
            <p className="text-zinc-700 leading-relaxed">
              The first Vipassana course is all-or-nothing: a continuous 10-day
              residential block with no partial version. Zen lets you start with
              a single weekly hour at a local center and grow from there. For
              someone who genuinely cannot disappear for ten days, Zen has a real
              on-ramp where Vipassana has a wall.
            </p>
          </div>
          <div className="border-l-2 border-teal-300 pl-5">
            <h3 className="font-semibold text-zinc-900 mb-1">
              You are drawn to koan work or the aesthetic
            </h3>
            <p className="text-zinc-700 leading-relaxed">
              Koan practice, the chanting, the bows, the deeply developed
              Japanese and Chinese aesthetic of Zen are a genuine path of their
              own, not decoration. If that is what calls you, follow it. Vipassana
              has nothing equivalent and is not trying to.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          So which one should you choose?
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          Reframe the question. Do not ask which technique is deeper; both
          lineages are centuries deep and neither is going to run out of road.
          Ask which container matches your life. If you want a clear, free,
          unambiguous path handed to you in one block, and you are willing to own
          the solitary daily practice afterward, Vipassana fits. If you want to
          start small and local and be carried by a teacher and a community over
          years, Zen fits.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          And if you have already sat a Vipassana course and the lonely daily sit
          is exactly where you are losing the thread, the missing piece is not a
          new technique. It is one other person sitting at the same time. That is
          what this site builds. For anything about how to actually practice
          either tradition, this site is not the authority; the door for
          Vipassana is{" "}
          <a
            href="https://www.dhamma.org/en-US/courses/search"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            dhamma.org
          </a>{" "}
          and an authorized assistant teacher at a 10-day course.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Weighing Vipassana against Zen before you commit?"
          description="A short call with an old student who sat across both styles before settling, has six 10-day courses behind him, and built the practice buddy matcher on this site. Not a teacher. A peer with experience to share."
        />
      </section>

      <FaqSection items={faqs} />

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-xl font-semibold text-zinc-900 mb-4">Related</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guide/vipassana-vs-other-meditation"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Vipassana vs other meditation traditions
          </Link>
          <Link
            href="/alternative/felt-sense-vs-mental-image-meditation"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Felt sense vs mental image meditation
          </Link>
          <Link
            href="/guide/vipassana-meaning"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            What Vipassana means
          </Link>
          <Link
            href="/guide/scientific-evidence"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Scientific evidence for Vipassana
          </Link>
          <Link
            href="/practice-buddy"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Practice buddy matching
          </Link>
        </div>
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Vipassana or Zen? 15 minutes with an old student."
      />
    </article>
  );
}
