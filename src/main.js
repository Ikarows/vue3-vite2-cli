import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
//import store from './store' // 引入 vuex
import './config/http'
import './utils/rem.js'
import './index.css'
import 'vant/lib/index.css'
import './assets/css/base.scss'

const pinia = createPinia()
const app = createApp(App)

import { Button } from 'vant'

app.use(pinia)
app.use(router)
app.use(Button)
app.mount('#app')
