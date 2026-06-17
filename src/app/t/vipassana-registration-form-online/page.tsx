import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  HorizontalStepper,
  BeforeAfter,
  AnimatedChecklist,
  RelatedPostsGrid,
  GradientText,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-registration-form-online";
const PUBLISHED = "2026-06-17";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

const COURSE_SEARCH = "https://www.dhamma.org/en-US/courses/search";
const DIRECTORY = "https://www.dhamma.org/en/locations/directory";
const FORM_PDF = "https://www.dhamma.org/en/docs/forms/appform-en.pdf";

export const metadata: Metadata = {
  title:
    "Vipassana Registration Form Online: where it is and what it actually asks",
  description:
    "There is no single Vipassana registration form online. You apply per course: open the course search at dhamma.org, pick a dated course at a center, click Apply, and fill that center's online application. The same form exists as a 2-page PDF. It is an application a registrar reviews, not a paid booking. Field-by-field walkthrough of the real form, verified 2026-06-17.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "The Vipassana registration form online, demystified (it is an application, not a booking)",
    description:
      "Where the online form lives, the exact three blocks it is built from, and why there is no universal form. Mapped against the official 2-page application PDF.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana registration form online, field by field",
    description:
      "Apply online by clicking Apply on a dated course at dhamma.org. The same form is a 2-page PDF. What it asks, block by block.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Registration form online" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Registration form online", url: PAGE_URL },
];

const routeSteps = [
  {
    title: "Open the course search",
    description:
      "Go to the official course search at dhamma.org, or use the Dhamma.org app. There is no form to fill in yet, you are looking for a dated course.",
  },
  {
    title: "Pick a center and a date",
    description:
      "Browse by region, then click a specific course date with open availability. Each center runs its own schedule, so the form you open belongs to that center.",
  },
  {
    title: "Click Apply",
    description:
      "The Apply button next to a dated course is what opens the online application form. This is the actual registration form people are searching for.",
  },
  {
    title: "Submit and await notification",
    description:
      "You get an email confirming the application was received. That first email is not acceptance. A registrar reviews it and emails your status later.",
  },
];

const formAllStudentsItems = [
  { text: "Physical health problems, medical conditions or diseases (with dates, symptoms, treatment, present condition)", checked: true },
  { text: "For women applicants: whether you are pregnant", checked: true },
  { text: "Mental health history (depression, anxiety, panic attacks, and similar), with detail if yes", checked: true },
  { text: "Alcohol or drug use within the past two years, with detail if yes", checked: true },
  { text: "Prescribed medication taken within the past two years, with detail if yes", checked: true },
  { text: "Any other information you wish to add", checked: true },
  { text: "Acknowledgement of the Code of Discipline, then signature and date", checked: true },
];

const faqs: FaqItem[] = [
  {
    q: "Is there one universal Vipassana registration form online?",
    a: "No. There is no single shared form you book through. You apply per course: open the course search at dhamma.org, choose a dated course at a specific center, and click Apply to open that center's own online application form. Different centers run on different schedule portals, but the application questions are nearly identical everywhere because they all derive from the same official form.",
  },
  {
    q: "Where exactly is the online application form?",
    a: "It opens when you click the Apply button next to a specific dated course inside the course search at dhamma.org (or the Dhamma.org app). You will not see a generic form on the homepage. The form only appears once you have selected a real course date with availability, because the application is tied to that course.",
  },
  {
    q: "Can I download the registration form as a PDF instead of applying online?",
    a: "Yes. The official two-page application form is published as a PDF at dhamma.org. Online application is preferred, but if you cannot apply online, centers generally accept the completed form by email or mail. The online form and the PDF ask the same questions, so the PDF is a useful way to read the whole thing before you start.",
  },
  {
    q: "Do I pay when I submit the registration form?",
    a: "No. There is no payment field on the form. Courses in this tradition are run entirely on a donation basis, and donations are only invited from students who have completed at least one course. Registration is an application for a place, not a checkout. If a site asks you for a course fee at registration, it is not the official process.",
  },
  {
    q: "Does submitting the form mean I have a spot?",
    a: "No. Submitting the form gets you a confirmation email that your application was received, which is explicitly not an acceptance. A center registrar reviews applications manually and emails you later with accepted, waitlisted, or not accepted. For popular courses this can take from a few days up to about a month.",
  },
  {
    q: "What does the form ask that surprises people?",
    a: "The detailed health and mental-health sections. The form asks directly about depression, anxiety, panic attacks, and similar history, plus alcohol, drug, and prescribed-medication use within the past two years. This is logistics and care, not a filter to exclude you. It also asks whether you are a new student or an old student, which routes you to a different block of questions.",
  },
  {
    q: "I am an old student, is my form different?",
    a: "It is the same form, but you complete a different middle block. New students fill the For New Students block (prior meditation experience, how you heard about Vipassana). Old students fill the For Old Students block (first course, most recent course, total number of courses sat and served, whether you have maintained daily practice). Everyone completes the shared top block and the For All Students health block.",
  },
];

