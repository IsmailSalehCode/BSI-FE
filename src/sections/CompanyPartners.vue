<template>
  <v-container fluid>
    <v-row style="align-items: center">
      <v-spacer></v-spacer>
      <v-col v-for="partner in pImgs" :key="partner.alt" class="pb-0">
        <a :href="partner.url" target="_blank" rel="noopener noreferrer">
          <v-img
            max-height="65px"
            :src="partner.filePath"
            :alt="partner.alt"
          ></v-img>
        </a>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      fileRoot: "https://blueskyinvest.xyz/BSI-Pictures/partners/",
      partners: [
        {
          fileName: "ibt.png",
          alt: "IBT Ltd.",
          url: "https://ibt.bg/index_bg.php",
        },
        {
          fileName: "octalight.svg",
          alt: "Octa-light",
          url: "https://www.octa-light.com/",
        },
      ],
    };
  },
  computed: {
    pImgs() {
      const partners = this.partners;
      const fileRoot = this.fileRoot;
      const res = { ...partners };
      for (let i = 0; i < partners.length; i++) {
        const partner = partners[i];
        const isoPartnerFileName = partner.fileName;
        partner.filePath = fileRoot.concat(isoPartnerFileName);
      }
      return res;
    },
  },
};
</script>
<style lang=""></style>
