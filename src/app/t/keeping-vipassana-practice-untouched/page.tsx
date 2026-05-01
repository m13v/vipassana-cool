import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  BeforeAfter,
  AnimatedChecklist,
  ProofBanner,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/keeping-vipassana-practice-untouched";
const PUBLISHED = "2026-05-01";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Keeping Vipassana practice untouched: what the tradition is actually asking for",
  description:
    "The phrase reads like an orthodoxy claim. Read the tradition's own wording and it is not. It is a request to give the technique a fair trial as a self-contained method, with one operational test (dhamma service eligibility) the community uses in practice.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Keeping Vipassana practice untouched: not orthodoxy, a fair-trial request",
    description:
      "Four separate guides on this site repeat the same line: do not mix techniques, at least for the first year. The clearest operational definition of untouched is the dhamma service eligibility test.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Keeping Vipassana practice untouched is a fair-trial request, not an orthodoxy",
    description:
      "Read what the tradition actually says about not mixing techniques. The shape is dose, not identity.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "What does keeping a Vipassana practice untouched mean in one sentence?",
    a: "Practicing Vipassana on its own, as taught at a 10-day course, without combining it with other seated meditation techniques. The standard ask is a fair-trial window, generally framed as at least a year of exclusive practice, before integrating other methods.",
  },
  {
    q: "Where does this guidance come from? Is it written down?",
    a: "It is part of the standard old-student commitments and shows up in the Code of Discipline at dhamma.org/en/about/code, in the talks given on the last evening of every 10-day course, and in the conditions for dhamma service. It is not a rule with a penalty; nobody checks. It is a request the tradition makes of students who want to give the technique a fair trial. The clearest operational form of the request is the dhamma service eligibility test: to serve at a course, students must not have been practicing any other meditation technique since their last course.",
  },
  {
    q: "Why is the request framed as not mixing rather than as a positive instruction?",
    a: "Because the technique itself is a closed feedback loop, and mixing inputs from other meditation methods makes it impossible to read what the technique alone is doing. The instruction the tradition gives is not 'this method is the only method that works'; it is 'observe what this method does, on its own, for long enough that you can tell.' Mixing in mantra repetition, visualization, breathwork, or other sensation-tracking systems adds variables that make the read harder, not easier. The request to keep the practice untouched is, in that sense, a request about signal quality.",
  },
  {
    q: "Is the request a claim of lineage purity or supremacy?",
    a: "No. The Goenka tradition does not claim to be the only valid form of meditation. The request not to mix is specifically scoped to the practitioner who has just learned this technique and wants to evaluate it. Practitioners are explicitly told they can return to whatever else they were doing afterward. The fair-trial window exists because the technique is structurally hard to evaluate while diluted with other methods, not because the tradition believes other methods are wrong.",
  },
  {
    q: "What counts as mixing? What does not?",
    a: "Mixing, in the tradition's framing, refers to other seated meditation techniques: mantra repetition, transcendental meditation, visualization-based methods, koan work, mindfulness app guided sits, breathwork practices that direct attention in their own structured way, body-energy systems with their own observation rules. What does not count: yoga or stretching as physical exercise, ethical conduct (the five precepts), reading dhamma material, listening to discourses, journaling, therapy, walking, or normal life. The line is drawn at competing seated practices, not at every adjacent contemplative activity.",
  },
  {
    q: "What is the operational test? How does anyone know if a practice is untouched?",
    a: "Internally, you do. There is no external auditor. The tradition's clearest operational test is the dhamma service eligibility check, which appears explicitly in the dhamma service guidelines: to serve at a 10-day course, the student must not have been practicing any other meditation technique since their last course. That single line is the closest thing to a verifiable definition the community uses, and it is binary: yes or no. Outside of service, the test reduces to honesty with yourself.",
  },
  {
    q: "What about a one-off mindfulness app session, or an occasional guided meditation?",
    a: "The tradition's framing does not provide an exact threshold and does not need one. The request is not to count instances; it is to commit to a single method long enough to read it. A reasonable reading is that occasional secular relaxation exercises (a 3-minute breath count to fall asleep, a stress-tracking app's one-time prompt) sit closer to the exempt side, while any regular substitute or supplement to your daily Vipassana sit sits on the mixing side. The pragmatic question to ask: am I conducting this as a meditation technique with its own observation rules, or as something else? If the former, the tradition asks you to set it aside during the fair-trial window.",
  },
  {
    q: "How long is the fair-trial period?",
    a: "Common phrasings range from 'at least a year' (the framing used in this site's old student path guide) to 'a few years' (used informally by some assistant teachers) to 'until you have served a course' (an indirect framing that uses the dhamma service eligibility test as the proxy). There is no fixed number of days. The tradition trusts the practitioner to commit honestly and to evaluate the practice over a long enough window that the answer is not noise.",
  },
  {
    q: "What about loving-kindness meditation, metta practice?",
    a: "Metta is part of the Goenka technique itself, transmitted at the end of every 10-day course and integrated into the daily practice. A short metta period at the end of a sit is not external; it is included. Stand-alone loving-kindness systems from other traditions, taught with their own observation rules, fall on the mixing side of the line.",
  },
  {
    q: "I have practiced something else for years. Do I have to give it up forever?",
    a: "No. The request is fair-trial, not lifetime exclusivity. After the trial period, the practitioner is the one deciding what works. Many old students integrate other contemplative practices later. The tradition's claim is just that the trial is meaningful only if the trial period is honest. After that, the choice belongs to the person who has done the work.",
  },
  {
    q: "Is this an answer to how I should actually practice?",
    a: "No. Anything operational about how to sit, how to handle a difficulty, what to do with sensation, or how to evaluate your own progress belongs with an authorized assistant teacher at a 10-day residential course, arranged through dhamma.org. This page restricts itself to what the tradition asks and what the request means, not to anything inside the technique. For instructions, please go to dhamma.org and talk to a teacher.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Keeping vipassana practice untouched" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Keeping vipassana practice untouched", url: PAGE_URL },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Keeping Vipassana practice untouched: what the tradition is actually asking for",
    description:
      "An essay on the request not to mix techniques after a 10-day course, grounded in the tradition's own wording and in the operational test the community uses (dhamma service eligibility).",
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
          A reframe, not a rule
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          Keeping Vipassana practice untouched: what the tradition is actually asking for
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl leading-relaxed">
          The phrase sounds like an orthodoxy claim. Read what the
          tradition actually says, in its own words, and the request
          softens into something narrower and more pragmatic. It is a
          fair-trial ask. It applies to other seated meditation methods,
          not to every adjacent activity. It has one operational test the
          community actually uses, written into the conditions for
          serving at a course. This page walks through what the request
          is and is not, and what it has looked like for me across 945+
          unbroken days.
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

      <section className="max-w-4xl mx-auto px-6 my-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 md:p-7">
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-teal-700 mb-3">
            Direct answer · verified 2026-05-01
          </p>
          <p className="text-zinc-800 text-[15px] md:text-base leading-relaxed">
            Keeping a Vipassana practice untouched means practicing the
            technique on its own, as taught at a 10-day course, without
            combining it with other seated meditation methods (mantra,
            visualization, breathwork systems, mindfulness app guided
            sits, koan work, etc.). The traditional ask is a fair-trial
            window, generally framed as at least a year of exclusive
            practice. The clearest operational test the community uses
            is the dhamma service eligibility check: to serve at a
            10-day course, students must not have been practicing any
            other meditation technique since their last course. Source:{" "}
            <a
              href="https://www.dhamma.org/en/about/code"
              className="text-teal-700 underline hover:text-teal-900"
              rel="noopener noreferrer"
              target="_blank"
            >
              the Code of Discipline at dhamma.org
            </a>
            , and the old student commitments restated on the last
            evening of every course.
          </p>
        </div>
      </section>

      <div className="py-2">
        <ProofBanner
          quote="Four separate guide pages on this site repeat the same line in slightly different words. The shape is consistent. The shape is fair-trial, not orthodoxy."
          source="945+ days, 6 courses, three centers"
          metric="945+"
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The phrase that sounds like a rule, and the ask underneath it
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          When someone first hears the request not to mix techniques,
          the surface reading is identity-shaped. You are now a
          Vipassana person, the tradition is asking you to be a pure
          Vipassana person, and any drift toward another method is a
          loyalty failure. That reading is wrong, and the wording in
          every official source pushes against it.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The tradition's actual claim is narrower. The technique is a
          structured method with its own observation grammar. Evaluating
          the method honestly requires running it, on its own, long
          enough that the result is not contaminated by inputs from
          other methods. Mixing meditation systems mid-trial is not a
          moral problem; it is a measurement problem. You cannot tell
          which method is producing what you experience, because there
          are now two simultaneously running.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          That reframe matters because it changes which questions are
          live. Instead of "am I being a good student of this lineage,"
          the question becomes "have I given this method a window long
          enough and clean enough to read what it does." The first
          question has no answer; the second one has a roughly
          one-year answer the tradition restates in many places.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          For context, I am sharing my own experience as a peer
          practitioner, not as a teacher. I have done six 10-day courses
          across three centers and 40+ days of dhamma service, and I
          have followed the not-mixing request through 945+ unbroken
          days of daily practice. None of that makes me an authority on
          the technique. It just gives me a working sample.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Two readings of the same sentence
        </h2>
        <p className="text-zinc-700 mb-6 max-w-3xl leading-relaxed">
          The same line, "do not mix this technique with another," lands
          completely differently depending on which framing the reader
          arrives with. Tap between the two and notice which one matches
          the tradition's actual phrasing.
        </p>
        <BeforeAfter
          title="Identity reading vs. fair-trial reading"
          before={{
            label: "Identity reading",
            content:
              "Mixing is a loyalty failure. The tradition is claiming to be the only valid path. Anything you do outside this method is a betrayal of the practice. The rule is permanent. The penalty is moral, even if invisible. Other meditation traditions are wrong, or at least lesser. Choosing this technique means choosing it forever and exclusively. The request is about who you are, not about what you are doing.",
            highlights: [
              "Frames the request as identity",
              "Treats mixing as moral failure",
              "Reads the rule as permanent and exclusive",
              "Implies other traditions are inferior",
            ],
          }}
          after={{
            label: "Fair-trial reading",
            content:
              "Mixing is a measurement problem. The tradition is asking you to commit to one method for long enough that you can honestly evaluate it. The window is finite, generally framed as at least a year. After the trial, the choice belongs to you. Other meditation traditions are not being judged; they are just temporarily set aside while you read what this one does. The request is about dose and signal quality, not about who you are.",
            highlights: [
              "Frames the request as a fair trial",
              "Treats mixing as signal contamination",
              "Reads the window as finite (at least a year)",
              "Stays neutral about other traditions",
            ],
          }}
        />
        <p className="text-zinc-700 mt-4 max-w-3xl leading-relaxed">
          Every official source I have read uses the second framing.
          The Code of Discipline at dhamma.org talks about giving the
          technique a fair trial, not about lineage purity. The talks
          on the last evening of a course frame the year-of-exclusive-practice
          ask as a way to honor the time you already invested in the
          retreat. The dhamma service eligibility line is operational,
          not moral.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What counts, and what does not
        </h2>
        <p className="text-zinc-700 mb-6 max-w-3xl leading-relaxed">
          The phrase &ldquo;other meditation techniques&rdquo; is doing
          most of the work in this request, and it is more specific than
          it sounds. The tradition draws the line at competing seated
          practices, not at every adjacent activity that touches the
          mind or body. The list below is how I read the line based on
          how the tradition itself uses the phrase across the Code of
          Discipline, the old student commitments, and the dhamma service
          conditions.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatedChecklist
            title="What the request typically means by mixing"
            items={[
              { text: "Mantra repetition (TM and adjacent)", checked: true },
              { text: "Visualization-based methods", checked: true },
              { text: "Mindfulness app guided meditation sessions", checked: true },
              { text: "Other body-sensation systems with their own observation rules", checked: true },
              { text: "Koan work and zen kōan-style attention", checked: true },
              { text: "Structured breathwork practiced as a meditation method", checked: true },
              { text: "Stand-alone loving-kindness systems from other lineages", checked: true },
            ]}
          />
          <AnimatedChecklist
            title="What the request does not appear to count as mixing"
            items={[
              { text: "Yoga or stretching as physical exercise", checked: true },
              { text: "Reading dhamma books and articles", checked: true },
              { text: "Listening to Goenka discourses", checked: true },
              { text: "Following the five precepts", checked: true },
              { text: "Therapy, journaling, walking, normal life", checked: true },
              { text: "Metta at the end of a sit (already part of the technique)", checked: true },
              { text: "Occasional secular relaxation exercises (sleep, stress)", checked: true },
            ]}
          />
        </div>
        <p className="text-zinc-700 mt-6 max-w-3xl leading-relaxed">
          The right side of that table is not arbitrary. None of those
          activities run as a competing seated meditation method with
          its own grammar. Yoga is a body practice. The precepts are
          ethical conduct. Reading is study. Therapy is a different
          surface entirely. The line the tradition is drawing is at
          other formal sit-down techniques, because those are the ones
          that confound the read on the technique you are trying to
          evaluate.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The operational test the community actually uses
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The tradition does not have a meditation police, and there is
          no formal audit. The request is honor-system internally. But
          there is one place where the question becomes binary, written
          down, and externally checkable: the eligibility conditions for
          dhamma service.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          To volunteer at a 10-day course (cooking, course managing,
          driving, helping students with logistics), the application
          asks whether you have been practicing any other meditation
          technique since your last course. The answer is yes or no.
          That single line is the clearest verifiable definition of
          &ldquo;untouched&rdquo; the community uses in practice. Anyone
          who has applied to serve has had to answer it.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The reason that test exists is not policing. The reason is
          that course service is itself a continuation of the practice,
          and serving a course while running a different meditation
          method in your private practice fragments the read on the
          method you are there to support. So the eligibility line acts
          as a mirror back to the practitioner: are you actually
          giving this technique a fair trial right now, by your own
          honest answer?
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          Across my 40+ days of dhamma service at three centers
          (Dhammamanda in Northern California, CYO in the Bay Area,
          North Fork in Central California), that line has been the
          only place where the not-mixing question has actually been
          asked of me out loud. Every other moment of those 945+ days
          has been an internal honor-system answer, with the eligibility
          form as the periodic external check.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Why the request reads as restrictive when it is not meant to
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          A standard objection: I already have a practice I value. Why
          does anyone get to ask me to set it aside? The answer that
          lands for most people I have served alongside is not the
          tradition saying &ldquo;our way is better.&rdquo; The answer
          is more like a research protocol. If you took ten days off
          work, traveled to a center, did 100+ hours of sitting, and
          finished the course, the tradition is asking you to honor
          that time investment with a window long enough to read the
          result. Mixing the result with another method during that
          window does not just lower the signal; it produces an answer
          that is neither this method nor the other one.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          That framing does not eliminate the friction, but it changes
          its shape. The friction is not theological; it is logistical.
          You have a finite window where you are giving up other things
          you used to do. The tradition is asking that the window be
          long enough to mean something. After it, you do whatever you
          want, with a clean read on what this method, on its own, did
          and did not give you.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          For me, that window has stretched into years and the question
          of returning to other methods has receded, but the tradition
          is not claiming this happens for everyone. The tradition's
          claim ends at the trial. What you do after is your honest
          answer to a question only you have the data to answer.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What this site does and does not do
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          This site is a resource for fellow Vipassana meditators. It
          does not teach the technique. It does not describe how to
          handle anything you encounter inside a sit. It does not give
          operational guidance about what to observe or how. All of
          that belongs at a 10-day course with an authorized assistant
          teacher, organized through{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-700 underline hover:text-teal-900"
            rel="noopener noreferrer"
            target="_blank"
          >
            dhamma.org
          </a>
          .
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          What this site does is the outer layer: logistics, daily
          practice consistency, and a{" "}
          <Link
            href="/practice-buddy"
            className="text-teal-700 underline hover:text-teal-900"
          >
            practice buddy matching service
          </Link>{" "}
          that pairs old students for daily silent co-sitting on a
          shared Google Meet URL. None of that touches the technique
          itself. The buddy matching service has no fields to track
          which methods you do or do not practice; it does not need
          them, because the tradition's not-mixing request is between
          you and your own practice.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          If you want to talk through what consistency looks like for
          you and how a daily-sit pairing works, the call link below is
          a 15-minute conversation. We are practitioners, not teachers,
          and we treat the technique itself as off-limits for that
          conversation. The call is about the outer layer (calendar,
          partner, daily rhythm) only.
        </p>
      </section>

      <div className="py-2">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          section="guide-footer"
          heading="Talk through your daily-practice rhythm"
          description="A 15-minute call about consistency, partner pairing, and the outer surface of practice. We do not teach the technique. For anything technique-related, please go to dhamma.org and talk to a teacher."
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-14" id="faq">
        <FaqSection items={faqs} heading="Common questions about keeping practice untouched" />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <RelatedPostsGrid
          title="Related reading"
          subtitle="Adjacent surfaces on this site"
          posts={[
            {
              title: "Preserving daily practice discipline by subtraction",
              href: "/t/preserving-daily-practice-discipline",
              excerpt:
                "An argument that daily discipline is preserved by removing decision points, not by adding willpower scaffolding.",
              tag: "Argument",
            },
            {
              title: "The old student path: life after your first course",
              href: "/guide/old-student-path",
              excerpt:
                "What being an old student actually means, what unlocks, and the standard expectations including the not-mixing request.",
              tag: "Guide",
            },
            {
              title: "Practice buddy: where the meditation definition inverts",
              href: "/t/practice-buddy",
              excerpt:
                "How a meditation practice buddy differs from every other kind of practice buddy, and what the silent-pair architecture looks like.",
              tag: "Guide",
            },
          ]}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="guide-sticky"
        description="15 min on daily-practice consistency. Outer layer only. We do not teach the technique."
      />
    </article>
  );
}
