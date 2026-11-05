// composables/useSeoMeta.js
// Prvo učitavanje dolazi s gotovim <head> iz prerendera (scripts/prerender.mjs);
// ovo ga ažurira pri navigaciji između ruta na klijentu.

import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { pageSeo, hreflangEntries } from '../data/seo'

function setMetaTag(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!content) {
    if (el) el.remove()
    return
  }
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!href) {
    if (el) el.remove()
    return
  }
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setJsonLd(id, data) {
  let el = document.getElementById(id)
  if (!data) {
    if (el) el.remove()
    return
  }
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

function setHreflangLinks(entries) {
  document.querySelectorAll('link[rel="alternate"][data-hreflang]').forEach((el) => el.remove())

  entries.forEach(({ hreflang, href }) => {
    const el = document.createElement('link')
    el.setAttribute('rel', 'alternate')
    el.setAttribute('hreflang', hreflang)
    el.setAttribute('href', href)
    el.setAttribute('data-hreflang', 'true')
    document.head.appendChild(el)
  })
}

export function useSeoMeta() {
  if (import.meta.env.SSR) return

  const route = useRoute()

  watchEffect(() => {
    const seo = pageSeo(route.path)

    document.documentElement.lang = seo.lang
    document.title = seo.title
    setMetaTag('name', 'description', seo.description)
    setMetaTag('name', 'robots', seo.noindex ? 'noindex' : 'index, follow')
    setMetaTag('property', 'og:title', seo.title)
    setMetaTag('property', 'og:description', seo.description)
    setMetaTag('property', 'og:url', seo.canonical)
    setMetaTag('property', 'og:locale', seo.ogLocale)
    setMetaTag('name', 'twitter:title', seo.title)
    setMetaTag('name', 'twitter:description', seo.description)
    setCanonical(seo.canonical)
    setJsonLd('ld-page', seo.jsonLd)
    setHreflangLinks(seo.noindex ? [] : hreflangEntries)
  })
}
