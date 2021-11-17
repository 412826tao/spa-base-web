import axios from 'axios'
import config from '../config/index'
import { getToken, setToken } from '@/utils/common'
const { WEB_API } = config
export const TOKEN_KEY = 'CLIENT_TOKEN'
const baseUrl = WEB_API || ''
// 创建一个独立的axios实例
const service = axios.create({
  baseURL: baseUrl,
  // 定义统一的请求头部
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
  // 配置请求超时时间
  timeout: 60000
  // 如果用的JSONP，可以配置此参数带上cookie凭证，如果是代理和CORS不用设置
  // withCredentials: true
})

service.interceptors.request.use(config => {
  const token = getToken()
  if (token) {
    config.headers['exchange-token'] = token
  }
  config.headers.Accept = 'application/json'
  config.headers['Content-Type'] = 'application/json; charset=utf-8'
  if (config.type === 'download') {
    config.responseType = 'arraybuffer'
  }
  return config
}, err => {
  return Promise.reject(err)
})

service.interceptors.response.use(
  (response) => {
    // 关于文件下载的处理
    if (response.config.type === 'download') {
      const contentType = response.headers['content-type']
      const disposition = response.headers['content-disposition']
      let fileName = response.config.downloadName
      if (disposition) {
        if (disposition.split('fileName=').length > 1) {
          const name = disposition.split('fileName=')[1].replace(/"/g, '')
          if (name) {
            fileName = decodeURI(name)
          }
        }
      }
      const blob = new Blob([response.data], { type: contentType })
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = fileName
      link.click()
      window.URL.revokeObjectURL(link.href)
      return response
    } else {
      const { data } = response
      if (data.code === 0) {
        return data
      } else {
        return Promise.reject(data)
      }
    }
  }, (error) => {
    if (error.response && error.response.status === 401) {
      setToken('')
    }
    return Promise.reject(error.response)
  }
)

export default service
