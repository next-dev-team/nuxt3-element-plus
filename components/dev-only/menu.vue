<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { devMenu } from '~/constants'
import { useAppStore } from '~~/stores/useAppStore'
const appStore = useAppStore()

const getActiveMain = (item: any = {}) => {
  const main = item && item?.children?.every((i: any) => i.title?.includes(appStore.activeDevMenu.title))
  const sub = item?.title?.includes(appStore.activeDevMenu.title)

  return item?.children ? main : sub
}
const getActiveChild = (itemCh: any): boolean => {
  return appStore.activeDevMenu.title === itemCh?.title
}
</script>

<template>
  <div class="flex border-b py-1 gap-x-2">
    <Menu v-for="(item, index) in devMenu" :key="index" as="div" class="relative inline-block text-left">
      <MenuButton
        :class="{ 'border border-primary-500': getActiveMain(item) }"
        class="inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm font-medium text-gray-400 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        @click="() => {
          if (!item?.children){
            appStore.setActiveDevMenu(item)
          }
        }"
      >
        {{ item.title }}
        <UnoIcon v-if="item?.children" class="i-carbon:arrow-down  ml-1" :class="{ 'text-primary-600': getActiveMain(item) }" />
      </MenuButton>

      <transition
        v-for="(itemSub, indexSub) in item.children" :key="indexSub"
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <MenuItem>
              <button
                class="group flex w-full items-center rounded-md px-2 py-2 text-sm"
                :class="[
                  getActiveChild(itemSub) ? 'bg-violet-500 text-white' : 'text-gray-900',
                ]"
                @click="() => appStore.setActiveDevMenu(itemSub as any)"
              >
                {{ itemSub.title }}
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>
