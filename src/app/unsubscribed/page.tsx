import type { Metadata } from "next";
import { DayCounter } from "@/components/day-counter";

export const metadata: Metadata = {
  title: "Unsubscribed | Vipassana.cool",
  robots: { index: false, follow: false },
};

export default async function UnsubscribedPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const success = status === "success";

  if (!success) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#faf9f6] px-6">
        <div className="w-full max-w-md rounded-2xl border border-[#e8e4de] bg-white p-10 text-center shadow-sm">
          <p className="mb-4 text-4xl">🤔</p>
          <h1 className="mb-4 text-2xl font-bold text-[#2c2c2c]">
            Something went wrong.
          </h1>
          <p className="text-[#6b6b6b] leading-relaxed">
            We couldn&apos;t process this unsubscribe. The link may have expired
            or already been used. Reply to any email from us and we&apos;ll
            remove you manually, or write to{" "}
            <a
              href="mailto:matt@vipassana.cool"
              className="text-[#8b7355] hover:underline"
            >
              matt@vipassana.cool
            </a>
            .
          </p>
          <a
            href="https://vipassana.cool"
            className="mt-8 inline-block text-sm text-[#8b7355] hover:underline"
          >
            Back to vipassana.cool →
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#faf9f6] px-6 py-12">
      <div className="w-full max-w-md rounded-2xl border border-[#e8e4de] bg-white p-10 text-center shadow-sm">
        <p className="mb-4 text-4xl">🙏</p>
        <h1 className="mb-3 text-2xl font-bold text-[#2c2c2c]">
          You&apos;re off the list.
        </h1>
        <p className="text-[#6b6b6b] leading-relaxed">
          No more Practice Buddy emails. If you had an active match, it&apos;s
          been ended and your buddy has been told they&apos;ll get someone new.
        </p>

        <div className="mt-8 rounded-xl border border-[#e8e4de] bg-[#faf9f6] p-5 text-left">
          <p className="mb-2 text-sm font-semibold text-[#2c2c2c]">
            Changed your mind?
          </p>
          <p className="text-sm text-[#6b6b6b] leading-relaxed">
            The form is still at{" "}
            <a
              href="https://vipassana.cool/practice-buddy"
              className="text-[#8b7355] hover:underline"
            >
              vipassana.cool/practice-buddy
            </a>
            . Re-submitting puts you back in the pool the next time matches go
            out.
          </p>
        </div>

        <div className="mt-5 rounded-xl border border-[#e8e4de] bg-[#faf9f6] p-5 text-left">
          <p className="mb-2 text-sm font-semibold text-[#2c2c2c]">
            Things you can read without signing up for anything
          </p>
          <p className="mb-3 text-sm text-[#6b6b6b] leading-relaxed">
            The site is free to read, no account, no list. A few pages people
            who have stepped back from email tend to come back to:
          </p>
          <ul className="space-y-1.5 text-sm text-[#6b6b6b]">
            <li>
              <a
                href="https://vipassana.cool/guide/restarting-your-practice"
                className="text-[#8b7355] hover:underline"
              >
                Restarting your practice
              </a>{" "}
              when you have lapsed.
            </li>
            <li>
              <a
                href="https://vipassana.cool/guide/daily-practice"
                className="text-[#8b7355] hover:underline"
              >
                Daily practice
              </a>{" "}
              notes from one student, not a teacher.
            </li>
            <li>
              <a
                href="https://vipassana.cool/guide/after-retreat"
                className="text-[#8b7355] hover:underline"
              >
                After retreat
              </a>{" "}
              for the first few weeks back home.
            </li>
            <li>
              <a
                href="https://vipassana.cool/experience"
                className="text-[#8b7355] hover:underline"
              >
                One practitioner&apos;s experience
              </a>{" "}
              across 6 courses at 3 centers.
            </li>
          </ul>
        </div>

        <div className="mt-5 rounded-xl border border-[#e8e4de] bg-[#faf9f6] p-5 text-left">
          <p className="mb-2 text-sm font-semibold text-[#2c2c2c]">
            Or: a quieter community
          </p>
          <p className="text-sm text-[#6b6b6b] leading-relaxed">
            If you wanted out of email but still want to be near other
            practitioners, there is a small subreddit at{" "}
            <a
              href="https://www.reddit.com/r/vipassana_cool/"
              className="text-[#8b7355] hover:underline"
              rel="noopener"
            >
              r/vipassana_cool
            </a>
            . Read-only is fine. No notifications unless you opt in.
          </p>
        </div>

        <p className="mt-8 text-xs text-[#8b8b8b] leading-relaxed">
          If you ever need to reach a real person,{" "}
          <a
            href="mailto:matt@vipassana.cool"
            className="text-[#8b7355] hover:underline"
          >
            matt@vipassana.cool
          </a>{" "}
          goes to Matt (<DayCounter /> days into his own daily sit), not a
          mailing list.
        </p>
      </div>
    </main>
  );
}
