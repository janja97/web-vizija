import { createWebHistory } from 'vue-router'
import { createWebVizijaApp } from './createApp'

const { app, router } = createWebVizijaApp(createWebHistory())

router.isReady().then(() => app.mount('#app'))
