<template>
  <v-dialog theme="dark" max-width="850px" v-model="dialog">
    <v-card>
      <v-toolbar density="compact">
        <v-spacer></v-spacer>
        <v-btn icon color="red" @click="close">
          <v-icon>mdi-window-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-img :src="currentPhoto.url"></v-img>
      <!-- <v-card-text> Collection: {{ collection.title }} </v-card-text> -->
      <v-card-actions class="pt-0 mt-0">
        <v-row no-gutters class="pt-0 mt-0">
          <v-col cols="6"
            ><v-btn
              size="small"
              block
              rounded="0"
              elevation="0"
              @click="setPhoto('previous')"
              >&ltcc;</v-btn
            ></v-col
          >
          <v-col cols="6"
            ><v-btn
              size="small"
              block
              rounded="0"
              elevation="0"
              @click="setPhoto('next')"
              >&gtcc;</v-btn
            ></v-col
          >
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    collection: Object,
  },
  created() {
    window.addEventListener("keydown", (e) => {
      if (this.dialog) {
        switch (e.key) {
          case "Escape":
          case "Backspace":
            this.close();
            break;
          case "ArrowRight":
          case "ArrowUp":
            this.setPhoto("next");
            break;
          case "ArrowLeft":
          case "ArrowDown":
            this.setPhoto("previous");
            break;
        }
      }
    });
  },
  data() {
    return {
      dialog: false,
      currentPhoto: null,
    };
  },
  methods: {
    setPhoto(target) {
      const photosCollection = this.collection.photos;
      const len = photosCollection.length;
      const currentIndex = this.getCurrentPhotoIndex(photosCollection);
      let photo;
      switch (target) {
        case "previous":
          photo = photosCollection[(currentIndex + len - 1) % len];
          break;
        case "next":
          photo = photosCollection[(currentIndex + 1) % len];
          break;
        default:
          break;
      }
      this.currentPhoto = photo;
    },
    getCurrentPhotoIndex(photosCollection) {
      for (let i = 0; i < photosCollection.length; i++) {
        const element = photosCollection[i];
        if (this.currentPhoto.id == element.id) {
          return i;
        }
      }
    },
    open(photo) {
      this.currentPhoto = photo;
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },
  },
};
</script>
<style scoped>
p {
  line-height: 25px;
}
</style>
