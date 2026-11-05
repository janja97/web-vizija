<template>
  <section class="wv-not-found">
    <p class="section-eyebrow">404</p>
    <h1 class="section-title">Stranica nije pronađena</h1>
    <p class="section-sub">Link je možda zastario ili je stranica premještena.</p>
    <router-link to="/" class="back-link">← Nazad na početnu</router-link>
  </section>
</template>

<style scoped>
.wv-not-found {
  min-height: 70vh; padding: calc(70px + var(--section-pad)) var(--gutter) var(--section-pad);
  display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;
}
.back-link { margin-top: 1.5rem; color: var(--brand-primary); font-weight: 600; text-decoration: none; }
.back-link:hover { text-decoration: underline; }
</style>
