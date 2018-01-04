<template>
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <h1>tobanbot</h1>
      </nuxt-link>


      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="navbar-menu">


      <div class="navbar-start" v-if="user">
        <nuxt-link class="navbar-item" to="/members">
          Members
        </nuxt-link>
        <nuxt-link class="navbar-item" to="/tasks">
          Tasks
        </nuxt-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">

            <p class="control" v-if="user">
              <nuxt-link class="button" to="/user">
                <span class="icon">
                  <i class="fa fa-user"></i>
                </span>
              </nuxt-link>
            </p>

            <p class="control">
              <a class="button is-primary" href="https://github.com/corocn/tobanbot">
                <span class="icon">
                  <i class="fa fa-github"></i>
                </span>
                <span>Github</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    components: {},
    async created () {
      this.$store.dispatch('SET_CREDENTIAL')
    },
    computed: {
      ...mapGetters(['user'])
    }
  }
</script>

<style scoped>
  h1 {
    color: #35495e;
    font-weight: 500;
  }
</style>
