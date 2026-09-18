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
}

// Referenzprojekte eintragen, sobald Fotos & Eckdaten vorliegen.
// Leer lassen blendet Projekte-Teaser auf der Startseite und die
// /projekte-Seite automatisch auf "keine Projekte" aus bzw. leer.
export const projects: Project[] = [];
