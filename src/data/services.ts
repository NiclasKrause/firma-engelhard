export interface ServiceArea {
  index: string;
  slug: string;
  title: string;
  subline: string;
  intro: string;
  leistungen: string[];
  ctaLabel: string;
  navLabel: string;
  image: string;
}

export const services: ServiceArea[] = [
  {
    index: "01",
    slug: "malerarbeiten",
    title: "MALERARBEITEN",
    subline: "FARBE, DIE HÄLT, WAS SIE VERSPRICHT.",
    intro:
      "Malerarbeiten im Innen- und Außenbereich — von der Fassade über Fenster und Türen bis zur Graffitientfernung. Ausschließlich mit umweltschonenden Produkten auf höchstem Qualitätsstandard.",
    leistungen: [
      "Malerarbeiten Innen & Außen (Fassade, Wohnung, Zaun und Mauern)",
      "Fenster und Fensterläden lasieren oder lackieren",
      "Türen und Türrahmen lasieren oder lackieren",
      "Holzfassaden lasieren oder lackieren",
      "Graffitientfernung",
    ],
    ctaLabel: "MALERARBEITEN ANFRAGEN",
    navLabel: "Malerarbeiten",
    image: "/photos/service-1.svg",
  },
  {
    index: "02",
    slug: "reinigung-impraegnierung",
    title: "REINIGUNG & IMPRÄGNIERUNG",
    subline: "SAUBER. GESCHÜTZT. WERTERHALTEND.",
    intro:
      "Dach-, Hof- und Fassadenreinigung mit Imprägnierung — für den optischen und langfristigen Werterhalt Ihrer Immobilie.",
    leistungen: [
      "Stein-, Beton-, Mauer- und Garagenreinigung",
      "Fassadenreinigung mit Imprägnierung",
      "Dachreinigung mit Imprägnierung",
      "Dachrinnenreinigung",
      "Hofreinigung mit Imprägnierung",
    ],
    ctaLabel: "REINIGUNG ANFRAGEN",
    navLabel: "Reinigung & Imprägnierung",
    image: "/photos/service-2.svg",
  },
  {
    index: "03",
    slug: "garten-landschaftsbau",
    title: "GARTEN & LANDSCHAFTSBAU",
    subline: "IHR GARTEN, GEPFLEGT VON PROFIS.",
    intro:
      "Gartenarbeiten, Landschaftsbau und Gartenzaunrestaurierung — für ein gepflegtes Grundstück das ganze Jahr über.",
    leistungen: [
      "Rasen mähen",
      "Baumzuschnitt",
      "Hecken schneiden",
      "Zaunrestaurierung",
      "Zaun lasieren oder lackieren",
    ],
    ctaLabel: "GARTENSERVICE ANFRAGEN",
    navLabel: "Garten & Landschaftsbau",
    image: "/photos/service-3.svg",
  },
  {
    index: "04",
    slug: "renovierung",
    title: "RENOVIERUNG",
    subline: "INNEN WIE AUSSEN NEU GEMACHT.",
    intro:
      "Renovierungsarbeiten im Innen- und Außenbereich — von der Natursteinbehandlung bis zur Entrümpelung.",
    leistungen: [
      "Natursteinbehandlung",
      "Steinputzverarbeitung",
      "Fliesen und Laminat verlegen",
      "Alte Böden entfernen (PVC, Laminat, Fliesen)",
      "Entrümpelung und Entsorgung (Altgeräte, Fahrräder, PCs usw.)",
    ],
    ctaLabel: "RENOVIERUNG ANFRAGEN",
    navLabel: "Renovierung",
    image: "/photos/service-4.svg",
  },
  {
    index: "05",
    slug: "ausgrabung-trockenlegung",
    title: "AUSGRABUNG & TROCKENLEGUNG",
    subline: "TROCKENE MAUERN, LANGFRISTIG GESCHÜTZT.",
    intro:
      "Ausgrabung und Trockenlegung von Gebäuden — mit Noppenfolie oder Dränagerohr, fachgerecht umgesetzt.",
    leistungen: [
      "Ausgrabung und Trockenlegung",
      "Trockenlegung mit Noppenfolie",
      "Trockenlegung mit Dränagerohr",
    ],
    ctaLabel: "BERATUNG ANFRAGEN",
    navLabel: "Ausgrabung & Trockenlegung",
    image: "/photos/service-5.svg",
  },
];

export function getServiceBySlug(slug: string): ServiceArea | undefined {
  return services.find((s) => s.slug === slug);
}
