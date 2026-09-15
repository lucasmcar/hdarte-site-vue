// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/servicos.css',
    '~/assets/css/hero.css',
    '~/assets/css/footer.css',
    '~/assets/css/header.css',
    '~/assets/css/sobre.css',
  ],

  runtimeConfig: {
    public: {
      supabaseUrl: '',
      supabaseKey: ''
    }
  }
})
