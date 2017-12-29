import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '~/plugins/firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'
const db = firebase.database()
const assignationsRef = db.ref('/assignations')
const provider = new firebase.auth.GoogleAuthProvider()

Vue.use(Vuex)

const store = () => new Vuex.Store({
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
    INIT_USERS: firebaseAction(({ bindFirebaseRef }) => {
      bindFirebaseRef('users', assignationsRef)
    }),
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
    }
  }
})

export default store
