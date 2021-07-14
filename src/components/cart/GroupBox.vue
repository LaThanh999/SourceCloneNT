<template>
  <div>
    <v-card color outlined>
      <div v-for="(item, index) in getProducts" :key="index">
        <cart-box :product="item"></cart-box>
        <v-divider></v-divider>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    dialogConfirm: false,
  }),

  methods: {
    ...mapActions("products", ["getAllProducts"]),
  },

  async mounted() {
    await this.getAllProducts();
  },

  computed: {
    ...mapGetters("products", ["getProducts"]),
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
