import Vue from 'vue'
import Vuex from 'vuex'
import membersModule from '~/store/members'
import tasksModule from '~/store/tasks'
import taskModule from '~/store/task'
import { isAuthenticated, getIdToken, getAccessToken, getUser } from '~/utils/auth'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    members: membersModule,
    tasks: tasksModule,
    task: taskModule
  },
  getters: {
    user: () => getUser(),
    isAuthenticated: () => { return isAuthenticated() },
    idToken: () => getIdToken(),
    accessToken: () => getAccessToken()
  },
  mutations: {},
  actions: {
    async ping () {
      const user = await this.$axios.$get('/v1/user')
      console.log(user)
    }
  }
})

export default store
