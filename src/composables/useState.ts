import { computed, inject, provide, reactive, ref, watch } from 'vue'

type State = 'IDLE' | 'LOADING' | 'ERROR' | 'NO_DATA'

type StateMap = {
  [state in State]: string
}

const STATES: StateMap = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  NO_DATA: 'NO_DATA',
}

export const useState = (injectKey: string = 'state') => {
  const state = ref<string>(STATES.IDLE)

  const setState = (value: string) => {
    state.value = value
  }

  const setLoading = () => setState(STATES.LOADING)

  const setError = () => setState(STATES.ERROR)

  const setIdle = () => setState(STATES.IDLE)

  const setNoData = () => setState(STATES.NO_DATA)

  provide(injectKey, state)

  return reactive({
    state,
    stateIsError: computed(() => state.value === STATES.ERROR),
    stateIsLoading: computed(() => state.value === STATES.LOADING),
    stateIsIdle: computed(() => state.value === STATES.IDLE),
    stateIsNoData: computed(() => state.value === STATES.NO_DATA),
    setLoading,
    setError,
    setIdle,
    setNoData,
  })
}

export const injectState = (injectKey: string = 'state') => {
  const state: any = inject(injectKey)

  return {
    stateIsError: computed(() => state.value === STATES.ERROR),
    stateIsLoading: computed(() => state.value === STATES.LOADING),
    stateIsIdle: computed(() => state.value === STATES.IDLE),
    stateIsNoData: computed(() => state.value === STATES.NO_DATA),
  }
}
