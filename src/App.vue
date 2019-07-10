<template>
  <div id="app">
    <h2 class="center">My little to do list</h2>
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
}
  .center{
    text-align: center;
    /*background-color: lightgrey;*/
    padding: 10px 2px 0 0;
    margin: 0;
  }
</style>
