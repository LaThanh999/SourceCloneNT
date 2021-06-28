import Vue from "vue";
import VueRouter from "vue-router";
import CONSTANTS from "../constants";

const { ROUTERS } = CONSTANTS;

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: () => import("@/views/Layout"),
    children: [
      {
        path: ROUTERS.HOME,
        name: "Home",
        component: () => import("@/views/Cart"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
