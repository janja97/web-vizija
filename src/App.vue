<template>
  <div id="app">
    <WvNav />
    <main>
      <WvHero />
      <WvServices />
      <WvWhy />
      <WvPortfolio />
      <WvReviews />
      <WvCta />
    </main>
    <WvFooter />
  </div>
</template> 

<script setup>
import WvNav       from './components/WvNav.vue'
import WvHero      from './components/WvHero.vue'
import WvServices  from './components/WvServices.vue'
import WvWhy       from './components/WvWhy.vue'
import WvPortfolio from './components/WvPortfolio.vue'
import WvReviews   from './components/WvReviews.vue'
import WvCta       from './components/WvCta.vue'
import WvFooter    from './components/WvFooter.vue'
</script>

<style>
/* ═══════════════════════════════════════
   GLOBAL STYLES — Design Tokens
   (import in main.js or keep here)
   ═══════════════════════════════════════ */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

:root {
  /* Brand — Deep Navy → Teal gradient identity */
  --brand-primary: #0f7b6c;         /* Rich teal */
  --brand-primary-light: #12967f;
  --brand-primary-xlight: #e6f7f4;
  --brand-accent: #f4845f;          /* Warm coral */
  --brand-accent-light: #fff0eb;
  --brand-navy: #1e3a5f;            /* Deep navy (logo gradient start) */

  /* Neutrals — warm */
  --bg: #fafaf8;
  --bg-warm: #f5f3ef;
  --surface: #ffffff;
  --surface2: #f0ede8;
  --border: #e2ddd6;
  --border-light: #ede9e3;

  /* Text */
  --text: #1c1c1a;
  --text-secondary: #4a4a46;
  --text-muted: #8a8880;
  --text-light: #b5b2ac;

  /* Typography */
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;

  /* Layout */
  --section-pad: clamp(5rem, 10vw, 8rem);
  --container: 1200px;
  --gutter: clamp(1.5rem, 5vw, 5%);

  /* Border radius */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 24px;
  --radius-xl: 40px;

  /* Shadows */
  --shadow-sm: 0 2px 12px rgba(15,123,108,0.08);
  --shadow-md: 0 8px 32px rgba(15,123,108,0.12);
  --shadow-lg: 0 20px 60px rgba(15,123,108,0.15);
  --shadow-card: 0 4px 24px rgba(28,28,26,0.07);

  /* Transitions */
  --transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Reset */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  font-weight: 400;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}
img { max-width: 100%; display: block; }
::selection { background: var(--brand-primary-xlight); color: var(--brand-primary); }

/* Shared section utilities */
.section-eyebrow {
  display: inline-flex; align-items: center; gap: 0.5rem;
  font-size: 0.72rem; font-weight: 600; letter-spacing: 2px;
  text-transform: uppercase; color: var(--brand-primary); margin-bottom: 0.8rem;
}
.section-eyebrow::before { content: ''; width: 20px; height: 2px; background: var(--brand-primary); border-radius: 2px; }
.section-title {
  font-family: var(--font-display); font-size: clamp(1.8rem, 3vw, 2.8rem);
  font-weight: 700; letter-spacing: -1px; line-height: 1.15; color: var(--text);
}
.section-sub { color: var(--text-muted); font-size: 1rem; line-height: 1.7; max-width: 520px; margin-top: 0.8rem; }
.section-header { margin-bottom: 3.5rem; }

/* Scroll reveal */
.reveal {
  opacity: 0; transform: translateY(28px);
  transition: opacity 0.65s ease, transform 0.65s ease;
}
.reveal.visible { opacity: 1; transform: translateY(0); }
.reveal.d0 { transition-delay: 0s; }
.reveal.d1 { transition-delay: 0.12s; }
.reveal.d2 { transition-delay: 0.24s; }
.reveal.d3 { transition-delay: 0.36s; }
</style>
