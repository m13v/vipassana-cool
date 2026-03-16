import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — vipassana.cool",
  description:
    "About Matthew Diakonov, the creator of vipassana.cool — an unofficial companion guide to dhamma.org, built by a practitioner with 60 days of Vipassana courses completed.",
  alternates: {
    canonical: "https://vipassana.cool/about",
  },
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
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
              completed in the tradition of S.N. Goenka. I created
              vipassana.cool as an unofficial companion guide to{" "}
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
            Why I Built This
          </h2>
          <p>
            The official dhamma.org website is comprehensive but can feel
            overwhelming for newcomers. I wanted to create a clear,
            experience-based guide that answers the practical questions people
            actually have — what to expect, how to prepare, and what the
            experience is really like.
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
