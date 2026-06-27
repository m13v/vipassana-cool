import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  SequenceDiagram,
  ProofBanner,
  RelatedPostsGrid,
  GradientText,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/yes";
const PUBLISHED = "2026-06-27";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";
const APP_FORM = "https://www.dhamma.org/en/docs/forms/appform-en.pdf";
const CODE_URL = "https://www.dhamma.org/en/code";

export const metadata: Metadata = {
  title: "What “Yes” means on the Vipassana application form",
  description:
    "On the Goenka Vipassana course application, every health and background question is a literal No / Yes checkbox. Answering Yes does not disqualify you; it only adds a “please give details” line. The one Yes that binds you is the declaration to stay the full course. A line-by-line read of the official form.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "What “Yes” means on the Vipassana application form",
    description:
      "Answering Yes to a health question is disclosure, not rejection. The one Yes that actually binds you is the declaration to stay the full course. A line-by-line read of the official application.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What “Yes” means on the Vipassana application",
    description:
      "Saying Yes to a health question never disqualifies you. The one Yes that binds you is the commitment to stay the full course.",
  },
};

const FAQS: FaqItem[] = [
  {
    q: "Does answering Yes on the Vipassana application get me rejected?",
    a: "No. None of the No / Yes questions are pass-fail. A Yes only triggers a “please give details” line so the center can understand your situation. The form exists to help them support you, not to screen you out. People with disclosed health conditions, past depression, and prescribed medication sit courses constantly.",
  },
  {
    q: "What is the one Yes that actually commits me?",
    a: "The declaration at the bottom of page two. The official form reads: “I agree to stay on the course site and to abide by all the rules and regulations for the duration of the course.” That is the binding Yes. It is a commitment to stay for the full period, not a health question you can soften with details.",
  },
  {
    q: "If I tick Yes to a mental health question, will they still admit me?",
    a: "Often yes, but it depends on the specifics, which is exactly why they ask for dates, symptoms, duration, treatment, and present condition. The course is intensive, so the center wants to be sure it will not be harmful right now. For any question about your own situation, contact the center directly through dhamma.org; they are the ones who make the call, not a website.",
  },
  {
    q: "Should I just answer No to avoid follow-up questions?",
    a: "No. The declaration also asks you to certify the information is true to the best of your knowledge. Under-reporting a real condition removes the center's ability to keep you safe during ten days of intensive practice. Honesty is the entire point of the disclosure section.",
  },
  {
    q: "What does the substance-use Yes actually cover?",
    a: "The official wording asks whether you are now taking, or have taken within the past two years, any alcohol or drugs such as marijuana, amphetamines, barbiturates, cocaine, heroin, or other intoxicants, and separately whether you take any prescribed medication. A Yes asks for dates, types, amounts, and present use. It is disclosure so the center can plan, not an automatic no.",
  },
  {
    q: "Is the application the same everywhere in the Goenka tradition?",
    a: "The core official form (appform-en.pdf on dhamma.org) is the shared template, and the No / Yes disclosure section is consistent. Individual centers run their own online application systems that mirror it, so wording and layout can differ slightly while the substance is the same.",
  },
];

const RELATED = [
  {
    title: "How to fill out the Vipassana application",
    href: "/guide/course-application-tips",
    excerpt:
      "A section-by-section walk through the application, including the mental-health question people worry about most.",
    tag: "Guide",
    readTime: "8 min",
  },
  {
    title: "Can I leave Vipassana in between?",
    href: "/t/can-i-leave-vipassana-in-between",
    excerpt:
      "What the “stay for the full course” declaration means in practice, and the one day nobody is allowed to leave.",
    tag: "Logistics",
    readTime: "6 min",
  },
  {
    title: "First course: what actually happens",
    href: "/guide/first-course-tips",
    excerpt:
      "After the Yes, what the arrival day, noble silence, and the schedule feel like from the inside.",
    tag: "Experience",
    readTime: "7 min",
  },
];

