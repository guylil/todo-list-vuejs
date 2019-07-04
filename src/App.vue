<template>
  <v-app :dark="themeToggle">
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">My little to do list</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="mr-2">
        Beautifully done with
        <v-btn class="info" small href="http://vuetifyjs.com"
          >Vuetify</v-btn
        ></span
      >
      <v-btn icon @click="toggle"
        ><v-icon>{{ toggleIcon }}</v-icon></v-btn
      >
    </v-toolbar>

    <v-content>
      <v-container>
        <todo-list />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TodoList from "./components/TodoList";

export default {
  name: "App",
  components: { TodoList },
  data() {
    return {
      theme: "light"
    };
  },
  methods: {
    toggle() {
      this.theme = this.theme === "light" ? "dark" : "light";
    }
  },
  computed: {
    themeToggle() {return this.theme === "dark";},
    toggleIcon() {return this.theme === "dark" ? "toggle_on" : "toggle_off";}
  }
};
</script>
