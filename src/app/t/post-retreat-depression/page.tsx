import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ProofBanner,
  StepTimeline,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/post-retreat-depression";
const PUBLISHED = "2026-06-27";
const VERIFIED = "2026-06-27";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title: "Post-Retreat Depression: Three Different Things One Phrase Hides",
  description:
    "A low, flat mood in the weeks after a retreat is common and usually lifts by about Week 4. But 'post-retreat depression' is one phrase for at least three different states, and the right response is different for each. Here is how to tell them apart, and the line where it stops being a meditation question.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Post-Retreat Depression: Three States, Not One",
    description:
      "The bounded reentry dip, surfaced material, and clinical depression are three different things hiding behind one phrase. How to tell which one you are in, and what each one actually needs.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Post-Retreat Depression: Three States, Not One",
    description:
      "Most advice collapses post-retreat depression into one mood dip. It is at least three different states with three different correct responses.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "Is post-retreat depression normal after a Vipassana course?",
    a: "A flat, low, or oddly empty mood in the first few weeks after a 10-day course is common and more often reported quietly than out loud. In its ordinary form it is a bounded recalibration: it tends to peak in the first three days off-site, trough somewhere between Day 5 and Day 14, and return to ordinary baseline by about Week 4. That shape is normal and does not mean the course harmed you. It stops being normal when it persists past three or four weeks, stops you functioning, or includes thoughts of self-harm.",
  },
  {
    q: "Why do I feel depressed after a meditation retreat when it was supposed to help?",
    a: "Several ordinary mechanisms stack at once: the contrast between a fully scheduled, silent center and the noise of normal life reads as loss, your nervous system has to recalibrate to ordinary levels of stimulation, the structure that held every hour at the center is suddenly gone, and extended solitude lowers the social-bonding chemistry that reconnecting with people restores. None of those are the course failing. They are the inputs changing back. The felt-state of the retreat was produced by specific conditions, and those conditions ended when you left.",
  },
  {
    q: "How long does post-retreat depression last?",
    a: "When it is the ordinary bounded dip, most of it resolves inside the first month, with the trough usually landing between Day 5 and Day 14. Sleep is often the first thing to wobble, in the second week. Patience for small talk is often the last thing to come back, and sometimes it does not fully come back, which is its own kind of data. If a clinical-shape low mood is still there past three or four weeks with no improvement trajectory, that is a different conversation and belongs with a professional, not a website.",
  },
  {
    q: "When should post-retreat low mood make me seek professional help?",
    a: "Treat it as a medical question, not a practice question, if you have a persistent depressed mood or anxiety lasting more than three to four weeks, intrusive thoughts or flashbacks or dissociation that do not resolve, an inability to function at work or in relationships, any thoughts of suicide or self-harm, or paranoia, hallucinations, or a feeling of being disconnected from reality. These are rare but real. In the US you can call or text 988 (the Suicide and Crisis Lifeline) any time. For meditation-specific support, Cheetah House at cheetahhouse.org is a nonprofit founded at Brown University for exactly this.",
  },
  {
    q: "Did the retreat cause my depression, or surface something that was already there?",
    a: "Both can happen and they are not the same. A 10-day course removes most of the things people use to keep difficult material at a distance: phones, writing, conversation, work, and a full day of scheduled silence. Material that was already there can come up, and it can keep surfacing after you leave. That is unfinished processing, not the technique breaking you, but it can need more support than a daily sit provides. If what surfaced is heavy and persistent, an assistant teacher and a therapist who understands contemplative practice are the right pair, not more intensive practice on your own.",
  },
  {
    q: "Will keeping up a daily practice make post-retreat depression better or worse?",
    a: "For the ordinary bounded dip, keeping the daily sit alive is one of the most reliable ways through it, and the in-person accountability of old-student group sittings helps more than willpower. But there is an honest exception: if intensive practice is clearly making things worse, it is okay to scale back, and you talk to your assistant teacher about adjusting rather than pushing harder alone. The site does not teach the technique here. Anything about how to actually sit belongs with an authorized teacher at a course.",
  },
  {
    q: "Where can I get the technique-level questions answered?",
    a: "Not on this site. In the Goenka tradition the technique is transmitted only at a 10-day residential course by an authorized teacher, and operational questions (how to sit, how to work with a difficulty on the cushion) belong with an assistant teacher and the recorded discourses. Course information lives at dhamma.org. This page is reflective, written by an old student, not instructional.",
  },
];

