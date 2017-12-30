<template>
  <div class="task-card card">
    <header class="card-header">
      <p class="card-header-title">
        {{ task.title }}
      </p>
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
    props: ['task']
  }
</script>

<style scoped>
  .task-card {
  }
</style>
