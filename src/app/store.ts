import { createStore, Store } from 'vuex'
import type { InjectionKey } from 'vue'
import type { MarkerQueryData, MarkerQueryKey } from '@/entities/marker'
import type { QueryState } from '@/shared/lib/useQueryData'

type CacheKeys = MarkerQueryKey

export interface State {
  cache: MarkerQueryData
  queryStates: Record<CacheKeys, QueryState>
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    cache: {},
    queryStates: {},
  },
  actions: {
    commitQueryData(context, payload: { key: string; data: unknown }) {
      context.commit('setQueryData', payload)
    },
    commitQueryInit(context, payload: string) {
      context.commit('initializeQueryState', payload)
    },
  },
  mutations: {
    setQueryData(state, payload: { key: string; data: unknown }) {
      state.cache[payload.key] = payload.data
    },
    initializeQueryState(state, key: string) {
      state.queryStates[key] = {
        isLoading: false,
        isFetched: false,
        isError: false,
        _initialized: true,
      }
    },
    setQueryState(state, payload: { key: string; data: QueryState }) {
      state.queryStates[payload.key] = data
    },
  },
})
