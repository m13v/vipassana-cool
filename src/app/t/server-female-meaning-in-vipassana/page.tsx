import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ComparisonTable,
  StepTimeline,
  NumberTicker,
  BackgroundGrid,
  RemotionClip,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
} from "@seo/components";
import { PracticeBuddyCta } from "@/components/practice-buddy-cta";
import { PageComments } from "@/components/comments";

const PAGE_URL = "https://vipassana.cool/t/server-female-meaning-in-vipassana";
const PUBLISHED = "2026-06-16";
const BOOKING = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title: "What 'Server (Female)' Means on a Vipassana Course Schedule",
  description:
    "On a Vipassana schedule, 'Server (Female)' is a seat for a woman who finished a 10-day course and is volunteering to support the women's side. Here is what the label means and why it is split by gender.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "What 'Server (Female)' Means on a Vipassana Course Schedule",
    description:
      "A plain-language note on the 'Server (Female)' registration label: who it is for, why the gender split exists, and how it differs from a sitting slot.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What 'Server (Female)' Means in Vipassana",
    description:
      "It is a women's-side Dhamma service seat, unpaid, for old students. Here is the full breakdown.",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "What does 'Server (Female)' mean on a Vipassana course schedule?",
    a: "It is a volunteer (Dhamma service) seat reserved for a woman who has already completed a 10-day Vipassana course in the tradition of S.N. Goenka. The person in that seat is not sitting the course as a meditator. She is there to cook, clean, manage logistics, and support the women who are sitting. The '(Female)' part exists because the women's and men's sides of a course run as physically separate operations, so each side keeps its own server roster.",
  },
  {
    q: "Why is the server slot split into 'Female' and 'Male'?",
    a: "Because the tradition's Code of Discipline requires it. The official text states: 'The separation of men and women is always maintained at a course site, both during and between courses.' A female server lives, eats, and works on the women's side, and a male server on the men's side. The two rosters are filled separately, which is why the schedule lists 'Server (Female)' and 'Server (Male)' as distinct counts.",
  },
  {
    q: "Is 'Server (Female)' a paid job?",
    a: "No. Dhamma service is entirely voluntary. There is no payment, stipend, or compensation of any kind. Servers receive free shared accommodation and the same meals the students eat, usually after the students have finished. Service is offered as dana (generosity), the same way the teaching itself is given freely.",
  },
  {
    q: "Can a woman serve right after her first course?",
    a: "Yes. The only firm requirement is having completed at least one 10-day course and maintaining a daily practice without mixing in other techniques. Many women serve for the first time on their second visit to a center. Willingness matters more than years of experience.",
  },
  {
    q: "Does a female server interact with the male side at all?",
    a: "No. Through the course she stays on the women's side. The only servers who speak with sitting students are the course managers, and even there the rule is strict: female managers work with female students, male managers with male students. A female server's entire course happens within the women's facility.",
  },
  {
    q: "How is 'Server (Female)' different from 'Old Student (Female)' on the same schedule?",
    a: "An 'Old Student (Female)' seat is for a woman sitting the course again as a meditator: roughly ten hours a day of practice in silence. A 'Server (Female)' seat is for a woman volunteering to run the course: she attends the three daily group sittings, about three hours, and spends the rest of the day working. Same eligibility (both require a completed course), very different days.",
  },
  {
    q: "Where do I actually sign up for a female server seat?",
    a: "Through the center you want to serve at, via the directory at dhamma.org. Look for its 'Service' or 'Dhamma Seva' section, pick the dates, and fill out the service application, which is shorter than a sitting application. Service seats fill up, so applying early helps.",
  },
];

