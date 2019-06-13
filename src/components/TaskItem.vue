<template>
  <div>
    <div>
      <span @click="showDescription=!showDescription">{{taskName}}</span>
    </div>
    <div v-if="showDescription">{{taskDescription}}</div>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    taskName: String,
    taskDescription: String
  },
  data() {
    return {
      showDescription: false
    }
  }
}
</script>

<style scoped>
</style>
