import firebase from '~/plugins/firebase'
import { firebaseAction } from 'vuexfire'
const db = firebase.database()
const membersRef = db.ref('/members')

export default {
  state: {
    members: []
  },
  getters: {
    members: state => {
      return state.members.map((p) => { return p })
    }
  },
  actions: {
    BIND_MEMBERS: firebaseAction(({ bindFirebaseRef }) => {
      bindFirebaseRef('members', membersRef)
    }),
    CREATE_MEMBER: firebaseAction((ctx, { name, email }) => {
      membersRef.push({ name, email })
    }),
    UPDATE_MEMBER: firebaseAction((ctx, member) => {
      let key = member['.key']
      membersRef.child(key).update({
        name: member.name,
        email: member.email
      })
    }),
    DELETE_MEMBER: firebaseAction((ctx, key) => {
      membersRef.child(key).remove()
    })
  }
}
