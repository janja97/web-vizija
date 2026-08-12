<template>
  <section class="wv-pricing" id="zatrazi-ponudu">
    <div class="inner">
      <div class="section-header center">
        <p class="section-eyebrow center">💶 Cjenik</p>
        <h2 class="section-title">Koliko košta<br><span>tvoj projekt</span></h2>
        <p class="section-sub center">
          Transparentne, okvirne cijene — konačna ponuda zavisi od opsega i tvojih potreba.
        </p>
      </div>

      <div class="pricing-grid">
        <div v-for="p in pricingPlans" :key="p.title" class="pricing-card" :class="{ featured: p.featured }">
          <span v-if="p.featured" class="pricing-badge">Najtraženije</span>
          <span class="pricing-icon">{{ p.icon }}</span>
          <h3 class="pricing-title">{{ p.title }}</h3>
          <div class="pricing-value">{{ p.price }}</div>
          <p class="pricing-note">{{ p.note }}</p>

          <ul v-if="p.breakdown" class="pricing-breakdown">
            <li v-for="b in p.breakdown" :key="b.label">
              <span class="bd-label">{{ b.label }}</span>
              <span class="bd-value">{{ b.value }}</span>
            </li>
          </ul>

          <ul v-if="p.features" class="pricing-features">
            <li v-for="f in p.features" :key="f">✓ {{ f }}</li>
          </ul>

          <p v-if="p.scopeNote" class="pricing-scope-note">{{ p.scopeNote }}</p>

          <a href="#kontakt" class="pricing-cta">Zatraži ponudu</a>
        </div>
      </div>

      <p class="pricing-disclaimer">
        Cijene ne uključuju hosting, domenu i mjesečno održavanje — to dogovaramo posebno,
        prema potrebama tvog projekta.
      </p>
    </div>
  </section>
</template>

<script setup>
const pricingPlans = [
  {
    icon: '🌐', title: 'Web stranica', price: '250 – 1.000 €', note: 'Isporuka za 7–14 dana',
    breakdown: [
      { label: 'Landing page / jednostavna prezentacija', value: 'od 250 €' },
      { label: 'Poslovni web (do 5 stranica)', value: 'od 600 €' },
      { label: 'Napredna prezentacija, redizajn, SEO', value: 'do 1.000 €' },
    ],
  },
  {
    icon: '🛒', title: 'Web shop', price: 'Od 1.500 €', note: 'Narudžbe, admin panel + statistika prodaje',
    features: ['Upravljanje narudžbama', 'Admin panel', 'Statistika prodaje'],
    scopeNote: 'Konačna cijena zavisi o broju proizvoda i integracijama (plaćanje, dostava...) — pogledaj Silver-Trend u radovima.',
    featured: true,
  },
  {
    icon: '📱', title: 'Web aplikacije i SaaS', price: 'Od 1.500 €', note: 'Sistem po mjeri',
    features: ['Razvoj po mjeri', 'Korisnički računi', 'Skalabilna arhitektura'],
    scopeNote: 'Svaki sistem je drugačiji — detalje i tačnu cijenu dogovaramo na besplatnom razgovoru.',
  },
]
</script>

<style scoped>
.wv-pricing { padding: var(--section-pad) var(--gutter); background: var(--bg-warm); }
.inner { max-width: var(--container); margin: 0 auto; }

.section-header.center { text-align: center; max-width: 640px; margin: 0 auto 3rem; }
.section-eyebrow.center { justify-content: center; }
.section-sub.center { margin-left: auto; margin-right: auto; }

.pricing-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: 1.5rem; max-width: 980px; margin: 0 auto;
}
.pricing-card {
  position: relative; display: flex; flex-direction: column; align-items: center;
  text-align: center; gap: 0.5rem; padding: 2.5rem 2rem;
  background: var(--surface); border: 1.5px solid var(--border-light);
  border-radius: var(--radius-lg); box-shadow: var(--shadow-sm);
  transition: all var(--transition);
}
.pricing-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.pricing-card.featured {
  border-color: var(--brand-primary);
  background: linear-gradient(135deg, var(--brand-primary-xlight), var(--surface));
  box-shadow: var(--shadow-md);
}
.pricing-badge {
  position: absolute; top: -13px; left: 50%; transform: translateX(-50%);
  background: var(--brand-primary); color: white; font-size: 0.7rem; font-weight: 700;
  padding: 0.3rem 0.9rem; border-radius: 100px; letter-spacing: 0.3px;
}
.pricing-icon { font-size: 2rem; margin-bottom: 0.3rem; }
.pricing-title { font-family: var(--font-display); font-size: 1.2rem; font-weight: 700; color: var(--text); }
.pricing-value { font-family: var(--font-display); font-size: 2.1rem; font-weight: 800; color: var(--brand-primary); }
.pricing-note { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem; }
.pricing-features { list-style: none; padding: 0; margin: 0 0 1.5rem; display: flex; flex-direction: column; gap: 0.5rem; }
.pricing-features li { font-size: 0.85rem; color: var(--text-secondary); }

.pricing-breakdown {
  list-style: none; padding: 0; margin: 0.3rem 0 1.5rem; width: 100%;
  display: flex; flex-direction: column; gap: 0.5rem;
}
.pricing-breakdown li {
  display: flex; justify-content: space-between; gap: 0.8rem;
  padding-bottom: 0.5rem; border-bottom: 1px dashed var(--border-light);
  font-size: 0.82rem; text-align: left;
}
.bd-label { color: var(--text-secondary); }
.bd-value { color: var(--brand-primary); font-weight: 700; white-space: nowrap; }

.pricing-scope-note {
  font-size: 0.76rem; color: var(--text-muted); line-height: 1.5;
  margin: -0.6rem 0 1.3rem;
}

.pricing-disclaimer {
  text-align: center; font-size: 0.78rem; color: var(--text-muted);
  max-width: 560px; margin: 2rem auto 0;
}

.pricing-cta {
  margin-top: auto; padding: 0.8rem 1.8rem; background: var(--brand-primary); color: white;
  border-radius: 100px; font-family: var(--font-body); font-size: 0.9rem; font-weight: 600;
  text-decoration: none; transition: all var(--transition);
}
.pricing-cta:hover { background: var(--brand-primary-light); transform: translateY(-2px); box-shadow: var(--shadow-md); }
</style>
