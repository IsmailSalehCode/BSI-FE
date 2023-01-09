<template>
  <v-footer theme="dark" absolute app bottom>
    <v-container>
      <v-row style="text-align: center">
        <v-col cols="12">
          <span>
            &#169; {{ new Date().getFullYear() }} -
            <strong>Blue Sky Invest Ltd.</strong> All rights reserved.
          </span>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center" style="text-align: center">
            <v-col cols="6">
              <v-btn size="small" variant="flat" @click="openTermsAndConditions"
                >Terms & Conditions</v-btn
              >
            </v-col>
            <v-col cols="6">
              <div v-for="item in contactItems" :key="item.text">
                <v-btn
                  size="small"
                  variant="flat"
                  :prepend-icon="item.icon"
                  :href="item.path"
                  >{{ item.text }}</v-btn
                >
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import { useContactStore } from "@/stores/contactStore";

export default {
  setup() {
    const contactStore = useContactStore();
    return { contactStore };
  },
  methods: {
    openTermsAndConditions() {
      console.log(1);
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
</style>
