import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — vipassana.cool",
  description:
    "Terms of service for vipassana.cool — usage terms, disclaimers, and conditions for using the site.",
  alternates: {
    canonical: "https://vipassana.cool/terms",
  },
};

export default function TermsPage() {
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
        Terms of Service
      </h1>
      <p className="mb-12 text-lg text-muted">
        By using vipassana.cool, you agree to the following terms. The short
        version: this is a free informational site provided as-is, with no
        guarantees.
      </p>

      <div className="space-y-8 text-muted">
        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">
            Use at Your Own Risk
          </h2>
          <p>
            This website and all content on it are provided &quot;as is&quot; for
            informational purposes only. We make no guarantees regarding the
            accuracy, completeness, or reliability of any information on this
            site. Use of vipassana.cool is entirely at your own risk.
          </p>
          <p>
            Nothing on this site constitutes medical, psychological, or
            professional advice. If you have concerns about your health or
            wellbeing, consult a qualified professional.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">
            User-Generated Content
          </h2>
          <p>
            Comments on this site are powered by{" "}
            <a
              href="https://hyvor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:text-foreground"
            >
              Hyvor Talk
            </a>
            , a third-party commenting service. Users are solely responsible for
            the content of their own comments. We reserve the right to remove
            comments that are abusive, misleading, or otherwise inappropriate,
            but we are not obligated to monitor or review all user-generated
            content.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">
            Practice Buddy
          </h2>
          <p>
            Practice Buddy is a free matching service that connects Vipassana
            meditators for mutual accountability. We make no guarantees about
            match quality, compatibility, or outcomes. Participation is entirely
            voluntary, and we are not responsible for any interactions between
            matched users.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">
            Email Communications
          </h2>
          <p>
            If you subscribe to our newsletter or join the Practice Buddy
            waitlist, you may receive email communications from us. You can
            unsubscribe at any time by clicking the unsubscribe link in any
            email or by contacting us directly.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">
            Third-Party Links
          </h2>
          <p>
            This site contains links to third-party websites, including{" "}
            <a
              href="https://www.dhamma.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:text-foreground"
            >
              dhamma.org
            </a>
            , research publications, and other external resources. These links
            are provided for convenience and informational purposes only. We do
            not control, endorse, or assume responsibility for the content or
            practices of any third-party sites.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">
            Changes to the Site and These Terms
          </h2>
          <p>
            We reserve the right to modify, suspend, or discontinue any part of
            vipassana.cool at any time without notice. We may also update these
            terms from time to time. Continued use of the site after changes
            constitutes acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">
            Governing Law
          </h2>
          <p>
            These terms are governed by applicable law. Any disputes arising
            from the use of this site will be resolved in accordance with
            applicable legal provisions.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Contact</h2>
          <p>
            If you have questions about these terms, please reach out via{" "}
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
