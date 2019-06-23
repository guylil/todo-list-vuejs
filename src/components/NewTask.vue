<template>
  <div>
    <button @click="$emit('create-new-task', task)">+</button>
    <input type="text" v-model="task.newTaskName" />
    <input type="text" v-model="task.newTaskDesc" />
    new task component
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
    newTask() {
      this.$emit("create-new-task", this.task);
    }
  },
  computed: {}
};
</script>

<style></style>
