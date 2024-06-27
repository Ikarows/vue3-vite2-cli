import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', {
  state: () => {
    return {
      token: '1221'
    }
  },

  getters: {},

  actions: {}
})
