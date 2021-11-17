import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
import ViewUI from 'view-design'
import { setToken, getToken, setTitle } from '@/utils/common'

const baseRoute = process.env.VUE_APP_BASE_URL
Vue.use(Router)

// vue router.push() 返回了一个promise,如果push后再重定向会引发 push的error，报错：via a navigation guard
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(() => {
    ViewUI.LoadingBar.finish()
  })
}

const router = new Router({
  routes,
  base: baseRoute,
  mode: 'history'
})
const LOGIN_PAGE_NAME = 'login'
// const LOGIN_PAGE_NAME = 'homeIndex'
// const LOGIN_HOME = 'http://localhost:8001/nz-institution/notarization/index'
const WHITE_LIST = ['login', 'test', 'test2', 'error_401']

router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.start()

  const token = getToken()
  if (WHITE_LIST.includes(to.name)) {
    // 未登录且要跳转的页面不是登录页
    next()
  } else {
    if (!token) {
      next({ name: LOGIN_PAGE_NAME })
    } else {
      if (store.state.user.hasGetInfo) {
        next()
      } else {
        store.dispatch('getUserInfo').then(res => {
          next()
        }).catch(() => {
          console.log(333)
          setToken('')
          next({
            name: LOGIN_PAGE_NAME
          })
        })
      }
    }
  }
})

router.afterEach(to => {
  setTitle(to)
  ViewUI.LoadingBar.finish()
  window.scrollTo(0, 0)
})
export default router
