import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "./filters/filters";
import VueScrollReveal from "vue-scroll-reveal";

Vue.use(VueScrollReveal);
Vue.use(VueMaterial);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
