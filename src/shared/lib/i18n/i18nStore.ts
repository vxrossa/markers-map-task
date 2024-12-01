import { createStore } from 'vuex'

export interface I18nState {
  language: 'ru' | 'en'
}

export const I18nStore = createStore<I18nState>({
  state: {
    language: 'ru',
  },
  actions: {
    switchLanguage(context) {
      context.commit('setLanguage')
    },
  },
  mutations: {
    setLanguage(state) {
      if (state.language === 'ru') {
        state.language = 'en'
      } else {
        state.language = 'ru'
      }
    },
  },
})
