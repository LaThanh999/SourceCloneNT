import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import customColor from "@/utils/color";

const opts = {
  theme: {
    themes: {
      light: {
        ...customColor,
      },
    },
  },
  icons: {
    iconfont: "mdi",
  },
};

Vue.use(Vuetify);

export default new Vuetify(opts);
