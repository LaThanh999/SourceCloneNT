<template>
  <div>
    <v-footer padless color="white" rounded>
      <v-col class="text-center" cols="12">
        <slot>
          <v-btn
            class="ma-2"
            min-width="160"
            max-width="160"
            outlined
            color="primary"
          >
            <v-icon v-if="true" color="primary" class="mr-2"
              >mdi mdi-check-circle</v-icon
            >
            Tiền mặt
          </v-btn>
          <v-btn
            class="ma-2"
            outlined
            color="primary"
            min-width="160"
            max-width="160"
          >
            Cà thẻ
          </v-btn>
          <div class="ma-4"></div>
          <div>Hoặc anh chị có thể thanh toán bằng cách:</div>
          <div>
            <v-btn
              class="ma-2"
              outlined
              color="primary"
              min-width="160"
              max-width="160"
            >
              Thẻ ATM
            </v-btn>
            <v-btn
              class="ma-2"
              outlined
              color="primary"
              min-width="160"
              max-width="160"
            >
              Visa, Master, JCB
            </v-btn>
          </div>
          <div>
            <v-btn
              class="ma-2"
              outlined
              color="primary"
              min-width="160"
              max-width="160"
            >
              Ví momo
            </v-btn>
            <v-btn
              class="ma-2"
              outlined
              color="primary"
              min-width="160"
              max-width="160"
            >
              Ví zalo
            </v-btn>
          </div>
        </slot>
      </v-col>
    </v-footer>
    <div class="mt-4 text-center">
      <v-btn
        class="ma-2"
        outlined
        color="primary"
        min-width="160"
        max-width="160"
      >
        <v-icon>mdi mdi-close</v-icon>
        Hủy đơn hàng
      </v-btn>
      <v-btn
        class="ma-2"
        outlined
        color="primary"
        min-width="160"
        max-width="160"
      >
        Về trang chủ
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
