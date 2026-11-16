"use client";

import * as React from "react";
import { Palette, RotateCcw, X } from "lucide-react";
import { THEME_PRESETS } from "@/lib/themes/presets";
import {
  FONT_OPTIONS,
  THEME_COLOR_FIELDS,
  type ThemePresetId,
} from "@/lib/themes/types";
import { usePortfolioTheme } from "./theme-provider";

const PRESET_OPTIONS: { id: ThemePresetId; label: string }[] = [
  { id: "NeonViolet", label: THEME_PRESETS.NeonViolet.label },
  { id: "TropicalMidnight", label: THEME_PRESETS.TropicalMidnight.label },
  { id: "LogCabin", label: THEME_PRESETS.LogCabin.label },
];

const COLOR_GROUPS = [
  "Surfaces and text",
  "Primary colors",
  "Secondary colors",
  "Tertiary colors",
];

const selectClassName =
  "mt-1 h-10 w-full rounded-lg border border-app-border-subtle bg-background px-3 font-body text-sm text-foreground outline-none focus:border-app-secondary-1 focus:ring-2 focus:ring-app-secondary-1/30";

export function ThemeEditor() {
  const [open, setOpen] = React.useState(false);
  const { theme, setPreset, updateColor, updateFont, resetTheme, isReady } =
    usePortfolioTheme();

  return (
    <div className="fixed bottom-4 right-4 z-100">
      {open && (
        <section
          id="theme-editor-panel"
          aria-labelledby="theme-editor-title"
          className="absolute bottom-14 right-0 flex max-h-[min(78dvh,44rem)] w-[min(25rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-app-border-subtle bg-app-bg-base text-foreground shadow-2xl"
        >
          <header className="flex items-center justify-between border-b border-app-border-subtle px-4 py-3">
            <div>
              <h2
                id="theme-editor-title"
                className="font-heading text-base font-semibold"
              >
                Appearance
              </h2>
              <p className="font-body text-xs text-app-text-muted">
                Customize colors and fonts
              </p>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={resetTheme}
                className="inline-flex size-9 items-center justify-center rounded-lg text-app-text-muted transition-colors hover:bg-app-bg-surface hover:text-app-secondary-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Reset to Neon Violet preset"
                title="Reset to Neon Violet preset"
              >
                <RotateCcw size={16} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex size-9 items-center justify-center rounded-lg text-app-text-muted transition-colors hover:bg-app-bg-surface hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Close appearance editor"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>
          </header>

          <div className="space-y-5 overflow-y-auto p-4">
            <label className="block font-body text-sm font-medium">
              Theme preset
              <select
                className={selectClassName}
                value={theme.presetId}
                onChange={(event) => {
                  const selected = event.currentTarget.value;

                  if (selected !== "custom") {
                    setPreset(selected as ThemePresetId);
                  }
                }}
              >
                {PRESET_OPTIONS.map((preset) => (
                  <option key={preset.id} value={preset.id}>
                    {preset.label}
                  </option>
                ))}
                <option value="custom" disabled>
                  Custom edits
                </option>
              </select>
            </label>

            <div className="grid gap-3 sm:grid-cols-2">
              <label className="block font-body text-sm font-medium">
                Body font
                <select
                  className={selectClassName}
                  value={theme.fonts.body}
                  onChange={(event) =>
                    updateFont(
                      "body",
                      event.currentTarget.value as (typeof FONT_OPTIONS)[number]["value"]
                    )
                  }
                >
                  {FONT_OPTIONS.map((font) => (
                    <option key={font.value} value={font.value}>
                      {font.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block font-body text-sm font-medium">
                Heading font
                <select
                  className={selectClassName}
                  value={theme.fonts.heading}
                  onChange={(event) =>
                    updateFont(
                      "heading",
                      event.currentTarget.value as (typeof FONT_OPTIONS)[number]["value"]
                    )
                  }
                >
                  {FONT_OPTIONS.map((font) => (
                    <option key={font.value} value={font.value}>
                      {font.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {COLOR_GROUPS.map((group) => (
              <fieldset key={group} className="space-y-2">
                <legend className="mb-1 font-heading text-sm font-semibold text-app-secondary-1">
                  {group}
                </legend>

                {THEME_COLOR_FIELDS.filter((field) => field.group === group).map(
                  (field) => (
                    <label
                      key={field.key}
                      className="flex min-h-10 items-center justify-between gap-3 rounded-lg px-2 py-1 transition-colors hover:bg-app-bg-surface"
                    >
                      <span className="font-body text-sm text-foreground">
                        {field.label}
                      </span>

                      <span className="flex items-center gap-2">
                        <code className="font-mono text-[11px] uppercase text-app-text-muted">
                          {theme.colors[field.key]}
                        </code>
                        <input
                          type="color"
                          value={theme.colors[field.key]}
                          onChange={(event) =>
                            updateColor(field.key, event.currentTarget.value)
                          }
                          aria-label={field.label}
                          className="size-8 cursor-pointer rounded-md border border-app-border-subtle bg-transparent p-0.5"
                        />
                      </span>
                    </label>
                  )
                )}
              </fieldset>
            ))}

            

            <p className="text-center font-mono text-[10px] uppercase tracking-wider text-app-text-muted">
              {isReady ? "Preferences saved in this browser" : "Loading preferences"}
            </p>
          </div>
        </section>
      )}

      <button
        type="button"
        aria-expanded={open}
        aria-controls="theme-editor-panel"
        onClick={() => setOpen((current) => !current)}
        className="inline-flex h-11 items-center gap-2 rounded-full border border-app-border-subtle bg-app-bg-base px-4 font-body text-sm font-semibold text-foreground shadow-xl transition-colors hover:border-app-primary-0 hover:text-app-secondary-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <Palette size={17} aria-hidden="true" />
        Appearance
      </button>
    </div>
  );
}
