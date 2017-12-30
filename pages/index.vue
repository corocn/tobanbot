<template>
  <section class="hero is-large">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div>
          <h1 class="title">
            tobanbot
          </h1>

          <div v-if="isLoaded">
            <div v-if="user">
              You have already logged in as {{ this.user.email }}
            </div>
            <div v-else>
              <button class="signin button is-primary" @click="callAuth">Signin with Google</button>
            </div>
          </div>
          <div v-else>
            Loading...
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import auth from '~/plugins/auth'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    data () {
      return {
        isLoaded: false
      }
    },
    components: {},
    async mounted () {
      let user
      if (!this.user) user = await auth()
      await this.$store.dispatch('SET_CREDENTIAL', {user: user || null})
      await this.$store.dispatch('INIT_ASSIGNATION')
      this.isLoaded = true
    },
    methods: {
      ...mapActions(['callAuth'])
    },
    computed: {
      ...mapGetters(['user', 'assignations'])
    }
  }
</script>

<style>
  .title {
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 2px;
  }
</style>
