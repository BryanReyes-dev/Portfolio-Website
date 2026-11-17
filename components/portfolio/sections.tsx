import Image from "next/image";
import { GlowCard } from "@/components/portfolio/glow-card";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="mb-2 font-mono text-xs uppercase tracking-[0.22em] text-app-secondary-1">
        {eyebrow}
      </p>
      <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 font-body text-sm leading-7 text-app-text-muted sm:text-base">
          {description}
        </p>
      ) : null}
      <div
        aria-hidden="true"
        className="mt-4 h-px w-24 bg-app-primary-0 shadow-[0_0_7px_var(--app-primary-color-0)]"
      />
    </div>
  );
}

type ProjectCardData = {
  name: string;
  category: string;
  description: string;
  technologies: string[];
  image?: string;
  imageAlt?: string;
  artwork?: string;
  artworkLabel?: string;
  liveUrl?: string;
  sourceUrl?: string;
};

const projects: ProjectCardData[] = [
  {
    name: "Evergreen Estates",
    category: "Full-stack web application",
    description:
      "A real-estate marketplace with public property discovery, URL-driven search and filters, seller storefronts, listing management, reviews, saved homes, authentication, and private media.",
    image: "/evergreencover.png",
    imageAlt: "Evergreen Estates project preview",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Drizzle"],
    liveUrl: "https://evergreen-estates.netlify.app/",
    sourceUrl: "https://github.com/BryanReyes-dev/Evergreen-Estates",
  },
  {
    name: "Daedalus",
    category: "Rust runtime / systems project",
    description:
      "A local-first, headless runtime foundation in Rust. The current milestone includes a portable system-information contract, host hardware discovery, a versioned JSON protocol, a CLI, and a standalone runtime daemon.",
    artwork: "DAEDALUS",
    artworkLabel: "RUST · LOCAL-FIRST · RUNTIME",
    technologies: ["Rust", "Cargo", "JSON protocol", "CLI", "System discovery"],
    sourceUrl: "https://github.com/BryanReyes-dev/Daedalus",
  },
  {
    name: "Wix Blog Generator",
    category: "Editorial workflow application",
    description:
      "A Wix app that lets approved site members generate, review, and edit AI-assisted articles before explicitly saving them as unpublished Wix Blog drafts, with server-side authorization and validation.",
    artwork: "WIX AI",
    artworkLabel: "EDITORIAL · GENERATION · REVIEW",
    technologies: ["Astro", "React", "TypeScript", "Wix AI", "Zod"],
    sourceUrl: "https://github.com/BryanReyes-dev/Wix-Blog-Generator-App",
  },
  {
    name: "Search Project",
    category: "Search and filtering application",
    description:
      "A search and filtering application built with Next.js, TypeScript, and Axios, featuring text search, tag filtering, range filters, and API-driven data fetching.",
    image: "/searchcover.png",
    imageAlt: "Search Project application preview",
    technologies: ["Next.js", "TypeScript", "Axios", "API routes"],
    liveUrl: "https://search-project-wastaken.netlify.app/",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    description: "Building responsive interfaces and interactive experiences.",
    skills: ["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Tailwind CSS", "Motion", "shadcn/ui"],
  },
  {
    title: "Backend & data",
    description: "Working with server logic, persistence, and application security.",
    skills: ["Node.js", "SQL", "PostgreSQL", "Supabase", "Drizzle ORM", "Better Auth", "REST APIs"],
  },
  {
    title: "Systems & AI",
    description: "Exploring local-first software and desktop application architecture.",
    skills: ["Rust", "Electron", "Ollama", "Local AI workflows"],
  },
  {
    title: "Tools & delivery",
    description: "Developing, debugging, testing, and shipping software.",
    skills: ["Git", "GitHub", "Vite+", "Netlify", "Chrome DevTools", "Wix CLI"],
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-28 px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="The person behind the projects"
          description="A little context on how I got into software and what keeps me building."
        />

        <div className="grid gap-5 md:grid-cols-2">
          <GlowCard>
            <h3 className="mb-3 font-heading text-xl font-semibold text-foreground">
              My Journey
            </h3>
            <p className="font-body text-sm leading-7 text-app-text-muted sm:text-base">
              My path into technology started at the Bronx Academy for Software
              Engineering, where I worked with a student web-development team
              to maintain and improve the school website. That experience turned
              an interest in technology into hands-on software work. I now study
              Computer Science at LaGuardia Community College while continuing
              to build and refine full-stack, desktop, and systems projects.
            </p>
          </GlowCard>

          <GlowCard>
            <h3 className="mb-3 font-heading text-xl font-semibold text-foreground">
              About Me
            </h3>
            <p className="font-body text-sm leading-7 text-app-text-muted sm:text-base">
              I enjoy understanding how an application works from the interface
              all the way down to its data model, runtime, and deployment. I
              learn by building, debugging, and working through the reasoning
              behind each layer. Outside of coding, I enjoy staying active,
              skateboarding, volleyball, and exploring topics like technology,
              economics, and real estate.
            </p>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured Projects"
          description="A selection of applications and systems I have designed, built, and learned from."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <GlowCard key={project.name} className="flex h-full flex-col">
              {project.image ? (
                <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-xl border border-app-border-subtle bg-app-bg-base">
                  <Image
                    src={project.image}
                    alt={project.imageAlt ?? ""}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>
              ) : (
                <div className="relative mb-5 flex aspect-[16/9] flex-col justify-between overflow-hidden rounded-xl border border-app-border-subtle bg-app-bg-base p-6">
                  <div
                    aria-hidden="true"
                    className="absolute -right-10 -top-16 size-48 rounded-full border border-app-primary-0/40 shadow-[0_0_35px_color-mix(in_srgb,var(--app-primary-color-0)_35%,transparent)]"
                  />
                  <p className="relative font-mono text-xs tracking-[0.2em] text-app-secondary-1">
                    {project.artworkLabel}
                  </p>
                  <p className="relative font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    {project.artwork}
                  </p>
                </div>
              )}

              <p className="mb-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-app-secondary-1">
                {project.category}
              </p>
              <h3 className="font-heading text-xl font-semibold text-foreground">
                {project.name}
              </h3>
              <p className="mt-3 flex-1 font-body text-sm leading-7 text-app-text-muted">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-app-border-subtle bg-app-bg-base px-3 py-1 font-mono text-[0.68rem] text-app-text-muted"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-4 border-t border-app-border-subtle pt-4 font-heading text-sm font-semibold">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-app-secondary-1 transition-colors hover:text-foreground"
                  >
                    Live project ↗
                  </a>
                ) : null}
                {project.sourceUrl ? (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-app-primary-0 transition-colors hover:text-foreground"
                  >
                    Source code ↗
                  </a>
                ) : null}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-28 px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Toolkit"
          title="Skills & Technologies"
          description="Technologies I have used across my web applications, desktop projects, and runtime experiments."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <GlowCard key={group.title}>
              <h3 className="font-heading text-xl font-semibold text-foreground">
                {group.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-6 text-app-text-muted">
                {group.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-app-primary-0/40 bg-app-bg-base px-3 py-2 font-body text-sm text-foreground shadow-[0_0_4px_color-mix(in_srgb,var(--app-primary-color-0)_25%,transparent)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="scroll-mt-28 px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Learning"
          title="Certifications"
          description="A place for verified credentials and professional learning milestones."
        />
        <GlowCard className="flex min-h-36 flex-col items-center justify-center text-center">
          <span className="rounded-full border border-app-primary-0/50 bg-app-bg-base px-4 py-1 font-mono text-xs uppercase tracking-[0.18em] text-app-secondary-1">
            Coming soon
          </span>
          <p className="mt-4 max-w-xl font-body text-sm leading-7 text-app-text-muted">
            I am organizing this section and will add certifications here as
            they are ready to be showcased.
          </p>
        </GlowCard>
      </div>
    </section>
  );
}

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="scroll-mt-28 px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="More about my work"
          title="Downloadable Portfolio"
          description="The previous portfolio included résumé exports. I am refreshing those files so the next downloads reflect my current projects and experience."
        />
        <GlowCard className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-heading text-xl font-semibold text-foreground">
              Explore my work on GitHub
            </h3>
            <p className="mt-2 max-w-2xl font-body text-sm leading-7 text-app-text-muted">
              Browse the source code, project history, and ongoing development
              across my repositories.
            </p>
          </div>
          <a
            href="https://github.com/BryanReyes-dev"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-lg border border-app-primary-0 bg-app-bg-base px-5 py-3 font-heading text-sm font-semibold text-foreground shadow-[0_0_5px_color-mix(in_srgb,var(--app-primary-color-0)_65%,transparent)] transition-colors hover:bg-app-primary-0"
          >
            GitHub profile ↗
          </a>
        </GlowCard>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 px-5 pb-24 pt-16 sm:px-8 sm:pb-28 sm:pt-20"
    >
      <div className="mx-auto max-w-6xl">
        <GlowCard className="flex flex-col gap-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-app-secondary-1">
              Get in touch
            </p>
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
              Have a project in mind?
            </h2>
            <p className="mt-2 font-body text-sm leading-7 text-app-text-muted">
              I am always interested in thoughtful projects and opportunities
              to build useful software.
            </p>
          </div>
          <a
            href="https://github.com/BryanReyes-dev"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-lg border border-app-primary-0 bg-app-bg-base px-5 py-3 font-heading text-sm font-semibold text-foreground shadow-[0_0_5px_color-mix(in_srgb,var(--app-primary-color-0)_65%,transparent)] transition-colors hover:bg-app-primary-0"
          >
            Connect on GitHub ↗
          </a>
        </GlowCard>
      </div>
    </section>
  );
}
