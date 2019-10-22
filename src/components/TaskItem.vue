<template>
  <v-container>
    <!--    The title row-->
    <v-layout align-center justify-space-between>
      <v-flex>
        <v-chip small :dark="statusColor">{{ task.itemStatus }}</v-chip>
      </v-flex>
      <v-flex xs10 pl-2 class="clickable" @click="titleClick">
        <v-text-field
          :disabled="!editTitle"
          v-model="task.itemTitle"
          @blur.stop="editTitle = false"
        ></v-text-field>
      </v-flex>
      <v-flex v-if="editTitle">
        <v-btn
          icon
          @click="
            showDescription = !showDescription;
            editTitle = false;
          "
        >
          <v-icon>keyboard_arrow_down</v-icon>
        </v-btn>
      </v-flex>
      <v-flex>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on"><v-icon>more_vert</v-icon></v-btn>
          </template>
          <v-list>
            <v-list-tile
              v-for="(btn, index) in subMenuBtns"
              :key="index"
              v-show="btn.show"
              @click="btn.action"
            >
              <v-list-tile-title ><v-icon>{{ btn.icon }}</v-icon></v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-flex>
    </v-layout>
    <!--    The description row-->
    <v-layout v-show="showDescription" align-end>
      <v-flex class="clickable" @click="closeIfDisabled">
        <v-textarea
          v-model="task.itemDesc"
          :disabled="!editDescription"
          @blur.stop="editDescription = false"
        ></v-textarea>
      </v-flex>
        <v-flex xs1 bottom><v-btn icon @click="editDescription=!editDescription"><v-icon>edit</v-icon></v-btn></v-flex>
    </v-layout>
  </v-container>
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
      showDescription: false,
      editDescription: false,
      editTitle: false,
      task: {
        itemTitle: this.taskDetails.taskTitle,
        itemDesc: this.taskDetails.taskDescription,
        itemStatus: this.taskDetails.taskStatus,
        itemId: this.taskDetails.taskId
      },
      subMenuBtns: []
    };
  },
  methods: {
    edit() {
      if (this.showDescription) {
        this.editDescription = true;
      } else {
        this.editTitle = true;
      }
    },
    closeIfDisabled() {
      if (this.showDescription && !this.editDescription)  this.showDescription = false;
    },
    titleClick() {
      if (!this.editTitle) this.showDescription = !this.showDescription;
    },
    setStatus() {
      this.task.itemStatus = this.task.itemStatus === "todo" ? "done" : "todo";
    },
    moveToDeleted() {
      this.task.itemStatus = "deleted";
    }
  },
  updated() {
    this.$emit("task-update", this.task);
  },
  mounted() {
    this.subMenuBtns = this.dynamicButtons;
  },
  computed: {
    editTitleButton() {return this.editTitle ? "Save" : "Edit";},
    editDescriptionButton() {return this.editDescription ? "Save" : "Edit";},
    statusColor() {return this.task.itemStatus==="done"},
    dynamicButtons() {
      return [
        {
          text: this.editTitleButton,
          action: this.edit,
          icon: "edit",
          show: !this.showDescription
        },
        {
          text: this.editDescriptionButton,
          action: this.edit,
          icon: "edit",
          show: this.showDescription
        },
        { text: "<->", action: this.setStatus, icon: "toggle_off", show: true },
        { text: "Delete", action: this.moveToDeleted, icon: "delete", show: true }
      ];
    }
  }
};
</script>

<style scoped>
.clickable {
  cursor: pointer;
}
</style>
