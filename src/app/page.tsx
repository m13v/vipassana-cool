import Link from "next/link";
import { PageComments } from "@/components/comments";
import { TrackedLink } from "@/components/tracked-events";
import { EmailCapture } from "@/components/email-capture";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="mb-4 text-sm font-medium tracking-widest uppercase text-accent">
          Unofficial Guide
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Everything You Need to Know
          <br />
          About Vipassana Meditation
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted">
          Considering a 10-day silent meditation retreat? This site is a companion guide
          to{" "}
          <a
            href="https://www.dhamma.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline decoration-accent-light hover:text-foreground"
          >
            dhamma.org
          </a>
          , with honest answers to your questions, preparation tips, and personal experience
          from a practitioner with 60 days of courses completed.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <TrackedLink
            href="/guide"
            event="cta_click"
            properties={{ label: "How to Use dhamma.org", location: "hero" }}
            className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            How to Use dhamma.org
          </TrackedLink>
          <TrackedLink
            href="/faq"
            event="cta_click"
            properties={{ label: "Read the FAQ", location: "hero" }}
            className="rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-card-hover"
          >
            Read the FAQ
          </TrackedLink>
        </div>
      </section>

      {/* What is Vipassana */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="mb-6 text-2xl font-bold">What is Vipassana?</h2>
          <div className="space-y-4 text-muted">
            <p>
              Vipassana means &ldquo;to see things as they really are.&rdquo; It is one of
              India&apos;s most ancient meditation techniques, rediscovered by Gotama the
              Buddha more than 2,500 years ago. It was taught as a universal remedy
              for universal ills — an Art of Living.
            </p>
            <p>
              The technique is taught through 10-day residential courses at centers around
              the world. During these courses, participants follow a prescribed Code of
              Discipline, learn the basics of the method, and practice sufficiently to
              experience its beneficial results.
            </p>
            <p>
              The courses are entirely free. There are no charges — not even to cover food
              and accommodation. All expenses are met by donations from people who have
              completed a course and wish to give others the same opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Quick cards */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="mb-8 text-2xl font-bold">Explore the Guide</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card
              href="/guide"
              title="Guide to dhamma.org"
              description="Step-by-step walkthrough of finding a center, understanding course types, and completing your application."
            />
            <Card
              href="/faq"
              title="Frequently Asked Questions"
              description="Honest answers about noble silence, the daily schedule, physical challenges, and what really happens during 10 days."
            />
            <Card
              href="/prepare"
              title="Preparation Guide"
              description="What to pack, how to prepare mentally and physically, and tips from someone who has done six courses."
            />
            <Card
              href="/resources"
              title="Useful Resources"
              description="200+ curated links — books, documentaries, podcasts, research papers, apps, blogs, and official Goenka/dhamma.org resources."
            />
            <Card
              href="/experience"
              title="Personal Experience"
              description="An honest account of doing Vipassana as a tech professional — the good, the hard, and the transformative."
            />
            <Card
              href="/practice-buddy"
              title="Practice Buddy"
              description="Get matched with a fellow meditator for daily practice accountability. Coming soon — join the waitlist."
            />
          </div>
        </div>
      </section>

      {/* Email capture */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <EmailCapture location="home" />
        </div>
      </section>

      {/* Key stats */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="mb-10 text-2xl font-bold">Vipassana by the Numbers</h2>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <Stat number="200+" label="Centers worldwide" />
            <Stat number="100+" label="Countries" />
            <Stat number="0" label="Cost per course" />
            <Stat number="10" label="Days of silence" />
          </div>
        </div>
      </section>

      <PageComments pageId="home" />
    </>
  );
}

function Card({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <TrackedLink
      href={href}
      event="feature_card_click"
      properties={{ section: title }}
      className="group rounded-xl border border-border bg-card p-6 transition-colors hover:bg-card-hover"
    >
      <h3 className="mb-2 font-semibold group-hover:text-accent">{title}</h3>
      <p className="text-sm text-muted">{description}</p>
    </TrackedLink>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-bold text-accent">{number}</div>
      <div className="mt-1 text-sm text-muted">{label}</div>
    </div>
  );
}
