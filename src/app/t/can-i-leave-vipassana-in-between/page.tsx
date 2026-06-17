import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  BentoGrid,
  FlowDiagram,
  BackgroundGrid,
  AnimatedSection,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/can-i-leave-vipassana-in-between";
const PUBLISHED = "2026-06-17";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Can I leave Vipassana in between? Yes, but read how it actually works first",
  description:
    "Yes, you can leave a Vipassana course at any point in between. You are never detained. But you commit to the full ~10 days, no one is allowed to leave on Day 10, and your phone and keys are in storage. What actually happens when you decide to go, from someone who served 40+ days of dhamma service.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Can I leave Vipassana in between?",
    description:
      "You can leave at any point in between; you are never detained. Here is what actually happens at the door, the one day you cannot leave, and the logistics nobody warns you about.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Can I leave Vipassana in between?",
    description:
      "Yes, you can leave in between. Here is the actual departure process, the Day 10 exception, and the logistics, from 40+ days of dhamma service.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Can I leave Vipassana in between?" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Can I leave Vipassana in between?", url: PAGE_URL },
];

const threeKinds = [
  {
    title: "1. Wanting to leave",
    description:
      "The pull to walk out. Almost universal, peaks somewhere in the first few days, and passes for most people. This is a feeling, not a decision, and it is the version most searches actually mean.",
    size: "2x1" as const,
  },
  {
    title: "2. Choosing to leave",
    description:
      "You sit with the course manager, then the assistant teacher, retrieve your phone and keys from storage, and arrange your own ride out. The mechanics of this are what the rest of this page walks through.",
    size: "1x1" as const,
  },
  {
    title: "3. Being asked to leave",
    description:
      "Occasionally staff decide a course is not the right place for someone right now, usually around acute psychological distress. Rare, but real, and not the same as quitting.",
    size: "1x1" as const,
  },
];

const departureSteps = [
  {
    label: "You tell a server you want to leave",
    detail:
      "Not the teacher directly, usually. You raise it with the course manager (same-gender side) during a break or at the dining hall. Noble silence is paused for this conversation; you are allowed to talk to management about logistics and difficulties at any point.",
  },
  {
    label: "They ask you to sit with it overnight",
    detail:
      "The near-universal first response is to ask you to not decide today and to sleep on it. This is not a trick to trap you. The urge genuinely tends to drop after a night and a meal. Many people who said the words 'I want to go home' on Day 3 finish the course.",
  },
  {
    label: "A short talk with the assistant teacher",
    detail:
      "If you still want to leave, you get a few minutes with the assistant teacher. They will ask why, may suggest a way to make the remaining days more bearable, and will not argue past your decision. No one is held against their will.",
    icon: "check" as const,
  },
  {
    label: "Your phone and valuables come back",
    detail:
      "Phones, smartwatches, keys, wallets, and books were deposited with management on Day 0. Leaving in between means physically collecting them from storage. The Code of Discipline at dhamma.org states devices stay deposited 'until the course ends,' so this is a deliberate handover, not a self-serve locker.",
    icon: "lock" as const,
  },
  {
    label: "You arrange your own transport",
    detail:
      "Most centers sit well outside a town (I have sat at North Fork in central California and a converted camp in the Bay Area; both are a drive from anything). There is no shuttle on demand. You call a taxi, a rideshare if there is signal, or someone who can collect you. This step surprises people more than any other.",
    icon: "email" as const,
  },
];

const faqs: FaqItem[] = [
  {
    q: "Can I physically leave a Vipassana course whenever I want?",
    a: "Yes. You are a volunteer student, not a detainee. No one locks the gate or hides your belongings to keep you. You make a commitment to stay the full period when you apply, and the staff will encourage you to honor it, but if you decide to go, you go. The friction is social and logistical, never physical.",
  },
  {
    q: "Is there any day I am not allowed to leave?",
    a: "Day 10. The Code of Discipline and centers are explicit that no one is permitted to leave on the tenth day. Day 10 is when noble silence breaks and students re-enter normal speech gradually before departing on the morning of Day 11. Leaving mid-process on Day 10 would disrupt that re-entry for you and for others, so it is the one day the answer is genuinely no.",
  },
  {
    q: "When does the urge to leave hit hardest?",
    a: "For most people, somewhere in the first few days, often around Days 2 to 4. That window combines a body not yet used to long sitting, a mind starved of its usual stimulation, and none of the payoff yet. It is also before the part of the course people most often describe as the turning point. The staff have watched this curve hundreds of times, which is why they ask you to wait a night before deciding.",
  },
  {
    q: "What do I actually say, and to whom?",
    a: "You raise it with the course manager on your side of the course, not by interrupting a group sitting or cornering the teacher. Management conversations about logistics and difficulty are allowed even during noble silence. They will listen, almost always ask you to sleep on it, and if you still want to go, set up a short talk with the assistant teacher.",
  },
  {
    q: "Will they refund my course if I leave early?",
    a: "Courses run entirely on donation; there is no fee to refund. You are never charged to attend in the first place, and only old students who have completed a course may donate, and only at the end. Leaving early has no financial penalty because there was no financial transaction. This is worth verifying for your specific center on dhamma.org.",
  },
  {
    q: "What are considered legitimate reasons to leave?",
    a: "A genuine medical emergency, a family emergency (the center keeps an emergency contact line for exactly this), or acute psychological distress are the reasons staff treat as clear-cut. Ordinary discomfort, boredom, restlessness, and 'this is harder than I expected' are the reasons they will gently ask you to stay through, because those are the ones that usually pass.",
  },
  {
    q: "Can I come back and do a course later if I leave this one?",
    a: "Yes. Leaving a course does not blacklist you. You can apply for a future course like anyone else. Plenty of people leave one course and complete the next. There is no permanent mark against you for going home.",
  },
];

