# Engelhard Haus- und Hofservice — Website

Neu gebaute Website für Engelhard Haus- und Hofservice (Rain / Dasing /
Lauingen a.d. Donau), auf Basis des `handwerker-template`.

## Entwickeln

```bash
npm install
npm run dev
```

## Was noch offen ist, bevor die Seite live geht

- **Echte Fotos**: `public/photos/*.svg` sind Platzhalter. Die alte
  Seite (firma-engelhard.de) hat eine Referenzen-Galerie mit
  Vorher/Nachher-Fotos — mit Erlaubnis des Kunden übernehmen und in
  `public/photos/` sowie `src/data/projects.ts` einpflegen.
- **Handelsregister-Eintrag**: Auf der alten Seite fehlt im Impressum
  ein HRB-Eintrag (nur Steuernummer ist angegeben). Da es sich um eine
  UG (haftungsbeschränkt) handelt, mit dem Kunden abklären und in
  `src/data/company.ts` ergänzen.
- **Logo**: aktuell Text-Wortmarke "ENGELHARD" im Header. Falls das
  bestehende Haus-Icon-Logo übernommen werden soll, Datei nach
  `public/brand/` legen und `logoSrc` in `company.ts` setzen.
- **Domain/Deploy**: `company.url` ist aktuell auf
  `https://firma-engelhard.de` gesetzt (bestehende Domain).

Inhaltlich basiert alles (Leistungen, Kontakt, USPs, Öffnungszeiten
Mo–Sa 8–20 Uhr) auf der aktuell live erreichbaren Seite.

Struktur & Anpassungs-Workflow siehe
[handwerker-template](../handwerker-template/README.md).
