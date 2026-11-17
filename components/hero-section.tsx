import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-5rem)] scroll-mt-24 items-center justify-center overflow-hidden px-6 py-16"
    >
      <div className="flex w-full max-w-5xl flex-col items-center text-center">
        <div className="relative flex size-[min(88vw,23rem)] items-center justify-center">
          <span className="sr-only">
            Full stack developer specializing in AI integration.
          </span>

          <svg
            aria-hidden="true"
            viewBox="0 0 360 360"
            className="absolute inset-0 size-full overflow-visible"
          >
            <defs>
              <path
                id="hero-top-arc"
                d="M 28 180 A 152 152 0 0 1 332 180"
                fill="none"
              />
              <path
                id="hero-bottom-arc"
                d="M 28 180 A 152 152 0 0 0 332 180"
                fill="none"
              />
            </defs>

            <circle
              cx="180"
              cy="180"
              r="168"
              fill="none"
              stroke="var(--app-primary-color-0)"
              strokeOpacity="0.35"
              strokeWidth="1"
            />

            <text
              fill="currentColor"
              className="font-heading text-[15px] font-bold tracking-[0.18em]"
            >
              <textPath
                href="#hero-top-arc"
                startOffset="50%"
                textAnchor="middle"
              >
                FULL STACK
              </textPath>
            </text>

            <text
              fill="currentColor"
              className="font-heading text-[13px] font-bold tracking-[0.16em]"
            >
              <textPath
                href="#hero-bottom-arc"
                startOffset="50%"
                textAnchor="middle"
                dy="7"
              >
                AI INTEGRATION
              </textPath>
            </text>
          </svg>

          <div className="relative size-[min(62vw,15rem)] overflow-hidden rounded-full bg-app-primary-0 p-3 shadow-[0_0_55px_color-mix(in_srgb,var(--app-primary-color-0)_35%,transparent)]">
            <div className="relative size-full overflow-hidden rounded-full">
              <Image
                src="/profile-avatar.png"
                alt="Stylized illustration of a camera operator with a green geometric head"
                fill
                priority
                sizes="(max-width: 640px) 62vw, 240px"
                className="rounded-full object-contain"
              />
            </div>
          </div>
        </div>

        <h1 className="mt-8 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Bryan Reyes
        </h1>
        <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-app-text-muted sm:text-lg">
          Building modern web applications and integrating intelligent AI-powered experiences.
        </p>
      </div>
    </section>
  );
}
