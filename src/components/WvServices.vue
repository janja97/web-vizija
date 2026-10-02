<template>
  <section class="wv-services" id="usluge">
    <div class="inner">
      <div class="section-header">
        <p class="section-eyebrow">Šta radimo</p>
        <h2 class="section-title">Sve digitalne usluge<br>na <span>jednom mjestu</span></h2>
        <p class="section-sub">
          Umjesto da angažuješ više agencija — sa mnom dobijaš sve: dizajn, razvoj,
          fotografiju i sadržaj. Prilagođeno tebi, tvojim rokovima i budžetu.
        </p>
      </div>

      <div class="services-grid">
        <div
          v-for="(service, i) in services"
          :key="i"
          class="service-card reveal"
          :class="`d${i % 3}`"
          :style="service.featured ? 'background:linear-gradient(135deg,var(--brand-primary-xlight),white)' : ''"
        >
          <div class="service-icon-wrap" :style="service.featured ? 'background:white' : ''">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" v-html="service.icon"></svg>
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.desc }}</p>
          <div class="service-tags">
            <span v-for="tag in service.tags" :key="tag" class="stag"
                  :style="service.featured ? 'background:white' : ''">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useReveal } from '../composables/useReveal'

useReveal()

const services = [
  {
    icon: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>', title: 'Web stranice',
    desc: 'Moderne, brze i mobilno prilagođene web stranice koje ostavljaju pravi utisak na posjetitelje i pretvaraju ih u kupce.',
    tags: ['Landing page', 'Poslovni web', 'Blog'],
  },
  {
    icon: '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>', title: 'Web aplikacije i SaaS',
    desc: 'Izrada web aplikacija i sistema po mjeri za tvoj biznis — rezervacijski sistemi, korisnički portali, dashboardi, konfiguratori i prilagođena funkcionalnost koju standardna stranica ne može ponuditi.',
    tags: ['React', 'Vue', 'SaaS'],
  },
  {
    icon: '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>', title: 'Web shopovi',
    desc: 'E-commerce rješenja koja prodaju. Od malog boutique shopa do velikog kataloga — sa sigurnim plaćanjem, admin panelom i upravljanjem narudžbama.',
    tags: ['WooCommerce', 'Shopify', 'Custom'],
  },
  {
    icon: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>', title: 'Profesionalna fotografija',
    desc: 'Fotografija za web i e-commerce. Produkt, prostori fotografija — sve za bolji vizualni identitet.',
    tags: ['Produkt', 'Prostori'],
  },
  {
    icon: '<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>', title: 'Copywriting',
    desc: 'Tekstovi koji prodaju i inspirišu — za web, SEO blogove, opise proizvoda i newslettere.',
    tags: ['SEO tekstovi', 'Copywriting', 'Blog'],
  },
  {
    icon: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/>', title: 'Besplatne konzultacije',
    desc: 'Nisi siguran odakle početi? Zakaži besplatan razgovor — bez obaveza, bez prodajnog pritiska. Samo korisni savjeti.',
    tags: ['Online', 'In-person', 'Besplatno'],
    featured: true,
  },
]
</script>

<style scoped>
.wv-services { padding: var(--section-pad) var(--gutter); background: var(--surface); }
.inner { max-width: var(--container); margin: 0 auto; }

.services-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: 1.5rem;
}
.service-card {
  background: var(--bg); border: 1px solid var(--border-light);
  border-radius: var(--radius-lg); padding: 2rem;
  transition: all var(--transition); position: relative; overflow: hidden;
}
.service-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, var(--brand-primary), var(--brand-accent));
  transform: scaleX(0); transform-origin: left; transition: transform 0.4s ease;
}
.service-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); border-color: transparent; }
.service-card:hover::before { transform: scaleX(1); }

.service-icon-wrap {
  width: 52px; height: 52px; background: var(--brand-primary-xlight);
  border-radius: var(--radius-md); display: flex; align-items: center;
  justify-content: center; color: var(--brand-primary); margin-bottom: 1.3rem;
  transition: transform var(--transition);
}
.service-icon-wrap svg { width: 24px; height: 24px; }
.service-card:hover .service-icon-wrap { transform: scale(1.08); }
.service-card h3 { font-family: var(--font-display); font-weight: 700; font-size: 1.1rem; color: var(--text); margin-bottom: 0.6rem; }
.service-card p { color: var(--text-muted); font-size: 0.88rem; line-height: 1.65; }

.service-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 1.2rem; }
.stag {
  padding: 0.2rem 0.7rem; background: var(--brand-primary-xlight);
  color: var(--brand-primary); border-radius: 100px; font-size: 0.7rem; font-weight: 600;
}

</style>
