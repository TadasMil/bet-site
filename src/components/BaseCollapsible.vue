<script setup lang="ts" name="BaseCollapsible">
import { ref } from 'vue'

import BaseCollapsibleTransition from './BaseCollapsibleTransition.vue'

const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div>
    <slot name="trigger" :toggle="toggle" :is-open="isOpen" />
    <BaseCollapsibleTransition>
      <div v-show="isOpen">
        <slot />
      </div>
    </BaseCollapsibleTransition>
  </div>
</template>
