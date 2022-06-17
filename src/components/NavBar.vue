<script setup lang="ts">
import NavBarProfileOptions from './NavBarProfileOptions.vue'
import NavBarMenu from './NavBarMenu.vue'
</script>

<template>
  <div
    class="w-full bg-primary flex flex-row-reverse justify-between lg:justify-start lg:flex-col divide-y divide-red-100"
  >
    <NavBarProfileOptions />
    <NavBarMenu />
  </div>
</template>
