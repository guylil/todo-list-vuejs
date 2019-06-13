<template>
  <div>
    <div>
      <div class="clickable" @click="showDescription = !showDescription">
        {{ taskName }}
      </div>
    </div>
    <div v-if="showDescription">
      <!--        <input v-model="taskDescription">-->
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
      showDescription: false
    };
  }
};
</script>

<style scoped></style>
