<template>
  <v-container
    style="background-color: #131313"
    :fluid="true"
    class="ma-0 pa-0"
  >
    <CarouselHome />

    <!-- short intro -->
    <section class="shortIntroduction">"{{ $t("short-intro") }}"</section>
    <!-- end of short intro -->
  </v-container>
  <div id="projects">
    <CompanyProjects />
  </div>
  <div id="about">
    <CompanyAbout />
  </div>
  <br />
  <div id="partners">
    <CompanyPartners />
  </div>
  <br />
  <hr style="border: 2px solid black" />
  <InfoContact id="contact" />
</template>

<script>
import CompanyAbout from "@/sections/CompanyAbout.vue";
import CompanyPartners from "@/sections/CompanyPartners.vue";
import InfoContact from "@/components/InfoContact.vue";
import CarouselHome from "@/components/CarouselHome.vue";
import CompanyProjects from "@/sections/CompanyProjects.vue";

export default {
  components: {
    CompanyAbout,
    InfoContact,
    CarouselHome,
    CompanyProjects,
    CompanyPartners,
  },
  // methods: {
  //   log_isMobile() {
  //     alert(this.$vuetify.display.mobile);
  //   },
  // },
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
