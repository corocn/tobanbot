import firebase from 'frontend/plugins/firebase'
import config from '~/.env.firebase.js'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
