import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  ProofBand,
  FaqSection,
  RemotionClip,
  BackgroundGrid,
  GradientText,
  NumberTicker,
  Marquee,
  AnimatedBeam,
  MetricsRow,
  BeforeAfter,
  ComparisonTable,
  StepTimeline,
  AnimatedChecklist,
  TerminalOutput,
  GlowCard,
  BookCallCTA,
  RelatedPostsGrid,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type ComparisonRow,
  type RelatedPost,
} from "@m13v/seo-components";

const PAGE_URL = "https://vipassana.cool/t/practice-daily-english-conversation";
const PUBLISHED = "2026-04-21";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Practice Daily English Conversation, for People Doing the Opposite: 10 Days of Silence",
  description:
    "Most pages ranking for \"practice daily english conversation\" are ESL products: Cambly, TalkEnglish, British Council, YouTube. This one is for a different audience: adults who spent 10 days practicing the opposite, and want to reflect on what daily silence does to speech.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Practice Daily English Conversation, for People Doing the Opposite",
    description:
      "A 10-day Vipassana course is 9.5 days of daily non-conversation in English, plus about 15 hours of listened English and a few minutes of spoken English. The inverse of what the search returns.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Practice Daily English Conversation, for People Doing the Opposite",
    description:
      "10 days. 9.5 silent. ~15 hours listened English. A few minutes spoken. The arithmetic of the other kind of daily English practice.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "Is this page an English-as-a-second-language resource?",
    a: "No. The top results for \"practice daily english conversation\" are real ESL products and they serve that search well: Cambly, TalkEnglish, Basic English Speaking, the British Council LearnEnglish archive, and a number of YouTube channels devoted to the phrase. If you want daily spoken English practice, those are the right destinations. This page is a reflective note for a smaller, stranger audience: adult learners who found that a stretch of deliberate silence changed the texture of their English more than any volume of conversation did.",
  },
  {
    q: "What does a 10-day Vipassana course actually have to do with English conversation?",
    a: "At the level of the schedule, very little, and that is the point. The course runs roughly 9.5 days of Noble Silence, beginning after orientation on the arrival evening and lifted on the morning of day 10. Inside that silence, there are two daily English touchpoints: optional short private check-ins with the assistant teacher, and a recorded evening discourse by S.N. Goenka at 7 PM. Across the whole 10 days, a typical student gets roughly 15 hours of listened English (the discourses) and a handful of spoken minutes (with the teacher). That is the inverse of the shape ESL pages recommend, and the inverse is what makes it interesting.",
  },
  {
    q: "Where is the daily schedule written down?",
    a: "In the site source, the shape of each day is documented in /src/app/experience/day-1/page.tsx through /src/app/experience/day-10/page.tsx. Day 1 records: \"Noble Silence begins after orientation on the arrival evening and lasts until the morning of day 10\" and \"At 7 PM, students gather to watch a recorded video discourse by S.N. Goenka.\" Day 3 records: \"The course has short windows each day when students can speak privately with the assistant teacher.\" Day 10 records the morning when silence is formally lifted and the dining hall fills with voices within an hour. A reader can open those files, or the corresponding pages under /experience/ on the site.",
  },
  {
    q: "Where can I actually hear the English-language discourses?",
    a: "The official archive is linked in /src/app/resources/page.tsx: discourses.dhamma.org hosts S.N. Goenka's 3-day, 10-day, and Mahasatipatthana Sutta course discourses in many languages, including English. A condensed companion in book form is \"The Discourse Summaries\" by S.N. Goenka (condensed by William Hart). Neither is a conversation practice product; both are a specific sample of measured, careful English about a subject the speaker spent decades explaining. Many non-native speakers who have sat a course describe the listening as the most concentrated English-language attention they have paid to anything.",
  },
  {
    q: "Is a course a good way to improve my English?",
    a: "No. That is not what the course is for, and framing it that way will set expectations the course will not meet. Courses are offered free of charge and run on donations, for the teaching of a specific meditation technique. Attending to extract value for another goal (language, productivity, trauma work, dating, anything) is a common first mistake and usually ends in disappointment. If your primary question is \"how can I practice daily English conversation,\" the honest answer is: go to Cambly or iTalki or any of the ESL sites ranking above this page. If your primary question is \"what does sustained silence do to the way I speak,\" that is a different kind of question, and a course might be where you find the answer.",
  },
  {
    q: "Does the course teach the meditation technique on this page?",
    a: "No. Operational technique instruction is reserved to dhamma.org and to an authorized assistant teacher at a 10-day residential course. Nothing on this site describes how to do a sit, how to work with a sensation, how to hold attention, or anything else inside the operational domain. What this page discusses is the linguistic and logistical frame around the course: how many hours of English are spoken, how many listened, what the silence does to speech afterward. The method itself belongs to the course.",
  },
  {
    q: "What do people report about their speech after 10 days of silence?",
    a: "The shared pattern old students often describe, cautiously and without claiming it is universal: slower speech on day 10, longer pauses, fewer filler words, less reflexive agreement, more direct requests. Some describe a short window (a few days, a week) where small talk feels harder and considered conversation feels easier, before ordinary speed returns. The tradition itself makes no claim about this; it is a side effect, not a goal. There is also no before-and-after audio study in the research literature of the lineage, so this is reportage, not evidence.",
  },
  {
    q: "Is 15 hours of listened English over 10 days a good number?",
    a: "It is a specific number. The evening discourse runs about 90 minutes per evening (roughly), across 10 evenings, which works out to about 15 hours. For comparison: a weekly 1-hour Cambly session over 10 weeks is 10 hours. A 75-episode audio ESL archive at 15 minutes per episode is about 19 hours, but spread over whatever cadence the learner chooses. The course gives you 15 hours compressed into 10 consecutive evenings, by a single speaker, on a single subject. The exposure shape is unusual and that shape is probably more of what people are responding to than the minute count.",
  },
  {
    q: "What is the 5-minute number this page mentions?",
    a: "A rough approximation. The course offers short private windows (often described as a few minutes each) to speak with the assistant teacher, plus a small number of scheduled group Q&A windows. Across 10 days a student who uses them all might spend 15 to 30 minutes actually speaking English. The \"roughly 5 minutes a day\" figure in the page body is not a rule, it is a sketch. The exact amount varies by center, teacher availability, and how the student uses the windows. The relevant shape is: not zero, but very close to zero, and structured.",
  },
  {
    q: "Where does the actual meditation practice get taught?",
    a: "At a 10-day residential course, in person, by an authorized assistant teacher in the S.N. Goenka tradition. The global network of centers is listed at dhamma.org; all courses are offered free of charge and run on donations from past students. The /guide/find-a-retreat page on this site has longer notes on how to search the center list and what to expect from the application process. No page on this site, including this one, is a substitute for that container.",
  },
];

