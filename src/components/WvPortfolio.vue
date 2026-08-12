<template>
  <section class="wv-portfolio" id="radovi">
    <div class="inner">
      <div class="portfolio-header">
        <div>
          <p class="section-eyebrow">Naši radovi</p>
          <h2 class="section-title">Projekti koji govore<br>sami za <span>sebe</span></h2>
        </div>
        <a href="#kontakt" class="btn-ghost" @click.prevent="scrollTo('#kontakt')">
          Želim ovakvo nešto →
        </a>
      </div>

      <div class="portfolio-grid">
        <div
          v-for="(project, i) in projects"
          :key="i"
          class="portfolio-card reveal"
          :class="{ featured: project.featured, [`d${i % 3}`]: true }"
        >
          <div class="portfolio-thumb">
            <img
              v-if="project.image"
              :src="project.image"
              :alt="`${project.title} — izrada web stranice, ${project.category}`"
              loading="lazy"
              class="portfolio-img"
            />
            <div v-else class="portfolio-thumb-fallback">{{ project.emoji }}</div>
            <div class="portfolio-overlay">
              <a v-if="project.url" :href="project.url" target="_blank" rel="noopener" class="portfolio-overlay-btn">
                ↗ Otvori stranicu
              </a>
              <span v-else class="portfolio-overlay-btn portfolio-overlay-static">Demo na zahtjev</span>
            </div>
          </div>
          <div class="portfolio-info">
            <p class="portfolio-cat">{{ project.category }}</p>
            <h3>{{ project.title }}</h3>
            <p>{{ project.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Extra links -->
      <!-- <div class="extra-links">
        <a v-for="extra in extras" :key="extra.url"
           :href="extra.url" target="_blank" rel="noopener"
           class="btn-ghost extra-btn">
          {{ extra.label }} ↗
        </a>
      </div> -->

    </div>
  </section>
</template>

<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const projects = [
  {
    image: '/img/Silver-Trend.png',
    emoji: '💎',
    category: 'Web shop — Nakit i satovi',
    title: 'Silver-Trend',
    desc: 'Web shop nakita i satova s admin panelom, statistikom prodaje i praćenjem poslovanja i baze.',
    url: 'https://www.silver-trend.com',
    featured: true,
  },
  {
    image: '/img/kartica-vijernosti.png',
    emoji: '💳',
    category: 'Web aplikacija — Program vjernosti',
    title: 'Kartica vjernosti',
    desc: 'Web aplikacija u kojoj se korisnici prijavljuju, preuzimaju digitalnu karticu tvrtke i skupljaju bodove — kompanija može nuditi više različitih programa vjernosti.',
    url: null,
  },
  {
    image: '/img/Primavera.png',
    emoji: '🏡',
    category: 'Web aplikacija — Nekretnine',
    title: 'Primavera',
    desc: 'Web aplikacija agencije za nekretnine — pregledna ponuda prodaje, najma i novogradnje, profili agenata i besplatna procjena vrijednosti nekretnine.',
    url: null,
  },
  {
    image: '/img/lounge-bar.png',
    emoji: '🍹',
    category: 'Bar & Kafić',
    title: 'Lounge Bar',
    desc: 'Web stranica bara koja gostima predstavlja priču lokala, ponudu sadržaja i cjenik pića.',
    url: 'https://lounges.netlify.app/',
  },
  {
    image: '/img/premium.png',
    emoji: '📸',
    category: 'Fotografija',
    title: 'Premium Photography',
    desc: 'Web stranica na kojoj fotograf predstavlja svoje radove, uz mogućnost izravnog kontakta.',
    url: 'https://premiumphotography.netlify.app/',
  },
  {
    image: '/img/sentic.png',
    emoji: '🏠',
    category: 'Smještaj — Neum',
    title: 'Apartmani Sentić',
    desc: 'Web stranica smještaja u Neumu s detaljnim informacijama o kompleksu i svakom apartmanu posebno.',
    url: 'https://www.apartmani-sentic.com/',
  },
  {
    image: '/img/branch.png',
    emoji: '☕',
    category: 'Kafić',
    title: 'Branch Café',
    desc: 'Web stranica kafića s mogućnošću rezervacije stolova putem web aplikacije.',
    url: 'https://branch-cafe.netlify.app/',
  },
  {
    image: '/img/Plusecollection.png',
    emoji: '🏋️',
    category: 'Web stranica — Teretana',
    title: 'PulseCollection',
    desc: 'Web stranica teretane s pregledom rasporeda treninga te predstavljanjem prostora i trenera kluba.',
    url: null,
  },
  {
    image: '/img/tvornica.png',
    emoji: '🎭',
    category: 'Zabava & Events',
    title: 'Tvornica Zabave',
    desc: 'Vesela web stranica igraonice — predstavlja ponudu, cjenik proslava i omogućuje rezervaciju termina.',
    url: 'https://tvornica-zabave.netlify.app/',
  },
  {
    image: '/img/flash.png',
    emoji: '📷',
    category: 'Foto studio',
    title: 'Flesh Studio',
    desc: 'Web stranica hrvatskog fotografa za predstavljanje njegovih radova.',
    url: 'https://flesh-studio.netlify.app/',
  },
  {
    image: '/img/dom.png',
    emoji: '🌿',
    category: 'Usluge čišćenja',
    title: 'Blistav Dom',
    desc: 'Web stranica usluge čišćenja doma i ureda, s mogućnošću zatražiti ponudu izravno preko stranice.',
    url: 'https://blistav.netlify.app/',
  },
]

const extras = [
  { label: '🎵 Harmonija salon', url: 'https://harmonija.netlify.app/' },
  { label: '🍹 Corner Bar',                url: 'https://corner-bar.netlify.app/' },
  { label: '🎶 Musical',                   url: 'https://musical-dieffenbachia-03d62f.netlify.app/' },
  { label: '✨ Vibe',                       url: 'https://vibe12.netlify.app/' },
  { label: '🍺 Premium Bar',               url: 'https://premiumbarr.netlify.app/' },
  { label: '💅 Nail Studio',               url: 'https://nailstudio1.netlify.app/' },
  { label: '🌾 Zlatna Kora — Pekara',      url: 'https://zlatnakora.netlify.app/' },
]
</script>

<style scoped>
.wv-portfolio { padding: var(--section-pad) var(--gutter); background: var(--bg-warm); }
.inner { max-width: var(--container); margin: 0 auto; }

.portfolio-header {
  display: flex; justify-content: space-between; align-items: flex-end;
  margin-bottom: 2.5rem; flex-wrap: wrap; gap: 1rem;
}
.section-eyebrow {
  display: inline-flex; align-items: center; gap: 0.5rem;
  font-size: 0.72rem; font-weight: 600; letter-spacing: 2px;
  text-transform: uppercase; color: var(--brand-primary); margin-bottom: 0.8rem;
}
.section-eyebrow::before { content: ''; width: 20px; height: 2px; background: var(--brand-primary); border-radius: 2px; }
h2.section-title {
  font-family: var(--font-display); font-size: clamp(1.8rem, 3vw, 2.8rem);
  font-weight: 700; letter-spacing: -1px; line-height: 1.15; color: var(--text);
}
h2.section-title span { color: var(--brand-primary); font-style: italic; }

.btn-ghost {
  padding: 0.8rem 1.6rem; background: transparent; color: var(--text-secondary);
  border: 1.5px solid var(--border); border-radius: 100px;
  font-family: var(--font-body); font-size: 0.9rem; font-weight: 500;
  cursor: pointer; transition: all var(--transition); text-decoration: none;
  display: inline-flex; align-items: center; gap: 0.4rem;
}
.btn-ghost:hover { border-color: var(--brand-primary); color: var(--brand-primary); background: var(--brand-primary-xlight); }

.portfolio-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.2rem; }
.portfolio-card {
  background: white; border-radius: var(--radius-lg); overflow: hidden;
  box-shadow: var(--shadow-card); transition: all var(--transition); position: relative;
}
.portfolio-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }
.portfolio-card.featured { grid-column: span 2; }

