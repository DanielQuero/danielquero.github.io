import 'reflect-metadata'
import './ui/assets/styles/main.sass'

import { createApp } from 'vue'
import App from './ui/app/App.vue'
import router from './ui/router'

import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App)
app.use(MotionPlugin)
app.use(router)

app.mount('#app')
