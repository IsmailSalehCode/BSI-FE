<template>
  <v-app theme="dark">
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
/* * {
  /* font-size: small; 
} */
a {
  color: #269aff;
  text-decoration: none;
  transition: all 0.5s;
}
a:hover {
  color: #50adff;
  text-decoration: solid underline #50adff;
}
html {
  overflow: hidden;
  scroll-behavior: smooth;
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
  background: #0068c3;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(72, 163, 255);
}
</style>
