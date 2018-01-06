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
      this.$store.dispatch('BIND_TASKS')
    },
    methods: {
      ...mapActions(['callAuth']),
      createTask () {
        this.$store.dispatch('CREATE_TASK', { title: 'サンプル', description: '説明' })
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
