<template>
  <div class="ma-4">
    <div class="d-flex align-center justify-center">
      <v-icon color="primary">mdi mdi-check-circle</v-icon>
      <span class="ml-4 text-notify">Đặt hàng thành công</span>
    </div>
    <ul class="mt-4 ul-circle">
      <li>
        Người nhận: <strong>{{ info ? info.name : "" }}</strong>
      </li>
      <li>
        Số điện thoại: <strong>{{ info ? info.phoneNumber : "" }}</strong>
      </li>
      <li class="mt-2">
        Nhận hàng tại nhà thuốc:
        <strong v-if="info">{{ addressTake }}</strong>
      </li>
      <li class="mt-2">
        Thời gian:
        <strong v-if="info">{{ info.hourTake }} - {{ info.dateTake }}</strong>
      </li>
      <li>
        <v-expansion-panels flat>
          <v-expansion-panel>
            <v-expansion-panel-header style="padding: 0px !important"
              >Xem {{ products.length }} sản phẩm đã
              đặt</v-expansion-panel-header
            >
            <v-expansion-panel-content class="mb-2">
              <div
                v-for="(item, index) in products"
                :key="index"
                class="d-flex flex-column align-center justify-center"
              >
                <v-list-item three-line>
                  <v-list-item-avatar
                    tile
                    size="60"
                    color="grey"
                  ></v-list-item-avatar>
                  <v-list-item-content>
                    <div class="text-overline">{{ item.name }}</div>
                    <v-list-item-subtitle>{{
                      item.detail
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                  <div class="mx-12"></div>

                  <div class="text-right">
                    <div class="span_money">{{ item.price }}</div>
                  </div>
                </v-list-item>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </li>
      <li>
        Tổng tiền: <strong>{{ totalPrice }} Đồng</strong>
      </li>
      <li class="mt-2">Thanh toán <strong>tiền mặt </strong>khi nhận hàng</li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data: () => ({
    info: {},
  }),
  mounted() {
    this.getAllProducts();
    this.getInfo().then((res) => {
      this.info = res;
    });
  },
  computed: {
    ...mapState("products", ["products"]),
    addressTake() {
      return `${this.info.provincial} - ${this.info.district} - ${this.info.address}`;
    },
    totalPrice() {
      return this._.sum(this.products.map((x) => x.price));
    },
  },
  methods: {
    ...mapActions("products", ["getAllProducts", "getInfo"]),
  },
};
</script>

<style scoped lang="scss">
.text-notify {
  font-size: 28px;
}
.ul-circle {
  list-style-type: circle;
}
.v-application--is-ltr .v-expansion-panel-header {
  max-width: 250px;
}
.v-expansion-panel-content {
  overflow: auto;
  max-height: 300px;
  border: 1px solid #3333;
}
</style>
