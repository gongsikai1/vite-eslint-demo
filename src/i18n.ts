import { createI18n } from 'vue-i18n'
import zh from './locales/zh.json'
import en from './locales/en.json'

const helloworld = 'hello world';

const i18n = createI18n({
    legacy: false, // 若使用 Vue 3，则设为 false
    locale: 'zh', // 默认语言
    fallbackLocale: 'zh', // 回退语言
    messages: {
        zh,
        en
    }
})

export default i18n