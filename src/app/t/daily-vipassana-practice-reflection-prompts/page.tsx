import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ProofBanner,
  StepTimeline,
  GlowCard,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/daily-vipassana-practice-reflection-prompts";
const PUBLISHED = "2026-05-12";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Daily Vipassana practice reflection prompts: why this site publishes zero",
  description:
    "Every meditation-prompts listicle ships 10 to 30 reflection prompts for daily practice. vipassana.cool publishes zero. The principled reason, what the four common prompt shapes quietly trade, and what the site ships instead.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Daily Vipassana practice reflection prompts: why this site publishes zero",
    description:
      "The honest answer to a request for daily-practice reflection prompts in a Goenka-tradition context. A reflective essay from 945+ days of daily practice and six 10-day courses.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Daily Vipassana practice reflection prompts: zero, on purpose",
    description:
      "Four common prompt shapes, what each one trades for a Goenka old-student sit, and the paper sheet the site ships instead.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "Does vipassana.cool publish daily reflection prompts for old students?",
    a: "No. The site publishes exactly zero daily-practice reflection prompts. The closest thing to a tracker shipped on the site is a printable one-page paper log at /daily-sit-log/print: 366 squares, AM and PM split by a diagonal, four sentences of footer instruction, and not a single fillable field beyond a binary stroke for sat or did not sit. The decision to ship that sheet and not a prompt list is the argument of this page. The shorter version: the operational guidance for what to notice during or after a Goenka-tradition sit is reserved for authorized assistant teachers at a 10-day residential course arranged through dhamma.org, and post-sit prompts that try to substitute for that guidance, however well-meant, end up shaping the next sit in ways most old students I have talked to do not want.",
  },
  {
    q: "What are the common shapes that meditation reflection prompts take?",
    a: "After looking at the prompt lists most often surfaced for meditation-related queries (mindfulness app blog posts, generic wellness journal templates, Notion meditation-template marketplaces), four shapes account for almost all of them. The body-state shape asks what you noticed in the body during the sit (warmth, tension, where awareness landed). The mood shape asks how you felt before and after, often on a numeric scale. The insight shape asks what came up as thought or memory and whether it taught you something. The intention shape asks what you want to bring out of the sit into the rest of the day. Most pages mix two or three of these. This essay walks through each one and asks what it costs a Goenka old-student sit specifically.",
  },
  {
    q: "Why are body-state prompts the most cautious case?",
    a: "Because they overlap most directly with what the tradition reserves to teachers. The technique transmitted at a 10-day course gives the practitioner a specific set of observations to make in the body, a specific order, and a specific framing for how to relate to what comes up. Those instructions are not difficult to summarize on the internet (many people have summarized them, badly), but the Goenka tradition's long-standing request is that they not be summarized or paraphrased outside the residential course setting. A post-sit prompt that asks 'what did you notice in the body' is, structurally, a request to inventory the very content that the course taught you to observe. Even if the intent is reflection rather than instruction, the inventory tends to firm up into a vocabulary, and the vocabulary tends to start steering subsequent sits. The honest move is to not publish that prompt at all, which is what this site does.",
  },
  {
    q: "Mood-tracking is the most universal prompt. Why is it on the cautious list too?",
    a: "Mood tracking is not technique-adjacent in the same way body-state is, so the concern is different. The concern is that a numeric mood scale before and after a sit converts the sit into an instrument for changing the number. The tradition's framing of daily practice is not that the sit should feel better afterward (sometimes it does, sometimes it does not). It is that you sit, you get up, and you get on with the day, and the work of the technique is structural rather than felt. A two-month run of pre-sit and post-sit mood scores tends to retrain the practitioner to evaluate sits by whether the score moved, which is the wrong tool for the job. People I have talked to who track mood for life-journal reasons keep doing it; people who tied the mood column specifically to the sit tended to remove it within a few months.",
  },
  {
    q: "What about insight prompts? Surely those are harmless?",
    a: "Less harmless than they look. An insight prompt at the end of a daily sit asks the practitioner to convert a 45-minute event into a sentence. The sentence is almost always slightly ahead of the sit itself, in the sense that the writer is drafting what they want to have happened. The next morning the previous day's sentence sits in the back of the mind during the sit and shapes it. Over weeks the journal becomes a corpus of insights, and the corpus has the shape of a teaching even if no single entry was meant that way. For pre-course or post-course integration (a defined window, a few weeks at a time), an insight journal can work for some practitioners. For an indefinite daily practice, the same prompt running for a year is the case I have seen go wrong most often, including in my own log.",
  },
  {
    q: "Intention-setting prompts seem the most neutral. Are they?",
    a: "They are the most defensible of the four, and the practice I would push back on least, with one specific caveat. The caveat is whether the intention is set before the sit (about the sit) or after the sit (about the day). A pre-sit intention pulls expectation into the cushion, which is exactly the move the tradition asks you not to make. A post-sit intention about how to carry yourself in the rest of the day is more honestly a life-journal question, and lives well outside the loop that surrounds the sit. If you want one of the four prompt shapes, this is the version of it I have seen survive most cleanly over a long arc, with the post-sit framing.",
  },
  {
    q: "Is there a context where reflection prompts about the practice are appropriate?",
    a: "Yes. The clearest one is during a 10-day course itself, where the assistant teachers run question time and a few centers ask students to write down questions in advance. That is reflection on the practice with the right authority present. The second is a private journal entry written occasionally, by you, with full latitude to write whatever shape works for you. The third is a brief integration window after a course, typically four weeks or less, where some old students keep a short journal of what is moving and then stop. None of those three look like a checklist of standard daily prompts the way most listicles publish them.",
  },
  {
    q: "What does vipassana.cool ship in place of prompts?",
    a: "One paper sheet, a written guide library, a practice-buddy matching program, and a redirect to dhamma.org for anything operational. The paper sheet at /daily-sit-log/print is the binary did-I-sit tracker. The /guide path holds writeups about habit, post-course integration, dhamma service, and the surrounding question of how to keep a daily practice alive without making it a project. The practice-buddy program at /practice-buddy pairs old students for silent video sits as mutual accountability. None of these involve prompts about what to notice or how to feel. The shape is structural, not contemplative.",
  },
  {
    q: "How does this site avoid being prescriptive while still being useful?",
    a: "By restricting itself to the surrounding questions, not the inside-the-sit questions. The surrounding questions are practitioner experience, course logistics, the history and linguistics of the tradition, post-course integration, finding other old students to sit with, the four-week reentry window after a course, and the structural facts about courses, centers, dhamma service. These are real questions, and answering them does not require teaching the technique. The inside-the-sit questions, the ones a prompt list would try to cover, are explicitly redirected to dhamma.org and to an authorized assistant teacher at a course. The redirect is not avoidance; it is where the answer actually lives.",
  },
  {
    q: "I still want a list of prompts. Where would I look?",
    a: "Anywhere on the wider mindfulness and journaling internet, with the caveat that none of those lists are written with a Goenka-tradition practitioner in mind. The lists that exist are mostly downstream of secular mindfulness, app-marketed journaling, or generic gratitude practice. They are not bad lists; they just are not written for this practitioner. If you read one, the question I would carry to it is the one this essay tries to put on the table: what is the prompt asking me to do to the sit, and is that move one I want?",
  },
  {
    q: "Where does the practice question itself go?",
    a: "To dhamma.org for course logistics, the Code of Discipline, and the location of the nearest center, and to your assistant teacher at the center where you sat for anything personal. Neither of them will hand you a prompt list. They will answer the question by talking about practice, which is the answer most prompt-list pages are structurally unable to give.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Daily Vipassana practice reflection prompts" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Daily Vipassana practice reflection prompts", url: PAGE_URL },
];

