import axios from 'axios'
import QS from 'qs'
// import store from '@/store'
const prefix = '' //'/api.php'
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(prefix + url, {
        params: params
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  //store.commit('SET_LOADING', true)
  return new Promise((resolve, reject) => {
    axios
      .post(prefix + url, QS.stringify(params))
      .then(res => {
        resolve(res.data)
        //store.commit('SET_LOADING', false)
      })
      .catch(err => {
        reject(err.data)
        //store.commit('SET_LOADING', false)
      })
  })
}
