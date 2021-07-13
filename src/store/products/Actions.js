import axios from "axios";

export default {
  getAllProducts() {
    return new Promise((resolve) => {
      axios.get("/getProducts").then((res) => {
        resolve(res.data);
      });
    });
  },
};
