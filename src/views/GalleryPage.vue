<template>
  <v-container>
    <div>hi</div>
    <div>{{ routeParam }}</div>
  </v-container>
</template>
<script>
export default {
  computed: {
    routeParam() {
      return this.$route.params.prop;
    },
  },
};
</script>
<style></style>
