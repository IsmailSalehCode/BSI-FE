<template>
  <v-app>
    <AppBar />
    <v-main>
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
body {
  font-size: smaller;
  /* font-size: medium; */
  margin: 0;
  padding: 0;
}
p {
  text-indent: 10px;
  font-weight: 200;
  text-align: justify;
}
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #004e92;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #309fff;
}
.customLink {
  text-decoration: none;
  color: #2188c3;
  transition: all 0.3s;
}
.customLink:hover {
  color: #1dade7;
}
</style>
