import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ComparisonTable,
  HorizontalStepper,
  ProofBanner,
  InlineTestimonial,
  BackgroundGrid,
  ShimmerButton,
  AnimatedSection,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-registration-form-online-3-days";
const PUBLISHED = "2026-06-27";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";
const SCHEDULE_SEARCH = "https://www.dhamma.org/en-US/courses/search";
const REQUIREMENTS_URL = "https://www.dhamma.org/en-US/requirements";

export const metadata: Metadata = {
  title:
    "Vipassana 3-day course: the online registration form, and who it is actually for",
  description:
    "Searching for a 3-day Vipassana registration form online? The 3-day course is an old-student short course. Its online 'Apply' link lives on a centre's dhamma.org schedule and opens only to people who already completed a 10-day course. There is no 3-day form for first-timers. Here is exactly how the form works, who can submit it, and what nobody tells you about the daily sit afterward.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Vipassana 3-day course: the online registration form explained",
    description:
      "The 3-day course is old-students-only. Its online application is the 'Apply' link on a centre's dhamma.org schedule. Here is who can submit it and what the form asks. Notes from a meditator, not a teacher.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana 3-day course registration form online",
    description:
      "Why first-timers never find a 3-day registration form, who the 3-day course is for, and how the online 'Apply' link actually works.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "3-day course registration form" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana 3-day course registration form", url: PAGE_URL },
];

const applySteps = [
  {
    title: "Open a centre schedule",
    description:
      "On dhamma.org, search courses by region and find a centre near you. Short courses are listed alongside 10-day ones.",
  },
  {
    title: "Find a 3-day (old student) course",
    description:
      "Short courses are labelled for old students. If you do not see one, the centre may not be running a 3-day course in that window.",
  },
  {
    title: "Click the Apply link",
    description:
      "That link opens the online application form for that specific course date. There is no separate standalone 3-day form.",
  },
  {
    title: "Submit and wait for the registrar",
    description:
      "You confirm your old-student status, then a human registrar reviews it. You get accepted, waitlisted, or not accepted by email.",
  },
];

const formRows = [
  {
    feature: "Who the online form opens for",
    competitor: "Anyone, no prior course needed",
    ours: "Only people who completed a 10-day course",
  },
  {
    feature: "Where the form lives",
    competitor: "Centre schedule 'Apply' link (10-day course)",
    ours: "Centre schedule 'Apply' link (3-day course)",
  },
  {
    feature: "What it asks about prior experience",
    competitor: "Meditation background, none required",
    ours: "Confirmation you have sat a full 10-day course",
  },
  {
    feature: "Arrival and timing",
    competitor: "Day 0 afternoon, runs ~11 days",
    ours: "Arrive 1 to 5 pm, ends by 5 pm on the last day",
  },
  {
    feature: "Cost",
    competitor: "Free, donation-funded",
    ours: "Free, donation-funded",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Is there a 3-day Vipassana course I can register for online as a beginner?",
    a: "No. In the tradition taught by S. N. Goenka, the 3-day course is a short refresher for old students only, meaning people who have already completed at least one 10-day course. If you are new, the online form you can submit is the 10-day course application. There is no 3-day registration form for first-timers. The official old-student requirement reads: 'Completion of at least one 10-Day course with Goenkaji or one of his assistant teachers.'",
  },
  {
    q: "Where is the online registration form for a 3-day course?",
    a: "It is not a standalone page. On dhamma.org you search for courses, open a centre's schedule, find a 3-day (old student) course date, and click the 'Apply' link on that date. That link opens the application form for that specific course. If the centre is not running a 3-day course in your window, there will be no form to submit.",
  },
  {
    q: "What do I need to qualify for a 3-day course?",
    a: "Per the dhamma.org requirements page, short courses ask for completion of at least one 10-day course, that you are trying to keep the five precepts to the best of your ability, and a note that people practising energetic healing on others should not attend. Unlike 20-day and longer courses, there is no fixed daily-practice quota attached to short courses.",
  },
  {
    q: "How long does a 3-day course actually run?",
    a: "For 2-day and 3-day courses you arrive at the centre between 1 and 5 pm on the first day for registration and orientation, and the course ends by 5 pm on the last day. So a 3-day course is a long-weekend shape rather than the full residential block of a 10-day course.",
  },
  {
    q: "Does the 3-day course cost anything to register?",
    a: "No. Like every course in this tradition, it is free of charge for tuition, food, and accommodation, funded entirely by donations from people who have completed a course before. The online form does not take a payment. Only old students who have sat a course are able to donate afterward.",
  },
  {
    q: "I completed a course years ago. Can I still apply for a 3-day course?",
    a: "Yes. Old-student status does not expire. The short courses are open to any old student, including people for whom it has been a long time since their last course. A 3-day course is often exactly the on-ramp people use to come back after a gap.",
  },
  {
    q: "Can this site register me or teach me the technique?",
    a: "No. This is a resource site run by a fellow meditator, not a teacher and not affiliated with the centres. All registration happens on dhamma.org, and anything about how to actually practise belongs with an authorized assistant teacher at a course. What we can help with is the part that comes after: keeping a daily sit alive between courses.",
  },
];

