<template>
  <div>
    <v-toolbar-title>1. Thông tin nhận hàng</v-toolbar-title>
    <v-row class="mt-4">
      <v-col cols="12" md="8" offset-md="2">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            label="Số điện thoại *"
            outlined
            dense
            color="primary"
          ></v-text-field>
          <v-radio-group row>
            <v-radio label="Anh"></v-radio>
            <v-radio label="Chị"></v-radio>
          </v-radio-group>
          <v-text-field
            label="Họ và tên *"
            outlined
            dense
            color="primary"
          ></v-text-field>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    customer: {
      phoneNumber: "",
      gender: "",
      name: "",
    },
  }),
};
</script>

<style scoped lang="scss">
$text-field-line-height: 100px;
$text-field-padding: 4px 0 4px;
$text-field-outlined-margin-bottom: 36px !default;
</style>
