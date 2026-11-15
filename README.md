# Personal Portfolio

A personal portfolio built with Next.js, React, TypeScript, and Tailwind CSS. The project uses Vite+ as its development toolchain for linting, formatting, testing, and task orchestration. Next.js remains responsible for the application runtime and production build.

## Getting Started

Install the project dependencies:

```bash
npm install
```

Run the Next.js development server through Vite+:

```bash
vp run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Development Commands

Use these commands from the repository root.

| Command | Description |
| --- | --- |
| `vp run dev` | Start the Next.js development server. |
| `vp run build` | Create a production build with Next.js. |
| `vp run start` | Start the production Next.js server after building. |
| `vp lint` | Run Oxlint. |
| `vp fmt` | Format supported project files with Oxfmt. |
| `vp fmt --check` | Check formatting without changing files. |
| `vp test` | Run the Vitest test suite. |
| `vp run quality` | Run formatting checks, linting, and TypeScript validation. |

**Note:** Vite+ is the supporting toolchain; it does not replace Next.js. Use `vp run dev` and `vp run build` to invoke the Next.js scripts. Do not use the built-in `vp dev` or `vp build` commands for this application, because those target Vite projects.

### Dependency and Security Checks

```bash
npm audit --omit=dev
npm audit
```

- `npm audit --omit=dev` checks production dependencies.
- `npm audit` checks the full dependency tree, including development tooling.

## Toolchain

- **Application framework:** Next.js (App Router)
- **UI:** React
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Toolchain:** Vite+ 1.6
- **Linting:** Oxlint
- **Formatting:** Oxfmt
- **Testing:** Vitest

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vite+ Documentation](https://viteplus.dev/guide/)
- [Vitest Documentation](https://vitest.dev/guide/)
