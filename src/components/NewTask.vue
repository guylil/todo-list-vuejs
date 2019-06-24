<template>
  <div>
      Add a new task
    <div @keyup.enter="$emit('create-new-task', task)">
      <input type="text" placeholder="Enter a task name" v-model="task.newTaskTitle" />
      <input type="text" placeholder="Enter a task description" v-model="task.newTaskDesc" />
    </div>
    <button @click="$emit('create-new-task', task)">+</button>
  </div>
</template>

<script>
export default {
  name: "NewTask",
  components: "",
  props: {},
  data() {
    return {
      task: {
        newTaskTitle: "",
        newTaskDesc: ""
      }
    };
  },
  methods: {
  },
  computed: {}
};
</script>

<style></style>