const promptShapeSteps = [
  {
    title: "Body-state prompts",
    description:
      "What did you notice in the body during the sit? Where did attention land? What sensations came up? These overlap most directly with what the residential course transmits, which is why this site does not publish them.",
    detail: (
      <p className="text-sm text-zinc-600 leading-relaxed">
        Soft form of technique transmission. The vocabulary firms up over weeks of journaling and starts steering subsequent sits, which is exactly the loop the tradition's fair-trial framing asks practitioners not to add inputs to.
      </p>
    ),
  },
  {
    title: "Mood-tracking prompts",
    description:
      "Score your mood before the sit and after the sit on a 1 to 10 scale. Most universal prompt in the meditation-tracker market, and the one most likely to convert the sit into an instrument for moving the number.",
    detail: (
      <p className="text-sm text-zinc-600 leading-relaxed">
        Not technique-adjacent, but loops a self-evaluation signal into a practice that is structural rather than felt. People who keep mood as a general life journal column keep doing it. People who tied it to the sit usually removed the column within a few months.
      </p>
    ),
  },
  {
    title: "Insight prompts",
    description:
      "What came up as thought or memory? What did the sit teach you? These look harmless and tend to be the slowest-burning failure mode for a long-running daily practice.",
    detail: (
      <p className="text-sm text-zinc-600 leading-relaxed">
        Converts a 45 to 60 minute event into a sentence. The sentence is almost always slightly ahead of the sit, the next morning's sit sits underneath the previous sentence, and over months the corpus of insights starts to look like a teaching nobody meant to write.
      </p>
    ),
  },
  {
    title: "Intention-setting prompts",
    description:
      "What do you want to bring out of the sit into the day? The most defensible of the four, with one specific caveat about whether the intention is set before or after the sit.",
    detail: (
      <p className="text-sm text-zinc-600 leading-relaxed">
        Pre-sit intentions pull expectation into the cushion, which is the move the tradition asks you not to make. Post-sit intentions about the rest of the day are honestly a life-journal question and live outside the loop around the sit. The post-sit framing is the version I have seen survive cleanly.
      </p>
    ),
  },
];

