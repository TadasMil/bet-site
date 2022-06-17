<script setup lang="ts" name="BettingsHistoryCasino">
import { computed, ref, watch } from 'vue'

import { isWithinInterval } from 'date-fns'

import { casinoHistoryData } from '../mocks/mocks'
import { formatDate, isEmpty } from '../utils/utils'
import { useState } from '../composables/useState'
import { Service } from '../classes/Service'

import BettingsHistoryLayout from './BettingsHistoryLayout.vue'
import BaseCalendarField from './BaseCalendarField.vue'
import BaseState from './BaseState.vue'

const fromDate = ref<Date>(new Date())
const toDate = ref<Date>(new Date())

const casinoHistory = ref<any>([])
const initialHistory = ref<any>([])

const state = useState()

const filterCasinoRecordByDate = () => {
  state.setLoading()

  casinoHistory.value = initialHistory.value.filter((record: any) => {
    const { date } = record

    const isDate = isWithinInterval(new Date(date), {
      start: new Date(fromDate.value),
      end: new Date(toDate.value),
    })

    return isDate
  })

  if (isEmpty(casinoHistory.value)) {
    state.setNoData()
  } else {
    state.setIdle()
  }
}

const resetFilters = () => {
  fromDate.value = new Date()
  toDate.value = new Date()

  casinoHistory.value = initialHistory.value
  state.setIdle()
}

const fakeFetch = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(casinoHistoryData)
    }, 2000)
  })
}

Service.init()
  .onStart(state.setLoading)
  .method(() => fakeFetch())
  .onSuccess((res: any) => {
    casinoHistory.value = res
    initialHistory.value = res

    state.setIdle()
  })
  .onNoData(state.setNoData)
  .onError(() => {
    state.setError()
  })
  .execute()

const ticketWasAWin = computed(() => (winnings: string) => Number(winnings) > 0)
</script>

<template>
  <BettingsHistoryLayout
    @reset="resetFilters"
    @select="filterCasinoRecordByDate"
  >
    <template #filters>
      <BaseCalendarField
        class="w-full lg:w-44"
        label="FROM"
        v-model="fromDate"
      />
      <BaseCalendarField class="w-full lg:w-44" label="TO" v-model="toDate" />
    </template>

    <BaseState>
      <div
        class="grid grid-cols-[200px_1fr_100px] border-y font-bold border-coal-200 py-2 text-coal-300 px-2"
      >
        <p>Date</p>
        <p>Game</p>
        <p class="text-right">WIN, €</p>
      </div>

      <div class="divide-y divide-coal-200 last:border-coal-200 last:border-b">
        <div
          v-for="record in casinoHistory"
          :key="record.id"
          class="grid grid-cols-[200px_1fr_100px] px-2 py-2"
        >
          <p>{{ formatDate(record.date) }}</p>
          <p>{{ record.game }}</p>
          <p
            class="text-right"
            :class="{ 'text-green-300': ticketWasAWin(record.winnings) }"
          >
            {{ record.winnings }}
          </p>
        </div>
      </div>
    </BaseState>
  </BettingsHistoryLayout>
</template>
