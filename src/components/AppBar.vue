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
      <v-col class="hidden-xs" v-for="item in menuItems" :key="item.id">
        <v-btn style="font-size: small" :to="item.path">{{ item.title }}</v-btn>
      </v-col>
      <v-app-bar-nav-icon
        class="d-flex d-sm-none"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </template>
  </v-app-bar>
  <v-navigation-drawer
    app
    color="rgb(14, 14, 14)"
    v-model="drawer"
    theme="dark"
    location="right"
    temporary
  >
    <v-list theme="dark" nav>
      <v-list-item
        style="text-align: center"
        v-for="item in menuItems"
        :key="item.id"
        :to="item.path"
        link
      >
        <v-list-item-content>
          <v-list-item-title style="font-size: medium">{{
            item.title
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      drawer: false,
      menuItems: [
        {
          title: "Contact",
          path: "/contact",
        },
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