.portfolio-thumb {
  aspect-ratio: 16/9;
  position: relative; overflow: hidden;
  background: var(--surface2);
}
.portfolio-img {
  width: 100%; height: 100%;
  object-fit: cover; object-position: top; display: block;
  transition: transform 0.45s ease;
}
.portfolio-card:hover .portfolio-img { transform: scale(1.04); }

.portfolio-thumb-fallback {
  width: 100%; height: 100%;
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 2.2rem;
  background: linear-gradient(135deg, var(--bg-warm) 0%, white 100%);
}

.portfolio-overlay {
  position: absolute; inset: 0; background: rgba(15,123,108,0.88);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; transition: opacity var(--transition);
}
.portfolio-card:hover .portfolio-overlay { opacity: 1; }
.portfolio-overlay-btn {
  padding: 0.7rem 1.5rem; background: white; color: var(--brand-primary);
  border-radius: 100px; font-weight: 600; font-size: 0.85rem;
  text-decoration: none; display: flex; align-items: center; gap: 0.4rem;
  transform: translateY(10px); transition: transform var(--transition);
}
.portfolio-overlay-static { cursor: default; }
.portfolio-card:hover .portfolio-overlay-btn { transform: translateY(0); }

.portfolio-info { padding: 1.2rem 1.4rem; }
.portfolio-cat { display: inline-block; font-size: 0.68rem; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase; color: var(--brand-accent); margin-bottom: 0.3rem; }
.portfolio-info h3 { font-weight: 600; font-size: 0.95rem; color: var(--text); margin-bottom: 0.2rem; }
.portfolio-info p { font-size: 0.8rem; color: var(--text-muted); }

.extra-links { margin-top: 1.5rem; display: flex; gap: 0.7rem; flex-wrap: wrap; }
.extra-btn { font-size: 0.82rem; padding: 0.55rem 1.1rem; }


@media(max-width: 900px) {
  .portfolio-grid { grid-template-columns: 1fr; }
  .portfolio-card.featured { grid-column: span 1; }
}
</style>