const reentryArc = [
  {
    title: "Days 1 to 3 off-site: the peak",
    description:
      "The world feels unusually open. Senses are bright, conversation feels slow, ordinary things look vivid. This is the high point you will later compare everything against, which is part of the trap.",
  },
  {
    title: "First week: the contraction",
    description:
      "Ordinary inputs return one by one (traffic, screens, deadlines, small talk) and the open feeling steadily contracts back toward baseline. Nothing is wrong; the conditions that produced the peak are simply gone.",
  },
  {
    title: "Days 5 to 14: the trough",
    description:
      "Flatness or irritability is most likely to land here. Sleep often wobbles first in the second week. This is where the mind tends to conclude the course did not work, which is a conclusion reached at the bottom of a dip, not a fact.",
  },
  {
    title: "By about Week 4: ordinary baseline",
    description:
      "Most of the bounded dip has resolved. Food sensitivity often returns in the third week. Patience for small talk is usually the last thing back. If a low mood is still heavy past this window, it has stopped being the reentry dip.",
  },
];

const relatedPosts = [
  {
    title: "Post-Retreat Reentry Crash: What's Actually Crashing",
    href: "/t/post-retreat-reentry-crash",
    excerpt:
      "A deep dive on the first of the three states: the felt-state recalibration, the two clocks, and the four interpretation traps that make people quit.",
    tag: "Sibling page",
    readTime: "8 min",
  },
  {
    title: "Does Vipassana Help Depression?",
    href: "/t/does-vipassana-help-depression",
    excerpt:
      "The clinical evidence question, read straight: why the relapse-prevention numbers you have seen are mostly MBCT data, not 10-day-course data.",
    tag: "Evidence",
    readTime: "7 min",
  },
  {
    title: "Risks and Safety: Adverse Effects and Crisis Resources",
    href: "/guide/risks-and-safety",
    excerpt:
      "The full list of warning signs, the difficult-but-productive vs genuinely-harmful distinction, and a complete set of crisis and meditation-specific resources.",
    tag: "Safety",
    readTime: "9 min",
  },
];

