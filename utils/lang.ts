import { useI18n } from 'vue-i18n'

type ILocaleKey = 'en-Us' | 'zh-CN'

export type ILocales = {
  [key in ILocaleKey]: {
    name: string
    iso: string
    flag: string
  }
}

const availableLocales: ILocales = {
  'en-Us': {
    name: 'English',
    iso: 'en-Us',
    flag: 'i-twemoji-flag-us-outlying-islands',
  },
  'zh-CN': {
    name: '中 文',
    iso: 'zh-CN',
    flag: 'i-twemoji-flag-china',
  },

}

export function LanguageManager() {
  // composable
  const { locale } = useI18n()
  const localeUserSetting = useCookie('locale')

  // methods
  const getSystemLocale = (): string => {
    try {
      const foundLang = window
        ? window.navigator.language.substring(0, 2)
        : 'en-Us'
      return availableLocales[foundLang] ? foundLang : 'en-Us'
    }
    catch (error) {
      return 'en-Us'
    }
  }
  const getUserLocale = (): string =>
    localeUserSetting.value || getSystemLocale()

  // state
  const localeSetting = useState<string>('locale.setting', () =>
    getUserLocale(),
  )

  // watchers
  watch(localeSetting, (localeSetting) => {
    localeUserSetting.value = localeSetting
    locale.value = localeSetting
  })

  // init locale
  const init = () => {
    localeSetting.value = getUserLocale()
  }
  locale.value = localeSetting.value

  // lifecycle
  onBeforeMount(() => init())

  return {
    localeSetting,
    init,
    availableLocales,
  }
}
