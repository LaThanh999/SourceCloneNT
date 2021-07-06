<template>
  <div>
    <v-card color outlined>
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
            <v-list-item-avatar
              tile
              size="60"
              color="grey"
            ></v-list-item-avatar>
            <v-list-item-content>
              <div class="span_strong mb-1">Loại thuốc 1</div>
              <v-list-item-subtitle>Chi tiết loại thuốc 1</v-list-item-subtitle>
            </v-list-item-content>
            <div class="mx-sm-12"></div>
            <div class="d-flex align-center">
              <v-btn class="btn-action" outlined small>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
              <div>
                <v-text-field
                  dense
                  class="mx-4 mt-2 centered-input"
                  value="1"
                  type="number"
                  min="1"
                ></v-text-field>
              </div>
              <v-btn class="btn-action" outlined small>
                <v-icon>mdi-minus</v-icon>
              </v-btn>
            </div>
            <div class="mx-sm-12"></div>
            <div class="text-right">
              <div class="span_strong">155.000đ</div>
              <div class="span_detail_money">155.000đ/hộp</div>
            </div>
          </div>
        </v-list-item>
      </div>
      <v-divider></v-divider>
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
            <v-list-item-avatar
              tile
              size="60"
              color="grey"
            ></v-list-item-avatar>
            <v-list-item-content>
              <div class="span_strong mb-1">Loại thuốc 1</div>
              <v-list-item-subtitle>Chi tiết loại thuốc 1</v-list-item-subtitle>
            </v-list-item-content>
            <div class="mx-sm-12"></div>
            <div class="d-flex align-center">
              <v-btn class="btn-action" outlined small>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
              <div>
                <v-text-field
                  dense
                  class="mx-4 mt-2 centered-input"
                  value="1"
                  type="number"
                  min="1"
                ></v-text-field>
              </div>
              <v-btn class="btn-action" outlined small>
                <v-icon>mdi-minus</v-icon>
              </v-btn>
            </div>
            <div class="mx-sm-12"></div>
            <div class="text-right">
              <div class="span_strong">1.554.000đ</div>
              <div class="span_detail_money">1.554.000đ/hộp</div>
            </div>
          </div>
        </v-list-item>
      </div>
      <v-divider></v-divider>
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
            <v-list-item-avatar
              tile
              size="60"
              color="grey"
            ></v-list-item-avatar>
            <v-list-item-content>
              <div class="span_strong mb-1">Loại thuốc 1</div>
              <v-list-item-subtitle>Chi tiết loại thuốc 1</v-list-item-subtitle>
            </v-list-item-content>
            <div class="mx-sm-12"></div>
            <div class="d-flex align-center">
              <v-btn class="btn-action" outlined small>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
              <div>
                <v-text-field
                  dense
                  class="mx-4 mt-2 centered-input"
                  value="1"
                  type="number"
                  min="1"
                ></v-text-field>
              </div>
              <v-btn class="btn-action" outlined small>
                <v-icon>mdi-minus</v-icon>
              </v-btn>
            </div>
            <div class="mx-sm-12"></div>
            <div class="text-right">
              <div class="span_strong">1.554.000đ</div>
              <div class="span_detail_money">1.554.000đ/hộp</div>
            </div>
          </div>
        </v-list-item>
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
