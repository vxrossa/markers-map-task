import { useStore } from 'vuex'
import { key } from '@/app/store'
import { onMounted } from 'vue'

export interface UseQueryDataHookOpts {
  key: string
  queryFn: <T>() => Promise<T>
}

export interface QueryState {
  isLoading: boolean
  isError: boolean
  isFetched: boolean
  _initialized: boolean
}

export const useQueryData = (opts: UseQueryDataHookOpts) => {
  const store = useStore(key)

  onMounted(() => {
    if (!store.state.queryStates[opts.key]?._initialized) {
      store.commit('initializeQueryState', opts.key)
    }
    opts.queryFn().then((data) => {
      store.dispatch('commitQueryData', { key: opts.key, data })
    })
  })

  return {
    data: store.state.cache[opts.key],
  }
}

export interface UseQueryMutationHookOpts {
  mutationFn: <T, U>(data: U) => Promise<T>
  key: string
}

export const useQueryMutation = (opts: UseQueryMutationHookOpts) => {
  const store = useStore(key)

  const mutate = (data) => {
    opts.mutationFn(data).then((res) => {
      store.commit('setQueryData', { key: opts.key, data: res })
    })
  }

  return {
    mutate,
  }
}
