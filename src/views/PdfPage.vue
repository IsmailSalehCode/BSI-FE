<template>
  <!-- <v-container fluid style="text-align: center; height: 85vh">
    <v-container v-if="iframeLoading">
      <v-progress-circular
        :size="70"
        :width="7"
        color="blue"
        indeterminate
      ></v-progress-circular>
      <h4>Loading...</h4>
    </v-container>
    <iframe
      :src="routeParam"
      height="100%"
      width="100%"
      frameborder="0"
      scrolling="yes"
      @load="iframeDoneLoading"
    ></iframe>
  </v-container> -->
  <div>{{ routeParam }}</div>
</template>

<script>
export default {
  computed: {
    routeParam() {
      return this.$route.query.title;
    },
  },
  data() {
    return {
      iframeLoading: true,
      //   projectOneDriveLink:
      // "",
    };
  },
  methods: {
    iframeDoneLoading() {
      this.iframeLoading = false;
    },
  },
};
</script>

<style></style>
