<template>
  <v-dialog
    :fullscreen="isMobile"
    style="max-width: 900px"
    v-model="dialog"
    transition="dialog-bottom-transition"
  >
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
            <img-c :src="getImg('foundation.webp')" />
          </v-col>
          <v-col cols="12">
            <img-c :src="getImg('foundation2_3.webp')" />
          </v-col>
          <v-col cols="12" class="pb-0">
            <p>2. {{ $t("walls-and-ceiling") }}</p>
          </v-col>
          <v-col cols="12">
            <img-c :src="getImg('walls-and-ceiling.webp')" />
          </v-col>
          <v-col cols="12" class="pb-0">
            <p>3. {{ $t("el-plumbing-plastering") }}</p>
          </v-col>
          <v-col cols="12">
            <img-c :src="getImg('electrical-plumbing-plastering.webp')" />
          </v-col>
          <v-col cols="12" class="pb-0">
            <p>4. {{ $t("truck-loading") }}</p>
          </v-col>
          <v-col style="max-width: 450px">
            <img-c :src="getImg('truck-loading.webp')" />
          </v-col>
          <v-col cols="12" class="pb-0">
            <h3>II. {{ $t("mounting-the-modules") }}</h3>
          </v-col>
          <v-col cols="12" class="pb-0">
            <p>1. {{ $t("transport-and-unloading") }}</p>
          </v-col>
          <v-col cols="12" style="max-width: 450px">
            <img-c :src="getImg('transport-unloading.webp')" />
          </v-col>
          <v-col cols="12" class="pb-0">
            <p>2. {{ $t("modules-install") }}</p>
          </v-col>
          <v-col cols="12">
            <img-c :src="getImg('modules-installation.webp')" />
          </v-col>
          <v-col cols="12" class="pb-0">
            <p>3. {{ $t("finishing-works") }}</p>
          </v-col>
          <v-col cols="12">
            <img-c :src="getImg('finishing-works.webp')" />
          </v-col>
          <v-col cols="12" class="pb-0">
            <p>4. {{ $t("roof-installation") }}</p>
          </v-col>
          <v-col cols="12">
            <img-c :src="getImg('roof-installation.webp')" />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn block variant="tonal" @click="close" color="success">{{
          $t("close")
        }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import ImgC from "./ImgC.vue";
import { isMobileMixin } from "../utils/isMobileMixin.js";

export default {
  components: { ImgC },
  mixins: [isMobileMixin],
  data() {
    return {
      dialog: false,
      mHousesStagesImgsRoot: "/mhouses/stages",
    };
  },
  methods: {
    getImg(name) {
      return `${this.mHousesStagesImgsRoot}/${name}`;
    },
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },
  },
};
</script>
