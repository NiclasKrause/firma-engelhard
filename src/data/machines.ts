export interface Machine {
  name: string;
  manufacturer: string;
  type: string;
  usage: string;
}

// Optional: konkrete Maschinen/Ausrüstung mit Hersteller & Typ.
// Leer lassen, wenn nicht relevant — die Sektion zeigt dann nur Bild
// und Text aus data/content.ts (equipment).
export const machines: Machine[] = [];
