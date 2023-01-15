<template>
  <v-menu transition="slide-x-transition" theme="dark">
    <template v-slot:activator="{ props }">
      <v-btn size="small" v-bind="props">Projects</v-btn>
    </template>
    <v-list density="compact">
      <v-list-item
        link
        v-for="project in projects"
        :key="project.title"
        :to="project.path"
      >
        <v-list-item-title>{{ project.title }}</v-list-item-title>
        <v-divider
          class="mt-3"
          v-if="project.divider"
          color="white"
          inset
        ></v-divider>
      </v-list-item>
    </v-list>
  </v-menu>
  <!-- <v-menu dark rounded="b-xl t-0" offset-y>
    <template v-slot:activator="{ attrs, on }">
      <v-btn text dark v-bind="attrs" v-on="on">
        <b>Projects</b>
        <v-icon right>mdi-chevron-down</v-icon>
      </v-btn>
    </template>

    <v-list v-if="!noProjects">
      <template v-for="(project, index) in projects" :key="project.title">
        <v-list-item link :to="project.path" dense>
          <v-list-item-title>{{ project.title }}</v-list-item-title>
        </v-list-item>

        <v-divider
          v-if="project.divider"
          :key="index"
          color="white"
        ></v-divider>
      </template>
    </v-list>
    <v-list v-else>
      <v-list-item> No Uploads </v-list-item>
    </v-list>
  </v-menu> -->
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Acres Invest",
          path: "/acres-invest-jsc",
          divider: true,
        },
        {
          title: "Grand Hotel Abeer",
          path: "/posts/grand-hotel-abeer",
          divider: true,
        },
        {
          title: "Pan Ocean",
          path: "/posts/pan-ocean",
          divider: true,
        },
        {
          title: "Balkan Pearl",
          path: "/posts/balkan-pearl",
          divider: false,
        },
      ],
    };
  },
  computed: {
    noProjects() {
      return this.projects.length == 0;
    },
  },
};
</script>
<style></style>
