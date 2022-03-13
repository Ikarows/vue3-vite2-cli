/**
 * axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios'
import router from '../router'
import store from '../store'

// 请求超时时间
axios.defaults.timeout = 10000 // 10s

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 请求拦截器
axios.interceptors.request.use(
  config => {
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const token = store.state.index.token
    token && (config.headers.Authorization = token)
    return config
  },
  error => {
    return Promise.error(error)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      // 登录失效拦截
      if (response.data.code === -1 || response.data.code === '-1') {
        //Notify(response.data.message ? response.data.message : '登录失效，请重新登录')
        // 清除token
        //store.commit('LOGOUT')
        router.replace({
          path: '/login',
          query: {
            redirect: router.currentRoute.fullPath
          }
        })
      } else if (response.data.code === 10001 || response.data.code === '10001') {
        // 非经纪人访问直接回到普通角色首页
        // Notify(response.data.message)
        router.replace({
          path: '/home',
          query: {
            redirect: router.currentRoute.fullPath
          }
        })
      }
      /* else if (response.data.code === 80001 || response.data.code === '80001') {
             // 是否开通权益卡
             Dialog.alert({
               title: '提示',
               message: response.data.message,
               theme: 'round-button',
               showCancelButton: true,
               confirmButtonText: '去申请'
             }).then(() => {
               router.push({ path: '/user/equityCard' })
             }).catch(() => {
               router.go(-1)
             })
           }*/
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  // 服务器状态码不是200的情况
  error => {
    if (error.response.status) {
      return Promise.reject(error.response)
    }
  }
)

// 路由拦截
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  // 是否需要登录
  /*if (to.meta.isGetLogin) {
    store.dispatch('profile', true) // 获取最新用户信息
  } else {
    if (localStorage.token && localStorage.token !== undefined) {
      store.dispatch('profile', true) // 获取用户信息
    }
  }*/
  next()
})
