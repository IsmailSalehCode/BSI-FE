<template>
  <div v-if="errorLoadingTags">
    <!-- todo: finish this alert to be production-ready -->
    <v-alert density="compact" type="error"
      >Възникна грешка при зареждането на ключовите думи! Натиснете
      <span @click="openErrContactDialog" class="action-span">ТУК</span>
      , за да ми кажете.</v-alert
    >
  </div>
  <div v-if="loadingTags">
    Зареждат се ключовите думи...
    <v-progress-circular
      indeterminate
      color="primary"
      :width="2"
      :size="24"
    ></v-progress-circular>
  </div>
  <div v-if="!loadingTags && !errorLoadingTags">
    <v-chip-group selected-class="text-primary">
      <v-chip size="small" v-for="tag in tags" :key="tag.title">
        {{ tag.title }}
      </v-chip>
    </v-chip-group>
  </div>
  <ErrContactDialog ref="contact_dialog" />
</template>
<script>
import TagService from "@/services/TagService";
import ErrContactDialog from "../contact-ismail/ErrorContactDialog.vue";

export default {
  components: { ErrContactDialog },
  mounted() {
    this.getTopTags();
  },
  methods: {
    handleError() {
      this.loadingTags = false;
      this.errorLoadingTags = true;
    },
    async getTopTags() {
      this.loadingTags = true;
      // revert errorLoadingTags=false after testing alert
      this.errorLoadingTags = false;
      let response = null;
      try {
        response = await TagService.getTopTags();
        if (response.status == 200) {
          this.tags = response.data;
          this.loadingTags = false;
        } else {
          throw new Error();
        }
      } catch (err) {
        // todo remove console
        console.error(err);
        this.handleError();
      }
    },
    openErrContactDialog() {
      this.$refs.contact_dialog.open();
    },
  },
  data() {
    return {
      loadingTags: true,
      errorLoadingTags: false,
      tags: [],
    };
  },
};
</script>
<style>
.action-span {
  cursor: pointer;
  text-decoration: underline;
  color: rgb(12, 75, 191);
}
</style>
