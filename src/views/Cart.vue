<template>
  <div>
    <v-sheet min-height="5vh" class="mb-2 d-flex align-center" rounded="lg">
      <div class="ml-4">Giỏ hàng của bạn</div>
    </v-sheet>
    <v-sheet min-height="65vh" style="overflow: auto" rounded="lg" class="pa-4">
      <cart-box></cart-box>
    </v-sheet>
    <div class="my-2"></div>
    <core-group-button :clickActionNext="clickActionNext"></core-group-button>
  </div>
</template>

<script>
export default {
  methods: {
    clickActionNext() {
      this.$router.push({ path: "/info" });
    },
  },
};
</script>

<style scoped></style>
