<template>
  <section class="container">
    <div>
      <h1 class="title is-1">
        Members
      </h1>

      <div>
        <table class="table">
          <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Key</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="member in members">
            <td>{{ member.name }}</td>
            <td>{{ member.email }}</td>
            <td>{{ member['.key'] }}</td>
            <td>
              <button class="button is-danger"
                      @click="remove(member['.key'])">
                DEL
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

      <div>
        <button class="button is-primary" @click="toggleAddForm">Show Add Form</button>
      </div>

      <div class="container" v-if="adding">
        <div class="field">
          <label class="label">Username</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="text" placeholder="@slackname" v-model="name">
            <span class="icon is-small is-left">
              <i class="fa fa-user"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="hoge@hoge" v-model="email">
            <span class="icon is-small is-left">
              <i class="fa fa-envelope"></i>
            </span>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link"
                    @click="$store.dispatch('ADD_MEMBER', { name: name, email: email })">
              Submit</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    data () {
      return {
        name: '',
        email: '',
        adding: false
      }
    },
    components: {},
    created () {
      this.$store.dispatch('INIT_MEMBERS')
    },
    methods: {
      ...mapActions(['callAuth']),
      toggleAddForm () {
        this.adding = !this.adding
      },
      remove (key) {
        if (confirm('Do you really want to delete?')) {
          this.$store.dispatch('DELETE_MEMBER', key)
        }
      }
    },
    computed: {
      ...mapGetters(['user', 'members'])
    }
  }
</script>

<style scoped>
  .container {
    margin-top: 20px;
  }
</style>
