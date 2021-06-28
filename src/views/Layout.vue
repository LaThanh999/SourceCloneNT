<template>
  <v-app id="inspire">
    <v-app-bar app color="primary" flat>
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs centered class="ml-n9" color="blue darken-1">
        <v-tab v-for="item in items" :key="item" :to="item.path">
          {{ item.text }}
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="10" offset="1">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: "Giỏ hàng của bạn",
        path: "/cart",
      },
      {
        text: "Thông tin nhận hàng",
        path: "/info",
      },
    ],
  }),
};
</script>