const relatedPosts = [
  {
    title: "Vipassana Application Tips: How to Get Accepted",
    href: "/guide/course-application-tips",
    excerpt:
      "How registration works on dhamma.org, when courses open, and waitlist strategy from 6 applications.",
    tag: "Guide",
  },
  {
    title: "The Old Student Path: Life After Your First Course",
    href: "/guide/old-student-path",
    excerpt:
      "What 'old student' unlocks, including short courses, service, group sittings, and the long game.",
    tag: "Guide",
  },
  {
    title: "Course Progression: From 10-Day to 60-Day",
    href: "/guide/course-progression",
    excerpt:
      "Where short courses sit in the full progression of courses available to old students.",
    tag: "Guide",
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
                "Vipassana 3-day course: the online registration form, and who it is for",
              description:
                "The 3-day Vipassana course is an old-student short course. Its online application is the 'Apply' link on a centre's dhamma.org schedule, open only to people who completed a 10-day course.",
              url: PAGE_URL,
              datePublished: PUBLISHED,
              dateModified: PUBLISHED,
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
          __html: JSON.stringify(breadcrumbListSchema(breadcrumbSchemaItems)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(faqs)),
        }}
      />

      <div className="mx-auto max-w-3xl px-6 py-12">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero */}
        <BackgroundGrid pattern="dots" glow className="mt-6 rounded-2xl">
          <div className="px-6 py-10 sm:px-10">
            <p className="mb-3 inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
              Logistics, from a meditator
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              The Vipassana 3-day course registration form, and who it is
              actually for
            </h1>
            <p className="mt-4 text-lg text-zinc-600">
              If you came here looking for a 3-day registration form and could
              not find one, here is why: the 3-day course is a short refresher
              for people who have already sat a 10-day course, and its online
              form only shows up for them.
            </p>
            <ArticleMeta
              author="Matthew Diakonov"
              authorRole="Written with AI"
              datePublished={PUBLISHED}
              readingTime="6 min read"
            />
          </div>
        </BackgroundGrid>

        {/* Direct answer callout */}
        <div className="mt-8 rounded-xl border border-teal-200 bg-teal-50 p-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer (verified 2026-06-27)
          </p>
          <p className="text-zinc-800">
            There is no standalone 3-day Vipassana registration form for
            newcomers. The 3-day course is an{" "}
            <strong>old-student short course</strong>: you can only register for
            it if you have already completed at least one 10-day course. The
            form is the <strong>&quot;Apply&quot; link</strong> on a specific
            course date inside a centre&apos;s schedule on{" "}
            <a
              href={SCHEDULE_SEARCH}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 underline hover:text-teal-800"
            >
              dhamma.org
            </a>
            . If you are new, the form you can actually submit is the 10-day
            course application. Source:{" "}
            <a
              href={REQUIREMENTS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 underline hover:text-teal-800"
            >
              dhamma.org old-student requirements
            </a>
            .
          </p>
        </div>

        {/* The confusion */}
        <AnimatedSection>
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-zinc-900">
              Why the 3-day form is so hard to find
            </h2>
            <p className="mt-4 text-zinc-700">
              A lot of people type some version of &quot;3-day Vipassana
              registration form online&quot; expecting a short, gentle intro
              they can sign up for over a weekend. That course does not exist in
              this tradition. The entry point for everyone is the full 10-day
              course, because 10 days is the minimum needed to receive the
              complete technique. The shorter formats come later.
            </p>
            <p className="mt-4 text-zinc-700">
              Once you have sat a 10-day course you become what the tradition
              calls an &quot;old student.&quot; That is not a rank or a skill
              level. Someone who finished their first course last week is as much
              an old student as someone sitting for twenty years. What it does
              is open a different tier of courses, including 1-day, 2-day, and
              3-day short courses meant to refresh and strengthen the practice.
              The 3-day registration form lives behind that tier, which is why a
              first-timer searching for it comes up empty.
            </p>
          </section>
        </AnimatedSection>

        {/* Comparison: which form you see */}
        <AnimatedSection>
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-zinc-900">
              Which form you can actually submit
            </h2>
            <p className="mt-4 text-zinc-700">
              Both forms are reached the same way, by clicking an
              &quot;Apply&quot; link next to a course date. What differs is who
              the link will accept, what it asks, and the shape of the course on
              the other side.
            </p>
            <div className="mt-6">
              <ComparisonTable
                productName="3-day form"
                competitorName="10-day form"
                rows={formRows}
                caveat="Both are free and reached through dhamma.org. The 3-day form is the one reserved for old students."
              />
            </div>
          </section>
        </AnimatedSection>

        {/* How the online application works */}
        <AnimatedSection>
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-zinc-900">
              How the online application actually works
            </h2>
            <p className="mt-4 text-zinc-700">
              There is no central 3-day form. Registration is always tied to one
              centre and one course date. The path looks like this:
            </p>
            <div className="mt-6">
              <HorizontalStepper steps={applySteps} />
            </div>
            <p className="mt-6 text-zinc-700">
              The registrar review at the end is a real human step, not an
              automatic confirmation. For popular centres even short courses can
              fill quickly, so applying when registration opens helps. The{" "}
              <Link
                href="/guide/course-application-tips"
                className="text-teal-600 underline hover:text-teal-800"
              >
                application tips guide
              </Link>{" "}
              covers timing and waitlist strategy in detail.
            </p>
          </section>
        </AnimatedSection>

        {/* Anchor fact: what the form requires */}
        <AnimatedSection>
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-zinc-900">
              What the 3-day form requires of you
            </h2>
            <p className="mt-4 text-zinc-700">
              The application gates the 3-day course behind one verified
              requirement. Straight from the dhamma.org requirements page, the
              qualifications for a short course are:
            </p>
            <ul className="mt-4 space-y-3 rounded-xl border border-zinc-200 bg-zinc-50 p-6 text-zinc-700">
              <li>
                <span className="font-semibold text-zinc-900">
                  Completion of at least one 10-day course
                </span>{" "}
                with Goenkaji or one of his assistant teachers.
              </li>
              <li>
                You should be{" "}
                <span className="font-semibold text-zinc-900">
                  trying to keep all five precepts
                </span>{" "}
                to the best of your ability.
              </li>
              <li>
                Those practising energetic healing on others should not attend.
              </li>
            </ul>
            <p className="mt-4 text-zinc-700">
              Notably, unlike 20-day and longer courses, there is{" "}
              <strong>no fixed daily-practice quota</strong> attached to short
              courses. You do not have to prove you have been sitting two hours a
              day to be allowed onto a 3-day course. That makes it a realistic
              way back in for people who drifted from daily practice and want a
              reset.
            </p>
            <div className="mt-6">
              <ProofBanner
                metric="1 to 5 pm"
                quote="For 2-day and 3-day courses you arrive at the centre during this window for registration and orientation, and the course ends by 5 pm on the last day."
                source="dhamma.org course schedule notes"
              />
            </div>
          </section>
        </AnimatedSection>

        {/* The gap: after the 3 days */}
        <AnimatedSection>
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-zinc-900">
              The part the registration form never mentions
            </h2>
            <p className="mt-4 text-zinc-700">
              Here is the thing every schedule page leaves out. A 3-day course is
              short by design. People take one as a booster, a long weekend to
              reconnect with the practice. Then they go home, and the hard part
              starts again the next morning: sitting alone, with no group, no
              teacher, and nobody to notice whether they showed up.
            </p>
            <p className="mt-4 text-zinc-700">
              That gap between courses is the reason this site exists. I am a
              fellow practitioner, not a teacher: 6 courses at 3 centres, 40+
              days of dhamma service, and 1,021+ days of daily practice as of
              this writing. The two-hour daily commitment is easy to keep for a
              week after a course and surprisingly easy to lose over a few
              months. A 3-day refresher helps, but it cannot carry the months in
              between.
            </p>
            <p className="mt-4 text-zinc-700">
              What helps is having another old student who knows whether you sat
              today. That is why we run a free{" "}
              <Link
                href="/practice-buddy"
                className="text-teal-600 underline hover:text-teal-800"
              >
                Practice Buddy matching program
              </Link>
              : it pairs you with another old student for daily-practice
              accountability, so the question &quot;did you sit this
              morning?&quot; comes from a peer rather than from willpower alone.
              It never touches technique and it is run by a meditator, not a
              teacher. If keeping the daily sit between courses is your real
              bottleneck, that is the thing to set up, not just the next 3-day
              registration.
            </p>
            <div className="mt-6">
              <InlineTestimonial
                quote="A 3-day course resets you. A practice buddy is what keeps the reset from fading by the second week back home."
                name="Matthew Diakonov"
                role="6 courses, 40+ days of service"
              />
            </div>
          </section>
        </AnimatedSection>

        {/* Secondary action */}
        <AnimatedSection>
          <section className="mt-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-8 text-center">
            <h2 className="text-xl font-bold text-zinc-900">
              Ready to find a 3-day course?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-zinc-600">
              Registration always happens on dhamma.org. Search by region, open
              a centre schedule, and look for an old-student short course date.
            </p>
            <div className="mt-6 flex justify-center">
              <ShimmerButton href={SCHEDULE_SEARCH}>
                Search courses on dhamma.org
              </ShimmerButton>
            </div>
          </section>
        </AnimatedSection>

        {/* FAQ */}
        <AnimatedSection>
          <section className="mt-14">
            <FaqSection items={faqs} heading="Questions people actually ask" />
          </section>
        </AnimatedSection>

        {/* Footer CTA */}
        <div className="mt-12">
          <BookCallCTA
            appearance="footer"
            destination={BOOKING_LINK}
            site="Vipassana"
            heading="Stuck on the daily sit between courses?"
            description="Book a quick call and I will help you set up a practice-buddy pairing so the habit survives past the next refresher."
          />
        </div>

        {/* Related */}
        <div className="mt-12">
          <RelatedPostsGrid
            title="Keep reading"
            posts={relatedPosts}
          />
        </div>

        <p className="mt-12 text-sm text-zinc-500">
          This page is logistics and personal reflection from a fellow
          meditator. It is not affiliated with any centre and does not teach the
          technique. For anything about how to practise, or for official course
          details, go to{" "}
          <a
            href="https://www.dhamma.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 underline hover:text-teal-800"
          >
            dhamma.org
          </a>{" "}
          and an authorized assistant teacher.
        </p>
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Keep your daily sit alive between courses. Get matched with a practice buddy."
      />
    </article>
  );
}
