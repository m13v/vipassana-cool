import type { Metadata } from "next";
import { getMatchByToken, getEntry } from "@/lib/db";
import { PhonePreferenceCard } from "@/components/phone-preference-card";

export const metadata: Metadata = {
  title: "Match Confirmation | Vipassana.cool",
  robots: { index: false, follow: false },
};

export default async function MatchConfirmedPage({
  searchParams,
}: {
  searchParams: Promise<{ response?: string; token?: string }>;
}) {
  const { response, token } = await searchParams;

  // If we have a token (passed through from /api/confirm-match for response=yes),
  // resolve the match so we can (a) tell whether the buddy has already confirmed
  // and (b) pre-fill the phone form. Failures are silent — worst case, the user
  // sees the generic "nothing else to do" copy, which is fine.
  //
  // bothConfirmed: the partner already clicked yes, so the intro email with the
  // Meet link is already on its way to both of you. In that state the phone
  // heads-up form has nothing left to notify about, so we hide it and show the
  // accurate "you're both in" copy instead. We only offer the phone form while
  // we're genuinely still waiting on the buddy.
  let phoneCardProps: { token: string; initialPhone: string; initialMethod: string } | null = null;
  let bothConfirmed = false;
  if (response === "yes" && token) {
    try {
      const match = await getMatchByToken(token);
      if (match) {
        const isA = match.person_a_token === token;
        const partnerConfirmed = isA ? match.person_b_confirmed : match.person_a_confirmed;
        bothConfirmed = partnerConfirmed;
        const personId = isA ? match.person_a_id : match.person_b_id;
        const person = await getEntry(personId);
        if (person && !partnerConfirmed) {
          phoneCardProps = {
            token,
            initialPhone: person.phone || "",
            initialMethod: person.phone_method || "",
          };
        }
      }
    } catch {
      /* silent — if lookup fails we just hide the phone card */
    }
  }

  if (response === "yes") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#faf9f6] px-6 py-12">
        <div className="w-full max-w-md rounded-2xl border border-[#e8e4de] bg-white p-10 text-center shadow-sm">
          <p className="mb-4 text-4xl">🙏</p>
          <h1 className="mb-3 text-2xl font-bold text-[#2c2c2c]">
            {bothConfirmed ? "You&apos;re both in." : "You&apos;re in."}
          </h1>
          <p className="text-[#6b6b6b] leading-relaxed">
            {bothConfirmed
              ? "You both said yes. Your intro email with the Google Meet link is on its way to both of you now."
              : phoneCardProps
                ? "Your yes is registered. One optional thing below, then you can close this tab."
                : "Your yes is registered. Nothing else to do on your end."}
          </p>

          {phoneCardProps && (
            <PhonePreferenceCard
              token={phoneCardProps.token}
              initialPhone={phoneCardProps.initialPhone}
              initialMethod={phoneCardProps.initialMethod}
            />
          )}

          <div className={`${phoneCardProps ? "mt-5" : "mt-8"} rounded-xl border border-[#e8e4de] bg-[#faf9f6] p-5 text-left`}>
            <p className="mb-2 text-sm font-semibold text-[#2c2c2c]">
              What happens next
            </p>
            {bothConfirmed ? (
              <p className="text-sm text-[#6b6b6b] leading-relaxed">
                The intro email with your Google Meet link is on its way to
                both of you now, usually within a few minutes. It has the link
                and a suggested time that fits both your sit schedules. When it
                lands, hit <strong>reply all</strong> and say hello so
                you&apos;re both on the same thread.
              </p>
            ) : (
              <>
                <p className="text-sm text-[#6b6b6b] leading-relaxed">
                  Your buddy has up to 3 days to click yes. The moment they do,
                  you&apos;ll both get the intro email with a Google Meet link
                  and a suggested time that fits both your sit schedules.
                </p>
                <p className="mt-3 text-sm text-[#6b6b6b] leading-relaxed">
                  If they don&apos;t respond in 3 days, no harm done. I&apos;ll
                  put you both back in the pool and find you a new match when a
                  good one comes along.
                </p>
              </>
            )}
          </div>

          <div className="mt-5 rounded-xl border border-[#e8e4de] bg-[#faf9f6] p-5 text-left">
            <p className="mb-2 text-sm font-semibold text-[#2c2c2c]">
              Watch your inbox
            </p>
            <p className="text-sm text-[#6b6b6b] leading-relaxed">
              The intro will come from{" "}
              <span className="font-mono text-[#2c2c2c]">
                matt@vipassana.cool
              </span>
              . If you don&apos;t see it, check spam or promotions, and add
              that address to your contacts so the next email lands in your
              primary inbox. When it arrives, hit{" "}
              <strong>reply all</strong> so your buddy is on the same thread.
            </p>
          </div>

          <div className="mt-5 rounded-xl border border-[#e8e4de] bg-[#faf9f6] p-5 text-left">
            <p className="mb-2 text-sm font-semibold text-[#2c2c2c]">
              While you wait
            </p>
            <p className="mb-3 text-sm text-[#6b6b6b] leading-relaxed">
              A few things written by one practitioner (6 courses, 3 centers),
              not a teacher, that pair well with starting a buddy practice:
            </p>
            <ul className="space-y-1.5 text-sm text-[#6b6b6b]">
              <li>
                <a
                  href="https://vipassana.cool/guide/daily-practice"
                  className="text-[#8b7355] hover:underline"
                >
                  Daily practice
                </a>
                . What kept consistency going past 900 days.
              </li>
              <li>
                <a
                  href="https://vipassana.cool/guide/restarting-your-practice"
                  className="text-[#8b7355] hover:underline"
                >
                  Restarting your practice
                </a>
                . If you&apos;ve fallen off and are circling back.
              </li>
              <li>
                <a
                  href="https://vipassana.cool/practice-buddy/how-it-works"
                  className="text-[#8b7355] hover:underline"
                >
                  How Practice Buddy works
                </a>
                . The full flow, end to end, so the intro email feels
                familiar.
              </li>
            </ul>
          </div>

          <p className="mt-8 text-xs text-[#8b8b8b] leading-relaxed">
            Questions before the intro lands?{" "}
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

  if (response === "no") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#faf9f6] px-6 py-12">
        <div className="w-full max-w-md rounded-2xl border border-[#e8e4de] bg-white p-10 text-center shadow-sm">
          <p className="mb-4 text-4xl">👍</p>
          <h1 className="mb-3 text-2xl font-bold text-[#2c2c2c]">
            No problem.
          </h1>
          <p className="text-[#6b6b6b] leading-relaxed">
            You&apos;re back on the waitlist. The other person was told a new
            match is on the way. No notes attached to your name, no penalty,
            no awkwardness.
          </p>

          <div className="mt-8 rounded-xl border border-[#e8e4de] bg-[#faf9f6] p-5 text-left">
            <p className="mb-2 text-sm font-semibold text-[#2c2c2c]">
              When does the next match come?
            </p>
            <p className="text-sm text-[#6b6b6b] leading-relaxed">
              It depends on who else is in the queue at a sit time within ±60
              minutes of yours. Quiet timezones can take a couple weeks, busy
              ones a few days. You can decline as many matches as you want. I
              keep looking until something clicks.
            </p>
          </div>

          <div className="mt-5 rounded-xl border border-[#e8e4de] bg-[#faf9f6] p-5 text-left">
            <p className="mb-2 text-sm font-semibold text-[#2c2c2c]">
              Want to step away entirely?
            </p>
            <p className="text-sm text-[#6b6b6b] leading-relaxed">
              Use the unsubscribe link at the bottom of any email from us.
              You&apos;ll come off the matching list cleanly and can rejoin
              any time later from{" "}
              <a
                href="https://vipassana.cool/practice-buddy"
                className="text-[#8b7355] hover:underline"
              >
                vipassana.cool/practice-buddy
              </a>
              .
            </p>
          </div>

          <div className="mt-5 rounded-xl border border-[#e8e4de] bg-[#faf9f6] p-5 text-left">
            <p className="mb-2 text-sm font-semibold text-[#2c2c2c]">
              While you&apos;re waiting
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
                covering the matching program in detail.
              </li>
              <li>
                <a
                  href="https://vipassana.cool/experience"
                  className="text-[#8b7355] hover:underline"
                >
                  One practitioner&apos;s experience
                </a>{" "}
                (6 courses, 3 centers, 900+ days of daily sits).
              </li>
            </ul>
          </div>

          <p className="mt-8 text-xs text-[#8b8b8b] leading-relaxed">
            Need a real person?{" "}
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

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#faf9f6] px-6 py-12">
      <div className="w-full max-w-md rounded-2xl border border-[#e8e4de] bg-white p-10 text-center shadow-sm">
        <p className="mb-4 text-4xl">🤔</p>
        <h1 className="mb-3 text-2xl font-bold text-[#2c2c2c]">
          This link is no longer active.
        </h1>
        <p className="text-[#6b6b6b] leading-relaxed">
          Usually that just means the link was already clicked, or the 3-day
          response window passed and the match was rolled back into the pool.
          Nothing is broken on your side.
        </p>

        <div className="mt-8 rounded-xl border border-[#e8e4de] bg-[#faf9f6] p-5 text-left">
          <p className="mb-2 text-sm font-semibold text-[#2c2c2c]">
            What you can do
          </p>
          <ul className="space-y-1.5 text-sm text-[#6b6b6b]">
            <li>
              If you already clicked yes, you&apos;re fine. Watch for the
              intro email from{" "}
              <span className="font-mono text-[#2c2c2c]">
                matt@vipassana.cool
              </span>
              .
            </li>
            <li>
              If you never signed up, or want to rejoin the list, head to{" "}
              <a
                href="https://vipassana.cool/practice-buddy"
                className="text-[#8b7355] hover:underline"
              >
                vipassana.cool/practice-buddy
              </a>
              .
            </li>
            <li>
              Anything else, write to{" "}
              <a
                href="mailto:matt@vipassana.cool"
                className="text-[#8b7355] hover:underline"
              >
                matt@vipassana.cool
              </a>{" "}
              and I&apos;ll sort it out by hand.
            </li>
          </ul>
        </div>

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