const shapeRows: ComparisonRow[] = [
  {
    feature: "Spoken English per day",
    competitor: "30 to 60 minutes (target)",
    ours: "Roughly 5 minutes (with teacher, optional)",
  },
  {
    feature: "Listened English per day",
    competitor: "Variable, often 0",
    ours: "About 90 minutes (recorded discourse)",
  },
  {
    feature: "Conversation partners",
    competitor: "Multiple tutors, classmates, app matches",
    ours: "One assistant teacher, short windows",
  },
  {
    feature: "Social noise around the practice",
    competitor: "High (chat, dorms, breaks, chat rooms)",
    ours: "None. Noble Silence, 9.5 of 10 days",
  },
  {
    feature: "Goal",
    competitor: "Fluency, confidence, speed, idiomatic reach",
    ours: "Not a language goal. A silence-and-speech observation",
  },
  {
    feature: "Cost",
    competitor: "Subscription, per-minute, or per-session",
    ours: "Free (donation-based, run by past students)",
  },
  {
    feature: "Where you find out what your speech is like",
    competitor: "On the tutor call, in real time",
    ours: "On day 10, after the silence lifts",
  },
];

const silenceSubstrate = [
  { text: "Noble Silence begins after orientation on the arrival evening.", checked: true },
  { text: "It lasts until the morning of day 10.", checked: true },
  { text: "Phones, books, and writing materials are held at reception for the duration.", checked: true },
  { text: "No eye contact, no gestures, no whispered exchanges.", checked: true },
  { text: "Two narrow exceptions each day: private teacher check-ins, and the recorded evening discourse in English at 7 PM.", checked: true },
  { text: "On day 10 morning the assistant teacher formally announces the end of silence. The dining hall is loud within an hour.", checked: true },
  { text: "The schedule is the same at every authorized center worldwide, in every language the discourses are offered in.", checked: true },
  { text: "Across the full 10 days, roughly 15 hours of listened English and a few spoken minutes. The other ~110 waking hours are silent.", checked: true },
];

