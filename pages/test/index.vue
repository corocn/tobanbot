<template>
  <section class="container">
    <div>
      <h1 class="title">
        tobanbot
      </h1>

      <div v-if="user">
        <div>
          <button @click="$store.dispatch('ADD_ASSIGNATION', {
            datetime: datetime,
            name: user.displayName,
            icon: user.photoURL,
            slackName: '@corocn' })">ADD</button>
          <button @click="$store.dispatch('CLEAR_ASSIGNATION')">CLEAR ALL</button>
          <input type="text" v-model="datetime" />
        </div>

        <div v-for="a in assignations">
          <img :src="a.icon" width="50"/>
          {{ a.name }} : {{ a.slackName }} : {{ a.datetime }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import auth from '~/plugins/auth'
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      isLoaded: false
    }
  },
  components: {},
  async mounted () {
    let user
    if (!this.user) user = await auth()
    await this.$store.dispatch('SET_CREDENTIAL', { user: user || null })
    await this.$store.dispatch('INIT_ASSIGNATION')
    this.isLoaded = true
  },
  methods: {
    ...mapActions(['callAuth'])
  },
  computed: {
    ...mapGetters(['user', 'assignations'])
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
