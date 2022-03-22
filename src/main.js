import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './router/index.js'
import i18n from './language/i18n.js'
import interfaces from './interfaces/index.js'

import './assets/styles/reset.css'
import './assets/styles/theme.css'
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

const app = createApp(App)
app.config.globalProperties.$interfaces = interfaces;
app.use(i18n).use(router).mount('#app')
