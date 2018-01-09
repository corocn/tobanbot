export default {
  state: {
    lists: []
  },
  getters: {
    members: state => {
      return state.lists.map((v) => { return v })
    }
  },
  mutations: {
    FETCH_MEMBERS (state, payload) {
      state.lists = payload
    }
  },
  actions: {
    async FETCH_MEMBERS ({commit}) {
      const members = await this.$axios.$get('/v1/members')
      commit('FETCH_MEMBERS', members)
    },
    async CREATE_MEMBER ({dispatch}, {name, email}) {
      await this.$axios.$post('/v1/members', {name, email})
      dispatch('FETCH_MEMBERS')
    },
    async DELETE_MEMBER ({dispatch}, {id}) {
      await this.$axios.$delete('/v1/members/' + id)
      dispatch('FETCH_MEMBERS')
    },
    async UPDATE_MEMBER ({dispatch}, member) {
      await this.$axios.$put('/v1/members/' + member.id, member)
      dispatch('FETCH_MEMBERS')
    }
  }
}
