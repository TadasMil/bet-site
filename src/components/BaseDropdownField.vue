<script setup lang="ts" name="BaseDropdownField">
import { ref } from 'vue'

import BaseIcon from './BaseIcon.vue'

defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
  options: {
    type: Array<string>,
    default: () => [],
  },
  label: {
    type: String,
    default: 'TYPE',
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', option: string): void
}>()

const isExpanded = ref<boolean>(false)

const setExpanded = () => {
  isExpanded.value = !isExpanded.value
}

const selectOption = (option: string) => {
  emit('update:modelValue', option)
  isExpanded.value = false
}
</script>

<template>
  <div class="relative">
    <button
      type="button"
      class="flex items-center justify-between rounded-md border border-gray-300 shadow-sm px-4 pb-1 bg-white text-sm font-medium text-gray-700"
      v-bind="$attrs"
      @click="setExpanded"
    >
      <div>
        <p class="text-[10px] text-left">{{ label }}</p>
        <p class="block -mt-1">{{ value }}</p>
      </div>
      <BaseIcon icon="arrow-down" class="h-5 w-5" />
    </button>

    <transition
      leave-class="translate-y-0 scale-y-100 opacity-100"
      leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
      leave-active-class="transform transition duration-300 ease-custom"
    >
      <ul
        v-show="isExpanded"
        class="absolute left-0 right-0 mb-4 bg-white divide-y rounded-b-lg border border-coal-200 shadow-lg overflow-hidden"
      >
        <li
          v-for="option in options"
          :key="option"
          class="px-3 py-2 transition-colors duration-300 hover:bg-gray-200"
          @click="selectOption(option)"
        >
          {{ option }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<style #scoped>
.ease-custom {
  transition-timing-function: cubic-bezier(0.61, -0.53, 0.43, 1.43);
}
</style>
