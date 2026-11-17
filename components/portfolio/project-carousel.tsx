"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GlowCard } from "@/components/portfolio/glow-card";

export type ProjectCardData = {
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

function ProjectCard({ project }: { project: ProjectCardData }) {
  return (
    <GlowCard className="flex h-full flex-col">
      {project.image ? (
        <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-xl border border-app-border-subtle bg-app-bg-base">
          <Image
            src={project.image}
            alt={project.imageAlt ?? ""}
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
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
  );
}

export function ProjectCarousel({ projects }: { projects: ProjectCardData[] }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const updateActiveIndex = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const slideWidth = viewport.clientWidth;
    if (slideWidth === 0) return;
    const nextIndex = Math.round(viewport.scrollLeft / slideWidth);
    setActiveIndex(Math.min(projects.length - 1, Math.max(0, nextIndex)));
  }, [projects.length]);

  const scrollTo = (index: number) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    viewport.scrollTo({
      left: viewport.clientWidth * index,
      behavior: reduceMotion ? "instant" : "smooth",
    });
  };

  const scrollBy = (direction: -1 | 1) => {
    scrollTo(Math.min(projects.length - 1, Math.max(0, activeIndex + direction)));
  };

  return (
    <div className="space-y-5">
      <div
        ref={viewportRef}
        onScroll={updateActiveIndex}
        aria-label="Featured projects"
        className="flex flex-col gap-5 md:flex-row md:gap-0 md:overflow-x-auto md:snap-x md:snap-mandatory md:overscroll-x-contain md:scrollbar-none"
      >
        {projects.map((project) => (
          <div
            key={project.name}
            className="min-w-0 md:w-full md:flex-[0_0_100%] md:snap-start md:px-1"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {projects.length > 1 ? (
        <div className="hidden items-center justify-between md:flex">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            disabled={activeIndex === 0}
            aria-label="Previous project"
            className="inline-flex size-10 items-center justify-center rounded-full border border-app-primary-0/60 text-app-secondary-1 shadow-[0_0_7px_color-mix(in_srgb,var(--app-primary-color-0)_35%,transparent)] transition hover:bg-app-primary-0/15 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="relative flex items-center gap-2 rounded-full border border-app-border-subtle bg-app-bg-base/80 p-2">
            {projects.map((project, index) => (
              <button
                key={project.name}
                type="button"
                onClick={() => scrollTo(index)}
                aria-label={`Go to ${project.name}`}
                aria-current={activeIndex === index ? "true" : undefined}
                className="relative z-10 flex h-3 w-3 items-center justify-center rounded-full"
              >
                <span
                  className={`size-2 rounded-full transition-colors ${
                    activeIndex === index ? "bg-transparent" : "bg-app-text-muted/50"
                  }`}
                />
              </button>
            ))}
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute left-2 top-2 size-3 rounded-full bg-app-secondary-1 shadow-[0_0_9px_var(--app-secondary-color-1)]"
              animate={{ x: activeIndex * 20 }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 180, damping: 16, mass: 0.7 }
              }
            />
          </div>

          <button
            type="button"
            onClick={() => scrollBy(1)}
            disabled={activeIndex === projects.length - 1}
            aria-label="Next project"
            className="inline-flex size-10 items-center justify-center rounded-full border border-app-primary-0/60 text-app-secondary-1 shadow-[0_0_7px_color-mix(in_srgb,var(--app-primary-color-0)_35%,transparent)] transition hover:bg-app-primary-0/15 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      ) : null}
    </div>
  );
}
