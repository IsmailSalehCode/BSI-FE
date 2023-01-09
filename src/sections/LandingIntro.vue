<template>
  <div class="hero-img" alt="NGC 2264"></div>
  <!-- <v-card>
    <v-img
      class="hero-img"
      src="https://blueskyinvest.xyz/spacengc-gallery/christmas-tree/min.jpg"
      alt="NGC 2264"
      cover
    >
      <v-card-title>SPACE</v-card-title>
    </v-img>
  </v-card> -->
</template>

<script>
export default {
  data() {
    return {
      worldBeyondTxt: "Светът отвъд",
      slides: [
        {
          text: "Земни астро феномени",
          route: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
.hero-img {
  background-image: url("https://blueskyinvest.xyz/spacengc-gallery/christmas-tree/main.jpg");
  height: 60vh;
}
</style>
