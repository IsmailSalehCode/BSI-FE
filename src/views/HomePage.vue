<template>
  <v-container
    style="background-color: #131313"
    :fluid="true"
    class="ma-0 pa-0"
  >
    <!-- short intro -->
    <section class="shortIntroduction">
      "An efficient & seasoned construction project management company"
    </section>
    <!-- end of short intro -->
  </v-container>
  <div>
    <CompanyAbout />
  </div>
  <br />
  <hr />
  <InfoContact id="contact" />
</template>

<script>
import CompanyAbout from "@/sections/CompanyAbout.vue";
import InfoContact from "@/components/InfoContact.vue";

export default {
  components: {
    CompanyAbout,
    InfoContact,
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
