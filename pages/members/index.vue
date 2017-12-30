<template>
  <section class="container">
    <div>
      <h1 class="title is-1">
        Members
      </h1>

      <div>
        <div>
          <input type="text" v-model="name" placeholder="name"/>
          <input type="text" v-model="email" placeholder="email"/>

          <button class="button is-primary"
                  @click="$store.dispatch('ADD_MEMBER', { name: name, email: email })">ADD</button>
        </div>

        <div v-for="member in members">
          {{ member.name }} : {{ member.email }}
          <button class="button is-danger"
                  @click="$store.dispatch('DELETE_MEMBER', member['.key'])">
            DELETE
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      name: '',
      email: ''
    }
  },
  components: {},
  created () {
    this.$store.dispatch('INIT_MEMBERS')
  },
  methods: {
    ...mapActions(['callAuth'])
  },
  computed: {
    ...mapGetters(['user', 'members'])
  }
}
</script>

<style>
</style>
