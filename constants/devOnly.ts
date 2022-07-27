import type { AppState } from '../stores/app'

type IMenu = Array<AppState['activeDevMenu'] & { children?: Partial<AppState['activeDevMenu']>[] }>

export const devMenu: IMenu = [
  {
    title: 'Theme',
    icon: 'i-carbon:arrow-down',
    render: 'theme.tailwind',
    children: [{
      title: 'tailwind',
      iframeUrl: 'http://localhost:3001/',
    }],
  },
  {
    title: 'Components',
    children: [{
      render: 'com.next-dev',
      title: 'next-dev',
      iframeUrl: 'https://next-dev-team.github.io/next-dev/components/display/button/button',
    }],
  },
  {
    title: 'Icons',
    children: [{
      render: 'com.next-dev',
      title: 'next-dev',
      iframeUrl: 'https://next-dev-team.github.io/next-dev/components/display/button/button',
    }],
  },
  {
    title: 'Project Document',
    render: 'theme.plugin',
  },

]
