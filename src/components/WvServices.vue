<template>
  <section class="wv-services" id="usluge">
    <div class="inner">
      <div class="section-header">
        <p class="section-eyebrow">Šta radimo</p>
        <h2 class="section-title">Sve digitalne usluge<br>na <span>jednom mjestu</span></h2>
        <p class="section-sub">
          Umjesto da angažuješ više agencija — sa mnom dobijaš sve: dizajn, razvoj, marketing,
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
            {{ service.icon }}
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

      <!-- Software placeholder -->
      <div class="software-placeholder reveal">
        <p class="sw-emoji">⚙️</p>
        <h4>Manja softverska rješenja</h4>
        <p>Specifična rješenja po mjeri — sistemi za upravljanje, automatizacija procesa, integracije. <strong>Uskoro primjeri projekata.</strong></p>
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
    icon: '🌐', title: 'Web stranice',
    desc: 'Moderne, brze i mobilno prilagođene web stranice koje ostavljaju pravi utisak na posjetitelje i pretvaraju ih u kupce.',
    tags: ['Landing page', 'Poslovni web', 'Blog'],
  },
  {
    icon: '🛒', title: 'Online shopovi',
    desc: 'E-commerce rješenja koja prodaju. Od malog boutique shopa do velikog kataloga — sa sigurnim plaćanjem i upravljanjem narudžbama.',
    tags: ['WooCommerce', 'Shopify', 'Custom'],
  },
  {
    icon: '📱', title: 'Web aplikacije',
    desc: 'Prilagođena rješenja za tvoj biznis — rezervacijski sistemi, portali, dashboardi, konfiguratori i sve što ti treba.',
    tags: ['React', 'Vue', 'Full-stack'],
  },
  {
    icon: '📣', title: 'Vođenje društvenih mreža',
    desc: 'Strategija, kreacija sadržaja, objave i analitika za Instagram, Facebook i LinkedIn. Tvoj brand uvijek aktivan i dosljedan.',
    tags: ['Instagram', 'Facebook', 'LinkedIn'],
  },
  {
    icon: '🎯', title: 'Digitalni marketing',
    desc: 'Google Ads, Meta kampanje, SEO optimizacija — targetirani marketing koji donosi stvarne rezultate i mjerljiv ROI.',
    tags: ['Google Ads', 'Meta Ads', 'SEO'],
  },
  {
    icon: '📸', title: 'Profesionalna fotografija',
    desc: 'Fotografija za web, e-commerce i društvene mreže. Produkt, prostori, portretna fotografija — sve za bolji vizualni identitet.',
    tags: ['Produkt', 'Prostori', 'Portret'],
  },
  {
    icon: '✍️', title: 'Copywriting',
    desc: 'Tekstovi koji prodaju i inspirišu — za web, SEO blogove, opise proizvoda, newslettere i objave na mrežama.',
    tags: ['SEO tekstovi', 'Copywriting', 'Blog'],
  },
  {
    icon: '🤝', title: 'Besplatne konzultacije',
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
  display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
  justify-content: center; font-size: 1.4rem; margin-bottom: 1.3rem;
  transition: transform var(--transition);
}
.service-card:hover .service-icon-wrap { transform: scale(1.1) rotate(-5deg); }
.service-card h3 { font-family: var(--font-display); font-weight: 700; font-size: 1.1rem; color: var(--text); margin-bottom: 0.6rem; }
.service-card p { color: var(--text-muted); font-size: 0.88rem; line-height: 1.65; }

.service-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 1.2rem; }
.stag {
  padding: 0.2rem 0.7rem; background: var(--brand-primary-xlight);
  color: var(--brand-primary); border-radius: 100px; font-size: 0.7rem; font-weight: 600;
}

.software-placeholder {
  margin-top: 2rem; padding: 2rem; text-align: center;
  background: linear-gradient(135deg, var(--brand-primary-xlight), #fff8f5);
  border: 1.5px dashed rgba(15,123,108,0.25); border-radius: var(--radius-lg);
}
.sw-emoji { font-size: 1.8rem; margin-bottom: 0.5rem; }
.software-placeholder h4 { font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; margin-bottom: 0.4rem; }
.software-placeholder p { color: var(--text-muted); font-size: 0.88rem; }
</style>
