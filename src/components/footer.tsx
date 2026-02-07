import Link from "next/link";
import { DayCounter } from "@/components/day-counter";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="mb-3 text-sm font-semibold">vipassana.cool</h3>
            <p className="text-sm text-muted">
              An unofficial guide to Vipassana meditation and dhamma.org. Not
              affiliated with the Vipassana Research Institute.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold">Pages</h3>
            <div className="flex flex-col gap-2">
              <Link href="/guide" className="text-sm text-muted hover:text-foreground">
                Guide to dhamma.org
              </Link>
              <Link href="/faq" className="text-sm text-muted hover:text-foreground">
                FAQ
              </Link>
              <Link href="/prepare" className="text-sm text-muted hover:text-foreground">
                Preparation
              </Link>
              <Link href="/resources" className="text-sm text-muted hover:text-foreground">
                Resources
              </Link>
              <Link href="/experience" className="text-sm text-muted hover:text-foreground">
                Personal Experience
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold">Official Resources</h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.dhamma.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-foreground"
              >
                dhamma.org
              </a>
              <a
                href="https://www.dhamma.org/en-US/courses/search"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-foreground"
              >
                Find a Course
              </a>
              <a
                href="https://www.dhamma.org/en/locations/directory"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-foreground"
              >
                Center Directory
              </a>
              <a
                href="https://www.reddit.com/r/vipassana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-foreground"
              >
                r/vipassana
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted">
          <p>
            Made by{" "}
            <a
              href="https://m13v.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Matthew Diakonov
            </a>{" "}
            — a practitioner with 60 days of courses and <DayCounter /> days of daily practice.
          </p>
          <div className="mt-3 flex justify-center gap-4">
            <a href="https://m13v.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent" aria-label="Website">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/matthew-diakonov-a84a1911/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://twitter.com/MatthewHeartful" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent" aria-label="X / Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://github.com/matthew-heartful" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent" aria-label="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://t.me/matthew_ddi" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent" aria-label="Telegram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
