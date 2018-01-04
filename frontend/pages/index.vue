<template>
  <section class="hero is-large">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div>
          <h1 class="title">
            tobanbot
          </h1>

          <div>
            <button
              class="button is-primary"
              v-if="!authenticated"
              @click="login()">
              <span class="icon">
                <i class="fa fa-sign-in"></i>
              </span>
              <span>Login</span>
            </button>

            <button
              class="button is-primary"
              v-if="authenticated"
              @click="logout()">
              <span class="icon">
                <i class="fa fa-sign-out"></i>
              </span>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    components: {},
    methods: {
      ...mapActions(['login', 'logout'])
    },
    computed: {
      ...mapGetters(['user', 'authenticated'])
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
