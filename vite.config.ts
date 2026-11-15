import { defineConfig } from "vite-plus";

export default defineConfig({
  // Code quality and linting
  lint: {
    ignorePatterns: ["node_modules/**", ".next/**", "out/**", "coverage/**", "next-env.d.ts"],

    // Preserve Vite+'s default plugins and enable
    // framework-specific rules.
    plugins: [
      "eslint",
      "typescript",
      "unicorn",
      "oxc",
      "react",
      "nextjs",
      "jsx-a11y",
      "import",
      "vitest",
    ],
  },

  // Code formatting
  fmt: {
    ignorePatterns: ["node_modules/**", ".next/**", "out/**", "coverage/**"],
    semi: true,
    singleQuote: false,
    printWidth: 100,
    tabWidth: 2,
    trailingComma: "all",
  },

  // Automated testing
  test: {
    include: ["**/*.{test,spec}.{js,jsx,ts,tsx}"],
    exclude: ["**/node_modules/**", "**/.next/**", "**/coverage/**", "**/out/**"],
    environment: "node",
    clearMocks: true,
    restoreMocks: true,
  },

  // Unified development tasks
  run: {
    tasks: {
      quality: {
        command: ["vp fmt --check", "vp lint", "vp exec tsc --noEmit"],
      },
    },
  },
});
