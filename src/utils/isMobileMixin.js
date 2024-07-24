export const isMobileMixin = {
  computed: {
    isMobile() {
      return this.$vuetify.display.xs;
    },
  },
};
