<template>
  <v-select
    style="max-width: fit-content"
    density="compact"
    :items="languages"
    v-model="selectedLanguage"
    variant="underlined"
    theme="dark"
  ></v-select>
</template>
<script>
export default {
  watch: {
    selectedLanguage(newv) {
      this.$i18n.locale = newv;
    },
  },
  data() {
    return {
      selectedLanguage: this.$i18n.locale,
      languages: ["en", "bg"],
    };
  },
};
</script>
<style lang=""></style>
