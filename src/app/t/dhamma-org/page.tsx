import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ProofBanner,
  FlowDiagram,
  IntegrationsGrid,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/dhamma-org";
const PUBLISHED = "2026-05-23";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "dhamma.org: what it is, the subdomain map, and what every center URL means",
  description:
    "dhamma.org is the official global portal for Vipassana meditation in the S. N. Goenka tradition. Each meditation center has its own subdomain (manda.dhamma.org, mahavana.dhamma.org, santosa.dhamma.org). This page maps the subdomain network, the related Vipassana Research Institute domain (vridhamma.org), and the course search at dhamma.org/en-US/courses/search. Verified against the sites on 2026-05-23. Notes from six courses across three of these centers.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "dhamma.org and its subdomain network, mapped",
    description:
      "What dhamma.org actually is, the per-center subdomain pattern (manda, mahavana, santosa), the role of vridhamma.org, and where the course search lives.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "dhamma.org: the subdomain map most pages skip",
    description:
      "Official Goenka Vipassana portal at dhamma.org, plus the per-center subdomain pattern and the related vridhamma.org. Notes from six courses.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "dhamma.org" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "dhamma.org", url: PAGE_URL },
];

interface SubdomainRow {
  subdomain: string;
  pali: string;
  english: string;
  where: string;
  type: "residential" | "non-residential";
}

const californiaSubdomains: SubdomainRow[] = [
  {
    subdomain: "manda.dhamma.org",
    pali: "Dhamma Maṇḍa",
    english: "essence of Dhamma",
    where: "Cobb mountain area, Lake County, ~17 acres of pine and oak",
    type: "residential",
  },
  {
    subdomain: "mahavana.dhamma.org",
    pali: "Dhamma Mahāvana",
    english: "great forest of Dhamma",
    where: "North Fork, Sierra Nevada foothills, ~109 acres",
    type: "residential",
  },
  {
    subdomain: "santosa.dhamma.org",
    pali: "Dhamma Santosa",
    english: "contentment",
    where: "South Bay Area, group sittings and one-day courses for old students",
    type: "non-residential",
  },
];

const otherSubdomainExamples: SubdomainRow[] = [
  {
    subdomain: "atala.dhamma.org",
    pali: "Dhamma Atala",
    english: "unshakeable",
    where: "Italian residential center",
    type: "residential",
  },
  {
    subdomain: "mutta.dhamma.org",
    pali: "Dhamma Muttā",
    english: "liberation",
    where: "Spanish residential center",
    type: "residential",
  },
  {
    subdomain: "nibha.dhamma.org",
    pali: "Dhamma Nibha",
    english: "splendour, radiance",
    where: "Eastern European residential center",
    type: "residential",
  },
];

const ecosystemDomains = [
  {
    name: "dhamma.org",
    initial: "D",
    description:
      "The global front door. Worldwide course search, location directory, Code of Discipline, About pages, the introductory video.",
    href: "https://www.dhamma.org/",
  },
  {
    name: "<center>.dhamma.org",
    initial: "C",
    description:
      "Per-center subdomain. Each meditation center publishes its own pages here (how to get there, dietary notes, local code of discipline copy, contact).",
  },
  {
    name: "vridhamma.org",
    initial: "V",
    description:
      "Vipassana Research Institute. Publications, research, the Pali Tipitaka digitization project, long courses, and the global center search.",
    href: "https://www.vridhamma.org/",
  },
  {
    name: "schedule.vridhamma.org",
    initial: "S",
    description:
      "Course schedules for sites and pop-up locations served by the VRI scheduling system. Some applications flow through this, others through dhamma.org.",
    href: "https://schedule.vridhamma.org/",
  },
  {
    name: "ivta.dhamma.org",
    initial: "I",
    description:
      "International Vipassana Technology Association. The team and the docs behind the dhamma.org platform itself, including the subdomain scheme.",
    href: "https://ivta.dhamma.org/",
  },
  {
    name: "Dhamma.org mobile app",
    initial: "M",
    description:
      "iOS and Android app. Reading library, course search, and a daily-practice timer for old students. Same login as the dhamma.org account.",
    href: "https://apps.apple.com/us/app/dhamma-org/id1127952631",
  },
];

