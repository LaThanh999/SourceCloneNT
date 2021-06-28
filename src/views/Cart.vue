<template>
  <div>
    <v-sheet min-height="5vh" class="mb-2 d-flex align-center" rounded="lg">
      <di class="ml-4">Giỏ hàng của bạn</di>
    </v-sheet>
    <v-sheet min-height="75vh" rounded="lg" class="pa-4">
      <cart-box></cart-box>
    </v-sheet>
    <div class="my-2"></div>
    <core-group-button></core-group-button>
  </div>
</template>

<script>
export default {
  name: "Cart",
};
</script>

<style scoped></style>
