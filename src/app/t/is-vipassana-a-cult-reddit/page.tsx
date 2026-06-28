import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  StepTimeline,
  BeforeAfter,
  NumberTicker,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";
import { ThreeReferents, PullQuote } from "./cult-reddit-client";

const PAGE_URL = "https://vipassana.cool/t/is-vipassana-a-cult-reddit";
const PUBLISHED = "2026-06-28";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

const OSGUIDE = "https://www.dhamma.org/en/osguide";
const CODE_OF_DISCIPLINE = "https://www.dhamma.org/en-US/about/code";
const DHAMMA_ORG = "https://www.dhamma.org/";

export const metadata: Metadata = {
  title:
    "Is Vipassana a Cult? What the Reddit Threads Are Actually Arguing About",
  description:
    "Reddit asks 'is vipassana a cult' constantly and answers it badly, because the word gets used for three different things at once: the technique, the Goenka organization, and the old-student social layer. Only the third has any fair criticism in it, and it traces to one published rule. A read from someone with 6 courses behind them, not the centre.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Is Vipassana a Cult? What the Reddit Threads Are Actually Arguing About",
    description:
      "Every 'is vipassana a cult' thread collapses three separate questions into one word. Two of them clear cleanly. The third points at the one rule worth arguing about.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Is Vipassana a Cult? The Reddit Question, Untangled",
    description:
      "The technique, the organization, and the old-student layer are three different things. Reddit argues about all three under one word.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Is Vipassana a cult? (the Reddit question)" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Is Vipassana a cult? (the Reddit question)", url: PAGE_URL },
];

const threadSteps = [
  {
    title: "Someone posts the question",
    description:
      "Usually one of two people: a first-timer who just read the rules and got spooked, or someone three days home from a course who feels weird and is trying to name it. The title is some version of 'is this a cult?'",
  },
  {
    title: "The hot takes land first",
    description:
      "A handful of replies say RUN, with the silence, the dead guy on tape, and the chanting offered as proof. They are loud, they are early, and they are answering the vibe of the gate rather than the structure behind it.",
  },
  {
    title: "Old students show up with the boring facts",
    description:
      "Then the people who actually sat courses arrive. It is free. You can leave whenever you want. Nobody calls you afterward. The discourses are on YouTube. Goenka died in 2013 and nobody replaced him. The thread starts to deflate.",
  },
  {
    title: "Someone raises the real one",
    description:
      "Eventually a careful comment names the thing worth naming: the pressure to not mix techniques, the 'this is the only pure way' framing, the social nudge to keep coming back and to serve. That is the part that earned the word, and it is a fair hit.",
    detail:
      "This is the comment that usually gets the most thoughtful replies, and it is the part the loud takes and the defensive takes both skip.",
  },
  {
    title: "The thread converges",
    description:
      "The honest landing spot, in thread after thread, is the same: not a cult by any test that matters, but the technique-purity culture is real and you are allowed to keep your own judgement about it.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Is Vipassana a cult?",
    a:
      "No, not by the standard definition (a group held together by a living charismatic leader, financial extraction, and isolation from outside life). Goenka Vipassana fails all three: the founder S.N. Goenka died in 2013 and no successor was named, the 10-day courses are free and run on donations accepted only from people who already completed a course, and the centre has no contact with you once you leave. The one piece of fair criticism is the published guidance not to mix the technique with other practices, which reads as dogmatic to a lot of people. That is worth arguing about, but it is not control.",
  },
  {
    q: "Why does Reddit keep asking if Vipassana is a cult?",
    a:
      "Because the surface of a 10-day course rhymes with cult imagery: enforced silence, surrendering your phone, a strict daily schedule, group chanting in a language you do not speak, and recorded discourses from a man who died in 2013. The threads that go badly stop at the rhyme. The threads that go well separate the aesthetics of the course from the actual structure of the organization, and they notice that every one of those features ends the moment you walk out the gate. A cult extends control into your daily life. The course does the opposite, it hands your phone back and sends you home.",
  },
  {
    q: "What is the strongest 'it is a cult' argument on Reddit?",
    a:
      "The technique-purity culture. The official old-student guidance says 'Do not mix this technique with others,' and the code of discipline asks students to suspend all other meditation and spiritual practices during a course. Among returning students that hardens into a social norm that Goenka Vipassana is the one pure method and that combining it with anything else weakens it. That is the part of the discourse that most resembles in-group dogma, and it is a reasonable thing to be skeptical of. It still does not involve a leader, money, or any hold on you after you leave.",
  },
  {
    q: "Is the 'do not mix techniques' rule cult control?",
    a:
      "It depends on how you read it, and reasonable people on Reddit land on both sides. The stated reason is evaluation hygiene: if you run three methods at once you cannot tell which one did what, so the course asks you to give this one a clean trial for ten days. Read that way it is a lab protocol, not a loyalty oath. The fair objection is that the framing often does not stay scoped to the ten days, and the 'only pure technique' language follows people home. Both readings can be true. Notice which one a given centre or old student is actually pushing.",
  },
  {
    q: "Does Vipassana take your money?",
    a:
      "No. The 10-day courses charge nothing for teaching, food, or lodging. They run on a donation model, and donations are accepted only from people who have already finished a course, on the logic that you give for the next person, not for yourself. There is no membership tier, no required ongoing payment, and nobody checks what you gave. On Reddit the free model is the single fact that most often ends the cult argument, because the standard cult playbook needs a revenue stream and this one does not have one.",
  },
  {
    q: "Can you leave a Vipassana course early?",
    a:
      "Yes. You are asked to commit to the full ten days and discouraged from leaving in the first three, because the technique cannot be fairly judged that early, but nobody physically stops you. People do leave. If you go you are not billed, not shunned, and not contacted afterward. The commitment is social and internal, not a locked door. For anything about how to actually sit, or a difficulty that comes up on the cushion, the right move is to talk to the assistant teacher at the course or to use the official resources at dhamma.org, not a comment thread.",
  },
  {
    q: "Is there a leader being worshipped?",
    a:
      "No living one. S.N. Goenka recorded the discourses and instructions once, refused to anoint a successor, and built an unpaid rotating assistant-teacher system specifically so no single person could accumulate a following. He died on 29 September 2013 and the organization kept running on the same recordings, with no schism and no new figurehead. Reddit sometimes reads 'students listening to a dead man on tape' as culty, but structurally it is the opposite: one fixed recording means no living teacher can drift the message or build a personal cult inside the tradition.",
  },
];

