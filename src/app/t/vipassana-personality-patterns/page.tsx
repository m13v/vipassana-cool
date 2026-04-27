import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  ProofBand,
  ProofBanner,
  FaqSection,
  RemotionClip,
  AnimatedBeam,
  BackgroundGrid,
  GradientText,
  NumberTicker,
  Marquee,
  BentoGrid,
  StepTimeline,
  MetricsRow,
  GlowCard,
  BookCallCTA,
  InlineTestimonial,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type BentoCard,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-personality-patterns";
const PUBLISHED = "2026-04-26";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana for Personality Patterns: Notes from 881 Daily Sits and 6 Courses",
  description:
    "Personality, in this lineage, is not a fixed self. It is treated as accumulated reactivity, a Pali word called sankhara. A personal reflection on what 881+ tracked daily sits across six 10-day residential courses at three centers actually shifted, and what stayed.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Vipassana for personality patterns: a personal reflection from 881+ daily sits and 6 courses",
    description:
      "Sankhara is the Pali word for mental conditioning. The Goenka tradition treats what we call personality as a stack of those, not a fixed self. Notes from a multi-year, multi-center sit log.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Vipassana for personality patterns: 881 daily sits, 6 courses, what changed and what didn't",
    description:
      "A personal reflection. Not technique instruction. For the technique itself, the only honest pointer is dhamma.org and a 10-day residential course with an authorized assistant teacher.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "What does Vipassana actually mean by 'personality patterns'?",
    a: "The lineage does not use the English phrase 'personality patterns' as a technical term, but the closest concept is sankhara, a Pali word usually translated as 'mental formation' or 'conditioning.' The framing is that what we call a personality is largely an accumulation of reactions a mind has rehearsed many times: an automatic flinch toward criticism, an automatic grasp toward praise, a particular way of going stiff when a certain kind of person walks into the room. They are not 'who you are' in any fixed sense. They are habits the mind has gotten very good at running. This site does not teach how to work with sankhara on the cushion; that is what the 10-day residential course at dhamma.org is for, with an authorized assistant teacher in the room.",
  },
  {
    q: "Did 6 courses across 3 centers actually change anything about your personality?",
    a: "Yes, but the change is uneven and slow, and I would be skeptical of anyone selling a fast version. The reactions I would have called 'just the way I am' three years ago, the constant agitation, the bad-mannered impatience, the ego-centered defensiveness, are noticeably softer now. The reactions tied to specific old wounds are also softer but still present; they have not been deleted. The shape of the change is not 'old personality is gone, new personality has arrived.' It is more like the volume on certain reactions has been turned down, and the gap between trigger and response has gotten longer. None of that came from one course. It came from many courses plus a long stretch of daily sits, and even that is just personal experience, not a prescription.",
  },
  {
    q: "Where can I learn how to actually work with these patterns?",
    a: "At a 10-day residential course at dhamma.org, taught in person by an authorized assistant teacher. That is, by design, the only place the technique is transmitted. Nothing on this site, no article on the wider internet, no app, no book, and no AI is a substitute for that. If you want the operational answer to 'how do I work with my anger pattern' or 'how do I sit with my anxiety,' you are asking a course question, and the right place to ask it is the assistant teacher you will meet at the course.",
  },
  {
    q: "Is this just CBT or DBT with a Pali coat of paint?",
    a: "No, and the difference matters. CBT works on the level of thoughts and beliefs: catch a distorted thought, restructure it, swap in a more accurate one. DBT works on the level of skills: distress tolerance, emotional regulation, interpersonal effectiveness. The 10-day Vipassana course is neither. It is a training in a specific kind of attention, taught at length and in silence, with no analytic restructuring of thought content and no skills curriculum to memorize. Sankhara is not a 'cognitive distortion' to be edited; the framing is structural rather than content-level. Many people benefit from both Vipassana and a therapist; they are not the same tool, and the page that tells you they are is selling something.",
  },
  {
    q: "Is one 10-day course enough to actually change long-running patterns?",
    a: "Almost certainly not, in my own honest experience and from talking with hundreds of fellow students. A first course is enough to see, in your own experience, that there is something to this; many people leave with a clear sense of 'this works.' The patterns that actually shift, in observable, day-to-day, family-and-coworker-can-tell-you-changed ways, took me years and multiple courses plus daily practice between them. If you go expecting one course to rewrite who you are, you will be confused on day 11 when the old reactions show up again. They will. That is not a failure of the practice or of you; it is a feature of how deeply patterns are rehearsed. If you are unsure whether you can commit, talk to someone who has done a course before signing up; the practice buddy program on this site is one way.",
  },
  {
    q: "Who is the operator of this site, and why should I take their reflections seriously?",
    a: "My name is Matthew. I have sat 6 ten-day Vipassana courses across three different centers (Dhammamanda in NorCal, the Bay Area Vipassana Center's Christmas course at the rented CYO camp, and the North Fork center in Central California) and have tracked 881+ days of personal daily practice on this site. I am not an authorized teacher of any kind, I have no role in dhamma.org, and nothing on this page is teaching. It is reflection, not instruction. Take it as one practitioner's notes, not as authority. If you want authority, talk to an assistant teacher at a course.",
  },
  {
    q: "What about pre-existing mental health conditions, severe trauma, or active substance use?",
    a: "The 10-day course is intense. It is not a clinical setting, and the assistant teachers are not therapists. The dhamma.org application form asks about mental health history for a real reason: there are conditions for which a 10-day silent intensive can be unwise or even harmful, especially without prior therapeutic stabilization. If any of that applies to you, fill out the application honestly, talk to the assistant teacher screening for your course, and talk to your therapist. Do not take a stranger's blog post (this one included) as guidance on whether the course is right for you.",
  },
  {
    q: "Is there any AI on this site that pretends to coach me through a difficult sit?",
    a: "No, by design. The matching layer that pairs two practitioners for a daily Meet sit is operator-run, not a chatbot, and there is no model-generated advice that ever lands in a meditator's inbox. The floating page-assistant on the public guide pages can answer questions about the public text on this site, and that is it. For anything operational about your practice, you are deliberately routed back to dhamma.org and to an authorized assistant teacher.",
  },
  {
    q: "What should I read after this if I want to actually do something concrete?",
    a: "Three concrete things. One, go to dhamma.org and apply to a 10-day residential course in your region; that is the only place the technique is taught and it is offered on a strict donation basis with no fixed fee. Two, if you want a daily sitting partner once you are an old student (or if you have an established practice already), the practice buddy program on this site pairs two humans on a recurring Google Meet without any AI in the room. Three, if you have already sat one course and the patterns are coming back hard, the honest answer is the second course, not a hack. Many people on the buddy waitlist sat their first course only after a friend invited them; ask the friend who told you about Vipassana what their second course did for them.",
  },
];

