<script setup lang="ts" name="BasePage">
defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div>
    <h1 class="text-coal-300 text-2xl font-bold mb-4">{{ title }}</h1>
    <slot />
  </div>
</template>
