import { useI18n } from 'vue-i18n'

type LocaleKey = 'en-Us' | 'zh-CN'

export type ILocales = {
  [key in LocaleKey]: {
    name: string
    iso: LocaleKey
  }
}

const availableLocales: ILocales = {
  'en-Us': {
    name: 'English',
    iso: 'en-Us',
  },
  'zh-CN': {
    name: '中 文',
    iso: 'zh-CN',
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
