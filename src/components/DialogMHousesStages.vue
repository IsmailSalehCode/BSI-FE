<template>
  <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition">
    <v-card>
      <v-toolbar density="compact">
        <v-spacer></v-spacer>
        <v-btn icon @click="close"> ╳ </v-btn>
      </v-toolbar>
      <v-card-title class="justify-center pt-5 text-center">{{
        $t("title-mhouses-stages")
      }}</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" class="pb-0">
            <h3>I. {{ $t("on-site-module-building") }}</h3>
          </v-col>
          <v-col cols="12" class="pb-0">
            <p>1. {{ $t("foundation") }}</p>
          </v-col>
          <v-col cols="12">
            <img-c :src="imgFoundation" />
          </v-col>
          <v-col cols="12">
            <img-c :src="imgFoundation2_3" />
          </v-col>
          <v-col cols="12" class="pb-0">
            <p>2. {{ $t("walls-and-ceiling") }}</p>
          </v-col>
          <v-col cols="12">
            <img-c :src="imgWallsAndCeiling" />
          </v-col>
          <v-col cols="12" class="pb-0">
            <p>3. {{ $t("el-plumbing-plastering") }}</p>
          </v-col>
          <v-col cols="12">
            <img-c :src="imgElPlPl" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import ImgC from "./ImgC.vue";
export default {
  components: { ImgC },
  computed: {
    imgFoundation() {
      return `${this.mHousesStagesImgsRoot}/foundation.webp`;
    },
    imgFoundation2_3() {
      return `${this.mHousesStagesImgsRoot}/foundation2_3.webp`;
    },
    imgWallsAndCeiling() {
      return `${this.mHousesStagesImgsRoot}/walls-and-ceiling.webp`;
    },
    imgElPlPl() {
      return `${this.mHousesStagesImgsRoot}/electrical-plumbing-plastering.webp`;
    },
  },
  data() {
    return {
      dialog: false,
      mHousesStagesImgsRoot: "/mhouses/stages",
    };
  },
  methods: {
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },
  },
};
</script>
<style lang=""></style>
