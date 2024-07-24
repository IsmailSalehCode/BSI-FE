<template>
  <v-img :src="src" alt="404.png" />
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped></style>
