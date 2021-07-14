<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
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
        <info-customer :info="info"></info-customer>
      </v-sheet>
      <div class="my-2"></div>
      <v-sheet min-height="35vh" rounded="lg" class="pa-4">
        <info-drug-store :info="info"></info-drug-store>
      </v-sheet>
      <div class="my-2"></div>
      <v-sheet min-height="35vh" rounded="lg" class="pa-4">
        <v-row>
          <v-col cols="12" md="8" offset-md="2">
            <v-checkbox
              v-model="info.checkNote"
              label="Xuất hóa đơn cho công ty"
            ></v-checkbox>
            <v-textarea
              v-model="info.note"
              outlined
              label="Ghi chú thêm nếu có"
            ></v-textarea>
          </v-col>
        </v-row>
      </v-sheet>
      <div class="my-2"></div>
      <core-group-button :clickActionNext="clickActionNext"></core-group-button>
    </v-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    info: {
      phoneNumber: null,
      gender: "",
      name: "",
      provincial: "",
      district: "",
      address: "",
      dateTake: null,
      hourTake: null,
      checkNote: false,
      note: "",
    },
    valid: true,
    isMenuDate: false,
    isMenuTime: false,
    time: null,
  }),
  methods: {
    ...mapActions("products", ["setInfo"]),
    clickActionNext() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        this.setInfo(this.info);
        this.$router.push({ path: "/payment" });
      } else {
        this.$toast.error("Vui lòng kiểm tra lại thông tin đã điền");
      }
    },
  },
};
</script>

<style scoped></style>
