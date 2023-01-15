<template>
  <v-app-bar id="appBar" variant="flat" density="compact">
    <v-app-bar-title>
      <v-btn
        size="small"
        variant="outlined"
        color="white"
        @click="routeToHome"
        rounded
      >
        Blue Sky Invest<v-icon id="iris" right>mdi-office-building </v-icon>
      </v-btn>
    </v-app-bar-title>
    <template v-slot:append>
      <BtnProjectsMenu />
      <v-col class="hidden-xs" v-for="item in menuItems" :key="item.title">
        <v-btn style="font-size: small" :to="item.path">{{ item.title }}</v-btn>
      </v-col>
      <v-app-bar-nav-icon class="d-flex d-sm-none"></v-app-bar-nav-icon>
    </template>
  </v-app-bar>
</template>

<script>
import BtnProjectsMenu from "./BtnProjectsMenu.vue";

export default {
  components: {
    BtnProjectsMenu,
  },
  data() {
    return {
      logo: require("../assets/logo-bsi.png"),
      //   logo: require("../assets/astronaut.png"),
      menuItems: [
        {
          title: "Contact",
          path: "/contact",
        },
        // {
        //   title: "Участвай",
        //   path: this.blank,
        // },
        // {
        //   title: "За автора",
        //   // tuka shte bude i about
        //   path: this.blank,
        // },
      ],
    };
  },
  methods: {
    routeToHome() {
      this.$router.push("/");
    },
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
