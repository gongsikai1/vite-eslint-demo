// 在文件最顶部添加
window.global = window

import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/font.css'

import VueQrcode from 'vue-qrcode';

import VueLazyload from 'vue-lazyload';

import App from './App.vue'
import router from './router'
// import store from './store/index.ts'
import store from './store'

import i18n from './i18n'

import Config from './config/index'

const app = createApp(App)

app.component('qrcode', VueQrcode)

app.use(ElementPlus)
app.use(router)
app.use(store)
app.use(i18n)

app.mount('#app')