export default function Page() {
  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline:
                "Post-Retreat Depression: Three Different Things One Phrase Hides",
              description:
                "A field guide to telling apart the three states hiding behind 'post-retreat depression': the bounded reentry dip, surfaced material, and clinical depression, each with a different correct response.",
              url: PAGE_URL,
              datePublished: PUBLISHED,
              dateModified: VERIFIED,
              author: "Matthew Diakonov",
              authorUrl: "https://m13v.com",
              publisherName: "Vipassana.cool",
              publisherUrl: "https://vipassana.cool",
              articleType: "Article",
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbListSchema([
              { name: "Home", url: "https://vipassana.cool" },
              {
                name: "Post-Retreat Depression",
                url: PAGE_URL,
              },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(faqs)),
        }}
      />

      <div className="max-w-4xl mx-auto px-6 pt-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Post-Retreat Depression" },
          ]}
        />
      </div>

      <header className="max-w-4xl mx-auto px-6 pt-8">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          Post-retreat depression is three different things wearing one name
        </h1>
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="8 min read"
        />
        <p className="mt-6 text-lg leading-relaxed text-zinc-600">
          Almost every page on this searches the same way: post-retreat
          depression gets treated as one mood dip, and the answer is one
          version of go softly and be kind to yourself. That is not wrong, it
          is just blurry. The phrase is hiding at least three separate states,
          and they want three different responses. Reading them apart is the
          whole point of this page.
        </p>
      </header>

      <section className="max-w-4xl mx-auto px-6 pt-10">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <div className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer (verified {VERIFIED})
          </div>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            A flat or low mood in the first weeks after a retreat is common and
            usually a <strong>bounded recalibration</strong>: it tends to peak
            in the first three days off-site, trough between Day 5 and Day 14,
            and return to ordinary baseline by about Week 4. It stops being a
            meditation question and becomes a medical one when it{" "}
            <strong>persists past three or four weeks</strong>, stops you
            functioning, or includes any thought of self-harm. At that point
            you contact a professional. In the US you can call or text{" "}
            <strong>988</strong> any time, and{" "}
            <a
              href="https://www.cheetahhouse.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              Cheetah House
            </a>{" "}
            is a nonprofit founded at Brown University specifically for
            meditators who feel worse after intensive practice.
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
          during a sitting, and how to work with a particular difficulty,
          belongs with an assistant teacher, not a website. This page is
          written by an old student of six 10-day courses across Dhammamanda in
          NorCal, CYO in the Bay Area, and North Fork in Central California,
          with 1,000+ days of daily practice. It is reflective, not
          instructional. If a sentence here reads as advice on how to sit, read
          past it. The instructions are given at the course.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Why one answer keeps missing
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The generic advice (rest, ease back in, keep meditating) is fine
          advice for exactly one of the three states and close to useless for
          the other two. Tell someone whose old grief just surfaced to keep
          sitting harder and you can make it worse. Tell someone in a clinical
          depression to wait it out and be gentle, and you can cost them weeks
          they did not have. The reason the advice misses is that the three
          states feel similar from the inside (low, flat, heavy) but come from
          completely different places. So the useful first move is not coping.
          It is naming which one you are actually in.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The three states behind the phrase
        </h2>

        <div className="mt-6 space-y-5">
          <div className="rounded-xl border border-zinc-200 bg-white p-6">
            <div className="text-xs font-semibold uppercase tracking-wide text-teal-700">
              State 1
            </div>
            <h3 className="mt-2 text-xl font-semibold text-zinc-900">
              The bounded reentry dip
            </h3>
            <p className="mt-3 text-zinc-700 leading-relaxed">
              This is the most common one and the one the generic advice is
              actually for. The retreat produced a particular felt-state under
              particular conditions (silence, no phones, no writing, a fully
              scheduled day, segregation, simple food), and when those
              conditions end the felt-state recalibrates back to ordinary
              baseline. The recalibration itself is uncomfortable and reads as
              loss. It has a repeatable arc and a roughly four-week envelope.
            </p>
            <p className="mt-3 text-zinc-700 leading-relaxed">
              <span className="font-semibold text-zinc-900">
                What it actually needs:
              </span>{" "}
              time, and keeping the daily sit alive while the felt-state
              settles. The hard part is usually not the dip, it is the
              conclusion the mind reaches at the bottom of it. The sibling page{" "}
              <Link
                href="/t/post-retreat-reentry-crash"
                className="text-teal-700 underline hover:text-teal-900"
              >
                on the reentry crash
              </Link>{" "}
              takes this one apart in detail.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-6">
            <div className="text-xs font-semibold uppercase tracking-wide text-teal-700">
              State 2
            </div>
            <h3 className="mt-2 text-xl font-semibold text-zinc-900">
              Surfaced material that has not finished processing
            </h3>
            <p className="mt-3 text-zinc-700 leading-relaxed">
              A 10-day course strips away most of the things people use to keep
              difficult material at arm's length. Old grief, an avoided
              decision, something from years back can come up during the course
              and keep coming up after you leave, showing up as sadness,
              anxiety, or a heaviness that does not match your week. This is not
              the technique breaking you. It is unfinished processing that the
              quiet made visible. But it can need more support than a solo daily
              sit provides, and pushing harder into intensive practice alone is
              often the wrong instinct.
            </p>
            <p className="mt-3 text-zinc-700 leading-relaxed">
              <span className="font-semibold text-zinc-900">
                What it actually needs:
              </span>{" "}
              a pairing. An assistant teacher from your course or center, who
              has seen this many times and can speak to it inside the framework,
              and where the material is heavy, a therapist who understands
              contemplative practice. The{" "}
              <Link
                href="/guide/risks-and-safety"
                className="text-teal-700 underline hover:text-teal-900"
              >
                risks and safety guide
              </Link>{" "}
              has the difficult-but-productive versus genuinely-harmful line in
              full.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-6">
            <div className="text-xs font-semibold uppercase tracking-wide text-teal-700">
              State 3
            </div>
            <h3 className="mt-2 text-xl font-semibold text-zinc-900">
              Clinical depression (pre-existing, or a genuine adverse effect)
            </h3>
            <p className="mt-3 text-zinc-700 leading-relaxed">
              Sometimes the low mood is not a dip and not a wave of surfaced
              material. It is a clinical-shape depression: persistent, not
              improving, flattening your ability to work and to be with people,
              sometimes with intrusive thoughts, dissociation, or thoughts of
              self-harm. It may be something that pre-dated the course, or, more
              rarely, a real adverse effect of intensive practice in a
              vulnerable nervous system. Either way it does not respond to be
              gentle and keep sitting, and treating it as a meditation problem
              delays the thing that helps.
            </p>
            <p className="mt-3 text-zinc-700 leading-relaxed">
              <span className="font-semibold text-zinc-900">
                What it actually needs:
              </span>{" "}
              clinical support, promptly. This is the one state where the right
              move is to step outside the tradition entirely and get
              professional help. There is no shame in it. It is the most
              equanimous thing you can do.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-14">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The shape of State 1, so you can recognize it
        </h2>
        <p className="mt-4 mb-2 text-zinc-700 leading-relaxed">
          The reason naming matters is that the bounded dip is the only one of
          the three with a predictable timeline. If your low mood is tracking
          this arc, that itself is reassuring information. If it is not (it
          started later, it is getting worse instead of better, it has no shape
          at all) that is a signal you may be in State 2 or State 3.
        </p>
        <StepTimeline title="The bounded reentry dip, week by week" steps={reentryArc} />
      </section>

      <ProofBanner
        metric="By Week 4"
        quote="By my third course I stopped arguing with the dip and started planning around it. Recognizing the arc removed most of its charge. The part that is genuinely hard is almost never the trough itself, it is the conclusion the mind reaches at the bottom of it."
        source="Author note, six 10-day courses across Dhammamanda, CYO, and North Fork"
      />

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          A plain test for which state you are in
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          You do not need a diagnosis to make the first sort. Three questions
          do most of the work, and they are about trajectory and function, not
          intensity. Intensity alone is a bad guide, because the ordinary dip
          can feel intense and a serious depression can feel quiet.
        </p>
        <ol className="mt-5 space-y-4 text-zinc-700">
          <li className="rounded-lg border border-zinc-200 bg-zinc-50 p-4">
            <span className="font-semibold text-zinc-900">
              Is it moving in the right direction?
            </span>{" "}
            The bounded dip improves over days to weeks, especially if you keep
            sitting. A low mood that is flat or worsening past three or four
            weeks is not the dip.
          </li>
          <li className="rounded-lg border border-zinc-200 bg-zinc-50 p-4">
            <span className="font-semibold text-zinc-900">
              Can you still function?
            </span>{" "}
            Feeling tender but still working, still showing up for people, is
            consistent with States 1 and 2. An inability to function at work or
            in relationships points toward State 3.
          </li>
          <li className="rounded-lg border border-zinc-200 bg-zinc-50 p-4">
            <span className="font-semibold text-zinc-900">
              Is there anything in the danger column?
            </span>{" "}
            Thoughts of self-harm, intrusive thoughts or flashbacks that do not
            resolve, dissociation, paranoia, hallucinations, or feeling
            disconnected from reality are never ordinary post-retreat
            adjustment. Any one of them means you get professional support now,
            regardless of how the first two questions came out.
          </li>
        </ol>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          If you are in the danger column right now
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          This part is not a meditation question and the redirect is
          deliberate. In the US, call or text <strong>988</strong>, the Suicide
          and Crisis Lifeline, any time. If someone is in immediate danger,
          call 911 or your local emergency number. For support that
          specifically understands meditation-related difficulty,{" "}
          <a
            href="https://www.cheetahhouse.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            Cheetah House
          </a>{" "}
          (founded by Dr. Willoughby Britton at Brown University) offers
          consultations and groups, though they note they are not set up for
          acute crisis, so use the lines above for emergencies. The site's own{" "}
          <Link
            href="/guide/risks-and-safety"
            className="text-teal-700 underline hover:text-teal-900"
          >
            risks and safety page
          </Link>{" "}
          collects the full list of resources and warning signs.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Where the tradition (and other people) actually help
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          For State 1 and the lighter end of State 2, the most reliable support
          is unromantic: keep the daily sit alive, and do not do it entirely
          alone. The Goenka tradition runs old-student group sittings at local
          centers, often weekly or biweekly, and sitting in a room with other
          old students keeps the practice going through the recalibration weeks
          better than willpower does. The recorded discourses for old students
          and the official course information all live at{" "}
          <a
            href="https://www.dhamma.org/en/about/code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            dhamma.org
          </a>
          . None of that is designed to recreate the felt-state of the retreat.
          It is designed to keep the practice alive while the felt-state
          settles, which is a different and more durable thing.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The other quietly effective lever is accountability with one other
          person who is also building a daily practice. That is the entire
          reason this site runs a{" "}
          <Link
            href="/practice-buddy"
            className="text-teal-700 underline hover:text-teal-900"
          >
            practice buddy matching program
          </Link>
          : the first month after a course is exactly when a daily sit is most
          fragile and most worth protecting.
        </p>
      </section>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        heading="Not sure which of the three it is?"
        description="Talk it through with a fellow old student, peer to peer, not as a teacher, and get pointed to the right next step for your situation."
      />

      <section className="max-w-4xl mx-auto px-6 pt-14">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Questions people actually ask
        </h2>
        <div className="mt-4">
          <FaqSection items={faqs} heading="" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pt-12 pb-16">
        <RelatedPostsGrid
          title="Keep reading"
          subtitle="Each of the three states, in more depth"
          posts={relatedPosts}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Post-course and not sure what you are dealing with? Talk to a fellow practitioner."
      />
    </article>
  );
}
