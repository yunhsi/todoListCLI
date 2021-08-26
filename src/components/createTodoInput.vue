<template>
  <header class="text-center">
    <h1 class="text-4xl mb-2">TodoList</h1>
    <input
      class="border-2"
      v-model="$store.state.newTodo"
      @keyup.enter="createTodo"
    />
  </header>
</template>

<script>
export default {
  name: "createTodoInput",
  methods: {
    createTodo() {
      this.$store.commit("createTodo");
      this.$store.commit("clearNewTodo");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
