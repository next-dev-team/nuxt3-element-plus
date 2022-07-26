<script setup lang="ts">
const isDev = import.meta.env.DEV && !import.meta.env.SSR && screen.width > 600
</script>

<template>
  <header class="sticky top-0 backdrop-filter backdrop-blur-md z-40 w-full flex-none transition-colors duration-300 lg:z-50 border-b border-gray-900/10 dark:border-gray-50/[0.2] bg-white/[0.5] dark:bg-slate-900/[0.5]">
    <div id="navbar-banner" class="banner">
      <div class="text-white text-xs text-center py-1 px-4 lg:px-8 bg-primary-500 capitalize">
        <span class="mr-1">
          {{ $t('welcomePage', { name: 'Nuxt3 boilerplate' }) }}
        </span><a class="transition-colors duration-300 dark:hover:text-white hover:text-gray-900 hover:underline underline font-bold" href="https://github.com/viandwi24/nuxt3-awesome-starter" />
      </div>
    </div>

    <div class="max-w-[90rem] w-full mx-auto">
      <PageNavbar />
      <slot />
    </div>
  </header>
  <ClientOnly v-if="isDev">
    <DevOnlyToolbox />
  </ClientOnly>
</template>
