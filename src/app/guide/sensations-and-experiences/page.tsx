import type { Metadata } from "next";
import Link from "next/link";
import { PageComments } from "@/components/comments";

export const metadata: Metadata = {
  title: "Vipassana Sensations Explained — Gross, Subtle, Bhanga & Free Flow",
  description:
    "What the different sensations in Vipassana mean: gross vs subtle, what bhanga (free flow) is, why sensations change daily, and when experiences scare you.",
};

export default function SensationsExplainedPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/guide"
        className="mb-4 inline-block text-sm text-muted hover:text-accent"
      >
        &larr; Back to Guide
      </Link>
      <p className="mb-4 text-sm font-medium tracking-widest uppercase text-accent">
        Understanding the Practice
      </p>
      <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
        Vipassana Sensations Explained
      </h1>
      <p className="mb-12 text-lg text-muted">
        Gross sensations, subtle sensations, free flow, and everything in between.
        What they mean, why they change, and why chasing them misses the point.
      </p>

      <div className="space-y-8 text-muted">
        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">The Landscape of Sensations</h2>
          <p>
            When you practice Vipassana body scanning, you encounter an enormous range of sensations. Some are familiar — pain in your knee, an itch on your nose. Others are surprising — vibrations you&apos;ve never noticed, waves of heat or cold, tingling that seems to have no physical cause.
          </p>
          <p>
            This is normal. You&apos;re not imagining things, and you&apos;re not &quot;making sensations up.&quot; As concentration deepens, your awareness becomes sensitive enough to detect what was always there but below your usual threshold of perception.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Gross Sensations</h2>
          <p>
            Gross sensations are the obvious ones: pain, pressure, heaviness, intense heat, sharp stinging, throbbing, cramping. They&apos;re called &quot;gross&quot; not because they&apos;re disgusting but because they&apos;re coarse and easy to detect.
          </p>
          <p>
            Early in practice, gross sensations dominate. Your knees hurt from sitting. Your back aches. You feel a dull heaviness in your chest. An area of your body feels &quot;blocked&quot; — like your awareness can&apos;t penetrate it.
          </p>
          <p>
            <strong>The right response:</strong> Observe with equanimity. Don&apos;t push the pain away. Don&apos;t tense against it. Just observe: &quot;There is pain here. It has these qualities. It changes moment to moment.&quot; The pain won&apos;t necessarily disappear, but your reaction to it can change fundamentally.
          </p>
          <p>
            Gross sensations are not &quot;bad&quot; meditation. They&apos;re where some of the most important work happens. Developing equanimity toward pain is far more transformative than enjoying pleasant vibrations.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Subtle Sensations</h2>
          <p>
            As concentration deepens — sometimes within a single sitting, sometimes over days or weeks — you begin to notice subtler sensations: gentle tingling, fine vibrations, warmth flowing through an area, a sense of &quot;aliveness&quot; in parts of the body that previously felt numb.
          </p>
          <p>
            Subtle sensations are often pleasant. Your entire body might feel like it&apos;s vibrating gently. Areas that were blocked begin to open. The scan flows more smoothly.
          </p>
          <p>
            <strong>The trap:</strong> It&apos;s very easy to start craving subtle sensations. They feel good. They feel like &quot;progress.&quot; You start trying to recreate them, seeking out the pleasant vibrations, getting frustrated when they don&apos;t appear.
          </p>
          <p>
            This is exactly what Goenka warns about. Craving pleasant sensations is just as much a hindrance as aversion to pain. The practice is equanimity toward <em>all</em> sensations — pleasant, unpleasant, and neutral.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Bhanga: Free Flow</h2>
          <p>
            Bhanga (also called &quot;dissolution&quot; or &quot;free flow&quot;) is a specific experience where the solid sense of the body seems to dissolve into a field of vibrations. During a body scan, instead of encountering distinct areas of sensation, your awareness moves through the body as a continuous flow. The boundary between &quot;body&quot; and &quot;not body&quot; becomes unclear.
          </p>
          <p>
            This is one of the most discussed (and misunderstood) experiences in Vipassana. People describe it in various ways: &quot;my body dissolved into light,&quot; &quot;everything was vibrating,&quot; &quot;I couldn&apos;t feel the boundary of my skin.&quot;
          </p>
          <p>
            <strong>What it actually is:</strong> Your concentration has reached a level where you&apos;re perceiving sensations at a very fine resolution. What normally feels like a solid arm now feels like a field of rapidly changing particles. This is direct experiential insight into <em>anicca</em> (impermanence) — everything is in constant flux.
          </p>
          <p>
            <strong>What it is not:</strong> Enlightenment, a spiritual achievement, or the goal of practice. It&apos;s an experience, and like all experiences, it arises and passes away.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Why Sensations Change Daily</h2>
          <p>
            One of the most confusing aspects of Vipassana practice is the inconsistency. Yesterday you had a deep, free-flowing session. Today your body feels like concrete. Yesterday there were subtle vibrations everywhere. Today there&apos;s nothing but dull aching.
          </p>
          <p>
            This is completely normal and is itself part of the teaching. Sensations change because:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li><strong>Concentration varies.</strong> Some days your mind is sharper than others. Subtle sensations require concentration to detect.</li>
            <li><strong>The body processes different layers.</strong> The technique works with stored patterns (sankharas) at different depths. Some days the surface is clear; other days deeper material comes up as gross sensations.</li>
            <li><strong>Sleep, food, and stress affect everything.</strong> A poorly-slept night or a stressful day changes the landscape of your practice.</li>
            <li><strong>This is literally the point.</strong> Impermanence (<em>anicca</em>) is the core teaching. Everything changes — including your meditation experience. Observing this change with equanimity <em>is</em> the practice.</li>
          </ul>
          <p>
            Stop evaluating your sittings as &quot;good&quot; or &quot;bad.&quot; A sitting where you observe gross sensations with equanimity is just as valuable as one with free flow. Maybe more so.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">When Sensations Scare You</h2>
          <p>
            Sometimes during practice, sensations arise that feel frightening: sudden intense heat, involuntary twitching, a feeling of falling, electric-like jolts, pressure in the head, or waves of emotion that seem to come from nowhere.
          </p>
          <p>
            In most cases, these are normal aspects of deep meditation. The body stores tension and trauma as physical patterns, and when these patterns release, the sensations can be surprising and unfamiliar.
          </p>
          <p>
            <strong>What to do:</strong>
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li><strong>Maintain equanimity.</strong> This is easier said than done when something scary is happening, but it&apos;s the core instruction. Observe without reacting.</li>
            <li><strong>Return to Anapana.</strong> If the sensations are too intense, narrow your focus back to the breath. This is always available as a safe harbor.</li>
            <li><strong>Talk to the teacher.</strong> During a course, use the question time to describe what you&apos;re experiencing. At home, contact your local center.</li>
            <li><strong>Distinguish intensity from danger.</strong> Intense is not the same as harmful. An unfamiliar sensation is not a medical emergency. That said, if something genuinely concerns you about your physical health, seek medical attention.</li>
          </ul>
          <p>
            If you&apos;re experiencing dissociation, panic attacks, flashbacks, or psychological distress that goes beyond manageable discomfort, stop scanning and seek professional support. Read our <Link href="/faq/is-vipassana-safe" className="text-accent underline hover:text-foreground">safety guide</Link> for more on when to be cautious.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">The Point Is Not the Sensations</h2>
          <p>
            This is the most important thing to understand, and the thing most meditators lose sight of at some point: <strong>the sensations are not the goal. Equanimity is the goal.</strong>
          </p>
          <p>
            It doesn&apos;t matter whether you experience free flow or dull pain. What matters is how you relate to whatever arises. Can you observe pain without aversion? Can you observe pleasure without craving? Can you sit with ambiguity and uncertainty without needing to label and control the experience?
          </p>
          <p>
            The meditator who sits with knee pain for an hour, maintaining steady equanimity, is doing deeper work than the meditator who chases free-flow experiences. The practice is in the equanimity, not in the experience.
          </p>
          <p>
            Goenka repeats this endlessly during the course for a reason: we all forget it. We all start chasing good experiences and avoiding bad ones. Noticing that tendency <em>and returning to equanimity</em> is itself the practice.
          </p>
        </section>
      </div>

      <div className="mt-16 rounded-xl border border-border bg-card p-8 text-center">
        <h2 className="mb-3 text-xl font-bold">Experience It Yourself</h2>
        <p className="mb-6 text-muted">
          Sensations are understood through practice, not reading. Find a course near you.
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

      <PageComments pageId="guide-sensations-explained" />
    </article>
  );
}
