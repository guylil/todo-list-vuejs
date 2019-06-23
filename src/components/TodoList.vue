<template>
  <div class="hello">
    <new-task @create-new-task="createNewTask"></new-task>
    <div v-for="(task, i) in tasks" :key="i">
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
        { taskTitle: "first task", taskDescription: "first desc", taskId: 1 ,status:'todo'},
        { taskTitle: "second task", taskDescription: "second desc", taskId: 2, status:'done' }
      ]
    };
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
      );
    }
  }
};
</script>

<style scoped>
.blue {
  background-color: cornflowerblue;
}
</style>
