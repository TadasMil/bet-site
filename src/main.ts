import './assets/index.css'
import 'v-calendar/dist/style.css'

import { createApp } from 'vue'
import VCalendar from 'v-calendar'
import router from './router'
import App from './App.vue'

createApp(App).use(router).use(VCalendar).mount('#app')
