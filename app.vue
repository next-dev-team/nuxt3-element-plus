<script lang="ts" setup>
import { AppSetup } from './utils/app'

AppSetup()
const locale = useState<string>('locale.setting')
</script>

<template>
  <Html :lang="locale">
    <Body
      class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
