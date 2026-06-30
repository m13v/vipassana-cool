import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  BentoGrid,
  ProofBanner,
  Marquee,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type BentoCard,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-books";
const PUBLISHED = "2026-06-30";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title: "Vipassana Books: a reading list that admits no book teaches the technique",
  description:
    "A curated Vipassana reading list, sorted by what each book actually does for you. The Art of Living is the standard introduction. The Discourse Summaries are the evening talks, not the sitting instructions. No book in the Goenka tradition reproduces the technique, because that is reserved for the 10-day course. Read by a meditator with six courses across three centers.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Vipassana Books: what each one is actually for",
    description:
      "The Art of Living, The Discourse Summaries, and the wider Theravada shelf, sorted by purpose. Plus the one thing every listicle leaves out: none of these books teaches you the technique.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana books, sorted by what they actually do",
    description:
      "A reading list from someone who has sat six Goenka courses. The honest version: books give you context and history, the course gives you the technique.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana Books" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana Books", url: PAGE_URL },
];

const shelfTitles = [
  "The Art of Living",
  "The Discourse Summaries",
  "Mindfulness in Plain English",
  "Satipatthana: The Direct Path",
  "The Heart of Buddhist Meditation",
  "Meditation Now",
  "For the Benefit of Many",
];

const shelves: BentoCard[] = [
  {
    title: "Before a course: context and history",
    description:
      "Books that explain what the tradition is, where it comes from, and what a 10-day course asks of you. They lower the fear of the unknown. They do not, and are not meant to, prepare your sitting.",
    size: "2x1",
    accent: true,
  },
  {
    title: "After a course: the discourses",
    description:
      "Goenka's evening talks in condensed form. They land differently once you have actually been in the hall hearing them. Most people get more from these on a re-read than a pre-read.",
    size: "1x1",
  },
  {
    title: "The wider Theravada shelf",
    description:
      "Adjacent books from other teachers and the older texts. Good for the intellectually curious. Easy to use as a way to avoid sitting, so hold them loosely.",
    size: "1x1",
  },
  {
    title: "What no book contains",
    description:
      "The technique itself. There is no in-tradition title, in any language, that reproduces the actual instructions, because those are given only inside the course by an authorized teacher.",
    size: "2x1",
  },
];

const faqItems: FaqItem[] = [
  {
    q: "What is the single best book on Vipassana?",
    a: "If you want one title, it is The Art of Living: Vipassana Meditation as Taught by S.N. Goenka, written by William Hart with Goenka's approval. It was the first book in English to describe the practice at length for a general reader and has been translated into roughly 25 languages. It is an introduction and a context-setter, not a manual you practice from.",
  },
  {
    q: "Can I learn Vipassana from a book instead of taking the course?",
    a: "No. The Goenka tradition transmits the technique only inside a 10-day residential course, in person, from an authorized assistant teacher. No book the tradition publishes reproduces the sitting instructions. Books give you history, philosophy, and the discourses. For anything operational, the tradition points you to dhamma.org and a course, not a page or a paperback.",
  },
  {
    q: "What is the difference between The Art of Living and The Discourse Summaries?",
    a: "The Art of Living is a single continuous introduction that frames the whole teaching for a newcomer. The Discourse Summaries is a condensed transcript of the evening discourses Goenka gives on each day of a 10-day course, edited by William Hart. The discourses are the philosophical and contextual talks, not the morning technique instructions. That is why most people get more from the Summaries after sitting a course than before.",
  },
  {
    q: "Should I read about Vipassana before my first course?",
    a: "It is optional. Before you can even apply you read and accept the Code of Discipline, which already tells you what the course is and is not. Beyond that, reading The Art of Living for context is fine and reassures a lot of first-timers. Many experienced students suggest arriving without trying to pre-load the technique from anything, so the in-person instruction lands cleanly. That is a personal call, not a rule, and I am not a teacher.",
  },
  {
    q: "Where do I actually buy the official Goenka-tradition books?",
    a: "Pariyatti is the long-running distributor for the Goenka tradition in the West, at store.pariyatti.org, in paperback, ebook, PDF, and audiobook. The Vipassana Research Institute lists its own publications at vridhamma.org/Publications. Many centers also keep a small bookstall, and the older texts are widely available secondhand.",
  },
  {
    q: "Are books by Thich Nhat Hanh or Jack Kornfield part of this tradition?",
    a: "No. They are respected teachers in adjacent lineages and their books are lovely, but they are not the Goenka tradition and they teach differently. If your goal is to understand Goenka-style Vipassana specifically, start inside the tradition (Hart, Goenka) and treat the wider shelf as background, not substitution.",
  },
  {
    q: "What is a good free way to read these?",
    a: "The Pariyatti and VRI sites carry free PDF and ebook editions of several titles, and many public libraries stock The Art of Living. The course itself is run entirely on donation, so the tradition has never gated its written material behind a paywall as a matter of principle.",
  },
];

