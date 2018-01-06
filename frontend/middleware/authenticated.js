export default function ({ store, redirect }) {
  store.$axios.setHeader('Authorization', 'Bearer ' + store.getters.idToken)

  if (!store.getters.isAuthenticated) {
    return redirect('/auth/login')
  }
}
