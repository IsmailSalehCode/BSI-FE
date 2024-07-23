<template>
  <v-footer theme="dark" absolute app bottom>
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" style="text-align: center">
          &#169; {{ new Date().getFullYear() }} -
          <strong>Blue Sky Invest Ltd.</strong> All rights reserved.
        </v-col>
        <v-col cols="12" style="text-align: center"
          ><v-btn size="x-small" variant="flat" @click="openTermsAndConditions"
            >Terms & Conditions</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
  <DialogTermsConditions ref="tc" />
</template>

<script>
import DialogTermsConditions from "./DialogTermsConditions.vue";
export default {
  components: {
    DialogTermsConditions,
  },
  methods: {
    openTermsAndConditions() {
      this.$refs.tc.open();
    },
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
