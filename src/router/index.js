import { createRouter } from 'vue-router'
import Home from '../pages/Home.vue'
import LocalLandingPage from '../pages/LocalLandingPage.vue'
import NotFound from '../pages/NotFound.vue'
import { markets } from '../data/markets'

const marketRoutes = Object.keys(markets).map((key) => ({
  path: `/${markets[key].slug}`,
  name: key,
  component: LocalLandingPage,
  meta: { marketKey: key },
}))

export function createAppRouter(history) {
  return createRouter({
    history,
    routes: [
      { path: '/', name: 'home', component: Home },
      ...marketRoutes,
      { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
    ],
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) return savedPosition
      if (to.hash) return { el: to.hash, behavior: 'smooth' }
      return { top: 0 }
    },
  })
}
