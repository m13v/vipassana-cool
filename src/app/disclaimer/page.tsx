import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer — vipassana.cool",
  description:
    "Disclaimer for vipassana.cool — this site provides informational content about Vipassana meditation and is not medical advice.",
  alternates: {
    canonical: "https://vipassana.cool/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/"
        className="mb-4 inline-block text-sm text-muted hover:text-accent"
      >
        &larr; Home
      </Link>
      <p className="mb-4 text-sm font-medium tracking-widest uppercase text-accent">
        Legal
      </p>
      <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
        Disclaimer
      </h1>
      <p className="mb-12 text-lg text-muted">
        Important information about the nature of the content on this site.
      </p>

      <div className="space-y-8 text-muted">
        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">
            Not Medical Advice
          </h2>
          <p>
            vipassana.cool is an informational website about Vipassana
            meditation. The content on this site is not intended to be a
            substitute for professional medical advice, diagnosis, or treatment.
            Always seek the advice of your physician or other qualified health
            provider with any questions you may have regarding a medical
            condition.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">
            Personal Experience and Research
          </h2>
          <p>
            The content on this site is based on personal experience with
            Vipassana meditation and publicly available research. While we
            strive for accuracy, individual experiences with meditation vary
            widely, and our descriptions may not reflect your personal
            experience.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">
            Mental Health Considerations
          </h2>
          <p>
            If you have a history of mental health conditions — including but
            not limited to depression, anxiety disorders, PTSD, psychosis, or
            bipolar disorder — we strongly recommend consulting with a mental
            health professional before attending an intensive meditation retreat
            such as a 10-day Vipassana course. Intensive meditation can surface
            difficult emotions and experiences, and professional guidance can
            help you determine whether a course is appropriate for your
            situation.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">
            No Affiliation
          </h2>
          <p>
            This website is not affiliated with, endorsed by, or connected to{" "}
            <a
              href="https://www.dhamma.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:text-foreground"
            >
              dhamma.org
            </a>
            , the Vipassana Research Institute, or any official Vipassana
            organization. For official information about Vipassana meditation
            courses, please visit dhamma.org directly.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">
            No Guarantees
          </h2>
          <p>
            We make no guarantees about the outcomes of Vipassana meditation
            practice. Results vary from person to person, and the benefits
            described on this site — whether drawn from personal experience or
            scientific research — should not be interpreted as promises or
            assurances of any particular outcome for you.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">
            External Links
          </h2>
          <p>
            This site contains links to external websites. We are not
            responsible for the content or privacy practices of those sites.
            Following external links is at your own discretion and risk.
          </p>
        </section>
      </div>
    </article>
  );
}
