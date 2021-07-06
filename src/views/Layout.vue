<template>
  <div>
    <v-app-bar app color="primary" flat>
      <v-tabs centered class="ml-n9" color="blue darken-1">
        <v-tab v-for="(item, index) in items" :key="index" :to="item.path">
          {{ item.text }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" md="6" offset-md="3">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
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
