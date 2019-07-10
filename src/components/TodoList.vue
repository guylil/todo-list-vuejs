<template>
  <div>
    <div class="filter-bar md-layout-nowrap">
      <md-button
        class="md-layout-item md-xsmall-size-28 "
        @click="filterBy = 'all'"
        ><md-icon>list</md-icon></md-button
      >
      <md-button
        class="md-layout-item md-xsmall-size-28 "
        @click="filterBy = 'todo'"
        >todo</md-button
      >
      <md-button
        class="md-layout-item md-xsmall-size-28 "
        @click="filterBy = 'done'"
        ><md-icon>done_all</md-icon></md-button
      >
      <md-button
        class="md-layout-item md-xsmall-size-20 "
        @click="showNewTask = !showNewTask"
        ><md-icon>add</md-icon></md-button
      >
    </div>
    <new-task v-if="showNewTask" @create-new-task="createNewTask"></new-task>
    <div v-for="task in tasksToShow" :key="task.taskId">
      <task-item :task-details="task" @task-update="updateATask"></task-item>
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
      filterBy: "all",
      showNewTask: false
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
      if (localStorage.tasks) {
        this.tasks = JSON.parse(localStorage.getItem("tasks"));
      } else {
        this.addTasksForFirstTime();
      }
    },
    saveToLocalStorage() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    addTasksForFirstTime() {
      this.tasks.push(
        {
          taskTitle: "Welcome to my to do list app",
          taskDescription: "There are a lot of features here",
          taskStatus: "todo",
          taskId: 1
        },
        {
          taskTitle: "Have a look",
          taskDescription: "There are a lot of neat stuff",
          taskStatus: "done",
          taskId: 2
        },
        {
          taskTitle: "Click around",
          taskDescription:
            "And you can see the code @ https://github.com/guylil/todo-list-vuejs --> on the Vuetify branch",
          taskStatus: "done",
          taskId: 3
        },
        {
          taskTitle: "The app even works offline",
          taskDescription: "Try it out",
          taskStatus: "done",
          taskId: 4
        }
      );
    }
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
.filter-bar {
  display: flex;
  justify-content: space-around;
  padding: 3px 0;
}
</style>
