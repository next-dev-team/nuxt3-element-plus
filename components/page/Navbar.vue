<script lang="ts" setup>
// const { logout, isAuth } = useUserStore()
</script>

<template>
  <div class="flex items-center h-16 mx-auto">
    <NuxtLink
      class="mr-6 space-x-2 flex items-center"
      @click="$router.push('/')"
    >
      <img src="/icons/logo.svg" class="w-10 h-10" />
      <h2 class="font-bold text-2xl text-title-500">UMPAY</h2>
      <h5>Merchant</h5>
    </NuxtLink>
    <div class="flex items-center justify-end flex-1 md:justify-between">
      <nav class="hidden md:block" aria-labelledby="header-navigation">
        <ul class="flex items-center gap-6 text-sm">
          <!-- <li>
            <NuxtLink
              to="/test"
              class="transition-colors duration-300 dark:hover:text-white hover:no-underline hover:text-slate-900 capitalize"
            >
              Test Page
              <NuxtLink to="/test" />
            </NuxtLink>
          </li> -->
        </ul>
      </nav>
      <div class="flex items-center gap-4">
        <div class="sm:gap-4 sm:flex">
          <NuxtLink
            class="block px-5 py-2.5 text-sm font-medium text-white bg-teal-600 hover:bg-teal-500 transition rounded-md shadow"
            to="/auth/login"
          >
            {{ $t('login') }}
          </NuxtLink>
          <NuxtLink
            class="hidden cursor-pointer sm:block px-5 py-2.5 text-sm font-medium text-white bg-gray-800 rounded-md hover:text-white/75 transition"
          >
            Logout
          </NuxtLink>
        </div>

        <button
          class="block p-2.5 text-white bg-gray-800 rounded md:hidden hover:text-white/75 transition"
        >
          <span class="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <SysLanguageChange />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
