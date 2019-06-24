<template>
  <div class="hello">
    <div>
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
    this.tasks.push(
      {
        taskTitle: "first task",
        taskDescription: "first desc",
        taskId: 1,
        taskStatus: "done"
      },
      {
        taskTitle: "second task",
        taskDescription: "second desc",
        taskId: 2,
        taskStatus: "done"
      },
      {
        taskTitle: "3rd task",
        taskDescription: "desc",
        taskId: 3,
        taskStatus: "todo"
      },
      {
        taskTitle: "4th task",
        taskDescription: "desc",
        taskId: 4,
        taskStatus: "done"
      }
    );
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
        ? this.tasks.filter(task => task.taskStatus !== 'deleted')
        : this.tasks.filter(task => task.taskStatus === this.filterBy);
    }
  }
};
</script>

<style scoped>
.blue {
  background-color: cornflowerblue;
}
</style>
