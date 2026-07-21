<template>
  <WvHero
    :eyebrow="market.eyebrow"
    :title-html="market.heroTitleHtml"
    :desc="market.heroDesc"
    :browser-url="'webvizija.com/' + market.slug"
  />
  <WvLocalIntro :market="market" :market-key="marketKey" />
  <WvServices />
  <WvWhy />
  <WvPortfolio />
  <WvReviews />
  <WvCta />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import WvHero        from '../components/WvHero.vue'
import WvLocalIntro  from '../components/WvLocalIntro.vue'
import WvServices    from '../components/WvServices.vue'
import WvWhy          from '../components/WvWhy.vue'
import WvPortfolio   from '../components/WvPortfolio.vue'
import WvReviews     from '../components/WvReviews.vue'
import WvCta          from '../components/WvCta.vue'
import { markets } from '../data/markets'
import { useSeoMeta, SITE_URL } from '../composables/useSeoMeta'

const route = useRoute()
const marketKey = computed(() => route.meta.marketKey)
const market = computed(() => markets[marketKey.value])

useSeoMeta(() => {
  const m = market.value
  if (!m) return null
  return {
    title: m.title,
    description: m.metaDescription,
    keywords: m.keywords,
    canonical: `${SITE_URL}/${m.slug}`,
    ogLocale: m.ogLocale,
    localBusiness: { areaServed: m.areaServed },
  }
})
</script>
