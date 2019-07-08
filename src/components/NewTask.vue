<template>
  <div class="container">
    <md-card>
      <md-card-header>
        <div class="md-subhead">Add a new task</div>
      </md-card-header>
      <md-card-content @keyup.enter="$emit('create-new-task', task)" class="md-layout-item">
        <div class="md-layout md-gutter">
          <md-field class="md-layout-item md-small-size-33 md-xsmall-size-50">
            <label>Enter a task name</label>
            <md-input
                    type="text"
                    v-model="task.newTaskTitle"/>
          </md-field>
          <md-field class="md-layout-item md-small-size-33 md-xsmall-size-50">
            <label>Enter a task description</label>
            <md-input
                    type="text"
                    v-model="task.newTaskDesc"/>
          </md-field>
          <md-button class="md-layout-item md-small-size-30 md-xsmall-size-100" @click="$emit('create-new-task', task)"><md-icon>add</md-icon></md-button>
        </div>
      </md-card-content>
    </md-card>
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
  methods: {},
  computed: {}
};
</script>

<style scoped>
  .container {
    margin: 2em;
  }
</style>
