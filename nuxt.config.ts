import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'url'
import { defineNuxtConfig } from 'nuxt'
import presetIcons from '@unocss/preset-icons'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
const lifecycle = process.env.npm_lifecycle_event
const isProd = process.env.NODE_ENV === 'production'

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: '', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    },
  },
  // default meta
  meta: {
    title: 'Element Plus + Nuxt 3',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'ElementPlus + Nuxt3',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  buildModules: [
    // ...
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `usePinia()`
          'defineStore',
          'acceptHMRUpdate',
          // automatically imports `usePinia()` as `usePiniaStore()`
          ['defineStore', 'definePiniaStore'],
        ],
      },
    ],
  ],

  // ...
  autoImports: {
    dirs: [
      // Scan composables from nested directories
      'composables/**'
    ]
  },
  // auto import components
  components: true,

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
  ],
  // build
  build: {
    transpile: [
      // https://github.com/element-plus/element-plus-nuxt-starter/blob/44644788ee0d2a2580769769f9885b5cd9f7c0ab/nuxt.config.ts#L27
      ...(lifecycle === 'build' || lifecycle === 'generate'
        ? ['element-plus']
        : []),
    ],


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
    fallback: 'light',
    storageKey: 'color-mode',
  },

  // css
  css: [
    'assets/scss/index.scss',
    'assets/scss/element/dark.scss',
  ],
  tailwindcss: {
    cssPath: '~/assets/tailwind.css',
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: isProd ? '@use "assets/scss/element/index" as *;' : '@use "assets/scss/element/devOnly" as *;',
        },
      },
    },
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
    plugins: isProd
      ? [

        ElementPlus({
          useSource: true,
        }),
        Components({
          dts: false,
          resolvers: [
            IconsResolver(),
          ],
        }),
        VueI18nVitePlugin({
          include: [
            resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json'),
          ],
        }),
      ]
      : [
        VueI18nVitePlugin({
          include: [
            resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json'),
          ],
        }),
      ],
  },
})
