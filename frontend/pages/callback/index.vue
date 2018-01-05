<template>
  <section class="hero is-large">
    <div class="hero-body">
      redirecting...
    </div>
  </section>
</template>

<script>
  export default {
    layout: 'callback',
    data () {
      this.$store.dispatch('HANDLE_CALLBACK')
      return {}
    }
  }
</script>