export default function Page() {
  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbListSchema([
              { name: "Home", url: "https://vipassana.cool" },
              { name: "Guides", url: "https://vipassana.cool/t/dhamma-org" },
              { name: "Server (Female) meaning", url: PAGE_URL },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline:
                "What 'Server (Female)' Means on a Vipassana Course Schedule",
              description:
                "A plain-language note on the 'Server (Female)' registration label in Vipassana: who it is for, why the gender split exists, and how it differs from a sitting slot.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />

      <div className="mx-auto max-w-3xl px-6 py-16">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Guides", href: "/t/dhamma-org" },
            { label: "Server (Female) meaning" },
          ]}
        />

        <p className="mt-8 text-sm font-medium uppercase tracking-wide text-accent">
          Glossary note
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          What &quot;Server (Female)&quot; means on a Vipassana course schedule
        </h1>
        <p className="mt-4 text-lg text-muted">
          If you have been browsing course dates and seen a row labelled
          &quot;Server (Female),&quot; it is not a typo and not a meditator slot.
          It is a women&apos;s-side volunteer seat. Here is the plain reading of
          the label, and why the gender split is written into the schedule.
        </p>

        <div className="mt-6">
          <ArticleMeta
            author="Matthew Diakonov"
            authorRole="Written with AI"
            datePublished={PUBLISHED}
            readingTime="6 min read"
          />
        </div>

        {/* Direct answer, in the first 30% */}
        <div className="mt-10">
          <BackgroundGrid pattern="dots" glow>
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">
                Direct answer (verified June 16, 2026)
              </p>
              <p className="text-base leading-relaxed text-foreground">
                <strong>&quot;Server (Female)&quot;</strong> is a seat reserved
                for a woman who has completed a 10-day Vipassana course and is
                volunteering (giving Dhamma service) to support the women&apos;s
                side of a course. It is unpaid, and the person in it is not
                sitting as a meditator. The &quot;(Female)&quot; designation
                exists because, in the words of the tradition&apos;s Code of
                Discipline, &quot;the separation of men and women is always
                maintained at a course site.&quot;
              </p>
              <p className="mt-3 text-sm text-muted">
                Source:{" "}
                <a
                  href="https://www.dhamma.org/en-US/about/dscode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline hover:text-foreground"
                >
                  dhamma.org Code of Discipline
                </a>
                .
              </p>
            </div>
          </BackgroundGrid>
        </div>

        <RemotionClip
          title="Server (Female)"
          subtitle="reading the label one word at a time"
          captions={[
            "Server = a volunteer, not a meditator",
            "Female = the women's side of the course",
            "Requirement: one completed 10-day course",
            "Pay: none, it is given as dana",
          ]}
          accentHex="#8b7355"
          accentHexDark="#5f4f3c"
          durationInFrames={210}
        />
      </div>

      <div className="mx-auto max-w-3xl space-y-12 px-6 pb-16 text-muted">
        <section>
          <h2 className="mb-3 text-2xl font-bold text-foreground">
            Pulling the label apart
          </h2>
          <p className="mb-4">
            A Vipassana course schedule has to communicate, in a tiny amount of
            space, both <em>what role</em> a seat is and <em>which side</em> of
            the course it belongs to. So a single seat gets two tags. The first
            word is the role. The parenthetical is the side.
          </p>
          <p className="mb-4">
            &quot;Server&quot; is the role. A server, also called a Dhamma worker
            or someone giving <em>seva</em>, is a past student who comes back to
            run the course rather than sit it: cooking, cleaning, registration,
            logistics. Every course you have ever sat was made possible by people
            in these seats. The official line on who qualifies is short:
            &quot;Students who have successfully completed a 10-day Vipassana
            course with Goenkaji or one of his assistant teachers may give Dhamma
            service.&quot;
          </p>
          <p>
            &quot;(Female)&quot; is the side. It is not describing the student
            population the server helps in some abstract way. It is telling you
            which physical half of the course site the seat lives on. That half
            is run as its own self-contained operation, which is the part most
            short explanations skip over.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-bold text-foreground">
            Why the gender split is in the schedule at all
          </h2>
          <p className="mb-4">
            The split is not an administrative nicety. It comes straight from the
            tradition&apos;s Code of Discipline, which every course runs on. The
            rule is stated plainly:
          </p>
          <blockquote className="my-5 border-l-2 border-accent/40 pl-4 text-foreground">
            &quot;The separation of men and women is always maintained at a course
            site, both during and between courses.&quot;
          </blockquote>
          <p className="mb-4">
            In practice that means the women&apos;s side has its own dormitories,
            its own dining area, its own walking paths, and at many centers its
            own kitchen. A woman who takes a &quot;Server (Female)&quot; seat
            works entirely inside that half. She does not cross to the men&apos;s
            side, and the men&apos;s servers do not cross to hers. The one narrow
            channel of contact with sitting students runs through the course
            managers, and even that is gender-matched: the Code notes that
            &quot;course managers are the only servers who should interact with
            students during a course, female managers with female students, male
            managers with male students.&quot;
          </p>
          <p>
            So &quot;(Female)&quot; on the schedule is doing real work. It is the
            difference between two parallel, deliberately non-overlapping rosters,
            each one staffing a facility the other side never enters.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            The label people confuse it with
          </h2>
          <p className="mb-6">
            On the same schedule you will often see &quot;Old Student
            (Female)&quot; right next to &quot;Server (Female).&quot; Both require
            a completed course, both are for women, and the wording is similar
            enough that it is easy to pick the wrong one. They are not the same
            commitment.
          </p>
          <ComparisonTable
            productName="Server (Female)"
            competitorName="Old Student (Female), sitting"
            rows={[
              {
                feature: "What you do all day",
                ours: "Run the course: cooking, cleaning, logistics, support",
                competitor: "Meditate as a student inside the course",
              },
              {
                feature: "Formal meditation",
                ours: "About 3 hours, the three daily group sittings",
                competitor: "Roughly 10+ hours a day",
              },
              {
                feature: "Silence",
                ours: "Talk as needed for work, not social chatter",
                competitor: "Full noble silence for the 10 days",
              },
              {
                feature: "Phone access",
                ours: "Allowed during designated breaks",
                competitor: "Surrendered for the duration",
              },
              {
                feature: "Eligibility",
                ours: "Completed one 10-day course, maintaining practice",
                competitor: "Completed one 10-day course",
              },
              {
                feature: "Cost",
                ours: "Free, and you are giving your time as dana",
                competitor: "Free, run on donations",
              },
            ]}
          />
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            What choosing a &quot;Server (Female)&quot; seat actually commits you to
          </h2>
          <p className="mb-6">
            Reading the label is one thing. Here is what the seat maps to once you
            select it and arrive.
          </p>
          <StepTimeline
            steps={[
              {
                title: "You confirm you are an old student",
                description:
                  "A completed 10-day course is the gate. Service applications ask which course you sat and whether you are maintaining a daily practice.",
              },
              {
                title: "You apply to the women's-side roster",
                description:
                  "The service form is shorter than a sitting application. You can note preferences, but the center assigns the role it needs filled, often the kitchen for first-time servers.",
              },
              {
                title: "You are housed and fed on the women's side",
                description:
                  "Shared rooms with other female servers, separate from both the student quarters and the men's facility. You bring your own bedding, the same as a sitting course.",
              },
              {
                title: "You work the course, with three group sittings a day",
                description:
                  "Most of the day is service. You join the three group sittings the schedule sets aside for all servers. Only the female course manager speaks with the sitting students.",
              },
            ]}
          />
        </section>

        <section>
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="mb-2 text-sm font-medium text-accent">
              A note from the practitioner side
            </p>
            <p className="text-foreground">
              I am not a teacher, just someone sharing what I have seen. Across{" "}
              <span className="font-semibold text-accent">
                <NumberTicker value={40} suffix="+" />
              </span>{" "}
              days of Dhamma service at three centers, I served the men&apos;s
              side, so the women&apos;s side I only ever knew as the mirror across
              the property: a separate gate, a separate dining hall, a separate
              walking area I never set foot in. That physical separateness is the
              whole reason the schedule bothers to print &quot;(Female)&quot; and
              &quot;(Male)&quot; instead of one combined server count. The seats
              are not interchangeable because the facilities are not shared.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-bold text-foreground">
            If you want the fuller picture of serving
          </h2>
          <p className="mb-4">
            This page is just about decoding one label. If you are actually
            weighing whether to serve, the day-to-day of it, the roles, the
            schedule, and why so many experienced meditators say serving deepened
            their practice more than sitting did, is covered in depth in the{" "}
            <Link
              href="/guide/dhamma-service"
              className="text-accent underline hover:text-foreground"
            >
              Dhamma service guide
            </Link>
            . For anything about how the meditation itself is taught, the only
            source to trust is a 10-day residential course and an authorized
            assistant teacher, with course information at{" "}
            <a
              href="https://www.dhamma.org/en-US/courses/search"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:text-foreground"
            >
              dhamma.org
            </a>
            .
          </p>
        </section>

        <BookCallCTA
          appearance="footer"
          destination={BOOKING}
          site="Vipassana"
          section="server-female-footer"
          heading="Sorting out where you fit on the schedule?"
          description="If you have sat a course and are trying to decide between sitting again or serving, book a short call and talk it through with a fellow old student."
        />

        <FaqSection heading="Common questions" items={faqs} />

        <PracticeBuddyCta
          heading="Keeping your practice alive between courses?"
          description="Serving requires a maintained daily practice, and that is the hard part for most old students. Get matched with a fellow Vipassana meditator for daily sits over Google Meet. Free, peer-led, built on real accountability."
        />

        <div className="mt-12 rounded-xl border border-border bg-card p-6">
          <h2 className="mb-4 font-semibold text-foreground">Related</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/guide/dhamma-service"
              className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
            >
              The full Dhamma service guide
            </Link>
            <Link
              href="/t/dhamma-org"
              className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
            >
              What dhamma.org is
            </Link>
            <a
              href="https://www.dhamma.org/en-US/courses/search"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
            >
              Find a course or service date (dhamma.org)
            </a>
          </div>
        </div>

        <PageComments pageId="t-server-female-meaning-in-vipassana" />
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING}
        site="Vipassana"
        section="server-female-sticky"
        description="Sat a course and unsure whether to sit again or serve? Talk it through."
      />
    </article>
  );
}
