<script setup lang="ts" name="BaseButton">
import { computed } from 'vue'

const TYPES: { [key: string]: any } = {
  primary: 'primary',
  text: 'text',
}

const props = defineProps({
  type: {
    type: String,
    default: 'primary',
  },
})

const emit = defineEmits<{
  (e: 'click'): void
}>()

const typeIsPrimary = computed(() => props.type === TYPES.primary)
</script>

<template>
  <button
    type="button"
    :class="{
      'border border-green-300 font-bold text-green-300 px-5 text-lg rounded hover:bg-green-100':
        typeIsPrimary,
    }"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>
