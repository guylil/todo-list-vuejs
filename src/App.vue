<template>
  <div id="app">
<!--    <h3 style="background-color: grey">this is going to be  a todo list app</h3>-->
<!--    <h3>top bar</h3>-->
<!--    <h4>buttons &#45;&#45; add &#45;&#45;info</h4>-->
    <todo-list msg="this is todo" />
<!--    <h6>bottom bar</h6>m-->

<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoList from "./components/TodoList";
export default {
  name: 'app',
  components: {
      TodoList
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
