/**
 * Single place to change the details that appear across the legal pages.
 * Update these before the site goes in front of Meta review.
 */
export const site = {
  company: "Modern Tiles Ltd",
  product: "Modern Tiles ERP",
  /** Public origin the site is deployed to. Used for canonical and OG URLs. */
  url: "https://moderntiles.co.ug",
  /** One inbox handles support, privacy and data deletion requests. */
  contactEmail: "moderntielserp@gmail.com",
  /** The WhatsApp Business number messages are sent from. */
  whatsappNumber: "+256 702 780800",
  /** Shown as the effective date on every policy page. */
  lastUpdated: "20 August 2026",
} as const;

export const legalRoutes = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/data-deletion", label: "Data Deletion" },
] as const;
