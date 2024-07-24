<template>
  <v-img :src="src" alt="/404.png">
    <template v-slot:placeholder>
      <div
        class="d-flex align-center justify-center"
        style="height: 200px; width: 200px"
      >
        <v-progress-circular color="blue" indeterminate></v-progress-circular>
      </div>
    </template>
  </v-img>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped></style>
