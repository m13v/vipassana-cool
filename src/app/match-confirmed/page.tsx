import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Match Confirmation — Vipassana.cool",
  robots: { index: false, follow: false },
};

export default async function MatchConfirmedPage({
  searchParams,
}: {
  searchParams: Promise<{ response?: string }>;
}) {
  const { response } = await searchParams;

  const isYes = response === "yes";
  const isNo = response === "no";

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#faf9f6] px-6">
      <div className="w-full max-w-md rounded-2xl border border-[#e8e4de] bg-white p-10 text-center shadow-sm">
        <p className="mb-4 text-4xl">{isYes ? "🙏" : isNo ? "👍" : "🤔"}</p>
        <h1 className="mb-4 text-2xl font-bold text-[#2c2c2c]">
          {isYes
            ? "You're in!"
            : isNo
            ? "No problem."
            : "Something went wrong."}
        </h1>
        <p className="text-[#6b6b6b] leading-relaxed">
          {isYes
            ? "Great — I'll introduce you both as soon as your match also confirms. You'll receive the intro email shortly."
            : isNo
            ? "You're back on the waitlist. I'll find you a new match when a good one comes along."
            : "This link may have already been used or expired. Email matt@vipassana.cool if you need help."}
        </p>
        <a
          href="https://vipassana.cool"
          className="mt-8 inline-block text-sm text-[#8b7355] hover:underline"
        >
          Back to Vipassana.cool →
        </a>
      </div>
    </main>
  );
}
