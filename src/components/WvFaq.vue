<template>
  <section class="wv-faq" id="cesta-pitanja">
    <div class="inner">
      <div class="section-header">
        <p class="section-eyebrow">Česta pitanja</p>
        <h2 class="section-title">Cijene, rokovi i <span>sve što te zanima</span></h2>
      </div>
      <div class="faq-list">
        <details v-for="item in faq" :key="item.q" class="faq-item">
          <summary>{{ item.q }}</summary>
          <p>{{ item.a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup>
import { faq } from '../data/faq'
</script>

<style scoped>
.wv-faq { padding: var(--section-pad) var(--gutter); background: var(--surface); }
.inner { max-width: 820px; margin: 0 auto; }
.section-title span { color: var(--brand-primary); font-style: italic; }
.faq-list { display: flex; flex-direction: column; gap: 0.8rem; }
.faq-item {
  background: var(--bg); border: 1px solid var(--border-light);
  border-radius: var(--radius-md); padding: 1.1rem 1.4rem;
}
.faq-item summary { cursor: pointer; font-weight: 600; font-size: 0.98rem; color: var(--text); }
.faq-item p { margin-top: 0.7rem; color: var(--text-secondary); font-size: 0.92rem; line-height: 1.7; }
</style>
