import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { TODO_LIST } from './provider'

const app = createApp(App)

app.use(router)

app.provide(TODO_LIST, [])

app.mount('#app')
