import type { Metadata } from "next";

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
      <p className="mb-4 text-lg text-muted">
        By{" "}
        <a
          href="https://m13v.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          Matthew Diakonov
        </a>{" "}
        — engineer, startup founder, and Vipassana practitioner.
      </p>
      <p className="mb-12 text-muted">
        60 days of courses. 881+ days of daily practice. Here&apos;s what I&apos;ve
        learned.
      </p>

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
            The First Course: Survival Mode
          </h2>
          <p>
            I&apos;m not going to romanticize it. The first course was one of the hardest
            things I&apos;ve ever done.
          </p>
          <p className="mt-4">
            Day 1: Okay, this is fine. Sit, breathe, observe. Simple.
          </p>
          <p className="mt-4">
            Day 2: My knees are screaming. My mind won&apos;t shut up. I&apos;ve
            replayed every conversation I&apos;ve had in the last 5 years. I want my phone.
          </p>
          <p className="mt-4">
            Day 3: Existential crisis. Why am I here? This is pointless. I could be
            shipping code right now. I seriously considered leaving.
          </p>
          <p className="mt-4">
            Day 4: Something shifted. The technique deepened. For the first time, I could
            feel sensations throughout my body that I&apos;d never noticed. It was like
            discovering a new sense.
          </p>
          <p className="mt-4">
            Days 5–9: A strange oscillation between profound peace and intense
            discomfort. Not always pleasant, but always interesting. The evening
            discourses by Goenka became something I genuinely looked forward to —
            the man has a wonderful sense of humor.
          </p>
          <p className="mt-4">
            Day 10: Silence breaks. Talking felt alien. I realized how much noise I
            normally fill my life with. A deep sense of gratitude for the experience.
          </p>
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
            actually happens. 881+ days of sitting, morning and evening. Some days
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
        <a
          href="https://www.dhamma.org/en-US/courses/search"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Find a Course
        </a>
      </div>
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
