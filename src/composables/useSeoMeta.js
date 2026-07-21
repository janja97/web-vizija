// composables/useSeoMeta.js
// Ažurira document <head> (title, meta, canonical, JSON-LD) po ruti — nema SSR,
// pa se ovo pokreće na klijentu čim se stranica montira.

import { watchEffect } from 'vue'

const SITE_URL = 'https://webvizija.com'

function setMetaTag(attr, key, content) {
  if (!content) return
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setJsonLd(id, data) {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export function useSeoMeta(getMeta) {
  watchEffect(() => {
    const meta = getMeta()
    if (!meta) return

    document.title = meta.title
    setMetaTag('name', 'description', meta.description)
    if (meta.keywords) setMetaTag('name', 'keywords', meta.keywords)
    setMetaTag('property', 'og:title', meta.title)
    setMetaTag('property', 'og:description', meta.description)
    setMetaTag('property', 'og:url', meta.canonical)
    if (meta.ogLocale) setMetaTag('property', 'og:locale', meta.ogLocale)
    setMetaTag('name', 'twitter:title', meta.title)
    setMetaTag('name', 'twitter:description', meta.description)
    setCanonical(meta.canonical)

    if (meta.localBusiness) {
      setJsonLd('ld-localbusiness-page', {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Web Vizija',
        description: meta.description,
        url: meta.canonical,
        email: 'webbvizija@gmail.com',
        telephone: '+38763685787',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Mostar',
          addressRegion: 'Federacija Bosne i Hercegovine',
          addressCountry: 'BA',
        },
        areaServed: { '@type': 'Country', name: meta.localBusiness.areaServed },
        priceRange: '$$',
      })
    }
  })
}

// Hreflang alternate linkovi — isti skup na svakoj stranici (uključujući self-referencu),
// kako Google traži za reciprocitet među lokalizovanim verzijama.
export function setHreflangLinks(markets) {
  document.querySelectorAll('link[rel="alternate"][data-hreflang]').forEach((el) => el.remove())

  const entries = [
    { hreflang: 'x-default', href: `${SITE_URL}/` },
    ...Object.values(markets).map((m) => ({ hreflang: m.hreflang, href: `${SITE_URL}/${m.slug}` })),
  ]

  entries.forEach(({ hreflang, href }) => {
    const el = document.createElement('link')
    el.setAttribute('rel', 'alternate')
    el.setAttribute('hreflang', hreflang)
    el.setAttribute('href', href)
    el.setAttribute('data-hreflang', 'true')
    document.head.appendChild(el)
  })
}

export { SITE_URL }
