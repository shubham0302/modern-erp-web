"use client";

import { useEffect, useLayoutEffect } from "react";

import {
  applyTheme,
  resolvedTheme,
  storedTheme,
  systemTheme,
  THEME_STORAGE_KEY,
} from "@/lib/theme";

/**
 * Flips between light and dark and remembers the choice. Which icon shows is
 * decided in CSS from `<html data-theme>`, so this button renders the same on
 * the server and the client and there is nothing to hydrate.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  // React's dev-only remount resets the attributes on <html>, wiping what the
  // inline script set. Re-applying before paint is a no-op in production.
  useLayoutEffect(() => {
    applyTheme(resolvedTheme());
  }, []);

  // While no explicit choice is stored, keep following the operating system.
  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");

    const onChange = () => {
      if (!storedTheme()) applyTheme(systemTheme());
    };

    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  function toggle() {
    const next = resolvedTheme() === "dark" ? "light" : "dark";

    applyTheme(next);

    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Private browsing or blocked storage: the choice just will not persist.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark theme"
      title="Switch between light and dark theme"
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--muted-foreground)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] ${className}`}
    >
      {/* Shown while light is active: click to go dark. */}
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="theme-icon-moon h-4 w-4"
      >
        <path d="M20.5 14.3A8.5 8.5 0 1 1 9.7 3.5a6.8 6.8 0 0 0 10.8 10.8Z" />
      </svg>

      {/* Shown while dark is active: click to go light. */}
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="theme-icon-sun h-4 w-4"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  );
}
