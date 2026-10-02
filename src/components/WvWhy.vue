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
          <div class="why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" v-html="item.icon"></svg></div>
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
  { icon: '<path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>', title: 'Sve na jednom mjestu',     desc: 'Web, dizajn, foto, sadržaj — sve pokrivaš sa jednom osobom. Nema prebacivanja između agencija i gubitka vremena.' },
  { icon: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>', title: 'Direktna komunikacija',    desc: 'Radiš izravno sa mnom, stručnjakom koji izrađuje tvoju stranicu — bez posrednika i nepotrebnih koordinatora. Brže, jasnije, efikasnije.' },
  { icon: '<path d="M4 21v-7"/><path d="M4 10V3"/><path d="M12 21v-9"/><path d="M12 8V3"/><path d="M20 21v-5"/><path d="M20 12V3"/><path d="M1 14h6"/><path d="M9 8h6"/><path d="M17 16h6"/>', title: 'Prilagodba i fleksibilnost',desc: 'Svaki projekat je drugačiji. Prilagođavam se tvojim potrebama, budžetu i rokovima — ne obratno.' },
  { icon: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/>', title: 'Besplatne konzultacije',   desc: 'Besplatna uvodna konzultacija bez ikakvih obaveza ili prodajnog pritiska. Dođi na razgovor, dobij savjete, i sam odluči.' },
  { icon: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>', title: 'Brza isporuka',             desc: 'Izrada web stranica obično traje između 7 i 14 dana. Efikasan workflow, bez čekanja na slobodan termin.' },
  { icon: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>', title: 'Regionalno iskustvo',       desc: 'Razumijem tržišta BiH, Hrvatske i Srbije — jezik, kulturu, navike kupaca.' },
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

.why-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(240px, 100%), 1fr)); gap: 1.2rem; }
.why-item {
  background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12);
  border-radius: var(--radius-lg); padding: 1.8rem; transition: all var(--transition);
}
.why-item:hover { background: rgba(255,255,255,0.14); transform: translateY(-3px); }
.why-icon {
  width: 42px; height: 42px; background: rgba(255,255,255,0.12);
  border-radius: 10px; display: flex; align-items: center; justify-content: center;
  color: white; margin-bottom: 1rem;
}
.why-icon svg { width: 20px; height: 20px; }
.why-item h3 { color: white; font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem; }
.why-item p { color: rgba(255,255,255,0.6); font-size: 0.85rem; line-height: 1.6; }
</style>