const applyFlow = [
  {
    label: "Open dhamma.org",
    detail: "Pick a language and country.",
    icon: "browser" as const,
  },
  {
    label: "Course search",
    detail: "/en-US/courses/search with date and gender filters.",
    icon: "server" as const,
  },
  {
    label: "Application form",
    detail: "Submitted on dhamma.org, then routed to the center.",
    icon: "redirect" as const,
  },
  {
    label: "Center registration",
    detail: "Volunteer registrar at the chosen center reviews and replies.",
    icon: "email" as const,
  },
  {
    label: "Acceptance + arrival info",
    detail: "Code of Discipline, directions, packing list, what to bring.",
    icon: "check" as const,
  },
];

const faqs: FaqItem[] = [
  {
    q: "What is dhamma.org?",
    a: "dhamma.org is the official worldwide website for Vipassana meditation as taught by S. N. Goenka in the tradition of Sayagyi U Ba Khin. It hosts the global course search, the Code of Discipline, the locations directory, and the introductory video. The home page states it directly: \"This is the homepage of Vipassana Meditation, as taught by S.N. Goenka, in the tradition of Sayagyi U Ba Khin.\"",
  },
  {
    q: "Is dhamma.org the official site?",
    a: "Yes. There is one canonical worldwide domain, dhamma.org, and a sister domain run by the Vipassana Research Institute, vridhamma.org. Anything else using the same iconography but on a different domain (no subdomain of dhamma.org, no vridhamma.org) is not part of the official Goenka network.",
  },
  {
    q: "Why does every meditation center have its own dhamma.org subdomain?",
    a: "Each center is run by a local trust and writes its own pages (directions, dietary notes, local logistics), but it sits on the shared dhamma.org domain so the network looks and feels like one organization. The ivta.dhamma.org team maintains the platform; centers get a subdomain matching their Pali name (Dhamma Maṇḍa → manda.dhamma.org, Dhamma Mahāvana → mahavana.dhamma.org, Dhamma Santosa → santosa.dhamma.org).",
  },
  {
    q: "What is the difference between dhamma.org and vridhamma.org?",
    a: "dhamma.org is the public-facing front door for students: course search, center directory, intro materials. vridhamma.org is the Vipassana Research Institute side: long courses (20-day, 30-day, 45-day, 60-day), Pali Tipitaka research, publications, the global center search index, and the schedule.vridhamma.org subdomain that some centers use for their schedules.",
  },
  {
    q: "Are dhamma.org courses really free?",
    a: "Yes. The home page is explicit: \"There are no charges for the courses - not even to cover the cost of food and accommodation. All expenses are met by donations from people who, having completed a course and experienced the benefit of Vipassana, wish to give others the opportunity to also benefit.\" Only old students who have completed a 10-day course can donate.",
  },
  {
    q: "How do I find a Vipassana course on dhamma.org?",
    a: "The canonical path is dhamma.org/en-US/courses/search. Filter by new-student or old-student, by center or non-center location, by gender (the dorms and meal halls are separated by gender), and by date. Results are capped at 100, so narrow with date or region. Children's and teenagers' Anapana courses are listed separately. Applications submit on dhamma.org and the form forwards to the chosen center's local registration team.",
  },
  {
    q: "I went to dhamma.org but I cannot find anything about the technique. Is there a 'how to practice' page?",
    a: "No, and there is not supposed to be one. In this tradition the technique is transmitted in person inside the 10-day course by an authorized assistant teacher, not from a website or a video. dhamma.org explains what a course is, the Code of Discipline, and the daily timetable; it does not teach the method. For anything operational, dhamma.org and an authorized assistant teacher at a 10-day course are the only canonical sources.",
  },
  {
    q: "Does dhamma.org have an app?",
    a: "Yes. The Dhamma.org Mobile App is on iOS and Android. It uses the same dhamma.org account as the website and provides course search, application, and a reading library. For old students it also has a daily-practice timer. The app is run by the same volunteer technology team behind ivta.dhamma.org.",
  },
];

