import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

export const metadata: Metadata = {
  title: "About — vipassana.cool",
  description:
    "About Matthew Diakonov, the creator of vipassana.cool — an unofficial companion guide to dhamma.org, built by a practitioner with 60 days of Vipassana courses completed.",
  alternates: {
    canonical: "https://vipassana.cool/about",
  },
};

export default function AboutPage() {
  const profileSchema = [
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      mainEntity: {
        "@type": "Person",
        name: "Matthew Diakonov",
        url: "https://m13v.com",
        image: "https://vipassana.cool/matthew.jpg",
        description:
          "Vipassana practitioner with 60 days of courses completed in the tradition of S.N. Goenka. Creator of vipassana.cool.",
        sameAs: [
          "https://m13v.com",
          "https://twitter.com/MatthewHeartful",
          "https://www.linkedin.com/in/matthew-diakonov-a84a1911/",
          "https://github.com/matthew-heartful",
          "https://t.me/matthew_ddi",
        ],
        knowsAbout: [
          "Vipassana meditation",
          "S.N. Goenka tradition",
          "meditation retreats",
          "daily meditation practice",
        ],
      },
      url: "https://vipassana.cool/about",
    },
  ];

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://vipassana.cool" },
          { name: "About", url: "https://vipassana.cool/about" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
      />
      <Link
        href="/"
        className="mb-4 inline-block text-sm text-muted hover:text-accent"
      >
        &larr; Home
      </Link>
      <p className="mb-4 text-sm font-medium tracking-widest uppercase text-accent">
        About
      </p>
      <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
        About vipassana.cool
      </h1>
      <p className="mb-12 text-lg text-muted">
        An unofficial companion guide to dhamma.org, created by a dedicated
        Vipassana practitioner.
      </p>

      <div className="space-y-8 text-muted">
        <section className="flex flex-col items-start gap-6 sm:flex-row">
          <img
            src="/matthew.jpg"
            alt="Matthew Diakonov"
            className="h-32 w-32 rounded-full object-cover"
          />
          <div>
            <h2 className="mb-3 text-xl font-bold text-foreground">
              Matthew Diakonov
            </h2>
            <p>
              I&apos;m a Vipassana practitioner with 60 days of courses
              completed in the tradition of S.N. Goenka — six 10-day courses
              across three centers in California over the past three years. I
              created vipassana.cool as an unofficial companion guide to{" "}
              <a
                href="https://www.dhamma.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline hover:text-foreground"
              >
                dhamma.org
              </a>{" "}
              — the kind of resource I wished existed when I was preparing for
              my first course.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">
            How Vipassana Changed My Life
          </h2>
          <p>
            Before Vipassana, I hadn&apos;t taken a single vacation in eight
            years. Not a single day off. I worked seven days a week, including
            weekends, building products and running startups. I was extremely
            agitated, ego-centered, and stuck in bad habits.
          </p>
          <p className="mt-3">
            After my first course, I said to myself:{" "}
            <em>&ldquo;I cannot go back and live a normal life.&rdquo;</em> It
            was that clear. I started planning my year around how many courses I
            could attend. In my first twelve months, I went to four courses —
            despite having an intense full-time schedule. It was so mind-blowing
            how much time I could save and how efficient I could become after
            learning meditation that I solely dedicated 40 days plus two hours
            of daily practice to ramp up my skills and get established.
          </p>
          <p className="mt-3">
            Vipassana is the single most important event in my life. It
            completely changed everything — before and after — making me from
            an extremely agitated, badly mannered, ego-centered person into
            someone much better and much more happy.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">
            Centers I&apos;ve Sat At
          </h2>
          <p>
            I&apos;ve sat at three centers, each with a very different character:
          </p>
          <ul className="mt-3 space-y-3">
            <li>
              <strong>Dhammamanda (Northern California)</strong> — The best
              conditions I&apos;ve experienced. Private rooms with private
              showers, a compact layout close to the Dhamma hall, and beautiful
              nature with tall trees. It almost felt too luxurious.
            </li>
            <li>
              <strong>CYO / Bay Area Vipassana Center</strong> — A rented
              Christian youth camp facility that hosts a course only during
              Christmas, once a year, for the last 20 years. Extremely difficult
              conditions: bunk beds in rooms with 12 other people, an uphill
              walk to the Dhamma hall in winter rain and snow. A pretty nasty
              experience — but it&apos;s the biggest meditation course in the
              Western hemisphere, with nearly 300 people including servers. And
              Day 10, when silence breaks and you meet everyone, is
              unforgettable.
            </li>
            <li>
              <strong>North Fork / Dhamma Mahavana (Central California)</strong>{" "}
              — One of the oldest centers in North America. It has a
              pagoda-style meditation hall with private meditation cells for
              every student, which is a great perk for old students. It attracts
              very experienced teachers and is well-run, well-organized, and
              well-maintained.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">
            Why I Built This
          </h2>
          <p>
            The official dhamma.org website is comprehensive but can feel
            overwhelming for newcomers. The language of the tradition is also a
            little outdated — things are much more simple than they sound. I
            wanted to create a clear, experience-based guide that answers the
            practical questions people actually have — what to expect, how to
            prepare, and what the experience is really like.
          </p>
          <p className="mt-3">
            Outside of Vipassana, I work in tech. You can learn more about my
            professional work at{" "}
            <a
              href="https://m13v.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:text-foreground"
            >
              m13v.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">
            Connect
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://m13v.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:text-foreground"
            >
              Website
            </a>
            <a
              href="https://www.linkedin.com/in/matthew-diakonov-a84a1911/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/MatthewHeartful"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:text-foreground"
            >
              Twitter
            </a>
            <a
              href="https://github.com/matthew-heartful"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://t.me/matthew_ddi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:text-foreground"
            >
              Telegram
            </a>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">
            Disclaimer
          </h2>
          <p>
            This is a personal project and is not affiliated with, endorsed by,
            or connected to the Vipassana Research Institute or dhamma.org. All
            content reflects my personal experience and understanding of the
            technique. For official information, please visit{" "}
            <a
              href="https://www.dhamma.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:text-foreground"
            >
              dhamma.org
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
