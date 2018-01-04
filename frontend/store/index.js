import Vue from 'vue'
import Vuex from 'vuex'
import membersModule from '~/store/members'
import tasksModule from '~/store/tasks'
import taskModule from '~/store/task'
import sessionPath from '~/plugins/session_path'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    members: membersModule,
    tasks: tasksModule,
    task: taskModule
  },
  state: {
    user: null,
    assignations: []
  },
  getters: {
    user: state => state.user,
    assignations: state => {
      return state.assignations.map((p) => { return p }).reverse()
    }
  },
  mutations: {
    setCredential (state, { user }) {
      state.user = user
    }
  },
  actions: {
    async SET_CREDENTIAL ({ commit }) {
      const user = await this.$axios.$get('/v1/user')
      commit('setCredential', { user })
    },
    signIn () {
      window.location.href = sessionPath.signIn
    },
    signOut () {
      window.location.href = sessionPath.signOut
    }
    // INIT_ASSIGNATION: firebaseAction(({ bindFirebaseRef }) => {
    //   bindFirebaseRef('assignations', assignationsRef)
    // }),
    // ADD_ASSIGNATION: firebaseAction((ctx, { datetime, name, slackName, icon }) => {
    //   assignationsRef.push({
    //     datetime,
    //     name,
    //     slackName,
    //     icon
    //   })
    // }),
    // CLEAR_ASSIGNATION: firebaseAction((ctx) => {
    //   assignationsRef.remove()
    // }),
    // callAuth () {
    //   firebase.auth().signInWithRedirect(provider)
    // },
    // signOut () {
    //   firebase.auth().signOut()
    //   this.app.router.push('/')
    //   location.reload()
    // }
  }
})

export default store