const relatedPosts = [
  {
    title: "Vipassana application tips: how to get accepted",
    href: "https://vipassana.cool/guide/course-application-tips",
    excerpt:
      "The acceptance side of the same form: timing, honesty on the mental-health section, waitlists, and what happens after you submit.",
    tag: "Guide",
    readTime: "9 min",
  },
  {
    title: "Igatpuri 10-day course registration, portal by portal",
    href: "https://vipassana.cool/t/vipassana-igatpuri-10-day-course-registration",
    excerpt:
      "A worked example of one center: why Igatpuri has three application portals and which one a new student actually uses.",
    tag: "Registration",
    readTime: "7 min",
  },
  {
    title: "What the 10-day course structure actually looks like",
    href: "https://vipassana.cool/t/10-day-course-structure",
    excerpt:
      "The commitment you are agreeing to when you sign the form: the residential shape of the ten days, in plain terms.",
    tag: "Course",
    readTime: "6 min",
  },
];

export default function Page() {
  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            articleSchema({
              headline:
                "Vipassana registration form online: where it is and what it actually asks",
              description:
                "There is no single Vipassana registration form online. You apply per course through the official course search at dhamma.org, and the form mirrors the official 2-page application PDF. Field-by-field walkthrough.",
              url: PAGE_URL,
              datePublished: PUBLISHED,
              dateModified: PUBLISHED,
              author: "Matthew Diakonov",
              authorUrl: "https://m13v.com",
              publisherName: "Vipassana.cool",
              publisherUrl: "https://vipassana.cool",
            }),
            breadcrumbListSchema(breadcrumbSchemaItems),
            faqPageSchema(faqs),
          ]),
        }}
      />

      <div className="max-w-3xl mx-auto px-6 pt-10">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-6 pb-2">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
          The Vipassana{" "}
          <GradientText variant="teal">registration form online</GradientText>,
          where it is and what it asks
        </h1>
        <p className="mt-4 text-lg text-zinc-600">
          People search for this expecting one online form, like a checkout. It
          is not that. The official registration is a per-course application you
          open from a center&apos;s schedule, and it mirrors a single two-page
          form anyone can read in full before they start.
        </p>
      </section>

      <div className="max-w-3xl mx-auto px-6 pt-4">
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="6 min read"
        />
      </div>

      {/* Direct answer */}
      <section className="max-w-3xl mx-auto px-6 pt-8">
        <div className="rounded-xl border border-teal-200 bg-teal-50 p-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Direct answer, verified 17 June 2026
          </div>
          <p className="mt-3 text-zinc-800">
            There is no universal Vipassana registration form online. To reach
            the real form, open the{" "}
            <a
              href={COURSE_SEARCH}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-zinc-900"
            >
              course search at dhamma.org
            </a>{" "}
            (or the Dhamma.org app), pick a dated course at a center, and click{" "}
            <strong>Apply</strong>. That opens that center&apos;s online
            application form. The same form is published as a{" "}
            <a
              href={FORM_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-zinc-900"
            >
              two-page PDF
            </a>{" "}
            you can print and mail if you cannot apply online. It is an
            application a registrar reviews, with no payment field, not a paid
            booking.
          </p>
        </div>
      </section>

      {/* The route to the form */}
      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-bold text-zinc-900">
          How you actually get to the form
        </h2>
        <p className="mt-3 text-zinc-700">
          The form does not live on a homepage. It is attached to a specific
          course date. That is why a generic search for the form leads nowhere
          obvious: you have to pick a real course first. The path is the same
          everywhere, even though each center runs its own{" "}
          <a
            href={DIRECTORY}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-zinc-900"
          >
            schedule and directory listing
          </a>
          .
        </p>
        <div className="mt-6">
          <HorizontalStepper steps={routeSteps} />
        </div>
      </section>

      {/* Expectation vs reality */}
      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-bold text-zinc-900">
          A booking versus an application
        </h2>
        <p className="mt-3 text-zinc-700">
          Almost every confusion about this form comes from expecting it to
          behave like a hotel or event booking. It does not. Naming the gap up
          front saves a lot of refreshing and worrying.
        </p>
        <div className="mt-6">
          <BeforeAfter
            title="What people expect vs what the form is"
            before={{
              label: "What people expect",
              content:
                "A single online form. Pay, get an instant confirmation, and your seat is reserved the second you submit.",
              highlights: [
                "One universal form for all centers",
                "Payment at checkout",
                "Instant guaranteed spot",
                "Submit equals confirmed",
              ],
            }}
            after={{
              label: "What it actually is",
              content:
                "A per-course application opened from a center's schedule. No payment. A registrar reviews it, then emails your status.",
              highlights: [
                "One application per course date",
                "No payment field at all",
                "First email confirms receipt, not acceptance",
                "Accepted, waitlisted, or not accepted comes later",
              ],
            }}
          />
        </div>
      </section>

      {/* Anchor: the real form, block by block */}
      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-bold text-zinc-900">
          The real form, block by block
        </h2>
        <p className="mt-3 text-zinc-700">
          Here is the part no listicle prints. The official{" "}
          <a
            href={FORM_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-zinc-900"
          >
            Vipassana Meditation Course Application Form
          </a>{" "}
          is literally two pages, and it is built from three labeled blocks plus
          a shared top section. The online version asks the same questions in
          the same order. Reading the PDF first means nothing on the screen
          surprises you.
        </p>

        <div className="mt-8 space-y-6">
          <div className="rounded-lg border border-zinc-200 p-5">
            <h3 className="font-semibold text-zinc-900">
              Top block, for everyone
            </h3>
            <p className="mt-2 text-zinc-700">
              Course dates (from and to), first and last name, age, gender,
              address and country, phone numbers, email, date of birth, and
              occupation. Then a few short questions: whether you are driving and
              open to sharing a ride, whether a friend or family member is also
              taking the course, your native country and languages, and the one
              that splits the form in two: have you completed any 10-day course
              before. That answer marks you as a new student or an old student.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-200 p-5">
            <h3 className="font-semibold text-zinc-900">For New Students</h3>
            <p className="mt-2 text-zinc-700">
              A short block. Any previous experience with meditation techniques,
              therapies, or healing practices, and whether you teach or practice
              those on others. Then how you learned about Vipassana, or who
              introduced you to the course. That is it for the new-student
              section.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-200 p-5">
            <h3 className="font-semibold text-zinc-900">For Old Students</h3>
            <p className="mt-2 text-zinc-700">
              A longer block. Your first course (date, location, teachers), your
              most recent course sat, the total number of 10-day courses you
              have sat and served, any other techniques practiced since your last
              course, and whether you have maintained your daily practice since.
              There are also opt-in checkboxes to come early to help set up or to
              serve the course if needed, and a spot for partial-attendance
              arrival and departure times.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-200 p-5">
            <h3 className="font-semibold text-zinc-900">
              For All Students, the health block
            </h3>
            <p className="mt-2 text-zinc-700">
              This is the section people underestimate, and the part of the form
              that matters most. Every applicant, new or old, completes it.
            </p>
            <div className="mt-4">
              <AnimatedChecklist
                title="What the For All Students block asks"
                items={formAllStudentsItems}
              />
            </div>
          </div>
        </div>

        <p className="mt-6 text-zinc-700">
          The form closes with an acknowledgement that you have read the
          Introduction to the Technique and the Code of Discipline, that you
          agree to stay for the full course and follow its rules, and that the
          information you gave is true. Then a signature and date. No fees, no
          card, no deposit anywhere on the page.
        </p>
      </section>

      {/* Online vs PDF */}
      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-bold text-zinc-900">
          Online form or the PDF: which to use
        </h2>
        <p className="mt-3 text-zinc-700">
          Applying online is the preferred and fastest route, and on popular
          courses speed matters because applications are generally processed in
          the order received. The PDF exists for two honest uses. First, as a
          fallback if you genuinely cannot apply online, in which case centers
          generally accept the completed form by email or post. Second, and more
          useful for most people, as a way to read every question calmly before
          a course date opens, so when you do click Apply you already know what
          you will write for the health, experience, and commitment sections.
        </p>
      </section>

      {/* Firsthand, logistics only */}
      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-bold text-zinc-900">
          What I noticed across six applications
        </h2>
        <p className="mt-3 text-zinc-700">
          I have filled this form out for six courses across three centers. The
          questions barely changed between them, which is the whole point: the
          form is standardized even though the portals are not. The thing that
          tripped me up the first time was treating the confirmation email as
          acceptance. It is not. It only says the application landed. The second
          time around I had my answers for the experience and health sections
          written out in a note beforehand, so when a course date opened I could
          submit in a couple of minutes instead of drafting under pressure while
          spots filled.
        </p>
        <p className="mt-3 text-zinc-700">
          I am a fellow meditator, not a teacher and not the registration office.
          For anything specific to a single center, dates, accommodation, what a
          particular portal is doing, the authoritative source is{" "}
          <a
            href="https://www.dhamma.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-zinc-900"
          >
            dhamma.org
          </a>{" "}
          and the center you are applying to.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Applied, accepted, and wondering about the daily side after?"
          description="If you want a practice buddy for the after-course stretch, book a short call and I will walk you through how the matching works."
        />
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-bold text-zinc-900">
          Common questions about the form
        </h2>
        <div className="mt-4">
          <FaqSection items={faqs} />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12 pb-16">
        <RelatedPostsGrid
          title="Keep going"
          posts={relatedPosts}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Questions about practice after the course? Book a quick call."
      />
    </article>
  );
}
