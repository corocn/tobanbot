export default function ({ store, redirect }) {
  store.$axios.setHeader('Authorization', 'Bearer ' + store.getters.idToken)

  if (!store.getters.isAuthenticated) {
    store.$axios.setHeader('Authorization', '')
    return redirect('/auth/login')
  }
}
