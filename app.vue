<script lang="ts" setup>
import { ElConfigProvider, ID_INJECTION_KEY } from 'element-plus'
import { AppSetup } from './utils/app'

provide(ID_INJECTION_KEY, {
  prefix: 100,
  current: 0,
})

const dark = useDark()
watch(dark, () => {
  useHead({
    htmlAttrs: {
      class: dark.value ? 'dark' : '',
    },
  })
})

AppSetup()
const locale = useState<string>('locale.setting')
</script>

<template>
  <Html :lang="locale">
    <Body class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900">
      <ElConfigProvider namespace="fm">
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </ElConfigProvider>
    </Body>
  </Html>
</template>