const relatedPosts = [
  {
    title: "Vipassana meditation: what it is, and the half no guide writes about",
    href: "/t/vipassana-meditation",
    excerpt:
      "The sourced answer to what Vipassana meditation actually is, plus the part every other article skips: the daily practice built alone after the course.",
    tag: "Definition",
  },
  {
    title: "10-day course structure: 12 days, three load-bearing sittings",
    href: "/t/10-day-course-structure",
    excerpt:
      "The daily clock and the 10-day arc, read from the Code of Discipline at dhamma.org and from six of my own courses across three centers.",
    tag: "Reference",
  },
  {
    title: "Vipassana retreat schedule and 2026 release dates",
    href: "/t/vipassana-retreat-schedule-2026-release-dates",
    excerpt:
      "When centers publish new dates, why the popular ones fill in hours, and how to time an application without refreshing the course search all day.",
    tag: "Logistics",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "dhamma.org: what it is, the subdomain map, and what every center URL means",
    description:
      "An orientation map for dhamma.org, the official Goenka Vipassana portal, including the per-center subdomain pattern, the related vridhamma.org research domain, and how the course search and application flow actually work. Verified 2026-05-23.",
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

      <header className="max-w-3xl mx-auto px-6 pt-6 pb-4">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
          dhamma.org
        </h1>
        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          People type this URL into Google when they want one of three things:
          confirmation that it is the official site, a way through to a course,
          or an explanation of what they are looking at once they arrive. This
          page is a practitioner&apos;s orientation map: what dhamma.org is,
          the per-center subdomain pattern most articles never mention, and how
          the parts of the network connect.
        </p>
      </header>

      <ArticleMeta
        author="Matthew Diakonov"
        authorRole="Written with AI"
        datePublished={PUBLISHED}
        readingTime="6 min read"
      />

      <section className="max-w-3xl mx-auto px-6 pt-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Direct answer (verified 2026-05-23)
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            <strong>dhamma.org</strong> is the official global website for
            Vipassana meditation as taught by{" "}
            <strong>S. N. Goenka</strong> in the tradition of Sayagyi U Ba Khin.
            It hosts the worldwide course search, the location directory, the
            Code of Discipline, and the introductory materials. Each meditation
            center publishes its own pages on a{" "}
            <strong>dedicated subdomain</strong> (for example{" "}
            <code className="rounded bg-white px-1.5 py-0.5 text-sm text-zinc-800 border border-teal-200">
              manda.dhamma.org
            </code>{" "}
            for the Northern California center). Source:{" "}
            <a
              href="https://www.dhamma.org/"
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

      <section className="max-w-3xl mx-auto px-6 pt-10">
        <p className="text-zinc-700 leading-relaxed">
          I am an old student of this tradition, not a teacher and not a
          representative of it. I have sat six 10-day courses across three of
          the centers below and used dhamma.org and its subdomains for every
          application, every code of discipline read-through, and a lot of
          schedule refreshing. The orientation below is what I wish someone had
          handed me the first time I landed on the home page.
        </p>
      </section>

      <ProofBanner
        metric="0 USD"
        quote="There are no charges for the courses, not even to cover the cost of food and accommodation. All expenses are met by donations from people who, having completed a course and experienced the benefit of Vipassana, wish to give others the opportunity to also benefit."
        source="dhamma.org, home page, retrieved 2026-05-23"
      />

      <section className="max-w-3xl mx-auto px-6 pt-10">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The pattern most articles miss: per-center subdomains
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          dhamma.org is not a single site. The shared front door at{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-800">
            www.dhamma.org
          </code>{" "}
          is the global view. Every individual meditation center sits on its
          own subdomain, and the subdomain matches the center&apos;s Pali name.
          The local team runs the content on that subdomain (directions,
          accommodations, dietary notes, contact, photos), while the global
          team handles the course search and the application flow. The
          subdomain naming convention is described by the dhamma.org platform
          team at ivta.dhamma.org.
        </p>

        <h3 className="mt-8 text-lg font-semibold text-zinc-900">
          The three centers I have used, in California
        </h3>
        <p className="mt-3 text-sm text-zinc-500">
          These are the three I have personally sat or sat at; my first course
          was actually at CYO, a rented camp in Marin that hosts the Bay-Area
          residential courses (CYO is not itself a dhamma.org subdomain, it
          appears in the course search as a non-center location).
        </p>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-zinc-200">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50 text-zinc-700">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Subdomain</th>
                <th className="px-4 py-3 text-left font-semibold">Pali name</th>
                <th className="px-4 py-3 text-left font-semibold">Meaning</th>
                <th className="px-4 py-3 text-left font-semibold">Where</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              {californiaSubdomains.map((row) => (
                <tr key={row.subdomain} className="bg-white">
                  <td className="px-4 py-3 align-top">
                    <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs text-zinc-800">
                      {row.subdomain}
                    </code>
                    <div className="mt-1 text-xs text-zinc-500">
                      {row.type}
                    </div>
                  </td>
                  <td className="px-4 py-3 align-top text-zinc-900">
                    {row.pali}
                  </td>
                  <td className="px-4 py-3 align-top text-zinc-700">
                    {row.english}
                  </td>
                  <td className="px-4 py-3 align-top text-zinc-700">
                    {row.where}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mt-10 text-lg font-semibold text-zinc-900">
          Outside California, the same pattern
        </h3>
        <p className="mt-3 text-zinc-700 leading-relaxed">
          The same convention holds worldwide. A few examples I have looked at
          while comparing course dates abroad:
        </p>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-zinc-200">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50 text-zinc-700">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Subdomain</th>
                <th className="px-4 py-3 text-left font-semibold">Pali name</th>
                <th className="px-4 py-3 text-left font-semibold">Meaning</th>
                <th className="px-4 py-3 text-left font-semibold">Where</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              {otherSubdomainExamples.map((row) => (
                <tr key={row.subdomain} className="bg-white">
                  <td className="px-4 py-3 align-top">
                    <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs text-zinc-800">
                      {row.subdomain}
                    </code>
                  </td>
                  <td className="px-4 py-3 align-top text-zinc-900">
                    {row.pali}
                  </td>
                  <td className="px-4 py-3 align-top text-zinc-700">
                    {row.english}
                  </td>
                  <td className="px-4 py-3 align-top text-zinc-700">
                    {row.where}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          The full list of subdomains lives in the global location directory at{" "}
          <a
            href="https://www.dhamma.org/en/locations/directory"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            dhamma.org/en/locations/directory
          </a>
          . If a center has a website, it is on dhamma.org. If it is on a
          different domain with the same iconography, it is not part of the
          network.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The other domains a first-time visitor hits
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          dhamma.org sits in a small constellation of related domains. The
          first time I looked at long courses I bounced between three of these
          and got confused about which was the canonical schedule. They have
          distinct roles.
        </p>

        <IntegrationsGrid
          subtitle="Related domains"
          title="Where each part of the network lives"
          items={ecosystemDomains}
          columns={3}
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-4">
        <h2 className="text-2xl font-semibold text-zinc-900">
          From dhamma.org to a confirmed seat
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The application flow is one of the few parts of the site that
          actually changes when you cross between the global and the local
          subdomain. The form lives at dhamma.org, then forwards to a
          per-center registrar (a volunteer at the center you picked). Replies
          come from a center-named email, not from a generic dhamma.org
          address.
        </p>

        <FlowDiagram title="Application path" steps={applyFlow} />

        <p className="mt-4 text-sm text-zinc-500">
          On a popular center in a popular month (Dhamma Maṇḍa in spring or
          fall, for example), the window between a date opening for applications
          and the men&apos;s or women&apos;s side filling is often a few hours.
          That is a logistical observation, not a complaint; the centers are
          run on donations and on student labor and they are full.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          What is intentionally not on dhamma.org
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          If you scroll the site looking for a how-to-meditate page, a guided
          audio, or a sensation reference, you will not find one. That is by
          design. The technique in this tradition is reserved for in-person
          transmission inside the 10-day course, by an authorized assistant
          teacher. The website handles everything around the cushion: what a
          course is, the Code of Discipline, the daily timetable, the
          locations, the application form, and the history. It does not handle
          the cushion itself.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          For anything operational about the practice, the canonical answer is{" "}
          <a
            href="https://www.dhamma.org/en/about/code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            dhamma.org/en/about/code
          </a>{" "}
          and an authorized assistant teacher at a course. This site does not
          substitute for either.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          What this site is, and how it sits next to dhamma.org
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          vipassana.cool is not affiliated with dhamma.org or with the
          tradition. I built it as an old student who kept watching practices
          (mine and others) thin out a few weeks after a course ended, and who
          wanted a peer-run resource for the part dhamma.org does not cover:
          the daily life of a practice once you are home and the structure is
          gone. The{" "}
          <Link
            href="/practice-buddy"
            className="text-teal-700 underline hover:text-teal-900"
          >
            practice-buddy matching
          </Link>{" "}
          pairs two meditators for a shared morning sit over video so neither
          person is the only one defending the time. It is free and peer to
          peer, not a course.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          section="guide-dhamma-org-footer"
          heading="Trying to figure out which dhamma.org subdomain or course to apply for?"
          description="Happy to talk through which centers fit your schedule, what a first course is like, and how to keep a practice going after. Peer to peer, not teacher to student."
        />
      </section>

      <section id="faq" className="max-w-3xl mx-auto px-6 pt-12">
        <FaqSection heading="FAQ: dhamma.org" items={faqs} />
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
        section="guide-dhamma-org-sticky"
        description="Questions about applying through dhamma.org or picking a center? Book a quick chat."
      />
    </article>
  );
}
