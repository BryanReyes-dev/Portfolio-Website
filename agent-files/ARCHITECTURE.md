# Portfolio Website Architecture

## Document Authority

This file is the authoritative record of finalized architectural decisions and approved future implementation direction for the portfolio website.

`agent-files/Agents_Context.md` is short-term working context. It should contain only unresolved questions, temporary implementation notes, discoveries, and context needed for current work.

When a design is explicitly approved, its architectural decision belongs here and should be removed or reduced from `Agents_Context.md`.

---

## 1. Project Direction

The portfolio is being migrated from the existing React/Vite implementation to Next.js.

The portfolio is intended to be a professional web-development showcase. Its primary purpose is to demonstrate strong modern web engineering through the portfolio itself while directing visitors toward the user's major projects, including Evergreen Estates and Daedalus.

The portfolio should favor meaningful engineering decisions over adding technologies solely for resume value.

---

## 2. Theme Architecture

The portfolio will use a dark-first visual system and will **not** support a light theme as a site theme.

The user's operating-system `prefers-color-scheme` setting must not automatically switch the portfolio into a light theme. The portfolio's appearance is controlled by the site's own theme system.

Theme colors are semantic CSS variables exposed through Tailwind CSS v4's `@theme` layer. Components consume semantic colors rather than hardcoded palette values.

Core semantic color tokens include:

```text
--background
--foreground
--primary
--secondary
--tertiary
```

Components should use the corresponding Tailwind utilities, such as:

```text
bg-primary
text-secondary
border-tertiary
```

rather than embedding theme-specific hex values.

The theme selector will be able to change the active palette by applying a theme identifier to the document, such as:

```text
data-theme="purple"
```

The default theme is dark. Additional palettes may be added without requiring component-level color changes.

The exact final set of selectable palettes is not yet specified.

---

## 3. Navigation and View Transitions

The portfolio will use the browser View Transition API where appropriate to provide animated transitions between UI/page states.

The intended experience is for navigation between portfolio pages—particularly project listings and project case studies—to feel like a visual transformation of the existing interface rather than an abrupt replacement.

For example:

```text
Project Card
     ↓
View Transition
     ↓
Project Case Study
```

A project card or image may visually transform into the corresponding element on the destination page when the relationship is meaningful.

View Transitions are a presentation/transition mechanism. They must not be treated as the same thing as route prefetching or server rendering.

---

## 4. Navigation Performance and Prefetching

Next.js route prefetching and View Transitions are separate concerns and should be designed independently.

Conceptually:

```text
Next.js route prefetching
        ↓
Reduce work required at navigation time
        ↓
Navigation
        ↓
View Transition
        ↓
Visual transformation between states
```

Prefetching does not imply that the entire destination page is already rendered and resident in memory. The amount of prefetched route resources/data depends on Next.js routing and caching behavior.

View Transitions should enhance navigation without requiring prefetching to function.

---

## 5. Component Architecture

Components should remain independent of specific theme palettes and should consume semantic design tokens.

Interactive behavior should be isolated to client components where browser state or APIs require it. Static/content-oriented UI should remain server-renderable where appropriate under the Next.js App Router.

The portfolio should avoid making the entire application a Client Component merely for convenience.

---

## 6. Engineering Principle

New technologies should be introduced when they solve a real problem in the portfolio or provide a meaningful demonstration of modern web engineering.

The portfolio should prioritize:

- maintainable component architecture
- meaningful Next.js server/client boundaries
- polished navigation and interaction
- accessibility
- performance
- semantic design tokens
- progressive enhancement and graceful fallbacks where appropriate

Technology choices should not be added solely to increase the number of technologies listed on the resume.

---

## 7. Architecture Change Rule

A proposed feature or design remains working context until Bryan explicitly approves it.

The intended flow is:

```text
Idea / discovery
      ↓
Agents_Context.md
      ↓
Discussion / validation
      ↓
Bryan approves
      ↓
ARCHITECTURE.md
```

The README is not an architecture-planning document. It should describe the implemented state of the project and should only claim features that actually exist in the codebase.
