import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  IntegrationsGrid,
  BeforeAfter,
  AnimatedChecklist,
  Marquee,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/where-to-find-meditation-guides";
const PUBLISHED = "2026-06-24";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title: "Where to Find Meditation Guides (by What You Actually Want)",
  description:
    "A map of where meditation guides actually live, sorted by what you want: free written libraries, guided-audio apps, free teacher libraries, and in-person courses. Plus the one honest caveat the app roundups leave out.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Where to Find Meditation Guides (by What You Actually Want)",
    description:
      "Most lists hand you ten apps. This one sorts guides by the kind of help you need, and tells you the one tradition where no online guide exists at all.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where to Find Meditation Guides",
    description:
      "Free written libraries, audio apps, teacher libraries, in-person courses. Sorted by what you actually want, with the caveat the roundups skip.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Where to Find Meditation Guides" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Where to Find Meditation Guides", url: PAGE_URL },
];

const faqs: FaqItem[] = [
  {
    q: "Where can I find free meditation guides?",
    a: "Free written guides live in curated libraries and on teacher and university sites. UCLA Mindful and Mindful.org both publish free guided sessions and written walkthroughs, Insight Timer hosts a very large free library of audio sessions, and this site keeps a free written library of 27 guides at /guide plus a directory of 200+ resources at /resources. None of these charge for the core material.",
  },
  {
    q: "What is the difference between a meditation guide and a guided meditation?",
    a: "A guided meditation is usually an audio track where a voice talks you through a session in real time. A meditation guide, in the written sense, is an article or reference that explains a topic so you can understand or prepare for a practice. Most of the pages that show up when you search this conflate the two and only list audio apps. If you want something to read rather than something to play, you want written guides, which are a separate category.",
  },
  {
    q: "Is there a single online guide that teaches Vipassana in the Goenka tradition?",
    a: "No, and this is the honest answer most roundups skip. The technique in the tradition of S.N. Goenka is transmitted only inside free ten-day residential courses by authorized assistant teachers. There is no online guide, app, video, or written walkthrough that teaches it, by design. For anything about how to practice, the correct place to go is dhamma.org and an authorized teacher at a course, not a guide on the internet.",
  },
  {
    q: "Are paid apps like Headspace better than free guides?",
    a: "Better is the wrong frame, because they answer different questions. Headspace and similar apps are polished, structured, and good for general relaxation, sleep, and a gentle on-ramp to mindfulness. Free teacher libraries and written guides are deeper on specific topics and cost nothing. If your goal is daily consistency rather than novelty, the bottleneck is usually a person to sit with, not a better app, which is a different problem from finding a guide.",
  },
  {
    q: "Where do experienced practitioners find guides after a course?",
    a: "Most stop looking for instructional guides entirely, because the instruction came from the course. What they look for instead is reflective writing on living with a daily practice: what changes over months and years, how to restart after a lapse, how to keep the practice from drifting. That is the gap this site's written library tries to fill, alongside the official network at dhamma.org for sittings and old-student events.",
  },
  {
    q: "How do I tell a trustworthy meditation guide from a bad one?",
    a: "Check who wrote it and whether they name a tradition. Be cautious with any source that promises to teach a specific lineage's technique online when that lineage reserves transmission for in-person courses. Prefer sources that are clear about what they are (relaxation, sleep, general mindfulness, or one named tradition) over sources that claim to teach everything to everyone. A good guide tells you where its limits are.",
  },
];

const articleLd = articleSchema({
  headline: "Where to Find Meditation Guides (by What You Actually Want)",
  description:
    "A categorized map of where meditation guides live, from free written libraries to guided-audio apps to in-person courses, with the one tradition where no online guide exists.",
  url: PAGE_URL,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: "Matthew Diakonov",
  authorUrl: "https://m13v.com",
  publisherName: "Vipassana.cool",
  publisherUrl: "https://vipassana.cool",
  articleType: "Article",
});

const breadcrumbLd = breadcrumbListSchema(breadcrumbSchemaItems);
const faqLd = faqPageSchema(faqs);

const resourceCategories = [
  "Official dhamma.org network",
  "Books & publications",
  "Documentaries & films",
  "Podcasts",
  "Research papers",
  "Apps & tools",
  "Blogs & personal accounts",
];

