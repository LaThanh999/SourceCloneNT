<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="400">
      <v-card>
        <v-card-title class="text-h6">
          Bạn muốn xóa sản phẩm này ?
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="ma-2"
            outlined
            color="primary"
            min-width="140"
            max-width="140"
            @click="closeDialog"
          >
            Đóng
          </v-btn>
          <v-btn
            class="ma-2"
            depressed
            color="primary"
            min-width="140"
            max-width="140"
            @click="saveDialog"
          >
            Xác nhận
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    dialog: Boolean,
    closeDialog: Function,
    saveDialog: Function,
  },
};
</script>

<style scoped></style>
