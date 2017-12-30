import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '~/plugins/firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'
const db = firebase.database()
const assignationsRef = db.ref('/assignations')
const membersRef = db.ref('/members')
const provider = new firebase.auth.GoogleAuthProvider()

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    user: null,
    members: [],
    assignations: []
  },
  getters: {
    user: state => state.user,
    assignations: state => {
      return state.assignations.map((p) => { return p }).reverse()
    },
    members: state => {
      return state.members.map((p) => { return p })
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
    INIT_MEMBERS: firebaseAction(({ bindFirebaseRef }) => {
      bindFirebaseRef('members', membersRef)
    }),
    ADD_MEMBER: firebaseAction((ctx, { name, email }) => {
      membersRef.push({ name, email })
    }),
    DELETE_MEMBER: firebaseAction((ctx, key) => {
      membersRef.child(key).remove()
    }),
    callAuth () {
      firebase.auth().signInWithRedirect(provider)
    }
  }
})

export default store
