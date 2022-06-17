<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import ProfileSidebar from './components/ProfileSidebar.vue'
</script>

<template>
  <div>
    <NavBar />
    <div class="flex mt-3">
      <div class="hidden ml-2 w-2/12 lg:block">
        <ProfileSidebar />
      </div>

      <div class="mx-2 w-full">
        <router-view />
      </div>
    </div>
  </div>
</template>
