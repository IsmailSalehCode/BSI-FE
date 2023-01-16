<template>
  <v-app>
    <AppBar />
    <v-main>
      <!-- <DocDialog ref="doc" prop="terms-and-conditions"></DocDialog> -->
      <router-view></router-view>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  components: {
    AppBar,
    AppFooter,
  },
};
</script>

<style>
html {
  overflow-y: auto;
  scroll-behavior: smooth;
}
.v-application {
  font-family: "Raleway", Times, serif !important;
}
body {
  font-size: smaller;
  /* font-size: medium; */
  margin: 0;
  padding: 0;
}
p {
  font-family: Montserrat, sans-serif;
  font-weight: 200;
  text-align: justify;
}
/* width */
::-webkit-scrollbar {
  width: 2px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #004e92;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #309fff;
  border-radius: 5px;
}
</style>
