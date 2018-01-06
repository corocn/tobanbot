export default function ({ store, redirect }) {
  // TODO: 非認証系のときにOFFる
  store.$axios.setHeader('Authorization', 'Bearer ' + store.getters.idToken)

  if (!store.getters.isAuthenticated) {
    return redirect('/auth/login')
  }
}
