import firebase from '~/plugins/firebase'
import { firebaseAction } from 'vuexfire'
const db = firebase.database()
const ref = db.ref('/tasks')

export default {
  state: {
    list: []
  },
  getters: {
    tasks: state => {
      return state.list.map((p) => { return p })
    }
  },
  actions: {
    BIND_TASKS: firebaseAction(({ bindFirebaseRef }) => {
      bindFirebaseRef('list', ref)
    }),
    CREATE_TASK: firebaseAction((ctx, { title, description }) => {
      ref.push({ title, description })
    }),
    DELETE_TASK: firebaseAction((ctx, key) => {
      ref.child(key).remove()
    })
  }
}
