<template>
  <div class="task-card card">
    <header class="card-header">
      <p class="card-header-title">
        <nuxt-link :to="`/tasks/${task['.key']}`">{{ task.title }}</nuxt-link>
      </p>
      <a class="delete" @click="deleteTask(task['.key'])"></a>
    </header>
    <div class="card-content">
      <div class="content">
        {{ task.description }}
      </div>
    </div>
    <footer class="card-footer">
    </footer>
  </div>
</template>

<script>
  export default {
    props: ['task'],
    methods: {
      deleteTask (key) {
        if (confirm('Do you really want to delete?')) {
          this.$store.dispatch('DELETE_TASK', key)
        }
      }
    }
  }
</script>

<style scoped>
  .task-card {
  }
</style>
