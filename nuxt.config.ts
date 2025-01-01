// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins : ['~/plugins/axios.ts'], //Axios Plugin
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})