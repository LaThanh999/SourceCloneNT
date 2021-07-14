const axios = require("axios");

const MockAdapter = require("axios-mock-adapter");
import dataProducts from "./produtcs.json";

// mock testing user accounts
const users = [
  {
    email: "admin@demo.com",
    password: "demo",
    token: "mgfi5juf74j",
  },
  {
    email: "admin2@demo.com",
    password: "demo",
    token: "fgj8fjdfk43",
  },
];

const MockService = {
  init() {
    let products = dataProducts;
    let info;
    // this sets the mock adapter on the default instance
    const mock = new MockAdapter(axios);

    // mock login request
    mock.onPost("/login").reply((data) => {
      const credential = JSON.parse(data.data);
      const found = users.find((user) => {
        return (
          credential.email === user.email &&
          credential.password === user.password
        );
      });
      if (found) {
        return [200, found];
      }
      return [404, { errors: ["The login detail is incorrect"] }];
    });

    // mock to verify authentication
    mock.onGet(/\/verify\/?/).reply((data) => {
      const token = data.headers.Authorization.replace("Token ", "");
      if (token !== "undefined") {
        const found = users.find((user) => {
          return token === user.token;
        });
        return [200, found];
      }
      return [401, { errors: ["Invalid authentication"] }];
    });

    mock.onGet("/getProducts", {}).reply(() => {
      return [200, products];
    });

    mock.onGet(/\/getProducts\/\d+/).reply(function (config) {
      const id = config.url.split("/")[config.url.split("/").length - 1];
      products = [...products.filter((el) => el.id !== +id)];
      return [200, products];
    });

    mock.onPost("/setInfo").reply((req) => {
      info = req.data;
      return [200, info];
    });

    mock.onGet("/getInfo", {}).reply(() => {
      return [200, info];
    });
  },
};

export default MockService;
