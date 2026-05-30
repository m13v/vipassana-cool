import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  ProofBanner,
  StepTimeline,
  InlineTestimonial,
  FaqSection,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-adhd";
const PUBLISHED = "2026-05-30";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";
const CODE_URL = "https://www.dhamma.org/en/about/code";

export const metadata: Metadata = {
  title:
    "Vipassana and ADHD: What the Course Rules Actually Say, From 6 Courses In",
  description:
    "The honest version of the Vipassana-and-ADHD question. The tradition's own Code of Discipline says Vipassana is not a substitute for psychiatric treatment, and ADHD medication must be disclosed on the application. A reflection from a practitioner with 6 ten-day courses, not a cure pitch.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Vipassana and ADHD: the honest version, from someone 6 courses in",
    description:
      "Vipassana is not marketed by its own tradition as an ADHD treatment. The Code of Discipline says so in writing. What a distractible mind actually meets across 10 days, and the medication rule nobody quotes.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Vipassana and ADHD: what the course rules actually say",
    description:
      "Reflection and logistics, not technique instruction and not medical advice. For anything operational, the only honest pointer is dhamma.org and an authorized assistant teacher.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "Can someone with ADHD sit a 10-day Vipassana course?",
    a: "People with ADHD do sit and complete 10-day courses, and a fair number report it was worth it. There is no blanket rule that an ADHD diagnosis disqualifies you. What there is, is a real screening: the dhamma.org application asks about psychiatric history and current medication, and the Code of Discipline states plainly that the course is not a substitute for psychiatric treatment and is not recommended for people with significant mental health issues. ADHD on its own is usually not in that category, but the honest move is to answer the application questions truthfully and let the course management and your own clinician make the call, not a blog post. I have sat 6 courses; I am not a teacher and not a clinician, and this is not clearance to attend.",
  },
  {
    q: "Does Vipassana cure or treat ADHD?",
    a: "No, and the tradition itself does not claim it does. The dhamma.org Code of Discipline says verbatim that 'Vipassana meditation is not a substitute for medical or psychiatric treatment.' Most pages you will find online frame Vipassana as a fix for ADHD; that framing comes from the writers, not from the tradition. What is honest to say is narrower: the course is a long, structured training in a specific kind of attention, and many practitioners, including some with ADHD, describe lasting changes in how they relate to a restless mind. That is not the same as a treatment claim, and you should be suspicious of anyone who collapses the two.",
  },
  {
    q: "Do I have to stop my ADHD medication for the course?",
    a: "The Code of Discipline does not tell you to stop anything. What it requires is disclosure: 'Those taking medicines or drugs, with or without a doctor's prescription, should provide the details on the application form.' Whether you continue a stimulant or non-stimulant prescription through a 10-day silent intensive is a medical decision between you and your prescriber, and a logistics conversation with the course management who read your application. Do not change your medication on the strength of anything you read here. Put the details on the form, name your prescriber, and let the people with the actual responsibility weigh in.",
  },
  {
    q: "Is sitting still for hours realistic with ADHD?",
    a: "It is hard for most people, ADHD or not, and the schedule is genuinely long: roughly ten hours of sitting across a day, in stretches. People with ADHD often report the physical stillness as the sharpest edge, more than the silence. Some pace the walking paths between sits. None of that is a failure; the course environment is built to hold a restless body and mind for the full ten days, with an assistant teacher available daily for the operational questions. What the course trains, descriptively, is a different relationship to the urge to move, not the elimination of it. How to actually work with that urge on the cushion is taught in the room, not on this page.",
  },
  {
    q: "What does the research actually say about meditation and attention?",
    a: "Carefully: there is a body of neuroimaging work associating long-term Vipassana practice with changes in regions tied to attention regulation, including the anterior insula and prefrontal cortex, and a meta-analysis of 21 neuroimaging studies identified eight brain regions consistently altered in meditators. That is suggestive, not a clinical ADHD trial. It does not establish that Vipassana improves ADHD symptoms, and it is not a substitute for an evidence-based ADHD treatment plan. Read the research roundup on this site for the balanced version, including the adverse-effects literature, and treat all of it as context, not as a prescription.",
  },
  {
    q: "Why does this page not tell me how to focus during meditation?",
    a: "Because the technique is not taught outside a 10-day residential course, by design. The Goenka tradition reserves technique transmission for authorized assistant teachers in person. Any page, app, or AI that hands you a focus method and calls it Vipassana is not following the tradition it is named after. For the operational question, how to work with a wandering mind, an overwhelming sit, or a hard day, the right place is dhamma.org and the assistant teacher you will meet at the course. That redirect is not a dodge; it is the actual rule.",
  },
  {
    q: "Who wrote this, and why should an ADHD reader trust it?",
    a: "My name is Matthew. I have sat 6 ten-day Vipassana courses across three centers (Dhammamanda in NorCal, the Bay Area center's Christmas course at the rented CYO camp, and North Fork in Central California) and I track 990+ days of daily practice on this site. I am not a teacher, not a clinician, and I have no role at dhamma.org. I am a practitioner who came in with a famously agitated, impatient mind, so the restless-mind question is not abstract for me. Take this as one practitioner's notes plus the official rules quoted accurately, not as authority or as medical advice.",
  },
  {
    q: "If I am newer to all this, what is one concrete next step?",
    a: "Two honest ones. First, if you are considering a course, go to dhamma.org, find a 10-day course in your region, and fill out the application carefully, including the mental-health and medication questions; it is offered on a strict donation basis with no fixed fee. Second, if the bottleneck is keeping a daily sit going once you have sat a course, the practice buddy program on this site pairs two humans on a recurring Google Meet for accountability, which several people with attention challenges have found steadier than sitting alone. No AI in the room, just another person at the same time.",
  },
];

