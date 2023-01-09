<template>
  <v-app-bar id="appBar" variant="flat" density="compact">
    <v-app-bar-title>
      <v-btn
        size="small"
        class="no-active"
        to="/"
        variant="outlined"
        color="white"
        rounded
      >
        Blue Sky Invest<v-icon id="iris" right>mdi-office-building </v-icon>
      </v-btn>
    </v-app-bar-title>
    <template v-slot:append>
      <v-col class="hidden-xs" v-for="item in menuItems" :key="item.title">
        <v-btn style="font-size: smaller" @click.prevent="item.action" text>{{
          item.title
        }}</v-btn>
      </v-col>
    </template>
    <v-spacer></v-spacer>
    <div>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      logo: require("../assets/logo-bsi.png"),
      //   logo: require("../assets/astronaut.png"),
      menuItems: [
        {
          title: "Публикации",
          action: this.blank,
        },
        {
          title: "Участвай",
          action: this.blank,
        },
        {
          title: "За автора",
          // tuka shte bude i about
          action: this.blank,
        },
      ],
    };
  },
  methods: {
    blank() {
      alert("blank");
    },
    toggleAuthModal() {
      this.$refs.login_modal.toggleModal();
    },
  },
};
</script>

<style scoped>
.v-btn--active.no-active::before {
  opacity: 0 !important;
}
.v-btn--active.no-active:hover {
  text-decoration: none;
}
#blackBgColor24 {
  background-color: rgb(24, 24, 24);
}
#appBar {
  background-color: rgb(14, 14, 14);
  color: white;
}
#iris {
  margin: 0px;
  padding-left: 5px;
}
</style>
