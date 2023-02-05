import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Timeline } from 'vue3-visjs'

const app = createApp(App)

app.use(Timeline)

app.mount('#app')
