import Vue from "vue";
import cart from "@/components/cart/index";

const components = {
  ...cart,
};

Object.keys(components).forEach((el) => {
  Vue.component(el, components[el]);
});
