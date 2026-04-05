import Link from "next/link";

export function PracticeBuddyCta({
  heading = "Struggling to Practice Alone?",
  description = "Get matched with a fellow Vipassana meditator for daily practice over Google Meet. Free, tradition-respectful, and based on real accountability.",
}: {
  heading?: string;
  description?: string;
}) {
  return (
    <div className="mt-12 rounded-xl border border-accent/30 bg-accent/5 p-8 text-center">
      <h2 className="mb-3 text-xl font-bold">{heading}</h2>
      <p className="mb-6 text-muted">{description}</p>
      <Link
        href="/#practice-buddy"
        className="inline-block rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
      >
        Find a Practice Buddy
      </Link>
    </div>
  );
}
