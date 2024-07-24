<template>
  <v-expansion-panels multiple>
    <v-expansion-panel v-for="i in items" :key="i.title">
      <v-expansion-panel-title>
        <div v-html="i.title"></div>
      </v-expansion-panel-title>
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
          title: "76.8 (63.5) m<sup>2</sup>",
          imgName: "BOX_8x_76_(63)m2.png",
        },
        {
          title: "96 (86.5) m<sup>2</sup>",
          imgName: "BOX_10x_96_(86)m2.png",
        },
        {
          title: "115.2 (100.5) m<sup>2</sup>",
          imgName: "BOX_12x_115_(100)m2.png",
        },
        {
          title: "Example House X",
          imgName: "example-house-1.png",
        },
        {
          title: "Example House Y",
          imgName: "example-house-2.png",
        },
        {
          title: "Example House Z",
          imgName: "8.5x11 IN PB.png",
        },
      ],
    };
  },
};
</script>
<style></style>
