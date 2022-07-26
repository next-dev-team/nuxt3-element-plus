import { createI18n } from 'vue-i18n'
import en from '../locales/en-US.json'
import zh from '../locales/zh-CN.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en-Us',
    messages: {
      'en-Us': en,
      'zh-CN': zh,
    },
  })

  vueApp.use(i18n)
})
