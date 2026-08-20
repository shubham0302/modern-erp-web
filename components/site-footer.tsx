import Link from "next/link";

import { legalRoutes, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-5 px-6 py-9 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-[var(--muted-foreground)]">
          {`© ${new Date().getFullYear()} ${site.company}. All rights reserved.`}
        </p>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {legalRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="text-xs text-[var(--muted-foreground)] transition-colors hover:text-[var(--primary)]"
            >
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
