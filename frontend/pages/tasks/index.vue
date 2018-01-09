<template>
  <section class="container">
    <div>
      <h1 class="title is-1">
        Tasks
      </h1>

      <div class="columns is-multiline">
        <div class="column is-one-third" v-for="task in tasks">
          <task-card :task="task" :onDelete="deleteTask"></task-card>
        </div>
        <div class="column is-one-third">
          <new-task-card></new-task-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import TaskCard from '~/components/TaskCard'
  import NewTaskCard from '~/components/NewTaskCard'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    data () {
      return {}
    },
    middleware: ['authenticated'],
    components: { TaskCard, NewTaskCard },
    created () {
      this.FETCH_TASKS()
    },
    methods: {
      ...mapActions(['FETCH_TASKS']),
      createTask () {
        this.$store.dispatch('CREATE_TASK')
      },
      deleteTask (task) {
        if (confirm('Do you really want to delete?')) {
          this.$store.dispatch('DELETE_TASK', task)
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
