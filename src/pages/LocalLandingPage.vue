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
  <WvStepForm />
  <WvFaq />
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
import WvStepForm    from '../components/WvStepForm.vue'
import WvFaq         from '../components/WvFaq.vue'
import WvCta          from '../components/WvCta.vue'
import { markets } from '../data/markets'

const route = useRoute()
const marketKey = computed(() => route.meta.marketKey)
const market = computed(() => markets[marketKey.value])
</script>
