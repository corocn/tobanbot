export default {
  state: {
    lists: []
  },
  getters: {
    tasks: state => {
      return state.lists.map((v) => { return v })
    }
  },
  mutations: {
    FETCH_TASKS (state, payload) {
      state.lists = payload
    }
  },
  actions: {
    async FETCH_TASKS ({commit}) {
      const tasks = await this.$axios.$get('/v1/tasks')
      commit('FETCH_TASKS', tasks)
    },
    async CREATE_TASK ({dispatch}) {
      await this.$axios.$post('/v1/tasks')
      dispatch('FETCH_TASKS')
    },
    async DELETE_TASK ({dispatch}, {id}) {
      await this.$axios.$delete('/v1/tasks/' + id)
      dispatch('FETCH_TASKS')
    }
    // async UPDATE_TASK ({dispatch}, task) {
    //   await this.$axios.$put('/v1/members/' + member.id, task)
    //   dispatch('FETCH_MEMBERS')
    // }
  }
}
