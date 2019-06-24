<template>
  <div class="hello">
    <div>
      <button @click="filterBy='all'">all</button>
      <button @click="filterBy='todo'">todo</button>
      <button @click="filterBy='done'">done</button>
    </div>
    <new-task @create-new-task="createNewTask"></new-task>
    <div v-for="(task, i) in tasksToShow" :key="i">
      <task-item class="blue" :task-details="task"></task-item>
    </div>
  </div>
</template>

<script>
import TaskItem from "./TaskItem";
import NewTask from "./NewTask";
export default {
  name: "TodoList",
  components: { NewTask, TaskItem },
  props: {
    // msg: String
  },
  data() {
    return {
      tasks: [
        {taskTitle: "first task", taskDescription: "first desc", taskId: 1, status: 'todo'},
        {taskTitle: "second task", taskDescription: "second desc", taskId: 2, status: 'done'},
        {taskTitle: "3rd task", taskDescription: "desc", taskId: 3, status: 'todo'},
        {taskTitle: "4th task", taskDescription: "desc", taskId: 4, status: 'todo'},
      ],
      filterBy: 'all'
    }
  },
  methods: {
    createNewTask(task) {
      // adds a new task to the array
      let newTask = {
        taskTitle: task.newTaskTitle,
        taskDescription: task.newTaskDesc,
        taskStatus: 'todo',
        taskId: this.newTaskId
      };
      if(newTask.taskTitle.length>0){
        this.tasks.push(newTask);
      }
    },
    updateATask() {}
  },
  computed: {
    newTaskId() {
      return (
        this.tasks.reduce((max, curr) => Math.max(max, curr.taskId), 0) + 1
      );},
    tasksToShow() {
      return (this.filterBy==='all')? this.tasks : this.tasks.filter(task => task.status===this.filterBy)
    }
  }
};
</script>

<style scoped>
.blue {
  background-color: cornflowerblue;
}
</style>
