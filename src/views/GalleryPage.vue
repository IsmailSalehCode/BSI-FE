<template>
  <v-container style="background-color: #131313">
    <h1 style="text-align: center; letter-spacing: 4px; color: white">
      {{ project.title }}
    </h1>
    <br />
    <v-row justify="center">
      <v-col
        class="d-flex child-flex"
        v-for="photo in project.photos"
        :key="photo.id"
        cols="12"
        sm="6"
        md="4"
      >
        <v-img
          @click="openFullPhoto(photo)"
          :src="photo.url"
          cover
          aspect-ratio="1"
        >
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
  <DialogOpenedPhoto ref="dialog_opened_photo" :collection="project.photos" />
</template>
<script>
import DialogOpenedPhoto from "@/components/DialogOpenedPhoto.vue";
import { useProjectStore } from "@/stores/projectStore";
import { mapState } from "pinia";
export default {
  methods: {
    openFullPhoto(photo) {
      this.$refs.dialog_opened_photo.open(photo);
    },
  },
  components: {
    DialogOpenedPhoto,
  },
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