// Every concrete row below is transcribed from the official course
// application form: https://www.dhamma.org/en/docs/forms/appform-en.pdf
const FORM_ROWS: { q: string; answer: string; followup: boolean }[] = [
  {
    q: "Have you completed any 10-day course with S.N. Goenka or his assistant teachers?",
    answer: "Yes (Old Student) / No (New Student)",
    followup: false,
  },
  {
    q: "Will a friend or family member be taking this course as well?",
    answer: "No / Yes",
    followup: true,
  },
  {
    q: "Have you had any previous experience with meditation techniques, therapies or healing practices? (new students)",
    answer: "No / Yes",
    followup: true,
  },
  {
    q: "Do you have any physical health problems, medical conditions or diseases?",
    answer: "No / Yes",
    followup: true,
  },
  {
    q: "For women applicants: please indicate whether you are pregnant.",
    answer: "No / Yes",
    followup: false,
  },
  {
    q: "Do you have, or have you ever had, any mental health problems such as significant depression or anxiety, panic attacks, manic depression, schizophrenia, etc.?",
    answer: "No / Yes",
    followup: true,
  },
  {
    q: "Are you now taking, or have you taken within the past two years, any alcohol or drugs (marijuana, amphetamines, barbiturates, cocaine, heroin, or other intoxicants)?",
    answer: "No / Yes",
    followup: true,
  },
  {
    q: "Are you now taking, or have you taken within the past two years, any prescribed medication?",
    answer: "No / Yes",
    followup: true,
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
              headline: "What “Yes” means on the Vipassana application form",
              description:
                "A line-by-line read of the Goenka Vipassana course application: every health and background question is a No / Yes checkbox, answering Yes is disclosure rather than disqualification, and the one binding Yes is the declaration to stay the full course.",
              url: PAGE_URL,
              datePublished: PUBLISHED,
              author: "Matthew Diakonov",
              authorUrl: "https://m13v.com",
              publisherName: "Vipassana.cool",
              publisherUrl: "https://vipassana.cool",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbListSchema([
              { name: "Home", url: "https://vipassana.cool" },
              { name: "Guides", url: "https://vipassana.cool/t/vipassana-meditation" },
              { name: "“Yes” on the application", url: PAGE_URL },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(FAQS)),
        }}
      />

      {/* Hero */}
      <header className="max-w-4xl mx-auto px-6 pt-12 pb-6">
        <Breadcrumbs
          className="mb-8 px-0"
          items={[
            { label: "Home", href: "/" },
            { label: "Vipassana", href: "/t/vipassana-meditation" },
            { label: "“Yes” on the application" },
          ]}
        />
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
          What <GradientText>&ldquo;Yes&rdquo;</GradientText> means on the
          Vipassana application
        </h1>
        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          The Goenka course application is mostly a column of small boxes you
          tick <span className="font-semibold text-zinc-900">No</span> or{" "}
          <span className="font-semibold text-zinc-900">Yes</span>. People stall
          on it because they assume a Yes is a red flag. It is not. Here is what
          each Yes actually does, read straight off the official form.
        </p>
      </header>

      <ArticleMeta
        className="mb-2"
        author="Matthew Diakonov"
        authorRole="Written with AI"
        datePublished={PUBLISHED}
        readingTime="6 min read"
      />

      {/* Direct answer */}
      <section className="max-w-4xl mx-auto px-6 mt-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer &middot; verified 2026-06-27
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            Answering <span className="font-semibold">Yes</span> to any health or
            background question on the Vipassana application does{" "}
            <span className="font-semibold">not</span> disqualify you. Each Yes
            only opens a <em>&ldquo;please give details&rdquo;</em> line so the
            center understands your situation and can support you. The one Yes
            that truly binds you is the declaration at the end:{" "}
            <span className="font-semibold">
              you agree to stay on site for the full course and follow the Code
              of Discipline.
            </span>
          </p>
          <p className="mt-3 text-sm text-zinc-600">
            Source:{" "}
            <a
              href={APP_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline underline-offset-2"
            >
              official Course Application Form (dhamma.org)
            </a>
            .
          </p>
        </div>
      </section>

      {/* The form as a yes/no reference */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          Every No / Yes box on the official form
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The application is two pages. Most of the real content is a short stack
          of disclosure questions, each printed with two checkboxes:{" "}
          <span className="font-semibold">No</span> and{" "}
          <span className="font-semibold">Yes</span>. Five of them sit under a
          heading called <em>For All Students</em>, and each one is followed by
          the same instruction: <em>If yes, please give details</em>. That single
          line is the whole reason a Yes is safe to tick honestly.
        </p>

        <div className="mt-7 overflow-hidden rounded-2xl border border-zinc-200">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-zinc-50 text-zinc-500">
                <th className="px-4 py-3 font-semibold">Question on the form</th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap">
                  Checkboxes
                </th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap">
                  Yes adds&hellip;
                </th>
              </tr>
            </thead>
            <tbody>
              {FORM_ROWS.map((row, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-white" : "bg-zinc-50/60"}
                >
                  <td className="px-4 py-3 align-top text-zinc-800 leading-snug">
                    {row.q}
                  </td>
                  <td className="px-4 py-3 align-top whitespace-nowrap text-zinc-700 font-medium">
                    {row.answer}
                  </td>
                  <td className="px-4 py-3 align-top text-zinc-600">
                    {row.followup ? "a “please give details” line" : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-zinc-500">
          Transcribed from the official Course Application Form (appform-en.pdf)
          on dhamma.org, June 2026. Individual centers run online systems that
          mirror this template.
        </p>
      </section>

      {/* What happens when you tick Yes */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          What actually happens when you tick Yes
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          A Yes does not route your form into a reject pile. It starts a quiet
          back-and-forth. You write the detail, the center reads it, and if
          anything is unclear they email a follow-up question. The common ending
          is that they confirm your seat.
        </p>
        <div className="mt-7">
          <SequenceDiagram
            title="A Yes on a health question"
            actors={["You (applicant)", "The center"]}
            messages={[
              {
                from: 0,
                to: 1,
                label: "Tick Yes, then write the details",
                type: "request",
              },
              {
                from: 1,
                to: 0,
                label: "Reviews it, sometimes emails a question",
                type: "response",
              },
              {
                from: 0,
                to: 1,
                label: "Reply with specifics if asked",
                type: "request",
              },
              {
                from: 1,
                to: 0,
                label: "Confirms your seat (the common result)",
                type: "response",
              },
            ]}
          />
        </div>
        <p className="mt-5 text-zinc-700 leading-relaxed">
          I am not a teacher, just someone who has sat six courses and served at
          a few. The thing I wish more first-timers knew: the center is not
          looking for a reason to say no. They are trying to make sure ten days
          of silence and intensive practice will be safe for you right now. A
          disclosed condition with a clear, honest note is far easier for them to
          work with than a blank box that hides something.
        </p>
      </section>

      {/* Disclosure, not disqualification */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          Yes is disclosure, not disqualification
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The mental-health question is the one people freeze on. The exact
          wording asks whether you have, or have ever had, any mental health
          problems such as significant depression or anxiety, panic attacks,
          manic depression, or schizophrenia. It reads heavy. But the purpose is
          the same as every other Yes: if you tick it, you add dates, symptoms,
          duration, treatment, and present condition, and a human reads that
          context.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The substance question works the same way. It asks whether you are now
          taking, or have taken within the past two years, alcohol or drugs, and
          separately whether you take prescribed medication. A Yes is not a moral
          mark against you. Intoxicants and the practice do not mix well, and the
          center simply needs to plan around what is true. The form even says it
          plainly: only those who feel they can honestly and scrupulously follow
          the discipline should apply. Honesty is built into the design.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          If you are weighing whether your specific situation is a yes or a no
          for admission, that is not a question a guide page should answer for
          you. Contact the center through{" "}
          <a
            href="https://www.dhamma.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 underline underline-offset-2"
          >
            dhamma.org
          </a>{" "}
          and let them make the call. They have the experience and the
          responsibility for it.
        </p>
      </section>

      {/* The binding Yes */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          The one Yes that actually binds you
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          All the No / Yes boxes are reversible context. They can be softened
          with a follow-up email. There is exactly one Yes on the form that
          cannot, and it lives in the declaration at the bottom of page two.
        </p>
        <div className="mt-7">
          <ProofBanner
            quote="I agree to stay on the course site and to abide by all the rules and regulations for the duration of the course. I realize that a Vipassana meditation course is a serious undertaking."
            source="Official Course Application Form, dhamma.org"
            metric="1 Yes that binds"
          />
        </div>
        <p className="mt-6 text-zinc-700 leading-relaxed">
          That is the Yes that matters. Not a checkbox about your past, but a
          commitment about your next twelve days on site (ten full days of
          practice, plus arrival and departure). The{" "}
          <a
            href={CODE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 underline underline-offset-2"
          >
            Code of Discipline
          </a>{" "}
          you agree to includes staying for the entire period, the five precepts
          for the duration, and noble silence from the start until the morning of
          the last full day. People do leave early in rare cases, and you are
          never detained, but the application asks you to start with a genuine
          yes to staying. If you want to understand what that commitment feels
          like in practice before you sign it, read{" "}
          <Link
            href="/t/can-i-leave-vipassana-in-between"
            className="text-teal-600 underline underline-offset-2"
          >
            can I leave Vipassana in between
          </Link>
          .
        </p>
      </section>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="guide-footer"
        heading="Said yes and now worried about keeping the practice going?"
        description="Book a quick call with a fellow meditator about building a daily sit and getting matched with a practice buddy after your course."
      />

      <FaqSection items={FAQS} />

      <section className="max-w-4xl mx-auto px-6">
        <RelatedPostsGrid posts={RELATED} />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="guide-sticky"
        description="Questions about the course or daily practice? Talk to a fellow meditator."
      />
    </article>
  );
}
