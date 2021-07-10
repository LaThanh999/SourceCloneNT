<template>
  <div>
    <v-toolbar-title>2. Nhận tại nhà thuốc</v-toolbar-title>
    <v-row class="mt-4">
      <v-col cols="12" md="8" offset-md="2">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12" md="6">
              <v-autocomplete outlined dense label="Tỉnh"></v-autocomplete>
            </v-col>
            <v-col cols="12" md="6">
              <v-autocomplete
                outlined
                dense
                label="Quận/ huyện"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12">
              <v-autocomplete outlined dense label="Phường xã"></v-autocomplete>
            </v-col>
          </v-row>
        </v-form>
        <span>Chọn thời gian nhận hàng</span>
        <v-form ref="form" v-model="valid" class="mt-2" lazy-validation>
          <v-row>
            <v-col cols="12" md="6">
              <v-menu
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    outlined
                    label="Chọn ngày nhận hàng"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    dense
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker @input="isMenuDate = false"></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" md="6">
              <v-menu
                ref="menu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    label="Chọn giờ nhận hàng"
                    prepend-inner-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    dense
                    v-on="on"
                    outlined
                  ></v-text-field>
                </template>
                <v-time-picker
                  full-width
                  @click:minute="$refs.menu.save(time)"
                ></v-time-picker>
              </v-menu>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
  }),
};
</script>

<style scoped></style>
