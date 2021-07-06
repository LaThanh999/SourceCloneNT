import Vue from "vue";
import cart from "@/components/cart";
import core from "@/components/core";
import payment from "@/components/payment";
import modal from "@/components/modal";

const components = {
  ...cart,
  ...core,
  ...payment,
  ...modal,
};

Object.keys(components).forEach((el) => {
  Vue.component(el, components[el]);
});
