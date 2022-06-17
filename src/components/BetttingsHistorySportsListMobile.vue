<script setup lang="ts" name="BetttingsHistorySportsListMobile">
import { BET_STATUS, IBetHistory } from '../../constants'
import { computed } from 'vue'
import { format } from 'date-fns'

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
  <div
    class="flex flex-col divide-y divide-coal-200 w-full border-y border-coal-200 mx-4"
  >
    <BaseCollapsible v-for="record in bettingHistory" :key="record.id">
      <template #trigger="{ toggle, isOpen }">
        <div class="py-4">
          <div class="flex justify-between">
            <p class="font-bold text-coal-300">DATE</p>
            <p class="text-coal-300">{{ formatDate(record.date) }}</p>
          </div>
          <div class="flex justify-between">
            <p class="font-bold text-coal-300">TYPE</p>
            <p class="text-coal-300">{{ record.type.label }}</p>
          </div>
          <div class="flex justify-between">
            <p class="font-bold text-coal-300">STAKE, €</p>
            <p class="text-coal-300">{{ record.stake }}</p>
          </div>
          <div class="flex justify-between">
            <p class="font-bold text-coal-300">ODDS</p>
            <p class="text-coal-300">{{ record.odd }}</p>
          </div>
          <div class="flex justify-between">
            <p class="font-bold text-coal-300">POSSIBLE WIN, €</p>
            <p class="text-coal-300">{{ record.possibleWin }}</p>
          </div>
          <div class="flex justify-between">
            <p class="font-bold text-coal-300">STATUS</p>
            <p class="text-coal-300">{{ isTicketWon(record.status.type) }}</p>
          </div>
          <button class="text-blue-500 w-full text-right" @click="toggle">
            {{ collapsedButtonText(isOpen) }}
          </button>
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
