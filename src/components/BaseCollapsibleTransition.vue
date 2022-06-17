<script setup lang="ts" name="BaseCollapsibleTransition">
const enter = (el: any) => {
  el.style.height = 'auto'
  const height = getComputedStyle(el).height
  el.style.height = 0
  getComputedStyle(el)
  setTimeout(() => {
    el.style.height = height
  }, 100)
}

const afterEnter = (el: any) => {
  el.style.height = 'auto'
}

const leave = (el: any) => {
  el.style.height = getComputedStyle(el).height
  getComputedStyle(el)
  setTimeout(() => {
    el.style.height = 0
  }, 100)
}
</script>
<template>
  <transition
    name="expand"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
  >
    <slot />
  </transition>
</template>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: height 0.5s ease-in-out;
  overflow: hidden;
}
</style>