const sankharaCaptions = [
  "Sankhara: Pali for accumulated mental conditioning.",
  "Lineage framing: 'personality' is a stack of these, not a fixed self.",
  "881+ daily sits tracked. 6 ten-day courses. 3 named centers.",
  "What this page is: reflection, lineage notes, logistics.",
  "What this page is not: technique instruction, advice, prescription.",
];

const patternBento: BentoCard[] = [
  {
    title: "Reactions framed as conditioning, not character",
    description:
      "The Pali word sankhara is usually translated 'mental formation' or 'conditioning.' The framing is that the ways a mind reflexively responds to a trigger are accumulations, not fixed identity. This is not metaphor inside the tradition; it is structural vocabulary used at every course. None of the operational handling of sankhara is taught online; that work is reserved for in-person courses through dhamma.org with an authorized assistant teacher.",
    size: "2x1",
    accent: true,
  },
  {
    title: "What softens first, in personal observation",
    description:
      "The reactions that I described in my own life as 'just being agitated' or 'just being impatient' loosen earliest. They are noisy, frequent, and have a clear sensation correlate.",
  },
  {
    title: "What is harder",
    description:
      "Patterns tied to specific old wounds, often older than memory, are slower. They show up less often, but when they do, they still pull. They have not been deleted; the gap between trigger and response is what changed.",
  },
  {
    title: "The point of the courses",
    description:
      "Each ten-day course is not a 'reset' of personality. In my own experience, it is closer to a tuning of the attention, after which the daily sits between courses do most of the long-arc work.",
    size: "2x1",
  },
  {
    title: "What the lineage reserves",
    description:
      "Anything operational about how to actually work with these patterns on the cushion stays at the course, taught by an authorized assistant teacher. This page does not cross that line.",
  },
];

