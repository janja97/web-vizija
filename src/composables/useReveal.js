// composables/useReveal.js
// Reusable composable for scroll-triggered reveal animations

import { onMounted, onUnmounted } from 'vue'

export function useReveal() {
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    // Observe all .reveal elements within the current component's DOM
    // Small timeout to ensure DOM is ready
    setTimeout(() => {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
        observer.observe(el)
      })
    }, 50)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
}
