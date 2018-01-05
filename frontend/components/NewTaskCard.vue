<template>
  <div class="task-card card">
    <div class="card-content">
      <div class="content">
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" @click="createTask">
              Create new card
            </button>
          </div>
        </div>
      </div>
    </div>
    <footer class="card-footer">
    </footer>
  </div>
</template>

<script>
  export default {
    methods: {
      createTask () {
        this.$store.dispatch('CREATE_TASK', { title: 'Write title', description: 'Write description' })
      }
    }
  }
</script>

<style scoped>
  .task-card {
  }
</style>
