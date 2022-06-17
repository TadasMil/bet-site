<script setup lang="ts" name="NavBarMenu">
import BaseIcon from './BaseIcon.vue'

interface MenuItem {
  text: string
  icon: string
}

const navMenuItems: MenuItem[] = [
  {
    icon: 'shoe',
    text: 'Sports',
  },
  {
    icon: 'ball',
    text: 'In-Play',
  },
  {
    icon: 'casino',
    text: 'Casino',
  },
  {
    icon: 'dice',
    text: 'Betgames',
  },
  {
    icon: 'gift',
    text: 'Campaigns',
  },
  {
    icon: 'location',
    text: 'Betting shops',
  },
]
</script>

<template>
  <div class="flex">
    <div class="lg:hidden border-r border-red-100 flex items-center px-4">
      <BaseIcon icon="hamburger-menu" class="text-white h-8 w-8" />
    </div>
    <img src="/images/logo.png" alt="logo" class="h-12 lg:h-20" />
    <div class="hidden lg:flex space-x-6">
      <div
        v-for="item in navMenuItems"
        :key="item.icon"
        class="flex flex-col items-center justify-center"
      >
        <BaseIcon :icon="item.icon" class="text-white w-8 h-8" />
        <p class="text-white text-lg px-1 text-center">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>
