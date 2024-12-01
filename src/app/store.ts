import { createStore, Store } from 'vuex'
import type { InjectionKey } from 'vue'
import type { Marker } from '@/entities/marker'
import type { QueryState } from '@/shared/lib/useQueryData'
import { I18nStore } from '@/shared/lib/i18n/i18nStore'

interface RootState {
  markers: BaseQueryState<Marker[]>
}

export const key: InjectionKey<Store<RootState>> = Symbol()

export const store = createStore({
  state: {
    cache: {},
    queryState: {},
  },
  actions: {
    commitQueryData(context, payload: { data: unknown; key: string }) {
      context.commit('setQueryData', payload)
    },
    commitInitialize(context, payload: { data: unknown; key: string }) {
      context.commit('initializeQueryState', payload)
    },
  },
  mutations: {
    setQueryData(state, payload: { data: unknown; key: string }) {
      state.cache[key] = payload.data
    },
    setQueryState(state, payload: { data: Partial<QueryState>; key: string }) {
      state.queryState[key] = payload.data
    },
    initializeQueryState(state, payload: { data: unknown; key: string }) {
      state.queryState[key] = payload
    },
  },
  modules: {
    i18n: I18nStore,
  },
})
