import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  TerminalOutput,
  BeforeAfter,
  Marquee,
  ProofBanner,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/does-vipassana-help-depression";
const PUBLISHED = "2026-06-17";
const VERIFIED = "2026-06-17";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Does Vipassana Help Depression? Reading the Two Evidence Ledgers Apart",
  description:
    "Almost every answer to this question quietly uses clinical MBCT/MBSR trial results as if they were Vipassana results. They are two different things. Here are the two evidence ledgers read apart: the 8-week clinical programs that prevent relapse, and the 10-day Goenka course, where the depression-specific data is thin and a real minority of retreatants report worse mood.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Does Vipassana Help Depression? The Two Evidence Ledgers",
    description:
      "The relapse-prevention numbers you have seen are from MBCT, an 8-week clinical therapy, not the 10-day Goenka retreat. This page separates the two evidence bodies and surfaces the adverse-effects data most pages omit.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Does Vipassana Help Depression? The Two Evidence Ledgers",
    description:
      "MBCT relapse data is not Vipassana data. The two evidence ledgers, read apart, plus the adverse-effects finding most pages skip.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "Does Vipassana help depression?",
    a:
      "There is no solid evidence that the 10-day Goenka residential Vipassana course treats clinical depression, and it is not a substitute for professional care. The strong relapse-prevention numbers people quote, roughly a third fewer relapses, come from Mindfulness-Based Cognitive Therapy (MBCT), a separate 8-week therapist-led clinical program, not the retreat. Studies on the Goenka course itself show only indirect, secondary signals: in a prison program at Tihar Jail both anxiety and depression dropped, and a small naturalistic study saw anxiety scores fall from about 10 to 3.29 after a course. At the same time, a study of Vipassana retreat participants found 62.9% reported at least one adverse psychological effect, including depression, anxiety, panic, or confusion. What sustained practice can change over time, many practitioners report, is the relationship they have with a low mood, not the presence of clinical depression.",
  },
  {
    q: "Is MBCT the same thing as Vipassana?",
    a:
      "No, and conflating the two is the single biggest mistake in answers to this question. MBCT (Mindfulness-Based Cognitive Therapy) and MBSR (Mindfulness-Based Stress Reduction) are secular 8-week clinical programs designed in the West, delivered by trained therapists in weekly group sessions, with structured cognitive-therapy elements and homework. They borrow attentional ideas from Buddhist practice but are not the Goenka tradition. Vipassana in the sense most people mean it, the one this site is about, is a 10-day silent residential course taught by authorized assistant teachers in the lineage of S.N. Goenka. Most of the research that gets cited as proof that meditation prevents depression relapse was run on MBCT, not on the 10-day course.",
  },
  {
    q: "What is the actual depression-specific evidence for the Goenka 10-day course?",
    a:
      "It is thin and mostly indirect. Depression has typically been measured as a secondary outcome rather than the main thing a study was designed to test. The most-cited example is the prison meditation program at India's Tihar Jail, which has run since 1993 and reported drops in both anxiety and depression among participants. A naturalistic study in Muscat saw anxiety scores fall from an average of 10 to 3.29 after a 10-day course. A 2025 systematic review in Cureus found moderate evidence for reductions in stress and gains in mindfulness and well-being, while explicitly flagging moderate-to-high risk of bias across the included studies. None of these were designed as depression-treatment trials.",
  },
  {
    q: "Can a Vipassana retreat make depression worse?",
    a:
      "For some people, yes, especially during an acute episode. A study of Vipassana retreat participants found 62.9% reported at least one adverse psychological effect, including anxiety, panic, depression, confusion, or disorientation. A large international cross-sectional study in BJPsych Open found roughly 53% of regular meditators reported at least one unpleasant effect, with 6 to 14% experiencing enduring adverse effects. Risk factors include pre-existing mental health conditions, higher retreat intensity, and longer sessions. The intense introspection, silence, and isolation of a 10-day course can amplify symptoms in someone who is not stable. This does not mean the course is dangerous for most people; it means the honest answer includes a downside that most articles leave out.",
  },
  {
    q: "If MBCT works for depression, why not just call Vipassana a depression treatment?",
    a:
      "Because the things that make MBCT a measurable depression intervention are exactly the things the 10-day course is not. MBCT is delivered to a clinical population, screened and recruited for recurrent depression, by trained therapists, with a defined dose, in an outpatient setting where someone can go home each night. The Goenka course is a residential retreat for the general public, run by volunteers and authorized assistant teachers, with no clinical screening for efficacy and an explicit policy of not positioning itself as therapy. Transferring an effect size from one to the other is not science, it is a category error.",
  },
  {
    q: "Should I go to a course instead of seeing a therapist or taking medication?",
    a:
      "No. Nothing on this site is medical advice, and a 10-day course is not a replacement for professional mental health care. If you have clinical depression, your psychiatrist or therapist should be part of any decision about attending. Do not stop prescribed medication to attend; you can continue medication during a course, and the application form asks about it. For an honest read on attending with depression, see the FAQ on Vipassana and depression. For questions about how to practice or how to work with a difficulty, the tradition redirects to dhamma.org and an authorized assistant teacher inside a 10-day course.",
  },
  {
    q: "Where can I get help if a retreat left me feeling worse?",
    a:
      "Cheetah House (cheetahhouse.org), founded by Dr. Willoughby Britton at Brown University, exists specifically to support meditators who experience adverse effects. If you are in crisis in the US, call or text 988. The point of naming this is not to scare anyone off; it is that a complete answer to whether Vipassana helps depression has to include the people for whom intensive practice was the wrong thing at the wrong time.",
  },
];

