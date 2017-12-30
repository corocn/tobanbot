import firebase from '~/plugins/firebase'
import { firebaseAction } from 'vuexfire'
const db = firebase.database()

export default {
  state: {
    task: null
  },
  getters: {
    task: state => Object.assign({}, state.task)
  },
  actions: {
    BIND_TASK: firebaseAction(({ bindFirebaseRef }, key) => {
      bindFirebaseRef('task', db.ref('/tasks/' + key))
    })
  }
}
