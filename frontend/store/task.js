export default {
  state: {
    task: null
  },
  getters: {
    task: state => Object.assign({}, state.task)
  },
  actions: {
    // BIND_TASK: firebaseAction(({ bindFirebaseRef }, key) => {
    //   bindFirebaseRef('task', db.ref('/tasks/' + key))
    // })
  }
}
