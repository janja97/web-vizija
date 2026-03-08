<template>
  <footer class="wv-footer">
    <div class="footer-inner">
      <div class="footer-top">

        <!-- Brand col -->
        <div class="footer-brand">
          <WvLogo :light="true" />
          <p>Tvoj digitalni partner za web, marketing, fotografiju i sve između. Jedno rješenje za sve digitalne potrebe tvog biznisa.</p>
          <div class="footer-socials">
            <a href="https://www.instagram.com/web_vizija/" target="_blank" rel="noopener" class="soc-btn" title="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Link cols -->
        <div v-for="col in footerCols" :key="col.title" class="footer-col">
          <h4>{{ col.title }}</h4>
          <a v-for="link in col.links" :key="link.label"
             :href="link.href"
             :target="link.external ? '_blank' : undefined"
             :rel="link.external ? 'noopener' : undefined"
             @click="link.scroll ? scrollTo(link.href) : null">
            {{ link.label }}
          </a>
        </div>

      </div>

      <div class="footer-bottom">
        <p>© {{ year }} <span>Web Vizija</span>. Sva prava zadržana. Napravljeno s <span>♥</span> za digitalni uspjeh.</p>
        <div class="footer-legal">
          <a href="#">Privatnost</a>
          <a href="#">Uvjeti</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import WvLogo from './WvLogo.vue'

const year = computed(() => new Date().getFullYear())

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const footerCols = [
  {
    title: 'Usluge',
    links: [
      { label: 'Web stranice',        href: '#usluge', scroll: true },
      { label: 'Online shopovi',      href: '#usluge', scroll: true },
      { label: 'Web aplikacije',      href: '#usluge', scroll: true },
      { label: 'Društvene mreže',     href: '#usluge', scroll: true },
      { label: 'Marketing',           href: '#usluge', scroll: true },
      { label: 'Fotografija',         href: '#usluge', scroll: true },
      { label: 'Copywriting',         href: '#usluge', scroll: true },
    ],
  },
  {
    title: 'Radovi',
    links: [
      { label: 'Lounge Bar',          href: '#', external: false },
      { label: 'Premium Photography', href: '#', external: false },
      { label: 'Apartmani Šentić',    href: '#', external: false },
      { label: 'NeoGym',              href: '#', external: false },
      { label: 'Svi radovi →',        href: '#radovi', scroll: true },
    ],
  },
  {
    title: 'Kontakt',
    links: [
      { label: 'webbvizija@gmail.com', href: 'mailto:webbvizija@gmail.com' },
      { label: '+387 63 685 787',      href: 'tel:+38763685787' },
      { label: 'Besplatna konzultacija', href: '#kontakt', scroll: true },
      { label: 'Pošalji upit',          href: '#kontakt', scroll: true },
    ],
  },
]
</script>

<style scoped>
.wv-footer { background: var(--text); padding: 4rem var(--gutter) 2rem; }
.footer-inner { max-width: var(--container); margin: 0 auto; }

.footer-top {
  display: grid; grid-template-columns: 1.8fr 1fr 1fr 1fr;
  gap: 3rem; padding-bottom: 3rem; border-bottom: 1px solid rgba(255,255,255,0.08);
}
.footer-brand p { color: rgba(255,255,255,0.42); font-size: 0.84rem; line-height: 1.7; margin-top: 1rem; max-width: 280px; }
.footer-socials { display: flex; gap: 0.6rem; margin-top: 1.5rem; }
.soc-btn {
  width: 36px; height: 36px; border-radius: 10px; background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center;
  justify-content: center; text-decoration: none;
  color: rgba(255,255,255,0.45); transition: all var(--transition);
}
.soc-btn:hover {
  background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366);
  border-color: transparent; color: white;
}

.footer-col h4 { color: white; font-size: 0.84rem; font-weight: 600; letter-spacing: 0.5px; margin-bottom: 1.2rem; }
.footer-col a { display: block; color: rgba(255,255,255,0.42); text-decoration: none; font-size: 0.83rem; margin-bottom: 0.6rem; transition: color var(--transition); }
.footer-col a:hover { color: rgba(255,255,255,0.82); }

.footer-bottom { padding-top: 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
.footer-bottom p { color: rgba(255,255,255,0.28); font-size: 0.78rem; }
.footer-bottom span { color: var(--brand-accent); }
.footer-legal { display: flex; gap: 1.5rem; }
.footer-legal a { color: rgba(255,255,255,0.28); font-size: 0.78rem; text-decoration: none; transition: color var(--transition); }
.footer-legal a:hover { color: rgba(255,255,255,0.6); }

@media(max-width: 768px) {
  .footer-top { grid-template-columns: 1fr 1fr; }
  .footer-brand { grid-column: span 2; }
}
@media(max-width: 500px) {
  .footer-top { grid-template-columns: 1fr; }
  .footer-brand { grid-column: span 1; }
}
</style>