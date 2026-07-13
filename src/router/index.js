import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import LocalLandingPage from '../pages/LocalLandingPage.vue'
import { markets } from '../data/markets'

const marketRoutes = Object.keys(markets).map((key) => ({
  path: `/${markets[key].slug}`,
  name: key,
  component: LocalLandingPage,
  meta: { marketKey: key },
}))

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    ...marketRoutes,
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router
