<template>
  <v-card>
    <v-img :src="path" cover>
      <v-card-title>{{ title }}</v-card-title>
    </v-img>
  </v-card>
</template>
<script>
export default {
  props: { postId: Number, path: String, title: String },
  data() {
    return {};
  },
};
</script>
<style></style>
