<template>
  <h1 class="text-4xl">TodoList</h1>
  <input v-model="$store.state.newTodo" @keyup.enter="sendTodo">
  <TodoList />
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>
</style>
