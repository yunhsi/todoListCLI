<template>
  <createTodoInput />
  <TodoList />
</template>

<script>
import createTodoInput from "./components/createTodoInput.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    createTodoInput,
    TodoList,
  },
};
</script>

<style></style>
