import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { PageComments } from "@/components/comments";

export const metadata: Metadata = {
  title: "How Practice Buddy Works — Step-by-Step Guide",
  description:
    "Learn exactly how Practice Buddy matches you with a daily meditation partner. From signup to your first Google Meet session — the full process explained.",
  alternates: { canonical: "https://vipassana.cool/practice-buddy/how-it-works" },
  openGraph: {
    title: "How Practice Buddy Works — Step-by-Step Guide",
    description:
      "Learn exactly how Practice Buddy matches you with a daily meditation partner. From signup to your first session.",
  },
};

export default function HowItWorksPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://vipassana.cool" },
          { name: "Practice Buddy", url: "https://vipassana.cool/practice-buddy" },
          { name: "How It Works", url: "https://vipassana.cool/practice-buddy/how-it-works" },
        ]}
      />

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="mb-3 text-sm font-medium tracking-widest uppercase text-accent">
          Practice Buddy
        </p>
        <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          How It Works
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted">
          From signing up to meditating together over Google Meet every morning —
          here&apos;s exactly what happens, step by step.
        </p>
      </section>

      {/* Step 1: Sign Up */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <StepHeader number="1" title="You sign up (2 minutes)" />
          <div className="space-y-4 text-muted">
            <p>
              Fill out a short form on the{" "}
              <Link href="/practice-buddy" className="text-accent hover:underline">
                Practice Buddy page
              </Link>
              . We ask for:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Your name and email</strong> — so we can reach you with your match.</li>
              <li><strong>Are you an old student?</strong> — meaning you&apos;ve completed at least one 10-day Vipassana course as taught by S.N. Goenka. We prioritize matching old students together.</li>
              <li><strong>Your timezone and city</strong> — so we can find someone who sits at a compatible time.</li>
              <li><strong>When you sit</strong> — your morning and/or evening meditation time, and whether you sit once or twice a day.</li>
              <li><strong>Session duration</strong> — how long each sit is (15 minutes, 30 minutes, 1 hour, etc.).</li>
              <li><strong>Your current practice</strong> — whether you&apos;ve maintained a regular practice, and for how long. This isn&apos;t a filter — it helps us write a better introduction.</li>
            </ul>
            <p>
              That&apos;s it. No account creation, no password, no app to download. Just the form.
            </p>
          </div>
        </div>
      </section>

      {/* Step 2: Manual Review */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <StepHeader number="2" title="We review every signup personally" />
          <div className="space-y-4 text-muted">
            <p>
              This isn&apos;t an algorithm. I (Matt) personally review every signup and look
              for compatible pairs. Here&apos;s what I consider, in order of priority:
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <CriteriaCard
                title="Sit time overlap"
                description="Your morning or evening sit time must be within ±60 minutes of your buddy's (compared in UTC). This is the hard filter — everything else is a preference."
              />
              <CriteriaCard
                title="Old student status"
                description="Both old students? Great — you share a depth of experience. We prioritize these matches because the shared context makes the partnership richer."
              />
              <CriteriaCard
                title="Session duration"
                description="Same duration is preferred. If you both sit for 1 hour, you can start and end together. Different durations still work — you just end at different times."
              />
              <CriteriaCard
                title="Frequency"
                description="Once or twice a day. Not a hard filter, but we try to match similar rhythms when possible."
              />
            </div>
            <p>
              I also do a brief web search on each person&apos;s name and email domain to write
              a more personal introduction. This helps your buddy get a sense of who you are
              before the first email.
            </p>
          </div>
        </div>
      </section>

      {/* Step 3: The Match Email */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <StepHeader number="3" title="You get an intro email" />
          <div className="space-y-4 text-muted">
            <p>
              Once I&apos;ve found a good match, both of you receive an introduction email
              from me. The email includes:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>What you have in common</strong> — old student status, sit frequency, session duration, timezone.</li>
              <li><strong>A suggested meeting time</strong> — the midpoint between your two sit times, rounded to the nearest half hour. If you sit at 6:00am and your buddy sits at 7:00am, I&apos;ll suggest 6:30am and note that it&apos;s 30 minutes later for you and 30 minutes earlier for them.</li>
              <li><strong>A brief intro for each person</strong> — city, how long you&apos;ve maintained your practice, and any relevant background.</li>
              <li><strong>A permanent Google Meet link</strong> — more on this below.</li>
            </ul>
            <div className="rounded-xl border border-accent/20 bg-accent/5 p-5">
              <p className="text-sm font-medium text-foreground">
                Important: Reply All
              </p>
              <p className="mt-2 text-sm">
                When you get the intro email, <strong>reply all</strong> to introduce yourself.
                This keeps both you and your buddy on the same thread. If you reply only to me,
                your buddy won&apos;t see your message — and I&apos;ll have to manually forward it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 4: Confirmation Flow */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <StepHeader number="4" title="The confirmation process" />
          <div className="space-y-4 text-muted">
            <p>
              If you&apos;re a first-time signup, you&apos;ll first receive a confirmation email
              before the full introduction. This email describes your potential match and asks:
            </p>
            <div className="flex gap-4 my-4">
              <div className="flex-1 rounded-lg border border-accent/30 bg-accent/5 p-4 text-center">
                <p className="font-semibold text-accent">Yes, introduce me →</p>
              </div>
              <div className="flex-1 rounded-lg border border-border p-4 text-center">
                <p className="font-semibold text-muted">No thanks</p>
              </div>
            </div>
            <p>
              You have <strong>3 days</strong> to respond. If both people click yes, the intro
              email is sent automatically. If one person clicks no, both are placed back in
              the pool for a new match — no hard feelings.
            </p>
            <p>
              If you&apos;ve been matched before and confirmed (meaning you clicked yes
              previously), you&apos;re marked as a <strong>&ldquo;ready&rdquo;</strong> user.
              Next time, you skip the confirmation step entirely — we send the intro email
              directly. You already showed you&apos;re engaged, so we don&apos;t ask twice.
            </p>
          </div>
        </div>
      </section>

      {/* Step 5: Google Meet */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <StepHeader number="5" title="Your daily Google Meet session" />
          <div className="space-y-4 text-muted">
            <p>
              Every matched pair gets a <strong>permanent Google Meet link</strong>. This is
              the core of how Practice Buddy works — and it&apos;s based on what actually
              worked for me personally.
            </p>

            <div className="rounded-xl border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/30 p-6 space-y-4">
              <h3 className="font-semibold text-green-800 dark:text-green-300">How the daily session works</h3>
              <ol className="list-decimal space-y-3 pl-5 text-sm">
                <li>
                  <strong>Open the Meet link at your sit time.</strong> It&apos;s the same link
                  every day — bookmark it, put it on your home screen, whatever works.
                </li>
                <li>
                  <strong>Wait for your buddy to join.</strong> When you both see each other
                  has connected, one of you starts.
                </li>
                <li>
                  <strong>Play a Goenka recording.</strong> One person plays the chanting or
                  guided Anapana/Vipassana instructions and shares their screen and audio
                  through the Google Meet call.
                </li>
                <li>
                  <strong>Meditate together for the full session.</strong> The screen sharing
                  means you both hear the same recording at the same time. The video feed lets
                  you see your buddy is there — like sitting in the same room.
                </li>
                <li>
                  <strong>Chat after if you want.</strong> Many pairs spend 5-10 minutes after
                  the sit talking about how it went, what came up, or just catching up. This
                  is optional but many find it valuable.
                </li>
                <li>
                  <strong>Go about your day.</strong> Same time, same link, tomorrow.
                </li>
              </ol>
            </div>

            <h3 className="font-semibold text-foreground pt-4">Why Google Meet specifically?</h3>
            <p>
              I tried several options — Zoom, FaceTime, WhatsApp video, custom solutions.
              Google Meet won because:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Free with no time limits</strong> — Zoom free caps at 40 minutes. Google Meet has no limit for 1-on-1 calls.</li>
              <li><strong>Screen + audio sharing works great</strong> — one person shares their screen with the Goenka recording playing, and the audio comes through clearly for both. This is the killer feature.</li>
              <li><strong>Works on any device</strong> — phone, tablet, laptop. No app required if you use a browser.</li>
              <li><strong>Permanent links</strong> — the same URL works forever. No need to create a new meeting each day.</li>
              <li><strong>No account required for the joiner</strong> — your buddy can join from the link without a Google account.</li>
              <li><strong>Low bandwidth</strong> — works fine even on mobile data or slow wifi.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="mb-6 text-2xl font-bold">Why I built this</h2>
          <div className="space-y-4 text-muted">
            <p>
              I&apos;ve been meditating over Google Meet with my practice buddy for over
              three years now. Every morning, same time, same link. We open the call, one of
              us plays the Goenka chanting and shares their screen, and we sit for an hour.
              Sometimes we chat for a few minutes after. Then we go start our day.
            </p>
            <p>
              It sounds simple because it is. But that simplicity is exactly what makes it
              work. There&apos;s no app to open, no streak to maintain, no notification to
              dismiss. Just a link and another human who expects to see you there.
            </p>
            <p>
              On the days I don&apos;t feel like sitting — and there are many — knowing my
              buddy is going to be there at 6am is often the difference between sitting and
              not sitting. It&apos;s not guilt or obligation. It&apos;s just... the structure
              that keeps you going when motivation alone isn&apos;t enough.
            </p>
            <p>
              After six 10-day courses and over 900 consecutive days of daily practice, the
              single most important factor in my consistency has been this: another person
              showing up at the same time, to the same link, every single day. Not an app.
              Not a timer. Not willpower. A person.
            </p>
            <p>
              Practice Buddy exists because I want other meditators to have what I have. The
              technique is the same whether you sit alone or with someone. But the probability
              that you&apos;ll actually sit — that changes everything.
            </p>
          </div>
        </div>
      </section>

      {/* What Happens After */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <StepHeader number="6" title="What happens after you're matched" />
          <div className="space-y-4 text-muted">
            <p>
              Once you&apos;re matched and the intro email is sent, the system tracks a few
              things automatically:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Reply detection</strong> — when either of you replies to the intro
                email, we detect it and update the match status. Once both have replied,
                you&apos;re marked as actively communicating.
              </li>
              <li>
                <strong>Meet link clicks</strong> — each person has a unique tracking URL that
                redirects to the shared Google Meet room. This lets us see who&apos;s showing up
                and when, without any manual logging on your part.
              </li>
            </ul>
            <p>
              We don&apos;t monitor your calls or read your messages. The tracking exists only
              so we can tell if a match is working or if someone might need a new buddy.
            </p>
          </div>
        </div>
      </section>

      {/* If It Doesn't Work Out */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <StepHeader number="7" title="If it doesn't work out" />
          <div className="space-y-4 text-muted">
            <p>
              Not every match sticks, and that&apos;s fine. Here&apos;s what can happen:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>One person doesn&apos;t respond</strong> — if you don&apos;t respond to
                the confirmation email within 3 days, the match expires. The person who did
                confirm goes back to the front of the queue. You go back to the pool and
                can be matched again later.
              </li>
              <li>
                <strong>You decline the match</strong> — no problem. Click &ldquo;No thanks&rdquo;
                and you&apos;ll stay in the pool for a different match. Your potential buddy
                will be paired with someone else too.
              </li>
              <li>
                <strong>The match fizzles</strong> — sometimes both people confirm but the
                practice doesn&apos;t take off. If you want a new buddy, just fill out the
                signup form again. Your old match will be ended and you&apos;ll be placed
                back in the pool.
              </li>
              <li>
                <strong>Life changes</strong> — if your schedule changes, you move timezones,
                or you need a break, that&apos;s completely normal. Submit the form again with
                your new preferences and we&apos;ll find you a new match.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="mb-8 text-2xl font-bold">Common Questions</h2>
          <div className="space-y-6">
            <FAQ
              question="Is this free?"
              answer="Yes, completely free. In the spirit of Dāna (generosity), just like the courses themselves. There are no fees, no premium tiers, no upsells."
            />
            <FAQ
              question="Do I need to be an old student?"
              answer="We strongly prefer old students (those who have completed at least one 10-day course as taught by S.N. Goenka). Non-old students can sign up, but matching priority goes to old students, and we try to pair old students together."
            />
            <FAQ
              question="What if my buddy and I are in very different timezones?"
              answer="We only match people whose sit times are within ±60 minutes of each other in UTC. So even if you're in different countries, your actual meditation times will overlap closely. The email will show you the exact suggested meeting time in both your local times."
            />
            <FAQ
              question="Do I have to use Google Meet?"
              answer="The Google Meet link is set up for you automatically, but once you've connected with your buddy, you can switch to whatever works — WhatsApp, FaceTime, Zoom, or even just texting. The Meet link is a starting point, not a requirement."
            />
            <FAQ
              question="How long does matching take?"
              answer="It depends on the pool. If there's someone with a compatible time right now, it could be the same day. If the pool is small or your sit time is unusual, it might take a few days or a week. We don't rush matches — a good match matters more than a fast one."
            />
            <FAQ
              question="Can I have two buddies?"
              answer="Yes! If you sit twice a day (morning and evening), you can have a different buddy for each sit. Just note both times on the signup form."
            />
            <FAQ
              question="What recording do we play?"
              answer="Whatever Goenka recording works for your sit — the standard 1-hour Vipassana instructions, the chanting, or the Anapana instructions. One person plays it on their device and shares screen + audio through Google Meet so you both hear it."
            />
            <FAQ
              question="Is my information shared publicly?"
              answer="Your first name, city, and practice details appear on the waitlist page (no email or last name). The full introduction is only shared with your matched buddy via email."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-accent/5">
        <div className="mx-auto max-w-3xl px-6 py-12 text-center">
          <h2 className="mb-4 text-2xl font-bold">Ready to find your practice buddy?</h2>
          <p className="mb-8 text-muted">
            It takes 2 minutes to sign up. We&apos;ll take it from there.
          </p>
          <Link
            href="/practice-buddy#waitlist-form"
            className="inline-block rounded-lg bg-accent px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Sign Up Now
          </Link>
        </div>
      </section>

      <PageComments pageId="practice-buddy-how-it-works" />
    </>
  );
}

function StepHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white font-bold">
        {number}
      </div>
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  );
}

function CriteriaCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border border-border p-4">
      <h3 className="mb-1 text-sm font-semibold">{title}</h3>
      <p className="text-xs text-muted">{description}</p>
    </div>
  );
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-l-2 border-accent/30 pl-4">
      <h3 className="mb-2 font-semibold">{question}</h3>
      <p className="text-sm text-muted">{answer}</p>
    </div>
  );
}
