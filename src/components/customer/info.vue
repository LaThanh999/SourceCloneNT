<template>
  <div>
    <v-toolbar-title>1. Thông tin nhận hàng</v-toolbar-title>
    <v-row class="mt-4">
      <v-col cols="12" md="8" offset-md="2">
        <v-text-field
          label="Số điện thoại *"
          outlined
          v-model="info.phoneNumber"
          dense
          type="number"
          :rules="[(v) => !!v || 'Số điện thoại không được để trống']"
          required
          color="primary"
        ></v-text-field>
        <v-radio-group v-model="info.gender" row>
          <v-radio label="Anh"></v-radio>
          <v-radio label="Chị"></v-radio>
        </v-radio-group>
        <v-text-field
          label="Họ và tên *"
          v-model="info.name"
          outlined
          :rules="[(v) => !!v || 'Họ và tên không được để trống']"
          required
          dense
          color="primary"
        ></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    info: Object,
  },
};
</script>

<style scoped lang="scss">
$text-field-line-height: 100px;
$text-field-padding: 4px 0 4px;
$text-field-outlined-margin-bottom: 36px !default;
</style>
