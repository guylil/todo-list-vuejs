<template>
  <div>
    <div>
      <div class="clickable" @click="showDescription = !showDescription">
        {{ itemName }} ||     {{itemId}}
      </div>
    </div>
    <div v-if="showDescription">
      <textarea v-model="itemDesc"></textarea><button>edit</button>
      {{ itemDesc }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  props: {
    taskDetails:{
      taskName: String,
      taskDescription: String,
      taskId : Number
    }
  },
  data() {
    return {
      showDescription: false,
      itemName: this.taskDetails.taskName,
      itemDesc: this.taskDetails.taskDescription,
      itemId : this.taskDetails.taskId
    };
  }
};
</script>

<style scoped>
  .clickable{
    cursor: pointer;
  }
</style>
