<template>
  <section class="container">
    <div>
      <h1 class="title is-1">
        Tasks
      </h1>

      <div class="columns is-multiline">
        <div class="column is-one-third" v-for="task in tasks">
          <task-card :task="task"></task-card>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" @click="createTask">
            Create
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import TaskCard from '~/components/TaskCard'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    data () {
      return {}
    },
    components: { TaskCard },
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
