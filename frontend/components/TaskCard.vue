<template>
  <div class="task-card card">
    <header class="card-header">
      <p class="card-header-title">
        <nuxt-link :to="`/tasks/${task.id}`">{{ task.id }} : {{ task.title }}</nuxt-link>
      </p>
      <a class="delete" @click="onDelete(task)"></a>
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
    props: ['task', 'onDelete'],
    methods: {}
  }
</script>

<style scoped>
  .task-card {
  }
</style>
