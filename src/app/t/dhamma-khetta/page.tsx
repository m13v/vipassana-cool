import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ProofBanner,
  RelatedPostsGrid,
  GradientText,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/dhamma-khetta";
const PUBLISHED = "2026-06-24";
const BOOKING = "https://cal.com/team/mediar/vipassana";

const CENTRE_HOME = "https://www.khetta.dhamma.org/";
const PARIYATTI_LIST =
  "https://host.pariyatti.org/treasures/Vipassana_Centers.pdf";
const GIRI_NAME = "https://www.vridhamma.org/Dhamma-Giri-The-Hill-of-Dhamma";
const MAHAVANA_NAME =
  "https://www.vridhamma.org/Dhamma-Mahavana-Great-Woods-of-Dhamma";
const TRADITION = "https://www.dhamma.org/";

export const metadata: Metadata = {
  title: 'Dhamma Khetta Meaning: It Is Pali for "Field of Dhamma"',
  description:
    'Dhamma Khetta is Pali for "field of Dhamma" (dhamma = the teaching, khetta = field). It is also the proper name of the first center in the S.N. Goenka Vipassana tradition, founded September 1976 near Hyderabad. Here is the word decoded and the full naming system every center follows. Verified 2026-06-24.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Dhamma Khetta: "Field of Dhamma," and the First Center',
    description:
      'The name decoded: khetta means "field." Plus the tradition-wide naming pattern where every center is "Dhamma + a word for a kind of land." Verified 2026-06-24.',
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Dhamma Khetta means "field of Dhamma"',
    description:
      'Khetta is Pali for "field." Dhamma Khetta is the first Vipassana center in the Goenka tradition (Hyderabad, Sept 1976). The name decoded, with the full naming system.',
  },
};

// Center names + literal meanings, transcribed from Pariyatti's official
// "Vipassana Centers" reference list (host.pariyatti.org). Grouped to show the
// land/terrain family that "khetta" (field) belongs to.
const LAND_NAMES: { name: string; meaning: string }[] = [
  { name: "Dhamma Giri", meaning: "Hill of Dhamma" },
  { name: "Dhamma Khetta", meaning: "Field of Dhamma" },
  { name: "Dhamma Bhūmi", meaning: "Terrain of Dhamma" },
  { name: "Dhamma Mahī", meaning: "Ground of Dhamma" },
  { name: "Dhamma Medinī", meaning: "Earth, Ground of Dhamma" },
  { name: "Dhamma Dharā", meaning: "Land of Dhamma" },
  { name: "Dhamma Dīpa", meaning: "Island of Dhamma" },
  { name: "Dhamma Mahāvana", meaning: "Forest of Dhamma" },
  { name: "Dhamma Kānana", meaning: "Forest of Dhamma" },
  { name: "Dhamma Kuñja", meaning: "Grove of Dhamma" },
  { name: "Dhamma Pattana", meaning: "Port of Dhamma" },
  { name: "Dhamma Sindhu", meaning: "Ocean of Dhamma" },
  { name: "Dhamma Salila", meaning: "Water of Dhamma" },
  { name: "Dhamma Setu", meaning: "Bridge of Dhamma" },
  { name: "Dhamma Acala", meaning: "Mountain of Dhamma" },
];

