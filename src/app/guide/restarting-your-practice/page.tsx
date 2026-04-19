import type { Metadata } from "next";
import Link from "next/link";
import { PageComments } from "@/components/comments";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { ArticleSchema } from "@/components/article-schema";
import { ArticleHeader } from "@/components/article-header";
import { FaqSchema } from "@/components/faq-schema";
import { PracticeBuddyCta } from "@/components/practice-buddy-cta";

const PAGE_URL = "https://vipassana.cool/guide/restarting-your-practice";
const PUBLISHED = "2025-09-01";

export const metadata: Metadata = {
  title: "Restarting Your Vipassana Practice After a Long Gap",
  description:
    "Most old students stop sitting at some point. This page is about motivation, community, and the traditional paths for re-engaging: group sittings, short courses, and the 10-day course. Non-teaching.",
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: "Is it normal to stop practicing for a long time?",
    answer:
      "Yes. Most long-term practitioners in the Goenka tradition have had stretches, sometimes years, without daily practice. Lapses are essentially universal and not something to feel unusually guilty about.",
  },
  {
    question: "What is the traditional way to re-engage after a long gap?",
    answer:
      "The paths the tradition itself recommends are: attending a group sitting for old students at a local center, sitting a short course (typically three days) if one is available, or sitting another 10-day course. These are the structures the tradition has built for exactly this situation.",
  },
  {
    question: "Should I sit another 10-day course to restart?",
    answer:
      "If it has been a long time, or if you have tried to restart at home multiple times without it sticking, a 10-day course is often the most effective re-entry. The tradition recommends at least one course per year for old students for this kind of reason.",
  },
  {
    question: "Can I ask an assistant teacher for help?",
    answer:
      "Yes. Centers welcome questions from old students by email, phone, and in person at group sittings. Teachers are the appropriate place for any questions about how to resume practice.",
  },
  {
    question: "What is a Practice Buddy?",
    answer:
      "A Practice Buddy is a fellow old student who agrees to sit with you over video, in silence, on a regular schedule. It provides accountability without discussion of technique. See /practice-buddy/how-it-works.",
  },
  {
    question: "How do I handle guilt about having stopped?",
    answer:
      "Gently. Guilt is itself a form of aversion, and attachments to a perfect streak are not what the practice is about. The tradition's framing is much more practical: notice, come back, continue.",
  },
];