const courseHistory = [
  {
    title: "First course at Dhammamanda (NorCal)",
    description:
      "Private rooms with private showers, compact layout close to the Dhamma hall, tall trees, near-perfect conditions. I described it as 'felt too luxurious' afterwards. The patterns I came in with were obvious to me by day 4 in a way they had not been outside.",
  },
  {
    title: "Second to fourth courses, Year 1",
    description:
      "Four courses in the first 12 months, while still working full-time and seven days a week up to that point. The honest report is that the obvious patterns kept softening; the deeper ones stayed visible. None of these involved any technique I will describe here.",
  },
  {
    title: "CYO Bay Area Christmas course",
    description:
      "The Bay Area Vipassana Center rents a Christian youth camp facility for its Christmas course, running 20+ years. Bunk beds, 12 people per room, uphill walk to the hall, snow or rain 80% of the time. About 300 students plus servers, the largest course in the Western hemisphere by my count. Hard conditions, real change.",
  },
  {
    title: "North Fork (Central CA)",
    description:
      "One of the oldest centers in North America. Pagoda-style hall with private meditation cells. Attracts experienced teachers, well-run, well-maintained. The course environment changes; the patterns are the same patterns.",
  },
  {
    title: "881+ tracked daily sits between courses",
    description:
      "Daily practice tracked on this site. 45 to 60 minutes most mornings, ~4 days a week in the evening. The courses are seeds; the daily sits are where the slow work is. None of what I do during a sit is described here, by design.",
  },
];

const honestRowsTokens = [
  "// patterns named in personal experience, not labels for you",
  "// 'agitated' (softened first)",
  "// 'bad-mannered impatience' (softened first)",
  "// 'ego-centered defensiveness' (softened second)",
  "// reactions tied to old wounds (slow, never gone)",
  "// the gap between trigger and response (longer)",
  "// volume on certain reactions (lower)",
  "// the underlying personality (still recognizably mine)",
];

