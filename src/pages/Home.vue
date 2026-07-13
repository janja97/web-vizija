<template>
  <WvHero />
  <WvServices />
  <WvWhy />
  <WvPortfolio />
  <WvReviews />
  <WvCta />
</template>

<script setup>
import WvHero      from '../components/WvHero.vue'
import WvServices  from '../components/WvServices.vue'
import WvWhy        from '../components/WvWhy.vue'
import WvPortfolio from '../components/WvPortfolio.vue'
import WvReviews   from '../components/WvReviews.vue'
import WvCta        from '../components/WvCta.vue'
import { useSeoMeta, SITE_URL } from '../composables/useSeoMeta'

useSeoMeta(() => ({
  title: 'Web Vizija — Web stranice, Marketing & Digitalni partner | BiH, HR, SRB',
  description: 'Web Vizija — profesionalna izrada web stranica, online shopova, aplikacija, vođenje društvenih mreža, digitalni marketing i fotografija. Besplatne konzultacije. Mostar, BiH.',
  keywords: 'izrada web stranica, web dizajn, izrada sajtova, online shop, digitalni marketing',
  canonical: `${SITE_URL}/`,
  ogLocale: 'bs_BA',
}))
</script>
