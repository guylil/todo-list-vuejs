<template>
  <div>
    <div>
      <div>
        <div class="clickable" @click="showDescription = !showDescription">
          <input
            class="clickable"
            :disabled="!editTitle"
            type="text"
            v-model="task.itemTitle"
          />
        </div>
        <button v-show="!showDescription" @click="editTitle = !editTitle">
          {{editTitleButton}}
        </button>
      </div>
    </div>
    <div v-show="showDescription">
      <textarea
        :disabled="!editDescription"
        v-model="task.itemDesc"
        @blur.stop="editDescription = false"
      ></textarea>
      {{task.itemStatus}}
    </div>
    <button
      v-show="showDescription"
      @click="editDescription = !editDescription"
    >
      {{editDescriptionButton}}
    </button>
    <button @click="setStatusButton">{{statusButton}}</button>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  props: {
    taskDetails: {
      taskTitle: String,
      taskDescription: String,
      status: String,
      taskId: Number
    }
  },
  data() {
    return {
      showDescription: false,
      editDescription: false,
      editTitle: false,
      task: {
        itemTitle: this.taskDetails.taskTitle,
        itemDesc: this.taskDetails.taskDescription,
        itemStatus: this.taskDetails.status,
        itemId: this.taskDetails.taskId
      },
    };
  },
  methods: {
    setStatusButton(){
      this.task.itemStatus = (this.task.itemStatus==='todo') ? "done":"todo";
      },
  },
  computed: {
    editTitleButton(){return (this.editTitle)?"save":"edit"},
    editDescriptionButton(){return (this.editDescription)?"save":"edit"},
    statusButton() {return (this.task.itemStatus==='todo')? "Done" : "Todo"},
  }
};
</script>

<style scoped>
.clickable {
  cursor: pointer;
}
  .todo {
    text: red;
  }
</style>
