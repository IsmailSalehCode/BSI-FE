<template>
  <v-container fluid>
    <v-col style="text-align: center" cols="12">
      <h2>
        <a
          href="https://drive.google.com/drive/folders/1a9OYMvan8GFMs921dZkwYbymUqTX5Fer?usp=drive_link"
          target="_blank"
          class="customLink"
          >Raising Roofs</a
        >: {{ $t("explore-our-prjs") }}
      </h2>
    </v-col>
    <iframe :src="gDriveSrc" width="100%" height="500" frameborder="4"></iframe>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      gDriveId: "1a9OYMvan8GFMs921dZkwYbymUqTX5Fer",
    };
  },
  computed: {
    gDriveSrc() {
      return `https://drive.google.com/embeddedfolderview?id=${this.gDriveId}#list`;
    },
  },
};
</script>
