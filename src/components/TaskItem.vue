<template>
  <div>
    <div class="container">
      <div class="md-layout md-alignment-center-space-around">
        <md-chip
          :class="{ 'md-primary': task.itemStatus === 'todo' }"
          class="md-layout-item md-xsmall-size-10 clickable"
          @click="isShowDescription = !isShowDescription"
          >{{ task.itemStatus.toUpperCase() }}
        </md-chip>
        <div
          class="md-layout-item md-xsmall-size-60 clickable"
          @click="isShowDescription = !isShowDescription"
        >
          <md-field>
            <md-input
              ref="titleInput"
              :disabled="isTitleDisabled"
              type="text"
              v-model="task.itemTitle"
              @blur.stop="
                isTitleDisabled = true;
                isShowMenu = true;
              "
            />
          </md-field>
        </div>
        <div class="md-layout-item md-xsmall-size-15">
          <md-menu md-size="auto" v-if="isShowMenu">
            <md-button md-menu-trigger><md-icon>more_vert</md-icon></md-button>
            <md-menu-content>
              <md-menu-item v-if="!isShowDescription">
                <md-button @click="editTitle">
                  <md-icon>{{ editTitleButton }}</md-icon>
                </md-button>
              </md-menu-item>
              <md-menu-item v-if="isShowDescription"
                ><md-button @click="editDescription"
                  ><md-icon>{{ editDescriptionButton }}</md-icon></md-button
                ></md-menu-item
              >
              <md-menu-item>
                <md-button @click="setStatusButton"
                  ><md-icon>{{ statusButton }}</md-icon>
                </md-button></md-menu-item
              >
              <md-menu-item
                ><md-button @click="moveToDeleted"
                  ><md-icon>delete</md-icon></md-button
                ></md-menu-item
              >
            </md-menu-content>
          </md-menu>
        </div>
        <md-field v-show="isShowDescription">
          <md-textarea
            ref="descriptionText"
            :disabled="isDescriptionDisabled"
            v-model="task.itemDesc"
            @blur.stop="
              isDescriptionDisabled = true;
              isShowMenu = true;
            "
          ></md-textarea>
        </md-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  props: {
    taskDetails: {
      taskTitle: String,
      taskDescription: String,
      taskStatus: String,
      taskId: Number
    }
  },
  data() {
    return {
      isShowDescription: false,
      isDescriptionDisabled: true,
      isTitleDisabled: true,
      isShowMenu: true,
      task: {
        itemTitle: this.taskDetails.taskTitle,
        itemDesc: this.taskDetails.taskDescription,
        itemStatus: this.taskDetails.taskStatus,
        itemId: this.taskDetails.taskId
      }
    };
  },
  methods: {
    setStatusButton() {
      this.task.itemStatus = this.task.itemStatus === "todo" ? "done" : "todo";
    },
    moveToDeleted() {
      this.task.itemStatus = "deleted";
    },
    editTitle() {
      if (this.isTitleDisabled) {
        this.isTitleDisabled = false;
        // F**img vue-material
        setTimeout(() => {
          this.$refs.titleInput.$el.focus();
        }, 200);
        this.isShowMenu = false;
      } else {
        this.isTitleDisabled = true;
      }
    },
    editDescription() {
      if (this.isDescriptionDisabled) {
        this.isDescriptionDisabled = false;
        setTimeout(() => {
          this.$refs.descriptionText.$el.focus();
        }, 200);
        this.isShowMenu = false;
      } else {
        this.isDescriptionDisabled = true;
      }
    }
  },
  updated() {
    this.$emit("task-update", this.task);
  },
  computed: {
    editTitleButton() {
      return this.isTitleDisabled ? "edit" : "save";
    },
    editDescriptionButton() {
      return this.isDescriptionDisabled ? "edit" : "save";
    },
    statusButton() {
      return this.task.itemStatus === "todo" ? "toggle_on" : "toggle_off";
    }
  }
};
</script>

<style scoped>
.clickable {
  cursor: pointer;
}
.container {
  padding: 0 3%;
}
</style>
