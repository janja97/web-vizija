<template>
  <section class="wv-cta" id="kontakt">
    <div class="inner">
      <div class="cta-block">
        <div class="cta-orb1"></div>
        <div class="cta-orb2"></div>

        <!-- Left: text + perks -->
        <div class="cta-left">
          <span class="cta-label">☕ Bez obaveza</span>
          <h2 class="cta-title">Hajde da popijemo<br><span>kafu i pričamo.</span></h2>
          <p class="cta-desc">
            Bez složenih forma, bez čekanja. Zakaži besplatnu konzultaciju i hajde razgovaramo
            o tome kako da tvoj biznis izgleda bolje online.
          </p>
          <div class="cta-perks">
            <div v-for="perk in perks" :key="perk" class="cta-perk">
              <span class="perk-check">✓</span> {{ perk }}
            </div>
          </div>
        </div>

        <!-- Right: form -->
        <form class="cta-form" @submit.prevent="handleSubmit" novalidate>
          <input v-model="form.name"    type="text"  placeholder="Tvoje ime" required />
          <input v-model="form.email"   type="email" placeholder="Email adresa" required />
          <input v-model="form.phone"   type="tel"   placeholder="Broj telefona (opcionalno)" />
          <select v-model="form.service">
            <option value="" disabled>Šta te zanima?</option>
            <option v-for="opt in serviceOptions" :key="opt" :value="opt">{{ opt }}</option>
          </select>
          <textarea v-model="form.message" placeholder="Kratko opiši čime se baviš i šta bi trebao/la..."></textarea>

          <p v-if="errorMsg" class="cta-error">{{ errorMsg }}</p>

          <button type="submit" class="btn-submit" :disabled="loading || submitted">
            <span v-if="loading">⏳ Šaljem...</span>
            <span v-else-if="submitted">✓ Poruka poslana! Kontaktirat ću te uskoro.</span>
            <span v-else>Pošalji poruku ☕</span>
          </button>
          <p class="cta-small">Odgovaram u roku od 24h · Konzultacija je potpuno besplatna</p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

const EMAILJS_SERVICE_ID  = 'service_gxdfiyd'
const EMAILJS_TEMPLATE_ID = 'template_ejh1imq'
const EMAILJS_PUBLIC_KEY  = '6cVhpM225sgMjs90Y'

const submitted = ref(false)
const loading   = ref(false)
const errorMsg  = ref('')

const form = reactive({
  name: '', email: '', phone: '', service: '', message: ''
})

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js'
  script.onload = () => {
    window.emailjs.init(EMAILJS_PUBLIC_KEY)
  }
  document.head.appendChild(script)
})

function validate() {
  if (!form.name.trim())  { errorMsg.value = 'Upiši svoje ime.'; return false }
  if (!form.email.trim()) { errorMsg.value = 'Upiši email adresu.'; return false }
  if (!/\S+@\S+\.\S+/.test(form.email)) { errorMsg.value = 'Email adresa nije ispravna.'; return false }
  errorMsg.value = ''
  return true
}

async function handleSubmit() {
  if (!validate()) return
  loading.value = true
  errorMsg.value = ''

  // Trenutno vrijeme za "time" varijablu u templateu
  const now = new Date()
  const timeStr = now.toLocaleString('bs-BA', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit'
  })

  try {
    await window.emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name:  form.name,
        from_email: form.email,
        name:       form.name,
        email:      form.email,
        phone:      form.phone   || 'Nije upisano',
        service:    form.service || 'Nije odabrano',
        message:    form.message || 'Bez poruke',
        title:      'Novi upit — Web Vizija',
        time:       timeStr,
      }
    )
    submitted.value = true
  } catch (err) {
    console.error('EmailJS greška:', err)
    errorMsg.value = 'Nešto je pošlo po krivu. Kontaktiraj me direktno na webbvizija@gmail.com'
  } finally {
    loading.value = false
  }
}

const perks = [
  'Besplatne konzultacije — nema skrivenih troškova',
  'Prilagodba projekta tvojim potrebama i budžetu',
  'Brza komunikacija i isporuka',
  'Podrška i nakon završetka projekta',
]

