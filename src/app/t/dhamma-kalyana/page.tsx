import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  GradientText,
  OrbitingCircles,
  ParallaxSection,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/dhamma-kalyana";
const PUBLISHED = "2026-06-28";
const BOOKING = "https://cal.com/team/mediar/vipassana";

const CENTRE_HOME = "https://kalyana.dhamma.org/";
const CENTRE_ALT = "https://www.dhammakalyana.org/";
const TRADITION = "https://www.dhamma.org/";
const PARIYATTI_LIST =
  "https://host.pariyatti.org/treasures/Vipassana_Centers.pdf";
const UPADDHA =
  "https://www.accesstoinsight.org/tipitaka/sn/sn45/sn45.002.than.html";
const KALYANA_MITTA_WIKI =
  "https://en.wikipedia.org/wiki/Kaly%C4%81%E1%B9%87a-mittat%C4%81";
const KALYANA_DEF = "https://www.wisdomlib.org/definition/kalyana";

export const metadata: Metadata = {
  title: 'Dhamma Kalyana: "Wholesome Dhamma," and the Word Hiding in the Name',
  description:
    'Dhamma Kalyana is Pali for "wholesome / beautiful / good Dhamma" (dhamma = the teaching, kalyana = good, virtuous). It is also a Vipassana center in Kanpur, India. Unlike most center names, kalyana is not a landform but a quality, the same word in kalyana-mitta, the admirable friend the Buddha called the whole of the holy life. Verified 2026-06-28.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Dhamma Kalyana means "wholesome Dhamma"',
    description:
      'The name decoded: kalyana is a quality word, not a piece of land. It is the same kalyana in kalyana-mitta, the admirable friend. Verified 2026-06-28.',
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Dhamma Kalyana: "wholesome Dhamma," and kalyana-mitta',
    description:
      'Kalyana is Pali for good, virtuous, beautiful. It is also a Vipassana center in Kanpur, and the root of kalyana-mitta, admirable friendship.',
  },
};

const FAQS: FaqItem[] = [
  {
    q: "What does Dhamma Kalyana mean?",
    a: 'It is two Pali words. "Dhamma" is the teaching, the truth, the law of nature as this tradition uses the word. "Kalyana" (written kalyāṇa) is an adjective meaning good, virtuous, wholesome, lovely. Put together, Dhamma Kalyana reads as "wholesome Dhamma" or "the beautiful, good Dhamma." It is also the proper name of a specific Vipassana center in Kanpur.',
  },
  {
    q: "Is Dhamma Kalyana a place or a word?",
    a: "Both, and that is where most of the confusion online comes from. As ordinary Pali, dhamma kalyana is a phrase about the goodness of the teaching. As a proper noun it is the Dhamma Kalyana Vipassana Meditation Centre in Kanpur, Uttar Pradesh, India, sitting near the river Ganga. If you searched the two words and landed on an address, that is why. The center publishes its own information at kalyana.dhamma.org.",
  },
  {
    q: "Why is the name different from other Vipassana center names?",
    a: 'Most centers in the S.N. Goenka tradition are named "Dhamma" plus a landform: Dhamma Giri is "Hill of Dhamma," Dhamma Khetta is "Field of Dhamma," Dhamma Dīpa is "Island of Dhamma." Kalyana breaks that pattern. It is not a hill, field, or island. It is a quality word, a virtue, which makes Dhamma Kalyana one of the few center names that describes a kind of goodness rather than a kind of ground.',
  },
  {
    q: "What is kalyana-mitta?",
    a: 'Kalyana-mitta (kalyāṇa-mitta) is the same word kalyana plus mitta, "friend." It is usually translated "admirable friend," "good friend," or "noble friend." In the Upaddha Sutta (SN 45.2) the Buddha tells Ananda that admirable friendship is not half but "the whole of the holy life." So the quiet thing inside the name Dhamma Kalyana is the same root that names spiritual friendship.',
  },
  {
    q: "Does kalyana mean physically beautiful?",
    a: 'Not in this sense. Kalyana can mean lovely or beautiful, but in a Dhamma context the beauty points inward, to qualities like conviction, loving-kindness, compassion, virtue, generosity, and wisdom, rather than to physical appearance. That is the reading reference works give for the word as it is used in Buddhist Pali.',
  },
  {
    q: "How do I register for a course at the Dhamma Kalyana center?",
    a: "Courses in this tradition are free, run on donations, and registered online through the official schedule. This page is about the name and the word, not about course logistics. For the address, dates, and the apply link, the authoritative sources are the center's own site at kalyana.dhamma.org and dhamma.org. Anything about how the practice actually works belongs with an authorized teacher at a 10-day course, not an article.",
  },
  {
    q: "Is this page teaching the meditation technique?",
    a: "No. This is a note on language, on a center name and the word inside it. The technique is taught only inside a 10-day residential course by an authorized teacher. For anything about how the practice works, the right places are dhamma.org and an assistant teacher at a course.",
  },
];

function OrbitPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 shadow-sm">
      {children}
    </span>
  );
}

export default function Page() {
  const jsonLd = [
    articleSchema({
      headline: 'Dhamma Kalyana: "Wholesome Dhamma," and the Word Inside the Name',
      description:
        'Dhamma Kalyana is Pali for "wholesome / good Dhamma." It is also a Vipassana center in Kanpur, India. Unlike most center names, kalyana is a quality word, the same word in kalyana-mitta, the admirable friend the Buddha called the whole of the holy life.',
      url: PAGE_URL,
      datePublished: PUBLISHED,
      author: "Matthew Diakonov",
      authorUrl: "https://m13v.com",
      publisherName: "Vipassana.cool",
      publisherUrl: "https://vipassana.cool",
      articleType: "Article",
    }),
    breadcrumbListSchema([
      { name: "Home", url: "https://vipassana.cool" },
      { name: "Dhamma Kalyana", url: PAGE_URL },
    ]),
    faqPageSchema(FAQS, `${PAGE_URL}#faq`),
  ];

  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Dhamma Kalyana" },
          ]}
        />

        <header className="mt-6">
          <p className="text-sm font-medium uppercase tracking-wide text-teal-600">
            Linguistic note
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Dhamma Kalyana: the center name that is{" "}
            <GradientText variant="teal">a virtue, not a place</GradientText>
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            Two Pali words. One is a meditation center on the Ganga. The other
            is a quiet word for goodness, the same word that names the kind of
            friendship the Buddha said was not half but the whole of the path.
          </p>
          <div className="mt-5">
            <ArticleMeta
              author="Matthew Diakonov"
              authorRole="Written with AI"
              datePublished={PUBLISHED}
              readingTime="7 min read"
            />
          </div>
        </header>

        {/* Direct answer */}
        <section
          aria-label="Direct answer"
          className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer · verified 2026-06-28
          </p>
          <p className="mt-3 text-zinc-800">
            <strong>Dhamma Kalyana</strong> is Pali for{" "}
            <strong>&ldquo;wholesome Dhamma&rdquo;</strong> (also rendered
            &ldquo;the good, beautiful Dhamma&rdquo;). <em>Dhamma</em> is the
            teaching, the truth, the law of nature as this tradition uses the
            word; <em>kalyāṇa</em> means <em>good, virtuous, wholesome, lovely</em>.
            It is also the proper name of a place: the{" "}
            <strong>Dhamma Kalyana Vipassana Meditation Centre</strong> in{" "}
            <strong>Kanpur, Uttar Pradesh, India</strong>, on the bank of the
            river Ganga.
          </p>
          <p className="mt-3 text-sm text-zinc-600">
            Sources: the center&rsquo;s own site{" "}
            <a
              href={CENTRE_HOME}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              kalyana.dhamma.org
            </a>{" "}
            (and{" "}
            <a
              href={CENTRE_ALT}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              dhammakalyana.org
            </a>
            ) for the center, and the word&rsquo;s entry on{" "}
            <a
              href={KALYANA_DEF}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              wisdomlib
            </a>
            .
          </p>
        </section>

        {/* The pattern it breaks */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            The name breaks the pattern, and that is the interesting part
          </h2>
          <p className="mt-4 text-zinc-700">
            Once you have looked at a handful of center names in this tradition,
            you notice they are built from land. Every center is{" "}
            <span className="font-medium text-zinc-900">Dhamma</span> plus one
            more word, and that second word is almost always a feature of
            terrain. Dhamma Giri is the hill. Dhamma Khetta is the field. Dhamma
            Dīpa is the island. Dhamma Mahāvana is the great forest. If you want
            the full naming system spelled out, I wrote it up on the{" "}
            <a
              href="/t/dhamma-khetta"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              Dhamma Khetta page
            </a>
            , working from Pariyatti&rsquo;s published list of centers.
          </p>
          <p className="mt-4 text-zinc-700">
            Kalyana does not fit. It is not a hill, a field, an island, or a
            forest. It is a quality. That makes Dhamma Kalyana one of the few
            center names that describes a kind of goodness rather than a kind of
            ground. Where most names point at where the Dhamma is practiced,
            this one points at what the Dhamma is: wholesome.
          </p>
          <p className="mt-4 text-sm text-zinc-500">
            The land-name pattern is transcribed from Pariyatti&rsquo;s public
            center list (
            <a
              href={PARIYATTI_LIST}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-zinc-700"
            >
              host.pariyatti.org
            </a>
            ); kalyana is a quality word, not a terrain word, which is what
            makes it stand out in that list.
          </p>
        </section>

        {/* What kalyana means */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            What kalyāṇa actually means
          </h2>
          <p className="mt-4 text-zinc-700">
            Kalyāṇa is one of those Pali words that does a lot of work. As an
            adjective it means charming, morally good, lovely. As a noun it
            means goodness, merit, virtue, welfare. The beauty it points to is
            not how something looks. It is the inner shape of a life: the
            qualities reference works gather under the word are things like
            conviction, loving-kindness, compassion, virtue, generosity, and
            wisdom.
          </p>

          <div className="mt-2 flex justify-center">
            <OrbitingCircles
              center={
                <span className="rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 px-5 py-3 text-sm font-semibold text-white shadow-md">
                  kalyāṇa
                </span>
              }
              radius={130}
              duration={26}
              items={[
                <OrbitPill key="1">conviction</OrbitPill>,
                <OrbitPill key="2">loving-kindness</OrbitPill>,
                <OrbitPill key="3">compassion</OrbitPill>,
                <OrbitPill key="4">virtue</OrbitPill>,
                <OrbitPill key="5">generosity</OrbitPill>,
                <OrbitPill key="6">wisdom</OrbitPill>,
              ]}
            />
          </div>
          <p className="text-center text-xs text-zinc-500">
            The qualities the word kalyana gathers, per its entry on{" "}
            <a
              href={KALYANA_DEF}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-zinc-700"
            >
              wisdomlib
            </a>
            .
          </p>

          <p className="mt-6 text-zinc-700">
            So &ldquo;wholesome Dhamma&rdquo; is not soft branding. It names the
            teaching by the texture it is supposed to have: good at the
            beginning, good in the middle, good at the end. That phrasing,
            kalyāṇa in the beginning, kalyāṇa in the middle, kalyāṇa in the end,
            is an old way the texts describe the Dhamma itself.
          </p>
        </section>

        {/* The word inside the name */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            The word hiding inside the name: kalyāṇa-mitta
          </h2>
          <p className="mt-4 text-zinc-700">
            Here is the detail the address listings never mention. Kalyana is
            the same word that sits at the front of{" "}
            <a
              href={KALYANA_MITTA_WIKI}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              kalyāṇa-mitta
            </a>
            , usually translated &ldquo;admirable friend,&rdquo; &ldquo;good
            friend,&rdquo; or &ldquo;noble friend.&rdquo; Mitta is friend.
            Kalyana is the good. A kalyana-mitta is a friend in the good, the
            kind of company that makes a wholesome life more likely, not by
            preaching but by being near and being followed.
          </p>
          <p className="mt-4 text-zinc-700">
            And there is one exchange in the texts that gives this word almost
            startling weight.
          </p>
        </section>

        {/* The Upaddha moment, set apart */}
        <ParallaxSection
          intensity={0.25}
          background={
            <div className="absolute inset-0 bg-gradient-to-b from-teal-50 to-white" />
          }
          className="rounded-2xl border border-teal-100"
        >
          <div className="px-6 py-12 sm:px-10 sm:py-14">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
              Upaddha Sutta · SN 45.2
            </p>
            <p className="mt-4 text-zinc-700">
              Ananda comes to the Buddha and offers what sounds like a generous
              estimate:
            </p>
            <blockquote className="mt-4 border-l-2 border-teal-300 pl-5 text-lg italic text-zinc-800">
              &ldquo;This is half of the holy life, lord: admirable friendship,
              admirable companionship, admirable camaraderie.&rdquo;
            </blockquote>
            <p className="mt-5 text-zinc-700">And the Buddha corrects him:</p>
            <blockquote className="mt-4 border-l-2 border-teal-500 pl-5 text-lg italic text-zinc-900">
              &ldquo;Don&rsquo;t say that, Ananda. Don&rsquo;t say that.
              Admirable friendship, admirable companionship, admirable
              camaraderie is actually the whole of the holy life.&rdquo;
            </blockquote>
            <p className="mt-5 text-sm text-zinc-500">
              Upaddha Sutta (SN 45.2), translated by Thanissaro Bhikkhu, on{" "}
              <a
                href={UPADDHA}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-teal-700 underline underline-offset-2"
              >
                accesstoinsight.org
              </a>
              .
            </p>
          </div>
        </ParallaxSection>

        <section className="mt-12">
          <p className="text-zinc-700">
            Not half. The whole. The reason the Buddha gives is plain: when a
            person has admirable people as friends, companions, and comrades,
            they can be expected to develop the path. Friendship is not a
            warm-up to practice; it is the soil practice grows in. That is the
            word folded into Dhamma Kalyana.
          </p>
        </section>

        {/* Why this matters for daily practice */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Why a friendship word matters after you leave the hall
          </h2>
          <p className="mt-4 text-zinc-700">
            I am writing this as a fellow practitioner, not a teacher. I have
            sat six 10-day courses at three centers and done a stretch of dhamma
            service, and the thing nobody warns you about is what happens after.
            The course ends, the hall empties, and the practice that felt
            inevitable inside the silence becomes a daily decision you make
            alone at 5am. That is where most practices quietly thin out.
          </p>
          <p className="mt-4 text-zinc-700">
            The Upaddha Sutta reads differently once you have lived that drop.
            It is not telling you to find a teacher; it is telling you that the
            company you keep is load-bearing. A kalyana-mitta in the householder
            sense can be as ordinary as one other person who also sits, who you
            do not have to perform for, who notices when you go quiet. The
            tradition has a formal version of this in the group sittings old
            students hold, and you can read about{" "}
            <a
              href="/guide/group-sittings"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              why people sit in groups
            </a>{" "}
            even though the technique is done in silence and alone.
          </p>
          <p className="mt-4 text-zinc-700">
            That idea, that an admirable friend keeps a practice alive, is the
            whole reason I built a{" "}
            <a
              href="/t/practice-buddy"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              practice buddy program
            </a>{" "}
            on this site: a way to be paired with one other meditator for daily
            accountability. It is not the technique and it is not a substitute
            for a course. It is just the kalyana-mitta principle, made
            practical, for the part of the path that happens after the hall.
          </p>
          <p className="mt-4 text-zinc-700">
            None of which is operational advice about how to sit. For that, and
            for anything about working with a difficulty on the cushion, the
            real sources are an authorized assistant teacher and{" "}
            <a
              href={TRADITION}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              dhamma.org
            </a>
            , not an article. A name and a word are as far as a page like this
            should go.
          </p>
        </section>

        <BookCallCTA
          appearance="footer"
          destination={BOOKING}
          site="Vipassana"
          heading="Looking for a kalyana-mitta for daily practice?"
          description="If reading about admirable friendship is really you wondering how to keep sitting after a course, book a short peer call and I will share what worked for me and how the practice buddy matching works."
        />

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Common questions about Dhamma Kalyana
          </h2>
          <div className="mt-4">
            <FaqSection items={FAQS} />
          </div>
        </section>

        <div className="mt-14">
          <RelatedPostsGrid
            title="Keep reading"
            posts={[
              {
                title: 'Dhamma Khetta means "field of Dhamma"',
                href: "/t/dhamma-khetta",
                excerpt:
                  "The land-naming system kalyana breaks, decoded from Pariyatti's center list.",
                tag: "Language",
              },
              {
                title: "What vipassana means",
                href: "/guide/vipassana-meaning",
                excerpt:
                  "The word vipassana decoded, the same way this page decodes kalyana.",
                tag: "Language",
              },
              {
                title: "Practice buddy matching",
                href: "/t/practice-buddy",
                excerpt:
                  "The kalyana-mitta idea made practical: paired with one other meditator for daily accountability.",
                tag: "Community",
              },
            ]}
          />
        </div>

        <p className="mt-12 text-sm text-zinc-500">
          I am a fellow practitioner sharing notes on language and history, not
          a teacher, and not affiliated with the Dhamma Kalyana center or any
          center. For the technique itself, and for anything about sitting a
          course, the authoritative sources are{" "}
          <a
            href={TRADITION}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline underline-offset-2"
          >
            dhamma.org
          </a>{" "}
          and an authorized assistant teacher at a 10-day course.
        </p>
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING}
        site="Vipassana"
        description="Weighing how to keep a daily practice alive? Book a peer call."
      />
    </article>
  );
}
