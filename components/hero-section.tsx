import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-5rem)] scroll-mt-24 items-center justify-center overflow-hidden px-6 py-16"
    >
      <div className="flex w-full max-w-5xl flex-col items-center text-center">
        <div className="relative flex size-[min(82vw,22rem)] items-center justify-center">
          <svg
            aria-hidden="true"
            viewBox="0 0 320 320"
            className="absolute inset-0 size-full overflow-visible"
          >
            <defs>
              <path
                id="hero-top-arc"
                d="M 34,160 A 126,126 0 0,0 286,160"
                fill="none"
              />
              <path
                id="hero-bottom-arc"
                d="M 286,160 A 126,126 0 0,1 34,160"
                fill="none"
              />
            </defs>
            <circle
              cx="160"
              cy="160"
              r="145"
              fill="none"
              stroke="var(--app-primary-color-0)"
              strokeOpacity="0.35"
              strokeWidth="1"
            />
            <text
              fill="currentColor"
              className="font-heading text-[17px] font-bold tracking-[0.22em]"
            >
              <textPath href="#hero-top-arc" startOffset="50%" textAnchor="middle">
                FULL STACK
              </textPath>
            </text>
            <text
              fill="currentColor"
              className="font-heading text-[15px] font-bold tracking-[0.18em]"
            >
              <textPath href="#hero-bottom-arc" startOffset="50%" textAnchor="middle">
                AI INTEGRATION
              </textPath>
            </text>
          </svg>

          <div className="relative size-[min(58vw,15.5rem)] overflow-hidden rounded-full bg-app-primary-0 p-2 shadow-[0_0_55px_color-mix(in_srgb,var(--app-primary-color-0)_35%,transparent)]">
            <div className="relative size-full overflow-hidden rounded-full">
              <Image
                src="/profile-avatar.png"
                alt="Portrait of Bryan Reyes"
                fill
                priority
                sizes="(max-width: 640px) 58vw, 248px"
                className="rounded-full object-cover"
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
