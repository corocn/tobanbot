import { isAuthenticated, getUser } from '~/utils/auth'

export default {
  state: {
    user: null,
    isAuthenticated: false,
    isLoaded: false
  },
  getters: {
    user: state => state.user,
    isAuthenticated: state => state.isAuthenticated,
    isAuthLoaded: state => state.isAuthLoaded
  },
  mutations: {
    reload (state) {
      state.user = getUser()
      state.isAuthenticated = isAuthenticated()
      state.isLoaded = true
    }
  },
  actions: {
    RELOAD_AUTH ({commit}) {
      commit('reload')
    }
  }
}
