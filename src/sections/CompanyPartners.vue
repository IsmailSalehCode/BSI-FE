<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="partner in pImgs" :key="partner.alt">
        <a :href="partner.url" target="_blank" rel="noopener noreferrer">
          <v-img :src="partner.filePath" :alt="partner.alt"></v-img>
        </a>
      </v-col>
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
