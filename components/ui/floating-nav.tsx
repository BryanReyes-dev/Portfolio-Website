
"use client";

import * as React from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { MenuIcon, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type NavLink = {
  label: string;
  href: string;
};

type FloatingNavProps = {
  links?: NavLink[];
  cta?: { label: string; href?: string; onClick?: () => void };
  secondary?: { label: string; href?: string } | null;
  className?: string;
};

const LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

function FloatingNav({
  links = LINKS,
  cta = { label: "Contact", href: "#contact" },
  secondary = null,
  className,
}: FloatingNavProps) {
  const { scrollY } = useScroll();

  const [tucked, setTucked] = React.useState(false);
  const [hover, setHover] = React.useState<string | null>(null);
  const [open, setOpen] = React.useState(false);
  const [activeHref, setActiveHref] = React.useState(links[0]?.href ?? "");

  const reduce = useReducedMotion();
  const id = React.useId();
  const toggle = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
  const sections = links
    .filter((link) => link.href.startsWith("#"))
    .map((link) => document.getElementById(link.href.slice(1)))
    .filter((section): section is HTMLElement => section !== null);

  if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          );

        const currentSection = visibleSections[0];

        if (currentSection) {
          setActiveHref(`#${currentSection.target.id}`);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [links]);

  // Close the drawer with Escape and prevent background scrolling.
  React.useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useMotionValueEvent(scrollY, "change", (y) => {
    setTucked(y > 40);
  });

  const spring = reduce
    ? { duration: 0 }
    : { type: "spring" as const, bounce: 0.16, duration: 0.5 };

  const drawerTransition = reduce
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 280, damping: 30 };

  const closeMenu = () => setOpen(false);

  const ctaClassName =
    "inline-flex items-center justify-center rounded-xl bg-app-primary-0 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-app-secondary-1 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-app-secondary-1";

  return (
    <div
      data-slot="floating-nav"
      className={cn("sticky top-0 z-50 px-3 pt-3", className)}
    >
      {/* Main navigation */}
      <motion.nav
        layout
        transition={spring}
        aria-label="Main navigation"
        className={cn(
          "relative z-10 mx-auto flex h-14 items-center justify-center gap-3 rounded-2xl px-3 sm:px-4",
          tucked || open
          ? "max-w-5xl border border-transparent bg-transparent shadow-none md:border-app-border-subtle md:bg-background/95 md:shadow-xl md:backdrop-blur-xl"
          : "max-w-7xl border border-transparent bg-transparent"
        )}
      >
        {/* Desktop links */}
        <ul
          className="hidden items-center justify-center md:flex"
          onMouseLeave={() => setHover(null)}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                onMouseEnter={() => setHover(link.href)}
                onFocus={() => setHover(link.href)}
                className="relative block rounded-lg px-4 py-2 text-sm text-foreground/70 outline-none transition-colors hover:text-app-secondary-1 focus-visible:text-app-secondary-1 focus-visible:ring-2 focus-visible:ring-app-secondary-1"
              >
                {hover === link.href && (
                  <motion.span
                    layoutId={`${id}-highlight`}
                    transition={spring}
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 rounded-lg bg-app-primary-0/15"
                  />
                )}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="ml-auto hidden items-center gap-2 md:flex">
          {secondary && (
            <a
              href={secondary.href ?? "#"}
              className="rounded-lg px-3 py-2 text-sm text-foreground/70 transition-colors hover:text-app-secondary-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-app-secondary-1"
            >
              {secondary.label}
            </a>
          )}

          {cta &&
            (cta.href ? (
              <a href={cta.href} className={ctaClassName}>
                {cta.label}
              </a>
            ) : (
              <button
                type="button"
                onClick={cta.onClick}
                className={ctaClassName}
              >
                {cta.label}
              </button>
            ))}
        </div>

        {/* Mobile hamburger — deliberately remains a hamburger when open */}
        <button
          ref={toggle}
          type="button"
          className="ml-auto inline-flex size-10 items-center justify-center rounded-xl border border-app-border-subtle bg-app-bg-surface text-foreground transition-colors hover:border-app-primary-0 hover:text-app-secondary-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-app-secondary-1 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls={`${id}-menu`}
          onClick={() => setOpen((previous) => !previous)}
        >
          <MenuIcon size={21} aria-hidden="true" />
        </button>
      </motion.nav>

      {/* Mobile drawer and backdrop */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.2 }}
              onClick={closeMenu}
              className="fixed inset-0 z-60 cursor-default bg-black/75 backdrop-blur-sm md:hidden"
            />

            {/* Drawer */}
            <motion.aside
              id={`${id}-menu`}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={reduce ? false : { x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={drawerTransition}
              className="fixed inset-y-0 left-0 z-65 flex w-[min(86vw,22rem)] flex-col border-r border-app-border-subtle bg-app-bg-base px-6 pb-8 pt-20 text-foreground shadow-2xl md:hidden"
            >
              {/* Drawer heading and close button */}
              <div className="mb-8 flex items-center justify-between">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-app-secondary-1">
                  Navigation
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    toggle.current?.focus();
                  }}
                  aria-label="Close menu"
                  className="inline-flex size-10 items-center justify-center rounded-xl border border-app-border-subtle bg-app-bg-surface text-foreground transition-colors hover:border-app-primary-0 hover:text-app-primary-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-app-secondary-1"
                >
                  <XIcon size={21} aria-hidden="true" />
                </button>
              </div>

              {/* Mobile links */}
              <nav aria-label="Mobile navigation links" className="flex flex-col gap-2">
                {links.map((link, index) => (
                  <motion.a
                    onClick={() => {
                      setActiveHref(link.href);
                      closeMenu();
                    }}
                    key={link.href}
                    href={link.href}

                    initial={reduce ? false : { opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: reduce ? 0 : index * 0.05,
                      duration: reduce ? 0 : 0.2,
                    }}
                    className={cn(
                      "rounded-xl border px-4 py-3 font-sans text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-app-secondary-1",
                      activeHref === link.href
                        ? "border-app-primary-0/40 bg-app-primary-0/10 font-semibold text-white underline decoration-app-secondary-1 decoration-2 underline-offset-8"
                        : "border-transparent font-medium text-foreground/80 hover:border-app-border-subtle hover:bg-app-bg-surface hover:text-app-secondary-1"
                    )}>
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              {/* Mobile actions */}
              <div className="mt-auto flex flex-col gap-3 border-t border-app-border-subtle pt-6">
                {secondary && (
                  <a
                    href={secondary.href ?? "#"}
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3 text-center text-sm font-medium text-foreground/70 transition-colors hover:text-app-secondary-1"
                  >
                    {secondary.label}
                  </a>
                )}

                {cta &&
                  (cta.href ? (
                    <a
                      href={cta.href}
                      onClick={closeMenu}
                      className={cn(ctaClassName, "w-full py-3")}
                    >
                      {cta.label}
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        cta.onClick?.();
                        closeMenu();
                      }}
                      className={cn(ctaClassName, "w-full py-3")}
                    >
                      {cta.label}
                    </button>
                  ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export { FloatingNav };
export type { FloatingNavProps, NavLink };
