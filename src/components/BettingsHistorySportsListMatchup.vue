<script setup lang="ts" name="BettingsHistorySportsListMatchup">
import { PropType } from 'vue'
import { IBetCategory } from '../../constants'

defineProps({
  date: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  homeTeam: {
    type: String,
    default: '',
  },
  awayTeam: {
    type: String,
    default: '',
  },
  betCategory: {
    type: Object as PropType<IBetCategory>,
    default: () => ({}),
  },
  odd: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <div
    class="flex px-3 lg:px-auto flex-col w-full lg:w-auto lg:grid lg:flex-1 lg:grid-cols-6 bg-coal-50 py-2 lg:items-center"
  >
    <p class="text-sm lg:col-span-2 lg:pl-2">
      {{ date }}
    </p>

    <div
      class="flex flex-col lg:flex-row lg:items-center text-sm lg:space-x-12 lg:col-span-3"
    >
      <div class="flex flex-col items-start">
        <p class="font-bold text-coal-300">{{ homeTeam }} - {{ awayTeam }}</p>
        <p>{{ label }}</p>
      </div>

      <div class="flex mt-2 lg:mt-auto justify-between lg:justify-start">
        <div class="flex flex-col">
          <p class="font-bold text-coal-300">
            {{ betCategory.name }}
          </p>
          {{ betCategory.selection }}
        </div>

        <div class="block lg:hidden">
          <p class="font-bold text-coal-300">Odds</p>
          <p class="text-coal-300">{{ odd }}</p>
        </div>
      </div>
    </div>

    <p class="hidden lg:block text-center">{{ odd }}</p>
  </div>
  <div class="hidden lg:flex min-w-[320px] bg-coal-50"></div>
</template>
