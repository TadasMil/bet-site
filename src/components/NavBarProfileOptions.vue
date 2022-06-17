<script setup lang="ts">
import NavBarProfileOption from './NavBarProfileOption.vue'
import BaseIcon from './BaseIcon.vue'
</script>

<template>
  <div class="hidden lg:flex justify-end h-[39px] divide-x divide-red-100">
    <NavBarProfileOption class="border-l border-red-100" arrow="arrow-down">
      <BaseIcon icon="user" class="text-white w-4 h-4 mr-1" />
    </NavBarProfileOption>

    <NavBarProfileOption>
      <span
        class="absolute top-1 right-3 inline-flex items-center justify-center px-1 text-[11px] font-bold leading-none text-black bg-yellow-300 rounded-full"
      >
        9
      </span>
      <BaseIcon icon="notification-bell" class="text-white w-4 h-4" />
    </NavBarProfileOption>

    <NavBarProfileOption text="€ 45.05" arrow="arrow-down">
      <BaseIcon icon="wallet" class="text-white w-5 h-5 mr-2" />
    </NavBarProfileOption>

    <NavBarProfileOption text="€ 100.05" arrow="arrow-down">
      <BaseIcon icon="candy" class="text-white w-5 h-5 mr-2" />
    </NavBarProfileOption>

    <NavBarProfileOption class="bg-green-300">
      <p class="font-bold text-white text-sm">DEPOSIT</p>
    </NavBarProfileOption>

    <NavBarProfileOption arrow="arrow-down">
      <BaseIcon icon="united-kingdom" class="w-5 h-5 mr-1" />
    </NavBarProfileOption>
  </div>

  <div class="flex lg:hidden divide-x divide-red-100">
    <NavBarProfileOption class="px-6 border-l border-red-100">
      <BaseIcon icon="message" class="w-4 h-4 text-white" />
    </NavBarProfileOption>

    <NavBarProfileOption class="px-2">
      <div class="flex flex-col items-center py-2">
        <BaseIcon icon="user" class="text-white w-4 h-4" />
        <p class="text-sm text-white font-bold">€ 45.05</p>
      </div>
    </NavBarProfileOption>
  </div>
</template>