const FAQS: FaqItem[] = [
  {
    q: "What does Dhamma Khetta mean?",
    a: 'It is two Pali words. "Dhamma" is the teaching, the truth, the law of nature as the tradition uses the word. "Khetta" means field. Put together, Dhamma Khetta reads as "field of Dhamma." The same word khetta appears in the classical Buddhist phrase puññakkhetta, a "field of merit," where a field is the fertile ground that returns a harvest to whoever cultivates it. So the name is not just decorative; it carries the older sense of ground that bears fruit.',
  },
  {
    q: "Is Dhamma Khetta a word or a place?",
    a: "Both, and that is the source of most of the confusion online. As ordinary Pali, dhamma khetta is a common noun phrase meaning a field of Dhamma. As a proper noun it is the name of one specific meditation center, the Vipassana International Meditation Centre near Hyderabad, which was the first center in the S.N. Goenka tradition. If you searched the two words and landed on an address, that is why.",
  },
  {
    q: "Why is the Hyderabad center named the field rather than something grander?",
    a: "Because it was the first. The first ten-day course in this tradition ran there in September 1976, on land a Hyderabad businessman named Ratilal Mehta offered after sitting courses with S.N. Goenka. Every later center grew from that beginning. A field is the place you sow first and harvest from, which fits a center that became the seed plot for hundreds that followed. The tradition has been giving its centers land-and-terrain names ever since.",
  },
  {
    q: "Do all Vipassana centers have names like this?",
    a: 'Yes. Every center in the Goenka tradition is named "Dhamma" followed by a second word, and the second word is almost always a feature of land or landscape: Dhamma Giri is "Hill of Dhamma," Dhamma Khetta is "Field of Dhamma," Dhamma Dīpa is "Island of Dhamma," Dhamma Sindhu is "Ocean of Dhamma." Pariyatti, the tradition\'s publishing house, keeps a public list of the centers with their literal meanings. Once you see the pattern you can read most center names at a glance.',
  },
  {
    q: "How is Dhamma Khetta spelled and pronounced?",
    a: 'You will see it written Dhamma Khetta, Dhammakhetta, or Dhamma Kshetra (the Sanskrit-flavored spelling). They point to the same place and the same idea. Khetta is the Pali form; kshetra is its Sanskrit cousin, and both mean field. The "kh" is an aspirated k, and the double "tt" is held slightly, roughly khet-ta.',
  },
  {
    q: "Where is the Dhamma Khetta center and how do I register for a course?",
    a: "The center publishes its address as 12.6 km Ibrahimpatnam Road, Gurramguda Bus Stop, Hyderabad, Telangana 500070, India. Courses are free and registration is online through the official schedule. This page is about the name and its meaning; for the address details, directions, and the apply link, the operational pages are the right place, and the authoritative source is the center's own site at khetta.dhamma.org.",
  },
  {
    q: "Is this page teaching the meditation technique?",
    a: "No. This is a note on language and naming, not instruction. The technique is taught only inside a 10-day residential course by an authorized teacher. For anything about how the practice actually works, the right places are dhamma.org and an assistant teacher at a course, not an article.",
  },
];

