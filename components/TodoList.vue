<template>
  <ul class="todolist list-group">
    <li v-for="(todo, index) in todos" :key="index" class="todolist__element list-group-item" :class="{ done: todo.done }" @click="toggle(todo)">
      {{ todo.text }}
    </li>
    <li class="list-group-item">
      <input type="text" class="form-control" placeholder="What needs to be done?" @keydown.enter="addTodo">
    </li>
  </ul>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    todos: 'todos/todos'
  }),
  methods: {
    addTodo (e) {
      const text = e.target.value
      if (text.trim()) {
        this.$store.commit('todos/add', { text })
      }
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    })
  }
}
</script>

<style>
li {
  cursor: pointer;
}
.done {
  text-decoration: line-through;
  background: red;
  color: white;
}
</style>
