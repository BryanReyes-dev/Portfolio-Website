# Portfolio Website — Agents Context

> Short-term working context for Bryan and coding agents. Finalized architecture belongs in `agent-files/ARCHITECTURE.md`; implemented functionality belongs in `README.md`.

## Current Work

The portfolio is being migrated from the existing React/Vite implementation to Next.js on the `next.js-implement` branch.

## Recently Approved Direction

- The portfolio will be dark-first and will not support a light theme.
- OS `prefers-color-scheme` must not automatically switch the site to light mode.
- A site theme selector will control the portfolio's color palette.
- Themes will use semantic CSS variables exposed through Tailwind CSS v4, including `background`, `foreground`, `primary`, `secondary`, and `tertiary`.
- View Transitions are approved for polished navigation/page-state transitions, especially where a project card can visually transform into its project case-study page.
- Next.js route prefetching and browser View Transitions are separate mechanisms; prefetching may improve navigation readiness, while View Transitions provide the visual transition.

## Still To Resolve

- Final list and names of selectable color themes.
- Exact View Transition implementation and fallback behavior.

Keep this file concise. Once an item is finalized, record the architectural decision in `ARCHITECTURE.md` and remove the duplicated detail here.
