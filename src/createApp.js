import { createSSRApp } from 'vue'
import App from './App.vue'
import { createAppRouter } from './router'

export function createWebVizijaApp(history) {
  const app = createSSRApp(App)
  const router = createAppRouter(history)
  app.use(router)
  return { app, router }
}