const relatedPosts = [
  {
    title: "The ten-day commitment, line by line",
    href: "/t/ten-day-commitment",
    excerpt:
      "What you actually agree to when you apply: the full 12 calendar days, the five precepts, noble silence, and electronics surrender.",
    tag: "Logistics",
  },
  {
    title: "10-day course structure",
    href: "/t/10-day-course-structure",
    excerpt:
      "The daily clock, the three load-bearing group sittings, and the one structural shift on Day 10, the day you cannot leave.",
    tag: "Structure",
  },
  {
    title: "Can I leave a Vipassana course early?",
    href: "/faq/can-i-leave-early",
    excerpt:
      "The shorter FAQ companion to this guide: why leaving is discouraged and the surgeon analogy Goenka uses.",
    tag: "FAQ",
  },
];

export default function CanILeaveVipassanaInBetweenPage() {
  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline:
                "Can I leave Vipassana in between? Yes, but read how it actually works first",
              description:
                "You can leave a Vipassana course at any point in between; you are never detained. But you commit to the full ~10 days, no one is allowed to leave on Day 10, and your phone and keys are in storage. What actually happens when you decide to go.",
              url: PAGE_URL,
              datePublished: PUBLISHED,
              author: "Matthew Diakonov",
              authorUrl: "https://m13v.com",
              publisherName: "Vipassana.cool",
              publisherUrl: "https://vipassana.cool",
            }),
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
          __html: JSON.stringify(faqPageSchema(faqs, PAGE_URL + "#faq")),
        }}
      />

      <div className="mx-auto max-w-3xl px-5 pt-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero */}
      <BackgroundGrid pattern="dots" glow className="border-b border-zinc-200">
        <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">
            Leaving a course
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
            Can I leave Vipassana in between?
          </h1>
          <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
            The short answer is yes, and the reason this question gets searched
            at 2 AM is that it usually does not feel that way from inside a course.
            Here is what actually happens when you decide to go, the one day you
            cannot, and the logistics nobody warns you about.
          </p>
          <div className="mt-6">
            <ArticleMeta
              author="Matthew Diakonov"
              authorRole="Written with AI"
              datePublished={PUBLISHED}
              readingTime="7 min read"
            />
          </div>
        </div>
      </BackgroundGrid>

      {/* Direct answer */}
      <div className="mx-auto max-w-3xl px-5">
        <AnimatedSection className="mt-10 rounded-2xl border border-teal-200 bg-teal-50 p-6 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Direct answer (verified 2026-06-17)
          </p>
          <p className="mt-3 text-lg text-zinc-800 leading-relaxed">
            Yes. You can leave a Vipassana course at any point in between, and no
            one will physically stop you. You make a commitment to stay the full
            period of roughly ten days (twelve on site), and the staff will
            encourage you to honor it, but you are a volunteer student, not a
            detainee. The single hard exception: no one is permitted to leave on
            Day 10.
          </p>
          <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
            Sourced from the official Code of Discipline at{" "}
            <a
              href="https://www.dhamma.org/en/about/code"
              className="text-teal-700 underline hover:text-zinc-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              dhamma.org
            </a>
            , which states students &ldquo;make a commitment to stay for the
            entire period of the course,&rdquo; cross-checked against six courses
            of my own and 40+ days of dhamma service watching this from the staff
            side. Not a teacher, just a fellow student.
          </p>
        </AnimatedSection>
      </div>

      {/* Three kinds of leaving */}
      <section className="mx-auto max-w-3xl px-5 mt-14">
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
            &ldquo;Leaving&rdquo; means three different things
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            Most of the worry packed into this question comes from collapsing
            three separate situations into one word. They feel identical at 4 AM
            on Day 3. They are not. Sorting out which one you are actually in is
            most of the answer.
          </p>
        </AnimatedSection>
        <div className="mt-7">
          <BentoGrid cards={threeKinds} />
        </div>
        <p className="mt-5 text-zinc-700 leading-relaxed">
          The pages that come up when you look this question up tend to answer
          only the first kind: they reassure you the urge passes and quote the
          surgeon-who-leaves-mid-operation analogy. That is true and worth
          reading, but it skips the part people are actually anxious about, which
          is the mechanics of the second kind. So that is what the rest of this
          is.
        </p>
      </section>

      {/* The walkthrough */}
      <section className="mx-auto max-w-3xl px-5 mt-14">
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
            What actually happens when you decide to go
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            This is the sequence I have watched play out from the server side
            during dhamma service, and the one I have felt the pull toward myself
            more than once. It is calmer and slower than the trapped feeling
            suggests.
          </p>
        </AnimatedSection>
        <div className="mt-7">
          <FlowDiagram
            title="The departure process, in between Days 1 and 9"
            steps={departureSteps}
          />
        </div>
        <p className="mt-6 text-zinc-700 leading-relaxed">
          The last two steps are the ones that catch people off guard. The
          building does not hold you, but the surrendered phone and the remote
          location quietly do some of the same work. By the time you have
          retrieved your things and worked out how to get to a road, the panic
          that drove the decision has often already thinned out. That gap is, I
          think, partly the point of asking you to wait a night.
        </p>
      </section>

      {/* The Day 10 exception */}
      <section className="mx-auto max-w-3xl px-5 mt-14">
        <AnimatedSection className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-7">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
            The one day the answer is no
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            &ldquo;In between&rdquo; has an end point. Day 10 is when noble
            silence breaks and the course eases students back into ordinary
            speech before everyone leaves on the morning of Day 11. Centers are
            explicit that no one is permitted to leave on Day 10. By then the
            hard part is behind you anyway, so the rule rarely collides with a
            real urge to bolt. But if you are counting days and planning an exit,
            know that the window for leaving in between closes at the end of Day
            9. For the full shape of the ten days and where Day 10 sits, see the{" "}
            <Link
              href="/t/10-day-course-structure"
              className="text-teal-700 underline hover:text-zinc-900"
            >
              10-day course structure
            </Link>
            .
          </p>
        </AnimatedSection>
      </section>

      {/* Why the difficulty is worth naming */}
      <section className="mx-auto max-w-3xl px-5 mt-14">
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
            Why staff ask you to stay (without forcing you)
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            The encouragement to stay is not institutional stubbornness. The
            course is built as one continuous arc, and the first stretch tends to
            stir up far more than it settles. The reason teachers ask you to wait
            a night is empirical: they have watched the urge-to-leave curve
            hundreds of times and know how often it drops by morning. None of
            that overrides your choice. The whole thing rests on the course being
            voluntary; a course someone was forced to finish would not be a
            Vipassana course.
          </p>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            If you want the longer version of what you agreed to when you applied,
            the{" "}
            <Link
              href="/t/ten-day-commitment"
              className="text-teal-700 underline hover:text-zinc-900"
            >
              ten-day commitment, line by line
            </Link>{" "}
            covers the precepts, the silence, and the electronics surrender that
            make leaving in between feel heavier than it physically is. And the
            companion FAQ,{" "}
            <Link
              href="/faq/can-i-leave-early"
              className="text-teal-700 underline hover:text-zinc-900"
            >
              can I leave a Vipassana course early
            </Link>
            , covers the why-it-is-discouraged side in more depth.
          </p>
        </AnimatedSection>
      </section>

      <section className="mx-auto max-w-3xl px-5 mt-14">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Sitting with the decision to leave or stay?"
          description="If you want to talk it through with someone who has sat six courses and served at several, book a short call. Not as a teacher, just a fellow student who has felt that exact pull."
        />
      </section>

      <section className="mx-auto max-w-3xl px-5 mt-14">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 mb-6">
          Questions people ask before Day 3
        </h2>
        <FaqSection items={faqs} />
      </section>

      <section className="mx-auto max-w-3xl px-5 mt-16 mb-20">
        <RelatedPostsGrid
          title="Keep reading"
          posts={relatedPosts}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Deciding whether to leave or stay? Talk it through with a fellow practitioner."
      />
    </article>
  );
}
