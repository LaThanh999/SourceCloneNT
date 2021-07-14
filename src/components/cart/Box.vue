<template>
  <div>
    <v-btn
      icon
      to="/cart"
      class="ml-2 mt-2"
      title="Xóa"
      @click="dialogConfirm = true"
    >
      <v-icon>mdi mdi-close</v-icon>
    </v-btn>
    <v-list-item three-line>
      <div class="d-flex align-center">
        <v-list-item-avatar tile size="60" color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <div class="span_strong mb-1">{{ product.name }}</div>
          <v-list-item-subtitle>{{ product.detail }}</v-list-item-subtitle>
        </v-list-item-content>
        <div class="mx-sm-12"></div>
        <div class="d-flex align-center">
          <v-btn
            class="btn-action"
            outlined
            small
            :disabled="count == product.countMax"
            @click="count += 1"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <div>
            <v-text-field
              v-model="count"
              dense
              class="mx-4 mt-2 centered-input"
              value="1"
              type="number"
              min="1"
              :max="product.countMax"
            ></v-text-field>
          </div>
          <v-btn
            class="btn-action"
            :disabled="count == 1"
            outlined
            small
            @click="count -= 1"
          >
            <v-icon>mdi-minus</v-icon>
          </v-btn>
        </div>
        <div class="mx-sm-12"></div>
        <div class="text-right">
          <div class="span_strong">
            {{ product.price * count }} {{ product.unit }}
          </div>
          <div class="span_detail_money">
            {{ product.price }} {{ product.unit }}
          </div>
        </div>
      </div>
      <modal-confirm
        :dialog="dialogConfirm"
        :closeDialog="closeDialog"
        :saveDialog="saveDialog"
      ></modal-confirm>
    </v-list-item>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    dialogConfirm: false,
    count: 1,
  }),
  methods: {
    ...mapActions("products", ["removeProducts"]),
    closeDialog() {
      this.dialogConfirm = false;
    },
    saveDialog() {
      this.dialogConfirm = false;
      this.removeProducts(this.product.id).then(() => {
        this.$toast.success("Xóa sản phẩm thành công");
      });
    },
  },
  props: {
    product: Object,
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
