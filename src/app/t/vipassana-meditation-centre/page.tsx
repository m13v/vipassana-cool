import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ComparisonTable,
  NumberTicker,
  AnimatedBeam,
  GradientText,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type ComparisonRow,
  type RelatedPost,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-meditation-centre";
const PUBLISHED = "2026-06-16";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title: "What a Vipassana meditation centre actually is",
  description:
    "A Vipassana meditation centre in the S.N. Goenka tradition is not a drop-in studio. No fee, no resident teacher, run by volunteers, funded by past students. What the term really means, from someone who has sat six courses at three centres. Verified 2026-06-16.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "What a Vipassana meditation centre actually is",
    description:
      "Not a studio you visit. A donation-funded, volunteer-run place that exists only to host free 10-day courses, taught by the same Goenka recordings everywhere.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What a Vipassana meditation centre actually is",
    description:
      "No fee, no resident teacher, no drop-in class. The four facts that make a Vipassana centre unlike any other meditation centre.",
  },
};

const breadcrumbItems = [
  { label: "Home", href: "https://vipassana.cool" },
  { label: "Guides", href: "https://vipassana.cool/guide" },
  { label: "Vipassana meditation centre" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana meditation centre", url: PAGE_URL },
];

const comparisonRows: ComparisonRow[] = [
  {
    feature: "How you get in",
    competitor: "Drop-in class, booked by the hour or the week",
    ours: "A 10-day residential course you apply for in advance",
  },
  {
    feature: "On staff",
    competitor: "A resident teacher or rotating instructors",
    ours: "Nobody. Assistant teachers volunteer for a single course at a time",
  },
  {
    feature: "What it costs",
    competitor: "A fee, a membership, or a class package",
    ours: "Nothing. Donations are accepted only from people who already finished a course",
  },
  {
    feature: "Who runs the place",
    competitor: "Paid employees and a front desk",
    ours: "Unpaid volunteers, most of whom are past students giving their time",
  },
  {
    feature: "What is taught",
    competitor: "Whatever style the instructor teaches",
    ours: "The same recorded course used at every centre in the tradition",
  },
  {
    feature: "When the doors are open",
    competitor: "Open most days for classes and sittings",
    ours: "The land sits quiet between scheduled courses; there is no daily class to attend",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Can I drop in to a Vipassana meditation centre for a class?",
    a:
      "No, not in the S.N. Goenka tradition. There is no hourly class, no membership, and no walk-in session for newcomers. The entry point is a 10-day residential course you apply for ahead of time. The centre exists to host those courses, not to run a daily schedule of drop-in classes. Old students (people who have completed a full course) can attend group sittings and one-day courses at some locations, but that is a separate thing from the public entry point.",
  },
  {
    q: "Is there a teacher at the centre I can learn from?",
    a:
      "There is no teacher on the centre's staff. The full course was recorded by S.N. Goenka and finished in 1982, and since his death on 29 September 2013 every course is conducted by assistant teachers who play those audio and video recordings and hold the container of the course. The assistant teachers are available to answer students' questions during the course, but they are unpaid volunteers, not resident instructors, and the instruction itself comes from the recordings. For any question about how to actually practise, the right move is to attend a course and ask an authorized assistant teacher there, or write to a centre through dhamma.org.",
  },
  {
    q: "How much does it cost to go to a Vipassana centre?",
    a:
      "There is no charge for the course, the food, or the lodging. According to the Code of Discipline on dhamma.org, courses run solely on a donation basis, and donations are accepted only from those who have completed at least one 10-day course in the tradition. Neither the teachers nor the organizers receive any payment for their service. The course you sit was paid for by someone who sat before you; at the end, if you want to, you can give so the next person can sit.",
  },
  {
    q: "Who actually runs a Vipassana meditation centre?",
    a:
      "Volunteers. The people cooking your meals, managing the grounds, and handling registration are almost all past students serving the course (dhamma service). I have done more than 40 days of service myself across courses. The trustees who oversee a centre are unpaid. This is part of why a centre does not feel or operate like a business: there is no commercial incentive in the building.",
  },
  {
    q: "How many Vipassana centres are there, and where?",
    a:
      "More than 160 dedicated meditation centres in this tradition worldwide, plus over 100 additional non-centre sites where courses run at rented venues. They are listed in the official directory on dhamma.org. Because they are sparse rather than on every street corner, the nearest one to you may still be a multi-hour drive. If you are searching by location, see our guide on finding a centre near you.",
  },
  {
    q: "Is every Vipassana centre the same?",
    a:
      "The course is identical everywhere, because it is the same recordings and the same Code of Discipline. The physical conditions are not. I have sat at three centres and they felt completely different: one had private rooms with private showers, one was a rented camp with bunk beds and roughly twelve people to a room, and one had a pagoda-style hall with individual meditation cells. The teaching does not change; the comfort level does. Our guide on choosing a centre goes through what actually differs.",
  },
  {
    q: "How do I find and apply to a centre?",
    a:
      "Go to the course search on dhamma.org, pick your region, find a course with open dates, and fill out the application. You will answer questions about your physical and mental health and your reasons for coming. For help with the search and the near-me problem, read our centre locator guide, and for the application itself, our course application notes.",
  },
  {
    q: "Is it spelled vipasana centre or vipassana centre?",
    a:
      "The standard English spelling is vipassana, with two s's, from the Pali vipassana. \"Vipasana centre\" with a single s is a common way people type it, and it points to exactly the same thing described on this page: a donation-funded, volunteer-run place that hosts free 10-day courses. Nobody at a centre will misunderstand which one you mean. If you want the full note on why the double-s form is the correct one, we cover it in our piece on the vipasana versus vipassana spelling.",
  },
];

const relatedPosts: RelatedPost[] = [
  {
    title: "Vipassana meditation centre near me",
    href: "/t/vipassana-meditation-centre-near-me",
    excerpt:
      "Why the 'near me' search misleads, and the locators that actually point at real centres.",
    tag: "Finding a centre",
  },
  {
    title: "dhamma.org, mapped",
    href: "/t/dhamma-org",
    excerpt:
      "The official portal and its per-centre subdomain pattern, so you can tell a real centre from a lookalike.",
    tag: "Reference",
  },
  {
    title: "10-day course structure",
    href: "/t/10-day-course-structure",
    excerpt:
      "What the twelve days at a centre actually look like, and the three sittings that carry the most weight.",
    tag: "What to expect",
  },
  {
    title: "Vipasana or vipassana?",
    href: "/t/vipasana",
    excerpt:
      "Why the double-s form is the standard spelling, and every variant people type when they mean the same practice.",
    tag: "Reference",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline: "What a Vipassana meditation centre actually is",
    description:
      "A Vipassana meditation centre in the S.N. Goenka tradition is a donation-funded, volunteer-run residential facility that exists only to host free 10-day courses. No drop-in class, no resident teacher, the same recordings everywhere. Verified 2026-06-16.",
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

      <header className="max-w-3xl mx-auto px-6 pt-6 pb-2">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
          What a Vipassana meditation centre{" "}
          <GradientText variant="teal">actually is</GradientText>
        </h1>
        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          Most people type this phrase expecting something like a yoga studio
          with a Vipassana flavour: a place down the road, a schedule of
          classes, a teacher, a price. That mental model is the single thing
          that trips up almost everyone searching for one. I have sat six
          courses at three centres in California and served at them, so this is
          the explanation I wish the first result had given me.
        </p>
      </header>

      <ArticleMeta
        author="Matthew Diakonov"
        authorRole="Written with AI"
        datePublished={PUBLISHED}
        readingTime="8 min read"
      />

      <section className="max-w-3xl mx-auto px-6 pt-6">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            Direct answer (verified 2026-06-16)
          </p>
          <p className="mt-3 text-base leading-relaxed text-zinc-800">
            A Vipassana meditation centre in the tradition of{" "}
            <strong>S.N. Goenka</strong> is a residential facility that exists
            only to host free <strong>10-day courses</strong>. There is no
            drop-in class and no fee. There is no resident teacher: the course
            is delivered through Goenka&apos;s recorded instructions, the same
            ones played at every centre, and the place is run by unpaid
            volunteers and funded entirely by donations from people who have
            already completed a course. The official directory and Code of
            Discipline are at{" "}
            <a
              href="https://www.dhamma.org/en/about/code"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 underline"
            >
              dhamma.org
            </a>
            .
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-10">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-5">
            <div className="text-3xl font-bold text-zinc-900">
              <NumberTicker value={160} suffix="+" />
            </div>
            <p className="mt-1 text-sm leading-snug text-zinc-600">
              dedicated centres worldwide
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-5">
            <div className="text-3xl font-bold text-zinc-900">
              <NumberTicker value={0} prefix="$" />
            </div>
            <p className="mt-1 text-sm leading-snug text-zinc-600">
              charge for the course, food, or lodging
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-5">
            <div className="text-3xl font-bold text-zinc-900">
              <NumberTicker value={1} />
            </div>
            <p className="mt-1 text-sm leading-snug text-zinc-600">
              recorded course used at all of them
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-5">
            <div className="text-3xl font-bold text-zinc-900">
              <NumberTicker value={10} />
            </div>
            <p className="mt-1 text-sm leading-snug text-zinc-600">
              days residential, the only entry point
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-14">
        <h2 className="text-2xl font-semibold text-zinc-900">
          A studio you visit versus a course you sit
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The fastest way to understand a Vipassana centre is to line it up
          against the meditation centre most people picture. Almost every
          assumption flips. None of this is the centre being difficult on
          purpose; it follows from the fact that the place exists to host
          residential courses and nothing else.
        </p>
        <div className="mt-6">
          <ComparisonTable
            productName="Vipassana centre (Goenka tradition)"
            competitorName="A typical meditation centre"
            rows={comparisonRows}
            caveat="Both can be wonderful. They are just not the same kind of thing, and searching for one expecting the other is where the confusion starts."
          />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-14">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The part that surprises people: nobody on staff teaches you
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          When you walk into most meditation centres, there is a person at the
          front of the room whose job is to teach. A Vipassana centre does not
          work like that. The course was recorded by S.N. Goenka and the full
          set, day by day from start to finish, was completed in 1982. Goenka
          died on 29 September 2013. Since then, every single course at every
          centre has been conducted by assistant teachers who play those same
          recordings.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          So the centre nearest you and a centre on another continent are
          running the identical course, word for word, because it is literally
          the same recording. The assistant teachers present are there to hold
          the container and answer questions during the course, and they do it
          as volunteers. That is the load-bearing fact most location pages skip:
          a Vipassana centre is a building and a piece of land, plus a recording
          and the volunteers who press play. There is no guru in residence to go
          and meet.
        </p>

        <div className="mt-8">
          <AnimatedBeam
            title="One recorded course, every centre"
            from={[
              {
                label: "Goenka recordings",
                sublabel: "audio + video, completed 1982",
              },
              {
                label: "Assistant teachers",
                sublabel: "volunteers, press play and answer questions",
              },
            ]}
            hub={{ label: "The 10-day course", sublabel: "identical everywhere" }}
            to={[
              { label: "Dhammamanda", sublabel: "Northern California" },
              { label: "CYO course site", sublabel: "Bay Area, rented camp" },
              { label: "North Fork", sublabel: "Central California" },
              { label: "160+ more centres", sublabel: "worldwide" },
            ]}
          />
        </div>

        <p className="mt-6 text-sm leading-relaxed text-zinc-500">
          I am a fellow practitioner sharing what I have seen across six courses,
          not a teacher and not an authority on the method. For anything about
          how to actually practise, the place to ask is an authorized assistant
          teacher at a course, or a centre through{" "}
          <a
            href="https://www.dhamma.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 underline"
          >
            dhamma.org
          </a>
          .
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-14">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Nothing is sold, nobody is paid
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The second thing that makes a Vipassana centre not a business: there
          is no transaction. The Code of Discipline on dhamma.org states that
          courses run solely on a donation basis, that donations are accepted
          only from people who have completed at least one 10-day course, and
          that neither the teachers nor the organizers receive any payment for
          their service. You do not pay for the course, the meals, or the bed.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          In practice that means the people cooking your food and cleaning the
          halls are not employees. They are past students serving the course,
          giving their time for free. I have done more than 40 days of that kind
          of service across courses, and it changes how you see the place: the
          person handing you tea at five in the afternoon sat exactly where you
          are sitting, probably more than once. The whole operation is held up
          by people who got something from it and came back to make it possible
          for the next group. A centre is, in a real sense, paid forward rather
          than paid for.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-14">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The same course, very different buildings
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Because the teaching is fixed, the only thing that varies from centre
          to centre is the physical setting, and it varies a lot. There are two
          broad kinds. Dedicated centres are purpose-built or permanently
          converted properties used only for courses, with meditation halls,
          permanent lodging, and a full year-round schedule. Non-centre course
          sites are rented venues, often a camp or conference facility booked
          for a single course a year. The recording and the discipline are
          identical at both; the comfort is whatever the venue gives you.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The three I have sat at make the range concrete. One had private rooms
          with private showers and everything close together, almost too
          comfortable. One was a rented Christian youth camp that hosts a course
          each winter, with bunk beds, roughly twelve people to a room,
          communal bathrooms, and an uphill walk to the hall in the rain. One
          was an older centre with a pagoda-style hall and individual meditation
          cells. Three completely different physical experiences, one identical
          course. If you are weighing which centre to choose, the conditions are
          the real variable, and I go through them in the choosing-a-centre
          guide below.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-14">
        <h2 className="text-2xl font-semibold text-zinc-900">
          What to do with this
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          If you came here trying to find a place to start, the move is not to
          look for a centre that runs a beginner class this week, because that
          is not how any of them work. The move is to open the official course
          search, find a 10-day course with open dates within travel range, and
          apply. Two of our guides handle the practical side: one on the{" "}
          <Link
            href="/t/vipassana-meditation-centre-near-me"
            className="text-teal-600 underline"
          >
            near-me search and why it misleads
          </Link>
          , and one on{" "}
          <Link href="/guide/find-a-retreat" className="text-teal-600 underline">
            choosing among centres
          </Link>
          .
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          And if your question is really about what happens once you are inside
          one, that is its own thing: how the days are shaped, what the silence
          does, what tends to surface. I have written about that elsewhere on
          the site. But the operational questions, how to sit and what to do
          with a given experience on the cushion, belong with an authorized
          assistant teacher at a course, not with a web page.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          section="guide-vipassana-meditation-centre-footer"
          heading="Not sure whether a centre or a course is what you are looking for?"
          description="Happy to talk it through: what a centre is really like, which one might fit, and how people keep a practice going after the course. Peer to peer, not teacher to student."
        />
      </section>

      <section id="faq" className="max-w-3xl mx-auto px-6 pt-12">
        <FaqSection
          heading="FAQ: Vipassana meditation centres"
          items={faqs}
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-8 pb-16">
        <RelatedPostsGrid
          subtitle="Related"
          title="Keep reading"
          posts={relatedPosts}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="guide-vipassana-meditation-centre-sticky"
        description="Questions about Vipassana centres or applying to a course? Book a quick chat."
      />
    </article>
  );
}
