import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-5rem)] scroll-mt-24 items-center justify-center overflow-hidden px-6 py-16"
    >
      <div className="flex w-full max-w-4xl flex-col items-center text-center">
        {/* Orbital Badge + Avatar */}
        <div className="relative flex size-[min(84vw,21rem)] items-center justify-center transition-[width,height,transform] duration-700 md:size-[clamp(22rem,38vw,34rem)] md:translate-x-[16.6667vw]">
          <span className="sr-only">
            Full stack developer specializing in AI integration.
          </span>

          {/* Curved Typography Ring */}
          <svg
            aria-hidden="true"
            viewBox="0 0 360 360"
            className="pointer-events-none absolute inset-0 size-full overflow-visible select-none"
          >
            <defs>
              <path
                id="hero-top-arc"
                d="M 42 180 A 138 138 0 0 1 318 180"
                fill="none"
              />
              <path
                id="hero-bottom-arc"
                d="M 34 180 A 146 146 0 0 0 326 180"
                fill="none"
              />
            </defs>

            <text
              fill="currentColor"
              className="font-heading text-[20px] font-bold tracking-[0.24em] text-app-secondary-0 uppercase"
            >
              <textPath
                href="#hero-top-arc"
                startOffset="50%"
                textAnchor="middle"
              >
                • FULL-STACK •
              </textPath>
            </text>

            <text
              fill="currentColor"
              className="font-heading text-[20px] font-bold tracking-[0.22em] text-app-secondary-1 uppercase"
            >
              <textPath
                href="#hero-bottom-arc"
                startOffset="50%"
                textAnchor="middle"
              >
                • AI INTEGRATION •
              </textPath>
            </text>
          </svg>

          {/* Subtle Ambient Glow Behind Avatar */}
          <div
            aria-hidden="true"
            className="absolute size-[min(56vw,14rem)] rounded-full bg-app-primary-0/30 blur-2xl md:size-[clamp(15rem,27vw,24rem)]"
          />

          {/* Avatar with Primary Color Background */}
          <div className="relative size-[min(58vw,14.5rem)] overflow-hidden rounded-full bg-app-primary-0 shadow-[0_0_24px_color-mix(in_srgb,var(--app-primary-color-0)_45%,transparent)] transition-[width,height,transform] duration-500 hover:scale-[1.02] md:size-[clamp(14rem,25vw,22rem)]">
            <Image
              src="/profile-avatar.png"
              alt="Stylized illustration of a camera operator with a green geometric head"
              fill
              priority
              sizes="(min-width: 896px) 25vw, (min-width: 768px) 224px, 58vw"
              className="object-contain"
            />
          </div>
        </div>

        <h1 className="mt-2 font-body text-2xl font-semibold tracking-wide text-foreground sm:text-3xl md:translate-x-[16.6667vw] md:text-4xl">
          Bryan Reyes
        </h1>
      </div>
    </section>
  );
}