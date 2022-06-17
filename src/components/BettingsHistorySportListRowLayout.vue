<script setup lang="ts" name="BettingsHistorySportListRowLayout"></script>

<template>
  <div class="grid flex-1 grid-cols-6">
    <slot />
  </div>
  <div class="grid grid-cols-2 gap-4 min-w-[320px]">
    <slot name="right-aligned" />
  </div>
</template>
