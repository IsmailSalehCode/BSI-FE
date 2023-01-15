<template>
  <div>
    <v-card class="mx-auto" rounded="0" flat>
      <v-carousel cycle hide-delimiters show-arrows="hover">
        <v-carousel-item v-for="(link, i) in links" :key="i" eager>
          <v-img
            class="cardTitle"
            :src="link.landing.photo"
            height="100%"
            width="100%"
            eager
            style="background-color: #262626"
          >
            <div v-if="mdAndUp">
              <v-card-text class="titleBg py-0">
                {{ link.title }}
              </v-card-text>
              <v-card-title class="titleBg pt-0">
                {{ link.address }}
              </v-card-title>
            </div>
            <v-card-text
              class="titleBg py-0 px-1"
              justify="center"
              v-if="smAndDown"
            >
              <v-icon x-small dark>mdi-map-marker</v-icon>
              <span style="font-size: 0.85em"
                ><i> {{ link.title }}, {{ link.address }}</i></span
              >
            </v-card-text>
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular
                  color="grey-lighten-4"
                  indeterminate
                ></v-progress-circular>
              </div>
            </template>
          </v-img>
        </v-carousel-item>
      </v-carousel>
    </v-card>
  </div>
</template>

<script>
import { useDisplay } from "vuetify";

const albums = require.context("../albums", true, /^.*\.json$/);
export default {
  setup() {
    // Destructure only the keys we want to use
    const { smAndDown, mdAndUp } = useDisplay();

    return { smAndDown, mdAndUp };
  },
  data() {
    return {};
  },

  computed: {
    links() {
      const result = [];
      albums.keys().forEach((key) => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i);
        if (matched && matched.length > 1) {
          const element = matched[1];
          result[element] = albums(key);
        }
      });
      let sortable = [];
      const resultValues = Object.values(result);
      for (var project in resultValues) {
        sortable.push(resultValues[project]);
      }
      sortable = sortable.sort((a, b) => a.landing.order - b.landing.order);
      return sortable;
    },
    cardMaxWidth() {
      let width = "1000";

      switch (this.name.value) {
        case "xs":
        case "sm":
          width = 500;
          break;
        case "md":
        case "lg":
          width = 900;
          break;
        case "xl":
          width = 1060;
          break;
      }
      // console.log(this.$vuetify.breakpoint.name);
      return width;
    },
  },
};
</script>

<style>
.cardTitle {
  background-color: white;
  color: white;
  font-weight: 550;
  align-items: flex-end;
}
.titleBg {
  /* transition: all 0.2s ease; */
  background-color: rgba(0, 0, 0, 0.39);
  color: white !important;
}
</style>
