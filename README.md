# Web Vizija — Vue 3 projekt

## Struktura komponenti

```
src/
├── main.js                   # Entry point
├── App.vue                   # Root — assembles sve komponente
├── composables/
│   └── useReveal.js          # Scroll reveal animacija (reusable)
└── components/
    ├── WvLogo.vue             # Logo (SVG ikonica + wordmark)
    ├── WvNav.vue              # Navigacija (sticky, mobile hamburger)
    ├── WvHero.vue             # Hero sekcija
    ├── WvServices.vue         # Usluge grid
    ├── WvWhy.vue              # Zašto mi? (tamna sekcija)
    ├── WvPortfolio.vue        # Portfolio / Radovi
    ├── WvReviews.vue          # Recenzije klijenata
    ├── WvCta.vue              # Kontakt forma
    └── WvFooter.vue           # Footer
```

## Pokretanje

```bash
npm install
npm run dev
```

## Build za produkciju

```bash
npm run build
```

## Što trebaš promijeniti

| Fajl              | Šta mijenjati                                      |
|-------------------|----------------------------------------------------|
| `WvNav.vue`       | Linkovi u navigaciji                               |
| `WvHero.vue`      | Statistike (50+ projekata itd.)                    |
| `WvServices.vue`  | Usluge, tagovi                                     |
| `WvPortfolio.vue` | Projekti, URL-ovi, emojiji, opisi                  |
| `WvReviews.vue`   | Prave recenzije klijenata                          |
| `WvCta.vue`       | `handleSubmit()` — povezi s email servisom         |
| `WvFooter.vue`    | Email, telefon, social media linkovi               |
| `App.vue`         | CSS varijable (boje, fontovi u `:root`)            |

## Forma — email integracija

U `WvCta.vue`, funkcija `handleSubmit()` je pripremljena za backend.
Preporučene opcije:
- **EmailJS** (besplatno, samo frontend)
- **Netlify Forms** (ako deployaš na Netlify)
- **Formspree** (jednostavno, besplatno)

## Brand boje

| Varijabla                  | Vrijednost  | Opis                     |
|----------------------------|-------------|--------------------------|
| `--brand-primary`          | `#0f7b6c`   | Rich teal (glavni)       |
| `--brand-accent`           | `#f4845f`   | Warm coral (akcent)      |
| `--brand-navy`             | `#1e3a5f`   | Deep navy (logo grad.)   |
# web-vizija
