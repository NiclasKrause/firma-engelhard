export interface QualityPoint {
  index: string;
  title: string;
  description: string;
}

export const qualityPoints: QualityPoint[] = [
  {
    index: "01",
    title: "KOSTENLOSE BERATUNG",
    description: "Individuelle und unverbindliche Beratung — auch bequem per WhatsApp.",
  },
  {
    index: "02",
    title: "SCHNELLE TERMINE",
    description: "Keine langen Wartezeiten, dazu Preisgarantie.",
  },
  {
    index: "03",
    title: "UMWELTSCHONEND",
    description: "Wir arbeiten ausschließlich mit umweltschonenden Produkten auf höchstem Qualitätsstandard.",
  },
  {
    index: "04",
    title: "ZUFRIEDENHEITSGARANTIE",
    description: "Rundum-Sorglos-Garantie — sind Sie nicht zufrieden, finden wir eine Lösung.",
  },
];
