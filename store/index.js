import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '~/plugins/firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'
const db = firebase.database()
const postsRef = db.ref('/posts')

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    ...firebaseMutations
  },
  actions: {
    INIT_POSTS: firebaseAction(({ bindFirebaseRef }) => {
      bindFirebaseRef('posts', postsRef)
    }),
    ADD_POST: firebaseAction((ctx, { email, body }) => {
      postsRef.push({
        from: email,
        body
      })
    })
  }
})

export default store
