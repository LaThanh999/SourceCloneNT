<template>
  <div>
    <v-sheet
      min-height="5vh"
      color="grey lighten-1"
      class="mb-2 d-flex align-center"
    >
      <div class="d-flex align-center">
        <v-btn icon to="/cart">
          <v-icon>mdi mdi-arrow-left-thick</v-icon>
        </v-btn>
        <div>Xem lại toa thuốc</div>
      </div>
    </v-sheet>
    <v-sheet min-height="35vh" rounded="lg" class="pa-4">
      <info-customer></info-customer>
    </v-sheet>
    <div class="my-2"></div>
    <v-sheet min-height="35vh" rounded="lg" class="pa-4">
      <info-drug-store></info-drug-store>
    </v-sheet>
    <div class="my-2"></div>
    <v-sheet min-height="35vh" rounded="lg" class="pa-4">
      <v-row>
        <v-col cols="12" md="8" offset-md="2">
          <v-checkbox label="Xuất hóa đơn cho công ty"></v-checkbox>
          <v-textarea outlined label="Ghi chú thêm nếu có"></v-textarea>
        </v-col>
      </v-row>
    </v-sheet>
    <div class="my-2"></div>
    <core-group-button :clickActionNext="clickActionNext"></core-group-button>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    isMenuDate: false,
    isMenuTime: false,
    time: null,
  }),
  methods: {
    clickActionNext() {
      this.$router.push({ path: "/payment" });
    },
  },
};
</script>

<style scoped></style>
