<template>
  <v-footer padless color="white" rounded>
    <v-col class="text-center" cols="12">
      <v-btn class="ma-2" outlined color="primary"> Không mua nữa </v-btn>
      <v-btn class="ma-2" outlined color="primary"> Mua thêm sản phẩm </v-btn>
      <v-btn class="ma-2" color="primary" @click="clickActionNext">
        Đặt hàng
      </v-btn>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  props: {
    clickActionNext: {
      type: Function,
    },
  },
};
</script>

<style scoped></style>
