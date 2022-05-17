import axios from 'axios'
import { API_CODE } from '../types/axios'
import { userStore } from '../store/userStore'

const api = axios.create({
  baseURL: '',
  timeout: 10000,
})

// request
api.interceptors.request.use(
  (config) => {
    const token = getToken()
    config.headers.common.Token = token
    return config
  },
  (error) => Promise.reject(error),
)

// response
api.interceptors.response.use(
  async (response) => {
    const code = response?.data?.code
    // 401001 token过期
    if (code === API_CODE.USER_NO_AUTH) {
      const user = userStore()
      // token 过期提示并自动退出登录
      user.del()
      window.vueApp.$toast.removeAllGroups()
      window.vueApp.$toast.add({
        summary: '登录信息已过期，请重新登录',
        severity: 'error',
        life: 3000,
        group: 'XK_GLOBAL_TOAST',
        closeCallback: () => {
          location.href = '/'
        },
      })
    } else if (code === API_CODE.No_Permission || code === API_CODE.No_Record) {
      location.href = `/error/${code}`
    }
    return response?.data
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default api
