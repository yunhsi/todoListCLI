<template>
  <ul>
    <li
      class="flex items-center bg-green-500 p-2 m-5"
      :class="{ complete: todo.complete }"
      v-for="(todo, index) in $store.state.todos"
      :key="index"
    >
      <input type="checkbox" v-model="todo.complete" />

      <label
        v-show="editModeId !== todo.id"
        class="flex-1 mx-2 text-center"
        @dblclick="enterEditMode(todo, $event)"
        >{{ todo.content }}</label
      >
      <input
        v-show="editModeId === todo.id"
        class="flex-1 mx-2 text-center"
        v-model="todo.content"
        @keyup.enter="updateTodo"
        @keyup.esc="cancelUpdateTodo(index)"
      />

      <button class="bg-blue-500 px-2" @click="deleteTodo(todo, index)">
        x
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      editModeId: null,
      beforeUpdateTodo: "",
    };
  },
  methods: {
    deleteTodo(todo, index) {
      let result = confirm(`確定要刪 "${todo.content}"?`);
      if (result) {
        this.$store.commit("deleteTodo", index);
      }
    },
    enterEditMode(todo, e) {
      this.editModeId = todo.id;
      this.beforeUpdateTodo = todo.content;
      let input = e.target.nextElementSibling;
      this.$nextTick(() => {
        input.focus();
      });
    },
    updateTodo() {
      this.leaveEditMode();
    },
    cancelUpdateTodo(index) {
      this.$store.commit("cancelUpdate", {
        index,
        beforUpdate: this.beforUpdate,
      });
      this.leaveEditMode();
    },
    leaveEditMode() {
      this.editModeId = null;
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
