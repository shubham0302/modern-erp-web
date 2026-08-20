/**
 * Theme handling for the public site.
 *
 * `localStorage` only ever holds an explicit choice. With nothing stored we
 * follow the operating system, so the resolved value written to
 * `<html data-theme>` is always "light" or "dark" and the CSS never has to
 * guess.
 */
export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

/**
 * Runs inline in <head> before the first paint, so a stored choice is applied
 * without a flash of the wrong theme. Kept as a string of plain ES5 because it
 * ships as-is, unbundled, ahead of any JavaScript.
 */
export const themeInitScript = `(function(){try{var s=localStorage.getItem("${THEME_STORAGE_KEY}");var t=s==="light"||s==="dark"?s:(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

/** The explicit choice, or null when the visitor is still following the OS. */
export function storedTheme(): Theme | null {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

export function systemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function resolvedTheme(): Theme {
  return storedTheme() ?? systemTheme();
}

export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}
