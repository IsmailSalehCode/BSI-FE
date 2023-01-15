<template>
  <v-footer theme="dark" absolute app bottom>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" style="text-align: center"
          ><span style="font-size: medium">
            &#169; {{ new Date().getFullYear() }} -
            <strong>Blue Sky Invest Ltd.</strong> All rights reserved.
          </span>
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
                :prepend-icon="item.icon"
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
import { useContactStore } from "@/stores/contactStore";
import { useDisplay } from "vuetify";
import DialogTermsConditions from "./DialogTermsConditions.vue";
export default {
  components: {
    DialogTermsConditions,
  },
  setup() {
    const contactStore = useContactStore();
    const { smAndDown } = useDisplay();
    return { contactStore, smAndDown };
  },
  methods: {
    openTermsAndConditions() {
      this.$refs.tc.open();
    },
  },
  data() {
    return {
      contactItems: [
        {
          icon: "mdi-email-outline",
          text: this.contactStore.email.text,
          path: this.contactStore.email.path,
        },
        {
          icon: "mdi-cellphone",
          text: this.contactStore.phone1.text,
          path: this.contactStore.phone1.path,
        },
        {
          icon: "mdi-cellphone",
          text: this.contactStore.phone2.text,
          path: this.contactStore.phone2.path,
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-footer {
  font-size: small;
}
ul#ico {
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
}
.brand-font {
  font-family: Michroma, sans-serif;
  font-size: smaller;
  word-break: keep-all;
}

.v-btn {
  text-transform: none;
  font-size: 0.87rem;
}
</style>
