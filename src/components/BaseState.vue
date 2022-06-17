<script setup lang="ts" name="BaseState">
import { injectState } from '../composables/useState'

import BaseLoading from './BaseLoading.vue'
import BaseAlert from './BaseAlert.vue'

const props = defineProps({
  injectKey: {
    type: String,
    default: 'state',
  },
})

const { stateIsLoading, stateIsIdle, stateIsNoData } = injectState(
  props.injectKey
)
</script>

<template>
  <div>
    <BaseAlert class="bg-blue-100" v-if="stateIsNoData">
      <p class="text-coal-300">There are no bets meeting specified criteria.</p>
    </BaseAlert>

    <div v-if="stateIsLoading" class="w-full flex items-center justify-center">
      <BaseLoading />
    </div>

    <div v-if="stateIsIdle">
      <slot />
    </div>
  </div>
</template>
