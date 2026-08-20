import Link from "next/link";

import { site } from "@/lib/site";

/** Four tiles on a grid, one of them accented. Doubles as the favicon mark. */
export function TileMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      role="img"
      aria-label={`${site.company} logo`}
      className={className}
    >
      <rect x="2" y="2" width="13" height="13" rx="3.5" fill="var(--pl-500)" />
      <rect
        x="17"
        y="2"
        width="13"
        height="13"
        rx="3.5"
        fill="var(--pl-500)"
        opacity="0.45"
      />
      <rect
        x="2"
        y="17"
        width="13"
        height="13"
        rx="3.5"
        fill="var(--pl-500)"
        opacity="0.45"
      />
      <rect x="17" y="17" width="13" height="13" rx="3.5" fill="var(--pl-500)" />
    </svg>
  );
}

export function Wordmark({ href = "/" }: { href?: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2.5 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
    >
      <TileMark className="h-7 w-7" />
      <span className="text-[0.95rem] font-bold tracking-tight">
        {site.company}
      </span>
    </Link>
  );
}
