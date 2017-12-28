import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '~/plugins/firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'
const db = firebase.database()
const postsRef = db.ref('/posts')
const provider = new firebase.auth.GoogleAuthProvider()

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    user: null,
    posts: []
  },
  getters: {
    user: state => state.user,
    posts: state => {
      return state.posts.map((p) => { return p }).reverse()
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
      bindFirebaseRef('users', postsRef)
    }),
    INIT_POSTS: firebaseAction(({ bindFirebaseRef }) => {
      bindFirebaseRef('posts', postsRef)
    }),
    ADD_POST: firebaseAction((ctx, { name, icon, body }) => {
      postsRef.push({
        name,
        icon,
        body
      })
    }),
    CLEAR_POSTS: firebaseAction((ctx) => {
      postsRef.remove()
    }),
    callAuth () {
      firebase.auth().signInWithRedirect(provider)
    }
  }
})

export default store
