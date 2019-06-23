<template>
  <div>
    <div>
      <div>
        <div class="clickable" @click="showDescription = !showDescription">
          <input
                  class="clickable"
                  :disabled="!editTitle"
                  type="text"
                  v-model="itemName"
          />
        </div>
        <button v-show="!showDescription" @click="editTitle=!editTitle">edit</button>
      </div>
    </div>
    <div v-show="showDescription">
      <textarea
        :disabled="!editDescription"
        v-model="itemDesc"
        @blur.stop="editDescription = false"
      ></textarea>
    </div>
    <button v-show="showDescription" @click="editDescription = !editDescription">edit</button>
    <button>done</button>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  props: {
    taskDetails: {
      taskTitle: String,
      taskDescription: String,
      taskId: Number
    }
  },
  data() {
    return {
      showDescription: false,
      editDescription: false,
      editTitle: false,
      itemName: this.taskDetails.taskTitle,
      itemDesc: this.taskDetails.taskDescription,
      itemId: this.taskDetails.taskId
    };
  },
  methods: {},
  computed: {
  }
};
</script>

<style scoped>
.clickable {
  cursor: pointer;
}
</style>
