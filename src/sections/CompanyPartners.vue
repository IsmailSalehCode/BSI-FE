<template>
  <v-container fluid>
    <h2><span>Strategic Collaborators</span></h2>
    <v-row style="align-items: center">
      <v-col
        v-for="partner in pImgs"
        :key="partner.id"
        style="max-width: fit-content"
        class="pb-0"
      >
        <a :href="partner.url" target="_blank" rel="noopener noreferrer">
          <img
            style="height: 65px"
            :src="partner.filePath"
            :alt="partner.alt"
          />
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
          id: 1,
          fileName: "ibt.png",
          alt: "IBT Ltd.",
          url: "https://ibt.bg/index_bg.php",
        },
        {
          id: 2,
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
<style scoped>
h2 {
  width: 100%;
  text-align: center;
  border-bottom: 2px solid #000;
  line-height: 0.1em;
  margin: 1px 0 40px;
}

h2 span {
  background: #fff;
  padding: 0 10px;
}
</style>
