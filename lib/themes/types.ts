export const THEME_COLOR_FIELDS = [
  { key: "bgBase", cssVariable: "--app-bg-base", label: "Base surface", group: "Surfaces and text" },
  { key: "bgSurface", cssVariable: "--app-bg-surface", label: "Raised surface", group: "Surfaces and text" },
  { key: "borderSubtle", cssVariable: "--app-border-subtle", label: "Subtle border", group: "Surfaces and text" },
  { key: "textPrimary", cssVariable: "--app-text-primary", label: "Primary text", group: "Surfaces and text" },
  { key: "textMuted", cssVariable: "--app-text-muted", label: "Muted text", group: "Surfaces and text" },
  { key: "textOnPrimary", cssVariable: "--app-text-on-primary", label: "Text on primary", group: "Surfaces and text" },
  { key: "textOnSecondary", cssVariable: "--app-text-on-secondary", label: "Text on secondary", group: "Surfaces and text" },
  { key: "textOnAccent", cssVariable: "--app-text-on-accent", label: "Text on accent", group: "Surfaces and text" },

  { key: "primary0", cssVariable: "--app-primary-color-0", label: "Violet / primary 0", group: "Primary colors" },
  { key: "primary1", cssVariable: "--app-primary-color-1", label: "Red / primary 1", group: "Primary colors" },
  { key: "primary2", cssVariable: "--app-primary-color-2", label: "Green / primary 2", group: "Primary colors" },

  { key: "secondary0", cssVariable: "--app-secondary-color-0", label: "Gold / secondary 0", group: "Secondary colors" },
  { key: "secondary1", cssVariable: "--app-secondary-color-1", label: "Cyan / secondary 1", group: "Secondary colors" },
  { key: "secondary2", cssVariable: "--app-secondary-color-2", label: "Magenta / secondary 2", group: "Secondary colors" },

  { key: "tertiary0", cssVariable: "--app-tertiary-color-0", label: "Aqua / tertiary 0", group: "Tertiary colors" },
  { key: "tertiary1", cssVariable: "--app-tertiary-color-1", label: "Amber / tertiary 1", group: "Tertiary colors" },
  { key: "tertiary2", cssVariable: "--app-tertiary-color-2", label: "Cobalt / tertiary 2", group: "Tertiary colors" },
] as const;

export type ThemeColorKey = (typeof THEME_COLOR_FIELDS)[number]["key"];
export type ThemeColors = Record<ThemeColorKey, string>;

export const FONT_OPTIONS = [
  { value: "mali", label: "Mali" },
  { value: "m-plus-1", label: "M PLUS 1" },
  { value: "space-grotesk", label: "Space Grotesk" },
  { value: "manrope", label: "Manrope" },
] as const;

export type ThemeFont = (typeof FONT_OPTIONS)[number]["value"];
export type ThemePresetId = "cyberpunk" | "midnight" | "ember";

export type ThemeConfig = {
  presetId: ThemePresetId | "custom";
  colors: ThemeColors;
  fonts: {
    body: ThemeFont;
    heading: ThemeFont;
  };
};
