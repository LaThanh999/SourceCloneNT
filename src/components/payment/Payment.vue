<template>
  <div class="ma-4">
    <div class="d-flex align-center justify-center">
      <v-icon color="primary">mdi mdi-check-circle</v-icon>
      <span class="ml-4 text-notify">Đặt hàng thành công</span>
    </div>
    <ul class="mt-4 ul-circle">
      <li>Người nhận: Anh Nghiêng, <strong>0929143566</strong></li>
      <li class="mt-2">
        Nhận hàng tại nhà thuốc:
        <strong>Phường Hiệp Bình Chánh, Quận Thủ Đức, TP. HCM</strong>
      </li>
      <li class="mt-2">
        Thời gian: <strong>08h - 12h - Ngày mai</strong>(16/11)
      </li>
      <li>
        <v-expansion-panels flat>
          <v-expansion-panel>
            <v-expansion-panel-header style="padding: 0px !important"
              >Xem 7 sản phẩm đã đặt</v-expansion-panel-header
            >
            <v-expansion-panel-content class="mb-2">
              <div class="d-flex flex-column align-center justify-center">
                <v-list-item three-line>
                  <v-list-item-avatar
                    tile
                    size="60"
                    color="grey"
                  ></v-list-item-avatar>
                  <v-list-item-content>
                    <div class="text-overline">Loại thuốc 1</div>
                    <v-list-item-subtitle
                      >Chi tiết loại thuốc 1</v-list-item-subtitle
                    >
                  </v-list-item-content>
                  <div class="mx-12"></div>

                  <div class="text-right">
                    <div class="span_money">1.554.000đ</div>
                  </div>
                </v-list-item>
                <v-list-item three-line>
                  <v-list-item-avatar
                    tile
                    size="60"
                    color="grey"
                  ></v-list-item-avatar>
                  <v-list-item-content>
                    <div class="text-overline">Loại thuốc 1</div>
                    <v-list-item-subtitle
                      >Chi tiết loại thuốc 1</v-list-item-subtitle
                    >
                  </v-list-item-content>
                  <div class="mx-12"></div>

                  <div class="text-right">
                    <div class="span_money">1.554.000đ</div>
                  </div>
                </v-list-item>
                <v-list-item three-line>
                  <v-list-item-avatar
                    tile
                    size="60"
                    color="grey"
                  ></v-list-item-avatar>
                  <v-list-item-content>
                    <div class="text-overline">Loại thuốc 1</div>
                    <v-list-item-subtitle
                      >Chi tiết loại thuốc 1</v-list-item-subtitle
                    >
                  </v-list-item-content>
                  <div class="mx-12"></div>

                  <div class="text-right">
                    <div class="span_money">1.554.000đ</div>
                  </div>
                </v-list-item>
                <v-list-item three-line>
                  <v-list-item-avatar
                    tile
                    size="60"
                    color="grey"
                  ></v-list-item-avatar>
                  <v-list-item-content>
                    <div class="text-overline">Loại thuốc 1</div>
                    <v-list-item-subtitle
                      >Chi tiết loại thuốc 1</v-list-item-subtitle
                    >
                  </v-list-item-content>
                  <div class="mx-12"></div>

                  <div class="text-right">
                    <div class="span_money">1.554.000đ</div>
                  </div>
                </v-list-item>
                <v-list-item three-line>
                  <v-list-item-avatar
                    tile
                    size="60"
                    color="grey"
                  ></v-list-item-avatar>
                  <v-list-item-content>
                    <div class="text-overline">Loại thuốc 1</div>
                    <v-list-item-subtitle
                      >Chi tiết loại thuốc 1</v-list-item-subtitle
                    >
                  </v-list-item-content>
                  <div class="mx-12"></div>

                  <div class="text-right">
                    <div class="span_money">1.554.000đ</div>
                  </div>
                </v-list-item>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </li>
      <li>Tổng tiền: <strong>120.000đ</strong></li>
      <li class="mt-2">Thanh toán <strong>tiền mặt </strong>khi nhận hàng</li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({}),
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
.expansion-panel {
  border: 1px solid #3333;
}
.v-expansion-panel-content {
  overflow: auto;
  max-height: 300px;
}
</style>
