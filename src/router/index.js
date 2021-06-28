import Vue from "vue";
import VueRouter from "vue-router";
import CONSTANTS from "../constants";

const { ROUTERS, PAGE_NAMES } = CONSTANTS;

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: () => import("@/views/Layout"),
    children: [
      {
        path: ROUTERS.HOME,
        name: PAGE_NAMES[ROUTERS.HOME],
        component: () => import("@/views/Cart"),
      },
      {
        path: ROUTERS.CART,
        name: PAGE_NAMES[ROUTERS.CART],
        component: () => import("@/views/Cart"),
      },
      {
        path: ROUTERS.INFO,
        name: PAGE_NAMES[ROUTERS.INFO],
        component: () => import("@/views/Info"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router;
