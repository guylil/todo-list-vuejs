<template>
  <v-container>
    <v-layout align-center justify-space-around row>
      <v-tooltip top
        ><template v-slot:activator="{ on }">
          <v-flex v-on="on"
            ><v-btn small flat outline @click="filterBy = 'all'"
              ><v-icon>list</v-icon></v-btn
            ></v-flex
          > </template
        ><span>All</span></v-tooltip
      >

      <v-flex
        ><v-btn small flat outline @click="filterBy = 'todo'"
          >todo</v-btn
        ></v-flex
      >

      <v-tooltip top
        ><template #activator="{ on }">
          <v-flex v-on="on"
            ><v-btn small flat outline @click="filterBy = 'done'"
              ><v-icon>done_all</v-icon></v-btn
            ></v-flex
          > </template
        ><span>Done</span></v-tooltip
      >

      <v-flex
        ><v-btn small icon @click="showCreateNewTask = !showCreateNewTask"
          ><v-icon>add_box</v-icon></v-btn
        ></v-flex
      >
    </v-layout>
    <div class="hello">
      <new-task
        v-if="showCreateNewTask"
        @create-new-task="createNewTask"
      ></new-task>
      <div v-for="task in tasksToShow" :key="task.taskId">
        <task-item :task-details="task" @task-update="updateATask"></task-item>
      </div>
    </div>
  </v-container>
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
      showCreateNewTask: false
    };
  },
  mounted() {
    this.getFromLocalStorage();
    if (this.tasks.length === 0) this.addTasksForFirstTime();
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
      if (localStorage.tasks)
        this.tasks = JSON.parse(localStorage.getItem("tasks"));
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

<style scoped></style>
