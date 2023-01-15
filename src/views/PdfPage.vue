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
      :src="targetUrl"
      height="100%"
      width="100%"
      frameborder="0"
      scrolling="yes"
      @load="iframeDoneLoading"
    ></iframe>
  </v-container>
</template>

<script>
import { useProjectStore } from "@/stores/projectStore";
import { mapState } from "pinia";
export default {
  computed: {
    targetId() {
      return this.$route.props.id;
    },
    ...mapState(useProjectStore, ["projects"]),
    targetUrl() {
      for (let i = 0; i < this.projects.length; i++) {
        const element = this.projects[i];
        if (element.id == this.targetId) {
          return element.pdfSrc;
        }
      }
      return null;
    },
  },
  data() {
    return {
      iframeLoading: true,
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
