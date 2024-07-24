<template>
  <v-expansion-panels>
    <v-expansion-panel v-for="i in items" :key="i.title">
      <v-expansion-panel-title>{{ i.title }}</v-expansion-panel-title>
      <v-expansion-panel-text>
        <img-c :src="getImg(i.imgName)" />
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script>
import ImgC from "./ImgC.vue";
export default {
  components: { ImgC },
  methods: {
    getImg(name) {
      return `${this.imgrootBlueprints}/${name}`;
    },
  },
  data() {
    return {
      imgrootBlueprints: "/mhouses/blueprints",
      items: [
        {
          title: "1",
          imgName: "BOX_8x_76_(63)m2.png",
        },
        {
          title: "2",
          imgName: "BOX_10x_96_(86)m2.png",
        },
        {
          title: "3",
          imgName: "BOX_12x_115_(100)m2.png",
        },
        {
          title: "4",
          imgName: "example-house-1.png",
        },
        {
          title: "5",
          imgName: "example-house-2.png",
        },
      ],
    };
  },
};
</script>
<style></style>
