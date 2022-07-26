import { defineStore } from 'pinia'
import { devMenu } from '../constants'

type ITheme = 'theme.tailwind' | 'theme.plugin'
type IComponents = 'com.next-dev' | 'com.headless'

export type AppState = {
  toolboxModal?: boolean
  activeDevMenu: { title: string; icon?: string; iframeUrl?: string; disabled?: boolean; render?: ITheme | IComponents }
}

export const useAppStore = defineStore('useAppStore', {
  state: (): AppState => ({
    toolboxModal: false,
    activeDevMenu: devMenu?.[0]?.children?.[0] as AppState['activeDevMenu'],
  }),
  actions: {
    toggleToolboxModal() {
      this.toolboxModal = !this.toolboxModal
    },
    setActiveDevMenu(activeDevMenu: AppState['activeDevMenu']) {
      this.activeDevMenu = activeDevMenu
    },
  },
})

