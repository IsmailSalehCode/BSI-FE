<template>
  <v-container>
    <h2>{{ project.title }}</h2>
    <br />
    <v-row>
      <v-col
        class="d-flex child-flex"
        v-for="photo in project.photos"
        :key="photo.id"
        cols="12"
        sm="6"
        md="6"
        xl="3"
      >
        <v-img :src="photo.url">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="blue"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { useProjectStore } from "@/stores/projectStore";
import { mapState } from "pinia";
export default {
  computed: {
    targetId() {
      return this.$route.params.id;
    },
    ...mapState(useProjectStore, ["projects"]),
    project() {
      for (let i = 0; i < this.projects.length; i++) {
        const element = this.projects[i];
        if (element.id == this.targetId) {
          return element;
        }
      }
      return null;
    },
  },
};
</script>
<style scoped></style>
