import type { ThemeConfig, ThemeColors, ThemeFont, ThemePresetId } from "./types";

type ThemePreset = {
  label: string;
  colors: ThemeColors;
  fonts: {
    body: ThemeFont;
    heading: ThemeFont;
  };
};

export const THEME_PRESETS: Record<ThemePresetId, ThemePreset> = {
  NeonViolet: {
    label: "Neon Violet",
    colors: {
      bgBase: "#141414",
      bgSurface: "#424141",
      borderSubtle: "#646363",
      textPrimary: "#ffffff",
      textMuted: "#cccccc",
      textOnPrimary: "#ffffff",
      textOnSecondary: "#000000",
      textOnAccent: "#000000",
      primary0: "#8800ff",
      primary1: "#ff0004",
      primary2: "#15ff00",
      secondary0: "#eab308",
      secondary1: "#00e5ff",
      secondary2: "#ff007f",
      tertiary0: "#00f5d4",
      tertiary1: "#ff9e00",
      tertiary2: "#3b82f6",
    },
    fonts: {
      body: "m-plus-1",
      heading: "mali",
    },
  },

  TropicalMidnight: {
    label: "Tropical Midnight",
    colors: {
      bgBase: "#111827",
      bgSurface: "#1f2937",
      borderSubtle: "#475569",
      textPrimary: "#f8fafc",
      textMuted: "#cbd5e1",
      textOnPrimary: "#ffffff",
      textOnSecondary: "#020617",
      textOnAccent: "#020617",
      primary0: "#6366f1",
      primary1: "#ec4899",
      primary2: "#38bdf8",
      secondary0: "#fbbf24",
      secondary1: "#22d3ee",
      secondary2: "#c084fc",
      tertiary0: "#34d399",
      tertiary1: "#fb923c",
      tertiary2: "#60a5fa",
    },
    fonts: {
      body: "manrope",
      heading: "space-grotesk",
    },
  },

  LogCabin: {
    label: "Log Cabin",
    colors: {
      bgBase: "#211613",
      bgSurface: "#3a2720",
      borderSubtle: "#715044",
      textPrimary: "#fff7ed",
      textMuted: "#d6b9a8",
      textOnPrimary: "#1c0f0a",
      textOnSecondary: "#1c0f0a",
      textOnAccent: "#1c0f0a",
      primary0: "#ff6b35",
      primary1: "#ff3366",
      primary2: "#ffc857",
      secondary0: "#a78bfa",
      secondary1: "#2dd4bf",
      secondary2: "#f472b6",
      tertiary0: "#f97316",
      tertiary1: "#facc15",
      tertiary2: "#fb7185",
    },
    fonts: {
      body: "mali",
      heading: "manrope",
    },
  },
};

export const DEFAULT_THEME: ThemeConfig = {
  presetId: "NeonViolet",
  colors: { ...THEME_PRESETS.NeonViolet.colors },
  fonts: { ...THEME_PRESETS.NeonViolet.fonts },
};
