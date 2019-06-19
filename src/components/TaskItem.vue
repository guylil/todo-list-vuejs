<template>
  <div>
    <div>
      <div class="clickable" @click="showDescription = !showDescription">
        {{ taskName }}
      </div>
    </div>
    <div v-if="showDescription">
      <textarea v-model="itemDesc"></textarea><button>edit</button>
      {{ taskDescription }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  props: {
    taskName: String,
    taskDescription: String
  },
  data() {
    return {
      showDescription: false,
      itemName: this.taskName,
      itemDesc: this.taskDescription
    };
  }
};
</script>

<style scoped>
  .clickable{
    cursor: pointer;
  }
</style>
