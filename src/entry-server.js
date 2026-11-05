import { createMemoryHistory } from 'vue-router'
import { renderToString } from 'vue/server-renderer'
import { createWebVizijaApp } from './createApp'
import { marketList } from './data/markets'
import { pageSeo, hreflangEntries } from './data/seo'

export { pageSeo, hreflangEntries }

// Rute koje se prerenderaju: putanja → izlazni fajl u dist/
export const prerenderRoutes = [
  { path: '/', file: 'index.html' },
  ...marketList.map((m) => ({ path: `/${m.slug}`, file: `${m.slug}.html` })),
  { path: '/404', file: '404.html' },
]

export async function render(path) {
  const { app, router } = createWebVizijaApp(createMemoryHistory())
  await router.push(path)
  await router.isReady()
  return renderToString(app)
}
