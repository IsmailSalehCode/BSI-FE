<template>
  <v-container>
    <v-col>
      <v-row justify="center">
        <v-col>
          <v-card elevation="6" class="mx-auto" max-width="600" min-width="300">
            <v-card-title>{{ $t("welcome") }}</v-card-title>
            <v-card-text>
              {{ $t("about-p1") }}
            </v-card-text>
            <v-card-text class="pt-0">
              <div v-html="aboutp2"></div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card elevation="6" class="mx-auto" max-width="500" min-width="300">
            <v-card-title>{{ $t("by-hiring-bsi") }}</v-card-title>
            <v-card-text>
              {{ $t("about-p3") }}
            </v-card-text>
            <v-card-text class="pt-0">
              {{ $t("about-p4") }}
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card elevation="6" class="mx-auto" max-width="500" min-width="300">
            <v-card-title>{{ $t("safety-commitment") }}</v-card-title>
            <v-card-text>
              {{ $t("in-addition-to-enforcing") }}
              <a
                class="customLink"
                href="https://www.mlsp.government.bg/usloviya-na-trud"
                target="_blank"
                >{{ $t("government-regulations") }}</a
              >{{ $t("about-p5") }}
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card elevation="6" class="mx-auto" max-width="500" min-width="300">
            <v-card-title>{{ $t("la") }}</v-card-title>
            <v-card-text>
              {{ $t("la-p1") }}
            </v-card-text>
            <v-card-text class="pt-0">
              {{ $t("la-p2") }}
              <router-link to="#contact" class="customLink">{{
                $t("hear-from-you")
              }}</router-link>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>
<script>
export default {
  computed: {
    aboutp2() {
      return this.$t("about-p2");
    },
  },
};
</script>
<style>
a {
  font-weight: bold;
}
.v-card-text {
  text-indent: 5px;
  text-align: justify;
}
</style>
