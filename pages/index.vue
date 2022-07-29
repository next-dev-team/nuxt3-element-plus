<script lang="ts" setup>
import { ElButton } from 'element-plus'

// meta
definePageMeta({
  layout: 'default',
})

useHead(() => ({
  title: 'homepage',
  meta: [
    {
      name: 'description',
      content: 'description',
    },
  ],
}))
</script>

<template>
  <div class="m-h-[36vh]">
    <h1
      class="py-4 text-center px-6 font-medium text-white bg-gradient-to-r from-purple-500 via-green-500 to-red-500 text-5xl"
    >
      {{ $t('welcomePage', { name: 'Nuxt3 boilerplate' }) }}
    </h1>
  </div>
</template>
