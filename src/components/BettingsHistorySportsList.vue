<script setup lang="ts" name="BebetTypebetttingsHistorySportsList">
import { computed } from 'vue'

import { format } from 'date-fns'

import { BET_STATUS, IBetHistory } from '../../constants'

import BettingsHistorySportListRowLayout from './BettingsHistorySportListRowLayout.vue'
import BettingsHistorySportsListMatchup from './BettingsHistorySportsListMatchup.vue'
import BaseCollapsible from './BaseCollapsible.vue'

defineProps({
  bettingHistory: {
    type: Array<IBetHistory>,
    default: () => [],
  },
})

const collapsedButtonText = computed(
  () => (isOpen: boolean) => isOpen ? 'Close' : 'Open'
)

const isTicketWon = computed(
  () => (status: string) => status === BET_STATUS.WON
)

const formatDate = computed(
  () => (date: string) => format(new Date(date), 'yyyy-MM-dd HH:MM')
)
</script>

<template>
  <div class="flex border-y font-bold border-coal-200 py-2 text-coal-300 px-2">
    <BettingsHistorySportListRowLayout>
      <p class="col-span-2">DATE</p>
      <p class="col-span-2">TYPE</p>
      <p class="text-right">STAKE, €</p>
      <p class="text-center">ODDS</p>

      <template #right-aligned>
        <p class="text-right">POSSIBLE WIN, €</p>
        <p class="pl-4">STATUS</p>
      </template>
    </BettingsHistorySportListRowLayout>
  </div>

  <div class="divide-y divide-coal-200 last:border-coal-200 last:border-b">
    <BaseCollapsible
      v-for="record in bettingHistory"
      :key="record.id"
      class="px-2 py-2"
    >
      <template #trigger="{ toggle, isOpen }">
        <div class="flex">
          <BettingsHistorySportListRowLayout>
            <p class="col-span-2">{{ formatDate(record.date) }}</p>
            <p class="col-span-2">{{ record.type.label }}</p>
            <p class="text-right">{{ record.stake }}</p>
            <p class="text-center">{{ record.odd }}</p>

            <template #right-aligned>
              <p class="text-right">{{ record.possibleWin }}</p>

              <div class="flex justify-between">
                <p
                  class="pl-4"
                  :class="{ 'text-green-300': isTicketWon(record.status.type) }"
                >
                  {{ record.status.label }}
                </p>
                <button class="text-blue-500" @click="toggle">
                  {{ collapsedButtonText(isOpen) }}
                </button>
              </div>
            </template>
          </BettingsHistorySportListRowLayout>
        </div>
      </template>

      <div class="flex my-2">
        <BettingsHistorySportsListMatchup
          :label="record.type.label"
          :odd="record.odd"
          :date="formatDate(record.date)"
          :homeTeam="record.game.homeTeam"
          :awayTeam="record.game.awayTeam"
          :betCategory="record.game.betCategory"
        />
      </div>
    </BaseCollapsible>
  </div>
</template>
