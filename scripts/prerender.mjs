// Generiše statički HTML za svaku rutu, da Google i društvene mreže dobiju puni sadržaj i tačan <head>.
// Pokreće se nakon oba vite builda (vidi "build" u package.json).

import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { render, prerenderRoutes, pageSeo, hreflangEntries } from '../dist-ssr/entry-server.mjs'

const escapeAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const meta = (attr, key, content) => (content ? `<meta ${attr}="${key}" content="${escapeAttr(content)}" />` : '')

function renderHead(seo) {
  return [
    `<title>${escapeAttr(seo.title)}</title>`,
    meta('name', 'description', seo.description),
    meta('name', 'robots', seo.noindex ? 'noindex' : 'index, follow'),
    seo.canonical && `<link rel="canonical" href="${seo.canonical}" />`,
    meta('property', 'og:title', seo.title),
    meta('property', 'og:description', seo.description),
    meta('property', 'og:url', seo.canonical),
    meta('property', 'og:locale', seo.ogLocale),
    meta('name', 'twitter:title', seo.title),
    meta('name', 'twitter:description', seo.description),
    ...(seo.noindex ? [] : hreflangEntries.map(({ hreflang, href }) =>
      `<link rel="alternate" hreflang="${hreflang}" href="${href}" data-hreflang="true" />`)),
    seo.jsonLd && `<script type="application/ld+json" id="ld-page">${JSON.stringify(seo.jsonLd).replace(/</g, '\\u003c')}</script>`,
  ].filter(Boolean).join('\n  ')
}

const template = readFileSync('dist/index.html', 'utf-8')

for (const { path, file } of prerenderRoutes) {
  const seo = pageSeo(path)
  const appHtml = await render(path)
  const html = template
    .replace('<html lang="bs">', `<html lang="${seo.lang}">`)
    .replace('<!--seo-head-->', () => renderHead(seo))
    .replace('<div id="app"></div>', () => `<div id="app">${appHtml}</div>`)
  writeFileSync(`dist/${file}`, html)
  console.log(`prerender: ${path} -> dist/${file}`)
}

rmSync('dist-ssr', { recursive: true, force: true })