const relatedPosts = [
  {
    title: "Printable daily sit log (free, one page)",
    href: "/daily-sit-log/print",
    excerpt:
      "366 squares, AM and PM split by a diagonal, four sentences of footer instruction. Zero prompts, zero fields. The structural answer this page argues for, already shipped.",
    tag: "Resource",
    readTime: "1 page",
  },
  {
    title: "Notion template for daily sit tracking",
    href: "/t/notion-template-daily-sit-tracking",
    excerpt:
      "A column-by-column walk through what every Notion meditation template ships with, what each field costs the practice, and the two-column Notion database that mirrors the paper sheet.",
    tag: "Essay",
    readTime: "10 min read",
  },
  {
    title: "Offline voice journal for daily sits",
    href: "/t/offline-voice-journal-for-daily-sits",
    excerpt:
      "The question underneath the app-review question. What offline quietly stopped meaning, and whether to journal a sit at all. The audio sibling of this page.",
    tag: "Essay",
    readTime: "8 min read",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Daily Vipassana practice reflection prompts: why this site publishes zero",
    description:
      "A reflective essay from 945+ days of daily practice on the four shapes that meditation reflection prompts take, what each shape quietly trades for a Goenka old-student sit, and the binary paper log this site ships instead.",
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
          A reflective essay, not a checklist
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          Daily Vipassana practice reflection prompts: why this site publishes zero
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl leading-relaxed">
          Every meditation-prompts page on the wider internet lists 10 to 30
          reflection prompts for a daily sit. This site lists none. The decision
          is deliberate, and the reason has more to do with how the Goenka
          tradition is structured than with any opinion about journaling in
          general. What follows is an essay from 945+ days of daily practice and
          six 10-day courses, walking through the four common shapes that
          meditation reflection prompts take, what each shape quietly costs the
          practice, and what this site publishes instead. Not a teacher, not a
          coach, not a lineage authority. A peer practitioner sharing what
          worked and what did not.
        </p>
      </header>

      <div className="py-4">
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="11 min read"
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 md:p-7">
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-teal-700 mb-3">
            Direct answer · verified 2026-05-12
          </p>
          <p className="text-zinc-800 text-[15px] md:text-base leading-relaxed">
            There are no daily-practice reflection prompts on this site.
            Vipassana.cool publishes zero, on purpose. The technique itself
            reserves operational guidance about what to notice during or after a
            sit to authorized assistant teachers at a 10-day residential course
            arranged through{" "}
            <a
              href="https://www.dhamma.org/en/about/code"
              className="text-teal-700 underline hover:text-teal-900"
              rel="noopener noreferrer"
              target="_blank"
            >
              dhamma.org
            </a>
            , and post-sit prompts that try to fill that gap end up firming up
            into a vocabulary that steers subsequent sits. In place of prompts,
            the site ships one paper sheet at{" "}
            <Link
              href="/daily-sit-log/print"
              className="text-teal-700 underline hover:text-teal-900"
            >
              /daily-sit-log/print
            </Link>{" "}
            (366 squares, AM and PM split by a diagonal, zero fillable fields),
            a written guide library, and a practice-buddy matching program.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        <ProofBanner
          quote="Do not write the duration. Do not count streaks. If you miss a day, leave the square empty and sit tomorrow."
          source="The full set of instructions printed on vipassana.cool/daily-sit-log/print"
          metric="0"
        />
        <p className="text-xs text-zinc-500 mt-2">
          Number of prompt fields on the paper sheet this site ships. The instruction quoted above is the entire footer; the body of the sheet is a calendar grid with diagonal-split squares and nothing else.
        </p>
      </div>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The thesis, in one paragraph
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The Goenka tradition transmits a meditation technique inside a 10-day
          residential course, conducted by authorized assistant teachers, in a
          specific sequence, with specific framing for what to do with what comes
          up. Once a student leaves the course, the tradition&apos;s standing
          request is that the technique be practiced as it was transmitted: not
          described to others outside the course setting, not blended with other
          contemplative methods during the fair-trial window, and not
          reconstructed from secondhand summaries on the internet. A
          well-meaning daily-practice prompt list, however gentle, runs up
          against the second of those: it adds an external loop on top of the
          sit, the loop firms up into a vocabulary, the vocabulary starts to
          shape the next sit, and the closed feedback loop that the technique
          was designed to be stops being closed. That is the entire thesis. The
          rest of this page is what the four common prompt shapes look like up
          close, and why they each fail that test for different reasons.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          The relevant lineage context is in the existing essay on{" "}
          <Link
            href="/t/keeping-vipassana-practice-untouched"
            className="text-teal-700 underline hover:text-teal-900"
          >
            keeping the practice untouched
          </Link>
          . The short version is that the request not to mix is about
          measurement, not orthodoxy. Adding inputs to the loop while you are
          still trying to read the loop makes the loop unreadable.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What &ldquo;reflection prompts&rdquo; actually means out there
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          I read through the prompt lists that surface most often for
          meditation-related journaling queries. The pattern is consistent
          enough to characterize. Four shapes account for almost every prompt
          in almost every list: body-state, mood, insight, and intention. Most
          lists mix two or three of them. A few add gratitude rows, a few add
          relationship rows, but those are downstream of secular wellness
          journaling and are not specifically meditation prompts. The four below
          are the ones a Vipassana old student would actually be choosing
          between.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          The next visual lays them out as four shapes, with a one-sentence
          description and a one-paragraph note on what the prompt costs this
          particular sit. The order is from most cautious to most defensible.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        <StepTimeline
          title="The four shapes daily-practice prompts take"
          steps={promptShapeSteps}
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Body-state prompts: where the line is most clearly crossed
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          A body-state prompt is the most common opener on a meditation-prompt
          list. It asks the practitioner to write down what they noticed in the
          body during the sit. On its face, it reads as gentle, generic, almost
          impossible to object to. The reason I do not publish one on this site
          is that for a Goenka-tradition practitioner, the prompt is doing
          something specific underneath the friendly framing. The 10-day course
          gives the practitioner a particular set of observations to make in the
          body, in a particular order, with a particular relationship to what
          comes up. The course also gives the practitioner an understanding of
          why those observations are framed that way, which is the part nobody
          on the internet can transmit. A post-sit prompt that asks for an
          inventory of the body-state asks the practitioner to write down the
          content of the very observation the course taught, in their own
          words, for their own corpus.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The first few entries are usually clumsy and short. By week three the
          practitioner has settled into a vocabulary. By month two the
          vocabulary has stabilized, and a subset of phrases turns into the
          go-to descriptions of what a sit was like. From that point on, the
          journal is faster to write, which everyone treats as a win, but the
          vocabulary is also operating in the background during the next sit.
          The practitioner is noticing what the vocabulary primes them to
          notice. The technique was designed to read what is actually there.
          The journal, by month three, has reorganized the read. This is small.
          It compounds. It is the failure mode I have watched in my own log and
          in conversations with maybe two dozen other old students who tried a
          variant of this.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          The honest move, in my reading, is to not publish a body-state prompt
          at all. Anything that needs to be said about body-state observation
          during a Vipassana sit is the kind of thing that gets said at a
          course, by an assistant teacher, in person, in answer to a specific
          question. None of those properties carry over to a generic web page.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Mood prompts: the instrument problem
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          Mood prompts are the most universal item across meditation trackers.
          They take the form of a pre-sit score (1 to 10, or a five-emoji
          scale) and a post-sit score, with the implicit story that the
          delta-between-the-scores is what the sit produced. The issue here is
          different from the body-state issue. Mood is not technique-adjacent;
          it is just an evaluative loop. The problem is that running an
          evaluative loop on a sit converts the sit into an instrument for
          moving the number.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The Goenka framing of daily practice is structural, not felt. You
          sit, you get up, you go on with the day. Sometimes the sit feels
          smooth, sometimes it feels muddy; the work the technique is doing is
          not legible from the felt-tone of any individual sit. A two-month run
          of mood scores attached to sits retrains the practitioner to evaluate
          the sit by whether the second number is higher than the first. That
          target is sometimes available, often not, and increasingly absent
          over the long arc, which is the right direction. A score-shaped
          measurement that is sometimes higher and sometimes lower, with no
          trend, reads as the technique failing if you only have the score to
          look at. It is not failing. The score is the wrong instrument.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          A pattern I have seen repeatedly: a practitioner who is otherwise
          comfortable with general life journaling, including mood tracking,
          will sometimes try mood-tracking the sit specifically for a few months
          and then quietly remove the column. The general life-journal mood
          column stays. The sit-specific column comes out. It is the most
          common piece of journaling apparatus I have seen retired without
          comment.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Insight prompts: the slow-burn failure mode
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          Insight prompts ask the practitioner to record what came up during
          the sit, what it taught them, or what shifted. They are the most
          editorially flattering of the four shapes. The list of prompts looks
          serious. The reader feels respected. The output of the journal looks
          like a developing personal practice. These are also the prompts I
          have watched go wrong over the slowest timescale, my own log
          included.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The mechanism is editorial, not contemplative. An insight prompt is
          a request to convert a 45 to 60 minute event into a sentence. The
          sentence will exist; the journal demands one. The sentence the
          practitioner writes is almost always slightly ahead of the sit it
          describes, in the sense that the writer is drafting what they wanted
          to have happened. The drafting is unconscious. The next morning,
          before the next sit, the previous day&apos;s sentence is sitting in
          the back of the mind. The sit starts under the previous day&apos;s
          sentence as a kind of soft template. Over weeks, the journal
          accumulates a corpus of insights. The corpus has the shape of a
          teaching. Nobody intended that. It happens anyway.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          The defensible version of insight journaling, in my experience, is
          time-bounded. A two-week window after a course, where so much is
          moving at once that some kind of capture is honest. After that
          window, the journal usually outlives its useful life. The site has a
          related guide on{" "}
          <Link
            href="/t/post-retreat-reentry-crash"
            className="text-teal-700 underline hover:text-teal-900"
          >
            the post-retreat reentry crash
          </Link>{" "}
          that walks through what specifically tends to come up in those weeks
          and why a defined-window journal can be useful there.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Intention prompts: the most defensible, with one caveat
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          Intention prompts ask the practitioner to articulate what they want
          to bring out of the practice into the rest of the day. They are the
          shape I would push back on least, because the object of the prompt
          is the day rather than the sit. The caveat is whether the intention
          is set before or after the sit. A pre-sit intention pulls expectation
          into the cushion, which is the one move the tradition&apos;s
          framing fairly explicitly asks the practitioner not to make.
          Expectation is the precursor to the felt-tone evaluation problem
          above. A post-sit intention about how to carry yourself in the rest
          of the day is honestly a life-journal question rather than a
          meditation-journal question, and it lives well outside the loop
          around the sit.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          If a practitioner wants one of the four shapes, this is the one I
          have seen survive cleanly over a long arc, with the post-sit framing
          and with the understanding that the journal entry is a life journal
          that happens to be calendar-adjacent to the sit, not a journal of the
          sit. The same notebook, the same five minutes, but the topic is the
          day in front of you. That distinction quietly does most of the work.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6 my-14">
        <GlowCard className="p-6 md:p-8">
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-teal-600 mb-3">
            The rule of thumb that survived
          </p>
          <p className="text-xl md:text-2xl text-zinc-900 leading-snug font-medium">
            Journal next to the sit, not about the sit. Track sat or did not sit
            on the binary side. Everything else belongs at the residential
            course, with a teacher, in person.
          </p>
          <p className="mt-4 text-sm text-zinc-600 leading-relaxed">
            This is what 945+ days of daily practice and six 10-day courses
            have left me with. It is not advice; I am not your teacher. It is
            the description of what worked for me and what I see working for
            most of the old students I have talked to. The structural piece (a
            calendar mark) and the reflective piece (a life journal that lives
            chronologically near the sit) do not conflict. The thing this page
            is cautious about is the third object that listicles try to put in
            the middle: a journal of the sit itself.
          </p>
        </GlowCard>
      </div>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What this site ships instead
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          Four things, none of which are prompts. The first is the printable
          paper sheet at{" "}
          <Link
            href="/daily-sit-log/print"
            className="text-teal-700 underline hover:text-teal-900"
          >
            /daily-sit-log/print
          </Link>
          : one page, 366 squares, AM and PM split by a diagonal. The
          instruction footer is one paragraph and reads in full: do not write
          the duration, do not count streaks, if you miss a day leave the
          square empty and sit tomorrow. The constraint that makes the sheet
          useful is not the offline-ness; paper is offline by default. It is
          the binary-ness. The sheet only records did-you-sit. It does not
          record what happened. That refusal to capture anything beyond the
          mark is the entire point.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The second is the written guide library at{" "}
          <Link
            href="/guide/daily-practice"
            className="text-teal-700 underline hover:text-teal-900"
          >
            /guide/daily-practice
          </Link>{" "}
          and the sibling pages under /guide. Those pages describe habit,
          continuity, dhamma service, the post-course window, and the supports
          most old students lean on. None of them describe the technique. The
          shape of those pages is descriptive rather than imperative: what
          happens at courses in general, what students commonly report, what
          structures around daily practice tend to help. Pages that come close
          to operational questions hand them to dhamma.org and to an authorized
          assistant teacher at the center where you sat.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The third is the practice-buddy matching program at{" "}
          <Link
            href="/practice-buddy"
            className="text-teal-700 underline hover:text-teal-900"
          >
            /practice-buddy
          </Link>
          . Two old students get paired, agree on a regular video sit time, and
          sit together in silence. The practice itself is not shared or
          discussed during the sit. The point is mutual accountability, not
          mutual instruction. This is the social structure that, in my
          experience, does most of the work that a prompt journal is reaching
          for. If you want something outside yourself that keeps the daily sit
          on the calendar, another practitioner showing up at 6:45am on a video
          link is meaningfully more reliable than any journal column.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          The fourth is the explicit redirect at the bottom of every page on
          this site to{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-700 underline hover:text-teal-900"
            rel="noopener noreferrer"
            target="_blank"
          >
            dhamma.org
          </a>{" "}
          and to the assistant teacher at the center where you sat for anything
          operational. The redirect is not deflection. It is the answer. The
          questions a prompt list pretends to address (how to relate to
          sensation, what to do with what comes up, how to deepen practice) are
          questions with real answers, and the real answers are given by people
          authorized to give them, in a residential course setting where the
          context is intact.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          If you have to keep something, here is what survives
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          A pattern I have seen survive five years of daily practice in
          multiple practitioners, including me, distills to two things.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          One: a binary tracker. Paper or otherwise. AM stroke, PM stroke,
          nothing else. The 366-square sheet on this site is the maximal
          version of this. A single checkbox in any notes app is the minimal
          version. Both work. The constraint is that the tracker refuses to
          record anything beyond did-you-sit. The moment a duration column or
          a notes column appears, the tracker has stopped being a binary
          tracker and has become a journal of the sit, which is the loop this
          essay is cautious about.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          Two: a general life journal, kept on its own schedule, that does not
          take the sit as its subject. Many old students keep one. Some write
          daily, some write weekly, some only when something is moving. The
          journal is about the rest of life. It happens to live next to the
          sit on the calendar, and that calendar adjacency is enough. The
          journal carries the reflective load. The sit is left to be the sit.
          The two pieces, in combination, do everything a prompt list claims
          to do and avoid the failure modes the four prompt shapes above each
          run into.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          Neither of those two requires a product, a template, a Notion
          database, or a prompt list. Both can be set up in five minutes with
          a piece of paper and a pen. The closest thing this site ships is the
          paper sheet for the first one. The second one is yours to design,
          on your own terms, with no help from a meditation site.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The context where prompts are genuinely appropriate
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          There is one context inside the Goenka tradition where reflection on
          the practice is structurally invited: question time at a course. An
          assistant teacher sits with the group, students bring whatever has
          come up, and the teacher answers in the framing the tradition was
          built in. Several centers ask students to write down questions
          between sittings so the answers can be coherent rather than
          improvised. That is the moment when reflection prompts and authority
          line up. It is also a moment that lasts ten days and then ends.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The second context, sliding a little further from the center, is the
          first few weeks after a course. The body and mind are still settling
          out of the residential frame, a lot is moving at once, and a short
          journal can be useful purely because the alternative is to drop the
          throughline entirely. The related essay on{" "}
          <Link
            href="/t/post-course-integration-into-daily-life"
            className="text-teal-700 underline hover:text-teal-900"
          >
            post-course integration
          </Link>{" "}
          covers what specifically tends to surface in that window. The
          observation I would add is that the integration journal works best
          when it has an end date built in. Two weeks, four weeks, a month.
          The journal closes, the daily sit continues, and the journal does
          not become the permanent shape of the practice.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          The third context, which is not really a prompt list but is worth
          naming, is a private conversation with another old student. The
          practice-buddy pairs on this site sometimes drift into that, and
          when it works it works because there are two old students under the
          same tradition&apos;s framing, talking peer-to-peer, with no
          claim to teach. The thing that does not work, and what most prompt
          lists try to do, is to replicate that conversation as a checklist a
          single practitioner runs by themselves at the end of a sit. The
          checklist version drops the other half of the conversation, which
          is the half that does the real work.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Where the operational question goes
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          Everything in this essay is about the surrounding question: what
          shape should the structure around a daily sit take, what should it
          record, and what should it deliberately not record. The actual
          practice question, the one about how to sit, what to do during the
          sit, how to relate to what comes up, what to make of any particular
          sit, is the question this site has been careful not to answer for
          the entire arc of its existence.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          The right channels are{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-700 underline hover:text-teal-900"
            rel="noopener noreferrer"
            target="_blank"
          >
            dhamma.org
          </a>{" "}
          for course logistics, the Code of Discipline, and the nearest
          center, and the assistant teacher at the center where you sat for
          anything personal. They will not respond by handing you a prompt
          list. They will respond by talking about practice. That is the
          response a prompt list cannot give, which is exactly why a prompt
          list is the wrong shape to be reaching for.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6 my-14">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          section="guide-footer"
          heading="Talk through the structure around your sit, not the sit itself"
          description="A 25-minute call with another old student. We can cover consistency, integration after a course, and the practice-buddy matching program. Not a teacher, not a coach. Just a peer."
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 my-14">
        <RelatedPostsGrid
          subtitle="Adjacent reading"
          title="Other pieces on this site about the same set of questions"
          posts={relatedPosts}
        />
      </div>

      <div id="faq" className="max-w-4xl mx-auto px-6 my-14">
        <FaqSection items={faqs} />
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="guide-sticky"
        description="Talk daily-sit consistency with another old student. 25 min, no pitch."
      />
    </article>
  );
}
