<template>
  <WvHero />
  <WvServices />
  <WvWhy />
  <WvPortfolio />
  <WvReviews />
  <WvStepForm />
  <WvCta />
</template>

<script setup>
import WvHero      from '../components/WvHero.vue'
import WvServices  from '../components/WvServices.vue'
import WvWhy        from '../components/WvWhy.vue'
import WvPortfolio from '../components/WvPortfolio.vue'
import WvReviews   from '../components/WvReviews.vue'
import WvStepForm  from '../components/WvStepForm.vue'
import WvCta        from '../components/WvCta.vue'
import { useSeoMeta, SITE_URL } from '../composables/useSeoMeta'

useSeoMeta(() => ({
  title: 'Izrada web stranica i web aplikacija — Web Vizija | BiH, HR, SRB',
  description: 'Web Vizija — profesionalna izrada web stranica i web aplikacija po mjeri, uz online shopove, SEO optimizaciju i fotografiju. Besplatne konzultacije, isporuka za 7–14 dana. Mostar, BiH.',
  keywords: 'izrada web stranica, izrada web aplikacija, razvoj web aplikacija, web dizajn, custom web aplikacije, izrada sajtova, online shop, SEO optimizacija',
  canonical: `${SITE_URL}/`,
  ogLocale: 'bs_BA',
}))
</script>
