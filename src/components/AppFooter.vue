<template>
  <v-footer absolute app bottom>
    <v-row style="text-align: center" no-gutters>
      <v-col cols="12" class="py-2">
        <span>
          &#169; 2022 - Исмаил Салех,&nbsp;
          <span class="brand-font">SPACE <sup>NGC</sup></span>
        </span>
      </v-col>
      <v-divider></v-divider>
      <!-- <v-col v-for="social in socialMediaItems" :key="social.icon">
        <v-btn
          :href="social.path"
          variant="text"
          rounded="tile"
          color="white"
          stacked
          :prepend-icon="social.icon"
          style="font-weight: 200; text-transform: none !important"
          >{{ social.text }}</v-btn
        >
      </v-col> -->

      <v-col cols="12" class="py-2">
        <ul id="ico">
          <li v-for="social in socialMediaItems" :key="social.icon">
            <!-- <a :href="social.path" target="_blank" style="text-decoration: none"
              ><v-icon>{{ social.icon }}</v-icon>
            </a> -->
            <btn-anim-gradient
              :icon="social.icon"
              :path="social.path"
            ></btn-anim-gradient>
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import BtnAnimGradient from "./BtnAnimGraident.vue";
import { useIsmailStore } from "../stores/ismailStore";

export default {
  components: { BtnAnimGradient },
  setup() {
    const ismailStore = useIsmailStore();
    return { ismailStore };
  },
  data() {
    return {
      socialMediaItems: [
        {
          icon: "mdi-gmail",
          text: this.ismailStore.email.text,
          path: this.ismailStore.email.path,
        },
        {
          icon: "mdi-instagram",
          text: this.ismailStore.instagram.text,
          path: this.ismailStore.instagram.path,
        },
        {
          icon: "mdi-facebook",
          text: this.ismailStore.facebook.text,
          path: this.ismailStore.facebook.path,
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
