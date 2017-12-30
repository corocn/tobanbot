<template>
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <h1>tobanbot</h1>
      </a>


      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="navbar-menu">


      <div class="navbar-start" v-if="user">
        <a class="navbar-item" href="/">
          User
        </a>
        <a class="navbar-item" href="/members">
          Members
        </a>
        <a class="navbar-item" href="/">
          Tasks
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
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