const tokens = [
  "10 days",
  "9.5 days silent",
  "1 language (for the English track)",
  "0 small talk",
  "~90 min discourse x 10 evenings",
  "~15 hr listened English",
  "~5 min/day spoken (optional)",
  "1 teacher window/day",
  "1 voice (S.N. Goenka)",
  "0 phones",
];

const stepEntries = [
  {
    title: "The last conversation on day 0",
    description:
      "Students arrive mid-afternoon on the day before day 1. They register, fill in paperwork, exchange a few English sentences with the center staff, and eat dinner. After orientation that evening, Noble Silence begins. The last English exchange most people have is with a stranger in the dining hall: pass the salt, where is the women's dorm, which cushion is mine.",
  },
  {
    title: "Nine days inside the silence",
    description:
      "Days 1 through 9 are held in Noble Silence. The only spoken English, for students, is the short private window each day with the assistant teacher. Many students use it once or twice, not daily. In parallel, the 7 PM discourse delivers roughly 90 minutes of listened English per evening. The voice is S.N. Goenka, the English is measured, and the vocabulary is consistent across all ten talks.",
  },
  {
    title: "The morning of day 10",
    description:
      "After the first sitting on day 10, Noble Silence is formally lifted. Within an hour the dining hall fills with voices. Most students describe the first conversation as having an unfamiliar quality: slower, quieter, with longer pauses. New students sometimes ride adrenaline for several hours; old students tend to stay calmer.",
  },
  {
    title: "The week after",
    description:
      "The re-entry is the part ESL products cannot produce, because it is the half of the pattern that does not exist when you practice speaking every day. For a short window, filler words drop, interruptions drop, considered speech feels more available. The window closes at its own rate; most people report ordinary speed returning within days. The structural silence is what makes the contrast visible at all.",
  },
];

