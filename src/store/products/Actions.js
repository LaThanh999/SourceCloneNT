import axios from "axios";

export default {
  getAllProducts({ commit }) {
    return new Promise((resolve) => {
      axios.get("/getProducts").then((res) => {
        commit("SET_PRODUCTS", res.data);
        resolve(res.data);
      });
    });
  },
  removeProducts({ dispatch }, payload) {
    return new Promise((resolve) => {
      axios.get(`/getProducts/${payload}`).then((res) => {
        dispatch("getAllProducts");
        resolve(res);
      });
    });
  },
  setInfo(_, payload) {
    return new Promise((resolve) => {
      axios.post(`/setInfo`, payload).then((res) => {
        resolve(res.data);
      });
    });
  },
  getInfo() {
    return new Promise((resolve) => {
      axios.get("/getInfo").then((res) => {
        resolve(res.data);
      });
    });
  },
};
