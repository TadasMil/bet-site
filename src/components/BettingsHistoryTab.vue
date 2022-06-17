<script setup lang="ts" name="BettingsHistoryTab">
const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
})

const emit = defineEmits<{
  (e: 'select', id: string): void
}>()
</script>

<template>
  <button
    type="button"
    class="text-sm font-medium text-center"
    @click="emit('select', id)"
  >
    <a
      class="inline-block py-1 px-2 text-lg rounded-t-lg border-b-4 border-transparent"
      :class="{ 'border-primary border-b-4': isActive }"
    >
      <p class="text-coal-300" :class="{ 'text-primary': isActive }">
        {{ label }}
      </p>
    </a>
  </button>
</template>
