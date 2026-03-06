<!-- ══════════════════════════════════════════════════
     WvReviews.vue
══════════════════════════════════════════════════ -->
<template>
  <section class="wv-reviews" id="recenzije">
    <div class="inner">
      <div class="section-header">
        <p class="section-eyebrow">Recenzije</p>
        <h2 class="section-title">Šta kažu<br><span>klijenti</span></h2>
        <p class="section-sub">Svaki projekat počinje razgovorom, a završava zadovoljnim klijentom.</p>
      </div>
      <div class="reviews-grid">
        <div v-for="(r, i) in reviews" :key="i" class="review-card reveal" :class="`d${i % 3}`">
          <div class="review-stars">★★★★★</div>
          <div class="review-quote">"</div>
          <p class="review-text">{{ r.text }}</p>
          <div class="review-author">
            <div class="author-av">{{ r.initials }}</div>
            <div>
              <div class="author-name">{{ r.name }}</div>
              <div class="author-biz">{{ r.biz }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()

const reviews = [
  { initials: 'AH', name: 'Amina H.',   biz: 'Nail Studio, Mostar',    text: 'Odlična saradnja od prvog kontakta. Stranica je gotova brže nego što sam očekivala, dizajn je tačno ono što sam zamišljala.' },
  { initials: 'MB', name: 'Marko B.',   biz: 'Apartmani, Split',       text: 'Konačno neko ko sluša šta trebaš! Dobili smo kompletan web i Instagram. Rezervacije su nam porasle 40% u prvom mjesecu.' },
  { initials: 'DK', name: 'Dario K.',   biz: 'Online shop, Zagreb',    text: 'Profesionalno, brzo i po razumnoj cijeni. Imao sam ideju, a Web Vizija ju je pretvorila u stvarnost.' },
  { initials: 'LM', name: 'Lejla M.',   biz: 'Beauty Studio, Sarajevo',text: 'Tražila sam nekoga ko razumije moj stil. Dobila sam web stranicu i foto materijal koji savršeno predstavljaju moj studio.' },
  { initials: 'IN', name: 'Ivan N.',    biz: 'Kafić, Banja Luka',      text: 'Besplatna konzultacija me je uvjerila. Jasno je objašnjeno sve što nam treba, bez tehničkog žargona.' },
  { initials: 'SJ', name: 'Sara J.',    biz: 'Restoran, Mostar',       text: 'Radimo zajedno već godinu dana — web, društvene mreže, foto. Pravi partner za digitalni razvoj biznisa.' },
]
</script>

<style scoped>
.wv-reviews { padding: var(--section-pad) var(--gutter); background: var(--surface); }
.inner { max-width: var(--container); margin: 0 auto; }
.section-header { margin-bottom: 3rem; }
.section-eyebrow { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.72rem; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: var(--brand-primary); margin-bottom: 0.8rem; }
.section-eyebrow::before { content: ''; width: 20px; height: 2px; background: var(--brand-primary); border-radius: 2px; }
h2.section-title { font-family: var(--font-display); font-size: clamp(1.8rem, 3vw, 2.8rem); font-weight: 700; letter-spacing: -1px; line-height: 1.15; color: var(--text); }
h2.section-title span { color: var(--brand-primary); font-style: italic; }
.section-sub { color: var(--text-muted); font-size: 1rem; line-height: 1.7; max-width: 520px; margin-top: 0.8rem; }

.reviews-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 1.2rem; }
.review-card { background: var(--bg); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 1.8rem; transition: all var(--transition); }
.review-card:hover { box-shadow: var(--shadow-md); border-color: transparent; transform: translateY(-3px); }
.review-stars { color: #f59e0b; font-size: 0.85rem; margin-bottom: 0.8rem; }
.review-quote { font-family: var(--font-display); font-size: 3rem; line-height: 0.8; color: var(--brand-primary); opacity: 0.25; margin-bottom: 0.5rem; }
.review-text { color: var(--text-secondary); font-size: 0.9rem; line-height: 1.75; font-style: italic; }
.review-author { margin-top: 1.5rem; display: flex; align-items: center; gap: 0.9rem; padding-top: 1.2rem; border-top: 1px solid var(--border); }
.author-av { width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, var(--brand-primary), #0f7b6c); display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-weight: 700; font-size: 0.88rem; color: white; flex-shrink: 0; }
.author-name { font-weight: 600; font-size: 0.88rem; color: var(--text); }
.author-biz { font-size: 0.75rem; color: var(--text-muted); }
</style>
