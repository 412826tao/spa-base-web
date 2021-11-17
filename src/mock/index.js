import Mock from 'mockjs'
import {
  login,
  logout,
  currentUserInfo
} from './login'

// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({
  timeout: 300
})
const BaseURL = process.env.VUE_APP_WEB_API
Mock.mock(BaseURL + '/api/user/login', 'post', login)
Mock.mock(BaseURL + '/api/user/logout', 'post', logout)
Mock.mock(BaseURL + '/api/user/current', 'get', currentUserInfo)
export default Mock
