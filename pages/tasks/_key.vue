<template>
  <section class="container">
    <div>
      <h1 class="title is-1">
        {{ task.title }}
      </h1>

      {{ task.description }}
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {}
    },
    components: { },
    created () {
      this.$store.dispatch('BIND_TASK', this.$route.params.key)
    },
    methods: {},
    computed: {
      ...mapGetters(['user', 'task'])
    }
  }
</script>

<style scoped>
  .container {
    margin-top: 20px;
  }
</style>