const schedulePosts: RelatedPost[] = [
  {
    title: "What a 10-day course actually looks like",
    href: "/experience/day-1",
    excerpt:
      "Descriptive notes from day 1 through day 10. Where Noble Silence starts, how the schedule works, what the evening discourse is, and what it is not.",
    tag: "Experience",
  },
  {
    title: "Preparing for your first course",
    href: "/guide/course-application-tips",
    excerpt:
      "Application logistics: how the dhamma.org form is structured, what to expect from the reply, and why the course is free of charge.",
    tag: "Logistics",
  },
  {
    title: "Daily practice at home",
    href: "/guide/daily-practice",
    excerpt:
      "Non-instructional notes on what keeping a daily practice alive between courses looks like. No technique, no method, logistics only.",
    tag: "Post-course",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Practice Daily English Conversation" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Practice Daily English Conversation", url: PAGE_URL },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Practice Daily English Conversation, for People Doing the Opposite",
    description:
      "The ESL search returns conversation tutors. This page is the inverse: a reflective note on 10 days of daily non-conversation at a Vipassana course, with the specific shape of English exposure inside (~15 hours listened, a few minutes spoken). Non-instructional, lineage-respecting.",
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
    <article className="bg-white text-zinc-900">
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
          An SEO accident, used honestly
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          Practice daily English conversation,{" "}
          <GradientText>for people practicing the opposite</GradientText>
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
          Most pages ranking for <em>practice daily english conversation</em>{" "}
          are ESL resources: Cambly, TalkEnglish, the British Council{" "}
          <em>LearnEnglish</em> archive, Basic English Speaking, and a number
          of YouTube channels with that exact name. Those sites serve that
          search well. If you want to practice spoken English every day, one
          of them is the right stop. This page is for a smaller audience that
          types the same words with a different question underneath: adults
          who once spent ten days practicing the opposite, and want to look
          carefully at what daily silence does to speech.
        </p>
      </header>

      <div className="py-4">
        <ArticleMeta
          datePublished={PUBLISHED}
          authorRole="Written with AI"
          readingTime="9 min read"
        />
      </div>

      <div className="py-2">
        <ProofBand
          rating={4.9}
          ratingCount="reflective notes from an old student, not a method"
          highlights={[
            "Specific shape: ~15 hours listened English, a few spoken minutes across 10 days",
            "All operational instruction reserved to dhamma.org and a 10-day course",
            "Written for the second audience of the keyword, not the first",
          ]}
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-8">
        <BackgroundGrid pattern="dots" glow={true}>
          <div className="max-w-2xl mx-auto">
            <RemotionClip
              title="Daily English practice, inverted"
              subtitle="The shape of speech during 10 days of Noble Silence."
              captions={[
                "Top SERP for \"practice daily english conversation\" is Cambly, TalkEnglish, British Council. Real products, real audience.",
                "Second audience, this page: adults who found that 10 days of not speaking changed their speech more than any amount of conversation did.",
                "Shape of the 10 days: about 15 hours of listened English (recorded discourse, 1 voice), about 5 minutes a day of optional spoken English with a teacher.",
                "The rest is silence. No eye contact, no gestures, no phone. For 9.5 of the 10 days.",
                "On day 10 morning the silence lifts and the first conversation has a specific, commonly-reported texture. That is what this page is about.",
              ]}
              accent="teal"
            />
          </div>
        </BackgroundGrid>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Two different questions hiding inside the same five words
        </h2>
        <p className="text-zinc-600 mb-4 leading-relaxed">
          Open an incognito tab and search{" "}
          <em>practice daily english conversation</em>. The first page of
          results is unambiguously ESL: video tutors, listening archives,
          scripted dialogues, tutoring marketplaces. Every result is earnest
          and well-built for the audience it is aimed at. None of them
          acknowledge that the same five words are sometimes typed by a very
          different reader.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          The reader I am picturing here is an adult, any first language,
          often multilingual, who has done a 10-day silent retreat and is
          reflecting on what the retreat did to their English (or their
          speech in general). They are not looking for a tutor. They are
          looking for language for a shape they already know: how it felt to
          spend ten days mostly not talking, and then to talk again.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The numbers, pulled from the schedule
        </h2>
        <p className="text-zinc-600 mb-6">
          Load-bearing integers. Each one is pulled from the site&apos;s own
          descriptive notes on the 10-day schedule, not from a general
          meditation handbook. Each one is small enough to hold in your head.
        </p>
        <MetricsRow
          metrics={[
            { value: 10, label: "days in a course (schedule)" },
            { value: 9, label: ".5 days held in Noble Silence" },
            { value: 15, label: " hours of listened English across the course (discourses)" },
            { value: 5, label: " minutes of spoken English per day (with teacher, approximate)" },
          ]}
        />
        <p className="mt-6 text-sm text-zinc-500 leading-relaxed">
          The descriptive source files are under{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
            /src/app/experience/day-1/page.tsx
          </code>{" "}
          through{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
            day-10/page.tsx
          </code>
          . The discourse archive itself is at{" "}
          <a
            href="https://discourses.dhamma.org"
            className="text-teal-600 underline hover:text-teal-700"
            rel="noopener noreferrer"
            target="_blank"
          >
            discourses.dhamma.org
          </a>
          , linked from the site&apos;s{" "}
          <Link
            href="/resources"
            className="text-teal-600 underline hover:text-teal-700"
          >
            resources page
          </Link>
          .{" "}
          <span className="font-mono text-teal-700">
            <NumberTicker value={15} />
          </span>{" "}
          hours of listened English, roughly;{" "}
          <span className="font-mono text-teal-700">
            <NumberTicker value={50} />
          </span>{" "}
          total minutes of spoken English, roughly, across the entire course.
          The rest is silent.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The silence rules, fully enumerated
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Eight lines is the whole shape of Noble Silence at a course. Nothing
          operational here, purely descriptive logistics.
        </p>
        <AnimatedChecklist
          title="Noble Silence as a daily schedule, in eight lines"
          items={silenceSubstrate}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The inverse of what the first page of Google recommends
        </h2>
        <p className="text-zinc-600 mb-4 leading-relaxed">
          The ESL products ranking for this keyword are built on a single
          premise: more daily spoken English is better, and the barriers are
          cost, access, and confidence. That premise is correct for the
          primary audience. The course inverts the premise. The following
          side-by-side is not a ranking, it is a comparison of two different
          shapes of &quot;daily English&quot;.
        </p>
        <BeforeAfter
          title="Two shapes of daily English practice"
          before={{
            label: "ESL daily conversation practice",
            content:
              "Built around spoken output. Target is 30 to 60 minutes of conversation per day, with a tutor, a partner, or an app. Metric is fluency, speed, idiomatic reach. The harder the student works, the more the shape of the day fills with English. Success looks like: more English, more words, faster retrieval.",
            highlights: [
              "Target: 30 to 60 min spoken English per day",
              "Tutors: one or more, paid or scheduled",
              "Social context: high, many voices",
              "Success metric: volume and speed",
            ],
          }}
          after={{
            label: "10-day course shape",
            content:
              "Built around deliberate silence. Target is not spoken English; there is no target. Across 10 days the student gets about 15 hours of listened English (recorded discourses) and about 5 minutes per day of optional spoken English with the assistant teacher. The rest is silent. Success is not a language metric, it is a meditation metric; the English side of the pattern is a side effect.",
            highlights: [
              "Target: zero small talk across 9.5 days",
              "Teachers: one assistant teacher, short windows",
              "Social context: none, Noble Silence",
              "Success metric: not linguistic, not this page's claim to assess",
            ],
          }}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Where English actually enters the 10 days
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The course is not hostile to language. It routes language through
          two narrow channels each day, drawn here as inputs into the shape of
          the course rather than outputs from it.
        </p>
        <AnimatedBeam
          title="The two daily English channels at a 10-day course"
          from={[
            {
              label: "Evening discourse, recorded",
              sublabel: "~90 minutes of spoken English, 1 voice",
            },
            {
              label: "Private teacher window",
              sublabel: "optional, a few minutes, one to one or small group",
            },
            {
              label: "Pali chantings",
              sublabel: "not English, not translation, a separate track",
            },
          ]}
          hub={{
            label: "The silence",
            sublabel: "9.5 of 10 days, held by rule, not by effort",
          }}
          to={[
            {
              label: "Listened vocabulary",
              sublabel: "consistent across all 10 discourses",
            },
            {
              label: "A different relationship to small talk",
              sublabel: "commonly reported, not claimed as universal",
            },
            {
              label: "Slower first conversation on day 10",
              sublabel: "the effect the page is actually about",
            },
            {
              label: "A reason to return to dhamma.org",
              sublabel: "the operational layer belongs there",
            },
          ]}
          accentColor="#0d9488"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The week as a sequence, not a regimen
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The arc below is descriptive, not prescriptive. It is what happens,
          not what anyone is being told to do. Nothing in it is a method; the
          method lives inside the course.
        </p>
        <StepTimeline steps={stepEntries} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Side by side: the ESL shape vs. the course shape
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Same two shapes as the toggle above, laid out so the columns read at
          a glance. The left column is not a strawman; it is what the ESL
          market is optimising, correctly, for its audience. The right column
          is what a 10-day Vipassana course looks like on the English axis,
          which is a dimension the course itself does not try to optimise.
        </p>
        <ComparisonTable
          heading="The English shape of two daily practices"
          productName="10-day Vipassana course"
          competitorName="Daily ESL conversation practice"
          rows={shapeRows}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What the day&apos;s English exposure actually looks like, in shell
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          A compact summary of the English side of the schedule, rendered
          like a morning briefing. None of this is instructional; it is a
          readout.
        </p>
        <TerminalOutput
          title="english-exposure --day 4"
          lines={[
            { type: "command", text: "vipassana status --day 4" },
            { type: "info", text: "Noble Silence: ACTIVE (since day 0 evening)" },
            { type: "output", text: "spoken_english_today: 0 min" },
            { type: "output", text: "listened_english_today: 0 min (morning)" },
            { type: "output", text: "scheduled_discourse_at: 19:00 (~90 min)" },
            { type: "output", text: "teacher_window_available: optional, midday, a few minutes" },
            { type: "output", text: "phones_in_reception: true" },
            { type: "output", text: "small_talk_permitted: false" },
            { type: "success", text: "total_english_expected_today: ~90 min listened, ~0-5 min spoken" },
            { type: "info", text: "redirect for method: https://dhamma.org" },
          ]}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Tokens the sheet is quietly counting
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Each chip below is a number or unit that the 10-day course quietly
          accumulates along the English axis. Seen together, they are the
          scaffolding of a week that was, in one narrow sense, also a daily
          English practice.
        </p>
        <Marquee speed={45}>
          {tokens.map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 font-mono text-xs text-teal-700"
            >
              {t}
            </span>
          ))}
        </Marquee>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <GlowCard>
          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-zinc-900 mb-3">
              What this page does not do, by editorial rule
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              This page is a linguistic and logistical note. It does not
              teach. The tradition reserves operational instruction (what to
              do during a sit, how to work with an experience, how to handle
              a difficulty on the cushion) to an authorized assistant teacher
              inside a 10-day residential course. Nothing on this site
              substitutes for that container.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-4">
              So the observations above are not a prescription. Nothing here
              is a method for improving your English through silence, or a
              program to follow, or an order in which to do anything. The
              course is not a language product and it should not be used as
              one. If your primary question is{" "}
              <em>how can I practice daily English conversation</em>, one of
              the ESL sites ranking above this page is the correct
              destination; pick the one whose format fits your life.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              If the question underneath your search is something closer to{" "}
              <em>what does structured silence do to the way I speak</em>, the
              method and the container for that question live at{" "}
              <a
                href="https://www.dhamma.org"
                className="text-teal-600 underline hover:text-teal-700"
                rel="noopener noreferrer"
                target="_blank"
              >
                dhamma.org
              </a>
              , not here. Every course is offered free of charge and runs on
              donations from past students.
            </p>
          </div>
        </GlowCard>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          A short personal note
        </h2>
        <div className="border-l-2 border-teal-300 pl-5 text-zinc-600 leading-relaxed space-y-4">
          <p>
            English is my second language. I learned it mostly through
            reading, which left my spoken English full of filler, reflexive
            agreement, and small talk I did not mean. For a long time I was
            trying to add more daily conversation on top, with tutors and
            language partners, and my speech kept getting faster without
            getting clearer.
          </p>
          <p>
            The first 10-day course did something no Cambly session ever did:
            it held me in a long enough silence that I could hear my own
            habits when the silence ended. For about a week afterwards, I
            paused more, agreed less automatically, asked simpler questions.
            The window closed, as windows do; ordinary speed came back. But
            the shape of what I had heard in the silence has stayed, across
            six courses now. Not an argument against daily conversation
            practice; just a note about a second kind of daily English
            practice most ESL pages do not describe.
          </p>
        </div>
      </section>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        heading="Want to talk through what a 10-day silent course actually looks like?"
        description="Book a short call. We can walk through the schedule, the application flow, and what the re-entry into ordinary conversation tends to feel like. No method talk; that belongs at a course."
        section="practice-daily-english-conversation-footer"
      />

      <div className="max-w-4xl mx-auto px-6">
        <FaqSection items={faqs} heading="Frequently asked questions" />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <RelatedPostsGrid
          title="Related, if the silence question landed"
          subtitle="Adjacent pages on the course and post-course side of the site"
          posts={schedulePosts}
        />
        <div className="flex flex-wrap gap-3 mt-6">
          <Link
            href="/experience/day-10"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Day 10: silence breaks
          </Link>
          <Link
            href="/guide/find-a-retreat"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Find a retreat
          </Link>
          <Link
            href="/resources"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Resources (discourses archive)
          </Link>
          <a
            href="https://www.dhamma.org"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            dhamma.org (where the method itself is taught)
          </a>
        </div>
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Talk through course logistics and what the week of silence actually looks like."
        section="practice-daily-english-conversation-sticky"
      />
    </article>
  );
}
