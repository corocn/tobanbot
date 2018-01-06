import Vue from 'vue'
import Vuex from 'vuex'
import membersModule from '~/store/members'
import tasksModule from '~/store/tasks'
import taskModule from '~/store/task'
import { show, isAuthenticated, idToken, accessToken } from '~/utils/auth'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    members: membersModule,
    tasks: tasksModule,
    task: taskModule
  },
  state: {
    user: null,
    authenticated: false
  },
  getters: {
    user: state => state.user,
    isAuthenticated: () => isAuthenticated(),
    idToken: () => idToken(),
    accessToken: () => accessToken()
  },
  mutations: {
    setCredential (state, { user }) {
      state.user = user
    }
  },
  actions: {
    RELOAD_AUTH ({ commit }) {
      // this.$axios.setHeader('Authorization', 'Bearer ' + auth.idToken())
    },
    HANDLE_CALLBACK () {
      // auth.handleAuthentication(this.app.router)
    },
    login () {
      // auth.login()
      show('auth0-lock')
    },
    logout ({ dispatch }) {
      // auth.logout()
      dispatch('RELOAD_AUTH')
    },
    async ping () {
      const user = await this.$axios.$get('/v1/user')
      console.log(user)
    },
    async SET_CREDENTIAL ({ commit }) {
      const user = await this.$axios.$get('/v1/user')
      commit('setCredential', { user })
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
