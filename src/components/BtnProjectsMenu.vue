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

        <div v-if="!isLast(project.title)">
          <v-divider class="mt-2" color="white" inset></v-divider>
        </div>
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
  },
  methods: {
    isLast(title) {
      const lastProject = this.projects[this.projects.length - 1];
      if (title == lastProject.title) {
        return true;
      }
      return false;
    },
  },
};
</script>
<style></style>
