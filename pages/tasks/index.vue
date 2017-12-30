<template>
  <section class="container">
    <div>
      <h1 class="title is-1">
        Tasks
      </h1>

      <div v-for="task in tasks">
        {{task.title}} {{task.description}}
      </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" @click="createTask">
              Create</button>
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
      return {}
    },
    components: {},
    created () {
      this.$store.dispatch('BIND_TASKS')
    },
    methods: {
      ...mapActions(['callAuth']),
      createTask () {
        this.$store.dispatch('CREATE_TASK', { title: 'サンプル', description: '説明' })
      },
      deleteTask (key) {
        if (confirm('Do you really want to delete?')) {
          this.$store.dispatch('DELETE_TASK', key)
        }
      }
    },
    computed: {
      ...mapGetters(['user', 'tasks'])
    }
  }
</script>

<style scoped>
  .container {
    margin-top: 20px;
  }
</style>
