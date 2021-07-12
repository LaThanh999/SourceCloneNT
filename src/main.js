import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./components";
import "./utils/lodash";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import "./styles/index.scss";
import MockService from "@/mock/mock.service";

Vue.config.productionTip = false;
Vue.use(Toast, {});
MockService.init();

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
