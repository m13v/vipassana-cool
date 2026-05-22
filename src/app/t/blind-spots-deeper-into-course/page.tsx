import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ProofBanner,
  HorizontalStepper,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type RelatedPost,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/blind-spots-deeper-into-course";
const PUBLISHED = "2026-05-22";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Why blind spots open deeper into a 10 day Vipassana course",
  description:
    "Blind spots do not open because the technique is special. They open because by mid-course, every cover you usually hide behind, phone, talking, reading, exercise, the exit option, has been removed in sequence. A reflective note from a fellow practitioner, not instruction.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Why blind spots open deeper into a 10 day Vipassana course",
    description:
      "The deepening is structural, not mystical. The course strips the avoidance levers people normally use, in a predictable sequence, and what is underneath has nowhere to go.",
    url: PAGE_URL,
    type: "article",
    publishedTime: PUBLISHED,
  },
  twitter: {
    card: "summary_large_image",
    title: "Why blind spots open deeper into a Vipassana course",
    description:
      "By day 4 most of the cover is gone: phone, talking, reading, eye contact, exercise, exit option. What is underneath has nowhere to hide.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "https://vipassana.cool" },
  { label: "Guides", href: "https://vipassana.cool/guide" },
  { label: "Blind spots deeper into a course" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Blind spots deeper into a course", url: PAGE_URL },
];

const coverRemovalSteps = [
  {
    title: "Day 0, arrival",
    description:
      "Phone, smartwatch, wallet, keys, and any other devices are surrendered to management. No outside communication for the duration. Reading and writing materials are also not allowed at the site.",
  },
  {
    title: "Day 1, morning",
    description:
      "Noble silence begins. No talking, no gestures, no eye contact, no written notes between students. Men and women are separated for the rest of the course.",
  },
  {
    title: "Day 1 to 3",
    description:
      "Exercise programs are suspended. No music, no entertainment, no recording devices, no journaling. Prayer and other spiritual practices are also set aside.",
  },
  {
    title: "Day 4 onward",
    description:
      "By now the regular rhythm of mornings, group sittings, and evening discourses is the only remaining structure to lean on. There is no escape route left that lives outside the course.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "What are blind spots in the context of a Vipassana course?",
    a: "On this page, blind spots means the patterns a person normally cannot see in themselves because daily life keeps them buried: a way of avoiding a particular feeling, a habitual story about a relationship, a self-image that does not quite match the evidence, a reactive pattern that fires before the thinking mind catches up. The course does not give anyone a tool to spot these. It removes the usual cover, and what is underneath becomes hard to miss.",
  },
  {
    q: "Why do blind spots seem to open deeper into the course rather than on day one?",
    a: "Day one still feels like a retreat with funny rules. By the middle of the course, every cover a person normally uses has been removed in sequence and the novelty has worn off, so the avoidance loops have nothing to attach to. The work done by the technique is real, but the change in conditions is doing a lot of the visible lifting. A pattern that survives perfectly well at home, because there is always a phone to reach for or a conversation to start, has nowhere to land by day five.",
  },
  {
    q: "Is this a meditation technique or a structural thing?",
    a: "Both, but a fellow practitioner can only honestly speak to the structural part. The actual technique is transmitted only by an authorized teacher inside a course; nothing on this site teaches it. What is fair to talk about, as a peer, is what the surrounding container does, which is to remove inputs and exit options in a known order until the practitioner is left mostly with their own mind.",
  },
  {
    q: "Does this mean second and third courses are deeper than the first?",
    a: "Not necessarily. Old students often report that the first course is the most disorienting because every cover is being removed for the first time at once. Later courses can feel quieter, with specific blind spots showing up in much more targeted ways, often around topics that have been carried in for years. The shape of the deepening changes; deeper is the wrong frame.",
  },
  {
    q: "What should I do if a hard blind spot opens during a course?",
    a: "Talk to the assistant teacher. Every 10-day course has a daily window for student questions and an authorized assistant teacher whose job is exactly this. That conversation is the right channel for anything operational about practice. A resource site run by a fellow practitioner is not. If something surfaces that is clinical in nature, also seek a qualified mental-health professional after the course.",
  },
  {
    q: "Does this happen at home practice too, or only on courses?",
    a: "Home practice is less aggressive at removing cover because daily life keeps almost all of it intact, so what surfaces on the cushion at home tends to be slower and more diffuse. The reason long courses produce the sharper version is not because the technique works harder, it is because the container is more total.",
  },
];

const relatedPosts: RelatedPost[] = [
  {
    title: "How Vipassana actually changes you",
    href: "https://vipassana.cool/guide/how-vipassana-changes-you",
    excerpt:
      "Real change is gradual, not dramatic. The widening gap between stimulus and response, written for someone six courses in.",
    tag: "Guide",
  },
  {
    title: "What surfaces in meditation practice",
    href: "https://vipassana.cool/t/what-surfaces-meditation-practice",
    excerpt:
      "The honest, less dramatic answer about what actually comes up during a sit. Mostly ordinary mental traffic on rotation.",
    tag: "Reflection",
  },
  {
    title: "Post course integration: the week by week shift",
    href: "https://vipassana.cool/t/post-course-integration-shift",
    excerpt:
      "Once the container is gone and cover comes back, what stays of what surfaced. A ledger from six courses.",
    tag: "Reflection",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Why blind spots open deeper into a 10 day Vipassana course",
    description:
      "Blind spots open deeper into a course because the conditions remove the usual cover in a predictable sequence. A reflective note from six 10-day courses across three centers.",
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

      <div className="mx-auto max-w-3xl px-6 pt-10">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <header className="mx-auto max-w-3xl px-6 pt-6 pb-2">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          Why blind spots open deeper into a course
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-zinc-600">
          The popular framing is that the technique is a key, and the deeper
          you go, the more it unlocks. After six 10-day courses I no longer
          buy that as the whole story. The deepening is mostly structural,
          and the structure is auditable. This is a reflective note from a
          fellow practitioner, not instruction.
        </p>
      </header>

      <div className="mx-auto max-w-3xl px-6">
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="6 min read"
        />
      </div>

      <section className="mx-auto max-w-3xl px-6 pt-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Direct answer (verified 2026-05-22)
          </p>
          <p className="mt-3 leading-relaxed text-zinc-800">
            Blind spots seem to open deeper into a course because by the
            middle of the ten days, every escape route a person normally uses
            has been removed in sequence. Phone and outside communication go
            on arrival, talking and eye contact go on day one, reading and
            writing and exercise and music are not allowed at the site, and
            the rural location takes the daytime exit option off the table in
            practice. What is underneath the cover has been there the whole
            time. By mid-course it just has nowhere left to hide.
          </p>
          <p className="mt-3 text-sm text-zinc-600">
            The inventory of what is surrendered or set aside is published by
            the tradition itself in the{" "}
            <a
              href="https://www.dhamma.org/en-US/about/code"
              className="text-teal-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code of Discipline for 10-day courses
            </a>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-10">
        <div className="grid grid-cols-3 gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <div className="text-center">
            <div className="text-3xl font-semibold text-teal-600">6</div>
            <p className="mt-1 text-xs text-zinc-500">10-day courses sat</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-semibold text-teal-600">3</div>
            <p className="mt-1 text-xs text-zinc-500">centers</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-semibold text-teal-600">945+</div>
            <p className="mt-1 text-xs text-zinc-500">daily sits logged</p>
          </div>
        </div>
        <p className="mt-3 text-center text-xs text-zinc-500">
          Dhammamanda in NorCal, CYO in the Bay Area, North Fork in Central
          California. Not a teacher, just a practitioner who has watched the
          same arc happen six times.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The mechanism is the absence of cover, not the presence of insight
        </h2>
        <p className="mt-4 leading-relaxed text-zinc-700">
          Most articles on this topic describe the deepening as something the
          technique does. The mind quiets, awareness sharpens, layers peel
          back. That language is not wrong, but it makes the practitioner
          sound passive, as if a tool is operating on them.
        </p>
        <p className="mt-4 leading-relaxed text-zinc-700">
          What I have actually watched, in myself and in conversations during
          dhamma service, is that the cover comes off in a known sequence.
          The patterns a person hides behind in normal life rely on small,
          unremarkable supplies: the phone in the pocket, a quick scroll, a
          chat with a friend, a coffee run, a half hour of music, a walk to
          shake out an uncomfortable feeling, the option to leave the room
          and start something new. The course suspends all of these.
        </p>
        <p className="mt-4 leading-relaxed text-zinc-700">
          By day four or five, almost nothing in the practitioner has changed
          yet. What has changed is the environment, and the environment was
          doing more work hiding things than anyone realizes from the
          outside.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-10">
        <HorizontalStepper
          title="What goes away in the first 72 hours"
          steps={coverRemovalSteps}
        />
        <p className="mt-2 text-xs text-zinc-500">
          Sourced from the published{" "}
          <a
            href="https://www.dhamma.org/en-US/about/code"
            className="text-teal-700 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code of Discipline
          </a>
          . The course does not invent this list; the list is the same at
          every center in the Goenka tradition.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Why mid-course, and not earlier
        </h2>
        <p className="mt-4 leading-relaxed text-zinc-700">
          Day one of a course still feels like a slightly strange retreat
          with funny rules. The novelty itself is a kind of cover: the
          unfamiliar bunk, the schedule, the new sounds at the meditation
          hall, registering everyone else as new objects to be curious about.
          A first-time student is fully occupied by the surface.
        </p>
        <p className="mt-4 leading-relaxed text-zinc-700">
          By day three or four the novelty wears off. The schedule is
          predictable. The faces of the other students stop being new. The
          mind no longer has anything fresh to chew on. The patterns the
          person carried in start running on their old loops, except now the
          loops are visible because there is no parallel activity to keep
          half the attention busy.
        </p>
        <p className="mt-4 leading-relaxed text-zinc-700">
          That visibility is what most people are pointing at when they
          describe blind spots opening deeper into a course. It is not that
          new content arrives. It is that content which was always there
          finally stops getting drowned out.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-10">
        <ProofBanner
          metric="0"
          quote="There is, by design, no input left in the second half of a course that you can use to avoid yourself. That is the part of the design that does the work the technique gets credit for."
          source="Reflection across six 10-day courses, 2022 to 2026"
        />
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          What this reframe is useful for, and what it is not
        </h2>
        <p className="mt-4 leading-relaxed text-zinc-700">
          Treating the deepening as structural has practical consequences.
          It explains why a strong home practice does not produce the same
          quality of revelation: ordinary life is too full of small covers
          to ever fully strip them away on the cushion. It explains why a
          rented camp like CYO and a purpose-built center like North Fork
          can both produce the same kind of mid-course visibility, because
          what they share is the inventory of removed inputs, not the
          architecture. It also explains why old students sometimes report
          flatter courses: they have done enough of the removal work to no
          longer be surprised by it.
        </p>
        <p className="mt-4 leading-relaxed text-zinc-700">
          What this reframe is not is a substitute for the teaching itself.
          A practitioner can describe the container; only an authorized
          teacher inside a course can teach what to do with what comes up,
          and only an assistant teacher in the daily question window can
          give operational guidance about a specific difficulty. For
          anything in that category, the right channel is{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-700 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            dhamma.org
          </a>{" "}
          and a course, not a website.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          A small honest caveat
        </h2>
        <p className="mt-4 leading-relaxed text-zinc-700">
          The structural reading is not the whole picture. Long stretches of
          silence and a specific contemplative training applied to that
          silence are not the same thing as solitary confinement, which has
          almost the same input inventory and produces very different
          outcomes. The technique and the container are doing different jobs
          at the same time. The point of this page is only that pages which
          ignore the container, and write as if the technique is doing
          everything, get the mechanism wrong by half.
        </p>
        <p className="mt-4 leading-relaxed text-zinc-700">
          The other honest caveat: most of what makes a course feel deep is
          not visible on the way out. The course resolves into ordinary days
          quickly, and the part that stays is structural in a different way,
          a slightly wider gap between provocation and reaction. The dramatic
          part fades. The wider gap does not.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-12">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Want to compare notes on this with another practitioner?"
          description="No teaching, no advice. Just a peer conversation about what came up at your course and how to think about building a daily practice around it."
        />
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-12" id="faq">
        <FaqSection items={faqs} />
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-12 pb-16">
        <RelatedPostsGrid posts={relatedPosts} />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Peer-to-peer chat about your course, your practice, or pairing with a buddy."
      />
    </article>
  );
}
