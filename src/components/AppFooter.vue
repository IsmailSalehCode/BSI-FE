<template>
  <v-footer theme="dark" absolute app bottom>
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" style="text-align: center">
          &#169; {{ new Date().getFullYear() }} -
          <strong>Blue Sky Invest Ltd.</strong> All rights reserved.
        </v-col>
        <v-col cols="12" md="6" style="text-align: center"
          ><v-btn size="small" variant="flat" @click="openTermsAndConditions"
            >Terms & Conditions</v-btn
          >
        </v-col>
        <v-divider
          :class="smAndDown ? 'd-none' : 'd-flex'"
          vertical
        ></v-divider>
        <v-col cols="12" md="6" style="text-align: center">
          <v-row justify="center" align="center" no-gutters>
            <v-col v-for="item in contactItems" :key="item.text">
              <v-btn
                size="small"
                variant="flat"
                :prepend-icon="determineIcon(item.label)"
                :href="item.path"
                >{{ item.text }}</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
  <DialogTermsConditions ref="tc" />
</template>

<script>
import { email, phone1, phone2 } from "../stores/contactStore";
import { useDisplay } from "vuetify";
import DialogTermsConditions from "./DialogTermsConditions.vue";
import { mdiEmailOutline, mdiCellphone } from "@mdi/js";
export default {
  components: {
    DialogTermsConditions,
  },
  setup() {
    const { smAndDown } = useDisplay();
    const iconMail = mdiEmailOutline;
    const iconPhone = mdiCellphone;

    return { smAndDown, iconMail, iconPhone };
  },
  methods: {
    openTermsAndConditions() {
      this.$refs.tc.open();
    },
    determineIcon(label) {
      switch (label) {
        case "E-mail":
          return this.iconMail;
        case "Phone №1":
        case "Phone №2":
          return this.iconPhone;
      }
    },
  },
  data() {
    return {
      contactItems: [email, phone1, phone2],
    };
  },
};
</script>

<style scoped>
ul#ico {
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
}

.v-btn {
  text-transform: none;
  font-size: 0.87rem;
}
</style>
