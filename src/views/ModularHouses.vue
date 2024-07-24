<template>
  <v-container>
    <v-row class="text-center align-center">
      <v-col cols="12" md="4" lg="5">
        <h1>{{ $t("modular-houses") }}</h1>
      </v-col>
      <v-col cols="12" md="8" lg="7">
        <h2>{{ $t("delivery-time") }}</h2>
        <v-btn
          style="text-transform: none"
          variant="plain"
          @click="openDialog('see-stages')"
          >{{ $t("btn-label-see-stages") }}</v-btn
        >
        <h3 class="pb-2">{{ $t("unlimited-possibilities") }}</h3>
        <p>{{ $t("unlimited-possibilities-p") }}</p>
      </v-col>
      <v-container>
        <ExpansionPanelsMHousesImplementations />
      </v-container>
      <v-col cols="12" class="pb-0">
        <h2>{{ $t("cta") }}</h2>
      </v-col>
      <InfoContact />
    </v-row>
    <DialogMHousesStages ref="see_stages" />
  </v-container>
</template>
<script>
import DialogMHousesStages from "../components/DialogMHousesStages.vue";
import ExpansionPanelsMHousesImplementations from "../components/ExpansionPanelsMHousesImplementations.vue";
import InfoContact from "@/components/InfoContact.vue";
export default {
  components: {
    DialogMHousesStages,
    ExpansionPanelsMHousesImplementations,
    InfoContact,
  },
  methods: {
    openDialog(action) {
      switch (action) {
        case "see-stages":
          this.$refs.see_stages.open();
          break;
      }
    },
  },
};
</script>
<style></style>
