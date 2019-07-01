<template>
  <v-container>
    Add a new task
    <v-card>
      <v-form>
        <v-layout @keyup.enter="aNewTaskCreated(task)">
          <v-flex xs12 md6 pl-2><v-text-field label="Enter a task name" v-model="task.newTaskTitle"></v-text-field></v-flex>
          <v-flex xs12 md6 pl-2><v-text-field label="Enter a task description" v-model="task.newTaskDesc"></v-text-field></v-flex>
          <v-spacer></v-spacer>
          <v-flex pt-3><v-btn icon flat @click="aNewTaskCreated(task)"><v-icon>add</v-icon></v-btn></v-flex>
        </v-layout>
      </v-form>
    </v-card>
  </v-container>
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
    aNewTaskCreated(task){
      this.$emit('create-new-task', task);
      this.task.newTaskTitle = "";
      this.task.newTaskDesc = "";
    }
  },
  computed: {}
};
</script>

<style></style>
