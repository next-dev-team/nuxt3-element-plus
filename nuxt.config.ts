import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'url'
import { defineNuxtConfig } from 'nuxt'
// import presetIcons from '@unocss/preset-icons'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'
import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineNuxtConfig({
  // server side rendering mode
  ssr: true,
  autoImports: {
    dirs: [
      // Scan composables from nested directories
      'composables/**',
    ],
  },
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    'unplugin-icons/nuxt',
  ],

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },
  build: {
    transpile: ['@headlessui/vue'],
  },
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
  colorMode: {
    classSuffix: '',
  },
  vite: {
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
      UnpluginComponentsVite({
        dts: 'types/components.d.ts',
        resolvers: [
          // auto generate when write  <i-carbon:arrow-down  /> it be auto import see the result types in types/component.d.ts
          IconsResolver({
            prefix: 'i',
          }),
        ],
      }),
    ],
  },
})
