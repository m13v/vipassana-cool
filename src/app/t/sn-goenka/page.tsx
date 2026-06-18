import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  FlowDiagram,
  AnimatedBeam,
  ProofBanner,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/sn-goenka";
const PUBLISHED = "2026-06-18";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title: "Who was S.N. Goenka? The man you only ever meet as a recording",
  description:
    "S.N. Goenka (1924–2013) was a Burmese-born Indian businessman who became the most widely known lay teacher of Vipassana. The strange part most biographies skip: he died in 2013, yet every student at 200+ centers still meets him only as recordings made in the 1990s. A practitioner's biography after 6 courses.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Who was S.N. Goenka? The man you only ever meet as a recording",
    description:
      "Satya Narayan Goenka, 1924 to 2013: businessman, migraine sufferer, then the lay teacher who put Vipassana in 200+ countries. Why nobody alive teaches his course, and the recordings still do.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Who was S.N. Goenka?",
    description:
      "A businessman with migraines who became the most recorded meditation teacher of the 20th century. Written after sitting 6 of his courses.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "S.N. Goenka" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "S.N. Goenka", url: PAGE_URL },
];

const faqs: FaqItem[] = [
  {
    q: "Who was S.N. Goenka?",
    a: "Satya Narayan Goenka (30 January 1924 to 29 September 2013) was a Burmese-born Indian businessman who became the most widely known lay teacher of Vipassana meditation. He learned the technique over 14 years from Sayagyi U Ba Khin in Burma, moved to India in 1969, and went on to establish a global network of donation-only centers where ten-day residential courses are taught the same way at every location.",
  },
  {
    q: "How do you pronounce and spell his name?",
    a: "It is spelled Goenka, pronounced roughly GO-en-kah, and his full name was Satya Narayan Goenka. Students often refer to him as Goenkaji, where the suffix ji is a mark of respect in Hindi. The initials S.N. stand for Satya Narayan. You will also see Satyanarayan written as one word.",
  },
  {
    q: "Was S.N. Goenka a Buddhist or a Hindu?",
    a: "He was born into a Hindu family in the Burmese Indian community and was raised Hindu. He always presented the meditation he taught as non-sectarian rather than as a religion to convert to, and he asked students not to abandon their own background. His own framing was that the practice is universal and open to people of any religion or none. For the linguistic and historical roots of the word itself, the guide on what Vipassana means goes deeper.",
  },
  {
    q: "Is S.N. Goenka still alive, and who teaches now?",
    a: "He died on 29 September 2013 in Mumbai at age 89. No single successor was named. Courses are now conducted by unpaid, rotating assistant teachers who play standardized audio and video recordings of Goenka's own instructions, discourses, and chanting. So the person guiding a course today is an assistant teacher, but the teaching voice is still Goenka's recording.",
  },
  {
    q: "Why do students listen to recordings of someone who has died?",
    a: "The Vipassana Research Institute explains it as a way to keep the teaching uniform. Once Goenka stopped conducting every course in person, he had his instructions, discourses, and chanting recorded so that every center, in every language, delivers the same course rather than a local teacher's interpretation. The recordings predate his death; they were already the standard while he was alive.",
  },
  {
    q: "How much does a course in his tradition cost?",
    a: "Nothing. There is no charge for the teaching, the food, or the lodging. The tradition runs on voluntary donations, and only people who have already completed a course are invited to give, so a first course is funded by old students who sat before you. This donation-only model was one of the structural choices Goenka is most remembered for.",
  },
  {
    q: "Can this page or any website teach me his technique?",
    a: "No. The technique is only ever taught in person, by an authorized teacher, inside a ten-day course. Nothing here, and nothing on any website, substitutes for that. For anything about how the practice actually works, or to find a course, the honest answer is dhamma.org and the teacher you meet on Day 0.",
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
                "Who was S.N. Goenka? The man you only ever meet as a recording",
              description:
                "A biography of S.N. Goenka (1924–2013), the Burmese-born Indian businessman who became the best-known lay teacher of Vipassana, built around the fact that students today encounter him only through recordings.",
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
          __html: JSON.stringify(faqPageSchema(faqs, PAGE_URL)),
        }}
      />

      <div className="max-w-3xl mx-auto px-6 pt-10">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero */}
      <header className="max-w-3xl mx-auto px-6 pt-8 pb-2">
        <p className="text-sm font-medium text-teal-700 uppercase tracking-wide mb-3">
          Who was S.N. Goenka
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight">
          The most recorded meditation teacher of the last century
        </h1>
        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          He was a Burmese businessman who got crippling migraines, sat a course
          to fix them, and ended up with his voice playing in meditation halls on
          six continents. He died in 2013. The recordings did not. I have sat six
          of his courses and never once met the man, only the recording, which is
          exactly how he wanted it.
        </p>
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="7 min read"
          className="mt-6 !mx-0 !px-0"
        />
      </header>

      {/* Direct answer */}
      <section className="max-w-3xl mx-auto px-6 my-8">
        <div className="rounded-xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer (verified 18 June 2026)
          </p>
          <p className="mt-2 text-zinc-800 leading-relaxed">
            <strong className="text-zinc-900">
              Satya Narayan Goenka (30 January 1924 to 29 September 2013)
            </strong>{" "}
            was a Burmese-born Indian businessman who, after fourteen years
            studying under Sayagyi U Ba Khin, became the most widely known lay
            teacher of Vipassana meditation. He moved to India in 1969 and built
            a worldwide network of donation-only centers that teach a ten-day
            residential course. He held no monastic title, took no payment, and
            named no successor.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Sources:{" "}
            <a
              href="https://en.wikipedia.org/wiki/S._N._Goenka"
              className="text-teal-700 underline"
            >
              Wikipedia
            </a>{" "}
            and the{" "}
            <a
              href="https://www.vridhamma.org/S.N.-Goenka"
              className="text-teal-700 underline"
            >
              Vipassana Research Institute
            </a>
            .
          </p>
        </div>
      </section>

      {/* The man before the voice */}
      <section className="max-w-3xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-bold text-zinc-900 mb-3">
          The man before the voice
        </h2>
        <p className="text-zinc-700 leading-relaxed">
          Goenka was born in Mandalay, in what was then British Burma, into an
          Indian Hindu merchant family. He was not raised in a spiritual tradition.
          He was raised in business, and he was good at it. By his thirties he was
          a successful industrialist and a leader of the Burmese Indian community.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          What changed his life was not a vision or a calling. It was a headache.
          Around 1955 he developed severe, debilitating migraines that medicine
          could not touch. A friend suggested he meet a meditation teacher named
          Sayagyi U Ba Khin, a senior Burmese civil servant who taught lay people
          on the side. Goenka was reluctant; he came partly to be rid of the pain.
          U Ba Khin took him on as a student, and Goenka stayed for fourteen years.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          When Burma&apos;s military government nationalized private business,
          Goenka&apos;s commercial life in the country effectively ended. In 1969
          he received authorization from U Ba Khin to teach, left his business to
          his family, and moved to India. U Ba Khin died in 1971, never having
          seen India himself, but having sent his most well-known student to carry
          the practice back to the country it originally came from.
        </p>
      </section>

      {/* Lineage flow */}
      <section className="max-w-3xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-bold text-zinc-900 mb-2">
          The chain he came from
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-6">
          Goenka never claimed to invent anything. He described himself as one
          link in a chain of householder teachers in Burma who, by the tradition&apos;s
          own account, preserved the practice across generations. The names below
          are the lineage as the tradition tells it.
        </p>
        <FlowDiagram
          title="The U Ba Khin lineage as the tradition tells it"
          steps={[
            {
              label: "Ledi Sayadaw",
              detail:
                "A Burmese monk and scholar (1846 to 1923) credited with making the practice accessible to lay people.",
            },
            {
              label: "Saya Thetgyi",
              detail:
                "A farmer and lay student of Ledi Sayadaw who became a teacher himself.",
            },
            {
              label: "Sayagyi U Ba Khin",
              detail:
                "A senior Burmese civil servant and Goenka's teacher for fourteen years.",
            },
            {
              label: "S.N. Goenka",
              detail:
                "Authorized to teach in 1969; carried the practice from Burma to India and then worldwide.",
            },
          ]}
        />
      </section>

      {/* How the courses spread */}
      <section className="max-w-3xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-bold text-zinc-900 mb-3">
          How one course became hundreds of centers
        </h2>
        <p className="text-zinc-700 leading-relaxed">
          The first course in India ran in Mumbai in July 1969, with the help of
          his family. For the first years there were no centers at all; courses
          happened wherever a hall could be borrowed. In 1976 the first permanent
          center, Dhamma Giri, opened in Igatpuri, near Nashik in Maharashtra. The
          ten-day course took the shape it still has, and that shape was never
          materially changed afterward.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The most consequential decision came in 1982, when Goenka began
          appointing assistant teachers. Courses would no longer depend on him
          being in the room. Unpaid, rotating volunteers would run them, which
          meant no single charismatic figure was structurally necessary anywhere.
          By the 1990s the discourses and instructions were recorded so that every
          center, in every language, ran the identical course.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Public recognition followed without him chasing it. In 2000 he addressed
          the Millennium World Peace Summit at the United Nations and laid the
          foundation of the Global Vipassana Pagoda near Mumbai, which opened in
          2009. In 2012 the Indian government awarded him the Padma Bhushan, the
          country&apos;s third-highest civilian honour. He died the following year,
          on 29 September 2013, in Mumbai, at age 89. His wife Ilaichi Devi Goenka,
          who taught alongside him, died in 2021. No successor was appointed for
          either of them. If you want the longer argument about why a teaching this
          centered on one figure did not collapse into a personality cult after he
          died, the{" "}
          <Link href="/t/goenka-cult" className="text-teal-700 underline">
            piece on the &quot;Goenka cult&quot; question
          </Link>{" "}
          takes that apart in detail.
        </p>
      </section>

      {/* Anchor: the recording */}
      <section className="max-w-3xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-bold text-zinc-900 mb-3">
          You will never meet S.N. Goenka
        </h2>
        <p className="text-zinc-700 leading-relaxed">
          This is the part almost every biography of him leaves out, and it is the
          single most distinctive thing about how he is encountered today. Nobody
          alive delivers the discourse on his ten-day course. Every evening of
          every course, at more than two hundred centers, students hear the same
          recorded voice: Goenka&apos;s instructions, his evening talks, and his
          chanting, captured decades ago and never re-recorded by anyone else.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The Vipassana Research Institute describes the reason plainly. Once
          Goenka could no longer conduct every course in person, a complete set of
          audio and video recordings was made to capture the entire ten-day course,
          and assistant teachers now conduct courses using those recordings. The
          point was uniformity: a course in California and a course in Bihar should
          be the same course, not one teacher&apos;s version of it.
        </p>
        <div className="my-8">
          <AnimatedBeam
            title="One recorded voice, every course"
            from={[
              { label: "Recorded instructions" },
              { label: "Recorded discourses" },
              { label: "Recorded chanting" },
            ]}
            hub={{ label: "S.N. Goenka", sublabel: "the only teaching voice" }}
            to={[
              { label: "200+ centers worldwide" },
              { label: "Courses run since 2013" },
              { label: "Students who never met him" },
            ]}
          />
        </div>
        <ProofBanner
          metric="200+"
          quote="To maintain the uniformity of the teaching, he decided they would use recordings of his own instructions, discourses and chanting."
          source="Vipassana Research Institute, &ldquo;Recording the Teaching&rdquo; (vridhamma.org)"
        />
        <p className="mt-6 text-zinc-700 leading-relaxed">
          So when people ask whether Goenka is still alive, the honest answer is
          layered. The man died in 2013. The voice did not. A first-time student
          walking into a course in 2026 will spend ten days with a teacher who has
          been dead for over a decade, and most of them do not find that strange by
          the end, because the instruction is the same one he gave when he was
          breathing.
        </p>
      </section>

      {/* First-party reflection */}
      <section className="max-w-3xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-bold text-zinc-900 mb-3">
          What it is like to know a teacher only as a recording
        </h2>
        <p className="text-zinc-700 leading-relaxed">
          I am not a teacher, and I am not an authority on any of this. I am a
          student who has sat six ten-day courses at three centers and served at
          courses for more than forty days, and I have kept a daily sit going for
          over a thousand days now. Across all of that, I have never met Goenka.
          He was already gone before my first course. I have only ever met the
          recording, the same one everyone else hears.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          What surprised me is how little that matters in practice, and how much
          it tells you about the man. There is no senior figure to impress, no
          living teacher whose attention you compete for, no charisma to get
          swept up in. The recordings have a texture you come to know course after
          course: the Hindi-accented English, the long pauses, the chanting that
          opens and closes the day. By the third or fourth course it stops feeling
          like a video of a dead man and starts feeling like the most ordinary
          thing in the world, which is, I think, the whole point. He built it so
          that nothing depended on him being in the room.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          If you are trying to understand who this man was, that is the lens I
          would offer that you will not find in the encyclopedia entry: he spent
          forty years making himself structurally unnecessary, and the recordings
          are the proof that it worked. For what actually happens across those ten
          days at a logistics level, the{" "}
          <Link
            href="/t/10-day-course-structure"
            className="text-teal-700 underline"
          >
            breakdown of the ten-day course structure
          </Link>{" "}
          is the place to start, and{" "}
          <Link href="/guide/dhamma-service" className="text-teal-700 underline">
            dhamma service
          </Link>{" "}
          is how a lot of us stayed connected after the first course.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-4">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Sat one of his courses and lost the daily habit?"
          description="Get paired with another old student for daily-sit accountability, the thing that is hardest to keep once you leave the center."
        />
      </section>

      <FaqSection items={faqs} />

      <section className="max-w-3xl mx-auto px-6 py-8">
        <RelatedPostsGrid
          title="Keep reading"
          subtitle="The tradition, the words, and the practice behind the man"
          posts={[
            {
              title: "Goenka cult? A structural look at the question",
              href: "/t/goenka-cult",
              tag: "Tradition",
              excerpt:
                "Why a teaching this centered on one figure survived his death with no successor and no schism.",
            },
            {
              title: "What does Vipassana actually mean?",
              href: "/guide/vipassana-meaning",
              tag: "Language",
              excerpt:
                "The roots of the word itself, treated as a linguistic note rather than a how-to.",
            },
            {
              title: "Anapana and Vipassana, explained",
              href: "/guide/anapana-and-vipassana-explained",
              tag: "Context",
              excerpt:
                "The two terms you hear most often in this tradition, as background, not instruction.",
            },
          ]}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Sat a course or about to? Get matched with a daily practice buddy."
      />
    </article>
  );
}
