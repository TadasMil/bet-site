<script setup lang="ts" name="NavBarProfileOption">
import BaseIcon from './BaseIcon.vue'

defineProps({
  text: {
    type: String,
    required: false,
  },
  arrow: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="flex items-center px-5 relative">
    <slot />
    <p v-if="text" class="font-bold text-white text-sm">{{ text }}</p>
    <BaseIcon v-if="arrow" :icon="arrow" class="text-white w-5 h-5" />
  </div>
</template>
