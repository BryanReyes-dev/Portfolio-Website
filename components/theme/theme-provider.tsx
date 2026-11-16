"use client";

import * as React from "react";
import { applyTheme } from "@/lib/themes/apply-theme";
import { DEFAULT_THEME, THEME_PRESETS } from "@/lib/themes/presets";
import {
  FONT_OPTIONS,
  THEME_COLOR_FIELDS,
  type ThemeColorKey,
  type ThemeConfig,
  type ThemeFont,
  type ThemePresetId,
} from "@/lib/themes/types";

const STORAGE_KEY = "bryan-portfolio-theme-v1";

type FontRole = "body" | "heading";

type ThemeContextValue = {
  theme: ThemeConfig;
  isReady: boolean;
  setPreset: (presetId: ThemePresetId) => void;
  updateColor: (key: ThemeColorKey, value: string) => void;
  updateFont: (role: FontRole, value: ThemeFont) => void;
  resetTheme: () => void;
};

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isPresetId(value: unknown): value is ThemePresetId {
  return (
    typeof value === "string" &&
    Object.prototype.hasOwnProperty.call(THEME_PRESETS, value)
  );
}

function parseStoredTheme(raw: string): ThemeConfig | null {
  const parsed: unknown = JSON.parse(raw);

  if (!isRecord(parsed)) {
    return null;
  }

  const storedColors = isRecord(parsed.colors) ? parsed.colors : {};
  const colors = { ...DEFAULT_THEME.colors };

  for (const field of THEME_COLOR_FIELDS) {
    const value = storedColors[field.key];

    if (typeof value === "string" && /^#[0-9a-f]{6}$/i.test(value)) {
      colors[field.key] = value.toUpperCase();
    }
  }

  const storedFonts = isRecord(parsed.fonts) ? parsed.fonts : {};
  const bodyFont =
    FONT_OPTIONS.find((font) => font.value === storedFonts.body)?.value ??
    DEFAULT_THEME.fonts.body;
  const headingFont =
    FONT_OPTIONS.find((font) => font.value === storedFonts.heading)?.value ??
    DEFAULT_THEME.fonts.heading;

  return {
    presetId: isPresetId(parsed.presetId) ? parsed.presetId : "custom",
    colors,
    fonts: {
      body: bodyFont,
      heading: headingFont,
    },
  };
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<ThemeConfig>(DEFAULT_THEME);
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    try {
      const savedTheme = window.localStorage.getItem(STORAGE_KEY);

      if (savedTheme) {
        const parsedTheme = parseStoredTheme(savedTheme);

        if (parsedTheme) {
          setTheme(parsedTheme);
        }
      }
    } catch {
      // Storage can be unavailable; the default theme remains usable.
    } finally {
      setIsReady(true);
    }
  }, []);

  React.useEffect(() => {
    if (!isReady) {
      return;
    }

    applyTheme(theme);

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(theme));
    } catch {
      // The current session still works when persistence is unavailable.
    }
  }, [theme, isReady]);

  const setPreset = React.useCallback((presetId: ThemePresetId) => {
    const preset = THEME_PRESETS[presetId];

    setTheme({
      presetId,
      colors: { ...preset.colors },
      fonts: { ...preset.fonts },
    });
  }, []);

  const updateColor = React.useCallback(
    (key: ThemeColorKey, value: string) => {
      if (!/^#[0-9a-f]{6}$/i.test(value)) {
        return;
      }

      setTheme((current) => ({
        ...current,
        presetId: "custom",
        colors: {
          ...current.colors,
          [key]: value.toUpperCase(),
        },
      }));
    },
    []
  );

  const updateFont = React.useCallback(
    (role: FontRole, value: ThemeFont) => {
      setTheme((current) => ({
        ...current,
        presetId: "custom",
        fonts: {
          ...current.fonts,
          [role]: value,
        },
      }));
    },
    []
  );

  const resetTheme = React.useCallback(() => {
    setPreset("cyberpunk");
  }, [setPreset]);

  const contextValue = React.useMemo(
    () => ({
      theme,
      isReady,
      setPreset,
      updateColor,
      updateFont,
      resetTheme,
    }),
    [theme, isReady, setPreset, updateColor, updateFont, resetTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function usePortfolioTheme() {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "usePortfolioTheme must be used inside a ThemeProvider."
    );
  }

  return context;
}
