<template>
  <v-app id="inspire">
    <v-app-bar app color="primary" flat>
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs centered class="ml-n9" color="blue darken-1">
        <v-tab v-for="link in links" :key="link">
          {{ link }}
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="10" offset="1">
            <v-sheet
              min-height="5vh"
              class="mb-2 d-flex align-center"
              rounded="lg"
            >
              <di class="ml-4">Giỏ hàng của bạn</di>
            </v-sheet>
            <v-sheet min-height="70vh" rounded="lg" class="pa-4">
              <router-view />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Layout.vue",
  data: () => ({
    links: ["Giỏ hàng của bạn", "Thông tin nhận hàng", "Hoàn tất đặt hàng"],
  }),
};
</script>
