const showcaseCards = [
  {
    title: "Primary",
    description: "Main actions and important emphasis.",
    className: "bg-primary text-primary-foreground",
  },
  {
    title: "Secondary",
    description: "Supporting interactive elements.",
    className: "bg-secondary text-secondary-foreground",
  },
  {
    title: "Accent",
    description: "Highlights and decorative details.",
    className: "bg-accent text-accent-foreground",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <section
        id="home"
        className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-6xl scroll-mt-24 flex-col justify-center px-6 py-24"
      >
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.35em] text-app-tertiary-0">
          Bryan Reyes / Developer Portfolio
        </p>

        <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-7xl">
          Creative, technical,{" "}
          <span className="text-primary">innovative.</span>
        </h1>

        <p className="mt-6 max-w-2xl font-sans text-base leading-8 text-app-text-muted sm:text-lg">
          A place for my software projects, experiments, and the things I am
          learning to build. Use the appearance control to explore the color
          and typography system.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-xl bg-primary px-5 py-3 font-sans text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Explore projects
          </a>
          <a
            href="#about"
            className="rounded-xl border border-app-border-subtle px-5 py-3 font-sans text-sm font-semibold text-foreground transition-colors hover:border-app-secondary-1 hover:text-app-secondary-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            About this portfolio
          </a>
        </div>

        <div className="mt-16 grid gap-3 sm:grid-cols-3">
          {showcaseCards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-app-border-subtle bg-app-bg-base p-5"
            >
              <div
                className={"mb-4 inline-flex rounded-lg px-3 py-1.5 font-mono text-xs font-semibold " + card.className}
              >
                {card.title}
              </div>
              <p className="font-sans text-sm leading-6 text-app-text-muted">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-24 border-t border-app-border-subtle bg-app-bg-base"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-app-secondary-1">
            01 / About
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            A little about me.
          </h2>
          <p className="mt-5 max-w-2xl font-sans leading-8 text-app-text-muted">
            I enjoy building software, understanding how systems work, and
            turning ideas into useful products. This section will grow as the
            portfolio takes shape.
          </p>
        </div>
      </section>

      <section id="projects" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-app-tertiary-0">
            02 / Selected work
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Projects.
          </h2>
          <div className="mt-8 rounded-2xl border border-dashed border-app-border-subtle bg-app-bg-base p-8">
            <p className="font-sans text-app-text-muted">
              Project cards will go here. This panel is also theme-aware.
            </p>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="scroll-mt-24 border-t border-app-border-subtle bg-app-bg-base"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-app-secondary-1">
            03 / Tools and technologies
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Skills.
          </h2>
          <p className="mt-5 max-w-2xl font-sans leading-8 text-app-text-muted">
            The technologies and concepts I use will be organized here as the
            portfolio content is developed.
          </p>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-app-tertiary-0">
            04 / Get in touch
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Contact.
          </h2>
          <p className="mt-5 max-w-2xl font-sans leading-8 text-app-text-muted">
            Contact details and links will go here.
          </p>
        </div>
      </section>
    </main>
  );
}
