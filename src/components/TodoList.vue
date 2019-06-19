<template>
  <div class="hello">
  {{msg}}
    <div v-for="(task, i) in tasks" :key="i">
      <task-item class="blue" :task-name="task.taskName" :task-description="task.taskDescription"></task-item>
    </div>
  </div>
</template>

<script>

import TaskItem from "./TaskItem";
export default {
  name: 'TodoList',
  components: {TaskItem},
  props: {
    msg: String
  },
  data() {
    return {
      tasks: [
        {taskName: 'first task', taskDescription: 'first desc', taskId: 1},
        {taskName: 'second task', taskDescription: 'second desc', taskId: 2}
      ]
    }
  },
  methods:{
    createNewTask(task) {
      this.tasks.push(task)
    },
    updateATask() {},
  }
}
</script>

<style scoped>
  .blue {
    background-color: cornflowerblue;
  }
</style>
