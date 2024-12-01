import { createStore, Store } from 'vuex'
import type { InjectionKey } from 'vue'
import type { QueryState } from '@/shared/lib/useQueryData'

interface QueryState {
  isFetched: boolean
  isLoading: boolean
  isError: boolean
  isInitialized: boolean
}

interface RootState {
  cache: Record<string, unknown>
  queryState: Record<string, QueryState>
}

export const key: InjectionKey<Store<RootState>> = Symbol()

/**
 * This is an entrypoint for a store that uses composables for backend queries and caches the data
 * for future use. Also take a look at the shared/lib/useQueryData composables for more info.
 *
 * Lifecycle is:
 * - When first created, the cache is an empty object as well as the query state.
 * - Each query must include a key, when calling a composable an initial queryState is created and cache is
 * first loaded from a request.
 *
 * - The query won't be called twice. Instead, if the key is the same, data is taken from the cache.
 */
export const store = createStore({
  state: {
    cache: {},
    queryState: {},
  },
  actions: {
    commitQueryData(context, payload: { data: unknown; key: string }) {
      context.commit('setQueryData', payload)
    },
    commitInitialize(context, payload: { key: string }) {
      context.commit('initializeQueryState', payload)
    },
    commitQueryState(context, payload: { key: string; data: QueryState }) {
      context.commit('setQueryState', payload)
    },
  },
  mutations: {
    setQueryData(state, payload: { data: unknown; key: string }) {
      state.cache[payload.key] = payload.data
    },
    setQueryState(state, payload: { data: Partial<QueryState>; key: string }) {
      Object.entries(payload.data).forEach(([key, value]) => {
        if (typeof value === 'boolean') {
          state.queryState[payload.key][key] = value
        }
      })
    },
    initializeQueryState(state, payload: { key: string }) {
      state.queryState[payload.key] = {
        isInitialized: true,
        isFetched: false,
        isLoading: false,
        isError: false,
      }
    },
  },
  /**
   * This is a module designed to hold app-wide language data. Take a look at shared/lib/i18n composables
   * and dictionaries for more info.
   */
  modules: {
    i18n: {
      namespaced: true,
      state: {
        language: 'ru',
      },
      mutations: {
        setLanguage(state) {
          if (state.language === 'en') {
            state.language = 'ru'
          } else {
            state.language = 'en'
          }
        },
      },
      actions: {
        switchLanguage(context) {
          context.commit('setLanguage')
        },
      },
    },
  },
})
