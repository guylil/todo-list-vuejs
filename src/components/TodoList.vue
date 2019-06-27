<template>
  <div class="hello">
    <div class="filter-bar">
      <button @click="filterBy = 'all'">all</button>
      <button @click="filterBy = 'todo'">todo</button>
      <button @click="filterBy = 'done'">done</button>
    </div>
    <new-task @create-new-task="createNewTask"></new-task>
    <div v-for="task in tasksToShow" :key="task.taskId">
      <task-item
        class="blue"
        :task-details="task"
        @task-update="updateATask"
      ></task-item>
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
      tasks: [],
      filterBy: "all"
    };
  },
  mounted() {
    this.getFromLocalStorage();
  },
  methods: {
    createNewTask(task) {
      // adds a new task to the array
      let newTask = {
        taskTitle: task.newTaskTitle,
        taskDescription: task.newTaskDesc,
        taskStatus: "todo",
        taskId: this.newTaskId
      };
      if (newTask.taskTitle.length > 0) {
        this.tasks.push(newTask);
        this.saveToLocalStorage();
      }
    },
    updateATask(updatedTask) {
      this.tasks.forEach(task => {
        if (task.taskId === updatedTask.itemId) {
          task.taskTitle = updatedTask.itemTitle;
          task.taskDescription = updatedTask.itemDesc;
          task.taskStatus = updatedTask.itemStatus;
        }
      });
      this.saveToLocalStorage();
    },
    getFromLocalStorage() {
      if (localStorage.tasks) this.tasks = JSON.parse(localStorage.getItem("tasks"));
    },
    saveToLocalStorage() {
      localStorage.setItem("tasks",JSON.stringify(this.tasks));
    },
  },
  computed: {
    newTaskId() {
      return (
        this.tasks.reduce((max, curr) => Math.max(max, curr.taskId), 0) + 1
      );
    },
    tasksToShow() {
      return this.filterBy === "all"
        ? this.tasks.filter(task => task.taskStatus !== "deleted")
        : this.tasks.filter(task => task.taskStatus === this.filterBy);
    }
  }
};
</script>

<style scoped>
.blue {
  background-color: cornflowerblue;
}
  .filter-bar{
    display: flex;
    justify-content: space-around;
    padding: 3px 0;
}
</style>
