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
            ><v-btn size="small" block rounded="0" elevation="0"
              >&ltcc;</v-btn
            ></v-col
          >
          <v-col cols="6"
            ><v-btn size="small" block rounded="0" elevation="0"
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
