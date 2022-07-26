<script lang="ts" setup>
import { useAppStore } from '~~/stores/app'

const store = useAppStore()

onMounted(() => {
  if (store.toolboxModal)
    store.toggleToolboxModal()
})
const activeDevMenu = computed(() => store.activeDevMenu)
</script>

<template>
  <div>
    <div v-if="store.toolboxModal">
      <div v-if="store.toolboxModal" class="fixed h-full w-full z-50 right-0 top-0  transition-transform ease-out ">
        <div class="fixed h-full w-full right-0 top-0 bg-black bg-opacity-50 z-[-1]" @click="store.toggleToolboxModal" />

        <div class="fixed h-full w-[80vw] right-0 top-0 bg-white shadow-lg p-4">
          <DevOnlyMenu />

          <div class="mt-10">
            <!-- render iframe -->
            <iframe v-if="activeDevMenu.iframeUrl" :src="activeDevMenu.iframeUrl" class="w-full h-screen" />
            <!-- empty state -->
            <div v-else class="h-[90vh] w-full bg-gray-100 flex justify-center items-center">
              <h1 class="text-3xl">
                Coming soon!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

