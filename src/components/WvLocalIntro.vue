<template>
  <section class="wv-local-intro">
    <div class="inner">
      <div class="local-header">
        <p class="section-eyebrow">{{ market.flag }} {{ market.country }}</p>
        <h2 class="section-title">{{ market.introHeading }}</h2>
      </div>

      <div class="local-body">
        <p v-for="(p, i) in market.introParagraphs" :key="i">{{ p }}</p>

        <div class="local-cities">
          <span v-for="city in market.cities" :key="city" class="city-tag">{{ city }}</span>
        </div>

        <div class="local-switch">
          <span>Radimo i za klijente u:</span>
          <router-link
            v-for="m in otherMarkets"
            :key="m.key"
            :to="`/${m.slug}`"
          >{{ m.flag }} {{ m.country }}</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { marketList } from '../data/markets'

const props = defineProps({
  market: { type: Object, required: true },
  marketKey: { type: String, required: true },
})

const otherMarkets = computed(() => marketList.filter((m) => m.key !== props.marketKey))
</script>

<style scoped>
.wv-local-intro { padding: var(--section-pad) var(--gutter) 0; background: var(--surface); }
.inner { max-width: var(--container); margin: 0 auto; }
.local-header { margin-bottom: 2rem; }

.local-body { max-width: 720px; }
.local-body p { color: var(--text-secondary); font-size: 0.98rem; line-height: 1.8; margin-bottom: 1.1rem; }

.local-cities { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 1.5rem 0; }
.city-tag {
  padding: 0.3rem 0.85rem; background: var(--brand-primary-xlight);
  color: var(--brand-primary); border-radius: 100px; font-size: 0.8rem; font-weight: 600;
}

.local-switch {
  display: flex; flex-wrap: wrap; align-items: center; gap: 0.7rem;
  padding-top: 1.2rem; border-top: 1px solid var(--border-light);
  font-size: 0.85rem;
}
.local-switch span { color: var(--text-muted); }
.local-switch a {
  color: var(--brand-primary); text-decoration: none; font-weight: 600;
  padding: 0.25rem 0.7rem; border-radius: 100px; background: var(--brand-primary-xlight);
  transition: all var(--transition);
}
.local-switch a:hover { background: var(--brand-primary); color: white; }
</style>
