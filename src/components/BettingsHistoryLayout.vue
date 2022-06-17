<script setup lang="ts" name="BettingsHistoryLayout">
import BaseButton from './BaseButton.vue'

const emits = defineEmits<{
  (e: 'select'): void
  (e: 'reset'): void
}>()
</script>

<template>
  <div class="space-y-8">
    <div class="flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-3">
      <slot name="filters" />

      <BaseButton @click="emits('select')"> FILTER </BaseButton>
      <BaseButton type="text" @click="emits('reset')">
        <p class="text-blue-300 text-lg">Clear</p>
      </BaseButton>
    </div>

    <slot />
  </div>
</template>
