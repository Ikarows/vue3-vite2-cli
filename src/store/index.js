import {createStore} from 'vuex'

export default createStore({
  //数据存储属性
  state: {
    num: 0
  },
  //方法属性
  mutations: {
    ADDNUM(state, params) {
      state.num += params.num
    }
  },
  //异步属性
  actions: {
    actAddNum({commit}, params) {
      setTimeout(() => {
        commit('ADDNUM', params)
      }, 1000)
    }
  },
  //计算属性
  getters: {
    getAddNum(state) {
      return (state.num += 20)
    }
  }
})
