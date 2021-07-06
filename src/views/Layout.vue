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
        <router-view />
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
