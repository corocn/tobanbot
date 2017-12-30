import firebase from '~/plugins/firebase'
import { firebaseAction } from 'vuexfire'
const db = firebase.database()
const ref = db.ref('/members')

export default {
  state: {
    lists: []
  },
  getters: {
    members: state => {
      return state.lists.map((p) => { return p })
    }
  },
  actions: {
    BIND_MEMBERS: firebaseAction(({ bindFirebaseRef }) => {
      bindFirebaseRef('lists', ref)
    }),
    CREATE_MEMBER: firebaseAction((ctx, { name, email }) => {
      ref.push({ name, email })
    }),
    UPDATE_MEMBER: firebaseAction((ctx, member) => {
      let key = member['.key']
      ref.child(key).update({
        name: member.name,
        email: member.email
      })
    }),
    DELETE_MEMBER: firebaseAction((ctx, key) => {
      ref.child(key).remove()
    })
  }
}
