<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        tobanbot
      </h1>
      <button @click="$store.dispatch('ADD_POST', { name: '@corocn', body: '週番'})">ADD</button>
      <button class="button is-primary" @click="callAuth">Signin with Google</button>
      <div v-for="post in posts">
        {{ post.name }} {{ post.body }}
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      isLoaded: false
    }
  },
  components: {
    Logo
  },
  async mounted () {
    await this.$store.dispatch('INIT_POSTS')
    this.isLoaded = true
  },
  methods: {
    ...mapActions(['callAuth'])
  },
  computed: {
    ...mapGetters(['posts'])
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
