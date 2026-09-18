import { services } from "@/data/services";

export interface NavLink {
  label: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Projekte", href: "/projekte" },
  { label: "Unternehmen", href: "/unternehmen" },
  { label: "Karriere", href: "/karriere" },
  { label: "Ansprechpartner", href: "/ansprechpartner" },
  { label: "Kontakt", href: "/kontakt" },
];

// Wird automatisch aus data/services.ts erzeugt — bei neuen
// Leistungen dort ergänzen, hier ändert sich nichts.
export const footerServiceNav: NavLink[] = services.map((s) => ({
  label: s.navLabel,
  href: `/leistungen/${s.slug}`,
}));

export const footerCompanyNav: NavLink[] = [
  { label: "Über uns", href: "/unternehmen" },
  { label: "Ansprechpartner", href: "/ansprechpartner" },
  { label: "Karriere", href: "/karriere" },
  { label: "Projekte", href: "/projekte" },
];

export const footerServiceLinks: NavLink[] = [
  { label: "Kontakt", href: "/kontakt" },
  // Hinweisgeberschutz ist nur ab 50 Mitarbeitenden gesetzlich
  // vorgeschrieben — Zeile & Seite sonst entfernen.
  { label: "Hinweisgeberschutz", href: "/hinweisgeberschutzgesetz" },
];

export const footerLegalNav: NavLink[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];
