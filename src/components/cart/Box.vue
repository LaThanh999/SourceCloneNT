<template>
  <div>
    <v-card color outlined>
      <v-icon class="ml-2" title="Xóa" style="cursor: pointer">
        mdi mdi-close
      </v-icon>
      <v-list-item three-line>
        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <div class="text-overline">Loại thuốc 1</div>
          <v-list-item-subtitle>Chi tiết loại thuốc 1</v-list-item-subtitle>
        </v-list-item-content>

        <div class="d-flex">
          <v-btn outlined small class="mt-3">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <div>
            <v-text-field
              dense
              class="mx-4 mt-2 centered-input"
              value="1"
              type="number"
              min="1"
              outlined
            ></v-text-field>
          </div>
          <v-btn outlined small class="mt-3">
            <v-icon>mdi-minus</v-icon>
          </v-btn>
        </div>

        <div class="mx-12"></div>

        <div class="text-right">
          <div class="span_money">1.554.000đ</div>
          <div class="span_detail_money">1.554.000đ/hộp</div>
        </div>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
.v-text-field {
  width: 60px;
}
.span_money {
  font-weight: 500;
}
.span_detail_money {
  color: rgba(0, 0, 0, 0.6);
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
}
</style>
