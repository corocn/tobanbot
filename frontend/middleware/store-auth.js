import { getIdToken } from '~/utils/auth'

export default function ({store}) {
  if (!store.getters.isAuthLoaded) {
    store.dispatch('RELOAD_AUTH')
  }

  const idToken = getIdToken()
  if (idToken) {
    store.$axios.setHeader('Authorization', 'Bearer ' + idToken)
  } else {
    store.$axios.setHeader('Authorization', '')
  }
}
