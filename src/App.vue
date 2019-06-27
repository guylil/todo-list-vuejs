<template>
  <div id="app">
    <div>My little to do list</div>
    <todo-list />
  </div>
</template>

<script>
import TodoList from "./components/TodoList";
export default {
  name: "app",
  components: {
    TodoList
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 5px;
  background-color: #56b0ee;
}
</style>
