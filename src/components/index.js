import Vue from "vue";
import cart from "@/components/cart";
import core from "@/components/core";
import payment from "@/components/payment";
import modal from "@/components/modal";
import customer from "@/components/customer";
import drugstores from "@/components/drugstores";

const components = {
  ...cart,
  ...core,
  ...payment,
  ...modal,
  ...customer,
  ...drugstores,
};

Object.keys(components).forEach((el) => {
  Vue.component(el, components[el]);
});
