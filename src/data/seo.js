// SEO podaci po ruti — isti izvor koriste prerender (scripts/prerender.mjs) i klijent (useSeoMeta)

import { markets, marketList } from './markets'
import { faq } from './faq'

export const SITE_URL = 'https://webvizija.com'

const BUSINESS_ID = `${SITE_URL}/#business`

const business = {
  '@type': 'ProfessionalService',
  '@id': BUSINESS_ID,
  name: 'Web Vizija',
  description: 'Izrada web stranica, web shopova i web aplikacija po mjeri, uz SEO optimizaciju, fotografiju i pisanje sadržaja.',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/apple-touch-icon.png`,
  image: `${SITE_URL}/img/og-image.jpg`,
  email: 'webbvizija@gmail.com',
  telephone: '+38763685787',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mostar',
    addressRegion: 'Federacija Bosne i Hercegovine',
    addressCountry: 'BA',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 43.3438, longitude: 17.8078 },
  areaServed: marketList.map((m) => ({ '@type': 'Country', name: m.areaServed })),
  priceRange: '€€',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
  },
  sameAs: ['https://www.instagram.com/web_vizija/'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digitalne usluge — Web Vizija',
    itemListElement: [
      offer('Izrada web stranica', 'Moderne, brze i mobilno prilagođene web stranice — landing stranice i poslovni webovi, optimizirani za Google pretragu.', { minPrice: 250, maxPrice: 1000 }),
      offer('Izrada web shopova', 'E-commerce rješenja s upravljanjem narudžbama, admin panelom i statistikom prodaje.', { minPrice: 1500 }),
      offer('Izrada web aplikacija i SaaS sistema', 'Web aplikacije i sistemi po mjeri — rezervacijski sistemi, portali, dashboardi i konfiguratori.', { minPrice: 1500 }),
    ],
  },
}

function offer(name, description, price) {
  return {
    '@type': 'Offer',
    priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'EUR', ...price },
    itemOffered: { '@type': 'Service', name, description, provider: { '@id': BUSINESS_ID } },
  }
}

const faqPage = {
  '@type': 'FAQPage',
  mainEntity: faq.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

function buildJsonLd({ canonical, title, description, lang, breadcrumb }) {
  const graph = [
    business,
    { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, name: 'Web Vizija', url: `${SITE_URL}/`, publisher: { '@id': BUSINESS_ID } },
    {
      '@type': 'WebPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: title,
      description,
      inLanguage: lang,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': BUSINESS_ID },
    },
    { ...faqPage, '@id': `${canonical}#faq` },
  ]
  if (breadcrumb) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: breadcrumb, item: canonical },
      ],
    })
  }
  return { '@context': 'https://schema.org', '@graph': graph }
}

export const hreflangEntries = [
  { hreflang: 'x-default', href: `${SITE_URL}/` },
  ...marketList.map((m) => ({ hreflang: m.hreflang, href: `${SITE_URL}/${m.slug}` })),
]

export function pageSeo(path) {
  const clean = path.replace(/\/+$/, '') || '/'

  if (clean === '/') {
    const page = {
      title: 'Izrada web stranica i web aplikacija | Web Vizija',
      description: 'Izrada web stranica od 250 €, web shopova i web aplikacija od 1.500 €. Besplatne konzultacije, isporuka web stranice za 7–14 dana. Mostar, BiH i regija.',
      canonical: `${SITE_URL}/`,
      lang: 'bs',
      ogLocale: 'bs_BA',
    }
    return { ...page, jsonLd: buildJsonLd(page) }
  }

  const market = Object.values(markets).find((m) => `/${m.slug}` === clean)
  if (market) {
    const page = {
      title: market.title,
      description: market.metaDescription,
      canonical: `${SITE_URL}/${market.slug}`,
      lang: market.hreflang,
      ogLocale: market.ogLocale,
      breadcrumb: market.introHeading,
    }
    return { ...page, jsonLd: buildJsonLd(page) }
  }

  return {
    title: 'Stranica nije pronađena | Web Vizija',
    description: 'Tražena stranica ne postoji. Vrati se na početnu stranicu Web Vizije.',
    lang: 'bs',
    ogLocale: 'bs_BA',
    noindex: true,
  }
}