export default function Page() {
  const schema = [
    breadcrumbListSchema(breadcrumbSchemaItems),
    articleSchema({
      headline:
        "Is Vipassana a Cult? What the Reddit Threads Are Actually Arguing About",
      description:
        "The Reddit question collapses three different things into one word: the technique, the Goenka organization, and the old-student social layer. Two clear cleanly, the third points at the one published rule worth arguing about.",
      url: PAGE_URL,
      datePublished: PUBLISHED,
      author: "Matthew Diakonov",
      authorUrl: "https://m13v.com",
      publisherName: "Vipassana.cool",
      publisherUrl: "https://vipassana.cool",
    }),
    faqPageSchema(faqs, PAGE_URL),
  ];

  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="pt-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero */}
      <header className="max-w-4xl mx-auto px-6 pt-8 pb-4">
        <p className="text-sm font-medium text-teal-700">
          The Reddit question, untangled
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900">
          Is Vipassana a cult? What the Reddit threads are actually arguing
          about
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-zinc-600">
          I have sat six 10-day courses and served at a few, and I read these
          threads the way you do. Here is the thing almost every one of them
          gets tangled on: the word &ldquo;cult&rdquo; is doing the work of
          three different questions at once. Pull them apart and the argument
          mostly settles itself, except for one part that is genuinely worth
          your skepticism.
        </p>
        <div className="mt-6">
          <ArticleMeta
            author="Matthew Diakonov"
            authorRole="Written with AI"
            datePublished={PUBLISHED}
            readingTime="9 min read"
          />
        </div>
      </header>

      {/* Direct answer */}
      <section className="max-w-4xl mx-auto px-6 py-6">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer &middot; verified 28 June 2026
          </p>
          <p className="mt-3 text-lg leading-relaxed text-zinc-800">
            <strong className="text-zinc-900">No, not by the standard
            definition</strong>{" "}
            (a living charismatic leader, financial extraction, and isolation
            from your outside life). Goenka Vipassana fails all three: the
            founder died in 2013 with no successor, the courses are free and run
            on post-course donation only, and the centre has no contact with you
            after you leave. The one fair criticism is the published guidance to{" "}
            <em>not mix the technique with others</em>, which a lot of people on
            Reddit read as dogmatic. That is worth arguing about. It is not
            control.
          </p>
          <p className="mt-3 text-sm text-zinc-600">
            Source checked:{" "}
            <a
              href={CODE_OF_DISCIPLINE}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline underline-offset-2"
            >
              the official Code of Discipline
            </a>{" "}
            and{" "}
            <a
              href={OSGUIDE}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline underline-offset-2"
            >
              old-student guidelines
            </a>{" "}
            on dhamma.org. I am a fellow meditator sharing how I read this, not a
            teacher and not the centre.
          </p>
        </div>
      </section>

      {/* Three referents */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          One word, three different questions
        </h2>
        <p className="mt-4 text-zinc-600 leading-relaxed">
          When a thread asks &ldquo;is vipassana a cult,&rdquo; the replies
          almost never agree on what &ldquo;vipassana&rdquo; refers to. Three
          different things share the name, and they get very different answers.
          The threads that go in circles are usually two people arguing about
          two different ones.
        </p>
        <div className="mt-8">
          <ThreeReferents />
        </div>
        <p className="mt-6 text-zinc-600 leading-relaxed">
          The technique and the organization clear cleanly. That is most of the
          fight, and it is the part that ends fast once someone who actually sat
          a course shows up. The interesting part is column three, the only one
          with any real grievance in it.
        </p>
      </section>

      {/* Thread anatomy */}
      <section className="bg-zinc-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            The anatomy of every &ldquo;is it a cult&rdquo; thread
          </h2>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            After reading enough of these, they follow the same arc. Knowing the
            arc is useful, because it tells you which comment to actually read.
            It is almost never the top one.
          </p>
          <div className="mt-8">
            <StepTimeline steps={threadSteps} />
          </div>
        </div>
      </section>

      {/* The anchor: the one rule */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          The one rule the smart threads end up on
        </h2>
        <p className="mt-4 text-zinc-600 leading-relaxed">
          If you read past the silence and the chanting, the criticism that
          survives is about technique purity. And unlike most of the
          accusations, it is not a vibe, it is written down. The official
          guidance for students is explicit:
        </p>
        <div className="mt-8 space-y-4">
          <PullQuote
            quote="Do not mix this technique with others."
            cite="Guidelines for practicing, dhamma.org"
            href={OSGUIDE}
          />
          <PullQuote
            quote="All other meditation techniques, healing and spiritual practices should be suspended."
            cite="Code of Discipline, dhamma.org"
            href={CODE_OF_DISCIPLINE}
          />
        </div>
        <p className="mt-8 text-zinc-600 leading-relaxed">
          Here is the honest split, and Reddit lands on both sides of it for a
          reason. The stated purpose is evaluation hygiene. If you run three
          methods at the same time you cannot tell which one did anything, so
          the course asks you to give this one a clean ten-day trial. Read that
          way it is a lab protocol, not a loyalty oath, and the same guidance
          even tells people who already practice something else to sit two or
          three courses and then choose whichever they find most beneficial.
        </p>
        <p className="mt-4 text-zinc-600 leading-relaxed">
          The fair objection is that the framing often does not stay scoped to
          the ten days. Among some old students it hardens into &ldquo;this is
          the only pure technique,&rdquo; and that line follows people home long
          after the course is over. Both of those can be true at once. The thing
          to watch is which version a given centre or person is actually
          pushing: the ten-day protocol, or the lifetime exclusivity claim. The
          first is reasonable. The second is the part you are allowed to keep
          your own judgement about.
        </p>
      </section>

      {/* Before / After: outside vs inside */}
      <section className="bg-zinc-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            Why the gate looks like a cult and the inside does not
          </h2>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            Most of the &ldquo;cult&rdquo; impression comes from the same five
            features, read from the outside. From the inside each one has a
            boring functional reason, and crucially, each one ends when you
            leave.
          </p>
          <div className="mt-8">
            <BeforeAfter
              title="The same five features, two readings"
              before={{
                label: "Read from the parking lot",
                content:
                  "From outside the gate, the standard cult checklist seems to light up one box after another.",
                highlights: [
                  "Enforced silence for ten days",
                  "They take your phone at check-in",
                  "Group chanting in a language you do not speak",
                  "A dead man's recorded voice runs the room",
                  "A strict schedule you cannot opt out of",
                ],
              }}
              after={{
                label: "Read from day 11",
                content:
                  "From the inside, each one is a functional choice that exists only for the duration and ends at the gate.",
                highlights: [
                  "Silence cuts input so the practice has room, then it is over",
                  "No phone for ten days, handed straight back at the end",
                  "Pali chanting is tradition, not a creed you sign",
                  "One fixed recording stops any live teacher building a following",
                  "The schedule is the container, and you walk out of it on day 11",
                ],
              }}
            />
          </div>
        </div>
      </section>

      {/* Structural tests */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          The structural tests cults fail and this one passes
        </h2>
        <p className="mt-4 text-zinc-600 leading-relaxed">
          Vibes are easy to argue about. Structure is not. A cult needs a way to
          extract value and a way to hold onto you. Here is where that apparatus
          would have to show up, and does not.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-center">
            <div className="text-4xl font-bold text-teal-700">
              <NumberTicker value={0} />
            </div>
            <p className="mt-2 text-sm text-zinc-600">
              successors named after the founder died in 2013
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-center">
            <div className="text-4xl font-bold text-teal-700">
              $<NumberTicker value={0} />
            </div>
            <p className="mt-2 text-sm text-zinc-600">
              charged for teaching, food, or lodging on a 10-day course
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-center">
            <div className="text-4xl font-bold text-teal-700">
              <NumberTicker value={200} />+
            </div>
            <p className="mt-2 text-sm text-zinc-600">
              centres in 90+ countries running the same fixed recordings, no
              central guru
            </p>
          </div>
        </div>
        <p className="mt-8 text-zinc-600 leading-relaxed">
          The single strongest anti-cult fact is the money, because it is the
          one a cult cannot do without. The courses are free, and donations are
          accepted only from people who already finished one, given for the next
          person rather than for access. There is no tier, no receipt check, and
          no consequence for giving nothing. A group that wanted to control you
          would not start by refusing your money at the door. You can read the
          model and the conduct rules yourself at{" "}
          <a
            href={DHAMMA_ORG}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline underline-offset-2"
          >
            dhamma.org
          </a>
          .
        </p>
      </section>

      {/* Honest close */}
      <section className="bg-zinc-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            Where the skeptics are right
          </h2>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            I am not here to sell you a clean bill. The technique-purity culture
            is real, and if it rubs you the wrong way, that instinct is worth
            keeping. So is honest caution about intensive practice itself: a
            minority of people have genuinely hard experiences on long retreats,
            which is a separate question from the cult one and deserves its own
            straight answer. If you want that, I wrote up the{" "}
            <a
              href="/guide/risks-and-safety"
              className="text-teal-700 underline underline-offset-2"
            >
              risks and safety
            </a>{" "}
            side without the sales gloss.
          </p>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            What the courses do not have is the thing that makes a cult a cult: a
            person profiting from you, and a hold on you after you leave. You
            walk in, you do ten hard days, you get your phone back, and nobody
            ever calls. That is the part the loud threads keep missing, and it is
            the part that, after six courses, I keep finding to be true.
          </p>
        </div>
      </section>

      {/* Book a call (footer) */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Sat a course and still chewing on the cult question?"
          description="Talk it through with someone who has done six and keeps a daily practice, no pitch, no lineage recruitment."
        />
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-6">
          Questions people actually ask
        </h2>
        <FaqSection items={faqs} />
      </section>

      {/* Related */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <RelatedPostsGrid
          title="Keep reading"
          posts={[
            {
              title: "Is Vipassana a cult? The rubric audit",
              href: "/t/is-vipassana-a-cult",
              tag: "Deep dive",
              excerpt:
                "The same question run point by point through the two standard academic cult rubrics, BITE and Lifton's eight criteria.",
            },
            {
              title: "Goenka cult? The personality cult that fired its personality",
              href: "/t/goenka-cult",
              tag: "Founder",
              excerpt:
                "A structural look at S.N. Goenka the man: the refusals he made, the successor he never named, and the years since his 2013 death.",
            },
            {
              title: "Vipassana risks and safety, honestly",
              href: "/guide/risks-and-safety",
              tag: "Safety",
              excerpt:
                "What the research says about adverse effects, the dark night, who is most at risk, and where to get help.",
            },
          ]}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Still weighing it up? Talk to a fellow practitioner."
      />
    </article>
  );
}
