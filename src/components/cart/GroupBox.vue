<template>
  <div>
    <v-card color outlined>
      <div v-for="(item, index) in products" :key="index">
        <cart-box :product="item"></cart-box>
        <v-divider></v-divider>
      </div>
    </v-card>
    <modal-confirm
      :dialog="dialogConfirm"
      :closeDialog="closeDialog"
      :saveDialog="saveDialog"
    ></modal-confirm>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({
    dialogConfirm: false,
  }),

  methods: {
    closeDialog() {
      this.dialogConfirm = false;
    },
    saveDialog() {
      this.dialogConfirm = false;
      this.$toast.success("Xóa sản phẩm thành công");
    },
  },

  mounted() {
    console.log(this.products);
  },

  computed: {
    ...mapState("products", ["products"]),
  },
};
</script>

<style lang="scss" scoped>
.v-text-field {
  width: 50px;
}
.span_strong {
  font-weight: 500;
}
.span_detail_money {
  color: rgba(0, 0, 0, 0.6);
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
}
.v-sheet.v-card {
  overflow-x: auto;
}
@media only screen and (max-width: 600px) {
  .btn-action {
    display: none !important;
  }
}
</style>
