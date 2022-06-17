<script setup lang="ts" name="BettingsHistoryIndex">
import { computed, shallowRef } from 'vue'

import BettingsHistoryVirtualSports from '../components/BettingsHistoryVirtualSports.vue'
import BettingsHistorySports from '../components/BettingsHistorySports.vue'
import BettingsHistoryCasino from '../components/BettingsHistoryCasino.vue'
import BettingsHistoryTab from '../components/BettingsHistoryTab.vue'
import BasePage from '../components/BasePage.vue'

const TAB_TYPES: { [key: string]: string } = {
  SPORTS: 'SPORTS',
  VIRTUAL_SPORTS: 'VIRTUAL_SPORTS',
  CASINO: 'CASINO',
}

const TABS: { [key: string]: object } = {
  [TAB_TYPES.SPORTS]: BettingsHistorySports,
  [TAB_TYPES.VIRTUAL_SPORTS]: BettingsHistoryVirtualSports,
  [TAB_TYPES.CASINO]: BettingsHistoryCasino,
}

const selectedComponent = shallowRef<object>(TABS.SPORTS)

const selectTab = (id: string) => {
  selectedComponent.value = TABS[id]
}

const isSelected = computed(
  () => (id: string) => TABS[id] === selectedComponent.value
)

interface TabItem {
  id: string
  label: string
}

type TabList = TabItem[]

const tabsList: TabList = [
  {
    id: TAB_TYPES.SPORTS,
    label: 'Sports',
  },
  {
    id: TAB_TYPES.CASINO,
    label: 'Casino',
  },
  {
    id: TAB_TYPES.VIRTUAL_SPORTS,
    label: 'Virtual Sports',
  },
]
</script>

<template>
  <BasePage title="Bettings history">
    <div class="lg:flex border-b border-coal-100 space-x-2 mb-6 hidden">
      <BettingsHistoryTab
        v-for="tab in tabsList"
        :key="tab.id"
        v-bind="tab"
        :isActive="isSelected(tab.id)"
        @select="selectTab"
      />
    </div>

    <component :is="selectedComponent" />
  </BasePage>
</template>