export default function RestartingPracticePage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://vipassana.cool" },
          { name: "Guide", url: "https://vipassana.cool/guide" },
          { name: "Restarting Your Practice", url: PAGE_URL },
        ]}
      />
      <ArticleSchema
        title="Restarting Your Vipassana Practice"
        description="Non-teaching reflections on motivation, community, and the traditional paths for re-engaging after a long gap in daily sitting."
        url={PAGE_URL}
        datePublished={PUBLISHED}
      />
      <FaqSchema faqs={faqs} />
      <ArticleHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guide", href: "/guide" },
          { label: "Restarting Your Practice" },
        ]}
        category="Getting Back on Track"
        title="Restarting Your Practice"
        description="You stopped sitting. Weeks, months, maybe years. Here is the short version: you are in extremely good company, and the tradition has well-worn paths back."
        datePublished={PUBLISHED}
      />

      <div className="mb-8 rounded-lg border border-accent/20 bg-accent/5 p-4">
        <p className="text-sm font-medium text-accent mb-1">TL;DR</p>
        <p className="text-sm text-muted">
          Long gaps in daily practice are extremely common, and the Goenka tradition has clear paths for re-engaging: local group sittings for old students, short courses, and the 10-day course. This page is about motivation and those structures. It does not contain any sitting-length ramp or technique prescription: how you practice was taught at your course, and is the province of an assistant teacher from there on.
        </p>
      </div>

      <div className="space-y-8 text-muted">
        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">You are not alone, and you have not ruined anything</h2>
          <p>
            Essentially every long-term meditator in this tradition has stopped sitting at some point. For some it is weeks, for others years. Life happens: new babies, demanding jobs, grief, moves, illness, burnout, complicated stretches of the heart and mind. The practice does not disappear during those times. You also do not fall out of the old-student community by being absent from the cushion.
          </p>
          <p>
            Guilt about having stopped is, in the tradition&apos;s own framing, another form of the reactivity the practice is pointing at. Noticing it, and not making a project out of it, is a much kinder place to start than self-recrimination.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Why lapses happen</h2>
          <p>
            A daily sitting depends on a very particular alignment: time, energy, privacy, and the willingness to sit with discomfort. Any of those can give way, and in ordinary life they often do. Solo practice in a busy household is a fragile structure. It does not take a dramatic reason to lose it.
          </p>
          <p>
            Understanding this as structural, rather than as a personal failure, is useful. It directs your attention to what would help next time, rather than to more guilt.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">The tradition&apos;s own paths for re-engaging</h2>
          <p>
            The Goenka tradition has built three main structures for old students who want to re-engage. None of them require you to figure out how to restart alone.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>Group sittings.</strong> Most centers and many cities host weekly group sittings for old students. They are a natural, low-threshold re-entry point. See <Link href="/guide/group-sittings" className="text-accent underline hover:text-foreground">group sittings</Link> for more.
            </li>
            <li>
              <strong>Short courses.</strong> Three-day courses are offered at many centers for old students. They are shorter and logistically easier to fit into life than a full 10-day course, and are explicitly designed as a way to re-anchor practice.
            </li>
            <li>
              <strong>Another 10-day course.</strong> If the gap has been long or you have tried to restart at home repeatedly, a full course is often the most effective step. The tradition suggests old students sit at least one course per year for exactly this kind of reason.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">The value of community and accountability</h2>
          <p>
            Solo practice is beautiful and difficult. Shared practice is also beautiful and slightly less difficult to maintain, because it is carried by more than one person&apos;s momentum at a time. Two old students who know they will be sitting together tomorrow are, together, more likely to actually sit tomorrow than either one alone.
          </p>
          <p>
            This is not a deep insight; it is just how humans work. Group sittings, weekly check-ins with an old-student friend, or a Practice Buddy pairing are all ways of outsourcing a small amount of the momentum your practice needs.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">What not to try to do from scratch, alone</h2>
          <p>
            When people try to rebuild a practice from scratch on their own, they often try to engineer a detailed program for themselves: a schedule, a plan, a set of rules. Sometimes this works. More often it doesn&apos;t, because the problem was not a missing plan. The original instructions for the practice are fine; what tends to be missing is the surrounding structure.
          </p>
          <p>
            That is what group sittings, courses, and pairings are for. They are the structure, not an improved plan.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Talking to an assistant teacher</h2>
          <p>
            If you are uncertain about how to restart, or about what has been coming up for you since you stopped, an assistant teacher is the right person to talk to. Centers are set up to handle exactly these conversations. Emailing your regional center with a brief note about your situation is entirely normal, and you will not be the first person to do it.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Reclaiming a little bit of space</h2>
          <p>
            If a cushion that hasn&apos;t been used in a year has been buried under laundry, dusting it off and putting it back in its spot is a small, concrete signal of intention. You do not have to sit today. Just reclaim the space. Often the sitting comes later, on its own, once the space is ready for it again.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">A more forgiving frame</h2>
          <p>
            A practice measured over years or decades will include many stops and restarts. The practitioners who last are not the ones who never paused. They are the ones who kept returning. That is the whole craft: returning.
          </p>
          <p>
            Returning today looks like signing up for the next short course, emailing your center, messaging an old-student friend, or simply sitting somewhere quiet again. None of it has to be dramatic. It just has to be the next thing.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Frequently asked questions</h2>
          <div className="mt-4 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-l-2 border-accent/30 pl-4">
                <h3 className="mb-1 font-semibold text-foreground">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <PracticeBuddyCta
        heading="Restarting is easier with a partner"
        description="Get matched with a fellow old student for daily shared sittings over video. Silent, free, tradition-respectful."
      />

      <div className="mt-8 rounded-xl border border-border bg-card p-8 text-center">
        <h2 className="mb-3 text-xl font-bold">Sit another course</h2>
        <p className="mb-6 text-muted">
          The tradition&apos;s own reset button. Short courses and 10-day courses are both available at centers worldwide.
        </p>
        <a
          href="https://www.dhamma.org/en-US/courses/search"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Find a course
        </a>
      </div>

      <div className="mt-12 rounded-xl border border-border bg-card p-6">
        <h2 className="mb-4 font-semibold text-foreground">Related</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/guide/group-sittings" className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent">
            Group Sittings
          </Link>
          <Link href="/guide/find-a-retreat" className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent">
            Find a Retreat
          </Link>
          <Link href="/guide/course-application-tips" className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent">
            Course Application Tips
          </Link>
          <Link href="/practice-buddy/how-it-works" className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent">
            Practice Buddy
          </Link>
          <Link href="/experience" className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent">
            Student Experiences
          </Link>
        </div>
      </div>

      <PageComments pageId="guide-restarting-practice" />
    </article>
  );
}
