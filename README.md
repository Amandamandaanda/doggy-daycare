# Doggy Daycare

Doggy Daycare är en responsiv webbapp där besökaren kan se hundarna på ett hunddagis. Appen hämtar hunddata från ett externt API och visar en katalog med grundläggande information och en egen detaljsida för varje hund.

## Live demo

[Öppna Doggy Daycare på GitHub Pages](https://amandamandaanda.github.io/doggy-daycare/)

## Sidor och funktioner

- **Startsida (`/`)** – en välkomstsida med navigation till hundkatalogen.
- **Våra hundar (`/dogs`)** – visar alla hundar som kort med bild, namn, ras och ålder.
- **Filtrering** – hundarna kan filtreras efter ras.
- **Hunddetaljer (`/dogs/:chipNumber`)** – visar hundens bild, ras, ålder, kön, närvarostatus, chipnummer och ägarens kontaktuppgifter.
- **Fallback-bilder** – en lokal standardbild visas om en hundbild saknas eller inte kan laddas.
- **Responsiv layout** – CSS Grid och media queries anpassar katalogen och detaljsidorna för mobil, surfplatta och desktop.

## API

Hundinformationen hämtas när appen startar från ett JSONBin-API:

```text
https://api.jsonbin.io/v3/b/68ccf99ad0ea881f4082d5b8
```

API-svaret sparas i React state och skickas vidare till katalog- och detaljsidorna. Appen visar bland annat `name`, `breed`, `age`, `sex`, `present`, `chipNumber`, `img` och `owner`.

## Teknik

- React 19
- Vite 8
- React Router
- JavaScript (JSX)
- CSS med Grid, Flexbox och media queries
- JSONBin API
- GitHub Pages och paketet `gh-pages`

Appen använder `HashRouter`. Det gör att länkar som `#/dogs` och `#/dogs/IEH455006` fungerar även när projektet publiceras som en statisk GitHub Pages-sida. Vite är konfigurerat med basvägen `/doggy-daycare/`.

## Köra projektet lokalt

Du behöver Node.js och npm installerat.

```bash
git clone https://github.com/Amandamandaanda/doggy-daycare.git
cd doggy-daycare
npm install
npm run dev
```

Öppna sedan adressen som Vite visar i terminalen, vanligtvis `http://localhost:5173`.

## Tillgängliga kommandon

```bash
npm run dev      # startar utvecklingsservern
npm run build    # skapar en produktionsversion i dist/
npm run preview  # förhandsvisar produktionsversionen lokalt
npm run lint     # kontrollerar koden med Oxlint
npm run deploy   # bygger och publicerar dist/ till GitHub Pages
```

## GitHub-arbetsflöde

Projektet har utvecklats med separata feature- och fix-brancher som har slagits ihop genom pull requests. `dev` är repositoryts standardbranch, medan den byggda appen publiceras till `gh-pages` med `npm run deploy`. Projektet använder ingen GitHub Actions-workflow.

## Projektstruktur

```text
src/
├── components/   # Header och återanvändbara hundkort
├── pages/        # Home, Dogs och DogDetails
├── assets/       # Bilder
├── App.jsx       # API-hämtning och routes
└── *.css         # Styling och responsiva brytpunkter
```
