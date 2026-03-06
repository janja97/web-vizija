<template>
  <section class="wv-why" id="zasto-mi">
    <div class="why-bg"></div>
    <div class="inner">
      <div class="why-header">
        <p class="section-eyebrow">Zašto baš mi?</p>
        <h2 class="section-title">Pristup koji pravi<br>razliku</h2>
        <p class="why-sub">
          Nisam agencija s dugim emailovima i sporim odgovorima. Ja sam tvoj direktni
          digitalni partner — brz, pouzdan i uvijek dostupan.
        </p>
      </div>

      <div class="why-grid">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="why-item reveal"
          :class="`d${i % 4}`"
        >
          <div class="why-icon">{{ item.icon }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()

const items = [
  { icon: '🎯', title: 'Sve na jednom mjestu',     desc: 'Web, marketing, foto, sadržaj — sve pokrivaš sa jednom osobom. Nema prebacivanja između agencija i gubitka vremena.' },
  { icon: '💬', title: 'Direktna komunikacija',    desc: 'Pričaš direktno sa mnom — ne s koordinatorom. Brže, jasnije, efikasnije.' },
  { icon: '🔧', title: 'Prilagodba i fleksibilnost',desc: 'Svaki projekat je drugačiji. Prilagođavam se tvojim potrebama, budžetu i rokovima — ne obratno.' },
  { icon: '☕', title: 'Besplatne konzultacije',   desc: 'Nisi obavezan ništa kupiti. Dođi na razgovor, dobij savjete, i sam odluči. Bez pritiska.' },
  { icon: '🚀', title: 'Brza isporuka',             desc: 'Efikasan workflow znači da tvoja web stranica bude live za 7–14 dana. Bez čekanja na slobodan termin.' },
  { icon: '📍', title: 'Regionalno iskustvo',       desc: 'Razumijem tržišta BiH, Hrvatske i Srbije — jezik, kulturu, navike kupaca.' },
]
</script>

<style scoped>
.wv-why {
  padding: var(--section-pad) var(--gutter);
  background: var(--brand-primary); position: relative; overflow: hidden;
}
.why-bg {
  position: absolute; inset: 0;
  background-image: radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 30px 30px; pointer-events: none;
}
.inner { max-width: var(--container); margin: 0 auto; }
.why-header { margin-bottom: 3rem; }

.section-eyebrow {
  display: inline-flex; align-items: center; gap: 0.5rem;
  font-size: 0.72rem; font-weight: 600; letter-spacing: 2px;
  text-transform: uppercase; color: rgba(255,255,255,0.6); margin-bottom: 0.8rem;
}
.section-eyebrow::before { content: ''; width: 20px; height: 2px; background: rgba(255,255,255,0.4); border-radius: 2px; }

h2.section-title {
  font-family: var(--font-display); font-size: clamp(1.8rem, 3vw, 2.8rem);
  font-weight: 700; letter-spacing: -1px; line-height: 1.15; color: white;
}
.why-sub { color: rgba(255,255,255,0.6); font-size: 1rem; line-height: 1.7; max-width: 520px; margin-top: 0.8rem; }

.why-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.2rem; }
.why-item {
  background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12);
  border-radius: var(--radius-lg); padding: 1.8rem; transition: all var(--transition);
}
.why-item:hover { background: rgba(255,255,255,0.14); transform: translateY(-3px); }
.why-icon {
  width: 42px; height: 42px; background: rgba(255,255,255,0.12);
  border-radius: 10px; display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem; margin-bottom: 1rem;
}
.why-item h3 { color: white; font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem; }
.why-item p { color: rgba(255,255,255,0.6); font-size: 0.85rem; line-height: 1.6; }
</style>
