import Link from "next/link";
import type { ReactNode } from "react";

import { Wordmark } from "@/components/brand";
import { SiteFooter } from "@/components/site-footer";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/lib/site";

export function LegalShell({
  title,
  summary,
  children,
}: {
  title: string;
  summary: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4">
          <Wordmark />

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-xs font-medium text-[var(--muted-foreground)] transition-colors hover:text-[var(--primary)]"
            >
              Back to home
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-20 pt-12 sm:pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
          {site.product}
        </p>

        <h1 className="mt-3 text-3xl font-black sm:text-4xl">{title}</h1>

        <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-[var(--muted-foreground)]">
          {summary}
        </p>

        <p className="mt-6 inline-flex rounded-full border border-[var(--border)] bg-[var(--card)] px-3.5 py-1.5 text-xs text-[var(--muted-foreground)]">
          {`Last updated: ${site.lastUpdated}`}
        </p>

        <div className="legal-copy mt-10">{children}</div>
      </main>

      <SiteFooter />
    </div>
  );
}
