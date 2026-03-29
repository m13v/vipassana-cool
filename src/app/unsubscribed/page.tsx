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

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#faf9f6] px-6">
      <div className="w-full max-w-md rounded-2xl border border-[#e8e4de] bg-white p-10 text-center shadow-sm">
        <p className="mb-4 text-4xl">{success ? "🙏" : "🤔"}</p>
        <h1 className="mb-4 text-2xl font-bold text-[#2c2c2c]">
          {success ? "You've been unsubscribed." : "Something went wrong."}
        </h1>
        <p className="text-[#6b6b6b] leading-relaxed">
          {success
            ? "You won't receive any more emails from Practice Buddy. If you change your mind, you can always sign up again."
            : "We couldn't process your unsubscribe request. The link may have expired or already been used. Please reply to any email from us and we'll remove you manually."}
        </p>
        <a
          href="https://vipassana.cool"
          className="mt-8 inline-block text-sm text-[#8b7355] hover:underline"
        >
          vipassana.cool
        </a>
      </div>
    </main>
  );
}