const relatedPosts = [
  {
    title: "Vipassana for Beginners: the complete guide",
    href: "/guide/vipassana-for-beginners",
    excerpt:
      "No fluff, no mysticism. What the practice is, what a 10-day course is actually like, and what to expect before you sign up.",
    tag: "Guide",
  },
  {
    title: "Course application tips",
    href: "/guide/course-application-tips",
    excerpt:
      "How registration works, why courses fill, and how to read the Code of Discipline before you commit ten days.",
    tag: "Logistics",
  },
  {
    title: "What 'Vipassana' actually means",
    href: "/guide/vipassana-meaning",
    excerpt:
      "A linguistic note on the Pali word, its roots, and why the translation 'to see things as they really are' matters.",
    tag: "Language",
  },
];

export default function VipassanaBooksPage() {
  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline:
                "Vipassana Books: a reading list that admits no book teaches the technique",
              description:
                "A curated Vipassana reading list sorted by what each book actually does. The Art of Living is the standard introduction; The Discourse Summaries are the evening talks, not the instructions; no in-tradition book reproduces the technique.",
              url: PAGE_URL,
              datePublished: PUBLISHED,
              dateModified: PUBLISHED,
              author: "Matthew Diakonov",
              authorUrl: "https://m13v.com",
              publisherName: "Vipassana.cool",
              publisherUrl: "https://vipassana.cool",
              articleType: "Article",
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
          __html: JSON.stringify(
            faqPageSchema(faqItems, `${PAGE_URL}#faq`),
          ),
        }}
      />

      <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        <Breadcrumbs items={breadcrumbItems} />

        <h1 className="mt-6 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Vipassana books, sorted by what they actually do for you
        </h1>

        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="9 min read"
        />

        <p className="mt-6 text-lg leading-relaxed text-zinc-700">
          Every &ldquo;10 best Vipassana books&rdquo; list ranks the same titles
          by popularity and quietly implies you can learn to meditate from them.
          That last part is wrong, and the tradition itself says so. This list is
          built the other way around: each book is sorted by the one job it can
          honestly do, and the technique is left off the shelf entirely, because
          no book on it contains the technique.
        </p>

        {/* DIRECT ANSWER */}
        <div className="mt-8 rounded-xl border border-teal-200 bg-teal-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer &middot; verified June 30, 2026
          </p>
          <p className="mt-2 text-zinc-800">
            The standard one-book answer is{" "}
            <strong className="text-zinc-900">
              The Art of Living: Vipassana Meditation as Taught by S.N. Goenka
            </strong>{" "}
            by William Hart, written with Goenka&apos;s approval and translated
            into roughly 25 languages. It is the clearest single introduction.
            But no book teaches the technique itself: in the Goenka tradition
            that is transmitted only inside a free 10-day course, in person, by
            an authorized teacher. Source:{" "}
            <a
              href="https://store.pariyatti.org/products/3196"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              Pariyatti
            </a>
            , the tradition&apos;s book distributor.
          </p>
        </div>

        <section className="mt-6 rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm italic text-zinc-600">
          <p>
            I am not a teacher and I do not represent the tradition. This is a
            reader&apos;s notes after six courses across three centers. For
            anything official, go to{" "}
            <a
              href="https://www.dhamma.org"
              target="_blank"
              rel="noopener noreferrer"
              className="not-italic text-teal-700 underline hover:text-teal-900"
            >
              dhamma.org
            </a>
            .
          </p>
        </section>

        {/* THE SHELF */}
        <div className="mt-10">
          <Marquee speed={36} fade pauseOnHover className="py-2">
            <div className="flex items-center gap-3 pr-3">
              {shelfTitles.map((t) => (
                <span
                  key={t}
                  className="whitespace-nowrap rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm font-medium text-zinc-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </Marquee>
        </div>

        {/* THESIS / ANCHOR */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Why no book on this list teaches the technique
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-700">
            Here is the distinction that the popular lists skip. The Goenka
            tradition publishes plenty: introductions, evening discourses, Q&amp;A
            collections, scholarly editions of the old texts. What it has never
            published, in any language, is the actual sitting instruction.
          </p>
          <p className="mt-4 leading-relaxed text-zinc-700">
            Take the title that gets mislabeled most often.{" "}
            <strong className="text-zinc-900">The Discourse Summaries</strong>,
            by S.N. Goenka and condensed by William Hart, is repeatedly listed as
            a &ldquo;learn Vipassana&rdquo; book. It is not. It is a condensed
            transcript of the{" "}
            <em>evening</em> discourses, the talks Goenka gives at the end of each
            day of a 10-day course to put that day&apos;s experience in
            perspective. The morning instruction, the part that would actually
            tell you what to do, is deliberately not in the book. That separation
            is not an oversight. It is the design. The technique is reserved for
            the course because it is taught in person, adjusted to the student,
            by an authorized teacher.
          </p>
          <p className="mt-4 leading-relaxed text-zinc-700">
            You can verify the shape of this for yourself. Look at the official
            catalog at{" "}
            <a
              href="https://www.vridhamma.org/Publications"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              vridhamma.org/Publications
            </a>{" "}
            or at{" "}
            <a
              href="https://store.pariyatti.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              Pariyatti
            </a>
            . You will find history, biography, discourses, and the source
            scriptures. You will not find a step-by-step manual, and that absence
            is the most honest thing on the whole shelf.
          </p>
        </section>

        <div className="mt-10">
          <ProofBanner
            quote="The first book in English to describe the practice of Vipassana at length for the general reader, prepared under Goenka's guidance and with his approval."
            source="The Art of Living, William Hart (via Pariyatti)"
            metric="~25 languages"
          />
        </div>

        {/* FOUR SHELVES */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            The four shelves
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-700">
            Instead of ranking books one through ten, it is more useful to sort
            them by the job they can honestly do. Three of these shelves hold
            real books. The fourth holds nothing, on purpose.
          </p>
          <div className="mt-8">
            <BentoGrid cards={shelves} />
          </div>
        </section>

        {/* ANNOTATED LIST */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            The annotated list
          </h2>

          <div className="mt-8 space-y-6">
            {/* Core 1 */}
            <div className="rounded-xl border border-teal-200 bg-white p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-bold text-zinc-900">
                  The Art of Living: Vipassana Meditation as Taught by S.N.
                  Goenka
                </h3>
                <span className="rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-semibold text-teal-700">
                  Start here
                </span>
              </div>
              <p className="mt-1 text-sm text-zinc-500">
                William Hart &middot; first published 1987 &middot; HarperOne /
                Pariyatti
              </p>
              <p className="mt-3 leading-relaxed text-zinc-700">
                If you read one book, read this. Hart was one of the first
                assistant teachers Goenka appointed, and he wrote it with
                Goenka&apos;s approval, so the framing is faithful. It is history,
                anecdote, and the kind of student questions that come up in every
                course. It tells you what the tradition is and where it comes
                from. It will not, and is not trying to, prepare your sitting.
                That is its honesty, not its limitation.
              </p>
            </div>

            {/* Core 2 */}
            <div className="rounded-xl border border-zinc-200 bg-white p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-bold text-zinc-900">
                  The Discourse Summaries
                </h3>
                <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-semibold text-zinc-600">
                  Read after, not before
                </span>
              </div>
              <p className="mt-1 text-sm text-zinc-500">
                S.N. Goenka, condensed by William Hart &middot; Pariyatti / VRI
              </p>
              <p className="mt-3 leading-relaxed text-zinc-700">
                The condensed evening talks from a 10-day course, one per day.
                This is the most misunderstood title on the shelf: it is the
                discourses, the philosophy and the context, not the morning
                instruction. The words land far harder once you have actually sat
                in the hall and heard them at the end of a long day. Most people
                get more out of this on a re-read than they ever would as a
                pre-read.
              </p>
            </div>

            {/* Wider shelf */}
            <div className="rounded-xl border border-zinc-200 bg-white p-6">
              <h3 className="text-lg font-bold text-zinc-900">
                The wider Theravada shelf
              </h3>
              <p className="mt-1 text-sm text-zinc-500">
                Adjacent lineages &middot; background reading
              </p>
              <ul className="mt-3 space-y-3 text-zinc-700">
                <li>
                  <strong className="text-zinc-900">
                    Mindfulness in Plain English
                  </strong>{" "}
                  by Bhante Henepola Gunaratana (Wisdom Publications). The
                  plain-spoken classic. Different teacher, different lineage, but
                  the friendliest on-ramp to the broader world of insight
                  practice.
                </li>
                <li>
                  <strong className="text-zinc-900">
                    The Heart of Buddhist Meditation
                  </strong>{" "}
                  by Nyanaponika Thera. The older, denser study of the
                  foundational framework. For the reader who wants the scholarly
                  spine.
                </li>
                <li>
                  <strong className="text-zinc-900">
                    Satipatthana: The Direct Path to Realization
                  </strong>{" "}
                  by Bhikkhu Analayo (Windhorse). A careful academic reading of
                  the source text. Heavy going, and worth it if that is your
                  appetite.
                </li>
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                One caution from experience: this shelf is the easiest place to
                hide. Reading more books is a comfortable substitute for sitting,
                and the wider you range across teachers and lineages before
                you&apos;ve built a practice, the more the ideas compete instead
                of compound. Hold these loosely.
              </p>
            </div>
          </div>
        </section>

        {/* READING ORDER */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            When to read what
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-700">
            This is about reading order, not practice instruction. Before a first
            course, the one genuinely required text is the Code of Discipline you
            accept when you apply; it already tells you what the ten days are and
            are not. Beyond that, The Art of Living is a calming, context-setting
            read that takes the edge off the unknown for a lot of first-timers.
          </p>
          <p className="mt-4 leading-relaxed text-zinc-700">
            The discourses and the wider shelf earn their place afterward. Once
            you have something to anchor the words to, the same sentences that
            read as abstract before a course read as obvious after one. If you
            only have the budget for one book in each direction, that is the
            split: Hart going in, the Summaries coming out.
          </p>
          <div className="mt-6 rounded-lg border border-zinc-200 bg-zinc-50 p-5">
            <p className="leading-relaxed text-zinc-700">
              For anything that is genuinely a &ldquo;how do I do this&rdquo;
              question, no book and no page is the right place, including this
              one. Those questions belong with an authorized assistant teacher at
              a 10-day course, and the starting point is{" "}
              <a
                href="https://www.dhamma.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 underline hover:text-teal-900"
              >
                dhamma.org
              </a>
              .
            </p>
          </div>
        </section>

        <div className="mt-14">
          <BookCallCTA
            appearance="footer"
            destination={BOOKING_LINK}
            site="Vipassana"
            heading="Stuck between reading and sitting?"
            description="If you've read the books but keep stalling on the cushion, book a short call and we'll talk through building an actual daily practice with a buddy for accountability."
          />
        </div>

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Common questions about Vipassana books
          </h2>
          <div className="mt-6">
            <FaqSection items={faqItems} heading="" />
          </div>
        </section>

        <div className="mt-14">
          <RelatedPostsGrid
            title="Keep reading"
            posts={relatedPosts}
          />
        </div>

        <p className="mt-12 text-sm text-zinc-500">
          Want other practitioners to compare notes with on what to read and what
          to skip? The practice-buddy program at{" "}
          <Link
            href="/practice-buddy"
            className="text-teal-700 underline hover:text-teal-900"
          >
            vipassana.cool/practice-buddy
          </Link>{" "}
          pairs people for daily accountability.
        </p>
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Read everything, still not sitting daily? Let's fix that."
      />
    </article>
  );
}
