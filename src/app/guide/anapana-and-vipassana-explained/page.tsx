import type { Metadata } from "next";
import Link from "next/link";
import { PageComments } from "@/components/comments";

export const metadata: Metadata = {
  title: "Anapana & Vipassana Explained — Two Techniques, One Practice",
  description:
    "What Anapana and Vipassana actually are, why Anapana feels calming while Vipassana feels intense, how they complement each other, and common confusion clarified.",
};

export default function AnapanaVipassanaExplainedPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/guide"
        className="mb-4 inline-block text-sm text-muted hover:text-accent"
      >
        &larr; Back to Guide
      </Link>
      <p className="mb-4 text-sm font-medium tracking-widest uppercase text-accent">
        Understanding the Technique
      </p>
      <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
        Anapana & Vipassana Explained
      </h1>
      <p className="mb-12 text-lg text-muted">
        Two techniques that work together. Why Anapana feels calming while Vipassana
        feels intense — and why you need both.
      </p>

      <div className="space-y-8 text-muted">
        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">The Two-Part System</h2>
          <p>
            During a 10-day course, you learn two distinct meditation techniques. They&apos;re taught in sequence and are designed to work together, but they feel very different in practice. Understanding what each one does — and why the sequence matters — clears up a lot of confusion.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Anapana: Sharpening the Tool</h2>
          <p>
            Anapana is breath observation. You sit with your eyes closed and observe the natural breath as it passes through the area below the nostrils and above the upper lip. You don&apos;t control the breath. You don&apos;t count it. You just observe whatever is there: the sensation of air moving, the temperature, the subtle touch on the skin.
          </p>
          <p>
            This is taught during Days 1–3 of the course, and it&apos;s the warm-up for every daily sitting at home.
          </p>
          <p>
            <strong>Why it feels calming:</strong> Anapana narrows your attention to a tiny area. The outside world falls away. Your mind, which normally jumps between a thousand things, gradually settles on one point. This concentration creates a sense of calm and stability that many people find deeply pleasant.
          </p>
          <p>
            <strong>What it does:</strong> Anapana develops <em>samadhi</em> — concentration. It sharpens your attention into a precise instrument. Without this sharpening, the Vipassana technique won&apos;t work properly. You need a concentrated mind to observe the subtle sensations that Vipassana works with.
          </p>
          <p>
            Think of Anapana as sharpening a scalpel. The cutting happens later, but without the sharpening, the tool is useless.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Vipassana: The Actual Work</h2>
          <p>
            Vipassana is a systematic scan of the entire body. Starting from the top of the head, you move your attention slowly downward, observing whatever sensations you find: heat, cold, tingling, pressure, pain, vibration, itching, numbness — anything. You scan from head to feet, then from feet to head, continuously.
          </p>
          <p>
            The critical instruction: <strong>maintain equanimity.</strong> Don&apos;t crave pleasant sensations. Don&apos;t push away unpleasant ones. Just observe, with balanced awareness, whatever is there.
          </p>
          <p>
            <strong>Why it feels intense:</strong> While Anapana narrows attention and creates calm, Vipassana opens you up to everything happening in your body-mind system. Stored tension, suppressed emotions, and habitual reactive patterns surface as sensations. You&apos;re not just observing your body — you&apos;re encountering the accumulated patterns of your entire life.
          </p>
          <p>
            Some sittings bring free-flowing pleasant sensations. Others bring intense pain, heat, or emotional upheaval. The point isn&apos;t the experience itself — it&apos;s your equanimity toward whatever arises.
          </p>
          <p>
            <strong>What it does:</strong> Vipassana develops <em>panna</em> — wisdom through direct experience. By observing sensations without reacting, you&apos;re breaking the habitual pattern of craving and aversion that operates at the deepest level of the mind. This is where the real transformation happens.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Why Some People Prefer Anapana</h2>
          <p>
            This is one of the most common things people post about online: &quot;I enjoy Anapana but Vipassana stresses me out. Can I just do Anapana?&quot;
          </p>
          <p>
            It makes sense. Anapana is calming. It creates a concentrated, peaceful state. Vipassana is uncomfortable — it stirs things up, brings difficult sensations to the surface, and requires you to sit with discomfort.
          </p>
          <p>
            But here&apos;s the key: <strong>the calm of Anapana is the preparation, not the goal.</strong> If you only do Anapana, you&apos;re sharpening the scalpel but never using it. You get temporary relief from the concentrated state, but you&apos;re not working with the deeper patterns that create suffering.
          </p>
          <p>
            Vipassana is harder precisely because it&apos;s doing the deeper work. The discomfort you feel during body scanning is the technique encountering and processing stored material. The equanimity you develop toward that discomfort is what creates lasting change.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">How They Complement Each Other</h2>
          <p>
            In daily practice, the sequence matters:
          </p>
          <ol className="mt-3 list-decimal space-y-2 pl-6">
            <li><strong>Start with 5–10 minutes of Anapana.</strong> This settles your mind and builds the concentration needed for body scanning. Without this warm-up, your Vipassana scan will be scattered and superficial.</li>
            <li><strong>Transition to Vipassana body scanning</strong> for the main portion of your sit. Use the concentrated mind that Anapana developed to observe sensations with precision and equanimity.</li>
            <li><strong>Close with a minute or two of metta</strong> — generating feelings of goodwill and compassion.</li>
          </ol>
          <p>
            If your mind is particularly restless on a given day, spend more time on Anapana before transitioning. There&apos;s no rigid rule — adjust based on what your mind needs that day to reach a workable level of concentration.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Common Confusion</h2>

          <div className="mt-4 space-y-6">
            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">&quot;Am I doing it wrong if I don&apos;t feel much during the scan?&quot;</h3>
              <p>
                No. Some areas of the body have less noticeable sensations, especially early in practice. If you don&apos;t feel anything in a particular area, simply observe the lack of sensation and move on. The awareness itself is the practice. Sensitivity develops over time.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">&quot;Should I force myself to scan even when my mind keeps wandering?&quot;</h3>
              <p>
                If your mind can&apos;t stay focused on the body scan, return to Anapana. There&apos;s no shame in spending an entire session on breath observation. Attempting to scan with a scattered mind produces frustration, not insight. Build concentration first, then scan.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">&quot;The pleasant sensations during scanning — should I try to recreate them?&quot;</h3>
              <p>
                Absolutely not. Craving pleasant sensations is exactly what the practice trains you to stop doing. If free-flowing sensations arise, observe them with the same equanimity as pain or numbness. They&apos;re not the goal — equanimity is the goal.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">&quot;Can I mix Vipassana with other meditation techniques?&quot;</h3>
              <p>
                Goenka&apos;s tradition strongly advises against mixing techniques. The reasoning is that different techniques work at different levels of the mind, and combining them can create confusion rather than clarity. If you want to explore other techniques, do them in separate sessions or periods — but during a Vipassana sit, do only Vipassana.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">In Summary</h2>
          <p>
            Anapana is the foundation. It creates the concentration you need. Vipassana is the practice. It uses that concentration to observe sensations with equanimity, gradually rewiring your reactive patterns. You need both: concentration without wisdom is pleasant but shallow; wisdom without concentration is unfocused and ineffective.
          </p>
          <p>
            If Vipassana feels harder than Anapana, that&apos;s not a sign you&apos;re doing it wrong — it&apos;s a sign the technique is doing its work.
          </p>
        </section>
      </div>

      <div className="mt-16 rounded-xl border border-border bg-card p-8 text-center">
        <h2 className="mb-3 text-xl font-bold">Learn the Technique Firsthand</h2>
        <p className="mb-6 text-muted">
          Vipassana is taught in 10-day residential courses. Find a center near you.
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

      <PageComments pageId="guide-anapana-vipassana-explained" />
    </article>
  );
}
