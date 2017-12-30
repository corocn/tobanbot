import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '~/plugins/firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'
import membersModule from '~/store/members'
import tasksModule from '~/store/tasks'
const db = firebase.database()
const assignationsRef = db.ref('/assignations')
const provider = new firebase.auth.GoogleAuthProvider()

Vue.use(Vuex)

console.log(firebaseMutations)

const store = () => new Vuex.Store({
  modules: {
    members: membersModule,
    tasks: tasksModule
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
    },
    ...firebaseMutations
  },
  actions: {
    async SET_CREDENTIAL ({commit}, { user }) {
      if (!user) return
      commit('setCredential', { user })
    },
    INIT_ASSIGNATION: firebaseAction(({ bindFirebaseRef }) => {
      bindFirebaseRef('assignations', assignationsRef)
    }),
    ADD_ASSIGNATION: firebaseAction((ctx, { datetime, name, slackName, icon }) => {
      assignationsRef.push({
        datetime,
        name,
        slackName,
        icon
      })
    }),
    CLEAR_ASSIGNATION: firebaseAction((ctx) => {
      assignationsRef.remove()
    }),
    callAuth () {
      firebase.auth().signInWithRedirect(provider)
    },
    signOut () {
      firebase.auth().signOut()
      this.app.router.push('/')
      location.reload()
    }
  }
})

export default store
