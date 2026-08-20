import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import { site } from "@/lib/site";
import { themeInitScript } from "@/lib/theme";

import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.product}`,
    template: `%s | ${site.product}`,
  },
  description: `${site.product} by ${site.company}. Order, inventory and dispatch management for the tile trade.`,
  openGraph: {
    title: site.product,
    description: `${site.product} by ${site.company}.`,
    url: site.url,
    siteName: site.product,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={urbanist.variable} suppressHydrationWarning>
      <head>
        {/* Resolves the theme during HTML parsing, before anything is painted. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
