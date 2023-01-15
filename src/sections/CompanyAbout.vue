<template>
  <v-container>
    <v-row justify="center" align="center">
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
    <br />
    <v-col>
      <v-row justify="center">
        <v-col>
          <v-card elevation="6" class="mx-auto" max-width="600" min-width="300">
            <v-card-title>Welcome</v-card-title>
            <v-card-text
              >In the ever-growing fields of residential, industrial, and public
              construction, Blue Sky Invest excels at fast, cost-effective and
              proper project execution.<br />
              With <b>over 20 years of expertise at project management</b> the
              company possesses and follows well-grounded and established
              principles at every step of the project life cycle, ensuring that
              every investment is profitable.</v-card-text
            >
          </v-card>
        </v-col>
        <v-col>
          <v-card elevation="6" class="mx-auto" max-width="500" min-width="300">
            <v-card-title>Looking Ahead</v-card-title>
            <v-card-text>
              We invest in construction projects and collaborate with
              partners.<br />
              Have an idea? We'd love to
              <a href="/contact"><strong>hear from you!</strong></a>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card elevation="6" class="mx-auto" max-width="500" min-width="300">
            <v-card-title>Looking for a Job?</v-card-title>
            <v-card-text>
              Here at BSI we take pride in nurturing the talent of aspiring
              engineers and architects. The tried-and-tested expertise of our
              current staff is what drives our company forward and the force
              that may propel your career to the next level. That is why we
              offer training and the ability to develop as a unique individual
              in the industry.
              <a href="/jobs"
                ><strong>Check out what we are looking for!</strong></a
              ></v-card-text
            >
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

<style scoped></style>
