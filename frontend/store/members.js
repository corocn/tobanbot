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
    async CREATE_MEMBER ({dispatch}, { name, email }) {
      await this.$axios.$post('/v1/members', {name, email})
      await dispatch('FETCH_MEMBERS')
    },
    async DELETE_MEMBER ({dispatch}, { id }) {
      await this.$axios.$delete('/v1/members/' + id)
      await dispatch('FETCH_MEMBERS')
    }

    // UPDATE_MEMBER: firebaseAction((ctx, member) => {
    //   let key = member['.key']
    //   ref.child(key).update({
    //     name: member.name,
    //     email: member.email
    //   })
    // }),

  }
}
