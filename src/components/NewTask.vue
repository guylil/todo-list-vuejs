<template>
  <div @keyup.enter="$emit('create-new-task', task)">
      Add a new task
    <input type="text" v-model="task.newTaskName" />
    <input type="text" v-model="task.newTaskDesc" />
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
        newTaskName: "",
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
