import type { Metadata } from "next";
import Link from "next/link";
import { PageComments } from "@/components/comments";

export const metadata: Metadata = {
  title: "Recognizing Progress in Vipassana — What Deepening Actually Looks Like",
  description:
    "How to recognize progress in Vipassana meditation: subtle signs over months, signs of deepening over years, plateaus, and the trap of measuring progress in a letting-go practice.",
};

export default function RecognizingProgressPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/guide"
        className="mb-4 inline-block text-sm text-muted hover:text-accent"
      >
        &larr; Back to Guide
      </Link>
      <p className="mb-4 text-sm font-medium tracking-widest uppercase text-accent">
        Deepening Practice
      </p>
      <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
        Recognizing Progress: What Deepening Actually Looks Like
      </h1>
      <p className="mb-12 text-lg text-muted">
        Progress in Vipassana is real but rarely dramatic. It&apos;s gradual, often
        invisible to you, and almost always noticed by others before you see it
        yourself. Here&apos;s what to actually look for.
      </p>

      <div className="space-y-8 text-muted">
        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Why Progress Is Hard to See</h2>
          <p>
            You are the worst judge of your own progress. This isn&apos;t false modesty — it&apos;s a structural problem. Change happens so gradually that you can&apos;t perceive it from the inside, the same way you don&apos;t notice your hair growing.
          </p>
          <p>
            Others see it first. Your partner notices you&apos;re calmer. A friend says you seem more present. A colleague remarks that you handle stress differently. You&apos;ll dismiss these observations (&quot;I&apos;ve always been like this&quot;), but they&apos;re usually the most reliable signal that the practice is working.
          </p>
          <p>
            The other problem: the mind that would evaluate progress is the same mind being changed by the practice. It&apos;s like asking a river to measure its own current. The observation tool keeps shifting along with what it&apos;s observing.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">What Progress Is NOT</h2>
          <p>
            Before looking at what progress is, it helps to clear away common misconceptions:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li><strong>Dramatic sensations</strong> — Free flow, vibrations, dissolution experiences. These are byproducts of concentration, not signs of wisdom. A meditator with subtle sensations and deep equanimity is progressing more than one with dramatic experiences and no equanimity.</li>
            <li><strong>Bliss or euphoria</strong> — Feeling wonderful during meditation is pleasant but not the goal. Craving pleasant sensations is as much an obstacle as averting unpleasant ones.</li>
            <li><strong>Mystical visions or experiences</strong> — Lights, colors, visions, past-life memories. Goenka addresses these directly: they&apos;re distractions. Observe them, don&apos;t attach to them, and continue the body scan.</li>
            <li><strong>Long sitting times</strong> — Sitting for two hours doesn&apos;t automatically mean deeper practice than sitting for 45 minutes. Duration matters, but quality of equanimity matters more.</li>
          </ul>
          <p>
            The common thread: progress is not about what happens during meditation. It&apos;s about what happens in the 22 hours you&apos;re not on the cushion.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Subtle Signs: Months 1&ndash;6</h2>
          <p>
            In the first months of consistent daily practice after a course, you may notice:
          </p>

          <div className="mt-4 space-y-6">
            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Faster emotional recovery</h3>
              <p>
                You still get angry, sad, anxious. But the duration shortens. Where anger used to last hours, it lasts minutes. Where a bad day used to spiral into a bad week, you catch it and stabilize. The emotions are the same — the recovery time is compressed.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Body awareness off the cushion</h3>
              <p>
                You start noticing physical sensations during daily life — tension in your jaw during a stressful conversation, tightness in your chest before a difficult email, relaxation in your shoulders when you walk in nature. The body scan moves from a formal exercise into an ambient awareness.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Sleep improvement</h3>
              <p>
                Many meditators report better sleep quality within the first few months. Not necessarily more sleep, but deeper and more restful. The mind that has been trained to observe rather than amplify thoughts settles more easily at night.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Catching reactions mid-flight</h3>
              <p>
                This is the hallmark early sign. You&apos;re about to say something sharp, and you catch yourself. You notice the impulse to check your phone compulsively and pause. You feel the urge to react and instead observe the sensation underneath the urge. You don&apos;t always succeed in stopping the reaction — but you see it happening in real time.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Signs of Deepening: Months 6&ndash;24</h2>
          <p>
            With continued practice, subtler shifts emerge:
          </p>

          <div className="mt-4 space-y-6">
            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Practice becomes non-negotiable</h3>
              <p>
                At some point, the question shifts from &quot;should I sit today?&quot; to &quot;when am I sitting today?&quot; Missing a session feels wrong, like skipping a meal. The practice has moved from discipline to need. This transition usually happens between 6 and 18 months of consistent sitting.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Equanimity in daily life</h3>
              <p>
                Not indifference — equanimity. You still care about outcomes, but your happiness isn&apos;t as tightly coupled to them. A meeting goes badly, and you notice disappointment without drowning in it. A plan falls through, and you adjust without the internal drama you used to generate. The gap between stimulus and response widens.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Changed relationship with pain</h3>
              <p>
                Physical discomfort — in meditation and daily life — becomes less threatening. Not because you feel less pain, but because the reactive layer on top of the pain (the &quot;I hate this, make it stop&quot; narrative) weakens. You observe pain as sensation. This doesn&apos;t eliminate it, but it dramatically reduces suffering.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Fewer wasted conflicts</h3>
              <p>
                Arguments you would have had don&apos;t happen. Not because you suppress your position, but because you recognize earlier that the conflict isn&apos;t worth the cost, or you express yourself with less charge. Relationships become smoother not through effort but through reduced reactivity.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Signs of Deepening: Years 2+</h2>
          <p>
            Long-term practitioners often describe changes that are harder to articulate:
          </p>

          <div className="mt-4 space-y-6">
            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Identity shift</h3>
              <p>
                The practice is no longer something you do — it&apos;s part of who you are. &quot;I am a meditator&quot; becomes as natural as &quot;I am a parent&quot; or &quot;I am an engineer.&quot; The identity includes the difficult days, the breaks, the restarts. It&apos;s a stable sense of commitment that persists even when the practice itself is inconsistent.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Deeper compassion</h3>
              <p>
                As equanimity with your own suffering deepens, compassion for others&apos; suffering naturally increases. Not intellectual compassion (&quot;I should care about this&quot;) but felt compassion — a genuine, somatic response to the suffering of others. The metta at the end of each sitting starts to feel less like a ritual and more like an expression of something real.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Tolerance for uncertainty</h3>
              <p>
                The need to know, to plan, to control outcomes loosens. You become more comfortable with &quot;I don&apos;t know.&quot; Decisions come from clarity rather than anxiety. This is one of the least discussed but most practically useful changes — it makes you better at navigating complex, ambiguous situations.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Plateaus and What They Mean</h2>
          <p>
            Every meditator hits plateaus. They feel like stagnation, but they&apos;re usually consolidation — the mind integrating at a deeper level before the next shift. Common plateaus:
          </p>

          <div className="mt-4 space-y-6">
            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">The concentration plateau</h3>
              <p>
                Your mind wanders as much as it did weeks ago. The sharpness from your last course has faded. You feel like you&apos;re just going through the motions. This is normal — concentration fluctuates. Continue the practice. The depth returns, often suddenly.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">The sensation plateau</h3>
              <p>
                Sensations that were vivid become subtle or disappear. Where you once felt flowing vibrations, now you feel dull heaviness or nothing at all. This isn&apos;t regression — the practice is working at a level below conscious sensation. Equanimity toward &quot;nothing happening&quot; is some of the deepest work you can do.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">The motivation plateau</h3>
              <p>
                You&apos;re still sitting, but you&apos;re not sure why. The initial enthusiasm has faded. You haven&apos;t had a breakthrough in months. The practice feels like brushing your teeth — necessary but uninspiring. This is actually a good sign. The practice has moved past the novelty phase into mature commitment. Keep going.
              </p>
            </div>
          </div>

          <p className="mt-6">
            The response to every plateau is the same: sit. Don&apos;t try to fix it. Don&apos;t analyze it. Don&apos;t change your technique. Just continue. Plateaus resolve themselves with continued equanimous practice.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">When to Increase Duration or Take the Next Step</h2>
          <p>
            Practical readiness signals that you might be ready for more:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li><strong>Your current duration feels too short</strong> — You regularly wish the timer hadn&apos;t gone off. The body scan is flowing well when you have to stop.</li>
            <li><strong>Daily practice is stable</strong> — You&apos;ve been sitting consistently for several months without major gaps.</li>
            <li><strong>You crave the depth of a course</strong> — Not as an escape, but as a deepening. You want the intensive environment to go further than home practice allows.</li>
            <li><strong>Equanimity is your default</strong> — Most sits, regardless of sensation quality, end with a sense of calm rather than frustration.</li>
          </ul>
          <p>
            For course progression details — what becomes available and when — see our <Link href="/guide/course-progression" className="text-accent underline hover:text-foreground">course progression guide</Link>.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">The Trap of Measuring</h2>
          <p>
            Here&apos;s the deepest irony of this entire page: the practice is about letting go, and measuring progress is a form of clinging. Tracking how far you&apos;ve come, comparing yourself to where you &quot;should&quot; be, evaluating each sit as &quot;good&quot; or &quot;bad&quot; — all of this is the mind doing exactly what the practice is training it not to do.
          </p>
          <p>
            The signs described on this page are useful as reassurance when you doubt the practice is working. They are not a checklist to complete or a scorecard to maintain. The moment you start sitting with the goal of achieving a particular sign of progress, you&apos;ve replaced equanimity with craving.
          </p>
          <p>
            The best relationship with progress: don&apos;t look for it. Sit every day. Do your body scans. Practice equanimity. Take courses. Serve. The changes happen on their own timeline, in their own way. Your job is just to show up.
          </p>
          <p>
            For more on how Vipassana creates lasting change, read our <Link href="/guide/how-vipassana-changes-you" className="text-accent underline hover:text-foreground">guide to how Vipassana changes you</Link>.
          </p>
        </section>
      </div>

      <div className="mt-16 rounded-xl border border-border bg-card p-8 text-center">
        <h2 className="mb-3 text-xl font-bold">Deepen Your Practice</h2>
        <p className="mb-6 text-muted">
          Take another course to go deeper than home practice allows.
        </p>
        <a
          href="https://www.dhamma.org/en-US/courses/search"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Find a Course
        </a>
      </div>

      <PageComments pageId="guide-recognizing-progress" />
    </article>
  );
}
