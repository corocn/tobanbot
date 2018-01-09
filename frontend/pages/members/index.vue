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
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="member in editableMembers">
            <td v-if="member.isEditing">
              <input class="input" type="text" v-model="editing.name">
            </td>
            <td v-else>{{ member.name }}</td>

            <td v-if="member.isEditing">
              <input class="input" type="text" v-model="editing.email">
            </td>
            <td v-else>{{ member.email }}</td>

            <td>
              <button class="button is-link" v-if="member.isEditing"
                      @click="updateMember(editing)">
                <i class="fa fa-check"></i>
              </button>
              <button class="button is-primary" v-else
                      @click="toggleEdit(member)">
                <i class="fa fa-edit"></i>
              </button>
            </td>
            <td>
              <button class="button is-danger"
                      @click="deleteMember(member)">
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

      <div>
        <button class="button is-primary" @click="toggleAddForm">Show Add Form</button>
      </div>

      <div class="container" v-if="isAdding">
        <div class="field">
          <label class="label">Name</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="text" placeholder="@slackname" v-model="adding.name">
            <span class="icon is-small is-left">
              <i class="fa fa-user"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="hoge@hoge" v-model="adding.email">
            <span class="icon is-small is-left">
              <i class="fa fa-envelope"></i>
            </span>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" @click="createMember()">
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
        adding: { name: '', email: '' },
        editing: false,
        isAdding: false
      }
    },
    middleware: ['authenticated'],
    components: {},
    created () {
      this.FETCH_MEMBERS()
    },
    methods: {
      ...mapActions(['FETCH_MEMBERS']),
      createMember () {
        this.$store.dispatch('CREATE_MEMBER', this.adding)
        this.adding = { name: '', email: '' }
      },
      deleteMember (member) {
        if (confirm('Do you really want to delete?')) {
          this.$store.dispatch('DELETE_MEMBER', member)
        }
      },
      updateMember (member) {
        this.$store.dispatch('UPDATE_MEMBER', member)
        this.editing = false
      },
      toggleAddForm () {
        this.isAdding = !this.isAdding
      },
      toggleEdit (member) {
        this.editing = member
      }
    },
    computed: {
      ...mapGetters(['user', 'members']),
      editableMembers () {
        return this.members.map((member) => {
          member = Object.assign({}, member)
          member.isEditing = false
          if (this.editing && member.id === this.editing.id) {
            member.isEditing = true
          }
          return member
        })
      }
    }
  }
</script>

<style scoped>
  .container {
    margin-top: 20px;
  }
</style>
