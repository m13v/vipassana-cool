import type { Metadata } from "next";
import Link from "next/link";
import { PageComments } from "@/components/comments";

export const metadata: Metadata = {
  title: "Group Sittings: How to Find, Attend, and Start One — Vipassana Guide",
  description:
    "Everything about Vipassana group sittings: what they are, how to find one near you, what to expect, etiquette, online options, and how to start your own.",
};

export default function GroupSittingsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/guide"
        className="mb-4 inline-block text-sm text-muted hover:text-accent"
      >
        &larr; Back to Guide
      </Link>
      <p className="mb-4 text-sm font-medium tracking-widest uppercase text-accent">
        Community Practice
      </p>
      <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
        Group Sittings: How to Find, Attend, and Start One
      </h1>
      <p className="mb-12 text-lg text-muted">
        Group sittings are the backbone of Vipassana practice outside the course
        environment. They provide structure, accountability, and the collective
        energy that home practice alone can&apos;t replicate.
      </p>

      <div className="space-y-8 text-muted">
        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">What Group Sittings Are</h2>
          <p>
            A group sitting is a weekly or biweekly gathering of old students who sit together in Vipassana meditation. The typical format is about one hour: a Goenka-guided sitting using official audio recordings, followed by a few minutes of metta (loving-kindness meditation).
          </p>
          <p>
            Some group sittings include a short discourse excerpt or a period for questions and discussion after the sitting. Others are pure practice — arrive, sit, leave. The format varies by location, but the core is always the same: meditating together in the Goenka tradition.
          </p>
          <p>
            Group sittings are exclusively for old students — people who have completed at least one 10-day course. If you haven&apos;t done a course yet, this isn&apos;t available to you. Once you have, it becomes one of the most valuable supports for your daily practice.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Why They Matter</h2>
          <p>
            Daily home practice is essential, but it&apos;s also isolating. You&apos;re sitting alone in your room, day after day, with no external feedback and no one to share the experience with. Group sittings address this in several ways:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li><strong>Accountability</strong> — When others expect you, you show up. It&apos;s much harder to skip a group sitting than a home session. The gentle social commitment creates structure your solo practice lacks.</li>
            <li><strong>Collective energy</strong> — Sitting with a group, even in silence, produces a quality of concentration that&apos;s different from sitting alone. Many meditators report deeper sessions in group settings. There&apos;s something about shared silence that calms the mind faster.</li>
            <li><strong>Sangha connection</strong> — The Vipassana path can feel lonely. Your friends and family may not understand your practice. Group sittings connect you with people who do. These relationships form organically over months and years of sitting together.</li>
            <li><strong>Practice anchor</strong> — One weekly group sitting can stabilize an entire week of home practice. If your daily sitting is inconsistent, having a fixed weekly appointment often provides the scaffolding to rebuild. See our <Link href="/guide/restarting-your-practice" className="text-accent underline hover:text-foreground">guide to restarting your practice</Link> for more on this.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">How to Find One</h2>
          <p>
            Group sittings are organized through Vipassana centers, not advertised on social media or meditation apps. Here&apos;s how to find one:
          </p>

          <div className="mt-4 space-y-6">
            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Check your nearest center&apos;s website</h3>
              <p>
                Every Vipassana center has its own website (linked from <a href="https://www.dhamma.org/en/locations/directory" target="_blank" rel="noopener noreferrer" className="text-accent underline hover:text-foreground">dhamma.org</a>). Look for sections labeled &quot;Group Sittings,&quot; &quot;Old Student Schedule,&quot; or &quot;Weekly Sittings.&quot; Some centers list schedules directly; others provide a contact person who can tell you about local options.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Private homes and local groups</h3>
              <p>
                Many group sittings happen in meditators&apos; homes, not at centers. These are coordinated through the local Vipassana community and approved by the nearest center. Ask at your next course or contact your center to find out about home sittings in your area.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Ask after your course</h3>
              <p>
                The best time to find out about group sittings is right after completing a course. Ask the assistant teachers, the course manager, or fellow students. The information is always available — it&apos;s just not prominently advertised.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">What to Expect at Your First One</h2>
          <p>
            If you&apos;ve never attended a group sitting, the format is straightforward but worth knowing in advance:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li><strong>Arrival</strong> — Arrive 5&ndash;10 minutes early. Remove your shoes. The atmosphere is quiet even before the sitting begins.</li>
            <li><strong>Setup</strong> — Cushions, mats, and sometimes chairs are provided. Bring your own if you prefer. Find a spot, settle in.</li>
            <li><strong>The sitting</strong> — Usually one hour. A Goenka audio recording plays at the beginning and end. Between those, you sit in silence and practice as you would at home.</li>
            <li><strong>Metta</strong> — The sitting ends with a few minutes of metta, typically guided by Goenka&apos;s recording.</li>
            <li><strong>After</strong> — Some groups have tea and informal conversation. Others end silently. Follow the group&apos;s lead.</li>
          </ul>
          <p>
            Nobody will judge your posture, your technique, or how long you&apos;ve been practicing. Everyone is there for the same reason: to sit.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Etiquette</h2>
          <p>
            Group sittings are informal but respectful. A few things to keep in mind:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li><strong>Arrive on time</strong> — Ideally a few minutes early. Arriving late disrupts others who are already settling in.</li>
            <li><strong>Silence your phone</strong> — Completely off, not just silent. Vibrations carry in a quiet room.</li>
            <li><strong>Dress modestly</strong> — Nothing strict, but comfortable, modest clothing is appropriate. No need for special meditation clothing.</li>
            <li><strong>No food in the meditation area</strong> — If there&apos;s tea or snacks, they come after the sitting.</li>
            <li><strong>Don&apos;t leave during the sitting</strong> — Unless it&apos;s an emergency. Commit to the full hour.</li>
            <li><strong>Keep conversation light afterward</strong> — Don&apos;t compare experiences, give meditation advice, or discuss other techniques. The after-sitting conversation is social, not instructional.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Online and Virtual Options</h2>
          <p>
            Since 2020, virtual group sittings have become widely available. They&apos;re not a perfect replacement for in-person sittings, but they&apos;re a solid alternative when geography or schedule makes physical attendance impossible.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li><strong>Center-organized Zoom sittings</strong> — Many centers now offer regular online group sittings. Check your center&apos;s website or mailing list for schedules.</li>
            <li><strong>Kunja (kunja.dhamma.org)</strong> — An official platform for online group sittings in the Goenka tradition. You can join scheduled sittings or find information about available sessions.</li>
          </ul>
          <p>
            The advantage of virtual sittings: no commute, accessible from anywhere, and you still get the accountability of sitting with others. The disadvantage: the collective energy of being physically present in the same room is hard to replicate through a screen.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Starting Your Own Group Sitting</h2>
          <p>
            If there&apos;s no group sitting near you, you can start one. But there&apos;s a process — group sittings in the Goenka tradition aren&apos;t casual meetups. They&apos;re organized in coordination with the nearest Vipassana center.
          </p>

          <div className="mt-4 space-y-6">
            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Contact your nearest center</h3>
              <p>
                Reach out to the area teacher or center management. Express your interest in hosting a group sitting. They&apos;ll guide you through the requirements and help you get set up.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Get permission and guidance</h3>
              <p>
                You&apos;ll need approval from the center. This ensures consistency — that the sittings use official recordings and follow the standard format. The center may also connect you with other old students in your area.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Use official recordings</h3>
              <p>
                Group sittings use Goenka&apos;s audio recordings, not freelance instruction. The center will tell you which recordings to use and how to access them. This keeps the practice pure and prevents well-meaning drift from the technique.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Practical considerations</h3>
              <p>
                You need a quiet space (a living room works), cushions or chairs, and a way to play the recordings. Start with even two or three people. The group will grow naturally through word of mouth within the local Vipassana community.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Group Sittings as a Restart Anchor</h2>
          <p>
            If you&apos;ve fallen off your daily practice and are struggling to get back on the cushion, committing to a single weekly group sitting can be the catalyst that restarts everything.
          </p>
          <p>
            Here&apos;s why it works: a group sitting is a fixed, external commitment. You don&apos;t have to generate motivation from scratch — you just show up because it&apos;s Wednesday evening and that&apos;s what you do. One solid hour of sitting per week, even without daily home practice, keeps the technique alive and the connection to the practice intact.
          </p>
          <p>
            Many meditators find that the group sitting naturally leads to restarting daily practice. You sit well in the group, you feel the benefit, and the next morning you sit at home too. The weekly anchor creates momentum that spills into the rest of the week.
          </p>
          <p>
            If this resonates, read our{" "}
            <Link href="/guide/restarting-your-practice" className="text-accent underline hover:text-foreground">
              guide to restarting your practice
            </Link>{" "}
            for a complete plan on getting back on track.
          </p>
        </section>
      </div>

      <div className="mt-16 rounded-xl border border-border bg-card p-8 text-center">
        <h2 className="mb-3 text-xl font-bold">Find a Group Sitting</h2>
        <p className="mb-6 text-muted">
          Check your nearest Vipassana center for group sitting schedules.
        </p>
        <a
          href="https://www.dhamma.org/en/locations/directory"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Find a Center
        </a>
      </div>

      <PageComments pageId="guide-group-sittings" />
    </article>
  );
}
