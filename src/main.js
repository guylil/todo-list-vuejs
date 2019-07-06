import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";

Vue.use(VueMaterial);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
