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
            <v-autocomplete
              outlined
              dense
              prepend-inner-icon="mdi-calendar"
              :rules="[(v) => !!v || 'Ngày nhận hàng không được để trống']"
              :items="listDateTake"
              v-model="info.dateTake"
              label="Ngày nhận hàng "
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" md="6">
            <v-autocomplete
              outlined
              dense
              prepend-inner-icon="mdi-clock-time-four-outline"
              :rules="[(v) => !!v || 'Thời gian nhận hàng không được để trống']"
              :items="listHourTake"
              v-model="info.hourTake"
              label="Thời gian nhận hàng"
            ></v-autocomplete>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
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
    listDateTake: [
      {
        text: "16-07 ( Ngày mai)",
        value: "16-07 ( Ngày mai)",
      },
      {
        text: "17-07",
        value: "17-07",
      },
      {
        text: "18-07",
        value: "18-07",
      },
    ],
    listHourTake: [
      {
        text: "Trước 12g",
        value: "Trước 12g",
      },
      {
        text: "Trước 18g",
        value: "Trước 18g",
      },
      {
        text: "Sau 18g",
        value: "Sau 18g",
      },
    ],
  }),
  props: {
    info: Object,
  },
};
</script>

<style scoped></style>
