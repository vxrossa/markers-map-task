import { useStore } from 'vuex'
import { key } from '@/app/store'
import { computed, onMounted } from 'vue'

export interface UseQueryDataHookOpts {
  key: string
  queryFn: <T>() => Promise<T>
}

export const useQueryData = <D = unknown>(opts: UseQueryDataHookOpts) => {
  const store = useStore(key)

  onMounted(() => {
    if (!store.state.queryState[opts.key]?.isInitialized) {
      store.commit('initializeQueryState', { key: opts.key })
    }

    if (!store.state.queryState[opts.key]?.isFetched) {
      store.dispatch('commitQueryState', {
        data: {
          isLoading: true,
          isFetched: false,
        },
        key: opts.key,
      })
      opts.queryFn().then((data) => {
        store.dispatch('commitQueryData', { key: opts.key, data })
        store.dispatch('commitQueryState', {
          data: {
            isLoading: false,
            isFetched: true,
          },
          key: opts.key,
        })
      })
    }
  })

  const dataFromCache = computed(() => store.state.cache[opts.key] as D | null)

  return {
    data: dataFromCache,
  }
}

export interface UseQueryMutationHookOpts<T, U> {
  mutationFn: (data: U) => Promise<T>
  key: string
  invalidate?: boolean
}

export const useQueryMutation = <T, U>(opts: UseQueryMutationHookOpts<T, U>) => {
  const store = useStore(key)

  const mutate = (data: U) => {
    opts.mutationFn(data).then((res: T) => {
      store.commit('setQueryData', { key: opts.key, data: res })
    })
  }

  return {
    mutate,
  }
}
