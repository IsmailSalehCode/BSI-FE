<template>
  <v-container fluid style="text-align: center; height: 85vh">
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
      :src="projectOneDriveLink"
      height="100%"
      width="100%"
      frameborder="0"
      scrolling="yes"
      @load="iframeDoneLoading"
    ></iframe>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      iframeLoading: true,
      projectOneDriveLink:
        "https://onedrive.live.com/embed?cid=5E73CF73E97ABE76&resid=5E73CF73E97ABE76%211870&authkey=AO5HsZ4PArq9sCk&em=2",
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
