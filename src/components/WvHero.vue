<template>
  <section class="wv-hero">
    <div class="hero-bg-blob blob1"></div>
    <div class="hero-bg-blob blob2"></div>
    <div class="hero-dots"></div>

    <div class="hero-inner">
      <!-- ── Text side ── -->
      <div class="hero-text">
        <div class="hero-eyebrow">
          <span class="eyebrow-dot"></span>
          BiH · HR · SRB — Regionalni digitalni partner
        </div>

        <h1 class="hero-title">
          Tvoj biznis<br>zaslužuje <em>pravo</em><br>digitalno lice.
        </h1>

        <p class="hero-desc">
          Web stranice, aplikacije, online shopovi, marketing, fotografija, pisanje sadržaja —
          sve na jednom mjestu. Jedan partner, jedno rješenje, nula komplikacija.
        </p>

        <div class="hero-actions">
          <a href="#kontakt" class="btn-primary" @click.prevent="scrollTo('#kontakt')">
            Zakaži besplatne konzultacije <span class="arrow">→</span>
          </a>
          <a href="#radovi" class="btn-ghost" @click.prevent="scrollTo('#radovi')">
            Pogledaj radove
          </a>
        </div>

        <div class="hero-trust">
          <div v-for="(stat, i) in stats" :key="i" class="trust-item">
            <div class="trust-num">{{ stat.num }}<span>{{ stat.suffix }}</span></div>
            <div class="trust-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <!-- ── Visual side ── -->
      <div class="hero-visual">
        <div class="browser-mockup">
          <div class="browser-bar">
            <div class="browser-dots">
              <span></span><span></span><span></span>
            </div>
            <div class="browser-url">🔒 webvizija.ba</div>
          </div>
          <div class="browser-screen">
            <div class="m-nav">
              <div class="m-logo"></div>
              <div class="m-links"><span></span><span></span><span></span></div>
            </div>
            <div class="m-hero">
              <div class="m-h1"></div>
              <div class="m-h1b"></div>
              <div class="m-p"></div>
              <div class="m-p2"></div>
              <div class="m-btn"></div>
            </div>
            <div class="m-cards">
              <div v-for="n in 3" :key="n" class="m-card">
                <div class="mc-icon"></div>
                <div class="mc-l1"></div>
                <div class="mc-l2"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Floating badges -->
        <div class="hero-float float1">
          <span class="float-icon">✅</span>
          <div>
            <strong>Projekat završen</strong>
            <span class="float-sub">Isporuka za 14 dana</span>
          </div>
        </div>
        <div class="hero-float float2">
          <span class="float-icon">☕</span>
          <div>
            <strong>Besplatne konzultacije</strong>
            <span class="float-sub">Bez obaveza</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { num: '50', suffix: '+', label: 'Završenih projekata' },
  { num: '3',  suffix: '+', label: 'Države' },
  { num: '100',suffix: '%', label: 'Zadovoljnih klijenata' },
]

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>
.wv-hero {
  min-height: 100vh; padding-top: 70px;
  display: flex; align-items: center;
  position: relative; overflow: hidden; background: var(--bg);
}
.hero-bg-blob { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(80px); }
.blob1 { width: 600px; height: 600px; background: radial-gradient(circle, rgba(15,123,108,0.12), transparent 70%); top: -100px; right: -100px; }
.blob2 { width: 400px; height: 400px; background: radial-gradient(circle, rgba(244,132,95,0.1), transparent 70%); bottom: 0; left: 10%; }
.hero-dots {
  position: absolute; inset: 0;
  background-image: radial-gradient(circle, rgba(15,123,108,0.07) 1px, transparent 1px);
  background-size: 40px 40px; pointer-events: none;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
}
.hero-inner {
  max-width: var(--container); margin: 0 auto;
  padding: var(--section-pad) var(--gutter);
  display: grid; grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem; align-items: center; width: 100%;
}

/* Eyebrow */
.hero-eyebrow {
  display: inline-flex; align-items: center; gap: 0.6rem;
  background: var(--brand-primary-xlight); border: 1px solid rgba(15,123,108,0.2);
  padding: 0.4rem 1rem; border-radius: 100px;
  font-size: 0.78rem; font-weight: 600; color: var(--brand-primary);
  margin-bottom: 1.5rem;
  animation: fadeUp 0.8s ease both;
}
.eyebrow-dot { width: 6px; height: 6px; background: var(--brand-accent); border-radius: 50%; }

/* Title */
h1.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.6rem, 5vw, 4.2rem);
  font-weight: 800; line-height: 1.1;
  letter-spacing: -2px; color: var(--text);
  margin-bottom: 1.5rem;
  animation: fadeUp 0.8s 0.1s ease both;
}
h1.hero-title em {
  font-style: italic; color: var(--brand-primary);
  position: relative; display: inline-block;
}
h1.hero-title em::after {
  content: ''; position: absolute; bottom: 2px; left: 0; right: 0;
  height: 3px; background: var(--brand-accent); border-radius: 2px;
  transform: scaleX(0);
  animation: underlineIn 0.6s 0.9s ease forwards;
}
@keyframes underlineIn { to { transform: scaleX(1); } }

.hero-desc {
  font-size: 1.05rem; color: var(--text-secondary);
  line-height: 1.75; max-width: 500px; margin-bottom: 2.5rem;
  animation: fadeUp 0.8s 0.2s ease both;
}

.hero-actions {
  display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 3rem;
  animation: fadeUp 0.8s 0.3s ease both;
}

