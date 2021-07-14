<template>
  <div>
    <v-toolbar-title>2. Nhận tại nhà thuốc</v-toolbar-title>
    <v-row class="mt-4">
      <v-col cols="12" md="8" offset-md="2">
        <v-row>
          <v-col cols="12" md="6">
            <v-autocomplete
              outlined
              dense
              :rules="[(v) => !!v || 'Tỉnh không được để trống']"
              :items="listProvincial"
              v-model="info.provincial"
              label="Tỉnh"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" md="6">
            <v-autocomplete
              outlined
              dense
              :rules="[(v) => !!v || 'Huyện không được để trống']"
              :items="listDistrict"
              v-model="info.district"
              label="Quận/ huyện"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12">
            <v-text-field
              outlined
              dense
              :rules="[(v) => !!v || 'Địa chỉ không được để trống']"
              v-model="info.address"
              label="Phường xã"
            ></v-text-field>
          </v-col>
        </v-row>
        <span>Chọn thời gian nhận hàng</span>
        <v-row class="mt-4">
          <v-col cols="12" md="6">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="info.dateTake"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  :rules="[(v) => !!v || 'Ngày nhận hàng không được để trống']"
                  v-model="info.dateTake"
                  label="Chọn ngày nhận hàng"
                  prepend-inner-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  dense
                  outlined
                ></v-text-field>
              </template>
              <v-date-picker v-model="info.dateTake" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu.save(info.dateTake)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" md="6">
            <v-dialog
              ref="dialog"
              v-model="modal2"
              :return-value.sync="info.hourTake"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  label="Chọn giờ nhận hàng"
                  :rules="[(v) => !!v || 'Giờ nhận hàng không được để trống']"
                  v-model="info.hourTake"
                  prepend-inner-icon="mdi-clock-time-four-outline"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  dense
                  outlined
                ></v-text-field>
              </template>
              <v-time-picker v-if="modal2" v-model="info.hourTake" full-width>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal2 = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.dialog.save(info.hourTake)"
                >
                  OK
                </v-btn>
              </v-time-picker>
            </v-dialog>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    menu: false,
    modal2: false,
    listProvincial: [
      {
        text: "Hồ Chí Minh",
        value: "Hồ Chí Minh",
      },
      {
        text: "Hà Nội",
        value: "Hà Nội",
      },
    ],
    listDistrict: [
      {
        text: "Quận 1",
        value: "Quận 1",
      },
      {
        text: "Quận 2",
        value: "Quận 2",
      },
    ],
  }),
  props: {
    info: Object,
  },
};
</script>

<style scoped></style>
