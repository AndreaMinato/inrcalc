import Vue from "vue";
import Router from "vue-router";
import CCP from "./views/CCP.vue";
import ATIII from "./views/ATIII.vue";
import Pronativ from "./views/Pronativ.vue";
import NotFound from "./views/404.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/ccp",
    },
    {
      path:  "/ccp",
      name: "ccp",
      component: CCP
    },
    {
      path: "/atiii",
      name: "atii",
      component: ATIII
    },
    {
      path: "/pronativ",
      name: "pronativ",
      component: Pronativ
    },
    {
      path: "*",
      name: "404",
      component: NotFound
    }
  ]
});