const serviceOptions = [
  'Web stranica', 'Online shop', 'Web aplikacija',
  'Vođenje društvenih mreža', 'Digitalni marketing',
  'Fotografija', 'Pisanje sadržaja',
  'Softversko rješenje', 'Sve zajedno / Ne znam još',
]
</script>

<style scoped>
.wv-cta { padding: var(--section-pad) var(--gutter); background: var(--bg-warm); }
.inner { max-width: var(--container); margin: 0 auto; }

.cta-block {
  background: linear-gradient(145deg, #1a2e26 0%, var(--brand-primary) 60%, #0d2820 100%);
  border-radius: var(--radius-xl); padding: clamp(3rem, 6vw, 5rem);
  display: grid; grid-template-columns: 1.2fr 0.9fr;
  gap: 3rem; align-items: center; position: relative; overflow: hidden;
}
.cta-orb1 { position: absolute; right: -80px; top: -80px; width: 350px; height: 350px; border-radius: 50%; background: rgba(255,255,255,0.05); pointer-events: none; }
.cta-orb2 { position: absolute; left: 35%; bottom: -100px; width: 280px; height: 280px; border-radius: 50%; background: rgba(244,132,95,0.1); pointer-events: none; }

.cta-label { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.1); padding: 0.35rem 0.9rem; border-radius: 100px; font-size: 0.73rem; font-weight: 600; color: rgba(255,255,255,0.75); letter-spacing: 1px; text-transform: uppercase; margin-bottom: 1.2rem; }
.cta-title { font-family: var(--font-display); font-size: clamp(1.9rem, 3vw, 3rem); font-weight: 700; color: white; line-height: 1.15; letter-spacing: -0.5px; margin-bottom: 1rem; }
.cta-title span { color: var(--brand-accent); font-style: italic; }
.cta-desc { color: rgba(255,255,255,0.6); font-size: 0.95rem; line-height: 1.7; }
.cta-perks { display: flex; flex-direction: column; gap: 0.6rem; margin-top: 1.8rem; }
.cta-perk { display: flex; align-items: center; gap: 0.7rem; color: rgba(255,255,255,0.75); font-size: 0.88rem; }
.perk-check { width: 20px; height: 20px; background: rgba(255,255,255,0.12); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; flex-shrink: 0; }

.cta-form { display: flex; flex-direction: column; gap: 0.9rem; }
.cta-form input,
.cta-form textarea,
.cta-form select {
  background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.18);
  color: white; padding: 0.85rem 1.1rem; border-radius: var(--radius-md);
  font-family: var(--font-body); font-size: 0.9rem; width: 100%; outline: none;
  transition: border-color var(--transition);
}
.cta-form input::placeholder,
.cta-form textarea::placeholder { color: rgba(255,255,255,0.35); }
.cta-form input:focus,
.cta-form textarea:focus,
.cta-form select:focus { border-color: rgba(255,255,255,0.45); }
.cta-form select option { background: #1a2e26; }
.cta-form textarea { height: 95px; resize: none; }

.cta-error {
  color: #ffaa88; font-size: 0.82rem;
  padding: 0.6rem 0.9rem;
  background: rgba(244,132,95,0.15);
  border: 1px solid rgba(244,132,95,0.3);
  border-radius: var(--radius-sm);
}

.btn-submit {
  padding: 0.95rem; background: var(--brand-accent); color: white; border: none;
  border-radius: 100px; font-family: var(--font-body); font-size: 1rem; font-weight: 600;
  cursor: pointer; transition: all var(--transition);
  display: flex; align-items: center; justify-content: center; gap: 0.5rem;
}
.btn-submit:hover:not(:disabled) { background: #e8714a; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(244,132,95,0.4); }
.btn-submit:disabled { background: #0f7b6c; cursor: default; opacity: 0.85; }
.cta-small { text-align: center; font-size: 0.73rem; color: rgba(255,255,255,0.35); }

@media(max-width: 768px) { .cta-block { grid-template-columns: 1fr; } }
</style>