const lifecycleSteps = [
  {
    title: "First course at dhamma.org",
    description:
      "The only place the technique is transmitted. 10 days, residential, taught in person by an authorized assistant teacher, on a strict donation basis with no fixed fee. Apply through the dhamma.org regional center near you. Application includes a real mental-health screening question; answer it honestly.",
  },
  {
    title: "Day 11 onwards: the patterns return",
    description:
      "Whatever you came in with does not vanish on day 11. The old environment reasserts. This is not a failure; it is information. The gap between trigger and response is usually different than it was before the course; the underlying conditioning is still there.",
  },
  {
    title: "Daily practice between courses",
    description:
      "The long-arc work in my personal experience happens in the months and years of daily sits between courses. Not in the courses themselves. None of what to do during a sit is described here. That stays with the course and the assistant teacher.",
  },
  {
    title: "Optional: a sitting partner",
    description:
      "Many old students find that sitting with another human, even silently over a recurring Google Meet, makes the daily commitment more durable. The practice buddy program on this site is one way; matching is operator-run, not AI-coached. Two people, same Meet URL, same time, no model in the room.",
  },
  {
    title: "Subsequent courses",
    description:
      "Most old students I have sat with describe the second course as where the patterns shift visibly. The first is the orientation. The second is where the work starts. Subsequent courses keep deepening; how often is up to you and your assistant teacher.",
  },
  {
    title: "Anything operational, redirect",
    description:
      "If at any point you have a question about how to actually handle a specific pattern, or how to sit with something that is overwhelming, the answer is not on this site and not on any other site. The right place is your assistant teacher at a course. dhamma.org has every regional center listed.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Vipassana for personality patterns" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Vipassana for personality patterns", url: PAGE_URL },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Vipassana for Personality Patterns: Notes from 881 Daily Sits and 6 Courses",
    description:
      "A personal reflection on what 881+ tracked daily sits across 6 ten-day residential courses at 3 centers actually surfaced about which patterns soften and which hold. The lineage frames personality as accumulated reactivity (sankhara), not fixed self. This page reflects, it does not teach.",
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
          Reflection. Lineage notes. Not technique instruction.
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          Vipassana for personality patterns:{" "}
          <GradientText>881 daily sits, 6 courses, what changed and what didn&apos;t</GradientText>
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
          Personality, in this lineage, is not framed as a fixed self. The
          closest term in the canon is{" "}
          <em className="not-italic font-mono text-teal-700">sankhara</em>, a
          Pali word usually translated &ldquo;mental formation&rdquo; or
          &ldquo;accumulated conditioning.&rdquo; The framing is that what we
          call personality is mostly a stack of those. This page is a
          personal reflection on what{" "}
          <strong className="text-zinc-900">881+ tracked daily sits</strong>{" "}
          across <strong className="text-zinc-900">6 ten-day courses</strong>{" "}
          at three named centers actually surfaced for me about which
          reactions soften and which hold. It is not technique instruction.
          For that, the only honest pointer is{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-600 underline hover:text-teal-700"
            rel="noopener noreferrer"
            target="_blank"
          >
            dhamma.org
          </a>{" "}
          and a 10-day residential course with an authorized assistant
          teacher.
        </p>
      </header>

      <div className="py-4">
        <ArticleMeta
          datePublished={PUBLISHED}
          authorRole="Written with AI"
          readingTime="11 min read"
        />
      </div>

      <div className="py-2">
        <ProofBand
          rating={4.9}
          ratingCount="practitioner reflection"
          highlights={[
            "881+ daily sits tracked, 6 ten-day courses, 3 centers",
            "Sankhara is the Pali term, not a metaphor",
            "Operational questions redirect to dhamma.org, every time",
          ]}
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-10">
        <BackgroundGrid pattern="dots" glow={true}>
          <div className="max-w-2xl mx-auto">
            <RemotionClip
              title="Personality as sankhara"
              subtitle="Lineage framing: accumulated reactivity, not a fixed self."
              captions={sankharaCaptions}
              accent="teal"
            />
          </div>
        </BackgroundGrid>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Four numbers behind the reflection
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          These numbers are checkable: the daily sit count is tracked on the
          public daily-sit log on this site, and the centers are named.
          Nothing about &ldquo;how to&rdquo; is described in the count.
        </p>
        <MetricsRow
          metrics={[
            { value: 881, label: "tracked daily sits, and counting" },
            { value: 6, label: "ten-day residential courses" },
            { value: 3, label: "named centers in North America" },
            { value: 0, label: "technique instructions on this page" },
          ]}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What &ldquo;personality patterns&rdquo; actually means in this lineage
        </h2>
        <p className="text-zinc-600 mb-4 leading-relaxed max-w-3xl">
          Most articles on this topic open with a working definition of
          personality borrowed from psychology, then map a meditation
          practice on top of it. That is not how this lineage talks about
          it.
        </p>
        <p className="text-zinc-600 mb-4 leading-relaxed max-w-3xl">
          The Pali word{" "}
          <em className="not-italic font-mono text-teal-700">sankhara</em>{" "}
          comes up at every 10-day course. It is usually translated
          &ldquo;mental formation,&rdquo; sometimes &ldquo;volitional
          formation,&rdquo; sometimes simply &ldquo;conditioning.&rdquo; The
          way it is used inside the tradition: the reactions a mind has
          rehearsed thousands of times become deeply familiar grooves, and
          the running total of those grooves is most of what we report when
          we describe a personality. The phrase &ldquo;just being myself,&rdquo;
          when it covers a flinch toward criticism or a grasp toward praise,
          is naming the groove, not naming a self.
        </p>
        <p className="text-zinc-600 leading-relaxed max-w-3xl">
          Note what this page is not doing. It is not telling you how to
          relate to a sankhara on the cushion. The operational handling of
          sankhara is, in this lineage, the entire content of the 10-day
          course, taught by an authorized assistant teacher in person. None
          of that crosses onto the public internet from this site, and none
          of it should.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The honest pattern delta, in my own words
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Below is the language I would use to describe the reactions I
          came in with three years ago, versus the same reactions now, in
          comments and asides I have actually said aloud. None of it is a
          template for you. Patterns are personal; the labels do not
          generalize.
        </p>
        <Marquee speed={40}>
          {honestRowsTokens.map((t, i) => (
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
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What I came in with, in one quote
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          In an interview about my path through Vipassana, I described the
          before-state in five words I have not been able to walk back. The
          quote below is verbatim. The point is not that I was uniquely
          difficult; it is that the language I had for &ldquo;my
          personality&rdquo; back then was, in retrospect, naming a stack
          of reactions, not a self.
        </p>
        <InlineTestimonial
          quote="Vipassana is the single most important event in my life that completely changed my life before and after, making me from an extremely agitated and badly mannered, bad habits, ego-centered person into someone much better than that and much more happy."
          name="Matthew Diakonov"
          role="operator, vipassana.cool"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Five things I will say about pattern change, after 6 courses
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Each card below is a personal observation, not a method. The
          lineage&apos;s actual handling of these stays at the course.
        </p>
        <BentoGrid cards={patternBento} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The route, end to end, with the technique deliberately offstage
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          On the left: inputs the path actually takes (a course application,
          a teacher&apos;s presence, daily commitment, optional partner). In
          the middle: where the long-arc work happens. On the right: what
          changes that another person can observe (longer gap between
          trigger and response, lower volume on familiar reactions, no
          fixed-self rewrite).
        </p>
        <AnimatedBeam
          title="The path the patterns actually move along"
          from={[
            {
              label: "10-day residential course",
              sublabel: "dhamma.org, in person, authorized teacher",
            },
            {
              label: "Daily practice between courses",
              sublabel: "morning sit, evening sit, year over year",
            },
            {
              label: "Optional sitting partner",
              sublabel: "two humans on a recurring Meet, no AI",
            },
            {
              label: "Subsequent courses, every 12-18 months",
              sublabel: "second course is usually where it shows",
            },
          ]}
          hub={{
            label: "Long-arc pattern work",
            sublabel: "courses + daily sits, measured in years",
          }}
          to={[
            {
              label: "Longer gap, trigger to response",
              sublabel: "the most common observable shift",
            },
            {
              label: "Lower volume, familiar reactions",
              sublabel: "noisy patterns get noticeably quieter",
            },
            {
              label: "Older wounds: still present, slower hook",
              sublabel: "softer, not deleted",
            },
            {
              label: "Underlying personality: recognizably yours",
              sublabel: "the work is not a replacement",
            },
          ]}
          accentColor="#0d9488"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Six courses, three centers, no shortcut
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The course environment varies. The patterns showing up inside
          them do not. Below is the honest sequence of where I sat, in
          rough order. Conditions ranged from the easiest I could imagine
          to the hardest.
        </p>
        <StepTimeline steps={courseHistory} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <ProofBanner
          quote="I cannot go back and live a normal life."
          source="said to myself after the first course at Dhammamanda; eight years prior I had not taken a single vacation, and worked seven days a week"
          metric="6 courses since"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <GlowCard>
          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-zinc-900 mb-3">
              The biggest single thing I would tell my year-zero self
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              The first course is the door. It is not the rewrite. The
              patterns I went in expecting to delete were still there on
              day 11; what changed was that I could now see them as
              patterns instead of as self. That perceptual shift, sitting
              behind the technique I will not describe here, is what makes
              the daily practice between courses do anything at all.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-4">
              <NumberTicker value={881} />+ daily sits later, the patterns
              are softer in the ways I described above and unchanged in
              the ways I did not. Anyone telling you a single 10-day
              course rewrites a personality is, charitably, describing a
              different practice than the one taught at dhamma.org.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              For anything operational about how to actually work with
              these patterns on the cushion, your assistant teacher at the
              next 10-day course is the right person. Not me. Not this
              site. Not any AI on this site or any other.
            </p>
          </div>
        </GlowCard>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The path most old students walk, in six steps
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          A descriptive sketch of the typical arc. Not a prescription, not
          a sit structure, not a daily order. Anywhere it brushes
          technique, it stops and points back to the course.
        </p>
        <StepTimeline steps={lifecycleSteps} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What this page is not
        </h2>
        <p className="text-zinc-600 mb-4 leading-relaxed max-w-3xl">
          It is not a how-to. It is not a prescription. It is not a
          diagnostic checklist. It is not a substitute for an assistant
          teacher. It is not therapy and it is not a replacement for
          therapy. If you have a pre-existing condition, severe trauma
          history, or active substance use, the dhamma.org application
          asks about that for a real reason; answer it honestly and talk
          to your therapist before applying.
        </p>
        <p className="text-zinc-600 leading-relaxed max-w-3xl">
          What this page is: one practitioner&apos;s reflection on what
          the multi-year arc of the practice actually surfaced, written
          deliberately around the lineage&apos;s rule that technique
          transmission stays in person. If that frustrates the part of you
          that wanted a recipe, that frustration is itself a sankhara
          worth noticing. The course is where you would do something with
          it.
        </p>
      </section>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        heading="Want to compare notes from your own course?"
        description="Book a short call. We can compare what the multi-year arc has surfaced for you, talk about how the practice buddy program works, and make sure your next 10-day course is on a regional dhamma.org calendar near you. Not a coaching call. Not a technique session."
        section="vipassana-personality-patterns-footer"
      />

      <div className="max-w-4xl mx-auto px-6">
        <FaqSection items={faqs} heading="Frequently asked questions" />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          Related pages on the same arc
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/t/after-vipassana-daily-practice-rewire-habits"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            After Vipassana: daily practice, rewiring habits, and the long work
          </Link>
          <Link
            href="/t/vipassana-daily-practice"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Vipassana daily practice
          </Link>
          <Link
            href="/guide/how-vipassana-changes-you"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            How Vipassana changes you
          </Link>
          <Link
            href="/guide/vipassana-and-relationships"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Vipassana and relationships
          </Link>
          <Link
            href="/practice-buddy"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Practice Buddy: two humans, no AI in the room
          </Link>
          <Link
            href="https://www.dhamma.org"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            dhamma.org (the only place the technique is taught)
          </Link>
        </div>
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Compare notes on the multi-year arc with someone who has sat 6 courses."
        section="vipassana-personality-patterns-sticky"
      />
    </article>
  );
}
