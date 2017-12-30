<template>
  <section class="container">
    <div>
      <h1 class="title is-1">
        User
      </h1>

      <button class="signout button is-primary" @click="signOut">Sign Out</button>
    </div>
  </section>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    components: {},
    methods: {
      ...mapActions(['signOut'])
    },
    computed: {
      ...mapGetters(['user'])
    }
  }
</script>

<style scoped>
  .container {
    margin-top: 20px;
  }
</style>
