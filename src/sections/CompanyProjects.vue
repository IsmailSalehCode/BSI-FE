<template>
  <v-container fluid>
    <v-col style="text-align: center" cols="12">
      <h2>
        <a
          href="https://drive.google.com/drive/folders/1a9OYMvan8GFMs921dZkwYbymUqTX5Fer?usp=drive_link"
          target="_blank"
          style="color: #4bb543"
          >Click Here</a
        >
        to browse all project folders.
      </h2>
    </v-col>
    <v-expansion-panels>
      <v-expansion-panel
        v-for="project in Projects"
        :key="project.id"
        :title="project.title"
      >
        <template #text>
          <div><b>Address: </b>{{ project.address }}</div>
          <div>
            <b>Folder: </b
            ><a :href="generateGDriveURL(project.folderId)" target="_blank"
              >Open</a
            >
          </div>
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
    generateGDriveURL(folderId) {
      return `https://drive.google.com/drive/folders/${folderId}?usp=drive_link`;
    },
  },
};
</script>
