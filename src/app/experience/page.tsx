import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageComments } from "@/components/comments";
import { DayCounter } from "@/components/day-counter";
import { TrackedLink, TrackedCTA } from "@/components/tracked-events";

export const metadata: Metadata = {
  title: "Personal Vipassana Experience — 60 Days of Courses, 881+ Days of Practice",
  description:
    "An honest personal account of doing six 10-day Vipassana courses as a tech professional. What changed, what was hard, and why I keep going back.",
};

export default function ExperiencePage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <p className="mb-4 text-sm font-medium tracking-widest uppercase text-accent">
        Personal Experience
      </p>
      <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
        My Vipassana Journey
      </h1>

      {/* Author card */}
      <div className="mb-12 flex items-center gap-5 rounded-xl border border-border bg-card p-5">
        <Image
          src="/matthew.jpg"
          alt="Matthew Diakonov"
          width={80}
          height={80}
          className="rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">Matthew Diakonov</p>
          <p className="text-sm text-muted">
            Engineer, startup founder, Vipassana practitioner.
            <br />
            60 days of courses. <DayCounter /> days of daily practice.
          </p>
          <div className="mt-2 flex gap-3">
            <a href="https://m13v.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent" aria-label="Website">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/matthew-diakonov-a84a1911/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://twitter.com/MatthewHeartful" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent" aria-label="X / Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://github.com/matthew-heartful" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://t.me/matthew_ddi" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent" aria-label="Telegram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="space-y-10 text-muted">
        <section>
          <h2 className="mb-4 text-xl font-bold text-foreground">
            How I Found Vipassana
          </h2>
          <p>
            I&apos;m a tech person through and through — 20+ products built, 3 hackathons
            won, a startup exit. My life was fast-paced, constantly optimizing, always
            building the next thing. Vipassana found me at a point where I realized
            I was good at building things outside of myself, but had no tools for
            understanding what was happening inside.
          </p>
          <p className="mt-4">
            Someone recommended a 10-day course. I was skeptical — 10 days of silence
            sounded like either a cult or a waste of time. But I&apos;d tried apps, books,
            and weekend workshops, and nothing had stuck. So I signed up.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-foreground">
            The First Course: Day by Day
          </h2>
          <p>
            I&apos;m not going to romanticize it. The first course was one of the hardest
            things I&apos;ve ever done. Here&apos;s what each day was actually like:
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              { day: 1, title: "Arrival & Anapana", desc: "Sit, breathe, observe. Simple — until it isn't." },
              { day: 2, title: "Knee Pain & Monkey Mind", desc: "Knees screaming. Mind replaying every conversation from the last 5 years." },
              { day: 3, title: "The Urge to Leave", desc: "Existential crisis. Why am I here? I seriously considered leaving." },
              { day: 4, title: "The Technique Changes", desc: "Something shifted. Sensations I'd never noticed. Like discovering a new sense." },
              { day: 5, title: "Settling In", desc: "Finding rhythm. Pain becomes workable. The practice deepens." },
              { day: 6, title: "Deep Sensations", desc: "Emotional waves. Deeper layers surface. Equanimity tested." },
              { day: 7, title: "Finding Flow", desc: "Mental quiet. Extended concentration. Peace that surprises you." },
              { day: 8, title: "Deepening Equanimity", desc: "Subtle sensations, subtle cravings. The refinement continues." },
              { day: 9, title: "Last Day of Silence", desc: "Bittersweet. Best sittings. Not ready to leave this space." },
              { day: 10, title: "Silence Breaks", desc: "Talking felt alien. Gratitude for the experience. Metta bhavana." },
            ].map((d) => (
              <TrackedLink
                key={d.day}
                href={`/experience/day-${d.day}`}
                event="day_card_click"
                properties={{ day: d.day }}
                className="group rounded-lg border border-border bg-card p-4 transition-colors hover:border-accent/50 hover:bg-card-hover"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  Day {d.day}
                </span>
                <h3 className="mt-1 font-semibold text-foreground group-hover:text-accent">
                  {d.title}
                </h3>
                <p className="mt-1 text-sm">{d.desc}</p>
              </TrackedLink>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-foreground">
            Why I Kept Going Back
          </h2>
          <p>
            After my first course, I felt different — calmer, more aware of my
            reactions, less caught up in the constant mental chatter. But like any
            skill, it fades without practice.
          </p>
          <p className="mt-4">
            I went back. Six times now, for a total of 60 days of courses. Each
            time is different. Some courses are peaceful. Some are deeply
            uncomfortable. Every one has taught me something I couldn&apos;t have
            learned any other way.
          </p>
          <p className="mt-4">
            What keeps me returning is simple: it works. Not in a mystical way.
            In a very practical, observable way. I react less impulsively.
            I&apos;m more present in conversations. I sleep better. When something
            difficult happens, I have a brief moment of space between the event
            and my reaction — and in that space, I can choose.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-foreground">
            Daily Practice: The Real Work
          </h2>
          <p>
            The courses are powerful, but the daily practice is where the transformation
            actually happens. <DayCounter /> days of sitting, morning and evening. Some days
            it&apos;s 20 minutes. Some days it&apos;s the full hour. The important
            thing is continuity.
          </p>
          <p className="mt-4">
            As a tech person, I appreciate that Vipassana is essentially a debugging
            tool for the mind. You observe your mental processes with the same rigor
            you&apos;d apply to debugging code. No stories, no interpretations — just
            direct observation of what&apos;s actually happening.
          </p>
          <p className="mt-4">
            The hardest part isn&apos;t the sitting. It&apos;s the consistency.
            There are mornings when the alarm goes off at 5 AM and every part of me
            wants to skip it. But like any practice — running, coding, writing — the
            compound effect over time is extraordinary.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-foreground">
            What Changed
          </h2>
          <div className="space-y-4">
            <Change title="Reactivity decreased">
              I used to snap at people, stress over small setbacks, ruminate for hours
              over things I couldn&apos;t control. That still happens, but less
              frequently and with less intensity. The gap between stimulus and response
              has grown.
            </Change>
            <Change title="Focus improved">
              Sustained attention is a muscle that Vipassana trains directly. I can
              work on complex problems for longer stretches without reaching for
              distractions.
            </Change>
            <Change title="Sleep got better">
              Not perfectly, not every night. But the average quality of sleep
              improved noticeably. Fewer racing thoughts at bedtime.
            </Change>
            <Change title="Relationships deepened">
              When you&apos;re actually present with people instead of half-planning
              your next thing, relationships change. I listen better. I argue less.
            </Change>
            <Change title="Equanimity in uncertainty">
              Startups are chaotic. Things go wrong constantly. Vipassana didn&apos;t
              make the chaos go away, but it gave me a steadier internal platform
              to deal with it from.
            </Change>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-foreground">
            What I&apos;d Tell Someone Considering It
          </h2>
          <p>
            Just go. Stop reading about it (after this page, obviously), stop
            analyzing whether it&apos;s right for you, and just sign up. The
            intellectual understanding of Vipassana is worth nothing compared to the
            experiential understanding.
          </p>
          <p className="mt-4">
            It will be hard. You will want to quit. Days 2–4 are genuinely
            rough. But if you commit to staying the full 10 days and following the
            instructions, you will leave with something valuable — not because
            anyone told you so, but because you experienced it yourself.
          </p>
          <p className="mt-4">
            That&apos;s the whole philosophy of Vipassana: don&apos;t take anyone&apos;s
            word for it. Practice and see for yourself.
          </p>
        </section>
      </div>

      <div className="mt-16 rounded-xl border border-border bg-card p-8 text-center">
        <h2 className="mb-3 text-xl font-bold">Ready to Experience It Yourself?</h2>
        <p className="mb-6 text-muted">
          Find a center near you and sign up for a 10-day course.
        </p>
        <TrackedCTA
          href="https://www.dhamma.org/en-US/courses/search"
          event="cta_click"
          properties={{ label: "Find a Course", location: "experience" }}
          className="inline-block rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Find a Course
        </TrackedCTA>
      </div>

      <PageComments pageId="experience" />
    </article>
  );
}

function Change({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-l-2 border-accent/30 pl-4">
      <h3 className="mb-1 font-semibold text-foreground">{title}</h3>
      <p>{children}</p>
    </div>
  );
}
