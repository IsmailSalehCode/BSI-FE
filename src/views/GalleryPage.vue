<template>
  <v-container>
    <h2>{{ project.title }}</h2>
    <v-row>
      <v-col
        class="d-flex child-flex"
        v-for="photo in project.photos"
        :key="photo.id"
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
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  padding: 40px;
}

.heading-text {
  margin-bottom: 2rem;
  font-size: 2rem;
}

.heading-text span {
  font-weight: 100;
}

/* Responsive image gallery rules begin*/

.image-gallery {
  /* Mobile first */
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.image-gallery .column {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.image-item img {
  width: 100%;
  border-radius: 5px;
  height: 100%;
  object-fit: cover;
}

@media only screen and (min-width: 768px) {
  .image-gallery {
    flex-direction: row;
  }
}

/* overlay styles */

.image-item {
  position: relative;
  cursor: pointer;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(57, 57, 57, 0.502);
  top: 0;
  left: 0;
  transform: scale(0);
  transition: all 0.2s 0.1s ease-in-out;
  color: #fff;
  /* center overlay content */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* hover */
.image-item:hover .overlay {
  transform: scale(1);
}
</style>
