import { dictionaries, type DictionaryDefinition } from './dictionaries'
import { useStore } from 'vuex'
import { key } from '@/app/store'

export const useTranslation = () => {
  const store = useStore(key)

  return (key: DictionaryDefinition) => {
    return dictionaries[store.state.i18n.language][key]
  }
}
