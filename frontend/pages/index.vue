<template>
  <section class="hero is-large">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div>
          <h1 class="title">
            tobanbot
          </h1>

          <div>
            <nuxt-link
              class="button is-primary"
              v-if="!isAuthenticated"
              to="/auth/login">
              <span class="icon">
                <i class="fa fa-sign-in"></i>
              </span>
              <span>Login</span>
            </nuxt-link>

            <nuxt-link
              class="button is-primary"
              v-if="isAuthenticated"
              to="/auth/logout">
              <span class="icon">
                <i class="fa fa-sign-out"></i>
              </span>
              <span>Logout</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    components: {},
    methods: {},
    computed: {
      ...mapGetters(['user', 'isAuthenticated'])
    }
  }
</script>

<style scoped>
  .title {
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 2px;
  }
</style>