export default function Page() {
  const jsonLd = [
    articleSchema({
      headline: 'Dhamma Khetta Meaning: Pali for "Field of Dhamma"',
      description:
        'Dhamma Khetta is Pali for "field of Dhamma." It is also the name of the first center in the S.N. Goenka Vipassana tradition (Hyderabad, September 1976). The word decoded, plus the tradition-wide center naming system.',
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
      { name: "Dhamma Khetta", url: PAGE_URL },
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
            { label: "Dhamma Khetta" },
          ]}
        />

        <header className="mt-6">
          <p className="text-sm font-medium uppercase tracking-wide text-teal-600">
            Linguistic note
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Dhamma Khetta means{" "}
            <GradientText variant="teal">field of Dhamma</GradientText>
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            Two Pali words. One is a place near Hyderabad. The other is the
            quiet logic behind why every Vipassana center in this tradition is
            named after a piece of land.
          </p>
          <div className="mt-5">
            <ArticleMeta
              author="Matthew Diakonov"
              authorRole="Written with AI"
              datePublished={PUBLISHED}
              readingTime="6 min read"
            />
          </div>
        </header>

        {/* Direct answer */}
        <section
          aria-label="Direct answer"
          className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer · verified 2026-06-24
          </p>
          <p className="mt-3 text-zinc-800">
            <strong>Dhamma Khetta</strong> is Pali for{" "}
            <strong>&ldquo;field of Dhamma.&rdquo;</strong> <em>Dhamma</em> is
            the teaching, the truth, the law of nature as this tradition uses
            the word; <em>khetta</em> means <em>field</em>. It is also the
            proper name of one specific place: the Vipassana International
            Meditation Centre near Hyderabad, which was the{" "}
            <strong>first center</strong> in the S.N. Goenka tradition, with its
            first 10-day course in <strong>September 1976</strong>.
          </p>
          <p className="mt-3 text-sm text-zinc-600">
            Source for the translation and the center:{" "}
            <a
              href={CENTRE_HOME}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              khetta.dhamma.org
            </a>{" "}
            and Pariyatti&rsquo;s published center list.
          </p>
        </section>

        {/* Decode the compound */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Decoding the two words
          </h2>
          <p className="mt-4 text-zinc-700">
            The confusion most people hit is that &ldquo;dhamma khetta&rdquo;
            works on two levels at once. As ordinary Pali it is a common phrase.
            As a proper noun it is a specific center. The phrase came first, and
            the center took its name from it.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <p className="font-mono text-lg font-semibold text-zinc-900">
                dhamma
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                The teaching, the truth, the law of nature. In this tradition
                the word points to the way things actually are, not to a
                religion or a creed.
              </p>
            </div>
            <div className="rounded-xl border border-teal-200 bg-teal-50 p-5">
              <p className="font-mono text-lg font-semibold text-zinc-900">
                khetta
              </p>
              <p className="mt-2 text-sm text-zinc-700">
                A field. In classical Buddhist Pali the same word carries the
                sense of a <em>fertile</em> field, the ground that returns a
                harvest to whoever works it.
              </p>
            </div>
          </div>

          <p className="mt-6 text-zinc-700">
            That second nuance is the part the address listings never mention.
            The word <em>khetta</em> shows up in the old phrase{" "}
            <span className="font-medium text-zinc-900">puññakkhetta</span>, a
            &ldquo;field of merit.&rdquo; The image is agricultural: a field is
            not a monument you admire, it is ground you cultivate, and what you
            put in is what comes back. Read that way, Dhamma Khetta is less
            &ldquo;a property in Telangana&rdquo; and more &ldquo;the ground
            where Dhamma is grown.&rdquo;
          </p>

          <p className="mt-4 text-zinc-700">
            You will also see the name spelled{" "}
            <span className="font-medium text-zinc-900">Dhammakhetta</span> or,
            in its Sanskrit-flavored form,{" "}
            <span className="font-medium text-zinc-900">Dhamma Kshetra</span>.
            Khetta is the Pali; kshetra is its Sanskrit cousin. Same field.
          </p>
        </section>

        <div className="mt-12">
          <ProofBanner
            metric="Sept 1976"
            quote="Dhamma Khetta was the first center to run a course in this tradition. A field is the ground you sow first and harvest from, which fits the center that became the seed plot for every center that followed."
            source="First 10-day course held September 1976, near Hyderabad"
          />
        </div>

        {/* The naming system */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Why the name is &ldquo;field&rdquo; and not something grander
          </h2>
          <p className="mt-4 text-zinc-700">
            Here is the detail that makes the name click. Every center in the
            Goenka tradition is named{" "}
            <span className="font-medium text-zinc-900">Dhamma</span> plus one
            more word, and that second word is almost always a feature of
            land: a hill, an island, a forest, a port, an ocean. Khetta, the
            field, is simply the land-word that the first center received.
          </p>
          <p className="mt-4 text-zinc-700">
            Pariyatti, the tradition&rsquo;s own publishing house, keeps a
            public list that translates each center name. Pull out just the
            ones named after terrain and the pattern is obvious. Dhamma Khetta
            sits inside a whole family of land:
          </p>

          <div className="mt-6 overflow-hidden rounded-xl border border-zinc-200">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-zinc-50 text-zinc-500">
                  <th className="px-4 py-3 font-semibold">Center name (Pali)</th>
                  <th className="px-4 py-3 font-semibold">Literal meaning</th>
                </tr>
              </thead>
              <tbody>
                {LAND_NAMES.map((row) => {
                  const isKhetta = row.name === "Dhamma Khetta";
                  return (
                    <tr
                      key={row.name}
                      className={
                        isKhetta
                          ? "border-t border-teal-200 bg-teal-50"
                          : "border-t border-zinc-200 bg-white"
                      }
                    >
                      <td
                        className={
                          "px-4 py-3 " +
                          (isKhetta
                            ? "font-semibold text-teal-800"
                            : "font-medium text-zinc-900")
                        }
                      >
                        {row.name}
                      </td>
                      <td
                        className={
                          "px-4 py-3 " +
                          (isKhetta ? "text-teal-800" : "text-zinc-600")
                        }
                      >
                        {row.meaning}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-zinc-500">
            Names and meanings transcribed from Pariyatti&rsquo;s published
            center list ({""}
            <a
              href={PARIYATTI_LIST}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-zinc-700"
            >
              host.pariyatti.org
            </a>
            ). The full list runs to hundreds of centers; this is the
            land-and-terrain subset.
          </p>

          <p className="mt-6 text-zinc-700">
            Once you have the key, most center names read themselves.{" "}
            <a
              href={GIRI_NAME}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              Dhamma Giri
            </a>{" "}
            in Igatpuri is the &ldquo;Hill of Dhamma.&rdquo;{" "}
            <a
              href={MAHAVANA_NAME}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              Dhamma Mahāvana
            </a>{" "}
            in California is the great woods, the forest. Dhamma Khetta is the
            field. The names are not branding picked by a marketing team; they
            are Pali descriptions of ground, handed out one center at a time.
          </p>
        </section>

        {/* What the field grew into */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            The first field
          </h2>
          <p className="mt-4 text-zinc-700">
            There is a reason the very first center got the word for field. In
            1975 a Hyderabad businessman named Ratilal Mehta, after sitting
            courses with S.N. Goenka, offered land of his own so that courses
            could be held in one fixed place rather than in rented halls. The
            first course on that land ran in September 1976. It was the first
            time this tradition had a center of its own anywhere in the world.
          </p>
          <p className="mt-4 text-zinc-700">
            A field is where you sow first. Everything else, the hundreds of
            centers on six continents that now carry their own land-names, grew
            out from that one. So &ldquo;field of Dhamma&rdquo; is not a soft
            poetic label. It is almost literal: this was the plot of ground the
            modern tradition started from, and the name records that.
          </p>
          <p className="mt-4 text-zinc-700">
            I have sat six courses myself, none of them at Dhamma Khetta, but
            the layout you would recognize there, a hall paired with a pagoda of
            small individual cells, is the same shape repeated at the centers I
            have sat at in California and on the East Coast. That repeated shape
            is part of what it means that this was the first field.
          </p>
        </section>

        <BookCallCTA
          appearance="footer"
          destination={BOOKING}
          site="Vipassana"
          heading="Curious about the practice the name points at?"
          description="If decoding the name is really you circling whether to sit a 10-day course, book a short call and I will share what helped me, peer to peer, before you apply through the official schedule."
        />

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Common questions about the name
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
                title: "The Vipassana center in Hyderabad is Dhamma Khetta",
                href: "/t/vipassana-meditation-center-hyderabad",
                excerpt:
                  "Address, directions, course cost, and the online registration link for the first center.",
                tag: "Center",
              },
              {
                title: "Where to see real photos of Dhamma Khetta",
                href: "/t/dhamma-khetta-vipassana-international-meditation-centre-photos",
                excerpt:
                  "The official images of the first center, and what each hall, pagoda, and grounds shot is actually showing.",
                tag: "Photos",
              },
              {
                title: "What Vipassana means",
                href: "/guide/vipassana-meaning",
                excerpt:
                  "The word vipassana decoded, the same way this page decodes khetta.",
                tag: "Language",
              },
            ]}
          />
        </div>

        <p className="mt-12 text-sm text-zinc-500">
          I am a fellow practitioner sharing notes on language and history, not
          a teacher and not affiliated with Dhamma Khetta or any center. For the
          technique itself, and for anything about sitting a course, the
          authoritative sources are{" "}
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
        description="Weighing a first course? Book a peer call before you apply."
      />
    </article>
  );
}
