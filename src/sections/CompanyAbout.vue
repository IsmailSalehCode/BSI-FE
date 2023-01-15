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
              every investment our clients make is profitable.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card elevation="6" class="mx-auto" max-width="500" min-width="300">
            <v-card-title>By hiring Blue Sky Invest...</v-card-title>
            <v-card-text>
              you not only hire that seasoned professional, but a whole team of
              subcontractors who are experts in their respective fields and have
              experience working as a team. Whether it be a new construction
              project, a renovation, or a remodel, BSI has the leadership and
              the skills needed to deliver the best services to our clients
              before the shovel hits the ground.
            </v-card-text>
            <v-card-text class="pt-0">
              The benefits of hiring a general contractor increase the overall
              value of a building as well as provide you, the owner, a relaxed
              and enjoyable experience before, during, and after the actual
              construction
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card elevation="6" class="mx-auto" max-width="500" min-width="300">
            <v-card-title>Safety Commitment</v-card-title>
            <v-card-text>
              We are dedicated to working safely and strive to achieve “Zero
              Accidents” on every project we build. In addition to enforcing
              <a
                href="https://www.osha.gov/sites/default/files/publications/osha3021.pdf"
                target="_blank"
                >OSHA regulations</a
              >, we provide ongoing training and leadership to our staff and
              labor force to ensure a safe work site.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card elevation="6" class="mx-auto" max-width="500" min-width="300">
            <v-card-title>Looking Ahead</v-card-title>
            <v-card-text>
              We also invest in construction projects and collaborate with
              partners.
            </v-card-text>
            <v-card-text class="pt-0">
              Have an idea? We'd love to
              <a href="/contact">hear from you!</a>
            </v-card-text>
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
a {
  font-weight: bold;
}
.v-card-text {
  text-indent: 4px;
  text-align: justify;
}
</style>
