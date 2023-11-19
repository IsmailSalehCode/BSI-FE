<template>
  <v-container fluid>
    <v-col style="text-align: center" cols="12">
      <h2>
        <a
          href="https://drive.google.com/drive/folders/1a9OYMvan8GFMs921dZkwYbymUqTX5Fer?usp=drive_link"
          target="_blank"
          >Click Here</a
        >
        for the latest information regarding our projects.
      </h2>
    </v-col>
    <!-- <v-col cols="12">
      <iframe
        src="https://drive.google.com/embeddedfolderview?id=1a9OYMvan8GFMs921dZkwYbymUqTX5Fer#grid"
        width="100%"
        height="500px"
      ></iframe>
    </v-col> -->
    <v-expansion-panels>
      <v-expansion-panel
        v-for="project in Projects"
        :key="project.id"
        :title="project.title"
      >
        <template #text>
          <div><b>Address: </b>{{ project.address }}</div>
          <iframe
            :src="generateGDrive(project.folderId)"
            width="100%"
            height="200px"
            frameborder="1"
          ></iframe>
        </template>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import { projects } from "@/stores/projectStore";
export default {
  data() {
    return {
      Projects: projects,
    };
  },
  methods: {
    generateGDrive(folderId) {
      return `https://drive.google.com/embeddedfolderview?id=${folderId}#grid`;
    },
  },
};
</script>
