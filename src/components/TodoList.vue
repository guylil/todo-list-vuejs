<template>
  <div class="hello">
  {{msg}}
    <Task/>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    msg: String
  }
}
</script>

<style scoped>
</style>
