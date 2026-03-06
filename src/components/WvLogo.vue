<template>
  <a href="#" class="wv-logo" :class="{ 'logo--light': light }">

    <!-- ── SVG Logo Mark ── -->
    <svg
      class="logo-svg"
      :width="size"
      :height="size"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Clean white background square with soft radius -->
      <rect width="44" height="44" rx="11" fill="url(#grad)"/>

      <!--
        Concept: Cursor arrow + signal/wifi arcs
        = web browsing + digital reach + marketing
        Minimalist, single-weight strokes
      -->

      <!-- Cursor arrow (pointer) — white, clean -->
      <path
        d="M13 10 L13 28 L17.5 23.5 L21 30 L23.5 29 L20 22.5 L26 22.5 Z"
        fill="white"
        stroke="white"
        stroke-width="0.3"
        stroke-linejoin="round"
      />

      <!-- Signal / reach arcs — coral accent, top right -->
      <!-- Inner arc -->
      <path
        d="M28 16 Q31 19 28 22"
        stroke="#f4845f"
        stroke-width="2"
        stroke-linecap="round"
        fill="none"
      />
      <!-- Middle arc -->
      <path
        d="M30.5 13.5 Q35.5 19 30.5 24.5"
        stroke="#f4845f"
        stroke-width="2"
        stroke-linecap="round"
        fill="none"
        opacity="0.65"
      />
      <!-- Outer arc -->
      <path
        d="M33 11 Q40 19 33 27"
        stroke="#f4845f"
        stroke-width="2"
        stroke-linecap="round"
        fill="none"
        opacity="0.3"
      />

      <!-- Tiny dot at arc origin = signal source -->
      <circle cx="27.2" cy="19" r="1.5" fill="#f4845f"/>

      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stop-color="#1e3a5f"/>
          <stop offset="100%" stop-color="#0f7b6c"/>
        </linearGradient>
      </defs>
    </svg>

    <!-- ── Wordmark ── -->
    <div class="logo-wordmark">
      <span class="logo-name">
        web<span class="logo-accent">vizija</span>
      </span>
      <span class="logo-tagline">Digitalni partner</span>
    </div>

  </a>
</template>

<script setup>
defineProps({
  size:  { type: Number,  default: 44 },
  light: { type: Boolean, default: false },
})
</script>

<style scoped>
.wv-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  text-decoration: none;
  cursor: pointer;
}

/* Mark */
.logo-svg {
  flex-shrink: 0;
  filter: drop-shadow(0 3px 10px rgba(15, 123, 108, 0.25));
  transition: filter 0.25s ease, transform 0.25s ease;
}
.wv-logo:hover .logo-svg {
  filter: drop-shadow(0 5px 16px rgba(15, 123, 108, 0.4));
  transform: translateY(-1px);
}

/* Wordmark */
.logo-wordmark {
  display: flex;
  flex-direction: column;
  line-height: 1;
  gap: 4px;
}
.logo-name {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 1.15rem;
  color: var(--text);
  letter-spacing: -0.5px;
}
.logo-accent {
  color: var(--brand-primary);
}
.logo-tagline {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.57rem;
  font-weight: 600;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--text-muted);
}

/* ── Light variant (dark backgrounds) ── */
.logo--light .logo-name    { color: white; }
.logo--light .logo-accent  { color: #5ddcca; }
.logo--light .logo-tagline { color: rgba(255, 255, 255, 0.45); }
</style>