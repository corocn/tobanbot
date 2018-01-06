<template>
  <section class="container">
    <div>
      <h1 class="title is-1">
        User
      </h1>

      <br/>
      <button class="signout button is-danger" @click="ping">Ping</button>
    </div>
  </section>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    components: {},
    middleware: ['authenticated'],
    methods: {
      ...mapActions(['ping'])
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
