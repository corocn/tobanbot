<template>
  <div>
    <navigation-bar></navigation-bar>
    <nuxt/>
  </div>
</template>

<script>
  import NavigationBar from '../components/NavigationBar'

  export default {
    components: { NavigationBar }
  }
</script>
