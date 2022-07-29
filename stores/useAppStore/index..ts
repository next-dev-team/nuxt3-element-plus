import { defineStore } from 'pinia'
import { devMenu } from '~~/constants'

type ITheme = 'theme.tailwind' | 'theme.plugin'
type IIcons = 'icon.carbon'
type IComponents = 'com.next-dev' | 'com.headless'

export type AppState = {

}

export const useAppStore = defineStore('useAppStore', {
  state: (): AppState => ({

  }),
  actions: {
  },
})

