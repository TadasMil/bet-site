<script setup lang="ts" name="ProfileSidebar">
interface SidebarItem {
  name: string
  path: string
}

const sidebarItems: SidebarItem[] = [
  {
    name: 'My profile',
    path: 'MyProfileIndex',
  },
  {
    name: 'Payments history',
    path: 'PaymentsHistoryIndex',
  },
  {
    name: 'Withdraw',
    path: 'WithdrawIndex',
  },
  {
    name: 'Betings history',
    path: 'BettingsHistoryIndex',
  },
  {
    name: 'Active campaigns',
    path: 'BettingsHistoryIndex',
  },
  {
    name: 'Messages',
    path: 'BettingsHistoryIndex',
  },
  {
    name: 'Limits',
    path: 'BettingsHistoryIndex',
  },
  {
    name: 'Promotional code',
    path: 'BettingsHistoryIndex',
  },
]
</script>

<template>
  <div class="divide-y divide-coal-200">
    <router-link
      v-for="item in sidebarItems"
      class="bg-coal-50 px-4 py-3 text-lg cursor-pointer flex"
      :key="item.name"
      :to="{ name: item.path }"
    >
      {{ item.name }}
    </router-link>
  </div>
</template>
