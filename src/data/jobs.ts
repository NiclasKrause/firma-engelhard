export interface Job {
  slug: string;
  title: string;
  area: string;
  description: string;
}

// Offene Stellen eintragen, sobald welche existieren. Leer lassen,
// wenn aktuell nicht aktiv gesucht wird — die Karriereseite zeigt dann
// nur das Initiativbewerbungs-Formular.
export const jobs: Job[] = [];
