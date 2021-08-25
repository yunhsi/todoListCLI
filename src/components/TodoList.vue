<template>
  <ul>
    <li>
      <input type="checkbox" v-model="$store.state.isComplete" @click="complete">
      <p></p>
      <button>x</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