const restlessArc = [
  {
    title: "Days 1 to 3: the body is the loudest thing",
    description:
      "For a mind that is used to moving, the first edge is rarely the silence. It is the stillness. The schedule asks for long sits, and the urge to get up, check something, or do anything arrives constantly. Many people with ADHD describe pacing the walking paths in the breaks. The course is built to absorb that; nobody is surprised by a restless first three days.",
  },
  {
    title: "The middle days: the novelty wears off",
    description:
      "Once the schedule stops being new, the part of the mind that chases stimulation has nothing left to chase. This is where it gets quiet in an uncomfortable way for some, and unexpectedly workable for others. I will not describe what you do with that, because that is the technique, and the technique is taught in the room.",
  },
  {
    title: "The assistant teacher is there daily for the operational part",
    description:
      "Every course has scheduled times to ask an authorized assistant teacher about exactly the things a restless or distractible mind runs into. That is the correct address for 'my mind will not settle' or 'the sits are overwhelming.' Not a website, not an app, not me.",
  },
  {
    title: "Day 11 onward: the restlessness is still yours",
    description:
      "The course is not a personality transplant. Whatever attentional pattern you came in with does not vanish when you leave. In my own experience across 6 courses, what changed was the gap between the urge to move and acting on it, and the volume on the agitation, not the existence of either. That slow shift came from daily practice between courses, not from one course.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Vipassana and ADHD" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Vipassana and ADHD", url: PAGE_URL },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Vipassana and ADHD: What the Course Rules Actually Say, From 6 Courses In",
    description:
      "An honest reframe of the Vipassana-and-ADHD question. The dhamma.org Code of Discipline disclaims Vipassana as a substitute for psychiatric treatment and requires medication disclosure on the application. Reflection plus official rules, not a cure pitch and not technique instruction.",
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
        <p className="text-xs font-mono uppercase tracking-[0.22em] text-teal-600 mb-3">
          Reflection and logistics. Not medical advice. Not technique instruction.
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          Vipassana and ADHD, the honest version
        </h1>
        <p className="mt-4 text-lg text-zinc-600">
          Almost every page on this question sells the same story: a restless,
          distractible mind walks into a 10-day silent course and walks out
          fixed. That is not what the tradition claims, and it is not what the
          official rules say. Here is the version with the cure-narrative
          stripped out, written by someone who has sat{" "}
          <strong className="text-zinc-900">6 ten-day courses</strong> with a
          mind that was anything but calm going in.
        </p>
      </header>

      <div className="py-4">
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="9 min read"
        />
      </div>

      {/* Direct answer, in the first 30% of the page */}
      <section className="max-w-3xl mx-auto px-6 my-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 md:p-8">
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-teal-700 mb-3">
            Direct answer, verified 2026-05-30
          </p>
          <p className="text-zinc-800 leading-relaxed">
            Can you do Vipassana with ADHD, and does it help? People with ADHD
            do sit and finish 10-day courses, and many describe real, lasting
            value. But Vipassana is{" "}
            <strong className="text-zinc-900">not an ADHD treatment</strong>.
            The tradition&apos;s own{" "}
            <a
              href={CODE_URL}
              className="text-teal-700 underline hover:text-teal-800"
              rel="noopener noreferrer"
              target="_blank"
            >
              Code of Discipline
            </a>{" "}
            states it is &ldquo;not a substitute for medical or psychiatric
            treatment.&rdquo; If you take ADHD medication, you must disclose it
            on the dhamma.org application form, and whether you continue it
            through the course is a decision for you and your prescriber, not a
            website.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 my-12">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          The thing none of the other pages quote
        </h2>
        <p className="text-zinc-600 mb-4 leading-relaxed">
          When you search this topic, the pages that come up lead with a
          breakthrough story or a list of benefits, and they treat Vipassana as
          a tool aimed at ADHD. None of them put the tradition&apos;s actual
          position in front of you. The actual position is written down, in
          public, on the application materials every student agrees to.
        </p>
        <ProofBanner
          quote="Vipassana meditation is not a substitute for medical or psychiatric treatment, and we do not recommend it for people with significant mental health issues."
          source="dhamma.org Code of Discipline, verbatim, verified 2026-05-30"
          metric="official"
        />
        <p className="text-zinc-600 mt-6 leading-relaxed">
          That sentence is the whole reframe. ADHD on its own is usually not a
          &ldquo;significant mental health issue&rdquo; in the sense the Code is
          worried about, which is why people with ADHD attend regularly. But the
          sentence kills the premise that the course is being offered to you as
          a fix for ADHD. It is not. It is a meditation course with a long
          history and a strict structure, and it is honest enough about its own
          limits to say so on the form you sign.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 my-12">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          The medication rule, stated exactly
        </h2>
        <p className="text-zinc-600 mb-4 leading-relaxed">
          The single most common worry I hear from people with ADHD is about
          medication. A stimulant prescription and a 10-day silent intensive is
          a real question, and it deserves a precise answer rather than vibes.
          Here is what the Code of Discipline actually says, and just as
          importantly, what it does not say.
        </p>
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 my-6">
          <p className="text-zinc-800 leading-relaxed mb-3">
            <span className="font-semibold text-zinc-900">What it says:</span>{" "}
            &ldquo;Those taking medicines or drugs, with or without a
            doctor&apos;s prescription, should provide the details on the
            application form.&rdquo;
          </p>
          <p className="text-zinc-800 leading-relaxed">
            <span className="font-semibold text-zinc-900">
              What it does not say:
            </span>{" "}
            it does not tell you to stop, taper, or skip your medication. The
            only obligation in the text is disclosure. Everything beyond that, in
            particular whether a stimulant or non-stimulant stays on board for
            ten days of long sits, is a medical decision between you and the
            person who prescribed it, with the course management looped in
            because they have read your form.
          </p>
        </div>
        <p className="text-zinc-600 leading-relaxed">
          Do not adjust your medication on the strength of anything written here
          or anywhere else online. Put the real details on the application, name
          your prescriber, and let the people who carry the responsibility make
          the call. That is both the safe move and, literally, the rule.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 my-12">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          What a distractible mind actually meets across 10 days
        </h2>
        <p className="text-zinc-600 mb-6 leading-relaxed">
          This is descriptive, not instructional. It is what tends to happen,
          in general terms, for a restless mind inside the course structure, drawn
          from my own 6 courses and from a lot of conversations with fellow
          students. It is not a how-to, and it deliberately stops at the door of
          the technique.
        </p>
        <StepTimeline steps={restlessArc} />
      </section>

      <section className="max-w-3xl mx-auto px-6 my-12">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          The before-state was not calm
        </h2>
        <p className="text-zinc-600 mb-6 leading-relaxed">
          I bring this up because the implicit assumption behind most
          ADHD-and-meditation pages is that you have to be a naturally settled
          person to get anything out of a course. That was not me. In an
          interview about my path I described the before-state in words I have
          not been able to walk back, and they are the opposite of calm.
        </p>
        <InlineTestimonial
          quote="Vipassana is the single most important event in my life that completely changed my life before and after, making me from an extremely agitated and badly mannered, bad habits, ego-centered person into someone much better than that and much more happy."
          name="Matthew Diakonov"
          role="operator, vipassana.cool, 6 courses, 990+ daily sits tracked"
        />
        <p className="text-zinc-600 mt-6 leading-relaxed">
          I am not offering that as proof that the course treats ADHD. I do not
          know your diagnosis and I am not a clinician. I am offering it as a
          counterweight to the idea that an agitated, distractible starting
          point rules you out. It did not rule me out. The honest framing is that
          the change was slow and came from many courses plus years of daily
          sits, not from one tidy breakthrough.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 my-12">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          What the research does and does not support
        </h2>
        <p className="text-zinc-600 mb-4 leading-relaxed">
          It would be easy to dress this page up with brain science and imply a
          clinical result. I will not. The accurate version is narrow.
          Neuroimaging work associates long-term Vipassana practice with changes
          in regions tied to attention regulation, including the anterior insula
          and prefrontal cortex, and a meta-analysis of 21 neuroimaging studies
          identified eight brain regions consistently altered in meditators.
        </p>
        <p className="text-zinc-600 mb-4 leading-relaxed">
          That is interesting, and it is also not an ADHD trial. None of it
          establishes that Vipassana improves ADHD symptoms, and the same
          literature includes honest documentation of adverse effects for some
          practitioners. If you want the balanced picture, with the caveats
          intact, the{" "}
          <Link
            href="/guide/scientific-evidence"
            className="text-teal-600 underline hover:text-teal-700"
          >
            scientific evidence roundup
          </Link>{" "}
          on this site lays it out without overselling. Treat all of it as
          context, never as a replacement for an evidence-based ADHD plan.
        </p>
      </section>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        heading="Wondering if a course fits an ADHD mind?"
        description="Book a short call. We can talk through how the application and medication-disclosure questions actually work, what the long sits feel like for a restless mind, and how the practice buddy program keeps a daily sit going afterward. Not a coaching call, not a technique session, not medical advice."
        section="vipassana-adhd-footer"
      />

      <div className="max-w-3xl mx-auto px-6">
        <FaqSection items={faqs} heading="Honest answers to the ADHD questions" />
      </div>

      <section className="max-w-3xl mx-auto px-6 my-16">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          Related, if you want the next layer
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/t/vipassana-personality-patterns"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Vipassana for personality patterns
          </Link>
          <Link
            href="/t/vipassana-psychosis"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Vipassana and psychosis: the safety question
          </Link>
          <Link
            href="/guide/scientific-evidence"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Scientific evidence roundup
          </Link>
          <Link
            href="/guide/risks-and-safety"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Risks and safety
          </Link>
          <Link
            href="/practice-buddy"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Practice Buddy: two humans, no AI
          </Link>
          <a
            href={CODE_URL}
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
            rel="noopener noreferrer"
            target="_blank"
          >
            dhamma.org Code of Discipline
          </a>
        </div>
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Talk through the ADHD-and-course question with someone 6 courses in."
        section="vipassana-adhd-sticky"
      />
    </article>
  );
}
