// ── Firmenidentität ──────────────────────────────────────────────
export const company = {
  name: "ENGELHARD",
  legalName: "I. M. Engelhard UG (haftungsbeschränkt)",
  foundedYear: 1998,
  generation: "1.",
  region: "Rain, Dasing und Lauingen a.d. Donau",
  regionShort: "Rain",
  email: "fa.engelhard@web.de",
  phone: "0157 80561663",
  phoneHref: "+4915780561663",

  // ── Rechtliches (für Impressum/Datenschutz) ──────────────────────
  // Auf der bisherigen Website ist kein Handelsregister-Eintrag
  // gelistet — nur die Steuernummer. Vor Livegang mit dem Kunden
  // abgleichen, ob es einen HRB-Eintrag gibt (UG ist grundsätzlich
  // eintragungspflichtig).
  registerCourt: "",
  registerNumber: "",
  vatId: "",
  taxNumber: "152/129/20182",
  management: ["Marco Engelhard"],

  // ── SEO / Meta ────────────────────────────────────────────────────
  url: "https://firma-engelhard.de",
  title: "Engelhard Haus- und Hofservice | Rain, Dasing, Lauingen a.d. Donau",
  description:
    "Engelhard Haus- und Hofservice übernimmt seit 1998 Maler-, Reinigungs-, Garten-, Renovierungs- und Trockenlegungsarbeiten in Rain, Dasing und Lauingen a.d. Donau.",
  keywords: [
    "Handwerker Rain",
    "Malerarbeiten Rain",
    "Hofreinigung Dasing",
    "Gartenarbeiten Lauingen",
    "Trockenlegung Gebäude",
  ],

  // ── Branding ──────────────────────────────────────────────────────
  logoSrc: null as string | null,
  logoWidth: 445,
  logoHeight: 90,
  accentColor: "#3f6b4a",

  // ── Fließtexte (mehrfach verwendet) ─────────────────────────────
  introText:
    "Seit 1998 betreuen und begleiten wir zufriedene Kunden wie Hauseigentümer, Vermieter, Hausverwaltungen, Wohnungsbaugesellschaften sowie mittelständische Unternehmen aus Industrie, Handel und Handwerk. Ihre individuelle Beratung und persönliche Betreuung stehen dabei immer im Mittelpunkt.",
  aboutText:
    "Engelhard Haus- und Hofservice ist ein inhabergeführter Betrieb mit Sitz in Rain. Seit 1998 stehen handwerkliche Top-Qualität, exzellenter Service und der Werterhalt bzw. die Wertsteigerung Ihrer Immobilie im Mittelpunkt — ausschließlich mit umweltschonenden Produkten auf höchstem Qualitätsstandard.",
  careerText:
    "Engelhard Haus- und Hofservice wächst — bei Interesse an einer Mitarbeit einfach direkt melden.",
} as const;

export function yearsOfExperience(): number {
  return new Date().getFullYear() - company.foundedYear;
}
