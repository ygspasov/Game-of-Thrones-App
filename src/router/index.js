import Vue from "vue";
import VueRouter from "vue-router";
import AddEpisode from "../components/AddEpisode.vue";
import Episodes from "../components/Episodes.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Episodes
  },
  {
    path: "/addepisode",
    name: "addepisode",
    component: AddEpisode
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
