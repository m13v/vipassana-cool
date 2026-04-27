import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unsubscribed — Vipassana.cool",
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
            Was that a mistake?
          </p>
          <p className="text-sm text-[#6b6b6b] leading-relaxed">
            You can rejoin the waitlist any time at{" "}
            <a
              href="https://vipassana.cool"
              className="text-[#8b7355] hover:underline"
            >
              vipassana.cool
            </a>
            . Same matching process, no penalty for coming back.
          </p>
        </div>

        <div className="mt-5 rounded-xl border border-[#e8e4de] bg-[#faf9f6] p-5 text-left">
          <p className="mb-2 text-sm font-semibold text-[#2c2c2c]">
            Stay without the email
          </p>
          <p className="mb-3 text-sm text-[#6b6b6b] leading-relaxed">
            The site is free to read with no account or subscription. A few
            things you can keep using:
          </p>
          <ul className="space-y-1.5 text-sm text-[#6b6b6b]">
            <li>
              <a
                href="https://vipassana.cool/guide"
                className="text-[#8b7355] hover:underline"
              >
                Guides
              </a>{" "}
              on retreat prep, post-course integration, and daily practice.
            </li>
            <li>
              <a
                href="https://vipassana.cool/faq"
                className="text-[#8b7355] hover:underline"
              >
                FAQ
              </a>{" "}
              about the matching program if you ever want to come back.
            </li>
            <li>
              <a
                href="https://vipassana.cool/experience"
                className="text-[#8b7355] hover:underline"
              >
                One practitioner&apos;s experience
              </a>{" "}
              (6 courses, 3 centers).
            </li>
          </ul>
        </div>

        <p className="mt-8 text-xs text-[#8b8b8b] leading-relaxed">
          If you ever need to reach a real person,{" "}
          <a
            href="mailto:matt@vipassana.cool"
            className="text-[#8b7355] hover:underline"
          >
            matt@vipassana.cool
          </a>{" "}
          is read by Matt, not a list.
        </p>
      </div>
    </main>
  );
}
