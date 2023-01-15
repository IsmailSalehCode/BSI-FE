<template>
  <v-menu transition="slide-x-transition" theme="dark">
    <template v-slot:activator="{ props }">
      <v-btn size="small" v-bind="props">Projects</v-btn>
    </template>
    <v-list density="compact">
      <v-list-item
        link
        v-for="project in projects"
        :key="project.title"
        :to="project.path"
      >
        <v-list-item-title>{{ project.title }}</v-list-item-title>
        <v-divider
          class="mt-3"
          v-if="project.divider"
          color="white"
          inset
        ></v-divider>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script>
import { useProjectStore } from "@/stores/projectStore";
import { mapState } from "pinia";
export default {
  computed: {
    ...mapState(useProjectStore, ["projects"]),
    noProjects() {
      return this.projectStore.length == 0;
    },
  },
};
</script>
<style></style>