const litReviewLines = [
  { text: "search 'depression' across Goenka-10-day-specific studies", type: "command" as const },
  { text: "Tihar Jail prison program (since 1993) ... anxiety AND depression dropped [secondary outcome]", type: "output" as const },
  { text: "Muscat naturalistic study ............ anxiety 10 -> 3.29 post-course [no depression scale]", type: "output" as const },
  { text: "Cureus 2025 systematic review ........ stress + well-being gains; bias risk flagged moderate-high", type: "output" as const },
  { text: "depression as a PRIMARY designed outcome of the 10-day course: 0 strong trials found", type: "error" as const },
  { text: "now search the same word across MBCT (8-week clinical program)", type: "command" as const },
  { text: "Piet & Hougaard 2011 meta-analysis ... ~a third fewer relapses for 3+ prior episodes (RR ~0.66)", type: "success" as const },
  { text: "note: MBCT is NOT the 10-day Goenka course. Different population, dose, setting, staff.", type: "info" as const },
];

const relatedPosts = [
  {
    title: "Scientific Evidence for Vipassana Meditation",
    href: "/guide/scientific-evidence",
    excerpt:
      "The full sourced review the numbers on this page come from: brain changes, sleep, anxiety, addiction, and the adverse-effects data, with the limitations spelled out.",
    tag: "Evidence",
  },
  {
    title: "Vipassana & Depression: What to Know Before Attending",
    href: "/faq/vipassana-and-depression",
    excerpt:
      "The eligibility side of the same question: when attending a course with depression is generally fine, when to wait, and why honesty on the application matters.",
    tag: "FAQ",
  },
  {
    title: "Vipassana Psychosis: Why Cases Cluster on Day 4",
    href: "/t/vipassana-psychosis",
    excerpt:
      "The sharper end of the adverse-effects story: who is actually at risk, the prodromal signs, and what to do during a course.",
    tag: "Safety",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Evidence", href: "/guide/scientific-evidence" },
  { label: "Does Vipassana help depression?" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Scientific Evidence", url: "https://vipassana.cool/guide/scientific-evidence" },
  { name: "Does Vipassana help depression?", url: PAGE_URL },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Does Vipassana Help Depression? Reading the Two Evidence Ledgers Apart",
    description:
      "A reader-facing breakdown that separates clinical MBCT/MBSR research (an 8-week therapist-led program with strong relapse-prevention data) from the 10-day Goenka residential Vipassana course (where depression-specific evidence is thin and a real minority of retreatants report worse mood). Built on the site's sourced science review and a verified MBCT relapse meta-analysis.",
    url: PAGE_URL,
    datePublished: PUBLISHED,
    dateModified: VERIFIED,
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
        <p className="text-xs font-mono uppercase tracking-[0.22em] text-teal-700 mb-3">
          Evidence note, verified {VERIFIED}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          Does Vipassana help depression?
        </h1>
        <p className="mt-4 text-lg text-zinc-700 max-w-3xl leading-relaxed">
          The reason this question is hard to answer honestly is that almost
          every page about it, and the automated summaries above the results,
          quietly use one body of research to answer a question about a
          different practice. The relapse-prevention numbers people repeat come
          from an 8-week clinical therapy. The thing most people mean by
          Vipassana is a 10-day silent residential course. Those are not the
          same intervention, and the evidence for each is shaped very
          differently. So the useful move is not to give you a yes or a no. It
          is to put the two evidence ledgers side by side and let you read them
          apart.
        </p>
      </header>

      <div className="py-4">
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          dateModified={VERIFIED}
          readingTime="11 min read"
        />
      </div>

      <section className="max-w-3xl mx-auto px-6 my-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-teal-700 mb-2">
            Direct answer (verified {VERIFIED})
          </p>
          <p className="text-zinc-800 leading-relaxed">
            There is no solid evidence that the 10-day Goenka Vipassana course
            treats clinical depression, and it is not a substitute for
            professional care. The strong relapse-prevention numbers people
            cite, roughly a third fewer relapses, are from{" "}
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/21802618/"
              className="text-teal-700 underline hover:text-teal-800"
              rel="noopener noreferrer"
              target="_blank"
            >
              MBCT
            </a>
            , a separate 8-week therapist-led clinical program, not the retreat.
            Studies on the 10-day course itself show only indirect, secondary
            signals (a prison program where both anxiety and depression fell; a
            small study where anxiety dropped from about 10 to 3.29). And a
            study of Vipassana retreat participants found 62.9% reported at
            least one adverse psychological effect, including low mood. What
            sustained practice seems to change for many people, over years, is
            their relationship to a difficult mood, not the presence of a
            clinical illness. For technique or distress questions, the redirect
            is{" "}
            <a
              href="https://www.dhamma.org"
              className="text-teal-700 underline hover:text-teal-800"
              rel="noopener noreferrer"
              target="_blank"
            >
              dhamma.org
            </a>{" "}
            and an authorized assistant teacher inside a 10-day course.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The swap that makes this question confusing
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          Run the search yourself and watch what happens. The headline claim is
          that meditation prevents depression relapse, often with a clean
          statistic attached. Then click through, and the study turns out to be
          about Mindfulness-Based Cognitive Therapy or Mindfulness-Based Stress
          Reduction. Those are real, well-studied, genuinely useful clinical
          programs. They are also not the 10-day Goenka course. The word
          &quot;mindfulness&quot; carries the result across a gap it should not
          cross.
        </p>
        <BeforeAfter
          title="What the answer usually claims, and what the underlying study actually measured"
          before={{
            label: "What the page claims",
            content:
              "Vipassana / meditation is proven to reduce depression and prevent relapse, with a strong effect size.",
            highlights: [
              "Cites a relapse-prevention statistic as if it applies to the retreat",
              "Uses 'meditation' and 'Vipassana' as interchangeable words",
              "Leaves out the adverse-effects data entirely",
            ],
          }}
          after={{
            label: "What the study tested",
            content:
              "An 8-week clinical MBCT/MBSR program, delivered by trained therapists to a screened clinical population, with weekly outpatient sessions.",
            highlights: [
              "Different intervention: 8 weeks of outpatient therapy, not a 10-day residential retreat",
              "Different population: recruited for recurrent depression, not the general public",
              "Different staffing and dose: clinicians and structured homework, not a silent course",
            ],
          }}
        />
        <p className="mt-6 text-sm text-zinc-600 max-w-3xl leading-relaxed">
          This is not a complaint about MBCT. It is a request to keep two ledgers
          separate, because the honest answer for one is not the honest answer
          for the other.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 my-16">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The two ledgers, side by side
        </h2>
        <p className="text-zinc-700 mb-8 max-w-3xl leading-relaxed">
          Here is the same question, asked of each body of evidence on its own
          terms. Read down each column. The differences are the whole point.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-zinc-500 mb-2">
              Ledger A
            </p>
            <h3 className="text-xl font-bold text-zinc-900 mb-4">
              Clinical mindfulness programs (MBCT / MBSR)
            </h3>
            <dl className="space-y-4 text-sm leading-relaxed">
              <div>
                <dt className="font-semibold text-zinc-900">What it is</dt>
                <dd className="text-zinc-700">
                  An 8-week secular program, weekly group sessions, trained
                  therapists, structured cognitive-therapy elements, daily
                  homework. You go home each night.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-zinc-900">
                  Depression evidence
                </dt>
                <dd className="text-zinc-700">
                  Strong. A meta-analysis found MBCT cut relapse risk by roughly
                  a third (relative risk around 0.66) versus usual care for
                  people with three or more past episodes.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-zinc-900">
                  Designed to treat depression?
                </dt>
                <dd className="text-zinc-700">
                  Yes. Relapse prevention in recurrent depression is the explicit
                  target it was built and tested for.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-zinc-900">Is this Vipassana?</dt>
                <dd className="text-zinc-700">
                  No. It borrows attentional ideas from Buddhist practice but is
                  not the Goenka 10-day course.
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-teal-200 bg-teal-50/60 p-6">
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-teal-700 mb-2">
              Ledger B
            </p>
            <h3 className="text-xl font-bold text-zinc-900 mb-4">
              The 10-day Goenka residential course
            </h3>
            <dl className="space-y-4 text-sm leading-relaxed">
              <div>
                <dt className="font-semibold text-zinc-900">What it is</dt>
                <dd className="text-zinc-700">
                  A 10-day silent residential retreat for the general public,
                  taught by authorized assistant teachers and run by volunteers.
                  No clinical screening for efficacy.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-zinc-900">
                  Depression evidence
                </dt>
                <dd className="text-zinc-700">
                  Thin and indirect. Depression usually appears as a secondary
                  outcome: the Tihar Jail prison program reported drops in both
                  anxiety and depression; a Muscat study saw anxiety fall from
                  about 10 to 3.29.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-zinc-900">
                  Designed to treat depression?
                </dt>
                <dd className="text-zinc-700">
                  No. The tradition explicitly does not position the course as
                  therapy, and the studies were not depression-treatment trials.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-zinc-900">
                  Documented downside
                </dt>
                <dd className="text-zinc-700">
                  Real. One study of retreat participants found 62.9% reported
                  at least one adverse psychological effect, including low mood,
                  anxiety, or confusion.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The anchor fact: search one word across each ledger
        </h2>
        <p className="text-zinc-700 mb-6 max-w-3xl leading-relaxed">
          The cleanest way to feel the gap is to look for the word
          &quot;depression&quot; inside the Vipassana-specific literature, then
          do the same inside the MBCT literature. The numbers below come from the
          sourced review on this site&apos;s{" "}
          <Link
            href="/guide/scientific-evidence"
            className="text-teal-700 underline hover:text-teal-800"
          >
            scientific evidence guide
          </Link>{" "}
          and from a relapse meta-analysis indexed on PubMed, re-checked on{" "}
          {VERIFIED}.
        </p>
        <div className="max-w-2xl mx-auto">
          <TerminalOutput
            title="depression as an outcome: Vipassana-specific vs MBCT"
            lines={litReviewLines}
          />
        </div>
        <p className="mt-6 text-sm text-zinc-600 max-w-3xl leading-relaxed">
          That last contrast is the uncopyable part. The strong, designed,
          replicated depression result lives in Ledger A. The Vipassana-specific
          column has encouraging secondary signals and one honestly
          inconvenient adverse-effects finding, and zero trials that set out to
          test the 10-day course as a depression treatment. Anyone who hands you
          a single confident number for &quot;does Vipassana help
          depression&quot; has almost certainly borrowed it from the wrong
          column.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <ProofBanner
          quote="A study of Vipassana retreat participants found that this share reported at least one adverse psychological effect, including anxiety, panic, depression, confusion, or disorientation."
          metric="62.9%"
          source="Reported in the site's scientific evidence review"
        />
        <p className="mt-6 text-zinc-700 max-w-3xl leading-relaxed">
          Most pages that answer this question never mention this number, and
          leaving it out is what turns an honest answer into a sales pitch. It
          does not mean a 10-day course is dangerous for most people who attend.
          It means the complete answer includes a group for whom intensive,
          silent introspection during an acute low was the wrong thing at the
          wrong time. If you are in an active depressive episode, the widely
          shared guidance, including the eligibility read on this site&apos;s{" "}
          <Link
            href="/faq/vipassana-and-depression"
            className="text-teal-700 underline hover:text-teal-800"
          >
            Vipassana and depression FAQ
          </Link>
          , is to wait until you are more stable. The course will still be there.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 my-16">
        <h2 className="text-3xl font-bold text-zinc-900 mb-6">
          The evidence base, named out loud
        </h2>
        <p className="text-zinc-700 mb-6 max-w-3xl leading-relaxed">
          So that none of this is vague, here are the actual studies and reviews
          behind the two ledgers. The Vipassana-specific ones measure mood as a
          secondary outcome; the MBCT line is the one designed for depression.
        </p>
        <Marquee speed={32} pauseOnHover fade>
          {[
            "Tihar Jail prison meditation program (running since 1993): anxiety + depression drops",
            "Muscat naturalistic study: anxiety 10 -> 3.29 after a 10-day course",
            "Cureus 2025 systematic review: stress + well-being gains, bias risk flagged",
            "Retreat adverse-effects study: 62.9% report at least one effect",
            "BJPsych Open cross-sectional: ~53% of meditators report an unpleasant effect",
            "Piet & Hougaard 2011 (MBCT meta-analysis): ~a third fewer relapses, 3+ episodes",
          ].map((item) => (
            <span
              key={item}
              className="mx-3 inline-block rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700"
            >
              {item}
            </span>
          ))}
        </Marquee>
        <p className="mt-6 text-sm text-zinc-600 max-w-3xl leading-relaxed">
          For the full citations, sample sizes, and the limitations (small
          samples, self-selection bias, the impossibility of a placebo
          meditation), the long version is on the{" "}
          <Link
            href="/guide/scientific-evidence"
            className="text-teal-700 underline hover:text-teal-800"
          >
            scientific evidence guide
          </Link>
          , and the most recent papers are collected in the{" "}
          <Link
            href="/t/vipassana-meditation-research-roundup-april-2026"
            className="text-teal-700 underline hover:text-teal-800"
          >
            April 2026 research roundup
          </Link>
          .
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          So what does change, if not the diagnosis?
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          I am a fellow practitioner, not a teacher and not a clinician, and I
          will not describe the technique or tell anyone how to work with a
          mood. What I can say, from the experience reports that fill the
          community and from the reflective accounts on this site, is that the
          claim worth making is narrower and more durable than &quot;it cures
          depression.&quot; Over months and years of practice, many people
          describe a shift in how a low mood lands: from something that arrives,
          defines the day, and pulls everything down with it, to something they
          can notice as an event that is present and will pass. That is a change
          in relationship, not a change in diagnosis, and it is not fast.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          That distinction matters for expectations. A single 10-day course is
          not a treatment, and going to one hoping it will fix a depression is
          the setup the eligibility guidance warns against. Sustained daily
          practice afterward is where people locate the slow change they
          describe, and it is also the part most people struggle to keep going
          alone. That is the gap this site was built around, including the{" "}
          <Link
            href="/practice-buddy"
            className="text-teal-700 underline hover:text-teal-800"
          >
            practice buddy
          </Link>{" "}
          matching that pairs meditators for daily accountability.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          And for anything operational, how to sit, how to handle a hard day on
          the cushion, what to do with a difficulty, the tradition&apos;s answer
          is consistent: that belongs with{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-700 underline hover:text-teal-800"
            rel="noopener noreferrer"
            target="_blank"
          >
            dhamma.org
          </a>{" "}
          and an authorized assistant teacher at a 10-day course, not with a web
          page. If a retreat left you feeling worse,{" "}
          <a
            href="https://www.cheetahhouse.org"
            className="text-teal-700 underline hover:text-teal-800"
            rel="noopener noreferrer"
            target="_blank"
          >
            Cheetah House
          </a>{" "}
          exists specifically to support meditators through adverse effects.
        </p>
      </section>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        heading="Trying to decide whether a course fits where you are right now?"
        description="Book a short call. I am a fellow practitioner, not a teacher or a clinician, but I am happy to talk through the eligibility question honestly, point you to the right authorized resources, and (if daily practice is what you are after) get you set up with a practice buddy for accountability."
        section="does-vipassana-help-depression-footer"
      />

      <div className="max-w-4xl mx-auto px-6">
        <FaqSection items={faqs} heading="Frequently asked questions" />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <RelatedPostsGrid
          title="Related reading, same question from other angles"
          posts={relatedPosts}
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/faq/vipassana-vs-therapy"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Vipassana vs therapy
          </Link>
          <Link
            href="/guide/risks-and-safety"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Risks and safety guide
          </Link>
          <a
            href="https://www.dhamma.org"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            dhamma.org (the tradition itself)
          </a>
        </div>
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Talk through whether a course fits where you are right now."
        section="does-vipassana-help-depression-sticky"
      />
    </article>
  );
}
