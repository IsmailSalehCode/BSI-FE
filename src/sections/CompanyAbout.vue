<template>
  <v-container>
    <!-- <v-row justify="center" align="center">
      <v-col justify="center" align="center">
        <v-card rounded="xl" max-width="280" elevation="10" class="py-2">
          <v-img
            contain
            max-width="300"
            :src="require('../assets/logo-bsi.png')"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
    <br /> -->
    <v-col>
      <v-row justify="center">
        <v-col>
          <v-card elevation="6" class="mx-auto" max-width="600" min-width="300">
            <v-card-title>Welcome</v-card-title>
            <v-card-text>
              In the ever-growing fields of residential, industrial, and public
              construction, Blue Sky Invest excels at fast, cost-effective and
              proper project execution.
            </v-card-text>
            <v-card-text class="pt-0">
              With <b>over 20 years of expertise at project management</b> the
              company possesses and follows well-grounded and established
              principles at every step of the project life cycle, ensuring that
              every investment is profitable.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card elevation="6" class="mx-auto" max-width="500" min-width="300">
            <v-card-title>Looking Ahead</v-card-title>
            <v-card-text>
              We invest in construction projects and collaborate with partners.
            </v-card-text>
            <v-card-text class="pt-0">
              Have an idea? We'd love to
              <a href="/contact"><strong>hear from you!</strong></a>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card elevation="6" class="mx-auto" max-width="500" min-width="300">
            <v-card-title>Services</v-card-title>
            <v-card-text></v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goToServices() {
      this.$router.push("/").catch(() => {});
      this.scrollToId("servicesRow");
    },
  },
};
</script>

<style scoped>
.v-card-text {
  line-height: 22px;
}
</style>
