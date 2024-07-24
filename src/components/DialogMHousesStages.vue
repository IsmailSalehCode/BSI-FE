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
        <h3>I. {{ $t("on-site-module-building") }}</h3>
        <p>1. {{ $t("foundation") }}</p>
        <img-c :src="imgFoundation" />
        <br />
        <img-c :src="imgFoundation2_3" />
        <br />
        <p>2. {{ $t("walls-and-ceiling") }}</p>
        <img-c :src="imgWallsAndCeiling" />
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
