<script setup lang="ts">
const { isAuth } = useUserStore()
</script>

<template>
  <div>
    <PageHeader />
    <div class="min-h-[35vh] flex">
      <nav v-show="isAuth" class="w-56 flex-none">
        <PageSideMenu class="min-h-[90.3vh]" />
      </nav>
      <main class="flex-1 min-w-0 overflow-auto">
        <slot />
      </main>
    </div>
  </div>
</template>
