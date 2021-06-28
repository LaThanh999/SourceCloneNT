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
      <v-toolbar-title>1. Thông tin nhận hàng</v-toolbar-title>
      <v-row class="mt-4">
        <v-col cols="6" offset="3">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              label="Số điện thoại *"
              outlined
              color="primary"
            ></v-text-field>
            <v-radio-group row>
              <v-radio label="Anh"></v-radio>
              <v-radio label="Chị"></v-radio>
            </v-radio-group>
            <v-text-field
              label="Họ và tên *"
              outlined
              color="primary"
            ></v-text-field>
          </v-form>
        </v-col>
      </v-row>
    </v-sheet>
    <div class="my-2"></div>
    <v-sheet min-height="35vh" rounded="lg" class="pa-4">
      <v-toolbar-title>2. Nhận tại nhà thuốc</v-toolbar-title>
      <v-row class="mt-4">
        <v-col cols="6" offset="3">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
              <v-col cols="6">
                <v-autocomplete outlined label="Tỉnh"></v-autocomplete>
              </v-col>
              <v-col cols="6">
                <v-autocomplete outlined label="Quận/ huyện"></v-autocomplete>
              </v-col>
              <v-col cols="12">
                <v-autocomplete outlined label="Phường xã"></v-autocomplete>
              </v-col>
            </v-row>
          </v-form>
          <span>Chọn thời gian nhận hàng</span>
          <v-form ref="form" v-model="valid" class="mt-2" lazy-validation>
            <v-row>
              <v-col cols="6">
                <v-menu
                  v-model="isMenuDate"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      outlined
                      label="Chọn ngày nhận hàng"
                      prepend-inner-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker @input="isMenuDate = false"></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="6">
                <v-menu
                  ref="menu"
                  v-model="isMenuTime"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      label="Chọn giờ nhận hàng"
                      prepend-inner-icon="mdi-clock-time-four-outline"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      outlined
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="isMenuTime"
                    full-width
                    @click:minute="$refs.menu.save(time)"
                  ></v-time-picker>
                </v-menu>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-sheet>
    <div class="my-2"></div>
    <v-sheet min-height="35vh" rounded="lg" class="pa-4">
      <v-row>
        <v-col cols="6" offset="3">
          <v-checkbox label="Xuất hóa đơn cho công ty"></v-checkbox>
          <v-textarea outlined label="Ghi chú thêm nếu có"></v-textarea>
        </v-col>
      </v-row>
    </v-sheet>
    <div class="my-2"></div>
    <core-group-button></core-group-button>
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
};
</script>

<style scoped></style>
