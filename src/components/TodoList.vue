<template>
  <div class="hello">
    <button @click="createNewTask()">+</button>
    <input type="text" v-model="newTaskName">
    <input type="text" v-model="newTaskDesc">
    <div v-for="(task, i) in tasks" :key="i">
      <task-item
        class="blue"
        :task-details="task"
      ></task-item>
    </div>
  </div>
</template>

<script>
import TaskItem from "./TaskItem";
export default {
  name: "TodoList",
  components: { TaskItem },
  props: {
    // msg: String
  },
  data() {
    return {
      tasks: [
        { taskName: "first task", taskDescription: "first desc", taskId: 1 },
        { taskName: "second task", taskDescription: "second desc", taskId: 2 }
      ],
      newTaskName: 'newTaskName',
      newTaskDesc: 'newTaskDesc',
    };
  },
  methods: {
    createNewTask() {
      let newTask = {
        taskName: this.newTaskName,
        taskDescription: this.newTaskDesc,
        taskId : this.newTaskId
      };
      this.tasks.push(newTask);
    },
    updateATask() {}
  },
  computed: {
    newTaskId() {
      return this.tasks.reduce((max,curr)=> Math.max(max, curr.taskId),0)+1;
    }
  }
};
</script>

<style scoped>
.blue {
  background-color: cornflowerblue;
}
</style>
