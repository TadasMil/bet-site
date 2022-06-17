<script setup lang="ts" name="BaseCalendarField">
import { computed, watch } from 'vue'
import { ref } from 'vue'
import format from 'date-fns/format'

import BaseIcon from './BaseIcon.vue'

const props = defineProps({
  modelValue: {
    type: Date,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
})

const value = computed<string>(() =>
  format(new Date(props.modelValue), 'yyyy-MM-dd')
)

const dateInput = ref<Date>(props.modelValue)

const emit = defineEmits<{
  (e: 'update:modelValue', option: Date): void
}>()

const isExpanded = ref<boolean>(false)

const setExpanded = () => {
  isExpanded.value = !isExpanded.value
}

watch(
  () => dateInput.value,
  () => {
    emit('update:modelValue', dateInput.value)
    setExpanded()
  }
)
</script>

<template>
  <div>
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
      <BaseIcon icon="calendar" class="h-5 w-5" />
    </button>

    <div class="absolute pt-2">
      <v-date-picker v-if="isExpanded" v-model="dateInput" />
    </div>
  </div>
</template>
