import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
import ModularHouses from "./views/ModularHouses.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/modular-houses",
    name: "ModularHouses",
    component: ModularHouses,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 30,
      };
    }
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

export default router;
