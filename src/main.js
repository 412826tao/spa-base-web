import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import config from '@/config'
import '@/plugin'
import 'view-design/dist/styles/iview.css'
import './style/iview.less'
import './style/index.scss'
import date from '@/utils/date'

// 实际打包时应该不引入mock
/* eslint-disable */
if (process.env.NODE_ENV !== 'production') require('@/mock')

Vue.use(ViewUI)

Vue.prototype.$date = date

/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
