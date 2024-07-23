<template>
  <v-app>
    <AppBar />
    <v-main>
<<<<<<< HEAD
=======
      <!-- <DocDialog ref="doc" prop="terms-and-conditions"></DocDialog> -->
>>>>>>> 49f26bd987c53cbc57b05d7a44834fced59dab52
      <router-view></router-view>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar.vue";
import AppFooter from "./components/AppFooter.vue";
<<<<<<< HEAD

=======
>>>>>>> 49f26bd987c53cbc57b05d7a44834fced59dab52
export default {
  components: {
    AppBar,
    AppFooter,
  },
};
<<<<<<< HEAD
</script>

<style>
.v-card-actions {
  flex-wrap: wrap;
}
.v-toolbar {
  background-color: lightgray;
}
=======
</script>

<style>
>>>>>>> 49f26bd987c53cbc57b05d7a44834fced59dab52
html {
  overflow-y: auto;
  scroll-behavior: smooth;
}
.v-application {
  font-family: sans-serif, Times;
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
<<<<<<< HEAD
  width: 4px;
=======
  width: 3px;
>>>>>>> 49f26bd987c53cbc57b05d7a44834fced59dab52
}

/* Track */
::-webkit-scrollbar-track {
  background: #004e92;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #309fff;
<<<<<<< HEAD
=======
  border-radius: 5px;
>>>>>>> 49f26bd987c53cbc57b05d7a44834fced59dab52
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
