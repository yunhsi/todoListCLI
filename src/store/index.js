import { createStore } from "vuex";

export default createStore({
  state: {
    //create
    newTodo: "",
    //data
    todos: [
      {
        id: 1,
        content: "一",
        complete: false,
      },
      {
        id: 2,
        content: "二",
        complete: true,
      },
      {
        id: 3,
        content: "三",
        complete: false,
      },
    ],
  },
  mutations: {
    createTodo(state) {
      let newTodo = {
        id: state.todos.length + 1,
        content: state.newTodo,
        complete: false,
      };
      state.todos.push(newTodo);
    },
    clearNewTodo(state) {
      state.newTodo = "";
    },
    deleteTodo(state, index) {
      state.todos.splice(index, 1);
    },
    cancelUpdate(state, data) {
      state.todos[data.index].content = data.beforeUpdate;
    },
  },
  actions: {},
  modules: {},
});