/* Buttons */
.btn-primary {
  padding: 0.9rem 1.8rem; background: var(--brand-primary); color: white;
  border: none; border-radius: 100px; font-family: var(--font-body);
  font-size: 0.95rem; font-weight: 600; cursor: pointer;
  transition: all var(--transition); text-decoration: none;
  display: inline-flex; align-items: center; gap: 0.5rem;
}
.btn-primary:hover { background: var(--brand-primary-light); transform: translateY(-2px); box-shadow: var(--shadow-lg); }
.btn-primary .arrow { transition: transform var(--transition); }
.btn-primary:hover .arrow { transform: translateX(4px); }

.btn-ghost {
  padding: 0.9rem 1.8rem; background: transparent; color: var(--text-secondary);
  border: 1.5px solid var(--border); border-radius: 100px;
  font-family: var(--font-body); font-size: 0.95rem; font-weight: 500;
  cursor: pointer; transition: all var(--transition); text-decoration: none;
  display: inline-flex; align-items: center; gap: 0.5rem;
}
.btn-ghost:hover { border-color: var(--brand-primary); color: var(--brand-primary); background: var(--brand-primary-xlight); }

/* Trust bar */
.hero-trust {
  display: flex; align-items: center; gap: 2.5rem; flex-wrap: wrap;
  animation: fadeUp 0.8s 0.4s ease both;
}
.trust-item { display: flex; flex-direction: column; }
.trust-num { font-family: var(--font-display); font-size: 1.6rem; font-weight: 700; color: var(--text); letter-spacing: -0.5px; }
.trust-num span { color: var(--brand-primary); }
.trust-label { font-size: 0.72rem; color: var(--text-muted); font-weight: 500; margin-top: 1px; }

/* Browser mockup */
.hero-visual { position: relative; animation: fadeUp 0.9s 0.3s ease both; }
.browser-mockup {
  background: white; border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg), 0 0 0 1px var(--border);
  overflow: hidden; position: relative; z-index: 2;
}
.browser-bar {
  background: var(--surface2); padding: 0.8rem 1rem;
  display: flex; align-items: center; gap: 0.8rem;
  border-bottom: 1px solid var(--border);
}
.browser-dots { display: flex; gap: 5px; }
.browser-dots span { width: 10px; height: 10px; border-radius: 50%; }
.browser-dots span:nth-child(1) { background: #ff5f57; }
.browser-dots span:nth-child(2) { background: #febc2e; }
.browser-dots span:nth-child(3) { background: #28c840; }
.browser-url {
  flex: 1; background: white; border-radius: 6px;
  padding: 0.3rem 0.8rem; font-size: 0.72rem; color: var(--text-muted);
  display: flex; align-items: center; gap: 0.3rem;
}
.browser-screen {
  padding: 1.5rem; min-height: 240px;
  background: linear-gradient(160deg, #edfaf7 0%, #fff8f5 100%);
  display: flex; flex-direction: column; gap: 0.8rem;
}
.m-nav { display: flex; justify-content: space-between; align-items: center; }
.m-logo { width: 55px; height: 9px; background: var(--brand-primary); border-radius: 4px; opacity: 0.7; }
.m-links { display: flex; gap: 6px; }
.m-links span { width: 28px; height: 7px; background: var(--border); border-radius: 3px; }
.m-hero { display: flex; flex-direction: column; gap: 7px; margin-top: 0.4rem; }
.m-h1 { width: 75%; height: 12px; background: var(--text); border-radius: 3px; opacity: 0.8; }
.m-h1b { width: 55%; height: 12px; background: var(--text); border-radius: 3px; opacity: 0.45; }
.m-p { width: 88%; height: 7px; background: var(--border); border-radius: 3px; }
.m-p2 { width: 70%; height: 7px; background: var(--border); border-radius: 3px; }
.m-btn { width: 90px; height: 28px; background: var(--brand-primary); border-radius: 100px; margin-top: 4px; }
.m-cards { display: grid; grid-template-columns: repeat(3,1fr); gap: 6px; margin-top: 4px; }
.m-card { background: white; border-radius: 7px; padding: 0.6rem; display: flex; flex-direction: column; gap: 5px; box-shadow: 0 2px 6px rgba(0,0,0,0.06); }
.mc-icon { width: 22px; height: 22px; border-radius: 5px; background: var(--brand-primary-xlight); }
.mc-l1 { height: 6px; background: var(--text); border-radius: 3px; opacity: 0.55; }
.mc-l2 { height: 5px; width: 70%; background: var(--border); border-radius: 3px; }

/* Floating badges */
.hero-float {
  z-index: 99;
  position: absolute; background: white; border-radius: var(--radius-md);
  padding: 0.7rem 1rem; box-shadow: var(--shadow-md);
  display: flex; align-items: center; gap: 0.6rem;
  font-size: 0.78rem; font-weight: 600; color: var(--text);
  white-space: nowrap; border: 1px solid var(--border-light);
  font-family: var(--font-body);
}
.float1 { bottom: -18px; left: -18px; animation: float1 4s ease-in-out infinite; }
.float2 { top: 30px; right: -24px; animation: float2 5s ease-in-out infinite; }
.float-icon { font-size: 1.1rem; }
.float-sub { font-size: 0.65rem; color: var(--text-muted); font-weight: 400; display: block; }

@keyframes float1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
@keyframes float2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(8px)} }
@keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }

@media(max-width: 900px) {
  .hero-inner { grid-template-columns: 1fr; }
  .hero-visual { display: none; }
  h1.hero-title { letter-spacing: -1px; }
}
</style>
