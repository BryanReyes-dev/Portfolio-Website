import { THEME_COLOR_FIELDS, type ThemeConfig } from "./types";

export function applyTheme(
  theme: ThemeConfig,
  root: HTMLElement = document.documentElement
) {
  for (const field of THEME_COLOR_FIELDS) {
    root.style.setProperty(field.cssVariable, theme.colors[field.key]);
  }

  root.dataset.fontBody = theme.fonts.body;
  root.dataset.fontHeading = theme.fonts.heading;
}
