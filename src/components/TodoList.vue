<template>
  <div class="hello">
  {{msg}}
    <task-item task-name="task name" task-description="long description"/>
  </div>
</template>

<script>

import TaskItem from "./TaskItem";
export default {
  name: 'TodoList',
  components: {TaskItem},
  props: {
    msg: String
  }
}
</script>

<style scoped>
</style>
