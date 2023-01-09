<template>
  <v-footer absolute app bottom>
    <v-row style="text-align: center" no-gutters>
      <v-col cols="12" class="py-2">
        <span>
          &#169; {{ new Date().getFullYear() }} -
          <strong>Blue Sky Invest Ltd.</strong> All rights reserved.
        </span>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12" class="py-2">
        <ul id="ico">
          <li v-for="item in contactItems" :key="item.text">
            <v-btn
              size="small"
              variant="flat"
              :prepend-icon="item.icon"
              :href="item.path"
              >{{ item.text }}</v-btn
            >
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { useContactStore } from "@/stores/contactStore";

export default {
  setup() {
    const contactStore = useContactStore();
    return { contactStore };
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
