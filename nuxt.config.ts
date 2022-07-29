import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'url'
import { defineNuxtConfig } from 'nuxt'
import presetIcons from '@unocss/preset-icons'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineNuxtConfig({
  // ...
  autoImports: {
    dirs: [
      // Scan composables from nested directories
      'composables/**',
    ],
  },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
  ],
  build: {
    transpile: ['@headlessui/vue'],
  },
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
  unocss: {
    uno: false,
    preflight: false,
    icons: true,
    presets: [
      presetIcons({
        scale: 1.2,
        extraProperties: {
          display: 'inline-block',
        },
      }),
    ],
    // outside html element need to include here
    safelist: ['i-twemoji-flag-us-outlying-islands', 'i-twemoji-flag-china'],
  },
  colorMode: {
    classSuffix: '',
  },
  vite: {
    // Windows hot fix
    server: {
      watch: {
        usePolling: true,
      },
    },
    resolve: {
      alias: {
        'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js',
      },
    },
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json'),
        ],
      }),
    ],
  },
})
