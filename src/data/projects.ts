export interface Project {
  slug: string;
  name: string;
  location: string;
  year: string;
  category: string;
  span: "full" | "wide" | "narrow";
  summary: string;
  scope?: string;
  execution?: string;
  specifics?: string;
  client?: string;
  image?: string;
  imageBefore?: string;
}

// Reale Vorher/Nachher-Projekte, übernommen von der alten Referenzen-
// Galerie (firma-engelhard.de). "year" ist aus dem Upload-Datum der
// Original-Fotos abgeleitet (nicht vom Kunden bestätigt) — vor
// Veröffentlichung idealerweise mit Marco Engelhard abgleichen.
export const projects: Project[] = [
  {
    slug: "hofreinigung-mit-impraegnierung",
    name: "Hofreinigung mit Imprägnierung",
    location: "Raum Rain",
    year: "2019",
    category: "Reinigung & Imprägnierung",
    span: "wide",
    summary: "Hofreinigung mit anschließender Imprägnierung für dauerhaften Schutz.",
    imageBefore: "/photos/referenzen/hofreinigung-vorher.jpg",
    image: "/photos/referenzen/hofreinigung-nachher.jpg",
  },
  {
    slug: "dachreinigung-mit-impraegnierung",
    name: "Dachreinigung mit Imprägnierung",
    location: "Raum Rain",
    year: "2019",
    category: "Reinigung & Imprägnierung",
    span: "narrow",
    summary: "Professionelle Dachreinigung mit Imprägnierung gegen Moos- und Algenbefall.",
    imageBefore: "/photos/referenzen/dachreinigung-vorher.jpg",
    image: "/photos/referenzen/dachreinigung-nachher.jpg",
  },
  {
    slug: "pool-beschichtung",
    name: "Pool-Beschichtung",
    location: "Raum Rain",
    year: "2020",
    category: "Renovierung",
    span: "wide",
    summary: "Neue Beschichtung für ein Schwimmbecken — dicht, pflegeleicht und optisch aufgewertet.",
    imageBefore: "/photos/referenzen/pool-beschichtung-vorher.jpg",
    image: "/photos/referenzen/pool-beschichtung-nachher.jpg",
  },
  {
    slug: "mauer-mit-schieferdach",
    name: "Mauer mit Schieferdach",
    location: "Raum Rain",
    year: "2019",
    category: "Renovierung",
    span: "narrow",
    summary: "Instandsetzung einer Mauer inklusive Schieferdach-Abdeckung.",
    imageBefore: "/photos/referenzen/mauer-schieferdach-vorher.jpg",
    image: "/photos/referenzen/mauer-schieferdach-nachher.jpg",
  },
  {
    slug: "dachuntersicht",
    name: "Dachuntersicht",
    location: "Raum Rain",
    year: "2019",
    category: "Malerarbeiten",
    span: "wide",
    summary: "Instandsetzung und Neuanstrich der Dachuntersicht.",
    imageBefore: "/photos/referenzen/dachuntersicht-vorher.jpg",
    image: "/photos/referenzen/dachuntersicht-nachher.jpg",
  },
  {
    slug: "fenster-streichen",
    name: "Fenster streichen",
    location: "Raum Rain",
    year: "2019",
    category: "Malerarbeiten",
    span: "narrow",
    summary: "Fenster lasiert und neu gestrichen für langfristigen Witterungsschutz.",
    imageBefore: "/photos/referenzen/fenster-streichen-vorher.jpg",
    image: "/photos/referenzen/fenster-streichen-nachher.jpg",
  },
  {
    slug: "fassade-streichen",
    name: "Fassade streichen",
    location: "Raum Rain",
    year: "2019",
    category: "Malerarbeiten",
    span: "wide",
    summary: "Fassadenanstrich für einen frischen, gepflegten Gesamteindruck.",
    imageBefore: "/photos/referenzen/fassade-streichen-vorher.jpg",
    image: "/photos/referenzen/fassade-streichen-nachher.jpg",
  },
  {
    slug: "tor-lackieren",
    name: "Tor lackieren",
    location: "Raum Rain",
    year: "2019",
    category: "Malerarbeiten",
    span: "narrow",
    summary: "Hoftor abgeschliffen und neu lackiert.",
    imageBefore: "/photos/referenzen/tor-lackieren-vorher.jpg",
    image: "/photos/referenzen/tor-lackieren-nachher.png",
  },
  {
    slug: "bodenbeschichtung",
    name: "Bodenbeschichtung",
    location: "Raum Rain",
    year: "2019",
    category: "Renovierung",
    span: "wide",
    summary: "Neue, robuste Bodenbeschichtung für einen strapazierfähigen Untergrund.",
    imageBefore: "/photos/referenzen/bodenbeschichtung-vorher.jpg",
    image: "/photos/referenzen/bodenbeschichtung-nachher.jpg",
  },
  {
    slug: "laminat-auf-treppe-verlegen",
    name: "Laminat auf Treppe verlegen",
    location: "Raum Rain",
    year: "2019",
    category: "Renovierung",
    span: "narrow",
    summary: "Alte Treppe mit neuem Laminat verkleidet.",
    imageBefore: "/photos/referenzen/treppe-laminat-vorher.jpg",
    image: "/photos/referenzen/treppe-laminat-nachher.png",
  },
  {
    slug: "gartenhaeuschen",
    name: "Gartenhäuschen",
    location: "Raum Rain",
    year: "2019",
    category: "Garten & Landschaftsbau",
    span: "wide",
    summary: "Gartenhäuschen aufgearbeitet und neu gestrichen.",
    imageBefore: "/photos/referenzen/gartenhaeuschen-vorher.jpg",
    image: "/photos/referenzen/gartenhaeuschen-nachher.jpg",
  },
  {
    slug: "balkonsanierung",
    name: "Balkonsanierung",
    location: "Raum Rain",
    year: "2019",
    category: "Renovierung",
    span: "narrow",
    summary: "Sanierung eines Balkons — von abgenutzt zu einladend.",
    imageBefore: "/photos/referenzen/balkonsanierung-vorher.jpg",
    image: "/photos/referenzen/balkonsanierung-nachher.jpg",
  },
];
