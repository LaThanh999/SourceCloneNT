import Vue from "vue";
import cart from "@/components/cart";
import core from "@/components/core";

const components = {
  ...cart,
  ...core,
};

Object.keys(components).forEach((el) => {
  Vue.component(el, components[el]);
});
