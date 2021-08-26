<template>
  <ul>
    <li class="flex items-center bg-green-500 p-2 m-5"
     v-for="(todo,index) in todos" :key="index">
      <input type="checkbox" v-model="todo.complete" />
      <label class="flex-1 mx-2 text-center" :class="{ complete: todo.complete }">{{ todo.content }}</label>
      <button class="bg-blue-500 px-2">x</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
  },
  data() {
    return {
      todos: [
        {
          id:1,
          content:'一',
          complete:false,
        },
        {
          id:2,
          content:'二',
          complete:true,
        },
        {
          id:3,
          content:'三',
          complete:false,
        },
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.complete{
  text-decoration: line-through;
}
</style>
