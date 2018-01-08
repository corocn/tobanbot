import Vue from 'vue'
import Vuex from 'vuex'
import authModule from '~/store/auth'
import membersModule from '~/store/members'
import tasksModule from '~/store/tasks'
import taskModule from '~/store/task'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    auth: authModule,
    members: membersModule,
    tasks: tasksModule,
    task: taskModule
  },
  getters: {},
  mutations: {},
  actions: {
    async ping () {
      const user = await this.$axios.$get('/v1/user')
      console.log(user)
    }
  }
})

export default store
