<template>
  <nav class="wv-nav" :class="{ scrolled: isScrolled }">
    <div class="nav-inner">
      <WvLogo />

      <ul class="nav-links">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" @click.prevent="scrollTo(link.href)">{{ link.label }}</a>
        </li>
      </ul>

      <a href="#kontakt" class="btn-nav desktop" @click.prevent="scrollTo('#kontakt')">
        <span class="btn-dot"></span> Besplatna konzultacija
      </a>

      <button class="nav-hamburger" @click="toggleMobile" aria-label="Menu">
        <span :style="mobileOpen ? 'transform:rotate(45deg) translate(5px,5px)' : ''"></span>
        <span :style="mobileOpen ? 'opacity:0' : ''"></span>
        <span :style="mobileOpen ? 'transform:rotate(-45deg) translate(5px,-5px)' : ''"></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition name="mobile-nav">
      <div v-if="mobileOpen" class="nav-mobile">
        <a v-for="link in links" :key="link.href"
           :href="link.href"
           @click.prevent="mobileNavClick(link.href)">
          {{ link.label }}
        </a>
        <a href="#kontakt" class="btn-nav" @click.prevent="mobileNavClick('#kontakt')">
          <span class="btn-dot"></span> Besplatna konzultacija
        </a>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import WvLogo from './WvLogo.vue'

const isScrolled = ref(false)
const mobileOpen = ref(false)

const links = [
  { href: '#usluge',   label: 'Usluge' },
  { href: '#radovi',   label: 'Radovi' },
  { href: '#zasto-mi', label: 'Zašto mi?' },
  { href: '#recenzije',label: 'Recenzije' },
  { href: '#kontakt',  label: 'Kontakt' },
]

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function toggleMobile() {
  mobileOpen.value = !mobileOpen.value
}

function mobileNavClick(href) {
  mobileOpen.value = false
  setTimeout(() => scrollTo(href), 50)
}

function onScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.wv-nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  background: rgba(250,250,248,0.94);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-light);
  transition: box-shadow var(--transition);
}
.wv-nav.scrolled { box-shadow: 0 4px 24px rgba(28,28,26,0.08); }

.nav-inner {
  max-width: var(--container); margin: 0 auto;
  padding: 0 var(--gutter); height: 70px;
  display: flex; align-items: center; justify-content: space-between;
}

.nav-links { display: flex; align-items: center; gap: 0.1rem; list-style: none; }
.nav-links a {
  padding: 0.45rem 0.85rem;
  color: var(--text-secondary);
  text-decoration: none; font-size: 0.875rem; font-weight: 500;
  border-radius: var(--radius-sm); transition: all var(--transition);
}
.nav-links a:hover { color: var(--brand-primary); background: var(--brand-primary-xlight); }

.btn-nav {
  padding: 0.6rem 1.3rem; background: var(--brand-primary); color: white;
  border: none; border-radius: 100px; font-family: var(--font-body);
  font-size: 0.85rem; font-weight: 600; cursor: pointer;
  transition: all var(--transition); text-decoration: none;
  display: inline-flex; align-items: center; gap: 0.5rem; white-space: nowrap;
}
.btn-nav:hover { background: var(--brand-primary-light); transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn-dot {
  width: 6px; height: 6px; background: var(--brand-accent);
  border-radius: 50%; animation: blink 2s infinite;
}
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }

.nav-hamburger {
  display: none; flex-direction: column; gap: 5px;
  background: none; border: none; cursor: pointer; padding: 4px;
}
.nav-hamburger span {
  display: block; width: 24px; height: 2px;
  background: var(--text); border-radius: 2px; transition: all 0.3s ease;
}

/* Mobile nav */
.nav-mobile {
  position: fixed; inset: 70px 0 0 0;
  background: var(--surface); padding: 1.5rem var(--gutter);
  display: flex; flex-direction: column; gap: 0.4rem;
  z-index: 999; border-top: 1px solid var(--border);
  overflow-y: auto;
}
.nav-mobile a {
  padding: 0.9rem 1.2rem; font-size: 1.05rem; font-weight: 500;
  color: var(--text-secondary); text-decoration: none;
  border-radius: var(--radius-md); transition: all var(--transition);
}
.nav-mobile a:hover { background: var(--brand-primary-xlight); color: var(--brand-primary); }
.nav-mobile .btn-nav { margin-top: 1rem; justify-content: center; padding: 1rem; font-size: 1rem; }

/* Transition */
.mobile-nav-enter-active, .mobile-nav-leave-active { transition: opacity 0.2s ease, transform 0.25s ease; }
.mobile-nav-enter-from, .mobile-nav-leave-to { opacity: 0; transform: translateY(-10px); }

@media(max-width: 900px) {
  .nav-links { display: none; }
  .btn-nav.desktop { display: none; }
  .nav-hamburger { display: flex; }
}
</style>
