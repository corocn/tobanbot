import firebase from 'firebase'
import config from '~/.env.firebase.js'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
