<template>
  <v-dialog theme="dark" max-width="850px" v-model="dialog">
    <v-card>
      <v-toolbar density="compact">
        <v-spacer></v-spacer>
        <v-btn icon @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-img :src="currentPhoto.url"></v-img>
      <!-- <v-card-text> Collection: {{ collection.title }} </v-card-text> -->
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    collection: Array,
  },
  data() {
    return {
      dialog: false,
      currentPhoto: null,
    };
  },
  methods: {
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
