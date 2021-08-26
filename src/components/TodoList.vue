<template>
  <ul>
    <li
      class="flex items-center bg-green-500 p-2 m-5"
      :class="{ complete: todo.complete }"
      v-for="(todo, index) in $store.state.todos"
      :key="index"
    >
      <input type="checkbox" v-model="todo.complete" />
      <label class="flex-1 mx-2 text-center">{{ todo.content }}</label>
      <button class="bg-blue-500 px-2" @click="deleteTodo(todo, index)">
        x
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TodoList",
  props: {},
  data() {
    return {};
  },
  methods: {
    deleteTodo(todo, index) {
      let result = confirm(`確定要刪 "${todo.content}"?`);
      if (result) {
        this.$store.commit("deleteTodo", index);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.complete label {
  text-decoration: line-through;
}
</style>
