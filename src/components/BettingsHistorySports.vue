<script setup lang="ts" name="BettingsHistorySports">
import isWithinInterval from 'date-fns/isWithinInterval'
import { useState } from '../composables/useState'
import { Service } from '../classes/Service'
import { ref } from 'vue'

import { BET_STATUS, IBetHistory } from '../../constants'
import { bettingHistoryData } from '../mocks/mocks'
import { isEmpty } from '../utils/utils'

import BetttingsHistorySportsListMobile from './BetttingsHistorySportsListMobile.vue'
import BettingsHistorySportsList from './BettingsHistorySportsList.vue'
import BettingsHistoryLayout from './BettingsHistoryLayout.vue'
import BaseCalendarField from './BaseCalendarField.vue'
import BaseDropdownField from './BaseDropdownField.vue'
import BaseState from './BaseState.vue'

const TYPE_OPTIONS: string[] = ['SINGLE', 'MULTIPLE']

const STATUS_OPTIONS: string[] = [
  BET_STATUS.OPENED,
  BET_STATUS.LOST,
  BET_STATUS.WON,
]

const selectedType = ref<string>(TYPE_OPTIONS[0])
const selectedStatus = ref<string>(STATUS_OPTIONS[0])
const fromDate = ref<Date>(new Date())
const toDate = ref<Date>(new Date())

const state = useState()
const initialBettingData = ref<IBetHistory[]>([])
const bettingHistory = ref<IBetHistory[]>([])

const filterBetHistoryRecords = () => {
  state.setLoading()

  bettingHistory.value = initialBettingData.value.filter(
    (record: IBetHistory) => {
      const { type, status, date } = record

      const isType = type.type === selectedType.value
      const isStatus = status.type === selectedStatus.value

      const isDate = isWithinInterval(new Date(date), {
        start: new Date(fromDate.value),
        end: new Date(toDate.value),
      })

      return isType && isStatus && isDate
    }
  )

  if (isEmpty(bettingHistory.value)) {
    state.setNoData()
  } else {
    state.setIdle()
  }
}

const resetFilters = () => {
  selectedType.value = TYPE_OPTIONS[0]
  selectedStatus.value = STATUS_OPTIONS[0]

  fromDate.value = new Date()
  toDate.value = new Date()

  bettingHistory.value = initialBettingData.value

  state.setIdle()
}

const fakeFetch = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(bettingHistoryData)
    }, 2000)
  })
}

Service.init()
  .onStart(state.setLoading)
  .method(() => fakeFetch())
  .onSuccess((res: any) => {
    initialBettingData.value = res
    bettingHistory.value = res

    state.setIdle()
  })
  .onNoData(state.setNoData)
  .onError(() => {
    state.setError()
  })
  .execute()
</script>

<template>
  <BettingsHistoryLayout
    @reset="resetFilters"
    @select="filterBetHistoryRecords"
  >
    <template #filters>
      <BaseDropdownField
        class="w-full lg:w-44"
        label="TYPE"
        v-model="selectedType"
        :options="TYPE_OPTIONS"
        :value="selectedType"
      />
      <BaseDropdownField
        class="w-full lg:w-44"
        label="STATUS"
        v-model="selectedStatus"
        :options="STATUS_OPTIONS"
        :value="selectedStatus"
      />

      <BaseCalendarField
        class="w-full lg:w-44"
        label="FROM"
        v-model="fromDate"
      />
      <BaseCalendarField class="w-full lg:w-44" label="TO" v-model="toDate" />
    </template>

    <BaseState>
      <div class="hidden lg:flex flex-col">
        <BettingsHistorySportsList :bettingHistory="bettingHistory" />
      </div>

      <div class="flex lg:hidden">
        <BetttingsHistorySportsListMobile :bettingHistory="bettingHistory" />
      </div>
    </BaseState>
  </BettingsHistoryLayout>
</template>
