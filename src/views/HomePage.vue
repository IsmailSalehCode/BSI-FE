<template>
  <v-container
    style="background-color: #131313"
    :fluid="true"
    class="ma-0 pa-0"
  >
    <LandingCarousel />
    <!-- short intro -->
    <div class="shortIntroduction">
      "An efficient & seasoned construction project management company"
    </div>
    <!--  -->
  </v-container>
</template>

<script>
import LandingCarousel from "@/components/LandingCarousel.vue";

// import TopTags from "@/components/tags/TopTags.vue";
// import LandingIntro from "../sections/LandingIntro.vue";
export default {
  components: {
    LandingCarousel,

    // LandingIntro,
    // TopTags,
  },
  methods: {
    log_isMobile() {
      alert(this.$vuetify.display.mobile);
    },
  },
};
</script>

<style scoped>
.shortIntroduction {
  background-color: black;
  color: white;
  font-size: 1.15em;
  font-weight: 300;
  text-align: center;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  font-style: italic;
}
</style>
