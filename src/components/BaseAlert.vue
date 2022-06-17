<script setup lang="ts" name="BaseAlert">
import BaseIcon from './BaseIcon.vue'

defineProps({
  icon: {
    type: String,
    default: 'info',
  },
})
</script>

<template>
  <div v-bind="$attrs" class="flex space-x-2 px-4 py-2 rounded">
    <slot name="icon">
      <BaseIcon :icon="icon" class="text-blue-200 w-6 h-6" />
    </slot>
    <slot />
  </div>
</template>