export default function Page() {
  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <div className="max-w-4xl mx-auto px-6 pt-10">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero */}
      <header className="max-w-4xl mx-auto px-6 pt-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">
          A practitioner&apos;s field note
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.08]">
          Where to find meditation guides, sorted by what you actually want
        </h1>
        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          Type this question into a search box and you get ten lists of the same apps. That is
          fine if you want a voice to talk you through a session tonight. It is useless if you
          wanted something to read, or if you are trying to go deeper than a sleep track. So
          here is the map I wish someone had handed me: the kinds of places guides actually live,
          what each kind is good for, and the one tradition where the honest answer is that no
          online guide exists at all.
        </p>
      </header>

      <div className="mt-7">
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="7 min read"
        />
      </div>

      {/* Direct answer */}
      <div className="max-w-4xl mx-auto px-6 mt-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">
            Direct answer &middot; verified June 24, 2026
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            Meditation guides cluster in <strong>four kinds of places</strong>, and which one you
            want depends on what &ldquo;guide&rdquo; means to you:
          </p>
          <ol className="mt-3 space-y-2 text-zinc-800 leading-relaxed list-decimal pl-5">
            <li>
              <strong>Free written libraries</strong> &mdash; articles you read, like this site&apos;s{" "}
              <Link href="/guide" className="text-teal-700 underline underline-offset-2">
                27-guide library
              </Link>{" "}
              and{" "}
              <Link href="/resources" className="text-teal-700 underline underline-offset-2">
                200+ resource directory
              </Link>
              .
            </li>
            <li>
              <strong>Guided-audio apps</strong> &mdash; a voice walks you through a session
              (Insight Timer, Headspace, Calm).
            </li>
            <li>
              <strong>Free teacher and university libraries</strong> &mdash; UCLA Mindful,
              Mindful.org, and similar.
            </li>
            <li>
              <strong>In-person courses</strong> &mdash; where some traditions transmit their
              method, and the only place a few of them ever will.
            </li>
          </ol>
          <p className="mt-3 text-sm text-zinc-600">
            The honest caveat the app lists leave out: for the{" "}
            <strong>Goenka Vipassana</strong> tradition, the technique is not in any online guide.
            It is taught only inside free ten-day courses booked at{" "}
            <a
              href="https://www.dhamma.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline underline-offset-2"
            >
              dhamma.org
            </a>
            . More on why below.
          </p>
        </div>
      </div>

      {/* The four kinds, as a directory */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900">The four places guides live</h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Almost every &ldquo;best meditation guides&rdquo; list collapses these into one bucket
          called apps. They are not one bucket. Pick the row that matches what you are actually
          after, then follow the link.
        </p>
        <div className="mt-8 text-teal-600">
          <IntegrationsGrid
            columns={4}
            items={[
              {
                name: "Free written libraries",
                initial: "W",
                description:
                  "Articles you read and reference. Good for understanding a topic or preparing, not for a voice in your ear. This site's library and resources page sit here.",
                href: "/resources",
              },
              {
                name: "Guided-audio apps",
                initial: "A",
                description:
                  "Insight Timer (very large free library), Headspace and Calm (polished, paid, structured). Good for relaxation, sleep, and a gentle start.",
                href: "https://insighttimer.com/meditation-topics",
              },
              {
                name: "Teacher & university libraries",
                initial: "T",
                description:
                  "UCLA Mindful and Mindful.org publish free guided sessions and written walkthroughs from named teachers. Credible, free, topic-deep.",
                href: "https://www.uclahealth.org/uclamindful/guided-meditations",
              },
              {
                name: "In-person courses",
                initial: "C",
                description:
                  "Where a tradition transmits its method directly. For the Goenka Vipassana lineage this is the only place the technique is taught, by design.",
                href: "https://www.dhamma.org/en-US/courses/search",
              },
            ]}
          />
        </div>
        <p className="mt-6 text-sm text-zinc-500">
          A general &ldquo;how to meditate&rdquo; written primer lives at{" "}
          <a
            href="https://www.mindful.org/how-to-meditate/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline underline-offset-2"
          >
            Mindful.org
          </a>{" "}
          if you want a neutral, tradition-agnostic starting point before you pick a lane.
        </p>
      </section>

      {/* Anchor fact: what's actually in this site's directory */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900">
          What a written library actually contains
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          To make this concrete, here is the inventory of the free directory on this site, because
          &ldquo;a library of guides&rdquo; is vague until you can count it. The{" "}
          <Link href="/resources" className="text-teal-700 underline underline-offset-2">
            resources page
          </Link>{" "}
          catalogs <strong>200+ resources across seven named categories</strong>, and the{" "}
          <Link href="/guide" className="text-teal-700 underline underline-offset-2">
            guide library
          </Link>{" "}
          holds <strong>27 written guides</strong>. The seven categories are not decorative; each
          one is a different kind of source you might be looking for.
        </p>
        <div className="mt-8 text-teal-600">
          <Marquee speed={28} pauseOnHover fade>
            {resourceCategories.map((cat) => (
              <span
                key={cat}
                className="mx-3 inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700 whitespace-nowrap"
              >
                {cat}
              </span>
            ))}
          </Marquee>
        </div>
        <p className="mt-6 text-zinc-700 leading-relaxed">
          The point is not that this directory is bigger than the others. It is that a written
          directory is searchable, free, and honest about its scope in a way an app store list of
          ten apps is not. You can see exactly what is inside before you commit an evening to it.
        </p>
      </section>

      {/* The differentiator: the one tradition with no online guide */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900">
          The one tradition where the answer is &ldquo;you can&apos;t&rdquo;
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          This is the part the roundups never tell you, and it is the reason I built a resource
          site rather than another app. In the Vipassana tradition of S.N. Goenka, the technique is
          transmitted only inside a free ten-day residential course, by authorized assistant
          teachers, in a specific sequence held in noble silence. There is no online guide that
          teaches it. Not a video, not an app, not a written walkthrough, not even on this site.
          That absence is deliberate, not an oversight.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          So when someone searches for a guide to this practice, the most useful thing a page can do
          is be clear about what it can and cannot give. It can give you history, context,
          preparation notes, and the reflective experience of people who have sat courses. It
          cannot teach you the method. For anything about how to practice, the right destination is{" "}
          <a
            href="https://www.dhamma.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline underline-offset-2"
          >
            dhamma.org
          </a>{" "}
          and an authorized teacher at a course.
        </p>

        <div className="mt-8 text-teal-600">
          <BeforeAfter
            title="What an online guide gives you vs. what a course gives you"
            before={{
              label: "An online guide / app",
              content:
                "Useful for general mindfulness, sleep, and relaxation. Available instantly, on your phone, for free or a subscription.",
              highlights: [
                "Talks you through a generic session tonight",
                "Tradition-agnostic, no commitment",
                "Cannot transmit a specific lineage's method",
                "No teacher to ask when something surfaces",
              ],
            }}
            after={{
              label: "A ten-day Goenka course",
              content:
                "The only place the technique in this tradition is taught. Free, residential, in noble silence, with authorized teachers present.",
              highlights: [
                "Method transmitted in a structured sequence",
                "An authorized teacher answers your questions",
                "Funded entirely by donation, no charge",
                "Booked at dhamma.org, not findable as a download",
              ],
            }}
          />
        </div>
        <p className="mt-6 text-zinc-700 leading-relaxed">
          I am not a teacher, just a practitioner who has sat six of these courses. If you want the
          longer version of why this tradition draws that line, the guide on{" "}
          <Link
            href="/guide/anapana-and-vipassana-explained"
            className="text-teal-700 underline underline-offset-2"
          >
            how the two techniques fit together
          </Link>{" "}
          and the one on{" "}
          <Link
            href="/guide/vipassana-vs-other-meditation"
            className="text-teal-700 underline underline-offset-2"
          >
            how it differs from other forms of meditation
          </Link>{" "}
          both treat it as context, never as instruction.
        </p>
      </section>

      {/* Vetting a source */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900">How to vet a guide before you trust it</h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The web is full of pages that promise to teach you a named lineage&apos;s method in five
          minutes. A few quick checks tell you whether a source is worth your attention or is just
          repackaging someone else&apos;s tradition without permission.
        </p>
        <div className="mt-8 text-teal-600">
          <AnimatedChecklist
            title="Signals of a trustworthy guide source"
            items={[
              { text: "It names who wrote it and what tradition, if any, they practice", checked: true },
              { text: "It is clear about its scope: relaxation, sleep, general mindfulness, or one named lineage", checked: true },
              { text: "It does not promise to teach a method that the lineage reserves for in-person courses", checked: true },
              { text: "It points you to the official source for the actual practice rather than substituting for it", checked: true },
              { text: "Free written material is searchable and dated, not gated behind a vague paywall", checked: true },
            ]}
          />
        </div>
      </section>

      {/* If consistency is the real problem */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900">
          If you already have a guide and still aren&apos;t sitting
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Worth saying plainly, because it is the most common reason people keep searching: a lot of
          the time the missing piece is not a better guide. People with a shelf of guides and three
          apps still skip the cushion. After a course the instruction is already there; what tends to
          be missing is a person to sit with and a reason to show up on the days motivation is gone.
          That is a different problem from finding a guide, and a different fix.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          On this site that fix is the{" "}
          <Link href="/practice-buddy" className="text-teal-700 underline underline-offset-2">
            practice buddy program
          </Link>
          , which pairs meditators for daily accountability, and the reflective guides on{" "}
          <Link href="/guide/daily-practice" className="text-teal-700 underline underline-offset-2">
            keeping a daily practice
          </Link>{" "}
          and{" "}
          <Link
            href="/guide/restarting-your-practice"
            className="text-teal-700 underline underline-offset-2"
          >
            restarting after a lapse
          </Link>
          . None of that is technique instruction. It is the scaffolding around the practice, which
          is the part guides usually forget to cover.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6 mt-14">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Not sure which kind of guide you actually need?"
          description="Book a short call and I'll point you to the right resource, or to a practice buddy if consistency is the real bottleneck."
        />
      </div>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-6">Common questions</h2>
        <FaqSection items={faqs} />
      </section>

      {/* Related */}
      <section className="max-w-4xl mx-auto px-6 mt-14 mb-8">
        <RelatedPostsGrid
          title="Keep reading"
          posts={[
            {
              title: "How to use dhamma.org",
              href: "/guide",
              excerpt: "A walkthrough of the official site: finding a center, choosing a course, and applying.",
              tag: "Guide",
            },
            {
              title: "Daily practice at home",
              href: "/guide/daily-practice",
              excerpt: "Keeping a practice alive after a course, without turning it into instruction.",
              tag: "Guide",
            },
            {
              title: "200+ curated resources",
              href: "/resources",
              excerpt: "Books, documentaries, podcasts, research, apps, and blogs across seven categories.",
              tag: "Directory",
            },
          ]}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Find the right meditation guide, or a practice buddy for daily accountability."
      />
    </article>
  );
}
