import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    page: 'welcome',
    roleIndex: 0
  },
  mutations: {
    setPage(state, page) {
      state.page = page
    },
    setRoleIndex(state, index) {
      state.roleIndex = index
    }
  }
})