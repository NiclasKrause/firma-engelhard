export interface Certification {
  name: string;
  issuer: string;
}

// Optional: Zertifizierungen, Innungsmitgliedschaften, Siegel.
// Leer lassen, wenn nicht vorhanden.
export const certifications: Certification[] = [];
