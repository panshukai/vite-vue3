import { createI18n } from 'vue-i18n' //引入vue-i18n组件
import messages from './index.js'

const i18n = createI18n({
  locale: localStorage.getItem('lang') || "en",
  fallbackLocale: 'zh',
  globalInjection:true,
  legacy: false, // you must specify 'legacy: false' option
  messages,
});

export default i18n