import 'vuetify/styles'

// import { config as vueconfig } from '@vue/test-utils'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from '@/app/router'
import App from '@/app/App.vue'
import { key, store } from '@/app/store'

const vuetify = createVuetify({
  components,
  directives,
})

// vueconfig.global.plugins.push(vuetify)

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(store, key)

app.mount('#app')
