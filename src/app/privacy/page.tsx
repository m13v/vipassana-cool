import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — vipassana.cool",
  description:
    "Privacy policy for vipassana.cool — what data we collect, how we use it, and your rights.",
  alternates: {
    canonical: "https://vipassana.cool/privacy",
  },
};

export default function PrivacyPage() {
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
        Privacy Policy
      </h1>
      <p className="mb-12 text-lg text-muted">
        How vipassana.cool handles your data. The short version: we collect very
        little and never sell it.
      </p>

      <div className="space-y-8 text-muted">
        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">
            Data We Collect
          </h2>
          <h3 className="mb-2 mt-4 font-semibold text-foreground">
            Email Addresses
          </h3>
          <p>
            If you join the Practice Buddy waitlist or subscribe to the
            newsletter, we collect your email address. Emails are managed
            through{" "}
            <a
              href="https://resend.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:text-foreground"
            >
              Resend
            </a>
            , our email service provider. We use your email solely to send you
            updates related to vipassana.cool. You can unsubscribe at any time.
          </p>

          <h3 className="mb-2 mt-4 font-semibold text-foreground">
            Analytics
          </h3>
          <p>
            We use{" "}
            <a
              href="https://posthog.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:text-foreground"
            >
              PostHog
            </a>{" "}
            for website analytics. PostHog collects anonymized usage data such
            as page views, referral sources, and general interaction patterns.
            This helps us understand how people use the site and improve the
            content. No personally identifiable information is tracked.
          </p>

          <h3 className="mb-2 mt-4 font-semibold text-foreground">
            Comments
          </h3>
          <p>
            Comments on the site are powered by{" "}
            <a
              href="https://hyvor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:text-foreground"
            >
              Hyvor Talk
            </a>
            , a third-party commenting service. When you leave a comment, Hyvor
            Talk may collect data according to their own privacy policy. We
            encourage you to review{" "}
            <a
              href="https://hyvor.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:text-foreground"
            >
              Hyvor Talk&apos;s privacy policy
            </a>{" "}
            for details.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">
            What We Don&apos;t Do
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>We do not display advertising on this site.</li>
            <li>
              We do not sell, rent, or share your personal data with third
              parties for marketing purposes.
            </li>
            <li>We do not use tracking cookies for advertising.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">
            Third-Party Services
          </h2>
          <p>
            This site uses the following third-party services that may process
            data on our behalf:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>Resend</strong> — email delivery for newsletters and
              waitlist notifications
            </li>
            <li>
              <strong>PostHog</strong> — anonymized website analytics
            </li>
            <li>
              <strong>Hyvor Talk</strong> — comment system
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Contact</h2>
          <p>
            If you have questions about this privacy policy or want your data
            removed, please reach out via{" "}
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
          <p className="text-sm text-muted">Last updated: March 2026</p>
        </section>
      </div>
    </article>
  );
}
