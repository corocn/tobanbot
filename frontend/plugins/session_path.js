const path = {
  signIn: '/users/auth/google',
  signOut: '/users/sign_out'
}

if (process.env.NODE_ENV !== 'production') {
  const base = 'http://localhost:3000'

  path.signIn = base + path.signIn
  path.signOut = base + path.signOut
}

export default path
