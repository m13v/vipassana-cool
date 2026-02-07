import Link from "next/link";

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
              <Link href="/experience" className="text-sm text-muted hover:text-foreground">
                My Experience
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
                href="https://www.dhamma.org/en/schedules/noncenter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-foreground"
              >
                Course Schedule
              </a>
              <a
                href="https://www.dhamma.org/en/locations/directory"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-foreground"
              >
                Center Directory
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted">
          Made by{" "}
          <a
            href="https://m13v.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Matthew Diakonov
          </a>{" "}
          — a practitioner with 60 days of courses and 881+ days of daily practice.
        </div>
      </div>
    </footer>
  );
}
