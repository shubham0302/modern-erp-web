import Link from "next/link";

import { TileMark } from "@/components/brand";
import { ThemeToggle } from "@/components/theme-toggle";
import { legalRoutes, site } from "@/lib/site";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Soft brand wash behind the fold. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-18rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full opacity-[0.18] blur-[110px]"
        style={{ background: "var(--pl-500)" }}
      />

      <div className="relative flex justify-end px-6 pt-6">
        <ThemeToggle />
      </div>

      <main className="relative mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-6 pb-24 pt-12 text-center">
        <TileMark className="h-14 w-14" />

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
          {site.company}
        </p>

        <h1 className="mt-4 text-4xl font-black sm:text-6xl">Coming soon</h1>

        <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-[var(--muted-foreground)]">
          {`${site.product} is being built. Ordering, inventory, dispatch and
          supplier workflows for the tile trade, in one place.`}
        </p>

        <div className="mt-11 h-px w-16 bg-[var(--border)]" />

        <p className="mt-8 text-xs text-[var(--muted-foreground)]">
          In the meantime, read our policies
        </p>

        <nav className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
          {legalRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-xs font-medium transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              {route.label}
            </Link>
          ))}
        </nav>

        <p className="mt-12 text-xs text-[var(--muted-foreground)]">
          Questions? Write to{" "}
          <a
            href={`mailto:${site.contactEmail}`}
            className="text-[var(--primary)] underline underline-offset-4"
          >
            {site.contactEmail}
          </a>
        </p>
      </main>

      <footer className="relative border-t border-[var(--border)] py-7 text-center">
        <p className="text-xs text-[var(--muted-foreground)]">
          {`© ${new Date().getFullYear()} ${site.company}. All rights reserved.`}
        </p>
      </footer>
    </div>
  );
}
