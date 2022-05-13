import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' // 引入 vuex
import './config/http'
import './index.css'
import 'vant/lib/index.css'

const app = createApp(App)

import { Button } from 'vant'

app.use(router)
app.use(store)
app.use(Button)
app.mount('#app')
