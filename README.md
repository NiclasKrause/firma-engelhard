# Engelhard Haus- und Hofservice — Website

Neu gebaute Website für Engelhard Haus- und Hofservice (Rain / Dasing /
Lauingen a.d. Donau), auf Basis des `handwerker-template`.

## Entwickeln

```bash
npm install
npm run dev
```

## Was noch offen ist, bevor die Seite live geht

- **Hero-/Leistungsfotos**: `public/photos/hero.svg`,
  `equipment.svg`, `service-*.svg` sind noch Platzhalter — echte
  Fotos vom Kunden anfragen und Dateien ersetzen (gleicher Pfad).
  Die 12 Vorher/Nachher-Referenzprojekte in `src/data/projects.ts`
  sind dagegen bereits echte Fotos von firma-engelhard.de.
- **Projekt-Eckdaten prüfen**: Die Jahreszahlen bei den
  Referenzprojekten sind aus dem Upload-Datum der Original-Fotos
  abgeleitet, nicht vom Kunden bestätigt — vor Veröffentlichung mit
  Marco Engelhard abgleichen.
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
